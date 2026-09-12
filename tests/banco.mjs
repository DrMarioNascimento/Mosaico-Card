import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { validateBank } from "../tools/validate-nt-bank.mjs";

const require = createRequire(import.meta.url);
const catalog = require("../cases-nt.js");
assert.equal(catalog.schemaVersion, 2);
assert.equal(catalog.namespace, "mosaico-nt-naa-v2");
assert.equal(catalog.demoIsolated, true);
assert.equal(catalog.summary.cases, catalog.order.length);
assert.equal(catalog.summary.fields, catalog.order.length * 4);
assert.equal(catalog.summary.playableCases, catalog.order.filter(id => catalog.byId[id].status.playable).length);
assert.equal(catalog.byId.ovelha, undefined);
assert.equal(catalog.byId["demo-ovelha"], undefined);
assert.equal(catalog.byId["nt2-mateus-multidao"], undefined, "episódio paralelo consolidado não permanece duplicado");
assert.equal(catalog.byId["nt2-hebreus-testemunhos-fe"].status.playable, false, "lista sem dente dedutivo permanece bloqueada");
assert.ok(catalog.byId["nt2-hebreus-testemunhos-fe"].pendingIssues.includes("editorial:blocked"));
assert.ok(catalog.byId["nt2-apocalipse-trono-cordeiro"].status.playable);
assert.ok(catalog.byId["nt2-apocalipse-mulher-dragao"].status.playable);
assert.ok(catalog.byId["nt2-apocalipse-nova-jerusalem"].status.playable);
const pistaAt837 = catalog.byId["nt2-atos-filipe-eunuco"].deck.cards.find(card => card.references.some(reference => reference.passage === "8.37"));
assert.match(pistaAt837.text, /manuscritos mais recentes/, "At 8.37 exige ressalva textual explícita");
assert.equal(catalog.byId["nt2-atos-filipe-eunuco"].fields.some(field => field.answerReferences.some(reference => reference.passage === "8.37")), false, "a variante não determina gabarito");
assert.equal(catalog.order.some(id => /^nt-\d{3}$/.test(id)), false, "IDs descartados não voltam ao catálogo");
catalog.order.forEach(id => {
  const entry = catalog.byId[id];
  const expectedPlayable = entry.deck.cards.length >= 25 && entry.review.structural === "approved" && entry.review.biblical === "approved" && entry.review.editorial === "approved" && entry.review.ambiguities.length === 0;
  assert.equal(entry.status.playable, expectedPlayable);
  assert.equal(entry.deck.status, entry.deck.cards.length >= 25 ? "ready" : "blocked");
  assert.equal(entry.fields.length, 4);
  assert.deepEqual(entry.fields.map(field => field.pontosBase), [8, 5, 3, 2]);
  assert.ok(entry.fields.every(field => field.respostaCanonica && field.enderecoNAA && field.answerReferences.length));
  assert.ok(entry.reveal.canonicalSummary && entry.reveal.hinge && entry.reveal.references.length);
  assert.ok(entry.deck.cards.length >= 13);
  if (entry.deck.cards.length < 25) assert.ok(entry.pendingIssues.includes("deck-insufficient-for-12-players"));
});

const ref = { book: "Mateus", passage: "1.1", edition: "NAA", sourceId: "fonte-identificada", checkedAt: "2026-09-12" };
const fields = ["C1", "C2", "C3", "C4"].map((id, fieldIndex) => ({
  id, label: `Campo ${id}`,
  options: [1, 2, 3, 4].map(number => ({ id: `${id}-O${number}`, text: `Opção ${fieldIndex}-${number}` })),
  answerId: `${id}-O1`, answerReferences: [ref]
}));
const cards = Array.from({ length: 25 }, (_, index) => ({ id: `P${index + 1}`, text: `Fato ${index + 1}`, importance: index < 12 ? "essential" : "relevant", relatedFields: [`C${index % 4 + 1}`], recommendedMoment: "any", narrativeFunction: "Apoiar dedução", earlyRevealRisk: "low", twoPlayerSuitable: true, specialExpensive: false, documentScope: "single", references: [ref] }));
const valid = { schemaVersion: 2, catalogVersion: "teste", namespace: "mosaico-nt-naa-v2", edition: "Nova Almeida Atualizada (NAA)", scope: "Novo Testamento (27 livros)", cases: [{ id: "nt2-teste", title: "Teste estrutural não editorial", generalReferences: [ref], question: "Pergunta pronta?", natures: { supported: ["QUEM", "O QUÊ", "ONDE", "COMO"], unsupported: ["QUANTO", "QUANDO", "QUANTAS VEZES", "POR QUÊ", "QUAL/QUE TIPO"] }, focalFieldId: "C3", focalJustification: "Justificativa de teste", fields, cards, reveal: { canonicalSummary: "Síntese", hinge: "Dente", references: [ref] }, review: { structural: "approved", biblical: "approved", editorial: "approved", ambiguities: [] } }] };
assert.deepEqual(validateBank(structuredClone(valid)), []);
const derived = structuredClone(valid); validateBank(derived);
assert.equal(derived.cases[0].__derived.playable, true);
assert.deepEqual(derived.cases[0].__derived.fieldOrder, ["C3", "C1", "C2", "C4"]);
assert.deepEqual(derived.cases[0].__derived.points, [8, 5, 3, 2]);
const shortDeck = structuredClone(valid);
shortDeck.cases[0].cards = shortDeck.cases[0].cards.slice(0, 13);
assert.deepEqual(validateBank(shortDeck), []);
assert.equal(shortDeck.cases[0].__derived.playable, false);
assert.deepEqual(shortDeck.cases[0].__derived.blockers, ["deck-insufficient-for-12-players"]);

const duplicate = structuredClone(valid);
duplicate.cases[0].fields[0].options[1].text = duplicate.cases[0].fields[0].options[0].text;
assert.ok(validateBank(duplicate).some(error => error.includes("alternativas distintas")));
const ambiguous = structuredClone(valid);
ambiguous.cases[0].review.ambiguities.push("harmonização discutível");
validateBank(ambiguous);
assert.equal(ambiguous.cases[0].__derived.playable, false);
const wrongEdition = structuredClone(valid);
wrongEdition.cases[0].fields[0].answerReferences[0].edition = "ARA";
assert.ok(validateBank(wrongEdition).some(error => error.includes("não é NAA")));

console.log("Banco NT/NAA v2 e bloqueios negativos validados sem meta numérica.");

// Integração global: cada pauta elegível comporta mãos de duas cartas e poço em 2–12.
const regras = require("../game-core.js");
for (const id of catalog.order.filter(caseId => catalog.byId[caseId].status.playable)) {
  const entry = catalog.byId[id];
  assert.equal(entry.fields.length, 4);
  assert.ok(entry.reveal.canonicalSummary && entry.reveal.hinge && entry.reveal.references.length);
  for (let quantidade = 2; quantidade <= 12; quantidade += 1) {
    const jogadores = Array.from({ length: quantidade }, (_, index) => `j${index}`);
    const ids = entry.deck.cards.map(card => card.id);
    const essenciais = entry.deck.cards.filter(card => card.importance === "essential").map(card => card.id);
    const distribuicao = regras.distribuirPistas(ids, essenciais, jogadores, items => items.slice());
    assert.ok(jogadores.every(jogador => distribuicao.maosPorJogador[jogador].length === 2), `${id}: mão inválida para ${quantidade}`);
    assert.equal(distribuicao.monte.length, ids.length - quantidade * 2, `${id}: poço inválido para ${quantidade}`);
  }
}
