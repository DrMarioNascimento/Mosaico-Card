(function () {
  window.MC_CASOS.emaus = {
    id: "emaus",
    modo: "quiz",
    titulo: "Quando os olhos abrem",
    fonte: "Quadro sem identificação prévia",
    fonteRevelacao: "A Estrada de Emaús · Lucas 24,13–35",
    lede: "Os dois andaram com alguém que parecia não saber de nada. Quando a leitura mudou — e o que já era verdade antes dessa mudança?",
    pecas: {
      E01: { id: "E01", tipo: "caso", marca: "Distância", texto: "Aldeia a sessenta estádios de Jerusalém. Mesmo dia." },
      E02: { id: "E02", tipo: "caso", marca: "Terceiro", texto: "Um terceiro se chega e caminha com eles. Os olhos ficam impedidos." },
      E03: { id: "E03", tipo: "caso", marca: "Pergunta", texto: "Tu és o único forasteiro em Jerusalém que não soube o que lá aconteceu?" },
      E04: { id: "E04", tipo: "caso", marca: "Esperança", texto: "Nós esperávamos que fosse ele quem ia redimir Israel. É o terceiro dia." },
      E05: { id: "E05", tipo: "caso", marca: "Túmulo", texto: "Mulheres: túmulo cedo, corpo nenhum, visão, ‘vive’. Alguns dos nossos foram e não o viram." },
      E06: { id: "E06", tipo: "caso", marca: "Escrituras", texto: "Começando por Moisés e por todos os profetas, interpretava o que a respeito dele constava." },
      E07: { id: "E07", tipo: "caso", marca: "Tarde", texto: "Fez menção de passar adiante. ‘Fica conosco, porque é tarde e o dia já declinou.’" },
      E08: { id: "E08", tipo: "caso", marca: "Pão", texto: "Tomou o pão, abençoou-o e, partindo-o, lho dava." },
      E09: { id: "E09", tipo: "caso", marca: "Olhos", texto: "Abriram-se-lhes os olhos. Ele desapareceu da sua presença." },
      E10: { id: "E10", tipo: "caso", marca: "Coração", texto: "Não nos ardia o coração quando ele nos falava pelo caminho, quando nos abria as Escrituras?" },
      E11: { id: "E11", tipo: "caso", marca: "Volta", texto: "Na mesma hora, levantando-se, voltaram para Jerusalém." },
      E12: { id: "E12", tipo: "caso", marca: "Relato", texto: "Contaram o que lhes acontecera no caminho, e como dele fora conhecido no partir do pão." },
      D01: { id: "D01", tipo: "duvida", marca: "Leitura", texto: "Cleófas chama o outro de único ignorante da cidade. Leitura: o terceiro não sabe. Correção: ele abre Moisés e os profetas." },
      D02: { id: "D02", tipo: "duvida", marca: "Plano", texto: "‘Esperávamos que fosse ele quem ia redimir Israel.’ Fato da boca. Leitura: o plano falhou. Correção: a esperança política é que era estreita — não o acontecido." },
      D03: { id: "D03", tipo: "duvida", marca: "Ausência", texto: "Alguns foram ao túmulo e não o viram. Leitura: então não vive. Correção: ausência no túmulo não é o mesmo que ausência na estrada." },
      S01: { id: "S01", tipo: "cenario", marca: "Poeira", texto: "Poeira nos tornozelos. Uma carroça passou no sentido contrário." },
      S02: { id: "S02", tipo: "cenario", marca: "Cão", texto: "Cão de aldeia late quando os três se aproximam do portão." },
      S03: { id: "S03", tipo: "cenario", marca: "Cântaro", texto: "No pátio, um cântaro. Alguém lava as mãos antes da ceia." },
      S04: { id: "S04", tipo: "cenario", marca: "Soldado", texto: "Na volta, a porta de Jerusalém ainda tem um soldado encostado." }
    },
    campos: [
      { id: "C1", rotulo: "Quando os olhos abrem?", resposta: "pao", opcoes: [
        { id: "estrada", txt: "Na explanação da estrada" }, { id: "fica", txt: "Quando pedem ‘fica conosco’" },
        { id: "pao", txt: "No partir do pão" }, { id: "jerusalem", txt: "Ao chegar em Jerusalém" }
      ]},
      { id: "C2", rotulo: "O peito, antes do pão", resposta: "ardia", opcoes: [
        { id: "frio", txt: "Estava frio até a mesa" }, { id: "ardia", txt: "Já ardia no caminho, enquanto as Escrituras se abriam" },
        { id: "depois", txt: "Ardeu só depois que ele desapareceu" }, { id: "nenhum", txt: "Não há menção de peito" }
      ]},
      { id: "C3", rotulo: "O forasteiro ‘não sabia’?", resposta: "cleofas", opcoes: [
        { id: "sim", txt: "Sim, ignorava Jerusalém" }, { id: "cleofas", txt: "A frase é de Cleófas; o terceiro conhecia as Escrituras" },
        { id: "cruz", txt: "Sabia da cruz e não do túmulo" }, { id: "qualquer", txt: "Era um peregrino qualquer" }
      ]},
      { id: "C4", rotulo: "Depois do desaparecer", resposta: "mesma-hora", opcoes: [
        { id: "manha", txt: "Dormem e voltam de manhã" }, { id: "aldeia", txt: "Ficam na aldeia" },
        { id: "mesma-hora", txt: "Na mesma hora voltam a Jerusalém" }, { id: "separam", txt: "Separam-se" }
      ]}
    ],
    revelacao: [
      "Os olhos não abrem na estrada. Abrem quando o pão é partido.",
      "O peito já ardia antes — e só é nomeado depois que os olhos abrem.",
      "‘O único que não soube’ é frase de quem pergunta. O terceiro lia Moisés.",
      "O dia tinha declinado. Mesmo assim, a volta é na mesma hora."
    ]
  };
})();
