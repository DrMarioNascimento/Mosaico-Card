/* Demonstração isolada. Não participa do sorteio do banco NT. */
window.MC_CASOS = {
  ovelha: {
    id: "ovelha",
    modo: "demonstracao",
    titulo: "A ovelha perdida",
    fonte: "Lucas 15,4–7",
    lede: "Demonstração da carta especial e de sua animação.",
    pecas: {
      F1: { id: "F1", marca: "Curral", texto: "Havia cem ovelhas. Faltava uma." },
      F2: { id: "F2", marca: "Campo", texto: "As noventa e nove ficaram no descampado." },
      F3: { id: "F3", marca: "Marca", texto: "A ovelha tinha sinal. Não era de ninguém da casa." },
      F4: { id: "F4", marca: "Ovelha", texto: "Você achou uma ovelha perdida. Vale 6 denários e sai do jogo.", figura: "ovelha", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Ombros", texto: "Ele a pôs nos ombros e voltou alegre." },
      F6: { id: "F6", marca: "Festa", texto: "Chamou amigos e vizinhos quando a ovelha voltou." },
      F7: { id: "F7", marca: "Testemunha", texto: "Ninguém viu a ovelha sair. Só a falta." },
      F8: { id: "F8", marca: "Trato", texto: "A recompensa combinada era de seis denários." },
      F9: { id: "F9", marca: "Alegria", texto: "Há mais alegria por uma que volta do que por noventa e nove que não se perderam." }
    },
    campos: [
      { id: "recompensa", rotulo: "Quem recebe os 6 denários?", resposta: "quem-achou", pontosBase: 8, opcoes: [
        { id: "pastor", txt: "Só o pastor" },
        { id: "quem-achou", txt: "Quem achou a ovelha" },
        { id: "dono-casa", txt: "O dono da casa" }
      ]},
      { id: "festa", rotulo: "A festa prova o quê?", resposta: "voltou", pontosBase: 5, opcoes: [
        { id: "voltou", txt: "Que a ovelha voltou" },
        { id: "noventa", txt: "Que as noventa e nove se perderam" },
        { id: "venda", txt: "Que o rebanho foi vendido" }
      ]},
      { id: "marca", rotulo: "A marca permite concluir o quê?", resposta: "tinha-dono", pontosBase: 3, opcoes: [
        { id: "tinha-dono", txt: "Que havia um dono" },
        { id: "selvagem", txt: "Que era selvagem" },
        { id: "ouro", txt: "Que valia ouro" }
      ]}
    ]
  }
};
