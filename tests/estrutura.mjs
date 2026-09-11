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

assert.match(game, /function idJogadorLocal/);
assert.match(game, /if \(!suaVez\(\) && !jogoOnline\(\)\)/);
assert.match(game, /dono: idJogadorLocal\(\)/);
assert.match(game, /const size = 24/);
assert.doesNotMatch(game, /vale 4 den/);

assert.match(css, /\.verbos button\.ligado/);
assert.match(css, /border-color:#ff5b73/);
assert.match(css, /grid-template-columns: repeat\(2, minmax\(0,1fr\)\)/);

console.log("ok estrutura");
