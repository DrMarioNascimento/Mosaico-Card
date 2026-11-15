// Integra ao banco os lugares revisados e aprovados (work/revisao-lugares/saida/<placeId>.json).
// Uso (na raiz do repositório): node work/revisao-lugares/integrar.mjs <placeId> [...]   ou   --todos
// Faz: valida, junta fontes (renomeia ids que colidem), acrescenta os casos, regenera cases-lugares.js
// e atualiza as contagens em testes, README, metas, plano e cache do index.
import {readFileSync, writeFileSync, readdirSync, existsSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import vm from 'node:vm';

const raiz = new URL('../../', import.meta.url);
const P = f => new URL(f, raiz);
const ler = f => readFileSync(P(f), 'utf8');
const gravar = (f, t) => writeFileSync(P(f), t);
const saida = new URL('saida/', import.meta.url);
const validar = new URL('validar.mjs', import.meta.url).pathname;

const bank = JSON.parse(ler('lugares/data/lugares-bank.json'));
const args = process.argv.slice(2);
const pedidos = args.includes('--todos')
  ? readdirSync(saida).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5))
  : args;

const integrados = [], pulados = [];
for (const id of pedidos) {
  const arq = new URL(id + '.json', saida);
  if (!existsSync(arq)) { pulados.push(`${id}: sem arquivo`); continue; }
  const d = JSON.parse(readFileSync(arq, 'utf8'));
  if (bank.cases.some(c => c.placeId === d.case?.placeId)) { pulados.push(`${id}: já está no banco`); continue; }
  if (d.revisao?.veredito !== 'aprovado') { pulados.push(`${id}: ${d.revisao?.veredito || 'sem veredito'} (${d.revisao?.motivo || ''})`); continue; }
  try { execFileSync('node', [validar, arq.pathname], {stdio: 'pipe'}); }
  catch (e) { pulados.push(`${id}: não passou no validador\n${e.stdout}`); continue; }
  const c = structuredClone(d.case), mapa = {};
  const sufixo = c.placeId.toUpperCase().replace(/[^A-Z0-9]+/g, '_');
  for (const [sid, s] of Object.entries(d.sources)) {
    const b = bank.sources[sid];
    if (!b) { bank.sources[sid] = {...s, id: sid}; mapa[sid] = sid; continue; }
    if (b.url === s.url) { mapa[sid] = sid; continue; }
    let nid = `${sid}_${sufixo}`, k = 2;
    while (bank.sources[nid] && bank.sources[nid].url !== s.url) nid = `${sid}_${sufixo}_${k++}`;
    bank.sources[nid] = {...s, id: nid}; mapa[sid] = nid;
  }
  const remap = l => l.map(s => mapa[s] || s);
  for (const f of c.fields) f.sources = remap(f.sources);
  for (const p of bank.profiles) for (const k of c.profiles[p].cards) k.sources = remap(k.sources);
  c.sessionTitle = 'Destino em descoberta';
  if (c.geography.continents.length === 1 && c.geography.continents[0] === 'antartida') c.geography.countries = [];   // convenção do banco para a Antártida
  c.review = {...c.review, structural: 'passed', sourceLinked: true, factual: 'source-reviewed', publication: 'integrated'};
  bank.cases.push(c);
  integrados.push(c);
}
for (const m of pulados) console.log('pulado —', m);
if (!integrados.length) { console.log('Nada a integrar.'); process.exit(0); }

const n = bank.cases.length;
const hoje = new Intl.DateTimeFormat('en-CA', {timeZone: 'America/Sao_Paulo'}).format(new Date());
const lote = Number((bank.catalogVersion.match(/lote-(\d+)/) || [0, 0])[1]) + 1;
bank.catalogVersion = `lote-${lote}-${hoje}`;
bank.scope = `${n} destinos jogáveis em dois perfis`;
bank.status = `${n} destinos integrados; revisão comparativa e calibração em partidas pendentes`;
gravar('lugares/data/lugares-bank.json', JSON.stringify(bank, null, 2) + '\n');
execFileSync('node', [P('lugares/tools/generate-bank.mjs').pathname], {stdio: 'inherit'});

