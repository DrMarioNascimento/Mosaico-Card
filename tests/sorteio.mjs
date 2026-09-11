import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createContext, runInContext } from "node:vm";

const catalogSource = readFileSync(new URL("../cases-nt.js", import.meta.url), "utf8");
const runtimeSource = readFileSync(new URL("../bank-runtime.js", import.meta.url), "utf8");
const storage = new Map();
const context = createContext({
  window: {},
  globalThis: {},
  localStorage: {
    getItem: key => storage.get(key) ?? null,
    setItem: (key, value) => storage.set(key, value)
  },
  Math,
  JSON
});
context.globalThis = context;
context.window = context;
runInContext(catalogSource, context);
runInContext(runtimeSource, context);

const bank = context.MC_NT_BANK;
assert.equal(typeof bank.sortear, "function");
assert.equal(bank.elegiveis().length, 0);
assert.match(bank.sortear().erro, /aguardam baralho/);

bank.byId["nt-001"].status.playable = true;
bank.byId["nt-002"].status.playable = true;
const primeiro = bank.sortear();
const segundo = bank.sortear();
assert.notEqual(primeiro.id, segundo.id, "o saco não repete antes de esgotar");
const terceiro = bank.sortear();
assert.notEqual(terceiro.id, segundo.id, "a recomposição evita repetição imediata");

console.log("ok saco de pautas");
