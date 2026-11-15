// Valida um lugar revisado (work/revisao-lugares/saida/<placeId>.json) com as mesmas regras de tests/lugares.mjs
// e do gerador. Uso: node work/revisao-lugares/validar.mjs saida/<placeId>.json [mais arquivos...]
import {readFileSync} from 'node:fs';
const banco = JSON.parse(readFileSync(new URL('../../lugares/data/lugares-bank.json', import.meta.url)));
const norm = t => t.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const CONT = new Set(['america', 'europa', 'africa', 'asia', 'oceania', 'antartida']);
const REG = new Set(['norte', 'nordeste', 'centro-oeste', 'sudeste', 'sul']);
const SIG = new Set(['abertura', 'conexao', 'decisiva']), MOM = new Set(['early', 'middle', 'late']), IMP = new Set(['relevant', 'essential', 'critical']);
let falhou = false;
for (const arq of process.argv.slice(2)) {
  const erros = [], avisos = [];
  const e = m => erros.push(m), w = m => avisos.push(m);
  let d;
  try { d = JSON.parse(readFileSync(arq, 'utf8')); } catch (x) { console.log(`✗ ${arq}: JSON inválido (${x.message})`); falhou = true; continue; }
  const c = d.case, S = d.sources || {}, R = d.revisao || {};
  if (!c) { console.log(`✗ ${arq}: falta "case"`); falhou = true; continue; }
  for (const k of ['id', 'placeId', 'title', 'aliases', 'answerType', 'sessionTitle', 'geography', 'question', 'focalFieldId', 'fields', 'profiles', 'reveal', 'review'])
    if (!(k in c)) e(`falta o campo ${k}`);
  if (banco.cases.some(b => b.placeId === c.placeId)) e(`placeId ${c.placeId} já está no banco`);
  if (banco.cases.some(b => b.id === c.id)) e(`id ${c.id} já está no banco`);
  if (banco.cases.some(b => norm(b.title) === norm(c.title || ''))) e(`título já existe no banco`);
  const g = c.geography || {};
  const antartico = Array.isArray(g.continents) && g.continents.length === 1 && g.continents[0] === 'antartida';
  if (antartico ? !Array.isArray(g.countries) || g.countries.some(x => x !== 'AQ') : !Array.isArray(g.countries) || !g.countries.length || g.countries.some(x => !/^[A-Z]{2}$/.test(x)))
    e(antartico ? 'Antártida: countries deve ser [] (convenção do banco)' : 'geography.countries deve ter códigos ISO de 2 letras');
  if (!Array.isArray(g.continents) || !g.continents.length || g.continents.some(x => !CONT.has(x))) e('geography.continents inválido');
  if (!Array.isArray(g.brazilRegions) || g.brazilRegions.some(x => !REG.has(x))) e('geography.brazilRegions inválido');
  if ((g.countries || []).includes('BR') !== ((g.brazilRegions || []).length > 0)) e('brazilRegions só (e sempre) para lugares no Brasil');
  if ((g.countries || []).includes('BR') && !(g.continents || []).includes('america')) e('lugar no Brasil precisa de continents ["america"]');
  if (c.focalFieldId !== 'C1') e('focalFieldId deve ser C1');
  if (!Array.isArray(c.aliases)) e('aliases deve ser lista');
  const fields = c.fields || [];
  if (fields.length !== 4) e('são exatamente 4 campos');
  fields.forEach((f, i) => {
    if (f.id !== 'C' + (i + 1)) e(`campo ${i + 1} deve ter id C${i + 1}`);
    const n = (f.options || []).length;
    if (i === 0 ? n < 8 || n > 24 : n !== 4) e(`${f.id}: ${n} alternativas (C1: 8 a 24; demais: 4)`);
    if (new Set(f.options.map(o => o.id)).size !== n) e(`${f.id}: ids de alternativas repetidos`);
    if (new Set(f.options.map(o => o.text.trim().toLocaleLowerCase('pt-BR'))).size !== n) e(`${f.id}: alternativas repetidas`);
    if (!f.options.some(o => o.id === f.answerId && o.text === f.answerText)) e(`${f.id}: gabarito não confere com as alternativas`);
    if (!f.sources?.length || f.sources.some(s => !S[s])) e(`${f.id}: fonte ausente ou não definida`);
    if (!f.label?.trim()) e(`${f.id}: sem rótulo`);
  });
  if (fields[0] && norm(fields[0].answerText) !== norm(c.title)) w(`C1 (${fields[0].answerText}) difere do título (${c.title})`);
  const focais = [c.title, ...(c.aliases || [])].filter(Boolean);
  const textos = {};
  for (const p of ['viajante', 'geografo']) {
    const cards = c.profiles?.[p]?.cards || [];
    if (!c.profiles?.[p]?.label) e(`${p}: falta label`);
    if (cards.length !== 25) e(`${p}: ${cards.length} pistas (são 25)`);
    const ids = new Set(), tx = new Set();
    textos[p] = tx;
    let ab = 0, dec = 0;
    for (const k of cards) {
      if (ids.has(k.id)) e(`${k.id}: id repetido`); ids.add(k.id);
      if (tx.has(k.text)) e(`${k.id}: texto repetido`); tx.add(k.text);
      if (!k.text?.trim()) e(`${k.id}: sem texto`);
      if (!k.sources?.length || k.sources.some(s => !S[s] || !String(S[s].url).startsWith('https://'))) e(`${k.id}: fonte ausente, não definida ou sem https`);
      if (!k.relatedFields?.length || k.relatedFields.some(id => !fields.some(f => f.id === id))) e(`${k.id}: relatedFields inválido`);
      for (const f of focais) if ((' ' + norm(k.text) + ' ').includes(' ' + norm(f) + ' ')) e(`${k.id}: revela o nome do lugar ("${f}")`);
      if (!SIG.has(k.signalStrength) || !MOM.has(k.recommendedMoment) || !IMP.has(k.importance) || k.twoPlayerSuitable !== true || !k.clueType || !k.factKey) e(`${k.id}: metadados da pista incompletos`);
      if (k.signalStrength === 'abertura') ab++; if (k.signalStrength === 'decisiva') dec++;
    }
    if (!ab) w(`${p}: nenhuma pista de abertura`); if (!dec) w(`${p}: nenhuma pista decisiva`);
  }
  if (textos.viajante && textos.geografo) { const iguais = [...textos.viajante].filter(t => textos.geografo.has(t)); if (iguais.length) e(`${iguais.length} pistas idênticas nos dois perfis`); }
  for (const [id, s] of Object.entries(S)) {
    if (s.id !== id) e(`fonte ${id}: id interno diferente`);
    if (!String(s.url).startsWith('https://')) e(`fonte ${id}: url sem https`);
    if (!s.publisher || !s.title) e(`fonte ${id}: falta título ou publicador`);
    const b = banco.sources[id]; if (b && b.url !== s.url) w(`fonte ${id}: o banco já usa esse id com outra url (será renomeada na integração)`);
  }
  const usadas = new Set([...fields.flatMap(f => f.sources || []), ...['viajante', 'geografo'].flatMap(p => (c.profiles?.[p]?.cards || []).flatMap(k => k.sources || []))]);
  for (const id of Object.keys(S)) if (!usadas.has(id)) w(`fonte ${id} não é usada`);
  if (!['aprovado', 'reprovado'].includes(R.veredito)) e('revisao.veredito deve ser "aprovado" ou "reprovado"');
  if (R.veredito === 'aprovado' && (!Array.isArray(R.fontesAbertas) || !R.fontesAbertas.length)) e('revisao.fontesAbertas vazia: a revisão exige abrir as fontes');
  if (R.veredito === 'aprovado' && Array.isArray(R.naoVerificado) && R.naoVerificado.length) e('aprovado com afirmações não verificadas: corrija, troque ou reprove');
  if (c.review?.factual !== 'source-reviewed' && R.veredito === 'aprovado') e('case.review.factual deve ser "source-reviewed" quando aprovado');
  const ok = !erros.length;
  if (!ok) falhou = true;
  console.log(`${ok ? '✓' : '✗'} ${c.placeId || arq} (${R.veredito || 'sem veredito'})`);
  for (const m of erros) console.log('   erro:', m);
  for (const m of avisos) console.log('   aviso:', m);
}
process.exit(falhou ? 1 : 0);
