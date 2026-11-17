(function () {
  "use strict";
  const helpScene = document.getElementById("how-to-play");
  const helpContent = helpScene.querySelector(".how-wrap");
  const helpDialog = document.createElement("dialog");
  helpDialog.id = "mesa-help-dialog";
  helpDialog.setAttribute("aria-label", "Ajuda da mesa");
  document.body.appendChild(helpDialog);
  const closeHelp = document.createElement("button");
  closeHelp.type = "button"; closeHelp.className = "fechar-ajuda"; closeHelp.textContent = "Fechar ajuda";
  closeHelp.onclick = function () { helpDialog.close(); };
  const quickHelp = document.createElement("div"); quickHelp.className = "ajuda-curta";
  quickHelp.innerHTML = "<h2>Ajuda da mesa</h2><p>Os botões de jogar ficam disponíveis na sua vez. A ajuda fica sempre disponível. Na partida real, abrir a ajuda não pausa o tempo.</p><details open><summary>Botões e custos</summary><p><b>Comprar:</b> custa 4. A carta especial é gratuita e dá 6.</p><p><b>Capturar:</b> custa 2. Se levar uma pista oferecida, quem a ofereceu recebe os 2.</p><p><b>Oferecer sua pista:</b> grátis; recebe 2 se alguém a levar.</p><p><b>Arriscar:</b> precisa ter 3. Só perde 3 se errar. Acerto fecha a questão para todos; erro, só para você.</p></details><details><summary>Maratonar</summary><p>Dois jogadores ao mesmo tempo. Cada um por si. As escolhas são resolvidas juntas. Se os dois acertarem a mesma questão, os dois pontuam. Se escolherem a mesma pista, a prioridade alterna: quem ficar sem ela não paga e pode escolher outra ação.</p></details><details><summary>Fechamento e pontos</summary><p>No fim, todos têm 60 segundos para responder gratuitamente às questões que ainda podem responder. Acertos antecipados valem mais. O saldo restante também conta; a tela final mostra a pontuação.</p></details><details><summary>Recarreguei ou perdi a conexão</summary><p>Aguarde a reconexão: sua sala, suas cartas e seu saldo são retomados. Use uma aba por jogador. Se trocar de aparelho ou perder o acesso, peça ao mestre um código de recuperação.</p></details>";
  const fullHelp = document.createElement("button"); fullHelp.textContent = "Ver regras completas"; fullHelp.type = "button";
  fullHelp.onclick = function () { quickHelp.hidden = true; helpContent.hidden = false; };
  quickHelp.append(fullHelp); helpDialog.append(closeHelp, quickHelp);
  document.getElementById("ajuda-sempre").onclick = function () { document.getElementById("mesa-info").click(); };

  document.getElementById("mesa-info").addEventListener("click", function () {
    helpContent.hidden = true;
    helpDialog.appendChild(helpContent);
    quickHelp.hidden = false;
    helpDialog.showModal();
    helpDialog.scrollTop = 0;
    closeHelp.focus();
  });
  helpDialog.addEventListener("close", function () {
    helpContent.hidden = false;
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
  document.getElementById("welcome-start").addEventListener("click", function () {
    if (window.MC_SALA.codigoConvite) window.MC_SALA.continuarConvite();
    else window.MC_SALA.show("open");
  });

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
