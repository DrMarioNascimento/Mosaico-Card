# Banco NT de 145 pautas

## Papel do banco

`MOSAICO_NT_Banco_145.xlsx` substitui integralmente o catálogo anterior de casos. O código gerado fica em `cases-nt.js`; casos antigos não funcionam como reserva quando o banco está bloqueado.

A demonstração da ovelha permanece em `case-ovelha.js` como objeto isolado. Ela não pertence ao banco, não entra no sorteio e não deve ser confundida com o recorte canônico “A ovelha perdida” existente em `nt-052`.

## Leitura correta da planilha

O banco organiza a construção da pauta segundo esta gramática:

```text
realidade canônica → incógnitas suportadas → foco → pergunta → quatro campos → fragmentos → inferência
```

As nove naturezas de incógnita são QUEM, O QUÊ, QUANTO, ONDE, QUANDO, QUANTAS VEZES, COMO, POR QUÊ e QUAL/QUE TIPO.

| Coluna/conceito | Interpretação operacional |
| --- | --- |
| `Linhas que fecham` | Naturezas que o recorte bíblico consegue sustentar. |
| `Em branco` | Naturezas que não devem ser forçadas naquele recorte. |
| `Foco` | Natureza selecionada para a pauta já escrita. |
| `Pergunta` | Pergunta concreta da partida, não gerada em tempo de execução. |
| `C1–C4` | Quatro campos derivados dessa pergunta. |
| `Faixa 4–9` | Quantidade de naturezas suportadas pelo recorte; não é quantidade de campos. |
| `Pista cara`, `Dente` e `Não inventa` | Material editorial para autoria e validação, não carta pronta. |

O sistema sorteia pautas completas previamente escritas. Ele não sorteia uma incógnita para improvisar pergunta nem reutiliza automaticamente os mesmos campos sob outro foco.

## Conteúdo importado

| Métrica | Quantidade |
| --- | ---: |
| Pautas | 145 |
| Campos | 580 |
| Campos por pauta | 4 |
| Pautas com quatro opções em todos os campos | 143 |
| Pautas sem opção ausente ou repetida | 142 |
| Campos com quatro opções | 572 |
| Gabaritos inferíveis por igualdade textual exata | 87 |
| Pautas atualmente jogáveis | 0 |

Os IDs são contínuos de `nt-001` a `nt-145`. Todas as pautas possuem metadados canônicos, foco, pergunta e `C1–C4`; a edição bíblica registrada é a Nova Almeida Atualizada.

## Por que nenhuma pauta está liberada

A planilha é uma base editorial robusta, mas ainda não é um baralho executável. Cada pauta recebe `status.playable: false` pelos seguintes bloqueios:

### 1. Baralho ausente

Não há uma lista de cartas/fragmentos pronta para cada caso. `Pista cara`, `Dente`, referências e limites editoriais ajudam a escrever o baralho, mas não substituem as cartas distribuídas aos jogadores.

Cada pauta precisa de `deck.cards` validado, com fragmentos suficientes para distribuição, poço, negociação e dedução sem revelar isoladamente toda a resposta.

### 2. Campo focal ausente

O foco da pergunta não identifica sozinho qual entre `C1–C4` deve ocupar o topo e valer 8 pontos. Cada pauta precisa declarar `focalFieldId`; não se deve assumir que `C1` seja sempre o foco.

Depois da marcação, o campo focal será apresentado primeiro e os demais receberão, na ordem da partida, `5 / 3 / 2`.

### 3. Gabaritos explícitos ausentes

A resposta canônica e a alternativa correta frequentemente usam redações diferentes. Uma comparação de texto encontrou correspondência exata e única em apenas 87 dos 580 campos. Isso não indica erro nas demais respostas; indica apenas que o programa não pode adivinhar com segurança qual opção é a correta.

Cada campo precisa receber um identificador validado, como `C2-O3`, por decisão editorial humana.

### 4. Inconsistências concretas

- `nt-020` — Emaús: os quatro campos estão sem alternativas.
- `nt-031` — Negação no pátio: os quatro campos estão sem alternativas.
- `nt-035`, campo `C1` — há duas alternativas com o mesmo texto “Nada”.

Esses pontos precisam ser corrigidos na planilha e reimportados.

## Contrato para liberar uma pauta

Cada pauta precisa de:

- baralho de fragmentos validado;
- indicação explícita de `focalFieldId`;
- quatro opções únicas por campo;
- `respostaId` validada em todos os campos;
- valores `8 / 5 / 3 / 2` atribuídos na ordem final de apresentação;
- revisão editorial e bíblica.

Somente depois desses requisitos seu `status.playable` pode ser alterado para `true`. A liberação pode ocorrer por lotes: o saco seleciona apenas as pautas já validadas.

## Importação

`cases-nt.js` é gerado mecanicamente e não deve ser editado à mão. Use caminhos explícitos:

```bash
node tools/import-nt-bank.mjs /caminho/MOSAICO_NT_Banco_145.xlsx cases-nt.js
npm test
```

O importador exige o módulo `@oai/artifact-tool` e valida:

- 145 IDs únicos, sequenciais e ordenados;
- 580 linhas na aba `Campos`;
- quatro campos `C1–C4` por pauta;
- correspondência entre as abas `Banco` e `Campos`;
- ausência da demonstração da ovelha no namespace NT.

A detecção automática de gabarito aceita somente correspondência textual exata e única. Qualquer outro caso permanece pendente de confirmação humana.

## Saco de sorteio

`bank-runtime.js` mantém um saco persistido no navegador:

1. filtra apenas pautas com `status.playable === true`;
2. embaralha o conjunto elegível;
3. não repete uma pauta antes de esgotar o saco;
4. ao recompô-lo, evita repetir imediatamente a última pauta sorteada;
5. se não houver pauta jogável, devolve o bloqueio editorial sem recorrer ao catálogo anterior.

O arquivo gerado preserva o último ID no armazenamento local.

## Expansão futura

Um recorte de faixa alta poderá receber outras pautas completas. Cada nova pauta deve possuir pergunta, campos, fragmentos e solução próprios. A faixa nunca autoriza o sistema a fabricar perguntas ou campos durante a partida.
