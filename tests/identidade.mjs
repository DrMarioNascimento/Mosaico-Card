import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../sala.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../sala.css", import.meta.url), "utf8");

assert.match(html, /id="entrar-titulo"/);
assert.match(html, /id="entrar-kicker"/);
assert.match(html, /id="entrar-aviso"/);
assert.match(html, /id="campo-cod"/);
assert.match(html, /class="btn-go"/);
assert.match(html, /Quem chega agora\?/);
assert.match(html, /Bem-vindo/);
assert.match(html, /Bem-vinda/);
assert.match(html, /Tanto faz/);

assert.match(js, /function mostrarIdentidade/);
assert.match(js, /function seguirParaIdentidadeMestre/);
assert.match(js, /Sua mesa está aberta/);
assert.match(js, /Área do mestre/);
assert.doesNotMatch(js, /const nome = "Mestre"/);
assert.match(js, /mostrarIdentidade\(false\)/);
assert.match(js, /q\.get\("sala"\)/);
assert.match(js, /go-rule/);

assert.match(css, /button\.btn-go/);
assert.match(css, /#entrar\[data-modo="mestre"\] #campo-cod/);
assert.match(css, /min-height:\s*88px/);

const start = js.indexOf("function textosIdentidade(comoMestre)");
const end = js.indexOf("function pintarFormas");
assert.ok(start > 0 && end > start, "textosIdentidade deve preceder pintarFormas");
const textos = Function(js.slice(start, end) + "return textosIdentidade;")();
const mestre = textos(true);
const convidado = textos(false);
assert.equal(mestre.titulo, "Sua mesa está aberta");
assert.equal(mestre.kicker, "Área do mestre");
assert.equal(convidado.titulo, "Quem chega agora?");
assert.equal(convidado.kicker, "Entrar");
assert.ok(mestre.aviso);
assert.equal(convidado.aviso, "");

console.log("ok identidade");
