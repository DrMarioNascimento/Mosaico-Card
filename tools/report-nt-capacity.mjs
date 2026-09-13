import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import { validateBank } from "./validate-nt-bank.mjs";

const sourceFile = "data/nt-bank.json";
const machineFile = "data/nt-capacity-report.json";
const markdownFile = "docs/RELATORIO-PARCIAL-CAPACIDADE-NT.md";
const raw = await fs.readFile(sourceFile);
const bank = JSON.parse(raw);
const errors = validateBank(bank);
if (errors.length) throw new Error(errors.join("\n"));
const baseCommit = "5362aca63ec89c955b48662da37bcf6cf630ad57";
const sha256 = createHash("sha256").update(raw).digest("hex");
const playable = bank.cases.filter(item => item.__derived.playable);
const cards = bank.cases.flatMap(item => item.cards);
const capacity = Array.from({ length: 11 }, (_, index) => {
  const players = index + 2;
  const eligibleCaseIds = playable.filter(item => item.__derived.maxPlayers >= players).map(item => item.id);
  return { players, eligibleCases: eligibleCaseIds.length, drawsWithoutReplacementPerBagCycle: eligibleCaseIds.length };
});
const report = {
  schemaVersion: 1,
  reportDate: "2026-09-13",
  status: "partial",
  source: { file: sourceFile, catalogVersion: bank.catalogVersion, sha256, baseCommit },
  units: {
    cases: bank.cases.length,
    playableCaseIds: playable.length,
    clueCards: cards.length,
    uniqueClueStringsExact: new Set(cards.map(item => item.text)).size,
    semanticallyUniqueFacts: null,
    storyOrEpisodeGroups: null,
    functionalVariants: 0
  },
  nullReasons: {
    semanticallyUniqueFacts: "Não houve verificação semântica exaustiva fato a fato; a auditoria de similaridade é somente triagem.",
    storyOrEpisodeGroups: "O modelo não possui agrupamento canônico de IDs por história ou episódio; IDs não podem ser contados automaticamente como histórias independentes."
  },
  drawRules: {
    casesPerDraw: 1,
    withoutReplacementUnit: "eligible case ID within the bag for the selected player count",
    participantRange: [2, 12],
    caseCapacityFormula: "min(12, floor((clueCards - 1) / 2))",
    dealPremise: "duas pistas por jogador e ao menos uma pista no poço",
    reset: "não há API pública de reset; quando o saco compatível fica vazio, todos os IDs elegíveis são reembaralhados; se houver mais de um, o primeiro do novo ciclo não repete o último do ciclo anterior",
    persistence: "localStorage por namespace, catalogVersion, schemaVersion e número de jogadores; se leitura ou escrita falhar, o sorteio continua, mas o saco é reconstruído em chamada posterior e a garantia de não repetição entre chamadas deixa de existir"
  },
  capacity,
  structuralPending: [
    "1Co 11.2-16: exatamente três conteúdos aprovados, sem quarto campo autorizado",
    "Mt 17.21: perspectivas registradas, mas seleção funcional de variantes não implementada"
  ],
  remainingAudits: [
    "Mc 4.1-34 permanece individualizado para continuidade após a decisão integral de Mc 3-4 neste checkpoint",
    "demais linhas PENDENTE da matriz em docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md",
    "1Co 14.35 excluído do jogo; 1Co 14.34 e 14.36 sem novas perguntas aprovadas"
  ]
};
await fs.writeFile(machineFile, `${JSON.stringify(report, null, 2)}\n`);
const rows = capacity.map(row => `| ${row.players} | ${row.eligibleCases} | ${row.drawsWithoutReplacementPerBagCycle} |`).join("\n");
const markdown = `# Relatório parcial de capacidade — banco NT/NAA\n\n**Data do snapshot:** ${report.reportDate}\n**Estado:** parcial; não representa conclusão dos 27 livros\n**Fonte:** \`${sourceFile}\`, catálogo \`${bank.catalogVersion}\`\n**SHA-256 do snapshot:** \`${sha256}\`\n**Commit-base do snapshot:** \`${baseCommit}\`\n**Reprodução:** \`node tools/report-nt-capacity.mjs\`\n\n## Unidades contadas e limites\n\n- **Pautas/IDs:** ${report.units.cases}; ${report.units.playableCaseIds} estão elegíveis. Um sorteio retorna exatamente uma pauta.\n- **Pistas/cartas:** ${report.units.clueCards}; há ${report.units.uniqueClueStringsExact} strings de pista exatamente distintas.\n- **Fatos semanticamente únicos:** não verificados. Similaridade automatizada não prova identidade ou independência factual.\n- **Histórias/episódios:** sem contagem. O banco não possui agrupamento canônico que relacione IDs paralelos, complementares, temáticos ou referentes à mesma história; portanto, ${report.units.cases} IDs não equivalem a ${report.units.cases} histórias independentes.\n- **Variantes funcionais:** 0. Perspectivas editoriais, inclusive Mt 17.21, podem coexistir na documentação, mas o runtime não seleciona gabaritos variantes.\n\n## Capacidade de sorteios sem reposição\n\nA unidade de não repetição é o **ID de pauta elegível**, não história, episódio, pista ou perspectiva. A bolsa é separada por número de jogadores. Cada chamada sorteia uma pauta; assim, o número abaixo é simultaneamente a quantidade de IDs elegíveis e de partidas/sorteios antes de esgotar um ciclo, assumindo uma pauta por partida.\n\n| Jogadores | IDs elegíveis | Sorteios/partidas sem reposição por ciclo |\n| ---: | ---: | ---: |\n${rows}\n\n## Regras e exemplos\n\nA capacidade de cada pauta é \`min(12, floor((pistas - 1) / 2))\`: cada jogador recebe duas pistas e deve restar ao menos uma no poço. Exemplos: 5 ou 6 pistas permitem 2 jogadores; 13 ou 14 permitem 6; 17 ou 18 permitem 8; 25 ou mais chegam ao teto de 12. O número de jogadores filtra os IDs antes de formar a bolsa; não configura mais de uma pauta por partida.\n\nNão há API pública de reset. Quando a bolsa compatível esvazia, o runtime reembaralha todos os IDs elegíveis. Havendo mais de um ID, evita que o primeiro do novo ciclo repita o último do anterior. O estado é persistido em \`localStorage\` por namespace, versão do catálogo, versão do esquema e quantidade de jogadores; dados incompatíveis são filtrados. Falhas de leitura ou escrita não impedem o sorteio, mas fazem a bolsa ser reconstruída numa chamada posterior; nesse cenário, a não repetição entre chamadas não é garantida.\n\n## Decisões e trabalho restante\n\n- 1Co 14.35 está excluído editorialmente do jogo; isso não constitui juízo sobre o texto e não cria perguntas substitutas de 14.34/36.\n- 1Co 11.2-16 conserva exatamente três conteúdos aprovados em pendência estrutural, sem quarto campo fabricado.\n- Mt 17.21 conserva as perspectivas registradas, mas variantes funcionais continuam não implementadas.\n- Mt 23.14 permanece integrado conforme a decisão anterior.\n- Mc 3–4 foi lido e decidido por recorte; Mc 3.7-35 originou quatro pautas e Mc 4.1-34 permanece individualizado para continuidade pelo limite do lote. Mc 4.35-41 já estava coberto.\n- As demais auditorias são as linhas marcadas **PENDENTE** em \`docs/AUDITORIA-GLOBAL-DOCUMENTAL-NT.md\`. Testes e este snapshot não tornam o banco completo.\n`;
await fs.writeFile(markdownFile, markdown);
console.log(JSON.stringify({ machineFile, markdownFile, source: report.source, units: report.units, capacity }, null, 2));
