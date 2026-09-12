(function () {
  "use strict";

  const FORMAS = {
    m: { emoji: "👨", label: "Bem-vindo" },
    f: { emoji: "👩", label: "Bem-vinda" },
    n: { emoji: "👥", label: "Tanto faz" }
  };
  const CONFIG_PADRAO = { tempoPorJogada: 45, duracao: "padrao", telao: false };
  const sala = {
    codigo: null,
    mestre: null,
    uid: null,
    nome: "Você",
    forma: "n",
    assistencia: "livre",
    fase: "lobby",
    ativa: true,
    jogadores: [],
    config: Object.assign({}, CONFIG_PADRAO),
    unsub: null,
    unsubRespostas: null,
    online: false,
    telao: false,
    painelAberto: false,
    comoMestre: false,
    identidadePendente: false,
    ultimoDoc: null
  };
  window.MC_SALA = sala;

  function $(sel) { return document.querySelector(sel); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  }
  function show(id) {
    fecharModal();
    document.querySelectorAll(".scene").forEach(function (el) { el.classList.toggle("active", el.id === id); });
    pintar();
  }
  function cenaAtiva() {
    const el = document.querySelector(".scene.active");
    return el ? el.id : "";
  }
  function souMestre() { return !!(sala.codigo && sala.uid && sala.mestre === sala.uid); }
  function setStatus(sel, msg) { const el = $(sel); if (el) el.textContent = msg || ""; }
  function fecharModal() { const modal = $("#modal-mestre"); if (modal) modal.hidden = true; }
  function refSala(cod) { return window.MC_FB.db.collection("salas").doc(cod); }
  function codigoNovo() {
    const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let out = "";
    for (let i = 0; i < 6; i += 1) out += chars[Math.floor(Math.random() * chars.length)];
    return out;
  }
  function joinUrl(cod, telao) {
    const u = new URL(location.href);
    u.search = "";
    u.hash = "";
    u.searchParams.set("sala", cod);
    if (telao) u.searchParams.set("telao", "1");
    return u.toString();
  }
  function qrSala(cod) {
    const url = joinUrl(cod, false);
    if (window.MosaicoQR && typeof window.MosaicoQR.svg === "function") {
      return window.MosaicoQR.svg(url, { nivel: "M", margem: 4, rotulo: "QR para entrar na mesa" });
    }
    return "<div class='sala-qr-fallback'>" + esc(url) + "</div>";
  }
  function pronto(j) { return j && j.pronto === true; }
  function todosProntos() { return sala.jogadores.length > 0 && sala.jogadores.every(pronto); }
  function impedimentoInicio() {
    const n = sala.jogadores.length;
    if (n < 2) return "Aguardando mais " + (2 - n) + ((2 - n) === 1 ? " participante." : " participantes.");
    if (n > 12) return "A sala aceita no máximo 12 participantes.";
    const pendentes = sala.jogadores.filter(function (j) { return !pronto(j); });
    if (pendentes.length) {
      const nomes = pendentes.map(function (j) { return j.nome || "Participante"; }).join(", ");
      return "Ainda " + (pendentes.length === 1 ? "falta confirmar: " : "faltam confirmar: ") + nomes + ".";
    }
    return "";
  }
  function armazenamentoAssistencia() { return "mc:assistencia:" + (sala.codigo || "local") + ":" + (sala.uid || "anon"); }

  function pintarLista(el, jogadores) {
    if (!el) return;
    if (!jogadores || !jogadores.length) {
      el.innerHTML = "<li>Aguardando jogadores…</li>";
      return;
    }
    el.innerHTML = jogadores.map(function (j) {
      const f = FORMAS[j.forma] || FORMAS.n;
      const papel = j.id === sala.mestre ? "Mestre" : "Jogador";
      const estado = pronto(j) ? "pronto" : "preparando";
      return "<li><span>" + f.emoji + " " + esc(j.nome || papel) + "</span><small>" + papel + " · " + estado + "</small></li>";
    }).join("");
  }

  function pintarLobby() {
    const master = souMestre();
    if ($("#lobby-codigo")) $("#lobby-codigo").textContent = sala.codigo || "—";
    if ($("#lobby-qr") && sala.codigo) $("#lobby-qr").innerHTML = qrSala(sala.codigo);
    if ($("#lobby-qr-wrap")) $("#lobby-qr-wrap").hidden = !master;
    if ($("#lobby-titulo")) $("#lobby-titulo").textContent = master ? "Sala aberta" : "Você entrou";
    if ($("#lobby-kicker")) $("#lobby-kicker").textContent = master ? "Mestre da mesa" : "Sala";
    if ($("#btn-lobby-voltar")) $("#btn-lobby-voltar").textContent = master ? "← Encerrar sala" : "← Sair";
    if ($("#lobby-nota")) {
      const n = sala.jogadores.length;
      const recomendado = window.MC_RULES && n >= 2 && n <= 12 ? window.MC_RULES.tempoRecomendado(n) : null;
      const tempo = recomendado ? " Tempo escolhido: " + sala.config.tempoPorJogada + " s; sugestão para " + n + ": " + recomendado + " s." : "";
      $("#lobby-nota").textContent = master
        ? "A sala já está aberta. Enquanto as pessoas entram, todos escolhem sua experiência individual." + tempo
        : "Escolha sua experiência e aguarde o Mestre iniciar." + tempo;
    }
    pintarLista($("#lobby-lista"), sala.jogadores);
    const impedimento = impedimentoInicio();
    if ($("#lobby-prontidao")) {
      $("#lobby-prontidao").textContent = impedimento ||
        sala.jogadores.length + (sala.jogadores.length === 1 ? " participante pronto." : " participantes prontos.");
    }
    const iniciar = $("#btn-iniciar-partida");
    if (iniciar) {
      iniciar.hidden = !master;
      iniciar.disabled = false;
      iniciar.setAttribute("aria-disabled", impedimento ? "true" : "false");
      iniciar.title = impedimento;
    }
    if ($("#lobby-espera")) $("#lobby-espera").hidden = master;
    if ($("#btn-abrir-telao")) $("#btn-abrir-telao").hidden = !(master && sala.config.telao);
  }

  function abrirPainel() { sala.painelAberto = true; if ($("#sala-panel")) $("#sala-panel").hidden = false; }
  function fecharPainel() { sala.painelAberto = false; if ($("#sala-panel")) $("#sala-panel").hidden = true; }
  function togglePainel() { if (sala.painelAberto) fecharPainel(); else abrirPainel(); }
  function pintarPainel() {
    const painel = $("#sala-panel");
    if (!painel) return;
    if ($("#sala-codigo-view")) $("#sala-codigo-view").textContent = sala.codigo || "—";
    if ($("#sala-qr") && sala.codigo) $("#sala-qr").innerHTML = qrSala(sala.codigo);
    if ($("#sala-n")) $("#sala-n").textContent = String(sala.jogadores.length);
    pintarLista($("#sala-lista"), sala.jogadores);
    if ($("#sala-ritmo-nota")) {
      $("#sala-ritmo-nota").textContent = "Jogadas de " + sala.config.tempoPorJogada + " s · partida " + sala.config.duracao + (sala.config.telao ? " · com telão" : " · sem telão");
    }
    if ($("#sala-controle")) $("#sala-controle").textContent = sala.fase === "lobby" ? "Os controles serão ativados quando a partida começar." : "O Mestre pode intervir sem alterar as regras de pontuação.";
    if ($("#controle-mestre")) $("#controle-mestre").hidden = !souMestre() || sala.fase === "lobby";
    if ($("#sala-status")) $("#sala-status").textContent = souMestre() ? "Você administra a sala e participa como jogador." : "Você participa desta mesa.";
    painel.hidden = !sala.painelAberto;
  }

  function pintarBotoes() {
    const noJogo = ["deal", "fechamento", "judge"].includes(cenaAtiva());
    if ($("#btn-sala")) $("#btn-sala").hidden = !(souMestre() && cenaAtiva() === "deal");
    if ($("#btn-mestre-flutuante")) $("#btn-mestre-flutuante").hidden = !(souMestre() && noJogo && cenaAtiva() !== "deal");
  }
  function pintarTelao(data) {
    if (!sala.telao) return;
    if ($("#telao-codigo")) $("#telao-codigo").textContent = sala.codigo || "—";
    pintarLista($("#telao-lista"), sala.jogadores);
    if (window.MC_GAME && typeof window.MC_GAME.renderTelao === "function") window.MC_GAME.renderTelao(data || sala.ultimoDoc || {});
  }
  function pintar() { pintarLobby(); pintarPainel(); pintarBotoes(); pintarTelao(); }

  function aplicarDoc(data) {
    if (!data) return;
    sala.ultimoDoc = data;
    if (data.ativa === false || data.fase === "encerrada") {
      if (sala.telao) { setStatus("#telao-msg", "Esta mesa foi encerrada."); return; }
      resetarSala("A mesa foi encerrada pelo Mestre.");
      return;
    }
    sala.mestre = data.mestre;
    sala.jogadores = data.jogadores || [];
    sala.config = Object.assign({}, CONFIG_PADRAO, data.config || {});
    sala.fase = data.fase || "lobby";
    sala.ativa = data.ativa !== false;
    if (sala.fase === "fechamento" && souMestre()) ouvirRespostasFinais();
    else pararRespostasFinais();
    if (window.MC_GAME && typeof window.MC_GAME.receberSala === "function") window.MC_GAME.receberSala(data, { telao: sala.telao });
    if (!sala.telao && sala.fase === "lobby" && !sala.identidadePendente && cenaAtiva() !== "assistencia") show("lobby");
    pintar();
  }
  function ouvir(cod) {
    if (sala.unsub) sala.unsub();
    sala.unsub = refSala(cod).onSnapshot(function (snap) {
      if (snap.exists) aplicarDoc(snap.data());
    }, function (e) {
      setStatus(sala.telao ? "#telao-msg" : "#sala-status", "Não foi possível sincronizar a sala. " + (e.code || ""));
    });
  }
  function pararRespostasFinais() {
    if (sala.unsubRespostas) { sala.unsubRespostas(); sala.unsubRespostas = null; }
  }
  function ouvirRespostasFinais() {
    if (sala.unsubRespostas || !sala.codigo || !souMestre()) return;
    sala.unsubRespostas = refSala(sala.codigo).collection("respostasFinais").onSnapshot(function (query) {
      const respostas = {};
      query.forEach(function (doc) { respostas[doc.id] = (doc.data() || {}).respostas || {}; });
      if (window.MC_GAME_ENGINE) window.MC_GAME_ENGINE.state.respostasFinais = respostas;
    });
  }
  function resetarSala(msg) {
    if (sala.unsub) { sala.unsub(); sala.unsub = null; }
    pararRespostasFinais();
    Object.assign(sala, {
      codigo: null, mestre: null, online: false, fase: "lobby", jogadores: [], painelAberto: false,
      comoMestre: false, identidadePendente: false, telao: false, ultimoDoc: null
    });
    fecharPainel();
    show("open");
    if (msg) setStatus("#entrar-status", msg);
  }

  function selecionarGrupo(selector, atributo, valor) {
    document.querySelectorAll(selector).forEach(function (btn) {
      const on = btn.dataset[atributo] === String(valor);
      btn.classList.toggle("on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  function lerConfigModal() {
    const tempo = document.querySelector("[data-tempo].on");
    const duracao = document.querySelector("[data-duracao].on");
    return {
      tempoPorJogada: Number(tempo ? tempo.dataset.tempo : 45),
      duracao: duracao ? duracao.dataset.duracao : "padrao",
      telao: !!($("#usa-telao") && $("#usa-telao").checked)
    };
  }
  function abrirConfiguracao() {
    const modal = $("#modal-mestre");
    if (!modal) return;
    selecionarGrupo("[data-tempo]", "tempo", sala.config.tempoPorJogada);
    selecionarGrupo("[data-duracao]", "duracao", sala.config.duracao);
    if ($("#usa-telao")) $("#usa-telao").checked = !!sala.config.telao;
    setStatus("#mestre-status", "");
    modal.hidden = false;
  }
  function prepararIdentidade(comoMestre) {
    sala.comoMestre = !!comoMestre;
    sala.identidadePendente = true;
    if ($("#entrar")) $("#entrar").setAttribute("data-modo", comoMestre ? "mestre" : "convidado");
    if ($("#entrar-kicker")) $("#entrar-kicker").textContent = comoMestre ? "Etapa 2 · você também joga" : "Entrar";
    if ($("#entrar-titulo")) $("#entrar-titulo").textContent = comoMestre ? "Como a mesa vai chamar você?" : "Quem chega agora?";
    if ($("#entrar-lede")) $("#entrar-lede").textContent = comoMestre ? "A sala já está aberta. Agora defina sua identidade de jogador." : "Informe seu nome e o código da mesa.";
    if ($("#entrar-aviso")) {
      $("#entrar-aviso").hidden = !comoMestre;
      $("#entrar-aviso").textContent = comoMestre ? "O QR já está ativo para quem está chegando." : "";
    }
    if ($("#campo-cod")) $("#campo-cod").hidden = comoMestre;
    setStatus("#entrar-status", "");
    show("entrar");
    setTimeout(function () { if ($("#nome")) $("#nome").focus(); }, 20);
  }

  async function criarSalaConfigurada() {
    if (!window.MC_FB.ready) { setStatus("#mestre-status", window.MC_FB.err || "Firebase ainda conectando."); return; }
    sala.config = lerConfigModal();
    sala.uid = window.MC_FB.uid;
    for (let tentativa = 0; tentativa < 5; tentativa += 1) {
      const cod = codigoNovo();
      const ref = refSala(cod);
      try {
        await window.MC_FB.db.runTransaction(async function (tx) {
          const snap = await tx.get(ref);
          if (snap.exists) throw new Error("codigo-em-uso");
          tx.set(ref, {
            schemaVersion: 2,
            codigo: cod,
            mestre: sala.uid,
            fase: "lobby",
            ativa: true,
            config: sala.config,
            jogadores: [{ id: sala.uid, nome: "Mestre", forma: "n", pronto: false }],
            ordem: [sala.uid],
            pautaId: null,
            snap: null,
            criado: firebase.firestore.FieldValue.serverTimestamp()
          });
        });
        sala.codigo = cod;
        sala.mestre = sala.uid;
        sala.online = true;
        sala.jogadores = [{ id: sala.uid, nome: "Mestre", forma: "n", pronto: false }];
        sala.fase = "lobby";
        ouvir(cod);
        fecharModal();
        prepararIdentidade(true);
        return;
      } catch (e) {
        if (String(e && e.message) === "codigo-em-uso") continue;
        setStatus("#mestre-status", "Não foi possível criar a sala. " + (e.code || e.message || ""));
        return;
      }
    }
    setStatus("#mestre-status", "Não foi possível gerar um código livre. Tente novamente.");
  }

  async function atualizarJogador(mutador) {
    const ref = refSala(sala.codigo);
    await window.MC_FB.db.runTransaction(async function (tx) {
      const snap = await tx.get(ref);
      if (!snap.exists) throw new Error("Sala não encontrada.");
      const data = snap.data();
      const jogadores = (data.jogadores || []).map(function (j) { return j.id === sala.uid ? mutador(Object.assign({}, j)) : j; });
      tx.update(ref, { jogadores: jogadores });
    });
  }
  async function confirmarIdentidade() {
    if (!window.MC_FB.ready) { setStatus("#entrar-status", window.MC_FB.err || "Firebase ainda conectando."); return; }
    const nome = (($("#nome") && $("#nome").value) || "").trim();
    if (!nome) { setStatus("#entrar-status", "Digite o nome que a mesa vai ver."); return; }
    sala.uid = window.MC_FB.uid;
    sala.nome = nome;
    try {
      if (sala.comoMestre && sala.codigo) {
        await atualizarJogador(function (j) { j.nome = nome; j.forma = sala.forma; j.pronto = false; return j; });
      } else {
        const cod = (($("#cod") && $("#cod").value) || "").trim().toUpperCase();
        if (!cod) { setStatus("#entrar-status", "Digite o código da mesa."); return; }
        const ref = refSala(cod);
        await window.MC_FB.db.runTransaction(async function (tx) {
          const snap = await tx.get(ref);
          if (!snap.exists) throw new Error("Sala não encontrada.");
          const data = snap.data();
          if (data.ativa === false || data.fase !== "lobby") throw new Error("A entrada desta sala já foi encerrada.");
          const jogadores = (data.jogadores || []).slice();
          const existente = jogadores.findIndex(function (j) { return j.id === sala.uid; });
          const eu = { id: sala.uid, nome: nome, forma: sala.forma, pronto: false };
          if (existente >= 0) jogadores[existente] = eu; else jogadores.push(eu);
          const ordem = (data.ordem || []).includes(sala.uid) ? data.ordem : (data.ordem || []).concat(sala.uid);
          tx.update(ref, { jogadores: jogadores, ordem: ordem });
          sala.mestre = data.mestre;
          sala.config = Object.assign({}, CONFIG_PADRAO, data.config || {});
        });
        sala.codigo = cod;
        sala.online = true;
        ouvir(cod);
      }
      sala.identidadePendente = false;
      show("assistencia");
    } catch (e) {
      setStatus("#entrar-status", e.message || "Não foi possível entrar.");
    }
  }
  async function confirmarAssistencia() {
    const selecionada = document.querySelector("[data-assistencia].on");
    sala.assistencia = selecionada ? selecionada.dataset.assistencia : "livre";
    try { localStorage.setItem(armazenamentoAssistencia(), sala.assistencia); } catch (_) { /* sessão atual */ }
    try {
      await atualizarJogador(function (j) { j.pronto = true; return j; });
      show("lobby");
    } catch (e) {
      setStatus("#entrar-status", "Não foi possível confirmar sua experiência. " + (e.message || ""));
    }
  }

  function escolherPauta() {
    if (!window.MC_NT_BANK || typeof window.MC_NT_BANK.sortear !== "function") return { erro: "O banco NT ainda não foi carregado." };
    return window.MC_NT_BANK.sortear();
  }
  function iniciarPartida() {
    if (!souMestre()) return;
    const impedimento = impedimentoInicio();
    if (impedimento) {
      setStatus("#lobby-prontidao", impedimento);
      return;
    }
    const sorteio = escolherPauta();
    if (!sorteio || sorteio.erro || !sorteio.caso) {
      setStatus("#lobby-prontidao", (sorteio && sorteio.erro) || "Nenhuma pauta validada está disponível para sorteio.");
      return;
    }
    if (window.MC_GAME && typeof window.MC_GAME.iniciarPartida === "function") {
      window.MC_GAME.iniciarPartida(sorteio.caso, sala.config, sala.jogadores);
    }
  }
  async function encerrarSala() {
    if (!souMestre() || !sala.codigo) return;
    if (!window.confirm("Encerrar esta sala para todos os participantes?")) return;
    try { await refSala(sala.codigo).update({ ativa: false, fase: "encerrada" }); resetarSala(); }
    catch (e) { setStatus("#sala-status", "Não foi possível encerrar a sala. " + (e.code || e.message || "")); }
  }
  function ligarTelao(cod) {
    if (!window.MC_FB.ready) { setStatus("#telao-msg", window.MC_FB.err || "Firebase ainda conectando."); return; }
    sala.telao = true;
    sala.codigo = cod;
    sala.online = true;
    ouvir(cod);
    show("telao");
    setStatus("#telao-msg", "Telão ligado nesta mesa.");
  }

  sala.publicar = function (payload) {
    if (!sala.codigo || !window.MC_FB.ready || sala.telao) return Promise.resolve(false);
    const ref = refSala(sala.codigo);
    const autor = sala.uid;
    return window.MC_FB.db.runTransaction(async function (tx) {
      const doc = await tx.get(ref);
      if (!doc.exists) throw new Error("Sala não encontrada.");
      const atual = doc.data();
      const atualSnap = atual.snap || {};
      const novoSnap = payload.snap || {};
      const atualId = Number(atualSnap.turnoId || 0);
      const novoId = Number(novoSnap.turnoId || 0);
      const ordem = atual.ordem || [];
      const jogadorDaVez = ordem[Number(atualSnap.vez || 0) % Math.max(1, ordem.length)];
      const transicaoMestre = payload.fase !== atual.fase || payload.controleMestre;
      if (transicaoMestre && autor !== atual.mestre) throw new Error("Somente o Mestre pode mudar a fase.");
      if (!transicaoMestre && atualSnap.turnoId && autor !== jogadorDaVez && autor !== atual.mestre) throw new Error("Ação fora da vez.");
      if (atualSnap.turnoId && novoId <= atualId) throw new Error("Esta jogada chegou depois da próxima vez.");
      tx.set(ref, Object.assign({}, payload, { autorUltimaMudanca: autor }), { merge: true });
      return true;
    }).catch(function (e) {
      setStatus("#sala-status", e.message || "A ação não foi aplicada.");
      return false;
    });
  };
  sala.souMestre = souMestre;
  sala.pintar = pintar;
  sala.show = show;
  sala.togglePainel = togglePainel;

  document.addEventListener("mc-fb-ready", function () { sala.uid = window.MC_FB && window.MC_FB.uid; pintar(); });
  document.addEventListener("DOMContentLoaded", function () {
    sala.uid = window.MC_FB && window.MC_FB.uid;
    fecharModal();
    fecharPainel();
    $("#btn-abrir-mesa")?.addEventListener("click", abrirConfiguracao);
    $("#btn-cancelar-mestre")?.addEventListener("click", fecharModal);
    $("#modal-mestre")?.addEventListener("click", function (e) { if (e.target === $("#modal-mestre")) fecharModal(); });
    $("#btn-abrir-com-mesa")?.addEventListener("click", criarSalaConfigurada);
    $("#btn-ir-entrar")?.addEventListener("click", function () { prepararIdentidade(false); });
    $("#btn-voltar-open")?.addEventListener("click", function () { if (sala.comoMestre && sala.codigo) show("lobby"); else show("open"); });
    $("#btn-entrar-mesa")?.addEventListener("click", confirmarIdentidade);
    $("#btn-confirmar-assistencia")?.addEventListener("click", confirmarAssistencia);
    $("#btn-iniciar-partida")?.addEventListener("click", iniciarPartida);
    $("#btn-abrir-telao")?.addEventListener("click", function () { if (sala.codigo) window.open(joinUrl(sala.codigo, true), "mosaico-telao"); });
    $("#btn-lobby-voltar")?.addEventListener("click", function () { if (souMestre()) encerrarSala(); else resetarSala(); });
    $("#btn-encerrar-sala")?.addEventListener("click", encerrarSala);
    $("#btn-sala")?.addEventListener("click", function (e) { e.preventDefault(); abrirPainel(); pintarPainel(); });
    $("#btn-mestre-flutuante")?.addEventListener("click", togglePainel);
    $("#sala-fechar")?.addEventListener("click", fecharPainel);
    $("#sala-panel")?.addEventListener("click", function (e) { if (e.target === $("#sala-panel")) fecharPainel(); });
    ["pausar", "adicionar-tempo", "passar-vez", "encerrar-fase"].forEach(function (acao) {
      $("#btn-" + acao)?.addEventListener("click", function () { if (window.MC_GAME && window.MC_GAME.controleMestre) window.MC_GAME.controleMestre(acao); });
    });
    document.querySelectorAll("[data-forma]").forEach(function (btn) {
      btn.addEventListener("click", function () { sala.forma = btn.dataset.forma; selecionarGrupo("[data-forma]", "forma", sala.forma); });
    });
    document.querySelectorAll("[data-assistencia]").forEach(function (btn) {
      btn.addEventListener("click", function () { selecionarGrupo("[data-assistencia]", "assistencia", btn.dataset.assistencia); });
    });
    document.querySelectorAll("[data-tempo]").forEach(function (btn) {
      btn.addEventListener("click", function () { selecionarGrupo("[data-tempo]", "tempo", btn.dataset.tempo); });
    });
    document.querySelectorAll("[data-duracao]").forEach(function (btn) {
      btn.addEventListener("click", function () { selecionarGrupo("[data-duracao]", "duracao", btn.dataset.duracao); });
    });
    ["#nome", "#cod"].forEach(function (sel) {
      $(sel)?.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); confirmarIdentidade(); } });
    });
    const q = new URLSearchParams(location.search);
    if (q.get("telao") && q.get("sala")) ligarTelao(q.get("sala").toUpperCase());
    else if (q.get("sala")) { if ($("#cod")) $("#cod").value = q.get("sala").toUpperCase(); prepararIdentidade(false); }
    pintar();
  });
})();
