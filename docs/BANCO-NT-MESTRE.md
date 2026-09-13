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

## Checkpoint 026 — decisões do usuário recebidas

As decisões sobre Mc 16.9-20, Jo 8.1-11, At 8.37, 2Jo 1, 1Pe 3.19; 4.6; 5.13, 1Jo 5.16-17, Ap 2–22 e separação documental de Atos/cartas foram registradas em `docs/DECISOES-USUARIO-AMBIGUIDADES.md`. Elas removem bloqueios de interpretação específicos, mas não aprovam automaticamente pauta, gabarito ou pista. A reavaliação textual NAA e editorial fica para o lote seguinte.

## Checkpoint 027 — reavaliação autorizada e autoria de Apocalipse

As fontes NAA identificadas de Jo 8, At 8, 1Pe 3–5, 1Jo 5, 2Jo e Ap 2–22 foram consultadas novamente. Cada recorte autorizado recebeu resultado em `docs/REAVALIACAO-RECORTES-AUTORIZADOS.md`. As decisões do usuário foram tratadas como limites editoriais, não como revisão de gabaritos ou elegibilidade automática.

Foram autoradas `nt2-apocalipse-trono-cordeiro` (Ap 4–5), `nt2-apocalipse-mulher-dragao` (Ap 12) e `nt2-apocalipse-nova-jerusalem` (Ap 21–22), todas com 25 fatos distintos e somente identificações internas. `nt2-atos-filipe-eunuco` recebeu uma pista contextual de At 8.37 com a ressalva textual NAA e sem alterar gabarito. Os demais recortes permitidos foram excluídos da autoria por motivos individualizados de capacidade ou unidade dedutiva; Mc 16.9-20, 1Pe 3.19 e 1Pe 4.6 ficaram fora conforme decisão expressa.

- **Inventário:** 63 pautas, 1.480 pistas; 54 elegíveis e 9 bloqueadas. Não é meta.
- **Auditoria:** nenhum par semântico fica sem resolução documentada; testes estruturais continuam separados da revisão bíblica/editorial do agente.
- **Pendências:** oito pautas curtas de João e Hebreus 11 continuam bloqueados por qualidade. Não surgiu nova decisão exclusiva do usuário.

## Checkpoint 028 — decisão de capacidade variável recebida

Foi registrada a autorização para liberar as oito pautas curtas de João somente em mesas compatíveis, sem acrescentar pistas. A elegibilidade editorial será separada da capacidade calculada; seleção, saco, início e retomada deverão considerar a quantidade real de participantes. Hebreus 11 permanece bloqueado editorialmente e não será alterado neste lote.

## Checkpoint 029 — capacidade aplicada ao catálogo e ao runtime

A elegibilidade editorial foi separada da capacidade operacional. Para cada pauta, `maxPlayers = min(12, floor((cartas - 1) / 2))`; `minPlayers` permanece 2. As oito pautas de João com 13 pistas estão editorialmente elegíveis e jogáveis somente de 2 a 6. As outras 54 pautas elegíveis comportam 12; Hebreus 11 continua bloqueado editorialmente, embora tenha capacidade física.

Seleção e sorteio recebem o tamanho real da mesa. O saco persistido ganhou partição por quantidade de participantes e remove IDs incompatíveis. Início local e retomada compartilhada recusam uma pauta acima de sua capacidade. A distribuição agora falha explicitamente antes de produzir mãos incompletas se não puder entregar duas cartas por pessoa e preservar ao menos uma no poço.

- **Inventário:** 63 pautas e 1.480 pistas; 62 editorialmente elegíveis/jogáveis em alguma mesa, das quais 54 chegam a 12 participantes; 1 bloqueada editorialmente.
- **Conteúdo:** nenhuma pista foi acrescentada às oito pautas curtas; decisões bíblicas anteriores foram preservadas.

## Checkpoint 030 — decisão temática recebida

Foi registrada antes da implementação a autorização para pautas de listas/conjuntos temáticos e a revogação do bloqueio por ausência de dente único. Hebreus 11 será conferido e os recortes afetados serão inventariados; a decisão não dispensa NAA consultada, coerência, C1–C4, alternativas, referências, focal, proveniência nem capacidade variável. Exclusões textuais expressas permanecem intactas.

## Checkpoint 031–032 — inventário global e lotes temáticos

Foram obtidas novamente 123 páginas NAA identificadas dos recortes afetados e cada exclusão baseada nos critérios revogados recebeu resultado em `docs/REAVALIACAO-PAUTAS-TEMATICAS.md`. Doze pautas temáticas foram autoradas no lote 031; no lote 032, 2 João recebeu pauta de nove fatos, sem transformar a interpretação comunitária em gabarito lexical. Hebreus 11 foi conferido e liberado sem importar fatos do AT.

O auditor apontou redações paralelas próprias de listas. A duplicação recíproca sobre carne/Espírito foi corrigida por um fato distinto de Gl 5.18. Qualificações paralelas de bispo/diácono e destinos distintos das taças foram mantidos com justificativas versionadas. Não há par semântico pendente.

- **Inventário:** 76 pautas, 1.645 pistas; todas editorialmente elegíveis. Cinquenta e cinco chegam a 12 participantes, vinte a 6 e uma a 4.
- **Pendências:** nenhum recorte permanece recusado apenas por ser lista, conjunto temático, perguntas independentes, falta de dente causal ou antiga meta de 25. Impedimentos restantes estão individualizados no inventário.

## Checkpoint 033 — seis exclusões genéricas corrigidas

Lc 2.41-52; At 1.15-26; 3.1-10; 6.1-7; 20.7-12; e 3Jo foram baixados com HTTP 200, relidos verso a verso na NAA e autorados com 13 fatos cada. A auditoria demonstrou que as justificativas agrupadas anteriores não eram suficientes. O arquivo `docs/AUDITORIA-INDIVIDUAL-RECORTES.md` registra campos e fatos concretos dos demais itens e reabre os que têm autoria possível.

## Checkpoint 034 — segundo lote da auditoria individual

Mt 1.18-25; 3.13-17; 4.1-11; Mc 1.16-20; 1.21-28; e 3.1-6 foram relidos na NAA e autorados com nove fatos cada, capacidade 2–4. A execução não foi encerrada após o primeiro lote. O inventário chega a 88 pautas e 1.777 pistas; 55 pautas chegam a 12 jogadores, 26 a seis e sete a quatro. Os candidatos restantes continuam explicitamente enumerados, portanto a auditoria individual não é declarada concluída.

## Checkpoint 035 — terceiro lote da auditoria individual

Após consulta NAA de Mt 15; Mc 2,6–8,12; e Lc 10,13–15,17, onze pautas foram incorporadas com sete fatos cada e capacidade 2–3. O inventário passa a 99 pautas e 1.854 pistas: 55 pautas chegam a 12 jogadores, 26 a seis, sete a quatro e onze a três. O auditor não deixou par semântico pendente. A auditoria continua porque o documento individual ainda contém candidatos explícitos.

## Checkpoint 036 — pendências finais dos Evangelhos auditadas

O trabalho partiu exatamente de `471bc4c8affd1f6657b98d5dc12a4dc6c53d5582`, com 99 pautas elegíveis e 1.854 pistas; a branch não continha avanço posterior. Em 12/09/2026, as páginas NAA identificadas de Mt 20–21,28; Mc 10–11,16; Lc 18–19,22–24; Jo 20 e At 1 foram obtidas em `bible.com/pt/bible/1840` com HTTP 200 e relidas nos recortes pertinentes. A comparação documental não importou detalhes entre relatos.

