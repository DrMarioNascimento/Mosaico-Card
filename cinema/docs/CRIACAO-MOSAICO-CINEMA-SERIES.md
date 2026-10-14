# Mosaico Card — Cinema & Séries
## Documento de criação (v3 · 13/10/2026)

Base analisada: repositório `DrMarioNascimento/Mosaico-Card` (catálogo NT/NAA v2, checkpoint 107).
Público-alvo: **15 a 25 anos**. Recorte temporal: **obras a partir de 2001**.

---

## 1. Conceito

> O fato cabe na carta; a interpretação, não.

O motor do Mosaico Card permanece igual. Muda o que está escondido: em vez de um recorte bíblico, cada pauta esconde **um filme ou uma série**. As pistas são fatos verdadeiros sobre a obra (premissa, bastidores, elenco, prêmios, época). O jogador junta fragmentos, compra, captura e arrisca até identificar a obra e responder aos quatro campos.

"É filme ou é série?" faz parte do mistério: o formato não é revelado de saída.

### Por que 2001 em diante
Quem tem entre 15 e 25 anos nasceu entre 2001 e 2011. O recorte garante que as obras pertençam à vida do público: são nostalgia para quem tem 25 e referência atual para quem tem 15.

---

## 2. Os quatro campos (fixos em todas as pautas)

| Ordem | Campo | Pontos-base | Regra de gabarito |
|---|---|---|---|
| C1 (focal) | **Título** | 8 | Título oficial de lançamento no Brasil |
| C2 | **Protagonista** | 5 | Nome do **personagem** (o ator só aparece como pista) |
| C3 | **Criação** | 3 | Filme: direção creditada. Série: criação creditada ("criada por") |
| C4 | **Ano** | 2 | O ano que a fonte canônica atribui à obra (filme) ou à estreia da 1ª temporada (série) |

O motor já ordena os campos pelo focal e aplica 8/5/3/2 (`validate-nt-bank.mjs`, `POINTS`). Não é preciso mudar a regra de pontuação.

**Naturezas:** C1 = O QUÊ, C2 = QUEM, C3 = QUEM, C4 = QUANDO. Como o validador atual exige de 4 a 9 naturezas sustentadas e distintas, a lista de naturezas precisa ser revista no esquema novo (ver §6).

### Regras dos distratores
- **Título:** obras do mesmo gênero, mesma faixa de época e mesmo formato provável. Exemplo: para *Wandinha*, usar *O Mundo Sombrio de Sabrina*, e não *Toy Story*.
- **Protagonista:** personagens da mesma obra (coadjuvantes) ou de obras vizinhas.
- **Criação:** incluir sempre que possível o "falso criador", como o diretor famoso que dirigiu episódios mas não criou a série (caso Tim Burton × *Wandinha*). Esse é o dente do jogo.
- **Ano:** de 1 a 3 anos de distância do correto, todos dentro de 2001–hoje.

---

## 3. Regras de cânone e conteúdo

1. **Unidade da pauta:** no filme, um filme específico (*Harry Potter e a Pedra Filosofal*, não "Harry Potter"); na série, a série inteira.
2. **Protagonista inequívoco.** Em obras de elenco coral ou com dupla central (*Stranger Things*, *Frozen*, *Vingadores*), o campo C2 precisa de tratamento próprio (ver §11, decisão 1). Essas obras **não saem da base**, porque estão entre as mais conhecidas.
3. **Sem spoiler.** As pistas não passam da premissa: o primeiro ato do filme ou o início da 1ª temporada da série. Reviravoltas e finais são proibidos.
4. **Classificação indicativa.** A obra pode ser +16 ou +18, mas o texto das pistas precisa ser adequado a quem tem 15 anos.
5. **Nenhuma pista contém literalmente uma resposta correta** (título ou nome do protagonista). O validador deve verificar isso automaticamente (ver §6).
6. **Direitos:** sem pôster, cena, logo, trilha ou fala transcrita. As pistas são fatos redigidos por vocês. Nenhuma marca de terceiros no nome do produto.
7. **Anti-decoreba** (regra já vigente no MOSAICO): nenhum código visível ao jogador (ids de pauta, carta ou campo).
8. **Fonte canônica única** para datas e créditos, registrada em cada referência com data de consulta, como se faz hoje com a NAA.

---

## 4. Ambientação

