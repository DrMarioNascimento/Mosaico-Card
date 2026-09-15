# Mosaico Card — Mercado de Pistas

Jogo digital multiplayer de fragmentos, pistas, economia e inferência. O MOSAICO explora a distância entre aquilo que parece ter acontecido e aquilo que os fatos permitem concluir.

> O fato cabe na carta; a interpretação, não.

**Jogar:** [drmarionascimento.github.io/Mosaico-Card](https://drmarionascimento.github.io/Mosaico-Card/)

Catálogo vigente: **NT/NAA v2**, checkpoint `checkpoint-108-marcos-colchetes-excluidos`. Fonte: Nova Almeida Atualizada. Âmbito: Novo Testamento (27 livros).

## Estado atual

O jogo está publicado e jogável. `cases-nt.js` é a saída reproduzível de `data/nt-bank.json`. Toda pauta do saco tem quatro campos, duas pistas por jogador no início e ao menos uma carta no poço.

| | |
| --- | ---: |
| Pautas jogáveis | **350** |
| Cartas de pista | **6.525** |
| Strings de pista exatamente distintas | 6.485 |
| Campos de resposta | **1.400** |
| Recortes com referência NAA | 363 |
| Jogadores por mesa | **2 a 12** |
| Pautas que comportam 2 jogadores | 350 |
| Pautas que comportam 12 jogadores | 99 |

350 IDs não são 350 histórias independentes: há recortes distintos do mesmo episódio.

A revisão de `nt2-mateus-ais-juramentos` (“Ai de vocês”, Mt 23.1 + 23.13) está publicada via `case-mt23.js`. Não há fila de publicação aberta.

Fila textual isolada de Marcos encerrada em 15/09/2026: Mc 7.16, 9.44, 9.46, 11.26, 15.28 e 16.9-20 fora do jogo. Ver [`docs/FILAS-ENCERRADAS.md`](docs/FILAS-ENCERRADAS.md) e [`data/nt-editorial-exclusions.json`](data/nt-editorial-exclusions.json).

Playtest registrado em 14/09/2026: `nt2-1joao-confianca-oracao-pecado-conhecimento` (1 João 5.13-21), `approved-playtested`.

### Pautas por bloco

| Bloco | Pautas |
| --- | ---: |
| Mateus | 91 |
| Marcos | 78 |
| Apocalipse | 34 |
| Atos | 26 |
| João | 20 |
| Lucas | 16 |
| Cartas paulinas | 55 |
| Cartas gerais | 27 |
| Paralelos sinóticos (mais de um Evangelho) | 3 |

Capacidade da pauta: `min(12, floor((pistas - 1) / 2))`.

A demonstração **A ovelha perdida** permanece em `case-ovelha.js`. Não entra no sorteio. Nas partidas NT as ovelhas são bônus inseridos no monte na hora do deal.

A resposta canônica é o que a NAA daquele recorte afirma. Tradição externa não é gabarito. Perspectivas distintas sobre o mesmo texto podem coexistir em pautas diferentes; uma não anula a outra.

Documentos de acompanhamento: [`docs/BANCO-NT-MESTRE.md`](docs/BANCO-NT-MESTRE.md), [`docs/COBERTURA-NT-NAA.md`](docs/COBERTURA-NT-NAA.md), [`docs/RELATORIO-PARCIAL-CAPACIDADE-NT.md`](docs/RELATORIO-PARCIAL-CAPACIDADE-NT.md), [`docs/FILAS-ENCERRADAS.md`](docs/FILAS-ENCERRADAS.md).

## Fluxo da sala

1. Abertura com Bíblia e peça dourada.
2. Tela de explicação da partida — mestre e convidado passam por ela.
3. O Mestre configura a sala: **30, 45 ou 60 segundos**, duração curta/padrão/longa e telão opcional.
4. A sala é aberta e o QR Code fica disponível imediatamente.
5. O Mestre informa sua identidade e escolhe sua camada de assistência, pois também participa como jogador.
6. Cada participante entra e escolhe individualmente **Livre, Assistida ou Guiada**.
7. O início só é liberado com 2 a 12 participantes e todos marcados como prontos.
8. A pauta é sorteada apenas no início da partida.

Tempo sugerido: 60 s para 2–5 jogadores, 45 s para 6–8 e 30 s para 9–12. O Mestre escolhe um desses três valores.

A assistência é pessoal e não muda fatos, alternativas, custos, tempo ou pontuação. Os códigos internos C, P e H organizam o banco; a mesa mostra rótulos, texto da pista e síntese — não os ids.

Na mesa, o título da pauta fica no bloco da citação/pergunta, não na faixa do logo.

## Regras consolidadas

- Um acerto fecha o campo para toda a mesa e registra sua pontuação.
- Um erro fecha o campo somente para quem arriscou; os demais ainda podem tentar.
- O turno passa automaticamente quando o cronômetro chega a zero.
- A duração normal é `2 + teto(campos / jogadores)`, limitada entre 3 e 5 ciclos.
- Encerrado o tempo normal, começa um fechamento gratuito de 60 segundos para os campos ainda elegíveis.
- No fechamento, mais de um jogador pode acertar o mesmo campo aberto; uma cicatriz anterior continua bloqueando aquele jogador.
- Somente campos fechados e denários restantes entram no resultado.
- A pontuação é revelada em parcelas e termina com ranking e pódio.

Valores-base dos quatro campos: `8 / 5 / 3 / 2`. Multiplicador do momento: `1,3` no primeiro terço, `1,1` no segundo, `1,0` no terceiro e no fechamento. Residual: `denários × 0,35`.

Desempate, nesta ordem: maior total, menos campos queimados, mais denários, fechamento mais cedo do campo focal.

## Economia e ovelhas

| Ação | Custo |
| --- | ---: |
| Comprar | 4 denários |
| Capturar | 2 denários |
| Arriscar | 3 denários |
| Consignar | 0 denário |

A ovelha vale 6 denários, anima e sai do jogo. Não fica na mão, não vai ao balaio, não pode ser capturada e não entra no residual.

| Jogadores | Padrão | Curta | Longa |
| --- | ---: | ---: | ---: |
| 2–5 | 1 | 1 | 2 |
| 6–8 | 2 | 1 | 3 |
| 9–12 | 3 | 2 | 4 |

## Banco NT e sorteio

Fonte editável: `data/nt-bank.json`. Validação: `tools/validate-nt-bank.mjs`. Geração: `tools/generate-nt-bank.mjs`. Só entram pautas aprovadas estrutural, bíblica e editorialmente, sem ambiguidades abertas. A chave do saco junta namespace, versão do catálogo, esquema e número de jogadores.

## Arquitetura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Cenas de entrada, configuração, assistência, lobby, partida, telão, fechamento e pódio. |
| `abertura.js` | Abertura, explicação da partida e título da pauta junto da citação. |
| `sala.js` | Fluxo Mestre/jogadores, prontidão, QR Code, configuração e transações da sala. |
| `game-core.js` | Regras de tempo, ovelhas, respostas, pontuação, fase final e ranking. |
| `game.js` | Estado da partida, ações, cronômetros, animações, renderização e apuração. |
| `game-sala.js` | Sincronização do motor com a sala compartilhada. |
| `cases-nt.js` | Catálogo NT gerado; não editar à mão. |
| `case-mt23.js` | Publicação vigente de `nt2-mateus-ais-juramentos`. |
| `bank-runtime.js` | Elegibilidade, saco de sorteio e carga do override de Mt 23. |
| `hud-fix.css` | Ajustes de HUD (saldo, cronômetro, destaque de resposta). |
| `case-ovelha.js` | Demonstração isolada da carta da ovelha. |
| `data/nt-bank.json` | Fonte editorial do banco. |
| `tools/validate-nt-bank.mjs` | Validador estrutural e de elegibilidade. |
| `tools/generate-nt-bank.mjs` | Gerador de `cases-nt.js`. |

O Mestre é a autoridade dos relógios e das mudanças de fase. As publicações usam transação no Firestore e `turnoId` crescente.

## Geração do banco

```bash
npm run validate:bank
npm run generate:bank
npm test
```

O importador da planilha antiga falha de propósito. Validação estrutural não declara fidelidade bíblica.

## Desenvolvimento e testes

HTML, CSS e JavaScript, sem etapa de compilação. Sirva a pasta por HTTP.

```bash
npm test
```

A suíte cobre sintaxe, identidade, QR/sala, estrutura, fechamento, cronômetros, ovelhas, ciclos, fase final, pontuação, ranking, catálogo NT e saco. O GitHub Actions valida pushes e pull requests.

## Documentação

- [`docs/CONSOLIDACAO-OPERACIONAL.md`](docs/CONSOLIDACAO-OPERACIONAL.md): contrato Mestre–jogador–telão.
- [`docs/BANCO-NT-MESTRE.md`](docs/BANCO-NT-MESTRE.md): mandato, contrato, fontes e checkpoints.
- [`docs/COBERTURA-NT-NAA.md`](docs/COBERTURA-NT-NAA.md): matriz dos 27 livros.
- [`docs/AUDITORIA.md`](docs/AUDITORIA.md): estado técnico e riscos.
- [`docs/RELATORIO-PARCIAL-CAPACIDADE-NT.md`](docs/RELATORIO-PARCIAL-CAPACIDADE-NT.md): capacidade por número de jogadores.
- [`docs/FILAS-ENCERRADAS.md`](docs/FILAS-ENCERRADAS.md): filas de decisão encerradas.

## About sugerido para o GitHub

**Descrição:** Jogo multiplayer de pistas e inferência do MOSAICO, com 350 pautas do Novo Testamento (NAA).

**Website:** https://drmarionascimento.github.io/Mosaico-Card/

**Topics:** `mosaico`, `card-game`, `multiplayer`, `firebase`, `firestore`, `javascript`, `mobile-first`, `serious-game`, `educational-game`, `nova-almeida-atualizada`

Criação: **M&O**.
