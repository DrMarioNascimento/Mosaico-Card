(function(){
  var bank=window.MC_NT_BANK;
  if(!bank||!bank.byId) return;
  var caso={
    id: "nt2-mateus-ais-juramentos",
    kind: "canonical-case",
    title: "A quem Jesus disse \u201cAi de voc\u00eas\u201d",
    canon: { book: "Mateus", referenceNAA: "Mateus 23.1; Mateus 23.13" },
    prompt: { question: "Jesus falou \u00e0s multid\u00f5es e aos seus disc\u00edpulos. A quem ele disse \u201cAi de voc\u00eas\u201d?" },
    focalFieldId: "C1",
    focalJustification: "A pergunta-m\u00e3e pede o alvo da locu\u00e7\u00e3o Ai de voc\u00eas, n\u00e3o a plat\u00e9ia de 23.1.",
    editorial: { hinge: "A plat\u00e9ia (23.1) e o alvo do Ai de voc\u00eas (23.13) n\u00e3o s\u00e3o o mesmo grupo." },
    fields: [
      {id:"C1",sourceOrder:1,rotulo:"A quem Jesus disse \u201cAi de voc\u00eas\u201d",opcoes:[{id:"C1-O1",texto:"Aos escribas e fariseus"},{id:"C1-O2",texto:"\u00c0s multid\u00f5es e aos disc\u00edpulos"},{id:"C1-O3",texto:"Aos sete irm\u00e3os saduceus"},{id:"C1-O4",texto:"Aos convidados de uma festa"}],respostaId:"C1-O1",respostaCanonica:"Aos escribas e fariseus",enderecoNAA:"Mateus 23.13",isFocal:true,pontosBase:8},
      {id:"C2",sourceOrder:2,rotulo:"Como os chamou nesse aviso",opcoes:[{id:"C2-O1",texto:"Hip\u00f3critas"},{id:"C2-O2",texto:"Guias cegos"},{id:"C2-O3",texto:"Tolos"},{id:"C2-O4",texto:"Amigos"}],respostaId:"C2-O1",respostaCanonica:"Hip\u00f3critas",enderecoNAA:"Mateus 23.13",isFocal:false,pontosBase:5},
      {id:"C3",sourceOrder:3,rotulo:"O que eles fechavam diante das pessoas",opcoes:[{id:"C3-O1",texto:"O Reino dos C\u00e9us"},{id:"C3-O2",texto:"As casas das vi\u00favas"},{id:"C3-O3",texto:"As portas do santu\u00e1rio"},{id:"C3-O4",texto:"As estradas da Judeia"}],respostaId:"C3-O1",respostaCanonica:"O Reino dos C\u00e9us",enderecoNAA:"Mateus 23.13",isFocal:false,pontosBase:3},
      {id:"C4",sourceOrder:4,rotulo:"O que ele diz que eles fazem com os que estavam entrando",opcoes:[{id:"C4-O1",texto:"N\u00e3o deixam entrar"},{id:"C4-O2",texto:"N\u00e3o deixam jurar"},{id:"C4-O3",texto:"N\u00e3o deixam dar oferta"},{id:"C4-O4",texto:"N\u00e3o deixam atravessar o mar"}],respostaId:"C4-O1",respostaCanonica:"N\u00e3o deixam entrar",enderecoNAA:"Mateus 23.13",isFocal:false,pontosBase:2}
    ],
    deck: { status:"ready", minPlayers:2, maxPlayers:12, cards: [
      {id:"P01",text:"Jesus falou \u00e0s multid\u00f5es e aos seus disc\u00edpulos.",texto:"Jesus falou \u00e0s multid\u00f5es e aos seus disc\u00edpulos.",importance:"essential",relatedFields:["C1"],recommendedMoment:"early"},
      {id:"P02",text:"No mesmo discurso ele pronunciou a locu\u00e7\u00e3o \u201cAi de voc\u00eas\u201d.",texto:"No mesmo discurso ele pronunciou a locu\u00e7\u00e3o \u201cAi de voc\u00eas\u201d.",importance:"essential",relatedFields:["C1"],recommendedMoment:"late"},
      {id:"P03",text:"Esse aviso foi dirigido a escribas e fariseus.",texto:"Esse aviso foi dirigido a escribas e fariseus.",importance:"essential",relatedFields:["C1"],recommendedMoment:"late"},
      {id:"P04",text:"Ele os chamou de hip\u00f3critas nesse aviso.",texto:"Ele os chamou de hip\u00f3critas nesse aviso.",importance:"essential",relatedFields:["C2"],recommendedMoment:"late"},
      {id:"P05",text:"Acusou-os de fechar o Reino dos C\u00e9us diante das pessoas.",texto:"Acusou-os de fechar o Reino dos C\u00e9us diante das pessoas.",importance:"essential",relatedFields:["C3"],recommendedMoment:"late"},
      {id:"P06",text:"Disse que eles mesmos n\u00e3o entram.",texto:"Disse que eles mesmos n\u00e3o entram.",importance:"relevant",relatedFields:["C4"],recommendedMoment:"late"},
      {id:"P07",text:"Disse tamb\u00e9m que n\u00e3o deixam entrar os que estavam entrando.",texto:"Disse tamb\u00e9m que n\u00e3o deixam entrar os que estavam entrando.",importance:"essential",relatedFields:["C4"],recommendedMoment:"late"},
      {id:"P08",text:"A plat\u00e9ia do cap\u00edtulo n\u00e3o \u00e9 o alvo do \u201cAi de voc\u00eas\u201d.",texto:"A plat\u00e9ia do cap\u00edtulo n\u00e3o \u00e9 o alvo do \u201cAi de voc\u00eas\u201d.",importance:"relevant",relatedFields:["C1"],recommendedMoment:"middle"},
      {id:"P09",text:"A palavra hip\u00f3critas est\u00e1 no mesmo aviso de 23.13.",texto:"A palavra hip\u00f3critas est\u00e1 no mesmo aviso de 23.13.",importance:"relevant",relatedFields:["C2"],recommendedMoment:"middle"},
      {id:"P10",text:"Fechar o Reino \u00e9 a acusa\u00e7\u00e3o deste primeiro Ai de voc\u00eas.",texto:"Fechar o Reino \u00e9 a acusa\u00e7\u00e3o deste primeiro Ai de voc\u00eas.",importance:"relevant",relatedFields:["C3"],recommendedMoment:"middle"},
      {id:"P11",text:"Eles n\u00e3o entram e impedem os que estavam entrando.",texto:"Eles n\u00e3o entram e impedem os que estavam entrando.",importance:"contextual",relatedFields:["C4"],recommendedMoment:"late"},
      {id:"P12",text:"O Ai de voc\u00eas deste recorte \u00e9 advert\u00eancia, n\u00e3o pedido de pena.",texto:"O Ai de voc\u00eas deste recorte \u00e9 advert\u00eancia, n\u00e3o pedido de pena.",importance:"contextual",relatedFields:["C1"],recommendedMoment:"late"},
      {id:"P13",text:"O narrador abre o discurso: \u201cEnt\u00e3o Jesus falou\u201d.",texto:"O narrador abre o discurso: \u201cEnt\u00e3o Jesus falou\u201d.",importance:"relevant",relatedFields:["C1"],recommendedMoment:"early"},
      {id:"P14",text:"As multid\u00f5es est\u00e3o entre os ouvintes da abertura.",texto:"As multid\u00f5es est\u00e3o entre os ouvintes da abertura.",importance:"relevant",relatedFields:["C1"],recommendedMoment:"early"},
      {id:"P15",text:"Os disc\u00edpulos tamb\u00e9m est\u00e3o entre os ouvintes da abertura.",texto:"Os disc\u00edpulos tamb\u00e9m est\u00e3o entre os ouvintes da abertura.",importance:"relevant",relatedFields:["C1"],recommendedMoment:"early"},
      {id:"P16",text:"O aviso de 23.13 come\u00e7a pela locu\u00e7\u00e3o \u201cAi de voc\u00eas\u201d.",texto:"O aviso de 23.13 come\u00e7a pela locu\u00e7\u00e3o \u201cAi de voc\u00eas\u201d.",importance:"essential",relatedFields:["C1"],recommendedMoment:"middle"},
      {id:"P17",text:"Escribas s\u00e3o nomeados nesse aviso.",texto:"Escribas s\u00e3o nomeados nesse aviso.",importance:"essential",relatedFields:["C1"],recommendedMoment:"late"},
      {id:"P18",text:"Fariseus s\u00e3o nomeados nesse aviso.",texto:"Fariseus s\u00e3o nomeados nesse aviso.",importance:"essential",relatedFields:["C1"],recommendedMoment:"late"},
      {id:"P19",text:"O que eles fecham \u00e9 o Reino dos C\u00e9us.",texto:"O que eles fecham \u00e9 o Reino dos C\u00e9us.",importance:"essential",relatedFields:["C3"],recommendedMoment:"late"},
      {id:"P20",text:"Esse fechamento acontece diante das pessoas.",texto:"Esse fechamento acontece diante das pessoas.",importance:"relevant",relatedFields:["C3"],recommendedMoment:"middle"},
      {id:"P21",text:"A acusa\u00e7\u00e3o diz: voc\u00eas mesmos n\u00e3o entram.",texto:"A acusa\u00e7\u00e3o diz: voc\u00eas mesmos n\u00e3o entram.",importance:"relevant",relatedFields:["C4"],recommendedMoment:"late"},
      {id:"P22",text:"H\u00e1 quem esteja entrando quando o aviso \u00e9 dito.",texto:"H\u00e1 quem esteja entrando quando o aviso \u00e9 dito.",importance:"relevant",relatedFields:["C4"],recommendedMoment:"middle"},
      {id:"P23",text:"O \u201cporque\u201d liga o ai ao fechar do Reino.",texto:"O \u201cporque\u201d liga o ai ao fechar do Reino.",importance:"contextual",relatedFields:["C3"],recommendedMoment:"middle"},
      {id:"P24",text:"O texto junta n\u00e3o entrar e n\u00e3o deixar entrar.",texto:"O texto junta n\u00e3o entrar e n\u00e3o deixar entrar.",importance:"relevant",relatedFields:["C4"],recommendedMoment:"late"},
      {id:"P25",text:"O vers\u00edculo 13 fala em segunda pessoa: voc\u00eas.",texto:"O vers\u00edculo 13 fala em segunda pessoa: voc\u00eas.",importance:"contextual",relatedFields:["C1"],recommendedMoment:"middle"}
    ]},
    status: {structural:"approved",biblical:"approved",editorial:"approved",editoriallyEligible:true,playable:true},
    pendingIssues: []
  };
  bank.byId[caso.id]=caso;
})();
