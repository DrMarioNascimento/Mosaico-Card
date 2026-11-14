(function () {
  "use strict";
  const C = window.MC_MESA_CORE;
  const S = window.MC_SALA;
  const $ = q => document.querySelector(q);
  const E = () => window.MC_GAME_ENGINE;
  const cinema = location.pathname.includes("filmes-e-series");
  const edicao = window.MC_EDITION || {id:cinema?'cinema':'nt',moeda:cinema?'ingressos':'denários',demo:cinema?'pipoca':'ovelha',oferta:cinema?'Em cartaz':'Consignar',ofertaVerbo:cinema?'pôr em cartaz':'consignar',ofertaLocal:cinema?'em cartaz':'no balaio'};
  const moeda = edicao.moeda;
  const chave = 'mc:sessao:v3:'+edicao.id;
  const uuid = () => {
    if (crypto.randomUUID) return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = Array.from(bytes, b => b.toString(16).padStart(2, "0")).join("");
    return hex.slice(0, 8) + "-" + hex.slice(8, 12) + "-" + hex.slice(12, 16) + "-" + hex.slice(16, 20) + "-" + hex.slice(20);
  };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  let aba = uuid(), ocupado = false, ligado = false, restaurando = false, revisao = "", heartbeat = 0, local = null;
  let proximoBot = 0, acaoPendente = null, risco = null, ultimaAnimacao = "", aviso = "", canal;
  let pedidosUnsub = null, pulsosUnsub = null, filaPedidos = Promise.resolve(), pulsos = {};
  const processandoPedidos = new Set();
  try { aba = sessionStorage.getItem(chave + ":aba") || aba; sessionStorage.setItem(chave + ":aba", aba); } catch (_) { /* memória da aba */ }
  // Uma aba duplicada pode herdar sessionStorage. A aba já aberta faz a nova gerar outro identificador.
  const instancia = uuid();
  if (window.BroadcastChannel) {
    canal = new BroadcastChannel(chave);
    canal.onmessage = event => {
      const m = event.data;
      if (m.aba !== aba || m.instancia === instancia) return;
      if (m.tipo === "ola") canal.postMessage({ tipo: "ocupada", aba, instancia, para: m.instancia });
      else if (m.tipo === "ocupada" && m.para === instancia) { aba = uuid(); try { sessionStorage.setItem(chave + ":aba", aba); } catch (_) {} ligado = false; conectar().catch(falha); }
    };
    canal.postMessage({ tipo: "ola", aba, instancia });
  }
  function guardar() {
    if (!S.codigo || S.telao || !S.online) return;
    try { localStorage.setItem(chave, JSON.stringify({ codigo: S.codigo, playerId: S.playerId || S.uid })); }
    catch (_) { aviso = "O navegador não permitiu salvar o acesso. Mantenha esta aba aberta e anote o código da sala."; }
  }
  function banner(texto, botao, handler) {
    aviso = texto || "";
    const el = $("#conexao-mesa"); if (!el) return;
    el.hidden = !texto;
    el.replaceChildren();
    if (!texto) return;
    const span = document.createElement("span"); span.textContent = texto; el.append(span);
    if (botao) { const b = document.createElement("button"); b.type = "button"; b.textContent = botao; b.onclick = handler; el.append(b); }
  }
  function falha(e) {
    const msg = e && e.message || "Não foi possível conectar.";
    banner(msg, "Tentar novamente", () => acaoPendente ? enviar(acaoPendente) : conectar().catch(falha));
  }
  function esquecer() {
    if (pedidosUnsub) { pedidosUnsub(); pedidosUnsub = null; }
    if (pulsosUnsub) { pulsosUnsub(); pulsosUnsub = null; } pulsos = {};
    ligado = false; local = null; revisao = ""; acaoPendente = null;
    S.demonstracao = false; if (S.codigoConvite === "DEMO") S.codigoConvite = null;
    try { localStorage.removeItem(chave); sessionStorage.removeItem(chave + ":pendente"); } catch (_) {}
    if (E()) E().stopTimer();
    banner("");
  }
  async function conectar(forcar) {
    if (!S.codigo || !window.MC_FB.ready || S.telao) return;
    const ref = S.ref(S.codigo);
    const data = await window.MC_FB.db.runTransaction(async tx => {
      const doc = await tx.get(ref); if (!doc.exists) throw new Error("Sala não encontrada.");
      const d = doc.data(); if(S.validarEdicao) S.validarEdicao(d); if (d.ativa === false) throw new Error("Esta sala foi encerrada.");
      const j = C.participante(d, window.MC_FB.uid);
      if (!j) throw new Error("Seu acesso não foi encontrado. Peça ao mestre um código de recuperação.");
      const agora = Date.now(), p = (d.presencas || {})[j.id];
      S.playerId = j.id; S.nome = j.nome;
      if (C.presente(p, agora) && p.aba !== aba && !forcar) return { bloqueada: true, documento: d };
      // Retomar depois de uma ausência longa preserva o tempo que restava; não redistribui cartas.
      if (d.mestre === window.MC_FB.uid) verificarAusencias(d, agora);
      d.presencas = d.presencas || {};
      d.presencas[j.id] = { aba, ate: agora + C.GRACA, visto: agora };
      tx.set(ref, d); return d;
    });
    if (data.bloqueada) {
      ligado = false; S.aplicarDoc(data.documento);
      banner("Sua partida está aberta em outra aba.", "Continuar nesta aba", () => conectar(true).catch(falha));
      return;
    }
    ligado = true; S.online = true; S.uid = window.MC_FB.uid; S.identidadePendente = false;
    S.aplicarDoc(data); S.ouvir(S.codigo); guardar();
    if (data.autoridade === "mestre" && data.mestre === S.uid) ouvirPedidos();
    banner("");
    if (window.MC_FB.persistenceWarning) banner("Este navegador não conseguiu guardar o acesso. Evite fechar a aba; o mestre pode recuperar seu lugar.");
    try {
      const p = JSON.parse(sessionStorage.getItem(chave + ":pendente") || "null");
      if (p && data.snap && p.partidaId === data.snap.partidaId) { acaoPendente = p; await enviar(p); }
      else sessionStorage.removeItem(chave + ":pendente");
    } catch (_) { /* a mensagem permanece para a próxima tentativa */ }
  }
  async function restaurar() {
    if (restaurando || S.codigo || !window.MC_FB.ready || S.telao) return;
    const q = new URLSearchParams(location.search);
    if (q.get("telao")) return;
    let salvo;
    try { salvo = JSON.parse(localStorage.getItem(chave) || "null"); } catch (_) {}
    if (!salvo || (q.get("sala") && q.get("sala").toUpperCase() !== salvo.codigo)) return;
    restaurando = true; S.codigo = salvo.codigo; S.uid = window.MC_FB.uid;
    banner("Reconectando à sua sala…");
    try { await conectar(); }
    catch (e) {
      S.codigo = null;
      if (/encerrada|não encontrada/.test(e.message)) { esquecer(); banner("Sua sala anterior foi encerrada. Você pode entrar em outra mesa."); }
      else { banner(e.message, "Recuperar meu lugar", abrirRecuperacao); }
    } finally { restaurando = false; }
  }
  function verificarAusencias(d, agora) {
    const s = d.snap;
    if (!s || s.protocolo !== 3 || s.pausado || !["deal", "fechamento"].includes(s.fase)) return;
    const ativos = s.fase === "deal" ? C.grupo(s, d.ordem) : d.jogadores.map(j => j.id);
    const ids = [...new Set([d.mestre, ...ativos])].filter(id => !id.startsWith("treino-bot-") && !s.suspensos[id]);
    const ausente = ids.find(id => !C.presente((d.presencas || {})[id], agora));
    if (ausente) {
      const p = (d.presencas || {})[ausente];
      const quando = p ? Math.min(agora, p.visto + 10000) : agora;
      C.pausar(s, quando, "Pausa de conexão. O mestre pode retomar, passar a vez ou suspender quem saiu.");
    }
  }
  async function pulso() {
    if (!S.online || !S.codigo || S.telao || !ligado || ocupado || !navigator.onLine) return;
    try {
      const ref = S.ref(S.codigo);
      if (S.ultimoDoc.autoridade === "mestre" && !S.souMestre()) {
        const p = (S.ultimoDoc.presencas || {})[meuId()];
        if (!p || p.aba !== aba) { ligado = false; return; }
        const visto = Date.now();
        await ref.collection("pulsos").doc(S.uid).set({ aba, visto, ate: visto + C.GRACA });
        return;
      }
      const ativo = await window.MC_FB.db.runTransaction(async tx => {
        const doc = await tx.get(ref); if (!doc.exists) return false;
        const d = doc.data(), j = C.participante(d, S.uid), agora = Date.now();
        if (!j || d.ativa === false || ((d.presencas || {})[j.id] || {}).aba !== aba) return false;
        if (d.mestre === S.uid) { juntarPulsos(d); verificarAusencias(d, agora); }
        d.presencas[j.id] = { aba, ate: agora + C.GRACA, visto: agora };
        tx.set(ref, d); return true;
      });
      if (!ativo) { ligado = false; banner("Seu lugar está em outra aba ou precisa ser reconectado.", "Continuar nesta aba", () => conectar(true).catch(falha)); }
    } catch (_) { banner("Reconectando… Suas cartas e seu saldo continuam na sala."); }
  }
  function observarSala(d) {
    if (S.online && !S.telao) guardar();
    const j = C.participante(d, S.uid);
    if (j) S.playerId = j.id;
    else if (ligado) { ligado = false; banner("Seu acesso foi recuperado em outro aparelho."); }
    if (ligado && j && ((d.presencas || {})[j.id] || {}).aba !== aba) {
      ligado = false; banner("A partida foi aberta em outra aba.", "Continuar nesta aba", () => conectar(true).catch(falha));
    }
  }
  function dadosSala() { return local || S.ultimoDoc; }
  function juntarPulsos(d) {
    for (const j of d.jogadores) {
      const novo = pulsos[C.dono(j)], atual = (d.presencas || {})[j.id];
      if (novo && atual && novo.aba === atual.aba && novo.visto > atual.visto) d.presencas[j.id] = novo;
    }
  }
  // Os jogadores enviam intenções. Só a aba ativa do mestre publica o estado canônico.
  // As regras Firestore impedem que outro cliente escreva snap, fase, configuração ou vínculos.
  async function pedir(codigo, tipo, payload, id) {
    const uid = window.MC_FB.uid, ref = S.ref(codigo).collection("pedidos").doc(uid);
    id = id || uuid();
    const anterior = await ref.get();
    if (!(anterior.exists && anterior.data().id === id)) {
      await ref.set({ uid, id, tipo, aba, payload: JSON.stringify(payload), criado: firebase.firestore.FieldValue.serverTimestamp() });
    }
    await new Promise((resolve, reject) => {
      let unsub = () => {}, terminado = false;
      const encerrar = (erro) => { if (terminado) return; terminado = true; clearTimeout(limite); unsub(); erro ? reject(erro) : resolve(); };
      const limite = setTimeout(() => { const e = new Error("Aguardando o mestre reconectar. Sua escolha está guardada; tente novamente."); e.code = "unavailable"; encerrar(e); }, 15000);
      unsub = ref.onSnapshot(doc => {
        const p = doc.exists && doc.data();
        if (!p || p.id !== id || !p.resultado) return;
        encerrar(p.resultado.ok ? null : new Error(p.resultado.erro || "A ação não foi aceita."));
      }, encerrar);
      if (terminado) unsub();
    });
    const sala = await S.ref(codigo).get();
    if (!sala.exists) throw new Error("Sala não encontrada.");
    return sala.data();
  }
  function ouvirPedidos() {
    if (pedidosUnsub) pedidosUnsub();
    if (pulsosUnsub) pulsosUnsub();
    const ref = S.ref(S.codigo);
    pulsosUnsub = ref.collection("pulsos").onSnapshot(query => {
      pulsos = {}; query.forEach(doc => { pulsos[doc.id] = doc.data(); });
    }, falha);
    pedidosUnsub = ref.collection("pedidos").onSnapshot(query => query.forEach(doc => {
      const p = doc.data(), chavePedido = doc.id + ":" + p.id;
      if (p.resultado || !ligado || processandoPedidos.has(chavePedido)) return;
      processandoPedidos.add(chavePedido);
      filaPedidos = filaPedidos.then(() => processarPedido(ref, doc.id, p.id)).catch(falha).finally(() => processandoPedidos.delete(chavePedido));
    }), falha);
  }
  async function processarPedido(ref, uid, id) {
    const pedidoRef = ref.collection("pedidos").doc(uid);
    await window.MC_FB.db.runTransaction(async tx => {
      const salaDoc = await tx.get(ref), pedidoDoc = await tx.get(pedidoRef);
      if (!salaDoc.exists || !pedidoDoc.exists) return;
      let d = salaDoc.data(); const p = pedidoDoc.data(), agora = Date.now();
      if (p.id !== id || p.resultado || d.mestre !== S.uid || !ligado || (d.presencas[d.mestre] || {}).aba !== aba) return;
      let erro = "";
      try {
        if (!d.ativa || p.uid !== uid) throw new Error("Sala ou identidade indisponível.");
        const payload = JSON.parse(p.payload);
        const j = C.participante(d, uid);
        if (p.tipo === "entrar") {
          if (!j) {
            if (d.fase !== "lobby") throw new Error("Partida em andamento. Peça ao mestre um código de recuperação se você já participava.");
            if (d.jogadores.length >= 12) throw new Error("Esta sala já tem 12 participantes.");
            if (typeof payload.nome !== "string" || !payload.nome.trim() || payload.nome.length > 40) throw new Error("Use um nome de até 40 caracteres.");
            d.jogadores.push({ id: uid, nome: payload.nome.trim(), forma: ["n", "m", "f"].includes(payload.forma) ? payload.forma : "n", pronto: true });
            d.ordem.push(uid); d.vinculos[uid] = uid;
          }
        } else if (p.tipo === "acao") {
          if (payload.id !== id) throw new Error("Identificador de ação inválido.");
          juntarPulsos(d);
          verificarAusencias(d, agora);
          d = C.executar(d, payload, { uid, aba: p.aba, agora }, window.MC_RULES);
        } else if (p.tipo === "recuperar") {
          if (j) throw new Error("Esta conta já ocupa um lugar. Retome sua sessão existente.");
          if (typeof payload.token !== "string" || !/^[a-f0-9]{32}$/.test(payload.token)) throw new Error("Código inválido.");
          const resumo = await hash(payload.token);
          const entrada = Object.entries(d.recuperacoes || {}).find(([, r]) => r.hash === resumo && r.ate > agora);
          if (!entrada) throw new Error("Código inválido, usado ou expirado. Peça um novo ao mestre.");
          const lugar = entrada[0], antigo = d.jogadores.find(x => x.id === lugar);
          if (!antigo || lugar === d.mestre) throw new Error("O mestre deve entrar com sua conta Google.");
          delete d.vinculos[C.dono(antigo)]; d.vinculos[uid] = lugar;
          antigo.authUid = uid; delete d.recuperacoes[lugar];
          d.presencas[lugar] = { aba: p.aba, visto: agora, ate: agora + C.GRACA };
        } else if (p.tipo === "sair") {
          if (!j || j.id === d.mestre || (d.presencas[j.id] || {}).aba !== p.aba) throw new Error("Use a aba ativa do participante.");
          if (d.fase === "lobby") {
            d.jogadores = d.jogadores.filter(x => x.id !== j.id); d.ordem = d.ordem.filter(x => x !== j.id); delete d.vinculos[uid]; delete d.presencas[j.id];
          }
          if (d.presencas[j.id]) d.presencas[j.id].saiu = true;
          verificarAusencias(d, agora);
        } else throw new Error("Pedido desconhecido.");
        tx.set(ref, d);
      } catch (e) { erro = e.message || "Pedido inválido."; }
      tx.set(pedidoRef, Object.assign({}, p, { payload: "{}", resultado: { ok: !erro, erro: erro.slice(0, 300) } }));
    });
  }
  async function entrar(codigo, nome, forma) {
    const doc=await S.ref(codigo).get();if(!doc.exists)throw new Error('Sala não encontrada.');
    if(S.validarEdicao)S.validarEdicao(doc.data());
    return pedir(codigo, 'entrar', { nome, forma });
  }
  function aguardaMestre() { const d = dadosSala(); return !!(!local && S.online && d && d.autoridade === "mestre" && !C.presente((d.presencas || {})[d.mestre], Date.now())); }
  function souMestre() { return !!local || S.souMestre(); }
  function meuId() { return local ? "voce" : S.playerId || S.uid; }
  function suaVez() {
    const s = E().state, d = dadosSala(), id = meuId();
    return !!(d && (local || ligado && navigator.onLine && C.presente((d.presencas || {})[d.mestre], Date.now())) && !ocupado && s.fase === "deal" && !s.pausado && !s.suspensos[id] && !s.escolhas[id] && C.grupo(s, d.ordem).includes(id));
  }
  async function enviar(cmd) {
    if (ocupado) return;
    ocupado = true; acaoPendente = cmd;
    if (!local) try { sessionStorage.setItem(chave + ":pendente", JSON.stringify(cmd)); } catch (_) {}
    pintar();
    try {
      let data;
      if (local) {
        local.presencas.voce.ate = Date.now() + C.GRACA;
        data = C.executar(local, cmd, { uid: "voce", aba, agora: Date.now() }, window.MC_RULES); local = data;
      } else if (S.ultimoDoc && S.ultimoDoc.autoridade === "mestre" && !S.souMestre()) {
        if (!ligado || !navigator.onLine) throw new Error("Sem conexão. Sua escolha será reenviada ao reconectar.");
        data = await pedir(S.codigo, "acao", cmd, cmd.id);
      } else {
        if (!ligado || !navigator.onLine) throw new Error("Sem conexão. Sua escolha será reenviada ao reconectar.");
        const ref = S.ref(S.codigo);
        data = await window.MC_FB.db.runTransaction(async tx => {
          const doc = await tx.get(ref); if (!doc.exists) throw new Error("Sala não encontrada.");
          const next = C.executar(doc.data(), cmd, { uid: S.uid, aba, agora: Date.now() }, window.MC_RULES);
          tx.set(ref, next); return next;
        });
      }
      acaoPendente = null; try { sessionStorage.removeItem(chave + ":pendente"); } catch (_) {}
      banner("");
      if (data.fase === "lobby") { revisao = ""; E().stopTimer(); }
      if (local) receber(data); else S.aplicarDoc(data);
      return true;
    } catch (e) {
      // Erros de regra encerram a tentativa. Falhas de transporte conservam a mesma chave idempotente.
      if (navigator.onLine && !["unavailable", "deadline-exceeded", "aborted"].includes(e.code) && !/Sem conexão/.test(e.message)) {
        acaoPendente = null; try { sessionStorage.removeItem(chave + ":pendente"); } catch (_) {}
      }
      falha(e); return false;
    } finally { ocupado = false; pintar(); }
  }
  function comando(tipo, extras) {
    const s = E().state;
    return Object.assign({ tipo, id: uuid(), partidaId: s.partidaId, turnoId: s.turnoId }, extras || {});
  }
  function acao(cmd) {
    if (!suaVez()) return;
    const s = E().state;
    if (s.treino && !C.treinoLivre(s) && cmd.tipo === "comprar") cmd.carta = C.acaoTreino(s, dadosSala().ordem, meuId()).carta;
    return enviar(comando(cmd.tipo, cmd));
  }
  function confirmarRisco(campoId, valor) {
    if (!suaVez()) return;
    const s = E().state, c = s.campos.find(c => c.id === campoId), op = c.opcoes.find(o => o.id === valor);
    risco = { campo: campoId, valor, turnoId: s.turnoId, partidaId: s.partidaId };
    $("#risco-resposta").textContent = c.rotulo + ": “" + op.txt + "”.";
    $("#risco-tempo").textContent = s.treino ? "Na demonstração, você pode escolher sem pressa." : "O tempo da vez continua enquanto você escolhe.";
    $("#risco-dialog").showModal();
    $("#risco-cancelar").focus();
  }
  function controle(acao) {
    const tipo = { "adicionar-tempo": "tempo", "passar-vez": "pular", "encerrar-fase": "encerrar" }[acao] || acao;
    return enviar(comando(tipo));
  }
  function respostaFinal(campo, valor) {
    if (ocupado || E().state.finaisProntos?.[meuId()]) return;
    const respostas = Object.assign({}, E().state.respostasFinais[meuId()] || {}, { [campo]: valor });
    $("#fechamento-status").textContent = "Salvando resposta…";
    enviar(comando("final", { respostas })).then(ok => {
      if (!ok && $("#fechamento-status")) $("#fechamento-status").textContent = "Resposta ainda não salva. Tente novamente ao reconectar.";
    });
  }
  async function publicarInicio(payload) {
    if (!S.souMestre()) return false;
    try {
      await conectar(); if (!ligado) return false;
      const ref = S.ref(S.codigo), dados = E().dados();
      const novo = C.preparar(payload.snap, Object.assign({}, dados, { partidaId: uuid() }), Date.now());
      const data = await window.MC_FB.db.runTransaction(async tx => {
        const doc = await tx.get(ref), d = doc.data();
        if (d.mestre !== S.uid || d.fase !== "lobby") throw new Error("A partida já começou. Aguarde a sala sincronizar.");
        if (d.autoridade !== "mestre") throw new Error("Para usar a nova mesa, encerre esta sala antiga e crie outra.");
        if ((d.presencas[S.playerId] || {}).aba !== aba) throw new Error("Use a aba ativa do mestre.");
        if (d.jogadores.some(j => !j.pronto || !C.presente(d.presencas[j.id], Date.now()))) throw new Error("Aguarde todos os participantes reconectarem antes de começar.");
        Object.assign(d, { pautaId: payload.pautaId, fase: payload.fase, ordem: payload.ordem, bankIdentity: payload.bankIdentity, snap: novo, schemaVersion: 3 }); tx.set(ref, d); return d;
      });
      revisao = ""; S.aplicarDoc(data); return true;
    } catch (e) { E().state.iniciando = false; if (S.ultimoDoc) { revisao = ""; S.aplicarDoc(S.ultimoDoc); } falha(e); return false; }
  }
  async function iniciarTreino() {
    if (!S.souMestre()) return;
    try {
      await conectar(); if (!ligado) return;
      const ref = S.ref(S.codigo), modelo = window.MC_CASOS[edicao.demo], partidaId = uuid();
      const data = await window.MC_FB.db.runTransaction(async tx => {
        const doc = await tx.get(ref), d = doc.data();
        if (d.fase !== "lobby" || d.mestre !== S.uid) throw new Error("Volte à sala para iniciar a demonstração.");
        if (d.autoridade !== "mestre") throw new Error("Para usar a demonstração, encerre esta sala antiga e crie outra.");
        if (d.jogadores.some(j => !j.pronto)) throw new Error("Aguarde todos confirmarem o nome.");
        const treino = C.treino(modelo, d.jogadores, d.config, Date.now(), partidaId);
        Object.assign(d, treino, { fase: "deal", pautaId: null, bankIdentity: null, schemaVersion: 3 }); tx.set(ref, d); return d;
      });
      S.aplicarDoc(data);
    } catch (e) { falha(e); }
  }
  function iniciarTreinoLocal() {
    ligado = false; S.online = false;
    const jogadores = [{ id: "voce", nome: S.nome || "Você" }];
    const treino = C.treino(window.MC_CASOS[edicao.demo], jogadores, { modalidade: "classica", tempoPorJogada: 45, duracao: "padrao" }, Date.now(), uuid());
    local = Object.assign({ jogadores, mestre: "voce", presencas: { voce: { aba, ate: Date.now() + C.GRACA } }, fase: "deal" }, treino);
    receber(local);
  }
  function receber(d, opcoes) {
    if (!d.snap || d.snap.protocolo !== 3) return;
    if (E().state.partidaId === d.snap.partidaId && E().state.revisao > d.snap.revisao) return;
    const s = d.snap, chaveRev = s.partidaId + ":" + s.revisao;
    if (chaveRev === revisao) { pintar(); return; }
    const mudouFase = E().state.partidaId !== s.partidaId || E().state.fase !== s.fase;
    if (mudouFase) requestAnimationFrame(() => window.scrollTo(0, 0));
    const mudouVez = E().state.partidaId !== s.partidaId || E().state.turnoId !== s.turnoId;
    if (mudouVez && s.treino) proximoBot = Date.now() + (C.treinoLivre(s) ? 1400 : 8000);
    revisao = chaveRev;
    const e = E(), jogadores = s.treino ? s.treinoJogadores : d.jogadores;
    const verbo = e.state.partidaId === s.partidaId && e.state.turnoId === s.turnoId ? e.state.verbo : null;
    e.configurarJogadores(jogadores, d.ordem); e.carregarCaso(s.caso); e.usarCatalogo(s.catalogo);
    Object.assign(e.state, C.clone(s), { verbo, iniciando: false });
    e.state.ranking.forEach(r => { r.nome = (jogadores.find(j => j.id === r.jogadorId) || {}).nome || "Jogador"; });
    if (opcoes && opcoes.telao) { e.renderTelao(d); return; }
    if (s.fase === "treino-fim") { e.stopTimer(); S.show("treino-fim"); pintarSala(); return; }
    S.show(s.fase);
    if (s.fase === "deal") e.render();
    if (s.fase === "fechamento") e.renderFechamento();
    if (s.fase === "judge") e.renderApuracao();
    if (s.fase !== "judge") e.startTimer(); else e.stopTimer();
    if (risco && (risco.turnoId !== s.turnoId || risco.partidaId !== s.partidaId || s.pausado)) { $("#risco-dialog").close(); risco = null; }
    const ganhas = Object.keys(s.pagas).filter(id => s.pagas[id] === meuId());
    const ultima = ganhas[ganhas.length - 1], animacao = s.partidaId + ":" + ultima;
    if (ultima && ultimaAnimacao !== animacao) {
      ultimaAnimacao = animacao;
      let vista = false; try { vista = sessionStorage.getItem(animacao); sessionStorage.setItem(animacao, "1"); } catch (_) {}
      if (!vista) e.animarBonus(ultima, meuId());
    }
    pintar();
  }
  function tick() {
    if (ocupado || !souMestre() || (!local && (!ligado || !navigator.onLine || acaoPendente))) return;
    const s = E().state, agora = Date.now();
    if (!s || s.pausado) return;
    if (s.fase === "deal" && C.grupo(s, dadosSala().ordem).every(id => s.suspensos[id])) { enviar(comando("pular")); return; }
    if (s.treino && s.fase === "deal") {
      if (agora < proximoBot) return;
      const bot = C.grupo(s, dadosSala().ordem).find(id => id.startsWith("treino-bot-") && !s.escolhas[id]);
      if (bot) { proximoBot = agora + (C.treinoLivre(s) ? 1400 : 8000); enviar(comando("bot", { jogador: bot })); }
    } else if (s.fase === "deal" && agora >= s.turnoTerminaEm || s.fase === "fechamento" && agora >= s.fechamentoTerminaEm) {
      enviar(comando("relogio"));
    }
  }
  function textoTreino(s, id) {
    const p = C.passoTreino(s, dadosSala().ordem, id), rodada = Math.floor(s.vez / dadosSala().ordem.length) + 1;
    let texto = "";
    if (p.tipo === "comprar") texto = p.especial ? "Toque em Comprar e em uma carta. Esta é a única carta especial do treino: +6, sem pagar pela compra." : "Veja suas pistas e seu saldo de 12. Toque em Comprar e escolha uma carta do monte. Custa 4.";
    if (p.tipo === "consignar") texto = "Escolha “" + edicao.oferta + "” e uma pista sua. É grátis. Você recebe 2 se alguém a levar.";
    if (p.tipo === "capturar") texto = p.cartaz ? "Toque em Capturar e escolha a pista " + edicao.ofertaLocal + ". Você paga 2 e quem ofereceu recebe 2." : "Toque em Capturar e escolha uma pista de outro jogador. Custa 2. Cartas protegidas não podem ser levadas.";
    if (p.tipo === "arriscar") {
      const campo = s.campos.find(c => c.id === p.campo), op = campo.opcoes.find(o => o.id === p.valor);
      texto = "Experimente Arriscar: em “" + campo.rotulo + "”, escolha “" + op.txt + "” e confirme. " + (p.valor === campo.resposta ? "O acerto vale pontos e fecha a questão para todos; não desconta saldo." : "Vamos simular um erro: perde 3 e fecha a questão só para você. É preciso ter pelo menos 3.");
    }
    return "Rodada " + rodada + " de 2 · " + texto;
  }
  function pintar() {
    const e = E(); if (!e || e.state.protocolo !== 3) return;
    const s = e.state, d = dadosSala(); if (!d) return;
    const id = meuId(), ativos = C.grupo(s, d.ordem), jogadores = s.treino ? s.treinoJogadores : d.jogadores;
    const nome = pid => pid === id ? "Você" : (jogadores.find(j => j.id === pid) || {}).nome || "Jogador";
    const textoVez = ativos.map(nome).join(" + ");
    if ($("#vez")) $("#vez").textContent = textoVez;
    if ($("#log")) $("#log").textContent = s.pausado ? s.log : s.resultados[id] || s.log;
    const vezLocal = suaVez();
    const livre = C.treinoLivre(s);
    const passoLocal = s.treino && !livre && vezLocal ? C.passoTreino(s, d.ordem, id) : null;
    $("#deal")?.classList.toggle("vez-do-jogador", vezLocal);
    const painel = $("#painel");
    const area = $(s.verbo === "capturar" ? "#mesa-outros" : s.verbo === "comprar" ? "#mesa-publica" : "#pistas-box");
    if (painel && area && painel.parentElement !== area) area.appendChild(painel);
    const jogadaBot = $("#jogada-bot");
    if (livre && s.treinoUltimaJogada) {
      const { jogador, tipo } = s.treinoUltimaJogada;
      const resumo = { comprar: "comprou uma pista", capturar: "capturou uma pista", consignar: "ofereceu uma pista", arriscar: "arriscou uma resposta" };
      jogadaBot.textContent = nome(jogador) + " " + resumo[tipo] + ".";
    }
    jogadaBot.hidden = !livre || !s.treinoUltimaJogada;
    const status = $("#estado-acoes");
    const acoes = { arriscar: "Arriscar", capturar: "Capturar", comprar: "Comprar", consignar: edicao.oferta };
    const aviso = aguardaMestre() ? "Aguardando o mestre reconectar" : s.pausado ? "Partida pausada" : ocupado ? "Confirmando sua escolha…" : s.escolhas[id] ? "Escolha confirmada · aguarde a outra escolha" : vezLocal ? "Sua vez · " + (passoLocal ? "experimente " + acoes[passoLocal.tipo] : "escolha uma ação") : "Aguarde sua vez";
    if (status && status.textContent !== aviso) status.textContent = aviso;
    document.querySelectorAll("#verbos button, #leque button, #painel button").forEach(btn => {
      const tipo = btn.dataset.verbo, saldo = s.saldosPorJogador[id] || 0;
      const semSaldo = tipo === "arriscar" && saldo < 3 || tipo === "capturar" && saldo < 2 || tipo === "comprar" && saldo < 4 && (!s.treino || livre && !s.monte.includes("TBONUS"));
      const foraDaEtapa = passoLocal && tipo && tipo !== passoLocal.tipo;
      btn.disabled = !vezLocal || !!semSaldo || !!foraDaEtapa || (btn.hasAttribute("data-monte-index") && s.verbo !== "comprar");
      btn.classList.toggle("acao-guiada", !!(passoLocal && tipo === passoLocal.tipo));
      if (tipo) { btn.setAttribute("aria-pressed", s.verbo === tipo ? "true" : "false"); btn.title = semSaldo ? "Saldo insuficiente para esta ação" : ""; }
    });
    if ($("#mesa-sessao")) $("#mesa-sessao").hidden = !souMestre();
    const card = $("#treino-dica");
    if (card) {
      card.hidden = !s.treino || s.fase !== "deal";
      if (s.treino && s.fase === "deal") {
        const passar = $("#treino-passar");
        passar.hidden = !livre;
        passar.disabled = !vezLocal;
        if (livre) {
          const rodada = Math.floor(s.vez / d.ordem.length) + 1;
          const oferta = edicao.ofertaVerbo;
          const dica = vezLocal
            ? "Sua vez. Você pode arriscar, capturar, comprar ou " + oferta + "."
            : "Acompanhe a mesa e revise suas pistas enquanto espera.";
          $("#treino-texto").textContent = "Rodada " + rodada + " de 2 · " + dica;
        } else {
          const mostrandoSeuPasso = ativos.includes(id) && !s.escolhas[id];
          const observando = ativos.find(pid => !s.escolhas[pid]) || ativos[0];
          const passo = C.passoTreino(s, d.ordem, observando);
          const dicas = {
            comprar: passo.especial ? "A carta especial dá 6 e a compra é gratuita. Depois, ela sai do jogo." : "Comprar uma pista custa 4. As pistas que você reúne ficam na sua mão.",
            consignar: "Oferecer uma pista é grátis. Quem a ofereceu recebe 2 quando alguém a leva.",
            capturar: "Capturar custa 2. Se a pista estiver oferecida, os 2 vão para quem a colocou ali.",
            arriscar: passo.valor === s.campos.find(campo => campo.id === passo.campo)?.resposta ? "O acerto vale pontos e fecha a questão para todos, sem descontar saldo." : "Só o erro desconta 3. A questão fecha apenas para quem errou. Os outros ainda podem responder."
          };
          $("#treino-texto").textContent = mostrandoSeuPasso ? textoTreino(s, id) : "Vez de " + textoVez + ". " + dicas[passo.tipo] + " Seus botões liberam na sua vez; Ajuda está sempre disponível.";
        }
        const k = s.partidaId + ":dica:" + (livre ? "livre" : s.turnoId) + ":" + id;
        let lido = false; try { lido = sessionStorage.getItem(k) === "1"; } catch (_) {}
        $("#treino-texto").hidden = lido;
        $("#treino-entendi").textContent = lido ? "Rever dica" : "Entendi";
        $("#treino-entendi").onclick = () => { try { sessionStorage.setItem(k, lido ? "0" : "1"); } catch (_) {} $("#treino-texto").hidden = !lido; pintar(); };
      }
    }
    if (s.treino && $("#tempo")) $("#tempo").textContent = "treino";
    if (s.treino && !livre && $("#mesa-question")) $("#mesa-question").hidden = true;
    if (s.fase === "fechamento") {
      const pronto = !!s.finaisProntos?.[id];
      $("#fechamento-titulo").textContent = livre ? "Fechamento da demonstração" : "Um minuto para sustentar os campos abertos";
      $("#fechamento-concluir").hidden = !livre;
      $("#fechamento-concluir").disabled = ocupado || pronto || s.pausado;
      if (livre && pronto) {
        document.querySelectorAll("#fechamento-campos button").forEach(btn => { btn.disabled = true; });
        $("#fechamento-status").textContent = "Respostas concluídas. Aguardando os outros jogadores.";
      }
    }
    if (s.fase === "judge") {
      $("#again").hidden = livre || S.online && !souMestre();
      $("#voltar-demonstracao").hidden = !livre || !souMestre();
      $("#voltar-demonstracao").textContent = local ? "Voltar ao início" : "Voltar à sala";
      $("#placar-treino-espera").hidden = !livre || souMestre();
    }
    document.querySelectorAll("#ordem [data-jogador]").forEach(li => {
      const naVez = ativos.includes(li.dataset.jogador);
      li.classList.toggle("agora", naVez);
      li.querySelector(".ordem-vez").hidden = !naVez;
    });
    if ($("#telao-vez")) $("#telao-vez").textContent = textoVez;
  }
  function pintarSala() {
    const mestre = S.souMestre();
    if ($("#lobby-sessao")) $("#lobby-sessao").hidden = !mestre;
    if ($("#lobby-formato")) $("#lobby-formato").hidden = !mestre;
    if ($("#lobby-modalidade")) $("#lobby-modalidade").value = S.config.modalidade || "classica";
    if ($("#lobby-modalidade-texto")) $("#lobby-modalidade-texto").textContent = S.config.modalidade === "maratonar" ? "Dois jogadores ao mesmo tempo. Cada um por si." : "Um jogador por vez.";
    if ($("#btn-treino")) $("#btn-treino").hidden = !mestre;
    if ($("#btn-encerrar-sala")) $("#btn-encerrar-sala").closest("details").hidden = !mestre;
    if ($("#again")) { $("#again").hidden = C.treinoLivre(E().state) || S.online && !mestre; if (S.online) $("#again").textContent = "Voltar à sala"; }
    if ($("#treino-voltar")) $("#treino-voltar").hidden = !souMestre();
    if ($("#treino-espera")) $("#treino-espera").hidden = souMestre();
    if ($("#btn-sala")) $("#btn-sala").hidden = !S.online;
    const d = S.ultimoDoc;
    if (!d) return;
    const box = $("#presenca-lista");
    if (box) {
      box.innerHTML = d.jogadores.map(j => {
        const p = (d.presencas || {})[j.id], suspenso = d.snap && d.snap.suspensos && d.snap.suspensos[j.id];
        const estado = suspenso ? "Suspenso · lugar guardado" : C.presente(p, Date.now()) ? "Conectado" : "Reconectando · lugar guardado";
        return "<li><span>" + esc(j.nome) + " · " + estado + "</span>" + (mestre && j.id !== d.mestre ? "<button type='button' data-recuperar='" + esc(j.id) + "'>Recuperar acesso</button>" + (d.snap && d.snap.protocolo === 3 ? "<button type='button' data-suspender='" + esc(j.id) + "'>" + (suspenso ? "Reativar" : "Suspender vez") + "</button>" : "") : "") + "</li>";
      }).join("");
      box.querySelectorAll("[data-suspender]").forEach(b => b.onclick = () => enviar(comando("suspender", { jogador: b.dataset.suspender })));
      box.querySelectorAll("[data-recuperar]").forEach(b => b.onclick = () => gerarRecuperacao(b.dataset.recuperar).catch(falha));
    }
    if ($("#btn-pausar")) $("#btn-pausar").textContent = d.snap && d.snap.pausado ? "Retomar partida" : "Pausar partida";
  }
  async function hash(texto) { if (!crypto.subtle) throw new Error("A recuperação de acesso exige o endereço seguro do jogo (HTTPS)."); const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto)); return Array.from(new Uint8Array(bytes), b => b.toString(16).padStart(2, "0")).join(""); }
  async function gerarRecuperacao(id) {
    const token = uuid().replace(/-/g, ""), resumo = await hash(token), ref = S.ref(S.codigo);
    await window.MC_FB.db.runTransaction(async tx => {
      const doc = await tx.get(ref), d = doc.data();
      if (d.mestre !== S.uid || id === d.mestre || !d.jogadores.some(j => j.id === id)) throw new Error("Somente o mestre pode recuperar um participante.");
      d.recuperacoes = d.recuperacoes || {}; d.recuperacoes[id] = { hash: resumo, ate: Date.now() + 300000 };
      tx.set(ref, d);
    });
    const el = $("#recuperacao-codigo"); el.hidden = false;
    el.textContent = "Entregue apenas a esse participante. Vale por 5 minutos, uma vez: " + S.codigo + ":" + token;
  }
  function abrirRecuperacao() { $("#recuperar-dialog").showModal(); $("#recuperar-token").focus(); }
  async function recuperar() {
    const partes = $("#recuperar-token").value.trim().split(":"), codigo = (partes[0] || "").toUpperCase(), token = partes[1];
    if (!/^[A-Z0-9]{6}$/.test(codigo) || !/^[a-f0-9]{32}$/.test(token || "")) { $("#recuperar-erro").textContent = "Cole o código completo entregue pelo mestre."; return; }
    try {
      const doc = await S.ref(codigo).get();
      if (!doc.exists || doc.data().autoridade !== "mestre") throw new Error("A recuperação está disponível nas salas novas. Peça ao mestre para abrir outra sala.");
      await pedir(codigo, "recuperar", { token });
      S.codigo = codigo; S.uid = window.MC_FB.uid; $("#recuperar-dialog").close(); await conectar();
    } catch (e) { $("#recuperar-erro").textContent = e.message; }
  }
  async function sair() {
    try {
      if (S.codigo && ligado) {
        const ref = S.ref(S.codigo);
        if (S.ultimoDoc.autoridade === "mestre" && !S.souMestre()) await pedir(S.codigo, "sair", {});
        else await window.MC_FB.db.runTransaction(async tx => {
          const doc = await tx.get(ref); if (!doc.exists) return;
          const d = doc.data(), j = C.participante(d, S.uid); if (!j || d.mestre === S.uid) return;
          if (d.fase === "lobby") { d.jogadores = d.jogadores.filter(p => p.id !== j.id); d.ordem = d.ordem.filter(id => id !== j.id); }
          if (d.presencas && d.presencas[j.id]) d.presencas[j.id].saiu = true;
          tx.set(ref, d);
        });
      }
      S.resetar();
    } catch (e) { falha(e); }
  }
  async function encerrarSala() {
    if (!S.souMestre() || !ligado) throw new Error("Use a aba ativa do mestre para encerrar a sala.");
    const ref = S.ref(S.codigo);
    await window.MC_FB.db.runTransaction(async tx => {
      const doc = await tx.get(ref);
      if (!doc.exists) throw new Error("Sala não encontrada.");
      const d = doc.data();
      if (d.mestre !== S.uid || ((d.presencas || {})[d.mestre] || {}).aba !== aba) throw new Error("Use a aba ativa do mestre para encerrar a sala.");
      d.ativa = false; d.fase = "encerrada";
      if (d.snap) { d.snap.fase = "encerrada"; d.snap.revisao += 1; }
      tx.set(ref, d);
    });
  }
  window.MC_MESA = { entrar, aguardaMestre, sair, encerrarSala, conectar, esquecer, observarSala, suaVez, acao, confirmarRisco, controle, respostaFinal,
    publicarInicio, iniciarTreinoLocal, receber, tick, pintar, pintarSala };
  document.addEventListener("DOMContentLoaded", () => {
    window.MC_GAME.controleMestre = acao => E().controleMestre(acao);
    $("#btn-treino").onclick = iniciarTreino;
    const voltarDoTreino = () => { if (local) { esquecer(); S.show("open"); } else controle("retornar"); };
    $("#treino-voltar").onclick = voltarDoTreino;
    $("#voltar-demonstracao").onclick = voltarDoTreino;
    $("#treino-passar").onclick = () => acao({ tipo: "passar" });
    $("#fechamento-concluir").onclick = () => enviar(comando("final-pronto"));
    $("#risco-cancelar").onclick = () => { $("#risco-dialog").close(); risco = null; };
    $("#risco-confirmar").onclick = () => {
      const r = risco; $("#risco-dialog").close(); risco = null;
      if (r && r.turnoId === E().state.turnoId && r.partidaId === E().state.partidaId) acao({ tipo: "arriscar", campo: r.campo, valor: r.valor });
    };
    $("#lobby-modalidade").onchange = async event => {
      const modalidade = event.target.value;
      try {
        const ref = S.ref(S.codigo);
        await window.MC_FB.db.runTransaction(async tx => {
          const doc = await tx.get(ref), d = doc.data();
          if (d.mestre !== S.uid || d.fase !== "lobby") throw new Error("Somente o mestre pode configurar a sala antes do início.");
          d.config.modalidade = modalidade; tx.set(ref, d);
        });
      } catch (e) { falha(e); }
    };
    $("#btn-recuperar").onclick = abrirRecuperacao;
    $("#recuperar-enviar").onclick = recuperar;
    $("#recuperar-fechar").onclick = () => $("#recuperar-dialog").close();
    restaurar();
    heartbeat = setInterval(() => { pulso(); pintarSala(); }, 10000);
  });
  document.addEventListener("mc-fb-ready", () => { if (document.readyState !== "loading") restaurar(); });
  window.addEventListener("beforeunload", event => {
    if (S.online && ligado && ["deal", "fechamento"].includes(S.fase)) { event.preventDefault(); event.returnValue = ""; }
  });
  window.addEventListener("offline", () => { if (S.online) { banner("Sem conexão. Seu lugar e suas cartas estão guardados. Reconectando…"); pintar(); } });
  window.addEventListener("online", () => { if (S.codigo && S.online) conectar().catch(falha); });
  document.addEventListener("visibilitychange", () => { if (!document.hidden && S.online) { pulso(); pintar(); } });
})();