Um único lote de cinco pautas encerrou somente as pendências solicitadas dos Evangelhos: `nt2-mateus-entrada-jerusalem` (11 pistas), `nt2-mateus-mulheres-ressurreicao` (13), `nt2-marcos-bartimeu` (7), `nt2-lucas-mesa-servico-pedro` (14) e `nt2-lucas-aparicao-ascensao` (17). Em Bartimeu, apenas recuperação e seguimento, comuns a Mc 10.52, Mt 20.34 e Lc 18.43, receberam referências múltiplas; nome, filiação, capa e posição na saída de Jericó permaneceram próprios de Marcos. Mt 21 e Mt 28 mantêm a redação de Mateus; Lc 22 separa a fala ao grupo da advertência pessoal a Simão; Lc 24 não recebe detalhes dos demais finais.

- **Inventário após o lote:** 104 pautas, 1.916 pistas; todas elegíveis em alguma mesa. Cinquenta e cinco chegam a 12 jogadores; uma a oito; 28 a seis; uma a cinco; sete a quatro; e doze a três.
- **Limite desta rodada:** a auditoria de Atos, Romanos–Judas e Apocalipse permanece expressamente pendente para outra rodada. Este checkpoint não declara o banco completo.
- **Publicação:** não realizada; não houve merge, deploy nem alteração de credenciais ou Firebase.

## Checkpoint 037 — primeiro lote incremental de Atos

A PR 8 informou `a89795cebb8c179780aec8dd8f5475284ea81321` como head remoto do checkpoint 036; a árvore local disponível correspondia ao mesmo inventário preservado de 104 pautas e 1.916 pistas, embora o objeto remoto não estivesse presente no clone sem remote configurado. Antes da autoria, validação estrutural e contagem independente confirmaram os 104 IDs únicos. A comparação mecanizada após a edição confirmou que seus conteúdos permaneceram idênticos, exceto pela correção documental delimitada de Bartimeu descrita abaixo.

As páginas NAA de Atos 4, 5, 7, 9 e 12 foram obtidas em 12/09/2026 de `bible.com/pt/bible/1840`, todas com HTTP 200. Um lote de cinco pautas foi autorado: `nt2-atos-oracao-ousadia` (9 pistas), `nt2-atos-apostolos-sinedrio` (25), `nt2-atos-morte-estevao` (9), `nt2-atos-eneias-tabita` (17) e `nt2-atos-herodes-tiro-sidom` (7). Cada recorte recebeu decisão própria; a combinação temática autorizada de Eneias/Tabita mantém os dois episódios e suas cidades explicitamente separados.

A revisão solicitada de Bartimeu concluiu que cura e seguimento genéricos não demonstram por si sós identidade episódica entre Mc 10.46-52, Mt 20.29-34 e Lc 18.35-43. Por isso, `nt2-marcos-bartimeu:P07` e o hinge agora ficam exclusivamente em Marcos; a pauta não foi bloqueada nem alterada em seus demais fatos.

- **Inventário:** 109 pautas elegíveis, 1.983 pistas; 56 chegam a 12 jogadores, duas a oito, 28 a seis, uma a cinco, nove a quatro e treze a três.
- **Preservação:** os 104 IDs do checkpoint 036 mantêm ordem e conteúdo, salvo a correção explicitamente justificada de Bartimeu.
- **Pendências:** os demais recortes de Atos e os candidatos de Romanos–Judas e Apocalipse ficam para rodadas posteriores. O banco não é declarado completo.
- **Operação:** sem merge, deploy, publicação ou alteração de credenciais/Firebase.

## Checkpoint 038 — contenção do diff antes do segundo lote de Atos

A medição obrigatória foi feita antes de editar fonte, catálogo ou conteúdo bíblico. O checkpoint 037 estava limpo e confirmou 109 IDs únicos, 109 pautas elegíveis e 1.983 pistas. Embora o diff novo contra `a4acf82b488115a423f168d98bad1fc5251a4afd` fosse zero, o acumulado contra `471bc4c8affd1f6657b98d5dc12a4dc6c53d5582` já somava 10.257 inserções, 36 exclusões e 374.944 bytes em 14 arquivos, incluindo 10.167 inserções nos dois artefatos do banco.

Para não recriar o erro de tamanho, esta rodada registra somente a necessidade operacional de iniciar o próximo lote sobre uma base que já incorpore o checkpoint 037. Não houve consulta NAA nem decisão editorial sobre At 13.4-12, 14.8-20, 16.6-15, 18.1-17 ou 19.11-20; nenhuma pauta ou pista foi acrescentada. At 21/23, Romanos–Judas e Apocalipse também permanecem pendentes. Não houve merge, deploy, publicação nem alteração de credenciais/Firebase.


## Checkpoint 039 — segundo lote incremental de Atos

A base recebida no commit `a0cdf45fa67dac5b2f7ce6cd336ec39bb4fe551d` foi confirmada com **109 pautas elegíveis e 1.983 pistas**. A comparação mecanizada dos primeiros 109 objetos após a autoria retornou igualdade integral com a fonte desse commit; não houve correção retroativa nesta rodada.

Em 12/09/2026, as páginas identificadas como **Nova Almeida Atualizada** de Atos 13, 14, 16, 18 e 19 em `bible.com/pt/bible/1840` foram obtidas separadamente com HTTP 200 e os recortes autorizados foram lidos. Foram autoradas cinco pautas: At 13.4-12 (14 pistas), At 14.8-20 (16), At 16.6-15 (15), At 18.1-17 (18) e At 19.11-20 (17). Cada uma usa quatro campos independentes, alternativas distintas, gabarito explícito, focal justificado e referências específicas; nenhuma viagem foi alinhada automaticamente a uma carta.

- **Inventário:** 114 pautas elegíveis e 2.063 pistas; 56 chegam a 12 participantes, quatro a oito, duas a sete, 29 a seis, uma a cinco, nove a quatro e treze a três.
- **Auditoria:** zero duplicatas exatas e zero pares semânticos pendentes; os alertas históricos continuam cobertos por resoluções documentadas.
- **Pendências:** At 21.7-14, At 23.12-35, todos os candidatos ainda enumerados de Romanos–Judas e os de Apocalipse permanecem para rodadas posteriores. O banco **não** está completo.
- **Operação:** não houve merge, deploy, publicação nem alteração de credenciais ou Firebase.

## Checkpoint 040 — encerramento do lote pequeno de Atos

A rodada partiu do commit `4ef45e4`, confirmado com **114 pautas elegíveis e 2.063 pistas**. Em 13/09/2026, as páginas identificadas como Nova Almeida Atualizada de Atos 21 e 23 em `bible.com/pt/bible/1840` foram obtidas separadamente com HTTP 200 e os dois únicos recortes autorizados foram relidos.

At 21.7-14 originou `nt2-atos-agabo-jerusalem`, com 10 fatos próprios e capacidade de 2–4 participantes. At 23.12-35 originou `nt2-atos-conspiracao-transferencia`, com 24 fatos próprios e capacidade de 2–11. A primeira pauta não completa o sinal de Ágabo por cartas; a segunda distingue conspiração, aviso, escolta e custódia sem validar retrospectivamente cada formulação da carta de Cláudio Lísias.

- **Inventário:** 116 pautas elegíveis e 2.097 pistas; 56 chegam a 12 participantes, uma a 11, quatro a oito, duas a sete, 29 a seis, uma a cinco, dez a quatro e treze a três.
- **Preservação:** a comparação mecanizada retornou igualdade integral para os 114 objetos anteriores e suas 2.063 pistas; nenhuma correção retroativa foi necessária.
- **Diff da rodada:** duas pautas e 34 pistas novas na fonte, com regeneração do catálogo e atualização documental deste checkpoint.
- **Pendências:** os candidatos enumerados de Romanos–Judas e Apocalipse ficam para a próxima base. O banco **não** está completo.
- **Operação:** não houve merge, deploy, publicação nem alteração de credenciais ou Firebase.