// Contagens pelo próprio motor do jogo
const ctx = {localStorage: {getItem: () => { throw Error('blocked'); }, setItem: () => { throw Error('blocked'); }}};
for (const f of ['sessao.js', 'cases-lugares.js', 'bank-runtime.js']) vm.runInNewContext(ler('lugares/' + f), ctx);
const B = ctx.MC_LUGARES_BANK;
const conta = t => B.elegiveis(12, {perfil: 'viajante', territorios: t}).length;
const milhar = v => v.toLocaleString('pt-BR');
const pistas = B.summary.clues;
const troca = (texto, re, fn, arquivo) => {
  let hits = 0;
  const novo = texto.replace(re, (...m) => { hits++; return fn(...m); });
  if (!hits) throw Error(`padrão não encontrado em ${arquivo}: ${re}`);
  return novo;
};

// tests/lugares.mjs
let t = ler('tests/lugares.mjs');
t = troca(t, /assert\.equal\(banco\.cases\.length,\d+\);assert\.equal\(B\.order\.length,\d+\);assert\.equal\(B\.summary\.clues,\d+\);/,
  () => `assert.equal(banco.cases.length,${n});assert.equal(B.order.length,${B.order.length});assert.equal(B.summary.clues,${pistas});`, 'tests/lugares.mjs');
