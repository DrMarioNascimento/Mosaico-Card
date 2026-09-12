# Documento mestre — novo Banco Bíblico MOSAICO

## Mandato editorial

Este documento registra o pedido confirmado em 12 de setembro de 2026. O novo banco cobre **somente os 27 livros do Novo Testamento** e usa **exclusivamente a Nova Almeida Atualizada (NAA)**. O catálogo anterior de 145 pautas foi descartado como base editorial: 145 não é meta, limite, denominador nem indicador de conclusão. Perguntas, pistas, alternativas, gabaritos e a seleção de episódios antigos não podem ser reutilizados, migrados, remendados ou parafraseados.

O total nascerá do levantamento dos recortes que sustentem dedução honesta. Não se criam duplicatas para elevar contagem. A demonstração da ovelha continua isolada em `case-ovelha.js`, fora do namespace e do sorteio novo; nenhum ID antigo, inclusive `nt-052`, determina um ID novo.

## Fonte e prova de conferência

Cada afirmação liberada deverá ter referência exata, identificador da fonte NAA consultada e data de consulta. Memória do modelo, outra tradução e referência sem consulta não comprovam fidelidade. Usam-se paráfrases factuais próprias, sem reproduzir extensos trechos protegidos.

### Verificação de acesso deste checkpoint

Em 12/09/2026 foram tentados, de modo identificável, os endereços `https://www.bible.com/pt/bible/1840/MAT.1.NAA` (YouVersion, versão identificada como NAA) e `https://www.bibliaonline.com.br/naa/mt/1` (Bíblia Online, rota identificada como NAA). O proxy do ambiente recusou ambos antes de baixar qualquer conteúdo (`CONNECT tunnel failed, response 403`; HTTP final `000`). A busca web disponível também respondeu `401 Unauthorized`. Portanto **nenhum trecho NAA foi consultado neste checkpoint**, não há validação bíblica declarada e nenhuma pauta foi redigida ou liberada. O acesso bloqueado não autoriza substituição por ARA ou memória.

## Contrato editorial executável

- A fonte editável é `data/nt-bank.json`; `cases-nt.js` é sempre gerado.
- Cada pauta usa ID estável `nt2-*`, pergunta pronta, C1–C4 com quatro alternativas distintas e gabarito explícito.
- As nove naturezas são classificadas integralmente entre sustentadas e não sustentadas; de 4 a 9 devem ser sustentadas.
- O focal e sua justificativa são explícitos. A geração põe o focal primeiro e atribui 8/5/3/2.
- Cada pista registra importância, campos relacionados, momento, função, risco, adequação a dois jogadores, abrangência documental, referências e, independentemente, se é recurso caro.
- Fonte única é válida. Paralelos e componentes mantêm referências próprias; não se força harmonização.
- Inferência, alusão interpretativa, possível contradição ou harmonização discutível entra em `review.ambiguities` e bloqueia elegibilidade.
- A revelação contém síntese, dente, respostas e referências específicas por campo, além das referências gerais/componentes.
- `playable` é derivado: requer aprovações estrutural, bíblica e editorial e zero ambiguidades. Teste estrutural não equivale a conferência bíblica.

## Continuidade por lotes

Lotes editoriais devem ter aproximadamente 10–15 pautas quando houver recortes suficientes. Cada checkpoint atualiza a matriz, fontes realmente abertas, candidatos, exclusões, bloqueios e próximo passo. Nunca registrar “livro analisado” sem examinar os recortes na NAA.

## Checkpoint 001 — fundação técnica

- **Liberadas:** 0.
- **Bloqueadas:** 0 pautas redigidas.
- **Pendentes:** levantamento dos 27 livros e toda autoria bíblica.
- **Entregue:** fonte v2 vazia, esquema documental, gerador, validador, novo namespace/saco, testes positivos e negativos e matriz inicial.
- **Motivo:** acesso externo à NAA bloqueado no ambiente, conforme registro acima.
- **Próximo passo:** obter acesso consultável e licitamente identificado à NAA; iniciar Mateus por recortes, registrar candidatos/exclusões e formar o primeiro lote sem meta numérica.

## Checkpoint 002 — lote João 01

Em 12/09/2026, na retomada do commit `3e000bd`, o acesso mudou: `curl -L --compressed` obteve HTTP 200 tanto em `https://www.bible.com/pt/bible/1840/JHN.1.NAA` (100.027 bytes) quanto em `https://www.bibliaonline.com.br/naa/mt/1` (34.859 bytes). A ferramenta de busca integrada continuou respondendo `401 Unauthorized`, mas isso não impediu a consulta HTTP direta.

Para a autoria, foram efetivamente baixados e lidos na página identificada como **João — NAA** do Bíblia Online os capítulos 2, 3, 4, 5, 6, 9, 11, 13 e 20. Cada referência estruturada registra a URL do capítulo e a data. A consulta foi usada como prova; o banco contém paráfrases factuais próprias, não transcrição extensa.

### Resultado do lote

