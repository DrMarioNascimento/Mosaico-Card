import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { initializeTestEnvironment, assertFails, assertSucceeds } from '@firebase/rules-unit-testing';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { abrir, click, fill, jogar, flush } from './mesa-dom.mjs';
firebase.firestore.setLogLevel('silent');
const ate=async teste=>{for(let n=0;n<750&&!teste();n++)await new Promise(r=>setTimeout(r,20));assert.ok(teste(),'O Firebase não confirmou a operação');};
const env=await initializeTestEnvironment({projectId:'demo-mosaico-qa',firestore:{host:'127.0.0.1',port:8085,rules:readFileSync(new URL('../firestore.rules',import.meta.url),'utf8')}});
const apps=[];
try {
 await env.clearFirestore();
 await env.withSecurityRulesDisabled(async c=>c.firestore().doc('config/mestres').set({emails:['mestre@example.test']}));
 const master=env.authenticatedContext('mestre',{email:'mestre@example.test',email_verified:true}).firestore();
 const player=env.authenticatedContext('pessoa').firestore(),other=env.authenticatedContext('intruso').firestore(),anon=env.unauthenticatedContext().firestore();
 const room={schemaVersion:3,autoridade:'mestre',codigo:'RULES1',mestre:'mestre',criado:firebase.firestore.FieldValue.serverTimestamp(),fase:'lobby',ativa:true,config:{modalidade:'maratonar'},jogadores:[{id:'mestre',nome:'Mestre',forma:'n',pronto:true}],ordem:['mestre'],vinculos:{mestre:'mestre'},presencas:{},snap:null,pautaId:null};
 for(const col of ['salas','salas-cinema']){
  const path=col+'/RULES1';
  await assertFails(player.doc(path).set(room));
  await assertSucceeds(master.doc(path).set(room));
  await assertFails(anon.doc(path).get());await assertFails(player.collection(col).get());
  await assertFails(player.doc(path).update({config:{modalidade:'classica'}}));
  await assertFails(player.doc(path).update({snap:{protocolo:3,fase:'deal'},fase:'deal'}));
  await assertFails(player.doc(path).update({vinculos:{mestre:'mestre',pessoa:'mestre'}}));
  await assertFails(master.doc(path).update({mestre:'pessoa'}));
  await assertFails(master.doc(path).update({schemaVersion:2}));
  await assertFails(master.doc(path).update({autoridade:'livre'}));
  await assertFails(master.doc(path).update({fase:'invalida'}));
  await assertFails(master.doc(path).update({campoNovo:true}));
  await master.doc(path).update({jogadores:[...room.jogadores,{id:'pessoa',nome:'Ana',forma:'n',pronto:true}],ordem:['mestre','pessoa'],vinculos:{mestre:'mestre',pessoa:'pessoa'}});
  const visto=Date.now(),p={aba:'aba-pessoa',visto,ate:visto+30000};
  await assertSucceeds(player.doc(path).update({presencas:{pessoa:p}}));
  // Um UID pode conter ponto: somente sua presença deve ser alterada, sem afetar a de outro jogador.
  const uidPontuado='pessoa.com.ponto', jogadorPontuado=env.authenticatedContext(uidPontuado).firestore();
  await master.doc(path).update({vinculos:{mestre:'mestre',pessoa:'pessoa',[uidPontuado]:uidPontuado}});
  await assertSucceeds(jogadorPontuado.doc(path).update(new firebase.firestore.FieldPath('presencas',uidPontuado),p));
  assert.ok((await master.doc(path).get()).data().presencas.pessoa);
  await assertFails(jogadorPontuado.doc(path).update(new firebase.firestore.FieldPath('presencas','pessoa'),{...p,aba:'tentativa-de-alteracao'}));
  await assertSucceeds(player.doc(path+'/pulsos/pessoa').set(p));
  await assertFails(other.doc(path+'/pulsos/pessoa').set(p));
  await assertFails(other.doc(path+'/pulsos/pessoa').get());
  await assertFails(player.doc(path+'/pulsos/pessoa').set({...p,aba:'aba-inativa'}));
  await assertFails(player.collection(path+'/pulsos').get());
  await assertSucceeds(master.collection(path+'/pulsos').get());
  await assertFails(player.doc(path).update({'presencas.mestre':p}));
  await assertFails(other.doc(path).update({'presencas.pessoa':p}));
  await assertFails(player.doc(path).update({'presencas.pessoa':{...p,ate:visto+999999}}));
  await assertFails(player.doc(path).update({'presencas.pessoa':{...p,aba:'x'.repeat(101)}}));
  const pedido={uid:'pessoa',id:'acao-1',tipo:'acao',aba:'aba-pessoa',payload:'{}',criado:firebase.firestore.FieldValue.serverTimestamp()};
  await assertSucceeds(player.doc(path+'/pedidos/pessoa').set(pedido));
  await assertFails(other.doc(path+'/pedidos/pessoa').get());
  await assertFails(other.doc(path+'/pedidos/pessoa').set(pedido));
  await assertFails(player.collection(path+'/pedidos').get());
  await assertSucceeds(master.collection(path+'/pedidos').get());
  await assertFails(player.doc(path+'/pedidos/pessoa').set({...pedido,resultado:{ok:true,erro:''}}));
  await assertFails(player.doc(path+'/pedidos/pessoa').set({...pedido,payload:'x'.repeat(4097)}));
  await assertFails(player.doc(path+'/pedidos/pessoa').set({...pedido,tipo:'mestre'}));
  await assertFails(player.doc(path+'/pedidos/pessoa').set({...pedido,criado:firebase.firestore.Timestamp.fromMillis(1)}));
  await assertFails(player.doc(col+'/ORFAO1/pedidos/pessoa').set(pedido));
  await assertFails(player.doc(path+'/respostasFinais/pessoa').set({jogadorId:'pessoa',respostas:{}}));
  await assertFails(player.doc(path).delete());
 }
 await assertSucceeds(master.doc('config/mestres').get());
 await assertFails(player.doc('config/mestres').get());
 await assertFails(player.doc('config/mestres').set({emails:['pessoa@example.test']}));
 console.log('ok regras reais: papéis, presença, pedidos privados, limites, campos imutáveis e isolamento');
 // Scripts reais das três edições, quatro clientes independentes, SDK Firestore real contra o emulador.
 // O SDK roda no realm Node; converte somente objetos literais vindos do JSDOM.
 const normal=x=>Array.isArray(x)?Array.from(x,normal):x&&x.constructor?.name==='Object'?Object.fromEntries(Object.entries(x).map(([k,v])=>[k,normal(v)])):x;
 const bridge=(db,uid)=>{
  const ref=r=>({_ref:r,get:()=>r.get(),set:d=>r.set(normal(d)),update:d=>r.update(normal(d)),onSnapshot:(...a)=>r.onSnapshot(...a),collection:n=>col(r.collection(n))});
  const col=c=>({doc:id=>ref(c.doc(id)),onSnapshot:(...a)=>c.onSnapshot(...a)});
  return {doc:p=>ref(db.doc(p)),collection:n=>col(db.collection(n)),runTransaction:fn=>{
   let antes=null, escrito=null;
   return db.runTransaction(tx=>fn({get:async r=>{const snap=await tx.get(r._ref);if(snap.exists&&snap.data().codigo)antes=JSON.parse(JSON.stringify(snap.data()));return snap;},set:(r,d)=>{if(d.codigo)escrito=JSON.parse(JSON.stringify(d));return tx.set(r._ref,normal(d));},update:(r,...args)=>{if(args[0]?.presencas)escrito={presencas:JSON.parse(JSON.stringify(args[0].presencas))};if(args.length===2&&args[0] instanceof firebase.firestore.FieldPath)escrito={presencas:{[uid]:JSON.parse(JSON.stringify(args[1]))}};return tx.update(r._ref,...args.map(normal));}})).catch(e=>{
    console.error('TRANSACTION',uid,e.message,JSON.stringify({fase:antes?.fase,ativa:antes?.ativa,vinculo:antes?.vinculos?.[uid],antes:Object.keys(antes?.presencas||{}),depois:Object.keys(escrito?.presencas||{}),presenca:escrito?.presencas?.[antes?.vinculos?.[uid]]}));throw e;
   });
  }};
 };
 const contexts=new Map();
 const server={FieldPath:firebase.firestore.FieldPath,get agora(){return Date.now();},serverTimestamp:()=>firebase.firestore.FieldValue.serverTimestamp(),db(uid){if(!contexts.has(uid))contexts.set(uid,bridge(env.authenticatedContext(uid,uid==='mestre'?{email:'mestre@example.test',email_verified:true}:{}).firestore(),uid));return contexts.get(uid);}};
 for(const edicao of ['cinema','nt','lugares']){
  let m=await abrir(server,edicao,'mestre',{google:true});apps.push(m);
  await ate(()=>m.w.MC_FB.ready);await new Promise(r=>setTimeout(r,100));
  click(m,'#btn-abrir-mesa');await ate(()=>!m.w.document.querySelector('#modal-mestre').hidden);
  m.w.document.querySelector('[name=modalidade][value=maratonar]').checked=true;
  click(m,'#btn-abrir-com-mesa');await ate(()=>m.w.MC_SALA.codigo || m.w.document.querySelector('#mestre-status').textContent);assert.ok(m.w.MC_SALA.codigo,m.w.document.querySelector('#mestre-status').textContent);
  fill(m,'#nome','Mestre de teste');click(m,'#btn-entrar-mesa');await ate(()=>m.w.document.querySelector('.scene.active').id==='lobby');
  const codigo=m.w.MC_SALA.codigo,players=[];
  for(let i=1;i<=3;i++){
   const p=await abrir(server,edicao,'jogador'+i);apps.push(p);players.push(p);await ate(()=>p.w.MC_FB.ready);
   click(p,'#btn-ir-entrar');fill(p,'#nome','Jogador '+i);fill(p,'#cod',codigo);click(p,'#btn-entrar-mesa');await ate(()=>p.w.document.querySelector('.scene.active').id==='lobby');
  }
  await ate(()=>m.w.MC_SALA.jogadores.length===4);
  click(m,'#btn-treino');await ate(()=>players.every(p=>p.w.MC_GAME_ENGINE.state.treino));
  const participantes=[m,...players];
  if(edicao==='cinema'){
   // Supera a reserva de 30 s: pulsos individuais e uma publicação do mestre mantêm a sala ativa.
   await new Promise(r=>setTimeout(r,35000));
   assert.equal(m.w.MC_GAME_ENGINE.state.pausado,false);
   assert.ok(m.w.MC_SALA.ultimoDoc.presencas.jogador3.ate>Date.now());
  }
  for(let rodada=0;rodada<2;rodada++)for(const app of participantes){
   await ate(()=>app.w.MC_MESA.suaVez() && app.w.MC_GAME_ENGINE.state.revisao===m.w.MC_GAME_ENGINE.state.revisao);const rev=app.w.MC_GAME_ENGINE.state.revisao;await jogar(app);
   try { await ate(()=>m.w.MC_GAME_ENGINE.state.revisao>rev); }
   catch (e) { console.error('Demonstração sem avanço', {edicao,rodada,jogador:app.w.MC_SALA.playerId,rev,fase:app.w.MC_GAME_ENGINE.state.fase});throw e; }
   const confirmada=m.w.MC_GAME_ENGINE.state.revisao;
   await ate(()=>participantes.every(p=>p.w.MC_GAME_ENGINE.state.revisao>=confirmada));
  }
  // O treino livre atual termina em fechamento e placar, antes de retornar ao lobby.
  await ate(()=>participantes.every(a=>a.w.document.querySelector('.scene.active').id==='fechamento'));
  assert.equal(Object.keys(m.w.MC_GAME_ENGINE.state.pagas).length,1);
  for(const app of participantes){click(app,'#fechamento-concluir');await ate(()=>app.w.MC_GAME_ENGINE.state.finaisProntos?.[app.w.MC_SALA.playerId]||app.w.MC_GAME_ENGINE.state.fase==='judge');}
  await ate(()=>participantes.every(a=>a.w.document.querySelector('.scene.active').id==='judge'));
  assert.equal(m.w.MC_GAME_ENGINE.state.ranking.length,4);
  click(m,'#voltar-demonstracao');await ate(()=>players.every(p=>p.w.MC_SALA.fase==='lobby'));
  click(m,'#btn-iniciar-partida');await ate(()=>players.every(p=>p.w.MC_GAME_ENGINE.state.treino===false&&p.w.MC_GAME_ENGINE.state.fase==='deal'));
  assert.equal(players[0].w.MC_GAME_ENGINE.state.saldosPorJogador.jogador1,12);
  const partida=m.w.MC_GAME_ENGINE.state.partidaId,save=players[0].save(),mao=JSON.stringify(players[0].w.MC_GAME_ENGINE.state.maosPorJogador.jogador1);
  players[0].close();players[0]=await abrir(server,edicao,'jogador1',save);apps.push(players[0]);await ate(()=>players[0].w.MC_GAME_ENGINE.state.partidaId===partida);
  assert.equal(JSON.stringify(players[0].w.MC_GAME_ENGINE.state.maosPorJogador.jogador1),mao);
  click(m,'#btn-pausar');await ate(()=>players[0].w.MC_GAME_ENGINE.state.pausado);
  m.w.MC_SALA.pintar();click(m,'[data-recuperar="jogador1"]');await ate(()=>!m.w.document.querySelector('#recuperacao-codigo').hidden);
  const token=m.w.document.querySelector('#recuperacao-codigo').textContent.split('uma vez: ')[1];
  const recuperado=await abrir(server,edicao,'recuperado');apps.push(recuperado);await ate(()=>recuperado.w.MC_FB.ready);click(recuperado,'#btn-recuperar');fill(recuperado,'#recuperar-token',token);click(recuperado,'#recuperar-enviar');await ate(()=>(recuperado.w.MC_SALA.playerId==='jogador1' && recuperado.w.MC_GAME_ENGINE.state.partidaId===partida)||recuperado.w.document.querySelector('#recuperar-erro').textContent);assert.equal(recuperado.w.document.querySelector('#recuperar-erro').textContent,'');
  assert.equal(JSON.stringify(recuperado.w.MC_GAME_ENGINE.state.maosPorJogador.jogador1),mao);
  const col=edicao==='nt'?'salas':'salas-cinema';
  await assertFails(server.db('jogador1').doc(col+'/'+codigo).update({'presencas.jogador1':{aba:'antiga',visto:Date.now(),ate:Date.now()+30000}}));
  const mSave=m.save();m.close();m=await abrir(server,edicao,'mestre',mSave);apps.push(m);await ate(()=>m.w.MC_GAME_ENGINE.state.partidaId===partida);assert.equal(m.w.MC_SALA.souMestre(),true);
  click(m,'#btn-pausar');await ate(()=>!recuperado.w.MC_GAME_ENGINE.state.pausado);
  click(m,'#btn-encerrar-fase');await ate(()=>recuperado.w.MC_GAME_ENGINE.state.fase==='fechamento');
  const campo=recuperado.w.MC_GAME_ENGINE.state.campos[0];
  click(recuperado,'[data-final-campo="'+campo.id+'"][data-final-valor="'+campo.resposta+'"]');
  await ate(()=>m.w.MC_GAME_ENGINE.state.respostasFinais.jogador1?.[campo.id]===campo.resposta);
  click(m,'#btn-encerrar-fase');await ate(()=>recuperado.w.MC_GAME_ENGINE.state.fase==='judge');
  assert.equal(recuperado.w.MC_GAME_ENGINE.state.ranking.length,4);
  assert.equal(recuperado.w.MC_GAME_ENGINE.state.saldosPorJogador.jogador1,12,'Fechamento não cobra ingressos');
  // Encerrar mantém o histórico e alinha a fase da sala e do snapshot na mesma transação.
  const antesEncerrar=(await master.doc(col+'/'+codigo).get()).data();
  click(m,'#btn-encerrar-sala');
  await ate(()=>!m.w.MC_SALA.codigo || m.w.document.querySelector('#sala-status').textContent.startsWith('Não foi possível'));
  assert.equal(m.w.MC_SALA.codigo,null,m.w.document.querySelector('#sala-status').textContent);
  const encerrada=(await master.doc(col+'/'+codigo).get()).data();
  assert.equal(encerrada.ativa,false);assert.equal(encerrada.fase,'encerrada');assert.equal(encerrada.snap.fase,'encerrada');
  assert.equal(encerrada.snap.partidaId,partida);assert.deepEqual(encerrada.snap.ranking,antesEncerrar.snap.ranking);
  assert.deepEqual(encerrada.snap.maosPorJogador,antesEncerrar.snap.maosPorJogador);
  await ate(()=>!recuperado.w.MC_SALA.codigo);
  for(const app of apps.splice(0))app.close();
  console.log('ok Firestore + DOM: 4 clientes, fim do treino pelo jogador, nova partida, refresh e recuperação — '+edicao);
 }
} finally {for(const app of apps)app.close();await env.cleanup();}
