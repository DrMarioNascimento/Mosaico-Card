const TESTE = true;
const PRECO = { nova: 4, captura: 2, arriscar: 3 };
const VOLTAS = 3;
const MOEDAS = 12;
const ORDEM = ["voce", "nara", "ivo"];

const PECAS = {
  F1: { id: "F1", marca: "Porta", texto: "Nao use a porta da frente." },
  F2: { id: "F2", marca: "Relogio", texto: "O relogio da sala marca 21h14 — parado." },
  F3: { id: "F3", marca: "Tinta", texto: "A tinta da assinatura ainda manchava o dedo." },
  F4: { id: "F4", marca: "Envelope", texto: "Havia um segundo envelope. Estava vazio." },
  F5: { id: "F5", marca: "Mesa", texto: "Tres copos usados. Um lugar sem marca." },
  F6: { id: "F6", marca: "Chave", texto: "A chave dos fundos estava do lado de dentro." },
  F7: { id: "F7", marca: "Chegada", texto: "Ninguem viu o envelope chegar." },
  F8: { id: "F8", marca: "Livro", texto: "A assinatura nao coincide com o livro de visitas." },
  F9: { id: "F9", marca: "Ovelha", texto: "Uma ovelha marcada. Nao era de ninguem da casa.", figura: "ovelha" }
};

const FIGURAS = window.MC_ASSETS || {};
const CAMPOS = [
  { id: "quem", rotulo: "Quem deixou a carta?", resposta: "nao-se-sabe", opcoes: [
    { id: "anfitriao", txt: "O anfitriao" }, { id: "convidado", txt: "Um convidado" }, { id: "nao-se-sabe", txt: "Os fatos nao identificam quem" }
  ]},
  { id: "vazio", rotulo: "O envelope vazio prova o que?", resposta: "ausencia", opcoes: [
    { id: "furto", txt: "Que o conteudo foi roubado" }, { id: "ausencia", txt: "Que nao havia conteudo ali" }, { id: "recusa", txt: "Que alguem recusou a carta" }
  ]},
  { id: "tinta", rotulo: "A tinta recente prova o que?", resposta: "recente", opcoes: [
    { id: "recente", txt: "Que a assinatura e recente" }, { id: "quem", txt: "Quem assinou" }, { id: "fuga", txt: "Que houve fuga pela frente" }
  ]}
];
const NOMES = { voce: "Voce", nara: "Nara", ivo: "Ivo" };
const state = {
  moedas: MOEDAS, mao: [], monte: [], balaio: [], rivais: { nara: [], ivo: [] },
  travados: {}, vez: 0, voltasFeitas: { voce: 0, nara: 0, ivo: 0 }, verbo: null, log: ""
};
const $ = (sel) => document.querySelector(sel);
function show(id) {
  document.querySelectorAll(".scene").forEach((el) => el.classList.toggle("active", el.id === id));
}
function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
function peca(id) { return PECAS[id]; }
function quem() { return ORDEM[state.vez % ORDEM.length]; }
function suaVez() { return quem() === "voce"; }
function acabou() { return ORDEM.every((id) => state.voltasFeitas[id] >= VOLTAS); }
function say(msg) { state.log = msg; }

function dropStamp(x, y, i) {
  const trail = $("#coin-trail");
  if (!trail) return;
  const s = document.createElement("i");
  s.className = "coin-stamp" + (i % 2 ? " b" : "");
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.setProperty("--rot", ((i * 23) % 50 - 25) + "deg");
  s.style.width = (26 + (i % 3) * 4) + "px";
  s.style.height = s.style.width;
  trail.appendChild(s);
  setTimeout(function () { s.classList.add("fade"); }, 520 + i * 40);
  setTimeout(function () { s.remove(); }, 1500 + i * 40);
}

function playCoinIntro() {
  const fly = $("#coin-fly");
  const dest = document.querySelector(".stash-art .coin");
  const trail = $("#coin-trail");
  if (!fly || !dest) return;
  dest.classList.remove("on");
  if (trail) trail.innerHTML = "";
  fly.hidden = false;
  fly.classList.remove("rise", "home");
  const box = dest.getBoundingClientRect();
  fly.style.setProperty("--tx", (box.left + box.width / 2) + "px");
  fly.style.setProperty("--ty", (box.top + box.height / 2) + "px");
  fly.style.setProperty("--end", Math.max(22, box.width) + "px");
  void fly.offsetWidth;
  fly.classList.add("rise");
  setTimeout(function () {
    fly.classList.remove("rise");
    fly.classList.add("home");
    const x0 = window.innerWidth / 2;
    const y0 = window.innerHeight * 0.44;
    const x1 = box.left + box.width / 2;
    const y1 = box.top + box.height / 2;
    for (let i = 0; i < 9; i += 1) {
      const t = (i + 1) / 10;
      setTimeout(function () {
        dropStamp(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, i);
      }, t * 820);
    }
  }, 1550);
  setTimeout(function () {
    fly.hidden = true;
    fly.classList.remove("home", "rise");
    dest.classList.add("on");
  }, 2450);
}

