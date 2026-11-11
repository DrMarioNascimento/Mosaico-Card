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
load("data/pipoca-catalogo.js");
load("cases-pipoca.js");
load("bank-runtime.js");
const sessao = ctx.MC_SESSAO;
const pipoca = { categoria: "pipoca" };

assert.equal(sessao.normalizar({}).categoria, "cinefilo", "salas antigas preservam o baralho");
assert.match(sessao.texto(pipoca), /Pipoca/);
assert.notEqual(banco.chaveSaco(12, pipoca), banco.chaveSaco(12, {}));
const csv = readFileSync(new URL("../data/cinema-base.csv", import.meta.url), "utf8");
const base = new Map(csv.trim().split(/\r?\n/).slice(1).map(linha => {
  const [id, formato] = linha.split(",", 2);
  return [id, { formato, selecao: linha.includes(",sucessos,") ? "sucessos" : "catalogo" }];
}));
assert.equal(base.size, 437);
assert.equal(Object.keys(banco.pipocaPorObra).length, base.size);
assert.equal(banco.elegiveis(12, pipoca).length, base.size);
assert.equal(banco.elegiveis(12, { ...pipoca, formatos: ["filme"] }).length, 353);
assert.equal(banco.elegiveis(12, { ...pipoca, formatos: ["serie"] }).length, 84);
assert.equal(banco.elegiveis(12, { ...pipoca, formatos: ["filme"], top50: true }).length, 50);
assert.equal(banco.elegiveis(12, { ...pipoca, formatos: ["serie"], top50: true }).length, 50);

let emojis = 0;
const vistos = new Set();
for (const id of banco.pipocaOrdem) {
  const original = banco.byId[id];
  const caso = banco.byId[banco.pipocaPorObra[id]];
  if (original) {
    assert.deepEqual(JSON.parse(JSON.stringify(original)), cinefilo[id]);
    assert.equal(caso.imdbId, original.imdbId);
  }
  assert.ok(!vistos.has(caso.imdbId), caso.imdbId);
  vistos.add(caso.imdbId);
  assert.equal(caso.format, base.get(caso.imdbId).formato);
  assert.equal(caso.selection, base.get(caso.imdbId).selecao);
  assert.equal(caso.fields.length, 4);
  assert.ok(original ? caso.deck.cards.length === 25 : [13, 14].includes(caso.deck.cards.length));
  assert.ok(regras.casoCompativelComMesa(caso, 12));
  assert.ok(regras.identidadeBancoCompativel(banco, { pautaId: caso.id, bankIdentity: banco }));
  assert.equal(new Set(caso.deck.cards.map(card => card.texto)).size, caso.deck.cards.length);
  for (const n of [2, 6, 7, 12]) {
    const jogadores = Array.from({ length: n }, (_, i) => "j" + i);
    const ids = Array.from(caso.deck.cards, carta => carta.id);
    const { maosPorJogador, monte } = regras.distribuirPistas(ids, [], jogadores, null, caso.deck.compact);
    const porJogador = !caso.deck.compact || ids.length >= n * 2 + 1 ? 2 : 1;
    assert.ok(Object.values(maosPorJogador).every(mao => mao.length === porJogador));
    assert.ok(monte.length >= 1);
    assert.equal(new Set(Object.values(maosPorJogador).flat().concat(monte)).size, ids.length);
  }
  for (const field of caso.fields) {
    assert.equal(new Set(field.opcoes.map(o => o.texto)).size, 4);
    assert.ok(field.opcoes.some(o => o.id === field.respostaId));
  }
  const cartasEmoji = caso.deck.cards.filter(card => card.marca === "Emojis");
  assert.ok(cartasEmoji.length <= 1);
  for (const card of cartasEmoji) assert.doesNotMatch(card.texto, /[\p{L}\p{N}]/u);
  emojis += cartasEmoji.length;
}
assert.deepEqual(vistos, new Set(base.keys()));
assert.ok(emojis > 0 && emojis < banco.pipocaOrdem.length);

const serie = banco.sortear(12, { ...pipoca, formatos: ["serie"], top50: true });
assert.equal(serie.caso.format, "serie");
assert.equal(serie.caso.selection, "sucessos");
assert.equal(banco.byId[serie.id], serie.caso, "quem reconecta localiza a pauta Pipoca pelo ID");
const outra = banco.sortear(12, { formatos: ["serie"], top50: true });
assert.ok(!outra.id.endsWith("-pipoca"));
assert.notEqual(outra.caso.imdbId, serie.caso.imdbId, "evita repetir a obra ao trocar de categoria");

const sorteadas = new Set();
for (let i = 0; i < base.size; i += 1) {
  const rodada = banco.sortear(12, pipoca);
  assert.ok(!sorteadas.has(rodada.caso.imdbId), "não repete título no mesmo saco");
  sorteadas.add(rodada.caso.imdbId);
}
assert.deepEqual(sorteadas, vistos, "o sorteio inclui o acervo inteiro");
console.log("ok Pipoca e Cinéfilo");