- **10 pautas liberadas:** Caná (Jo 2.1-11), templo (Jo 2.13-22), Nicodemos (Jo 3.1-15), Sicar (Jo 4.5-30), Betesda (Jo 5.1-18), pães e peixes (Jo 6.1-15), cego de nascença (Jo 9.1-41), Lázaro (Jo 11.1-46), lavagem dos pés (Jo 13.1-20) e Tomé (Jo 20.19-29).
- **40 campos:** quatro por pauta, cada um com quatro alternativas distintas, resposta explícita e referência específica.
- **250 pistas:** 25 unidades factuais distintas por pauta para sustentar duas cartas por participante até 12 pessoas e preservar poço; todas têm metadados e proveniência.
- **Bloqueadas por ambiguidade:** 0 neste lote. João 5.4, delimitado por colchetes na própria apresentação NAA consultada, não foi usado como fato nem como gabarito.
- **Pendente:** continuar o levantamento de João fora dos dez recortes e iniciar os demais 26 livros. João permanece “em andamento”, não “completo”.

## Checkpoint 003 — revisão do lote 01 e lote João 02

### Revisão editorial do lote inicial

A exigência técnica fixa de 25 cartas induzia expansão desnecessária. Ela foi substituída por mínimo de 13 fatos: em mesas grandes, a mão inicial se adapta para uma carta por pessoa e ainda preserva o poço; em mesas menores, continua com duas. A revisão manual retirou quatro unidades meta ou redundantes (uma de Caná, uma do templo e duas de Nicodemos). O lote 01 passou de 250 para **246 pistas**.

`npm run audit:clues` compara pistas somente dentro da mesma pauta. No banco combinado encontrou **zero duplicatas textuais exatas**. Sinalizou um par para leitura em `nt2-joao-oficial` (local do filho e estado do filho); a revisão editorial feita pelo agente manteve ambos porque são fatos distintos que restringem campos diferentes. Similaridade lexical é triagem editorial, não prova bíblica; a aprovação bíblica deste checkpoint decorre da leitura efetiva dos trechos NAA identificados.

### Lote João 02

Foram consultados em NAA os capítulos 1, 4, 6, 7, 10, 12, 18, 19, 20 e 21. Foram liberadas **10 pautas novas**: primeiros discípulos, filho do oficial, caminhada sobre o mar, ida secreta aos Tabernáculos, bom pastor, perfume em Betânia, prisão no jardim, crucificação, Maria junto ao túmulo e pesca no mar de Tiberíades. O lote acrescenta 40 campos e **130 pistas**.

- **Banco acumulado:** 20 pautas, 80 campos e 376 pistas; isso é inventário, não meta.
- **Ambiguidades novas:** nenhuma. A triagem continua obrigatória em lotes futuros.
- **Cobertura:** João permanece em andamento; ainda não foi declarado levantamento integral do livro. Os demais 26 livros continuam pendentes.
- **Duração observável:** download dos dez capítulos, 3,2 s; auditoria automatizada, 0,3 s. A duração da leitura/autoria manual não foi instrumentada desde o início desta retomada e, portanto, não é inventada nem usada para estimativa. O próximo lote deve registrar início e fim UTC para criar uma base editorial comparável.
- **Próximo passo:** mapear explicitamente os recortes restantes de João, concluir ou excluir cada candidato e só então mudar o livro para analisado; depois iniciar o próximo livro.

## Checkpoint 004 — contrato de mãos, fechamento de João e abertura de Mateus

A adaptação para uma carta por participante foi revertida: ela alterava o motor para acomodar baralhos curtos, contrariando o contrato consolidado. O motor novamente distribui duas cartas a cada participante. Para 12 pessoas e poço não vazio, a elegibilidade agora exige ao menos 25 pistas; pautas abaixo disso permanecem na fonte, mas recebem `deck-insufficient-for-12-players` e não entram no sorteio. Não foram recriadas duplicatas para liberá-las.

João 8 e 14–17 foram baixados entre **06:37:59Z e 06:38:01Z** (2,349 s) e lidos para fechar os recortes ainda não examinados. A ficha `docs/cobertura/JOAO.md` registra aprovações, exclusões e o bloqueio de Jo 8.1-11. O levantamento do livro passa a “analisado”, sem confundir isso com elegibilidade técnica de todas as pautas.

Sem interromper após João, as 28 páginas NAA de Mateus foram baixadas entre **06:38:28Z e 06:38:34Z** (5,536 s). A primeira passagem mapeou 21 pré-candidatos em `docs/cobertura/MATEUS.md`; como houve apenas triagem de títulos e limites, nenhum foi declarado validado ou autorado. Mateus permanece em triagem.

- **Inventário após revalidação:** 20 pautas autoradas; somente as que mantêm 25 pistas são elegíveis. As demais estão objetivamente bloqueadas por capacidade do baralho.
- **Regra preservada:** duas cartas por pessoa, 2–12 participantes, poço e negociação; nenhuma regra foi reduzida para aumentar pautas jogáveis.
- **Duração editorial:** este checkpoint passou a registrar janelas UTC. Tempos de download não estimam tempo de autoria; a futura leitura dos pré-candidatos de Mateus fornecerá a primeira duração editorial completa comparável.
- **Cobertura restante:** Mateus em triagem; Marcos a Apocalipse pendentes. João analisado, com um recorte ambíguo bloqueado.

## Checkpoint 005 — primeiro sublote de Mateus e abertura de Marcos

