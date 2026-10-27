/* Mosaico Card · abrir sala só para mestres autorizados (16/10/2026).
   Qualquer pessoa continua ENTRANDO numa sala pelo código ou QR, como convidado anônimo.
   CRIAR uma sala passa a exigir uma conta Google que esteja na lista de mestres do projeto
   (Firestore: config/mestres, campo "emails"). O Google é ligado à sessão anônima atual
   (linkWithPopup), então o uid não muda quando dá certo. */
(function () {
  'use strict';
  var autorizado = false, verificando = false;
  function fb() { return window.MC_FB || {}; }
  function css() {
    if (document.getElementById('mcMestreCss')) return;
    var s = document.createElement('style'); s.id = 'mcMestreCss';
    s.textContent = '#mcMestre{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(5,4,3,.86);backdrop-filter:blur(6px);color:#f4ead7;font:16px/1.5 Inter,system-ui,sans-serif}'
      + '#mcMestre .cx{width:min(420px,100%);padding:24px 20px;border:1px solid rgba(232,187,85,.4);border-radius:16px;background:linear-gradient(170deg,#21170f,#0e0b08);box-shadow:0 18px 50px #000c;text-align:center}'
      + '#mcMestre small{display:block;font:700 11px/1 ui-monospace,monospace;letter-spacing:.2em;text-transform:uppercase;color:#e8bb55}'
      + '#mcMestre h2{margin:12px 0 8px;font:700 24px Georgia,serif}#mcMestre p{margin:0 0 16px;color:#c6b69f}'
      + '#mcMestre button{width:100%;min-height:50px;border:0;border-radius:10px;font:800 14px/1 Inter,system-ui,sans-serif;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;background:linear-gradient(180deg,#ffd979,#dba22f);color:#201503;margin-top:8px}'
      + '#mcMestre button.sec{background:transparent;color:#e8bb55;border:1px solid rgba(232,187,85,.4)}#mcMestre button[disabled]{opacity:.6;cursor:wait}'
      + '#mcMestre .erro{margin-top:12px;padding:10px;border-left:3px solid #e56b52;background:#28110e;color:#ffd4ca;text-align:left;font-size:14px}#mcMestre .erro:empty{display:none}';
    document.head.appendChild(s);
  }
  function fechar() { var g = document.getElementById('mcMestre'); if (g) g.remove(); }
  function erro(t) { var e = document.getElementById('mcMestreErro'); if (e) e.textContent = t || ''; }
  async function naLista(user) {
    if (!user || user.isAnonymous || !user.email) return false;
    var s = await fb().db.collection('config').doc('mestres').get();
    var lista = s.exists && Array.isArray(s.data().emails) ? s.data().emails.map(function (e) { return String(e).toLowerCase(); }) : [];
    return lista.indexOf(user.email.toLowerCase()) >= 0;
  }
  function avisarUid(user) {
    window.MC_FB.uid = user.uid;
    document.dispatchEvent(new CustomEvent('mc-fb-ready'));
  }
  async function entrarGoogle(continuar) {
    var auth = fb().auth, b = document.getElementById('mcMestreBtn');
    if (b) b.disabled = true; erro('');
    var provider = new firebase.auth.GoogleAuthProvider(), user = null;
    try {
      var atual = auth.currentUser;
      if (atual && atual.isAnonymous) {
        try { user = (await atual.linkWithPopup(provider)).user; }
        catch (e) {
          if (e && (e.code === 'auth/credential-already-in-use' || e.code === 'auth/email-already-in-use') && e.credential) user = (await auth.signInWithCredential(e.credential)).user;
          else throw e;
        }
      } else user = (await auth.signInWithPopup(provider)).user;
      if (await naLista(user)) { autorizado = true; avisarUid(user); fechar(); continuar(); return; }
      erro('A conta ' + user.email + ' não está autorizada a abrir salas.');
      await auth.signOut(); var anon = (await auth.signInAnonymously()).user; avisarUid(anon);
    } catch (e) {
      var c = e && e.code || '';
      erro(c === 'auth/popup-blocked' ? 'O navegador bloqueou a janela do Google. Libere pop-ups para este site e tente de novo.'
        : (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') ? 'A janela do Google foi fechada antes de terminar.'
        : c === 'auth/unauthorized-domain' ? 'Este endereço ainda não foi autorizado no Firebase (Authentication › Domínios autorizados).'
        : c === 'auth/operation-not-allowed' ? 'Ative o login com Google no Firebase deste jogo (Authentication › Sign-in method).'
        : c === 'permission-denied' ? 'A lista de mestres não pôde ser lida. Confira as regras do Firestore (config/mestres).'
        : 'Não foi possível entrar. Tente de novo.');
      console.warn('Mosaico Card: acesso do mestre', e);
    } finally { var b2 = document.getElementById('mcMestreBtn'); if (b2) b2.disabled = false; }
  }
  function pedir(continuar) {
    css(); fechar();
    var g = document.createElement('div'); g.id = 'mcMestre';
    g.innerHTML = '<div class="cx"><small>Mosaico Card · área do mestre</small><h2>Abrir uma sala</h2>'
      + '<p>Só mestres autorizados abrem salas. Quem vai jogar entra pelo código ou QR da sala, sem precisar de conta.</p>'
      + '<button type="button" id="mcMestreBtn">Entrar com Google</button><button type="button" class="sec" id="mcMestreVoltar">Voltar</button><div class="erro" id="mcMestreErro"></div></div>';
    document.body.appendChild(g);
    document.getElementById('mcMestreBtn').onclick = function () { entrarGoogle(continuar); };
    document.getElementById('mcMestreVoltar').onclick = fechar;
  }
  async function conferirSessao() {
    var a = fb().auth; if (!a || verificando) return; verificando = true;
    try { var u = a.currentUser; if (u && !u.isAnonymous && await naLista(u)) autorizado = true; } catch (e) {} finally { verificando = false; }
  }
  document.addEventListener('mc-fb-ready', conferirSessao);
  /* Fase de captura: corre antes do clique do jogo e o barra quando a conta não é de mestre. */
  document.addEventListener('click', function (ev) {
    var alvo = ev.target && ev.target.closest && ev.target.closest('#btn-abrir-mesa, #btn-abrir-com-mesa');
    if (!alvo || autorizado) return;
    ev.preventDefault(); ev.stopImmediatePropagation();
    pedir(function () { alvo.click(); });
  }, true);
})();
