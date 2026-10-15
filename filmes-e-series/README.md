# Mosaico Card — Cinema & Séries

Versão independente dentro do repositório Mosaico-Card. A raiz do domínio apresenta a seleção entre [Novo Testamento](https://mosaico-card.dragongames.dev.br/novo-testamento/) e [Filmes e Séries](https://mosaico-card.dragongames.dev.br/filmes-e-series/); os arquivos compartilhados pela entrada Novo Testamento permanecem na raiz do repositório.
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

## Acesso e licença

Em desenvolvimento e testes internos, sem participação externa. A demonstração não constitui lançamento público. As condições e a autoria conjunta estão em [LICENSE.md](../LICENSE.md).
