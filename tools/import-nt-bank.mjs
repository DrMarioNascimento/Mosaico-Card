import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const REPO_DIR = path.resolve(SCRIPT_DIR, "..");
const DEFAULT_INPUT = path.resolve(REPO_DIR, "../upload/MOSAICO_NT_Banco_145.xlsx");
const DEFAULT_OUTPUT = path.resolve(REPO_DIR, "cases-nt.js");

const inputPath = path.resolve(process.argv[2] || DEFAULT_INPUT);
const outputPath = path.resolve(process.argv[3] || DEFAULT_OUTPUT);

const NATURES = [
  "QUEM",
  "O QUÊ",
  "QUANTO",
  "ONDE",
  "QUANDO",
  "QUANTAS VEZES",
  "COMO",
  "POR QUÊ",
  "QUAL",
];

function requireValue(value, label) {
  if (value === null || value === undefined || String(value).trim() === "") {
    throw new Error(`Valor obrigatório ausente: ${label}`);
  }
  return value;
}

function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("pt-BR")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function parseNatures(value) {
  const text = String(value ?? "").trim();
  if (!text || text === "—") return [];
  return NATURES.filter((nature) => text.includes(nature));
}

function rowsFromSheet(sheet) {
  const values = sheet.getUsedRange(true).values;
  const [headers, ...rows] = values;
  return rows
    .filter((row) => row.some((value) => value !== null && value !== undefined && String(value).trim() !== ""))
    .map((row, index) => {
      const record = { __row: index + 2 };
      headers.forEach((header, column) => {
        if (header !== null && header !== undefined && String(header).trim() !== "") {
          record[String(header)] = row[column] ?? null;
        }
      });
      return record;
    });
}

function sameValue(left, right) {
  return String(left ?? "").trim() === String(right ?? "").trim();
}

function safeAnswerId(fieldId, canonicalAnswer, options) {
  const normalizedAnswer = normalizeText(canonicalAnswer);
  if (!normalizedAnswer) return null;
  const matches = options.filter((option) => normalizeText(option.texto) === normalizedAnswer);
  return matches.length === 1 ? matches[0].id : null;
}

function fieldStatus(field) {
  if (field.opcoes.length !== 4) return "missing-options";
  const normalized = field.opcoes.map((option) => normalizeText(option.texto));
  if (new Set(normalized).size !== normalized.length) return "duplicate-options";
  return field.respostaId ? "answer-key-safe" : "answer-key-pending";
}

function buildCase(bankRow, fieldRows) {
  const sourceId = Number(requireValue(bankRow.ID, `Banco!A${bankRow.__row}`));
  const id = `nt-${String(sourceId).padStart(3, "0")}`;
  const fields = fieldRows
    .sort((a, b) => Number(String(a.Campo).slice(1)) - Number(String(b.Campo).slice(1)))
    .map((row) => {
      const fieldId = String(requireValue(row.Campo, `Campos!F${row.__row}`));
      const options = [1, 2, 3, 4]
        .map((number) => row[`Opção ${number}`])
        .filter((value) => value !== null && value !== undefined && String(value).trim() !== "")
        .map((texto, index) => ({ id: `${fieldId}-O${index + 1}`, texto: String(texto).trim() }));
      const field = {
        id: fieldId,
        sourceOrder: Number(fieldId.slice(1)),
        rotulo: String(requireValue(row.Rótulo, `Campos!G${row.__row}`)).trim(),
        respostaCanonica: String(requireValue(row.Correta, `Campos!H${row.__row}`)).trim(),
        enderecoNAA: String(requireValue(row["Endereço NAA"], `Campos!I${row.__row}`)).trim(),
        opcoes: options,
        respostaId: null,
        isFocal: null,
        pontosBase: null,
        sourceRow: row.__row,
      };
      field.respostaId = safeAnswerId(fieldId, field.respostaCanonica, options);
      field.status = fieldStatus(field);
      return field;
    });

  const pendingIssues = ["missing-deck", "missing-focal-field"];
  fields.forEach((field) => {
    if (field.status === "missing-options") pendingIssues.push(`missing-options:${field.id}`);
    if (field.status === "duplicate-options") pendingIssues.push(`duplicate-options:${field.id}`);
    if (!field.respostaId) pendingIssues.push(`missing-answer-key:${field.id}`);
  });

  const completeOptions = fields.every((field) => field.opcoes.length === 4 && field.status !== "duplicate-options");
  const safeAnswerCount = fields.filter((field) => field.respostaId).length;

  return {
    id,
    sourceId,
    kind: "canonical-case",
    title: String(requireValue(bankRow.Recorte, `Banco!C${bankRow.__row}`)).trim(),
    canon: {
      book: String(requireValue(bankRow.Livro, `Banco!D${bankRow.__row}`)).trim(),
      referenceNAA: String(requireValue(bankRow["Referência NAA"], `Banco!E${bankRow.__row}`)).trim(),
      sourceScope: String(requireValue(bankRow.Modo, `Banco!F${bankRow.__row}`)).trim(),
    },
    grammar: {
      band: Number(requireValue(bankRow.Faixa, `Banco!B${bankRow.__row}`)),
      supported: parseNatures(bankRow["Linhas que fecham"]),
      unsupported: parseNatures(bankRow["Em branco"]),
      focus: parseNatures(bankRow.Foco),
      focusLabel: String(requireValue(bankRow.Foco, `Banco!I${bankRow.__row}`)).trim(),
    },
    prompt: {
      question: String(requireValue(bankRow.Pergunta, `Banco!K${bankRow.__row}`)).trim(),
    },
    editorial: {
      expensiveClue: String(requireValue(bankRow["Pista cara"], `Banco!J${bankRow.__row}`)).trim(),
      hinge: String(requireValue(bankRow.Dente, `Banco!L${bankRow.__row}`)).trim(),
      guardrail: String(requireValue(bankRow["Não inventa"], `Banco!AC${bankRow.__row}`)).trim(),
    },
    provenance: {
      sourceDocument: String(requireValue(bankRow["Quadro / fonte"], `Banco!AD${bankRow.__row}`)).trim(),
      sourceRow: bankRow.__row,
    },
    focalFieldId: null,
    deck: {
      status: "missing",
      cards: [],
    },
    fields,
    status: {
      metadata: "ready",
      fields: fields.length === 4 ? "ready" : "blocked",
      options: completeOptions ? "ready" : "blocked",
      answerKey: safeAnswerCount === 4 ? "ready" : safeAnswerCount > 0 ? "partial" : "blocked",
      focalField: "blocked",
      deck: "blocked",
      playable: false,
    },
    pendingIssues,
  };
}