function startDeal() {
  const baralho = shuffle(Object.keys(PECAS));
  state.moedas = MOEDAS;
  state.mao = baralho.slice(0, 2);
  state.rivais = { nara: baralho.slice(2, 4), ivo: baralho.slice(4, 6) };
  state.monte = baralho.slice(6);
  state.balaio = [];
  state.travados = {};
  state.vez = 0;
  state.voltasFeitas = { voce: 0, nara: 0, ivo: 0 };
  state.verbo = null;
  say("A vez passa sem cronometro. Embaixo estao as suas pistas e os quatro verbos.");
  render();
  show("deal");
  requestAnimationFrame(playCoinIntro);
}

function passarVez() {
  state.voltasFeitas[quem()] += 1;
  state.verbo = null;
  if (acabou()) { render(); setTimeout(fechar, 600); return; }
  state.vez += 1;
  while (state.voltasFeitas[quem()] >= VOLTAS) state.vez += 1;
  state.log = (state.log ? state.log + " · " : "") + "Vez de " + NOMES[quem()].toLowerCase() + ".";
  render();
  if (!suaVez()) setTimeout(jogarRival, 700);
}
function comprar() {
  if (state.moedas < PRECO.nova) return say("Sem 4 moedas para comprar.");
  if (!state.monte.length) return say("O monte acabou.");
  const id = state.monte.shift();
  state.moedas -= PRECO.nova;
  state.mao.push(id);
  say("Voce comprou " + peca(id).marca + " · -4.");
  passarVez();
}
function capturar(quemId, pecaId) {
  if (state.moedas < PRECO.captura) return say("Sem 2 moedas para capturar.");
  const mao = state.rivais[quemId];
  if (!mao.includes(pecaId)) return say("Essa pista ja saiu.");
  state.rivais[quemId] = mao.filter((id) => id !== pecaId);
  state.moedas -= PRECO.captura;
  state.mao.push(pecaId);
  say("Voce capturou " + peca(pecaId).marca + " de " + NOMES[quemId] + " · -2.");
  passarVez();
}
function consignar(pecaId) {
  if (!state.mao.includes(pecaId)) return;
  state.mao = state.mao.filter((id) => id !== pecaId);
  state.balaio.push({ id: pecaId, dono: "voce" });
  say("Voce consignou " + peca(pecaId).marca + " no balaio.");
  passarVez();
}
function arriscar(campoId, valor) {
  if (state.travados[campoId]) return;
  const campo = CAMPOS.find((c) => c.id === campoId);
  const ok = valor === campo.resposta;
  if (ok) { state.travados[campoId] = { valor: valor, ok: true }; say("Arriscou certo. A moeda nao saiu."); }
  else if (state.moedas < PRECO.arriscar) return say("Sem 3 moedas para bancar o erro.");
  else { state.moedas -= PRECO.arriscar; state.travados[campoId] = { valor: valor, ok: false }; say("Arriscou errado · -3. O campo fecha assim para voce."); }
  passarVez();
}
function jogarRival() {
  const id = quem();
  if (id === "voce" || acabou()) return;
  const mao = state.rivais[id];
  if (state.balaio.length && Math.random() < 0.45) {
    const item = state.balaio.shift();
    mao.push(item.id);
    if (item.dono === "voce") state.moedas += 2;
    say(NOMES[id] + " levou " + peca(item.id).marca + " do balaio." + (item.dono === "voce" ? " Voce recebe 2." : ""));
  } else if (state.monte.length && Math.random() < 0.6) {
    const nova = state.monte.shift();
    mao.push(nova);
    say(NOMES[id] + " comprou uma pista do monte.");
  } else if (mao.length) {
    const pecaId = mao[0];
    state.rivais[id] = mao.filter((x) => x !== pecaId);
    state.balaio.push({ id: pecaId, dono: id });
    say(NOMES[id] + " consignou " + peca(pecaId).marca + " no balaio.");
  } else say(NOMES[id] + " passa.");
  passarVez();
}
function abrirVerbo(verbo) {
  if (!suaVez()) return;
  state.verbo = state.verbo === verbo ? null : verbo;
  render();
}
function htmlPainel() {
  const v = state.verbo;
  if (!v || !suaVez()) return "";
  if (v === "comprar") {
    if (!state.monte.length) return "<p>O monte esta vazio.</p>";
    return "<p>Comprar uma pista lacrada custa 4. Ha " + state.monte.length + " no monte.</p><button class='slim' type='button' data-act='comprar-ok'>Comprar agora</button>";
  }
  if (v === "capturar") {
    const alvos = ORDEM.filter((id) => id !== "voce" && state.rivais[id].length);
    if (!alvos.length) return "<p>Ninguem tem pista a vista para capturar.</p>";
    return "<p>Capturar custa 2 e tira a pista da mao alheia.</p>" + alvos.map((id) =>
      state.rivais[id].map((pid) =>
        "<button class='chip' type='button' data-act='capturar-ok' data-quem='" + id + "' data-id='" + pid + "'><small>" + NOMES[id] + " · 2</small>" + peca(pid).marca + "</button>"
      ).join("")
    ).join("");
  }
  if (v === "consignar") {
    if (!state.mao.length) return "<p>Voce nao tem pista para consignar.</p>";
    return "<p>Escolha a pista que vai ao balaio.</p>" + state.mao.map((id) =>
      "<button class='chip' type='button' data-act='consignar-ok' data-id='" + id + "'><small>Consignar</small>" + peca(id).marca + "</button>"
    ).join("");
  }
  if (v === "arriscar") {
    const abertos = CAMPOS.filter((c) => !state.travados[c.id]);
    if (!abertos.length) return "<p>Todos os campos ja estao travados.</p>";
    return "<p>Arriscar custa 3 se errar. Se acertar, a moeda volta.</p>" + abertos.map((c) =>
      "<div><b>" + c.rotulo + "</b>" + c.opcoes.map((o) =>
        "<button class='slim ghost' type='button' data-act='arriscar-ok' data-campo='" + c.id + "' data-valor='" + o.id + "'>" + o.txt + "</button>"
      ).join("") + "</div>"
    ).join("");
  }
  return "";
}
function fechar() {
  let txt = "<p class='lede'>Voce sai com " + state.mao.length + " pistas e " + state.moedas + " moedas.</p><div class='reveal'>";
  CAMPOS.forEach((c) => {
    const t = state.travados[c.id];
    const certa = c.opcoes.find((o) => o.id === c.resposta).txt;
    if (!t) txt += "<p><b>" + c.rotulo + "</b> ficou aberto. Os fatos sustentam: " + certa + ".</p>";
    else if (t.ok) txt += "<p><b>" + c.rotulo + "</b> voce travou certo.</p>";
    else txt += "<p><b>" + c.rotulo + "</b> ficou preso a leitura errada. Os fatos sustentam: " + certa + ".</p>";
  });
  txt += "</div>";
  $("#score").innerHTML = txt;
  show("judge");
}
function render() {
  const atual = quem();
  $("#vez").textContent = "Vez de " + NOMES[atual].toLowerCase();
  $("#purse").innerHTML =
    "<div class='stash'><div class='stash-art' aria-hidden='true'><i class='wallet'></i><i class='coin'></i></div><b>" +
    state.moedas + "</b></div><span>" + state.voltasFeitas.voce + "/" + VOLTAS + "</span>";
  $("#ordem").innerHTML = ORDEM.map((id) => "<li class='" + (id === atual ? "agora" : "") + "'>" + NOMES[id] + "</li>").join("");
  $("#log").textContent = state.log;
  $("#hand").innerHTML = state.mao.length
    ? state.mao.map((id) => {
        const p = peca(id);
        var art = (p.figura && FIGURAS[p.figura]) ? "<img class='tile-art' alt='' src='" + FIGURAS[p.figura] + "'>" : "";
        return "<div class='tile'>" + art + "<small>" + p.marca + "</small><p>" + p.texto + "</p></div>";
      }).join("")
    : "<p class='log'>Nenhuma pista na mao.</p>";
  document.querySelectorAll("#verbos button").forEach((btn) => {
    btn.classList.toggle("ligado", state.verbo === btn.dataset.verbo);
    btn.disabled = !suaVez();
  });
  const painel = $("#painel");
  const html = htmlPainel();
  painel.hidden = !html;
  painel.innerHTML = html;
  var comprarBtn = painel.querySelector("[data-act='comprar-ok']");
  if (comprarBtn) comprarBtn.addEventListener("click", comprar);
  painel.querySelectorAll("[data-act='capturar-ok']").forEach((btn) => {
    btn.addEventListener("click", function () { capturar(btn.dataset.quem, btn.dataset.id); });
  });
  painel.querySelectorAll("[data-act='consignar-ok']").forEach((btn) => {
    btn.addEventListener("click", function () { consignar(btn.dataset.id); });
  });
  painel.querySelectorAll("[data-act='arriscar-ok']").forEach((btn) => {
    btn.addEventListener("click", function () { arriscar(btn.dataset.campo, btn.dataset.valor); });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  $("#go-rule").addEventListener("click", function () { show("rule"); });
  $("#go-deal").addEventListener("click", startDeal);
  $("#again").addEventListener("click", startDeal);
  document.querySelectorAll("#verbos button").forEach((btn) => {
    btn.addEventListener("click", function () { abrirVerbo(btn.dataset.verbo); });
  });
});
