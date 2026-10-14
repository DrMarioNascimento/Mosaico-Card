import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createContext, runInContext } from "node:vm";

const load = f => readFileSync(new URL("../" + f, import.meta.url), "utf8");
function montar(search) {
  const storage = new Map();
  const ctx = createContext({ window: {}, globalThis: {}, location: { search: search || "" }, URLSearchParams, localStorage: { getItem: k => storage.get(k) ?? null, setItem: (k, v) => storage.set(k, v) }, Math, JSON });
  ctx.globalThis = ctx; ctx.window = ctx;
  runInContext(load("sessao.js"), ctx);
  runInContext(load("cases-cinema.js"), ctx);
  // Pautas sintéticas para exercitar os filtros (formato × Top 50), sem depender do conteúdo editorial.
  const bank = ctx.MC_CINEMA_BANK;
  // As pautas reais passam a valer como "em revisão" neste teste, para que só as sintéticas entrem no sorteio normal.
  bank.order.forEach(id => { bank.byId[id] = Object.assign({}, bank.byId[id], { status: Object.assign({}, bank.byId[id].status, { playable: false }) }); });
  const modelo = bank.byId[bank.order[0]];
  [["t-filme-top", "filme", "sucessos"], ["t-filme-cat", "filme", "catalogo"], ["t-serie-top", "serie", "sucessos"], ["t-serie-cat", "serie", "catalogo"]].forEach(([id, format, selection]) => {
    bank.byId[id] = Object.assign({}, modelo, { id, format, selection, status: Object.assign({}, modelo.status, { playable: true }), deck: Object.assign({}, modelo.deck, { maxPlayers: 6 }) });
    bank.order.push(id);
  });
  runInContext(load("bank-runtime.js"), ctx);
  return { ctx, bank, storage };
}

const { ctx, bank, storage } = montar("");
const S = ctx.MC_SESSAO;
assert.equal(S.texto({ formatos: ["filme", "serie"], top50: false }), "Sessão: Filmes e Séries · Catálogo completo · a partir de 2001");
assert.equal(S.texto({ formatos: ["serie"], top50: true }), "Sessão: Séries · Top 50 · a partir de 2001");
assert.equal(S.valida({ formatos: [], top50: true }), false, "nenhum formato marcado é inválido");

const sintetico = id => id.startsWith("t-");
const el = (n, s) => JSON.parse(JSON.stringify(bank.elegiveis(n, s).filter(sintetico).sort()));
assert.deepEqual(el(4, { formatos: ["filme", "serie"], top50: false }), ["t-filme-cat", "t-filme-top", "t-serie-cat", "t-serie-top"]);
assert.deepEqual(el(4, { formatos: ["filme"], top50: false }), ["t-filme-cat", "t-filme-top"]);
assert.deepEqual(el(4, { formatos: ["serie"], top50: true }), ["t-serie-top"]);
assert.deepEqual(el(4, { formatos: ["filme", "serie"], top50: true }), ["t-filme-top", "t-serie-top"]);
assert.deepEqual(el(7, { formatos: ["filme", "serie"], top50: false }), [], "capacidade da pauta continua valendo");
assert.ok(!bank.elegiveis(4, { formatos: ["serie"], top50: false }).includes(bank.order[0]), "pauta em revisão fica fora fora do modo rascunho");

// Sacos separados por combinação de sessão.
const sFilmes = { formatos: ["filme"], top50: false }, sTop = { formatos: ["filme", "serie"], top50: true };
const a = bank.sortear(4, sFilmes).id, b = bank.sortear(4, sFilmes).id;
assert.notEqual(a, b, "não repete dentro da mesma combinação");
assert.ok(["t-filme-cat", "t-filme-top"].includes(a) && ["t-filme-cat", "t-filme-top"].includes(b));
assert.ok(["t-filme-top", "t-serie-top"].includes(bank.sortear(4, sTop).id));
assert.notEqual(bank.chaveSaco(4, sFilmes), bank.chaveSaco(4, sTop));
assert.equal([...storage.keys()].filter(k => k.startsWith("mc:banco:saco:")).length, 2, "um saco por combinação");
assert.ok(bank.sortear(4, { formatos: ["serie"], top50: false }).id.startsWith("t-serie"));

// Memória global: trocar de combinação não repete a obra recém-jogada.
const g = montar("");
assert.equal(g.bank.sortear(4, { formatos: ["filme"], top50: true }).id, "t-filme-top");
assert.equal(g.bank.sortear(4, { formatos: ["filme", "serie"], top50: true }).id, "t-serie-top", "evita a obra recente mesmo em outra combinação");

// Modo rascunho libera pautas com estrutura aprovada, para teste.
const r = montar("?rascunho=1");
assert.ok(r.bank.elegiveis(4, { formatos: ["serie"], top50: true }).includes(r.bank.order[0]));
console.log("ok sessão e sorteio");