function validateStructuralInvariants(bankRows, fieldsRows, cases) {
  if (bankRows.length !== 145) throw new Error(`Banco deve ter 145 casos; encontrou ${bankRows.length}.`);
  if (fieldsRows.length !== 580) throw new Error(`Campos deve ter 580 linhas; encontrou ${fieldsRows.length}.`);

  const ids = bankRows.map((row) => Number(row.ID));
  const expectedIds = Array.from({ length: 145 }, (_, index) => index + 1);
  if (JSON.stringify(ids) !== JSON.stringify(expectedIds)) {
    throw new Error("Os IDs do Banco não são a sequência única e ordenada de 1 a 145.");
  }

  if (cases.some((entry) => entry.id === "ovelha" || entry.id === "demo-ovelha" || entry.kind === "demo")) {
    throw new Error("A demonstração da ovelha não pode entrar no catálogo NT.");
  }

  cases.forEach((entry) => {
    if (entry.fields.length !== 4) throw new Error(`${entry.id} não tem exatamente quatro campos.`);
    const fieldIds = entry.fields.map((field) => field.id).join(",");
    if (fieldIds !== "C1,C2,C3,C4") throw new Error(`${entry.id} não contém C1,C2,C3,C4 em ordem.`);
  });
}

const workbook = await SpreadsheetFile.importXlsx(await FileBlob.load(inputPath));
const bankRows = rowsFromSheet(workbook.worksheets.getItem("Banco"));
const fieldsRows = rowsFromSheet(workbook.worksheets.getItem("Campos"));

const fieldsBySourceId = new Map();
fieldsRows.forEach((row) => {
  const sourceId = Number(row.ID);
  if (!fieldsBySourceId.has(sourceId)) fieldsBySourceId.set(sourceId, []);
  fieldsBySourceId.get(sourceId).push(row);
});

bankRows.forEach((bankRow) => {
  const related = fieldsBySourceId.get(Number(bankRow.ID)) || [];
  related.forEach((fieldRow) => {
    const comparisons = [
      ["Faixa", "Faixa"],
      ["Recorte", "Recorte"],
      ["Livro", "Livro"],
      ["Referência NAA", "Referência NAA"],
      ["Pergunta da partida", "Pergunta"],
    ];
    comparisons.forEach(([fieldColumn, bankColumn]) => {
      if (!sameValue(fieldRow[fieldColumn], bankRow[bankColumn])) {
        throw new Error(`Divergência entre Banco e Campos no ID ${bankRow.ID}: ${fieldColumn}.`);
      }
    });
  });
});

const cases = bankRows.map((row) => buildCase(row, fieldsBySourceId.get(Number(row.ID)) || []));
validateStructuralInvariants(bankRows, fieldsRows, cases);

const summary = {
  cases: cases.length,
  fields: cases.reduce((total, entry) => total + entry.fields.length, 0),
  casesWithCompleteOptions: cases.filter((entry) => entry.fields.every((field) => field.opcoes.length === 4)).length,
  casesWithValidOptions: cases.filter((entry) => entry.status.options === "ready").length,
  fieldsWithCompleteOptions: cases.flatMap((entry) => entry.fields).filter((field) => field.opcoes.length === 4).length,
  safeAnswerKeys: cases.flatMap((entry) => entry.fields).filter((field) => field.respostaId).length,
  playableCases: cases.filter((entry) => entry.status.playable).length,
};

const catalog = {
  schemaVersion: 1,
  namespace: "nt",
  demoIsolated: true,
  source: {
    file: path.basename(inputPath),
    sheets: ["Banco", "Campos"],
    edition: "Nova Almeida Atualizada",
  },
  summary,
  order: cases.map((entry) => entry.id),
  byId: Object.fromEntries(cases.map((entry) => [entry.id, entry])),
};

const serialized = JSON.stringify(catalog, null, 2);
const output = `/* Gerado mecanicamente por tools/import-nt-bank.mjs. Não editar à mão. */\n` +
  `(function (root, factory) {\n` +
  `  const catalog = factory();\n` +
  `  if (typeof module === "object" && module.exports) module.exports = catalog;\n` +
  `  root.MC_NT_BANK = catalog;\n` +
  `})(typeof globalThis !== "undefined" ? globalThis : this, function () {\n` +
  `  return ${serialized};\n` +
  `});\n`;

await fs.writeFile(outputPath, output, "utf8");
console.log(JSON.stringify({ output: outputPath, summary }, null, 2));
