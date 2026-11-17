/* Demonstração isolada. Não participa do sorteio de lugares. */
window.MC_CASOS = {
  bussola: {
    id: "bussola",
    modo: "demonstracao",
    titulo: "Destino em descoberta",
    fonte: "Demonstração",
    lede: "Duas rodadas para conhecer pistas, escolhas e custos.",
    pecas: {
      F1: { id: "F1", marca: "Localização", texto: "Fica no estado do Arizona, no sudoeste dos Estados Unidos." },
      F2: { id: "F2", marca: "Água", texto: "O rio Colorado corre lá embaixo, no fundo do vale." },
      F3: { id: "F3", marca: "Processo", texto: "A água do rio escavou a rocha ao longo de milhões de anos." },
      F4: { id: "F4", marca: "Bússola", texto: "Você achou a bússola da expedição. Vale 6 passagens e sai do jogo.", figura: "bussola", recompensa: 6, protegida: true },
      F5: { id: "F5", marca: "Relevo", texto: "Em alguns pontos, as paredes descem mais de 1.600 metros." },
      F6: { id: "F6", marca: "Paisagem", texto: "Camadas de rocha avermelhada aparecem empilhadas nas encostas." },
      F7: { id: "F7", marca: "História", texto: "Virou parque nacional em 1919." },
      F8: { id: "F8", marca: "Patrimônio", texto: "É Patrimônio Mundial da UNESCO desde 1979." },
      F9: { id: "F9", marca: "Caminhos", texto: "A borda sul é a mais visitada e fica aberta o ano inteiro." }
    },
    campos: [
      { id: "lugar", rotulo: "Parque nacional", resposta: "certa", pontosBase: 8, opcoes: [
        { id: "b", txt: "Yosemite" },
        { id: "c", txt: "Yellowstone" },
        { id: "certa", txt: "Grand Canyon" },
        { id: "d", txt: "Zion" }
      ]},
      { id: "rio", rotulo: "Rio no fundo do cânion", resposta: "certa", pontosBase: 5, opcoes: [
        { id: "b", txt: "Mississippi" },
        { id: "certa", txt: "Colorado" },
        { id: "c", txt: "Columbia" },
        { id: "d", txt: "Rio Grande" }
      ]},
      { id: "origem", rotulo: "O que escavou a rocha", resposta: "certa", pontosBase: 3, opcoes: [
        { id: "b", txt: "O avanço de uma geleira" },
        { id: "c", txt: "A erupção de um vulcão" },
        { id: "certa", txt: "A água do rio" },
        { id: "d", txt: "O vento do deserto" }
      ]},
      { id: "pais", rotulo: "País", resposta: "certa", pontosBase: 2, opcoes: [
        { id: "certa", txt: "Estados Unidos" },
        { id: "b", txt: "México" },
        { id: "c", txt: "Canadá" },
        { id: "d", txt: "Austrália" }
      ]}
    ]
  }
};
