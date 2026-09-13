import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { validateBank } from "../tools/validate-nt-bank.mjs";

const require = createRequire(import.meta.url);
const catalog = require("../cases-nt.js");
assert.equal(catalog.schemaVersion, 2);
assert.equal(catalog.namespace, "mosaico-nt-naa-v2");
assert.equal(catalog.demoIsolated, true);
assert.equal(catalog.summary.cases, catalog.order.length);
assert.equal(catalog.summary.fields, catalog.order.length * 4);
assert.equal(catalog.summary.playableCases, catalog.order.filter(id => catalog.byId[id].status.playable).length);
assert.equal(catalog.summary.editoriallyEligibleCases, 255);
assert.equal(catalog.summary.max12Cases, 91);
const mateus23Checkpoint077 = {
  "nt2-mateus-escribas-obras-titulos": 8,
  "nt2-mateus-ais-juramentos": 7,
  "nt2-mateus-ais-dizimo-aparencias": 8,
  "nt2-mateus-profetas-lamento-jerusalem": 9
};
for (const [id, maxPlayers] of Object.entries(mateus23Checkpoint077)) {
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.length >= 5);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && ref.sourceId.endsWith("MAT.23.NAA"))), `${id} mantém a proveniência exclusiva de Mt 23`);
}

const mateus24Checkpoint078 = {
  "nt2-mateus-templo-sinais-testemunho": 10,
  "nt2-mateus-fuga-falsos-cristos": 10,
  "nt2-mateus-vinda-anjos-figueira": 7,
  "nt2-mateus-vigilancia-servos": 10
};
for (const [id, maxPlayers] of Object.entries(mateus24Checkpoint078)) {
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.length >= 5);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && ref.sourceId.endsWith("MAT.24.NAA"))), `${id} mantém a proveniência exclusiva de Mt 24`);
}

const mateus25Checkpoint079 = {
  "nt2-mateus-virgens-lamparinas": 8,
  "nt2-mateus-servos-talentos": 10,
  "nt2-mateus-rei-ovelhas-cabritos": 9
};
for (const [id, maxPlayers] of Object.entries(mateus25Checkpoint079)) {
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.length >= 5);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && ref.sourceId.endsWith("MAT.25.NAA"))), `${id} mantém a proveniência exclusiva de Mt 25`);
  assert.deepEqual(catalog.byId[id].fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}

const mateus1a4Checkpoint080 = {
  "nt2-mateus-genealogia-jesus": 11,
  "nt2-mateus-egito-belem-nazare": 9,
  "nt2-mateus-joao-deserto-batismo": 9,
  "nt2-mateus-galileia-pescadores-curas": 10
};
for (const [id, maxPlayers] of Object.entries(mateus1a4Checkpoint080)) {
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.length >= 5);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && /MAT\.[1-4]\.NAA$/.test(ref.sourceId))), `${id} mantém a proveniência exclusiva de Mateus 1–4`);
  assert.deepEqual(catalog.byId[id].fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}

