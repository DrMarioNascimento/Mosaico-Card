const TESTE = false;
const PRECO = { nova: 4, captura: 2, arriscar: 3 };
const VOLTAS = 3;
const MOEDAS = 12;
const ORDEM = ["voce", "nara", "ivo"];
const TURNO_S = 45;
const TOAST_MS = 5200;

const CASOS = window.MC_CASOS || {};
let casoId = "ovelha";
let PECAS = {};
let CAMPOS = [];

function carregarCaso(id) {
  const c = CASOS[id] || CASOS.ovelha;
  casoId = c.id;
  PECAS = c.pecas;
  CAMPOS = c.campos;
  const titulo = document.getElementById("caso-titulo");
  if (titulo) titulo.textContent = c.titulo;
  return c;
}
carregarCaso(casoId);

const FIGURAS = window.MC_ASSETS || {};
const NOMES = { voce: "Você", nara: "Nara", ivo: "Ivo" };
const state = {
  moedas: MOEDAS, mao: [], monte: [], balaio: [], rivais: { nara: [], ivo: [] },
  travados: {}, vez: 0, voltasFeitas: { voce: 0, nara: 0, ivo: 0 }, verbo: null, log: "",
  pagas: {}, pistasAbertas: true
};
let timerId = null;
let timerLeft = TURNO_S;
let toastTimer = null;
let flipTimer = null;
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
function eOvelha(id) {
  const p = peca(id);
  return !!(p && ((p.id === "F4" && casoId === "ovelha") || /ovelha/i.test(p.marca || "") || /ovelha perdida/i.test(p.texto || "")));
}

function pagarRecompensa(id) {
  const p = peca(id);
  if (!p || !p.recompensa || state.pagas[id]) return;
  state.pagas[id] = true;
  state.moedas += p.recompensa;
  say((state.log ? state.log + " · " : "") + "Recompensa: +" + p.recompensa + " denários.");
}

function revelarCompra(id, jogadorId, depois) {
  if (!eOvelha(id)) {
    if (depois) depois();
    return;
  }
  const p = peca(id);
  const stage = $("#flip-stage");
  const front = $("#flip-front");
  const msg = $("#flip-msg");
  const inner = $("#flip-inner");
  if (!stage || !front) {
    if (depois) depois();
    return;
  }
  front.innerHTML = "<small>" + p.marca + "</small><img class='ovelha-art' alt='' src='ovelha.svg'><p>" + p.texto + "</p>";
  if (jogadorId === "voce") {
    msg.textContent = "Você achou uma ovelha perdida, vale 4 denários de recompensa";
  } else {
    msg.textContent = NOMES[jogadorId] + " achou uma ovelha perdida!";
  }
  if (inner) {
    inner.style.animation = "none";
    void inner.offsetWidth;
    inner.style.animation = "";
  }
  stage.hidden = false;
  if (flipTimer) clearTimeout(flipTimer);
  flipTimer = setTimeout(function () {
    stage.hidden = true;
    if (depois) depois();
  }, 3200);
}
