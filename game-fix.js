(function () {
  var OV = {
    id: "OV",
    marca: "Ovelha",
    texto: "Você achou uma ovelha perdida. Vale 6 denários de recompensa. Não pode ser capturada.",
    figura: "ovelha",
    recompensa: 6,
    protegida: true
  };
  Object.keys(window.MC_CASOS || {}).forEach(function (id) {
    var pecas = window.MC_CASOS[id].pecas;
    var ja = Object.keys(pecas).some(function (k) {
      var p = pecas[k];
      return p.figura === "ovelha" || /ovelha/i.test(p.marca || "") || /ovelha perdida/i.test(p.texto || "");
    });
    if (!ja) pecas.OV = OV;
    Object.keys(pecas).forEach(function (k) {
      if (pecas[k].figura === "ovelha" || /ovelha/i.test(pecas[k].marca || "")) {
        pecas[k].recompensa = 6;
        pecas[k].protegida = true;
      }
    });
  });

  var _eOvelha = eOvelha;
  eOvelha = function (id) {
    var p = peca(id);
    if (p && (id === "OV" || p.figura === "ovelha" || p.protegida && /ovelha/i.test(p.marca || ""))) return true;
    return _eOvelha(id);
  };

  var _start = startDeal;
  startDeal = function () {
    _start();
    if (!state.voltasFeitas) state.voltasFeitas = {};
    ORDEM.forEach(function (id) {
      if (typeof state.voltasFeitas[id] !== "number") state.voltasFeitas[id] = 0;
    });
    var coin = document.querySelector(".stash-art .coin");
    if (coin) coin.classList.add("on");
    var titulo = document.getElementById("caso-titulo");
    var c = (window.MC_CASOS || {})[casoId];
    if (titulo && c) titulo.textContent = c.titulo;
    render();
  };

  var _render = render;
  render = function () {
    _render();
    var coin = document.querySelector(".stash-art .coin");
    if (coin) coin.classList.add("on");
  };

  var _pintar = pintarCasos;
  pintarCasos = function () {
    _pintar();
    var box = document.getElementById("casos");
    if (!box) return;
    box.querySelectorAll("[data-caso]").forEach(function (btn) {
      btn.classList.toggle("ligado", btn.dataset.caso === casoId);
    });
  };
  if (document.readyState !== "loading") pintarCasos();
})();
