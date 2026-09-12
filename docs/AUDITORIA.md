# Auditoria do Mosaico Card

Atualizada em 11 de setembro de 2026 após a consolidação operacional e a importação do Banco NT de 145 pautas.

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
| Banco NT | Importado, bloqueado | 145 pautas presentes; nenhuma está liberada para jogar. |
| Demonstração da ovelha | Implementada e isolada | Não participa do catálogo ou do saco NT. |

## Bloqueio editorial P0

O banco contém metadados e quatro campos por pauta, mas ainda não contém tudo o que o motor necessita para jogar com segurança:

1. baralho de fragmentos de cada pauta;
2. indicação explícita do campo focal;
3. chave da alternativa correta validada para todos os campos;
4. correções das alternativas ausentes ou repetidas registradas em [`BANCO-NT-145.md`](BANCO-NT-145.md).

Por isso, `cases-nt.js` registra `playableCases: 0`, e `bank-runtime.js` recusa o início de uma pauta canônica. Esse comportamento deve permanecer até a validação editorial.

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

## Validação antes de liberar o banco

| Ordem | Entrega | Critério de aceite |
| ---: | --- | --- |
| 1 | Completar conteúdo | Baralho, campo focal e quatro gabaritos explícitos em cada pauta. |
| 2 | Reimportar | Resumo estrutural continua em 145 pautas e 580 campos. |
| 3 | Liberar por lote | Somente pautas editorialmente validadas recebem `playable: true`. |
| 4 | Segurança | Mãos e respostas finais não ficam acessíveis aos adversários. |
| 5 | Teste presencial | Mesas de 2–5, 6–8 e 9–12 validam 60/45/30 s. |
| 6 | Telão e reconexão | Entrada, retomada, fechamento, apuração e pódio funcionam em aparelhos reais. |

## Verificação automática

```bash
npm test
```

A automação cobre sintaxe e contratos centrais. Ela não substitui teste de segurança das regras do Firestore, teste de rede real nem validação editorial e bíblica das pautas.
