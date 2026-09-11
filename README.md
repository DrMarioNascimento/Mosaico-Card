# Mosaico Card — O Mercado

Jogo digital de cartas, pistas e decisões. Cada participante recebe fatos parciais, administra denários e decide até onde as evidências permitem concluir.

> O fato cabe na carta; a interpretação, não.

**Jogar:** [drmarionascimento.github.io/Mosaico-Card](https://drmarionascimento.github.io/Mosaico-Card/)

## Estado atual

- Interface mobile first em HTML, CSS e JavaScript, sem etapa de compilação.
- Mesa compartilhada por código de seis caracteres e QR Code.
- Entrada anônima pelo Firebase Authentication e sincronização pelo Cloud Firestore.
- Modos Mestre, participante, telão e ensaio local.
- Console inferior com saldo, cronômetro, jogador da vez e quatro ações.
- Monte coletivo em leque; a compra é feita tocando em uma carta.
- Pistas particulares e lista de jogadores recolhíveis em acordeão.
- Carta especial da ovelha com animação, recompensa e saída imediata do jogo.

## Como jogar

Cada participante começa com duas pistas e 12 denários. A partida tem três voltas. Na sua vez, escolha uma ação:

| Ação | Custo | Resultado |
| --- | ---: | --- |
| Arriscar | 3 se errar | Trava uma resposta. No acerto, a moeda não é gasta. |
| Capturar | 2 | Transfere uma pista capturável de outro participante. |
| Comprar | 4 | Ativa o monte; toque em uma carta do leque. |
| Consignar | — | Envia uma pista ao balaio; o dono recebe 2 se alguém a levar. |

O botão selecionado recebe um glow vermelho. O cronômetro fica branco na vez dos demais, vermelho na própria vez e ganha glow nos dez segundos finais.

### Carta da ovelha

A quantidade de ovelhas cresce conforme o número de jogadores. Quando encontrada, a carta não cobra a compra, concede seis denários, permanece 5,5 segundos na animação, não entra na mão e não pode ser capturada.

## Abrir uma mesa

1. Selecione **Abrir uma mesa** e escolha o ritmo.
2. Informe nome e forma de tratamento.
3. Compartilhe o QR Code ou o código da sala.
4. Aguarde os participantes e toque em **Iniciar partida**.
5. Durante a partida, o Mestre acessa código, QR, participantes e controles pelo botão **Sala**.

Para testar sem Firebase ou outros aparelhos, use **Ensaio neste aparelho**.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Cenas, HUD, modais e carregamento dos módulos. |
| `game.js` | Estado local, ações, turno, cronômetro e renderização. |
| `game-sala.js` | Adaptação do motor ao estado compartilhado. |
| `game-ovelha6.js` | Regras especiais e proteção da ovelha. |
| `game-fix.js` | Distribuição dinâmica e compatibilidade atual. |
| `sala.js` | Lobby, Mestre, participantes, telão e sincronização. |
| `firebase.js` | Firebase e autenticação anônima. |
| `cases*.js` | Banco de 12 casos, fatos e perguntas. |
| Módulos CSS | Identidade visual, cartas, moeda e responsividade. |

## Desenvolvimento e testes

Não há dependências de execução. Sirva a pasta por HTTP ou abra `index.html` para o ensaio local.

```bash
npm test
```

Os testes verificam QR, identificação, estrutura do HUD e invariantes das regras principais. O GitHub executa a validação a cada push ou pull request.

## Auditoria e próximos passos

O relatório técnico de jogabilidade, estética, arquitetura e prioridades está em [`docs/AUDITORIA.md`](docs/AUDITORIA.md).

Criação: **M&O**.