## Checkpoint 041 — primeiro lote limitado de Romanos

A rodada partiu exatamente de `ee86a1912b2cbcf310f4574158e0a2dd5e4f3d1a`, com **116 pautas elegíveis e 2.097 pistas**, na branch selecionada desta sequência. Antes da edição, `validate:bank` e `audit:clues` confirmaram esses totais e nenhum par semântico pendente. As páginas identificadas como Nova Almeida Atualizada de Romanos 1, 6, 7 e 8 em `bible.com/pt/bible/1840` foram obtidas separadamente em 13/09/2026, todas com HTTP 200, e os recortes Rm 1.1-15, Rm 6, Rm 7 e Rm 8 foram lidos antes da autoria.

Foram acrescentadas quatro pautas, sem forçar uma quinta: `nt2-romanos-abertura-visita` (16 pistas), `nt2-romanos-pecado-graca-servico` (18), `nt2-romanos-lei-pecado-conflito` (18) e `nt2-romanos-espirito-adocao-esperanca` (25). Rm 6, 7 e 8 permanecem como argumentos separados. Perguntas, campos e pistas atribuem as afirmações ao texto, e as alternativas incorretas não são apresentadas como doutrina. Nenhum fato do Antigo Testamento, carta, viagem ou cronologia externa foi importado.

- **Inventário:** 120 pautas elegíveis e 2.174 pistas; 57 chegam a 12 participantes, uma a 11, seis a oito, três a sete, 29 a seis, uma a cinco, dez a quatro e treze a três.
- **Preservação:** comparação mecanizada confirmou igualdade integral dos 116 objetos anteriores e de suas 2.097 pistas.
- **Auditoria:** zero duplicatas exatas e zero pares semânticos sem resolução; a consulta bíblica foi uma etapa distinta da validação e dos testes.
- **Pendências:** Rm 12–15, os demais candidatos de 1–2 Coríntios e das outras cartas, e Apocalipse permanecem para lotes posteriores. O banco **não** está completo.
- **Operação:** não houve merge, deploy, publicação nem alteração de credenciais/Firebase.

## Checkpoint 042 — segundo lote limitado de Romanos

A rodada continuou exatamente de `7e11cd28abb57e50575f5409e99a60bc4bb4ef47`, com **120 pautas elegíveis e 2.174 pistas**. Antes da edição, validação, auditoria e contagem independente confirmaram a base. Em 13/09/2026, as páginas identificadas como Nova Almeida Atualizada de Romanos 12, 13, 14 e 15 em `bible.com/pt/bible/1840` foram obtidas separadamente, todas com HTTP 200; a leitura bíblica de Rm 12, Rm 13, Rm 14 e Rm 15.1-13 ocorreu antes e separadamente dos testes.

O lote acrescentou exatamente quatro pautas: `nt2-romanos-corpo-dons-conduta` (21 pistas), `nt2-romanos-autoridades-amor-vigilancia` (18), `nt2-romanos-acolhimento-consciencia-paz` (23) e `nt2-romanos-fortes-acolhimento-esperanca` (14). As perguntas são atributivas ao texto, listas e exortações permanecem itens independentes, e nenhuma alternativa incorreta é afirmada como tese. As citações de Rm 12–15 foram tratadas apenas como afirmações presentes em Romanos, sem completar fatos pelo Antigo Testamento.

- **Inventário:** 124 pautas elegíveis e 2.250 pistas; 57 chegam a 12 participantes, duas a 11, uma a dez, sete a oito, três a sete, 30 a seis, uma a cinco, dez a quatro e treze a três.
- **Preservação:** comparação mecanizada confirmou igualdade integral dos 120 objetos e das 2.174 pistas anteriores; nenhum ID ou estado de revisão preexistente mudou.
- **Diff da rodada:** quatro pautas e 76 pistas novas na fonte, catálogo regenerado, testes de inventário/capacidade e registros documentais deste checkpoint.
- **Auditoria:** zero duplicatas exatas e zero pares semânticos sem resolução.
- **Pendências:** Coríntios, as demais cartas e Apocalipse ficam para a próxima base. O banco **não** está completo.
- **Operação:** não houve uso da `main`, merge, deploy, publicação nem alteração de Firebase ou credenciais.

## Checkpoint 043 — lote limitado a 1 Coríntios 1, 8, 9 e 10

Em 13/09/2026, as páginas de 1 Coríntios 1, 8, 9 e 10 identificadas como NAA em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da autoria. O lote acrescentou quatro pautas, sem forçar uma quinta: abertura/divisões/batismos (16 pistas), conhecimento/liberdade/consciência (13), direitos/adaptação/corrida (21) e exemplos/mesa/glória (23).

As perguntas atribuem cada afirmação à carta. As alusões de 1Co 9–10 permanecem somente como afirmações desses capítulos, sem completar narrativas pelo Antigo Testamento; os capítulos não foram fundidos nem alinhados a cronologias externas. O inventário passa de **124 pautas e 2.250 pistas** para **128 pautas e 2.323 pistas**. 1Co 11, 13 e 14, 2 Coríntios e os demais recortes pendentes ficam para lotes posteriores; o banco não é declarado completo.

## Checkpoint 044 — 1 Coríntios 11, 13 e 14

Em 13/09/2026, as páginas NAA identificadas de 1 Coríntios 11, 13 e 14 em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da autoria. O lote não forçou quatro pautas: produziu três — ceia/reunião/exame em 11.17-34 (18 pistas), características e permanência do amor em 13 (18) e profecia/línguas/ordem em 14.1-33,37-40 (22).

1Co 11.2-16 foi isolado porque transformar cobertura, cabelo, autoridade, anjos e costume em alternativas exigiria interpretações não aprovadas. Do mesmo modo, 1Co 14.34-36 não determina pistas ou gabaritos sobre fala, silêncio e submissão. As partes independentes continuaram atributivamente, sem completar 14.21 pelo Antigo Testamento. O inventário passa de **128 pautas e 2.323 pistas** para **131 pautas e 2.381 pistas**. 2 Coríntios, as demais cartas e Apocalipse permanecem para nova base; o banco não é declarado completo.

## Checkpoint 045 — lote limitado de 2 Coríntios

A base `75f52929d25930ead6507a260a6e105521a635e0` foi confirmada limpa com 131 pautas e 2.381 pistas. As páginas NAA de 2Co 7, 10 e 13 foram obtidas separadamente com HTTP 200 em 13/09/2026 e lidas antes da autoria. Os três recortes sustentaram pautas independentes, sem forçar quantidade adicional: 16 pistas em 2Co 7.2-16 e 18 em cada um de 2Co 10 e 13.

- **Inventário:** 134 pautas elegíveis, 536 campos e 2.433 pistas; 57 comportam até 12 participantes, três até 11, três até 10, onze até 8, cinco até 7, 31 até 6, uma até 5, dez até 4 e treze até 3.
- **Preservação:** os 131 objetos anteriores permanecem idênticos; nenhuma correção retroativa foi necessária.
- **Delimitação:** nenhuma carta, visita ou viagem foi harmonizada, e nenhuma alusão foi completada pelo AT.
- **Pendências:** as demais cartas e Apocalipse continuam para rodadas posteriores; o banco não está completo. As dúvidas de 1Co 11.2-16 e 14.34-36 permanecem isoladas.

## Checkpoint 046 — lote limitado a Gl 6 e Ef 1–3

