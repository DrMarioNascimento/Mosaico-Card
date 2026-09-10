const PRECO = { nova: 4, captura: 2, arriscar: 3 };
const ACOES = 3;
const MOEDAS = 12;

const PECAS = {
  F1: { id: "F1", marca: "Porta", texto: "Não use a porta da frente." },
  F2: { id: "F2", marca: "Relógio", texto: "O relógio da sala marca 21h14 — parado." },
  F3: { id: "F3", marca: "Tinta", texto: "A tinta da assinatura ainda manchava o dedo." },
  F4: { id: "F4", marca: "Envelope", texto: "Havia um segundo envelope. Estava vazio." },
  F5: { id: "F5", marca: "Mesa", texto: "Três copos usados. Um lugar sem marca." },
  F6: { id: "F6", marca: "Chave", texto: "A chave dos fundos estava do lado de dentro." },
  F7: { id: "F7", marca: "Chegada", texto: "Ninguém viu o envelope chegar." },
  F8: { id: "F8", marca: "Livro", texto: "A assinatura não coincide com o livro de visitas." }
};

const CAMPOS = [
  {
    id: "quem",
    rotulo: "Quem deixou a carta?",
    resposta: "nao-se-sabe",
    opcoes: [
      { id: "anfitriao", txt: "O anfitrião" },
      { id: "convidado", txt: "Um convidado" },
      { id: "nao-se-sabe", txt: "Os fatos não identificam quem" }
    ]
  },
  {
    id: "vazio",
    rotulo: "O envelope vazio prova o quê?",
    resposta: "ausencia",
    opcoes: [
      { id: "furto", txt: "Que o conteúdo foi roubado" },
      { id: "ausencia", txt: "Que não havia conteúdo ali" },
      { id: "recusa", txt: "Que alguém recusou a carta" }
    ]
  },
  {
    id: "tinta",
    rotulo: "A tinta recente prova o quê?",
    resposta: "recente",
    opcoes: [
      { id: "recente", txt: "Que a assinatura é recente" },
      { id: "quem", txt: "Quem assinou" },
      { id: "fuga", txt: "Que houve fuga pela frente" }
    ]
  }
];

