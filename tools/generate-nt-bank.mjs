import fs from "node:fs/promises";
import path from "node:path";
import { validateBank } from "./validate-nt-bank.mjs";

const input = path.resolve(process.argv[2] || "data/nt-bank.json");
const output = path.resolve(process.argv[3] || "cases-nt.js");
const bank = JSON.parse(await fs.readFile(input, "utf8"));
const errors = validateBank(bank);
if (errors.length) throw new Error(`Banco inválido:\n${errors.join("\n")}`);

const cases = bank.cases.map(entry => ({
  id: entry.id, kind: "canonical-case", title: entry.title,
  canon: { book: entry.generalReferences[0].book, referenceNAA: entry.generalReferences.map(ref => `${ref.book} ${ref.passage}`).join("; "), references: entry.generalReferences },
  grammar: entry.natures, prompt: { question: entry.question }, focalFieldId: entry.focalFieldId,
  focalJustification: entry.focalJustification, editorial: { hinge: entry.reveal.hinge },
  fields: entry.__derived.fieldOrder.map((id, index) => {
    const field = entry.fields.find(item => item.id === id);
    return { id: field.id, sourceOrder: entry.fields.indexOf(field) + 1, rotulo: field.label, opcoes: field.options.map(option => ({ id: option.id, texto: option.text })), respostaId: field.answerId, respostaCanonica: field.options.find(option => option.id === field.answerId).text, enderecoNAA: field.answerReferences.map(ref => `${ref.book} ${ref.passage}`).join("; "), answerReferences: field.answerReferences, isFocal: index === 0, pontosBase: entry.__derived.points[index] };
  }),
  deck: { status: entry.__derived.playable ? "ready" : "blocked", minPlayers: entry.__derived.minPlayers, maxPlayers: entry.__derived.maxPlayers, cards: entry.cards.map(card => ({ ...card, texto: card.text })) },
  reveal: entry.reveal, review: entry.review,
  status: { structural: entry.review.structural, biblical: entry.review.biblical, editorial: entry.review.editorial, editoriallyEligible: entry.__derived.editoriallyEligible, playable: entry.__derived.playable },
  pendingIssues: entry.__derived.playable ? [] : entry.__derived.blockers.concat(Object.entries(entry.review).filter(([key, value]) => key !== "ambiguities" && value !== "approved").map(([key, value]) => `${key}:${value}`), entry.review.ambiguities.map(value => `ambiguity:${value}`))
}));
const catalog = { schemaVersion: bank.schemaVersion, catalogVersion: bank.catalogVersion, namespace: bank.namespace, demoIsolated: true, source: { file: path.basename(input), edition: bank.edition, scope: bank.scope }, summary: { cases: cases.length, fields: cases.length * 4, editoriallyEligibleCases: cases.filter(entry => entry.status.editoriallyEligible).length, playableCases: cases.filter(entry => entry.status.playable).length, max12Cases: cases.filter(entry => entry.status.playable && entry.deck.maxPlayers === 12).length }, order: cases.map(entry => entry.id), byId: Object.fromEntries(cases.map(entry => [entry.id, entry])) };
const serialized = JSON.stringify(catalog, null, 2);
const js = `/* Gerado por tools/generate-nt-bank.mjs a partir de data/nt-bank.json. Não editar. */\n(function(root,factory){const catalog=factory();if(typeof module==="object"&&module.exports)module.exports=catalog;root.MC_NT_BANK=catalog;})(typeof globalThis!=="undefined"?globalThis:this,function(){return ${serialized};});\n`;
await fs.writeFile(output, js);
console.log(JSON.stringify({ output, summary: catalog.summary }, null, 2));
