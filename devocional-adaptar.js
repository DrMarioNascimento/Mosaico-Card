/* Adaptação das pautas NAA. Cada pergunta cruza dois detalhes com quatro combinações. */
(function () {
  "use strict";

  const trocas = [
    [/\bperante\b/gi, "diante de"], [/\bdiante de\b/gi, "na frente de"],
    [/\bdirigiu-se a\b/gi, "foi até"], [/\bretornou\b/gi, "voltou"], [/\bregressou\b/gi, "voltou"],
    [/\bpermaneceu\b/gi, "ficou"], [/\bpermaneceram\b/gi, "ficaram"],
    [/\bprosseguiu\b/gi, "seguiu"], [/\bindagou\b/gi, "perguntou"],
    [/\brelatou\b/gi, "contou"], [/\brelataram\b/gi, "contaram"],
    [/\bdeclarou\b/gi, "disse"], [/\bafirmou\b/gi, "disse"],
    [/\bordenou que\b/gi, "mandou que"], [/\bsolicitou\b/gi, "pediu"],
    [/\bimediatamente\b/gi, "logo"], [/\bposteriormente\b/gi, "depois"],
    [/\bpor intermédio de\b/gi, "por meio de"], [/\ba fim de\b/gi, "para"],
    [/\bpor conseguinte\b/gi, "por isso"], [/\bno entanto\b/gi, "mas"],
    [/\bcontudo\b/gi, "mas"], [/\bembora\b/gi, "mesmo que"],
    [/\bna sequência\b/gi, "depois"], [/\bnessa ocasião\b/gi, "nesse momento"],
    [/\bnaquela ocasião\b/gi, "naquele momento"], [/\bdeparou-se com\b/gi, "encontrou"],
    [/\bse pôs a\b/gi, "começou a"], [/\bcessou\b/gi, "parou"], [/\bcessaram\b/gi, "pararam"],
    [/\bquanto ao\b/gi, "sobre o"], [/\bquanto à\b/gi, "sobre a"],
    [/\bconsistia em\b/gi, "era"], [/\blocalidade\b/gi, "lugar"],
    [/\bocorreu\b/gi, "aconteceu"], [/\bpadeceu\b/gi, "sofreu"],
    [/\binterpelou\b/gi, "questionou"], [/\bproferiu\b/gi, "disse"],
    [/\bcompadeceu-se do\b/gi, "teve compaixão do"], [/\btravou-se uma discussão\b/gi, "começou uma discussão"],
    [/\bdestinatários\b/gi, "leitores"], [/\bremetentes\b/gi, "autores da carta"],
    [/\bsuced[eê]u\b/gi, "aconteceu"], [/\butilizou\b/gi, "usou"],
    [/\bencontrava-se\b/gi, "estava"], [/\bencontravam-se\b/gi, "estavam"],
    [/\besteve presente\b/gi, "estava lá"], [/\bestiveram presentes\b/gi, "estavam lá"],
    [/\bcompareceu\b/gi, "foi"],
    [/\bconforme\b/gi, "de acordo com"], [/\bdecorrente de\b/gi, "que veio de"],
    [/\bdestaca-se\b/gi, "aparece em destaque"], [/\bmediante\b/gi, "por meio de"],
    [/\bdenominado\b/gi, "chamado"], [/\bem virtude de\b/gi, "por causa de"],
    [/\bconduziu\b/gi, "levou"], [/\bproclamou\b/gi, "anunciou"],
    [/\bQual foi a finalidade\b/gi, "Qual foi o objetivo"], [/\bDe que maneira\b/gi, "Como"],
    [/\bEm que local\b/gi, "Onde"]
  ];
  const normalizar = texto => texto.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, " ").trim();
  const neutras = new Set("que uma umas uns o a os as ao aos na no nas nos com por para pelo pela pelos pelas em de do da dos das e ou seu sua seus suas um se ele ela eles elas foi eram nao".split(" "));

  function simples(texto) {
    const limpo = trocas.reduce((linha, [regra, troca]) => linha.replace(regra, (termo) =>
      termo[0] === termo[0].toUpperCase() ? troca[0].toUpperCase() + troca.slice(1) : troca
    ), texto.trim());
    return limpo.replace(/\s+/g, " ");
  }

  function termos(texto) {
    return [...new Set(normalizar(texto).split(" ").filter(x => x && !neutras.has(x)))];
  }

  function expressa(texto, detalhe) {
    const palavras = new Set(termos(texto));
    const chave = termos(detalhe);
    return chave.length > 0 && chave.every(palavra => palavras.has(palavra));
  }

  function duasOpcoes(campo) {
    const certa = campo.opcoes.find(o => o.id === campo.respostaId);
    const resposta = simples(certa.texto).replace(/[.!?;]+$/, "");
    const semelhantes = campo.opcoes.filter(o => o !== certa && normalizar(simples(o.texto)) !== normalizar(resposta));
    // Para o cruzamento, usa a alternativa que mais se parece com a resposta em extensão e vocabulário.
    const palavras = new Set(termos(resposta));
    const proximidade = opcao => {
      const outra = termos(opcao.texto);
      return outra.filter(x => palavras.has(x)).length * 3 - Math.abs(outra.length - palavras.size);
    };
    semelhantes.sort((a, b) => proximidade(b) - proximidade(a));
    return [resposta, simples(semelhantes[0].texto).replace(/[.!?;]+$/, "")];
  }

  function vinculos(campo, outro) {
    const refs = [...(campo.answerReferences || []), ...(outro.answerReferences || [])];
    const enderecos = [...new Set([campo.enderecoNAA, outro.enderecoNAA].filter(Boolean))];
    return { answerReferences: refs, enderecoNAA: enderecos.join(" · ") };
  }

  function cruzar(campo, outro, a, b) {
    const combinacoes = [[a[0], b[0]], [a[0], b[1]], [a[1], b[0]], [a[1], b[1]]];
    let errada = 1;
    const opcoes = campo.opcoes.map(opcao => {
      const dupla = combinacoes[opcao.id === campo.respostaId ? 0 : errada++];
      return { ...opcao, texto: dupla.join(" / ") };
    });
    const pergunta = texto => simples(texto).replace(/[?.:!]+$/, "");
    return {
      ...campo, ...vinculos(campo, outro),
      rotulo: pergunta(campo.rotulo) + "? " + pergunta(outro.rotulo) + "?",
      opcoes,
      respostaCanonica: combinacoes[0].join(" / ")
    };
  }

  function tituloDiscreto(original) {
    const livro = normalizar(original.canon.book || "");
    if (livro === "apocalipse") return "Uma visão em detalhes";
    if (/^(mateus|marcos|lucas|joao)( |$)/.test(livro)) return "Um relato em detalhes";
    if (livro === "atos") return "Um episódio em detalhes";
    return "Uma passagem em detalhes";
  }

  const emojisContextuais = {
    "nt2-atos-filipe-eunuco": ["P12", "📖🐎"],
    "nt2-atos-eutico": ["P07", "🪟🪑"],
    "nt2-lucas-marta-maria": ["P02", "🏠🚪"],
    "nt2-mateus-virgens-lamparinas": ["P08", "🪔🪔"],
    "nt2-marcos-semeador-explicacao": ["P07", "🌱🐦"]
  };

  function candidatos(original, respostas) {
    const indices = new Map(original.fields.map((campo, i) => [campo.id, i]));
    return original.deck.cards.map(card => {
      const texto = simples(card.texto || card.text);
      const campos = respostas.flatMap(([resposta], i) => expressa(texto, resposta) ? [i] : []);
      // Dois campos marcados no original podem ser sustentados sem repetir as palavras da resposta.
      const relacionados = (card.relatedFields || []).filter(id => indices.has(id)).map(id => indices.get(id));
      return { card, texto, campos: new Set(campos.concat(relacionados)) };
    });
  }

  const circuitos = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3]];
  const pares = circuito => circuito.map((a, i) => [a, circuito[(i + 1) % circuito.length]]);
  const duplaNaPista = (pista, par) => par.every(i => pista.campos.has(i));

  function criar(original) {
    const respostas = original.fields.map(duasOpcoes);
    const pistas = candidatos(original, respostas);
    const alternativas = circuitos.map(c => pares(c));
    const peso = ps => pistas.filter(p => ps.some(par => duplaNaPista(p, par))).length;
    alternativas.sort((a, b) => peso(a) - peso(b));
    const selecionados = alternativas[0];
    const revisadas = window.MC_NT_DEVOCIONAL_PISTAS?.[original.id] || {};
    const contextoVisual = emojisContextuais[original.id];
    const usadas = new Set();
    const cartas = pistas.map(pista => {
      const temConflito = selecionados.some(par => duplaNaPista(pista, par));
      const texto = temConflito ? revisadas[pista.card.id] : pista.texto;
      if (!texto || selecionados.some(par => par.every(i => expressa(texto, respostas[i][0])))) {
        throw new Error("Pista Devocional precisa de revisão: " + original.id + ":" + pista.card.id);
      }
      if (contextoVisual?.[0] === pista.card.id) {
        return { ...pista.card, marca: "Emojis", texto: contextoVisual[1], text: contextoVisual[1] };
      }
      const chave = normalizar(texto);
      if (usadas.has(chave)) throw new Error("Pista Devocional repetida: " + original.id + ":" + pista.card.id);
      usadas.add(chave);
      return { ...pista.card, texto, text: texto };
    });
    const byIndex = new Map(selecionados);
    const fields = original.fields.map((campo, i) => {
      const outro = byIndex.get(i);
      return cruzar(campo, original.fields[outro], respostas[i], respostas[outro]);
    });
    return {
      ...original,
      title: tituloDiscreto(original),
      prompt: { ...original.prompt, question: "Junte as pistas. Em cada pergunta, escolha a opção que acerta os dois detalhes, na ordem em que foram pedidos." },
      fields,
      deck: {
        ...original.deck,
        cards: cartas
      }
    };
  }

  window.MC_NT_CRIAR_DEVOCIONAL = criar;
})();
