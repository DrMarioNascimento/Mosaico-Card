# Relatório de cobertura e integração — banco NT/NAA v2

## Checkpoint 037 — cinco recortes de Atos

A rodada preservou o checkpoint 036 com 104 pautas e 1.916 pistas. Foram consultados na NAA somente At 4.23-31, 5.17-42, 7.54-60, 9.32-43 e 12.20-23. Um lote único, limitado a cinco pautas, acrescentou 67 pistas.

## Avanço do lote

Foram incorporadas `nt2-atos-oracao-ousadia`, `nt2-atos-apostolos-sinedrio`, `nt2-atos-morte-estevao`, `nt2-atos-eneias-tabita` e `nt2-atos-herodes-tiro-sidom`. Todas preservam C1–C4, quatro alternativas, resposta/referência específica, focal justificado, ordem final 8/5/3/2, metadados de pista e revelação canônica.

## Inventário atual

- 109 pautas e 1.983 pistas factuais;
- 109 pautas editorialmente elegíveis;
- 56 compatíveis com até 12 participantes; duas com até 8; 28 com até 6; uma com até 5; nove com até 4; e treze com até 3.

## Auditoria e restante

O auditor não encontrou duplicatas exatas nem pares semânticos pendentes. A consolidação anterior de Bartimeu foi restringida a Marcos, porque cura e seguimento genéricos não demonstram identidade do episódio. Os cinco recortes de Atos desta rodada estão encerrados.

**Os demais candidatos de Atos, Romanos–Judas e Apocalipse permanecem pendentes para outra rodada. O banco não é declarado completo.**

Permanecem todas as decisões anteriores: capacidade variável, conjuntos temáticos, duas cartas e poço, Mc 16.9-20 fora, questão de 1Pe 3.19 fora, 1Pe 4.6 fora, ressalvas e interpretações aprovadas. Não houve merge, deploy ou alteração de produção.


## Checkpoint 039 — cinco recortes adicionais de Atos

A base de 109 pautas e 1.983 pistas foi confirmada antes da edição. A consulta bíblica foi realizada separadamente dos testes: Atos 13, 14, 16, 18 e 19 na NAA identificada em `bible.com/pt/bible/1840` retornaram HTTP 200, e somente At 13.4-12, 14.8-20, 16.6-15, 18.1-17 e 19.11-20 foram autorados.

Foram acrescentadas `nt2-atos-chipre-elimas`, `nt2-atos-listra-paulo-barnabe`, `nt2-atos-visao-lidia`, `nt2-atos-paulo-corinto` e `nt2-atos-efeso-ceva`, totalizando 80 novas pistas factuais. A comparação mecanizada confirmou que os 109 objetos anteriores permaneceram idênticos.

O inventário passa a **114 pautas, 456 campos e 2.063 pistas**, todas editorialmente elegíveis em alguma mesa. A capacidade continua derivada por `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e ao menos uma no poço. O auditor não deixou duplicata exata nem par de revisão sem resolução.

**At 21/23, Romanos–Judas e Apocalipse permanecem pendentes. O banco não é declarado completo.** As decisões textuais e interpretativas anteriores continuam inalteradas, e não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 040 — Atos 21 e 23

A base de 114 pautas/2.063 pistas do commit `4ef45e4` foi confirmada antes da edição. A consulta bíblica, separada dos testes, obteve HTTP 200 nas páginas NAA de Atos 21 e 23 e se limitou a At 21.7-14 e 23.12-35.

Foram acrescentadas `nt2-atos-agabo-jerusalem`, com 10 pistas, e `nt2-atos-conspiracao-transferencia`, com 24. O catálogo passa a **116 pautas, 464 campos e 2.097 pistas**, todas elegíveis em alguma mesa. A comparação mecanizada preservou integralmente os 114 objetos anteriores. A capacidade continua derivada de `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e pelo menos uma no poço.

O diff editorial desta rodada contém somente as duas pautas autorizadas, suas 34 pistas, o catálogo regenerado e os registros documentais correspondentes. Romanos–Judas e Apocalipse permanecem para a próxima base; o banco não está completo. Não houve merge, deploy ou publicação.

## Checkpoint 041 — primeiro lote limitado de Romanos

A base `ee86a1912b2cbcf310f4574158e0a2dd5e4f3d1a` foi confirmada, antes de qualquer edição, com **116 pautas elegíveis e 2.097 pistas**. Em etapa bíblica separada dos testes, as páginas NAA de Romanos 1, 6, 7 e 8 em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e foram lidas somente nos recortes autorizados.

Quatro pautas foram incorporadas: Rm 1.1-15 com 16 pistas, Rm 6 com 18, Rm 7 com 18 e Rm 8 com 25. O limite de cinco não foi tratado como meta. Os argumentos de Rm 6–8 foram delimitados separadamente; campos e pistas permanecem atributivos ao texto, sem importar fatos do AT ou harmonizar cartas, viagens e cronologias.

O inventário passa a **120 pautas, 480 campos e 2.174 pistas**, todas elegíveis em alguma mesa. A capacidade continua calculada por `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e pelo menos uma no poço. A comparação mecanizada confirmou os 116 objetos anteriores integralmente inalterados; o auditor encontrou zero duplicatas exatas e nenhum par semântico pendente.

**Rm 12–15, os candidatos restantes de Coríntios e das demais cartas, e Apocalipse permanecem pendentes. O banco não está completo.** As decisões textuais e interpretativas anteriores seguem preservadas. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 042 — Rm 12–15.13

A base `7e11cd28abb57e50575f5409e99a60bc4bb4ef47` foi confirmada antes da edição com **120 pautas e 2.174 pistas**, todas elegíveis. Em etapa bíblica separada dos testes, Romanos 12, 13, 14 e 15 na NAA identificada em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026; somente Rm 12, Rm 13, Rm 14 e Rm 15.1-13 foram autorados.

Foram incorporadas quatro pautas e 76 pistas: Rm 12 com 21, Rm 13 com 18, Rm 14 com 23 e Rm 15.1-13 com 14. O catálogo passa a **124 pautas, 496 campos e 2.250 pistas**. A capacidade permanece `min(12, floor((cartas - 1) / 2))`, sempre com duas cartas por pessoa e pelo menos uma no poço.

A comparação mecanizada preservou integralmente os 120 objetos e 2.174 pistas anteriores, incluindo IDs e revisões. O auditor encontrou zero duplicatas exatas e nenhum par semântico pendente. O diff desta rodada limita-se às quatro pautas novas, catálogo regenerado, expectativas de inventário/capacidade e registros documentais.

**Coríntios, as demais cartas e Apocalipse permanecem pendentes para a próxima base. O banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 043 — lote incremental de 1 Coríntios

A base `bab702264accefcab91597d52e9462203e9c7b26` foi confirmada limpa, com **124 pautas elegíveis e 2.250 pistas**, antes de qualquer edição. Em etapa bíblica separada dos validadores, as páginas NAA de 1 Coríntios 1, 8, 9 e 10 em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e foram lidas somente nos recortes autorizados.

Foram acrescentadas quatro pautas e 73 pistas: 1Co 1.1-17 com 16, 1Co 8 com 13, 1Co 9 com 21 e 1Co 10 com 23. O inventário passa a **128 pautas, 512 campos e 2.323 pistas**, todas elegíveis em alguma mesa. A capacidade continua derivada por `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e pelo menos uma no poço. A comparação mecanizada preservou integralmente os 124 objetos e 2.250 pistas anteriores.

As perguntas são atributivas, as alternativas incorretas não são declaradas como doutrina e as alusões de 1Co 9–10 não foram completadas pelo Antigo Testamento. **1Co 11, 13 e 14, 2 Coríntios e os demais recortes pendentes permanecem para outra rodada; o banco não está completo.** Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 044 — lote limitado a 1 Coríntios 11, 13 e 14

A base do commit `09a88ecbace0edce31747d451849fcd29608345a`, com **128 pautas elegíveis e 2.323 pistas**, foi confirmada limpa antes da edição. Em etapa bíblica separada dos testes, 1Co 11, 13 e 14 na NAA identificada em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e foram lidos somente dentro do lote autorizado.

