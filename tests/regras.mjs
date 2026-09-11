import { createRequire } from "node:module";
import assert from "node:assert/strict";

const require = createRequire(import.meta.url);
const regras = require("../game-core.js");

// Acerto global e erro individual.
const estado = regras.criarEstadoJogadores(["ana", "bia"], 12);
Object.assign(estado, { resolvidosGlobais: {} });
const campo = { id: "C1", resposta: "certa" };

let r = regras.aplicarResposta(estado, "ana", campo, "errada");
assert.equal(r.ok, false);
assert.equal(regras.campoDisponivel(estado, "ana", "C1"), false);
assert.equal(regras.campoDisponivel(estado, "bia", "C1"), true);

r = regras.aplicarResposta(estado, "bia", campo, "certa");
assert.equal(r.ok, true);
assert.equal(regras.campoDisponivel(estado, "ana", "C1"), false);
assert.equal(regras.campoDisponivel(estado, "bia", "C1"), false);
assert.equal(estado.saldosPorJogador.ana, 12);
assert.equal(estado.saldosPorJogador.bia, 12);

// Configuração: recomendação e seleção limitada a 30/45/60.
assert.deepEqual([3, 5, 6, 8, 9, 12].map(regras.tempoRecomendado), [60, 60, 45, 45, 30, 30]);
assert.deepEqual(regras.TEMPOS_TURNO, [30, 45, 60]);
let config = regras.validarConfiguracao({ numeroJogadores: 7, duracao: "longa", telao: true });
assert.equal(config.valida, true);
assert.deepEqual(config.config, {
  numeroJogadores: 7,
  turnoSegundos: 45,
  duracao: "longa",
  camposAtivos: 4,
  telao: true
});
config = regras.validarConfiguracao({ numeroJogadores: 7, turnoSegundos: 60, camposAtivos: 6 });
assert.equal(config.valida, true);
assert.equal(config.config.turnoSegundos, 60);
assert.equal(regras.validarConfiguracao({ numeroJogadores: 7, turnoSegundos: 50 }).valida, false);
assert.equal(regras.validarConfiguracao({ numeroJogadores: 2 }).valida, false);
assert.throws(() => regras.tempoRecomendado(13), RangeError);

// Ovelhas por faixa e ajuste da duração.
assert.deepEqual([3, 5, 6, 8, 9, 12].map(n => regras.quantidadeBonus(n)), [1, 1, 2, 2, 3, 3]);
assert.equal(regras.quantidadeBonus(3, "curta"), 1);
assert.equal(regras.quantidadeBonus(8, "curta"), 1);
assert.equal(regras.quantidadeBonus(5, "longa"), 2);
assert.equal(regras.quantidadeBonus(12, "longa"), 4);
assert.throws(() => regras.quantidadeBonus(2), RangeError);

// Ciclos completos e tempo total.
assert.equal(regras.calcularCiclos(4, 3), 4);
assert.equal(regras.calcularCiclos(9, 3), 5);
assert.equal(regras.calcularCiclos(4, 12), 3);
assert.equal(regras.calcularCiclos(4, 3, "curta"), 3);
assert.equal(regras.calcularCiclos(4, 3, "longa"), 5);
assert.equal(regras.calcularCiclos(9, 3, "curta"), 4);
assert.equal(regras.calcularCiclos(9, 3, "longa"), 5);
assert.equal(regras.calcularCiclos(4, 12, "curta"), 3);
assert.equal(regras.calcularCiclos(4, 12, "longa"), 4);
assert.deepEqual(regras.calcularTempoTotal(4, 3, 60), { ciclos: 4, segundos: 720 });
assert.deepEqual(regras.calcularTempoTotal(9, 12, 30), { ciclos: 3, segundos: 1080 });
assert.deepEqual(regras.calcularTempoTotal(4, 3, 60, "curta"), { ciclos: 3, segundos: 540 });
assert.deepEqual(regras.calcularTempoTotal(4, 3, 60, "longa"), { ciclos: 5, segundos: 900 });
assert.throws(() => regras.calcularTempoTotal(4, 3, 50), RangeError);
assert.throws(() => regras.calcularCiclos(4, 3, "eterna"), RangeError);

// Valores dos campos conforme a posição na pauta.
assert.deepEqual(regras.valoresCampos(4), [8, 5, 3, 2]);
assert.deepEqual(regras.valoresCampos(5), [8, 5, 3, 2, 1]);
assert.deepEqual(regras.valoresCampos(6), [8, 5, 4, 3, 2, 1]);
assert.deepEqual(regras.valoresCampos(7), [8, 6, 5, 4, 3, 2, 1]);
assert.deepEqual(regras.valoresCampos(8), [8, 6, 5, 4, 3, 2, 2, 1]);
assert.deepEqual(regras.valoresCampos(9), [8, 6, 5, 4, 3, 3, 2, 2, 1]);
assert.throws(() => regras.valoresCampos(3), RangeError);

