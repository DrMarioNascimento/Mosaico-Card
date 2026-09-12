(function () {
  "use strict";
  const bank = window.MC_NT_BANK;
  if (!bank) return;

  function elegiveis(numeroJogadores) {
    return bank.order.filter(function (id) {
      const caso = bank.byId[id];
      if (!(caso && caso.status && caso.status.playable === true)) return false;
      if (numeroJogadores == null) return true;
      const quantidade = Number(numeroJogadores);
      return Number.isInteger(quantidade) && quantidade >= 2 && quantidade <= caso.deck.maxPlayers;
    });
  }
  function chaveSaco(numeroJogadores) { return "mc:banco:saco:" + bank.namespace + ":" + bank.catalogVersion + ":v" + bank.schemaVersion + ":j" + (numeroJogadores == null ? "all" : numeroJogadores); }
  function lerSaco(numeroJogadores) {
    try {
      const value = JSON.parse(localStorage.getItem(chaveSaco(numeroJogadores)) || "null");
      return value && Array.isArray(value.ids) ? value : { ids: [], ultimo: null };
    } catch (_) {
      return { ids: [], ultimo: null };
    }
  }
  function salvarSaco(value, numeroJogadores) {
    try { localStorage.setItem(chaveSaco(numeroJogadores), JSON.stringify(value)); } catch (_) { /* sessão sem persistência */ }
  }
  function embaralhar(ids) {
    const result = ids.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  bank.sortear = function (numeroJogadores) {
    const aptos = elegiveis(numeroJogadores);
    if (!aptos.length) {
      return {
        erro: "O banco NT/NAA não possui pauta editorialmente elegível e compatível com esta quantidade de participantes.",
        pendentes: bank.summary.cases
      };
    }
    let saco = lerSaco(numeroJogadores);
    saco.ids = saco.ids.filter(function (id) { return aptos.includes(id); });
    if (!saco.ids.length) {
      saco.ids = embaralhar(aptos);
      if (saco.ids.length > 1 && saco.ids[0] === saco.ultimo) {
        [saco.ids[0], saco.ids[1]] = [saco.ids[1], saco.ids[0]];
      }
    }
    const id = saco.ids.shift();
    saco.ultimo = id;
    salvarSaco(saco, numeroJogadores);
    return { id: id, caso: bank.byId[id], restantes: saco.ids.length };
  };
  bank.elegiveis = elegiveis;
})();