Foram incorporadas três pautas, sem forçar uma quarta: 1Co 11.17-34 e 1Co 13 com 18 pistas cada, e 1Co 14.1-33,37-40 com 22. O catálogo passa a **131 pautas, 524 campos e 2.381 pistas**. A capacidade permanece `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e pelo menos uma no poço. A comparação mecanizada preservou integralmente os 128 objetos e 2.323 pistas anteriores.

Costumes e símbolos de 1Co 11.2-16 e as questões de 1Co 14.34-36 foram isolados, sem campos ou pistas; a citação de 14.21 não foi completada pelo Antigo Testamento. **2 Coríntios, as demais cartas e Apocalipse ficam para nova base; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 045 — 2 Coríntios 7, 10 e 13

A base `75f52929d25930ead6507a260a6e105521a635e0`, com **131 pautas, 524 campos e 2.381 pistas**, foi confirmada antes da edição. Em etapa bíblica separada dos testes, as páginas NAA de 2 Coríntios 7, 10 e 13 em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e somente esses capítulos foram lidos e autorados.

Foram incorporadas três pautas e 52 pistas: 2Co 7.2-16 com 16, 2Co 10 com 18 e 2Co 13 com 18. O catálogo passa a **134 pautas, 536 campos e 2.433 pistas**, todas elegíveis em alguma mesa. A capacidade permanece `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e ao menos uma no poço. A comparação mecanizada confirmou que os 131 objetos anteriores permaneceram integralmente inalterados.

As perguntas são atributivas ao texto. A carta citada em 2Co 7 não foi identificada externamente, adversários e viagens de 2Co 10 não foram reconstruídos, e a alusão de 2Co 13.1 não foi completada pelo Antigo Testamento. **As demais cartas e Apocalipse permanecem pendentes; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 046 — Gálatas 6 e Efésios 1–3

A base do commit `884606496aeb54a9c0f71de5172445f286a4b7a0`, com **134 pautas, 536 campos e 2.433 pistas**, foi confirmada antes da edição. Em etapa bíblica separada dos testes, Gl 6 e Ef 1, 2 e 3 na NAA identificada em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e somente esses capítulos foram lidos e autorados.

Foram incorporadas quatro pautas e 81 pistas: Gl 6 com 18, Ef 1 com 20, Ef 2 com 22 e Ef 3 com 21. O catálogo passa a **138 pautas, 552 campos e 2.514 pistas**, todas elegíveis em alguma mesa. A capacidade permanece `min(12, floor((cartas - 1) / 2))`, com duas cartas por pessoa e ao menos uma no poço. A comparação mecanizada confirmou os 134 objetos anteriores integralmente inalterados.

As perguntas são atributivas à carta, as notas cruzadas não foram usadas para completar alusões e nenhum capítulo foi harmonizado com Atos ou outra carta. As dúvidas de 1Co 11.2-16 e 14.34-36 permanecem isoladas. **Ef 4–5, Colossenses, Tessalonicenses, pastorais, cartas gerais e Apocalipse ficam para próximas bases; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 047 — Efésios 4–5 e Colossenses 3–4

A base `425da6439e88be3a743e83e0aea255add97236c3` foi confirmada com **138 pautas, 552 campos e 2.514 pistas**. Em 13/09/2026, exclusivamente as páginas de Efésios 4–5 e Colossenses 3–4 identificadas como NAA em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da autoria. O limite de cinco não foi tratado como meta: os quatro capítulos sustentaram quatro pautas independentes.

- **Inventário:** 142 pautas elegíveis, 568 campos e 2.593 pistas; 57 comportam até 12 participantes, três até 11, cinco até 10, cinco até 9, doze até 8, cinco até 7, 31 até 6, uma até 5, dez até 4 e treze até 3.
- **Preservação:** a comparação mecanizada confirmou igualdade integral dos 138 objetos e das 2.514 pistas anteriores.
- **Delimitação:** Ef 4, Ef 5, Cl 3 e Cl 4 permanecem pautas documentais separadas; temas semelhantes não foram fundidos. Tíquico, Onésimo, circulação de cartas e algemas em Cl 4 não foram alinhados a viagens, cronologias ou outros documentos.
- **Auditoria:** zero duplicatas exatas e zero pares semânticos sem resolução; cada pauta tem quatro campos, focal justificado, pontuação derivada 8/5/3/2 e capacidade de 2–9.
- **Pendências:** Tessalonicenses, pastorais, cartas gerais e Apocalipse permanecem para as próximas bases desta sequência; o banco não está completo. As decisões textuais e interpretativas vigentes continuam inalteradas.

## Checkpoint 048 — blocos de 1–2 Tessalonicenses

A base `9b25bdb8465878bb2f86f05f2f203fd633092f74`, correspondente ao conteúdo salvo do checkpoint 047, foi confirmada com **142 pautas, 568 campos e 2.593 pistas**. Em 13/09/2026, somente 1Ts 1, 1Ts 4, 2Ts 2 e 2Ts 3 foram obtidos individualmente da NAA identificada em `bible.com/pt/bible/1840`, todos com HTTP 200. A autoria limitou-se a 1Ts 1, aos blocos separados 1Ts 4.1-12 e 4.13-18, a 2Ts 2.13-17 e a 2Ts 3.6-18.

- **Inventário:** 147 pautas elegíveis, 588 campos e 2.652 pistas; 57 comportam até 12 participantes, três até 11, cinco até 10, cinco até 9, doze até 8, seis até 7, 33 até 6, uma até 5, onze até 4 e quatorze até 3.
- **Preservação:** a comparação mecanizada confirmou igualdade integral dos 142 objetos e das 2.593 pistas anteriores; nenhuma correção retroativa foi necessária.
- **Delimitação:** 1Ts 4 permaneceu em duas pautas sem fusão. Perguntas e fatos são atributivos às cartas; não foi criado calendário da vinda, e figuras fora de 2Ts 2.13-17 não foram usadas.
- **Auditoria:** zero duplicatas exatas e zero pares semânticos sem resolução; as cinco pautas têm C1–C4, gabaritos explícitos, focais justificados e capacidade derivada por mesa.
- **Pendências:** pastorais, cartas gerais e Apocalipse permanecem para uma nova base; o banco não está completo. As dúvidas de 1Co 11.2-16 e 14.34-36 e todas as demais decisões vigentes continuam isoladas/preservadas.


## Checkpoint 049 — cinco blocos de 1 Timóteo

A rodada partiu exatamente de `1de2fa0d1a624457a6cec3465d3f9245fb3d0065`, com **147 pautas, 588 campos e 2.652 pistas**, e confirmou a preservação integral desses 147 objetos. Em 13/09/2026, exclusivamente 1Tm 1, 4, 5 e 6 na Nova Almeida Atualizada identificada em `bible.com/pt/bible/1840` foram obtidos individualmente com HTTP 200 e lidos antes da autoria.

Foram acrescentadas cinco pautas e 81 pistas: `nt2-1timoteo-ensino-graca-combate` (18), `nt2-1timoteo-criacao-piedade-ministerio` (16), `nt2-1timoteo-familias-viuvas` (16), `nt2-1timoteo-presbiteros-conselhos` (10) e `nt2-1timoteo-contentamento-combate-ricos` (21). O capítulo 5 foi delimitado em 5.1-16 e 5.17-25; os demais capítulos formam blocos próprios. Perguntas, alternativas e pistas atribuem as afirmações à carta, sem importar notas cruzadas, história, harmonizações ou calendário.

- **Inventário:** 152 pautas elegíveis, 608 campos e 2.733 pistas; 57 comportam até 12 participantes, três até 11, seis até 10, cinco até 9, treze até 8, oito até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3.
- **Contrato:** todas as novas pautas têm C1–C4, quatro alternativas distintas por campo, gabaritos explícitos, focal justificado e pontuação gerada 8/5/3/2; a capacidade segue `min(12, floor((cartas-1)/2))`, duas cartas por jogador e ao menos uma no poço.
- **Preservação:** os 147 objetos e as 2.652 pistas anteriores permaneceram mecanicamente idênticos.
- **Pendências:** 2Tm/Tt, cartas gerais e Apocalipse permanecem para lotes seguintes; o banco **não** está completo. As dúvidas de 1Co 11.2-16 e 14.34-36 seguem isoladas, e todas as decisões bíblicas vigentes foram preservadas.
- **Operação:** não houve merge, deploy, publicação, Firebase nem alteração de credenciais.


## Checkpoint 050 — quatro blocos de 2 Timóteo e Tito

A rodada continuou de `a92cbe6`, com **152 pautas, 608 campos e 2.733 pistas**. Antes da autoria, a regeneração produziu arquivo byte a byte idêntico (`sha256sum -c`), e a equivalência do auditor otimizado foi medida em todas as **3.733.278 comparações** possíveis entre as 2.733 pistas: algoritmo anterior e otimizado retornaram os mesmos 12 pares sinalizados, os mesmos escores e diferença máxima zero. O cache não suprimiu comparação nem mudou limiar.

Em 13/09/2026, exclusivamente as páginas NAA de 2Tm 3, 2Tm 4, Tt 1 e Tt 3 identificadas em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200. A leitura e autoria ficaram limitadas a 2Tm 3, 2Tm 4.1-8, Tt 1 e Tt 3. Foram acrescentadas quatro pautas e 71 pistas: `nt2-2timoteo-ultimos-dias-escrituras` (18), `nt2-2timoteo-pregar-combater-coroa` (16), `nt2-tito-presbiteros-ensino-repreensao` (18) e `nt2-tito-conduta-graca-instrucoes` (19).

