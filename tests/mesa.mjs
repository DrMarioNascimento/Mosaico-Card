import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
const require = createRequire(import.meta.url), C = require('../mesa-core.js');
let serial = 0;
function modelo(file, key) { const ctx = { window: {} }; vm.runInNewContext(readFileSync(new URL(file, import.meta.url), 'utf8'), ctx); return ctx.window.MC_CASOS[key]; }
for (const [edicao, arquivo, key, rules] of [
  ['Cinema','../filmes-e-series/case-pipoca.js','pipoca',require('../filmes-e-series/game-core.js')],
  ['NT','../case-ovelha.js','ovelha',require('../game-core.js')]
]) {
 const m = modelo(arquivo,key);
 function sala(n=4, modalidade='maratonar', training=false) {
   const jogadores = Array.from({length:n},(_,i)=>({id:'p'+i,nome:'Pessoa '+i,pronto:true}));
   const d = Object.assign({mestre:'p0',jogadores,ativa:true,fase:'deal',presencas:{}}, C.treino(m,jogadores,{modalidade,tempoPorJogada:45,duracao:'padrao'},1000,'partida'));
   jogadores.forEach(j => d.presencas[j.id] = {aba:j.id,ate:1e9,visto:1000});
   if (!training) { d.snap.treino=false; d.snap.demo=false; d.snap.turnoTerminaEm=46000; }
   return d;
 }
 function cmd(d,id,tipo,extra={},now=2000) { return {c:{tipo,id:'cmd'+(++serial),partidaId:d.snap.partidaId,turnoId:d.snap.turnoId,...extra},ctx:{uid:id,aba:id,agora:now}}; }
 function apply(d,id,tipo,extra={},now=2000) { const {c,ctx}=cmd(d,id,tipo,extra,now); return C.executar(d,c,ctx,rules); }
 // 2–12 pessoas: exatamente duas rodadas, cada pessoa participa duas vezes, uma única especial, sem ranking.
 for (let n=2;n<=12;n++) for (const modalidade of ['classica','maratonar']) {
   let d=sala(n,modalidade,true), jogadas=0;
   while (d.snap.fase==='deal' && jogadas<100) {
     const grupo=C.grupo(d.snap,d.ordem);
     for (const id of grupo) {
       if (id.startsWith('treino-bot')) d=apply(d,'p0','bot',{jogador:id});
       else { const acao=C.acaoTreino(d.snap,d.ordem,id); d=apply(d,id,acao.tipo,acao); }
       jogadas++;
     }
   }
   assert.equal(d.snap.fase,'treino-fim',`${n} ${modalidade}`);
   assert.equal(jogadas,Math.max(4,n)*2);
   assert.equal(Object.keys(d.snap.pagas).length,1);
   assert.equal(d.snap.saldosPorJogador.p0,14);
   assert.equal(d.snap.ranking.length,0);
   assert.equal(d.snap.ledger.length,1);
 }
 // Maratonar: acertar simultaneamente não depende de quem enviou primeiro.
 let d=sala(), campo=d.snap.campos[0];
 d=apply(d,'p1','arriscar',{campo:campo.id,valor:campo.resposta});
 assert.equal(d.snap.ledger.length,0); assert.equal(d.snap.vez,0);
 d=apply(d,'p0','arriscar',{campo:campo.id,valor:campo.resposta});
 assert.equal(d.snap.ledger.length,2); assert.equal(d.snap.ledger[0].pontos,d.snap.ledger[1].pontos);
 assert.equal(d.snap.vez,2); assert.equal(d.snap.saldosPorJogador.p0,12);
 assert.throws(()=>apply(d,'p0','comprar',{carta:d.snap.monte[0]}),/Aguarde/);
 // Captura concorrente: conserva a carta, cobra só um, permite outra ação sem reaplicar a primeira.
 d=sala(); const alvo=d.snap.maosPorJogador.p2[0];
 d=apply(d,'p1','capturar',{alvo:'p2',carta:alvo}); d=apply(d,'p0','capturar',{alvo:'p2',carta:alvo});
 assert.equal(d.snap.saldosPorJogador.p0,10); assert.equal(d.snap.saldosPorJogador.p1,12);
 assert.equal(Object.values(d.snap.maosPorJogador).flat().filter(id=>id===alvo).length,1);
 d=apply(d,'p1','comprar',{carta:d.snap.monte[0]});
 assert.equal(d.snap.saldosPorJogador.p0,10); assert.equal(d.snap.saldosPorJogador.p1,8); assert.equal(d.snap.vez,2);
 // Dois cliques no mesmo verso não duplicam a carta.
 d=sala(); const pid=d.snap.monte[0]; d=apply(d,'p0','comprar',{carta:pid}); d=apply(d,'p1','comprar',{carta:pid});
 assert.equal(d.snap.saldosPorJogador.p0,8); assert.equal(d.snap.saldosPorJogador.p1,8);
 assert.equal(new Set(Object.values(d.snap.maosPorJogador).flat()).size,10);
 // Refresh depois do commit mas antes da resposta: recibo idempotente, sem nova cobrança nem bônus.
 d=sala(2,'classica'); d.snap.monte.unshift('TBONUS');
 const r=cmd(d,'p0','comprar',{carta:'TBONUS'}); d=C.executar(d,r.c,r.ctx,rules);
 const salvo=C.clone(d); d=C.executar(d,r.c,r.ctx,rules); assert.deepEqual(d,salvo); assert.equal(d.snap.saldosPorJogador.p0,18);
 // Aba antiga, nova identidade e nova partida não podem reutilizar uma ação.
 assert.throws(()=>C.executar(d,{...r.c,id:'novo'},{...r.ctx,aba:'outra'},rules),/aba|sessão/);
 assert.throws(()=>C.executar(d,{...r.c,id:'novo'},{...r.ctx,uid:'intruso'},rules),/identidade/);
 assert.throws(()=>C.executar(d,{...r.c,id:'novo',partidaId:'anterior'},r.ctx,rules),/terminou/);
 d.jogadores[1].authUid='novo-uid'; assert.equal(C.participante(d,'novo-uid').id,'p1'); assert.equal(C.participante(d,'p1'),undefined);
 // Controle do mestre: pausa conserva relógios e acréscimo funciona durante pausa.
 d=sala(); d=apply(d,'p0','pausar'); assert.equal(d.snap.pausado,true);
 assert.throws(()=>apply(d,'p1','pausar'),/mestre/);
 d=apply(d,'p0','tempo'); d=apply(d,'p0','pausar',{},10000); assert.equal(d.snap.turnoTerminaEm,99000);
 // Fechamento salva no mesmo estado canônico; não perde respostas em reload ou corrida com apuração.
 d=apply(d,'p0','encerrar',{},10000);
 d=apply(d,'p1','final',{respostas:{[campo.id]:campo.resposta}},11000);
 assert.equal(d.snap.respostasFinais.p1[campo.id],campo.resposta);
 assert.throws(()=>apply(d,'p1','final',{respostas:{}},70001),/terminou/);
 d=apply(d,'p0','relogio',{},70001); assert.equal(d.fase,'judge'); assert.ok(d.snap.ledger.some(e=>e.jogadorId==='p1'));
 // Número ímpar: todos têm uma vez por rodada, e o participante que joga sozinho alterna.
 d=sala(5); const solos=[];
 for(let ciclo=0;ciclo<5;ciclo++) { const ids=[]; for(let pos=0;pos<5;pos+=2) { d.snap.vez=ciclo*5+pos; const g=C.grupo(d.snap,d.ordem); ids.push(...g); if(g.length===1)solos.push(g[0]); } assert.equal(new Set(ids).size,5); }
 assert.equal(new Set(solos).size,5);
 console.log('ok mesa transacional, treino 2–12 e Maratonar — '+edicao);
}
