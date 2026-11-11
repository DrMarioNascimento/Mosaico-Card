// Integração de DOM e transações com um Firestore em memória. Não substitui um teste multiaparelhos em produção.
import assert from 'node:assert/strict';
import { JSDOM, VirtualConsole } from 'jsdom';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { webcrypto } from 'node:crypto';
import { fileURLToPath } from 'node:url';
const raiz=fileURLToPath(new URL('..',import.meta.url));
const clone=x=>JSON.parse(JSON.stringify(x));
const flush=async()=>{ for(let n=0;n<12;n++)await new Promise(r=>setImmediate(r)); };
const ate=async teste=>{for(let n=0;n<200&&!teste();n++)await new Promise(r=>setTimeout(r,5));assert.ok(teste(),'Operação assíncrona não concluiu');};
async function abrir(server,edicao,id,{storage={},sessao={},google=false}={}){
 const cinema=edicao==='cinema', html=readFileSync(resolve(raiz,cinema?'filmes-e-series/index.html':'novo-testamento/index.html'),'utf8');
 const erros=[],vc=new VirtualConsole();vc.on('jsdomError',e=>{if(!/Not implemented: (Window|HTML)/.test(e.message))erros.push(e);});
 const dom=new JSDOM(html,{url:'https://teste.example/'+(cinema?'filmes-e-series/':'novo-testamento/'),runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:vc});
 const w=dom.window;Object.defineProperty(w.crypto,'subtle',{value:webcrypto.subtle});w.scrollTo=()=>{};w.matchMedia=()=>({matches:true});w.confirm=()=>true;w.Date.now=()=>server.agora;
 w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new w.Event('close'));};
 Object.entries(storage).forEach(([k,v])=>w.localStorage.setItem(k,v));Object.entries(sessao).forEach(([k,v])=>w.sessionStorage.setItem(k,v));
 const auth={currentUser:{uid:id,isAnonymous:!google,email:google?'mestre@example.test':null},anonimos:0,setPersistence:async()=>{},onAuthStateChanged:fn=>queueMicrotask(()=>fn(auth.currentUser)),signInAnonymously:async()=>{auth.anonimos++;return {user:auth.currentUser};}};
 const firestore=()=>server.db(id);firestore.FieldValue={serverTimestamp:()=>server.serverTimestamp ? server.serverTimestamp() : server.agora};const authFn=()=>auth;authFn.Auth={Persistence:{LOCAL:'local'}};
 w.firebase={initializeApp:()=>({}),firestore,auth:authFn};
 // Mantém a ordem real dos scripts. SDKs externos são substituídos pelo contrato acima.
 for(const script of w.document.querySelectorAll('script[src]')){
   const src=script.getAttribute('src');if(src.startsWith('https:'))continue;
   const pathname=new URL(src,w.document.baseURI).pathname;
   w.eval(readFileSync(resolve(raiz,'.'+pathname),'utf8')+'\n//# sourceURL='+pathname);
 }
 await flush();
 assert.deepEqual(erros,[],'Erros ao carregar '+edicao);
 return {w,auth,erros,close:()=>{w.MC_MESA.esquecer();if(w.MC_SALA.unsub)w.MC_SALA.unsub();dom.window.close();},save:()=>({storage:Object.fromEntries(Object.entries(w.localStorage)),sessao:Object.fromEntries(Object.entries(w.sessionStorage)),google})};
}
const click=(app,sel)=>{const b=app.w.document.querySelector(sel);assert.ok(b,'Botão ausente: '+sel);assert.equal(b.disabled,false,'Botão desabilitado: '+sel);b.click();};
const fill=(app,sel,value)=>{app.w.document.querySelector(sel).value=value;};
async function jogar(app, escolha){
 const w=app.w,s=w.MC_GAME_ENGINE.state,id=w.MC_SALA.playerId,cmd=escolha || w.MC_MESA_CORE.acaoTreino(s,w.MC_SALA.ultimoDoc.ordem,id);
 if(cmd.tipo==='passar'){click(app,'#treino-passar');await flush();return;}
 click(app,'[data-verbo="'+cmd.tipo+'"]');
 if(cmd.tipo==='comprar')click(app,'[data-monte-index="'+s.monte.indexOf(cmd.carta)+'"]');
 if(cmd.tipo==='capturar')click(app,'[data-act="capturar-ok"][data-quem="'+cmd.alvo+'"][data-id="'+cmd.carta+'"]');
 if(cmd.tipo==='consignar')click(app,'[data-act="consignar-ok"][data-id="'+cmd.carta+'"]');
 if(cmd.tipo==='arriscar'){click(app,'[data-act="arriscar-ok"][data-campo="'+cmd.campo+'"][data-valor="'+cmd.valor+'"]');assert.equal(w.document.querySelector('#risco-dialog').open,true);click(app,'#risco-confirmar');}
 await flush();
}

export { abrir, click, fill, jogar, flush, ate };
