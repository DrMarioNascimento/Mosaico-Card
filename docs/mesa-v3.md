# Mesa v3: demonstração, Maratonar e recuperação

As edições compartilham `mesa-core.js` (regras determinísticas), `mesa-runtime.js` (sessão, coordenação e interface) e `mesa.css`. Catálogos, artes e autenticação Google dos mestres continuam nos módulos existentes.

## Experiência

- O mestre escolhe conteúdo e formato. Filmes/Séries/Top 50 não aparecem aos jogadores.
- Sessão Clássica: um jogador por vez. Maratonar: dois jogadores ao mesmo tempo, cada um por si. Com número ímpar, alterna quem joga sozinho a cada rodada.
- No Maratonar, as escolhas se resolvem juntas. Dois acertos na mesma questão pontuam igualmente. Capturas disputadas têm prioridade alternada, sem cobrança de quem ficou sem a pista e com nova escolha por até 15 segundos. Dois cliques no mesmo verso retiram cartas distintas.
- O mestre inicia a demonstração: duas rodadas livres, carta especial, fechamento e placar. Bots identificados completam mesas com menos de quatro pessoas. Quem espera recebe texto de observação; Entendi recolhe apenas a dica local. O botão Voltar à sala permite iniciar uma partida limpa.
- Arriscar exige saldo 3, seleção de alternativa e confirmação. Só o erro desconta 3. Ajuda permanece disponível; na partida real o relógio continua durante a consulta.

## Autoridade e transações

As regras publicadas em 16/10/2026 foram lidas no console e preservadas em `docs/firestore-2026-10-16.rules`. Elas impediam a alteração de `schemaVersion` mesmo pelo mestre e a mudança de fase por jogadores, mas permitiam que qualquer conta autenticada alterasse `snap`, participantes e vínculos de salas ativas. Portanto, publicar a primeira implementação apenas no frontend não seria suficiente.

Salas novas nascem com `schemaVersion: 3`, `autoridade: "mestre"`, `vinculos` e `presencas`. Somente o mestre grava o estado canônico, a configuração e os vínculos. Participantes enviam intenções privadas em `pedidos/{authUid}`. A aba ativa do mestre lê o pedido, verifica identidade, aba, turno, custos e regras com `MC_MESA_CORE`, e confirma estado e resposta na mesma transação. Não se aceita saldo enviado pelo jogador. O pedido leva idempotência; os 200 recibos mais recentes impedem débito duplicado na perda de confirmação. O token de recuperação é retirado do pedido respondido.

Os pedidos têm limite de 4096 caracteres e origem vinculada ao UID autenticado. Só autor e mestre os leem; só o mestre lista a coleção e escreve resultados. Configuração, dono, versão, criação e autoridade não podem ser alterados por jogadores. `config/mestres` só é legível para mestre autorizado, com e-mail verificado. Não houve alteração da lista de pessoas autorizadas.

O mestre é o coordenador confiável da sala. Isso não equivale a um serviço autônomo de jogo nem a um sistema antitrapaça contra inspeção do catálogo carregado no navegador. Salas antigas mantêm seu contrato anterior para não interromper partidas em curso; o formato novo exige uma sala nova. A compatibilidade legada não estende suas permissões às salas v3.

## Reconexão e presença

Firebase Auth restaura a identidade antes de tentar login anônimo. A referência local retoma a sala, as cartas, o saldo e o papel de mestre. O vínculo usa um identificador estável do participante; nome não autoriza recuperação.

Uma aba mantém o controle. Abrir outra pede “Continuar nesta aba” e desativa a anterior. BroadcastChannel trata abas duplicadas que herdaram sessionStorage. A proteção beforeunload avisa sobre saída quando suportada; a recuperação continua necessária, especialmente no celular.

Presença renova a cada 10 segundos, com reserva de 30 segundos. Pulsos privados por conta evitam regravar a mesa inteira para cada jogador; o mestre consolida a presença uma vez por intervalo. Ao faltar mestre ou participante da vez, a partida é pausada conservando o tempo. Sem o mestre, jogadores veem que estão aguardando reconexão; ao retornar, o mestre confirma a pausa e pode retomar, dar tempo, passar a vez ou suspender alguém mantendo seus dados. Navegadores suspensos podem provocar pausa conservadora.

Em outro aparelho, o mestre gera token aleatório de 128 bits, válido por 5 minutos e um uso. Guarda-se SHA-256; o mestre valida o token recebido em pedido privado e troca apenas o UID vinculado ao lugar original. O vínculo antigo perde as permissões de presença. O mestre recupera sua própria sessão pela conta Google. A recuperação com hash exige HTTPS.

## Verificação

- `npm test`: bancos e regras anteriores; ambos os formatos, edições e 2–12 pessoas; duas rodadas e uma especial; acertos simultâneos, captura disputada, recibos, identidades/abas incorretas, rodízio ímpar, pausa e pontuação.
- Integração DOM com transporte em memória: botões, ocultação de configurações, refresh de jogador/mestre, duas abas, confirmação perdida, ausência longa e token usado uma vez.
- `npm run test:firebase` (Java 21): SDK Firestore e emulador oficial com as regras reais, quatro clientes independentes em Novo Testamento, Filmes e Séries e Lugares, demonstração terminada por jogador, reinício limpo, refresh, recuperação, fechamento e apuração. Inclui permanência ociosa por mais de 30 segundos sem falsa desconexão e rejeição de acesso cruzado, escrita de saldo/configuração/vínculo, resultados falsos, pedidos grandes, timestamps falsos e documentos órfãos. CI executa ambas as suítes.
- QA visual e limites em `design-qa.md`. Capturas em `docs/qa/`.

## Publicação e limites

Publicar primeiro `firestore.rules`, que preserva salas legadas, e depois o frontend. Não mudar o plano Spark nem as identidades autorizadas. As regras são um protótipo validado para este fluxo conduzido por mestre; revisar novamente antes de uma abertura ampla ao público, principalmente a retirada do contrato legado e limites de uso por sala. Testes no emulador não substituem latência, suspensão de aplicativo e conectividade de celulares físicos.

## Lugares — 14 de novembro de 2026

A edição Lugares utiliza a identidade própria `mc:sessao:v3:lugares`, catálogo com perfil incorporado ao ID da pauta e seleção territorial por união. As salas usam a infraestrutura já autorizada em `salas-cinema`, discriminadas por `config.edicao`. A entrada pela edição errada é recusada antes do pedido. A lista de mestres e as regras Firestore permanecem as mesmas.
