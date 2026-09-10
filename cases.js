window.MC_CASOS = {
  ovelha: {
    id: "ovelha",
    titulo: "A ovelha perdida",
    fonte: "Lucas 15,4–7",
    lede: "Cem ovelhas. Uma falta. O fato cabe na carta; a interpretação, não.",
    pecas: {
      F1: { id: "F1", marca: "Curral", texto: "Havia cem ovelhas. Faltava uma." },
      F2: { id: "F2", marca: "Campo", texto: "As noventa e nove ficaram no descampado." },
      F3: { id: "F3", marca: "Marca", texto: "A ovelha tinha sinal. Não era de ninguém da casa." },
      F4: { id: "F4", marca: "Ovelha", texto: "Você achou uma ovelha perdida, vale 4 denários de recompensa", figura: "ovelha", recompensa: 4 },
      F5: { id: "F5", marca: "Ombros", texto: "Ele a pôs nos ombros e voltou alegre." },
      F6: { id: "F6", marca: "Festa", texto: "Chamou amigos e vizinhos quando a ovelha voltou." },
      F7: { id: "F7", marca: "Testemunha", texto: "Ninguém viu a ovelha sair. Só a falta." },
      F8: { id: "F8", marca: "Trato", texto: "A recompensa combinada era de quatro denários." },
      F9: { id: "F9", marca: "Alegria", texto: "Há mais alegria por uma que volta do que por noventa e nove que não se perderam." }
    },
    campos: [
      { id: "recompensa", rotulo: "Quem deve receber os 4 denários?", resposta: "quem-achou", opcoes: [
        { id: "pastor", txt: "Só o pastor" }, { id: "quem-achou", txt: "Quem achou a ovelha" }, { id: "dono-casa", txt: "O dono da casa" }
      ]},
      { id: "festa", rotulo: "A festa prova o quê?", resposta: "voltou", opcoes: [
        { id: "voltou", txt: "Que a ovelha voltou" }, { id: "noventa", txt: "Que as noventa e nove pecaram" }, { id: "venda", txt: "Que o rebanho foi vendido" }
      ]},
      { id: "marca", rotulo: "A ovelha marcada prova o quê?", resposta: "tinha-dono", opcoes: [
        { id: "tinha-dono", txt: "Que havia dono" }, { id: "selvagem", txt: "Que era selvagem" }, { id: "ouro", txt: "Que valia ouro" }
      ]}
    ]
  },
  vinha: {
    id: "vinha",
    titulo: "Os trabalhadores da vinha",
    fonte: "Mateus 20,1–16",
    lede: "Um denário o dia. Horas diferentes. O mesmo pagamento.",
    pecas: {
      F1: { id: "F1", marca: "Trato", texto: "O senhor combinou um denário com os da primeira hora." },
      F2: { id: "F2", marca: "Praça", texto: "Às nove, ao meio-dia e às três ainda havia gente parada." },
      F3: { id: "F3", marca: "Undécima", texto: "Na última hora ainda chamou quem estava ocioso." },
      F4: { id: "F4", marca: "Fila", texto: "Os últimos receberam primeiro. Cada um, um denário." },
      F5: { id: "F5", marca: "Murmúrio", texto: "Os da primeira hora murmuraram: trabalhamos o dia inteiro." },
      F6: { id: "F6", marca: "Resposta", texto: "Amigo, não te faço injustiça. Não combinaste um denário?" },
      F7: { id: "F7", marca: "Olho", texto: "Tens inveja porque eu sou bom?" },
      F8: { id: "F8", marca: "Ordem", texto: "Os últimos serão os primeiros, e os primeiros serão os últimos." },
      F9: { id: "F9", marca: "Moeda", texto: "Você achou o denário do trato. Vale 4 denários de recompensa se o devolver à mesa.", recompensa: 4 }
    },
    campos: [
      { id: "justica", rotulo: "O pagamento igual prova o quê?", resposta: "trato-cumprido", opcoes: [
        { id: "roubo", txt: "Que os primeiros foram roubados" }, { id: "trato-cumprido", txt: "Que o trato de um denário foi cumprido" }, { id: "erro", txt: "Que o senhor errou a conta" }
      ]},
      { id: "ultimo", rotulo: "Quem recebeu primeiro?", resposta: "ultimos", opcoes: [
        { id: "primeiros", txt: "Os da primeira hora" }, { id: "ultimos", txt: "Os da última hora" }, { id: "capataz", txt: "O capataz" }
      ]},
      { id: "murmurio", rotulo: "O murmúrio prova o quê?", resposta: "inveja", opcoes: [
        { id: "divida", txt: "Que havia dívida não paga" }, { id: "inveja", txt: "Que houve inveja do bem feito ao outro" }, { id: "fraude", txt: "Que a moeda era falsa" }
      ]}
    ]
  },
  samaritano: {
    id: "samaritano",
    titulo: "O samaritano",
    fonte: "Lucas 10,25–37",
    lede: "Um homem na estrada. Dois passam. Um para. Dois denários na estalagem.",
    pecas: {
      F1: { id: "F1", marca: "Estrada", texto: "Descia de Jerusalém a Jericó. Caiu nas mãos de salteadores." },
      F2: { id: "F2", marca: "Corpo", texto: "Deixaram-no meio morto. Roubaram e feriram." },
      F3: { id: "F3", marca: "Sacerdote", texto: "Um sacerdote viu e passou de largo." },
      F4: { id: "F4", marca: "Levita", texto: "Um levita chegou, viu e também passou de largo." },
      F5: { id: "F5", marca: "Samaritano", texto: "Um samaritano viu e moveu-se de compaixão." },
      F6: { id: "F6", marca: "Azeite", texto: "Deitou azeite e vinho, atou as feridas, pôs-no sobre o próprio animal." },
      F7: { id: "F7", marca: "Estalagem", texto: "Deu dois denários ao estalajadeiro: cuida dele." },
      F8: { id: "F8", marca: "Volta", texto: "O que gastares a mais, eu te pagarei quando voltar." },
      F9: { id: "F9", marca: "Pergunta", texto: "Qual destes três foi o próximo daquele que caiu?" }
    },
    campos: [
      { id: "proximo", rotulo: "Quem foi o próximo?", resposta: "samaritano", opcoes: [
        { id: "sacerdote", txt: "O sacerdote" }, { id: "levita", txt: "O levita" }, { id: "samaritano", txt: "O samaritano" }
      ]},
      { id: "dois", rotulo: "Os dois denários provam o quê?", resposta: "cuidado", opcoes: [
        { id: "compra", txt: "Que o ferido foi comprado" }, { id: "cuidado", txt: "Que o cuidado ficou pago na estalagem" }, { id: "multa", txt: "Que era multa da estrada" }
      ]},
      { id: "passar", rotulo: "Passar de largo prova o quê?", resposta: "nao-socorreram", opcoes: [
        { id: "nao-viram", txt: "Que não viram o homem" }, { id: "nao-socorreram", txt: "Que viram e não socorreram" }, { id: "eram-salteadores", txt: "Que os dois eram os salteadores" }
      ]}
    ]
  }
};
