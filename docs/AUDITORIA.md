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

## Checkpoint 064 — verificação de Apocalipse 17–18

A leitura NAA e a comparação individual produziram quatro pautas e 105 pistas: Ap 17.1-18, Ap 18.1-8, Ap 18.9-20 e Ap 18.21-24. O banco passa a **202 pautas e 3.844 pistas**, preservando os 198 objetos anteriores. A auditoria automatizada mantém zero duplicatas exatas e zero pares sem resolução. As identificações permanecem internas, sem cidade ou instituição histórica/atual, geografia presente, calendário ou alegoria acrescentada. Ap 19–22 e a auditoria global continuam pendentes; o banco não está completo.

## Checkpoint 065 — Apocalipse 19 e auditoria limitada de 20–22

Duas pautas de Ap 19 acrescentaram 61 pistas, elevando o banco a **204 pautas e 3.905 pistas**. Os 202 objetos anteriores foram preservados; Ap 20.1-15 e Ap 21.1–22.5 foram conferidos nas pautas existentes sem alteração. A auditoria delimitou Ap 22.6-21 como não coberto, em vez de perpetuar a descrição genérica “Ap 21–22”. A triagem registra zero duplicata exata e, após decisão explícita sobre os dois atributos coordenados de Ap 19.2, zero par sem resolução. Não há interpretação histórica, geográfica, cronológica ou alegórica acrescentada. A auditoria global dos 27 livros é o próximo passo obrigatório; o banco não está completo.

## Checkpoint 066 — pauta terminal de Apocalipse e auditoria global documental

Ap 22.6-21 acrescentou uma pauta e 32 pistas; o banco passa a **205 pautas e 3.937 pistas**, com os 204 objetos anteriores preservados. A auditoria de pistas mantém zero duplicata exata e zero par sem resolução. A auditoria global obrigatória foi executada documentalmente em `docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md`: ela cruza os 27 livros e identifica lacunas decorrentes de regras revogadas, decisões agregadas e recortes ainda não reconsultados. As dúvidas do usuário em 1Co 11.2-16 e 14.34-36 ficam isoladas das filas independentes. O limite é explícito: essa auditoria não releu agora cada recorte NAA pendente e não demonstra completude do banco.

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

Somente a página NAA Bible.com 1840 de Mateus 25 foi obtida (HTTP 200; 351.114 bytes), lida integralmente e comparada aos **248 objetos/4.844 pistas**. Três pautas sustentadas, sem meta, foram anexadas: virgens/lamparinas (18 pistas; capacidade 8), servos/talentos (22; 10) e Rei/ovelhas/cabritos (20; 9). Parábolas, imagens e julgamento permanecem atribuídos às comparações e ao anúncio de Jesus, sem identidades externas, harmonização ou calendário.

A comparação serializada confirmou os **248 objetos anteriores byte-equivalentes por `JSON.stringify`**, na mesma ordem; somente três objetos foram anexados. Resultado: **251 pautas/1.004 campos/4.904 pistas**, todas elegíveis. A auditoria exclusivamente documental de Mt 1–4, 8–9, 14–17 e 26–28 encontrou matrizes atuais apenas para recortes selecionados e registrou as unidades concretas ainda sujeitas a reconsulta futura; não houve autoria nessas faixas. Mt 23.14 continua pendência textual, não exclusão definitiva. Dúvidas de 1Co e demais exclusões foram preservadas; testes não declaram Mateus nem o banco completos, e não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 080 — lacunas individualizadas de Mateus 1–4

Somente as páginas NAA Bible.com 1840 de Mt 1–4 foram obtidas (HTTP 200; 336.349, 334.120, 329.146 e 351.052 bytes), e a leitura foi limitada a 1.1-17, 2.13-23, 3.1-12 e 4.12-25. A comparação com **251 objetos/4.904 pistas** precedeu quatro pautas sustentadas: genealogia (23 pistas; capacidade 11), Egito/Belém/Nazaré (20; 9), João no deserto/batismo (20; 9) e Galileia/pescadores/curas (21; 10). Listas, citações, imagens e paralelos permanecem documentais, sem AT importado, cronologia externa ou harmonização.

