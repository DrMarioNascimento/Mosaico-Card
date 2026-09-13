# Auditoria do Mosaico Card

Atualizada em 12 de setembro de 2026 após o descarte editorial do catálogo antigo e a criação da fundação NT/NAA v2.

## Situação geral

| Área | Estado | Observação |
| --- | --- | --- |
| Fluxo da sala | Implementado | Configuração vem antes da identidade e da assistência do Mestre. |
| Mestre como jogador | Implementado | Participa da ordem, possui mão, saldo, assistência e pontuação. |
| Assistência individual | Parcial | Escolha e persistência local implementadas; auxílios específicos por pauta ainda precisam ser redigidos. |
| Telão opcional | Implementado | Acompanha pergunta, campos, vez, tempo e participantes. |
| Turno compartilhado | Implementado | 30/45/60 s, autoridade do Mestre e passagem automática no zero. |
| Tempo total | Implementado | Usa ciclos completos e encerra ao fim do ciclo corrente. |
| Fechamento final | Implementado | Janela gratuita de 60 s e apuração simultânea. |
| Pontuação e pódio | Implementado | Ledger por parcelas, residual, desempates, ranking e top 3. |
| Banco NT/NAA v2 | 27 livros com decisões por recorte; pendências classificadas | 109 pautas e 1.983 pistas; todas editorialmente elegíveis (56 para até 12, 2 para até 8, 28 para até 6, 1 para até 5, 9 para até 4 e 13 para até 3). |
| Demonstração da ovelha | Implementada e isolada | Não participa do catálogo ou do saco NT. |

## Bloqueio editorial P0

O bloqueio HTTP anterior foi superado no checkpoint 002, conforme evidências no documento mestre. Vinte recortes de João foram consultados e autorados; os vinte estão editorialmente elegíveis; doze comportam até 12 participantes e oito, com 13 pistas, comportam até 6. Os 27 livros receberam decisões por recorte, e os recortes autorizados pelo usuário foram reavaliados no checkpoint 027. A estrutura libera somente após três aprovações, ausência de ambiguidades e capacidade calculada para duas cartas por participante e ao menos uma no poço na mesa real.

## Pontos de atenção técnicos

### Segurança e privacidade do Firestore

O snapshot da sala ainda reúne mãos, saldos, erros e ledger no mesmo documento. A interface filtra o que mostra, mas um participante capaz de inspecionar diretamente o documento pode enxergar dados privados. As respostas do fechamento também ficam reunidas na sala antes da apuração.

Antes do teste externo, é necessário separar dados públicos e privados ou impor uma camada confiável de servidor, além de revisar as regras do Firestore para garantir que:

- somente participantes possam escrever na sala;
- somente o jogador da vez possa publicar sua ação normal;
- somente o Mestre possa mudar fase e controlar relógios;
- um cliente não possa alterar mão, saldo ou pontuação de outro jogador;
- respostas finais não possam ser lidas pelos adversários antes da apuração.

### Reconexão e concorrência

As transações e o `turnoId` protegem contra parte das publicações atrasadas, mas ainda é necessário validar em vários aparelhos:

- reconexão após suspensão do navegador no iPhone;
- duas ações enviadas quase simultaneamente;
- expiração do relógio enquanto uma ação está em trânsito;
- troca de Mestre se o aparelho que criou a sala sair;
- retorno correto às fases de fechamento e apuração.

### Camadas de assistência

Livre, Assistida e Guiada já fazem parte do cadastro individual e não são expostas aos demais jogadores. Entretanto, o banco ainda não fornece textos e relações graduadas para que cada camada produza uma experiência realmente diferente. Até essa autoria existir, as três escolhas compartilham essencialmente o mesmo conteúdo de jogo.

### Duração curta, padrão e longa

A escolha altera a quantidade de ovelhas e os ciclos da partida. Curta reduz um ciclo, com mínimo de três, e uma ovelha, com mínimo de uma. Longa acrescenta um ciclo, com teto de cinco, e uma ovelha, com teto de quatro. A suíte automática cobre esses limites.

## Validação antes de liberar pautas