A base `884606496aeb54a9c0f71de5172445f286a4b7a0` foi confirmada limpa com 134 pautas e 2.433 pistas. Somente Gl 6 e Ef 1, 2 e 3 foram obtidos separadamente da NAA identificada em `bible.com/pt/bible/1840`, todos com HTTP 200 em 13/09/2026, e lidos antes da autoria. Os quatro recortes sustentaram quatro pautas, sem exceder nem usar o limite como meta.

- **Inventário:** 138 pautas elegíveis, 552 campos e 2.514 pistas; 57 comportam até 12 participantes, três até 11, cinco até 10, uma até 9, doze até 8, cinco até 7, 31 até 6, uma até 5, dez até 4 e treze até 3.
- **Preservação:** os 134 objetos anteriores permanecem idênticos; nenhuma correção retroativa foi necessária.
- **Delimitação:** capítulos separados, perguntas atributivas e nenhuma tese, alusão, viagem ou carta completada por fonte externa.
- **Pendências:** Ef 4–5, Colossenses, Tessalonicenses, pastorais, cartas gerais e Apocalipse continuam para próximas bases; o banco não está completo. As dúvidas de 1Co 11.2-16 e 14.34-36 permanecem isoladas.

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

## Checkpoint 051 — Hebreus 13.1-19 e Tiago 1, 2 e 5.1-12

A base `869fd005716a37812e95001ee02e9a7a55eb5ed3` foi confirmada com **156 pautas, 624 campos e 2.804 pistas**. Em 13/09/2026, exclusivamente as páginas identificadas como Nova Almeida Atualizada de Hebreus 13 e Tiago 1, 2 e 5 em `bible.com/pt/bible/1840` foram obtidas separadamente com HTTP 200. A leitura e autoria ficaram limitadas a Hb 13.1-19, Tg 1, Tg 2 e Tg 5.1-12.

Foram acrescentadas quatro pautas e 95 pistas: Hb 13.1-19 com 23, Tg 1 com 25, Tg 2 com 24 e Tg 5.1-12 com 23. Listas e perguntas independentes foram mantidas como afirmações atributivas. Abraão, Raabe e Jó aparecem somente conforme Tiago os menciona; nenhum detalhe foi completado pelo Antigo Testamento.

- **Inventário:** 160 pautas elegíveis, 640 campos e 2.899 pistas; 58 comportam até 12 participantes, seis até 11, seis até 10, seis até 9, quinze até 8, nove até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3.
- **Preservação:** a comparação mecanizada confirmou igualdade integral dos 156 objetos e das 2.804 pistas anteriores.
- **Contrato:** C1–C4, alternativas distintas, gabaritos, focal justificado, metadados, revelação e pontuação 8/5/3/2 foram preservados; a capacidade segue `min(12, floor((cartas-1)/2))`.
- **Pendências:** 1–2 Pedro, 1–3 João, Judas, Apocalipse e a auditoria global de cobertura ficam para etapas posteriores; o banco **não** está completo. As decisões e dúvidas vigentes permanecem inalteradas.

## Checkpoint 052 — 1 Pedro 1, 2 e 3.1-17

A rodada continuou de `529b518`, com **160 pautas, 640 campos e 2.899 pistas**. Em 13/09/2026, exclusivamente as páginas de 1 Pedro 1, 2 e 3 identificadas como Nova Almeida Atualizada em `bible.com/pt/bible/1840` foram obtidas separadamente com HTTP 200 e lidas antes da autoria.

Três blocos coerentes sustentaram três pautas, sem forçar a quarta permitida: 1Pe 1 com 27 pistas, 1Pe 2 com 27 e 1Pe 3.1-17 com 26. O último bloco termina estritamente em 3.17: 1Pe 3.19 e os espíritos em prisão não determinam pergunta, campo, alternativa, gabarito ou pista.

- **Inventário:** 163 pautas elegíveis, 652 campos e 2.979 pistas; 61 comportam até 12 participantes, seis até 11, seis até 10, seis até 9, quinze até 8, nove até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3.
- **Preservação:** comparação mecanizada confirmou igualdade integral dos 160 objetos e das 2.899 pistas anteriores.
- **Pendências:** 1Pe 4–5, 2Pe, João, Judas, Apocalipse e a auditoria global de cobertura ficam para nova base; o banco **não** está completo. 1Pe 4.6 continua fora e 1Pe 5.13 conserva a interpretação comunitária aprovada, sem geografia.


## Checkpoint 053 — lote exclusivo de 1 Pedro 4, sem 4.6

A base `bb0ea83c769951eaebf11efb505f3c2e93e4969d` foi confirmada com **163 pautas, 652 campos e 2.979 pistas**. Em 13/09/2026, exclusivamente a página de 1Pe 4 identificada como Nova Almeida Atualizada em `bible.com/pt/bible/1840` foi obtida com HTTP 200 e lida antes da autoria.

Foram acrescentadas três pautas e 50 pistas: 1Pe 4.1-5 com 15, 1Pe 4.7-11 com 16 e 1Pe 4.12-19 com 19. A questão de 4.6 foi integralmente excluída. O inventário passa a **166 pautas elegíveis, 664 campos e 3.029 pistas**; 61 comportam até 12 participantes, seis até 11, seis até 10, sete até 9, quinze até 8, onze até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3.

- **Preservação:** os 163 objetos e as 2.979 pistas anteriores permaneceram mecanicamente idênticos.
- **Contrato:** as pautas mantêm C1–C4, alternativas e gabaritos explícitos, focal justificado, metadados, revelação e pontuação 8/5/3/2; a capacidade segue `min(12, floor((cartas-1)/2))`.
- **Pendências:** 1Pe 5, 2Pe, João, Judas, Apocalipse e a auditoria global continuam para outras bases; o banco **não** está completo. A decisão comunitária de 1Pe 5.13 permanece sem geografia nem alegação lexical.


## Checkpoint 054 — somente 1 Pedro 5 e 2 Pedro 1.1-15

A rodada partiu do commit `5a396d51efaf31aead8a73853b0ddc311c975b93`, com **166 pautas, 664 campos e 3.029 pistas**. Em 13/09/2026, exclusivamente as páginas de 1Pe 5 e 2Pe 1 identificadas como Nova Almeida Atualizada em `bible.com/pt/bible/1840` foram obtidas separadamente com HTTP 200. A leitura e autoria limitaram-se a 1Pe 5 e 2Pe 1.1-15.

Duas pautas foram acrescentadas, sem forçar a terceira permitida: `nt2-1pedro-pastoreio-humildade-firmeza-saudacoes`, com 32 pistas, e `nt2-2pedro-fe-virtudes-memoria`, com 29. O inventário passa a **168 pautas elegíveis, 672 campos e 3.090 pistas**; 63 comportam até 12 participantes, seis até 11, seis até 10, sete até 9, quinze até 8, onze até 7, 33 até 6, uma até 5, doze até 4 e quatorze até 3.

- **Preservação:** os 166 objetos e as 3.029 pistas anteriores permaneceram mecanicamente idênticos.
- **Delimitação:** 1Pe 5.13 usa a interpretação aprovada de Igreja/comunidade cristã sem inferência geográfica e sem dizer que Babilônia significa lexicalmente Igreja; 2Pe termina em 1.15. As exclusões de 1Pe 3.19 e 4.6 permanecem.
- **Contrato:** C1–C4, quatro alternativas, gabaritos, focal, metadados, revelação, 8/5/3/2 e capacidade derivada foram preservados.
- **Pendências:** João, Judas, Apocalipse e a auditoria global seguem para etapas posteriores; o banco **não** está completo.

## Checkpoint 055 — lote exclusivo de 1 João 1–3

A continuidade partiu de `6e8e2a3cb0240532b947c25cf4e0374cd3c24d21`, com **168 pautas, 672 campos e 3.090 pistas**. Em 13/09/2026, exclusivamente as páginas de 1Jo 1, 1Jo 2 e 1Jo 3 identificadas como Nova Almeida Atualizada em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da autoria.