- **Inventário:** 156 pautas elegíveis, 624 campos e 2.804 pistas; 57 comportam até 12 participantes, três até 11, seis até 10, seis até 9, quinze até 8, nove até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3.
- **Contrato:** C1–C4, quatro alternativas distintas, gabaritos explícitos, focal justificado, metadados classificados, revelação e pontuação 8/5/3/2 foram preservados; a capacidade continua `min(12, floor((cartas-1)/2))`.
- **Preservação:** os 152 objetos e as 2.733 pistas anteriores permaneceram integralmente idênticos.
- **Limites:** perguntas e pistas são atributivas; nomes, lugares, manifestação, Dia, Escrituras e citações não receberam reconstruções externas. As dúvidas de 1Co 11.2-16 e 14.34-36 seguem isoladas.
- **Pendências:** cartas gerais e Apocalipse ficam para nova base; o banco **não** está completo. Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 051 — lote limitado a Hb 13.1-19 e Tiago

A rodada partiu de `869fd005716a37812e95001ee02e9a7a55eb5ed3`, com **156 pautas e 2.804 pistas**. As páginas NAA de Hb 13, Tg 1, Tg 2 e Tg 5 retornaram HTTP 200 em 13/09/2026, e somente Hb 13.1-19, Tg 1, Tg 2 e Tg 5.1-12 foram lidos e autorados.

Foram incorporadas quatro pautas e 95 pistas, elevando o catálogo a **160 pautas, 640 campos e 2.899 pistas**. Todas são elegíveis em alguma mesa e mantêm capacidade derivada por `min(12, floor((cartas-1)/2))`, com duas cartas por participante e ao menos uma no poço. A comparação mecanizada confirmou que os 156 objetos anteriores permaneceram integralmente idênticos.

As perguntas e pistas atribuem as afirmações às próprias cartas; alusões não receberam complementação externa. **Pedro, João, Judas, Apocalipse e a auditoria global de cobertura permanecem pendentes; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 052 — lote limitado a 1 Pedro 1–3.17

A base `529b518` foi confirmada com **160 pautas e 2.899 pistas**. Em etapa bíblica separada dos testes, 1Pe 1, 2 e 3 na NAA identificada em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026. A autoria limitou-se a 1Pe 1, 1Pe 2 e 1Pe 3.1-17.

Foram incorporadas três pautas e 80 pistas, chegando a **163 pautas, 652 campos e 2.979 pistas**. As três comportam 12 participantes; C1–C4, quatro alternativas, gabaritos, focal, pontuação 8/5/3/2, metadados e revelação permanecem no contrato. Os 160 objetos anteriores foram mecanicamente preservados.

1Pe 3.19 não foi usado nem interpretado. **1Pe 4–5, 2Pe, João, Judas, Apocalipse e a auditoria global ficam para nova base; o banco não está completo.** Não houve uso da `main`, merge, deploy ou publicação.


## Checkpoint 053 — lote exclusivo de 1 Pedro 4

A consulta efetiva e exclusiva da página NAA de 1Pe 4 sustentou três pautas independentes: 4.1-5 (15 pistas), 4.7-11 (16) e 4.12-19 (19). O inventário passa de 163/2.979 para **166 pautas, 664 campos e 3.029 pistas**, preservando integralmente os objetos anteriores. 1Pe 4.6 foi excluído de todos os elementos editoriais e referências.

**1Pe 5, 2Pe, João, Judas, Apocalipse e a auditoria global continuam pendentes; o banco não está completo.**


## Checkpoint 054 — fechamento autorizado de Pedro

A consulta efetiva das páginas NAA de 1Pe 5 e 2Pe 1 sustentou duas pautas: 1Pe 5 com 32 pistas e 2Pe 1.1-15 com 29. O catálogo passa a **168 pautas, 672 campos e 3.090 pistas**, com os 166 objetos anteriores preservados. A interpretação comunitária de 1Pe 5.13 foi registrada sem geografia nem equivalência lexical; 1Pe 3.19 e 4.6 permanecem excluídos.

**João, Judas, Apocalipse e a auditoria global continuam pendentes; o banco não está completo.**

## Checkpoint 055 — lote limitado a 1 João 1–3

A base `6e8e2a3cb0240532b947c25cf4e0374cd3c24d21`, com **168 pautas e 3.090 pistas**, foi confirmada antes da edição. Em etapa bíblica separada da automação, 1Jo 1, 2 e 3 na NAA identificada em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e somente esses capítulos foram lidos e autorados.

Foram incorporadas quatro pautas e 100 pistas: 1Jo 1 com 22, 1Jo 2.1-17 e 2.18-29 com 25 cada, e 1Jo 3 com 28. O catálogo passa a **172 pautas, 688 campos e 3.190 pistas**: 66 comportam até 12 participantes, seis até 11, sete até 10, sete até 9, quinze até 8, onze até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3. Todos os 168 objetos anteriores permaneceram mecanicamente idênticos.

C1–C4, quatro alternativas distintas, gabaritos, focal, metadados, revelação e pontuação 8/5/3/2 foram preservados. A capacidade segue `min(12, floor((cartas - 1) / 2))`, duas cartas por jogador e ao menos uma no poço. Não houve identificação externa dos anticristos nem harmonização com outros documentos; não surgiu nova ambiguidade real a encaminhar ao usuário.

**1Jo 4–5, demais João, Judas, Apocalipse e auditoria global ficam para etapas posteriores; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 056 — lote limitado a 1 João 4–5

A base `dd88ebe`, com **172 pautas e 3.190 pistas**, foi confirmada antes da edição. A regeneração prévia foi byte a byte idêntica ao artefato versionado. Em etapa bíblica separada, as páginas NAA de 1Jo 4 e 5 em `bible.com/pt/bible/1840` retornaram HTTP 200 em 13/09/2026 e somente esses capítulos foram lidos e autorados.

Foram incorporadas quatro pautas e 88 pistas: 1Jo 4.1-6 com 19, 4.7-21 com 26, 5.1-12 com 22 e 5.13-21 com 21. O catálogo passa a **176 pautas, 704 campos e 3.278 pistas**: 67 comportam até 12 participantes, seis até 11, nove até 10, oito até 9, quinze até 8, onze até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3. A comparação mecanizada confirmou os 172 objetos anteriores integralmente inalterados.

C1–C4, quatro alternativas, gabaritos, foco, 8/5/3/2, metadados, revelação e capacidade por mesa foram preservados. Não houve identidade externa para espíritos ou anticristos, harmonização ou identificação do pecado que leva à morte em 1Jo 5.16-17.

**Demais João, Judas, Apocalipse e auditoria global ficam para nova base; o banco não está completo.** Não houve uso da `main`, merge, deploy ou publicação.

## Checkpoint 057 — auditoria/autoria de 2 João, 3 João e Judas

As três cartas foram consultadas novamente na NAA com HTTP 200. A auditoria comparativa encerrou 2 João e 3 João sem duplicar suas pautas existentes. Judas originou três pautas documentais — 1-7, 8-16 e 17-25 — com 58 pistas, elevando o inventário de 176/3.278 para **179 pautas, 716 campos e 3.336 pistas**. Os 176 objetos anteriores permaneceram integralmente idênticos.

As perguntas são atributivas e as referências são exatas. A decisão comunitária sobre “senhora eleita” continua interpretativa, não lexical nem necessariamente local. Moisés, Miguel e Enoque permanecem limitados ao que Judas declara, sem notas, narrativas externas, identidades atuais ou calendários. **Apocalipse e a auditoria global dos 27 livros permanecem pendentes; o banco não está completo.**

## Checkpoint 058 — quatro cartas de Apocalipse 2

Após consulta efetiva da página NAA e comparação com a cobertura existente, as cartas a Éfeso, Esmirna, Pérgamo e Tiatira originaram quatro pautas independentes com 72 pistas. O catálogo passa de 179/3.336 para **183 pautas, 732 campos e 3.408 pistas**; os 179 objetos anteriores foram preservados integralmente.

Descrições, ações, advertências, promessas e identificações são internas e atributivas. Jezabel e nicolaítas não foram ligados a identidades históricas, atuais ou alegóricas. **Ap 3, os demais recortes de Apocalipse e a auditoria global dos 27 livros permanecem pendentes; o banco não está completo.**

## Checkpoint 059 — três cartas de Apocalipse 3

A consulta efetiva da página NAA de Ap 3 e a comparação contra as 183 pautas anteriores sustentaram três pautas independentes: Sardes, 3.1-6, com 18 pistas; Filadélfia, 3.7-13, com 20; e Laodiceia, 3.14-22, com 20. O catálogo passa de 183/3.408 para **186 pautas, 744 campos e 3.466 pistas**, preservando integralmente os objetos anteriores.