| Elemento atual (NT) | Cinema & Séries |
|---|---|
| Denário de prata (moeda com o rosto de César) | **Ingresso** |
| Bolsa (`bolsa.svg`) e carteira (`carteira.svg`) | Balde de pipoca ou bilheteria |
| Ovelha perdida (bônus de 6, sai do jogo) | **Pipoca** (bônus de 6, sai do jogo) |
| Abertura: Bíblia aberta + peça dourada | Claquete ou tela de cinema + peça do mosaico |
| Verso da carta: peixe (`peixe-costa.svg`) | Rolo de filme ou fita perfurada |
| Kicker "Casos da Bíblia — Novo Testamento" | "Cinema & Séries — a partir de 2001" |
| Telão | Tela de cinema (sala escura, contagem regressiva) |

Valores econômicos inalterados: saldo inicial 12, comprar 4, capturar 2, arriscar 3, consignar 0, bônus 6, residual × 0,35.

---

## 5. Ponto crítico encontrado na análise: o título da pauta aparece na mesa

No NT, o título da pauta ("O primeiro sinal em Caná") é exibido no bloco da citação (`abertura.js → encaixarTituloNaCitacao`, `game.js → carregarCaso → #caso-titulo`) e na revelação (`renderRevelacaoCanonica`). **No Cinema & Séries, o título é a resposta do campo de 8 pontos.**

Solução proposta:
- Cada pauta ganha um **título de sessão** neutro e enigmático, exibido durante a partida (exemplo: "Uma escola nada comum").
- O título real aparece **só na revelação final**.
- A pergunta exibida na mesa e no telão é genérica: "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"

---

## 6. Mudanças técnicas no repositório Mosaico-Card

**Decisão (13/10/2026):** Cinema & Séries entra **no mesmo repositório** (`DrMarioNascimento/Mosaico-Card`), mas como **jogo independente, numa pasta própria** (`cinema/`), do mesmo jeito que, no repositório Dragon, *A Casa da Costa* e *O Impostor* convivem cada um na sua pasta. A escolha entre Novo Testamento e Cinema & Séries é feita **antes**, na porta de entrada, e não dentro da sala.

**Regra de independência:** nenhum arquivo, pasta ou caminho serve aos dois. A pasta `cinema/` tem a sua própria cópia de tudo (motor, sala, CSS, imagens, testes, ferramentas do banco). Duplicar é o preço aceito pela independência: mexer no Cinema nunca afeta o Novo Testamento, e vice-versa.

**Estrutura:**
```
Mosaico-Card/
├── index.html, game.js, sala.js, …   ← Novo Testamento (fica na raiz, intocado; links e QR atuais continuam valendo)
└── cinema/
    ├── index.html, game.js, game-core.js, game-sala.js, sala.js, bank-runtime.js, firebase.js, …  (cópias próprias)
    ├── data/cinema-bank.json, cinema-bank.schema.json
    ├── cases-cinema.js (gerado)
    ├── tools/  ·  tests/  ·  assets/
    └── package.json (npm test próprio)
```

### 6.1 Infraestrutura
- **Firebase:** pode ser o mesmo projeto, mas com **coleção própria** (ex.: `salas-cinema`), para que as salas dos dois jogos nunca se misturem nem colidam códigos.
- **`styles.css`:** na raiz, importa a folha de um commit fixo via jsDelivr. A cópia em `cinema/` terá o CSS completo local, sem depender desse commit.
- **`.github/workflows`:** passa a rodar o `npm test` da raiz (NT) e o de `cinema/`.

### 6.2 Banco de pautas
Os arquivos do NT **permanecem** na raiz. O Cinema & Séries tem os seus, dentro de `cinema/`:

| Novo Testamento (raiz, mantido) | Cinema & Séries (`cinema/`) |
|---|---|
| `data/nt-bank.json` | `data/cinema-bank.json` |
| `data/nt-bank.schema.json` | `data/cinema-bank.schema.json` |
| `tools/validate-nt-bank.mjs` | `tools/validate-cinema-bank.mjs` |
| `tools/generate-nt-bank.mjs` | `tools/generate-cinema-bank.mjs` |
| `cases-nt.js` → `window.MC_NT_BANK` | `cases-cinema.js` → `window.MC_CINEMA_BANK` (só carregado em `cinema/`) |
| `case-mt23.js`, `case-ovelha.js` | `case-pipoca.js` (demonstração da carta bônus) |
| — | `data/cinema-base.xlsx` ou `.csv`: a base de títulos (fonte da seleção Sucessos) |

