# Protocolo de criação — novos lugares do Mosaico Card Lugares

Você cria lugares novos, do zero, no mesmo formato e com o mesmo rigor da revisão (`PROTOCOLO.md` — leia-o primeiro: as regras de campos,
pistas, perfis, fontes, geografia, saída e validador valem igualmente aqui). Tudo em pt-BR.

## Antes de escrever
- Confira que o lugar ainda não existe: `lugares/data/lugares-bank.json` (títulos e aliases) e `work/revisao-lugares/lotes.json` (rascunhos em revisão). Se já existir, avise e pule.
- Delimite o objeto (cidade, parque, sítio, ilha…) e use o nome oficial em pt-BR como título; aliases só se úteis (ex.: nome local).
- Pesquise em fontes confiáveis e abra cada página (WebSearch + WebFetch): UNESCO World Heritage Centre, órgãos oficiais de turismo/patrimônio/parques,
  governos, institutos geográficos, universidades, Tratado da Antártida (ats.aq), Britannica. Junte de 4 a 8 fontes por lugar. Nunca invente URL ou dado.

## O que criar
- `id`: `lug3-<placeId>`; `placeId`: slug curto sem acento (ex.: `londres`, `abu-simbel`); `answerType` (ex.: "cidade", "parque nacional", "sítio arqueológico").
- `question`: "Que lugar é este e quais características completam seu mosaico?"; `focalFieldId`: "C1"; `sessionTitle`: "Destino em descoberta".
- 4 campos: C1 identifica o lugar (12 a 24 alternativas comparáveis do mesmo recorte e categoria; a resposta é o título); C2–C4 são características
  verificáveis e diferenciadoras (ex.: rio que atravessa, período de fundação, bioma, povo construtor, material, fenômeno natural), cada um com 4 alternativas
  plausíveis e gabarito único. Rótulos de C2–C4 não podem entregar o C1.
- 25 pistas Viajante + 25 Geógrafo, com ids `<placeId>-viajante-P01`… e `<placeId>-geografo-P01`…, `factKey` `<placeId>-F01`… (a mesma factKey pode ligar
  pistas dos dois perfis sobre o mesmo fato), `relatedFields`, `clueType` (territorio, paisagem, cultura, historia, processo, clima, agua, relevo, biodiversidade,
  urbanismo, patrimonio, construcao, localizacao, pesquisa), `signalStrength`/`recommendedMoment` (1–2 abertura/early, 1–2 decisiva/late, o resto conexao/middle),
  `importance: "relevant"`, `twoPlayerSuitable: true`. Cada pista com a fonte que a sustenta.
- Progressão: comece com pistas compatíveis com outros lugares do recorte e vá diferenciando; inclua pistas que levem a C2–C4.
- `reveal`: `canonicalSummary` (1 frase) e `editorialNotes` (1–3 ressalvas). `review` como no protocolo, com `editorial: "criado e verificado nas fontes"`.
- `aliases`: lista (pode ser vazia). Nenhuma pista pode conter o título nem os aliases.

## Saída
`work/revisao-lugares/saida/<placeId>.json` com `case`, `sources` (só as usadas; ids com prefixo do lugar, ex.: `LONDRES_UNESCO`) e `revisao`
(`veredito: "aprovado"`, `fontesAbertas`, `alteracoes: ["criado do zero"]`, `naoVerificado: []`). Rode o validador até ✓.
Se não conseguir fontes suficientes para um lugar, não o entregue: avise no resumo final.