As formulações são atributivas e as imagens permanecem descrições, avaliações, ações, conselhos, advertências ou promessas internas. Nenhuma identidade histórica, igreja atual, calendário ou alegoria foi acrescentada, e nenhuma ambiguidade real nova foi encontrada. **Os demais recortes de Apocalipse e a auditoria global dos 27 livros continuam pendentes; o banco não está completo.**

## Checkpoint 060 — Apocalipse 4–7

A consulta efetiva de Ap 4–7 confirmou que as pautas existentes de trono/Cordeiro (Ap 4–5) e selos/cavaleiros (Ap 6) já cobrem seus recortes, sem necessidade de duplicação. Duas pautas próprias foram acrescentadas para Ap 7.1-8 e 7.9-17, com 16 e 20 pistas. O catálogo passa a **188 pautas, 752 campos e 3.502 pistas**, preservando os 186 objetos anteriores.

Número, lista de tribos e grande multidão são mantidos como conteúdo da visão, sem literalidade definida, identidade externa, calendário ou harmonização com Ap 14. **Ap 8–22 e a auditoria global permanecem pendentes nos termos registrados; o banco não está completo.**

## Checkpoint 061 — Apocalipse 8–10

As páginas NAA de Ap 8–10 retornaram HTTP 200 e foram lidas antes da autoria. Quatro pautas documentais — Ap 8.1-13, Ap 9.1-12, Ap 9.13-21 e Ap 10.1-11 — acrescentam 96 pistas. O catálogo passa de 188/3.502 para **192 pautas, 768 campos e 3.598 pistas**, preservando integralmente os 188 objetos anteriores.

As formulações são atributivas e limitadas a descrições, ações, comparações, identificações e sequências internas. Não foram acrescentados calendário, identidade histórica, tecnologia moderna ou alegoria para trombetas, anjos, gafanhotos, cavalaria, trovões ou livrinho. **Ap 11–22 e a auditoria global permanecem pendentes nos termos registrados; o banco não está completo.**

## Checkpoint 062 — Apocalipse 11 e auditoria de 12–13

A consulta efetiva das páginas NAA de Ap 11–13 sustentou duas pautas novas para Ap 11, com 30 e 18 pistas, e confirmou que a cobertura do capítulo 12 pode ser encerrada por `nt2-apocalipse-mulher-dragao` e a do capítulo 13 por `nt2-apocalipse-duas-bestas`. Nenhuma pauta foi duplicada e os objetos existentes não foram alterados. O catálogo passa de 192/3.598 para **194 pautas, 776 campos e 3.646 pistas**.

As duas testemunhas permanecem sem identidades externas; mulher, dragão, bestas, marca e 666 ficam restritos às descrições e identificações internas. Não foram acrescentados instituições atuais, calendários ou interpretações externas. **Ap 14–22 e a auditoria global permanecem pendentes; o banco não está completo.**

## Checkpoint 063 — Apocalipse 14–15 e auditoria de 16

A consulta efetiva das páginas NAA de Ap 14–16 sustentou quatro pautas novas: três blocos em Ap 14 e um bloco em Ap 15, somando 93 pistas. A leitura e comparação de Ap 16 confirmaram cobertura suficiente por `nt2-apocalipse-tacas`, que não foi alterada nem duplicada. O catálogo passa de 194/3.646 para **198 pautas, 792 campos e 3.739 pistas**.

Os 194 objetos anteriores permaneceram idênticos. A auditoria automatizada registra zero duplicatas exatas e zero pares sem resolução após fundamentar dois paralelos internos da sequência de anjos em Ap 14. O número dos cento e quarenta e quatro mil permanece sem definição de literalidade e sem harmonização com Ap 7; Cordeiro, cânticos, anjos, ceifa, lagar e taças não receberam identidade externa, calendário ou alegoria acrescentada. **Ap 17–22 e a auditoria global dos 27 livros permanecem posteriores; este relatório não declara o banco completo.**

## Checkpoint 064 — Apocalipse 17–18

A consulta efetiva das páginas NAA de Ap 17–18 sustentou quatro pautas novas: uma para a visão e explicação do capítulo 17 e três blocos documentais no capítulo 18, totalizando 105 pistas. O catálogo passa de 198/3.739 para **202 pautas, 808 campos e 3.844 pistas**, com preservação serializada dos 198 objetos anteriores.

A auditoria automatizada registra zero duplicatas exatas e zero pares sem resolução após quatro decisões individuais. Mulher, Babilônia, besta, reis, mercadores, mercadorias e lamentos não receberam identidades históricas externas, instituições atuais, geografia presente, calendário ou alegoria. **Ap 19–22 e a auditoria global dos 27 livros permanecem posteriores; este relatório não declara o banco completo.**

## Incremento do checkpoint 065 — Apocalipse 19 e auditoria de 20–22

A consulta NAA efetiva acrescentou duas pautas de Ap 19 e 61 pistas, levando o inventário a **204 pautas, 816 campos e 3.905 pistas**. A comparação canônica preservou os 202 objetos anteriores. As pautas existentes de Ap 20.1-15 e Ap 21.1–22.5 foram auditadas e mantidas; o rótulo amplo de cobertura de Ap 21–22 foi corrigido, pois Ap 22.6-21 continua sem pauta. Não surgiram ambiguidades reais novas. O resultado não constitui conclusão do banco: a auditoria global dos 27 livros, inclusive lacunas e exclusões genéricas, permanece obrigatória.

## Incremento do checkpoint 066 — Apocalipse 22.6-21 e inventário global

Uma pauta de 32 pistas para Ap 22.6-21 leva o inventário a **205 pautas, 820 campos e 3.937 pistas**, sem modificar os 204 objetos anteriores. O cruzamento documental dos 27 livros está em `docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md` e registra livro, recorte, motivo, evidência e status, além de lotes pequenos sugeridos. Foram distinguidas as dúvidas do usuário em 1Co 11.2-16 e 14.34-36 das reconsultas que podem avançar independentemente. A existência de testes aprovados ou de um estado histórico “analisado” não autoriza declarar o banco completo; múltiplos recortes ainda requerem consulta NAA individual.

## Incremento do checkpoint 071 — pendências específicas de Mateus 10–13

Somente Mt 10.1-15, Mt 12.9-14 e Mt 13.51-58 foram reconsultados na NAA Bible.com 1840. Duas pautas novas, com 22 e 14 pistas, e três pistas exclusivas consolidadas na pauta paralela da mão ressequida levam o catálogo de **220 pautas/4.308 pistas para 222/4.347**. A consolidação preserva todos os campos e as nove pistas anteriores, atribui fatos comuns às duas fontes e mantém diferenças documentais separadas. Os outros 219 objetos anteriores ficaram idênticos; Mt 18–20 e os demais recortes continuam posteriores. Não houve harmonização, meta numérica nem declaração de banco completo.

## Incremento do checkpoint 072 — Mateus 18

A leitura exclusiva de Mateus 18 na NAA Bible.com 1840 sustentou quatro pautas e 57 pistas, elevando o catálogo de **222 pautas/4.347 pistas para 226/4.404**. Todas as unidades foram inventariadas; Mt 18.8-9 foi reconhecido como já coberto por Mt 5.29-30 e não foi repetido. A recontagem por referência corrige o subtotal anterior de Mateus de 750 para 749 pistas e chega agora a 806, sem alterar o catálogo. Os 222 objetos anteriores permaneceram integralmente idênticos e as novas pautas têm capacidades 5, 4, 6 e 10. Mt 19–20 e demais recortes continuam posteriores; não houve harmonização, interpretação externa ou declaração de banco completo.

## Checkpoint 075 — lote limitado de Mateus 21–22

Somente Mt 21–22 foi obtido na NAA Bible.com 1840 (HTTP 200) e lido verso a verso. A comparação efetiva de campos, perguntas, pistas, referências e paralelos partiu de **232 pautas/4.538 pistas**. Mt 21.1-11 permaneceu coberto pela pauta existente. Quatro pautas foram anexadas: templo/figueira (23 pistas), autoridade/dois filhos (23), lavradores maus (28) e festa de casamento (25), levando o catálogo a **236 pautas/944 campos/4.637 pistas**; os 232 objetos anteriores permaneceram serializadamente idênticos.

As capacidades são 11, 11, 12 e 12, calculadas sem piso ou inflação. Parábolas, listas e ensinos permanecem atributivos e não foram harmonizados com paralelos. Mt 22.15-22, 22.23-33, 22.34-40 e 22.41-46 ficam individualmente **pendentes pelo limite do lote**, não excluídos; Mt 23–25 continua posterior. Dúvidas de 1Co e exclusões definitivas permanecem preservadas. O banco não está completo, e testes não alteram esse estado.