assert.equal(catalog.byId.ovelha, undefined);
assert.equal(catalog.byId["demo-ovelha"], undefined);
assert.equal(catalog.byId["nt2-mateus-multidao"], undefined, "episódio paralelo consolidado não permanece duplicado");
assert.equal(catalog.byId["nt2-hebreus-testemunhos-fe"].status.playable, true, "pauta temática de Hebreus 11 foi liberada");
assert.equal(catalog.byId["nt2-hebreus-testemunhos-fe"].deck.maxPlayers, 12);
assert.ok(catalog.byId["nt2-hebreus-testemunhos-fe"].deck.cards.every(card => card.references.every(reference => reference.book === "Hebreus")), "Hebreus 11 não importa fatos do AT");
assert.equal(catalog.byId["nt2-2joao-verdade-hospitalidade"].deck.maxPlayers, 4);
const tematicasNovas = [
  "nt2-romanos-saudacoes", "nt2-1corintios-dons-corpo", "nt2-1corintios-testemunhas-ressurreicao",
  "nt2-galatas-carne-espirito", "nt2-efesios-armadura", "nt2-1timoteo-liderancas",
  "nt2-1tessalonicenses-exortacoes", "nt2-tiago-lingua-sabedoria", "nt2-apocalipse-selos",
  "nt2-apocalipse-duas-bestas", "nt2-apocalipse-tacas", "nt2-apocalipse-mil-anos-juizo"
];
assert.ok(tematicasNovas.every(id => catalog.byId[id].status.playable && catalog.byId[id].deck.maxPlayers === 6));
const auditadasTreze = ["nt2-lucas-jesus-doze-anos", "nt2-atos-escolha-matias", "nt2-atos-coxo-porta-formosa", "nt2-atos-sete-distribuicao", "nt2-atos-eutico", "nt2-3joao-gaio-diotrefes-demetrio"];
assert.ok(auditadasTreze.every(id => catalog.byId[id].status.playable && catalog.byId[id].deck.maxPlayers === 6));
const auditadasNove = ["nt2-mateus-jose-sonho", "nt2-mateus-batismo", "nt2-mateus-tentacoes", "nt2-marcos-chamado-pescadores", "nt2-marcos-sinagoga-cafarnaum"];
assert.ok(auditadasNove.every(id => catalog.byId[id].status.playable && catalog.byId[id].deck.maxPlayers === 4));
const auditoriaEvangelhosFinal = ["nt2-mateus-entrada-jerusalem", "nt2-mateus-mulheres-ressurreicao", "nt2-marcos-bartimeu", "nt2-lucas-mesa-servico-pedro", "nt2-lucas-aparicao-ascensao"];
assert.ok(auditoriaEvangelhosFinal.every(id => catalog.byId[id].status.playable));
assert.equal(catalog.byId["nt2-marcos-bartimeu"].deck.maxPlayers, 3);
assert.equal(catalog.byId["nt2-lucas-aparicao-ascensao"].deck.maxPlayers, 8);
const auditoriaAtos037 = ["nt2-atos-oracao-ousadia", "nt2-atos-apostolos-sinedrio", "nt2-atos-morte-estevao", "nt2-atos-eneias-tabita", "nt2-atos-herodes-tiro-sidom"];
assert.ok(auditoriaAtos037.every(id => catalog.byId[id].status.playable));
const auditoriaAtos039 = ["nt2-atos-chipre-elimas", "nt2-atos-listra-paulo-barnabe", "nt2-atos-visao-lidia", "nt2-atos-paulo-corinto", "nt2-atos-efeso-ceva"];
assert.ok(auditoriaAtos039.every(id => catalog.byId[id].status.playable));
assert.equal(catalog.byId["nt2-atos-agabo-jerusalem"].deck.maxPlayers, 4);
assert.equal(catalog.byId["nt2-atos-conspiracao-transferencia"].deck.maxPlayers, 11);
const auditoriaRomanos041 = {
  "nt2-romanos-abertura-visita": 7,
  "nt2-romanos-pecado-graca-servico": 8,
  "nt2-romanos-lei-pecado-conflito": 8,
  "nt2-romanos-espirito-adocao-esperanca": 12
};
for (const [id, maxPlayers] of Object.entries(auditoriaRomanos041)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Romanos")), `${id} não importa fatos de outro documento`);
}
const auditoriaRomanos042 = {
  "nt2-romanos-corpo-dons-conduta": 10,
  "nt2-romanos-autoridades-amor-vigilancia": 8,
  "nt2-romanos-acolhimento-consciencia-paz": 11,
  "nt2-romanos-fortes-acolhimento-esperanca": 6
};
for (const [id, maxPlayers] of Object.entries(auditoriaRomanos042)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Romanos")), `${id} não importa fatos de outro documento`);
}
const auditoria1Corintios043 = {
  "nt2-1corintios-remetentes-divisoes-batismos": 7,
  "nt2-1corintios-conhecimento-liberdade-consciencia": 6,
  "nt2-1corintios-direitos-adaptacao-corrida": 10,
  "nt2-1corintios-exemplos-mesa-gloria": 11
};
for (const [id, maxPlayers] of Object.entries(auditoria1Corintios043)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 Coríntios")), `${id} não completa alusões nem importa fatos de outro documento`);
}
const auditoria1Corintios044 = {
  "nt2-1corintios-ceia-reuniao-exame": 8,
  "nt2-1corintios-amor-permanencia": 8,
  "nt2-1corintios-profecia-linguas-edificacao-ordem": 10
};
for (const [id, maxPlayers] of Object.entries(auditoria1Corintios044)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 Coríntios")), `${id} mantém fonte exclusiva em 1 Coríntios`);
}
assert.ok(catalog.byId["nt2-1corintios-ceia-reuniao-exame"].deck.cards.every(card => !card.references.some(ref => /11\.(?:[2-9]|1[0-6])(?:\D|$)/.test(ref.passage))), "costumes de 1Co 11.2-16 ficam fora da pauta da ceia");
assert.ok(catalog.byId["nt2-1corintios-profecia-linguas-edificacao-ordem"].deck.cards.every(card => !card.references.some(ref => /14\.(?:34|35|36)(?:\D|$)/.test(ref.passage))), "1Co 14.34-36 fica isolado de gabaritos e pistas");
const auditoria2Corintios045 = {
  "nt2-2corintios-tito-tristeza-consolo": 7,
  "nt2-2corintios-autoridade-limites-recomendacao": 8,
  "nt2-2corintios-visita-exame-edificacao": 8
};
for (const [id, maxPlayers] of Object.entries(auditoria2Corintios045)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "2 Coríntios")), `${id} mantém fonte exclusiva em 2 Coríntios`);
}

