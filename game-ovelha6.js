(function () {
  window.eProtegida = function (id) {
    const p = peca(id);
    return !!(p && (p.protegida || eOvelha(id)));
  };
  const _capturar = capturar;
  capturar = function (quemId, pecaId) {
    if (eProtegida(pecaId)) return say("Essa pista não pode ser capturada.");
    return _capturar(quemId, pecaId);
  };
  const _html = htmlPainel;
  htmlPainel = function () {
    const v = state.verbo;
    if (v === "comprar") {
      if (!state.monte.length) return "<p>O monte esta vazio.</p>";
      return "<p>Comprar uma pista lacrada custa 4. Se for a ovelha, a compra não cobra e você ganha 6. Ela não pode ser capturada.</p><button class='slim' type='button' data-act='comprar-ok'>Comprar agora</button>";
    }
    if (v === "capturar") {
      const euAgora = (window.MC_SALA && window.MC_SALA.online && window.MC_SALA.uid) ? window.MC_SALA.uid : "voce";
      const alvos = ORDEM.filter((id) => id !== euAgora && state.rivais[id] && state.rivais[id].length);
      if (!alvos.length) return "<p>Ninguem tem pista a vista para capturar.</p>";
      const chips = alvos.map((id) =>
        (state.rivais[id] || []).filter((pid) => !eProtegida(pid)).map((pid) =>
          "<button class='chip' type='button' data-act='capturar-ok' data-quem='" + id + "' data-id='" + pid + "'><small>" + (NOMES[id] || id) + " · 2</small>" + peca(pid).marca + "</button>"
        ).join("")
      ).join("");
      if (!chips) return "<p>Não há pista capturável à vista. A ovelha não pode ser tomada.</p>";
      return "<p>Capturar custa 2. A ovelha não entra nessa lista.</p>" + chips;
    }
    return _html();
  };
  const _revelar = revelarCompra;
  revelarCompra = function (id, jogadorId, depois) {
    if (eOvelha(id)) {
      const p = peca(id);
      const stage = document.querySelector("#flip-stage");
      const front = document.querySelector("#flip-front");
      const msg = document.querySelector("#flip-msg");
      const inner = document.querySelector("#flip-inner");
      if (stage && front) {
        front.innerHTML = "<small>" + p.marca + "</small><img class='ovelha-art' alt='Ovelha perdida' src='" + OVELHA_SRC + "'><p>" + p.texto + "</p>";
        msg.textContent = jogadorId === "voce" || (window.MC_SALA && jogadorId === window.MC_SALA.uid)
          ? "Você achou uma ovelha perdida. A compra não cobra e vale 6 denários. Não pode ser capturada"
          : (NOMES[jogadorId] || "Alguém") + " achou uma ovelha perdida!";
        if (inner) { inner.style.animation = "none"; void inner.offsetWidth; inner.style.animation = ""; }
        stage.hidden = false;
        if (window.flipTimer) clearTimeout(window.flipTimer);
        window.flipTimer = setTimeout(function () { stage.hidden = true; if (depois) depois(); }, 5500);
        return;
      }
    }
    return _revelar(id, jogadorId, depois);
  };
})();