Quatro blocos coerentes foram incorporados, sem forçar uma quinta pauta: 1Jo 1 (22 pistas), 1Jo 2.1-17 (25), 1Jo 2.18-29 (25) e 1Jo 3 (28). O catálogo chega a **172 pautas, 688 campos e 3.190 pistas**. A comparação mecanizada confirmou que os 168 objetos e as 3.090 pistas anteriores permaneceram integralmente idênticos.

As perguntas e pistas atribuem as afirmações à carta. Em 1Jo 2.18-29, “anticristo” foi delimitado somente pelas descrições internas do recorte; nenhuma pessoa, instituição, época ou identidade externa foi acrescentada. Não surgiram ambiguidades bíblicas reais neste lote. Os dois novos pares lexicais apontados pelo auditor foram mantidos com resolução individual: 1Jo 1.8/1.10 distingue duas alegações e duas consequências; 1Jo 2.23 preserva os lados opostos do contraste entre negar e confessar o Filho.

A capacidade continua derivada por `min(12, floor((cartas - 1) / 2))`, com duas cartas por participante e ao menos uma no poço. **1Jo 4–5, os demais recortes de João, Judas, Apocalipse e a auditoria global permanecem para lotes posteriores; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 056 — lote exclusivo de 1 João 4–5

A rodada continuou do commit `dd88ebe`, com **172 pautas, 688 campos e 3.190 pistas**. Antes da edição, a regeneração do catálogo foi comparada byte a byte com `cases-nt.js` e resultou idêntica; os hashes SHA-256 da base foram registrados durante a execução. Em 13/09/2026, exclusivamente as páginas de 1Jo 4 e 1Jo 5 identificadas como Nova Almeida Atualizada em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da autoria.

Quatro blocos coerentes foram incorporados: 1Jo 4.1-6 (19 pistas), 1Jo 4.7-21 (26), 1Jo 5.1-12 (22) e 1Jo 5.13-21 (21). O catálogo passa a **176 pautas, 704 campos e 3.278 pistas**. A comparação serializada confirmou que os 172 objetos e as 3.190 pistas anteriores permaneceram integralmente idênticos.

As perguntas e pistas são atributivas. Espíritos, falsos profetas e espírito do anticristo ficaram limitados às descrições internas de 1Jo 4, sem identidades externas ou harmonização. Em 1Jo 5.16-17 foram mantidas somente as afirmações de que há pecado que leva à morte, há pecado que não leva à morte e toda injustiça é pecado; nenhuma identidade foi atribuída ao pecado que leva à morte.

A capacidade permanece `min(12, floor((cartas - 1) / 2))`, com duas cartas por participante e ao menos uma no poço. **Os demais recortes de João, Judas, Apocalipse e a auditoria global permanecem para uma nova base; o banco não está completo.** Não houve uso da `main`, merge, deploy ou publicação.

## Checkpoint 057 — fechamento de 2–3 João e autoria de Judas

A base `8200c202dfdea872e38e85561db3dafe627a2dc0` foi confirmada com **176 pautas e 3.278 pistas**. Em 13/09/2026, as páginas de 2 João, 3 João e Judas identificadas como NAA em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da decisão editorial. A comparação de cobertura encerrou 2 João e 3 João sem nova pauta: os fatos aproveitáveis já constavam de seus objetos existentes, que não foram duplicados.

Judas sustentou três blocos: 1-7 com 18 pistas, 8-16 com 20 e 17-25 com 20. O catálogo passa a **179 pautas, 716 campos e 3.336 pistas**. As 176 pautas e 3.278 pistas anteriores permanecem serializadamente idênticas. As novas pautas mantêm C1–C4, quatro alternativas, gabaritos, focal justificado, metadados, revelação e 8/5/3/2; as capacidades são 8, 9 e 9, derivadas por `min(12, floor((cartas - 1) / 2))`.

Em 2 João, a senhora eleita conserva a interpretação aprovada de Igreja/comunidade cristã sem ser apresentada como identidade textual explícita ou necessariamente local. Em Judas, nenhuma nota ou fonte externa completa Moisés, Miguel, Enoque, alusões ou identidades atuais. **Apocalipse e a auditoria global dos 27 livros ficam para depois; o banco não está completo.** Não houve main, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 058 — cartas de Apocalipse 2

A rodada partiu de `3b4c52f`, com **179 pautas e 3.336 pistas**. Em 13/09/2026, a página de Apocalipse 2 identificada como NAA em `bible.com/pt/bible/1840` foi obtida com HTTP 200 e as cartas a Éfeso, Esmirna, Pérgamo e Tiatira foram lidas e comparadas individualmente com os casos existentes. Nenhum recorte anterior foi duplicado.

As quatro cartas sustentaram quatro pautas, sem ampliar o lote: 18, 14, 18 e 22 pistas, respectivamente. O inventário passa a **183 pautas, 732 campos e 3.408 pistas**. Os 179 objetos e as 3.336 pistas anteriores permanecem serializadamente idênticos. Todas as novas pautas têm C1–C4, quatro alternativas, gabaritos, foco justificado, metadados, revelação, pontuação 8/5/3/2 e capacidades derivadas de 8, 6, 8 e 10.

Perguntas e paráfrases são atributivas. Jezabel e nicolaítas ficam limitados às apresentações internas de Ap 2, sem identidades históricas ou atuais, calendários, igrejas atuais ou alegorias acrescentadas. **Apocalipse 3, os demais recortes de Apocalipse e a auditoria global dos 27 livros ficam para nova base; o banco não está completo.** Não houve main, merge, deploy ou publicação.

## Checkpoint 059 — três cartas de Apocalipse 3

A rodada continuou exatamente do commit `9109cb9f58b4e9ce95b8bc959a3a6f8ed660a364`, com **183 pautas, 732 campos e 3.408 pistas**. A página identificada como Nova Almeida Atualizada de Apocalipse 3 em `bible.com/pt/bible/1840` foi obtida com HTTP 200 em 13/09/2026. A leitura, comparação e decisão editorial ficaram limitadas às cartas a Sardes (3.1-6), Filadélfia (3.7-13) e Laodiceia (3.14-22).

Foram acrescentadas exatamente três pautas e 58 pistas: Sardes com 18, Filadélfia com 20 e Laodiceia com 20. O inventário passa a **186 pautas, 744 campos e 3.466 pistas**. Os 183 objetos e as 3.408 pistas anteriores permaneceram integralmente idênticos. Cada nova pauta tem C1–C4, quatro alternativas distintas, gabaritos explícitos, foco justificado, metadados completos, revelação e pontuação gerada 8/5/3/2; suas capacidades são, respectivamente, 2–8, 2–9 e 2–9, pela fórmula `min(12, floor((cartas - 1) / 2))`.

Descrições, avaliações, ordens, advertências, conselhos e promessas foram mantidos como afirmações internas e atributivas. Não foram acrescentadas identidades históricas, igrejas atuais, calendários, localizações presentes ou alegorias. A repetição da fórmula final entre as cartas foi mantida e documentada como conclusão explícita de recortes e destinatários distintos; a auditoria não deixou pares pendentes. Não surgiu ambiguidade real nova para o usuário.

**Os demais recortes de Apocalipse e a auditoria global dos 27 livros permanecem para etapas posteriores; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 060 — auditoria/autoria limitada a Apocalipse 4–7

A rodada partiu de `29b75ec`, com **186 pautas, 744 campos e 3.466 pistas**. As páginas identificadas como NAA de Ap 4, 5, 6 e 7 em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 em 13/09/2026 e lidas antes da comparação editorial.

