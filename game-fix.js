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
    if (!pecas.OV) pecas.OV = OV;
    Object.keys(pecas).forEach(function (k) {
      if (pecas[k].figura === "ovelha" || pecas[k].id === "F4" && id === "ovelha") {
        pecas[k].recompensa = 6;
        pecas[k].protegida = true;
      }
    });
  });
  if (typeof PECAS !== "undefined" && PECAS && !PECAS.OV) PECAS.OV = OV;

  var _eOvelha = eOvelha;
  eOvelha = function (id) {
    if (id === "OV" || id === "F4") {
      var p = peca(id);
      if (p && (p.figura === "ovelha" || p.protegida || /ovelha/i.test(p.marca || ""))) return true;
    }
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
    ORDEM.forEach(function (id) {
      if (typeof state.voltasFeitas[id] !== "number") state.voltasFeitas[id] = 0;
    });
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
})();
