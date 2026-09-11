(function () {
  const FORMAS = {
    m: { emoji: "👨", label: "Bem-vindo" },
    f: { emoji: "👩", label: "Bem-vinda" },
    n: { emoji: "👥", label: "Tanto faz" }
  };
  const sala = {
    codigo: null,
    mestre: null,
    uid: null,
    nome: "Você",
    forma: "n",
    ritmo: "automatico",
    fase: "lobby",
    ativa: true,
    jogadores: [],
    unsub: null,
    online: false,
    telao: false,
    painelAberto: false
  };
  window.MC_SALA = sala;

  function $(sel) { return document.querySelector(sel); }
  function cenaAtiva() {
    const el = document.querySelector(".scene.active");
    return el ? el.id : "";
  }
  function souMestre() {
    return !!(sala.codigo && sala.uid && sala.mestre === sala.uid);
  }
  function fecharModal() {
    const modal = $("#modal-mestre");
    if (modal) modal.hidden = true;
  }
  function show(id) {
    fecharModal();
    document.querySelectorAll(".scene").forEach(function (el) {
      el.classList.toggle("active", el.id === id);
    });
    pintar();
  }
  function codigoNovo() {
    const letras = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 6; i += 1) s += letras[Math.floor(Math.random() * letras.length)];
    return s;
  }
  function refSala(cod) {
    return window.MC_FB.db.collection("salas").doc(cod);
  }
  function joinUrl(cod) {
    const u = new URL(location.href);
    u.search = "";
    u.hash = "";
    u.searchParams.set("sala", cod);
    return u.toString();
  }
  function qrSala(cod) {
    const url = joinUrl(cod);
    if (window.MosaicoQR && typeof window.MosaicoQR.svg === "function") {
      return window.MosaicoQR.svg(url, { nivel: "M", margem: 4, rotulo: "QR para entrar na mesa" });
    }
    return "<div class='sala-qr-fallback'>" + esc(url) + "</div>";
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c];
    });
  }
  function pintarLista(el, jogadores) {
    if (!el) return;
    if (!jogadores || !jogadores.length) {
      el.innerHTML = "<li>Aguardando jogadores…</li>";
      return;
    }
    el.innerHTML = jogadores.map(function (j) {
      const f = FORMAS[j.forma] || FORMAS.n;
      const tag = j.id === sala.mestre ? "Mestre" : "Jogador";
      return "<li><span>" + f.emoji + " " + esc(j.nome || "Jogador") + "</span><small>" + tag + "</small></li>";
    }).join("");
  }
  function abrirPainel() {
    sala.painelAberto = true;
    const painel = $("#sala-panel");
    if (painel) painel.hidden = false;
  }
  function fecharPainel() {
    sala.painelAberto = false;
    const painel = $("#sala-panel");
    if (painel) painel.hidden = true;
  }
  function togglePainel() {
    if (sala.painelAberto) fecharPainel();
    else abrirPainel();
  }
  function pintarPainel() {
    const painel = $("#sala-panel");
    if (!painel) return;
    const codigoEl = $("#sala-codigo-view");
    const qrEl = $("#sala-qr");
    const nEl = $("#sala-n");
    const ritmoEl = $("#sala-ritmo-nota");
    const controle = $("#sala-controle");
    const status = $("#sala-status");
    if (codigoEl) codigoEl.textContent = sala.codigo || "—";
    if (qrEl) qrEl.innerHTML = sala.codigo ? qrSala(sala.codigo) : "";
    if (nEl) nEl.textContent = String((sala.jogadores || []).length);
    pintarLista($("#sala-lista"), sala.jogadores);
    const conduzido = sala.ritmo === "conduzido";
    if (ritmoEl) {
      ritmoEl.textContent = conduzido
        ? "Ritmo conduzido pelo Mestre"
        : "Ritmo automático";
    }
    if (controle) {
      controle.textContent = conduzido
        ? "Ritmo conduzido pelo Mestre: avance pelo painel quando a mesa estiver pronta."
        : "Ritmo automático: o jogo avança quando todos terminam.";
    }
    if (status) {
      if (!window.MC_FB.ready) status.textContent = window.MC_FB.err || "Conectando Firebase…";
      else if (!sala.codigo) status.textContent = "Abra uma mesa ou entre com o código.";
      else status.textContent = souMestre() ? "Você é o mestre desta mesa." : "Você entrou na mesa.";
    }
    painel.hidden = !sala.painelAberto;
  }
  function pintarLobby() {
    const master = souMestre();
    const codigo = $("#lobby-codigo");
    const qrBox = $("#lobby-qr");
    const qrWrap = $("#lobby-qr-wrap");
    const nota = $("#lobby-nota");
    const titulo = $("#lobby-titulo");
    const kicker = $("#lobby-kicker");
    const sair = $("#btn-lobby-voltar");
    if (codigo) codigo.textContent = sala.codigo || "—";
    if (qrBox && sala.codigo) qrBox.innerHTML = qrSala(sala.codigo);
    if (qrWrap) qrWrap.hidden = !master;
    if (titulo) titulo.textContent = master ? "Sala aberta" : "Você entrou";
    if (kicker) kicker.textContent = master ? "Mestre da Mesa" : "Sala";
    if (sair) sair.textContent = master ? "← Encerrar sala" : "← Sair";
    if (nota) {
      nota.textContent = master
        ? "Aponte a câmera para o QR ou informe o código. QR e código ficam nesta sala durante toda a entrada."
        : "Você entrou. Aguarde o Mestre iniciar a partida.";
    }
    pintarLista($("#lobby-lista"), sala.jogadores);
    const iniciar = $("#btn-iniciar-partida");
    const espera = $("#lobby-espera");
    if (iniciar) iniciar.hidden = !master;
    if (espera) espera.hidden = master;
  }
  function pintarBotoes() {
    const master = souMestre();
    const noJogo = cenaAtiva() === "deal" || cenaAtiva() === "judge";
    const flutuante = $("#btn-mestre-flutuante");
    if (flutuante) {
      flutuante.hidden = !(master && noJogo && cenaAtiva() !== "deal");
      flutuante.textContent = "Mestre";
    }
    const btnSala = $("#btn-sala");
    if (btnSala) {
      btnSala.textContent = "Mestre";
      btnSala.hidden = !(master && cenaAtiva() === "deal");
      const cell = btnSala.closest(".cell-sala");
      if (cell) cell.hidden = btnSala.hidden;
    }
  }
  function pintar() {
    pintarLobby();
    pintarPainel();
    pintarBotoes();
    if (sala.telao) {
      const tc = $("#telao-codigo");
      const tm = $("#telao-vez");
      if (tc) tc.textContent = sala.codigo || "—";
      pintarLista($("#telao-lista"), sala.jogadores);
      if (tm) tm.textContent = (sala.jogadores.length ? sala.jogadores.length + " na mesa." : "Esperando jogadores.");
    }
  }
  function aplicarDoc(data) {
    if (!data) return;
    if (data.ativa === false || data.fase === "encerrada") {
      if (sala.telao) {
        setStatus("#telao-msg", "Esta mesa foi encerrada.");
        return;
      }
      resetarSala("A mesa foi encerrada pelo Mestre.");
      return;
    }
    sala.mestre = data.mestre;
    sala.jogadores = data.jogadores || [];
    sala.ritmo = data.ritmo || sala.ritmo;
    sala.fase = data.fase || sala.fase;
    sala.ativa = data.ativa !== false;
    if (window.MC_GAME && typeof window.MC_GAME.receberSala === "function" && !sala.telao) {
      window.MC_GAME.receberSala(data);
    }
    if (!sala.telao && (data.fase === "deal" || data.fase === "jogo") && cenaAtiva() === "lobby") {
      /* O motor do jogo assume a cena deal ao aplicar o snap. */
    }
    pintar();
  }
  function ouvir(cod) {
    if (sala.unsub) sala.unsub();
    sala.unsub = refSala(cod).onSnapshot(function (snap) {
      if (!snap.exists) return;
      aplicarDoc(snap.data());
    }, function (e) {
      const status = $("#sala-status");
      if (status) status.textContent = "Firestore ainda não está ligado. " + (e.code || "");
      const es = $("#entrar-status");
      if (es) es.textContent = "Firestore ainda não está ligado. " + (e.code || "");
    });
  }
  function setStatus(sel, msg) {
    const el = $(sel);
    if (el) el.textContent = msg;
  }
  function resetarSala(msg) {
    if (sala.unsub) { sala.unsub(); sala.unsub = null; }
    sala.codigo = null;
    sala.mestre = null;
    sala.online = false;
    sala.fase = "lobby";
    sala.jogadores = [];
    sala.painelAberto = false;
    fecharPainel();
    if (msg) setStatus("#entrar-status", msg);
    show("open");
  }
  function aposAbrirOuEntrar() {
    fecharModal();
    pintar();
    if (sala.fase === "deal" || sala.fase === "jogo") return;
    show("lobby");
  }
  function criarMesa() {
    if (!window.MC_FB.ready) {
      setStatus("#mestre-status", window.MC_FB.err || "Firebase ainda conectando.");
      return;
    }
    const nome = "Mestre";
    const cod = codigoNovo();
    const eu = { id: window.MC_FB.uid, nome: nome, forma: sala.forma };
    refSala(cod).set({
      codigo: cod,
      mestre: window.MC_FB.uid,
      casoId: window.MC_GAME ? window.MC_GAME.casoId() : "ovelha",
      fase: "lobby",
      ativa: true,
      ritmo: sala.ritmo,
      jogadores: [eu],
      ordem: [window.MC_FB.uid],
      snap: null,
      criado: firebase.firestore.FieldValue.serverTimestamp()
    }).then(function () {
      sala.codigo = cod;
      sala.uid = window.MC_FB.uid;
      sala.nome = nome;
      sala.mestre = window.MC_FB.uid;
      sala.online = true;
      sala.fase = "lobby";
      sala.ativa = true;
      ouvir(cod);
      aposAbrirOuEntrar();
    }).catch(function (e) {
      setStatus("#mestre-status", "Não abriu a mesa. Ligue Authentication anônimo e o Firestore. " + (e.code || ""));
    });
  }
  function entrarNaMesa() {
    if (!window.MC_FB.ready) {
      setStatus("#entrar-status", window.MC_FB.err || "Firebase ainda conectando.");
      return;
    }
    const nome = ($("#nome") && $("#nome").value.trim()) || "Jogador";
    const cod = (($("#cod") && $("#cod").value) || "").trim().toUpperCase();
    if (!cod) {
      setStatus("#entrar-status", "Digite o código da mesa.");
      return;
    }
    const doc = refSala(cod);
    doc.get().then(function (snap) {
      if (!snap.exists) {
        setStatus("#entrar-status", "Sala " + cod + " não existe.");
        return;
      }
      const data = snap.data();
      if (data.ativa === false || data.fase === "encerrada") {
        setStatus("#entrar-status", "Esta mesa já foi encerrada.");
        return;
      }
      const ja = (data.jogadores || []).some(function (j) { return j.id === window.MC_FB.uid; });
      const eu = { id: window.MC_FB.uid, nome: nome, forma: sala.forma };
      const jogadores = ja ? data.jogadores : (data.jogadores || []).concat([eu]);
      const ordem = ja ? data.ordem : (data.ordem || []).concat([window.MC_FB.uid]);
      return doc.update({ jogadores: jogadores, ordem: ordem }).then(function () {
        sala.codigo = cod;
        sala.uid = window.MC_FB.uid;
        sala.nome = nome;
        sala.online = true;
        sala.fase = data.fase || "lobby";
        sala.mestre = data.mestre;
        ouvir(cod);
        aposAbrirOuEntrar();
      });
    }).catch(function (e) {
      setStatus("#entrar-status", "Não entrou. " + (e.code || e.message || ""));
    });
  }
  function iniciarPartida() {
    if (!souMestre()) return;
    if (typeof startDeal === "function") startDeal();
    sala.fase = "deal";
    pintar();
  }
  function encerrarSala() {
    if (!souMestre() || !sala.codigo) return;
    if (!window.confirm("Encerrar esta sala para todos os participantes?")) return;
    refSala(sala.codigo).update({
      ativa: false,
      fase: "encerrada"
    }).then(function () {
      resetarSala();
    }).catch(function (e) {
      setStatus("#sala-status", "Não foi possível encerrar a sala. " + (e.code || e.message || ""));
    });
  }
  function ligarTelao() {
    const cod = (($("#telao-cod") && $("#telao-cod").value) || "").trim().toUpperCase();
    if (!cod) {
      setStatus("#telao-msg", "Digite o código da mesa.");
      return;
    }
    if (!window.MC_FB.ready) {
      setStatus("#telao-msg", window.MC_FB.err || "Firebase ainda conectando.");
      return;
    }
    sala.telao = true;
    sala.codigo = cod;
    ouvir(cod);
    $("#telao-codigo").textContent = cod;
    setStatus("#telao-msg", "Telão ligado nesta mesa.");
  }
  sala.publicar = function (payload) {
    if (!sala.codigo || !window.MC_FB.ready || sala.telao) return;
    refSala(sala.codigo).set(payload, { merge: true }).catch(function () {});
  };
  sala.pintar = pintar;
  sala.show = show;
  sala.togglePainel = togglePainel;

  document.addEventListener("mc-fb-ready", function () {
    sala.uid = window.MC_FB && window.MC_FB.uid;
    pintar();
  });
  document.addEventListener("DOMContentLoaded", function () {
    sala.uid = window.MC_FB && window.MC_FB.uid;
    const abrir = $("#btn-abrir-mesa");
    const irEntrar = $("#btn-ir-entrar");
    const irTelao = $("#btn-ir-telao");
    const modal = $("#modal-mestre");
    fecharModal();
    fecharPainel();
    if (abrir && modal) {
      abrir.addEventListener("click", function () {
        modal.hidden = false;
        setStatus("#mestre-status", "");
      });
    }
    const cancel = $("#btn-cancelar-mestre");
    if (cancel) cancel.addEventListener("click", fecharModal);
    if (modal) modal.addEventListener("click", function (e) { if (e.target === modal) fecharModal(); });
    const goRule = $("#go-rule");
    if (goRule) goRule.addEventListener("click", fecharModal);
    document.querySelectorAll("[data-ritmo]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        sala.ritmo = btn.dataset.ritmo;
        document.querySelectorAll("[data-ritmo]").forEach(function (b) { b.classList.toggle("on", b === btn); });
      });
    });
    const abrirOk = $("#btn-abrir-com-mesa");
    if (abrirOk) abrirOk.addEventListener("click", criarMesa);
    if (irEntrar) irEntrar.addEventListener("click", function () { show("entrar"); });
    if (irTelao) irTelao.addEventListener("click", function () { show("telao"); });
    const voltar = $("#btn-voltar-open");
    if (voltar) voltar.addEventListener("click", function () { show("open"); });
    const lobbyVoltar = $("#btn-lobby-voltar");
    if (lobbyVoltar) lobbyVoltar.addEventListener("click", function () {
      if (souMestre()) encerrarSala();
      else resetarSala();
    });
    const tVoltar = $("#btn-telao-voltar");
    if (tVoltar) tVoltar.addEventListener("click", function () { sala.telao = false; show("open"); });
    const entrarBtn = $("#btn-entrar-mesa");
    if (entrarBtn) entrarBtn.addEventListener("click", entrarNaMesa);
    const ligar = $("#btn-ligar-telao");
    if (ligar) ligar.addEventListener("click", ligarTelao);
    const iniciar = $("#btn-iniciar-partida");
    if (iniciar) iniciar.addEventListener("click", iniciarPartida);
    const encerrar = $("#btn-encerrar-sala");
    if (encerrar) encerrar.addEventListener("click", encerrarSala);
    document.querySelectorAll("[data-forma]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        sala.forma = btn.dataset.forma;
        document.querySelectorAll("[data-forma]").forEach(function (b) { b.classList.toggle("on", b === btn); });
      });
    });
    const salaBtn = $("#btn-sala");
    const flutuante = $("#btn-mestre-flutuante");
    const salaFechar = $("#sala-fechar");
    if (salaBtn) salaBtn.addEventListener("click", togglePainel);
    if (flutuante) flutuante.addEventListener("click", togglePainel);
    if (salaFechar) salaFechar.addEventListener("click", fecharPainel);
    const painel = $("#sala-panel");
    if (painel) {
      painel.addEventListener("click", function (e) {
        if (e.target === painel) fecharPainel();
      });
    }
    const q = new URLSearchParams(location.search);
    if (q.get("telao")) {
      show("telao");
      if (q.get("sala") && $("#telao-cod")) {
        $("#telao-cod").value = q.get("sala");
        ligarTelao();
      }
    } else if (q.get("sala") && $("#cod")) {
      $("#cod").value = q.get("sala");
      show("entrar");
    }
    pintar();
  });
})();
