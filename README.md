# Mosaico Card — O Mercado

Jogo digital de cartas, fragmentos e decisões. O MOSAICO explora a distância entre aquilo que parece ter acontecido e aquilo que os fatos permitem concluir.

> O fato cabe na carta; a interpretação, não.

**Jogar:** [drmarionascimento.github.io/Mosaico-Card](https://drmarionascimento.github.io/Mosaico-Card/)

## Modos disponíveis

### Quando os olhos abrem · mosaico-quiz

Primeiro quadro implementado a partir da consolidação **MOSAICO — Quadro Emaús V2**, com fonte canônica em Lucas 24,13–35.

- Mesa de 3 a 6 participantes.
- Dois fragmentos mudos por participante; o restante forma o poço virado.
- Na rodada, a pessoa compra um fragmento ou lê em voz alta um que já possui.
- Quatro campos de resposta fechada, sem texto livre.
- Acerto fecha o campo para todos; erro fecha o campo somente para quem respondeu.
- Sem moedas, captura, ranking ou cronômetro nesta versão.
- “Emaús”, “Jesus” e “Lucas 24” não aparecem nos fragmentos; a identificação chega apenas na revelação.

O quadro trabalha **QUANDO + O QUÊ**, não a identidade do terceiro caminhante. Os fragmentos são marcados visualmente como pista-caso, pista-dúvida ou pista-cenário.

### Caso da ovelha · demonstração

Protótipo mantido separadamente para demonstrar a carta especial e sua animação. Na demonstração, a primeira compra é a ovelha: não cobra, concede seis denários, permanece 5,5 segundos na revelação e sai do jogo.

Nas partidas econômicas normais, a ovelha é um bônus/curinga embaralhado aleatoriamente no monte: uma para 1–2 jogadores, duas para 3–4 e três para 5–6. Apenas a posição garantida da demonstração não é repetida. O quadro Emaús permanece sem o bônus monetário porque sua V2 é explicitamente sem economia.

## Mesa e interface

- Interface mobile first em HTML, CSS e JavaScript, sem etapa de compilação.
- Sala por código de seis caracteres e QR Code, com Mestre, participantes e telão.
- Monte ou poço coletivo em leque; compra feita tocando diretamente numa carta.
- Pistas particulares e relação de jogadores em áreas recolhíveis.
- Console inferior alinhado, com estado da partida, vez e ações contextuais.
- Cartas marfim com profundidade e diferenciação discreta por tipo de fragmento.
- Seleção de ação com glow vermelho; urgência animada reservada ao cronômetro do modo econômico.

## Estado multiplayer

O snapshot compartilhado usa:

- `maosPorJogador` e `saldosPorJogador`;
- `resolvidosGlobais` para acertos;
- `errosPorJogador` para bloqueios individuais;
- `turnoId` para rejeitar publicação atrasada;
- `turnoTerminaEm` para todos exibirem o mesmo prazo no modo econômico.

As publicações de turno são feitas em transação no Firestore. Uma atualização com `turnoId` antigo ou repetido não substitui o estado mais novo.

## Estrutura

| Arquivo | Responsabilidade |
| --- | --- |
| `index.html` | Cenas, HUD, modais e carregamento dos módulos. |
| `game-core.js` | Regras puras de modo, jogadores e fechamento híbrido. |
| `game.js` | Estado, ações, turnos, cronômetro e renderização. |
| `game-sala.js` | Serialização e adaptação do motor à sala compartilhada. |
| `sala.js` | Lobby, Mestre, participantes, telão e transações Firestore. |
| `cases-emaus.js` | Quadro consolidado “Quando os olhos abrem”. |
| `cases*.js` | Casos e protótipos de conteúdo. |
| Módulos CSS | Identidade visual, cartas, moeda e responsividade. |

Os antigos `game-fix.js` e `game-ovelha6.js` foram absorvidos pelo motor e removidos; a ordem de carregamento já não altera regras por sobrescrita.

## Desenvolvimento e testes

Sirva a pasta por HTTP ou use **Ensaio neste aparelho**.

```bash
npm test
```

Os testes verificam sintaxe, QR, identificação, estrutura do HUD e a regra de que o erro é individual enquanto o acerto é global. O GitHub executa a validação a cada push ou pull request.

## Decisões ainda abertas

O documento de Emaús não fecha pontuação, duração, ritmo quantitativo nem composição final do poço. Por isso, a implementação não cria números provisórios para essas decisões. Veja [`docs/QUADRO-EMAUS.md`](docs/QUADRO-EMAUS.md) e [`docs/AUDITORIA.md`](docs/AUDITORIA.md).

Criação: **M&O**.
