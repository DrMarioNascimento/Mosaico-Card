import {readFile,writeFile} from 'node:fs/promises';
const root=new URL('../',import.meta.url);
const bank=JSON.parse(await readFile(new URL('data/lugares-bank.json',root),'utf8'));
const points=[8,5,3,2],cases=[];
const sourceText=ids=>ids.map(id=>bank.sources[id].publisher).filter((v,i,a)=>a.indexOf(v)===i).join('; ');
for(const entry of bank.cases)for(const profile of bank.profiles){
 const cards=entry.profiles[profile].cards;
 if(cards.length<25||entry.fields.length!==4)throw Error('Banco incompleto: '+entry.id);
 const fields=entry.fields.map((f,i)=>{
   if(f.options.length<4||new Set(f.options.map(o=>o.id)).size!==f.options.length||new Set(f.options.map(o=>o.text.trim().toLocaleLowerCase('pt-BR'))).size!==f.options.length||!f.options.some(o=>o.id===f.answerId&&o.text===f.answerText))throw Error('Alternativas ou gabarito inconsistentes: '+entry.id+f.id);
   return {id:f.id,sourceOrder:i+1,rotulo:f.label,opcoes:f.options.map(o=>({id:o.id,texto:o.text})),respostaId:f.answerId,respostaCanonica:f.answerText,endereco:sourceText(f.sources),isFocal:i===0,pontosBase:points[i]};
 });
 const refs=[...new Set(cards.flatMap(c=>c.sources))];
 cases.push({id:entry.id+'-'+profile,placeId:entry.placeId,profile,title:entry.title,sessionTitle:'Destino em descoberta',geography:entry.geography,answerType:entry.answerType,kind:'canonical-case',canon:{source:'Fontes institucionais e patrimônio cultural/natural',reference:sourceText(refs)},prompt:{question:'Qual é '+(['cidade','montanha'].includes(entry.answerType)?'a ':'o ')+entry.answerType+'? Complete as quatro respostas com as pistas.'},focalFieldId:'C1',fields,deck:{status:'ready',minPlayers:2,maxPlayers:12,cards:cards.map(c=>({...c,texto:c.text}))},reveal:entry.reveal,editorial:{hinge:entry.reveal.canonicalSummary},review:entry.review,status:{structural:'approved',playable:true},pendingIssues:[]});
}
const catalog={schemaVersion:1,catalogVersion:bank.catalogVersion,namespace:bank.namespace,demoIsolated:true,summary:{places:bank.cases.length,cases:cases.length,playableCases:cases.length,clues:cases.reduce((n,c)=>n+c.deck.cards.length,0)},order:cases.map(c=>c.id),byId:Object.fromEntries(cases.map(c=>[c.id,c]))};
await writeFile(new URL('cases-lugares.js',root),'/* Gerado de data/lugares-bank.json por tools/generate-bank.mjs. */\n(function(root){const bank='+JSON.stringify(catalog)+';root.MC_LUGARES_BANK=bank;if(typeof module==="object"&&module.exports)module.exports=bank;})(typeof globalThis!=="undefined"?globalThis:this);\n');
console.log(catalog.summary);