A comparação serializada confirmou os **251 objetos anteriores byte-equivalentes por `JSON.stringify`**, na mesma ordem; somente quatro objetos foram anexados. Resultado: **255 pautas/1.020 campos/4.988 pistas**, todas elegíveis. Nenhum recorte autorizado ficou pendente por limite; a ficha combina essas decisões com as unidades anteriores sem declarar Mateus ou o banco completos. Mt 8–9, 14–17 e 26–28 continuam posteriores; Mt 23.14, dúvidas de 1Co e demais limites foram preservados. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 081 — inventário limitado de Mateus 8–9

Somente as páginas NAA Bible.com 1840 de Mt 8–9 foram obtidas (HTTP 200; 97.575 e 98.424 bytes), lidas verso a verso e comparadas aos **255 objetos/4.988 pistas** por perguntas, campos, pistas, referências e paralelos. Quatro pautas foram anexadas sem meta: leproso (10 pistas; capacidade 4), sogra/seguidores (17; 8), gadarenos/porcos (16; 7) e chamado/mesa/jejum (19; 9). Fatos exclusivos de Mateus foram preservados; semelhança não virou identidade de ocasião, e nenhum AT ou interpretação externa foi importado.

Os 255 objetos anteriores permaneceram serialmente idênticos e na mesma ordem. O catálogo passa a **259 pautas/1.036 campos/5.050 pistas**, todas elegíveis. A ficha mantém Mt 8.5-13, 9.27-31, 9.32-34 e 9.35-38 em matrizes concretas para o próximo lote por limite, não por insuficiência ou descarte. Mt 8–9, Mateus e o banco não são declarados completos; Mt 14–17, 26–28, Mt 23.14, dúvidas de 1Co e exclusões definitivas permanecem intactos. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 082 — remanescentes de Mateus 8–9

Somente Mt 8.5-13, 9.27-31, 9.32-34 e 9.35-38 foram relidos nas páginas NAA Bible.com 1840 novamente obtidas (HTTP 200; 97.575 e 98.424 bytes). A comparação de perguntas, respostas, campos, pistas, referências e paralelos partiu dos **259 objetos/5.050 pistas** e sustentou quatro pautas com 20, 12, 7 e 10 pistas, para capacidades 9, 5, 3 e 4. Não houve piso de 25/12, inflação, identidade presumida entre ocasiões nem descarte de fatos próprios.

Os 259 objetos anteriores permaneceram serialmente idênticos e na mesma ordem; somente quatro foram anexados. O catálogo passa a **263 pautas/1.052 campos/5.099 pistas**, todas elegíveis. A fila específica vigente de Mt 8–9 fica sem recorte conhecido, sem declaração de exaustividade futura ou banco completo. Mt 14–17, 26–28, Mt 23.14, dúvidas de 1Co e exclusões definitivas permanecem intactos. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 083 — inventário de Mateus 14–15

A consulta efetiva exclusiva das páginas NAA Bible.com 1840 de Mt 14–15 (HTTP 200; 96.213 e 97.113 bytes) foi acompanhada de leitura verso a verso e comparação dos **263 objetos/5.099 pistas**. Quatro lacunas sustentadas foram autoradas: Genesaré/curas (10 pistas; capacidade 4), tradição/boca/coração (26; 12), curas no monte (18; 8) e alimentação dos quatro mil (26; 12). Mt 14.1-33 e 15.21-28 permaneceram cobertos por quatro pautas anteriores, sem alteração ou duplicação.

