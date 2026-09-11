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
      F4: { id: "F4", marca: "Ovelha", texto: "Você achou uma ovelha perdida. Vale 6 denários de recompensa. Não pode ser capturada.", figura: "ovelha", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Ombros", texto: "Ele a pôs nos ombros e voltou alegre." },
      F6: { id: "F6", marca: "Festa", texto: "Chamou amigos e vizinhos quando a ovelha voltou." },
      F7: { id: "F7", marca: "Testemunha", texto: "Ninguém viu a ovelha sair. Só a falta." },
      F8: { id: "F8", marca: "Trato", texto: "A recompensa combinada era de seis denários." },
      F9: { id: "F9", marca: "Alegria", texto: "Há mais alegria por uma que volta do que por noventa e nove que não se perderam." }
    },
    campos: [
      { id: "recompensa", rotulo: "Quem deve receber os 6 denários?", resposta: "quem-achou", opcoes: [
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
      F9: { id: "F9", marca: "Moeda", texto: "Você achou o denário do trato. Vale 4 denários se o devolver à mesa.", recompensa: 4 }
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
      F7: { id: "F7", marca: "Estalagem", texto: "Deu dois denários ao estalajadeiro: cuida dele. Vale 2 de recompensa.", recompensa: 2 },
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
  },
  filho: {
    id: "filho",
    titulo: "O filho pródigo",
    fonte: "Lucas 15,11–32",
    lede: "Dois filhos. Uma partilha. Um volta. O outro murmura.",
    pecas: {
      F1: { id: "F1", marca: "Partilha", texto: "O mais novo pediu a parte da herança e o pai dividiu os bens." },
      F2: { id: "F2", marca: "Partida", texto: "Reuniu tudo e partiu para uma terra longínqua." },
      F3: { id: "F3", marca: "Fome", texto: "Gastou tudo. Veio uma fome. Desejava as alfarrobas dos porcos." },
      F4: { id: "F4", marca: "Volta", texto: "Pai, pequei. Já não sou digno de ser chamado teu filho." },
      F5: { id: "F5", marca: "Abraço", texto: "O pai o viu de longe, compadeceu-se e correu ao encontro." },
      F6: { id: "F6", marca: "Festa", texto: "Trazei o novilho gordo. Este meu filho estava morto e reviveu." },
      F7: { id: "F7", marca: "Campo", texto: "O filho mais velho voltava do campo e ouviu música." },
      F8: { id: "F8", marca: "Murmúrio", texto: "Há tantos anos te sirvo e nunca me deste um cabrito." },
      F9: { id: "F9", marca: "Resposta", texto: "Filho, tu estás sempre comigo. Tudo o que é meu é teu." }
    },
    campos: [
      { id: "volta", rotulo: "A festa prova o quê?", resposta: "voltou", opcoes: [
        { id: "voltou", txt: "Que o filho voltou" }, { id: "venda", txt: "Que a herança foi vendida de novo" }, { id: "velho", txt: "Que o mais velho foi deserdado" }
      ]},
      { id: "pedido", rotulo: "O pedido da herança prova o quê?", resposta: "partilha", opcoes: [
        { id: "roubo", txt: "Que o pai foi roubado à força" }, { id: "partilha", txt: "Que o pai partilhou em vida" }, { id: "falso", txt: "Que não havia pai" }
      ]},
      { id: "velho", rotulo: "O murmúrio do mais velho prova o quê?", resposta: "inveja", opcoes: [
        { id: "divida", txt: "Que o pai lhe devia um cabrito" }, { id: "inveja", txt: "Que se indignou com o bem feito ao irmão" }, { id: "mentira", txt: "Que a festa era mentira" }
      ]}
    ]
  },
  talentos: {
    id: "talentos",
    titulo: "Os talentos",
    fonte: "Mateus 25,14–30",
    lede: "Cinco, dois e um. Dois negociam. Um enterra.",
    pecas: {
      F1: { id: "F1", marca: "Partida", texto: "Um homem ia viajar. Chamou os servos e entregou-lhes os bens." },
      F2: { id: "F2", marca: "Cinco", texto: "A um deu cinco talentos, a outro dois, a outro um, a cada um segundo a capacidade." },
      F3: { id: "F3", marca: "Negócio", texto: "O dos cinco negociou e ganhou outros cinco. O dos dois, outros dois." },
      F4: { id: "F4", marca: "Cova", texto: "O que recebeu um cavou a terra e escondeu o dinheiro do senhor." },
      F5: { id: "F5", marca: "Volta", texto: "Depois de muito tempo, o senhor voltou e pediu contas." },
      F6: { id: "F6", marca: "Louvor", texto: "Muito bem, servo bom e fiel. Sobre o pouco foste fiel." },
      F7: { id: "F7", marca: "Medo", texto: "Senhor, sabia que és um homem duro. Tive medo e escondi o teu talento." },
      F8: { id: "F8", marca: "Juízo", texto: "Servo mau e preguiçoso. Deviás ter entregue o dinheiro aos banqueiros." },
      F9: { id: "F9", marca: "Sobra", texto: "Tirai-lhe o talento e dai-o ao que tem dez." }
    },
    campos: [
      { id: "entrega", rotulo: "A entrega desigual prova o quê?", resposta: "capacidade", opcoes: [
        { id: "capricho", txt: "Que o senhor escolheu ao acaso" }, { id: "capacidade", txt: "Que deu segundo a capacidade de cada um" }, { id: "castigo", txt: "Que já castigava o terceiro" }
      ]},
      { id: "cova", rotulo: "Enterrar o talento prova o quê?", resposta: "nao-usou", opcoes: [
        { id: "roubo", txt: "Que o servo roubou o senhor" }, { id: "nao-usou", txt: "Que não usou o que recebeu" }, { id: "juro", txt: "Que o banco recusou o depósito" }
      ]},
      { id: "juizo", rotulo: "O juízo final prova o quê?", resposta: "cobrou-uso", opcoes: [
        { id: "cobrou-uso", txt: "Que o senhor cobrou o uso do que entregou" }, { id: "injusto", txt: "Que o trato era impossível" }, { id: "dez", txt: "Que só o de dez talentos existia" }
      ]}
    ]
  },
  fariseu: {
    id: "fariseu",
    titulo: "O fariseu e o publicano",
    fonte: "Lucas 18,9–14",
    lede: "Dois sobem ao templo. Um se compara. O outro bate no peito.",
    pecas: {
      F1: { id: "F1", marca: "Templo", texto: "Dois homens subiram ao templo para orar: um fariseu e um publicano." },
      F2: { id: "F2", marca: "Longe", texto: "O publicano ficou ao longe e não ousava erguer os olhos." },
      F3: { id: "F3", marca: "Peito", texto: "Batia no peito: Ó Deus, tem piedade de mim, pecador." },
      F4: { id: "F4", marca: "Lista", texto: "O fariseu orava: não sou como os outros, nem como este publicano." },
      F5: { id: "F5", marca: "Jejum", texto: "Jejuo duas vezes por semana e pago o dízimo de tudo." },
      F6: { id: "F6", marca: "Olhar", texto: "O fariseu falava de pé, consigo mesmo, diante de Deus." },
      F7: { id: "F7", marca: "Sentença", texto: "Este desceu justificado para sua casa, e não o outro." },
      F8: { id: "F8", marca: "Regra", texto: "Quem se exalta será humilhado, e quem se humilha será exaltado." },
      F9: { id: "F9", marca: "Alvo", texto: "A parábola era para alguns que se tinham por justos e desprezavam os outros." }
    },
    campos: [
      { id: "justificado", rotulo: "Quem desceu justificado?", resposta: "publicano", opcoes: [
        { id: "fariseu", txt: "O fariseu" }, { id: "publicano", txt: "O publicano" }, { id: "ambos", txt: "Os dois iguais" }
      ]},
      { id: "lista", rotulo: "A lista do fariseu prova o quê?", resposta: "comparou", opcoes: [
        { id: "mentira", txt: "Que ele não jejuava" }, { id: "comparou", txt: "Que se comparava e desprezava o outro" }, { id: "ordem", txt: "Que o templo exigia a lista" }
      ]},
      { id: "peito", rotulo: "Bater no peito prova o quê?", resposta: "pedido", opcoes: [
        { id: "teatro", txt: "Que era só teatro" }, { id: "pedido", txt: "Que pediu piedade sem se comparar" }, { id: "divida", txt: "Que pagava dívida ao templo" }
      ]}
    ]
  }
};
