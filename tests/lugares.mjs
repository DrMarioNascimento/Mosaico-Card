import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url),R=require('../game-core.js');
const banco=JSON.parse(readFileSync(new URL('../lugares/data/lugares-bank.json',import.meta.url)));
const plano=JSON.parse(readFileSync(new URL('../lugares/data/plano-expansao.json',import.meta.url)));
for(const grupo of ['brasil','america','europa','africa','asia','oceania','antartida'])assert.equal(plano.metasPorRecorte[grupo],30);
for(const regiao of ['norte','nordeste','centro-oeste','sudeste','sul'])assert.equal(plano.minimoPorRegiaoBrasileira[regiao],6);
const metasDoc=readFileSync(new URL('../lugares/docs/METAS-POR-RECORTE.md',import.meta.url),'utf8');
for(const [titulo,chave,alvo] of [['Brasil','brasil',30],['América','america',30],['Europa','europa',30],['África','africa',30],['Ásia','asia',30],['Oceania','oceania',30],['Antártida','antartida',30],['Norte','norte',6],['Nordeste','nordeste',6],['Centro-Oeste','centro-oeste',6],['Sudeste','sudeste',6],['Sul','sul',6]]) {
 const n=banco.cases.filter(c=>chave==='brasil'?c.geography.countries.includes('BR'):c.geography.continents.includes(chave)||c.geography.brazilRegions.includes(chave)).length;
 assert.ok(metasDoc.includes(`| ${titulo} | ${n} | ${alvo} | ${Math.max(0,alvo-n)} |`),`Contagem desatualizada em ${titulo}`);
}
const ctx={localStorage:{getItem:()=>{throw Error('blocked');},setItem:()=>{throw Error('blocked');}}};
for(const f of ['sessao.js','cases-lugares.js','bank-runtime.js'])vm.runInNewContext(readFileSync(new URL('../lugares/'+f,import.meta.url),'utf8'),ctx);
const B=ctx.MC_LUGARES_BANK,S=ctx.MC_SESSAO;
assert.equal(banco.cases.length,36);assert.equal(B.order.length,72);assert.equal(B.summary.clues,1800);
const norm=t=>t.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
for(const c of banco.cases){
 const v=B.byId[c.id+'-viajante'],g=B.byId[c.id+'-geografo'];assert.deepEqual(v.fields,g.fields);assert.equal(v.sessionTitle,'Destino em descoberta');
 for(const profile of ['viajante','geografo']){
  const converted=B.byId[c.id+'-'+profile];assert.equal(converted.deck.cards.length,25);assert.equal(converted.prompt.question,'Que lugar estamos tentando descobrir? Complete as quatro respostas com as pistas.');
  const ids=new Set(),texts=new Set();
  for(const clue of converted.deck.cards){
   assert.ok(!ids.has(clue.id));ids.add(clue.id);assert.ok(!texts.has(clue.text));texts.add(clue.text);
   assert.ok(clue.sources.length&&clue.sources.every(s=>banco.sources[s]?.url.startsWith('https://')));
   assert.ok(clue.relatedFields.length&&clue.relatedFields.every(id=>c.fields.some(f=>f.id===id)));
   for(const focal of [c.title,...c.aliases])assert.ok(!(' '+norm(clue.text)+' ').includes(' '+norm(focal)+' '),clue.id+' revela a resposta focal');
   if(['salvador','olinda','jericoacoara','cataratas-vitoria','sao-luis','havana','galapagos','petra'].includes(c.placeId))for(const focal of [c.title,...c.aliases])assert.ok(!norm(clue.text).includes(norm(focal)),clue.id+' revela o nome do destino');
  }
  for(const f of converted.fields){assert.equal(f.opcoes.length,f.id==='C1'?(['florianopolis','salvador','olinda','lencois-maranhenses','jericoacoara','iguacu','cataratas-vitoria','sao-luis','havana','galapagos','petra','porto','roma','manaus','rio-de-janeiro','belem','opera-sydney','uluru','kilimanjaro','pantanal-matogrossense','monte-erebus','angkor','deception','okavango','serengeti','chapada-veadeiros','ouro-preto','tongariro','ningaloo'].includes(c.placeId)?12:8):4);assert.equal(new Set(f.opcoes.map(o=>o.id)).size,f.opcoes.length);assert.equal(new Set(f.opcoes.map(o=>norm(o.texto))).size,f.opcoes.length);assert.equal(f.opcoes.filter(o=>o.id===f.respostaId&&o.texto===f.respostaCanonica).length,1);}
  for(let n=2;n<=12;n++)assert.ok(R.casoCompativelComMesa(converted,n));
  for(const n of [0,1,13,2.5])assert.ok(!R.casoCompativelComMesa(converted,n));
 }
}
for(const perfil of ['viajante','geografo']){
 const select=t=>B.elegiveis(12,{perfil,territorios:t});
 assert.equal(select(['todos']).length,36);assert.equal(select(['brasil']).length,14);assert.equal(select(['america']).length,17);
 assert.deepEqual(select(['brasil','america']),select(['america']));assert.equal(select(['brasil','europa']).length,17);
 assert.equal(select(['centro-oeste']).length,3);assert.equal(select(['norte']).length,2);assert.equal(select(['sudeste']).length,2);assert.equal(select(['asia']).length,3);assert.equal(select(['antartida']).length,3);assert.equal(select(['africa']).length,5);assert.equal(select(['oceania']).length,5);assert.equal(select([]).length,0);assert.equal(select(['sul','nordeste']).length,7);
 const sequence=Array.from({length:36},()=>B.sortear(12,{perfil,territorios:['todos']}).caso.placeId);assert.equal(new Set(sequence).size,36,'Saco sem repetição, mesmo sem localStorage');
 assert.ok(B.sortear(12,{perfil,territorios:[]}).erro);assert.ok(B.sortear(13,{perfil,territorios:['todos']}).erro);
}
const prev=B.sortear(4,{perfil:'viajante'}).caso.placeId;
assert.notEqual(B.sortear(4,{perfil:'geografo'}).caso.placeId,prev,'Troca de perfil conserva memória do lugar');
const html=readFileSync(new URL('../lugares/index.html',import.meta.url),'utf8');
const dom=new JSDOM(html,{url:'https://example.test/lugares/'}),doc=dom.window.document;
for(const el of doc.querySelectorAll('script[src],link[href]')){const target=el.getAttribute('src')||el.getAttribute('href');if(/^https:/.test(target))continue;assert.ok(existsSync(new URL('../lugares/'+target.split('?')[0],import.meta.url)),target);}
assert.equal(doc.querySelectorAll('#sessao-lugares [data-territorio]').length,13);
assert.ok(!/a partir de 2001|Cinema &|pipoca|ingressos/.test(doc.body.textContent));
assert.match(readFileSync(new URL('../index.html',import.meta.url),'utf8'),/href="lugares\/"/);
dom.window.close();console.log('ok Lugares: 1.800 pistas, gabaritos, fontes, capacidade 2–12, filtros, perfis, sorteio sem persistência e recursos locais');