Os 263 objetos anteriores permaneceram serialmente idênticos e na mesma ordem; somente quatro foram anexados. O catálogo passa a **267 pautas/1.068 campos/5.179 pistas**, todas elegíveis, e Mateus a **83 pautas/1.581 pistas que citam o livro**. O auditor não encontrou duplicata exata; quatro alertas novos foram resolvidos por comparação concreta de cenas e documentos. Mt 14–15 fica decidido no inventário vigente, mas **Mt 16–17 e 26–28 permanecem listados por recorte, sem fechamento por limite**. Mt 23.14, dúvidas de 1Co e decisões anteriores foram preservados; testes não declaram o banco completo.

## Checkpoint 084 — inventário limitado de Mateus 16–17

A consulta efetiva exclusiva das páginas NAA Bible.com 1840 de Mt 16–17 (HTTP 200; 96.917 e 96.785 bytes), a leitura verso a verso e a comparação dos **267 objetos/5.179 pistas** produziram quatro pautas: sinal/fermento (21 pistas; capacidade 10), confissão/chaves (22; 10), morte/seguimento/vinda (27; 12) e menino/fé (20; 9). A transfiguração de Mt 17.1-13 permaneceu coberta por sua pauta existente, sem duplicação. Falas, imagens e anúncios permanecem atribuídos ao texto, sem inferência institucional, conteúdo do AT ou harmonização.

Os 267 objetos anteriores ficaram serialmente idênticos e na mesma ordem; somente quatro foram anexados. O catálogo passa a **271 pautas/1.084 campos/5.269 pistas**, todas elegíveis, e Mateus a **87 pautas/1.671 pistas que citam o livro**. Três alertas internos do auditor receberam resoluções factuais e não restou par pendente. Mt 16 fica decidido, mas **Mt 17.21, 17.22-23 e 17.24-27 permanecem por recorte sem fechamento por limite**; a ficha contém suas matrizes concretas. Mt 26–28 permanece posterior, e Mt 23.14, dúvidas de 1Co e decisões anteriores foram preservados. Testes não declaram o banco completo.


## Checkpoint 085 — Mateus 17.22-27

Em 13/09/2026, somente a página NAA Bible.com 1840 de Mateus 17 foi reconsultada (HTTP 200; 349.724 bytes), com leitura efetiva dos recortes 17.22-23 e 17.24-27 e comparação dos **271 objetos/5.269 pistas**. As matrizes concretas sustentaram duas pautas, sem meta: anúncio de entrega/morte/ressurreição/tristeza (7 pistas; capacidade 3) e duas dracmas/peixe/moeda (17; capacidade 8). A semelhança com o anúncio de Mt 16.21 foi resolvida como repetição em unidade posterior situada na Galileia, sem presumir a mesma ocasião; imposto, peixes e moedas anteriores não reproduzem a interlocução e sequência de 17.24-27.

O catálogo passa a **273 pautas/1.092 campos/5.293 pistas**, todas elegíveis, e Mateus a **89 pautas/1.695 pistas que citam o livro**. Os 271 objetos e as 5.269 pistas anteriores ficaram byte-equivalentes por `JSON.stringify`, na mesma ordem, com apenas dois anexos. C1–C4, quatro alternativas, gabaritos, foco 8/5/3/2, referências, proveniência, metadados e revelação foram preservados. **Mt 17.21 permanece pendência textual como Mt 23.14, sem inclusão nem exclusão definitiva; Mt 26–28 fica para depois.** Dúvidas de 1Co, exclusões e demais decisões continuam intactas; testes não declaram o banco completo.
## Checkpoint 086 — inventário integral de Mateus 26

A consulta efetiva exclusiva da página NAA Bible.com 1840 de Mt 26 (HTTP 200; 417.856 bytes), a leitura verso a verso e a comparação dos **273 objetos/5.293 pistas** sustentaram quatro pautas sem meta: plano/unção em Betânia (28 pistas; capacidade 12), Judas/trinta moedas/ocasião (6; 2), aviso a Pedro (12; 5) e Sinédrio/negações (33; 12). A Ceia (17-30), o Getsêmani (36-46) e a prisão (47-56) foram comparados em campos, pistas e referências com três pautas existentes e permaneceram sem alteração ou duplicação. Anúncios e versões paralelas não foram tratados como a mesma ocasião, exclusivos de Mateus não foram descartados, e nenhuma alusão recebeu conteúdo do Antigo Testamento ou cronologia externa.

