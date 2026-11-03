/* Estado compartilhado: as transações recebem comandos, nunca um saldo calculado pelo navegador. */
(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MC_MESA_CORE = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const clone = value => JSON.parse(JSON.stringify(value));
  const GRACA = 30000;
  function exigir(ok, texto) { if (!ok) throw new Error(texto); }
  function grupo(s, ordem) {
    if (!ordem.length) return [];
    const ciclo = Math.floor(s.vez / ordem.length), pos = s.vez % ordem.length;
    const dupla = s.config.modalidade === "maratonar";
    const deslocamento = dupla && ordem.length % 2 ? ciclo % ordem.length : 0;
    const fila = ordem.slice(deslocamento).concat(ordem.slice(0, deslocamento));
    return fila.slice(pos, pos + (dupla ? 2 : 1));
  }
  function dono(j) { return j.authUid || j.id; }
  function participante(data, uid) { return (data.jogadores || []).find(j => dono(j) === uid); }
  function presente(p, agora) { return !!(p && p.ate > agora && !p.saiu); }
  function pausar(s, agora, motivo) {
    if (s.pausado || !["deal", "fechamento"].includes(s.fase)) return;
    s.pausaRestanteTurno = Math.max(0, (s.turnoTerminaEm || agora) - agora);
    s.pausaRestantePartida = Math.max(0, (s.partidaTerminaEm || agora) - agora);
    s.pausaRestanteFechamento = Math.max(0, (s.fechamentoTerminaEm || agora) - agora);
    s.pausado = true;
    s.log = motivo;
    s.revisao++;
  }
  function preparar(s, dados, agora) {
    const novo = clone(s);
    novo.protocolo = 3;
    novo.treino = s.treino === true;
    novo.inicioGrupo = agora;
    novo.repeticao = false;
    novo.partidaId = dados.partidaId;
    novo.revisao = 1;
    novo.escolhas = {};
    novo.recibos = {};
    novo.resultados = {};
    novo.respostasFinais = {};
    novo.catalogo = clone(dados.pecas);
    novo.campos = clone(dados.campos);
    novo.caso = clone(dados.caso);
    novo.rodadas = dados.rodadas || 0;
    novo.suspensos = {};
    novo.config.modalidade = novo.config.modalidade === "maratonar" ? "maratonar" : "classica";
    if (novo.config.modalidade === "maratonar") {
      const ciclos = Math.round((novo.partidaTerminaEm - novo.partidaIniciaEm) / (dados.ordem.length * novo.config.tempoPorJogada * 1000));
      novo.partidaTerminaEm = agora + Math.ceil(dados.ordem.length / 2) * ciclos * novo.config.tempoPorJogada * 1000;
    }
    return novo;
  }
  function treino(modelo, jogadores, config, agora, partidaId) {
    const lista = clone(jogadores);
    while (lista.length < 4) lista.push({ id: "treino-bot-" + lista.length, nome: "Exemplo " + (lista.length + 1), bot: true });
    const ordem = lista.map(j => j.id), catalogo = {}, maos = {}, saldos = {}, erros = {};
    const comuns = Object.values(modelo.pecas).filter(c => !c.recompensa && !c.protegida);
    ordem.forEach((id, i) => {
      maos[id] = []; saldos[id] = 12; erros[id] = {};
      for (let k = 0; k < 2; k++) {
        const pid = "T" + i + "-" + k;
        catalogo[pid] = Object.assign({}, comuns[(i * 2 + k) % comuns.length], { id: pid });
        maos[id].push(pid);
      }
    });
    const monte = [];
    for (let k = 0; k < ordem.length * 3; k++) {
      const pid = "TM" + k;
      catalogo[pid] = Object.assign({}, comuns[k % comuns.length], { id: pid }); monte.push(pid);
    }
    const bonus = Object.values(modelo.pecas).find(c => c.recompensa);
    catalogo.TBONUS = Object.assign({}, bonus, { id: "TBONUS", bonus: true, recompensa: 6 });
    const s = preparar({ fase: "deal", demo: true, config: clone(config), monte, balaio: [], maosPorJogador: maos,
      saldosPorJogador: saldos, errosPorJogador: erros, resolvidosGlobais: {}, pagas: {}, vez: 0, turnoId: 1,
      turnoTerminaEm: null, partidaIniciaEm: agora, partidaTerminaEm: agora + 3600000, fechamentoTerminaEm: null,
      pausado: false, ledger: [], ranking: [], resolvidosFinais: {}, log: "Demonstração: duas rodadas. Aqui você pode experimentar.",
      treino: true, treinoJogadores: lista, treinoBonus: false }, { pecas: catalogo, campos: modelo.campos, caso: modelo, ordem, partidaId }, agora);
    return { snap: s, ordem };
  }
  function passoTreino(s, ordem, id) {
    const rodada = Math.floor(s.vez / ordem.length), i = ordem.indexOf(id);
    let tipo = rodada === 0 ? ["comprar", "consignar", "capturar", "comprar"][i] || "comprar" : ["comprar", "arriscar", "arriscar", "capturar"][i] || "consignar";
    const c = s.campos[0];
    const valor = rodada === 1 && i === 1 ? c.opcoes.find(o => o.id !== c.resposta).id : c.resposta;
    return { tipo, campo: c.id, valor, especial: rodada === 1 && i === 0, cartaz: rodada === 0 && i === 2 };
  }
  function validar(s, ordem, id, cmd) {
    const saldo = s.saldosPorJogador[id] || 0, mao = s.maosPorJogador[id] || [];
    if (s.treino) {
      const esperado = passoTreino(s, ordem, id);
      exigir(cmd.tipo === esperado.tipo, "Nesta etapa, experimente " + esperado.tipo + ".");
      if (cmd.tipo === "arriscar") exigir(cmd.campo === esperado.campo && cmd.valor === esperado.valor, "Use a resposta indicada no cartão da demonstração.");
      if (esperado.cartaz) exigir(cmd.alvo === "balaio", "Capture a pista que está em cartaz / no balaio.");
    }
    if (cmd.tipo === "comprar") {
      exigir(s.monte.includes(cmd.carta), "Essa carta já saiu do monte. Escolha outra.");
      exigir(saldo >= 4 || (s.treino && passoTreino(s, ordem, id).especial), "Você precisa de 4 para comprar.");
    } else if (cmd.tipo === "capturar") {
      exigir(saldo >= 2, "Você precisa de 2 para capturar.");
      const item = cmd.alvo === "balaio" ? s.balaio.find(b => b.id === cmd.carta) : null;
      exigir(cmd.alvo === "balaio" ? item && item.dono !== id : cmd.alvo !== id && (s.maosPorJogador[cmd.alvo] || []).includes(cmd.carta), "Essa pista já saiu. Escolha outra.");
      exigir(s.catalogo[cmd.carta] && !s.catalogo[cmd.carta].protegida && !s.catalogo[cmd.carta].bonus, "Essa carta é protegida.");
    } else if (cmd.tipo === "consignar") {
      exigir(mao.includes(cmd.carta), "Essa pista não está mais na sua mão.");
    } else if (cmd.tipo === "arriscar") {
      exigir(saldo >= 3, "Você precisa ter 3 para arriscar. Só perde se errar.");
      const campo = s.campos.find(c => c.id === cmd.campo);
      exigir(campo && campo.opcoes.some(o => o.id === cmd.valor), "Escolha uma alternativa válida.");
      exigir(!s.resolvidosGlobais[cmd.campo] && !(s.errosPorJogador[id] || {})[cmd.campo], "Essa questão já está fechada para você.");
    } else throw new Error("Ação desconhecida.");
  }
  function apurar(s, ordem, regras, agora) {
    const apuracao = regras.apurarFaseFinal(s, ordem, s.campos, s.respostasFinais);
    Object.entries(apuracao.vencedoresPorCampo).forEach(([campoId, ids]) => ids.forEach(id => {
      s.ledger = regras.adicionarEventoPontuacao(s.ledger, regras.criarEventoPontuacao({ campoId, jogadorId: id,
        valorBase: s.campos.find(c => c.id === campoId).pontosBase, fase: "final", instante: agora }));
    }));
    s.resolvidosFinais = apuracao.vencedoresPorCampo;
    s.ranking = regras.ordenarRanking(ordem.map(id => Object.assign(regras.calcularPontuacaoFinal(id, s.ledger, s.saldosPorJogador[id]), {
      queimados: regras.quantidadeQueimados(s.errosPorJogador[id]),
      ordemCampoFocal: (s.ledger.find(e => e.jogadorId === id && e.campoId === s.caso.focalFieldId) || {}).ordemFechamento || null
    })));
    s.fase = "judge";
  }
  function avancar(s, ordem, regras, agora) {
    s.vez += grupo(s, ordem).length;
    s.turnoId++;
    s.escolhas = {};
    if (s.treino) {
      if (s.vez >= ordem.length * 2) { s.fase = "treino-fim"; s.turnoTerminaEm = null; return; }
      if (!s.treinoBonus && s.vez >= ordem.length) { s.monte.unshift("TBONUS"); s.treinoBonus = true; }
      s.turnoTerminaEm = null;
      return;
    }
    if (s.campos.every(c => s.resolvidosGlobais[c.id])) { apurar(s, ordem, regras, agora); return; }
    if (agora >= s.partidaTerminaEm) s.encerrarAoFimDoCiclo = true;
    if (s.encerrarAoFimDoCiclo && s.vez % ordem.length === 0) {
      s.fase = "fechamento"; s.fechamentoTerminaEm = agora + 60000; return;
    }
    s.turnoTerminaEm = agora + s.config.tempoPorJogada * 1000;
  }
  function resolver(s, ordem, regras, agora, expirar) {
    let ids = grupo(s, ordem);
    // Prioridade alternada; o recebimento das mensagens não decide quem captura.
    if (s.turnoId % 2 === 0) ids = ids.slice().reverse();
    const fechadosAntes = clone(s.resolvidosGlobais), tentarNovamente = [];
    ids.forEach(id => {
      const cmd = s.escolhas[id];
      if (cmd && cmd.tipo === "resolvido") return;
      if (!cmd || cmd.tipo === "passar") { s.resultados[id] = "Vez passada sem cobrança."; return; }
      const mao = s.maosPorJogador[id];
      let msg;
      if (cmd.tipo === "comprar") {
        const especial = s.treino && passoTreino(s, ordem, id).especial;
        let pid = especial ? "TBONUS" : cmd.carta;
        // Duas retiradas do mesmo verso retiram duas cartas; nenhuma pista é duplicada.
        if (!s.monte.includes(pid)) pid = s.monte[0];
        if (!pid) { msg = "Monte vazio. Nenhuma cobrança."; }
        else {
          s.monte.splice(s.monte.indexOf(pid), 1);
          const bonus = s.catalogo[pid].recompensa;
          if (bonus) { s.saldosPorJogador[id] += bonus; s.pagas[pid] = id; msg = "Carta especial! +6. A compra foi gratuita e a carta saiu do jogo."; }
          else { mao.push(pid); s.saldosPorJogador[id] -= 4; msg = "Pista comprada. Custo: 4."; }
        }
      } else if (cmd.tipo === "capturar") {
        const item = cmd.alvo === "balaio" ? s.balaio.find(b => b.id === cmd.carta) : null;
        const disponivel = item || (s.maosPorJogador[cmd.alvo] || []).includes(cmd.carta);
        if (!disponivel) {
          msg = "A outra escolha levou essa pista. Você não pagou. Escolha outra ação.";
          if (!expirar) tentarNovamente.push(id);
        } else {
          if (item) { s.balaio = s.balaio.filter(b => b.id !== cmd.carta); s.saldosPorJogador[item.dono] += 2; }
          else s.maosPorJogador[cmd.alvo] = s.maosPorJogador[cmd.alvo].filter(pid => pid !== cmd.carta);
          mao.push(cmd.carta); s.saldosPorJogador[id] -= 2;
          msg = "Pista capturada. Custo: 2.";
        }
      } else if (cmd.tipo === "consignar") {
        if (mao.includes(cmd.carta)) {
          s.maosPorJogador[id] = mao.filter(pid => pid !== cmd.carta); s.balaio.push({ id: cmd.carta, dono: id });
          msg = "Pista oferecida sem custo. Você recebe 2 se alguém a levar.";
        } else { msg = "A pista foi capturada. Você não pagou. Escolha outra ação."; if (!expirar) tentarNovamente.push(id); }
      } else if (cmd.tipo === "arriscar") {
        const c = s.campos.find(campo => campo.id === cmd.campo);
        if (fechadosAntes[c.id]) { msg = "Questão já encerrada. Nenhuma cobrança."; }
        else if (cmd.valor === c.resposta) {
          const evento = regras.criarEventoPontuacao({ campoId: c.id, jogadorId: id, valorBase: c.pontosBase,
            instante: s.inicioGrupo || agora, inicioPartida: s.partidaIniciaEm, fimPartida: s.partidaTerminaEm, ordemFechamento: s.turnoId });
          evento.lote = s.partidaId + ":" + s.turnoId;
          s.ledger = regras.adicionarEventoPontuacao(s.ledger, evento);
          s.resolvidosGlobais[c.id] = { valor: cmd.valor, por: id, ok: true };
          msg = "Acertou! Nenhum desconto. A questão fecha após as duas escolhas.";
        } else {
          s.errosPorJogador[id][c.id] = { valor: cmd.valor, ok: false }; s.saldosPorJogador[id] -= 3;
          msg = "Errou: −3. A questão fechou somente para você.";
        }
      }
      s.resultados[id] = msg;
    });
    if (tentarNovamente.length) {
      ids.forEach(id => { s.escolhas[id] = tentarNovamente.includes(id) ? null : { tipo: "resolvido" }; });
      s.turnoTerminaEm = s.treino ? null : agora + 15000;
      s.log = "Uma pista teve duas escolhas. Quem ficou sem ela tem mais uma escolha, sem cobrança.";
      s.repeticao = true;
    } else {
      s.log = "Escolhas resolvidas. Confira seu resultado e acompanhe a próxima vez.";
      s.repeticao = false; avancar(s, ordem, regras, agora); s.inicioGrupo = agora;
    }
  }
  function executar(data, comando, ctx, regras) {
    const d = Object.assign({}, data, { snap: clone(data.snap) }), s = d.snap, agora = ctx.agora;
    exigir(s && s.protocolo === 3, "Atualize a sala para a nova versão.");
    exigir(comando.partidaId === s.partidaId, "Esta partida já terminou.");
    const j = participante(d, ctx.uid), mestre = d.mestre === ctx.uid;
    exigir(j, "Sua identidade não está vinculada à sala.");
    exigir(presente((d.presencas || {})[j.id], agora) && d.presencas[j.id].aba === ctx.aba, "Esta sessão está aberta em outra aba ou perdeu a conexão.");
    if (s.recibos[comando.id]) return d;
    if (comando.tipo === "final") {
      exigir(s.fase === "fechamento" && !s.pausado && agora < s.fechamentoTerminaEm, "O fechamento já terminou ou está pausado.");
      Object.entries(comando.respostas).forEach(([campoId, valor]) => {
        const campo = s.campos.find(c => c.id === campoId);
        exigir(campo && campo.opcoes.some(o => o.id === valor), "Resposta inválida.");
      });
      s.respostasFinais[j.id] = clone(comando.respostas);
    } else if (["pausar", "tempo", "pular", "encerrar", "relogio", "suspender", "retornar", "bot"].includes(comando.tipo)) {
      exigir(mestre, "Somente o mestre administra a partida.");
      if (comando.tipo === "retornar") { d.fase = "lobby"; d.snap = null; d.pautaId = null; d.ordem = d.jogadores.map(j => j.id); return d; }
      if (comando.tipo === "pausar") {
        if (!s.pausado) pausar(s, agora, "Partida pausada pelo mestre.");
        else { s.pausado = false; s.turnoTerminaEm = s.treino ? null : agora + s.pausaRestanteTurno; s.partidaTerminaEm = agora + s.pausaRestantePartida; s.fechamentoTerminaEm = agora + s.pausaRestanteFechamento; s.log = "Partida retomada."; }
      } else if (comando.tipo === "tempo") {
        const extra = s.config.tempoPorJogada * 1000;
        if (s.pausado) { s.pausaRestanteTurno += extra; s.pausaRestantePartida += extra; s.pausaRestanteFechamento += extra; }
        else { s.turnoTerminaEm += extra; s.partidaTerminaEm += extra; s.fechamentoTerminaEm += extra; }
      } else if (comando.tipo === "suspender") {
        exigir(d.jogadores.some(p => p.id === comando.jogador) && comando.jogador !== d.mestre, "Participante inválido.");
        s.suspensos[comando.jogador] = !s.suspensos[comando.jogador];
      } else if (comando.tipo === "bot") {
        exigir(s.treino && !s.pausado, "Demonstração indisponível.");
        const id = comando.jogador;
        exigir(s.treinoJogadores.some(p => p.id === id && p.bot) && grupo(s, d.ordem).includes(id), "Exemplo fora da vez.");
        const acao = acaoTreino(s, d.ordem, id); validar(s, d.ordem, id, acao); s.escolhas[id] = acao;
      } else if (comando.tipo === "encerrar") {
        if (s.treino) s.fase = "treino-fim";
        else if (s.fase === "deal") { s.fase = "fechamento"; s.fechamentoTerminaEm = agora + 60000; s.pausado = false; }
        else if (s.fase === "fechamento") apurar(s, d.ordem, regras, agora);
      } else if (comando.tipo === "pular") { exigir(s.fase === "deal", "Não há vez para passar."); resolver(s, d.ordem, regras, agora, true); }
      else if (comando.tipo === "relogio") {
        exigir(!s.pausado && !s.treino, "Relógio pausado.");
        if (s.fase === "deal" && agora >= s.turnoTerminaEm) resolver(s, d.ordem, regras, agora, true);
        else if (s.fase === "fechamento" && agora >= s.fechamentoTerminaEm) apurar(s, d.ordem, regras, agora);
        else return data;
      }
    } else {
      exigir(s.fase === "deal" && !s.pausado, "Aguarde a partida ser retomada.");
      exigir(comando.turnoId === s.turnoId, "A vez mudou. Confira a tela antes de jogar.");
      exigir(s.treino || agora < s.turnoTerminaEm, "O tempo desta vez terminou.");
      exigir(grupo(s, d.ordem).includes(j.id) && !s.escolhas[j.id] && !s.suspensos[j.id], "Aguarde sua próxima vez.");
      validar(s, d.ordem, j.id, comando); s.escolhas[j.id] = clone(comando);
      s.resultados[j.id] = "Escolha confirmada. Aguardando a outra escolha.";
    }
    if (s.fase === "deal") {
      grupo(s, d.ordem).forEach(id => { if (s.suspensos[id]) s.escolhas[id] = { tipo: "passar" }; });
      if (grupo(s, d.ordem).every(id => s.escolhas[id])) resolver(s, d.ordem, regras, agora, false);
    }
    s.recibos[comando.id] = true;
    const keys = Object.keys(s.recibos); keys.slice(0, Math.max(0, keys.length - 200)).forEach(k => delete s.recibos[k]);
    s.revisao++; d.fase = s.fase;
    return d;
  }
  function acaoTreino(s, ordem, id) {
    const p = passoTreino(s, ordem, id);
    const cmd = { tipo: p.tipo };
    if (p.tipo === "comprar") cmd.carta = p.especial ? "TBONUS" : s.monte.find(pid => pid !== "TBONUS");
    if (p.tipo === "consignar") cmd.carta = s.maosPorJogador[id][0];
    if (p.tipo === "capturar") {
      const item = p.cartaz && s.balaio.find(b => b.dono !== id);
      cmd.alvo = item ? "balaio" : ordem.find(pid => pid !== id && s.maosPorJogador[pid].length);
      cmd.carta = item ? item.id : s.maosPorJogador[cmd.alvo][0];
    }
    if (p.tipo === "arriscar") { cmd.campo = p.campo; cmd.valor = p.valor; }
    return cmd;
  }
  return { clone, GRACA, grupo, dono, participante, presente, pausar, preparar, treino, passoTreino, acaoTreino, executar };
});
