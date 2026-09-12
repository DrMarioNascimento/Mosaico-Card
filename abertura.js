(function () {
  "use strict";
  document.getElementById("welcome-start").addEventListener("click", function () {
    if (window.MC_SALA && typeof window.MC_SALA.show === "function") {
      window.MC_SALA.show("open");
    } else {
      document.getElementById("welcome").classList.remove("active");
      document.getElementById("open").classList.add("active");
    }
    document.getElementById("btn-abrir-mesa").focus();
  });
})();
