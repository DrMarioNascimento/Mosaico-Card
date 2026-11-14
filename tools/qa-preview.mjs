import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
// Apenas o servidor Vite registra estas rotas. Não integra o site publicado nem chama o Firebase real.
export function qaPreview(root) {
  const sdk = `(() => {
    const clone = value => JSON.parse(JSON.stringify(value));
    const host = window.parent;
    const lugares = location.pathname.includes('/lugares/');
    if (!host.mosaicoQA) {
      const docs = new Map(), listeners = new Map(), collections = new Map();
      let fila = Promise.resolve();
      const jogadores = ['mestre','jogador1','jogador2'].map((id,i) => ({id:'qa-'+id,nome:['Mestre de teste','Ana','Bruno'][i],pronto:true,forma:'n'}));
      docs.set('config/mestres',{emails:['mestre@example.test']});
      for (const colecao of ['salas','salas-cinema']) docs.set(colecao+'/QATEST',{codigo:'QATEST',mestre:'qa-mestre',ativa:true,fase:'lobby',schemaVersion:3,autoridade:'mestre',vinculos:Object.fromEntries(jogadores.map(j=>[j.id,j.id])),jogadores,ordem:jogadores.map(j=>j.id),config:{tempoPorJogada:45,duracao:'padrao',modalidade:'maratonar',telao:false,edicao:lugares?'lugares':'cinema',sessao:lugares?{perfil:'viajante',territorios:['todos']}:{formatos:['filme','serie'],top50:false}},pautaId:null,snap:null,presencas:{}});
      const snap = path => ({exists:docs.has(path),data:()=>clone(docs.get(path))});
      const query = path => ({forEach:fn=>{for(const [p]of docs)if(p.startsWith(path+'/')&&!p.slice(path.length+1).includes('/'))fn({id:p.slice(path.length+1),...snap(p)});}});
      const collection = path => ({doc:id=>ref(path+'/'+id),onSnapshot(fn){const set=collections.get(path)||new Set();set.add(fn);collections.set(path,set);queueMicrotask(()=>fn(query(path)));return()=>set.delete(fn);}});
      const write = (path,data) => { docs.set(path,clone(data)); for (const fn of listeners.get(path)||[]) queueMicrotask(()=>fn(snap(path))); const col=path.slice(0,path.lastIndexOf('/'));for(const fn of collections.get(col)||[])queueMicrotask(()=>fn(query(col))); };
      const ref = path => ({path,get:async()=>snap(path),set:async d=>write(path,d),update:async d=>write(path,{...docs.get(path),...d}),collection:n=>collection(path+'/'+n),onSnapshot(fn){const set=listeners.get(path)||new Set();set.add(fn);listeners.set(path,set);queueMicrotask(()=>fn(snap(path)));return()=>set.delete(fn);}});
      host.mosaicoQA = {db:{collection:n=>({doc:id=>ref(n+'/'+id)}),runTransaction(fn){const p=fila.then(async()=>{const writes=[];const out=await fn({get:async r=>snap(r.path),set:(r,d)=>writes.push([r.path,d]),update:(r,d)=>writes.push([r.path,{...docs.get(r.path),...d}])});for(const [path,d]of writes)write(path,d);return out;});fila=p.catch(()=>{});return p;}}};
    }
    const role = new URLSearchParams(location.search).get('papel') || 'mestre';
    const cinema = location.pathname.includes('filmes-e-series');
    const auth = {currentUser:{uid:'qa-'+role,isAnonymous:role!=='mestre',email:role==='mestre'?'mestre@example.test':null},setPersistence:async()=>{},onAuthStateChanged(fn){queueMicrotask(()=>fn(auth.currentUser));},signInAnonymously:async()=>({user:auth.currentUser})};
    const authFn=()=>auth;authFn.Auth={Persistence:{LOCAL:'local'}};
    const firestore=()=>host.mosaicoQA.db;firestore.FieldValue={serverTimestamp:()=>Date.now()};
    window.firebase={initializeApp:()=>({}),auth:authFn,firestore};
    // Cada quadro representa um aparelho independente, com uma identidade explicitamente simulada.
    window.BroadcastChannel=undefined;
    localStorage.setItem('mc:sessao:v3:'+(lugares?'lugares':cinema?'cinema':'nt'),JSON.stringify({codigo:'QATEST',playerId:'qa-'+role}));
    window.addEventListener('pagehide',()=>{window.MC_MESA?.esquecer();if(window.MC_SALA?.unsub)window.MC_SALA.unsub();});
  })();`;
  return {
    name: 'mosaico-qa-local', apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req,res,next) => {
        const url = new URL(req.url,'http://terminal.local:4173');
        if (!url.pathname.startsWith('/__qa__/')) return next();
        res.setHeader('Cache-Control','no-store');
        if (url.pathname==='/__qa__/firebase.js') {res.setHeader('Content-Type','text/javascript');res.end(sdk);return;}
        if (url.pathname.startsWith('/__qa__/app/')) {
          const cinema=url.pathname.includes('/filmes-e-series/'),lugares=url.pathname.includes('/lugares/');
          const pasta=lugares?'lugares':cinema?'filmes-e-series':'novo-testamento';
          let html=readFileSync(resolve(root,pasta+'/index.html'),'utf8');
          html=html.replace(/<base[^>]*>/,'').replace('<head>','<head><base href="'+(lugares?'/lugares/':cinema?'/filmes-e-series/':'/')+'">');
          let first=true;
          html=html.replace(/<script src="https:\/\/www.gstatic.com\/firebasejs\/[^\"]+"><\/script>/g,()=>{if(first){first=false;return '<script src="/__qa__/firebase.js"></script>';}return '';});
          res.setHeader('Content-Type','text/html');res.end(html);return;
        }
        const edition = ['nt','lugares'].includes(url.searchParams.get('edicao'))?url.searchParams.get('edicao'):'cinema';
        const width = [320,390,430,1024].includes(Number(url.searchParams.get('largura')))?Number(url.searchParams.get('largura')):390;
        res.setHeader('Content-Type','text/html');res.end(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>QA local · Mosaico Card</title><style>body{margin:0;background:#242b30;color:white;font:14px system-ui}header{padding:12px 20px;display:flex;gap:12px;align-items:center;flex-wrap:wrap}label{display:flex;gap:6px;align-items:center}select,button{padding:8px;min-height:40px}main{display:flex;gap:20px;align-items:flex-start;padding:12px 20px;overflow:auto}article{flex:none}h2{font-size:16px;margin:0 0 8px}iframe{border:0;background:#132f38;width:${width}px;height:852px;display:block}#notas{margin:0 20px;color:#e1b978}</style></head><body><header><b>Prévia local · sala simulada</b><form><label>Edição<select name="edicao"><option value="cinema" ${edition==='cinema'?'selected':''}>Cinema & Séries</option><option value="nt" ${edition==='nt'?'selected':''}>Novo Testamento</option><option value="lugares" ${edition==='lugares'?'selected':''}>Lugares</option></select></label><label>Largura<select name="largura">${[320,390,430,1024].map(n=>'<option '+(width===n?'selected':'')+'>'+n+'</option>').join('')}</select></label><button>Aplicar</button></form></header><p id="notas">Dados de teste. Nenhuma informação é escrita no Firebase real. Cada quadro representa um aparelho.</p><main>${['mestre','jogador1','jogador2'].map((p,i)=>'<article><h2>'+['Mestre','Ana · jogadora','Bruno · jogador'][i]+'</h2><iframe id="'+p+'" title="'+['Mestre','Ana','Bruno'][i]+'" src="/__qa__/app/'+(edition==='lugares'?'lugares':edition==='cinema'?'filmes-e-series':'novo-testamento')+'/?papel='+p+'"></iframe></article>').join('')}</main></body></html>`);
      });
    }
  };
}
