import fs from "node:fs";

const bank = JSON.parse(fs.readFileSync(process.argv[2] || "data/nt-bank.json", "utf8"));
const resolutionsPath = process.argv[3] || "data/nt-clue-audit-resolutions.json";
const resolutions = fs.existsSync(resolutionsPath) ? JSON.parse(fs.readFileSync(resolutionsPath, "utf8")) : {};
const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR").replace(/[^a-z0-9]+/g, " ").trim();
const words = value => new Set(normalize(value).split(" ").filter(word => word.length > 2));
const similarity = (left, right) => {
  const a = words(left), b = words(right);
  return [...a].filter(word => b.has(word)).length / Math.max(1, new Set([...a, ...b]).size);
};

const report = { cases: bank.cases.length, cards: 0, exactDuplicates: [], reviewPairs: [], crossCaseReviewPairs: [] };
for (const entry of bank.cases) {
  report.cards += entry.cards.length;
  for (let i = 0; i < entry.cards.length; i += 1) {
    for (let j = i + 1; j < entry.cards.length; j += 1) {
      const a = entry.cards[i], b = entry.cards[j];
      if (normalize(a.text) === normalize(b.text)) report.exactDuplicates.push(`${entry.id}:${a.id}/${b.id}`);
      else if (similarity(a.text, b.text) >= 0.5) report.reviewPairs.push(`${entry.id}:${a.id}/${b.id}`);
    }
  }
}
for (let i = 0; i < bank.cases.length; i += 1) {
  for (let j = i + 1; j < bank.cases.length; j += 1) {
    for (const a of bank.cases[i].cards) for (const b of bank.cases[j].cards) {
      if (similarity(a.text, b.text) >= 0.7) report.crossCaseReviewPairs.push(`${bank.cases[i].id}:${a.id}/${bank.cases[j].id}:${b.id}`);
    }
  }
}
const flagged = [...report.reviewPairs, ...report.crossCaseReviewPairs];
report.resolvedReviewPairs = flagged.filter(pair => resolutions[pair]).map(pair => ({ pair, rationale: resolutions[pair] }));
report.unresolvedReviewPairs = flagged.filter(pair => !resolutions[pair]);
console.log(JSON.stringify(report, null, 2));
if (report.exactDuplicates.length) process.exitCode = 1;
