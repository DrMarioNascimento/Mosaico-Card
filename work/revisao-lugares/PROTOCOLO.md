# Protocolo de revisão completa — Mosaico Card Lugares (rascunhos → banco)

Você revisa rascunhos de lugares para o jogo Mosaico Card Lugares (pt-BR). Cada lugar tem 4 campos com alternativas e gabarito,
25 pistas no perfil **Viajante** e 25 no **Geógrafo**, e fontes. O objetivo é que só entre no banco o que estiver **verificado nas fontes**.

## Arquivos
- Repositório: `/home/claude/mosaico-card` (não rode git; não edite nada fora de `work/revisao-lugares/saida/`).
- Rascunhos: `work/lugares-expansao-rascunhos/<arquivo>.json` — formato `{ "sources": {...}, "cases": [ ... ] }` (alguns arquivos têm vários lugares; use só o seu `placeId`).
- Banco atual (referência de estilo, não edite): `lugares/data/lugares-bank.json`. Leia 1 ou 2 lugares já integrados para pegar o tom, por exemplo `los-glaciares`, `belo-horizonte`.
- Regras editoriais: `lugares/docs/METAS-POR-RECORTE.md` (seção "Critérios de autoria e revisão") e `lugares/README.md`.
- Validador: `node work/revisao-lugares/validar.mjs work/revisao-lugares/saida/<placeId>.json` (rode a partir da raiz do repositório).

## Para cada lugar do seu lote
0. **Acesso à web nesta sessão (importante)**: o WebFetch só abre endereços que vieram de uma busca (WebSearch) feita por você; URLs copiadas do rascunho são recusadas e geram um pedido de permissão que ninguém vai responder — **não tente abri-las direto**. Faça a busca (ex.: nome do lugar + instituição) e abra os links dos resultados. A cota de buscas é compartilhada entre todos os agentes: use **no máximo 4 buscas por lugar**, buscas boas e específicas (uma busca pode trazer a página da UNESCO, do órgão oficial e da prefeitura de uma vez).
1. **Abra as fontes** com WebFetch (todas as usadas). Se uma fonte não abrir, procure a página equivalente da mesma instituição (WebSearch) ou outra fonte confiável (órgão oficial, UNESCO, IBGE, prefeitura, governo, parque/órgão ambiental, universidade, enciclopédia reconhecida). Toda URL precisa ser `https://` e você precisa ter aberto a página. Nunca invente URL, título ou dado.
2. **Confira cada afirmação** das 50 pistas e dos 4 gabaritos contra o que você leu. Para cada pista: verificada → mantenha (melhore a redação se precisar); errada ou sem apoio → corrija para o que a fonte diz, ou troque por outra pista verificada (e vincule a fonte certa). Números (população, área, altitude, datas) só com fonte e ano; se a fonte não tiver, tire o número.
3. **Campos e alternativas**:
   - C1 é a identificação do lugar: 8 a 24 alternativas comparáveis (mesma categoria, mesmo recorte); C2–C4 têm exatamente 4 alternativas.
   - Cada gabarito precisa ser único e inequívoco: nenhuma outra alternativa pode estar também correta. Alternativas plausíveis, da mesma natureza, sem uma que "só ela combina" com o rótulo.
   - Rótulos e alternativas de C2–C4 não podem entregar o C1 sem investigação (ex.: um rótulo com o nome do rio que só existe ali).
4. **Pistas**:
   - Nenhuma pista pode conter o título nem os aliases (o validador barra).
   - Viajante: linguagem familiar (paisagem, clima, rios, relevo, cultura, comida, passeio). Geógrafo: relações espaciais, causas, processos e explicações — não é o Viajante com sinônimos técnicos. Os textos dos dois perfis são diferentes.
   - Começo vago (compatível com outros lugares) e diferenciação progressiva; marque 1–2 pistas `signalStrength: "abertura"` (`recommendedMoment: "early"`) e 1–2 `"decisiva"` (`"late"`) por perfil; o resto `"conexao"`/`"middle"`.
   - Mantenha os ids (`<placeId>-viajante-P01`… `-P25`), `factKey`, `relatedFields` (ids de campo existentes), `clueType`, `importance`, `twoPlayerSuitable: true`.
5. **Geografia**: `countries` (ISO de 2 letras; na Antártida, `[]`, como no banco), `continents` (america, europa, africa, asia, oceania, antartida), `brazilRegions` (só no Brasil: norte, nordeste, centro-oeste, sudeste, sul). Lugar no Brasil tem `continents: ["america"]`. Confira se o recorte está certo.
6. **Marque a revisão no próprio case**: `review = {"structural":"passed","sourceLinked":true,"factual":"source-reviewed","playtest":"pending","publication":"integrated","editorial":"<1 frase do que foi revisto>"}`; `sessionTitle: "Destino em descoberta"`; `reveal.canonicalSummary` correto e `reveal.editorialNotes` com 1–3 notas úteis (ressalvas, datas divergentes). Atualize `checkedAt` das fontes abertas para `2026-11-15`.
7. **Escreva** `work/revisao-lugares/saida/<placeId>.json`:
   ```json
   {
     "case": { ...o lugar completo, revisado... },
     "sources": { "<ID>": {"id":"<ID>","title":"...","publisher":"...","url":"https://...","checkedAt":"2026-11-15"}, ... },
     "revisao": {
       "veredito": "aprovado",
       "fontesAbertas": ["https://...", "..."],
       "alteracoes": ["C3: gabarito corrigido de X para Y (fonte Z)", "viajante P07 reescrita: ..."],
       "naoVerificado": [],
       "motivo": ""
     }
   }
   ```
   Só inclua em `sources` as fontes usadas por esse lugar (ids podem ser os do rascunho; se criar novas, use um prefixo do lugar, ex.: `BWINDI_UWA`).
   Se o lugar não puder ser aprovado (fontes não confirmam o essencial, gabarito ambíguo sem conserto, recorte errado), use `"veredito": "reprovado"` e explique em `motivo` — não force aprovação.
8. Rode o validador até dar ✓ (avisos podem ficar, se justificados).

## Ao terminar o lote
Responda em poucas linhas: para cada lugar, veredito, nº de pistas alteradas/trocadas e qualquer ressalva. Não repita o conteúdo das pistas.
