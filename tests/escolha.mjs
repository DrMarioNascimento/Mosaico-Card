import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

/* Página de escolha (raiz), versões em pastas próprias e endereços antigos preservados. */
const raiz = readFileSync(new URL("../index.html", import.meta.url), "utf8");
assert.match(raiz, /href="novo-testamento\/"/, "a escolha leva ao Novo Testamento");
assert.match(raiz, /href="filmes-e-series\/"/, "a escolha leva a Filmes e Séries");
assert.match(raiz, /\(sala\|telao\)=/, "links antigos com ?sala= seguem para o Novo Testamento");
["assets/escolha/peca.webp", "assets/escolha/novo-testamento.webp", "assets/escolha/filmes-e-series.webp"].forEach(f =>
  assert.ok(existsSync(new URL("../" + f, import.meta.url)), f + " existe"));

const nt = readFileSync(new URL("../novo-testamento/index.html", import.meta.url), "utf8");
assert.match(nt, /<base href="\.\.\/">/, "o Novo Testamento usa os arquivos da raiz");
assert.ok(nt.indexOf("<base") < nt.indexOf("<link"), "o base vem antes de qualquer arquivo");

const antigo = readFileSync(new URL("../cinema/index.html", import.meta.url), "utf8");
assert.match(antigo, /\.\.\/filmes-e-series\/" \+ location\.search/, "o endereço antigo /cinema/ mantém a sala");
console.log("ok escolha de versão");