const auditoriaGlEf046 = {
  "nt2-galatas-restauracao-semeadura-gloria": ["Gálatas", 8],
  "nt2-efesios-bencaos-selo-oracao": ["Efésios", 9],
  "nt2-efesios-graca-paz-edificio": ["Efésios", 10],
  "nt2-efesios-misterio-ministerio-oracao": ["Efésios", 10]
};
for (const [id, [book, maxPlayers]] of Object.entries(auditoriaGlEf046)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === book)), `${id} mantém fonte exclusiva no próprio documento`);
}
const auditoriaEfCl047 = {
  "nt2-efesios-unidade-maturidade-nova-natureza": ["Efésios", 9],
  "nt2-efesios-luz-sabedoria-relacoes": ["Efésios", 9],
  "nt2-colossenses-alto-nova-natureza-conduta": ["Colossenses", 9],
  "nt2-colossenses-oracao-mensageiros-saudacoes": ["Colossenses", 9]
};
for (const [id, [book, maxPlayers]] of Object.entries(auditoriaEfCl047)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === book)), `${id} mantém proveniência exclusiva no próprio documento`);
}
assert.ok(catalog.byId["nt2-colossenses-oracao-mensageiros-saudacoes"].deck.cards.every(card => !card.references.some(ref => ref.book !== "Colossenses")), "Tíquico, Onésimo e as cartas não são harmonizados com outro documento");
const auditoriaTessalonicenses048 = {
  "nt2-1tessalonicenses-fe-amor-esperanca-conversao": ["1 Tessalonicenses", 6],
  "nt2-1tessalonicenses-santificacao-amor-trabalho": ["1 Tessalonicenses", 6],
  "nt2-1tessalonicenses-esperanca-encontro-consolo": ["1 Tessalonicenses", 4],
  "nt2-2tessalonicenses-escolha-firmeza-consolo": ["2 Tessalonicenses", 3],
  "nt2-2tessalonicenses-trabalho-disciplina-saudacao": ["2 Tessalonicenses", 7]
};
for (const [id, [book, maxPlayers]] of Object.entries(auditoriaTessalonicenses048)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === book)), `${id} mantém fonte exclusiva na própria carta`);
}
assert.ok(catalog.byId["nt2-1tessalonicenses-santificacao-amor-trabalho"].deck.cards.every(card => card.references.every(ref => /^(?:4\.(?:[1-9]|1[0-2]))(?:\D|$)/.test(ref.passage))), "1Ts 4.1-12 permanece no primeiro bloco delimitado");
assert.ok(catalog.byId["nt2-1tessalonicenses-esperanca-encontro-consolo"].deck.cards.every(card => card.references.every(ref => /^4\.1[3-8](?:\D|$)/.test(ref.passage))), "1Ts 4.13-18 permanece no segundo bloco delimitado");
const auditoria1Timoteo049 = {
  "nt2-1timoteo-ensino-graca-combate": 8,
  "nt2-1timoteo-criacao-piedade-ministerio": 7,
  "nt2-1timoteo-familias-viuvas": 7,
  "nt2-1timoteo-presbiteros-conselhos": 4,
  "nt2-1timoteo-contentamento-combate-ricos": 10
};
for (const [id, maxPlayers] of Object.entries(auditoria1Timoteo049)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 Timóteo")), `${id} mantém fonte exclusiva em 1 Timóteo`);
}
const auditoriaPastorais050 = {
  "nt2-2timoteo-ultimos-dias-escrituras": ["2 Timóteo", 8],
  "nt2-2timoteo-pregar-combater-coroa": ["2 Timóteo", 7],
  "nt2-tito-presbiteros-ensino-repreensao": ["Tito", 8],
  "nt2-tito-conduta-graca-instrucoes": ["Tito", 9]
};
for (const [id, [book, maxPlayers]] of Object.entries(auditoriaPastorais050)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === book)), `${id} não importa reconstruções de outros documentos`);
}
const auditoriaHebreusTiago051 = {
  "nt2-hebreus-hospitalidade-fidelidade-oracao": ["Hebreus", 11],
  "nt2-tiago-provacoes-sabedoria-pratica": ["Tiago", 12],
  "nt2-tiago-parcialidade-fe-obras": ["Tiago", 11],
  "nt2-tiago-ricos-paciencia-palavra": ["Tiago", 11]
};
for (const [id, [book, maxPlayers]] of Object.entries(auditoriaHebreusTiago051)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === book)), `${id} não completa alusões com outro documento`);
}
const auditoria1Pedro052 = [
  "nt2-1pedro-esperanca-santidade-amor",
  "nt2-1pedro-palavra-pedras-conduta",
  "nt2-1pedro-relacoes-unidade-sofrimento"
];
assert.ok(auditoria1Pedro052.every(id => catalog.byId[id].status.playable && catalog.byId[id].deck.maxPlayers === 12));
assert.ok(auditoria1Pedro052.every(id => catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 Pedro"))), "pautas de 1Pe não importam fatos externos");
assert.ok(catalog.byId["nt2-1pedro-relacoes-unidade-sofrimento"].deck.cards.every(card => card.references.every(ref => /^(?:3\.(?:[1-9]|1[0-7]))(?:\D|$)/.test(ref.passage))), "1Pe 3 permanece limitado a 3.1-17");
const auditoria1Pedro053 = {
  "nt2-1pedro-vontade-conduta-julgamento": 7,
  "nt2-1pedro-amor-hospitalidade-dons": 7,
  "nt2-1pedro-prova-sofrimento-fiel-criador": 9
};
for (const [id, maxPlayers] of Object.entries(auditoria1Pedro053)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 Pedro")), `${id} mantém fonte exclusiva em 1 Pedro`);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.passage !== "4.6")), `${id} exclui integralmente 1Pe 4.6`);
}

const auditoriaPedro054 = {
  "nt2-1pedro-pastoreio-humildade-firmeza-saudacoes": "1 Pedro",
  "nt2-2pedro-fe-virtudes-memoria": "2 Pedro"
};
for (const [id, book] of Object.entries(auditoriaPedro054)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, 12);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === book)), `${id} mantém fonte exclusiva no próprio documento`);
}
const pauta1Pe5 = catalog.byId["nt2-1pedro-pastoreio-humildade-firmeza-saudacoes"];
assert.match(pauta1Pe5.reveal.hinge, /Igreja ou comunidade cristã/);
assert.match(pauta1Pe5.reveal.hinge, /não localiza Babilônia/);
assert.match(pauta1Pe5.reveal.hinge, /equivalente lexical/);
assert.ok(catalog.byId["nt2-2pedro-fe-virtudes-memoria"].deck.cards.every(card => card.references.every(ref => /^(?:1\.(?:[1-9]|1[0-5]))(?:\D|$)/.test(ref.passage))), "2Pe permanece limitado a 1.1-15");
const auditoria1Joao055 = {
  "nt2-1joao-testemunho-luz-confissao": 10,
  "nt2-1joao-advogado-mandamentos-amor-mundo": 12,
  "nt2-1joao-anticristos-uncao-permanencia": 12,
  "nt2-1joao-filhos-amor-confianca": 12
};
for (const [id, maxPlayers] of Object.entries(auditoria1Joao055)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 João")), `${id} mantém fonte exclusiva em 1 João`);
}
assert.match(catalog.byId["nt2-1joao-anticristos-uncao-permanencia"].reveal.hinge, /sem atribuir o termo anticristo a identidades externas/);
const auditoria1Joao056 = {
  "nt2-1joao-provar-espiritos-verdade-erro": 9,
  "nt2-1joao-amor-permanencia-confianca": 12,
  "nt2-1joao-fe-testemunho-vida": 10,
  "nt2-1joao-confianca-oracao-pecado-conhecimento": 10
};
for (const [id, maxPlayers] of Object.entries(auditoria1Joao056)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "1 João")), `${id} mantém fonte exclusiva em 1 João`);
}
assert.match(catalog.byId["nt2-1joao-provar-espiritos-verdade-erro"].reveal.hinge, /nenhuma identidade pessoal, institucional ou histórica externa/);
assert.match(catalog.byId["nt2-1joao-confianca-oracao-pecado-conhecimento"].reveal.hinge, /não identifica qual pecado leva à morte/);
const auditoriaJudas057 = {
  "nt2-judas-chamado-fe-exemplos": 8,
  "nt2-judas-falsos-mestres-contrastes": 9,
  "nt2-judas-memoria-perseveranca-doxologia": 9
};
for (const [id, maxPlayers] of Object.entries(auditoriaJudas057)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Judas")), `${id} mantém fonte exclusiva em Judas`);
}
assert.match(catalog.byId["nt2-judas-falsos-mestres-contrastes"].reveal.hinge, /não reconstrói episódios/);
const auditoriaApocalipse058 = {
  "nt2-apocalipse-efeso-obras-primeiro-amor": 8,
  "nt2-apocalipse-esmirna-tribulacao-fidelidade": 6,
  "nt2-apocalipse-pergamo-nome-doutrinas-promessa": 8,
  "nt2-apocalipse-tiatira-obras-jezabel-conservar": 10
};
for (const [id, maxPlayers] of Object.entries(auditoriaApocalipse058)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && /^2\./.test(ref.passage))), `${id} permanece limitado a Apocalipse 2`);
}
assert.match(catalog.byId["nt2-apocalipse-efeso-obras-primeiro-amor"].reveal.hinge, /nenhuma identidade histórica, atual ou alegórica/);
assert.match(catalog.byId["nt2-apocalipse-tiatira-obras-jezabel-conservar"].reveal.hinge, /sem identificação histórica, igreja atual, calendário ou alegoria externa/);
const auditoriaApocalipse059 = {
  "nt2-apocalipse-sardes-vigiar-vestes-livro": 8,
  "nt2-apocalipse-filadelfia-porta-coroa-coluna": 9,
  "nt2-apocalipse-laodiceia-mornida-conselho-trono": 9
};
for (const [id, maxPlayers] of Object.entries(auditoriaApocalipse059)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && /^3\./.test(ref.passage))), `${id} permanece limitado a Apocalipse 3`);
}
assert.ok(Object.keys(auditoriaApocalipse059).every(id => /sem (?:equivalência histórica|identidade histórica|alegoria)/.test(catalog.byId[id].reveal.hinge)), "cartas de Ap 3 registram o limite contra identidades ou alegorias externas");
const auditoriaApocalipse060 = {
  "nt2-apocalipse-selados-tribos": 7,
  "nt2-apocalipse-grande-multidao-trono": 9
};
for (const [id, maxPlayers] of Object.entries(auditoriaApocalipse060)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && /^7\./.test(ref.passage))), `${id} permanece limitado a Apocalipse 7`);
  assert.match(catalog.byId[id].reveal.hinge, /não (?:decide|é igualada)/, `${id} não impõe literalidade nem identidade externa`);
}
const auditoriaApocalipse061 = {
  "nt2-apocalipse-setimo-selo-quatro-trombetas": [12, /^(?:8\.)/],
  "nt2-apocalipse-quinta-trombeta-gafanhotos": [11, /^(?:9\.(?:[1-9]|1[0-2]))(?:\D|$)/],
  "nt2-apocalipse-sexta-trombeta-eufrates": [10, /^(?:9\.(?:1[3-9]|2[01]))(?:\D|$)/],
  "nt2-apocalipse-anjo-livrinho": [12, /^(?:10\.)/]
};
for (const [id, [maxPlayers, passagePattern]] of Object.entries(auditoriaApocalipse061)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && passagePattern.test(ref.passage))), `${id} permanece limitado ao próprio bloco de Apocalipse 8–10`);
  assert.match(catalog.byId[id].reveal.hinge, /(?:identidade histórica|calendário|cronologia|conteúdo selado)/, `${id} explicita o limite contra complementos externos`);
}
const auditoriaApocalipse062 = {
  "nt2-apocalipse-medicao-duas-testemunhas": [12, /^(?:11\.(?:[1-9]|1[0-4]))(?:\D|$)/],
  "nt2-apocalipse-setima-trombeta-reino-santuario": [8, /^(?:11\.(?:1[5-9]))(?:\D|$)/]
};
for (const [id, [maxPlayers, passagePattern]] of Object.entries(auditoriaApocalipse062)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && passagePattern.test(ref.passage))), `${id} permanece limitado ao próprio bloco de Apocalipse 11`);
}
assert.match(catalog.byId["nt2-apocalipse-medicao-duas-testemunhas"].reveal.hinge, /não lhes atribui nomes.*identidades externas/, "as duas testemunhas permanecem sem identificação externa");
const auditoriaApocalipse063 = {
  "nt2-apocalipse-cordeiro-cento-quarenta-quatro-mil": [9, /^(?:14\.[1-5])(?:\D|$)/],
  "nt2-apocalipse-tres-anjos-perseveranca": [12, /^(?:14\.(?:[6-9]|1[0-3]))(?:\D|$)/],
  "nt2-apocalipse-colheita-lagar": [11, /^(?:14\.(?:1[4-9]|20))(?:\D|$)/],
  "nt2-apocalipse-mar-cantico-anjos-tacas": [12, /^(?:15\.[1-8])(?:\D|$)/]
};
for (const [id, [maxPlayers, passagePattern]] of Object.entries(auditoriaApocalipse063)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && passagePattern.test(ref.passage))), `${id} permanece limitado ao recorte de Apocalipse 14–15`);
}
assert.match(catalog.byId["nt2-apocalipse-cordeiro-cento-quarenta-quatro-mil"].reveal.hinge, /não se escolhe a literalidade.*nem se equipara.*Apocalipse 7/, "os cento e quarenta e quatro mil não recebem literalidade nem harmonização com Ap 7");
assert.equal(catalog.byId["nt2-apocalipse-tacas"].deck.maxPlayers, 6, "a pauta existente encerra Apocalipse 16 sem expansão artificial");
const auditoriaApocalipse064 = {
  "nt2-apocalipse-mulher-besta-explicacao": [12, /^(?:17\.(?:[1-9]|1[0-8]))(?:\D|$)/],
  "nt2-apocalipse-queda-babilonia-saida-julgamento": [12, /^(?:18\.[1-8])(?:\D|$)/],
  "nt2-apocalipse-lamentos-reis-mercadores-mar": [12, /^(?:18\.(?:9|1[0-9]|20))(?:\D|$)/],
  "nt2-apocalipse-pedra-silencio-sangue": [8, /^(?:18\.2[1-4])(?:\D|$)/]
};
for (const [id, [maxPlayers, passagePattern]] of Object.entries(auditoriaApocalipse064)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && passagePattern.test(ref.passage))), `${id} permanece limitado ao próprio bloco de Apocalipse 17–18`);
  assert.match(catalog.byId[id].reveal.hinge, /(?:identifica|históric|instituição|geografia|alegoria)/, `${id} explicita o limite contra identidades externas`);
}
const auditoriaApocalipse065 = {
  "nt2-apocalipse-bodas-cordeiro-louvor": /^(?:19\.(?:[1-9]|10))(?:\D|$)/,
  "nt2-apocalipse-cavaleiro-besta-ceia": /^(?:19\.(?:1[1-9]|2[01]))(?:\D|$)/
};
for (const [id, passagePattern] of Object.entries(auditoriaApocalipse065)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, 12);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && passagePattern.test(ref.passage))), `${id} permanece limitado ao próprio bloco de Apocalipse 19`);
  assert.match(catalog.byId[id].reveal.hinge, /(?:históric|geografia|cronologia|alegoria)/, `${id} explicita o limite interpretativo`);
}
assert.ok(catalog.byId["nt2-apocalipse-mil-anos-juizo"].deck.cards.every(card => card.references.every(ref => /^(?:20\.)/.test(ref.passage))), "pauta dos mil anos permanece limitada a Ap 20");
assert.ok(catalog.byId["nt2-apocalipse-nova-jerusalem"].deck.cards.every(card => card.references.every(ref => /^(?:21\.|22\.[1-5](?:\D|$))/.test(ref.passage))), "Nova Jerusalém permanece limitada a Ap 21.1–22.5");
const apocalipseFinal = catalog.byId["nt2-apocalipse-palavras-convite-testemunho-final"];
assert.equal(apocalipseFinal.status.playable, true);
assert.equal(apocalipseFinal.deck.maxPlayers, 12);
assert.equal(apocalipseFinal.deck.cards.length, 32);
assert.ok(apocalipseFinal.deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && /^(?:22\.(?:[6-9]|1[0-9]|2[01]))(?:\D|$)/.test(ref.passage))), "encerramento permanece limitado a Ap 22.6-21");
assert.match(apocalipseFinal.reveal.hinge, /não são convertidos em calendário/);
for (const id of ["nt2-apocalipse-mulher-dragao", "nt2-apocalipse-duas-bestas"]) {
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Apocalipse" && /^(?:12|13)\./.test(ref.passage))), `${id} mantém exclusivamente as identificações internas de seu capítulo`);
}
assert.ok(catalog.byId["nt2-marcos-bartimeu"].deck.cards.every(card => card.references.every(ref => ref.book === "Marcos")), "Bartimeu não presume identidade dos paralelos");
const auditoriaMateus067 = {
  "nt2-mateus-bem-aventurancas": 7,
  "nt2-mateus-ensinos-contrastes": 10,
  "nt2-mateus-praticas-secreto": 10,
  "nt2-mateus-escolhas-alertas": 12
};
for (const [id, maxPlayers] of Object.entries(auditoriaMateus067)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && /^[567]\./.test(ref.passage))), `${id} permanece restrita a Mateus 5–7`);
  assert.deepEqual(catalog.byId[id].fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}

