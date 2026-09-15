(function(){
  var bank=window.MC_NT_BANK;
  if(!bank||!bank.byId) return;
  var caso={
      "id": "nt2-mateus-ais-juramentos",
      "kind": "canonical-case",
      "title": "A quem Jesus disse \u201cAi de voc\u00eas\u201d",
      "canon": {
        "book": "Mateus",
        "referenceNAA": "Mateus 23.1; Mateus 23.13"
      },
      "prompt": {
        "question": "Jesus falou \u00e0s multid\u00f5es e aos seus disc\u00edpulos. A quem ele disse \u201cAi de voc\u00eas\u201d?"
      },
      "focalFieldId": "C1",
      "focalJustification": "A pergunta-m\u00e3e pede o alvo da locu\u00e7\u00e3o Ai de voc\u00eas, n\u00e3o a plat\u00e9ia de 23.1.",
      "editorial": {
        "hinge": "A plat\u00e9ia (23.1) e o alvo do Ai de voc\u00eas (23.13) n\u00e3o s\u00e3o o mesmo grupo."
      },
      "fields": [
        {"id":"C1","sourceOrder":1,"rotulo":"A quem Jesus disse \u201cAi de voc\u00eas\u201d","opcoes":[{"id":"C1-O1","texto":"Aos escribas e fariseus"},{"id":"C1-O2","texto":"\u00c0s multid\u00f5es e aos disc\u00edpulos"},{"id":"C1-O3","texto":"Aos sete irm\u00e3os saduceus"},{"id":"C1-O4","texto":"Aos convidados de uma festa"}],"respostaId":"C1-O1","respostaCanonica":"Aos escribas e fariseus","enderecoNAA":"Mateus 23.13","isFocal":true,"pontosBase":8},
        {"id":"C2","sourceOrder":2,"rotulo":"Como os chamou nesse aviso","opcoes":[{"id":"C2-O1","texto":"Hip\u00f3critas"},{"id":"C2-O2","texto":"Guias cegos"},{"id":"C2-O3","texto":"Tolos"},{"id":"C2-O4","texto":"Amigos"}],"respostaId":"C2-O1","respostaCanonica":"Hip\u00f3critas","enderecoNAA":"Mateus 23.13","isFocal":false,"pontosBase":5},
        {"id":"C3","sourceOrder":3,"rotulo":"O que eles fechavam diante das pessoas","opcoes":[{"id":"C3-O1","texto":"O Reino dos C\u00e9us"},{"id":"C3-O2","texto":"As casas das vi\u00favas"},{"id":"C3-O3","texto":"As portas do santu\u00e1rio"},{"id":"C3-O4","texto":"As estradas da Judeia"}],"respostaId":"C3-O1","respostaCanonica":"O Reino dos C\u00e9us","enderecoNAA":"Mateus 23.13","isFocal":false,"pontosBase":3},
        {"id":"C4","sourceOrder":4,"rotulo":"O que ele diz que eles fazem com os que estavam entrando","opcoes":[{"id":"C4-O1","texto":"N\u00e3o deixam entrar"},{"id":"C4-O2","texto":"N\u00e3o deixam jurar"},{"id":"C4-O3","texto":"N\u00e3o deixam dar oferta"},{"id":"C4-O4","texto":"N\u00e3o deixam atravessar o mar"}],"respostaId":"C4-O1","respostaCanonica":"N\u00e3o deixam entrar","enderecoNAA":"Mateus 23.13","isFocal":false,"pontosBase":2}
      ],
      "deck": {"status":"ready","minPlayers":2,"maxPlayers":5,"cards":[
        {"id":"P01","text":"Jesus falou \u00e0s multid\u00f5es e aos seus disc\u00edpulos.","texto":"Jesus falou \u00e0s multid\u00f5es e aos seus disc\u00edpulos.","importance":"essential","relatedFields":["C1"],"recommendedMoment":"early"},
        {"id":"P02","text":"No mesmo discurso ele pronunciou a locu\u00e7\u00e3o \u201cAi de voc\u00eas\u201d.","texto":"No mesmo discurso ele pronunciou a locu\u00e7\u00e3o \u201cAi de voc\u00eas\u201d.","importance":"essential","relatedFields":["C1"],"recommendedMoment":"late"},
        {"id":"P03","text":"Esse aviso foi dirigido a escribas e fariseus.","texto":"Esse aviso foi dirigido a escribas e fariseus.","importance":"essential","relatedFields":["C1"],"recommendedMoment":"late"},
        {"id":"P04","text":"Ele os chamou de hip\u00f3critas nesse aviso.","texto":"Ele os chamou de hip\u00f3critas nesse aviso.","importance":"essential","relatedFields":["C2"],"recommendedMoment":"late"},
        {"id":"P05","text":"Acusou-os de fechar o Reino dos C\u00e9us diante das pessoas.","texto":"Acusou-os de fechar o Reino dos C\u00e9us diante das pessoas.","importance":"essential","relatedFields":["C3"],"recommendedMoment":"late"},
        {"id":"P06","text":"Disse que eles mesmos n\u00e3o entram.","texto":"Disse que eles mesmos n\u00e3o entram.","importance":"relevant","relatedFields":["C4"],"recommendedMoment":"late"},
        {"id":"P07","text":"Disse tamb\u00e9m que n\u00e3o deixam entrar os que estavam entrando.","texto":"Disse tamb\u00e9m que n\u00e3o deixam entrar os que estavam entrando.","importance":"essential","relatedFields":["C4"],"recommendedMoment":"late"},
        {"id":"P08","text":"A plat\u00e9ia do cap\u00edtulo n\u00e3o \u00e9 o alvo do \u201cAi de voc\u00eas\u201d.","texto":"A plat\u00e9ia do cap\u00edtulo n\u00e3o \u00e9 o alvo do \u201cAi de voc\u00eas\u201d.","importance":"relevant","relatedFields":["C1"],"recommendedMoment":"middle"},
        {"id":"P09","text":"A palavra hip\u00f3critas est\u00e1 no mesmo aviso de 23.13.","texto":"A palavra hip\u00f3critas est\u00e1 no mesmo aviso de 23.13.","importance":"relevant","relatedFields":["C2"],"recommendedMoment":"middle"},
        {"id":"P10","text":"Fechar o Reino \u00e9 a acusa\u00e7\u00e3o deste primeiro Ai de voc\u00eas.","texto":"Fechar o Reino \u00e9 a acusa\u00e7\u00e3o deste primeiro Ai de voc\u00eas.","importance":"relevant","relatedFields":["C3"],"recommendedMoment":"middle"},
        {"id":"P11","text":"Eles n\u00e3o entram e impedem os que estavam entrando.","texto":"Eles n\u00e3o entram e impedem os que estavam entrando.","importance":"contextual","relatedFields":["C4"],"recommendedMoment":"late"},
        {"id":"P12","text":"O Ai de voc\u00eas deste recorte \u00e9 advert\u00eancia, n\u00e3o pedido de pena.","texto":"O Ai de voc\u00eas deste recorte \u00e9 advert\u00eancia, n\u00e3o pedido de pena.","importance":"contextual","relatedFields":["C1"],"recommendedMoment":"late"}
      ]},
      "status": {"structural":"approved","biblical":"approved","editorial":"approved","editoriallyEligible":true,"playable":true},
      "pendingIssues": []
    };
  bank.byId[caso.id]=caso;
})();