Seis pré-candidatos de Mateus foram lidos integralmente e autorados com base na NAA: magos (Mt 2.1-12), duas curas encadeadas (Mt 9.18-26), morte de João Batista (Mt 14.1-12), alimentação da multidão (Mt 14.13-21), Pedro sobre as águas (Mt 14.22-33) e transfiguração (Mt 17.1-13). Cada pauta recebeu quatro campos, alternativas, gabaritos e 25 pistas factuais distintas; as seis passaram pelas revisões bíblica, editorial e estrutural e estão elegíveis. Mateus continua em andamento com 15 pré-candidatos ainda não decididos.

Para não encerrar no sublote, as 16 páginas NAA de Marcos foram acessadas entre **06:54:50Z e 06:54:56Z** (5,738 s) e seus limites foram triados. Dezessete pré-candidatos independentes foram registrados, sem autoria ou validação prematura. Mc 16.9-20 foi bloqueado para avaliação textual pelo usuário.

- **Inventário acumulado:** 26 pautas autoradas; 13 elegíveis e 13 bloqueadas por baralho curto. Não é meta.
- **Duração:** a sessão de autoria de Mateus não teve marcador inicial confiável e não será estimada retrospectivamente. A triagem técnica de Marcos durou 5,738 s; não equivale a leitura bíblica integral.
- **Restante preciso:** 15 pré-candidatos de Mateus; 17 de Marcos em triagem; Lucas, Atos e as 22 cartas/Apocalipse ainda não iniciados. As 13 pautas curtas de João permanecem bloqueadas.

## Checkpoint 006 — decisões de Mateus e consolidação paralela

Os 15 pré-candidatos restantes de Mateus foram lidos na NAA e receberam decisão registrada na ficha do livro: três sustentáveis aguardam autoria, dez ficaram bloqueados por insuficiência/paralelos, um foi consolidado e um recorte de crucificação foi incorporado a uma pauta existente. A cobertura de Mateus continua em andamento porque a lista inicial não é obrigatória nem prova levantamento exaustivo.

A prisão (Jo 18.1-14 + Mt 26.47-56) e a crucificação (Jo 19.16-30 + Mt 27.32-56) passaram a pautas complementares: fatos comuns receberam referências paralelas, enquanto detalhes exclusivos mantiveram a referência de seu componente. Cada baralho chegou a 25 por fatos adicionais distintos de Mateus, liberando as duas pautas sem harmonizar o nome de Malco, o destino inicial a Anás ou outros detalhes exclusivos de João.

A pauta da alimentação em Mateus foi bloqueada para revisão editorial por sobreposição com `nt2-joao-paes`; não foi mantida elegível apenas por possuir 25 cartas. A auditoria agora também compara pistas entre pautas. Um fato repetido sobre André foi reescrito como a sequência observável entre a resposta de Filipe e a apresentação dos alimentos; depois disso, a triagem retornou zero pares semânticos intercasos no limiar configurado. Esse resultado é auxílio mecânico, não prova de ausência de equivalência nem validação bíblica.

- **Inventário:** 26 pautas, 550 pistas e 14 elegíveis; 12 bloqueadas. Não é meta.
- **Restante imediato:** três pautas sustentáveis de Mateus aguardam autoria; dez curtas/paralelas bloqueadas; Marcos tem 17 pré-candidatos em triagem; 24 livros não iniciados.
- **Próximo passo:** autorar os três recortes densos de Mateus, revisar o restante do livro além da lista inicial e então ler os candidatos de Marcos, mantendo Mc 16.9-20 bloqueado.

## Checkpoint 007 — abertura independente de Lucas

Após as decisões de Mateus, o trabalho avançou para Lucas: as 24 páginas NAA foram acessadas entre **07:11:38Z e 07:11:46Z** (7,681 s) e tiveram títulos/limites triados. A ficha `docs/cobertura/LUCAS.md` registra 22 pré-candidatos próprios. Nenhum foi chamado de analisado, validado ou jogável: leitura de títulos não substitui conferência bíblica.

Episódios aparentemente paralelos foram deixados fora da primeira lista de Lucas até comparação documental. Isso evita criar uma segunda pauta para o mesmo fato ou harmonizar diferenças antes da análise. O trabalho independente pode continuar pelos recortes próprios enquanto essa comparação fica pendente.

- **Restante após este checkpoint:** três pautas densas de Mateus aguardam autoria e o livro ainda exige varredura além da lista inicial; Marcos tem 17 e Lucas 22 pré-candidatos em triagem; Atos a Apocalipse (23 livros) não iniciados; 12 pautas autoradas continuam bloqueadas.

## Checkpoint 008 — fechamento dos densos de Mateus e primeira pauta de Marcos

Os três recortes sustentáveis pendentes de Mateus foram autorados e conferidos diretamente na NAA: ceia (Mt 26.17-30), Getsêmani (Mt 26.36-46) e decisão de Pilatos/Barrabás (Mt 27.11-26). Cada pauta contém quatro campos e 25 fatos distintos. A lista inicial de 21 candidatos está decidida, mas Mateus continua em varredura além dela; não se declara cobertura integral por encerrar uma lista preliminar.

Em seguida houve análise efetiva de Marcos, não apenas nova triagem: Mc 5.1-20 originou uma pauta própria com 25 fatos do relato de Marcos, sem copiar detalhes de relatos paralelos. Os outros 16 pré-candidatos permanecem pendentes.

