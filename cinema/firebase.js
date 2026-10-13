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
    window.MC_FB.auth.signInAnonymously()
      .then(function (cred) {
        window.MC_FB.uid = cred.user.uid;
        window.MC_FB.ready = true;
        document.dispatchEvent(new CustomEvent("mc-fb-ready"));
      })
      .catch(function (e) {
        window.MC_FB.err = "Ative Authentication > Anônimo no console Firebase. " + (e.code || "");
        document.dispatchEvent(new CustomEvent("mc-fb-ready"));
      });
  } catch (e) {
    window.MC_FB.err = String(e && e.message ? e.message : e);
  }
})();
