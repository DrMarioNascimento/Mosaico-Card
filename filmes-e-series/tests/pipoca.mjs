import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { createContext, runInContext } from "node:vm";

const require = createRequire(import.meta.url);
const regras = require("../game-core.js");
const storage = new Map();
const ctx = createContext({
  location: { search: "" }, URLSearchParams,
  localStorage: { getItem: k => storage.get(k), setItem: (k, v) => storage.set(k, v) }
});
ctx.window = ctx;
const load = file => runInContext(readFileSync(new URL("../" + file, import.meta.url), "utf8"), ctx);
load("sessao.js");
load("cases-cinema.js");
const banco = ctx.MC_CINEMA_BANK;
const cinefilo = JSON.parse(JSON.stringify(banco.byId));
load("cases-pipoca.js");
load("bank-runtime.js");
const sessao = ctx.MC_SESSAO;
const pipoca = { categoria: "pipoca" };

assert.equal(sessao.normalizar({}).categoria, "cinefilo", "salas antigas preservam o baralho");
assert.match(sessao.texto(pipoca), /Pipoca/);
assert.notEqual(banco.chaveSaco(12, pipoca), banco.chaveSaco(12, {}));
assert.equal(Object.keys(banco.pipocaPorObra).length, banco.order.length);
assert.equal(banco.elegiveis(12, pipoca).length, banco.summary.max12Cases);

let emojis = 0;
for (const id of banco.order) {
  const original = banco.byId[id];
  const caso = banco.byId[banco.pipocaPorObra[id]];
  assert.deepEqual(JSON.parse(JSON.stringify(original)), cinefilo[id]);
  assert.equal(caso.imdbId, original.imdbId);
  assert.equal(caso.format, original.format);
  assert.equal(caso.selection, original.selection);
  assert.equal(caso.fields.length, 4);
  assert.equal(caso.deck.cards.length, 25);
  assert.ok(regras.casoCompativelComMesa(caso, 12));
  assert.ok(regras.identidadeBancoCompativel(banco, { pautaId: caso.id, bankIdentity: banco }));
  assert.equal(new Set(caso.deck.cards.map(card => card.texto)).size, 25);
  for (const field of caso.fields) {
    assert.equal(new Set(field.opcoes.map(o => o.texto)).size, 4);
    assert.ok(field.opcoes.some(o => o.id === field.respostaId));
  }
  const cartasEmoji = caso.deck.cards.filter(card => card.marca === "Emojis");
  assert.ok(cartasEmoji.length <= 1);
  for (const card of cartasEmoji) assert.doesNotMatch(card.texto, /[\p{L}\p{N}]/u);
  emojis += cartasEmoji.length;
}
assert.ok(emojis > 0 && emojis < banco.order.length);

const serie = banco.sortear(12, { ...pipoca, formatos: ["serie"], top50: true });
assert.equal(serie.caso.format, "serie");
assert.equal(serie.caso.selection, "sucessos");
assert.equal(banco.byId[serie.id], serie.caso, "quem reconecta localiza a pauta Pipoca pelo ID");
const outra = banco.sortear(12, { formatos: ["serie"], top50: true });
assert.ok(!outra.id.endsWith("-pipoca"));
assert.notEqual(outra.caso.imdbId, serie.caso.imdbId, "evita repetir a obra ao trocar de categoria");
console.log("ok Pipoca e Cinéfilo");
