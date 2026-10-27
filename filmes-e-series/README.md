# Mosaico Card — Cinema & Séries

## Manutenção e origem — 19 de outubro de 2026

Esta é a linha Filmes e Séries do Mosaico Card, com documentação e regras próprias. A outra linha é Novo Testamento. A entrada principal apenas permite escolher a experiência; os jogos continuam em desenvolvimento e testes internos, conforme a licença da raiz.

Consulte o [README principal](../README.md) e a [licença da raiz](../LICENSE.md). Créditos e licenças específicos deste módulo permanecem nos documentos abaixo.

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

Em testes abertos desde 27/10/2026: qualquer pessoa com conta Google abre sala e conduz; os participantes entram pelo código, sem conta. As condições e a autoria conjunta estão em [LICENSE.md](../LICENSE.md).
