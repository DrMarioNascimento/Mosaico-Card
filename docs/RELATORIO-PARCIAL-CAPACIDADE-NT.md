# Relatório parcial de capacidade — banco NT/NAA

**Data do snapshot:** 2026-09-14
**Estado:** parcial; não representa conclusão dos 27 livros
**Fonte:** `data/nt-bank.json`, catálogo `checkpoint-102-marcos-11-12-inventario`
**SHA-256 do snapshot:** `4bfb63afad6602c88ec892155b6c663e7164b05620a283a1e7d7fbef9418e364`
**Commit-base do snapshot:** `fdbfb60c4c23a34f02504b1b48c8d6add80a9bbb`
**Reprodução:** `node tools/report-nt-capacity.mjs`

## Unidades contadas e limites

- **Pautas/IDs:** 323; 323 estão elegíveis. Um sorteio retorna exatamente uma pauta.
- **Pistas/cartas:** 6117; há 6087 strings de pista exatamente distintas.
- **Fatos semanticamente únicos:** não verificados. Similaridade automatizada não prova identidade ou independência factual.
- **Histórias/episódios:** sem contagem. O banco não possui agrupamento canônico que relacione IDs paralelos, complementares, temáticos ou referentes à mesma história; portanto, 323 IDs não equivalem a 323 histórias independentes.
- **Variantes funcionais:** 0. Perspectivas editoriais, inclusive Mt 17.21, podem coexistir na documentação, mas o runtime não seleciona gabaritos variantes.

## Capacidade de sorteios sem reposição

A unidade de não repetição é o **ID de pauta elegível**, não história, episódio, pista ou perspectiva. A bolsa é separada por número de jogadores. Cada chamada sorteia uma pauta; assim, o número abaixo é simultaneamente a quantidade de IDs elegíveis e de partidas/sorteios antes de esgotar um ciclo, assumindo uma pauta por partida.

| Jogadores | IDs elegíveis | Sorteios/partidas sem reposição por ciclo |
| ---: | ---: | ---: |
| 2 | 323 | 323 |
| 3 | 322 | 322 |
| 4 | 304 | 304 |
| 5 | 282 | 282 |
| 6 | 272 | 272 |
| 7 | 229 | 229 |
| 8 | 204 | 204 |
| 9 | 165 | 165 |
| 10 | 139 | 139 |
| 11 | 113 | 113 |
| 12 | 99 | 99 |

## Regras e exemplos

A capacidade de cada pauta é `min(12, floor((pistas - 1) / 2))`: cada jogador recebe duas pistas e deve restar ao menos uma no poço. Exemplos: 5 ou 6 pistas permitem 2 jogadores; 13 ou 14 permitem 6; 17 ou 18 permitem 8; 25 ou mais chegam ao teto de 12. O número de jogadores filtra os IDs antes de formar a bolsa; não configura mais de uma pauta por partida.

Não há API pública de reset. Quando a bolsa compatível esvazia, o runtime reembaralha todos os IDs elegíveis. Havendo mais de um ID, evita que o primeiro do novo ciclo repita o último do anterior. O estado é persistido em `localStorage` por namespace, versão do catálogo, versão do esquema e quantidade de jogadores; dados incompatíveis são filtrados. Falhas de leitura ou escrita não impedem o sorteio, mas fazem a bolsa ser reconstruída numa chamada posterior; nesse cenário, a não repetição entre chamadas não é garantida.

## Decisões e trabalho restante

- 1Co 14.35 está excluído editorialmente do jogo; isso não constitui juízo sobre o texto e não cria perguntas substitutas de 14.34/36.
- 1Co 11.2-16 conserva exatamente três conteúdos aprovados em pendência estrutural, sem quarto campo fabricado.
- Mt 17.21 conserva as perspectivas registradas, mas variantes funcionais continuam não implementadas.
- Mt 23.14 permanece integrado conforme a decisão anterior.
- Quatro pautas de Mc 11 foram anexadas após inventário integral de Mc 11–12. Restam por limite Mc 12.1-12, 12.13-17, 12.18-27, 12.28-34, 12.35-37 e 12.38-40; Mc 12.41-44 já estava coberto. Mc 11.26 foi isolado como pendência textual, junto de Mc 7.16, 9.44 e 9.46.
- As demais auditorias são as linhas marcadas **PENDENTE** em `docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md`. Testes e este snapshot não tornam o banco completo.
