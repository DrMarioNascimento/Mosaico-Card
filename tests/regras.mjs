import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const regras = require("../game-core.js");
const estado = regras.criarEstadoJogadores(["ana", "bia"], 12);
Object.assign(estado, { resolvidosGlobais: {} });
const campo = { id: "C1", resposta: "certa" };

let r = regras.aplicarResposta(estado, "ana", campo, "errada");
assert.equal(r.ok, false);
assert.equal(regras.campoDisponivel(estado, "ana", "C1"), false);
assert.equal(regras.campoDisponivel(estado, "bia", "C1"), true);

r = regras.aplicarResposta(estado, "bia", campo, "certa");
assert.equal(r.ok, true);
assert.equal(regras.campoDisponivel(estado, "ana", "C1"), false);
assert.equal(regras.campoDisponivel(estado, "bia", "C1"), false);
assert.equal(estado.saldosPorJogador.ana, 12);
assert.equal(estado.saldosPorJogador.bia, 12);

console.log("ok regras híbridas");
