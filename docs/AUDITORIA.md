# Auditoria do Mosaico Card

Atualizada em 11 de setembro de 2026 após a incorporação do Quadro Emaús V2.

## Síntese

A identidade visual foi preservada: fundo petróleo mais claro, cartas marfim com profundidade, áreas coletivas e particulares distintas e console inferior compacto. A principal mudança desta rodada foi estrutural: o projeto agora distingue o mosaico-quiz sem economia da demonstração econômica da ovelha.

## Implementado nesta revisão

| Prioridade anterior | Situação atual |
| --- | --- |
| Saldo compartilhado | Substituído por `saldosPorJogador`. |
| Resposta travada única | Dividida em acertos globais e erros por jogador. |
| Cronômetros divergentes | Snapshot compartilha `turnoTerminaEm`. |
| Sobrescrita concorrente | Publicação usa transação e `turnoId` crescente. |
| Cascata de patches | Regras especiais foram absorvidas; dois arquivos de patch foram removidos. |
| Ovelha previsível | Primeira compra garantida apenas na demonstração; nas partidas econômicas, bônus embaralhado conforme o número de jogadores. |

## Jogabilidade do quadro Emaús

O fluxo implementado respeita a pergunta-mãe e evita revelar a identidade antes do fechamento. Cada participante começa com dois fragmentos; em sua vez, compra do poço ou lê uma peça própria. O formulário apresenta quatro campos fechados.

A regra de tentativa é híbrida:

1. Se a resposta estiver correta, o campo fica resolvido para toda a mesa.
2. Se estiver incorreta, o campo some apenas para quem fez aquela tentativa.
3. Outro participante ainda pode responder o mesmo campo.
4. Um acerto posterior fecha o campo globalmente, inclusive para quem já havia errado.

O código não atribui custo, pontuação, duração ou limite de rodadas ao quadro porque a consolidação mantém essas decisões abertas.

## Estética e hierarquia

- Fundo e caixas continuam em tons de petróleo, com contraste maior nas cartas.
- Pista-caso usa o acabamento marfim/dourado principal.
- Pista-dúvida recebe profundidade vinho discreta.
- Pista-cenário recebe profundidade verde-acinzentada.
- A diferenciação está na borda e na sombra, sem transformar os tipos em um código cromático excessivamente literal.
- No mosaico-quiz, a bolsa é substituída pelo progresso dos quatro campos; o mesmo espaço do console é preservado.

## Riscos remanescentes

### P0 — antes de teste com grupo

1. **Regras do Firestore:** confirmar que apenas participantes da sala podem gravar e que o Mestre controla início e encerramento.
2. **Teste com vários aparelhos:** validar perda de conexão, retorno à sala e duas ações enviadas quase ao mesmo tempo.
3. **Privacidade das mãos:** hoje o documento da sala contém todas as mãos; a interface mostra somente a mão local, mas as regras do cliente não tornam os dados secretos para alguém que inspecione o Firestore.

### P1 — decisões de design ainda abertas

1. Pontuação e eventual valor diferente entre os quatro campos.
2. Duração, ritmo e condição de encerramento quando a mesa não resolve todos os campos.
3. Composição final do poço: manter os 19 fragmentos ou selecionar subconjuntos por quantidade de jogadores.
4. Forma da revelação coletiva no telão.
5. Destino dos demais protótipos de casos ainda presentes no banco, mas não oferecidos na abertura.
6. Adaptação — ou exclusão definitiva — do bônus da ovelha em quadros sem economia, como Emaús.

## Próxima sequência recomendada

| Ordem | Entrega | Motivo |
| ---: | --- | --- |
| 1 | Teste presencial com 3, 4 e 6 pessoas | Mede compreensão, duração e densidade do poço. |
| 2 | Regras de segurança do Firestore | Protege autoria das ações e mãos privadas. |
| 3 | Reconexão e recuperação de sessão | Evita perda da partida no celular. |
| 4 | Revelação no telão | Fecha o arco pedagógico coletivamente. |
| 5 | Decisão de pontuação e ritmo | Só deve ser parametrizada após observar as mesas. |

## About sugerido para o GitHub

**Descrição:** Jogo digital de fragmentos, pistas e decisões do projeto MOSAICO — fatos parciais, interpretações e mesa multiplayer.

**Website:** https://drmarionascimento.github.io/Mosaico-Card/

**Topics:** `mosaico`, `card-game`, `multiplayer`, `firebase`, `firestore`, `javascript`, `mobile-first`, `serious-game`, `educational-game`.
