import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateBank, normalized } from "../tools/validate-cinema-bank.mjs";

const bank = JSON.parse(readFileSync(new URL("../data/cinema-bank.json", import.meta.url), "utf8"));
assert.deepEqual(validateBank(bank), [], "o banco deve ser válido");
assert.equal(bank.namespace, "mosaico-cinema-series-v1");
assert.ok(bank.cases.every(c => c.releaseYear >= 2001), "recorte: a partir de 2001");
assert.ok(bank.cases.every(c => ["filme", "serie"].includes(c.format)));

// Uma pista que entrega o título deve ser recusada.
const vazada = JSON.parse(JSON.stringify(bank));
vazada.cases[0].cards[0].text = "Esta é a série " + vazada.cases[0].title + ".";
assert.ok(validateBank(vazada).some(e => e.includes("contém literalmente a resposta")));
// Obra anterior a 2001 deve ser recusada.
const antiga = JSON.parse(JSON.stringify(bank));
antiga.cases[0].releaseYear = 1999;
assert.ok(validateBank(antiga).some(e => e.includes("a partir de 2001")));
// Título de sessão não pode revelar a obra.
const titulo = JSON.parse(JSON.stringify(bank));
titulo.cases[0].sessionTitle = "Sessão " + titulo.cases[0].title;
assert.ok(validateBank(titulo).some(e => e.includes("título de sessão")));
assert.equal(normalized("Ação À Noite!"), "acao a noite");

// A base de títulos tem 50 Sucessos por formato.
const base = readFileSync(new URL("../data/cinema-base.csv", import.meta.url), "utf8").trim().split(/\r?\n/).slice(1);
const sucessos = base.filter(l => l.includes(",sucessos,"));
assert.equal(sucessos.filter(l => l.includes(",filme,")).length, 50);
assert.equal(sucessos.filter(l => l.includes(",serie,")).length, 50);
console.log("ok banco cinema", bank.cases.length, "pauta(s);", base.length, "títulos na base");