const auditoriaMateus068 = {
  "nt2-mateus-sal-luz-lei": 9,
  "nt2-mateus-olhar-tropeco-divorcio": 6,
  "nt2-mateus-tesouro-olhos-senhores-preocupacoes": 12,
  "nt2-mateus-julgamento-regra-alegacoes-reacao": 10
};
for (const [id, maxPlayers] of Object.entries(auditoriaMateus068)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && /^[567]\./.test(ref.passage))), `${id} permanece restrita aos remanescentes de Mateus 5–7`);
  assert.deepEqual(catalog.byId[id].fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}

const auditoriaMateus071 = {
  "nt2-mateus-doze-destino-anuncio-acolhida": 10,
  "nt2-mateus-escriba-rejeicao-nazare": 6
};
for (const [id, maxPlayers] of Object.entries(auditoriaMateus071)) {
  assert.equal(catalog.byId[id].status.playable, true);
  assert.equal(catalog.byId[id].deck.maxPlayers, maxPlayers);
  assert.ok(catalog.byId[id].deck.cards.every(card => card.references.every(ref => ref.book === "Mateus")), `${id} mantém fatos exclusivos em Mateus`);
  assert.deepEqual(catalog.byId[id].fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}
const maoRessequida = catalog.byId["nt2-marcos-mao-ressequida"];
assert.equal(maoRessequida.deck.maxPlayers, 5);
assert.equal(maoRessequida.deck.cards.length, 12);
assert.ok(maoRessequida.deck.cards.slice(9).every(card => card.references.every(ref => ref.book === "Mateus")), "os três fatos consolidados permanecem exclusivos de Mateus");
assert.ok(maoRessequida.deck.cards.slice(0, 9).filter(card => ["P02", "P04", "P08"].includes(card.id)).every(card => card.references.some(ref => ref.book === "Marcos") && card.references.some(ref => ref.book === "Mateus")), "fatos comuns preservam ambas as proveniências");

const auditoriaMateus072 = {
  "nt2-mateus-crianca-maior-tropecos": 5,
  "nt2-mateus-pequeninos-ovelha-desgarrada": 4,
  "nt2-mateus-irmao-testemunhas-igreja-acordo": 6,
  "nt2-mateus-servo-divida-perdao": 10
};
for (const [id, maxPlayers] of Object.entries(auditoriaMateus072)) {
  const entry = catalog.byId[id];
  assert.equal(entry.status.playable, true);
  assert.equal(entry.deck.maxPlayers, maxPlayers);
  assert.ok(entry.deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && /^18\./.test(ref.passage))), `${id} permanece restrita a Mateus 18`);
  assert.deepEqual(entry.fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}

