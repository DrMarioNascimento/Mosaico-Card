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

## Inventário individual integral de Marcos 13 — checkpoint 105

Em 14/09/2026, somente `https://www.bible.com/pt/bible/1840/MRK.13.NAA` foi obtida (HTTP 200; **341.935 bytes**; SHA-256 `8cd0b5c9bf8f721dff406edb5ea8e4bb61599c146458f83f52e872787d5245f0`; consulta entre **01:38:08Z e 01:38:09Z**) e lida verso a verso. Perguntas, alternativas, gabaritos, referências e fatos foram confrontados com os **329 objetos/6.210 pistas**. Cabeçalhos, notas e referências cruzadas não forneceram fatos, e os paralelos de Mateus foram tratados como documentos próprios, sem atribuição de datas, identidades externas ou harmonização escatológica.

| Recorte lido individualmente | Matriz concreta de perguntas/gabaritos/referências/fatos | Comparação e decisão |
| --- | --- | --- |
| Mc 13.1-4 — templo e perguntas | **De onde saía?** templo (1); **o que foi admirado?** pedras/construções (1); **anúncio?** derrubada sem pedra sobre pedra (2); **quem perguntou?** Pedro, Tiago, João e André (3-4). Nove fatos incluem monte, posição diante do templo e teor da pergunta. | **Autorado** em `nt2-marcos-templo-pedras-perguntas`, 9 pistas, capacidade 4. A pergunta “quando” não recebeu data como resposta. |
| Mc 13.5-13 — enganos, testemunho e firmeza | **Cuidado?** não ser enganado (5-6); **diante de quem?** governadores/reis (9); **o que primeiro?** evangelho a todas as nações (10); **quem falaria?** Espírito Santo (11). Dezoito fatos incluem guerras, calamidades, tribunais, família e firmeza. | **Autorado** em `nt2-marcos-enganos-testemunho-firmeza`, 18 pistas, capacidade 8. Eventos enumerados não viraram calendário; Mt 10 permaneceu paralelo documental. |
| Mc 13.14-23 — desolação, fuga e alertas | **Visão?** abominável da desolação onde não deve estar (14); **destino?** montes (14); **por causa de quem abreviar?** eleitos escolhidos (20); **em que não crer?** Cristo aqui/ali (21). Dezoito fatos cobrem ordens de fuga, inverno, tribulação, falsos cristos/profetas e sobreaviso. | **Autorado** em `nt2-marcos-desolacao-fuga-eleitos-alerta`, 18 pistas, capacidade 8. A expressão não recebeu identidade histórica; a nota explicativa da página e referências cruzadas ficaram fora dos fatos. |
| Mc 13.24-27 — astros, Filho do Homem e escolhidos | **Sol?** escureceria (24); **como seria visto?** nas nuvens com poder/glória (26); **quem enviaria?** anjos (27); **quem reuniriam?** escolhidos (27). Dez fatos incluem lua, estrelas, poderes e extensão da reunião. | **Autorado** em `nt2-marcos-astros-filho-homem-escolhidos`, 10 pistas, capacidade 4. Imagens foram descritas como ensino do texto, sem evento externo ou detalhe importado de Mt 24. |
| Mc 13.28-31 — figueira e palavras | **Lição?** ramos/folhas e verão próximo (28); **aplicação?** coisas acontecendo e proximidade às portas (29); **declaração?** geração e acontecimentos (30); **contraste?** céu/terra passam, palavras não (31). Ao menos dez fatos sustentam quatro perguntas independentes. | **Sustentado, pendente precisamente por limite.** Não se definiu externamente “geração”, “essas coisas” ou cronologia. |
| Mc 13.32-37 — vigilância | **Quem sabe?** somente o Pai (32); **ordens?** sobreaviso/vigiar (33,35,37); **comparação?** homem ausente, casa, servos, porteiro (34); **razão textual?** desconhecimento do tempo e risco de dormir (33,35-36). Ao menos treze fatos. | **Sustentado, pendente precisamente por limite.** As quatro faixas do dia permanecem lista textual, não cálculo de data. |

