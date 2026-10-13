import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const game = readFileSync(new URL("../game.js", import.meta.url), "utf8");
const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");

assert.match(html, /class="control-dock"/);
assert.match(html, /class="monte-box"/);
assert.match(html, /class="pistas-box"/);
assert.match(html, /<small>Tempo:<\/small><strong id="tempo">/);
assert.match(html, /Vez: <b id="vez">/);
assert.match(html, /<footer class="credit">M&amp;O<\/footer>/);
assert.match(html, /case-pipoca\.js/);
assert.match(html, /cases-cinema\.js/);
assert.doesNotMatch(html, /cases-nt\.js|case-ovelha\.js|biblia-aberta/);
assert.match(html, /id="sessao-filmes"/);
assert.match(html, /id="sessao-series"/);
assert.match(html, /id="sessao-top50"/);
assert.match(html, /a partir de 2001/);
assert.match(html, /id="lobby-sessao"/);
assert.match(html, /sessao\.js/);
assert.match(html, /filmes-series-v1\.jpg/);
assert.match(html, /peca-dourada-frontal-v2\.png/);
assert.match(html, /bank-runtime\.js/);
assert.doesNotMatch(html, /cases-mais\.js|cases-emaus\.js|cases\.js\?v=/);
assert.match(html, /id="fechamento"/);
assert.match(html, /id="podio"/);
assert.match(html, /id="revelacao-canonica"/);
assert.match(html, /id="revelacao-campos"/);
assert.match(html, /id="revelacao-dente"/);
assert.match(html, /id="telao-pergunta"/);

assert.match(game, /function idJogadorLocal/);
assert.match(game, /function autoridadeRelogio/);
assert.match(game, /saldosPorJogador/);
assert.match(game, /resolvidosGlobais/);
assert.match(game, /errosPorJogador/);
assert.match(game, /turnoTerminaEm/);
assert.match(game, /fechamentoTerminaEm/);
assert.match(game, /function renderApuracao/);
assert.match(game, /function renderRevelacaoCanonica/);
assert.match(game, /respostaCanonica/);
assert.match(game, /item\.endereco/);
assert.match(game, /sessionTitle/);
assert.match(game, /tituloReal/);
assert.doesNotMatch(game, /NAA|denár|ovelha/i);
assert.match(game, /editorial\.hinge/);
assert.match(game, /function renderPodio/);
assert.match(game, /calcularTempoTotal/);
assert.match(game, /width: "24px", height: "24px"/);
assert.doesNotMatch(game, /vale 4 den/);

assert.match(css, /@import url\("base\.css/);
assert.doesNotMatch(css, /jsdelivr/);
assert.match(css, /@import url\("hud-fix\.css/);

console.log("ok estrutura");