t = troca(t, /select\(\[([^\]]*)\]\)\.length,\d+\)/g, (m, lista) => {
  const terr = lista.trim() ? lista.split(',').map(x => x.trim().replace(/^'|'$/g, '')) : [];
  return `select([${lista}]).length,${conta(terr)})`;
}, 'tests/lugares.mjs');
t = troca(t, /Array\.from\(\{length:\d+\}/, () => `Array.from({length:${n}}`, 'tests/lugares.mjs');
t = troca(t, /new Set\(sequence\)\.size,\d+/, () => `new Set(sequence).size,${n}`, 'tests/lugares.mjs');
t = troca(t, /ok Lugares: [\d.]+ pistas/, () => `ok Lugares: ${milhar(pistas)} pistas`, 'tests/lugares.mjs');
gravar('tests/lugares.mjs', t);

// tests/mesa-integracao.mjs: centro-oeste → + brasil → + américa (cliques acumulam a união)
let mi = ler('tests/mesa-integracao.mjs');
const seq = [conta(['centro-oeste']), conta(['centro-oeste', 'brasil']), conta(['centro-oeste', 'brasil', 'america'])];
let i = 0;
mi = troca(mi, /(lugares-disponiveis'\)\.textContent,\/)(\d+)( lugares\/)/g, (m, a, num, b) => `${a}${seq[i++] ?? num}${b}`, 'tests/mesa-integracao.mjs');
gravar('tests/mesa-integracao.mjs', mi);

// README.md (raiz)
let r = ler('README.md');
r = troca(r, /usam os mesmos \d+ lugares/, () => `usam os mesmos ${n} lugares`, 'README.md');
r = troca(r, /\*\*[\d.]+ pistas\*\*/, () => `**${milhar(pistas)} pistas**`, 'README.md');
gravar('README.md', r);

// lugares/README.md: tabela do catálogo e resumo
const CONT = {america: 'Américas', europa: 'Europa', africa: 'África', asia: 'Ásia', oceania: 'Oceania', antartida: 'Antártida'};
const REG = {norte: 'Norte', nordeste: 'Nordeste', 'centro-oeste': 'Centro-Oeste', sudeste: 'Sudeste', sul: 'Sul'};
const rotulo = c => {
  const g = c.geography;
  if (g.countries.includes('BR')) return 'Brasil / ' + g.brazilRegions.map(x => REG[x]).join(' e ');
  return g.continents.map(x => CONT[x]).join(' / ');
};
let lr = ler('lugares/README.md');
// Reconstrói a tabela pelo banco final: revisar um lugar não cria outra linha.
lr = troca(lr, /\| Lugar \| Recorte \|[\s\S]*?(?=\nSão \d+ lugares,)/,
  () => ['| Lugar | Recorte |', '|---|---|', ...bank.cases.map(c => `| ${c.title} | ${rotulo(c)} |`), ''].join('\n'),
  'lugares/README.md');
const alternativas = bank.cases.reduce((s, c) => s + c.fields.reduce((a, f) => a + f.options.length, 0), 0);
const ampliadas = bank.cases.filter(c => c.fields[0].options.length === 24).length;
lr = troca(lr, /São \d+ lugares, \d+ conjuntos de pistas \(dois por lugar\), [\d.]+ pistas, [\d.]+ perguntas distintas e [\d.]+ alternativas: de 8 a 24 para identificar cada lugar e quatro nos demais campos; \d+ lugares têm listas principais ampliadas\./,
  () => `São ${n} lugares, ${B.order.length} conjuntos de pistas (dois por lugar), ${milhar(pistas)} pistas, ${milhar(n * 4)} perguntas distintas e ${milhar(alternativas)} alternativas: de 8 a 24 para identificar cada lugar e quatro nos demais campos; ${ampliadas} lugares têm listas principais ampliadas.`, 'lugares/README.md');
gravar('lugares/README.md', lr);

// METAS-POR-RECORTE.md
let mt = ler('lugares/docs/METAS-POR-RECORTE.md');
for (const [titulo, chave] of [['Brasil', 'brasil'], ['Américas (sem Brasil)', 'america'], ['Europa', 'europa'], ['África', 'africa'], ['Ásia', 'asia'], ['Oceania', 'oceania'], ['Antártida', 'antartida'], ['Norte', 'norte'], ['Nordeste', 'nordeste'], ['Centro-Oeste', 'centro-oeste'], ['Sudeste', 'sudeste'], ['Sul', 'sul']]) {
  const v = conta([chave]);
  mt = troca(mt, new RegExp(`\\| ${titulo.replace(/[()]/g, '\\$&')} \\| \\d+ \\| (\\d+) \\| \\d+ \\|`), (m, alvo) => `| ${titulo} | ${v} | ${alvo} | ${Math.max(0, alvo - v)} |`, 'METAS-POR-RECORTE.md');
}
gravar('lugares/docs/METAS-POR-RECORTE.md', mt);

// plano-expansao.json
const plano = JSON.parse(ler('lugares/data/plano-expansao.json'));
plano.draftedPlaces = bank.cases.map(c => c.title);
const GRUPO = {norte: 'Brasil Norte', nordeste: 'Brasil Nordeste', 'centro-oeste': 'Brasil Centro Oeste', sudeste: 'Brasil Sudeste', sul: 'Brasil Sul', america: 'América outros recortes', europa: 'Europa', africa: 'África', asia: 'Ásia', oceania: 'Oceania', antartida: 'Antártida'};
for (const c of integrados) {
  const g = c.geography, chave = g.countries.includes('BR') ? g.brazilRegions[0] : g.continents[0];
  const lista = plano.groups[GRUPO[chave]];
  if (lista && !lista.includes(c.title)) lista.push(c.title);
}
gravar('lugares/data/plano-expansao.json', JSON.stringify(plano, null, 2) + '\n');

// cache do index
let ix = ler('lugares/index.html');
ix = troca(ix, /cases-lugares\.js\?v=lug(\d+)/, (m, v) => `cases-lugares.js?v=lug${Number(v) + 1}`, 'lugares/index.html');
gravar('lugares/index.html', ix);

console.log(`Integrados ${integrados.length}: ${integrados.map(c => c.title).join('; ')}`);
console.log(`Banco: ${n} lugares, ${milhar(pistas)} pistas.`);
for (const [titulo, chave] of [['Brasil', 'brasil'], ['Américas', 'america'], ['Europa', 'europa'], ['África', 'africa'], ['Ásia', 'asia'], ['Oceania', 'oceania'], ['Antártida', 'antartida'], ['Norte', 'norte'], ['Nordeste', 'nordeste'], ['Centro-Oeste', 'centro-oeste'], ['Sudeste', 'sudeste'], ['Sul', 'sul']])
  console.log(`  ${titulo}: ${conta([chave])}`);
