(function () {
  "use strict";
  document.getElementById("go-how").addEventListener("click", function () {
    window.MC_SALA.show("how-to-play");
    window.scrollTo(0, 0);
    document.getElementById("how-title").focus({ preventScroll: true });
  });
  document.getElementById("how-back").addEventListener("click", function () {
    window.MC_SALA.show("open");
    document.getElementById("go-how").focus();
  });
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
