# Relatório parcial de capacidade — banco NT/NAA

**Data do snapshot:** 2026-09-13
**Estado:** parcial; não representa conclusão dos 27 livros
**Fonte:** `data/nt-bank.json`, catálogo `checkpoint-099-marcos-9-10`
**SHA-256 do snapshot:** `cac64abd9010f785b64a08efa9a580ac0c3a8fb82f7f38c6b98e695aefa5e530`
**Commit-base do snapshot:** `fcd490b5f1a584dceaf704d54cf9324f086a877a`
**Reprodução:** `node tools/report-nt-capacity.mjs`

## Unidades contadas e limites

- **Pautas/IDs:** 312; 312 estão elegíveis. Um sorteio retorna exatamente uma pauta.
- **Pistas/cartas:** 5970; há 5945 strings de pista exatamente distintas.
- **Fatos semanticamente únicos:** não verificados. Similaridade automatizada não prova identidade ou independência factual.
- **Histórias/episódios:** sem contagem. O banco não possui agrupamento canônico que relacione IDs paralelos, complementares, temáticos ou referentes à mesma história; portanto, 312 IDs não equivalem a 312 histórias independentes.
- **Variantes funcionais:** 0. Perspectivas editoriais, inclusive Mt 17.21, podem coexistir na documentação, mas o runtime não seleciona gabaritos variantes.

## Capacidade de sorteios sem reposição

A unidade de não repetição é o **ID de pauta elegível**, não história, episódio, pista ou perspectiva. A bolsa é separada por número de jogadores. Cada chamada sorteia uma pauta; assim, o número abaixo é simultaneamente a quantidade de IDs elegíveis e de partidas/sorteios antes de esgotar um ciclo, assumindo uma pauta por partida.

| Jogadores | IDs elegíveis | Sorteios/partidas sem reposição por ciclo |
| ---: | ---: | ---: |
| 2 | 312 | 312 |
| 3 | 311 | 311 |
| 4 | 294 | 294 |
| 5 | 274 | 274 |
| 6 | 266 | 266 |
| 7 | 223 | 223 |
| 8 | 202 | 202 |
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
- Mc 9–10 recebeu inventário individual integral; quatro pautas foram anexadas, Bartimeu permaneceu coberto e sete recortes sustentados ficaram precisamente adiados pelo limite. Mc 7.16 permanece pendência textual isolada.
- As demais auditorias são as linhas marcadas **PENDENTE** em `docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md`. Testes e este snapshot não tornam o banco completo.
