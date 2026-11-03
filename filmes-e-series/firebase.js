const firebaseConfig = {
  apiKey: "AIzaSyD84_FE0mwm1NkbvN0arYQibrNsW2nrHPE",
  authDomain: "mosaico-card.firebaseapp.com",
  projectId: "mosaico-card",
  storageBucket: "mosaico-card.firebasestorage.app",
  messagingSenderId: "611680777777",
  appId: "1:611680777777:web:2c7532a011f659c4444710",
  measurementId: "G-1BZENQ7QP7"
};

window.MC_FB = {
  ready: false,
  err: "",
  app: null,
  db: null,
  auth: null,
  uid: null
};

(function initFirebase() {
  try {
    if (typeof firebase === "undefined") {
      window.MC_FB.err = "SDK Firebase nao carregou.";
      return;
    }
    window.MC_FB.app = firebase.initializeApp(firebaseConfig);
    window.MC_FB.db = firebase.firestore();
    window.MC_FB.auth = firebase.auth();
    // Espere a restauração: recarregar não pode substituir a conta Google do mestre.
    const auth = window.MC_FB.auth;
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function () {
      window.MC_FB.persistenceWarning = true;
    }).then(function () {
      let entrando = false;
      auth.onAuthStateChanged(function (user) {
        if (user) {
          window.MC_FB.uid = user.uid;
          window.MC_FB.ready = true;
          window.MC_FB.err = "";
          document.dispatchEvent(new CustomEvent("mc-fb-ready"));
        } else if (!entrando) {
          entrando = true;
          auth.signInAnonymously().catch(function (e) {
            entrando = false;
            window.MC_FB.err = "Não foi possível conectar. Tente novamente. " + (e.code || "");
            document.dispatchEvent(new CustomEvent("mc-fb-ready"));
          });
        }
      });
    });
  } catch (e) {
    window.MC_FB.err = String(e && e.message ? e.message : e);
  }
})();