O catálogo passa a **277 pautas/1.108 campos/5.372 pistas**, todas elegíveis, e Mateus a **93 pautas/1.774 pistas que citam o livro**. Os 273 objetos e as 5.293 pistas anteriores ficaram byte-equivalentes por `JSON.stringify`, na mesma ordem, com apenas quatro anexos. C1–C4, quatro alternativas, gabaritos, focal 8/5/3/2, referências, proveniência, metadados e revelação foram preservados. Mt 26 recebeu decisão por unidade no inventário atual, sem inferência de completude global; **Mt 27–28 ficam para depois, e Mt 17.21, 23.14, dúvidas de 1Co e decisões anteriores permanecem intactas.** Testes não declaram o banco completo.

## Inventário individual integral de Mateus 27 — checkpoint 087

Em 13/09/2026, exclusivamente a página `https://www.bible.com/pt/bible/1840/MAT.27.NAA` foi obtida (HTTP 200; 379.709 bytes) e lida verso a verso. A comparação partiu dos **277 objetos/5.372 pistas** e confrontou perguntas, respostas, campos, cartas, referências e paralelos, em especial `nt2-mateus-pilatos`, `nt2-joao-cruz` e `nt2-sepultamento-jesus`. Não se presumiu identidade além das referências documentadas, não se apagaram exclusivos de Mateus e nenhuma citação recebeu conteúdo externo do Antigo Testamento.

| Unidade integralmente lida | Matriz concreta de perguntas, respostas, referências e fatos | Comparação e decisão |
| --- | --- | --- |
| Mt 27.1-10 — entrega, Judas e campo | **Quem recebeu Jesus?** Pilatos (1-2); **o que Judas fez?** remorso, devolução, confissão e morte (3-5); **o que os sacerdotes decidiram?** moedas fora do cofre e compra do campo (6-7); **qual nome/registro?** Campo de Sangue e citação atribuída a Jeremias (8-10). Vinte e um fatos independentes sustentam os quatro campos. | **Autorada** em `nt2-mateus-judas-remorso-campo-sangue`, 21 pistas, capacidade 10. A morte de Judas não é harmonizada com Atos; confissão, resposta e citação permanecem atribuídas aos agentes e a Mateus. |
| Mt 27.11-26 — Pilatos e Barrabás | Campos existentes: interrogador/Pilatos (11), preso solto/Barrabás (15-26), aviso da mulher (19) e lavagem das mãos (24); as 25 pistas cobrem acusações, silêncio, costume, escolha, inveja, sonho, persuasão, gritos, tumulto e entrega. | **Coberta sem alteração** por `nt2-mateus-pilatos`. A releitura não duplicou nem removeu fatos próprios de Mateus; acusações e falas da multidão continuam atribuídas. |
| Mt 27.27-31 — zombaria dos soldados | **Onde/quem?** Pretório, soldados e tropa (27); **como vestiram?** despiram e puseram manto escarlate (28); **quais objetos/ações?** coroa, caniço, ajoelhar, saudação zombeteira, cuspe e golpes (29-30); **como terminou?** retirada do manto, roupas próprias e condução (31). Dezesseis fatos independentes. | **Autorada** em `nt2-mateus-soldados-manto-coroa`, 16 pistas, capacidade 7. Cores, objetos e sequência permanecem na versão de Mateus, sem importar variantes paralelas. |
| Mt 27.32-56 — crucificação e morte | A pauta complementar existente registra Simão (32), Gólgota (33), vinho com fel (34), sorte/guarda (35-36), insultos (39-44), trevas e clamor (45-46), esponja (48), véu (51) e reação do centurião/guardas (54), além dos campos de João claramente referenciados. | **Coberta sem alteração** por `nt2-joao-cruz`. Os componentes exclusivos de Mateus já mantêm referências próprias; não houve duplicação, supressão nem transferência de detalhes entre documentos. |
| Mt 27.57-61 — sepultamento | A pauta existente pergunta **quem pediu?** José (57-58), **o que envolveu?** linho (59), **onde colocou?** túmulo novo na rocha (60) e preserva riqueza/discipulado, propriedade, grande pedra e as duas Marias (57-61), com referências individuais. | **Coberta sem alteração** por `nt2-sepultamento-jesus`. A referência geral alcança 27.57-66, mas as cartas anteriores cobrem especificamente 57-61; os fatos da guarda foram avaliados separadamente, sem fundir os episódios. |
| Mt 27.62-66 — guarda do túmulo | **Quando?** dia seguinte ao da preparação (62); **quem?** principais sacerdotes e fariseus diante de Pilatos (62); **qual alegação/pedido?** lembrança dos três dias, risco de roubo e anúncio, segurança até o terceiro dia (63-64); **como?** escolta disponível, pedra selada e guarda no local (65-66). Quinze fatos independentes. | **Autorada** em `nt2-mateus-guarda-tumulo`, 15 pistas, capacidade 7. “Enganador”, roubo e anúncio são alegações dos líderes, não fatos confirmados; nota cronológica e paralelos não foram importados. |