Ap 4–5 foi fechado como já coberto por `nt2-apocalipse-trono-cordeiro` (25 pistas) e Ap 6 como já coberto por `nt2-apocalipse-selos` (13 pistas); não foram duplicados trono, Cordeiro, livro, selos ou cavaleiros. Ap 7 sustentou somente duas novas pautas: servos marcados e tribos em 7.1-8 (16 pistas, capacidade 2–7) e grande multidão em 7.9-17 (20 pistas, capacidade 2–9). O inventário passa a **188 pautas, 752 campos e 3.502 pistas**.

Os 186 objetos e as 3.466 pistas anteriores permaneceram integralmente idênticos. C1–C4, quatro alternativas, gabaritos, foco justificado, 8/5/3/2, metadados, revelação, duas cartas por jogador e poço foram preservados. A lista de tribos gerou somente repetições estruturais resolvidas e fundamentadas; não restaram pares pendentes. O número de cento e quarenta e quatro mil e a grande multidão são descrições internas: não se decide literalidade, identidade externa ou equivalência entre grupos e não se harmoniza Ap 7 com Ap 14.

**Ap 8–22 permanecem especificamente pendentes, ressalvados os recortes já autorados de Ap 12, 13, 16, 20 e 21–22; a auditoria global dos 27 livros continua posterior e o banco não está completo.** Não houve `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 061 — lote limitado a Apocalipse 8–10

A rodada partiu exatamente de `3a3fbcd21499319cf42cc3ed61e7316844a773d0`, com **188 pautas, 752 campos e 3.502 pistas**. Em 13/09/2026, exclusivamente as páginas de Ap 8, 9 e 10 identificadas como NAA em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da autoria. A comparação confirmou que nenhum dos 188 objetos anteriores cobria esses capítulos.

Foram incorporadas quatro pautas e 96 pistas: Ap 8.1-13 (25), Ap 9.1-12 (24), Ap 9.13-21 (22) e Ap 10.1-11 (25). O catálogo passa a **192 pautas, 768 campos e 3.598 pistas**. Os quatro blocos preservam C1–C4, quatro alternativas, gabaritos explícitos, foco, 8/5/3/2, metadados e revelação; a capacidade continua `min(12, floor((cartas - 1) / 2))`, com duas cartas por jogador e ao menos uma no poço. Os 188 objetos e as 3.502 pistas anteriores permaneceram mecanicamente inalterados.

Trombetas, anjos, estrela, abismo, gafanhotos, cavalaria, trovões e livrinho foram mantidos somente como descrições, ações, comparações, identificações e sequências internas. Não foi criada identidade histórica, tecnologia moderna, alegoria ou calendário, e o conteúdo selado dos trovões não foi preenchido. Não surgiu ambiguidade real nova. **Ap 11–22 permanece para as próximas bases, incluindo auditoria das pautas existentes de Ap 12, 13, 16, 20 e 21–22; a auditoria global dos 27 livros fica para depois e o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 062 — Apocalipse 11 e auditoria de 12–13

A rodada partiu de `b40222e`, com **192 pautas, 768 campos e 3.598 pistas**. Em 13/09/2026, exclusivamente as páginas NAA de Ap 11, 12 e 13 em `bible.com/pt/bible/1840` retornaram HTTP 200 e foram lidas integralmente. A comparação confirmou a ausência de pauta para Ap 11 e a cobertura já existente e suficiente de Ap 12 e 13; `nt2-apocalipse-mulher-dragao` e `nt2-apocalipse-duas-bestas` permaneceram integralmente inalteradas, sem duplicação.

Ap 11 originou somente duas pautas, sem forçar uma terceira: 11.1-14, com 30 pistas, e 11.15-19, com 18. O inventário passa a **194 pautas, 776 campos e 3.646 pistas**. C1–C4, quatro alternativas, gabaritos, foco, pontuação 8/5/3/2, metadados, revelação e capacidade `min(12, floor((cartas - 1) / 2))` foram preservados. A comparação mecanizada confirmou os 192 objetos e as 3.598 pistas anteriores integralmente idênticos.

As duas testemunhas não receberam nomes ou identidades externas. A mulher, o dragão, as bestas, a marca e o 666 permanecem somente nas descrições e identificações internas de Ap 12–13, sem instituições atuais, calendários ou interpretações externas. Não surgiu ambiguidade real nova. **Ap 14–22 e a auditoria global dos 27 livros ficam para nova base; o banco não está completo.** Não houve uso da `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 063 — lote exclusivo de Apocalipse 14–15 e auditoria de 16

A rodada partiu de `ea71f1b65fcd6ac836314ea7f9709323efff2b38`, com **194 pautas, 776 campos e 3.646 pistas**. Em 13/09/2026, exclusivamente as páginas de Ap 14, 15 e 16 identificadas como NAA em `bible.com/pt/bible/1840` foram obtidas individualmente com HTTP 200 e lidas antes da decisão editorial.

Foram acrescentadas quatro pautas e 93 pistas: Ap 14.1-5 (19), Ap 14.6-13 (25), Ap 14.14-20 (24) e Ap 15.1-8 (25). O catálogo passa a **198 pautas, 792 campos e 3.739 pistas**. A pauta existente `nt2-apocalipse-tacas` encerra Ap 16 com fundamentação e permaneceu integralmente inalterada. A comparação serializada confirmou a preservação dos 194 objetos e das 3.646 pistas anteriores.

Cento e quarenta e quatro mil, Cordeiro, cântico, anjos, ceifa, lagar, flagelos e taças permanecem descrições, falas, ações ou identificações internas. Não se decidiu literalidade do número, não se harmonizou Ap 14 com Ap 7 e não se acrescentaram identidades externas, calendários ou alegorias. C1–C4, quatro alternativas, gabaritos, foco, 8/5/3/2, metadados, revelação e capacidade `min(12, floor((cartas-1)/2))` foram preservados. Não surgiu ambiguidade real nova. **Ap 17–22 e a auditoria global dos 27 livros ficam para depois; o banco não está completo.** Não houve `main`, merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 064 — lote exclusivo de Apocalipse 17–18

A rodada partiu de `2a5fbcd`, com **198 pautas, 792 campos e 3.739 pistas**. Em 13/09/2026, exclusivamente as páginas NAA de Ap 17 e 18 em `bible.com/pt/bible/1840` foram obtidas com HTTP 200 e lidas integralmente. A comparação não encontrou pauta anterior para esses capítulos.

Foram acrescentadas três pautas e 80 pistas: Ap 17.1-18 (34), Ap 18.1-8 (25), Ap 18.9-20 (28) e Ap 18.21-24 (18). O catálogo passa a **202 pautas, 808 campos e 3.844 pistas**. Os 198 objetos e as 3.739 pistas anteriores permaneceram serializadamente idênticos. Mulher, Babilônia, besta, reis, mercadores e lamentos ficaram limitados às descrições, ações, falas e identificações internas; nenhuma identidade histórica externa, instituição atual, geografia atual, calendário ou alegoria foi acrescentada.

C1–C4, quatro alternativas, gabaritos, foco, 8/5/3/2, metadados, revelação e capacidade `min(12, floor((cartas-1)/2))` foram preservados. Quatro pares de auditoria receberam fundamentação individual e não restou pendência; não surgiu ambiguidade real nova. **Ap 19–22 e a auditoria global dos 27 livros ficam para nova base; o banco não está completo.** Não houve `main`, merge, deploy ou publicação.

## Checkpoint 065 — Apocalipse 19 e auditoria das pautas de 20–22

