(function () {
  "use strict";
  /* Sorteio do banco Cinema & Séries: filtra por formato (filme/série) e Top 50,
     mantém um "saco" separado por combinação de sessão para não repetir obra
     e uma memória global das últimas obras, para não repetir ao trocar de sessão. */
  const bank = window.MC_CINEMA_BANK;
  if (!bank) return;
  const SESSAO = window.MC_SESSAO;
  const rascunho = (function () {
    try { return new URLSearchParams(location.search).get("rascunho") === "1"; } catch (_) { return false; }
  })();
  bank.modoRascunho = rascunho;

  function normalizar(sessao) {
    return SESSAO ? SESSAO.normalizar(sessao) : { formatos: ["filme", "serie"], top50: false };
  }
  function disponivel(caso) {
    if (!caso || !caso.status) return false;
    if (caso.status.playable === true) return true;
    // Modo rascunho (?rascunho=1): permite testar pautas com estrutura aprovada, ainda em revisão.
    return rascunho && caso.status.structural === "approved" && caso.deck && caso.deck.maxPlayers >= 2;
  }
  function elegiveis(numeroJogadores, sessao) {
    const s = normalizar(sessao);
    return bank.order.filter(function (id) {
      const caso = bank.byId[id];
      if (!disponivel(caso)) return false;
      if (!s.formatos.includes(caso.format)) return false;
      if (s.top50 && caso.selection !== "sucessos") return false;
      if (numeroJogadores == null) return true;
      const quantidade = Number(numeroJogadores);
      return Number.isInteger(quantidade) && quantidade >= 2 && quantidade <= caso.deck.maxPlayers;
    });
  }
  function chaveSaco(numeroJogadores, sessao) {
    const s = normalizar(sessao);
    const combinacao = SESSAO ? SESSAO.chave(s) : s.formatos.join("+") + ":" + (s.top50 ? "top50" : "catalogo");
    return "mc:banco:saco:" + bank.namespace + ":" + bank.catalogVersion + ":v" + bank.schemaVersion + ":" + combinacao + (rascunho ? ":rascunho" : "") + ":j" + (numeroJogadores == null ? "all" : numeroJogadores);
  }
  function lerSaco(chave) {
    try {
      const value = JSON.parse(localStorage.getItem(chave) || "null");
      return value && Array.isArray(value.ids) ? value : { ids: [], ultimo: null };
    } catch (_) {
      return { ids: [], ultimo: null };
    }
  }
  function salvarSaco(chave, value) {
    try { localStorage.setItem(chave, JSON.stringify(value)); } catch (_) { /* sessão sem persistência */ }
  }
  const RECENTES_MAX = 6;
  const CHAVE_RECENTES = "mc:banco:recentes:" + bank.namespace;
  function lerRecentes() {
    try { const v = JSON.parse(localStorage.getItem(CHAVE_RECENTES) || "[]"); return Array.isArray(v) ? v : []; }
    catch (_) { return []; }
  }
  function salvarRecentes(lista) {
    try { localStorage.setItem(CHAVE_RECENTES, JSON.stringify(lista)); } catch (_) { /* sem persistência */ }
  }
  function embaralhar(ids) {
    const result = ids.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  bank.sortear = function (numeroJogadores, sessao) {
    const aptos = elegiveis(numeroJogadores, sessao);
    if (!aptos.length) {
      return {
        erro: "Não há obra validada nesta sessão para esta quantidade de participantes. Ajuste a sessão (por exemplo, desmarque o Top 50).",
        pendentes: bank.summary.cases
      };
    }
    const chave = chaveSaco(numeroJogadores, sessao);
    const saco = lerSaco(chave);
    saco.ids = saco.ids.filter(function (id) { return aptos.includes(id); });
    if (!saco.ids.length) {
      saco.ids = embaralhar(aptos);
      if (saco.ids.length > 1 && saco.ids[0] === saco.ultimo) {
        [saco.ids[0], saco.ids[1]] = [saco.ids[1], saco.ids[0]];
      }
    }
    // Memória global de obras recentes (vale para todas as combinações e tamanhos de mesa):
    // evita repetir a mesma obra quando o grupo troca a sessão ou o número de jogadores.
    const recentes = lerRecentes();
    const limite = Math.min(RECENTES_MAX, Math.max(0, aptos.length - 1));
    const bloqueadas = recentes.slice(0, limite);
    let pos = saco.ids.findIndex(function (cand) { return !bloqueadas.includes(cand); });
    if (pos < 0) pos = 0;
    const id = saco.ids.splice(pos, 1)[0];
    saco.ultimo = id;
    salvarSaco(chave, saco);
    salvarRecentes([id].concat(recentes.filter(function (r) { return r !== id; })).slice(0, RECENTES_MAX));
    return { id: id, caso: bank.byId[id], restantes: saco.ids.length };
  };
  bank.elegiveis = elegiveis;
  bank.chaveSaco = chaveSaco;
})();
