# Relatório parcial de capacidade — banco NT/NAA

**Data do snapshot:** 2026-09-14
**Estado:** parcial; não representa conclusão dos 27 livros
**Fonte:** `data/nt-bank.json`, catálogo `checkpoint-101-marcos-9-10-adiados`
**SHA-256 do snapshot:** `8d836a56a3395cb7c77d8d1a8ba8a6c31820b4a8fddeac94f93d963b45df397a`
**Commit-base do snapshot:** `8b1dac6a71a4656721bc5935f6198a2b19f22933`
**Reprodução:** `node tools/report-nt-capacity.mjs`

## Unidades contadas e limites

- **Pautas/IDs:** 319; 319 estão elegíveis. Um sorteio retorna exatamente uma pauta.
- **Pistas/cartas:** 6055; há 6029 strings de pista exatamente distintas.
- **Fatos semanticamente únicos:** não verificados. Similaridade automatizada não prova identidade ou independência factual.
- **Histórias/episódios:** sem contagem. O banco não possui agrupamento canônico que relacione IDs paralelos, complementares, temáticos ou referentes à mesma história; portanto, 319 IDs não equivalem a 319 histórias independentes.
- **Variantes funcionais:** 0. Perspectivas editoriais, inclusive Mt 17.21, podem coexistir na documentação, mas o runtime não seleciona gabaritos variantes.

## Capacidade de sorteios sem reposição

A unidade de não repetição é o **ID de pauta elegível**, não história, episódio, pista ou perspectiva. A bolsa é separada por número de jogadores. Cada chamada sorteia uma pauta; assim, o número abaixo é simultaneamente a quantidade de IDs elegíveis e de partidas/sorteios antes de esgotar um ciclo, assumindo uma pauta por partida.

| Jogadores | IDs elegíveis | Sorteios/partidas sem reposição por ciclo |
| ---: | ---: | ---: |
| 2 | 319 | 319 |
| 3 | 318 | 318 |
| 4 | 300 | 300 |
| 5 | 278 | 278 |
| 6 | 268 | 268 |
| 7 | 225 | 225 |
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
- Os três adiados finais de Mc 9–10 foram anexados; Mc 9.44 e 9.46 foram isolados como novas pendências textuais e não usados. Mc 9–10 não conserva remanescente ordinário; o próximo lote é Mc 11–12. Mc 7.16 permanece pendência textual isolada.
- As demais auditorias são as linhas marcadas **PENDENTE** em `docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md`. Testes e este snapshot não tornam o banco completo.
