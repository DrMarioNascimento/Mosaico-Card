# Avaliação visual — R43 (16/11/2026)

Vale para as três edições do Mosaico Card (Novo Testamento, Filmes e Séries, Viagens). Só a aparência mudou: textos, regras e funcionamento são os mesmos e os testes continuam passando. Nenhuma imagem nova além do globo e do avião já autorizados para Viagens.

## Direção

Mesa de jogo à noite, com o que se segura na mão em papel claro e metal dourado. Cada edição tem o seu material no verso das cartas e no saldo: couro com o peixe (Novo Testamento), película preta e dourada (Filmes e Séries), pergaminho de mapa com o globo (Viagens).

## O que foi corrigido

| Onde | Como estava | Como ficou |
|---|---|---|
| Viagens, verso da carta | globo pequeno sobre verde listrado, sem destaque | pergaminho claro com as diagonais suaves, moldura fina e globo maior |
| Viagens, saldo | avião azul sobre fundo azul | avião sobre um bilhete de pergaminho |
| Ajuda e "Confirmar resposta?" | título branco sobre creme, invisível | título escuro |
| Regras completas dentro da ajuda | texto claro e caixas escuras sobre creme | texto escuro, caixas claras |
| "Pista ·" nas cartas | verde-água claro sobre creme | verde escuro |
| Rótulos da mesa, do placar e da sala | letras de 8 a 10 px | mínimo de 11 px |
| Figura do saldo (Novo Testamento e Filmes) | 25 px de altura | cerca de 33 px |
| Dica do treino | dois botões colados | botões separados; menos vão acima da mesa |
| Pódio | ordem 3º, 2º, 1º, todos iguais | 2º, 1º, 3º, com o 1º no centro, mais alto e dourado |
| Telas de 320 px | rótulo do saldo encostava na figura | figura menor nessa largura |

## Conferência (último ciclo, sem alterações)

- 324 capturas: três edições, três aparelhos simulados (mestre e dois jogadores), em 390 e 320 px, da sala aberta ao placar da demonstração e ao início da partida real.
- Sem rolagem lateral, sem texto estourado, nenhuma letra abaixo de 11 px nas telas percorridas.
- `npm test`: 23 verificações passaram.

## Não verificado

- iPhone e TV reais; leitor de tela.
- A animação da carta virando e a carta especial (pipoca, bússola, ovelha), o telão e uma partida real além da primeira tela.

## Pendências que dependem de decisão

- Bolsa de moedas (Novo Testamento) e ingresso com moeda (Filmes e Séries) são desenhos planos, fora do padrão 3D.
- No painel Sala aparece "partida padrao", sem til: é texto, não foi alterado.
- Mesa pública e botões seguem todos na mesma família azul-petróleo; diferenciar mais pede uma decisão de cor por área.
