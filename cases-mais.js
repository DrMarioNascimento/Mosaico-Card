(function () {
  var extra = {
    semeador: {
      id: "semeador", titulo: "O semeador", fonte: "Mateus 13,1–23",
      lede: "A mesma semente. Quatro chãos. Um dá fruto.",
      pecas: {
        F1: { id: "F1", marca: "Barco", texto: "Saiu o semeador a semear." },
        F2: { id: "F2", marca: "Caminho", texto: "Uma parte caiu à beira do caminho. As aves comeram." },
        F3: { id: "F3", marca: "Pedra", texto: "Outra caiu em pedregulho. Nasceu e secou." },
        F4: { id: "F4", marca: "Espinhos", texto: "Outra caiu entre espinhos e foi sufocada." },
        F5: { id: "F5", marca: "Terra", texto: "Outra caiu em terra boa e deu fruto." },
        F6: { id: "F6", marca: "Ouvido", texto: "Quem tem ouvidos, ouça." },
        F7: { id: "F7", marca: "Palavra", texto: "A semente é a palavra. O chão é quem ouve." },
        F8: { id: "F8", marca: "Cuidado", texto: "Os espinhos são as preocupações que sufocam." },
        F9: { id: "F9", marca: "Fruto", texto: "A terra boa é quem ouve e compreende." }
      },
      campos: [
        { id: "semente", rotulo: "A semente é o quê?", resposta: "palavra", opcoes: [
          { id: "dinheiro", txt: "Dinheiro" }, { id: "palavra", txt: "A palavra" }, { id: "trigo", txt: "Só trigo de pão" }
        ]},
        { id: "boa", rotulo: "A terra boa prova o quê?", resposta: "ouve", opcoes: [
          { id: "sorte", txt: "Que o semeador teve sorte" }, { id: "ouve", txt: "Que houve quem ouviu e compreendeu" }, { id: "aves", txt: "Que as aves recusaram" }
        ]},
        { id: "espinho", rotulo: "Os espinhos provam o quê?", resposta: "sufoca", opcoes: [
          { id: "sufoca", txt: "Que as preocupações sufocam o que foi ouvido" }, { id: "veneno", txt: "Que a semente era veneno" }, { id: "noite", txt: "Que se semeou de noite" }
        ]}
      ]
    },
    joio: {
      id: "joio", titulo: "O joio e o trigo", fonte: "Mateus 13,24–30",
      lede: "Trigo de noite. Joio no meio. A colheita espera.",
      pecas: {
        F1: { id: "F1", marca: "Campo", texto: "Semeou boa semente no seu campo." },
        F2: { id: "F2", marca: "Noite", texto: "De noite o inimigo semeou joio e foi-se." },
        F3: { id: "F3", marca: "Broto", texto: "Quando o trigo cresceu, apareceu o joio." },
        F4: { id: "F4", marca: "Servos", texto: "Senhor, não semeaste boa semente? Donde o joio?" },
        F5: { id: "F5", marca: "Inimigo", texto: "Um inimigo é que fez isso." },
        F6: { id: "F6", marca: "Arrancar", texto: "Queres que vamos arrancar o joio?" },
        F7: { id: "F7", marca: "Espera", texto: "Não. Ao arrancar o joio, arrancareis também o trigo." },
        F8: { id: "F8", marca: "Colheita", texto: "Deixai crescer ambos até à colheita." },
        F9: { id: "F9", marca: "Celeiro", texto: "Na colheita, o joio ao fogo; o trigo ao celeiro." }
      },
      campos: [
        { id: "origem", rotulo: "De onde veio o joio?", resposta: "inimigo", opcoes: [
          { id: "semente", txt: "Da boa semente" }, { id: "inimigo", txt: "De um inimigo, de noite" }, { id: "servos", txt: "Dos servos" }
        ]},
        { id: "espera", rotulo: "Por que não arrancar já?", resposta: "trigo", opcoes: [
          { id: "medo", txt: "Por medo do dono" }, { id: "trigo", txt: "Para não arrancar o trigo junto" }, { id: "noite", txt: "Porque ainda era noite" }
        ]},
        { id: "fim", rotulo: "A colheita prova o quê?", resposta: "separa", opcoes: [
          { id: "separa", txt: "Que joio e trigo serão separados" }, { id: "igual", txt: "Que os dois ficam iguais" }, { id: "venda", txt: "Que o campo foi vendido" }
        ]}
      ]
    },
    virgens: {
      id: "virgens", titulo: "As dez virgens", fonte: "Mateus 25,1–13",
      lede: "Dez lâmpadas. Cinco com azeite. O noivo tardou.",
      pecas: {
        F1: { id: "F1", marca: "Noivo", texto: "Dez virgens saíram ao encontro do noivo." },
        F2: { id: "F2", marca: "Loucas", texto: "Cinco eram loucas e cinco, prudentes." },
        F3: { id: "F3", marca: "Azeite", texto: "As prudentes levaram azeite com as lâmpadas." },
        F4: { id: "F4", marca: "Vazio", texto: "As loucas não levaram azeite." },
        F5: { id: "F5", marca: "Sono", texto: "Tardando o noivo, todas dormiram." },
        F6: { id: "F6", marca: "Grito", texto: "À meia-noite: aí vem o noivo." },
        F7: { id: "F7", marca: "Pedido", texto: "As loucas pediram azeite às prudentes." },
        F8: { id: "F8", marca: "Porta", texto: "Enquanto foram comprar, a porta se fechou." },
        F9: { id: "F9", marca: "Vigiai", texto: "Em verdade vos digo: não vos conheço. Vigiai." }
      },
      campos: [
        { id: "diferenca", rotulo: "O que separava as duas cinco?", resposta: "azeite", opcoes: [
          { id: "lampada", txt: "Só as lâmpadas" }, { id: "azeite", txt: "O azeite que umas levaram e outras não" }, { id: "sono", txt: "Que só as loucas dormiram" }
        ]},
        { id: "porta", rotulo: "A porta fechada prova o quê?", resposta: "tarde", opcoes: [
          { id: "tarde", txt: "Que chegaram tarde demais" }, { id: "erro", txt: "Que o noivo se enganou de casa" }, { id: "venda", txt: "Que a festa foi vendida" }
        ]},
        { id: "vigiai", rotulo: "O “vigiai” aponta para quê?", resposta: "prontas", opcoes: [
          { id: "prontas", txt: "Estar prontas quando o noivo chegar" }, { id: "compra", txt: "Ir comprar azeite à meia-noite" }, { id: "sono", txt: "Não dormir nunca" }
        ]}
      ]
    },
    servo: {
      id: "servo", titulo: "O servo impiedoso", fonte: "Mateus 18,23–35",
      lede: "Milhões perdoados. Cem denários cobrados no pescoço.",
      pecas: {
        F1: { id: "F1", marca: "Conta", texto: "Um rei quis ajustar contas com os servos." },
        F2: { id: "F2", marca: "Dívida", texto: "Um lhe devia dez mil talentos." },
        F3: { id: "F3", marca: "Pedido", texto: "Tem paciência, que tudo te pagarei." },
        F4: { id: "F4", marca: "Perdão", texto: "O senhor compadeceu-se e perdoou-lhe a dívida." },
        F5: { id: "F5", marca: "Cem", texto: "Saindo, achou um que lhe devia cem denários." },
        F6: { id: "F6", marca: "Pescoço", texto: "Pegou-o pelo pescoço: paga o que me deves." },
        F7: { id: "F7", marca: "Cadeia", texto: "Mandou-o para a prisão até pagar." },
        F8: { id: "F8", marca: "Rei", texto: "O rei soube: servo malvado." },
        F9: { id: "F9", marca: "Medida", texto: "Não devias tu também ter compaixão do teu companheiro?" }
      },
      campos: [
        { id: "perdão", rotulo: "O perdão do rei prova o quê?", resposta: "soltou", opcoes: [
          { id: "soltou", txt: "Que a dívida enorme foi cancelada" }, { id: "parcela", txt: "Que ficou um boleto" }, { id: "erro", txt: "Que o rei errou a conta" }
        ]},
        { id: "cem", rotulo: "Os cem denários no pescoço provam o quê?", resposta: "nao-usou", opcoes: [
          { id: "justo", txt: "Que a cobrança era justa como a do rei" }, { id: "nao-usou", txt: "Que não usou o perdão que recebeu" }, { id: "troca", txt: "Que os talentos valiam cem" }
        ]},
        { id: "medida", rotulo: "A pergunta do rei aponta para quê?", resposta: "mesma", opcoes: [
          { id: "mesma", txt: "Usar com o outro a medida que recebeu" }, { id: "juros", txt: "Cobrar juros do rei" }, { id: "fuga", txt: "Fugir da prisão" }
        ]}
      ]
    },
    zaqueu: {
      id: "zaqueu", titulo: "Zaqueu", fonte: "Lucas 19,1–10",
      lede: "Um cobrador na árvore. A casa abre. A restituição dobra.",
      pecas: {
        F1: { id: "F1", marca: "Jericó", texto: "Entrando em Jericó, Jesus atravessava a cidade." },
        F2: { id: "F2", marca: "Chefe", texto: "Zaqueu era chefe de publicanos e rico." },
        F3: { id: "F3", marca: "Sicomoro", texto: "Sendo pequeno, subiu a um sicômoro para o ver." },
        F4: { id: "F4", marca: "Chamado", texto: "Zaqueu, desce depressa, hoje devo ficar em tua casa." },
        F5: { id: "F5", marca: "Murmúrio", texto: "Foi hospedar-se em casa de um pecador." },
        F6: { id: "F6", marca: "Metade", texto: "Dou a metade dos meus bens aos pobres." },
        F7: { id: "F7", marca: "Quatro", texto: "Se defraudei alguém, restituo quatro vezes mais." },
        F8: { id: "F8", marca: "Salvação", texto: "Hoje entrou a salvação nesta casa." },
        F9: { id: "F9", marca: "Buscar", texto: "Veio buscar e salvar o que estava perdido." }
      },
      campos: [
        { id: "arvore", rotulo: "Subir ao sicômoro prova o quê?", resposta: "quis-ver", opcoes: [
          { id: "fuga", txt: "Que Zaqueu fugia" }, { id: "quis-ver", txt: "Que queria ver e não alcançava" }, { id: "imposto", txt: "Que cobrava da árvore" }
        ]},
        { id: "quatro", rotulo: "Restituir quatro vezes prova o quê?", resposta: "reconheceu", opcoes: [
          { id: "lei", txt: "Que a lei exigia o número" }, { id: "reconheceu", txt: "Que reconheceu o dano e pagou além" }, { id: "show", txt: "Que era só para a plateia" }
        ]},
        { id: "casa", rotulo: "A salvação na casa prova o quê?", resposta: "entrou", opcoes: [
          { id: "muro", txt: "Que a casa era nova" }, { id: "entrou", txt: "Que o perdido foi encontrado naquele dia" }, { id: "imposto", txt: "Que os impostos acabaram" }
        ]}
      ]
    },
    paes: {
      id: "paes", titulo: "Os pães e os peixes", fonte: "João 6,1–13",
      lede: "Cinco pães. Dois peixes. Cinco mil. Doze cestos.",
      pecas: {
        F1: { id: "F1", marca: "Monte", texto: "Havia muita gente no monte." },
        F2: { id: "F2", marca: "Fome", texto: "Onde compraremos pão para estes comerem?" },
        F3: { id: "F3", marca: "Filipe", texto: "Duzentos denários não bastam para cada um receber um pedaço." },
        F4: { id: "F4", marca: "Menino", texto: "Um menino tem cinco pães de cevada e dois peixes." },
        F5: { id: "F5", marca: "Pouca", texto: "Mas que é isto para tanta gente?" },
        F6: { id: "F6", marca: "Relva", texto: "Mandou que se recostassem na relva." },
        F7: { id: "F7", marca: "Graças", texto: "Tomou os pães, deu graças e distribuiu." },
        F8: { id: "F8", marca: "Fartos", texto: "Comeram quanto quiseram." },
        F9: { id: "F9", marca: "Cestos", texto: "Recolheram doze cestos de pedaços." }
      },
      campos: [
        { id: "conta", rotulo: "Os duzentos denários provam o quê?", resposta: "nao-dava", opcoes: [
          { id: "dava", txt: "Que o dinheiro bastava" }, { id: "nao-dava", txt: "Que a conta humana não fechava" }, { id: "roubo", txt: "Que Filipe escondeu a bolsa" }
        ]},
        { id: "menino", rotulo: "Os cinco pães do menino provam o quê?", resposta: "havia-algo", opcoes: [
          { id: "festa", txt: "Que já havia banquete" }, { id: "havia-algo", txt: "Que havia um pouco, e foi isso que se deu" }, { id: "venda", txt: "Que o menino vendeu o lanche" }
        ]},
        { id: "cestos", rotulo: "Os doze cestos provam o quê?", resposta: "sobrou", opcoes: [
          { id: "falta", txt: "Que faltou pão" }, { id: "sobrou", txt: "Que sobrou depois de todos se fartarem" }, { id: "lixo", txt: "Que se jogou tudo fora" }
        ]}
      ]
    }
  };
  Object.keys(extra).forEach(function (id) {
    window.MC_CASOS[id] = extra[id];
  });
})();
