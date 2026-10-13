(function () {
  "use strict";
  const helpScene = document.getElementById("how-to-play");
  const helpContent = helpScene.querySelector(".how-wrap");
  const helpDialog = document.createElement("dialog");
  helpDialog.id = "mesa-help-dialog";
  helpDialog.setAttribute("aria-labelledby", "how-title");
  document.body.appendChild(helpDialog);
  document.getElementById("mesa-info").addEventListener("click", function () {
    helpDialog.appendChild(helpContent);
    helpDialog.showModal();
    helpDialog.scrollTop = 0;
    document.getElementById("how-title").focus({ preventScroll: true });
  });
  helpDialog.addEventListener("close", function () {
    helpScene.appendChild(helpContent);
  });
  function abrirExplicacao() {
    if (window.MC_SALA && typeof window.MC_SALA.show === "function") {
      window.MC_SALA.show("how-to-play");
    } else {
      document.querySelectorAll(".scene").forEach(function (el) {
        el.classList.toggle("active", el.id === "how-to-play");
      });
    }
    window.scrollTo(0, 0);
    const titulo = document.getElementById("how-title");
    if (titulo) titulo.focus({ preventScroll: true });
  }
  document.getElementById("go-how").addEventListener("click", abrirExplicacao);
  document.getElementById("how-back").addEventListener("click", function () {
    if (helpDialog.open) { helpDialog.close(); return; }
    if (window.MC_SALA && window.MC_SALA.codigoConvite) {
      window.MC_SALA.continuarConvite();
      document.getElementById("nome").focus();
      return;
    }
    if (window.MC_SALA && typeof window.MC_SALA.show === "function") {
      window.MC_SALA.show("open");
    } else {
      document.querySelectorAll(".scene").forEach(function (el) {
        el.classList.toggle("active", el.id === "open");
      });
    }
    const criar = document.getElementById("btn-abrir-mesa");
    if (criar) criar.focus();
  });
  document.getElementById("welcome-start").addEventListener("click", abrirExplicacao);

  function encaixarTituloNaCitacao() {
    const titulo = document.getElementById("caso-titulo");
    const pergunta = document.getElementById("mesa-question");
    if (!titulo || !pergunta || !pergunta.parentNode) return;
    if (titulo.nextElementSibling === pergunta) return;
    pergunta.parentNode.insertBefore(titulo, pergunta);
    titulo.hidden = false;
  }
  encaixarTituloNaCitacao();
  const alvo = document.getElementById("caso-titulo");
  if (alvo && window.MutationObserver) {
    new MutationObserver(encaixarTituloNaCitacao).observe(alvo, { childList: true, characterData: true, subtree: true });
  }
  document.addEventListener("visibilitychange", encaixarTituloNaCitacao);

  function garantirTemposLongos() {
    const grupo = document.querySelector('[aria-label="Tempo por jogada"]');
    if (!grupo || grupo.querySelector('[data-tempo="90"]')) return;
    [
      { s: "90", rotulo: "Mais folga" },
      { s: "120", rotulo: "Máxima folga" }
    ].forEach(function (op) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tempo-op";
      btn.setAttribute("data-tempo", op.s);
      btn.setAttribute("aria-pressed", "false");
      btn.innerHTML = "<b>" + op.s + " s</b><span>" + op.rotulo + "</span>";
      btn.addEventListener("click", function () {
        document.querySelectorAll("[data-tempo]").forEach(function (el) {
          const on = el.getAttribute("data-tempo") === op.s;
          el.classList.toggle("on", on);
          el.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
      grupo.appendChild(btn);
    });
    document.querySelectorAll("#how-to-play p").forEach(function (p) {
      if (p.textContent.indexOf("30, 45 ou 60") !== -1) {
        p.innerHTML = p.innerHTML.replace("30, 45 ou 60", "30, 45, 60, 90 ou 120");
      }
    });
  }
  garantirTemposLongos();
})();
