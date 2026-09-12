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
  document.getElementById("go-how").addEventListener("click", function () {
    window.MC_SALA.show("how-to-play");
    window.scrollTo(0, 0);
    document.getElementById("how-title").focus({ preventScroll: true });
  });
  document.getElementById("how-back").addEventListener("click", function () {
    if (helpDialog.open) { helpDialog.close(); return; }
    if (window.MC_SALA.codigoConvite) {
      window.MC_SALA.continuarConvite();
      document.getElementById("nome").focus();
      return;
    }
    window.MC_SALA.show("open");
    document.getElementById("go-how").focus();
  });
  document.getElementById("welcome-start").addEventListener("click", function () {
    if (window.MC_SALA && window.MC_SALA.codigoConvite) {
      window.MC_SALA.show("how-to-play");
      window.scrollTo(0, 0);
      document.getElementById("how-title").focus({ preventScroll: true });
      return;
    }
    if (window.MC_SALA && typeof window.MC_SALA.show === "function") {
      window.MC_SALA.show("open");
    } else {
      document.getElementById("welcome").classList.remove("active");
      document.getElementById("open").classList.add("active");
    }
    document.getElementById("btn-abrir-mesa").focus();
  });
})();
