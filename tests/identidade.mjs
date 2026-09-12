import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../sala.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../sala.css", import.meta.url), "utf8");

assert.match(html, /id="modal-mestre"/);
assert.match(html, /data-tempo="30"/);
assert.match(html, /data-tempo="45"/);
assert.match(html, /data-tempo="60"/);
assert.match(html, /data-duracao="curta"/);
assert.match(html, /data-duracao="padrao"/);
assert.match(html, /data-duracao="longa"/);
assert.match(html, /id="usa-telao"/);
assert.match(html, /id="assistencia"/);
assert.match(html, /data-assistencia="livre"/);
assert.match(html, /data-assistencia="assistida"/);
assert.match(html, /data-assistencia="guiada"/);
assert.match(html, /id="lobby-prontidao"/);

assert.match(js, /function criarSalaConfigurada/);
assert.match(js, /function prepararIdentidade/);
assert.match(js, /function confirmarAssistencia/);
assert.match(js, /pronto: false/);
assert.match(js, /j\.pronto = true/);
assert.match(js, /localStorage\.setItem/);
assert.match(js, /data\.fase !== "lobby"/);
assert.match(js, /runTransaction/);
assert.match(js, /function impedimentoInicio/);
assert.match(js, /if \(n < 2\)/);
assert.match(js, /if \(n > 12\)/);
assert.match(js, /iniciar\.disabled = false/);
assert.match(js, /setAttribute\("aria-disabled"/);

const posConfig = js.indexOf("function criarSalaConfigurada");
const posIdentidade = js.indexOf("function confirmarIdentidade");
const posAssistencia = js.indexOf("function confirmarAssistencia");
assert.ok(posConfig > 0 && posIdentidade > posConfig && posAssistencia > posIdentidade);

assert.match(css, /button\.btn-go/);
assert.match(css, /#entrar\[data-modo="mestre"\] #campo-cod/);
assert.match(css, /assistencia-opcoes/);

console.log("ok fluxo e identidade");

// Partidas canônicas publicam identidade e recusam pauta desconhecida antes do snapshot.
const gameSala = readFileSync(new URL("../game-sala.js", import.meta.url), "utf8");
assert.match(gameSala, /bankIdentity: e\.state\.demo \? null : identidadeBanco\(\)/);
assert.match(gameSala, /identidadeBancoCompativel\(window\.MC_NT_BANK, data\)/);
assert.match(gameSala, /if \(data\.pautaId && !casoDoBanco\(data\.pautaId\)\) return/);
assert.match(gameSala, /casoCompativelComMesa\(casoDoBanco\(data\.pautaId\)/);
assert.match(js, /sortear\(sala\.jogadores\.length\)/);
