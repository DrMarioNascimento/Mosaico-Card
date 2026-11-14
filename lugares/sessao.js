/* Recortes geográficos e perfis da sala. A união elimina repetição por lugar. */
(function (root) {
  'use strict';
  const TERRITORIOS = Object.freeze({todos:'Todos os lugares',brasil:'Brasil',norte:'Norte',nordeste:'Nordeste','centro-oeste':'Centro-Oeste',sudeste:'Sudeste',sul:'Sul',america:'América',europa:'Europa',africa:'África',asia:'Ásia',oceania:'Oceania',antartida:'Antártida'});
  const PADRAO = Object.freeze({perfil:'viajante',territorios:Object.freeze(['todos'])});
  function normalizar(e) {
    e=e||{};
    const t=Array.isArray(e.territorios)?[...new Set(e.territorios.filter(k=>Object.hasOwn(TERRITORIOS,k)))].sort():['todos'];
    return {perfil:e.perfil==='geografo'?'geografo':'viajante',territorios:t.includes('todos')?['todos']:t};
  }
  function inclui(geo,k) {return k==='todos'||k==='brasil'&&geo.countries.includes('BR')||geo.continents.includes(k)||geo.brazilRegions.includes(k);}
  function combina(c,s) {s=normalizar(s);return c.profile===s.perfil && s.territorios.some(k=>inclui(c.geography,k));}
  function valida(s) {return normalizar(s).territorios.length>0;}
  function texto(s) {s=normalizar(s);return (s.perfil==='geografo'?'Geógrafo':'Viajante')+' · '+(s.territorios.map(k=>TERRITORIOS[k]).join(' + ')||'Selecione um território');}
  function chave(s) {s=normalizar(s);return s.perfil+':'+s.territorios.join('+');}
  function ler(id) {
    const el=document.getElementById(id+'-lugares');
    return normalizar({perfil:el.querySelector('input[type=radio]:checked')?.value,territorios:[...el.querySelectorAll('[data-territorio]:checked')].map(x=>x.dataset.territorio)});
  }
  function escrever(id,s) {
    const el=document.getElementById(id+'-lugares');if(!el)return;
    s=normalizar(s);
    el.querySelectorAll('[data-territorio]').forEach(x=>x.checked=s.territorios.includes(x.dataset.territorio));
    el.querySelectorAll('input[type=radio]').forEach(x=>x.checked=x.value===s.perfil);
    informar(id,s);
  }
  function informar(id,s) {
    const el=document.getElementById(id+'-lugares'),bank=root.MC_LUGARES_BANK;if(!el||!bank)return 0;
    s=normalizar(s||ler(id));const n=bank.elegiveis(null,s).length;
    el.querySelectorAll('[data-territorio]').forEach(x=>{
      const total=bank.elegiveis(null,{perfil:s.perfil,territorios:[x.dataset.territorio]}).length;
      x.disabled=total===0; x.closest('label').classList.toggle('indisponivel',!total);
      const count=el.querySelector('[data-contagem="'+x.dataset.territorio+'"]');if(count)count.textContent=total?String(total):'Em breve';
    });
    el.querySelector('.lugares-disponiveis').textContent=n===0?'Nenhum lugar disponível. Amplie a seleção.':n+' '+(n===1?'lugar disponível.':'lugares disponíveis.')+(n<4?' Pouca variedade: combine mais territórios para aumentar o desafio.':'');
    return n;
  }
  function ajustarSelecao(event) {
    const x=event.target;if(!x.matches('[data-territorio]')||!x.checked)return;
    const el=x.closest('.lugares-config');
    if(x.dataset.territorio==='todos')el.querySelectorAll('[data-territorio]').forEach(other=>other.checked=other===x);
    else el.querySelector('[data-territorio="todos"]').checked=false;
  }
  const api={TERRITORIOS,PADRAO,normalizar,inclui,combina,valida,texto,chave,ler,escrever,informar,ajustarSelecao};
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.MC_SESSAO=api;
})(typeof globalThis!=='undefined'?globalThis:this);
