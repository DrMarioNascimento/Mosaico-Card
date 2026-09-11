(function () {
  function eu() {
    return (window.MC_SALA && window.MC_SALA.online && window.MC_SALA.uid) ? window.MC_SALA.uid : "voce";
  }
  const _suaVez = suaVez;
  suaVez = function () { return quem() === eu(); };
  const _passar = passarVez;
  passarVez = function () {
    _passar();
    if (window.MC_GAME && window.MC_GAME.publicarEstado) window.MC_GAME.publicarEstado("deal");
  };
  const _start = startDeal;
  startDeal = function () {
    if (window.MC_SALA && window.MC_SALA.online && window.MC_SALA.jogadores && window.MC_SALA.jogadores.length) {
      ORDEM.length = 0;
      window.MC_SALA.jogadores.forEach(function (j) {
        ORDEM.push(j.id);
        NOMES[j.id] = j.nome || "Jogador";
      });
    }
    _start();
  };
  function snapshotEstado() {
    const maoPor = Object.assign({}, state.rivais);
    maoPor[eu()] = state.mao.slice();
    return {
      moedas: state.moedas,
      monte: state.monte,
      balaio: state.balaio,
      travados: state.travados,
      pagas: state.pagas,
      vez: state.vez,
      voltasFeitas: state.voltasFeitas,
      log: state.log,
      maoPor: maoPor,
      rivais: state.rivais
    };
  }
  function aplicarSnap(s) {
    if (!s) return;
    state.monte = s.monte || state.monte;
    state.balaio = s.balaio || [];
    state.travados = s.travados || {};
    state.pagas = s.pagas || {};
    state.vez = s.vez || 0;
    if (s.voltasFeitas) state.voltasFeitas = s.voltasFeitas;
    state.log = s.log || state.log;
    if (s.maoPor) {
      state.mao = s.maoPor[eu()] || [];
      state.rivais = {};
      ORDEM.forEach(function (id) {
        if (id !== eu()) state.rivais[id] = s.maoPor[id] || [];
      });
    }
    if (typeof s.moedas === "number") state.moedas = s.moedas;
    render();
  }
  window.MC_GAME = {
    casoId: function () { return casoId; },
    startDeal: startDeal,
    publicarEstado: function (fase) {
      if (!(window.MC_SALA && window.MC_SALA.online && window.MC_SALA.publicar)) return;
      window.MC_SALA.publicar({ casoId: casoId, fase: fase || "deal", ordem: ORDEM.slice(), snap: snapshotEstado() });
    },
    receberSala: function (data) {
      if (data.ordem && data.ordem.length) {
        ORDEM.length = 0;
        data.ordem.forEach(function (id) { ORDEM.push(id); });
      }
      (data.jogadores || []).forEach(function (j) { NOMES[j.id] = j.nome || "Jogador"; });
      if (data.casoId) carregarCaso(data.casoId);
      if ((data.fase === "deal" || data.fase === "jogo") && data.snap) {
        aplicarSnap(data.snap);
        show("deal");
        if (window.MC_SALA && typeof window.MC_SALA.pintar === "function") window.MC_SALA.pintar();
      }
    }
  };
})();
