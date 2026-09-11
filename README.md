# Mosaico Card — Mercado de Pistas

Jogo digital multiplayer de fragmentos, pistas, economia e inferência. O MOSAICO explora a distância entre aquilo que parece ter acontecido e aquilo que os fatos permitem concluir.

> O fato cabe na carta; a interpretação, não.

**Jogar:** [drmarionascimento.github.io/Mosaico-Card](https://drmarionascimento.github.io/Mosaico-Card/)

## Estado atual

A arquitetura consolidada de sala, turnos, cronômetros, pontuação e apuração está implementada. O catálogo antigo foi substituído pelo **Banco NT de 145 pautas** importado da planilha `MOSAICO_NT_Banco_145.xlsx`.

As pautas NT ainda não são liberadas para uma partida: todas estão marcadas como `playable: false` porque faltam baralho, indicação do campo focal e gabaritos explicitamente validados. O bloqueio é intencional e impede que uma inferência automática transforme conteúdo editorial incompleto em regra de jogo.

O único caso independente do catálogo é **A ovelha perdida**, preservado em `case-ovelha.js` somente como demonstração da carta especial e de sua animação. Ele não participa do sorteio das 145 pautas.

## Fluxo da sala

1. O Mestre configura a sala antes de criá-la: escolhe **30, 45 ou 60 segundos**, duração curta/padrão/longa e uso opcional de telão.
2. A sala é aberta e o QR Code fica disponível imediatamente.
3. O Mestre informa sua identidade e escolhe sua camada de assistência, pois também participa como jogador.
4. Cada participante entra e escolhe individualmente **Livre, Assistida ou Guiada**.
5. O início só é liberado com 3 a 12 participantes e todos marcados como prontos.
6. A pauta é sorteada apenas no início da partida.

O tempo sugerido pelo sistema depende do tamanho da mesa: 60 s para 3–5 jogadores, 45 s para 6–8 e 30 s para 9–12. O Mestre pode escolher outro dos três valores, mas não informar um prazo livre.

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
| 3–5 | 1 | 1 | 2 |
| 6–8 | 2 | 1 | 3 |
| 9–12 | 3 | 2 | 4 |

## Banco NT e sorteio

`cases-nt.js` contém 145 pautas e 580 campos, exatamente quatro por pauta. “Faixa 4–9” indica quantas naturezas de incógnita o recorte suporta; não representa a quantidade de campos da partida.

O sorteio usa um saco persistido no navegador: não repete pauta elegível até esgotar o saco e evita repetição imediata quando ele é recomposto. Apenas casos com `status.playable === true` entram no sorteio. Enquanto nenhum caso estiver validado, a interface informa o bloqueio editorial em vez de voltar aos casos antigos.

Detalhes e pendências: [`docs/BANCO-NT-145.md`](docs/BANCO-NT-145.md).

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
| `tools/import-nt-bank.mjs` | Importador e validador estrutural da planilha NT. |

O Mestre é a autoridade dos relógios e das mudanças de fase. As publicações usam transação no Firestore e `turnoId` crescente para rejeitar ações atrasadas ou repetidas.

## Importação do banco

Use caminhos explícitos para a planilha e para o arquivo gerado:

```bash
node tools/import-nt-bank.mjs /caminho/MOSAICO_NT_Banco_145.xlsx cases-nt.js
npm test
```

O importador exige o módulo `@oai/artifact-tool`, valida 145 IDs sequenciais, 580 linhas de campos, quatro campos `C1–C4` por pauta, coerência entre as abas `Banco` e `Campos` e isolamento da demonstração da ovelha.

## Desenvolvimento e testes

O projeto usa HTML, CSS e JavaScript sem etapa de compilação. Sirva a pasta por HTTP para testar no navegador.

```bash
npm test
```

A suíte executa verificação de sintaxe e contratos de identidade, QR/sala, estrutura visual, fechamento híbrido, cronômetros, ovelhas, ciclos, fase final, pontuação, ranking, catálogo NT e saco de sorteio. O GitHub Actions roda a validação em pushes e pull requests.

## Documentação

- [`docs/CONSOLIDACAO-OPERACIONAL.md`](docs/CONSOLIDACAO-OPERACIONAL.md): contrato Mestre–jogador–telão e regras da partida.
- [`docs/BANCO-NT-145.md`](docs/BANCO-NT-145.md): interpretação da planilha, importação e bloqueios editoriais.
- [`docs/AUDITORIA.md`](docs/AUDITORIA.md): estado técnico e riscos que ainda exigem validação.

## About sugerido para o GitHub

**Descrição:** Jogo multiplayer de fragmentos, economia e inferência do projeto MOSAICO, com pautas canônicas do Novo Testamento.

**Website:** https://drmarionascimento.github.io/Mosaico-Card/

**Topics:** `mosaico`, `card-game`, `multiplayer`, `firebase`, `firestore`, `javascript`, `mobile-first`, `serious-game`, `educational-game`.

Criação: **M&O**.