As quatro pautas acrescentam **55 pistas**, levando o catálogo a **333 pautas/1.332 campos/6.265 pistas**, todas elegíveis. Capacidades 4, 8, 8 e 4 decorrem de `min(12, floor((pistas - 1) / 2))`, com duas pistas por jogador e ao menos uma no poço; não houve piso de 25 nem inflação. Os 329 objetos da base salva `f36849411735ec40edba28f37fbefab73a0412c9` permaneceram na mesma ordem e serializaram identicamente por `JSON.stringify`; somente quatro objetos foram anexados. A auditoria encontrou zero duplicatas exatas e zero alertas sem resolução após oito decisões documentais específicas.

**Restam precisamente por limite Mc 13.28-31 e 13.32-37**, ambos sustentados pela matriz acima. Não houve autoria de Mc 14 ou capítulos posteriores; depois desses dois remanescentes, o próximo lote ordinário é Mc 14. Mc 7.16, 9.44, 9.46 e 11.26 permanecem pendências textuais isoladas sem decisão, e Mc 16.9-20 continua fora. As demais decisões vigentes não foram alteradas. O banco permanece incompleto; testes não equivalem a conferência bíblica e IDs não são contagem de histórias ou fatos semânticos. Não houve merge, deploy nem publicação.

## Conclusão dos remanescentes de Marcos 13 — checkpoint 106

Em 14/09/2026, somente `https://www.bible.com/pt/bible/1840/MRK.13.NAA` foi obtida novamente (HTTP 200; **341.935 bytes**; SHA-256 `8cd0b5c9bf8f721dff406edb5ea8e4bb61599c146458f83f52e872787d5245f0`; consulta entre **01:58:20Z e 01:58:21Z**) e Mc 13.28-31 e 13.32-37 foram efetivamente relidos. A matriz de perguntas, gabaritos, referências e fatos foi confrontada com os **333 objetos/6.265 pistas**, inclusive as pautas documentais de Mt 24. Cabeçalhos e referências cruzadas não forneceram fatos; nenhuma identidade, data ou harmonização escatológica foi importada.

| Unidade relida | Matriz concreta e confronto | Resultado |
| --- | --- | --- |
| Mc 13.28-31 — figueira, geração e palavras | **Lição?** parábola da figueira (28); **qual proximidade?** verão pelos ramos renovados e folhas, aplicada ao que estaria às portas (28-29); **declaração?** aquela geração não passaria sem tudo acontecer (30); **contraste?** céu/terra passariam, palavras de Jesus não (31). Treze fatos distintos percorrem comparação, aplicação, declaração e contraste. Mt 24.32-35 foi confrontado como documento próprio e não forneceu pistas. | **Autorada** em `nt2-marcos-figueira-geracao-palavras`, 13 pistas, capacidade 6. “Esta geração”, “essas coisas” e “tudo isto” não receberam identidade, data ou definição externa. |
| Mc 13.32-37 — desconhecimento e vigília | **Quem sabe?** somente o Pai (32); **ordem?** sobreaviso e vigiar (33,35,37); **responsabilidade do porteiro?** vigiar (34); **risco?** chegada inesperada e encontro dos ouvintes dormindo (35-36). Dezesseis fatos incluem casa, autoridade, obrigações e as quatro faixas do dia. Mt 24.36-44 permaneceu paralelo documental, sem completar Marcos. | **Autorada** em `nt2-marcos-pai-servos-porteiro-vigilia`, 16 pistas, capacidade 7. As faixas do dia são lista textual da comparação, não cálculo cronológico. |

As duas pautas acrescentam **29 pistas**, levando o catálogo a **335 pautas/1.340 campos/6.294 pistas**, todas elegíveis. As capacidades 6 e 7 seguem `min(12, floor((pistas - 1) / 2))`, com duas cartas por jogador e ao menos uma no poço; não houve piso global de 25, inflação ou meta de doze participantes. Os 333 objetos da base `1d160ceb6de573897232e9f631f2834c3dd55335` permaneceram na mesma ordem e serializaram identicamente por `JSON.stringify`; somente dois objetos foram anexados. A auditoria encontrou zero duplicatas exatas e zero alertas sem resolução.

Mc 13 fica decidido no inventário vigente. **Mc 14 é o próximo recorte ordinário, mas não foi consultado nem autorado neste lote.** Mc 7.16, 9.44, 9.46 e 11.26 continuam pendências textuais isoladas; Mc 16.9-20 permanece fora. Mt 17.21 e Mt 23.14 continuam aplicados conforme as decisões vigentes; 1Co 11.2-16 conserva exatamente três conteúdos em pendência estrutural e 1Co 14.35 permanece fora de 14.34-36, sem novas perguntas. O banco permanece incompleto; testes não equivalem a conferência bíblica, e IDs não são contagem de histórias ou fatos semanticamente únicos. Não houve merge, deploy nem publicação.