## Checkpoint 076 — quatro pendências finais de Mateus 22

Somente Mt 22.15-46 foi reconsultado na NAA Bible.com 1840 (HTTP 200) e comparado, por campos, perguntas, pistas, referências e paralelos, aos **236 objetos/4.637 pistas**. Quatro pautas sustentadas foram anexadas: tributo (16 pistas; capacidade 7), ressurreição (20; 9), grande mandamento (10; 4) e Cristo/Davi (10; 4). O catálogo passa a **240 pautas/960 campos/4.693 pistas**, preservando serializadamente os 236 objetos anteriores.

As hipóteses e perguntas ficam atribuídas aos interlocutores; respostas e citações ficam atribuídas a Jesus. Não se importou o AT, não se harmonizaram paralelos e não houve piso de 25 pistas ou 12 participantes. Mt 21–22 fica decidido no inventário vigente, mas **Mt 23–25 permanece posterior**; Mateus e o banco não são declarados completos. Dúvidas de 1Co e exclusões definitivas continuam preservadas; não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 077 — inventário individual de Mateus 23

Somente a página NAA Bible.com 1840 de Mateus 23 foi obtida (HTTP 200; 354.533 bytes), lida integralmente e comparada aos **240 objetos/4.693 pistas**. As unidades não sinalizadas receberam decisão individual na ficha de Mateus; Mt 23.14 permaneceu sem decisão própria. Quatro pautas sustentadas foram anexadas: obras/títulos/serviço (17 pistas; capacidade 8), ais/juramentos (15; 7), dízimo/aparências (18; 8) e profetas/lamento (20; 9). Mt 23.14, exibido entre colchetes pela NAA consultada, não foi usado em pista, campo ou gabarito e permanece como pendência textual: a política vigente exige decisão específica, pois colchetes isoladamente não constituem exclusão global (Jo 8.1-11 e At 8.37 tiveram encaminhamentos próprios).

A comparação serializada confirmou os **240 objetos anteriores byte-equivalentes por `JSON.stringify`**, na mesma ordem; somente quatro objetos foram anexados. Resultado: **244 pautas/976 campos/4.763 pistas**, todas elegíveis. Denúncias, hipóteses, anúncios, citações e imagens permanecem atribuídos ao discurso/texto de Mateus, sem generalização, importação do AT ou harmonização de paralelos. Mt 24–25 e as pendências concretas dos demais livros permanecem posteriores; dúvidas de 1Co e exclusões definitivas foram preservadas. Testes não declaram o banco completo, e não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 078 — inventário individual de Mateus 24

Somente a página NAA Bible.com 1840 de Mateus 24 foi obtida (HTTP 200; 359.681 bytes), lida integralmente e comparada aos **244 objetos/4.763 pistas**. Quatro pautas sustentadas foram anexadas: templo/sinais/testemunho (22 pistas; capacidade 10), fuga/falsos cristos (21; 10), vinda/anjos/figueira (16; 7) e vigilância/servos (22; 10). Profecias, imagens, alusões e situações hipotéticas permanecem atribuídas ao discurso de Jesus em Mateus, sem calendário, identidades históricas, geografia atual, importação do AT ou harmonização externa.

A comparação serializada confirmou os **244 objetos anteriores byte-equivalentes por `JSON.stringify`**, na mesma ordem; somente quatro objetos foram anexados. Resultado: **248 pautas/992 campos/4.844 pistas**, todas elegíveis. Mt 24 recebeu decisão por unidade; **Mt 25 permanece posterior**. A correção documental do checkpoint anterior mantém **Mt 23.14 como pendência textual específica**, não exclusão definitiva: colchetes não são regra global, e a política registrada para Jo 8.1-11 e At 8.37 exige encaminhamento próprio. O verso não foi incluído agora e não bloqueou Mt 24. Dúvidas de 1Co e exclusões definitivas continuam preservadas; testes não declaram o banco completo, e não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 079 — inventário individual de Mateus 25

Somente Mt 25 foi consultado na página NAA Bible.com 1840 (HTTP 200; 351.114 bytes), lido por unidade e comparado aos 248 objetos/4.844 pistas. Três pautas sustentadas acrescentaram 60 pistas: virgens/lamparinas (18; capacidade 8), servos/talentos (22; 10) e Rei/ovelhas/cabritos (20; 9), todas atributivas e sem identidades externas, harmonização ou calendário.

Os 248 objetos anteriores serializaram identicamente e permaneceram na mesma ordem; o resultado é **251 pautas/1.004 campos/4.904 pistas**. A revisão meramente documental das faixas Mt 1–4, 8–9, 14–17 e 26–28 registrou na ficha lacunas específicas deixadas por decisões agregadas antigas, sem nova autoria. Mt 23.14 continua pendência textual e nenhum teste declara Mateus ou o banco completos.

## Checkpoint 080 — lacunas individualizadas de Mateus 1–4

Somente Mt 1.1-17, 2.13-23, 3.1-12 e 4.12-25 foram reconsultados nas páginas NAA Bible.com 1840 de Mateus 1–4, todas HTTP 200. Após comparação aos 251 objetos/4.904 pistas, quatro pautas acrescentaram 84 pistas, com capacidades 11, 9, 9 e 10. Genealogia, listas, citações, imagens e o paralelo do chamado ficaram restritos ao documento de Mateus, sem AT importado, cronologia ou harmonização.

Os 251 objetos anteriores serializaram identicamente e permaneceram na mesma ordem; o resultado é **255 pautas/1.020 campos/4.988 pistas**. Nenhum dos quatro recortes ficou pendente, mas testes e matrizes não declaram Mateus nem o banco completos. Mt 8–9, 14–17 e 26–28 permanecem posteriores; Mt 23.14 e dúvidas de 1Co foram preservados.

## Incremento do checkpoint 087 — inventário individual de Mateus 27

Somente a página NAA Bible.com 1840 de Mateus 27 foi obtida (HTTP 200; 379.709 bytes), lida integralmente e comparada aos **277 objetos/5.372 pistas**. Pilatos/Barrabás, crucificação e sepultamento em 27.57-61 permaneceram cobertos por três pautas existentes, sem alteração ou duplicação. Três pautas sustentadas foram anexadas: Judas/campo (21 pistas; capacidade 10), zombaria dos soldados (16; 7) e guarda do túmulo (15; 7).

Os 277 objetos anteriores ficaram byte-equivalentes por `JSON.stringify`; o resultado é **280 pautas/1.120 campos/5.424 pistas**, todas elegíveis. Alegações e citações permanecem atributivas, sem harmonização ou AT externo. Mt 27 tem decisões por unidade no inventário atual; **Mt 28 permanece posterior por limite**, e Mt 17.21, 23.14, dúvidas de 1Co e decisões anteriores foram preservados. Testes não declaram o banco completo.

## Incremento do checkpoint 088 — inventário individual de Mateus 28

Somente a página NAA Bible.com 1840 de Mateus 28 foi obtida (HTTP 200; 321.847 bytes), lida integralmente e comparada aos **280 objetos/5.424 pistas**. Mt 28.1-10 permaneceu coberto sem alteração; duas pautas sustentadas foram anexadas para a versão paga aos guardas (17 pistas; capacidade 8) e os onze no monte/comissão (18; 8).

Os 280 objetos anteriores ficaram byte-equivalentes por `JSON.stringify`; o resultado é **282 pautas/1.128 campos/5.459 pistas**, todas elegíveis. A ficha possui decisão para todos os recortes enumerados de Mateus, exceto as lacunas textuais específicas Mt 17.21 e 23.14, que não são exclusões definitivas. O próximo lote independente planejado é Mc 1–2, sem autoria de Marcos agora. Dúvidas de 1Co e decisões anteriores permanecem preservadas; testes não declaram o banco completo.

## Incremento do checkpoint 091 — decisão de Mt 17.21

A reconsulta NAA 1840 confirmou texto e nota entre colchetes. Sem criar pauta nova, `nt2-mateus-menino-fe-mostarda` passou a responder “Falta de oração e jejum” como inferência contextual de Mt 17.19-21, com explicação de que o verso não declara literalmente a omissão dos discípulos. “Pequenez da fé” em 17.20 continua perspectiva válida, mas não distrator falso. Dos 288 objetos, somente esse foi consolidado; permanecem **288 pautas/1.152 campos/5.566 pistas**. Mt 23.14 e dúvidas de 1Co continuam pendentes, Mc 16.9-20 permanece excluído e Mc 3–4 é somente o próximo plano.

## Checkpoint 092 — decisões de Mt 23.14 e 1Co 11.2-16

