# Verificação da interface e dos fluxos — 03/11/2026

final result: passed — prévia local e cenários abaixo. A validação em celulares físicos permanece distinta deste resultado.

Foram usados os HTML, CSS e JavaScript reais das duas edições, em navegador Chromium. A rota de desenvolvimento `/__qa__/` monta três aparelhos simulados, identificados na tela; não usa o Firebase de produção. Ela existe somente no servidor Vite. Iniciar com `npm run dev -- --host 0.0.0.0 --port 4173 --strictPort` e abrir `http://terminal.local:4173/__qa__/`.

## Verificações

- Cinema: mestre, jogador da vez e jogador aguardando em 320 e 390 px. Novo Testamento: 430 px. Mesa de Cinema em 1024 px.
- Duas rodadas completas de Maratonar, pelos botões: compra, oferta, captura, erro confirmado (−3), pipoca única (+6 sem compra), acerto e conclusão sem ranking. Retorno ao lobby somente pelo mestre.
- Ajuda aberta durante a espera; fechamento acessível. Comprar conduz ao monte e o cabeçalho com Ajuda permanece visível na rolagem.
- Configuração Filmes/Séries/Top 50 e formato exclusiva do mestre; nomes curtos no seletor e explicação completa abaixo. Sessão Clássica começou com uma pauta do banco e saldo 12. Pausar pelo mestre bloqueou ações dos demais.
- Não houve rolagem horizontal no documento do jogo em 320 px. Ações mediram ao menos 57 px de altura; Ajuda, 44 px. Custos e nomes couberam no estado observado.

## Correções encontradas no navegador

- Nomes de duas pessoas invadiam os botões: grade flexível e quebra de linha no painel da vez.
- O título da marca competia com Ajuda em 320 px: nessa largura, permanece o símbolo MC.
- `hidden` era vencido por CSS antigo: corrigida a especificidade para a descrição redundante do treino e o resumo exclusivo do mestre.
- O cronômetro sobrescrevia “treino” com 0:00 e cortava a palavra: corrigidos o temporizador e a largura da coluna. A vez ativa usa dourado; vermelho permanece reservado à urgência.
- A dica de quem aguardava mandava executar a ação alheia: agora descreve o que observar e explica quando seus botões liberam.
- A demonstração passava primeiro pela apresentação antiga: entrada direta na identificação; exemplos automáticos esperam 8 segundos por ação.
- A confirmação de risco falava de tempo correndo no treino: texto específico informa que é possível escolher sem pressa.
- O teste de quatro clientes encontrou a falta da captura do balaio na edição NT; o alvo passou a aparecer no painel de Capturar das salas v3.

## Evidências

- [Cinema, 320 px](docs/qa/mosaico-qa-cinema-320.jpg)
- [Novo Testamento, 430 px](docs/qa/mosaico-qa-nt-430.jpg)
- [Mesa em 1024 px](docs/qa/mosaico-qa-desktop-1024.jpg)

Essas capturas mostram o layout. Autenticação e permissões são verificadas separadamente pelo emulador Firestore e pelos testes em `tests/firestore.mjs`. Não foi realizada avaliação com leitor de tela nem com Safari/iOS físico. A largura de 320 px verifica reflow; não equivale a declarar um teste de zoom do navegador a 200%.
