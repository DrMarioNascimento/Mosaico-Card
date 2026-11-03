# Mesa v3: demonstração, Maratonar e recuperação

As duas edições compartilham `mesa-core.js` (regras e comandos determinísticos), `mesa-runtime.js` (transações, sessão e interface) e `mesa.css`. O banco de pautas, a identidade visual e a autenticação Google dos mestres permanecem nos módulos existentes.

## Comportamento

- O mestre escolhe conteúdo e formato. O seletor e o resumo Filmes/Séries/Top 50 ficam ocultos para jogadores.
- Sessão Clássica: uma pessoa por vez. Maratonar: duas pessoas ao mesmo tempo, cada uma por si. Em grupos ímpares, a posição que joga sozinha alterna a cada rodada.
- No Maratonar, as escolhas aguardam ambas as pessoas ou o fim do prazo. Dois acertos na mesma questão pontuam igualmente. Disputas por uma pista têm prioridade alternada por turno, sem cobrar de quem ficou sem ela; essa pessoa tem uma nova escolha por até 15 segundos. Se ambas escolherem o mesmo verso do monte, retiram cartas distintas.
- Demonstração compartilhada iniciada pelo mestre: duas rodadas, uma especial, ações guiadas, sem prazo para ler. Quando há menos de quatro pessoas, exemplos identificados completam o roteiro. O treino mostra compra, oferta, captura, erro, acerto, saldo e especial. Um resumo final explica fechamento e pontuação. O treino não gera classificação e não contamina a partida seguinte.
- Entendi recolhe apenas a dica local. Ajuda permanece disponível, com fechamento acessível no topo. Na partida real, consultar ajuda não pausa o relógio.
- Arriscar seleciona uma alternativa e pede confirmação. É preciso saldo 3; apenas o erro desconta 3.

## Sessão e concorrência

O Firebase Auth restaura a conta existente antes de tentar login anônimo. A referência local da sala permite retomar automaticamente. O vínculo é o identificador estável do participante, não o nome. Participantes existentes podem retornar durante a partida; pessoas novas ficam impedidas de entrar após o início.

Cada comando contém partida, turno e chave idempotente. O reducer é executado sobre o documento lido dentro de `runTransaction`; o cliente só mostra a conclusão após o commit. Os 200 recibos mais recentes evitam repetir ações na perda da confirmação de rede. Compras, recompensas e pontuação são atômicas. Respostas finais ficam no mesmo estado canônico, sem depender da chegada de outro listener antes da apuração.

A presença renova a cada 10 segundos e reserva a sessão por 30 segundos. Só a aba proprietária pode enviar comandos. Abertura em uma segunda aba pede "Continuar nesta aba"; a anterior perde o controle. BroadcastChannel separa abas duplicadas que herdaram sessionStorage.

Ao detectar ausência do mestre ou de participante da vez, uma transação pausa o jogo. Se todos fecharem, a reconexão verifica a presença anterior antes de renová-la e conserva o tempo. O mestre pode retomar, acrescentar tempo, passar a vez e suspender/reativar participantes, preservando seus dados. Isso é coordenação entre clientes; não é um relógio executado por um serviço independente. Navegadores suspensos podem provocar uma pausa conservadora.

Recuperação em outro aparelho: o mestre gera um token aleatório de 128 bits, válido por 5 minutos e um uso. O documento guarda somente SHA-256. A transação troca o `authUid` vinculado ao mesmo lugar e invalida o token. O mestre continua exigindo a própria conta Google. Nomes nunca autorizam recuperação.

## Validação realizada

`npm ci && npm test` inclui os testes anteriores e:

- Ambos os formatos, ambas as edições e 2–12 pessoas: duas rodadas e uma única especial.
- Acertos simultâneos, captura disputada, retirada concorrente do monte, recibo duplicado, identidade e aba incorretas, rodízio em número ímpar.
- Pausa/retomada, tempo extra em pausa, fechamento e apuração.
- Integração DOM com Firebase simulado: criação autenticada, entrada sem assistência, ocultação das configurações, treino pelos botões, reinício limpo, refresh de jogador e mestre, compra com confirmação perdida, duas abas, ausência longa e recuperação em outro aparelho com token de uso único.

## Pendências antes da publicação

1. QA visual em navegador e celular: a revisão automática de acesso à rede bloqueou a abertura da prévia local nesta sessão. Não há captura visual pós-implementação validada. Conferir contraste, dock, zoom, foco e sobreposição em 320/390/430 px e desktop.
2. Sala real com ao menos três aparelhos: validar Authentication, permissões Firestore, latência, queda de rede, alternância de aplicativo, refresh e recuperação.
3. As regras de segurança do Firebase não estão versionadas no repositório e não foram acessíveis nesta sessão. Nenhuma regra foi afrouxada ou substituída. Os testes usam o contrato de transações, não provam autorização no servidor. Verificar especificamente leitura inicial da sala para recuperar acesso, troca autorizada de vínculo, escrita de presença, controle exclusivo do mestre e rejeição de clientes antigos em salas v3. Se as regras atuais não impuserem essas restrições, transferir comandos sensíveis para um backend autorizado antes de liberar a recuperação entre identidades.
4. Medir contenção/custo da presença no documento compartilhado em mesas de 12 pessoas. Se necessário, mover presença para um mecanismo dedicado (por exemplo, Realtime Database), preservando o protocolo de partida.

A alteração deve permanecer em revisão até concluir esses itens. Salas antigas continuam no fluxo anterior; a nova modalidade começa em salas novas. Não foi realizada publicação em produção.