A reconsulta NAA 1840 aplicou Mt 23.14 a `nt2-mateus-ais-juramentos`, distinguindo exploração das viúvas de sua justificação com longas orações e preservando colchetes/nota textual. Duas pistas foram anexadas; a pauta passa a 17 pistas/capacidade 8. Em 1Co 11.2-16, somente três perguntas aprovadas foram registradas em `data/nt-approved-content.json`; elas não viraram pauta porque o contrato exige quatro campos e um quarto conteúdo foi expressamente proibido. Dos 288 objetos, 287 ficaram idênticos e somente a pauta de Mateus mudou; resultado **288 pautas/5.568 pistas**. 1Co 14.34-36 continua pendente, variantes funcionais não foram implementadas e Mc 3–4 não foi autorado.

## Checkpoint 093 — 1Co 14.35 e fechamento parcial reproduzível

A reconsulta NAA 1840 confirmou o item de 1Co 14.35, que foi excluído editorialmente do jogo por decisão explícita, sem substituição por 14.34/36 e sem alterar a pauta de 14.1-33,37-40. Nenhum objeto ou pista mudou: permanecem **288/5.568**. O relatório parcial reproduzível está em `docs/RELATORIO-PARCIAL-CAPACIDADE-NT.md`, com artefato em `data/nt-capacity-report.json` e gerador `tools/report-nt-capacity.mjs`. Ele conta IDs, não histórias, e mantém fatos semânticos/episódios sem contagem quando o modelo não os representa.

## Checkpoint 094 — inventário integral de Marcos 3–4

As páginas NAA Bible.com 1840 de Mc 3–4 (95.002 e 97.761 bytes; HTTP 200) foram efetivamente lidas verso a verso, e cada unidade recebeu matriz concreta na ficha de Marcos. Mc 3.1-6 e 4.35-41 já estavam cobertos por `nt2-marcos-mao-ressequida` e `nt2-tempestade-barco`, sem alteração. Mc 3.7-12, 3.13-19, 3.20-30 e 3.31-35 originaram quatro pautas com 14, 18, 18 e 11 pistas, capacidades 6, 8, 8 e 5. Os 288 objetos anteriores ficaram serializadamente idênticos e apenas quatro foram anexados: **292 pautas/1.168 campos/5.629 pistas**, todas elegíveis.

Mc 4.1-20, 4.21-25, 4.26-29 e 4.30-34 permanecem precisamente registrados como sustentados para continuidade, adiados apenas pelo limite de quatro novas pautas; não foram excluídos por insuficiência. Semelhanças de cura, multidão, monte, mostarda e seguimento não estabeleceram identidade, e referências cruzadas não forneceram fatos. Decisões de Mt 17.21, Mt 23.14, 1Co 11, 1Co 14.35 e Mc 16.9-20 foram preservadas. Marcos e o banco não são declarados completos.

## Checkpoint 095 — fechamento de Marcos 4.1-34

A página NAA Bible.com 1840 de Mc 4 foi reconsultada (HTTP 200; 97.761 bytes), com leitura efetiva restrita a 4.1-20, 4.21-25, 4.26-29 e 4.30-34. As quatro matrizes já registradas foram conferidas contra 292 objetos/5.629 pistas e originaram pautas de 27, 11, 14 e 12 pistas, capacidades 12, 5, 6 e 5. `nt2-tempestade-barco` continuou cobrindo 4.35-41 sem alteração ou duplicação. Paralelos, referências cruzadas e a imagem genérica da mostarda não estabeleceram identidade nem forneceram fatos externos.

Os 292 objetos anteriores permaneceram serializadamente idênticos e na mesma ordem; somente quatro foram anexados. Resultado: **296 pautas/1.184 campos/5.693 pistas**, todas elegíveis. Mc 3–4 fica sem remanescente conhecido na matriz vigente, mas Marcos e o banco não são declarados completos, pois as auditorias globais permanecem abertas. Decisões anteriores foram preservadas; o próximo lote delimitado é Mc 5–6, ainda não consultado nem autorado.

## Checkpoint 096 — inventário individual integral de Marcos 5–6

As páginas NAA Bible.com 1840 de Mc 5 e 6 retornaram HTTP 200 (95.923 e 99.487 bytes) e foram efetivamente lidas verso a verso em 13/09/2026. A matriz individual em `docs/cobertura/MARCOS.md` confronta perguntas, gabaritos, referências e fatos de dez unidades: Mc 5.1-20, 5.21-24, 5.24-34, 5.35-43, 6.1-6, 6.7-13, 6.14-29, 6.30-44, 6.45-52 e 6.53-56.

Quatro pautas próprias de Marcos foram anexadas: recepção em sua terra (14 pistas), repouso/multidão/pães (20), caminhada sobre o mar com a explicação dos pães (17) e Genesaré (10). Os seis recortes restantes já estavam cobertos com referências documentais concretas e não foram duplicados. O catálogo passa de **296 pautas/5.693 pistas para 300/5.754**, preservando serializadamente os 296 objetos anteriores; capacidades novas: 6, 9, 8 e 4. Não resta recorte de Mc 5–6 adiado por limite. Próximo lote: Mc 7–8. Marcos e o banco permanecem incompletos; Mc 16.9-20 e todas as decisões vigentes permanecem intactos.

## Checkpoint 097 — inventário individual integral de Marcos 7–8

As páginas NAA Bible.com 1840 de Mc 7 e 8 retornaram HTTP 200 (95.783 e 96.398 bytes) e foram efetivamente lidas verso a verso em 13/09/2026. A ficha de Marcos registra matriz concreta e decisão para onze unidades. Quatro pautas foram anexadas: tradição/Corbã (19 pistas), interior/coração (18), pedido de sinal (8) e fermento/pães/cestos (17). Mc 7.24-30, 7.31-37 e 8.22-26 permaneceram cobertos sem duplicação.

O catálogo passa de **300 pautas/5.754 pistas para 304/5.816**, preservando serializadamente os 300 objetos anteriores; capacidades novas: 9, 8, 3 e 8. Restam precisamente por limite Mc 8.1-10, 8.27-30, 8.31-33 e 8.34-38, todos sustentados. Mc 7.16 foi isolado separadamente por estar entre colchetes com nota textual na NAA e não foi usado nem decidido. Depois dos adiados, o próximo lote é Mc 9–10. Marcos e o banco permanecem incompletos; decisões anteriores permanecem intactas.

## Checkpoint 098 — quatro recortes adiados de Marcos 8

A página NAA Bible.com 1840 de Mc 8 foi reconsultada (HTTP 200; 349.519 bytes), com leitura efetiva limitada a 8.1-10, 8.27-30, 8.31-33 e 8.34-38 e comparação contra os 304 objetos/5.816 pistas. Quatro pautas documentais próprias acrescentaram 53 pistas, com capacidades 7, 4, 6 e 7: quatro mil/Dalmanuta, confissão no caminho, anúncio com duas repreensões e ensino sobre seguir/vida/vergonha. Paralelos de Mateus foram confrontados, mas não provaram identidade por semelhança nem forneceram detalhes a Marcos.

Os 304 objetos anteriores permaneceram serializadamente idênticos e na mesma ordem; somente os quatro novos foram anexados. Resultado: **308 pautas/1.232 campos/5.869 pistas**, todas elegíveis. Mc 7.16 continua pendência textual isolada, sem decisão ou conteúdo novo; o próximo lote ordinário é Mc 9–10. O banco permanece incompleto, e decisões anteriores, inclusive Mc 16.9-20 e 1Co 11/14, continuam intactas. Não houve merge, deploy nem publicação.

## Checkpoint 099 — inventário individual integral de Marcos 9–10

As páginas NAA Bible.com 1840 de Mc 9 e 10 foram obtidas (HTTP 200; 365.573 e 376.563 bytes), efetivamente lidas verso a verso e confrontadas com os 308 objetos/5.869 pistas. A matriz integral na ficha de Marcos registra decisão concreta para todas as unidades. Quatro pautas foram anexadas: monte/voz/Elias (24 pistas; capacidade 11), menino/oração (22; 10), homem rico/Reino/recompensa (28; 12) e subida/cálice/serviço (27; 12). Bartimeu permaneceu coberto sem alteração. Paralelos foram comparados documentalmente, sem identidade baseada só em semelhança ou transferência de detalhes.

Os 308 objetos anteriores permaneceram serializadamente idênticos e na mesma ordem; somente quatro foram anexados. Resultado: **312 pautas/1.248 campos/5.970 pistas**, todas elegíveis. Permanecem precisamente sustentados por limite Mc 9.1, 9.30-32, 9.33-37, 9.38-41, 9.42-50, 10.1-12 e 10.13-16. Depois desses adiados, o próximo lote ordinário será Mc 11–12. Mc 7.16 segue pendência textual isolada, Mc 16.9-20 continua fora e o banco permanece incompleto. Não houve merge, deploy nem publicação.

