/* Demonstração isolada. Não participa do sorteio de filmes e séries. */
window.MC_CASOS = {
  pipoca: {
    id: "pipoca",
    modo: "demonstracao",
    titulo: "A sessão de estreia",
    fonte: "Demonstração",
    lede: "Demonstração da carta especial e de sua animação.",
    pecas: {
      F1: { id: "F1", marca: "Sala", texto: "A sala tinha cem lugares. Um balde de pipoca sumiu antes do filme." },
      F2: { id: "F2", marca: "Fila", texto: "Noventa e nove pessoas já estavam sentadas quando as luzes apagaram." },
      F3: { id: "F3", marca: "Etiqueta", texto: "O balde tinha o número de um ingresso. Não era da fileira da frente." },
      F4: { id: "F4", marca: "Pipoca", texto: "Você achou a pipoca da sessão. Vale 6 ingressos e sai do jogo.", figura: "pipoca", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Corredor", texto: "Alguém voltou pelo corredor com o balde nas mãos, sorrindo." },
      F6: { id: "F6", marca: "Aplausos", texto: "A sala aplaudiu quando o balde voltou ao lugar." },
      F7: { id: "F7", marca: "Testemunha", texto: "Ninguém viu o balde sair. Só notaram a falta." },
      F8: { id: "F8", marca: "Trato", texto: "A recompensa combinada era de seis ingressos." },
      F9: { id: "F9", marca: "Créditos", texto: "Quem acha a pipoca não precisa pagar por ela." }
    },
    campos: [
      { id: "recompensa", rotulo: "Quem recebe os 6 ingressos?", resposta: "quem-achou", pontosBase: 8, opcoes: [
        { id: "bilheteria", txt: "Só a bilheteria" },
        { id: "quem-achou", txt: "Quem achou a pipoca" },
        { id: "fileira", txt: "A fileira da frente" }
      ]},
      { id: "aplausos", rotulo: "Os aplausos provam o quê?", resposta: "voltou", pontosBase: 5, opcoes: [
        { id: "voltou", txt: "Que o balde voltou" },
        { id: "noventa", txt: "Que noventa e nove saíram" },
        { id: "vendido", txt: "Que a sessão esgotou" }
      ]},
      { id: "etiqueta", rotulo: "A etiqueta permite concluir o quê?", resposta: "tinha-dono", pontosBase: 3, opcoes: [
        { id: "tinha-dono", txt: "Que o balde tinha dono" },
        { id: "gratis", txt: "Que era de graça" },
        { id: "ouro", txt: "Que valia ouro" }
      ]}
    ]
  }
};
