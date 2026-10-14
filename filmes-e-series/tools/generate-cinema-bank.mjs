import fs from "node:fs/promises";
import path from "node:path";
import { validateBank } from "./validate-cinema-bank.mjs";

/* Gera cases-cinema.js a partir de data/cinema-bank.json.
   A seleção (sucessos/catalogo) vem da base de títulos (data/cinema-base.csv), pela coluna imdbId. */
const input = path.resolve(process.argv[2] || "data/cinema-bank.json");
const baseFile = path.resolve(process.argv[3] || "data/cinema-base.csv");
const output = path.resolve(process.argv[4] || "cases-cinema.js");

export function readBase(csv) {
  const [header, ...lines] = csv.trim().split(/\r?\n/);
  const cols = header.split(",");
  const parse = line => {
    const out = []; let cur = ""; let quoted = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (quoted) {
        if (ch === "\"" && line[i + 1] === "\"") { cur += "\""; i += 1; }
        else if (ch === "\"") quoted = false;
        else cur += ch;
      } else if (ch === "\"") quoted = true;
      else if (ch === ",") { out.push(cur); cur = ""; }
      else cur += ch;
    }
    out.push(cur);
    return Object.fromEntries(cols.map((c, i) => [c, out[i] ?? ""]));
  };
  return lines.map(parse);
}

const bank = JSON.parse(await fs.readFile(input, "utf8"));
const base = readBase(await fs.readFile(baseFile, "utf8"));
const byImdb = Object.fromEntries(base.map(row => [row.imdbId, row]));
const errors = validateBank(bank);
bank.cases.forEach(entry => { if (!byImdb[entry.imdbId]) errors.push(`${entry.id}: imdbId ${entry.imdbId} não está na base de títulos`); });
if (errors.length) throw new Error(`Banco inválido:\n${errors.join("\n")}`);

// Embaralha as alternativas de forma determinística (mesma ordem para todos os jogadores),
// para que a resposta certa não fique sempre na mesma posição.
function seededShuffle(list, seed) {
  let h = 2166136261;
  for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619) >>> 0; }
  const out = list.slice();
  for (let i = out.length - 1; i > 0; i -= 1) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0; h = Math.imul(h ^ (h >>> 13), 3266489909) >>> 0; h ^= h >>> 16;
    const j = (h >>> 0) % (i + 1);
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
const refText = refs => refs.map(ref => ref.source).filter((v, i, a) => a.indexOf(v) === i).join("; ");
const cases = bank.cases.map(entry => ({
  id: entry.id, kind: "canonical-case", imdbId: entry.imdbId, title: entry.title, sessionTitle: entry.sessionTitle,
  format: entry.format, selection: byImdb[entry.imdbId].selecao === "sucessos" ? "sucessos" : "catalogo",
  releaseYear: entry.releaseYear, rating: entry.rating,
  canon: { source: bank.canonicalSource, reference: refText(entry.generalReferences), references: entry.generalReferences },
  prompt: { question: entry.question }, focalFieldId: entry.focalFieldId,
  focalJustification: entry.focalJustification, editorial: { hinge: entry.reveal.hinge },
  fields: entry.__derived.fieldOrder.map((id, index) => {
    const field = entry.fields.find(item => item.id === id);
    return { id: field.id, sourceOrder: entry.fields.indexOf(field) + 1, rotulo: field.label, opcoes: seededShuffle(field.options, entry.id + ":" + field.id).map(option => ({ id: option.id, texto: option.text })), respostaId: field.answerId, respostaCanonica: field.options.find(option => option.id === field.answerId).text + (Array.isArray(field.coProtagonists) && field.coProtagonists.length ? " (com " + field.coProtagonists.join(", ") + ")" : ""), endereco: refText(field.answerReferences), answerReferences: field.answerReferences, isFocal: index === 0, pontosBase: entry.__derived.points[index] };
  }),
  deck: { status: entry.__derived.playable ? "ready" : "blocked", minPlayers: entry.__derived.minPlayers, maxPlayers: entry.__derived.maxPlayers, cards: entry.cards.map(card => ({ ...card, texto: card.text })) },
  reveal: entry.reveal, review: entry.review,
  status: { structural: entry.review.structural, factual: entry.review.factual, spoiler: entry.review.spoiler, editorial: entry.review.editorial, editoriallyEligible: entry.__derived.editoriallyEligible, playable: entry.__derived.playable },
  pendingIssues: entry.__derived.playable ? [] : entry.__derived.blockers.concat(Object.entries(entry.review).filter(([key, value]) => key !== "ambiguities" && value !== "approved").map(([key, value]) => `${key}:${value}`), entry.review.ambiguities.map(value => `ambiguity:${value}`))
}));
const count = (fn) => cases.filter(fn).length;
const catalog = {
  schemaVersion: bank.schemaVersion, catalogVersion: bank.catalogVersion, namespace: bank.namespace, demoIsolated: true,
  source: { file: path.basename(input), base: path.basename(baseFile), canonicalSource: bank.canonicalSource, scope: bank.scope },
  summary: {
    cases: cases.length, playableCases: count(c => c.status.playable),
    films: count(c => c.format === "filme"), series: count(c => c.format === "serie"),
    sucessos: count(c => c.selection === "sucessos"), max12Cases: count(c => c.status.playable && c.deck.maxPlayers === 12),
    baseTitles: base.length, baseSucessos: base.filter(row => row.selecao === "sucessos").length
  },
  order: cases.map(entry => entry.id), byId: Object.fromEntries(cases.map(entry => [entry.id, entry]))
};
const js = `/* Gerado por tools/generate-cinema-bank.mjs a partir de data/cinema-bank.json e data/cinema-base.csv. Não editar. */\n(function(root,factory){const catalog=factory();if(typeof module==="object"&&module.exports)module.exports=catalog;root.MC_CINEMA_BANK=catalog;})(typeof globalThis!=="undefined"?globalThis:this,function(){return ${JSON.stringify(catalog, null, 2)};});\n`;
await fs.writeFile(output, js);
console.log(JSON.stringify({ output, summary: catalog.summary }, null, 2));