## Checkpoint 100 — quatro primeiros recortes adiados de Marcos 9

Em 14/09/2026, a página NAA Bible.com 1840 de Mc 9 foi reconsultada efetivamente (HTTP 200; 365.573 bytes; SHA-256 `704d3dae683735478bd0136ccbea7906cc37f060471d4e3de6727d3e9e010ebe`), com leitura restrita a Mc 9.1, 9.30-32, 9.33-37 e 9.38-41 e confronto com os **312 objetos/5.970 pistas**. Os quatro recortes sustentaram pautas próprias de 7, 9, 12 e 11 pistas, capacidades 3, 4, 5 e 5. O verso curto 9.1 foi mantido por quatro perguntas explícitas, sem inventar interpretação de cumprimento; nos demais, falas, reações, máximas e agentes permanecem atribuídos ao documento, sem transferência de paralelos.

Os 312 objetos anteriores permaneceram serializadamente idênticos e na mesma ordem; somente quatro foram anexados. Resultado: **316 pautas/1.264 campos/6.009 pistas**, todas elegíveis. A auditoria encontrou zero duplicatas exatas e resolveu quatro alertas por distinção concreta de documento, agente, cena ou função narrativa. Permanecem precisamente para a próxima continuidade **Mc 9.42-50, 10.1-12 e 10.13-16**; depois, Mc 11–12. Mc 7.16 continua pendência textual isolada, Mc 16.9-20 continua fora, e as decisões de Mt 17.21, Mt 23.14 e 1Co 11/14 permanecem intactas. O banco continua incompleto; não houve merge, deploy nem publicação.

## Checkpoint 101 — conclusão dos adiados de Marcos 9–10

Em 14/09/2026, as páginas NAA Bible.com 1840 de Mc 9 e 10 foram efetivamente reconsultadas (HTTP 200; 365.573 e 376.563 bytes; SHA-256 `704d3dae683735478bd0136ccbea7906cc37f060471d4e3de6727d3e9e010ebe` e `e0d14b26026435302785a1e75d49e1395dce3638de05d3e991949d16858d4cec`). A leitura e autoria ficaram limitadas a Mc 9.42-50, 10.1-12 e 10.13-16, com confronto dos **316 objetos/6.009 pistas** e das pautas paralelas de Mateus. Três pautas próprias acrescentaram 18, 18 e 10 pistas, capacidades 8, 8 e 4, sem transferência de detalhes documentais.

Mc 9.44 e 9.46, exibidos entre colchetes com notas de manuscritos mais recentes, foram isolados como novas pendências textuais sem decisão presumida: não aparecem em referência geral, campo, alternativa, gabarito ou pista; a formulação de 9.48 foi usada somente por estar não colcheteada no próprio verso. Os 316 objetos anteriores permaneceram serializadamente idênticos e na mesma ordem, com apenas três anexos. Resultado: **319 pautas/1.276 campos/6.055 pistas**, todas elegíveis. A auditoria registrou zero duplicatas exatas e zero alertas sem resolução após decisões específicas dos dois paralelos.

Mc 9–10 fica sem remanescente ordinário no inventário vigente. Mc 7.16, 9.44 e 9.46 permanecem pendências textuais isoladas; Mc 16.9-20 continua fora. O próximo lote é **Mc 11–12**, não consultado nem autorado agora. Todas as decisões anteriores foram preservadas, o banco continua incompleto e não houve merge, deploy nem publicação.

## Inventário individual integral de Marcos 11–12 — checkpoint 102

Em 14/09/2026, somente `https://www.bible.com/pt/bible/1840/MRK.11.NAA` e `https://www.bible.com/pt/bible/1840/MRK.12.NAA` foram obtidas (HTTP 200; **339.478** e **366.529 bytes**; SHA-256 `c42e12e1cb74b7f7373da122762feb2c382d41fb20a2d40cb4490806ccc7d503` e `6cbe352c5c92305828af0ac3593c2ab51f8dd4cf90827d97175d70d50131cb34`) e lidas verso a verso. A leitura efetiva, não o HTTP, sustentou as decisões. Todas as perguntas, alternativas, gabaritos, referências e pistas foram confrontados com os **319 objetos/6.055 pistas**; cabeçalhos, notas e referências cruzadas da página não forneceram fatos, e paralelos de Mateus/Lucas não provaram identidade nem transferiram detalhes.

| Recorte lido individualmente | Matriz concreta de perguntas/gabaritos/referências/fatos | Comparação e decisão |
| --- | --- | --- |
| Mc 11.1-11 — entrada | **Onde?** Jerusalém/Betfagé/Betânia/monte (1); **o quê?** jumentinho preso e nunca montado (2); **como?** capas/ramos/aclamações (7-10); **final?** templo, observação, tarde e Betânia com os doze (11). | **Autorado** em `nt2-marcos-jumentinho-entrada-templo`, 16 pistas, capacidade 7. A pauta de Mt 21 não forneceu segundo animal nem reações. |
| Mc 11.12-14,20-25 — figueira/ensinos | **Achado?** folhas, sem fruto, fora do tempo (12-14); **condição?** seca desde a raiz e lembrança de Pedro (20-21); **ordem?** fé (22-24); **conduta?** perdoar ao orar (25). | **Autorado** em `nt2-marcos-figueira-fe-oracao-perdao`, 16 pistas, capacidade 7. Mc 11.26 fica fora por pendência textual; 11.25 tem sustentação própria. |
| Mc 11.15-19 — templo | **Quem?** vendedores/compradores (15); **ações?** mesas/cadeiras/objeto (15-16); **ensino?** Casa de Oração/covil (17); **reação?** plano, temor e maravilha (18-19). | **Autorado** em `nt2-marcos-templo-objeto-doutrina`, 15 pistas, capacidade 7. A entrada de 11.11 e a ação de 11.15 são momentos distintos. |
| Mc 11.27-33 — autoridade | **Quem/onde?** três grupos no templo (27); **pergunta?** autoridade (28); **contrapergunta?** batismo de João (29-30); **deliberação/resposta?** céu/homens, temor e “não sabemos” (31-33). | **Autorado** em `nt2-marcos-autoridade-batismo-joao`, 15 pistas, capacidade 7; não se respondeu por inferência à autoridade. |
| Mc 11.26 — cláusula entre colchetes | **Texto exibido?** consequência de não perdoar; **nota?** somente manuscritos mais recentes. | **Nova ambiguidade textual isolada, sem decisão presumida.** Não entrou em referência geral, campo, alternativa, gabarito ou pista e não bloqueou conteúdo independente. |
| Mc 12.1-12 — lavradores | **Preparação?** vinha/cerca/lagar/torre (1); **envios?** servos e agressões (2-5); **filho?** amado/herdeiro/morte (6-8); **desfecho/reação?** dono, pedra, tentativa de prisão/temor (9-12). | **Sustentado, pendente precisamente por limite.** `nt2-mateus-lavradores-maus` não cobre a redação de Marcos nem autoriza transferência. |
| Mc 12.13-17 — imposto | **Agentes/finalidade?** fariseus/herodianos e armadilha (13); **pergunta?** imposto (14); **objeto?** denário/figura/inscrição (15-16); **resposta/reação?** César/Deus e admiração (17). | **Sustentado, pendente por limite.** Comparado com `nt2-mateus-imposto-cesar`, sem presumir mesma ocasião ou fatos. |
| Mc 12.18-27 — saduceus | **Grupo/tese?** saduceus/sem ressurreição (18); **caso?** sete irmãos, viúva, sem descendência (19-23); **diagnóstico?** Escrituras/poder (24); **resposta?** anjos, sarça e Deus de vivos (25-27). | **Sustentado, pendente por limite.** `nt2-mateus-saduceus-ressurreicao` é pauta documental própria. |
| Mc 12.28-34 — mandamentos | **Quem/pergunta?** escriba/principal (28); **primeiro?** único Senhor e amor (29-30); **segundo?** próximo (31); **avaliações?** sacrifícios, resposta sábia, Reino e fim das perguntas (32-34). | **Sustentado, pendente por limite.** Quatro perguntas independentes e lista explícita bastam sem causalidade inventada. |
| Mc 12.35-37 — Cristo e Davi | **Onde/quem?** Jesus no templo (35); **pergunta?** filho de Davi (35); **fala atribuída?** Davi pelo Espírito (36); **contraste/reação?** Senhor/filho e multidão com prazer (37). | **Sustentado, pendente por limite.** A citação vale apenas como fala registrada em Marcos. |
| Mc 12.38-40 — censura | **Alerta?** cuidado com escribas (38); **preferências?** vestes, saudações, primeiras cadeiras/lugares (38-39); **ações?** casas das viúvas e longas orações (40); **resultado?** juízo mais severo (40). | **Sustentado, pendente por limite.** Não foi fundido com Mt 23.14 nem usado para alterar a decisão NAA daquele verso. |
| Mc 12.41-44 — viúva | **Cenário?** caixa/ofertantes (41); **oferta?** duas moedas/quadrante (42); **avaliação/razão?** mais que todos, pobreza e sustento (43-44). | **Já coberto**, sem alteração, por `nt2-marcos-oferta-viuva`, 7 pistas, capacidade 3. |