const auditoriaMateus073 = {
  "nt2-mateus-divorcio-eunucos": 10,
  "nt2-mateus-jovem-rico-recompensa": 12,
  "nt2-mateus-trabalhadores-vinha": 12,
  "nt2-mateus-calice-servico-resgate": 12
};
for (const [id, maxPlayers] of Object.entries(auditoriaMateus073)) {
  const entry = catalog.byId[id];
  assert.equal(entry.status.playable, true);
  assert.equal(entry.deck.maxPlayers, maxPlayers);
  assert.ok(entry.deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && /^(?:19|20)\./.test(ref.passage))), `${id} permanece restrita a Mateus 19–20`);
  assert.deepEqual(entry.fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}

const auditoriaMateus074 = {
  "nt2-mateus-criancas-maos-oracao": 4,
  "nt2-mateus-dois-cegos-jerico": 7
};
for (const [id, maxPlayers] of Object.entries(auditoriaMateus074)) {
  const entry = catalog.byId[id];
  assert.equal(entry.status.playable, true);
  assert.equal(entry.deck.maxPlayers, maxPlayers);
  assert.ok(entry.deck.cards.every(card => card.references.every(ref => ref.book === "Mateus" && /^(?:19|20)\./.test(ref.passage))), `${id} usa somente a unidade própria de Mateus`);
  assert.deepEqual(entry.fields.map(field => field.pontosBase), [8, 5, 3, 2]);
}
assert.equal(catalog.byId["nt2-mateus-dois-cegos-jerico"].deck.cards.some(card => /Bartimeu/i.test(card.text)), false, "a pauta de Mateus não identifica os cegos com Bartimeu");