**Mudanças no esquema:**
- `namespace`: `mosaico-cinema-series-v1`; `schemaVersion` 1; prefixo de id `cs1-`.
- `edition`/`scope` (NAA) dão lugar a `canonicalSource` (nome da fonte) e `scope` ("Filmes e séries, 2001–hoje").
- Pauta ganha `format` (`filme` | `serie`), `releaseYear`, `sessionTitle` (título neutro exibido) e `rating` (classificação indicativa).
- `reference` passa de `{book, passage, edition, sourceId, checkedAt}` para `{source, url, checkedAt}`.
- `review` passa de `structural / biblical / editorial` para `structural / factual / spoiler / editorial`. A pauta só entra no saco com todos aprovados e sem ambiguidades, como hoje.
- `card.documentScope` (single/parallel/complementary) dá lugar a `clueType`: `premissa`, `bastidores`, `elenco`, `premios`, `epoca`, `curiosidade`.
- Campos C1–C4 com rótulos fixos (§2); as naturezas deixam de ser obrigatórias ou passam a ser fixas.

**Validações novas sugeridas:**
- O texto de nenhuma carta contém a alternativa correta de C1 ou C2 (comparação normalizada).
- `releaseYear` ≥ 2001, salvo exceção marcada.
- As alternativas de C4 estão todas dentro do recorte e a até 3 anos do correto.
- A proporção filme/série do catálogo fica reportada no resumo.

**Capacidade:** a fórmula atual, `min(12, floor((cartas − 1) / 2))`, se mantém. **Meta: 25 cartas por pauta**, para que toda pauta comporte 12 jogadores.

### 6.3 Código do jogo (cópias em `cinema/`)
Partindo da cópia dos arquivos da raiz, as mudanças ficam só em `cinema/`:

| Arquivo (em `cinema/`) | O que muda |
|---|---|
| `bank-runtime.js` | Usa `MC_CINEMA_BANK`; `elegiveis()` filtra por formato e seleção; `chaveSaco` inclui os filtros; sem `case-mt23.js` |
| `sala.js` | Perguntas de formato e seleção na configuração; grava `formato` e `selecao` na sala; coleção `salas-cinema`; `sortearPauta` passa os filtros |
| `game-sala.js` | Identidade e busca de pauta no banco de cinema |
| `game.js` | Ingresso no lugar do denário; pipoca no lugar da ovelha (`OVELHA_SRC`, `eOvelha`, `BONUS_OVELHA_`, mensagens); `atualizarRegra`; `renderTelao`; fonte canônica na revelação; título de sessão neutro na mesa e título real só na revelação (§5) |
| `game-core.js` | **Nenhuma mudança de regra** (cópia idêntica) |
| `index.html` | Textos com ingresso e pipoca, abertura com claquete, linha da sessão, meta description |
| `abertura.js` / `abertura.css` | Claquete + peça do mosaico |
| `coin.css`, `faces.css`, `media.css`, `hud-fix.css`, `cards.css`, `favicon.svg`, `assets/` | Identidade visual do Cinema |
| `case-pipoca.js` + `pipoca.svg` | Demonstração da carta bônus |

Na raiz (Novo Testamento), **nenhum arquivo muda**, exceto o workflow de testes e, se for decidido assim, um link para a porta do Cinema (§11).

### 6.4 Testes
- Os testes do NT na raiz **ficam como estão** e continuam passando.
- Em `cinema/tests/`: cópias adaptadas dos testes atuais, mais banco (estrutura, pista não vaza resposta, recorte a partir de 2001, capacidade) e sorteio (formato e seleção filtram; sacos de combinações diferentes não interferem entre si).

### 6.5 Documentação e licença
- `cinema/README.md` próprio; o `README.md` da raiz ganha só um parágrafo apontando para o novo jogo. `LICENSE.md` acrescenta o âmbito do novo acervo e a observação sobre dados do IMDb (uso não comercial).

---

## 7. Anatomia de uma pauta (modelo)

- **Título de sessão** (exibido): "Uma escola nada comum"
- **Formato:** série · **Ano:** 2022 · **Classificação:** 14
- **25 pistas**, distribuídas aproximadamente assim:

| Tipo | Quantidade | Momento | Exemplo |
|---|---|---|---|
| Época / formato | 3–4 | early | "Estreou em novembro de 2022, num serviço de streaming." |
| Premissa (sem spoiler) | 6–7 | middle | "A protagonista é transferida para um internato." |
| Bastidores | 4–5 | middle/late | "Um cineasta famoso pela estética gótica dirigiu metade dos episódios da 1ª temporada." |
| Elenco | 3–4 | late | "A atriz principal também está em *Pânico* (2022)." |
| Prêmios / repercussão | 2–3 | any | "Uma cena de dança num baile viralizou nas redes." |
| Curiosidade / origem | 3–4 | any | "A família da protagonista nasceu em cartuns de revista nos anos 1930." |

