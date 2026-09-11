(function () {
  "use strict";
  const bank = window.MC_NT_BANK;
  if (!bank) return;

  function elegiveis() {
    return bank.order.filter(function (id) {
      const caso = bank.byId[id];
      return caso && caso.status && caso.status.playable === true;
    });
  }
  function chaveSaco() { return "mc:nt:saco:v" + bank.schemaVersion; }
  function lerSaco() {
    try {
      const value = JSON.parse(localStorage.getItem(chaveSaco()) || "null");
      return value && Array.isArray(value.ids) ? value : { ids: [], ultimo: null };
    } catch (_) {
      return { ids: [], ultimo: null };
    }
  }
  function salvarSaco(value) {
    try { localStorage.setItem(chaveSaco(), JSON.stringify(value)); } catch (_) { /* sessão sem persistência */ }
  }
  function embaralhar(ids) {
    const result = ids.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }
  bank.sortear = function () {
    const aptos = elegiveis();
    if (!aptos.length) {
      return {
        erro: "Os 145 casos substituíram o catálogo antigo, mas ainda aguardam baralho, campo focal e gabaritos validados.",
        pendentes: bank.summary.cases
      };
    }
    let saco = lerSaco();
    saco.ids = saco.ids.filter(function (id) { return aptos.includes(id); });
    if (!saco.ids.length) {
      saco.ids = embaralhar(aptos);
      if (saco.ids.length > 1 && saco.ids[0] === saco.ultimo) {
        [saco.ids[0], saco.ids[1]] = [saco.ids[1], saco.ids[0]];
      }
    }
    const id = saco.ids.shift();
    saco.ultimo = id;
    salvarSaco(saco);
    return { id: id, caso: bank.byId[id], restantes: saco.ids.length };
  };
  bank.elegiveis = elegiveis;
})();