const auditadasSete = ["nt2-mateus-mulher-cananeia", "nt2-marcos-levi", "nt2-marcos-envio-doze", "nt2-marcos-surdo-decapolis", "nt2-marcos-cego-betsaida", "nt2-marcos-oferta-viuva", "nt2-lucas-marta-maria", "nt2-lucas-mulher-encurvada", "nt2-lucas-hidropico", "nt2-lucas-moeda-perdida", "nt2-lucas-dez-leprosos"];
assert.ok(auditadasSete.every(id => catalog.byId[id].status.playable && catalog.byId[id].deck.maxPlayers === 3));

assert.ok(catalog.byId["nt2-apocalipse-trono-cordeiro"].status.playable);
assert.ok(catalog.byId["nt2-apocalipse-mulher-dragao"].status.playable);
assert.ok(catalog.byId["nt2-apocalipse-nova-jerusalem"].status.playable);
const curtasJoao = catalog.order.map(id => catalog.byId[id]).filter(entry => entry.canon.book === "João" && entry.deck.cards.length === 13);
assert.equal(curtasJoao.length, 8);
assert.ok(curtasJoao.every(entry => entry.status.editoriallyEligible && entry.status.playable && entry.deck.maxPlayers === 6));
const pistaAt837 = catalog.byId["nt2-atos-filipe-eunuco"].deck.cards.find(card => card.references.some(reference => reference.passage === "8.37"));
assert.match(pistaAt837.text, /manuscritos mais recentes/, "At 8.37 exige ressalva textual explícita");
assert.equal(catalog.byId["nt2-atos-filipe-eunuco"].fields.some(field => field.answerReferences.some(reference => reference.passage === "8.37")), false, "a variante não determina gabarito");
assert.equal(catalog.order.some(id => /^nt-\d{3}$/.test(id)), false, "IDs descartados não voltam ao catálogo");
catalog.order.forEach(id => {
  const entry = catalog.byId[id];
  const expectedEditorial = entry.review.structural === "approved" && entry.review.biblical === "approved" && entry.review.editorial === "approved" && entry.review.ambiguities.length === 0;
  const expectedMaxPlayers = Math.min(12, Math.floor((entry.deck.cards.length - 1) / 2));
  const expectedPlayable = expectedEditorial && expectedMaxPlayers >= 2;
  assert.equal(entry.status.editoriallyEligible, expectedEditorial);
  assert.equal(entry.status.playable, expectedPlayable);
  assert.equal(entry.deck.maxPlayers, expectedMaxPlayers);
  assert.equal(entry.deck.status, expectedPlayable ? "ready" : "blocked");
  assert.equal(entry.fields.length, 4);
  assert.deepEqual(entry.fields.map(field => field.pontosBase), [8, 5, 3, 2]);
  assert.ok(entry.fields.every(field => field.respostaCanonica && field.enderecoNAA && field.answerReferences.length));
  assert.ok(entry.reveal.canonicalSummary && entry.reveal.hinge && entry.reveal.references.length);
  assert.ok(entry.deck.cards.length >= 5);
});

