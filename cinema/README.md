# Mosaico Card — Cinema & Séries

Jogo independente dentro do repositório Mosaico-Card (o Novo Testamento continua na raiz, intocado).
Filmes e séries **a partir de 2001**. Nenhum arquivo desta pasta é compartilhado com o Novo Testamento.

## O que muda em relação ao Novo Testamento
- Moeda: **ingressos** (no lugar dos denários). Carta bônus: **pipoca** (vale 6 e sai do jogo).
- Abertura: claquete + tela de série, com a peça dourada do Mosaico.
- Configuração da sala (antes de abrir, ajustável no lobby até "Iniciar"):
  ☑ Filmes ☑ Séries ☐ Só os mais conhecidos (Top 50).
- Na mesa aparece só o **título de sessão** (neutro); o título real é a resposta e aparece na revelação.
- Firebase: mesmo projeto, coleção própria **`salas-cinema`**.

## Banco
- `data/cinema-base.csv` — base de títulos (353 filmes + 84 séries), com a seleção Top 50 (`selecao`).
- `data/cinema-bank.json` — pautas escritas (fonte editorial). Pauta-piloto: *Wandinha* (em revisão).
- `npm run validate:bank` · `npm run generate:bank` (gera `cases-cinema.js`, não editar à mão) · `npm test`.
- Uma pauta só entra no sorteio com revisão `structural`, `factual`, `spoiler` e `editorial` aprovadas.
- Para testar pautas ainda em revisão: abrir com `?rascunho=1` (o link do QR mantém o modo).

## Documentos
- `docs/CRIACAO-MOSAICO-CINEMA-SERIES.md` — documento de criação.
- `docs/base-final-cinema-series.xlsx` — planilha cruzada com as fontes de audiência.

Criação: Mário César Nascimento e Osana Melo Nascimento.