As quatro pautas acrescentam **62 pistas** e levam o catálogo a **323 pautas/1.292 campos/6.117 pistas**, todas elegíveis. As quatro capacidades são 7 por `min(12, floor((pistas - 1) / 2))`, sem piso de 25, meta de doze pessoas ou inflação. Os 319 objetos anteriores permaneceram na mesma ordem e serializaram identicamente por `JSON.stringify`; somente quatro objetos foram anexados. A auditoria encontrou zero duplicatas exatas e zero alertas sem resolução após decisões documentais dos paralelos.

**Restam precisamente por limite** Mc 12.1-12, 12.13-17, 12.18-27, 12.28-34, 12.35-37 e 12.38-40. Mc 12.41-44 não é pendência. O próximo lote deve começar nesses seis recortes, sem abrir Mc 13 antes de decidi-los. Mc 7.16, 9.44, 9.46 e agora 11.26 permanecem pendências textuais isoladas; Mc 16.9-20 continua fora. Mt 17.21, Mt 23.14 e 1Co 11/14 preservam suas decisões. O banco permanece incompleto; não houve merge, deploy nem publicação.

## Quatro primeiros remanescentes de Marcos 12 — checkpoint 103

Em 14/09/2026, somente `https://www.bible.com/pt/bible/1840/MRK.12.NAA` foi obtida novamente (HTTP 200; **366.529 bytes**; SHA-256 `6cbe352c5c92305828af0ac3593c2ab51f8dd4cf90827d97175d70d50131cb34`) e os quatro recortes autorizados foram efetivamente relidos. Perguntas, alternativas, gabaritos, referências e pistas foram confrontados com os **323 objetos/6.117 pistas**, em particular `nt2-mateus-lavradores-maus`, `nt2-mateus-imposto-cesar`, `nt2-mateus-saduceus-ressurreicao` e `nt2-mateus-grande-mandamento`. A consulta não usou cabeçalhos, notas ou referências cruzadas como fatos, nem presumiu que paralelos eram a mesma ocasião.

| Unidade relida | Matriz concreta e confronto | Resultado |
| --- | --- | --- |
| Mc 12.1-12 | **Preparação?** vinha/cerca/lagar/torre (1); **envios?** primeiro servo e demais agressões (2-5); **razão?** filho herdeiro/herança (6-8); **desfecho/reação?** dono/pedra/prisão/temor (9-12). Mateus possui agressões e resposta final redigidas diferentemente. | `nt2-marcos-vinha-servos-filho-pedra`, **20 pistas**, capacidade 9. Não recebeu apedrejamento nem fórmula de arrendamento de Mateus. |
| Mc 12.13-17 | **Agentes?** fariseus/herodianos (13); **finalidade?** apanhar em palavra (13); **objeto?** denário/figura/inscrição (15-16); **resposta?** César/Deus e admiração (17). Mateus identifica “discípulos dos fariseus”; isso não foi transferido. | `nt2-marcos-fariseus-herodianos-denario`, **15 pistas**, capacidade 7. |
| Mc 12.18-27 | **Grupo/tese?** saduceus/sem ressurreição (18); **caso?** sete, viúva e nenhuma descendência (19-23); **erro?** Escrituras/poder (24); **resposta?** casamento/anjos/sarça/Deus de vivos (25-27). | `nt2-marcos-saduceus-sete-sarca`, **20 pistas**, capacidade 9; ordem e formulação permanecem próprias de Marcos. |
| Mc 12.28-34 | **Pergunta?** principal mandamento (28); **primeiro?** único Senhor e amor integral (29-30); **segundo?** próximo (31); **avaliação?** mais que sacrifícios, sabedoria, não longe do Reino (32-34). | `nt2-marcos-escriba-mandamentos-reino`, **17 pistas**, capacidade 8. Lista e perguntas independentes foram suficientes sem causalidade inventada. |

As quatro pautas acrescentam **72 pistas**, levando o catálogo a **327 pautas/1.308 campos/6.189 pistas**, todas elegíveis. Capacidades 9, 7, 9 e 8 derivam de `min(12, floor((pistas - 1) / 2))`; não houve piso de 25, inflação ou meta de doze participantes. Os 323 objetos da base permaneceram na mesma ordem e serializaram identicamente por `JSON.stringify`; somente quatro objetos foram anexados. A auditoria registrou zero duplicatas exatas e zero alertas sem resolução após decisões específicas sobre os paralelos.

**Restam precisamente por limite apenas Mc 12.35-37 e 12.38-40**; ambos continuam sustentados pela matriz do checkpoint 102 e devem abrir o próximo lote em nova base. Mc 12.41-44 já está coberto. Não se abriu Mc 13. Mc 7.16, 9.44, 9.46 e 11.26 permanecem pendências textuais isoladas; Mc 11.25 conserva sustentação própria e Mc 16.9-20 continua fora. Decisões anteriores permanecem intactas, o banco está incompleto e não houve merge, deploy ou publicação.

## Conclusão dos remanescentes de Marcos 12 — checkpoint 104

Em 14/09/2026, somente `https://www.bible.com/pt/bible/1840/MRK.12.NAA` foi obtida novamente (HTTP 200; **366.531 bytes**; SHA-256 `91c7e4776d2c3787144a622cc4ead589e432856180fc25ed77eb719fbee97871`; consulta entre **01:21:19Z e 01:21:19Z**) e Mc 12.35-37 e 12.38-40 foram efetivamente relidos. A matriz individual foi confrontada com perguntas, alternativas, gabaritos, referências e fatos dos **327 objetos/6.189 pistas**, inclusive a decisão separada de Mt 23.14. Cabeçalhos, notas e referências cruzadas não forneceram fatos; paralelos não foram usados para identificar ocasião nem transferir detalhes.

| Unidade relida | Matriz concreta de perguntas, gabaritos, referências e fatos | Confronto e resultado |
| --- | --- | --- |
| Mc 12.35-37 — Cristo e Davi | **Onde?** templo (35); **afirmação examinada?** Cristo como filho de Davi (35); **por quem Davi falou?** Espírito Santo (36); **reação?** grande multidão ouvia com prazer (37). Dez pistas distintas percorrem ensino, pergunta, fala atribuída, contraste e reação. | **Autorada** em `nt2-marcos-cristo-davi-senhor`, 10 pistas, capacidade 4. A pauta registra o contraste Senhor/filho sem resolvê-lo por inferência, completar a citação por outra fonte ou importar os paralelos. |
| Mc 12.38-40 — escribas, viúvas, orações e juízo | **De quem ter cuidado?** escribas (38); **quais distinções?** primeiras cadeiras/lugares (38-39); **ação contra viúvas?** devorar suas casas (40); **resultado?** juízo muito mais severo (40). Onze pistas distintas incluem vestes, saudações, longas orações e sua finalidade declarada. | **Autorada** em `nt2-marcos-escribas-viuvas-oracoes-juizo`, 11 pistas, capacidade 5. Exploração das viúvas e longas orações conservam a referência própria de Mc 12.40; Mt 23.14 não forneceu conteúdo e sua decisão vigente não foi reaberta. |

As duas pautas justificadas acrescentam **21 pistas**, levando o catálogo a **329 pautas/1.316 campos/6.210 pistas**, todas elegíveis. As capacidades 4 e 5 derivam de `min(12, floor((pistas - 1) / 2))`; cada uma preserva duas pistas por jogador e ao menos uma no poço, sem piso global de 25, meta de doze participantes ou inflação. Os 327 objetos da base `3a7d1ab74019e6d8395da6a9be982275cc35a7e5` permaneceram na mesma ordem e serializaram identicamente por `JSON.stringify`; somente dois objetos foram anexados. A auditoria encontrou zero duplicatas exatas e zero alertas sem resolução.

Mc 12 está decidido no inventário vigente: **Mc 12.41-44 continua coberto sem duplicação** por `nt2-marcos-oferta-viuva`. Não se abriu Mc 13; ele é o próximo recorte ordinário. Mc 7.16, 9.44, 9.46 e 11.26 permanecem pendências textuais isoladas sem decisão, e Mc 16.9-20 continua fora. Mt 17.21, Mt 23.14 e 1Co 11/14 conservam todas as decisões anteriores. O banco permanece incompleto; não houve merge, deploy nem publicação.