| Ordem | Entrega | Critério de aceite |
| ---: | --- | --- |
| 1 | Acesso NAA | Trechos efetivamente consultados, com fonte e data. |
| 2 | Levantamento | Recortes e exclusões registrados por livro, sem meta numérica. |
| 3 | Lote autorado | Pergunta, C1–C4, focal, pistas e revelação completos. |
| 4 | Validar e gerar | Validação estrutural aprovada e saída reproduzível. |
| 5 | Liberar | Aprovações bíblica/editorial e zero ambiguidades. |
| 6 | Distribuição | Mesas de 2–12 sem concentração das essenciais. |

## Verificação automática

```bash
npm test
```

A automação cobre sintaxe e contratos centrais. Ela não substitui teste de segurança das regras do Firestore, teste de rede real nem validação editorial e bíblica das pautas.

## Checkpoint 059 — verificação de Apocalipse 3

Sardes, Filadélfia e Laodiceia foram consultadas na página NAA identificada de Ap 3, comparadas com os 183 objetos existentes e autoradas em três pautas independentes. As 58 pistas novas levam o catálogo a 186 pautas e 3.466 pistas. O validador confirmou C1–C4, alternativas, gabaritos, foco, metadados, revelação, capacidade e elegibilidade; a auditoria registrou como repetições documentais resolvidas as fórmulas finais comuns às três cartas e não deixou par pendente. Os demais recortes de Apocalipse e a auditoria global de cobertura continuam fora deste lote; o banco não está completo.

## Checkpoint 060 — verificação limitada de Apocalipse 4–7

A leitura NAA e comparação individual fecharam Ap 4–5 e Ap 6 nas pautas já existentes e acrescentaram somente duas pautas para as cenas separadas de Ap 7. As 36 pistas novas levam o banco a 188 pautas e 3.502 pistas. A auditoria mantém as repetições da lista de tribos como itens textuais distintos e resolvidos, sem duplicata exata ou par pendente; a literalidade dos cento e quarenta e quatro mil e qualquer relação com Ap 14 não foram decididas. Ap 8–22 e a auditoria global continuam pendentes; o banco não está completo.

## Checkpoint 061 — verificação limitada de Apocalipse 8–10

A consulta efetiva das três páginas NAA e a comparação com os 188 objetos anteriores sustentaram quatro pautas: Ap 8 em um bloco, Ap 9 separado entre quinta e sexta trombetas, e Ap 10 em um bloco. As 96 pistas novas levam o banco a **192 pautas e 3.598 pistas**. A auditoria automatizada continua com zero duplicatas exatas e zero pares semânticos sem resolução; nenhum alerta novo exigiu registro. As descrições e ações internas não receberam identidade histórica, tecnologia, alegoria ou calendário. Ap 11–22 e a auditoria global continuam pendentes; o banco não está completo.

## Checkpoint 062 — verificação de Apocalipse 11–13

A leitura NAA e a comparação individual produziram duas pautas para os blocos 11.1-14 e 11.15-19, somando 48 pistas, e encerraram Ap 12 e 13 nas duas pautas já existentes, sem alterá-las ou duplicá-las. O banco passa a **194 pautas e 3.646 pistas**. A auditoria automatizada mantém zero duplicatas exatas e zero pares semânticos sem resolução. As duas testemunhas permanecem sem identidades externas; mulher, dragão, bestas, marca e 666 não receberam instituições atuais, calendário ou interpretação externa. Ap 14–22 e a auditoria global continuam pendentes; o banco não está completo.

## Checkpoint 063 — verificação de Apocalipse 14–16

A leitura NAA e a comparação individual produziram quatro pautas para Ap 14–15, somando 93 pistas, e encerraram Ap 16 em `nt2-apocalipse-tacas` sem alterar ou duplicar o objeto. O banco passa a **198 pautas e 3.739 pistas**. Os 194 objetos anteriores foram preservados; a auditoria automatizada mantém zero duplicatas exatas e zero pares sem resolução. Literalidade dos cento e quarenta e quatro mil, harmonização com Ap 7, identidades externas, calendários e alegorias acrescentadas ficaram fora. Ap 17–22 e a auditoria global continuam pendentes; o banco não está completo.
