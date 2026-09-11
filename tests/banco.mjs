import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const catalog = require("../cases-nt.js");
const cases = catalog.order.map((id) => catalog.byId[id]);
const fields = cases.flatMap((entry) => entry.fields);

assert.equal(catalog.schemaVersion, 1);
assert.equal(catalog.namespace, "nt");
assert.equal(catalog.demoIsolated, true);
assert.equal(cases.length, 145);
assert.equal(fields.length, 580);
assert.deepEqual(
  catalog.order,
  Array.from({ length: 145 }, (_, index) => `nt-${String(index + 1).padStart(3, "0")}`),
);

cases.forEach((entry) => {
  assert.equal(entry.kind, "canonical-case");
  assert.deepEqual(entry.fields.map((field) => field.id), ["C1", "C2", "C3", "C4"]);
  assert.equal(entry.focalFieldId, null);
  assert.equal(entry.deck.status, "missing");
  assert.deepEqual(entry.deck.cards, []);
  assert.equal(entry.status.playable, false);
  assert.ok(entry.pendingIssues.includes("missing-deck"));
  assert.ok(entry.pendingIssues.includes("missing-focal-field"));
});

assert.equal(catalog.byId.ovelha, undefined);
assert.equal(catalog.byId["demo-ovelha"], undefined);
assert.equal(cases.some((entry) => entry.kind === "demo"), false);

assert.equal(catalog.summary.cases, 145);
assert.equal(catalog.summary.fields, 580);
assert.equal(catalog.summary.casesWithCompleteOptions, 143);
assert.equal(catalog.summary.casesWithValidOptions, 142);
assert.equal(catalog.summary.fieldsWithCompleteOptions, 572);
assert.equal(catalog.summary.safeAnswerKeys, 87);
assert.equal(catalog.summary.playableCases, 0);

assert.equal(catalog.byId["nt-020"].status.options, "blocked");
assert.equal(catalog.byId["nt-031"].status.options, "blocked");
assert.ok(catalog.byId["nt-035"].pendingIssues.includes("duplicate-options:C1"));

// O recorte 52 pertence ao banco canônico; ele não é a demonstração especial.
assert.equal(catalog.byId["nt-052"].title, "A ovelha perdida");
assert.equal(catalog.byId["nt-052"].kind, "canonical-case");

console.log("Banco NT validado: 145 casos, 580 campos e demonstração da ovelha isolada.");