As três novas pautas acrescentam **52 pistas**, levando o banco a **280 pautas/1.120 campos/5.424 pistas**, todas elegíveis; Mateus passa a **96 pautas/1.826 pistas que citam o livro**. Os 277 objetos e as 5.372 pistas anteriores permaneceram na mesma ordem e byte-equivalentes por `JSON.stringify`; somente três objetos foram anexados. Capacidades 10, 7 e 7 decorrem de 21, 16 e 15 pistas, sem piso de 25 ou meta de 12. C1–C4, quatro alternativas, gabaritos, focal 8/5/3/2, referências, proveniência, metadados e revelação foram preservados. Todas as unidades de Mt 27 receberam decisão no inventário atual, sem declarar exaustividade futura ou banco completo. **Mt 28 permanece por recorte e limite; Mt 17.21, 23.14, dúvidas de 1Co e decisões anteriores permanecem intactas.**

## Inventário individual integral de Mateus 28 — checkpoint 088

Em 13/09/2026, exclusivamente a página `https://www.bible.com/pt/bible/1840/MAT.28.NAA` foi obtida (HTTP 200; 321.847 bytes) e lida verso a verso. A comparação partiu dos **280 objetos/5.424 pistas** e confrontou perguntas, respostas, campos, cartas e referências de `nt2-mateus-mulheres-ressurreicao`, além de buscar guarda, dinheiro, versão, onze, Galileia, monte, autoridade, nações, batismo e ensino. O documento de Mateus permaneceu independente: sem harmonização dos finais paralelos, conteúdo externo do Antigo Testamento ou inferência institucional.

| Unidade integralmente lida | Matriz concreta de perguntas, respostas, referências e fatos | Comparação e decisão |
| --- | --- | --- |
| Mt 28.1-10 — mulheres, anjo e encontro | Campos existentes: **quem?** Maria Madalena e a outra Maria (1); **quando?** começo do primeiro dia (1); **quem anunciou?** anjo do Senhor (2,5-7); **onde veriam Jesus?** Galileia (7,10). As 13 pistas existentes cobrem túmulo, terremoto, pedra, guardas, anúncio, saída, medo/alegria, encontro, pés e adoração. | **Coberta sem alteração** por `nt2-mateus-mulheres-ressurreicao`. As versões de Marcos, Lucas e João não completam nomes, ações ou sequência de Mateus; nenhuma pista foi duplicada. |
| Mt 28.11-15 — relato e versão paga | **Quem relatou a quem?** alguns da guarda aos principais sacerdotes (11); **quem deliberou?** sacerdotes e anciãos (12); **o que deram?** grande soma aos soldados (12); **qual versão mandaram dizer?** discípulos vieram à noite e roubaram enquanto dormiam (13); **qual promessa/resultado?** convencer governador, evitar preocupações, recebimento, obediência e circulação da versão (14-15). Dezessete fatos independentes. | **Autorada** em `nt2-mateus-guarda-dinheiro-versao`, 17 pistas, capacidade 8. Roubo e sono permanecem conteúdo atribuído à instrução, não fatos validados; “até o dia de hoje” não recebe data externa. |
| Mt 28.16-20 — onze e comissão | **Quem/onde?** onze, Galileia e monte designado (16); **qual reação?** adoração e dúvida de alguns (17); **qual declaração?** toda autoridade no céu e terra (18); **quais ordens?** ir, fazer discípulos de todas as nações, batizar e ensinar a guardar (19-20); **qual promessa?** presença todos os dias até o fim dos tempos (20). Dezoito fatos independentes. | **Autorada** em `nt2-mateus-onze-monte-comissao`, 18 pistas, capacidade 8. Todas as afirmações permanecem atribuídas a Jesus; fórmula, autoridade e promessa não recebem explicação doutrinária, institucional ou paralela. |