A auditoria semântica combinada reportou zero duplicatas exatas e zero pares intercasos no limiar. O único par interno sinalizado continua sendo dois fatos diferentes sobre o filho do oficial (local e condição). Houve revisão editorial pelo agente das novas 100 pistas; o resultado automatizado continua tratado apenas como triagem.

- **Inventário:** 30 pautas, 650 pistas; 18 elegíveis e 12 bloqueadas. Não é meta.
- **Cobertura restante:** Mateus requer varredura além dos candidatos iniciais; Marcos tem 16 recortes; Lucas tem 22 em triagem; Atos a Apocalipse permanecem não iniciados.
- **Limite deste checkpoint:** o lote encerra por limite da execução atual, não por conclusão do objetivo. O próximo checkpoint deve continuar Marcos antes de abrir somente novas triagens.

## Checkpoint 009 — fechamento de Mateus/Marcos e início efetivo de Lucas

Três pautas documentais foram criadas após leitura efetiva dos paralelos NAA: paralítico (Mc 2.1-12 + Mt 9.1-8), tempestade (Mc 4.35-41 + Mt 8.23-27) e sepultamento (Mc 15.42-47 + Mt 27.57-66 + Jo 19.38-42). Fatos comuns têm referências múltiplas; peculiaridades — quatro carregadores/telhado, popa/travesseiro, confirmação pelo centurião e participação de Nicodemos — conservam fonte única. Cada baralho tem 25 fatos úteis, não variantes reescritas do mesmo fato.

A varredura por faixas dos 28 capítulos de Mateus foi concluída e documentada. Marcos teve decisão para os 17 pré-candidatos e seus 16 capítulos; Mc 16.9-20 continua bloqueado, com colchetes visíveis na NAA consultada. Mateus e Marcos passam a “analisado nesta rodada”, sem tornar permanentes as exclusões.

O trabalho prosseguiu para análise/autoria de Lucas: Lc 2.1-20 originou a pauta do nascimento e dos pastores, com 25 fatos próprios. A presença de magos em Mateus não foi harmonizada com o anúncio aos pastores em Lucas.

A auditoria lexical/semântica sinalizou a ordem para levantar-se em Betesda e no paralítico. A revisão editorial feita pelo agente manteve as duas porque são atos ocorridos com pessoas, lugares e consequências diferentes; não são cartas duplicadas do mesmo episódio. Nenhum par intercasos adicional foi encontrado no limiar, mas o relatório não substitui a comparação documental realizada acima.

- **Inventário:** 34 pautas, 750 pistas; 22 elegíveis e 12 bloqueadas. Não é meta.
- **Restante preciso:** Lucas tem 21 pré-candidatos; Atos a Apocalipse (23 livros) não iniciados; recortes sinóticos curtos e questões textuais permanecem bloqueados conforme as fichas.
- **Limite:** a execução atual encerra após três consolidações, fechamento de dois livros e uma pauta de Lucas; o próximo lote deve continuar a leitura de Lucas antes de abrir novas triagens.

## Checkpoint 010 — decisões de Lucas e abertura de Atos

Três recortes de Lucas foram lidos integralmente na NAA e autorados: anúncio a Zacarias (Lc 1.5-25), pesca no lago de Genesaré (Lc 5.1-11) e caminho de Emaús (Lc 24.13-35). Somados ao nascimento/pastores, Lucas tem quatro pautas próprias. Os demais pré-candidatos receberam decisão inicial na ficha: sete sustentáveis aguardam autoria/comparação; recortes curtos, poéticos ou tematicamente mistos permanecem bloqueados ou excluídos sem preenchimento artificial.

A terminologia de revisão foi corrigida em toda a documentação. As verificações feitas nesta execução são identificadas como **revisão editorial pelo agente**; nenhum parecer foi atribuído ao usuário. Questões textuais reservadas ao usuário continuam explicitamente bloqueadas.

Sem parar na autoria de Lucas, as 28 páginas NAA de Atos foram acessadas entre **07:58:17Z e 07:58:25Z** (7,566 s). Foram mapeados 26 pré-candidatos, mas nenhum foi declarado analisado ou validado só por essa passagem inicial.

- **Inventário:** 37 pautas, 825 pistas; 25 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** Lucas ainda requer sete autorias/comparações e varredura além da lista; Atos tem 26 recortes em triagem; Romanos a Apocalipse (22 livros) não iniciados.
- **Limite da execução:** encerra após três pautas NAA completas e abertura documentada de Atos. A retomada deve priorizar os sete sustentáveis de Lucas, depois análise efetiva de Atos.

## Checkpoint 011 — fechamento de Lucas e autoria em Atos

As sete pendências sustentáveis de Lucas foram encerradas por decisão: quatro autoradas (apresentação, mulher na casa de Simão, bom samaritano e Zaqueu), duas reclassificadas como insuficientes e o final de Lc 24 bloqueado para comparação documental. A varredura adicional registrou decisões por faixas dos 24 capítulos; Lucas passa a analisado nesta rodada com oito pautas próprias.

Atos avançou além da triagem: At 2.1-13 e 5.1-11 foram lidos integralmente e autorados com 25 pistas distintas cada. Os 24 pré-candidatos restantes continuam pendentes de análise efetiva.

