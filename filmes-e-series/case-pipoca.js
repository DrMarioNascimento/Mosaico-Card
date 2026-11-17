/* Demonstração isolada. Não participa do sorteio de filmes e séries. */
window.MC_CASOS = {
  pipoca: {
    id: "pipoca",
    modo: "demonstracao",
    titulo: "A sessão de estreia",
    fonte: "Demonstração",
    lede: "Duas rodadas para conhecer pistas, escolhas e custos.",
    pecas: {
      F1: { id: "F1", marca: "Enredo", texto: "Um navio de luxo sai da Inglaterra rumo a Nova York, em sua primeira viagem, em 1912." },
      F2: { id: "F2", marca: "Enredo", texto: "Um artista sem dinheiro ganha a passagem num jogo de pôquer, pouco antes da partida." },
      F3: { id: "F3", marca: "Elenco", texto: "Leonardo DiCaprio e Kate Winslet vivem o casal principal." },
      F4: { id: "F4", marca: "Pipoca", texto: "Você achou a pipoca da sessão. Vale 6 ingressos e sai do jogo.", figura: "pipoca", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Bastidores", texto: "O diretor desceu até os destroços reais do navio para filmar imagens usadas no longa." },
      F6: { id: "F6", marca: "Época", texto: "Chegou aos cinemas dos Estados Unidos em dezembro de 1997." },
      F7: { id: "F7", marca: "Formato", texto: "É um longa-metragem de mais de três horas (194 minutos)." },
      F8: { id: "F8", marca: "Prêmios", texto: "Ganhou 11 Oscars, entre eles melhor filme e melhor direção." },
      F9: { id: "F9", marca: "Curiosidade", texto: "A canção-tema, na voz de Céline Dion, foi um dos maiores sucessos da década." }
    },
    campos: [
      { id: "titulo", rotulo: "Título", resposta: "certa", pontosBase: 8, opcoes: [
        { id: "b", txt: "Pearl Harbor" },
        { id: "certa", txt: "Titanic" },
        { id: "c", txt: "Poseidon" },
        { id: "d", txt: "Mar em Fúria" }
      ]},
      { id: "protagonista", rotulo: "Um dos protagonistas", resposta: "certa", pontosBase: 5, opcoes: [
        { id: "b", txt: "Um piloto que se alista para a guerra" },
        { id: "c", txt: "Um capitão de barco pesqueiro" },
        { id: "certa", txt: "Um artista pobre que embarca de última hora" },
        { id: "d", txt: "Um ex-prefeito preso num navio virado" }
      ]},
      { id: "direcao", rotulo: "Direção", resposta: "certa", pontosBase: 3, opcoes: [
        { id: "certa", txt: "James Cameron" },
        { id: "b", txt: "Steven Spielberg" },
        { id: "c", txt: "Ridley Scott" },
        { id: "d", txt: "Michael Bay" }
      ]},
      { id: "ano", rotulo: "Ano de lançamento", resposta: "certa", pontosBase: 2, opcoes: [
        { id: "b", txt: "1995" },
        { id: "c", txt: "1999" },
        { id: "d", txt: "2001" },
        { id: "certa", txt: "1997" }
      ]}
    ]
  }
};
