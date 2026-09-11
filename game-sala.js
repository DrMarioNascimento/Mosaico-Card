(function () {
  function snapshotEstado() {
    return {
      monte: state.monte.slice(),
      balaio: state.balaio.slice(),
      maosPorJogador: JSON.parse(JSON.stringify(state.maosPorJogador)),
      saldosPorJogador: Object.assign({}, state.saldosPorJogador),
      resolvidosGlobais: JSON.parse(JSON.stringify(state.resolvidosGlobais)),
      errosPorJogador: JSON.parse(JSON.stringify(state.errosPorJogador)),
      pagas: Object.assign({}, state.pagas),
      vez: state.vez,
      voltasFeitas: Object.assign({}, state.voltasFeitas),
      turnoId: state.turnoId,
      turnoTerminaEm: state.turnoTerminaEm,
      log: state.log
    };
  }

  function aplicarSnap(s) {
    if (!s || (typeof s.turnoId === "number" && s.turnoId < state.turnoId)) return;
    state.monte = s.monte || [];
    state.balaio = s.balaio || [];
    state.maosPorJogador = s.maosPorJogador || {};
    state.saldosPorJogador = s.saldosPorJogador || {};
    state.resolvidosGlobais = s.resolvidosGlobais || {};
    state.errosPorJogador = s.errosPorJogador || {};
    state.pagas = s.pagas || {};
    state.vez = Number(s.vez || 0);
    state.voltasFeitas = s.voltasFeitas || {};
    state.turnoId = Number(s.turnoId || 0);
    state.turnoTerminaEm = s.turnoTerminaEm || null;
    state.log = s.log || "";
    startTimer(state.turnoTerminaEm);
    render();
  }

  window.MC_GAME = {
    casoId: function () { return casoId; },
    selecionarCaso: carregarCaso,
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
    },
    snapshotEstado: snapshotEstado
  };
})();
