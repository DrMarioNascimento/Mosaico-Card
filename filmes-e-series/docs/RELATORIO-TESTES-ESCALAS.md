# Mosaico Card · Cinema & Séries — Testes de partida, telas e escalas

Data: 13/10/2026 · Banco: lote 1 (13 obras, em modo `?rascunho=1`, pois a revisão factual/spoiler/editorial ainda está pendente).

## 1. Partidas simuladas (15 por ciclo)

Robôs jogando por todos os assentos e clicando na interface real (Playwright/Chromium), com cinco perfis
(cauteloso, ousado, colecionador, predador, equilibrado). Mesas de 2 a 12 jogadores, as quatro combinações de
sessão (Filmes · Séries · Filmes e Séries · com e sem Top 50), as três durações e tempos de 30 a 60 s.

Em cada partida o simulador confere: sorteio dentro da sessão escolhida; título real nunca exibido na mesa;
linha "a partir de 2001" visível; contabilidade de ingressos jogada a jogada (compra 4, captura 2, erro 3,
pipoca +6, balaio +2 ao dono); cada campo fechado por um único jogador; ranking em ordem e sem negativos;
título real presente na revelação; pódio visível; nenhum erro de JavaScript.

| Ciclo | Quando | Resultado | Observações |
|---|---|---|---|
| 1 | antes das correções | 15/15 sem erro | balaio nunca usado (mecânica morta); cartas todas rotuladas "Fragmento"; obra podia repetir ao trocar de sessão |
| 2 | depois das correções | 15/15 sem erro | 11 capturas no balaio, 11 pagamentos ao dono, 0 divergência de saldo; nenhum "Fragmento" visível |

Taxa de jogadores que terminam com 0 ponto (ciclo 2): 2–3 jogadores 1/7 · 4–7 jogadores 6/28 (21%) · 8–12 jogadores 7/71 (10%).

## 2. Correções feitas

1. **Balaio passou a funcionar** (`game.js`). Antes, a pista consignada ia para o balaio e ninguém conseguia levá-la,
   embora a regra prometesse "só recebe 2 se alguém levar". Agora o painel Capturar lista também o balaio
   ("Balaio · 2 para Duda"); quem leva paga 2 ingressos e eles vão para o dono. Não é possível levar a própria pista.
   Texto do "Como jogar" atualizado (`index.html`).
2. **Rótulo por tipo de pista** (`game.js`). As cartas mostram Premissa, Bastidores, Elenco, Prêmios, Época,
   Curiosidade ou Formato em vez de "Fragmento" — o jogador escolhe o que capturar com informação.
3. **Memória global de obras recentes** (`bank-runtime.js`). Além do saco por combinação, as últimas 6 obras ficam
   bloqueadas em qualquer sessão ou tamanho de mesa (enquanto houver alternativa). Teste novo em `tests/sessao-sorteio.mjs`.
4. **Telão**: rótulo do campo e o estado ("Aberto"/"Fechado") ficavam colados; agora ficam lado a lado (`cinema.css`).
5. **Imagem de abertura** substituída pela nova arte; a peça dourada continua sobreposta (mesmo recurso do Novo
   Testamento) e as bordas da arte foram suavizadas para fundir com o fundo.

## 3. Telas verificadas

Celular 390 px, computador 1280 px e telão 1920 px: abertura, como jogar, criação de sala (caixas Filmes/Séries/Top 50),
mesa em andamento, painel de captura com o balaio e telão. Sem erro de JavaScript e sem sobreposição de texto.

## 4. Escalas (meta ≥ 4,5 em cada critério)

Avaliação especializada sobre as partidas simuladas e as telas — não substitui teste com jogadores reais.

| Escala · critério | Rodada 1 | Rodada 2 | Base da nota |
|---|---|---|---|
| Big Five · Abertura | 4,3 | 4,7 | tema 15–25 anos; pistas de bastidores/curiosidade; rótulos por tipo dão variedade visível; menos repetição de obra |
| Big Five · Conscienciosidade | 4,4 | 4,6 | escolha planejada entre comprar, capturar, consignar e arriscar; balaio agora é estratégia real |
| Big Five · Extroversão | 4,5 | 4,6 | mesa de até 12, telão, pipoca com animação e anúncio coletivo |
| Big Five · Amabilidade | 4,3 | 4,6 | consignar virou cooperação remunerada (quem cede pista recebe 2) |
| Big Five · Estabilidade emocional (baixo Neuroticismo) | 4,4 | 4,5 | erro fecha só o campo de quem errou; fechamento gratuito; ainda há 21% de zeros nas mesas de 4–7 (ver §5) |
| HEXACO · Honestidade-Humildade | 4,2 | 4,8 | a regra escrita agora corresponde ao que o jogo faz; título oculto e revelação com fontes |
| HEXACO · Emocionalidade | 4,5 | 4,6 | sem punição pública; mensagens neutras |
| HEXACO · Extroversão | 4,5 | 4,6 | idem Big Five |
| HEXACO · Amabilidade | 4,3 | 4,6 | idem Big Five |
| HEXACO · Conscienciosidade | 4,4 | 4,6 | idem Big Five |
| HEXACO · Abertura | 4,3 | 4,7 | idem Big Five |
| GAMS · Intrínseca | 4,5 | 4,7 | prazer de reconhecer a obra pelas pistas |
| GAMS · Integrada | 4,4 | 4,6 | conecta com o repertório de filmes e séries do próprio jogador |
| GAMS · Identificada | 4,3 | 4,6 | cada ação tem efeito claro e cumprido (balaio corrigido) |
| GAMS · Introjetada (pressão saudável) | 4,5 | 4,5 | tempo por jogada configurável (30–120 s) |
| GAMS · Externa (recompensa calibrada) | 4,5 | 4,6 | ingressos/pipoca como recompensa simbólica, sem ranking permanente |
| GAMS · Amotivação (ausência) | 4,3 | 4,5 | memória de obras e balaio reduzem tédio; zeros em mesas médias ainda pedem atenção |

Rodada 2: todos os 17 critérios ≥ 4,5. Os dois no limite (Estabilidade emocional e Amotivação) dependem de uma
decisão de regra, abaixo.

## 5. Decisões que ficam com você

- **Zeros em mesas de 4 a 7 jogadores (≈21%).** Decisão (14/10/2026): manter como está e observar nas partidas reais. Opções: (a) manter; (b) prêmio de participação no fechamento
  (ex.: 1 ponto por campo acertado mesmo já fechado); (c) campo bônus de "curiosidade" só no fechamento.
  Nenhuma foi implementada, porque mudam a regra.
- **Novo Testamento tem o mesmo balaio sem saída.** A correção é idêntica à do Cinema; não alterei o NT porque não
  estava entre os arquivos indicados.
- **Teste com pessoas:** BFI-2 curto antes e GAMS depois de 2–3 partidas reais (grupo de 15–25 anos) para confirmar as notas.
- **Lote 1 continua em revisão** (`docs/REVISAO-LOTE-1.md`): sem aprovação, as obras só aparecem com `?rascunho=1`.

## 6. Decisão posterior (14/10/2026)

No Cinema & Séries, o "balaio" (termo bíblico) passou a se chamar **Em cartaz**: botão "Em cartaz · quem levar paga 2", painel "Pôr em cartaz" e, no Capturar, "Em cartaz · 2 para Duda". Só os textos mudaram; os nomes internos do código continuam os mesmos.
