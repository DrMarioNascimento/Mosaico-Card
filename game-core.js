(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MC_RULES = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function modoDoCaso(caso) {
    return caso && caso.modo === "quiz" ? "quiz" : "economico";
  }

  function criarEstadoJogadores(ids, saldoInicial) {
    const saldosPorJogador = {};
    const errosPorJogador = {};
    const maosPorJogador = {};
    const voltasFeitas = {};
    ids.forEach(function (id) {
      saldosPorJogador[id] = saldoInicial;
      errosPorJogador[id] = {};
      maosPorJogador[id] = [];
      voltasFeitas[id] = 0;
    });
    return { saldosPorJogador, errosPorJogador, maosPorJogador, voltasFeitas };
  }

  function campoDisponivel(state, jogadorId, campoId) {
    const global = state.resolvidosGlobais || {};
    const pessoais = (state.errosPorJogador || {})[jogadorId] || {};
    return !global[campoId] && !pessoais[campoId];
  }

  function aplicarResposta(state, jogadorId, campo, valor) {
    if (!campoDisponivel(state, jogadorId, campo.id)) return { aplicado: false, motivo: "fechado" };
    const ok = valor === campo.resposta;
    if (ok) {
      state.resolvidosGlobais[campo.id] = { valor, por: jogadorId, ok: true };
    } else {
      if (!state.errosPorJogador[jogadorId]) state.errosPorJogador[jogadorId] = {};
      state.errosPorJogador[jogadorId][campo.id] = { valor, ok: false };
    }
    return { aplicado: true, ok };
  }

  return { modoDoCaso, criarEstadoJogadores, campoDisponivel, aplicarResposta };
});
