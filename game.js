const TESTE = true;
const PRECO = { nova: 4, captura: 2, arriscar: 3 };
const VOLTAS = 3;
const MOEDAS = 12;
const ORDEM = ["voce", "nara", "ivo"];
const TURNO_S = 45;
const TOAST_MS = 5200;

const PECAS = {
  F1: { id: "F1", marca: "Porta", texto: "Nao use a porta da frente." },
  F2: { id: "F2", marca: "Relogio", texto: "O relogio da sala marca 21h14 — parado." },
  F3: { id: "F3", marca: "Tinta", texto: "A tinta da assinatura ainda manchava o dedo." },
  F4: { id: "F4", marca: "Envelope", texto: "Havia um segundo envelope. Estava vazio." },
  F5: { id: "F5", marca: "Mesa", texto: "Tres copos usados. Um lugar sem marca." },
  F6: { id: "F6", marca: "Chave", texto: "A chave dos fundos estava do lado de dentro." },
  F7: { id: "F7", marca: "Chegada", texto: "Ninguem viu o envelope chegar." },
  F8: { id: "F8", marca: "Livro", texto: "A assinatura nao coincide com o livro de visitas." },
  F9: { id: "F9", marca: "Ovelha", texto: "Você achou uma ovelha perdida, vale 4 denários de recompensa", figura: "ovelha" }
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
const NOMES = { voce: "Você", nara: "Nara", ivo: "Ivo" };
const state = {
  moedas: MOEDAS, mao: [], monte: [], balaio: [], rivais: { nara: [], ivo: [] },
  travados: {}, vez: 0, voltasFeitas: { voce: 0, nara: 0, ivo: 0 }, verbo: null, log: ""
};
let timerId = null;
let timerLeft = TURNO_S;
let toastTimer = null;
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

function paintTimer() {
  const el = $("#tempo");
  const cell = $("#cell-tempo");
  if (!el) return;
  const m = Math.floor(timerLeft / 60);
  const s = String(timerLeft % 60).padStart(2, "0");
  el.textContent = m + ":" + s;
  if (cell) cell.classList.toggle("urgente", timerLeft <= 10);
}
function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}
function startTimer() {
  stopTimer();
  timerLeft = TURNO_S;
  paintTimer();
  timerId = setInterval(function () {
    timerLeft = Math.max(0, timerLeft - 1);
    paintTimer();
    if (timerLeft === 0) {
      stopTimer();
      if (suaVez()) say("O tempo da jogada acabou. Escolha um verbo ou a vez segue no próximo lance.");
      render();
    }
  }, 1000);
}

function showBagToast() {
  const el = $("#bag-toast");
  if (!el) return;
  if (toastTimer) clearTimeout(toastTimer);
  el.hidden = false;
  el.classList.remove("out");
  el.classList.add("in");
  toastTimer = setTimeout(function () {
    el.classList.remove("in");
    el.classList.add("out");
    setTimeout(function () {
      el.hidden = true;
      el.classList.remove("out");
    }, 450);
  }, TOAST_MS);
}

function dropStamp(x, y, i) {
  const trail = $("#coin-trail");
  if (!trail) return;
  const s = document.createElement("i");
  s.className = "coin-stamp" + (i % 2 ? " b" : "");
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.setProperty("--rot", ((i * 17) % 46 - 23) + "deg");
  const size = Math.max(16, 34 - i * 1.1);
  s.style.width = size + "px";
  s.style.height = size + "px";
  trail.appendChild(s);
  setTimeout(function () { s.classList.add("fade"); }, 700 + i * 28);
  setTimeout(function () { s.remove(); }, 1700 + i * 28);
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
    void fly.offsetWidth;
    fly.classList.add("home");
    let n = 0;
    let lastX = null;
    let lastY = null;
    const started = performance.now();
    function sample() {
      const now = performance.now() - started;
      const r = fly.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      const moved = lastX === null || Math.hypot(x - lastX, y - lastY) > 18;
      if (moved && n < 16) {
        dropStamp(x, y, n);
        lastX = x;
        lastY = y;
        n += 1;
      }
      if (now < 860 && n < 16) requestAnimationFrame(sample);
    }
    requestAnimationFrame(sample);
  }, 1550);

  setTimeout(function () {
    fly.hidden = true;
    fly.classList.remove("home", "rise");
    dest.classList.add("on");
  }, 2480);
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
  say("A vez é sua. O cronômetro corre acima dos verbos.");
  render();
  show("deal");
  startTimer();
  showBagToast();
  requestAnimationFrame(playCoinIntro);
}

function passarVez() {
  state.voltasFeitas[quem()] += 1;
  state.verbo = null;
  if (acabou()) { stopTimer(); render(); setTimeout(fechar, 600); return; }
  state.vez += 1;
  while (state.voltasFeitas[quem()] >= VOLTAS) state.vez += 1;
  state.log = (state.log ? state.log + " · " : "") + "Vez de " + NOMES[quem()].toLowerCase() + ".";
  render();
  startTimer();
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
  stopTimer();
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
  const vezEl = $("#vez");
  if (vezEl) vezEl.textContent = NOMES[atual];
  const purse = $("#purse");
  if (purse) {
    purse.innerHTML =
      "<div class='stash'><div class='stash-art' aria-hidden='true'><i class='bag'></i><i class='coin'></i></div><b>" +
      state.moedas + "</b></div>";
  }
  $("#ordem").innerHTML = ORDEM.map((id) => "<li class='" + (id === atual ? "agora" : "") + "'>" + NOMES[id] + " · " + state.voltasFeitas[id] + "/" + VOLTAS + "</li>").join("");
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
  const salaBtn = $("#btn-sala");
  const salaPanel = $("#sala-panel");
  const salaFechar = $("#sala-fechar");
  if (salaBtn && salaPanel) {
    salaBtn.addEventListener("click", function () {
      salaPanel.hidden = !salaPanel.hidden;
    });
  }
  if (salaFechar && salaPanel) {
    salaFechar.addEventListener("click", function () { salaPanel.hidden = true; });
  }
});
