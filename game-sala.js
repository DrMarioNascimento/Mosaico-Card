(function () {
  "use strict";

  function engine() { return window.MC_GAME_ENGINE; }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function snapshotEstado() {
    const e = engine();
    if (!e) return null;
    const s = e.state;
    return {
      fase: s.fase,
      demo: s.demo,
      config: clone(s.config),
      monte: s.monte.slice(),
      balaio: clone(s.balaio),
      maosPorJogador: clone(s.maosPorJogador),
      saldosPorJogador: Object.assign({}, s.saldosPorJogador),
      resolvidosGlobais: clone(s.resolvidosGlobais),
      errosPorJogador: clone(s.errosPorJogador),
      pagas: Object.assign({}, s.pagas),
      vez: s.vez,
      turnoId: s.turnoId,
      turnoTerminaEm: s.turnoTerminaEm,
      partidaIniciaEm: s.partidaIniciaEm,
      partidaTerminaEm: s.partidaTerminaEm,
      fechamentoTerminaEm: s.fechamentoTerminaEm,
      encerrarAoFimDoCiclo: s.encerrarAoFimDoCiclo,
      pausado: s.pausado,
      pausaRestanteTurno: s.pausaRestanteTurno,
      pausaRestantePartida: s.pausaRestantePartida,
      pausaRestanteFechamento: s.pausaRestanteFechamento,
      ledger: clone(s.ledger),
      resolvidosFinais: clone(s.resolvidosFinais),
      ranking: clone(s.ranking),
      log: s.log
    };
  }
  function aplicarSnap(s, fase, opcoes) {
    const e = engine();
    if (!e || !s) return;
    const atual = e.state;
    if (typeof s.turnoId === "number" && s.turnoId < Number(atual.turnoId || 0)) return;
    Object.keys(s).forEach(function (chave) { atual[chave] = clone(s[chave]); });
    atual.fase = fase || s.fase || atual.fase;
    e.startTimer();
    if (opcoes && opcoes.telao) return e.renderTelao({ fase: atual.fase, snap: s });
    if (atual.fase === "deal") {
      if (window.MC_SALA && window.MC_SALA.show) window.MC_SALA.show("deal");
      e.render();
    } else if (atual.fase === "fechamento") {
      if (window.MC_SALA && window.MC_SALA.show) window.MC_SALA.show("fechamento");
      e.renderFechamento();
    } else if (atual.fase === "judge") {
      if (window.MC_SALA && window.MC_SALA.show) window.MC_SALA.show("judge");
      e.renderApuracao();
    }
  }
  function casoDoBanco(id) {
    return window.MC_NT_BANK && window.MC_NT_BANK.byId ? window.MC_NT_BANK.byId[id] : null;
  }

  window.MC_GAME = {
    casoId: function () { return engine() ? engine().state.demo ? "ovelha" : null : "ovelha"; },
    iniciarPartida: function (caso, config, jogadores) {
      engine().iniciarPartida(caso, config, jogadores);
    },
    publicarEstado: function (fase, controleMestre) {
      if (!(window.MC_SALA && window.MC_SALA.online && window.MC_SALA.publicar)) return;
      const e = engine();
      const payload = {
        pautaId: e.state.demo ? null : (window.MC_ACTIVE_CASE_ID || null),
        fase: fase || e.state.fase,
        ordem: (window.MC_SALA.jogadores || []).map(function (j) { return j.id; }),
        snap: snapshotEstado()
      };
      if (!e.state.demo && !payload.pautaId && window.MC_NT_BANK) {
        const encontrado = window.MC_NT_BANK.order.find(function (id) {
          const c = window.MC_NT_BANK.byId[id];
          return c && c.title === document.querySelector("#caso-titulo")?.textContent;
        });
        payload.pautaId = encontrado || null;
      }
      if (controleMestre) payload.controleMestre = true;
      return window.MC_SALA.publicar(payload);
    },
    receberSala: function (data, opcoes) {
      if (!data) return;
      if (engine() && engine().configurarJogadores) engine().configurarJogadores(data.jogadores || [], data.ordem || []);
      if (data.pautaId) {
        const caso = casoDoBanco(data.pautaId);
        if (caso) {
          window.MC_ACTIVE_CASE_ID = data.pautaId;
          engine().carregarCaso(caso);
        }
      }
      if (data.snap && ["deal", "fechamento", "judge"].includes(data.fase)) aplicarSnap(data.snap, data.fase, opcoes || {});
      if (opcoes && opcoes.telao) engine().renderTelao(data);
    },
    renderTelao: function (data) { if (engine()) engine().renderTelao(data); },
    snapshotEstado: snapshotEstado
  };

  document.addEventListener("DOMContentLoaded", function () {
    if (window.MC_SALA) {
      window.MC_SALA.publicarRespostaFinal = function (respostas) {
        if (!window.MC_SALA.codigo || !window.MC_FB.ready || window.MC_SALA.telao) return Promise.resolve(false);
        const uid = window.MC_SALA.uid;
        const salaRef = window.MC_FB.db.collection("salas").doc(window.MC_SALA.codigo);
        return salaRef.get().then(function (doc) {
          if (!doc.exists || doc.data().fase !== "fechamento") throw new Error("O fechamento não está ativo.");
          return salaRef.collection("respostasFinais").doc(uid).set({
            jogadorId: uid,
            respostas: clone(respostas || {}),
            atualizado: firebase.firestore.FieldValue.serverTimestamp()
          });
        });
      };
    }
  });
})();
