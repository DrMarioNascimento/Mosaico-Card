/* Demonstração isolada. Não participa do sorteio do banco NT. */
window.MC_CASOS = {
  ovelha: {
    id: "ovelha",
    modo: "demonstracao",
    titulo: "A ovelha perdida",
    fonte: "Lucas 15,4–7",
    lede: "Duas rodadas para conhecer pistas, escolhas e custos.",
    pecas: {
      F1: { id: "F1", marca: "Fragmento", texto: "Um homem tinha cem ovelhas." },
      F2: { id: "F2", marca: "Fragmento", texto: "Uma delas se perdeu." },
      F3: { id: "F3", marca: "Fragmento", texto: "As noventa e nove ficaram no deserto." },
      F4: { id: "F4", marca: "Ovelha", texto: "Você achou uma ovelha perdida. Vale 6 denários e sai do jogo.", figura: "ovelha", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Fragmento", texto: "Ele foi atrás da que se perdeu, até encontrá-la." },
      F6: { id: "F6", marca: "Fragmento", texto: "Ao encontrá-la, colocou-a nos ombros, cheio de alegria." },
      F7: { id: "F7", marca: "Fragmento", texto: "De volta em casa, reuniu amigos e vizinhos." },
      F8: { id: "F8", marca: "Fragmento", texto: "Pediu que se alegrassem com ele." },
      F9: { id: "F9", marca: "Fragmento", texto: "Jesus comparou a cena à alegria no céu por um pecador que se arrepende." }
    },
    campos: [
      { id: "quantas", rotulo: "Quantas ovelhas o homem tinha", resposta: "certa", pontosBase: 8, opcoes: [
        { id: "b", txt: "Doze" },
        { id: "certa", txt: "Cem" },
        { id: "c", txt: "Setenta" },
        { id: "d", txt: "Mil" }
      ]},
      { id: "onde", rotulo: "Onde ficaram as outras", resposta: "certa", pontosBase: 5, opcoes: [
        { id: "certa", txt: "No deserto" },
        { id: "b", txt: "No curral" },
        { id: "c", txt: "Na cidade" },
        { id: "d", txt: "À beira do mar" }
      ]},
      { id: "como", rotulo: "Como ele a trouxe de volta", resposta: "certa", pontosBase: 3, opcoes: [
        { id: "b", txt: "Puxada por uma corda" },
        { id: "c", txt: "Num jumento" },
        { id: "certa", txt: "Nos ombros" },
        { id: "d", txt: "Num cesto" }
      ]},
      { id: "quem", rotulo: "Quem ele chamou ao voltar", resposta: "certa", pontosBase: 2, opcoes: [
        { id: "b", txt: "Os sacerdotes" },
        { id: "c", txt: "Os soldados" },
        { id: "d", txt: "Os outros pastores" },
        { id: "certa", txt: "Amigos e vizinhos" }
      ]}
    ]
  }
};
