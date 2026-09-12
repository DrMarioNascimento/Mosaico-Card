import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const NATURES = ["QUEM", "O QUÊ", "QUANTO", "ONDE", "QUANDO", "QUANTAS VEZES", "COMO", "POR QUÊ", "QUAL/QUE TIPO"];
const FIELD_IDS = ["C1", "C2", "C3", "C4"];
const POINTS = [8, 5, 3, 2];

function text(value) { return typeof value === "string" && value.trim().length > 0; }
function normalized(value) { return String(value).normalize("NFKC").trim().toLocaleLowerCase("pt-BR"); }
function unique(values) { return new Set(values).size === values.length; }

export function validateBank(bank) {
  const errors = [];
  const add = (where, message) => errors.push(`${where}: ${message}`);
  if (bank.schemaVersion !== 2) add("catalog", "schemaVersion deve ser 2");
  if (bank.namespace !== "mosaico-nt-naa-v2") add("catalog", "namespace novo obrigatório");
  if (bank.edition !== "Nova Almeida Atualizada (NAA)") add("catalog", "edição deve ser exclusivamente NAA");
  if (!Array.isArray(bank.cases)) add("catalog", "cases deve ser uma lista");
  const cases = Array.isArray(bank.cases) ? bank.cases : [];
  if (!unique(cases.map(item => item.id))) add("catalog", "IDs de pauta duplicados");

  const checkRefs = (refs, where) => {
    if (!Array.isArray(refs) || refs.length === 0) return add(where, "ao menos uma referência é obrigatória");
    refs.forEach((ref, index) => {
      const at = `${where}[${index}]`;
      if (!text(ref?.book) || !text(ref?.passage)) add(at, "livro e trecho são obrigatórios");
      if (ref?.edition !== "NAA") add(at, "referência não é NAA");
      if (!text(ref?.sourceId) || !/^\d{4}-\d{2}-\d{2}$/.test(ref?.checkedAt || "")) add(at, "proveniência e data de consulta são obrigatórias");
    });
  };

  cases.forEach((entry, caseIndex) => {
    const at = entry.id || `cases[${caseIndex}]`;
    if (!/^nt2-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id || "")) add(at, "ID estável deve usar prefixo nt2-");
    if (!text(entry.question)) add(at, "pergunta previamente escrita é obrigatória");
    checkRefs(entry.generalReferences, `${at}.generalReferences`);
    const supported = entry.natures?.supported || [];
    const unsupported = entry.natures?.unsupported || [];
    if (supported.length < 4 || supported.length > 9) add(at, "faixa sustentada deve conter de 4 a 9 naturezas");
    if ([...supported, ...unsupported].some(nature => !NATURES.includes(nature))) add(at, "natureza desconhecida");
    if (!unique(supported) || !unique(unsupported) || supported.some(nature => unsupported.includes(nature))) add(at, "naturezas devem ser únicas e disjuntas");
    if (supported.length + unsupported.length !== NATURES.length) add(at, "todas as nove naturezas devem ser classificadas");
    if (!FIELD_IDS.includes(entry.focalFieldId) || !text(entry.focalJustification)) add(at, "campo focal e justificativa explícitos são obrigatórios");
    if (!Array.isArray(entry.fields) || entry.fields.length !== 4 || !unique(entry.fields.map(field => field.id)) || FIELD_IDS.some(id => !entry.fields.some(field => field.id === id))) add(at, "campos devem ser exatamente C1–C4");
    (entry.fields || []).forEach(field => {
      const fieldAt = `${at}.${field.id}`;
      const options = field.options || [];
      if (options.length !== 4 || !unique(options.map(option => option.id)) || !unique(options.map(option => normalized(option.text)))) add(fieldAt, "quatro alternativas distintas são obrigatórias");
      if (!options.some(option => option.id === field.answerId)) add(fieldAt, "gabarito deve apontar para uma alternativa");
      checkRefs(field.answerReferences, `${fieldAt}.answerReferences`);
    });
    const cards = entry.cards || [];
    if (cards.length < 13 || !unique(cards.map(card => card.id))) add(at, "baralho requer ao menos 13 IDs únicos (uma carta para 12 e poço), sem duplicação artificial");
    cards.forEach(card => {
      const cardAt = `${at}.cards.${card.id || "?"}`;
      if (!text(card.text) || !["essential", "relevant", "contextual"].includes(card.importance)) add(cardAt, "texto e importância válidos são obrigatórios");
      if (!Array.isArray(card.relatedFields) || !card.relatedFields.length || card.relatedFields.some(id => !FIELD_IDS.includes(id))) add(cardAt, "campos relacionados inválidos");
      if (typeof card.twoPlayerSuitable !== "boolean") add(cardAt, "adequação a dois jogadores deve ser explícita");
      if (!["early", "middle", "late", "any"].includes(card.recommendedMoment) || !text(card.narrativeFunction)) add(cardAt, "momento e função narrativa válidos são obrigatórios");
      if (!["low", "medium", "high"].includes(card.earlyRevealRisk)) add(cardAt, "risco de revelação inválido");
      if (!["single", "parallel", "complementary"].includes(card.documentScope)) add(cardAt, "abrangência documental inválida");
      checkRefs(card.references, `${cardAt}.references`);
    });
    const essentials = cards.filter(card => card.importance === "essential");
    if (essentials.length < 2) add(at, "ao menos duas pistas essenciais são necessárias para distribuição sem concentração em mesa de dois");
    if (FIELD_IDS.some(id => !cards.some(card => card.relatedFields?.includes(id)))) add(at, "o conjunto de pistas deve sustentar todos os quatro campos");
    if (cards.some(card => card.relatedFields?.length === 4 && card.earlyRevealRisk === "high")) add(at, "uma pista de alto risco não pode entregar isoladamente os quatro campos");
    const reviews = entry.review || {};
    if (!["pending", "approved", "blocked"].includes(reviews.structural) || !["pending", "approved", "blocked"].includes(reviews.biblical) || !["pending", "approved", "blocked"].includes(reviews.editorial) || !Array.isArray(reviews.ambiguities)) add(at, "estados de revisão e ambiguidades devem ser explícitos");
    if (!text(entry.reveal?.canonicalSummary) || !text(entry.reveal?.hinge)) add(at, "síntese canônica e dente são obrigatórios na revelação");
    const deckSupportsAllTables = cards.length >= 25;
    const eligible = deckSupportsAllTables && reviews.structural === "approved" && reviews.biblical === "approved" && reviews.editorial === "approved" && Array.isArray(reviews.ambiguities) && reviews.ambiguities.length === 0;
    entry.__derived = { playable: eligible, fieldOrder: [entry.focalFieldId, ...FIELD_IDS.filter(id => id !== entry.focalFieldId)], points: POINTS, blockers: deckSupportsAllTables ? [] : ["deck-insufficient-for-12-players"] };
    checkRefs(entry.reveal?.references, `${at}.reveal.references`);
  });
  return errors;
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const input = path.resolve(process.argv[2] || "data/nt-bank.json");
  const bank = JSON.parse(fs.readFileSync(input, "utf8"));
  const errors = validateBank(bank);
  if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
  else console.log(`Banco NT/NAA v2 válido: ${bank.cases.length} pauta(s), ${bank.cases.filter(item => item.__derived.playable).length} elegível(is).`);
}