As duas novas pautas acrescentam **35 pistas**, levando o banco a **282 pautas/1.128 campos/5.459 pistas**, todas elegíveis; Mateus passa a **98 pautas/1.861 pistas que citam o livro**. Os 280 objetos e as 5.424 pistas anteriores permaneceram na mesma ordem e byte-equivalentes por `JSON.stringify`; somente dois objetos foram anexados. As capacidades 8 e 8 derivam de 17 e 18 pistas, sem piso de 25 ou meta de 12. C1–C4, quatro alternativas, gabaritos, focal 8/5/3/2, referências, proveniência, metadados e revelação foram preservados.

A conferência documental final da ficha encontrou decisão individual vigente para todos os recortes de Mateus nela enumerados que não dependem de decisão textual. As **únicas lacunas reais registradas** são Mt 17.21 e Mt 23.14, ambos exibidos entre colchetes na fonte consultada e mantidos como pendências textuais específicas — não como exclusões definitivas. Isso encerra a fila ordinária conhecida de Mateus nesta sequência, mas não prova exaustividade futura nem declara Mateus ou o banco completos. Dúvidas de 1Co e decisões anteriores permanecem intactas. O próximo trabalho independente será Marcos; planeja-se apenas um lote inicial pequeno de **Mc 1–2**, com consulta e inventário antes de eventual autoria, sem abrir nem autorar Marcos neste checkpoint.

## Checkpoint 091 — Mt 17.21

A NAA 1840 foi reconsultada e a decisão explícita sobre Mt 17.21 foi aplicada somente a `nt2-mateus-menino-fe-mostarda`. O gabarito contextual “Falta de oração e jejum” é explicado como inferência de 17.19-21, sem atribuir ao verso a afirmação literal de omissão pelos discípulos; “pequenez da fé” (17.20) permanece perspectiva válida fora dos distratores. Não houve objeto novo: 287 dos 288 objetos ficaram idênticos, e as contagens permanecem 288/5.566. As outras pendências e exclusões foram preservadas.

## Checkpoint 092 — decisões de Mt 23.14 e 1Co 11.2-16

A reconsulta NAA 1840 aplicou Mt 23.14 a `nt2-mateus-ais-juramentos`, distinguindo exploração das viúvas de sua justificação com longas orações e preservando colchetes/nota textual. Duas pistas foram anexadas; a pauta passa a 17 pistas/capacidade 8. Em 1Co 11.2-16, somente três perguntas aprovadas foram registradas em `data/nt-approved-content.json`; elas não viraram pauta porque o contrato exige quatro campos e um quarto conteúdo foi expressamente proibido. Dos 288 objetos, 287 ficaram idênticos e somente a pauta de Mateus mudou; resultado **288 pautas/5.568 pistas**. 1Co 14.34-36 continua pendente, variantes funcionais não foram implementadas e Mc 3–4 não foi autorado.
