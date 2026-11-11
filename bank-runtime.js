(function () {
  "use strict";
  const bank = window.MC_NT_BANK;
  if (!bank) return;

  const devocionais = [];
  for (const [id, pauta] of Object.entries(window.MC_NT_DEVOCIONAL || {})) {
    const original = bank.byId[id];
    if (!original?.status?.playable) continue;
    const caso = {
      ...original,
      id: id + "-devocional",
      title: pauta.titulo,
      prompt: { ...original.prompt, question: pauta.pergunta },
      fields: original.fields.map(field => {
        const edicao = pauta.campos[field.id];
        if (typeof edicao === "string") return { ...field, rotulo: edicao };
        const opcoes = field.opcoes.map((opcao, i) => ({ ...opcao, texto: edicao.opcoes[i] }));
        return {
          ...field,
          rotulo: edicao.pergunta,
          opcoes,
          respostaCanonica: opcoes.find(opcao => opcao.id === field.respostaId).texto
        };
      }),
      deck: {
        ...original.deck,
        cards: original.deck.cards.map((card, i) => {
          const pista = pauta.pistas[i];
          return typeof pista === "string"
            ? { ...card, text: pista, texto: pista }
            : { ...card, text: pista.emoji, texto: pista.emoji, marca: "Emojis" };
        })
      }
    };
    bank.byId[caso.id] = caso;
    devocionais.push(caso.id);
  }

  function elegiveis(numeroJogadores, modo) {
    const ordem = modo === "devocional" ? devocionais : bank.order;
    return ordem.filter(function (id) {
      const caso = bank.byId[id];
      if (!(caso && caso.status && caso.status.playable === true)) return false;
      if (numeroJogadores == null) return true;
      const quantidade = Number(numeroJogadores);
      return Number.isInteger(quantidade) && quantidade >= 2 && quantidade <= caso.deck.maxPlayers;
    });
  }
  function chaveSaco(numeroJogadores, modo) {
    const categoria = modo === "devocional" ? ":devocional" : "";
    return "mc:banco:saco:" + bank.namespace + ":" + bank.catalogVersion + ":v" + bank.schemaVersion + categoria + ":j" + (numeroJogadores == null ? "all" : numeroJogadores);
  }
  function lerSaco(numeroJogadores, modo) {
    try {
      const value = JSON.parse(localStorage.getItem(chaveSaco(numeroJogadores, modo)) || "null");
      return value && Array.isArray(value.ids) ? value : { ids: [], ultimo: null };
    } catch (_) {
      return { ids: [], ultimo: null };
    }
  }
  function salvarSaco(value, numeroJogadores, modo) {
    try { localStorage.setItem(chaveSaco(numeroJogadores, modo), JSON.stringify(value)); } catch (_) { /* sessão sem persistência */ }
  }
  function embaralhar(ids) {
    const result = ids.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  bank.sortear = function (numeroJogadores, modo) {
    const aptos = elegiveis(numeroJogadores, modo);
    if (!aptos.length) {
      return {
        erro: "O banco NT/NAA não possui pauta editorialmente elegível e compatível com esta quantidade de participantes.",
        pendentes: bank.summary.cases
      };
    }
    let saco = lerSaco(numeroJogadores, modo);
    saco.ids = saco.ids.filter(function (id) { return aptos.includes(id); });
    if (!saco.ids.length) {
      saco.ids = embaralhar(aptos);
      if (saco.ids.length > 1 && saco.ids[0] === saco.ultimo) {
        [saco.ids[0], saco.ids[1]] = [saco.ids[1], saco.ids[0]];
      }
    }
    const id = saco.ids.shift();
    saco.ultimo = id;
    salvarSaco(saco, numeroJogadores, modo);
    return { id: id, caso: bank.byId[id], restantes: saco.ids.length };
  };
  bank.elegiveis = elegiveis;

  var extra = document.createElement("script");
  extra.src = "case-mt23.js?v=1";
  document.head.appendChild(extra);
})();