// Terços: os limites exatos já pertencem ao terço seguinte.
assert.equal(regras.tercoDoTempo(0, 0, 90), 1);
assert.equal(regras.tercoDoTempo(29.999, 0, 90), 1);
assert.equal(regras.tercoDoTempo(30, 0, 90), 2);
assert.equal(regras.tercoDoTempo(60, 0, 90), 3);
assert.equal(regras.tercoDoTempo(95, 0, 90), 3);
assert.equal(regras.tercoDoTempo(95, 0, 90, "final"), "final");
assert.deepEqual([1, 2, 3, "final"].map(regras.multiplicadorDoTerco), [1.3, 1.1, 1, 1]);

// Ledger, soma por parcelas e residual INT(R/4), sem arredondar cada campo.
let ledger = [];
const evento1 = regras.criarEventoPontuacao({
  campoId: "C1", jogadorId: "ana", valorBase: 8,
  instante: 10, inicioPartida: 0, fimPartida: 90, ordemFechamento: 1
});
assert.equal(evento1.terco, 1);
assert.equal(evento1.pontos, 10.4);
ledger = regras.adicionarEventoPontuacao(ledger, evento1);
ledger = regras.adicionarEventoPontuacao(ledger, regras.criarEventoPontuacao({
  campoId: "C2", jogadorId: "ana", valorBase: 5,
  instante: 40, inicioPartida: 0, fimPartida: 90, ordemFechamento: 2
}));
ledger = regras.adicionarEventoPontuacao(ledger, regras.criarEventoPontuacao({
  campoId: "C3", jogadorId: "ana", valorBase: 3,
  instante: 70, inicioPartida: 0, fimPartida: 90, ordemFechamento: 3
}));
ledger = regras.adicionarEventoPontuacao(ledger, regras.criarEventoPontuacao({
  campoId: "C4", jogadorId: "ana", valorBase: 2,
  instante: 100, inicioPartida: 0, fimPartida: 90, fase: "final"
}));
assert.equal(regras.pontosResiduais(3), 0);
assert.equal(regras.pontosResiduais(4), 1);
assert.equal(regras.pontosResiduais(15), 3);
const finalAna = regras.calcularPontuacaoFinal("ana", ledger, 8);
assert.deepEqual(finalAna.parcelas, {
  primeiroTerco: 10.4,
  segundoTerco: 5.5,
  terceiroTerco: 3,
  fechamentoFinal: 2
});
assert.equal(finalAna.pontosCampos, 20.9);
assert.equal(finalAna.residual, 2);
assert.equal(finalAna.total, 22.9);
assert.throws(() => regras.adicionarEventoPontuacao(ledger, evento1), /já pontuou/);

// Fase final: campo globalmente fechado e cicatriz individual não entram;
// dois jogadores podem acertar simultaneamente o mesmo campo ainda aberto.
const estadoFinal = {
  resolvidosGlobais: { C1: { por: "ana", ok: true } },
  errosPorJogador: { ana: { C2: { ok: false } }, bia: {}, caio: {} }
};
const camposFinais = [
  { id: "C1", resposta: "a" },
  { id: "C2", resposta: "b" },
  { id: "C3", resposta: "c" }
];
const apuracao = regras.apurarFaseFinal(
  estadoFinal,
  ["ana", "bia", "caio"],
  camposFinais,
  {
    ana: { C1: "a", C2: "b", C3: "c" },
    bia: { C1: "a", C2: "b", C3: "c" },
    caio: { C2: "x", C3: "c" }
  }
);
assert.deepEqual(apuracao.vencedoresPorCampo, { C1: [], C2: ["bia"], C3: ["ana", "bia", "caio"] });
assert.deepEqual(apuracao.acertosPorJogador.ana, ["C3"]);
assert.equal(regras.campoElegivelFaseFinal(estadoFinal, "ana", "C2"), false);
assert.equal(regras.campoElegivelFaseFinal(estadoFinal, "bia", "C2"), true);

let ledgerFinal = [];
for (const jogadorId of apuracao.vencedoresPorCampo.C3) {
  ledgerFinal = regras.adicionarEventoPontuacao(ledgerFinal, regras.criarEventoPontuacao({
    campoId: "C3", jogadorId, valorBase: 3, fase: "final", instante: 100
  }));
}
assert.equal(ledgerFinal.length, 3);

// Ranking: total, menos queimados, mais denários e primeiro fechamento focal.
const ranking = regras.ordenarRanking([
  { jogadorId: "d", total: 20, queimados: 1, denarios: 8, ordemCampoFocal: 3 },
  { jogadorId: "b", total: 20, queimados: 0, denarios: 7, ordemCampoFocal: 2 },
  { jogadorId: "a", total: 21, queimados: 4, denarios: 0, ordemCampoFocal: null },
  { jogadorId: "c", total: 20, queimados: 0, denarios: 7, ordemCampoFocal: 1 },
  { jogadorId: "e", total: 20, queimados: 0, denarios: 8, ordemCampoFocal: 9 }
]);
assert.deepEqual(ranking.map(item => item.jogadorId), ["a", "e", "c", "b", "d"]);
assert.equal(regras.quantidadeQueimados({ C1: {}, C3: {} }), 2);

console.log("ok regras consolidadas");
