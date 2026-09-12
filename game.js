(function () {
  "use strict";

  const PRECO = Object.freeze({ nova: 4, captura: 2, arriscar: 3 });
  const MOEDAS_INICIAIS = 12;
  const FINAL_SEGUNDOS = 60;
  const TOAST_MS = 5200;
  const OVELHA_SRC = "ovelha.svg?v=foto-real";
  const REGRAS = window.MC_RULES;
  const DEMOS = window.MC_CASOS || {};
  const FIGURAS = window.MC_ASSETS || {};
  const ORDEM = ["voce", "nara", "ivo"];
  const NOMES = { voce: "Você", nara: "Nara", ivo: "Ivo" };

  let casoId = "ovelha";
  let CASO = DEMOS.ovelha || null;
  let PECAS = {};
  let CAMPOS = [];
  let timerId = null;
  let toastTimer = null;
  let flipTimer = null;
  let apuracaoTimers = [];

  const state = {
    fase: "demo",
    demo: true,
    config: { tempoPorJogada: 45, duracao: "padrao", telao: false },
    monte: [],
    balaio: [],
    maosPorJogador: {},
    saldosPorJogador: {},
    resolvidosGlobais: {},
    errosPorJogador: {},
    pagas: {},
    vez: 0,
    turnoId: 0,
    turnoTerminaEm: null,
    partidaIniciaEm: null,
    partidaTerminaEm: null,
    fechamentoTerminaEm: null,
    encerrarAoFimDoCiclo: false,
    pausado: false,
    pausaRestanteTurno: 0,
    pausaRestantePartida: 0,
    pausaRestanteFechamento: 0,
    ledger: [],
    respostasFinais: {},
    resolvidosFinais: {},
    ranking: [],
    verbo: null,
    log: "",
    pistasAbertas: true
  };

  const $ = function (sel) { return document.querySelector(sel); };
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  }
  function show(id) {
    if (window.MC_SALA && typeof window.MC_SALA.show === "function") return window.MC_SALA.show(id);
    document.querySelectorAll(".scene").forEach(function (el) { el.classList.toggle("active", el.id === id); });
  }
  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function jogoOnline() { return !!(window.MC_SALA && window.MC_SALA.online); }
  function souMestre() { return !!(window.MC_SALA && window.MC_SALA.souMestre && window.MC_SALA.souMestre()); }
  function autoridadeRelogio() { return !jogoOnline() || souMestre(); }
  function idJogadorLocal() { return jogoOnline() && window.MC_SALA.uid ? window.MC_SALA.uid : "voce"; }
  function quem() { return ORDEM.length ? ORDEM[state.vez % ORDEM.length] : null; }
  function suaVez() { return state.fase === "deal" && quem() === idJogadorLocal(); }
  function mao(id) { return state.maosPorJogador[id] || []; }
  function saldo(id) { return Number(state.saldosPorJogador[id] || 0); }
  function mudarSaldo(id, valor) { state.saldosPorJogador[id] = saldo(id) + valor; }
  function peca(id) { return PECAS[id]; }
  function campo(id) { return CAMPOS.find(function (item) { return item.id === id; }); }
  function say(msg) { state.log = msg; render(); }
  function formatarTempo(segundos) {
    const s = Math.max(0, Math.ceil(Number(segundos) || 0));
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }
  function tempoRestante(deadline) { return deadline ? Math.max(0, (Number(deadline) - Date.now()) / 1000) : 0; }

  function normalizarCaso(origem) {
    if (!origem) return null;
    if (origem.pecas && origem.campos) return origem;
    const cards = (((origem.deck || {}).cards) || []).map(function (card, i) {
      return {
        id: card.id || "F" + String(i + 1).padStart(2, "0"),
        marca: card.marca || card.title || "Fragmento",
        texto: card.texto || card.text || "",
        tipo: card.tipo || "pista"
      };
    });
    const camposOrigem = origem.fields || [];
    const focal = origem.focalFieldId;
    const ordenados = camposOrigem.slice().sort(function (a, b) {
      if (a.id === focal) return -1;
      if (b.id === focal) return 1;
      return Number(a.sourceOrder || 0) - Number(b.sourceOrder || 0);
    });
    const valores = REGRAS.valoresCampos(ordenados.length);
    return {
      id: origem.id,
      titulo: origem.title,
      fonte: origem.canon ? origem.canon.referenceNAA : "",
      fonteRevelacao: (origem.canon ? origem.canon.book + " · " + origem.canon.referenceNAA : origem.title),
      lede: origem.prompt ? origem.prompt.question : "",
      pergunta: origem.prompt ? origem.prompt.question : "",
      focalFieldId: focal,
      grammar: origem.grammar || {},
      editorial: origem.editorial || {},
      status: origem.status || {},
      pecas: Object.fromEntries(cards.map(function (card) { return [card.id, card]; })),
      campos: ordenados.map(function (item, index) {
        return {
          id: item.id,
          rotulo: item.rotulo,
          resposta: item.respostaId,
          respostaCanonica: item.respostaCanonica,
          enderecoNAA: item.enderecoNAA,
          pontosBase: valores[index],
          opcoes: (item.opcoes || []).map(function (op) { return { id: op.id, txt: op.texto }; })
        };
      })
    };
  }
  function carregarCaso(origem) {
    const c = typeof origem === "string" ? DEMOS[origem] : normalizarCaso(origem);
    if (!c) return null;
    casoId = c.id;
    CASO = c;
    PECAS = Object.assign({}, c.pecas || {});
    CAMPOS = (c.campos || []).slice();
    if ($("#caso-titulo")) $("#caso-titulo").textContent = c.titulo || "Caso";
    atualizarRegra();
    return c;
  }
  function eOvelha(id) {
    const item = peca(id);
    return !!(item && (item.bonus || (casoId === "ovelha" && (item.figura === "ovelha" || item.protegida))));
  }
  function eProtegida(id) { const item = peca(id); return !!(item && (item.protegida || eOvelha(id))); }
  function campoDisponivel(id, jogador) { return REGRAS.campoDisponivel(state, jogador, id); }
  function todosCamposFechados() { return CAMPOS.length > 0 && CAMPOS.every(function (c) { return !!state.resolvidosGlobais[c.id]; }); }

  function modeloOvelha() {
    return DEMOS.ovelha && DEMOS.ovelha.pecas && DEMOS.ovelha.pecas.F4;
  }
  function adicionarOvelhasBonus() {
    if (state.demo) return [];
    const modelo = modeloOvelha();
    if (!modelo) return [];
    const quantidade = REGRAS.quantidadeBonus(ORDEM.length, state.config.duracao);
    return Array.from({ length: quantidade }, function (_, i) {
      const id = "BONUS_OVELHA_" + (i + 1);
      PECAS[id] = Object.assign({}, modelo, { id: id, bonus: true, recompensa: 6 });
      return id;
    });
  }

  function prepararJogadores(jogadores, demo) {
    ORDEM.length = 0;
    if (demo) {
      ["voce", "nara", "ivo"].forEach(function (id) { ORDEM.push(id); });
    } else {
      (jogadores || []).forEach(function (j) {
        ORDEM.push(j.id);
        NOMES[j.id] = j.nome || "Jogador";
      });
    }
    const base = REGRAS.criarEstadoJogadores(ORDEM, MOEDAS_INICIAIS);
    state.saldosPorJogador = base.saldosPorJogador;
    state.errosPorJogador = base.errosPorJogador;
    state.maosPorJogador = base.maosPorJogador;
  }
  function configurarJogadoresCompartilhados(jogadores, ordem) {
    ORDEM.length = 0;
    (ordem || (jogadores || []).map(function (j) { return j.id; })).forEach(function (id) { ORDEM.push(id); });
    (jogadores || []).forEach(function (j) { NOMES[j.id] = j.nome || "Jogador"; });
  }
  function distribuir() {
    const ids = Object.keys(PECAS);
    const especial = state.demo ? ids.find(eOvelha) : null;
    const bonus = adicionarOvelhasBonus();
    const comuns = shuffle(ids.filter(function (id) { return id !== especial && !bonus.includes(id); }));
    let cursor = 0;
    ORDEM.forEach(function (id) {
      state.maosPorJogador[id] = comuns.slice(cursor, cursor + 2);
      cursor += 2;
    });
    const resto = comuns.slice(cursor);
    state.monte = state.demo && especial ? [especial].concat(resto) : shuffle(resto.concat(bonus));
    return bonus.length;
  }
  function limparEstadoPartida() {
    Object.assign(state, {
      monte: [], balaio: [], resolvidosGlobais: {}, errosPorJogador: {}, pagas: {}, vez: 0,
      turnoId: 1, turnoTerminaEm: null, partidaIniciaEm: null, partidaTerminaEm: null,
      fechamentoTerminaEm: null, encerrarAoFimDoCiclo: false, pausado: false,
      pausaRestanteTurno: 0, pausaRestantePartida: 0, ledger: [], respostasFinais: {},
      pausaRestanteFechamento: 0,
      resolvidosFinais: {}, ranking: [], verbo: null, log: "", pistasAbertas: true
    });
  }

  function iniciarDemo() {
    limparEstadoPartida();
    state.demo = true;
    state.fase = "deal";
    state.config = { tempoPorJogada: 45, duracao: "padrao", telao: false };
    carregarCaso("ovelha");
    prepararJogadores(null, true);
    distribuir();
    const agora = Date.now();
    state.partidaIniciaEm = agora;
    state.partidaTerminaEm = agora + 3 * ORDEM.length * state.config.tempoPorJogada * 1000;
    state.turnoTerminaEm = agora + state.config.tempoPorJogada * 1000;
    state.log = "A primeira compra demonstra a carta da ovelha.";
    show("deal");
    window.scrollTo(0, 0);
    startTimer();
    render();
    showBagToast();
    requestAnimationFrame(function () { requestAnimationFrame(playCoinIntro); });
  }
  function iniciarPartida(caso, config, jogadores) {
    if (!caso || !caso.status || caso.status.playable !== true) {
      throw new Error("A pauta ainda não possui baralho, campo focal e gabarito validados.");
    }
    limparEstadoPartida();
    state.demo = false;
    state.fase = "deal";
    state.config = Object.assign({}, config || {});
    window.MC_ACTIVE_CASE_ID = caso.id;
    carregarCaso(caso);
    prepararJogadores(jogadores, false);
    const bonus = distribuir();
    const agora = Date.now();
    const total = REGRAS.calcularTempoTotal(CAMPOS.length, ORDEM.length, state.config.tempoPorJogada, state.config.duracao);
    state.partidaIniciaEm = agora;
    state.partidaTerminaEm = agora + total.segundos * 1000;
    state.turnoTerminaEm = agora + state.config.tempoPorJogada * 1000;
    state.log = "Pauta sorteada. " + bonus + (bonus === 1 ? " ovelha foi embaralhada" : " ovelhas foram embaralhadas") + " no monte.";
    show("deal");
    window.scrollTo(0, 0);
    startTimer();
    render();
    showBagToast();
    requestAnimationFrame(function () { requestAnimationFrame(playCoinIntro); });
    publicarEstado("deal", true);
  }

  function stopTimer() { if (timerId) clearInterval(timerId); timerId = null; }
  function paintTimer() {
    const deadline = state.fase === "fechamento" ? state.fechamentoTerminaEm : state.turnoTerminaEm;
    const pausa = state.fase === "fechamento" ? state.pausaRestanteFechamento : state.pausaRestanteTurno;
    const restante = state.pausado ? pausa / 1000 : tempoRestante(deadline);
    if ($("#tempo")) $("#tempo").textContent = state.pausado ? "pausa" : formatarTempo(restante);
    if ($("#fechamento-tempo")) $("#fechamento-tempo").textContent = formatarTempo(tempoRestante(state.fechamentoTerminaEm));
    const cell = $("#cell-tempo");
    if (cell) {
      cell.classList.toggle("minha-vez", suaVez());
      cell.classList.toggle("vez-alheia", !suaVez());
      cell.classList.toggle("urgente", suaVez() && restante <= 10 && restante > 0);
    }
    if ($("#telao-tempo")) $("#telao-tempo").textContent = state.pausado ? "Pausa" : formatarTempo(restante);
  }
  function onTick() {
    paintTimer();
    if (state.pausado || !autoridadeRelogio()) return;
    const agora = Date.now();
    if (state.fase === "deal") {
      if (state.partidaTerminaEm && agora >= state.partidaTerminaEm) state.encerrarAoFimDoCiclo = true;
      if (state.turnoTerminaEm && agora >= state.turnoTerminaEm) passarVez("O tempo terminou. A vez passou automaticamente.", true);
    } else if (state.fase === "fechamento" && state.fechamentoTerminaEm && agora >= state.fechamentoTerminaEm) {
      apurarPartida();
    }
  }
  function startTimer() {
    stopTimer();
    paintTimer();
    timerId = setInterval(onTick, 300);
  }

  function publicarEstado(fase, controleMestre) {
    if (window.MC_GAME && window.MC_GAME.publicarEstado) window.MC_GAME.publicarEstado(fase || state.fase, controleMestre);
  }
  function passarVez(mensagem, peloRelogio) {
    if (state.fase !== "deal" || !ORDEM.length) return;
    state.verbo = null;
    state.vez += 1;
    state.turnoId += 1;
    const fechouCiclo = state.vez % ORDEM.length === 0;
    if (!state.demo && todosCamposFechados()) { apurarPartida(); return; }
    if (!state.demo && state.encerrarAoFimDoCiclo && fechouCiclo) { iniciarFechamento(); return; }
    if (state.demo && state.vez >= ORDEM.length * 3) {
      apurarPartida();
      return;
    }
    state.turnoTerminaEm = Date.now() + state.config.tempoPorJogada * 1000;
    state.log = mensagem || "Vez de " + (NOMES[quem()] || "jogador") + ".";
    render();
    publicarEstado("deal", !!peloRelogio);
    if (!jogoOnline() && !suaVez()) setTimeout(jogarRival, 650);
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
      setTimeout(function () { el.hidden = true; el.classList.remove("out"); }, 450);
    }, TOAST_MS);
  }
  function dropStamp(x, y) {
    const trail = $("#coin-trail");
    if (!trail) return;
    const mark = document.createElement("i");
    mark.className = "coin-stamp";
    Object.assign(mark.style, { left: x + "px", top: y + "px", width: "24px", height: "24px" });
    trail.appendChild(mark);
  }
  function playCoinIntro() {
    const fly = $("#coin-fly");
    const dest = document.querySelector(".stash-art .coin");
    const trail = $("#coin-trail");
    if (!fly || !dest) return;
    document.body.classList.add("coin-intro-lock");
    dest.classList.remove("on");
    if (trail) { trail.innerHTML = ""; trail.classList.remove("fade"); }
    fly.hidden = false;
    fly.classList.remove("rise", "home");
    const viewportW = document.documentElement.clientWidth;
    const viewportH = document.documentElement.clientHeight;
    const dockTop = document.querySelector(".control-dock")?.getBoundingClientRect().top || viewportH;
    const diameter = Math.min(132, Math.max(92, Math.min(viewportW * 0.28, (dockTop - 90) * 0.36)));
    fly.style.setProperty("--coin-size", diameter + "px");
    fly.style.setProperty("--origin-y", Math.max(105, Math.min(dockTop - diameter - 30, viewportH * 0.45)) + "px");
    const box = dest.getBoundingClientRect();
    fly.style.setProperty("--tx", box.left + box.width / 2 + "px");
    fly.style.setProperty("--ty", box.top + box.height / 2 + "px");
    fly.style.setProperty("--end", Math.max(22, box.width) + "px");
    void fly.offsetWidth;
    fly.classList.add("rise");
    setTimeout(function () {
      fly.classList.remove("rise");
      void fly.offsetWidth;
      fly.classList.add("home");
      let lastX = null, lastY = null, marcas = 0;
      const spacing = 20;
      const started = performance.now();
      function sample() {
        const r = fly.getBoundingClientRect();
        const x = r.left + r.width / 2, y = r.top + r.height / 2;
        if (lastX === null) { dropStamp(x, y); lastX = x; lastY = y; marcas += 1; }
        let dist = Math.hypot(x - lastX, y - lastY);
        while (dist >= spacing && marcas < 40) {
          const ratio = spacing / dist;
          lastX += (x - lastX) * ratio;
          lastY += (y - lastY) * ratio;
          dropStamp(lastX, lastY);
          marcas += 1;
          dist = Math.hypot(x - lastX, y - lastY);
        }
        if (performance.now() - started < 900 && marcas < 40) requestAnimationFrame(sample);
        else if (trail) trail.classList.add("fade");
      }
      requestAnimationFrame(sample);
    }, 1550);
    setTimeout(function () {
      fly.hidden = true;
      fly.classList.remove("home", "rise");
      dest.classList.add("on");
      document.body.classList.remove("coin-intro-lock");
      if (trail) setTimeout(function () { trail.innerHTML = ""; trail.classList.remove("fade"); }, 900);
    }, 2480);
  }
  function revelarCompra(id, jogador, depois) {
    if (!eOvelha(id)) { if (depois) depois(); return; }
    const item = peca(id), stage = $("#flip-stage"), front = $("#flip-front"), msg = $("#flip-msg"), inner = $("#flip-inner");
    if (!stage || !front) { if (depois) depois(); return; }
    front.innerHTML = "<div class='ovelha-chamada'><span>Você encontrou</span><strong>OVELHA PERDIDA</strong></div><img class='ovelha-art' alt='Ovelha perdida' src='" + OVELHA_SRC + "'><p class='ovelha-valor'>Vale 6 denários</p>";
    msg.textContent = jogador === idJogadorLocal() ? "Você achou a ovelha. Recebe 6 denários e a carta sai do jogo." : (NOMES[jogador] || "Alguém") + " achou a ovelha.";
    if (inner) { inner.style.animation = "none"; void inner.offsetWidth; inner.style.animation = ""; }
    stage.hidden = false;
    if (flipTimer) clearTimeout(flipTimer);
    flipTimer = setTimeout(function () { stage.hidden = true; if (depois) depois(); }, 5500);
  }
  function pagarRecompensa(id, jogador) {
    const item = peca(id);
    if (!item || !item.recompensa || state.pagas[id]) return;
    state.pagas[id] = jogador;
    mudarSaldo(jogador, Number(item.recompensa));
  }

  function comprar(indice) {
    if (!suaVez()) return say("Aguarde a sua vez.");
    if (!state.monte.length) return say("O monte está vazio.");
    const jogador = idJogadorLocal();
    const pos = Math.max(0, Math.min(Number(indice) || 0, state.monte.length - 1));
    const id = state.monte[pos];
    const achou = eOvelha(id);
    const custo = achou ? 0 : PRECO.nova;
    if (saldo(jogador) < custo) return say("Saldo insuficiente para comprar.");
    state.monte.splice(pos, 1);
    mudarSaldo(jogador, -custo);
    if (!achou) mao(jogador).push(id);
    revelarCompra(id, jogador, function () {
      pagarRecompensa(id, jogador);
      state.log = achou ? "A ovelha saiu do jogo. Recompensa: +6." : "Pista comprada: " + peca(id).marca + ".";
      passarVez();
    });
    render();
  }
  function capturar(alvoId, pecaId) {
    const jogador = idJogadorLocal();
    if (!suaVez()) return;
    if (eProtegida(pecaId)) return say("Essa pista não pode ser capturada.");
    if (saldo(jogador) < PRECO.captura) return say("Saldo insuficiente para capturar.");
    const alvo = mao(alvoId);
    if (!alvo.includes(pecaId)) return say("Essa pista já saiu.");
    state.maosPorJogador[alvoId] = alvo.filter(function (id) { return id !== pecaId; });
    mao(jogador).push(pecaId);
    mudarSaldo(jogador, -PRECO.captura);
    state.log = "Você capturou " + peca(pecaId).marca + " de " + (NOMES[alvoId] || "outro jogador") + ".";
    passarVez();
  }
  function consignar(pecaId) {
    const jogador = idJogadorLocal();
    if (!suaVez() || !mao(jogador).includes(pecaId)) return;
    state.maosPorJogador[jogador] = mao(jogador).filter(function (id) { return id !== pecaId; });
    state.balaio.push({ id: pecaId, dono: jogador });
    state.log = "Você consignou " + peca(pecaId).marca + " no balaio.";
    passarVez();
  }
  function arriscar(campoId, valor) {
    const jogador = idJogadorLocal();
    const alvo = campo(campoId);
    if (!suaVez() || !alvo || !campoDisponivel(campoId, jogador)) return say("Esse campo já está fechado para você.");
    if (saldo(jogador) < PRECO.arriscar) return say("Saldo insuficiente para arriscar agora. Você ainda poderá responder no fechamento gratuito.");
    const resultado = REGRAS.aplicarResposta(state, jogador, alvo, valor);
    if (!resultado.aplicado) return;
    if (resultado.ok) {
      const evento = REGRAS.criarEventoPontuacao({
        campoId: alvo.id,
        jogadorId: jogador,
        valorBase: alvo.pontosBase,
        instante: Date.now(),
        inicioPartida: state.partidaIniciaEm,
        fimPartida: state.partidaTerminaEm,
        ordemFechamento: state.ledger.length + 1
      });
      state.ledger = REGRAS.adicionarEventoPontuacao(state.ledger, evento);
      state.resolvidosGlobais[alvo.id].evento = evento;
      state.log = "Resposta correta. Este campo fechou para todos.";
    } else {
      mudarSaldo(jogador, -PRECO.arriscar);
      state.log = "Resposta incorreta. Este campo fechou somente para você.";
    }
    passarVez();
  }
  function jogarRival() {
    if (jogoOnline() || state.fase !== "deal" || suaVez()) return;
    const jogador = quem();
    if (state.monte.length) {
      const id = state.monte.shift();
      if (!eOvelha(id)) mao(jogador).push(id);
      revelarCompra(id, jogador, function () { pagarRecompensa(id, jogador); passarVez((NOMES[jogador] || "Jogador") + " comprou uma pista."); });
    } else passarVez((NOMES[jogador] || "Jogador") + " passou.");
  }
  function abrirVerbo(verbo) {
    if (!suaVez()) return say("Aguarde a sua vez.");
    state.verbo = state.verbo === verbo ? null : verbo;
    render();
  }

  function iniciarFechamento() {
    state.fase = "fechamento";
    state.turnoId += 1;
    state.verbo = null;
    state.fechamentoTerminaEm = Date.now() + FINAL_SEGUNDOS * 1000;
    state.log = "Fechamento gratuito iniciado.";
    show("fechamento");
    renderFechamento();
    startTimer();
    publicarEstado("fechamento", true);
  }
  function renderFechamento() {
    const box = $("#fechamento-campos");
    if (!box) return;
    const jogador = idJogadorLocal();
    const respostas = state.respostasFinais[jogador] || {};
    const abertos = CAMPOS.filter(function (item) { return campoDisponivel(item.id, jogador); });
    box.innerHTML = abertos.length ? abertos.map(function (item) {
      return "<section class='campo-resposta'><b>" + esc(item.rotulo) + "</b>" + item.opcoes.map(function (op) {
        const on = respostas[item.id] === op.id ? " ligado" : "";
        return "<button class='slim ghost" + on + "' type='button' data-final-campo='" + esc(item.id) + "' data-final-valor='" + esc(op.id) + "'>" + esc(op.txt) + "</button>";
      }).join("") + "</section>";
    }).join("") : "<p class='lede'>Você não possui campos disponíveis nesta etapa.</p>";
    box.querySelectorAll("[data-final-campo]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (!state.respostasFinais[jogador]) state.respostasFinais[jogador] = {};
        state.respostasFinais[jogador][btn.dataset.finalCampo] = btn.dataset.finalValor;
        renderFechamento();
        if (window.MC_SALA && window.MC_SALA.publicarRespostaFinal) window.MC_SALA.publicarRespostaFinal(state.respostasFinais[jogador]);
      });
    });
    if ($("#fechamento-status")) $("#fechamento-status").textContent = Object.keys(respostas).length + " resposta(s) registrada(s). Você pode alterá-las até o tempo acabar.";
    paintTimer();
  }
  function apurarPartida() {
    if (state.fase === "judge") return;
    if (!state.demo) {
      const apuracao = REGRAS.apurarFaseFinal(state, ORDEM, CAMPOS, state.respostasFinais);
      Object.keys(apuracao.vencedoresPorCampo).forEach(function (campoId) {
        const alvo = campo(campoId);
        apuracao.vencedoresPorCampo[campoId].forEach(function (jogador) {
          const evento = REGRAS.criarEventoPontuacao({ campoId: campoId, jogadorId: jogador, valorBase: alvo.pontosBase, fase: "final", instante: Date.now() });
          state.ledger = REGRAS.adicionarEventoPontuacao(state.ledger, evento);
        });
      });
      state.resolvidosFinais = apuracao.vencedoresPorCampo;
    }
    state.ranking = construirRanking();
    state.fase = "judge";
    state.turnoId += 1;
    stopTimer();
    show("judge");
    renderApuracao();
    publicarEstado("judge", true);
  }
  function construirRanking() {
    return REGRAS.ordenarRanking(ORDEM.map(function (jogador) {
      const resultado = REGRAS.calcularPontuacaoFinal(jogador, state.ledger, saldo(jogador));
      const focal = CASO && CASO.focalFieldId;
      const eventoFocal = state.ledger.find(function (evento) { return evento.campoId === focal && evento.jogadorId === jogador; });
      return Object.assign(resultado, {
        nome: NOMES[jogador] || "Jogador",
        queimados: REGRAS.quantidadeQueimados(state.errosPorJogador[jogador]),
        ordemCampoFocal: eventoFocal ? eventoFocal.ordemFechamento : null
      });
    }));
  }
  function numero(valor) { return Number(valor || 0).toFixed(1).replace(".", ","); }
  function renderRevelacaoCanonica() {
    const fonte = $("#revelacao-fonte"), campos = $("#revelacao-campos"), dente = $("#revelacao-dente");
    if (!fonte || !campos || !dente) return;
    const referencia = (CASO && CASO.fonteRevelacao) || (CASO && CASO.fonte) || "Referência não informada";
    fonte.textContent = ((CASO && CASO.titulo) ? CASO.titulo + " · " : "") + referencia;
    campos.innerHTML = (CAMPOS || []).map(function (item, index) {
      const correta = (item.opcoes || []).find(function (op) { return op.id === item.resposta; });
      const resposta = item.respostaCanonica || (correta && correta.txt) || "Resposta em validação";
      const endereco = item.enderecoNAA || referencia;
      return "<article class='revelacao-campo'>" +
        "<small>Campo " + (index + 1) + "</small>" +
        "<h3>" + esc(item.rotulo || "Conclusão") + "</h3>" +
        "<p>" + esc(resposta) + "</p>" +
        "<cite>" + esc(endereco) + "</cite>" +
      "</article>";
    }).join("");
    const sintese = CASO && CASO.editorial && CASO.editorial.hinge;
    dente.hidden = !sintese;
    dente.innerHTML = sintese ? "<small>Síntese do caso</small><p>" + esc(sintese) + "</p>" : "";
  }
  function renderApuracao() {
    apuracaoTimers.forEach(clearTimeout);
    apuracaoTimers = [];
    const jogador = idJogadorLocal();
    const resultado = state.ranking.find(function (r) { return r.jogadorId === jogador; }) || REGRAS.calcularPontuacaoFinal(jogador, state.ledger, saldo(jogador));
    const passos = [
      ["#score-t1", resultado.parcelas.primeiroTerco],
      ["#score-t2", resultado.parcelas.segundoTerco],
      ["#score-t3", resultado.parcelas.terceiroTerco],
      ["#score-final", resultado.parcelas.fechamentoFinal],
      ["#score-residual", resultado.residual],
      ["#score-total", resultado.total]
    ];
    passos.forEach(function (passo) { if ($(passo[0])) $(passo[0]).textContent = "—"; });
    passos.forEach(function (passo, index) {
      apuracaoTimers.push(setTimeout(function () {
        if ($(passo[0])) $(passo[0]).textContent = numero(passo[1]);
        if (index === passos.length - 1) renderPodio();
      }, 380 * (index + 1)));
    });
    if ($("#score")) {
      $("#score").innerHTML = "<p class='lede'>" + esc((CASO && CASO.fonteRevelacao) || "Partida encerrada") + "</p>";
    }
    renderRevelacaoCanonica();
  }
  function renderPodio() {
    const podio = $("#podio");
    if (!podio) return;
    podio.hidden = false;
    const top = state.ranking.slice(0, 3);
    if ($("#podio-top3")) {
      $("#podio-top3").innerHTML = [2, 1, 0].filter(function (i) { return top[i]; }).map(function (i) {
        return "<article class='podio-lugar lugar-" + (i + 1) + "'><small>" + (i + 1) + "º</small><b>" + esc(top[i].nome) + "</b><strong>" + numero(top[i].total) + "</strong></article>";
      }).join("");
    }
    if ($("#ranking-final")) {
      $("#ranking-final").innerHTML = state.ranking.map(function (r, i) {
        return "<li><span>" + (i + 1) + "º · " + esc(r.nome) + "</span><strong>" + numero(r.total) + "</strong></li>";
      }).join("");
    }
  }

  function htmlPainel() {
    const verbo = state.verbo, jogador = idJogadorLocal();
    if (!verbo || !suaVez()) return "";
    if (verbo === "comprar") return state.monte.length ? "<p>Toque em uma carta do leque.</p>" : "<p>O monte está vazio.</p>";
    if (verbo === "capturar") {
      const chips = ORDEM.filter(function (id) { return id !== jogador; }).map(function (id) {
        return mao(id).filter(function (pid) { return !eProtegida(pid); }).map(function (pid) {
          return "<button class='chip' type='button' data-act='capturar-ok' data-quem='" + esc(id) + "' data-id='" + esc(pid) + "'><small>" + esc(NOMES[id]) + " · 2</small>" + esc(peca(pid).marca) + "</button>";
        }).join("");
      }).join("");
      return chips ? "<p>Escolha uma pista capturável.</p>" + chips : "<p>Não há pista capturável.</p>";
    }
    if (verbo === "consignar") {
      return "<p>Escolha a pista que vai ao balaio.</p>" + mao(jogador).map(function (id) {
        return "<button class='chip' type='button' data-act='consignar-ok' data-id='" + esc(id) + "'><small>Consignar</small>" + esc(peca(id).marca) + "</button>";
      }).join("");
    }
    if (verbo === "arriscar") {
      const abertos = CAMPOS.filter(function (item) { return campoDisponivel(item.id, jogador); });
      return "<p>Acerto fecha para todos. Erro fecha somente para você.</p>" + abertos.map(function (item) {
        return "<div class='campo-resposta'><b>" + esc(item.rotulo) + " · " + item.pontosBase + " pts</b>" + item.opcoes.map(function (op) {
          return "<button class='slim ghost' type='button' data-act='arriscar-ok' data-campo='" + esc(item.id) + "' data-valor='" + esc(op.id) + "'>" + esc(op.txt) + "</button>";
        }).join("") + "</div>";
      }).join("");
    }
    return "";
  }
  function pintarLeque() {
    const box = $("#leque");
    if (!box) return;
    const n = Math.min(7, state.monte.length), mid = (n - 1) / 2;
    box.innerHTML = Array.from({ length: n }, function (_, i) {
      const rot = ((i - mid) * 8).toFixed(1);
      return "<button type='button' class='carta-costa' data-monte-index='" + i + "' aria-label='Comprar carta " + (i + 1) + "' style='--rot:" + rot + "deg;transform:rotate(" + rot + "deg)'></button>";
    }).join("");
    box.querySelectorAll("[data-monte-index]").forEach(function (carta) {
      carta.disabled = !suaVez() || state.verbo !== "comprar";
      carta.addEventListener("click", function () { comprar(Number(carta.dataset.monteIndex)); });
    });
  }
  function render() {
    if (!ORDEM.length) return;
    const atual = quem(), jogador = idJogadorLocal(), minhaMao = mao(jogador);
    document.body.dataset.assistencia = (window.MC_SALA && window.MC_SALA.assistencia) || "livre";
    paintTimer();
    if ($("#vez")) $("#vez").textContent = atual === jogador ? "Você" : (NOMES[atual] || "Jogador");
    if ($("#jogador-da-vez")) $("#jogador-da-vez").textContent = "Vez: " + (atual === jogador ? "Você" : (NOMES[atual] || "Jogador"));
    if ($("#purse")) $("#purse").innerHTML = "<div class='stash'><div class='stash-art' aria-hidden='true'><i class='bag'></i><i class='coin on'></i></div></div>";
    if ($("#saldo-numero")) $("#saldo-numero").textContent = saldo(jogador);
    if ($("#ordem")) {
      $("#ordem").innerHTML = ORDEM.map(function (id) {
        return "<li class='" + (id === atual ? "agora" : "") + "'><span>" + esc(id === jogador ? "Você" : (NOMES[id] || "Jogador")) + "</span><small>" + mao(id).length + " cartas" + (id === atual ? " · DA VEZ" : "") + "</small></li>";
      }).join("");
    }
    if ($("#log")) $("#log").textContent = state.log;
    if ($("#pistas-box")) $("#pistas-box").classList.toggle("fechado", !state.pistasAbertas);
    if ($("#pistas-chev")) $("#pistas-chev").textContent = state.pistasAbertas ? "FECHAR ▾" : "ABRIR ▸";
    if ($("#hand")) {
      $("#hand").innerHTML = minhaMao.length ? minhaMao.map(function (id) {
        const item = peca(id);
        const art = item.figura && FIGURAS[item.figura] ? "<img class='tile-art' alt='' src='" + FIGURAS[item.figura] + "'>" : "";
        return "<div class='tile tipo-" + esc(item.tipo || "pista") + "'>" + art + "<small>" + esc(item.marca) + "</small><p>" + esc(item.texto) + "</p></div>";
      }).join("") : "<p class='log'>Nenhuma pista particular.</p>";
    }
    pintarLeque();
    if ($("#monte-titulo")) $("#monte-titulo").textContent = "Monte · " + state.monte.length;
    if ($("#monte-ajuda")) $("#monte-ajuda").textContent = !state.monte.length ? "Monte vazio" : (state.verbo === "comprar" && suaVez() ? "Toque em uma carta" : "Escolha Comprar para retirar uma carta");
    if ($("#monte-box")) $("#monte-box").classList.toggle("compra-ativa", suaVez() && state.verbo === "comprar");
    document.querySelectorAll("#verbos button").forEach(function (btn) {
      btn.classList.toggle("ligado", state.verbo === btn.dataset.verbo);
      btn.disabled = !suaVez() || state.pausado;
    });
    const painel = $("#painel"), html = htmlPainel();
    if (painel) {
      painel.hidden = !html;
      painel.innerHTML = html;
      painel.querySelectorAll("[data-act='capturar-ok']").forEach(function (b) { b.addEventListener("click", function () { capturar(b.dataset.quem, b.dataset.id); }); });
      painel.querySelectorAll("[data-act='consignar-ok']").forEach(function (b) { b.addEventListener("click", function () { consignar(b.dataset.id); }); });
      painel.querySelectorAll("[data-act='arriscar-ok']").forEach(function (b) { b.addEventListener("click", function () { arriscar(b.dataset.campo, b.dataset.valor); }); });
    }
  }
  function atualizarRegra() {
    if (!CASO || !$("#rule-kicker")) return;
    $("#rule-kicker").textContent = "Demonstração · carta da ovelha";
    $("#rule-title").textContent = "Uma demonstração isolada da compra e da animação da carta especial.";
    $("#rule-verbs").innerHTML = "<li><b>Comprar · 4</b> Toque diretamente numa carta do leque.</li><li><b>Ovelha</b> A compra não cobra e entrega 6 denários.</li><li><b>Animação</b> A carta aparece e depois sai do jogo.</li><li><b>Partida normal</b> A ovelha será embaralhada aleatoriamente.</li>";
    $("#rule-lede").textContent = "Este caso não participa do sorteio das 145 pautas.";
  }
  function renderTelao(data) {
    const snap = (data && data.snap) || state;
    const pauta = data && data.pautaId && window.MC_NT_BANK && window.MC_NT_BANK.byId ? window.MC_NT_BANK.byId[data.pautaId] : null;
    if ($("#telao-pergunta")) $("#telao-pergunta").textContent = pauta && pauta.prompt ? pauta.prompt.question : (snap.fase === "lobby" ? "A pergunta será revelada no início." : (CASO && (CASO.pergunta || CASO.lede)) || "Pauta da mesa");
    if ($("#telao-msg")) $("#telao-msg").textContent = data && data.fase === "lobby" ? "Aguardando os participantes." : "Estado coletivo da partida";
    if ($("#telao-vez")) {
      const ordem = (data && data.ordem) || ORDEM;
      const atual = ordem.length ? ordem[Number(snap.vez || 0) % ordem.length] : null;
      const j = (data && data.jogadores || []).find(function (item) { return item.id === atual; });
      $("#telao-vez").textContent = j ? j.nome : (NOMES[atual] || "—");
    }
    if ($("#telao-tempo")) {
      const deadline = data && data.fase === "fechamento" ? snap.fechamentoTerminaEm : snap.turnoTerminaEm;
      $("#telao-tempo").textContent = formatarTempo(tempoRestante(deadline));
    }
    if ($("#telao-campos")) {
      const campos = pauta ? pauta.fields : CAMPOS;
      $("#telao-campos").innerHTML = campos && campos.length ? campos.map(function (item) {
        const fechado = snap.resolvidosGlobais && snap.resolvidosGlobais[item.id];
        return "<p class='" + (fechado ? "fechado" : "") + "'><b>" + esc(item.rotulo) + "</b><small>" + (fechado ? "Fechado" : "Aberto") + "</small></p>";
      }).join("") : "<p>Os campos ativos aparecerão aqui.</p>";
    }
  }
  function controleMestre(acao) {
    if (!souMestre()) return;
    const agora = Date.now();
    if (acao === "pausar") {
      if (!state.pausado) {
        state.pausaRestanteTurno = Math.max(0, state.turnoTerminaEm - agora);
        state.pausaRestantePartida = Math.max(0, state.partidaTerminaEm - agora);
        state.pausaRestanteFechamento = Math.max(0, (state.fechamentoTerminaEm || agora) - agora);
        state.pausado = true;
        state.log = "Partida pausada pelo Mestre.";
      } else {
        state.turnoTerminaEm = agora + state.pausaRestanteTurno;
        state.partidaTerminaEm = agora + state.pausaRestantePartida;
        if (state.fase === "fechamento") state.fechamentoTerminaEm = agora + state.pausaRestanteFechamento;
        state.pausado = false;
        state.log = "Partida retomada.";
      }
    } else if (acao === "adicionar-tempo") {
      const extra = state.config.tempoPorJogada * 1000;
      if (state.fase === "fechamento") {
        state.fechamentoTerminaEm = Math.max(agora, state.fechamentoTerminaEm || agora) + extra;
      } else {
        state.turnoTerminaEm = Math.max(agora, state.turnoTerminaEm || agora) + extra;
        state.partidaTerminaEm = Math.max(agora, state.partidaTerminaEm || agora) + extra;
      }
      state.log = "O Mestre acrescentou " + state.config.tempoPorJogada + " segundos.";
    } else if (acao === "passar-vez") {
      passarVez("O Mestre avançou a vez.", true);
      return;
    } else if (acao === "encerrar-fase") {
      if (state.fase === "deal") iniciarFechamento(); else if (state.fase === "fechamento") apurarPartida();
      return;
    }
    render();
    publicarEstado(state.fase, true);
  }

  carregarCaso("ovelha");
  document.addEventListener("DOMContentLoaded", function () {
    $("#go-rule")?.addEventListener("click", function () { carregarCaso("ovelha"); show("rule"); });
    $("#go-deal")?.addEventListener("click", iniciarDemo);
    $("#again")?.addEventListener("click", function () { show("open"); });
    document.querySelectorAll("#verbos button").forEach(function (btn) { btn.addEventListener("click", function () { abrirVerbo(btn.dataset.verbo); }); });
    $("#pistas-toggle")?.addEventListener("click", function () { state.pistasAbertas = !state.pistasAbertas; render(); });
  });

  window.MC_GAME_ENGINE = {
    state: state,
    iniciarDemo: iniciarDemo,
    iniciarPartida: iniciarPartida,
    configurarJogadores: configurarJogadoresCompartilhados,
    carregarCaso: carregarCaso,
    render: render,
    renderFechamento: renderFechamento,
    renderApuracao: renderApuracao,
    renderTelao: renderTelao,
    controleMestre: controleMestre,
    startTimer: startTimer,
    stopTimer: stopTimer,
    aplicarSnap: function () {}
  };
})();
