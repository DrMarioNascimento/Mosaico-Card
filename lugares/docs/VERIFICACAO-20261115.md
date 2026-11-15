# Verificação de Lugares — 15/11/2026

## Escopo e referências

- Banco publicado de referência: `1d0b1483865e62bf71c0a10820a2694f06208cc1`.
- Rascunhos comparados: branch `codex/lugares-expansao-rascunhos-20261114`, revisão `82ac919e2c893e29be6b16b8f4900e4205285e1c`, pasta `work/lugares-expansao-rascunhos/`.
- Saídas de revisão comparadas: `work/revisao-lugares/saida/` na referência acima.

## Rascunhos e conteúdo integrado

Os 112 arquivos JSON da branch de rascunhos contêm 166 identidades distintas de lugar. **Todas as 166 já estão no banco de 331 lugares.** Não havia um destino produzido nesse conjunto para acrescentar à publicação sem duplicação.

As 223 saídas aprovadas da revisão também estão incorporadas. A comparação conferiu textos, campos, alternativas e URLs das fontes efetivamente vinculadas às pistas e gabaritos, resolvendo os IDs remapeados durante a integração. Dez saídas antárticas usam `countries: ["AQ"]`; o banco usa `countries: []`, normalização deliberada do integrador. Isso não representa conteúdo perdido.

As revisões recentes de Niterói, Vila Velha, Belo Horizonte e Los Glaciares já estavam incorporadas. Tikal, Yosemite e Darién possuem versões posteriores no banco, com reescritas e revisão de fontes; reimportar os rascunhos antigos desfaria esse trabalho.

O plano editorial ainda contém nomes de candidatos que não têm cartas, como Alter do Chão e Teatro Amazonas. São sugestões de pauta, não rascunhos completos aprovados. Não foram promovidos a conteúdo jogável sem autoria e revisão.

## Integridade e metas

- 331 lugares distintos, sem IDs ou `placeId` repetidos.
- 662 conjuntos nos dois perfis, quatro campos por lugar e 25 pistas por perfil: 16.550 pistas.
- Metas de pelo menos 30 atingidas em todos os recortes. As [contagens por região e continente](METAS-POR-RECORTE.md) são conferidas contra o banco pelos testes.
- A geração do catálogo não alterou o conteúdo publicado de referência.

## Correções desta verificação

1. Alternativas variam entre partidas novas. A sala compartilha a ordem e a conserva após reconexão; sessões legadas sem semente continuam com sua ordem anterior. IDs e gabaritos não mudam.
2. Removidas quatro linhas repetidas do catálogo documentado: Marajó, Reservas de Mata Atlântica do Sudeste, Berlim e Mbanza Kongo. O banco jogável não estava duplicado.
3. A integração reconstrói a tabela do README pelo banco final, em vez de acrescentar novamente os lugares revisados. Um teste impede novas omissões ou repetições na documentação.
4. A lista de lugares integrados do plano passa a espelhar os títulos canônicos atuais. Retirada a antiga meta global de 142, superada pela meta por recorte.
5. O gerador rejeita identidades ausentes ou repetidas antes de produzir o catálogo.

## Validações executadas

- `node lugares/tools/generate-bank.mjs`: passou; catálogo gerado idêntico ao conteúdo de referência.
- `npm test`: passou, incluindo integridade do banco, filtros, capacidade de 2–12 jogadores, sorteio, demonstração, sala, pausa, refresh e duas abas nas três edições.
- Regressões novas: alternativas variam em novas partidas, não alteram o catálogo nem o gabarito, permanecem iguais entre participantes e após reconexão; o caminho legado sem semente e a demonstração continuam compatíveis.
- `npm run test:firebase`: passou no emulador local, incluindo regras reais e quatro clientes com nova partida, refresh e recuperação em Cinema, Novo Testamento e Lugares. Nenhum dado de teste foi gravado na produção.
- `git diff --check`: passou.

A demonstração pública de referência foi percorrida visualmente no desktop: entrada, duas rodadas, expansão de alternativas, cancelamento e confirmação de resposta, feedback, passagem de turno e encerramento. Não foi criada sala de teste na produção.

A prévia visual local não pôde ser acessada pelo navegador desta sessão (conexão recusada). As mudanças desta revisão foram verificadas pelos testes automatizados em DOM e no emulador; o percurso visual público descrito acima usou a publicação de referência, não a prévia modificada. Não houve inspeção visual móvel nem sessão de calibração com jogadores.

## Limites

Esta é uma verificação de cobertura dos rascunhos, integridade e funcionamento. Não corresponde a uma nova checagem factual, linha por linha, das 16.550 pistas em todas as fontes externas. A revisão já registrada nos arquivos foi preservada.

A plausibilidade relativa das alternativas, a equivalência entre Viajante e Geógrafo e a dificuldade com jogadores ainda exigem calibração. Os estados `review.playtest: pending` foram mantidos; testes automatizados não devem ser apresentados como validação de engajamento ou equilíbrio pedagógico.