**Correção temporal:** a resposta externa anterior digitou incorretamente “07:17Z”. O registro verificável é início `07:58:17Z`, fim `07:58:25Z`, com relógio monotônico de download em **7,566 s**. Os horários têm resolução de um segundo; a duração monotônica é a medida precisa do comando. Não há medição do tempo total editorial, portanto ela não é estimada.

- **Inventário:** 43 pautas, 975 pistas; 31 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** Atos tem 24 pré-candidatos; Romanos a Apocalipse (22 livros) não iniciados; ambiguidades e recortes insuficientes permanecem documentados.
- **Limite:** encerra por limite da execução após quatro pautas de Lucas, fechamento do livro e duas pautas de Atos. A próxima retomada deve analisar Atos efetivamente antes de avançar às cartas.

## Checkpoint 012 — autoria em Atos 8, 12 e 16; abertura de Romanos

O estado Git foi verificado limpo antes da retomada. Como o cache temporário anterior não existia, Atos 8, 12 e 16 foram baixados novamente em 12/09/2026 entre **08:45:43Z e 08:45:44Z**, duração monotônica de **1,261 s**, todos identificados como NAA. A consulta válida resultou em três pautas completas: Filipe e o oficial etíope (At 8.26-40), Pedro livre da prisão (At 12.1-19) e Paulo/Silas presos (At 16.16-40).

At 8.37 aparece entre colchetes na fonte consultada e foi excluído do conteúdo executável; a questão fica bloqueada para o usuário sem impedir o restante de Atos. Cada pauta liberada usa 25 fatos distintos do próprio recorte, quatro campos, quatro alternativas e focal explícito.

Os 24 pré-candidatos que restavam receberam decisão inicial: três foram autorados, cinco densos aguardam autoria e dezesseis foram bloqueados por insuficiência/delimitação, conforme a ficha. As 28 páginas foram atualizadas entre **08:47:11Z e 08:47:17Z**, com download monotônico de **5,915 s**. Atos continua em andamento e requer varredura além da lista.

Depois da autoria, Romanos foi aberto sem excluir o gênero epistolar: suas 16 páginas NAA foram baixadas entre **08:47:17Z e 08:47:20Z** em **3,126 s**. Três recortes factuais e as seções argumentativas ficaram pendentes de análise; nenhum caso foi liberado por mera triagem.

- **Inventário:** 46 pautas, 1.050 pistas; 34 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** cinco autorias densas e varredura adicional de Atos; Romanos em triagem efetiva; 1 Coríntios a Apocalipse (21 livros) não iniciados.
- **Limite atual:** checkpoint encerrado após três pautas completas e decisões dos pré-candidatos de Atos. A próxima execução deve autorar os cinco densos antes de avançar apenas em novas triagens.

## Checkpoint 013 — cinco autorias densas e fechamento da rodada de Atos

O estado Git foi verificado no checkpoint `7fb8df8`. As cópias locais das páginas NAA de Atos 9, 10, 19, 27 e 28, obtidas na execução anterior, foram efetivamente lidas; não houve novo download neste lote e, portanto, não se inventa duração de rede. A leitura e a revisão editorial pelo agente produziram cinco pautas: Saulo e Ananias, Cornélio e Pedro, tumulto de Éfeso, naufrágio e Malta. São 125 pistas factuais, com 25 fatos distintos por pauta, quatro campos, focal explícito e proveniência por pista.

A varredura adicional de Atos foi concluída por seis faixas de capítulos. Discursos e cartas internas foram avaliados, não descartados por gênero; nenhum recorte adicional foi forçado quando não sustentava o baralho e a dedução. Atos tem dez pautas autoradas e dezesseis decisões de bloqueio justificadas.

Romanos avançou de triagem para leitura efetiva: Rm 1.1-15, 15.14-33 e 16.1-24 foram lidos. O primeiro e o terceiro não foram transformados em inventários artificiais; Rm 16.24, entre colchetes na fonte, fica reservado ao usuário. Rm 15.14-33 permanece candidato a delimitação. Testes estruturais abaixo não são prova dessa conferência bíblica.

- **Inventário:** 51 pautas, 1.175 pistas; 39 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** Romanos requer análise das demais seções e decisão sobre Rm 15.14-33; 1 Coríntios a Apocalipse (21 livros) não iniciados; ambiguidades já registradas continuam bloqueadas.
- **Limite real desta execução:** janela de execução disponível após cinco autorias completas e a leitura dos três recortes de Romanos; nenhum bloqueio de rede ou autenticação ocorreu neste checkpoint.

## Checkpoint 014 — delimitação em Romanos e leitura de 1 Coríntios

Rm 15.14-33 foi delimitado e autorado após releitura NAA: a pauta separa a viagem imediata a Jerusalém do plano posterior de Espanha e não fragmenta a coleta em duplicatas. Romanos permanece em andamento; Rm 16.24 continua bloqueado e as seções restantes ainda exigem decisões.

A análise avançou para 1 Coríntios com download e leitura integral de 1Co 1, 11 e 16. O download ocorreu entre **09:18:37Z e 09:18:39Z**, em **2,369 s** monotônicos. 1Co 16 é candidato factual pendente de autoria e comparação com Rm 15; os outros dois capítulos permanecem em delimitação, sem exclusão automática de instrução ou argumento.

