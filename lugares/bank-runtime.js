(function(root){
  'use strict';
  const bank=root.MC_LUGARES_BANK,S=root.MC_SESSAO;
  if(!bank||!S)return;
  bank.elegiveis=function(n,s){return bank.order.filter(id=>{const c=bank.byId[id];return c.status.playable&&S.combina(c,s)&&(n==null||Number.isInteger(Number(n))&&Number(n)>=2&&Number(n)<=c.deck.maxPlayers);});};
  const prefix='mc:banco:lugares:'+bank.catalogVersion+':';
  function ler(key,fallback){try{return JSON.parse(localStorage.getItem(key)||'null')||fallback;}catch{return fallback;}}
  function salvar(key,value){try{localStorage.setItem(key,JSON.stringify(value));}catch{/* sessão em memória */}}
  const memoria=new Map();
  function embaralhar(ids){const a=ids.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
  bank.chaveSaco=(n,s)=>prefix+S.chave(s)+':j'+(n==null?'todos':n);
  bank.sortear=function(n,s){
    const aptos=bank.elegiveis(n,s);
    if(!aptos.length)return {erro:'Não há lugares disponíveis para esta seleção e quantidade de jogadores. Amplie os territórios.'};
    const key=bank.chaveSaco(n,s),cached=memoria.get(key)||ler(key,{ids:[]});
    let ids=Array.isArray(cached.ids)?cached.ids.filter(id=>aptos.includes(id)):[];
    if(!ids.length)ids=embaralhar(aptos);
    // A memória usa placeId para evitar repetir o mesmo lugar ao trocar de perfil.
    const recentes=memoria.get('recentes')||ler(prefix+'recentes',[]);
    const bloqueados=Array.isArray(recentes)?recentes.slice(0,Math.min(6,aptos.length-1)):[];
    let pos=ids.findIndex(id=>!bloqueados.includes(bank.byId[id].placeId));if(pos<0)pos=0;
    const id=ids.splice(pos,1)[0],place=bank.byId[id].placeId;
    const proxima=[place,...bloqueados.filter(x=>x!==place)].slice(0,6);
    memoria.set(key,{ids});memoria.set('recentes',proxima);salvar(key,{ids});salvar(prefix+'recentes',proxima);
    return {id,caso:bank.byId[id],restantes:ids.length};
  };
})(typeof globalThis!=='undefined'?globalThis:this);