- Pelo menos 2 pistas `essential`; todos os quatro campos sustentados por pistas.
- **Dente (síntese da revelação):** "Tim Burton dirigiu, mas não criou a série." (a pista verdadeira que leva à conclusão apressada).

---

## 8. Base de títulos

Arquivo: **base-final-cinema-series.xlsx** (13/10/2026). Todas as obras são **a partir de 2001**.

### 8.1 Fontes cruzadas
| Tipo | Fonte | O que mede |
|---|---|---|
| Métrica | Público e renda no Brasil (Ancine/OCA, Wikipédia PT) | Quem pagou ingresso no Brasil |
| Métrica | Bilheteria mundial (top 10 por ano, Wikipédia EN) | Alcance global no cinema |
| Métrica | Votos no IMDb (datasets oficiais) | Engajamento global, filmes e séries |
| Métrica (séries) | Audiência oficial: Netflix Top 10 histórico, médias por temporada, rankings Nielsen 2001–2025 | Audiência medida |
| Selo | Letterboxd (populares/mais bem avaliados) | Público jovem e cinéfilo |
| Selo | JustWatch Brasil | Popularidade atual no Brasil |
| Selo | Nielsen (streaming, filmes) | Audiência nos EUA |
| Selo | Whip Media / TV Time | Acompanhamento semanal (EUA/Europa) |
| Selo | Geração Z (YPulse, UCLA, Morning Consult) | Preferência declarada de 10–25 anos |
| Selo | Parrot Analytics | Demanda no Brasil |

**Índice:** média, com pesos iguais, dos percentis das métricas que o título tem, mais 0,03 por selo. Os parâmetros ficam na aba Critérios e podem ser alterados.

### 8.2 Regra de entrada
Fica na base o título que:
1. aparece em **pelo menos 3 bases**; **ou**
2. tem **selo Geração Z** (proteção, porque é a única medida direta da faixa etária); **ou**
3. foi **resgatado manualmente** (21 títulos muito conhecidos que tinham só 2 bases).

Resultado: **353 filmes e 84 séries**. Os 1.427 excluídos ficam na aba Excluídos, com as bases em que aparecem e o motivo, e qualquer um pode ser resgatado.

### 8.3 Seleção "Sucessos"
São os **50 filmes e as 50 séries** mais bem posicionados no índice (coluna "Seleção Sucessos" da planilha; o tamanho é um parâmetro). Têm dois papéis:
- **No jogo:** são o conteúdo da opção "Sucessos" na configuração da sala (§9).
- **Na produção:** são a **primeira leva de pautas a escrever**. Com essas 100 pautas, o jogo funciona em todas as combinações de configuração.

Distribuição por época dos Sucessos:

| Época | Filmes | Séries |
|---|---|---|
| 2001–2010 | 9 | 15 |
| 2011–2020 | 29 | 26 |
| 2021 em diante | 12 | 9 |

Atenção: entre os Sucessos, 10 filmes e 18 séries têm protagonista ambíguo (elenco coral ou dupla), além de 40 filmes e 9 séries ainda "a avaliar". Decidido: "Um dos protagonistas" (§11).

---

## 9. Configuração da sala

A escolha entre Novo Testamento e Cinema & Séries acontece **antes de entrar no jogo**, na porta de entrada (§11, decisão 2). Dentro do Cinema & Séries, a configuração da sala ganha caixas de marcação.


**Momento:** na mesma tela em que o Mestre já escolhe tempo, duração e telão, **antes de abrir a sala** (e, portanto, antes do QR Code). A sessão escolhida aparece para os convidados no lobby, e o Mestre ainda pode ajustá-la no lobby até tocar em "Iniciar", quando o número de jogadores já é conhecido.

**Caixas de marcação:**

> **Que sessão vamos ver?** · *Filmes e séries a partir de 2001*
> ☑ Filmes  ☑ Séries
> ☐ Só os mais conhecidos (Top 50)

- **Filmes / Séries:** as duas marcadas = sorteio entre os dois, e "é filme ou é série?" vira parte do mistério. Pelo menos uma precisa estar marcada (o botão de abrir a sala fica desativado se nenhuma estiver).
- **Só os mais conhecidos (Top 50):** limita o sorteio aos 50 mais conhecidos **de cada formato marcado** (até 100 com os dois). Desmarcada = catálogo completo. O rótulo evita "50+", que pode ser lido como faixa etária.
- **Padrão ao abrir a tela:** Filmes e Séries marcadas; Top 50 desmarcada.
- **Aviso de capacidade:** se, com o número de jogadores do lobby, não houver pautas suficientes na combinação marcada (nem toda pauta comporta 12 jogadores), o lobby avisa e sugere desmarcar o Top 50.
- **Linha da sessão** na abertura, na mesa e no telão: *"Sessão: Filmes e Séries · Top 50 · a partir de 2001"*.
- **Para uma versão futura:** filtro de época (2001–2010 · 2011–2020 · 2021 em diante).

