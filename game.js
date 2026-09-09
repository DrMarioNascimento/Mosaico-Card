const FRAGMENTS = [
  { id: "nw", slot: 0, mark: "I", text: "Não use a porta da frente." },
  { id: "ne", slot: 1, mark: "II", text: "O relógio da sala marca 21h14 — parado." },
  { id: "sw", slot: 2, mark: "III", text: "A tinta da assinatura ainda manchava o dedo." },
  { id: "se", slot: 3, mark: "IV", text: "Havia um segundo envelope. Estava vazio." }
];

const state = {
  scene: "open",
  order: [],
  flipped: new Set(),
  placed: [null, null, null, null],
  selected: null,
  judged: false
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

function show(id) {
  state.scene = id;
  $$(".scene").forEach((el) => el.classList.toggle("active", el.id === id));
}

function shuffled(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function renderHand() {
  const hand = $("#hand");
  hand.innerHTML = "";
  state.order.forEach((id) => {
    if (state.placed.includes(id)) return;
    const frag = FRAGMENTS.find((item) => item.id === id);
    hand.append(tileEl(frag, "hand"));
  });
}

function renderBoard() {
  $$(".slot").forEach((slot, index) => {
    const id = state.placed[index];
    slot.innerHTML = "";
    slot.classList.toggle("filled", Boolean(id));
    if (!id) return;
    const frag = FRAGMENTS.find((item) => item.id === id);
    slot.append(tileEl(frag, "board"));
  });
}

function tileEl(frag, where) {
  const btn = document.createElement("button");
  btn.className = "tile" + (state.flipped.has(frag.id) || where === "board" ? " face" : "");
  btn.type = "button";
  btn.dataset.id = frag.id;
  if (state.selected === frag.id) btn.classList.add("chosen");
  btn.innerHTML = state.flipped.has(frag.id) || where === "board"
    ? `<small>Fragmento ${frag.mark}</small><p>${frag.text}</p>`
    : `<small>Verso</small><p>Toque para virar</p>`;
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    onTile(frag, where);
  });
  return btn;
}

function onTile(frag, where) {
  if (where === "board") {
    state.placed = state.placed.map((id) => (id === frag.id ? null : id));
    state.selected = frag.id;
    renderHand();
    renderBoard();
    $("#hint").textContent = "Fragmento de volta na mão. Escolha outro quadrante.";
    return;
  }
  if (!state.flipped.has(frag.id)) {
    state.flipped.add(frag.id);
    renderHand();
    return;
  }
  state.selected = frag.id;
  renderHand();
  $("#hint").textContent = "Agora toque no quadrante da carta.";
}

function placeOn(index) {
  if (!state.selected) {
    $("#hint").textContent = "Vire um fragmento e selecione-o antes de encaixar.";
    return;
  }
  if (state.placed[index]) return;
  state.placed[index] = state.selected;
  state.selected = null;
  renderHand();
  renderBoard();
  checkComplete();
}

function checkComplete() {
  if (state.placed.some((id) => !id)) return;
  const correct = state.placed.every((id, index) => FRAGMENTS.find((f) => f.id === id).slot === index);
  const board = $("#board");
  if (correct) {
    board.classList.add("sealed");
    $("#hint").textContent = "A carta fechou. A verdade só aparece inteira.";
    setTimeout(() => show("judge"), 900);
  } else {
    $("#hint").textContent = "Encaixou, mas a ordem está errada. Solte e tente outra disposição.";
    state.placed = [null, null, null, null];
    setTimeout(() => {
      board.classList.remove("sealed");
      renderHand();
      renderBoard();
    }, 700);
  }
}

function judge(which) {
  if (state.judged) return;
  state.judged = true;
  const buttons = $$(".choice");
  buttons.forEach((btn) => {
    btn.classList.add(btn.dataset.answer === "fact" ? "good" : "bad");
  });
  const box = $("#verdict");
  box.hidden = false;
  box.innerHTML = which === "fact"
    ? "<strong>Isso. Quatro fatos. Nenhuma autoria.</strong> A carta prova instrução, um relógio parado, tinta recente e um envelope vazio. Não prova fuga, roubo nem quem assinou."
    : "<strong>A interpretação passou na frente do fato.</strong> Tinta recente não identifica a mão. Envelope vazio não prova subtração. Porta da frente é instrução, não percurso observado.";
}

function startDeal() {
  state.order = shuffled(FRAGMENTS).map((frag) => frag.id);
  state.flipped = new Set();
  state.placed = [null, null, null, null];
  state.selected = null;
  state.judged = false;
  $("#board").classList.remove("sealed");
  $("#verdict").hidden = true;
  $$(".choice").forEach((btn) => btn.classList.remove("good", "bad"));
  renderHand();
  renderBoard();
  $("#hint").textContent = "Vire os quatro fragmentos. Depois encaixe cada um no quadrante.";
  show("deal");
}

document.addEventListener("DOMContentLoaded", () => {
  $("#go-rule").addEventListener("click", () => show("rule"));
  $("#go-deal").addEventListener("click", startDeal);
  $("#again").addEventListener("click", startDeal);
  $$(".slot").forEach((slot) => {
    slot.addEventListener("click", () => placeOn(Number(slot.dataset.index)));
  });
  $$(".choice").forEach((btn) => {
    btn.addEventListener("click", () => judge(btn.dataset.answer));
  });
});