A consulta efetiva das páginas NAA de Ap 19–22 e a comparação com os 202 objetos anteriores sustentaram duas pautas novas, sem forçar quantidade: bodas/louvor (Ap 19.1-10, 29 pistas) e cavaleiro/derrota da besta (Ap 19.11-21, 32 pistas). O catálogo passa a **204 pautas, 816 campos e 3.905 pistas**; os 202 objetos anteriores permaneceram serializadamente idênticos. A auditoria confirmou as pautas existentes de Ap 20.1-15 e Ap 21.1–22.5 sem alteração. Corrigiu-se apenas a descrição documental de cobertura: `nt2-apocalipse-nova-jerusalem` não alcança Ap 22.6-21, que permanece não autorado para verificação na auditoria global. Cenas e identificações ficaram internas, sem identidades históricas externas, geografia atual, calendários ou alegorias. A auditoria global dos 27 livros continua obrigatória e o banco não está completo.

## Checkpoint 066 — encerramento de Apocalipse e auditoria global documental

Ap 22.6-21 foi novamente consultado na página NAA identificada e originou uma pauta de 32 pistas, levando o catálogo a **205 pautas, 820 campos e 3.937 pistas**. Os 204 objetos anteriores permaneceram serializadamente idênticos. Ordens, convites, advertências e testemunho final mantêm atribuição textual; expressões de proximidade não receberam calendário ou interpretação externa.

A auditoria global cruzou as 27 fichas, a cobertura, a auditoria individual e o banco real. `docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md` registra por livro as lacunas, evidências, estados e próximos lotes. Estados antigos de “analisado” não foram aceitos como prova de exaustividade quando dependiam de 25 cartas, unidade narrativa, veto a listas/temas ou decisões agregadas por capítulos. As dúvidas de 1Co 11.2-16 e 14.34-36 permanecem separadas do trabalho independente. O banco não está completo: as linhas pendentes exigem novas consultas NAA por recorte.

## Checkpoint 067 — primeiro lote sequencial da reauditoria de Mateus 5–7

Partindo do head informado da PR 22 (`b28873f568eb226c321e06f7faea11d7d16e9ac0`) e do inventário preservado de 205 pautas/3.937 pistas, somente Mateus 5–7 foi trabalhado. Em 13/09/2026, as páginas NAA Bible.com 1840 de MAT.5, MAT.6 e MAT.7 foram obtidas separadamente com HTTP 200 e efetivamente lidas verso a verso. A busca dos IDs e referências existentes não encontrou pauta geral em Mt 5–7. A ficha de Mateus agora registra decisão individual para cada unidade editorial identificada, inclusive as não usadas.

Foram anexadas quatro pautas sustentadas, sem meta de quantidade: `nt2-mateus-bem-aventurancas` (16 pistas), `nt2-mateus-ensinos-contrastes` (22), `nt2-mateus-praticas-secreto` (22) e `nt2-mateus-escolhas-alertas` (25). Suas capacidades são, respectivamente, 7, 10, 10 e 12 pela fórmula vigente. Os campos C1–C4 têm quatro alternativas e gabaritos referenciados; o focal é justificado e pontuado operacionalmente em 8/5/3/2. Ensino, imagens e listas permanecem atribuídos a Mateus, sem harmonização ou interpretação externa.

- **Comparação antes/depois:** 205/3.937 → 209/4.022; os 205 objetos anteriores permaneceram na mesma ordem e serializaram identicamente, enquanto quatro objetos foram apenas anexados.
- **Limite:** Mt 5–7 **não está fechado**. A ficha lista como próximo lote Mt 5.13-20, 5.27-32, 6.19-34 e as porções remanescentes de Mt 7, com motivo individual. Nenhum outro livro foi consultado ou alterado.
- **Decisões preservadas:** 1Co 11.2-16 e 14.34-36 continuam dúvidas do usuário; exclusões definitivas e isolamento de versões/partidas permanecem intactos. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 068 — conclusão documental dos remanescentes de Mateus 5–7

Sobre o checkpoint 067 (`fe765b4`), somente os remanescentes já individualizados de Mt 5–7 foram trabalhados. As três páginas NAA Bible.com 1840 retornaram HTTP 200 e os recortes foram relidos; a comparação abrangeu os 209 objetos e, particularmente, as quatro pautas anteriores, evitando repetir perguntas ou fatos. Quatro pautas foram anexadas: sal/luz/Lei (19 pistas), olhar/tropeço/divórcio (13), tesouros/olhos/senhores/preocupações (29) e julgamento/regra/alegações/reação (21), com capacidades 9, 6, 12 e 10.

- **Antes/depois:** 209 pautas/4.022 pistas → 213/4.104; os 209 objetos anteriores permaneceram na mesma ordem e serializaram identicamente.
- **Cobertura:** todas as porções que permaneciam expressamente não representadas no inventário de Mt 5–7 receberam decisão e cobertura neste lote. Mt 5–7 encerra documentalmente esta sequência; a próxima faixa pendente de Mateus no inventário global é Mt 10–13.
- **Limites preservados:** encerramento documental não significa exaustividade futura nem banco completo. Nenhum outro livro foi aberto. As dúvidas de 1Co 11.2-16 e 14.34-36, exclusões definitivas, sorteio, capacidade, isolamento de versões/partidas, Firebase e credenciais não foram alterados; não houve merge, deploy ou publicação.

## Checkpoint 069 — Mateus 10–11

Somente Mateus 10 e 11 foram trabalhados sobre o checkpoint 068. As duas páginas NAA Bible.com 1840 retornaram HTTP 200, foram lidas verso a verso e tiveram cada unidade inventariada. A comparação prévia com os 213 objetos/4.104 pistas não encontrou referência geral anterior aos capítulos nem ID/pergunta equivalente. As antigas exclusões agregadas por discurso, ensino ou 25 cartas foram reavaliadas segundo perguntas atributivas, listas coerentes e capacidade variável.

Três pautas sustentadas foram anexadas: Mt 10.16-42 (30 pistas), Mt 11.1-19 (25) e Mt 11.20-30 (25). Mt 10.1-15 foi deixado sem nova autoria diante de `nt2-marcos-envio-doze`; a comparação detalhada dos fatos exclusivos, registrada no checkpoint 070, reabre uma pendência específica. Todas têm quatro campos, quatro alternativas por campo, gabaritos e proveniência NAA; focal explícito e ordem 8/5/3/2; metadados completos; revelação sem transformar hipóteses, acusações ou imagens em fatos externos. As 80 pistas permitem capacidade 12 pela fórmula vigente, sem que 12 ou 25 tenham sido usados como meta.

- **Antes/depois:** 213 pautas/4.104 pistas → 216/4.184; os 213 objetos anteriores permaneceram na mesma ordem e serializaram identicamente.
- **Limite:** Mt 10–11 recebeu decisão inicial para cada unidade inventariada, mas Mt 10.1-15 é reaberto no checkpoint 070 e Mt 10–13 não está completo. Mt 12–13 é o próximo recorte; Mt 18–20 e 21–25 continuam posteriores.
- **Preservação:** dúvidas de 1Co 11.2-16 e 14.34-36, exclusões definitivas, isolamento, sorteio e partidas não foram alterados. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 070 — Mateus 12–13

Somente as páginas NAA Bible.com 1840 de Mateus 12 e 13 foram abertas para nova autoria. Ambas retornaram HTTP 200, foram lidas verso a verso e tiveram as unidades inventariadas. Quatro pautas sustentadas adicionaram 124 pistas: Mt 12.1-8,15-21 (24), Mt 12.22-50 (35), Mt 13.1-23 (27) e Mt 13.24-50 (38). Capacidade deriva de `min(12, floor((pistas-1)/2))`: respectivamente 11, 12, 12 e 12, sem usar 25 pistas ou 12 pessoas como piso/meta.

