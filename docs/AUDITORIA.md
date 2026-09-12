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
| Banco NT/NAA v2 | 27 livros com decisões por recorte; pendências classificadas | 104 pautas e 1.916 pistas; todas editorialmente elegíveis (55 para até 12, 1 para até 8, 28 para até 6, 1 para até 5, 7 para até 4 e 12 para até 3). |
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
