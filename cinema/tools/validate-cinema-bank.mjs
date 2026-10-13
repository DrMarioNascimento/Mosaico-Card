import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/* Validador do banco Mosaico Card — Cinema & Séries (cinema-bank.json). */
export const FIELD_IDS = ["C1", "C2", "C3", "C4"];
export const POINTS = [8, 5, 3, 2];
export const CLUE_TYPES = ["premissa", "bastidores", "elenco", "premios", "epoca", "curiosidade", "formato"];
const REVIEW_KEYS = ["structural", "factual", "spoiler", "editorial"];
const REVIEW_STATES = ["pending", "approved", "blocked"];
export const MIN_YEAR = 2001;

function text(value) { return typeof value === "string" && value.trim().length > 0; }
export function normalized(value) {
  return String(value).normalize("NFKD").replace(/[̀-ͯ]/g, "").toLocaleLowerCase("pt-BR").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}
function unique(values) { return new Set(values).size === values.length; }

export function validateBank(bank) {
  const errors = [];
  const add = (where, message) => errors.push(`${where}: ${message}`);
  if (bank.schemaVersion !== 1) add("catalog", "schemaVersion deve ser 1");
  if (bank.namespace !== "mosaico-cinema-series-v1") add("catalog", "namespace deve ser mosaico-cinema-series-v1");
  if (!text(bank.canonicalSource)) add("catalog", "fonte canônica do catálogo é obrigatória");
  if (!Array.isArray(bank.cases)) add("catalog", "cases deve ser uma lista");
  const cases = Array.isArray(bank.cases) ? bank.cases : [];
  if (!unique(cases.map(item => item.id))) add("catalog", "IDs de pauta duplicados");
  if (!unique(cases.map(item => item.imdbId))) add("catalog", "a mesma obra aparece em mais de uma pauta");

  const checkRefs = (refs, where) => {
    if (!Array.isArray(refs) || refs.length === 0) return add(where, "ao menos uma referência é obrigatória");
    refs.forEach((ref, index) => {
      const at = `${where}[${index}]`;
      if (!text(ref?.source)) add(at, "fonte é obrigatória");
      if (!text(ref?.url) || !/^https:\/\//.test(ref.url)) add(at, "URL https da fonte é obrigatória");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(ref?.checkedAt || "")) add(at, "data de consulta (AAAA-MM-DD) é obrigatória");
    });
  };

  cases.forEach((entry, caseIndex) => {
    const at = entry.id || `cases[${caseIndex}]`;
    if (!/^cs1-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id || "")) add(at, "ID estável deve usar prefixo cs1-");
    if (!/^tt\d{7,9}$/.test(entry.imdbId || "")) add(at, "imdbId válido é obrigatório (liga a pauta à base de títulos)");
    if (!["filme", "serie"].includes(entry.format)) add(at, "format deve ser filme ou serie");
    if (!Number.isInteger(entry.releaseYear) || entry.releaseYear < MIN_YEAR) add(at, `releaseYear deve ser a partir de ${MIN_YEAR}`);
    if (!text(entry.title)) add(at, "título real (resposta) é obrigatório");
    if (!text(entry.sessionTitle)) add(at, "título de sessão (neutro, exibido na mesa) é obrigatório");
    if (text(entry.title) && text(entry.sessionTitle) && normalized(entry.sessionTitle).includes(normalized(entry.title))) add(at, "o título de sessão não pode conter o título real");
    if (!text(entry.question)) add(at, "pergunta é obrigatória");
    if (!text(entry.rating)) add(at, "classificação indicativa é obrigatória");
    checkRefs(entry.generalReferences, `${at}.generalReferences`);
    if (!FIELD_IDS.includes(entry.focalFieldId) || !text(entry.focalJustification)) add(at, "campo focal e justificativa explícitos são obrigatórios");
    if (!Array.isArray(entry.fields) || entry.fields.length !== 4 || FIELD_IDS.some(id => !entry.fields.some(field => field.id === id))) add(at, "campos devem ser exatamente C1–C4");
    (entry.fields || []).forEach(field => {
      const fieldAt = `${at}.${field.id}`;
      const options = field.options || [];
      if (!text(field.label)) add(fieldAt, "rótulo do campo é obrigatório");
      if (options.length !== 4 || !unique(options.map(option => option.id)) || !unique(options.map(option => normalized(option.text)))) add(fieldAt, "quatro alternativas distintas são obrigatórias");
      if (!options.some(option => option.id === field.answerId)) add(fieldAt, "gabarito deve apontar para uma alternativa");
      checkRefs(field.answerReferences, `${fieldAt}.answerReferences`);
    });
    const c4 = (entry.fields || []).find(field => field.id === "C4");
    if (c4 && /ano/i.test(c4.label)) {
      (c4.options || []).forEach(option => {
        const year = Number(option.text);
        if (!Number.isInteger(year) || year < MIN_YEAR || Math.abs(year - entry.releaseYear) > 3) add(`${at}.C4`, `alternativa de ano "${option.text}" fora do recorte ou a mais de 3 anos do correto`);
      });
    }
    const cards = entry.cards || [];
    if (cards.length < 5 || !unique(cards.map(card => card.id))) add(at, "baralho requer IDs únicos e ao menos 5 cartas");
    const forbidden = ["C1", "C2"].map(id => (entry.fields || []).find(field => field.id === id))
      .filter(Boolean).map(field => (field.options || []).find(option => option.id === field.answerId)).filter(Boolean).map(option => normalized(option.text));
    cards.forEach(card => {
      const cardAt = `${at}.cards.${card.id || "?"}`;
      if (!text(card.text) || !["essential", "relevant", "contextual"].includes(card.importance)) add(cardAt, "texto e importância válidos são obrigatórios");
      if (!Array.isArray(card.relatedFields) || !card.relatedFields.length || card.relatedFields.some(id => !FIELD_IDS.includes(id))) add(cardAt, "campos relacionados inválidos");
      if (!["early", "middle", "late", "any"].includes(card.recommendedMoment)) add(cardAt, "momento recomendado inválido");
      if (!["low", "medium", "high"].includes(card.earlyRevealRisk)) add(cardAt, "risco de revelação inválido");
      if (!CLUE_TYPES.includes(card.clueType)) add(cardAt, "tipo de pista inválido");
      if (typeof card.twoPlayerSuitable !== "boolean") add(cardAt, "adequação a dois jogadores deve ser explícita");
      if (text(card.text) && forbidden.some(answer => answer && normalized(card.text).includes(answer))) add(cardAt, "a pista contém literalmente a resposta de C1 ou C2");
      checkRefs(card.references, `${cardAt}.references`);
    });
    if (cards.filter(card => card.importance === "essential").length < 2) add(at, "ao menos duas pistas essenciais são necessárias");
    if (FIELD_IDS.some(id => !cards.some(card => card.relatedFields?.includes(id)))) add(at, "o conjunto de pistas deve sustentar todos os quatro campos");
    const reviews = entry.review || {};
    if (REVIEW_KEYS.some(key => !REVIEW_STATES.includes(reviews[key])) || !Array.isArray(reviews.ambiguities)) add(at, "estados de revisão (structural, factual, spoiler, editorial) e ambiguidades devem ser explícitos");
    if (!text(entry.reveal?.canonicalSummary) || !text(entry.reveal?.hinge)) add(at, "síntese e dente são obrigatórios na revelação");
    const maxPlayers = Math.min(12, Math.floor((cards.length - 1) / 2));
    const editoriallyEligible = REVIEW_KEYS.every(key => reviews[key] === "approved") && Array.isArray(reviews.ambiguities) && reviews.ambiguities.length === 0;
    entry.__derived = {
      playable: editoriallyEligible && maxPlayers >= 2, editoriallyEligible, minPlayers: 2, maxPlayers,
      fieldOrder: [entry.focalFieldId, ...FIELD_IDS.filter(id => id !== entry.focalFieldId)], points: POINTS,
      blockers: maxPlayers >= 2 ? [] : ["deck-insufficient-for-two-players-and-pool"]
    };
  });
  return errors;
}

const isCli = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isCli) {
  const input = path.resolve(process.argv[2] || "data/cinema-bank.json");
  const bank = JSON.parse(fs.readFileSync(input, "utf8"));
  const errors = validateBank(bank);
  if (errors.length) { console.error(errors.join("\n")); process.exitCode = 1; }
  else console.log(`Banco Cinema & Séries válido: ${bank.cases.length} pauta(s), ${bank.cases.filter(item => item.__derived.playable).length} jogável(is).`);
}
