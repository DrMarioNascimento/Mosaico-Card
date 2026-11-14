/* Demonstração isolada. Não participa do sorteio de lugares. */
window.MC_CASOS = {
  bussola: {
    id: "bussola",
    modo: "demonstracao",
    titulo: "A bússola da expedição",
    fonte: "Demonstração",
    lede: "Duas rodadas para conhecer pistas, escolhas e custos.",
    pecas: {
      F1: { id: "F1", marca: "Expedição", texto: "O grupo se preparava para uma trilha. Uma bússola sumiu antes da partida." },
      F2: { id: "F2", marca: "Encontro", texto: "Os viajantes já estavam reunidos quando perceberam a falta." },
      F3: { id: "F3", marca: "Etiqueta", texto: "A bússola tinha uma etiqueta com o nome da guia." },
      F4: { id: "F4", marca: "Bússola", texto: "Você achou a bússola da expedição. Vale 6 créditos e sai do jogo.", figura: "bussola", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Caminho", texto: "Alguém voltou pelo caminho com a bússola nas mãos, sorrindo." },
      F6: { id: "F6", marca: "Aplausos", texto: "O grupo aplaudiu quando a bússola voltou à mochila." },
      F7: { id: "F7", marca: "Testemunha", texto: "Ninguém viu a bússola sair. Só notaram a falta." },
      F8: { id: "F8", marca: "Trato", texto: "A recompensa combinada era de seis créditos." },
      F9: { id: "F9", marca: "Créditos", texto: "Quem acha a bússola não precisa pagar por ela." }
    },
    campos: [
      { id: "recompensa", rotulo: "Quem recebe os 6 créditos?", resposta: "quem-achou", pontosBase: 8, opcoes: [
        { id: "bilheteria", txt: "Só a guia" },
        { id: "quem-achou", txt: "Quem achou a bússola" },
        { id: "fileira", txt: "Quem chegou primeiro" }
      ]},
      { id: "aplausos", rotulo: "Os aplausos provam o quê?", resposta: "voltou", pontosBase: 5, opcoes: [
        { id: "voltou", txt: "Que a bússola voltou" },
        { id: "noventa", txt: "Que todos desistiram da trilha" },
        { id: "vendido", txt: "Que a viagem terminou" }
      ]},
      { id: "etiqueta", rotulo: "A etiqueta permite concluir o quê?", resposta: "tinha-dono", pontosBase: 3, opcoes: [
        { id: "tinha-dono", txt: "Que a bússola tinha dona" },
        { id: "gratis", txt: "Que era de graça" },
        { id: "ouro", txt: "Que valia ouro" }
      ]}
    ]
  }
};
