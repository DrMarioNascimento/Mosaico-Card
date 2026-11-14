import assert from 'node:assert/strict';
import { abrir, click, fill, jogar, flush, ate } from './mesa-dom.mjs';
const clone=x=>JSON.parse(JSON.stringify(x));
class Servidor {
 constructor(){this.docs=new Map([['config/mestres',{emails:['mestre@example.test']}]]);this.listeners=new Map();this.collectionListeners=new Map();this.fila=Promise.resolve();this.agora=Date.now();}
 ref(path){const server=this;return {path,collection:n=>server.collection(path+'/'+n),
 get:async()=>server.snap(path),set:async data=>server.gravar(path,data),update:async data=>server.gravar(path,{...server.docs.get(path),...data}),
 onSnapshot(fn){const conjunto=server.listeners.get(path)||new Set();conjunto.add(fn);server.listeners.set(path,conjunto);queueMicrotask(()=>fn(server.snap(path)));return()=>conjunto.delete(fn);}};}
 collection(path){const server=this;return {doc:id=>server.ref(path+'/'+id),onSnapshot(fn){const set=server.collectionListeners.get(path)||new Set();set.add(fn);server.collectionListeners.set(path,set);queueMicrotask(()=>fn(server.query(path)));return()=>set.delete(fn);}};}
 query(path){return {forEach:fn=>{for(const [p]of this.docs)if(p.startsWith(path+'/')&&!p.slice(path.length+1).includes('/'))fn({id:p.slice(path.length+1),...this.snap(p)});}};}
 snap(path){return {exists:this.docs.has(path),data:()=>clone(this.docs.get(path))};}
 gravar(path,data){this.docs.set(path,clone(data));for(const fn of this.listeners.get(path)||[])queueMicrotask(()=>fn(this.snap(path)));const col=path.slice(0,path.lastIndexOf('/'));for(const fn of this.collectionListeners.get(col)||[])queueMicrotask(()=>fn(this.query(col)));}
 db(){return {collection:n=>({doc:id=>this.ref(n+'/'+id)}),runTransaction:fn=>{const p=this.fila.then(async()=>{const writes=[];const out=await fn({get:async ref=>this.snap(ref.path),set:(ref,d)=>writes.push([ref.path,d]),update:(ref,d)=>writes.push([ref.path,{...this.docs.get(ref.path),...d}])});for(const [p,d]of writes)this.gravar(p,d);if(this.falharDepois){this.falharDepois=false;const e=new Error('Resposta de rede perdida');e.code='unavailable';throw e;}return out;});this.fila=p.catch(()=>{});return p;}};}
}
for(const [edicao, modo] of [['cinema'], ['nt', 'devocional'], ['nt', 'pastor'], ['lugares','viajante'], ['lugares','geografo']]){
 const server=new Servidor();let master=await abrir(server,edicao,'mestre',{google:true}),player=await abrir(server,edicao,'pessoa');
 assert.equal(master.auth.anonimos,0,'Refresh não substitui a identidade Google');
 click(master,'#btn-abrir-mesa');await flush();assert.equal(master.w.document.querySelector('#modal-mestre').hidden,false);
 fill(master,'[name=modalidade][value=maratonar]','maratonar');master.w.document.querySelector('[name=modalidade][value=maratonar]').checked=true;
 if(edicao==='nt'&&modo) click(master,'[name=modo-nt][value='+modo+']');
 if(edicao==='lugares') {const input=master.w.document.querySelector('[name=sessao-perfil][value='+modo+']');input.checked=true;input.dispatchEvent(new master.w.Event('change',{bubbles:true}));}
 if(edicao==='lugares') {
   const q=sel=>master.w.document.querySelector(sel);
   q('#sessao-lugares [data-territorio=todos]').click();
   assert.equal(q('#btn-abrir-com-mesa').disabled,true,'Sem seleção não cria sala');
   assert.equal(q('#sessao-lugares [data-territorio=norte]').disabled,true,'Região sem banco informa em breve');
   q('#sessao-lugares [data-territorio=brasil]').click();
   assert.match(q('#sessao-lugares .lugares-disponiveis').textContent,/2 lugares.*Pouca variedade/);
   q('#sessao-lugares [data-territorio=america]').click();
   assert.match(q('#sessao-lugares .lugares-disponiveis').textContent,/3 lugares/);
   q('#sessao-lugares [data-territorio=todos]').click();
 }
 click(master,'#btn-abrir-com-mesa');await flush();fill(master,'#nome','Mestre de teste');click(master,'#btn-entrar-mesa');await flush();
 const codigo=master.w.MC_SALA.codigo;assert.ok(codigo);assert.equal(master.w.MC_SALA.fase,'lobby');
 if(edicao==='lugares') {
   const wrong=await abrir(server,'cinema','outra-edicao');click(wrong,'#btn-ir-entrar');fill(wrong,'#nome','Outra versão');fill(wrong,'#cod',codigo);click(wrong,'#btn-entrar-mesa');await flush();
   assert.match(wrong.w.document.querySelector('#entrar-status').textContent,/Esta sala é de Lugares/);
   assert.equal(master.w.MC_SALA.jogadores.length,1);wrong.close();
 }

 click(player,'#btn-ir-entrar');fill(player,'#nome','Pessoa de teste');fill(player,'#cod',codigo);click(player,'#btn-entrar-mesa');await flush();
 assert.equal(player.w.document.querySelector('.scene.active').id,'lobby');
 assert.equal(player.w.document.querySelector('#lobby-formato').hidden,true);
 if(edicao==='nt'&&modo) assert.equal(player.w.MC_SALA.config.modoNT,modo);
 if(edicao==='lugares') {
   assert.equal(player.w.MC_SALA.config.sessao.perfil,modo);
   const outro=modo==='viajante'?'geografo':'viajante';
   for(const perfil of [outro,modo]) {
     const input=master.w.document.querySelector('[name=lobby-perfil][value='+perfil+']');input.checked=true;input.dispatchEvent(new master.w.Event('change',{bubbles:true}));await flush();
     assert.equal(player.w.MC_SALA.config.sessao.perfil,perfil,'Troca no lobby sincroniza para os participantes');
   }
   master.w.document.querySelector('#lobby-lugares [data-territorio=brasil]').click();await flush();
   assert.deepEqual(clone(player.w.MC_SALA.config.sessao.territorios),['brasil']);
   master.w.document.querySelector('#lobby-lugares [data-territorio=todos]').click();await flush();
 }

 if(edicao==='cinema'||edicao==='lugares')assert.equal(player.w.document.querySelector('#lobby-sessao').hidden,true);
 assert.equal(player.w.document.querySelector('#assistencia'),null);
 click(master,'#btn-treino');await flush();
 assert.equal(master.w.MC_GAME_ENGINE.state.treino,true);assert.equal(player.w.MC_GAME_ENGINE.state.treino,true);
 assert.equal(master.w.MC_MESA.suaVez(),true);assert.equal(player.w.MC_MESA.suaVez(),true);
 const turn=player.w.MC_GAME_ENGINE.state.turnoId;
 click(player,'#treino-entendi');assert.equal(player.w.MC_GAME_ENGINE.state.turnoId,turn,'Entendi não passa a vez');
 assert.ok(master.w.document.querySelector('#deal.vez-do-jogador #pistas-box'));
 assert.ok(master.w.document.querySelector('#mesa-publica #monte-box'));
 assert.equal(master.w.document.querySelectorAll('#mesa-outros [data-jogador]').length,3);
 const primeira=master.w.MC_GAME_ENGINE.state.campos[0];
 await jogar(master,{tipo:'arriscar',campo:primeira.id,valor:primeira.resposta});assert.equal(master.w.MC_MESA.suaVez(),false);
 assert.equal(master.w.document.querySelector('#deal').classList.contains('vez-do-jogador'),false);
 // Recarrega a pessoa que ainda não escolheu: conserva identidade, pistas e vez.
 const salvo=player.save(),mao=clone(player.w.MC_GAME_ENGINE.state.maosPorJogador.pessoa);player.close();player=await abrir(server,edicao,'pessoa',salvo);
 assert.equal(player.w.MC_SALA.codigo,codigo);assert.deepEqual(clone(player.w.MC_GAME_ENGINE.state.maosPorJogador.pessoa),mao);assert.equal(player.w.MC_MESA.suaVez(),true);
 await jogar(player);
 // Automatizados fazem suas ações nas mesmas regras. Avanço de tempo abaixo da tolerância de desconexão.
 server.agora+=8100;await master.w.MC_MESA.conectar();await player.w.MC_MESA.conectar();master.w.MC_MESA.tick();await flush();server.agora+=8100;await master.w.MC_MESA.conectar();await player.w.MC_MESA.conectar();master.w.MC_MESA.tick();await flush();
 assert.equal(master.w.MC_GAME_ENGINE.state.vez,4);
 await jogar(master,{tipo:'passar'});await jogar(player);
 server.agora+=8100;await master.w.MC_MESA.conectar();await player.w.MC_MESA.conectar();master.w.MC_MESA.tick();await flush();server.agora+=8100;await master.w.MC_MESA.conectar();await player.w.MC_MESA.conectar();master.w.MC_MESA.tick();await flush();
 assert.equal(master.w.document.querySelector('.scene.active').id,'fechamento');
 assert.equal(player.w.document.querySelector('.scene.active').id,'fechamento');
 click(player,'[data-final-campo]');await flush();
 click(player,'#fechamento-concluir');await flush();
 assert.equal(player.w.document.querySelector('#fechamento-concluir').disabled,true);
 click(master,'#fechamento-concluir');await flush();
 assert.equal(master.w.document.querySelector('.scene.active').id,'judge');
 assert.equal(player.w.document.querySelector('.scene.active').id,'judge');
 assert.equal(master.w.MC_GAME_ENGINE.state.ranking.length,4);
 click(master,'#voltar-demonstracao');await flush();assert.equal(player.w.MC_SALA.fase,'lobby');
 // Sala real inicia limpa: duas pessoas, sem os exemplos, saldo 12, sem treinamento.
 await master.w.MC_MESA.conectar();await player.w.MC_MESA.conectar();
 click(master,'#btn-iniciar-partida');await flush();
 assert.equal(master.w.MC_GAME_ENGINE.state.protocolo,3);assert.equal(master.w.MC_GAME_ENGINE.state.treino,false);assert.equal(player.w.MC_GAME_ENGINE.state.treino,false);
 assert.equal(master.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,12);assert.equal(master.w.MC_SALA.ultimoDoc.ordem.length,2);
 if(modo){
   const id=master.w.MC_SALA.ultimoDoc.pautaId;
   if(edicao==='nt')assert.equal(id.endsWith('-devocional'),modo==='devocional');
   if(edicao==='lugares')assert.ok(id.endsWith('-'+modo));
   assert.equal(player.w.MC_GAME_ENGINE.dados().caso.id,id);
 }
 // Resposta perdida após commit: o refresh reenvia a mesma operação sem duplicar o débito.
 click(master,'[data-verbo="comprar"]');click(master,'[data-monte-index="0"]');await flush();
 click(player,'[data-verbo="comprar"]');server.falharDepois=true;click(player,'[data-monte-index="0"]');await flush();
 const saldoDepois=master.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,antesRefresh=player.save();player.close();player=await abrir(server,edicao,'pessoa',antesRefresh);
 assert.equal(player.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,saldoDepois);
 if(modo) assert.equal(player.w.MC_GAME_ENGINE.dados().caso.id,master.w.MC_SALA.ultimoDoc.pautaId);
 assert.equal(player.w.sessionStorage.getItem('mc:sessao:v3:'+edicao+':pendente'),null);
 // Uma segunda aba não toma o lugar silenciosamente.
 let duplicada=await abrir(server,edicao,'pessoa',{storage:player.save().storage});
 assert.equal(duplicada.w.MC_MESA.suaVez(),false);assert.match(duplicada.w.document.querySelector('#conexao-mesa').textContent,/outra aba/);
 click(duplicada,'#conexao-mesa button');await flush();assert.equal(player.w.MC_MESA.suaVez(),false);assert.equal(duplicada.w.MC_MESA.suaVez(),true);
 player.close();player=duplicada;
 // Refresh do mestre preserva o papel e o snapshot; não inicia outra partida.
 const partida=master.w.MC_GAME_ENGINE.state.partidaId,masterSave=master.save();master.close();master=await abrir(server,edicao,'mestre',masterSave);
 assert.equal(master.w.MC_SALA.souMestre(),true);assert.equal(master.w.MC_GAME_ENGINE.state.partidaId,partida);assert.equal(master.auth.anonimos,0);
 click(master,'#btn-pausar');await flush();assert.equal(player.w.MC_GAME_ENGINE.state.pausado,true);
 click(master,'#btn-adicionar-tempo');await flush();click(master,'#btn-pausar');await flush();assert.equal(player.w.MC_GAME_ENGINE.state.pausado,false);
 // Ausência longa do mestre: reconexão encontra pausa e preserva as cartas.
 const saveM=master.save();master.close();server.agora+=40000;await player.w.MC_MESA.conectar();assert.equal(player.w.MC_MESA.suaVez(),false);assert.equal(player.w.MC_MESA.aguardaMestre(),true);master=await abrir(server,edicao,'mestre',saveM);
 assert.equal(master.w.MC_GAME_ENGINE.state.pausado,true);
 assert.equal(master.w.MC_GAME_ENGINE.state.partidaId,partida);
 // Recuperação em outro aparelho: código de uso único reata o mesmo lugar, não cria jogador.
 master.w.MC_SALA.pintar();click(master,'[data-recuperar="pessoa"]');await ate(()=>!master.w.document.querySelector('#recuperacao-codigo').hidden);
 const token=master.w.document.querySelector('#recuperacao-codigo').textContent.split('uma vez: ')[1];assert.ok(token);
 const nova=await abrir(server,edicao,'identidade-nova');click(nova,'#btn-recuperar');fill(nova,'#recuperar-token',token);click(nova,'#recuperar-enviar');await ate(()=>nova.w.MC_SALA.playerId||nova.w.document.querySelector('#recuperar-erro').textContent);await flush();
 assert.equal(nova.w.MC_SALA.playerId,'pessoa');assert.equal(nova.w.MC_SALA.ultimoDoc.jogadores.length,2);
 assert.equal(nova.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,saldoDepois);
 const intruso=await abrir(server,edicao,'outra-identidade');click(intruso,'#btn-recuperar');fill(intruso,'#recuperar-token',token);click(intruso,'#recuperar-enviar');await ate(()=>intruso.w.document.querySelector('#recuperar-erro').textContent);await flush();assert.match(intruso.w.document.querySelector('#recuperar-erro').textContent,/inválido|usado/);
 assert.equal(player.w.MC_MESA.suaVez(),false);
 // Encerramento preserva a partida, respeita cancelamento e exige a aba ativa do mestre.
 await assert.rejects(nova.w.MC_MESA.encerrarSala(),/aba ativa do mestre/);
 const mestreDuplicado=await abrir(server,edicao,'mestre',{storage:master.save().storage,google:true});
 await assert.rejects(mestreDuplicado.w.MC_MESA.encerrarSala(),/aba ativa do mestre/);mestreDuplicado.close();
 master.w.confirm=()=>false;click(master,'#btn-encerrar-sala');await flush();assert.equal(master.w.MC_SALA.codigo,codigo);
 master.w.confirm=()=>true;const historico=clone(master.w.MC_GAME_ENGINE.state.maosPorJogador);
 click(master,'#btn-encerrar-sala');await flush();
 const encerrada=server.docs.get((edicao==='nt'?'salas':'salas-cinema')+'/'+codigo);
 assert.equal(encerrada.ativa,false);assert.equal(encerrada.snap.fase,'encerrada');assert.deepEqual(encerrada.snap.maosPorJogador,historico);
 assert.equal(master.w.MC_SALA.codigo,null);assert.equal(nova.w.MC_SALA.codigo,null);
 nova.close();intruso.close();
 assert.deepEqual(master.erros,[]);assert.deepEqual(player.erros,[]);
 master.close();player.close();console.log('ok integração DOM, sala, treino, refresh, duas abas e relógio — '+(modo||edicao));
}
