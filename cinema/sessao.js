/* Sessão do Mosaico Card — Cinema & Séries: formatos marcados e Top 50. */
(function (root) {
  "use strict";
  const PADRAO = Object.freeze({ formatos: ["filme", "serie"], top50: false });
  function normalizar(entrada) {
    const e = entrada || {};
    let formatos = Array.isArray(e.formatos) ? e.formatos.filter(function (f) { return f === "filme" || f === "serie"; }) : PADRAO.formatos.slice();
    formatos = Array.from(new Set(formatos)).sort();
    return { formatos: formatos, top50: e.top50 === true };
  }
  function valida(sessao) { return normalizar(sessao).formatos.length > 0; }
  function texto(sessao) {
    const s = normalizar(sessao);
    const formatos = s.formatos.length === 2 ? "Filmes e Séries" : (s.formatos[0] === "filme" ? "Filmes" : (s.formatos[0] === "serie" ? "Séries" : "—"));
    return "Sessão: " + formatos + " · " + (s.top50 ? "Top 50" : "Catálogo completo") + " · a partir de 2001";
  }
  function chave(sessao) {
    const s = normalizar(sessao);
    return s.formatos.join("+") + ":" + (s.top50 ? "top50" : "catalogo");
  }
  const api = { PADRAO: PADRAO, normalizar: normalizar, valida: valida, texto: texto, chave: chave };
  if (typeof module === "object" && module.exports) module.exports = api;
  root.MC_SESSAO = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
