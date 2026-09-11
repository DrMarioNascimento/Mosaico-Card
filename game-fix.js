(function () {
  function nJogadores() {
    return Math.max(1, ORDEM.length);
  }
  function nOvelhas() {
    var n = nJogadores();
    return 1 + Math.floor((n - 1) / 2);
  }
  function euAgora() {
    return (window.MC_SALA && window.MC_SALA.online && window.MC_SALA.uid) ? window.MC_SALA.uid : "voce";
  }
  function pecasFato() {
    return Object.keys(PECAS).filter(function (id) {
      var p = PECAS[id];
      return !(p.figura === "ovelha" || (p.protegida && /ovelha/i.test(p.marca || "")) || /ovelha perdida/i.test(p.texto || "") || id.indexOf("OV") === 0);
    });
  }
  function montarOvelhas(qtd) {
    var ids = [];
    for (var i = 0; i < qtd; i += 1) {
      var id = (casoId === "ovelha" && i === 0 && PECAS.F4) ? "F4" : "OV" + (i + 1);
      PECAS[id] = {
        id: id,
        marca: "Ovelha",
        texto: "Você achou uma ovelha perdida. Vale 6 denários de recompensa. Não pode ser capturada.",
        figura: "ovelha",
        recompensa: 6,
        protegida: true
      };
      ids.push(id);
    }
    return ids;
  }

  var _eOvelha = eOvelha;
  eOvelha = function (id) {
    var p = peca(id);
    if (!p) return false;
    if (p.figura === "ovelha" || String(id).indexOf("OV") === 0) return true;
    return _eOvelha(id);
  };

  startDeal = function () {
    if (window.MC_SALA && window.MC_SALA.online && window.MC_SALA.jogadores && window.MC_SALA.jogadores.length) {
      ORDEM.length = 0;
      window.MC_SALA.jogadores.forEach(function (j) {
        ORDEM.push(j.id);
        NOMES[j.id] = j.nome || "Jogador";
      });
    }
    carregarCaso(casoId || "ovelha");
    var ovelhas = montarOvelhas(nOvelhas());
    var fatos = shuffle(pecasFato());
    var me = euAgora();
    if (ORDEM.indexOf(me) < 0) ORDEM.unshift(me);
    state.rivais = {};
    state.voltasFeitas = {};
    var cursor = 0;
    ORDEM.forEach(function (id) {
      var mao = fatos.slice(cursor, cursor + 2);
      cursor += 2;
      if (id === me) state.mao = mao;
      else state.rivais[id] = mao;
      state.voltasFeitas[id] = 0;
    });
    var resto = fatos.slice(cursor);
    var extras = ovelhas.slice(casoId === "ovelha" ? 1 : 0);
    if (casoId === "ovelha") state.monte = [ovelhas[0]].concat(shuffle(resto.concat(extras)));
    else state.monte = shuffle(resto.concat(ovelhas));
    state.moedas = MOEDAS;
    state.balaio = [];
    state.travados = {};
    state.pagas = {};
    state.vez = 0;
    state.verbo = null;
    state.pistasAbertas = true;
    var c = (window.MC_CASOS || {})[casoId];
    var titulo = document.getElementById("caso-titulo");
    if (titulo && c) titulo.textContent = c.titulo;
    say("A vez é sua. " + (casoId === "ovelha"
      ? "A primeira carta do monte é a ovelha."
      : nOvelhas() + " ovelha(s) no monte, no meio das pistas."));
    render();
    show("deal");
    startTimer();
    showBagToast();
    requestAnimationFrame(playCoinIntro);
    var coin = document.querySelector(".stash-art .coin");
    if (coin) coin.classList.add("on");
    if (window.MC_GAME && window.MC_GAME.publicarEstado) window.MC_GAME.publicarEstado("deal");
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

  pintarCasos = function () {
    var box = document.getElementById("casos");
    if (!box) return;
    var c = (window.MC_CASOS || {}).ovelha;
    if (!c) { box.innerHTML = ""; return; }
    box.innerHTML = "<button class='caso-btn ligado' type='button' data-caso='ovelha'><small>" + c.fonte + "</small>" + c.titulo + "</button>";
    box.querySelector("[data-caso]").addEventListener("click", function () {
      carregarCaso("ovelha");
    });
    carregarCaso("ovelha");
  };
  if (document.readyState !== "loading") pintarCasos();
})();