## Revisão integral de Marcos 14–16.8 e fechamento documental — checkpoint 107

Em 14/09/2026, as páginas NAA Bible.com 1840 de Mc 14, 15 e 16 foram obtidas com HTTP 200 e lidas de ponta a ponta no limite autorizado de **14.1–16.8**. Os artefatos estruturados em `work/nt-review/` registram progresso por capítulo, fonte, hashes, matrizes por caso e fila consolidada. Os downloads tiveram 394.754, 350.330 e 318.381 bytes e SHA-256 `660b60fc9a516392a853c2e4a80a9e4fb99fd6a34ab2c005d4bcb763c07a45ad`, `90140de1d08c1b402f59da65284c28269d639e37e537c2e3f0e34f999f6d06f6` e `055c1947758bfa5d0627cd4ea0634876339557479c0b3b319401fe61e4e5b3ac`. A leitura, e não o êxito HTTP, sustentou as decisões.

| Faixa revisada | Matriz e confronto com os 335 objetos | Decisão |
| --- | --- | --- |
| Mc 14.1-31 | Plano/festa, Betânia/perfume, Judas/dinheiro, preparo/Páscoa, traidor/prato, pão/cálice, tropeço/Galileia e previsão a Pedro foram separados em perguntas, gabaritos, referências e fatos próprios. | **Seis pautas novas**, 74 pistas. Mulher, homem do cântaro e dono da casa ficam sem identidades externas; citações e paralelos não completam Marcos. |
| Mc 14.32-72 | Getsêmani, prisão, Sinédrio e negações foram confrontados com as pautas de Mateus e com `nt2-joao-jardim`. | **Quatro pautas novas**, 70 pistas. A prisão conserva pauta documental de Marcos para sua sequência e o jovem anônimo; lanternas, Malco e demais exclusivos de João não foram transferidos. |
| Mc 15.1-41 | Pilatos/Barrabás, Pretório, Gólgota/zombaria e morte/testemunhas sustentaram quatro matrizes. | **Quatro pautas novas**, 70 pistas. Mc 15.28, colcheteado e anotado como presente apenas em manuscritos mais recentes, foi isolado em `pending.json` e não entrou em referência, campo, alternativa, gabarito ou pista. |
| Mc 15.42-47 | José, confirmação da morte, lençol, túmulo, pedra e mulheres foram comparados fato a fato. | **Coberto sem alteração** por `nt2-sepultamento-jesus`; não houve duplicação. |
| Mc 16.1-8 | Mulheres/aromas, pedra, jovem, anúncio, Galileia e reação final formam quatro campos e vinte fatos. | **Uma pauta nova**, `nt2-marcos-mulheres-pedra-jovem-galileia`. O jovem não recebe identidade externa. Mc 16.9-20 permanece fora e não foi usado. |

O bloco acrescenta **15 pautas e 231 pistas**, levando o catálogo de **335/6.294** para **350 pautas/1.400 campos/6.525 pistas**, todas elegíveis. As capacidades novas são 2, 3, 4, 5, 6, 7, 8 ou 9 conforme `min(12, floor((pistas - 1) / 2))`; nenhuma pauta foi inflada para 25 cartas ou doze jogadores. Os 335 objetos anteriores permaneceram na mesma ordem e serializaram identicamente por `JSON.stringify`; só os quinze objetos foram anexados. A auditoria terminou com zero duplicatas exatas e zero pares sem resolução após decisões documentais específicas.

A conferência documental conjunta das decisões anteriores de Mc 1–13 com esta leitura de Mc 14–16.8 não deixou **lacuna ordinária conhecida** em Marcos 1–16.8. A fila consolidada, sem decisão presumida, contém Mc 7.16, 9.44, 9.46, 11.26 e 15.28; inclui também a pendência estrutural de três conteúdos em 1Co 11 e as variantes não funcionais vigentes. Mc 16.9-20 continua fora por decisão expressa. Testes estruturais não equivalem à conferência bíblica; 350 IDs não significam 350 histórias nem 6.525 fatos semanticamente únicos. Não houve autoria em Lucas, merge, deploy ou publicação. O próximo bloco amplo indicado é **Lucas 1–12**.
