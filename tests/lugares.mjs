import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createRequire} from 'node:module';
import vm from 'node:vm';
import {JSDOM} from 'jsdom';
const require=createRequire(import.meta.url),R=require('../game-core.js');
const banco=JSON.parse(readFileSync(new URL('../lugares/data/lugares-bank.json',import.meta.url)));
const plano=JSON.parse(readFileSync(new URL('../lugares/data/plano-expansao.json',import.meta.url)));
for(const grupo of ['brasil','america','europa','africa','asia','oceania','antartida'])assert.equal(plano.metasPorRecorte[grupo],30);
for(const regiao of ['norte','nordeste','centro-oeste','sudeste','sul'])assert.equal(plano.minimoPorRegiaoBrasileira[regiao],30);
const metasDoc=readFileSync(new URL('../lugares/docs/METAS-POR-RECORTE.md',import.meta.url),'utf8');
for(const [titulo,chave,alvo] of [['Brasil','brasil',30],['América','america',30],['Europa','europa',30],['África','africa',30],['Ásia','asia',30],['Oceania','oceania',30],['Antártida','antartida',30],['Norte','norte',30],['Nordeste','nordeste',30],['Centro-Oeste','centro-oeste',30],['Sudeste','sudeste',30],['Sul','sul',30]]) {
 const n=banco.cases.filter(c=>chave==='brasil'?c.geography.countries.includes('BR'):c.geography.continents.includes(chave)||c.geography.brazilRegions.includes(chave)).length;
 assert.ok(metasDoc.includes(`| ${titulo} | ${n} | ${alvo} | ${Math.max(0,alvo-n)} |`),`Contagem desatualizada em ${titulo}`);
}
const ctx={localStorage:{getItem:()=>{throw Error('blocked');},setItem:()=>{throw Error('blocked');}}};
for(const f of ['sessao.js','cases-lugares.js','bank-runtime.js'])vm.runInNewContext(readFileSync(new URL('../lugares/'+f,import.meta.url),'utf8'),ctx);
const B=ctx.MC_LUGARES_BANK,S=ctx.MC_SESSAO;
assert.equal(banco.cases.length,85);assert.equal(B.order.length,170);assert.equal(B.summary.clues,4250);
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
  for(const f of converted.fields){assert.ok(f.id==='C1'?f.opcoes.length>=8:f.opcoes.length===4, `Quantidade inválida em ${c.placeId}/${f.id}`);assert.equal(new Set(f.opcoes.map(o=>o.id)).size,f.opcoes.length);assert.equal(new Set(f.opcoes.map(o=>norm(o.texto))).size,f.opcoes.length);assert.equal(f.opcoes.filter(o=>o.id===f.respostaId&&o.texto===f.respostaCanonica).length,1);}
  for(let n=2;n<=12;n++)assert.ok(R.casoCompativelComMesa(converted,n));
  for(const n of [0,1,13,2.5])assert.ok(!R.casoCompativelComMesa(converted,n));
 }
}
for(const perfil of ['viajante','geografo']){
 const select=t=>B.elegiveis(12,{perfil,territorios:t});
 assert.equal(select(['todos']).length,85);assert.equal(select(['brasil']).length,32);assert.equal(select(['america']).length,37);
 assert.deepEqual(select(['brasil','america']),select(['america']));assert.equal(new Set(select(['america','oceania'])).size,select(['america','oceania']).length);assert.equal(select(['brasil','europa']).length,40);
 assert.equal(select(['centro-oeste']).length,7);assert.equal(select(['norte']).length,6);assert.equal(select(['sudeste']).length,6);assert.equal(select(['asia']).length,10);assert.equal(select(['antartida']).length,11);assert.equal(select(['europa']).length,8);assert.equal(select(['africa']).length,11);assert.equal(select(['oceania']).length,9);assert.equal(select([]).length,0);assert.equal(select(['sul','nordeste']).length,13);
 const sequence=Array.from({length:85},()=>B.sortear(12,{perfil,territorios:['todos']}).caso.placeId);assert.equal(new Set(sequence).size,85,'Saco sem repetição, mesmo sem localStorage');
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
dom.window.close();console.log('ok Lugares: 4.250 pistas, gabaritos, fontes, capacidade 2–12, filtros, perfis, sorteio sem persistência e recursos locais');