const ref = { book: "Mateus", passage: "1.1", edition: "NAA", sourceId: "fonte-identificada", checkedAt: "2026-09-12" };
const fields = ["C1", "C2", "C3", "C4"].map((id, fieldIndex) => ({
  id, label: `Campo ${id}`,
  options: [1, 2, 3, 4].map(number => ({ id: `${id}-O${number}`, text: `Opção ${fieldIndex}-${number}` })),
  answerId: `${id}-O1`, answerReferences: [ref]
}));
const cards = Array.from({ length: 25 }, (_, index) => ({ id: `P${index + 1}`, text: `Fato ${index + 1}`, importance: index < 12 ? "essential" : "relevant", relatedFields: [`C${index % 4 + 1}`], recommendedMoment: "any", narrativeFunction: "Apoiar dedução", earlyRevealRisk: "low", twoPlayerSuitable: true, specialExpensive: false, documentScope: "single", references: [ref] }));
const valid = { schemaVersion: 2, catalogVersion: "teste", namespace: "mosaico-nt-naa-v2", edition: "Nova Almeida Atualizada (NAA)", scope: "Novo Testamento (27 livros)", cases: [{ id: "nt2-teste", title: "Teste estrutural não editorial", generalReferences: [ref], question: "Pergunta pronta?", natures: { supported: ["QUEM", "O QUÊ", "ONDE", "COMO"], unsupported: ["QUANTO", "QUANDO", "QUANTAS VEZES", "POR QUÊ", "QUAL/QUE TIPO"] }, focalFieldId: "C3", focalJustification: "Justificativa de teste", fields, cards, reveal: { canonicalSummary: "Síntese", hinge: "Dente", references: [ref] }, review: { structural: "approved", biblical: "approved", editorial: "approved", ambiguities: [] } }] };
assert.deepEqual(validateBank(structuredClone(valid)), []);
const derived = structuredClone(valid); validateBank(derived);
assert.equal(derived.cases[0].__derived.playable, true);
assert.deepEqual(derived.cases[0].__derived.fieldOrder, ["C3", "C1", "C2", "C4"]);
assert.deepEqual(derived.cases[0].__derived.points, [8, 5, 3, 2]);
const shortDeck = structuredClone(valid);
shortDeck.cases[0].cards = shortDeck.cases[0].cards.slice(0, 13);
assert.deepEqual(validateBank(shortDeck), []);
assert.equal(shortDeck.cases[0].__derived.playable, true);
assert.equal(shortDeck.cases[0].__derived.maxPlayers, 6);
assert.deepEqual(shortDeck.cases[0].__derived.blockers, []);
const tooShort = structuredClone(valid);
tooShort.cases[0].cards = tooShort.cases[0].cards.slice(0, 4);
assert.ok(validateBank(tooShort).some(error => error.includes("capacidade mínima")));