const state = {
  moedas: MOEDAS,
  acoes: 0,
  mao: [],
  monte: [],
  balaio: [],
  rivais: [],
  travados: {},
  log: "",
  painel: null
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
function restam() { return ACOES - state.acoes; }
function pode(custo) { return restam() > 0 && state.moedas >= custo; }

function say(msg) {
  state.log = msg;
}

function startDeal() {
  const baralho = shuffle(Object.keys(PECAS));
  state.moedas = MOEDAS;
  state.acoes = 0;
  state.mao = baralho.slice(0, 2);
  state.rivais = [
    { nome: "Nara", pecas: baralho.slice(2, 4) },
    { nome: "Ivo", pecas: baralho.slice(4, 6) }
  ];
  state.monte = baralho.slice(6);
  state.balaio = [];
  state.travados = {};
  state.painel = null;
  say("A banca abriu. Monte, dossiês alheios e três campos ainda soltos.");
  render();
  show("deal");
}

function gastarAcao(custo) {
  state.moedas -= custo;
  state.acoes += 1;
}

function comprarNova() {
  if (!pode(PRECO.nova)) return say("Sem moeda ou sem ação para comprar.");
  if (!state.monte.length) return say("O monte acabou.");
  const id = state.monte.shift();
  gastarAcao(PRECO.nova);
  state.mao.push(id);
  say("Comprou do monte: " + peca(id).marca + " · −4.");
  depoisDaAcao();
}

function capturar(rivalIndex, pecaId) {
  if (!pode(PRECO.captura)) return say("Sem moeda ou sem ação para capturar.");
  const rival = state.rivais[rivalIndex];
  if (!rival.pecas.includes(pecaId)) return say("Essa peça já saiu da mão.");
  rival.pecas = rival.pecas.filter((id) => id !== pecaId);
  gastarAcao(PRECO.captura);
  state.mao.push(pecaId);
  say("Capturou " + peca(pecaId).marca + " de " + rival.nome + " · −2. A peça mudou de mão.");
  depoisDaAcao();
}

function arriscar(campoId, valor) {
  if (state.travados[campoId]) return;
  if (restam() <= 0) return say("Sem ação para arriscar.");
  const campo = CAMPOS.find((c) => c.id === campoId);
  const ok = valor === campo.resposta;
  state.acoes += 1;
  if (ok) {
    state.travados[campoId] = { valor, ok: true };
    say("Arriscou certo em «" + campo.rotulo + "». A moeda voltou. O campo travou.");
  } else if (state.moedas < PRECO.arriscar) {
    state.acoes -= 1;
    return say("Sem 3 moedas para bancar o erro.");
  } else {
    state.moedas -= PRECO.arriscar;
    state.travados[campoId] = { valor, ok: false };
    say("Arriscou errado. −3. O campo fecha assim, para você.");
  }
  depoisDaAcao();
}

function consignar(pecaId) {
  if (restam() <= 0) return say("Sem ação para consignar.");
  if (!state.mao.includes(pecaId)) return;
  state.mao = state.mao.filter((id) => id !== pecaId);
  state.balaio.push({ id: pecaId, dono: "você" });
  state.acoes += 1;
  say("Consignou " + peca(pecaId).marca + " no balaio. Só recebe 2 se alguém levar.");
  depoisDaAcao();
}

function comprarBalaio(index) {
  if (!pode(PRECO.captura)) return say("Sem moeda ou sem ação para o balaio.");
  const item = state.balaio[index];
  if (!item) return;
  state.balaio.splice(index, 1);
  gastarAcao(PRECO.captura);
  state.mao.push(item.id);
  say("Levou do balaio: " + peca(item.id).marca + " · −2.");
  depoisDaAcao();
}

function turnoRival() {
  if (Math.random() > 0.62) return;
  const rivais = state.rivais;
  const rival = rivais[Math.floor(Math.random() * rivais.length)];
  if (state.balaio.length && Math.random() < 0.5) {
    const item = state.balaio.shift();
    rival.pecas.push(item.id);
    if (item.dono === "você") state.moedas += 2;
    state.log += " " + rival.nome + " levou " + peca(item.id).marca + " do balaio.";
    if (item.dono === "você") state.log += " Você recebe 2.";
    return;
  }
  if (!state.monte.length) return;
  const id = state.monte.shift();
  rival.pecas.push(id);
  state.log += " " + rival.nome + " comprou uma peça nova.";
}

function depoisDaAcao() {
  if (restam() > 0) turnoRival();
  render();
  if (restam() <= 0) setTimeout(fechar, 700);
}

function fechar() {
  const pecas = state.mao.length;
  let txt = "<p class='lede'>Você sai com " + pecas + " peças no dossiê e " + state.moedas + " moedas.</p>";
  txt += "<div class='reveal'>";
  CAMPOS.forEach((c) => {
    const t = state.travados[c.id];
    const certa = c.opcoes.find((o) => o.id === c.resposta).txt;
    if (!t) txt += "<p><b>" + c.rotulo + "</b> ficou aberto. A leitura que os fatos sustentam: " + certa + ".</p>";
    else if (t.ok) txt += "<p><b>" + c.rotulo + "</b> você travou certo.</p>";
    else txt += "<p><b>" + c.rotulo + "</b> ficou preso à leitura errada. Os fatos sustentam: " + certa + ".</p>";
  });
  txt += "<p>Capturar não copia. Comprar pega o que ninguém tinha. Arriscar compra velocidade — e velocidade custa quando a resposta não cabe nos fatos.</p>";
  txt += "</div>";
  $("#score").innerHTML = txt;
  show("judge");
}

function render() {
  $("#hint").textContent = restam()
    ? "Três verbos. Cada clique gasta uma ação — arriscar certo devolve a moeda."
    : "As três ações acabaram.";
  $("#log").textContent = state.log;
  $("#purse").innerHTML =
    "<span>" + state.moedas + " moedas</span>" +
    "<span>" + restam() + " ações</span>" +
    "<span>" + state.mao.length + " peças</span>";

  $("#stall-monte").innerHTML =
    "<h3>Monte</h3><p>Peças que ninguém descobriu. Comprar custa 4.</p>" +
    (state.monte.length
      ? "<button class='slim' type='button' " + (pode(PRECO.nova) ? "" : "disabled") + " data-act='comprar'>Comprar lacrado · " + state.monte.length + " no monte</button>"
      : "<p>O monte esvaziou.</p>");

  $("#stall-balaio").innerHTML =
    "<h3>Balaio</h3><p>Peça consignada. Levar custa 2. Quem consignou só recebe se alguém levar.</p>" +
    (state.balaio.length
      ? state.balaio.map((item, index) =>
          "<button class='chip' type='button' data-act='balaio' data-index='" + index + "' " +
          (pode(PRECO.captura) ? "" : "disabled") +
          "><small>Levar · 2</small><p>" + peca(item.id).marca + " · de " + item.dono + "</p></button>"
        ).join("")
      : "<p>Vazio.</p>");

  $("#stall-rivais").innerHTML =
    "<h3>Dossiês</h3><p>Capturar custa 2 e tira a peça de lá.</p>" +
    state.rivais.map((rival, index) => {
      if (!rival.pecas.length) return "<p><b>" + rival.nome + "</b> ficou sem peça.</p>";
      return "<p><b>" + rival.nome + "</b></p>" + rival.pecas.map((id) =>
        "<button class='chip' type='button' data-act='capturar' data-rival='" + index + "' data-id='" + id + "' " +
        (pode(PRECO.captura) ? "" : "disabled") +
        "><small>Capturar · 2</small><p>" + peca(id).marca + "</p></button>"
      ).join("");
    }).join("");

  $("#hand").innerHTML = state.mao.map((id) => {
    const p = peca(id);
    return "<div class='tile'><small>" + p.marca + "</small><p>" + p.texto + "</p>" +
      "<button class='slim ghost' type='button' data-act='consignar' data-id='" + id + "' " +
      (restam() ? "" : "disabled") + ">Consignar no balaio</button></div>";
  }).join("") || "<p class='note'>Dossiê vazio.</p>";

  $("#risk").innerHTML = "<p class='kicker'>Arriscar</p>" + CAMPOS.map((c) => {
    const t = state.travados[c.id];
    if (t) {
      const escolhida = c.opcoes.find((o) => o.id === t.valor).txt;
      return "<div class='field locked'><b>" + c.rotulo + "</b><p>" + (t.ok ? "Travado certo: " : "Travado errado: ") + escolhida + "</p></div>";
    }
    return "<div class='field'><b>" + c.rotulo + "</b><div class='opts'>" +
      c.opcoes.map((o) =>
        "<button class='slim ghost' type='button' data-act='arriscar' data-campo='" + c.id + "' data-valor='" + o.id + "' " +
        (restam() ? "" : "disabled") + ">" + o.txt + "</button>"
      ).join("") + "</div></div>";
  }).join("");

  const comprarBtn = $("#stall-monte button");
  if (comprarBtn) comprarBtn.addEventListener("click", comprarNova);
  document.querySelectorAll("[data-act='capturar']").forEach((btn) => {
    btn.addEventListener("click", () => capturar(Number(btn.dataset.rival), btn.dataset.id));
  });
  document.querySelectorAll("[data-act='arriscar']").forEach((btn) => {
    btn.addEventListener("click", () => arriscar(btn.dataset.campo, btn.dataset.valor));
  });
  document.querySelectorAll("[data-act='consignar']").forEach((btn) => {
    btn.addEventListener("click", () => consignar(btn.dataset.id));
  });
  document.querySelectorAll("[data-act='balaio']").forEach((btn) => {
    btn.addEventListener("click", () => comprarBalaio(Number(btn.dataset.index)));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  $("#go-rule").addEventListener("click", () => show("rule"));
  $("#go-deal").addEventListener("click", startDeal);
  $("#again").addEventListener("click", startDeal);
});