Os dois alertas semânticos do auditor foram resolvidos e documentados em `data/nt-clue-audit-resolutions.json`: localização versus condição do filho em Jo 4 são fatos independentes; as ordens de levantar-se em Jo 5 e Mc 2 pertencem a episódios diferentes, não paralelos. O auditor agora separa pares resolvidos de pendências reais.

- **Inventário:** 52 pautas, 1.200 pistas; 40 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** concluir decisões de Romanos; autorar/decidir 1Co 16 e varrer os demais capítulos; 2 Coríntios a Apocalipse (20 livros) não iniciados.
- **Limite real:** janela desta execução após uma pauta completa, resolução dos alertas e leitura efetiva de três capítulos; não houve bloqueio de fonte ou autenticação.

## Checkpoint 015 — 1 Coríntios 16 e abertura efetiva de 2 Coríntios

1Co 16.1-24 foi autorado depois da comparação com Rm 15.25-28. As pautas permanecem separadas porque uma contém instruções coríntias de reserva e portadores e a outra registra contribuição regional e planos de entrega; nenhum detalhe foi transferido entre documentos. As treze páginas restantes de 1 Coríntios foram obtidas em **4,713 s** entre **09:33:51Z e 09:33:55Z**, mas continuam pendentes de leitura por recorte — acesso não foi chamado de revisão.

2Co 8, 9 e 11 foram baixados e lidos em **0,703 s** entre **09:34:59Z e 09:35:00Z**. Os capítulos 8–9 ficam em comparação com as outras cartas para evitar duplicar a coleta. 2Co 11.16-33 originou pauta factual com 25 pistas; o naufrágio ali enumerado não foi harmonizado com Atos 27.

- **Inventário:** 54 pautas, 1.250 pistas; 42 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** Romanos ainda requer decisões nas seções argumentativas; 1 Coríntios tem treze capítulos acessados mas não analisados por recorte; 2 Coríntios tem dez capítulos não lidos; Gálatas a Apocalipse (19 livros) não iniciados.
- **Limite real:** a janela encerra após duas pautas completas, duas comparações documentais e leitura de três capítulos de 2 Coríntios; fonte e autenticação permaneceram disponíveis.

## Checkpoint 016 — fechamento editorial das lacunas e abertura de Gálatas

As faixas restantes de Romanos, 1 Coríntios e 2 Coríntios receberam decisões específicas nas fichas. Os três livros passam a analisados nesta rodada, cada um com uma pauta autorada; listas e argumentos não foram rejeitados por gênero, mas avaliados quanto a quatro campos factuais, dedução e risco de distratores teológicos. A comparação de 2Co 8–9 com Rm 15 e 1Co 16 foi concluída: os textos documentam aspectos da campanha da coleta, mas uma terceira pauta repetiria seu eixo, por isso 2Co 8–9 fica como comparação e não como episódio harmonizado.

A grafia “Atos 277” apareceu somente no relatório conversacional anterior. A busca versionada confirmou que os arquivos usam corretamente **Atos 27**; não houve dado bíblico a corrigir no banco.

Os dez capítulos restantes de 2 Coríntios foram baixados entre **09:50:13Z e 09:50:17Z**, em **4,070 s** monotônicos. Em seguida, as seis páginas de Gálatas foram baixadas em **1,604 s** entre **09:50:34Z e 09:50:36Z.** Gl 1–2 foram lidos; Gl 1.11-24 é candidato autobiográfico pendente de comparação com Atos 9. Gl 3–6 foram apenas acessados e permanecem sem leitura por recorte.

- **Inventário:** permanece em 54 pautas, 1.250 pistas; 42 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** Gálatas 1.11-24 requer autoria/comparação e Gl 3–6 requer leitura; Efésios a Apocalipse (18 livros) não iniciados.
- **Limite real:** encerra depois de fechar as decisões dos três livros prioritários e ler Gl 1–2; não houve bloqueio de rede ou autenticação.

## Checkpoint 017 — Gálatas e início efetivo de Efésios

Gl 1.1-24 originou pauta com 25 fatos e fonte exclusiva em Gálatas. A comparação com Atos 9 foi concluída sem fusão: os documentos têm focos e detalhes próprios, e nenhuma sequência ausente foi preenchida. Gl 2 permanece bloqueado quanto à identificação de sua visita com uma viagem de Atos. Gl 3–6 foram lidos e receberam decisões específicas; Gálatas passa a analisado nesta rodada.

As seis páginas de Efésios foram baixadas em **2,988 s** entre **10:07:39Z e 10:07:42Z**. Ef 6 foi lido integralmente e seus três blocos não foram fundidos para completar baralho; Ef 1–5 foram apenas acessados e permanecem pendentes.

- **Inventário:** 55 pautas, 1.275 pistas; 43 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** leitura/decisão de Ef 1–5 e avaliação da armadura sem inflação; Filipenses a Apocalipse (17 livros) não iniciados.
- **Limite real:** janela encerra após uma pauta completa, fechamento de Gálatas e leitura de Ef 6; não houve bloqueio de fonte ou autenticação.

## Checkpoint 018 — fechamento de Efésios, autoria em Filipenses e Colossenses

Ef 1–5 foram lidos e receberam decisões específicas. A armadura de Ef 6.10-20 não foi inflada: seus elementos pertencem a uma metáfora, e o pequeno envio de Tíquico não foi anexado para alcançar 25 cartas. Efésios passa a analisado nesta rodada, sem pauta.

