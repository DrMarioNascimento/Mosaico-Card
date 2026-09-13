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