Mt 12.9-14 foi comparado com a pauta existente da mão ressequida em Marcos; o núcleo paralelo não foi duplicado, e fatos exclusivos de Mateus ficaram pendentes. Mt 13.51-52 e 13.53-58 foram lidos e permanecem como recortes específicos para lote posterior. A verificação documental adicional de Mt 10.1-15 confirmou que Marcos cobre o núcleo do envio, mas não nomes/relações, destino próprio de Mateus, formulação do anúncio, ordens adicionais, metais, saudação/paz e comparação de juízo; por isso Mt 10.1-15 fica pendente, sem autoria ou harmonização neste lote.

- **Antes/depois:** 216 pautas/4.184 pistas → 220/4.308; os 216 objetos anteriores permaneceram na mesma ordem e serializaram identicamente.
- **Limite:** Mt 12–13 não foi chamado completo; restam Mt 12.9-14 (exclusivos) e Mt 13.51-58. A próxima faixa não inventariada é Mt 18–20.
- **Preservação:** dúvidas de 1Co 11.2-16 e 14.34-36, exclusões definitivas, isolamento, sorteio e partidas foram preservados. Não houve merge, deploy, publicação, Firebase ou credenciais.

## Checkpoint 071 — pendências específicas de Mateus 10–13

Sobre o head da PR 24 (`cd56a2a7a93047fbfbd41e64d4ab140881e38c6a`), somente Mt 10.1-15, os fatos exclusivos de Mt 12.9-14 e Mt 13.51-58 foram reconsultados na NAA Bible.com 1840, todos com HTTP 200. A comparação direta de campos, perguntas, pistas e referências partiu de 220 pautas/4.308 pistas. O lote acrescenta duas pautas, não três: Mt 10.1-15 tem 22 pistas e capacidade 10; Mt 13.51-58 tem 14 e capacidade 6.

Mt 12.9-14 foi consolidado em `nt2-marcos-mao-ressequida` porque seus três fatos exclusivos não justificavam repetir o núcleo paralelo. O objeto recebeu somente a referência geral de Mateus, referências paralelas nos três fatos comuns P02/P04/P08, as pistas P10–P12 sobre ovelha/valor/fazer o bem e uma síntese/dente que separa as redações. Seus quatro campos, alternativas, gabaritos, nove pistas anteriores e demais metadados foram preservados; “novamente”, vir ao meio e herodianos continuam exclusivamente em Marcos.

- **Antes/depois:** 220 pautas/4.308 pistas → 222/4.347; 219 objetos anteriores ficaram serializadamente idênticos, um recebeu a consolidação documental descrita acima e dois foram anexados na cauda.
- **Contrato:** quatro campos e quatro alternativas, gabaritos e proveniência NAA, focal explícito com ordem 8/5/3/2, importância distinta de risco de revelação e capacidade `min(12, floor((cartas-1)/2))`; não houve piso de 25 nem quantidade forçada.
- **Limite:** as três pendências específicas ficam resolvidas; Mt 18–20 e todos os demais recortes permanecem posteriores. Dúvidas de 1Co e exclusões definitivas foram preservadas; não houve merge, deploy, publicação, Firebase ou credenciais, e testes não são prova de banco completo.

## Checkpoint 072 — Mateus 18

Somente a página NAA Bible.com 1840 de Mateus 18 foi consultada, com HTTP 200 e leitura verso a verso. A comparação prévia contra 222 objetos/4.347 pistas incluiu campos, perguntas, pistas, referências, o paralelo de Lucas 15 e a repetição interna de Mt 5.29-30. Foram anexadas quatro pautas sustentadas, sem quantidade-meta: Mt 18.1-7 (12 pistas; capacidade 5), 18.10-14 (10; capacidade 4), 18.15-20 (13; capacidade 6) e 18.21-35 (22; capacidade 10). Mt 18.8-9 foi documentado como já coberto pela pauta anterior e não foi repetido.

- **Antes/depois:** 222 pautas/4.347 pistas → 226/4.404; a recontagem por referência corrige o subtotal histórico de Mateus do checkpoint 071 de 750 para 749 pistas (P03 da mão ressequida é exclusivamente de Marcos), chegando agora a 806; os 222 objetos anteriores permaneceram na mesma ordem e serializaram identicamente, sem consolidação ou correção interna.
- **Contrato:** quatro campos e quatro alternativas, gabaritos NAA, focal e ordem 8/5/3/2, proveniência, importância separada do risco de revelação, metadados e capacidade variável foram preservados. Parábolas e ensinos são atributivos, sem interpretação externa ou harmonização.
- **Limite:** todas as unidades de Mt 18 receberam decisão neste inventário; Mt 19–20 e demais recortes ficam posteriores. Dúvidas e exclusões definitivas permanecem intactas; não houve merge, deploy, publicação, Firebase ou credenciais, e testes não declaram o banco completo.

## Checkpoint 073 — inventário de Mateus 19–20

As páginas NAA Bible.com 1840 de Mt 19–20 foram obtidas com HTTP 200 e lidas verso a verso. Quatro unidades sustentadas acrescentaram 109 pistas: diálogo sobre divórcio/eunucos, jovem rico/recompensa, trabalhadores da vinha e cálice/serviço/resgate. O banco passa de **226 pautas/4.404 pistas para 230/4.513**, com preservação serializada dos 226 objetos anteriores.

Crianças (Mt 19.13-15) e cegos ao sair de Jericó (Mt 20.29-34) receberam decisões específicas; no segundo caso, os fatos exclusivos de Mateus permanecem registrados mesmo após comparação com Bartimeu. As capacidades novas são 10, 12, 12 e 12. **Mt 21–25 e os demais recortes globais continuam posteriores; o banco não está completo.**

## Checkpoint 074 — reavaliação limitada em Mateus 19–20

A leitura NAA renovada e matrizes explícitas de perguntas, respostas, referências e fatos corrigiram as decisões de Mt 19.13-15 e 20.29-34. Foram anexadas duas pautas próprias: crianças (9 pistas; capacidade 4) e dois cegos (16; capacidade 7). O segundo relato não foi identificado nem consolidado com Bartimeu apenas por compartilhar cura e seguimento.

O banco passa de **230 pautas/4.513 pistas para 232/4.538**, preservando serializadamente os 230 objetos anteriores. **Mt 21–25 permanece posterior; o banco não está completo.**

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

Somente a página NAA Bible.com 1840 de Mateus 25 foi obtida (HTTP 200; 351.114 bytes), lida verso a verso e comparada aos **248 objetos/4.844 pistas**. Foram anexadas, sem meta, três pautas: virgens/lamparinas (18 pistas; capacidade 8), servos/talentos (22; 10) e Rei/ovelhas/cabritos (20; 9). Cada uma contém quatro campos, quatro alternativas por campo, gabaritos, focal 8-5-3-2, referências, proveniência, metadados e revelação. Parábolas, imagens, falas e julgamento permanecem atribuídos por Mateus a Jesus, sem identidades externas, harmonização ou calendário.

A comparação serializada preservou byte a byte por `JSON.stringify` os 248 objetos anteriores, na mesma ordem, e anexou somente três. O banco passa a **251 pautas/1.004 campos/4.904 pistas**, todas elegíveis. A auditoria documental, sem autoria, de Mt 1–4, 8–9, 14–17 e 26–28 identificou decisões atuais somente em recortes selecionados e enumerou na ficha de Mateus as unidades ainda dependentes de reconsulta e decisão individual; exclusões antigas por capacidade universal ou paralelo não fecham essas faixas. Mt 23.14 segue como pendência textual específica. Mateus e o banco não são declarados completos; dúvidas de 1Co e demais limites foram preservados.