As quatro páginas de Filipenses foram baixadas e lidas em **2,000 s** entre **10:23:27Z e 10:23:29Z**. Fp 2.19-30 sustentou pauta sobre Timóteo e Epafrodito com 25 fatos; os demais blocos receberam decisões próprias. As quatro páginas de Colossenses foram baixadas em **1,373 s** entre **10:24:23Z e 10:24:25Z**; Cl 4 foi lido, mas aguarda comparação com Efésios e Filemom, enquanto Cl 1–3 seguem apenas acessados.

- **Inventário:** 56 pautas, 1.300 pistas; 44 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** leitura de Cl 1–3 e comparação de Cl 4; 1 Tessalonicenses a Apocalipse (15 livros) não iniciados.
- **Limite real:** encerra após fechar dois livros, autorar uma pauta e iniciar leitura de Colossenses; não houve bloqueio de fonte ou autenticação.

## Checkpoint 019 — Colossenses/Filemom e Tessalonicenses

Cl 1–3 foram lidos e receberam decisões específicas. A comparação de Cl 4 com Ef 6 e Filemom preservou cada documento: não se inferiu transporte simultâneo nem cronologia. Colossenses não gerou pauta duplicada; Filemom foi lido integralmente e sustentou pauta própria com 25 fatos sobre o pedido por Onésimo.

No lote de **4,560 s**, entre **10:43:45Z e 10:43:50Z**, foram obtidas as páginas de Colossenses, 1–2 Tessalonicenses e Filemom. 1Ts 2–3 foram lidos; 1Ts 2.17–3.10 é candidato pendente de autoria/comparação com Atos. As demais páginas de 1 Tessalonicenses e todas de 2 Tessalonicenses foram apenas acessadas, não chamadas de revisão.

- **Inventário:** 57 pautas, 1.325 pistas; 45 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** autoria/decisão do candidato de 1Ts e leitura de 1Ts 1,4–5; leitura integral de 2Ts; 1 Timóteo–Judas e Apocalipse ainda sem análise, ressalvada Filemom já concluída.
- **Limite real:** encerra após concluir Colossenses, autorar Filemom e ler 1Ts 2–3; fonte e autenticação permaneceram disponíveis.

## Checkpoint 020 — Tessalonicenses e início de 1 Timóteo

1Ts 2.17–3.10 foi autorado com 25 fatos e comparado com At 17–18 sem sincronizar automaticamente os itinerários. 1Ts 1, 4 e 5 foram lidos e receberam decisões específicas; o livro passa a analisado. As três páginas de 2 Tessalonicenses também foram lidas: 2Ts 2 permanece bloqueado quanto à identidade do iníquo e de quem/o que detém, enquanto os demais recortes foram decididos independentemente.

As seis páginas de 1 Timóteo foram baixadas em **2,205 s** entre **11:01:03Z e 11:01:06Z**. 1Tm 1, 3 e 4 foram lidos; 1Tm 1.3-20 permanece candidato à delimitação, e as listas dos capítulos 3–4 não foram infladas. Os demais capítulos foram apenas acessados.

O novo alerta lexical P18/P19 da pauta de 1Ts foi resolvido no registro da auditoria: fé e amor são duas notícias coordenadas e explícitas em 1Ts 3.6, não paráfrases do mesmo fato.

- **Inventário:** 58 pautas, 1.350 pistas; 46 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** delimitar 1Tm 1.3-20 e ler 1Tm 2,5–6; 2 Timóteo–Tito e Hebreus–Apocalipse (11 livros), com Filemom já concluída.
- **Limite real:** encerra após concluir os dois livros tessalonicenses e ler três capítulos de 1 Timóteo; não houve bloqueio de fonte ou autenticação.

## Checkpoint 021 — cartas pastorais e abertura de Hebreus

1Tm 2, 5 e 6 foram lidos e a delimitação de 1Tm 1.3-20 foi concluída sem pauta heterogênea. As quatro páginas de 2 Timóteo e as três de Tito foram baixadas e lidas no lote de **3,248 s**, entre **11:15:54Z e 11:15:57Z**. 2Tm 4.9-22 sustentou pauta com 25 fatos; Tito não sustentou baralho sem inflar sua conclusão.

As treze páginas de Hebreus foram baixadas em **3,235 s** entre **11:16:51Z e 11:16:54Z**. Hb 11 foi lido e permanece candidato: somente os fatos escritos em Hebreus podem ser usados, sem completar narrativas pelo AT. Os demais capítulos foram apenas acessados.

- **Inventário:** 59 pautas, 1.375 pistas; 47 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** decisão/autoria de Hb 11 e leitura de Hb 1–10,12–13; Tiago–Apocalipse (sete livros) não iniciados.
- **Limite real:** encerra após fechar três cartas pastorais, autorar 2Tm 4 e ler Hb 11; não houve bloqueio de fonte ou autenticação.

## Checkpoint 022 — Hebreus, Tiago e início de 1 Pedro

Hb 1–10 e 12–13 foram lidos e decididos por faixa. Hb 11 originou pauta de 25 fatos estritamente conforme o texto NAA de Hebreus; nenhuma informação do AT completou as pistas. Tipologia, santuário e citações não foram transformados em episódios artificiais.

