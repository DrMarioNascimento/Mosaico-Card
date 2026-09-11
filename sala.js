(function () {
  const sala = {
    codigo: null,
    mestre: null,
    uid: null,
    nome: "Você",
    forma: "n",
    ritmo: "automatico",
    jogadores: [],
    unsub: null,
    online: false,
    telao: false
  };
  window.MC_SALA = sala;

  function $(sel) { return document.querySelector(sel); }
  function fecharModal() {
    const modal = $("#modal-mestre");
    if (modal) modal.hidden = true;
  }
  function show(id) {
    fecharModal();
    document.querySelectorAll(".scene").forEach(function (el) {
      el.classList.toggle("active", el.id === id);
    });
  }
  function codigoNovo() {
    const letras = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 4; i += 1) s += letras[Math.floor(Math.random() * letras.length)];
    return s;
  }
  function refSala(cod) {
    return window.MC_FB.db.collection("salas").doc(cod);
  }
  function pintarLista(el, jogadores) {
    if (!el) return;
    if (!jogadores || !jogadores.length) {
      el.innerHTML = "<li>Ninguém na mesa ainda.</li>";
      return;
    }
    el.innerHTML = jogadores.map(function (j, i) {
      const tag = j.id === sala.mestre ? "mestre" : "jogador";
      return "<li>" + (i + 1) + ". " + (j.nome || "Jogador") + " <small>" + tag + "</small></li>";
    }).join("");
  }
  function pintar() {
    const status = $("#sala-status");
    const codigoEl = $("#sala-codigo-view");
    const btnSala = $("#btn-sala");
    if (codigoEl) codigoEl.textContent = sala.codigo || "—";
    if (btnSala) btnSala.textContent = sala.codigo || "Mestre";
    if (status) {
      if (!window.MC_FB.ready) status.textContent = window.MC_FB.err || "Conectando Firebase…";
      else if (!sala.codigo) status.textContent = "Abra uma mesa ou entre com o código.";
      else status.textContent = sala.mestre === sala.uid ? "Você é o mestre desta mesa." : "Você entrou na mesa.";
    }
    pintarLista($("#sala-lista"), sala.jogadores);
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
    sala.mestre = data.mestre;
    sala.jogadores = data.jogadores || [];
    if (window.MC_GAME && typeof window.MC_GAME.receberSala === "function" && !sala.telao) {
      window.MC_GAME.receberSala(data);
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
      ouvir(cod);
      fecharModal();
      pintar();
      show("rule");
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
      const ja = (data.jogadores || []).some(function (j) { return j.id === window.MC_FB.uid; });
      const eu = { id: window.MC_FB.uid, nome: nome, forma: sala.forma };
      const jogadores = ja ? data.jogadores : (data.jogadores || []).concat([eu]);
      const ordem = ja ? data.ordem : (data.ordem || []).concat([window.MC_FB.uid]);
      return doc.update({ jogadores: jogadores, ordem: ordem }).then(function () {
        sala.codigo = cod;
        sala.uid = window.MC_FB.uid;
        sala.nome = nome;
        sala.online = true;
        ouvir(cod);
        pintar();
        show("rule");
      });
    }).catch(function (e) {
      setStatus("#entrar-status", "Não entrou. " + (e.code || e.message || ""));
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

  document.addEventListener("mc-fb-ready", pintar);
  document.addEventListener("DOMContentLoaded", function () {
    sala.uid = window.MC_FB && window.MC_FB.uid;
    const abrir = $("#btn-abrir-mesa");
    const irEntrar = $("#btn-ir-entrar");
    const irTelao = $("#btn-ir-telao");
    const modal = $("#modal-mestre");
    fecharModal();
    if (abrir && modal) abrir.addEventListener("click", function () { modal.hidden = false; });
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
    const tVoltar = $("#btn-telao-voltar");
    if (tVoltar) tVoltar.addEventListener("click", function () { sala.telao = false; show("open"); });
    const entrarBtn = $("#btn-entrar-mesa");
    if (entrarBtn) entrarBtn.addEventListener("click", entrarNaMesa);
    const ligar = $("#btn-ligar-telao");
    if (ligar) ligar.addEventListener("click", ligarTelao);
    document.querySelectorAll("[data-forma]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        sala.forma = btn.dataset.forma;
        document.querySelectorAll("[data-forma]").forEach(function (b) { b.classList.toggle("on", b === btn); });
      });
    });
    const salaBtn = $("#btn-sala");
    const salaPanel = $("#sala-panel");
    const salaFechar = $("#sala-fechar");
    if (salaBtn && salaPanel) salaBtn.addEventListener("click", function () { salaPanel.hidden = !salaPanel.hidden; });
    if (salaFechar && salaPanel) salaFechar.addEventListener("click", function () { salaPanel.hidden = true; });
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