**Implicações técnicas** (somam-se ao §6):
- Banco: cada pauta ganha `format` (`filme` | `serie`) e `selection` (`sucessos` | `catalogo`). O gerador marca `sucessos` a partir da planilha.
- `cinema/sala.js`: três caixas de marcação na configuração (validação de pelo menos um formato), gravadas na sala do Firestore como `formatos` (lista) e `top50` (sim/não), exibidas e editáveis pelo Mestre no lobby até o início.
- `bank-runtime.js`: `elegiveis()` passa a filtrar também por formato e seleção. A chave do saco (`chaveSaco`) inclui a combinação de filtros, para que o "não repetir pauta" funcione separadamente em cada combinação.
- Abertura, mesa e telão exibem a linha da sessão.
- Teste novo: o sorteio respeita formato e seleção, e o saco de uma combinação não interfere no de outra.

---

## 10. Roteiro de execução

1. **Decisões em aberto** (§11).
2. **Pasta `cinema/`** no repositório Mosaico-Card, com cópia própria de todos os arquivos, coleção própria no Firebase e testes próprios; a raiz (NT) intocada.
3. **Esquema, validador e gerador** do banco de cinema, com os testes novos.
4. **Adaptação do código** (§6.3): renomear o banco, título neutro, pipoca, ingressos e textos.
5. **Identidade visual**: abertura, verso da carta, moeda, bônus e favicon.
6. **Primeira leva de pautas: os Sucessos** (50 filmes + 50 séries), 25 pistas cada, com revisão factual, de spoiler e editorial. Depois, o catálogo completo em lotes.
7. **`npm test`** e uma partida completa conferida (fechamento e reconexão incluídos).
8. **Playtest** com público de 15–25 anos; ajustes de dificuldade e de distratores.
9. **Expansão** do banco por lotes.

---

## 11. Decisões em aberto

1. **Porta de entrada:** onde o jogador escolhe entre Novo Testamento e Cinema & Séries. Opções: (a) duas portas no hub Dragon Games, como já acontece com outros jogos; (b) uma página de entrada no próprio Mosaico-Card. Na opção (b), a raiz deixaria de abrir direto o NT, o que mudaria os links atuais.
2. **Fonte canônica:** IMDb (créditos e datas mais completos) ou Wikipédia em português (títulos brasileiros mais confiáveis). Também é possível combinar: uma fonte para créditos/datas e outra só para o título nacional.
3. **Nomes próprios.** A regra do MOSAICO de usar arquétipos em vez de nomes vale para as estórias autorais. Aqui, o campo Protagonista exige nomes reais de personagens. Confirmar a exceção para o Mosaico Card temático.
4. **Arte:** quem produz a nova identidade visual (abertura, ingresso, pipoca, verso das cartas).

### Decididas em 13/10/2026
- **Campo Protagonista em obras corais:** o campo passa a se chamar "Um dos protagonistas"; a resposta certa é um dos protagonistas (os demais ficam em `coProtagonists`, que o validador impede de aparecerem como alternativas erradas), e as alternativas erradas são personagens de outras obras. Rótulos fixos: C1 Título · C2 Protagonista/Um dos protagonistas · C3 Direção (filme)/Criação (série) · C4 Ano de lançamento (filme)/Ano de estreia (série).
- **Alternativas embaralhadas:** o gerador embaralha a ordem das alternativas de cada campo (ordem fixa por pauta, igual para todos), para a resposta certa não ficar sempre na primeira posição.
- Moeda: **ingresso**; carta bônus: **pipoca** ("Ganhou uma pipoca que vale 6 ingressos").
- Cinema & Séries entra no repositório Mosaico-Card, numa pasta própria (`cinema/`), como jogo independente; a escolha entre NT e Cinema é feita antes, na porta de entrada (§6).
- Recorte estrito: só obras **a partir de 2001**, sem exceções anteriores.
- Base cruzada com regra de entrada (§8.2) e seleção Sucessos de 50 por formato (§8.3).
- Configuração da sala com Formato e Seleção, e aviso "a partir de 2001" (§9).

- 14/10/2026: o balaio passa a se chamar **Em cartaz** (pôr uma pista em cartaz; quem levar paga 2 ingressos ao dono). Zeros nas mesas médias ficam como estão, para observar na prática.
