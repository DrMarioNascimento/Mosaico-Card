# Revisão de publicação — 14/11/2026

## Entrega

Lugares integrado à página inicial e ao motor de salas do Mosaico Card. Primeiro lote: oito lugares, dois perfis por lugar, 400 pistas e 32 perguntas distintas. O plano de 120 lugares está separado do catálogo jogável.

## Revisão editorial e funcional

- Mesmos lugares, perguntas e respostas em Viajante e Geógrafo; profundidade das pistas distinta.
- Viajante inclui rios, clima, relevo, natureza, cultura e paisagens em linguagem familiar.
- Gabaritos, referências por pista, IDs, campos relacionados, contagens e capacidade de 2 a 12 jogadores conferidos.
- Filtros por Brasil, regiões e continentes combinados por união; sem duplicação de lugares. Contadores, aviso de pouca variedade e bloqueio de seleção vazia.
- Demonstração com bússola e créditos; Clássica e Maratonar mantidas.
- Perfil e território sincronizados pelo mestre no lobby e preservados ao recarregar.
- Proteção contra entrada em uma sala pela edição errada.
- Autenticação, lista de mestres e regras do Firestore preservadas.

## Verificação

- `npm test`: aprovado, incluindo bancos existentes, reducer, demonstração, integração DOM, reconexão, recuperação e encerramento.
- `node tests/mesa-integracao.mjs`: aprovado com testes adicionais de alteração de perfil e território no lobby.
- `npm run test:firebase`: aprovado no emulador oficial com quatro clientes em Cinema, Novo Testamento e Lugares; inclui regras de segurança, demonstração, partida, recarregamento, recuperação, fechamento e encerramento.
- O teste antigo da demonstração foi atualizado para o fluxo atual: fechamento → placar → lobby. A execução também aguarda a propagação da revisão entre clientes antes da jogada seguinte.
- `git diff --check`: aprovado.

## Limites

A prévia local não ficou acessível no navegador remoto. A verificação do endereço público acompanha a publicação. Testes automatizados e emulador não equivalem a uma partida com pessoas em aparelhos físicos, nem medem engajamento ou calibram a dificuldade. O catálogo permanece um primeiro lote, com pouca variedade quando filtrado para um único continente.
