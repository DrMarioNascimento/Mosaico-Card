(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MC_RULES = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const TEMPOS_TURNO = Object.freeze([30, 45, 60]);
  const DURACOES = Object.freeze(["curta", "padrao", "longa"]);
  const VALORES_POR_QUANTIDADE = Object.freeze({
    4: Object.freeze([8, 5, 3, 2]),
    5: Object.freeze([8, 5, 3, 2, 1]),
    6: Object.freeze([8, 5, 4, 3, 2, 1]),
    7: Object.freeze([8, 6, 5, 4, 3, 2, 1]),
    8: Object.freeze([8, 6, 5, 4, 3, 2, 2, 1]),
    9: Object.freeze([8, 6, 5, 4, 3, 3, 2, 2, 1])
  });

  function inteiro(valor) {
    return Number.isInteger(Number(valor)) ? Number(valor) : null;
  }

  function limitar(valor, minimo, maximo) {
    return Math.max(minimo, Math.min(maximo, valor));
  }

  function arredondarUmaCasa(valor) {
    return Math.round((Number(valor) + Number.EPSILON) * 10) / 10;
  }

  function modoDoCaso(caso) {
    return caso && caso.modo === "quiz" ? "quiz" : "economico";
  }

  function tempoRecomendado(numeroJogadores) {
    const n = inteiro(numeroJogadores);
    if (n === null || n < 3 || n > 12) {
      throw new RangeError("A mesa deve ter entre 3 e 12 jogadores.");
    }
    if (n <= 5) return 60;
    if (n <= 8) return 45;
    return 30;
  }

  function validarConfiguracao(config) {
    const origem = config || {};
    const erros = [];
    const numeroJogadores = inteiro(origem.numeroJogadores);
    if (numeroJogadores === null || numeroJogadores < 3 || numeroJogadores > 12) {
      erros.push("numeroJogadores deve ser um inteiro entre 3 e 12");
    }

    let recomendado = null;
    if (!erros.length) recomendado = tempoRecomendado(numeroJogadores);
    const turnoSegundos = origem.turnoSegundos == null ? recomendado : inteiro(origem.turnoSegundos);
    if (!TEMPOS_TURNO.includes(turnoSegundos)) {
      erros.push("turnoSegundos deve ser 30, 45 ou 60");
    }

    const duracao = origem.duracao || "padrao";
    if (!DURACOES.includes(duracao)) {
      erros.push("duracao deve ser curta, padrao ou longa");
    }

    const camposAtivos = origem.camposAtivos == null ? 4 : inteiro(origem.camposAtivos);
    if (camposAtivos === null || camposAtivos < 4 || camposAtivos > 9) {
      erros.push("camposAtivos deve ser um inteiro entre 4 e 9");
    }

    if (origem.telao != null && typeof origem.telao !== "boolean") {
      erros.push("telao deve ser booleano");
    }

    return {
      valida: erros.length === 0,
      erros,
      recomendacaoTurno: recomendado,
      config: erros.length ? null : {
        numeroJogadores,
        turnoSegundos,
        duracao,
        camposAtivos,
        telao: origem.telao === true
      }
    };
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

  function quantidadeBonus(numeroJogadores, duracao) {
    const n = inteiro(numeroJogadores);
    if (n === null || n < 3 || n > 12) {
      throw new RangeError("A quantidade de ovelhas exige entre 3 e 12 jogadores.");
    }
    const modoDuracao = duracao || "padrao";
    if (!DURACOES.includes(modoDuracao)) {
      throw new RangeError("A duração deve ser curta, padrao ou longa.");
    }
    let quantidade = n <= 5 ? 1 : n <= 8 ? 2 : 3;
    if (modoDuracao === "curta") quantidade -= 1;
    if (modoDuracao === "longa") quantidade += 1;
    return limitar(quantidade, 1, 4);
  }

  function calcularCiclos(camposAtivos, numeroJogadores, duracao) {
    const campos = inteiro(camposAtivos);
    const jogadores = inteiro(numeroJogadores);
    if (campos === null || campos < 1) throw new RangeError("camposAtivos deve ser positivo.");
    if (jogadores === null || jogadores < 1) throw new RangeError("numeroJogadores deve ser positivo.");
    const modoDuracao = duracao || "padrao";
    if (!DURACOES.includes(modoDuracao)) {
      throw new RangeError("A duração deve ser curta, padrao ou longa.");
    }
    let ciclos = 2 + Math.ceil(campos / jogadores);
    if (modoDuracao === "curta") ciclos -= 1;
    if (modoDuracao === "longa") ciclos += 1;
    return limitar(ciclos, 3, 5);
  }

  function calcularTempoTotal(camposAtivos, numeroJogadores, turnoSegundos, duracao) {
    const tempo = inteiro(turnoSegundos);
    if (!TEMPOS_TURNO.includes(tempo)) {
      throw new RangeError("turnoSegundos deve ser 30, 45 ou 60.");
    }
    const ciclos = calcularCiclos(camposAtivos, numeroJogadores, duracao);
    return {
      ciclos,
      segundos: numeroJogadores * ciclos * tempo
    };
  }

  function valoresCampos(quantidade) {
    const n = inteiro(quantidade);
    if (!VALORES_POR_QUANTIDADE[n]) {
      throw new RangeError("A pontuação admite de 4 a 9 campos.");
    }
    return VALORES_POR_QUANTIDADE[n].slice();
  }

  function tercoDoTempo(instante, inicioPartida, fimPartida, fase) {
    if (fase === "final") return "final";
    const inicio = Number(inicioPartida);
    const fim = Number(fimPartida);
    const agora = Number(instante);
    if (![inicio, fim, agora].every(Number.isFinite) || fim <= inicio) {
      throw new RangeError("A janela temporal da partida é inválida.");
    }
    const proporcao = limitar((agora - inicio) / (fim - inicio), 0, 1);
    if (proporcao < 1 / 3) return 1;
    if (proporcao < 2 / 3) return 2;
    return 3;
  }

  function multiplicadorDoTerco(terco) {
    if (terco === 1) return 1.3;
    if (terco === 2) return 1.1;
    if (terco === 3 || terco === "final") return 1;
    throw new RangeError("Terço inválido.");
  }

  function criarEventoPontuacao(dados) {
    const d = dados || {};
    const valorBase = Number(d.valorBase);
    if (!d.campoId || !d.jogadorId) throw new TypeError("campoId e jogadorId são obrigatórios.");
    if (!Number.isFinite(valorBase) || valorBase < 0) throw new RangeError("valorBase inválido.");
    const fase = d.fase === "final" ? "final" : "normal";
    const terco = fase === "final"
      ? "final"
      : tercoDoTempo(d.instante, d.inicioPartida, d.fimPartida, fase);
    const multiplicador = multiplicadorDoTerco(terco);
    return {
      campoId: d.campoId,
      jogadorId: d.jogadorId,
      valorBase,
      terco,
      multiplicador,
      pontos: valorBase * multiplicador,
      fase,
      ordemFechamento: Number.isFinite(Number(d.ordemFechamento)) ? Number(d.ordemFechamento) : null,
      fechadoEm: Number.isFinite(Number(d.instante)) ? Number(d.instante) : null
    };
  }

  function adicionarEventoPontuacao(ledger, evento) {
    const atual = Array.isArray(ledger) ? ledger : [];
    if (!evento || !evento.campoId || !evento.jogadorId) throw new TypeError("Evento de pontuação inválido.");
    const mesmoCampo = atual.filter(function (item) { return item.campoId === evento.campoId; });
    if (mesmoCampo.some(function (item) { return item.jogadorId === evento.jogadorId; })) {
      throw new Error("O jogador já pontuou neste campo.");
    }
    if (mesmoCampo.length && (evento.fase !== "final" || mesmoCampo.some(function (item) { return item.fase !== "final"; }))) {
      throw new Error("Somente a fase final admite vários vencedores no mesmo campo.");
    }
    return atual.concat([Object.assign({}, evento)]);
  }

  function pontosResiduais(denarios) {
    const valor = Number(denarios);
    if (!Number.isFinite(valor)) throw new RangeError("Denários inválidos.");
    return Math.floor(Math.max(0, valor) / 4);
  }

  function calcularPontuacaoFinal(jogadorId, ledger, denarios) {
    const eventos = (Array.isArray(ledger) ? ledger : []).filter(function (evento) {
      return evento.jogadorId === jogadorId;
    });
    const porParcela = { primeiroTerco: 0, segundoTerco: 0, terceiroTerco: 0, fechamentoFinal: 0 };
    eventos.forEach(function (evento) {
      if (evento.terco === 1) porParcela.primeiroTerco += Number(evento.pontos || 0);
      else if (evento.terco === 2) porParcela.segundoTerco += Number(evento.pontos || 0);
      else if (evento.terco === 3) porParcela.terceiroTerco += Number(evento.pontos || 0);
      else if (evento.terco === "final") porParcela.fechamentoFinal += Number(evento.pontos || 0);
    });
    const pontosCampos = Object.values(porParcela).reduce(function (soma, valor) { return soma + valor; }, 0);
    const residual = pontosResiduais(denarios);
    return {
      jogadorId,
      parcelas: porParcela,
      pontosCampos,
      denarios: Number(denarios),
      residual,
      total: arredondarUmaCasa(pontosCampos + residual)
    };
  }

  function campoElegivelFaseFinal(state, jogadorId, campoId) {
    return campoDisponivel(state || {}, jogadorId, campoId);
  }

  function apurarFaseFinal(state, jogadores, campos, respostasPorJogador) {
    const listaJogadores = Array.isArray(jogadores) ? jogadores : [];
    const listaCampos = Array.isArray(campos) ? campos : [];
    const respostas = respostasPorJogador || {};
    const vencedoresPorCampo = {};
    const acertosPorJogador = {};
    listaJogadores.forEach(function (jogadorId) { acertosPorJogador[jogadorId] = []; });
    listaCampos.forEach(function (campo) {
      const vencedores = [];
      listaJogadores.forEach(function (jogadorId) {
        const resposta = (respostas[jogadorId] || {})[campo.id];
        if (campoElegivelFaseFinal(state, jogadorId, campo.id) && resposta === campo.resposta) {
          vencedores.push(jogadorId);
          acertosPorJogador[jogadorId].push(campo.id);
        }
      });
      vencedoresPorCampo[campo.id] = vencedores;
    });
    return { vencedoresPorCampo, acertosPorJogador };
  }

  function quantidadeQueimados(erros) {
    return Object.keys(erros || {}).length;
  }

  function compararRanking(a, b) {
    const totalA = Number(a.total || 0);
    const totalB = Number(b.total || 0);
    if (totalA !== totalB) return totalB - totalA;
    const queimadosA = Number(a.queimados || 0);
    const queimadosB = Number(b.queimados || 0);
    if (queimadosA !== queimadosB) return queimadosA - queimadosB;
    const denariosA = Number(a.denarios || 0);
    const denariosB = Number(b.denarios || 0);
    if (denariosA !== denariosB) return denariosB - denariosA;
    const focalA = a.ordemCampoFocal == null ? Infinity : Number(a.ordemCampoFocal);
    const focalB = b.ordemCampoFocal == null ? Infinity : Number(b.ordemCampoFocal);
    return focalA - focalB;
  }

  function ordenarRanking(resultados) {
    return (Array.isArray(resultados) ? resultados : [])
      .map(function (resultado, indice) { return { resultado: Object.assign({}, resultado), indice }; })
      .sort(function (a, b) { return compararRanking(a.resultado, b.resultado) || a.indice - b.indice; })
      .map(function (item) { return item.resultado; });
  }

  return {
    TEMPOS_TURNO,
    DURACOES,
    modoDoCaso,
    tempoRecomendado,
    validarConfiguracao,
    criarEstadoJogadores,
    campoDisponivel,
    aplicarResposta,
    quantidadeBonus,
    calcularCiclos,
    calcularTempoTotal,
    valoresCampos,
    tercoDoTempo,
    multiplicadorDoTerco,
    criarEventoPontuacao,
    adicionarEventoPontuacao,
    pontosResiduais,
    calcularPontuacaoFinal,
    campoElegivelFaseFinal,
    apurarFaseFinal,
    quantidadeQueimados,
    compararRanking,
    ordenarRanking
  };
});