const duplicate = structuredClone(valid);
duplicate.cases[0].fields[0].options[1].text = duplicate.cases[0].fields[0].options[0].text;
assert.ok(validateBank(duplicate).some(error => error.includes("alternativas distintas")));
const ambiguous = structuredClone(valid);
ambiguous.cases[0].review.ambiguities.push("harmonização discutível");
validateBank(ambiguous);
assert.equal(ambiguous.cases[0].__derived.playable, false);
const wrongEdition = structuredClone(valid);
wrongEdition.cases[0].fields[0].answerReferences[0].edition = "ARA";
assert.ok(validateBank(wrongEdition).some(error => error.includes("não é NAA")));

console.log("Banco NT/NAA v2 e bloqueios negativos validados sem meta numérica.");

// Integração global: cada pauta elegível comporta mãos de duas cartas e poço em 2–12.
const regras = require("../game-core.js");
for (const id of catalog.order.filter(caseId => catalog.byId[caseId].status.playable)) {
  const entry = catalog.byId[id];
  assert.equal(entry.fields.length, 4);
  assert.ok(entry.reveal.canonicalSummary && entry.reveal.hinge && entry.reveal.references.length);
  for (let quantidade = 2; quantidade <= entry.deck.maxPlayers; quantidade += 1) {
    const jogadores = Array.from({ length: quantidade }, (_, index) => `j${index}`);
    const ids = entry.deck.cards.map(card => card.id);
    const essenciais = entry.deck.cards.filter(card => card.importance === "essential").map(card => card.id);
    const distribuicao = regras.distribuirPistas(ids, essenciais, jogadores, items => items.slice());
    assert.ok(jogadores.every(jogador => distribuicao.maosPorJogador[jogador].length === 2), `${id}: mão inválida para ${quantidade}`);
    assert.equal(distribuicao.monte.length, ids.length - quantidade * 2, `${id}: poço inválido para ${quantidade}`);
  }
  if (entry.deck.maxPlayers < 12) {
    const jogadores = Array.from({ length: entry.deck.maxPlayers + 1 }, (_, index) => `j${index}`);
    assert.throws(() => regras.distribuirPistas(entry.deck.cards.map(card => card.id), [], jogadores, items => items.slice()), /duas cartas por jogador/);
  }
}
