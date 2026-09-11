(function () {
  const sala = {
    codigo: null,
    mestre: null,
    uid: null,
    nome: "Você",
    jogadores: [],
    unsub: null,
    online: false
  };
  window.MC_SALA = sala;

  function $(sel) { return document.querySelector(sel); }
  function codigoNovo() {
    const letras = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
    let s = "";
    for (let i = 0; i < 4; i += 1) s += letras[Math.floor(Math.random() * letras.length)];
    return s;
  }
  function refSala(cod) {
    return window.MC_FB.db.collection("salas").doc(cod);
  }
  function pintar() {
    const status = $("#sala-status");
    const lista = $("#sala-lista");
    const codigoEl = $("#sala-codigo-view");
    const btnSala = $("#btn-sala");
    if (codigoEl) codigoEl.textContent = sala.codigo || "—";
    if (btnSala) btnSala.textContent = sala.codigo || "Mestre";
    if (status) {
      if (!window.MC_FB.ready) status.textContent = window.MC_FB.err || "Conectando Firebase…";
      else if (!sala.codigo) status.textContent = "Crie uma sala ou entre com o código do mestre.";
      else status.textContent = sala.mestre === sala.uid ? "Você é o mestre desta mesa." : "Você entrou na mesa.";
    }
    if (lista) {
      if (!sala.jogadores.length) lista.innerHTML = "<li>Ninguém na mesa ainda.</li>";
      else lista.innerHTML = sala.jogadores.map(function (j, i) {
        const tag = j.id === sala.mestre ? "mestre" : "jogador";
        return "<li>" + (i + 1) + ". " + (j.nome || "Jogador") + " <small>" + tag + "</small></li>";
      }).join("");
    }
  }
  function aplicarDoc(data) {
    if (!data) return;
    sala.mestre = data.mestre;
    sala.jogadores = data.jogadores || [];
    if (window.MC_GAME && typeof window.MC_GAME.receberSala === "function") {
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
      if (status) status.textContent = "Firestore: ative o banco e as regras de playtest. " + (e.code || "");
    });
  }
  function criar() {
    if (!window.MC_FB.ready) return pintar();
    const nome = ($("#sala-nome") && $("#sala-nome").value.trim()) || "Mestre";
    const cod = codigoNovo();
    const eu = { id: window.MC_FB.uid, nome: nome };
    refSala(cod).set({
      codigo: cod,
      mestre: window.MC_FB.uid,
      casoId: window.MC_GAME ? window.MC_GAME.casoId() : "ovelha",
      fase: "lobby",
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
      pintar();
    }).catch(function (e) {
      const status = $("#sala-status");
      if (status) status.textContent = "Não criou a sala. " + (e.code || e.message || "");
    });
  }
  function entrar() {
    if (!window.MC_FB.ready) return pintar();
    const nome = ($("#sala-nome") && $("#sala-nome").value.trim()) || "Jogador";
    const cod = (($("#sala-codigo") && $("#sala-codigo").value) || "").trim().toUpperCase();
    if (!cod) return;
    const doc = refSala(cod);
    doc.get().then(function (snap) {
      if (!snap.exists) {
        const status = $("#sala-status");
        if (status) status.textContent = "Sala " + cod + " não existe.";
        return;
      }
      const data = snap.data();
      const ja = (data.jogadores || []).some(function (j) { return j.id === window.MC_FB.uid; });
      const jogadores = ja ? data.jogadores : (data.jogadores || []).concat([{ id: window.MC_FB.uid, nome: nome }]);
      const ordem = ja ? data.ordem : (data.ordem || []).concat([window.MC_FB.uid]);
      return doc.update({ jogadores: jogadores, ordem: ordem }).then(function () {
        sala.codigo = cod;
        sala.uid = window.MC_FB.uid;
        sala.nome = nome;
        sala.online = true;
        ouvir(cod);
        pintar();
      });
    }).catch(function (e) {
      const status = $("#sala-status");
      if (status) status.textContent = "Não entrou. " + (e.code || e.message || "");
    });
  }
  sala.publicar = function (payload) {
    if (!sala.codigo || !window.MC_FB.ready) return;
    refSala(sala.codigo).set(payload, { merge: true }).catch(function () {});
  };
  document.addEventListener("mc-fb-ready", pintar);
  document.addEventListener("DOMContentLoaded", function () {
    sala.uid = window.MC_FB.uid;
    const criarBtn = $("#sala-criar");
    const entrarBtn = $("#sala-entrar");
    if (criarBtn) criarBtn.addEventListener("click", criar);
    if (entrarBtn) entrarBtn.addEventListener("click", entrar);
    pintar();
  });
})();
