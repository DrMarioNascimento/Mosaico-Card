import { readFileSync } from "node:fs";
import { createContext, runInContext } from "node:vm";
import assert from "node:assert/strict";

const src = readFileSync(new URL("../qr.js", import.meta.url), "utf8");
const ctx = createContext({ window: {}, globalThis: {} });
ctx.globalThis = ctx;
ctx.window = ctx;
runInContext(src, ctx);

const QR = ctx.MosaicoQR || ctx.window.MosaicoQR;
assert.ok(QR && typeof QR.svg === "function", "MosaicoQR.svg deve existir");

const url = "https://drmarionascimento.github.io/Mosaico-Card/?sala=AB12CD";
const svg = QR.svg(url, { nivel: "M", margem: 4, rotulo: "QR para entrar na mesa" });
assert.match(svg, /^<svg /);
assert.match(svg, /role="img"/);
assert.match(svg, /QR para entrar na mesa/);
assert.match(svg, /<path /);

const q = QR.gerar(url, { nivel: "M" });
assert.ok(q.tamanho >= 21, "QR deve ter módulos");
assert.ok(q.modulos[0][0] === 1, "finder superior-esquerdo começa escuro");

console.log("ok qr-sala", q.versao, q.tamanho);
