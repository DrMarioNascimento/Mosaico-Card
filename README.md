# Mosaico Card — Mercado de Pistas

Jogo digital multiplayer de fragmentos, pistas, economia e inferência. O MOSAICO explora a distância entre aquilo que parece ter acontecido e aquilo que os fatos permitem concluir.

> O fato cabe na carta; a interpretação, não.

**Jogar:** [drmarionascimento.github.io/Mosaico-Card](https://drmarionascimento.github.io/Mosaico-Card/)

## Estado atual

A arquitetura da partida permanece implementada. O catálogo editorial anterior foi descartado e `cases-nt.js` agora é a saída reproduzível do novo banco **NT/NAA v2**. Não existe meta numérica: o total será consequência do levantamento dos 27 livros e dos critérios de dedução. João foi analisado por recorte; Mateus e Marcos foram analisados por recorte; Lucas foi analisado por recorte e Atos foi analisado por recorte e Romanos foi analisado. O banco tem 63 pautas autoradas: 54 elegíveis e 9 bloqueadas por capacidade ou qualidade dedutiva, sem duplicação artificial. Os 27 livros receberam decisões por recorte; todas as decisões interpretativas autorizadas no checkpoint 027 foram reavaliadas individualmente, e os casos curtos ou sem dente permanecem fora do sorteio.

A demonstração independente **A ovelha perdida** continua em `case-ovelha.js`; não pertence ao catálogo nem ao sorteio e não determina qualquer ID novo. O documento mestre e o checkpoint estão em [`docs/BANCO-NT-MESTRE.md`](docs/BANCO-NT-MESTRE.md), e a cobertura está em [`docs/COBERTURA-NT-NAA.md`](docs/COBERTURA-NT-NAA.md).

## Fluxo da sala

1. O Mestre configura a sala antes de criá-la: escolhe **30, 45 ou 60 segundos**, duração curta/padrão/longa e uso opcional de telão.
2. A sala é aberta e o QR Code fica disponível imediatamente.
3. O Mestre informa sua identidade e escolhe sua camada de assistência, pois também participa como jogador.
4. Cada participante entra e escolhe individualmente **Livre, Assistida ou Guiada**.
5. O início só é liberado com 2 a 12 participantes e todos marcados como prontos. Mesas com 3 ou mais pessoas continuam recomendadas para ampliar a diversidade de perspectivas.
6. A pauta é sorteada apenas no início da partida.

O tempo sugerido pelo sistema depende do tamanho da mesa: 60 s para 2–5 jogadores, 45 s para 6–8 e 30 s para 9–12. O Mestre pode escolher outro dos três valores, mas não informar um prazo livre.

A assistência é pessoal e não muda fatos, alternativas, custos, tempo ou pontuação. A seleção já integra o fluxo e é preservada localmente; a diferenciação detalhada do conteúdo das três camadas ainda depende da redação dos auxílios de cada pauta.

## Regras consolidadas

- Um acerto fecha o campo para toda a mesa e registra sua pontuação.
- Um erro fecha o campo somente para quem arriscou; os demais ainda podem tentar.
- O turno passa automaticamente quando o cronômetro chega a zero.
- A duração normal é calculada em ciclos completos: `2 + teto(campos / jogadores)`, limitada entre 3 e 5 ciclos.
- Encerrado o tempo normal, começa um fechamento gratuito de 60 segundos para os campos ainda elegíveis.
- No fechamento, mais de um jogador pode acertar o mesmo campo aberto; uma cicatriz anterior continua bloqueando aquele jogador.
- Somente campos fechados e denários restantes entram no resultado.
- A pontuação é revelada em parcelas e termina com ranking completo e pódio.

Nas pautas atuais de quatro campos, os valores-base são `8 / 5 / 3 / 2`. O momento do fechamento aplica `1,3` no primeiro terço, `1,1` no segundo e `1,0` no terceiro e no fechamento final. O saldo residual vale `INT(denários / 4)`.

Os critérios de desempate, nesta ordem, são: maior total, menos campos queimados, mais denários e fechamento mais cedo do campo focal.

## Economia e ovelhas

Custos do modo econômico:

| Ação | Custo |
| --- | ---: |
| Comprar | 4 denários |
| Capturar | 2 denários |
| Arriscar | 3 denários |
| Consignar | 0 denário |

Nas partidas normais, a ovelha é um bônus embaralhado no monte. Concede 6 denários imediatamente, exibe a animação e sai do jogo; não permanece na mão ou nas pistas e não gera pontuação residual própria.

| Jogadores | Padrão | Curta | Longa |
| --- | ---: | ---: | ---: |
| 2–5 | 1 | 1 | 2 |
| 6–8 | 2 | 1 | 3 |
| 9–12 | 3 | 2 | 4 |

## Banco NT e sorteio

A fonte editável versionada é `data/nt-bank.json`, validada por `tools/validate-nt-bank.mjs` e gerada por `tools/generate-nt-bank.mjs`. Somente pautas aprovadas estrutural, bíblica e editorialmente, sem ambiguidades, entram no saco. A chave persistida incorpora namespace, versão do catálogo e versão do esquema, impedindo que o saco legado contamine os novos IDs `nt2-*`.

## Arquitetura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Cenas de entrada, configuração, assistência, lobby, partida, telão, fechamento e pódio. |
| `sala.js` | Fluxo Mestre/jogadores, prontidão, QR Code, configuração e transações da sala. |
| `game-core.js` | Regras puras de tempo, ovelhas, respostas, pontuação, fase final e ranking. |
| `game.js` | Estado da partida, ações, cronômetros, animações, renderização e apuração. |
| `game-sala.js` | Serialização e sincronização do motor com a sala compartilhada. |
| `cases-nt.js` | Catálogo NT gerado mecanicamente; não deve ser editado à mão. |
| `bank-runtime.js` | Elegibilidade e saco de sorteio das pautas. |
| `case-ovelha.js` | Demonstração isolada da carta da ovelha. |
| `data/nt-bank.json` | Fonte editorial editável do novo banco. |
| `tools/validate-nt-bank.mjs` | Validador estrutural e de elegibilidade. |
| `tools/generate-nt-bank.mjs` | Gerador determinístico de `cases-nt.js`. |

O Mestre é a autoridade dos relógios e das mudanças de fase. As publicações usam transação no Firestore e `turnoId` crescente para rejeitar ações atrasadas ou repetidas.

## Geração do banco

```bash
npm run validate:bank
npm run generate:bank
npm test
```

O importador da planilha antiga falha deliberadamente para impedir reintrodução acidental do conteúdo descartado. Validação estrutural não declara fidelidade bíblica.

## Desenvolvimento e testes

O projeto usa HTML, CSS e JavaScript sem etapa de compilação. Sirva a pasta por HTTP para testar no navegador.

```bash
npm test
```

A suíte executa verificação de sintaxe e contratos de identidade, QR/sala, estrutura visual, fechamento híbrido, cronômetros, ovelhas, ciclos, fase final, pontuação, ranking, catálogo NT e saco de sorteio. O GitHub Actions roda a validação em pushes e pull requests.

## Documentação

- [`docs/CONSOLIDACAO-OPERACIONAL.md`](docs/CONSOLIDACAO-OPERACIONAL.md): contrato Mestre–jogador–telão e regras da partida.
- [`docs/BANCO-NT-MESTRE.md`](docs/BANCO-NT-MESTRE.md): mandato, contrato, fontes e checkpoints.
- [`docs/COBERTURA-NT-NAA.md`](docs/COBERTURA-NT-NAA.md): matriz dos 27 livros.
- [`docs/AUDITORIA.md`](docs/AUDITORIA.md): estado técnico e riscos que ainda exigem validação.

## About sugerido para o GitHub

**Descrição:** Jogo multiplayer de fragmentos, economia e inferência do projeto MOSAICO, com pautas canônicas do Novo Testamento.

**Website:** https://drmarionascimento.github.io/Mosaico-Card/

**Topics:** `mosaico`, `card-game`, `multiplayer`, `firebase`, `firestore`, `javascript`, `mobile-first`, `serious-game`, `educational-game`.

Criação: **M&O**.