As cinco páginas de Tiago foram baixadas e lidas em **2,298 s** entre **11:32:58Z e 11:33:00Z**. Cada bloco recebeu motivo específico e nenhum exemplo hipotético foi tratado como ocorrido. As cinco páginas de 1 Pedro foram baixadas em **2,018 s** entre **11:33:13Z e 11:33:15Z**; 1Pe 5 foi lido, mantendo “Babilônia” sem identificação interpretativa, e os capítulos 1–4 permanecem apenas acessados.

- **Inventário:** 60 pautas, 1.400 pistas; 48 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** leitura/decisão de 1Pe 1–4; 2 Pedro, 1–3 João, Judas e Apocalipse (seis livros) não iniciados.
- **Limite real:** encerra após concluir Hebreus/Tiago, autorar Hb 11 e ler 1Pe 5; não houve bloqueio de fonte ou autenticação.

## Checkpoint 023 — cartas finais e Apocalipse

1Pe 1–4 foram lidos e decididos; espíritos em prisão, evangelho aos mortos e “Babilônia” permanecem sem solução interpretativa. 2 Pedro, 1–3 João e Judas foram baixados e lidos integralmente no lote de **9,040 s**, entre **11:48:55Z e 11:49:04Z**. Cada carta recebeu decisão específica, preservando alusões conforme o NT e bloqueando identidades não dadas.

As 22 páginas de Apocalipse foram obtidas no mesmo lote. Ap 1, 4–5, 12 e 21–22 foram lidos; Ap 1 originou pauta de 25 fatos usando somente símbolos explicados pelo próprio capítulo. Os outros símbolos não receberam interpretação automática. Dezesseis capítulos permanecem apenas acessados, logo a cobertura dos 27 livros ainda não está concluída.

- **Inventário:** 61 pautas, 1.425 pistas; 49 elegíveis e 12 bloqueadas. Não é meta.
- **Restante:** leitura e decisões por recorte de Ap 2–3, 6–11 e 13–20; depois auditoria das pendências editoriais resolvíveis e integração global.
- **Limite real:** encerra após fechar seis cartas, autorar Ap 1 e ler seis capítulos de Apocalipse; não houve bloqueio de fonte ou autenticação.

## Checkpoint 024 — cobertura dos 27 livros e auditoria global

Os dezesseis capítulos restantes de Apocalipse foram lidos e decididos por faixa. Explicações fornecidas pelo próprio texto foram diferenciadas de identificações históricas ou cronológicas, que permanecem bloqueadas. A matriz agora possui decisão para os 27 livros, mas isso não elimina pendências nem autoriza publicação.

A auditoria global releu Jo 2–3 na NAA e resolveu três baralhos quase completos com fatos antes ausentes: terceiro dia em Caná, destinatários da ordem aos vendedores de pombas e duas declarações distintas no diálogo com Nicodemos. Nenhum fato foi reescrito para simular novidade. Oito casos com 13 pistas continuam bloqueados e a sobreposição Mateus/João permanece para decisão do usuário.

A integração agora percorre cada pauta elegível em mesas de 2–12, verificando duas cartas por mão, poço, quatro campos e revelação. Sorteio, chave de saco versionada e demonstração isolada permanecem cobertos pelos testes existentes. O relatório consolidado está em `docs/RELATORIO-FINAL-NT-NAA.md`.

- **Inventário:** 61 pautas, 1.429 pistas; 52 elegíveis e 9 bloqueadas. Não é meta.
- **Pendências não automáticas:** oito baralhos curtos, uma sobreposição paralela e ambiguidades interpretativas listadas no relatório.
- **Publicação:** não realizada; nenhuma credencial ou dado de produção foi alterado.

## Checkpoint 025 — fechamento das pendências autorizadas

A comparação direta de Mt 14.13-21 com Jo 6.1-15 concluiu que se trata do mesmo episódio documental. A pauta duplicada de Mateus foi removida; fatos comuns na pauta de João receberam referências múltiplas, enquanto André, menino/cevada, modo de distribuição e mulheres/crianças não foram harmonizados. Não restou decisão humana necessária para essa consolidação.

Os oito casos de João com 13 pistas foram reavaliados e classificados como insuficientes para esta entrega: não há fatos distintos adicionais sem ampliar recorte, fragmentar ou repetir. A auditoria de qualidade bloqueou Hb 11 apesar de 25 cartas, pois seus quatro campos eram perguntas independentes de uma lista, sem dente dedutivo comum. Caná, templo e Nicodemos permanecem elegíveis após releitura factual documentada.

Além do saco versionado, partidas compartilhadas agora carregam namespace, versão do catálogo e esquema; snapshots incompatíveis ou com pauta desconhecida são recusados antes de aplicar estado. Os testes percorrem todas as 51 pautas elegíveis em mesas de 2–12, duas cartas por mão, poço e revelação.

- **Inventário final deste checkpoint:** 60 pautas, 1.404 pistas; 51 elegíveis e 9 bloqueadas. Não é meta.
- **Trabalho editorial automaticamente resolvível:** nenhum restante com a evidência atual.
- **Decisões do usuário:** somente ambiguidades textuais/interpretativas listadas no relatório; nenhuma bloqueia o catálogo elegível.
- **Publicação:** não realizada; nenhuma credencial ou dado de produção foi alterado.
