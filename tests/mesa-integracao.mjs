// Integração de DOM e transações com um Firestore em memória. Não substitui um teste multiaparelhos em produção.
import assert from 'node:assert/strict';
import { JSDOM, VirtualConsole } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { webcrypto } from 'node:crypto';
const raiz=resolve(new URL('..',import.meta.url).pathname);
const clone=x=>JSON.parse(JSON.stringify(x));
const flush=async()=>{ for(let n=0;n<12;n++)await new Promise(r=>setImmediate(r)); };
const ate=async teste=>{for(let n=0;n<200&&!teste();n++)await new Promise(r=>setTimeout(r,5));assert.ok(teste(),'Operação assíncrona não concluiu');};
class Servidor {
 constructor(){this.docs=new Map([['config/mestres',{emails:['mestre@example.test']}]]);this.listeners=new Map();this.fila=Promise.resolve();this.agora=Date.now();}
 ref(path){const server=this;return {path,collection:n=>({doc:id=>server.ref(path+'/'+n+'/'+id),onSnapshot:()=>()=>{}}),
 get:async()=>server.snap(path),set:async data=>server.gravar(path,data),update:async data=>server.gravar(path,{...server.docs.get(path),...data}),
 onSnapshot(fn){const conjunto=server.listeners.get(path)||new Set();conjunto.add(fn);server.listeners.set(path,conjunto);queueMicrotask(()=>fn(server.snap(path)));return()=>conjunto.delete(fn);}};}
 snap(path){return {exists:this.docs.has(path),data:()=>clone(this.docs.get(path))};}
 gravar(path,data){this.docs.set(path,clone(data));for(const fn of this.listeners.get(path)||[])queueMicrotask(()=>fn(this.snap(path)));}
 db(){return {collection:n=>({doc:id=>this.ref(n+'/'+id)}),runTransaction:fn=>{const p=this.fila.then(async()=>{const writes=[];const out=await fn({get:async ref=>this.snap(ref.path),set:(ref,d)=>writes.push([ref.path,d]),update:(ref,d)=>writes.push([ref.path,{...this.docs.get(ref.path),...d}])});for(const [p,d]of writes)this.gravar(p,d);if(this.falharDepois){this.falharDepois=false;const e=new Error('Resposta de rede perdida');e.code='unavailable';throw e;}return out;});this.fila=p.catch(()=>{});return p;}};}
}
async function abrir(server,edicao,id,{storage={},sessao={},google=false}={}){
 const cinema=edicao==='cinema', html=readFileSync(resolve(raiz,cinema?'filmes-e-series/index.html':'novo-testamento/index.html'),'utf8');
 const erros=[],vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/Not implemented: (Window|HTML)/.test(e.message))erros.push(e);});
 const dom=new JSDOM(html,{url:'https://teste.example/'+(cinema?'filmes-e-series/':'novo-testamento/'),runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:vc});
 const w=dom.window;Object.defineProperty(w.crypto,'subtle',{value:webcrypto.subtle});w.scrollTo=()=>{};w.matchMedia=()=>({matches:true});w.confirm=()=>true;w.Date.now=()=>server.agora;
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
 Object.entries(storage).forEach(([k,v])=>w.localStorage.setItem(k,v));Object.entries(sessao).forEach(([k,v])=>w.sessionStorage.setItem(k,v));
 const auth={currentUser:{uid:id,isAnonymous:!google,email:google?'mestre@example.test':null},anonimos:0,setPersistence:async()=>{},onAuthStateChanged:fn=>queueMicrotask(()=>fn(auth.currentUser)),signInAnonymously:async()=>{auth.anonimos++;return {user:auth.currentUser};}};
 const firestore=()=>server.db();firestore.FieldValue={serverTimestamp:()=>server.agora};const authFn=()=>auth;authFn.Auth={Persistence:{LOCAL:'local'}};
 w.firebase={initializeApp:()=>({}),firestore,auth:authFn};
 // Mantém a ordem real dos scripts. SDKs externos são substituídos pelo contrato acima.
 for(const script of w.document.querySelectorAll('script[src]')){
   const src=script.getAttribute('src');if(src.startsWith('https:'))continue;
   const pathname=new URL(src,w.document.baseURI).pathname;
   w.eval(readFileSync(resolve(raiz,'.'+pathname),'utf8')+'\n//# sourceURL='+pathname);
 }
 await flush();
 assert.deepEqual(erros,[],'Erros ao carregar '+edicao);
 return {w,auth,erros,close:()=>dom.window.close(),save:()=>({storage:Object.fromEntries(Object.entries(w.localStorage)),sessao:Object.fromEntries(Object.entries(w.sessionStorage)),google})};
}
const click=(app,sel)=>{const b=app.w.document.querySelector(sel);assert.ok(b,'Botão ausente: '+sel);assert.equal(b.disabled,false,'Botão desabilitado: '+sel);b.click();};
const fill=(app,sel,value)=>{app.w.document.querySelector(sel).value=value;};
async function jogar(app){
 const w=app.w,s=w.MC_GAME_ENGINE.state,id=w.MC_SALA.playerId,cmd=w.MC_MESA_CORE.acaoTreino(s,w.MC_SALA.ultimoDoc.ordem,id);
 click(app,'[data-verbo="'+cmd.tipo+'"]');
 if(cmd.tipo==='comprar')click(app,'[data-monte-index="0"]');
 if(cmd.tipo==='capturar')click(app,'[data-act="capturar-ok"][data-quem="'+cmd.alvo+'"][data-id="'+cmd.carta+'"]');
 if(cmd.tipo==='consignar')click(app,'[data-act="consignar-ok"][data-id="'+cmd.carta+'"]');
 if(cmd.tipo==='arriscar'){click(app,'[data-act="arriscar-ok"][data-campo="'+cmd.campo+'"][data-valor="'+cmd.valor+'"]');assert.equal(w.document.querySelector('#risco-dialog').open,true);click(app,'#risco-confirmar');}
 await flush();
}
for(const edicao of ['cinema','nt']){
 const server=new Servidor();let master=await abrir(server,edicao,'mestre',{google:true}),player=await abrir(server,edicao,'pessoa');
 assert.equal(master.auth.anonimos,0,'Refresh não substitui a identidade Google');
 click(master,'#btn-abrir-mesa');await flush();assert.equal(master.w.document.querySelector('#modal-mestre').hidden,false);
 fill(master,'[name=modalidade][value=maratonar]','maratonar');master.w.document.querySelector('[name=modalidade][value=maratonar]').checked=true;
 click(master,'#btn-abrir-com-mesa');await flush();fill(master,'#nome','Mestre de teste');click(master,'#btn-entrar-mesa');await flush();
 const codigo=master.w.MC_SALA.codigo;assert.ok(codigo);assert.equal(master.w.MC_SALA.fase,'lobby');
 click(player,'#btn-ir-entrar');fill(player,'#nome','Pessoa de teste');fill(player,'#cod',codigo);click(player,'#btn-entrar-mesa');await flush();
 assert.equal(player.w.document.querySelector('.scene.active').id,'lobby');
 assert.equal(player.w.document.querySelector('#lobby-formato').hidden,true);
 if(edicao==='cinema')assert.equal(player.w.document.querySelector('#lobby-sessao').hidden,true);
 assert.equal(player.w.document.querySelector('#assistencia'),null);
 click(master,'#btn-treino');await flush();
 assert.equal(master.w.MC_GAME_ENGINE.state.treino,true);assert.equal(player.w.MC_GAME_ENGINE.state.treino,true);
 assert.equal(master.w.MC_MESA.suaVez(),true);assert.equal(player.w.MC_MESA.suaVez(),true);
 const turn=player.w.MC_GAME_ENGINE.state.turnoId;
 click(player,'#treino-entendi');assert.equal(player.w.MC_GAME_ENGINE.state.turnoId,turn,'Entendi não passa a vez');
 await jogar(master);assert.equal(master.w.MC_MESA.suaVez(),false);
 // Recarrega a pessoa que ainda não escolheu: conserva identidade, pistas e vez.
 const salvo=player.save(),mao=clone(player.w.MC_GAME_ENGINE.state.maosPorJogador.pessoa);player.close();player=await abrir(server,edicao,'pessoa',salvo);
 assert.equal(player.w.MC_SALA.codigo,codigo);assert.deepEqual(clone(player.w.MC_GAME_ENGINE.state.maosPorJogador.pessoa),mao);assert.equal(player.w.MC_MESA.suaVez(),true);
 await jogar(player);
 // Automatizados fazem suas ações nas mesmas regras. Avanço de tempo abaixo da tolerância de desconexão.
 server.agora+=5100;master.w.MC_MESA.tick();await flush();server.agora+=5100;master.w.MC_MESA.tick();await flush();
 assert.equal(master.w.MC_GAME_ENGINE.state.vez,4);
 await jogar(master);await jogar(player);
 server.agora+=5100;master.w.MC_MESA.tick();await flush();server.agora+=5100;master.w.MC_MESA.tick();await flush();
 assert.equal(master.w.document.querySelector('.scene.active').id,'treino-fim');assert.equal(player.w.document.querySelector('.scene.active').id,'treino-fim');
 assert.equal(Object.keys(master.w.MC_GAME_ENGINE.state.pagas).length,1);
 click(master,'#treino-voltar');await flush();assert.equal(player.w.MC_SALA.fase,'lobby');
 // Sala real inicia limpa: duas pessoas, sem os exemplos, saldo 12, sem treinamento.
 await master.w.MC_MESA.conectar();await player.w.MC_MESA.conectar();
 click(master,'#btn-iniciar-partida');await flush();
 assert.equal(master.w.MC_GAME_ENGINE.state.protocolo,3);assert.equal(master.w.MC_GAME_ENGINE.state.treino,false);assert.equal(player.w.MC_GAME_ENGINE.state.treino,false);
 assert.equal(master.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,12);assert.equal(master.w.MC_SALA.ultimoDoc.ordem.length,2);
 // Resposta perdida após commit: o refresh reenvia a mesma operação sem duplicar o débito.
 click(master,'[data-verbo="comprar"]');click(master,'[data-monte-index="0"]');await flush();
 click(player,'[data-verbo="comprar"]');server.falharDepois=true;click(player,'[data-monte-index="0"]');await flush();
 const saldoDepois=master.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,antesRefresh=player.save();player.close();player=await abrir(server,edicao,'pessoa',antesRefresh);
 assert.equal(player.w.MC_GAME_ENGINE.state.saldosPorJogador.pessoa,saldoDepois);
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
 const saveM=master.save();master.close();server.agora+=40000;await player.w.MC_MESA.conectar();assert.equal(player.w.MC_GAME_ENGINE.state.pausado,true);master=await abrir(server,edicao,'mestre',saveM);
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
 nova.close();intruso.close();
 assert.deepEqual(master.erros,[]);assert.deepEqual(player.erros,[]);
 master.close();player.close();console.log('ok integração DOM, sala, treino, refresh, duas abas e relógio — '+edicao);
}
