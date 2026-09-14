# Análise de leitura NT/NAA — progresso privado

Este diretório é separado do banco do jogo. Ele contém somente notas analíticas originais, referências e metadados; não contém corpus bíblico, transcrição extensa, perguntas, alternativas, gabaritos ou pistas prontas. Classificações são provisórias e não constituem seleção editorial final.

A consulta usa páginas identificadas como **Nova Almeida Atualizada (NAA)** no Bible.com, versão 1840. **Nova Almeida Atualizada © 2017 Sociedade Bíblica do Brasil (SBB).** Arquivos temporários do texto são descartados e não integram o produto.

## Estado honesto

- **Lucas 1–24:** conteúdo efetivamente examinado; 24 sínteses, observações concretas e 72 candidatos já preservados.
- **João 1–21:** conteúdo efetivamente examinado; 21 sínteses, observações concretas e 72 candidatos cuja quantidade por capítulo varia de acordo com as unidades úteis observadas.
- **Atos 1–28:** conteúdo efetivamente examinado; 28 sínteses, observações concretas e 76 candidatos, dos quais 26 apenas marcam cobertura já existente.
- **Romanos 1–16:** conteúdo efetivamente examinado; 16 sínteses, observações concretas e 38 candidatos, dos quais 10 apenas marcam cobertura existente.
- **1 Coríntios–Apocalipse:** páginas obtidas, hashes registrados e divisões editoriais mapeadas; os 127 capítulos ainda **não** estão marcados como análise concluída.
- **Mateus e Marcos:** não reabertos.
- **Próximo ponto exato:** 1 Coríntios 1.

## Arquivos

- `chapter-analysis.jsonl` e `luke-candidates.jsonl`: leitura e candidatos provisórios de Lucas.
- `john-chapter-analysis.jsonl` e `john-candidates.jsonl`: leitura e candidatos provisórios de João.
- `acts-chapter-analysis.jsonl` e `acts-candidates.jsonl`: leitura de Atos e candidatos, incluindo marcação dos itens já cobertos.
- `romans-chapter-analysis.jsonl` e `romans-candidates.jsonl`: leitura de Romanos e candidatos, com cobertura existente marcada.
- `candidates.jsonl`: inventário de seções preservado como mero mapeamento, não como análise.
- `coverage.json`: cobertura por capítulo, distinguindo análise de conteúdo de obtenção/mapeamento.
- `pending.json`: fila breve e consolidada de dúvidas, sem decisões novas.
- `metadata.json`: método, invariantes do banco, checkpoint e encaminhamento privado pretendido.

## Checkpoint técnico

A execução conclui Romanos 1–16 e encerra antes de 1 Coríntios porque o orçamento restante não comporta iniciar outra carta com leitura e notas concretas sem degradar o trabalho. O estado é recuperável e o próximo capítulo é 1 Coríntios 1; a parada não decorre de quantidade de candidatos.

O banco permanece em 350 objetos e 6.525 pistas. Não houve geração, auditoria ou testes do jogo. Não houve tentativa de upload: a coordenação poderá transferir os arquivos ao destino privado quando dispuser do conector apropriado.
