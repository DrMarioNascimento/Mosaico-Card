/* Gerado por tools/generate-cinema-bank.mjs a partir de data/cinema-bank.json e data/cinema-base.csv. Não editar. */
(function(root,factory){const catalog=factory();if(typeof module==="object"&&module.exports)module.exports=catalog;root.MC_CINEMA_BANK=catalog;})(typeof globalThis!=="undefined"?globalThis:this,function(){return {
  "schemaVersion": 1,
  "catalogVersion": "lote-2",
  "namespace": "mosaico-cinema-series-v1",
  "demoIsolated": true,
  "source": {
    "file": "cinema-bank.json",
    "base": "cinema-base.csv",
    "canonicalSource": "IMDb (créditos e datas) + títulos oficiais no Brasil",
    "scope": "Filmes e séries a partir de 2001"
  },
  "summary": {
    "cases": 29,
    "playableCases": 29,
    "films": 14,
    "series": 15,
    "sucessos": 29,
    "max12Cases": 29,
    "baseTitles": 437,
    "baseSucessos": 100
  },
  "order": [
    "cs1-serie-wandinha",
    "cs1-filme-vingadores-ultimato",
    "cs1-serie-stranger-things",
    "cs1-filme-homem-aranha-sem-volta-para-casa",
    "cs1-serie-the-big-bang-theory",
    "cs1-filme-avatar-o-caminho-da-agua",
    "cs1-serie-the-office",
    "cs1-filme-v-de-vinganca",
    "cs1-serie-round-6",
    "cs1-filme-barbie",
    "cs1-serie-the-boys",
    "cs1-filme-coringa",
    "cs1-serie-breaking-bad",
    "cs1-filme-vingadores-guerra-infinita",
    "cs1-serie-the-walking-dead",
    "cs1-filme-avatar",
    "cs1-serie-game-of-thrones",
    "cs1-filme-onde-os-fracos-nao-tem-vez",
    "cs1-serie-chernobyl",
    "cs1-filme-brilho-eterno-de-uma-mente-sem-lembrancas",
    "cs1-serie-the-last-of-us",
    "cs1-filme-garota-exemplar",
    "cs1-serie-the-mandalorian",
    "cs1-filme-era-uma-vez-em-hollywood",
    "cs1-serie-better-call-saul",
    "cs1-filme-pantera-negra",
    "cs1-serie-sherlock",
    "cs1-filme-top-gun-maverick",
    "cs1-serie-attack-on-titan"
  ],
  "byId": {
    "cs1-serie-wandinha": {
      "id": "cs1-serie-wandinha",
      "kind": "canonical-case",
      "imdbId": "tt13443470",
      "title": "Wandinha",
      "sessionTitle": "Uma escola nada comum",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2022,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Wednesday (TV series); Estadão/TecMundo — Wandinha: Netflix altera a classificação etária (14/12/2022); AdoroCinema — notícia sobre Wandinha (30/07/2025)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt13443470/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Wednesday (TV series)",
            "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Estadão/TecMundo — Wandinha: Netflix altera a classificação etária (14/12/2022)",
            "url": "https://www.estadao.com.br/minha-serie/play/256935-wandinha-netflix-altera-classificacao-etaria-serie-entenda/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "AdoroCinema — notícia sobre Wandinha (30/07/2025)",
            "url": "https://www.adorocinema.com/noticias/series/noticia-1000157194/",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Tim Burton dirigiu metade dos episódios da 1ª temporada e é produtor executivo, mas a série foi criada por Alfred Gough e Miles Millar."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O2",
              "texto": "Fate: A Saga Winx"
            },
            {
              "id": "C1-O4",
              "texto": "Locke & Key"
            },
            {
              "id": "C1-O3",
              "texto": "O Mundo Sombrio de Sabrina"
            },
            {
              "id": "C1-O1",
              "texto": "Wandinha"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Wandinha",
          "endereco": "IMDb; Wikipédia (EN) — Wednesday (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt13443470/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Wednesday (TV series)",
              "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "Uma fada que descobre seus poderes num internato mágico"
            },
            {
              "id": "C2-O2",
              "texto": "Uma bruxa adolescente dividida entre dois mundos"
            },
            {
              "id": "C2-O4",
              "texto": "Uma garota que encontra chaves mágicas numa casa antiga"
            },
            {
              "id": "C2-O1",
              "texto": "Uma adolescente sombria transferida para um internato de párias"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Uma adolescente sombria transferida para um internato de párias",
          "endereco": "Wikipédia (EN) — Wednesday (TV series)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Wednesday (TV series)",
              "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O3",
              "texto": "Irmãos Duffer"
            },
            {
              "id": "C3-O4",
              "texto": "Ryan Murphy"
            },
            {
              "id": "C3-O1",
              "texto": "Alfred Gough e Miles Millar"
            },
            {
              "id": "C3-O2",
              "texto": "Tim Burton"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Alfred Gough e Miles Millar",
          "endereco": "IMDb; Wikipédia (EN) — Wednesday (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt13443470/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Wednesday (TV series)",
              "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O1",
              "texto": "2022"
            },
            {
              "id": "C4-O3",
              "texto": "2023"
            },
            {
              "id": "C4-O4",
              "texto": "2020"
            },
            {
              "id": "C4-O2",
              "texto": "2021"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2022",
          "endereco": "IMDb",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt13443470/",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou em novembro de 2022, num serviço de streaming.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt13443470/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou em novembro de 2022, num serviço de streaming."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem oito episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série; a primeira temporada tem oito episódios."
          },
          {
            "id": "P03",
            "text": "A protagonista é transferida para um internato depois de ser expulsa de outra escola.",
            "importance": "essential",
            "relatedFields": [
              "C2",
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A protagonista é transferida para um internato depois de ser expulsa de outra escola."
          },
          {
            "id": "P04",
            "text": "Ela é expulsa por soltar piranhas na piscina da escola, para revidar quem maltratou o irmão dela.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ela é expulsa por soltar piranhas na piscina da escola, para revidar quem maltratou o irmão dela."
          },
          {
            "id": "P05",
            "text": "A protagonista toca violoncelo e escreve um romance de mistério numa máquina de escrever.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Wednesday Addams (Wednesday)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_Addams_(Wednesday)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A protagonista toca violoncelo e escreve um romance de mistério numa máquina de escrever."
          },
          {
            "id": "P06",
            "text": "Uma mão que anda sozinha é personagem fixo da série.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma mão que anda sozinha é personagem fixo da série."
          },
          {
            "id": "P07",
            "text": "A família da protagonista nasceu em cartuns publicados numa revista americana no fim dos anos 1930.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Addams Family",
                "url": "https://en.wikipedia.org/wiki/The_Addams_Family",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A família da protagonista nasceu em cartuns publicados numa revista americana no fim dos anos 1930."
          },
          {
            "id": "P08",
            "text": "Um cineasta famoso pela estética gótica dirigiu metade dos episódios da primeira temporada, mas não criou a série.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt13443470/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um cineasta famoso pela estética gótica dirigiu metade dos episódios da primeira temporada, mas não criou a série."
          },
          {
            "id": "P09",
            "text": "A dupla que criou a série também desenvolveu Smallville para a TV.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Alfred Gough",
                "url": "https://en.wikipedia.org/wiki/Alfred_Gough",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A dupla que criou a série também desenvolveu Smallville para a TV."
          },
          {
            "id": "P10",
            "text": "A atriz principal também está no elenco de Pânico (2022).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Jenna Ortega",
                "url": "https://en.wikipedia.org/wiki/Jenna_Ortega",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt13443470/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz principal também está no elenco de Pânico (2022)."
          },
          {
            "id": "P11",
            "text": "Uma atriz que viveu a mesma protagonista no cinema, nos anos 1990, aparece na série em outro papel.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma atriz que viveu a mesma protagonista no cinema, nos anos 1990, aparece na série em outro papel."
          },
          {
            "id": "P12",
            "text": "Uma cena de dança da protagonista num baile da escola viralizou no TikTok.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma cena de dança da protagonista num baile da escola viralizou no TikTok."
          },
          {
            "id": "P13",
            "text": "Pela conta da Netflix (visualizações nos primeiros 91 dias), a 1ª temporada é a série em inglês mais vista da plataforma.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — List of most-watched Netflix original programming",
                "url": "https://en.wikipedia.org/wiki/List_of_most-watched_Netflix_original_programming",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Netflix Tudum — Most Popular TV (English)",
                "url": "https://www.netflix.com/tudum/top10/most-popular/tv",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Pela conta da Netflix (visualizações nos primeiros 91 dias), a 1ª temporada é a série em inglês mais vista da plataforma."
          },
          {
            "id": "P14",
            "text": "A 1ª temporada foi filmada na Romênia; um castelo nos montes Cárpatos serviu de fachada para a escola.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A 1ª temporada foi filmada na Romênia; um castelo nos montes Cárpatos serviu de fachada para a escola."
          },
          {
            "id": "P15",
            "text": "A escola foi criada para 'párias': jovens lobisomens, sereias, vampiros e outros seres com dons.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A escola foi criada para 'párias': jovens lobisomens, sereias, vampiros e outros seres com dons."
          },
          {
            "id": "P16",
            "text": "A história se passa perto de uma cidadezinha fictícia no estado de Vermont, nos EUA.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A história se passa perto de uma cidadezinha fictícia no estado de Vermont, nos EUA."
          },
          {
            "id": "P17",
            "text": "A protagonista tem visões psíquicas, herdadas da mãe, e usa esse dom para investigar crimes misteriosos na região.",
            "importance": "essential",
            "relatedFields": [
              "C2",
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A protagonista tem visões psíquicas, herdadas da mãe, e usa esse dom para investigar crimes misteriosos na região."
          },
          {
            "id": "P18",
            "text": "A escola para onde a protagonista é mandada é a mesma em que os pais dela estudaram.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A escola para onde a protagonista é mandada é a mesma em que os pais dela estudaram."
          },
          {
            "id": "P19",
            "text": "A Netflix encomendou a série em fevereiro de 2021; a 1ª temporada foi filmada até março de 2022.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A Netflix encomendou a série em fevereiro de 2021; a 1ª temporada foi filmada até março de 2022."
          },
          {
            "id": "P20",
            "text": "Catherine Zeta-Jones e Luis Guzmán interpretam os pais da protagonista.",
            "importance": "relevant",
            "relatedFields": [
              "C2",
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Catherine Zeta-Jones e Luis Guzmán interpretam os pais da protagonista."
          },
          {
            "id": "P21",
            "text": "Gwendoline Christie, a Brienne de Game of Thrones, interpreta a diretora da escola.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Gwendoline Christie",
                "url": "https://en.wikipedia.org/wiki/Gwendoline_Christie",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Gwendoline Christie, a Brienne de Game of Thrones, interpreta a diretora da escola."
          },
          {
            "id": "P22",
            "text": "Os criadores da série também escreveram o filme Os Fantasmas Ainda se Divertem: Beetlejuice Beetlejuice (2024).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Alfred Gough",
                "url": "https://en.wikipedia.org/wiki/Alfred_Gough",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os criadores da série também escreveram o filme Os Fantasmas Ainda se Divertem: Beetlejuice Beetlejuice (2024)."
          },
          {
            "id": "P23",
            "text": "Para o papel, a atriz principal aprendeu violoncelo, esgrima, arco e flecha e até um pouco de alemão.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday Addams (Wednesday)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_Addams_(Wednesday)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para o papel, a atriz principal aprendeu violoncelo, esgrima, arco e flecha e até um pouco de alemão."
          },
          {
            "id": "P24",
            "text": "A atriz principal foi indicada ao Globo de Ouro e ao Emmy de melhor atriz em série de comédia por esse papel.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Jenna Ortega",
                "url": "https://en.wikipedia.org/wiki/Jenna_Ortega",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz principal foi indicada ao Globo de Ouro e ao Emmy de melhor atriz em série de comédia por esse papel."
          },
          {
            "id": "P25",
            "text": "A música original da famosa cena de dança é Goo Goo Muck, da banda The Cramps, lançada em 1981.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Wednesday (TV series)",
                "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A música original da famosa cena de dança é Goo Goo Muck, da banda The Cramps, lançada em 1981."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Wandinha (Netflix, 2022), criada por Alfred Gough e Miles Millar, acompanha Wandinha Addams num internato para párias, onde ela investiga uma série de crimes.",
        "hinge": "Tim Burton dirigiu metade dos episódios da 1ª temporada e é produtor executivo, mas a série foi criada por Alfred Gough e Miles Millar.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt13443470/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Wednesday (TV series)",
            "url": "https://en.wikipedia.org/wiki/Wednesday_(TV_series)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-vingadores-ultimato": {
      "id": "cs1-filme-vingadores-ultimato",
      "kind": "canonical-case",
      "imdbId": "tt4154796",
      "title": "Vingadores: Ultimato",
      "sessionTitle": "Depois que metade sumiu",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2019,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Avengers: Endgame; Wikipédia (PT) — Avengers: Endgame; AdoroCinema — Vingadores: Ultimato (classificação e estreia no Brasil)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt4154796/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Avengers: Endgame",
            "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Avengers: Endgame",
            "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "AdoroCinema — Vingadores: Ultimato (classificação e estreia no Brasil)",
            "url": "https://www.adorocinema.com/filmes/filme-232669/",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Jon Favreau, diretor de Homem de Ferro (2008), está no elenco como Happy Hogan, mas não dirigiu o filme: a direção é dos irmãos Russo."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Vingadores: Ultimato"
            },
            {
              "id": "C1-O3",
              "texto": "Liga da Justiça"
            },
            {
              "id": "C1-O2",
              "texto": "Vingadores: Guerra Infinita"
            },
            {
              "id": "C1-O4",
              "texto": "Capitão América: Guerra Civil"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Vingadores: Ultimato",
          "endereco": "IMDb; Wikipédia (PT) — Avengers: Endgame",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4154796/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Avengers: Endgame",
              "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Batman"
            },
            {
              "id": "C2-O1",
              "texto": "Homem de Ferro"
            },
            {
              "id": "C2-O3",
              "texto": "Mulher-Maravilha"
            },
            {
              "id": "C2-O4",
              "texto": "Deadpool"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Homem de Ferro (com Capitão América, Thor, Hulk, Viúva Negra, Gavião Arqueiro, Homem-Formiga, Capitã Marvel, Máquina de Combate, Rocket, Nebulosa)",
          "endereco": "IMDb; Wikipédia (EN) — Avengers: Endgame",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4154796/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Avengers: Endgame",
              "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O4",
              "texto": "Kevin Feige"
            },
            {
              "id": "C3-O3",
              "texto": "Joss Whedon"
            },
            {
              "id": "C3-O1",
              "texto": "Anthony Russo e Joe Russo"
            },
            {
              "id": "C3-O2",
              "texto": "Jon Favreau"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Anthony Russo e Joe Russo",
          "endereco": "IMDb; Wikipédia (EN) — Avengers: Endgame",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4154796/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Avengers: Endgame",
              "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2020"
            },
            {
              "id": "C4-O2",
              "texto": "2018"
            },
            {
              "id": "C4-O1",
              "texto": "2019"
            },
            {
              "id": "C4-O4",
              "texto": "2017"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2019",
          "endereco": "IMDb",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4154796/",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em 25 de abril de 2019, um dia antes dos Estados Unidos.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Avengers: Endgame",
                "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em 25 de abril de 2019, um dia antes dos Estados Unidos."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de pouco mais de três horas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4154796/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É um longa-metragem de pouco mais de três horas."
          },
          {
            "id": "P03",
            "text": "Teve pré-estreia mundial em Los Angeles, em 22 de abril de 2019.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Teve pré-estreia mundial em Los Angeles, em 22 de abril de 2019."
          },
          {
            "id": "P04",
            "text": "É o 22º filme de um universo cinematográfico compartilhado.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É o 22º filme de um universo cinematográfico compartilhado."
          },
          {
            "id": "P05",
            "text": "A história começa 23 dias depois de um vilão apagar metade da vida do universo.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avengers: Endgame",
                "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A história começa 23 dias depois de um vilão apagar metade da vida do universo."
          },
          {
            "id": "P06",
            "text": "Um dos protagonistas está à deriva no espaço, numa nave, ao lado de uma aliada ciborgue.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avengers: Endgame",
                "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos protagonistas está à deriva no espaço, numa nave, ao lado de uma aliada ciborgue."
          },
          {
            "id": "P07",
            "text": "Esse protagonista é um bilionário inventor que luta dentro de uma armadura.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Esse protagonista é um bilionário inventor que luta dentro de uma armadura."
          },
          {
            "id": "P08",
            "text": "Uma heroína com poderes cósmicos resgata a nave perdida e a traz de volta à Terra.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avengers: Endgame",
                "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma heroína com poderes cósmicos resgata a nave perdida e a traz de volta à Terra."
          },
          {
            "id": "P09",
            "text": "Os heróis que restaram estão derrotados e tentam reagir à perda.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avengers: Endgame",
                "url": "https://pt.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os heróis que restaram estão derrotados e tentam reagir à perda."
          },
          {
            "id": "P10",
            "text": "Ainda no primeiro ato, a trama dá um salto de cinco anos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ainda no primeiro ato, a trama dá um salto de cinco anos."
          },
          {
            "id": "P11",
            "text": "Um herói que encolhe escapa de uma dimensão quântica, onde para ele só passaram cinco horas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um herói que encolhe escapa de uma dimensão quântica, onde para ele só passaram cinco horas."
          },
          {
            "id": "P12",
            "text": "Foi dirigido por dois irmãos que antes dirigiram episódios da série Community.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4154796/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi dirigido por dois irmãos que antes dirigiram episódios da série Community."
          },
          {
            "id": "P13",
            "text": "Foi filmado logo depois do filme anterior da equipe, sob o título provisório \"Mary Lou 2\".",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi filmado logo depois do filme anterior da equipe, sob o título provisório \"Mary Lou 2\"."
          },
          {
            "id": "P14",
            "text": "O diretor do primeiro filme solo de um dos protagonistas atua aqui como ator, mas não dirigiu este filme.",
            "importance": "relevant",
            "relatedFields": [
              "C3",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4154796/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor do primeiro filme solo de um dos protagonistas atua aqui como ator, mas não dirigiu este filme."
          },
          {
            "id": "P15",
            "text": "O roteiro é de Christopher Markus e Stephen McFeely.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O roteiro é de Christopher Markus e Stephen McFeely."
          },
          {
            "id": "P16",
            "text": "Foi rodado principalmente nos estúdios Pinewood Atlanta, no estado da Geórgia (EUA).",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi rodado principalmente nos estúdios Pinewood Atlanta, no estado da Geórgia (EUA)."
          },
          {
            "id": "P17",
            "text": "Foi um dos primeiros filmes de Hollywood rodados inteiramente com câmeras digitais IMAX.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi um dos primeiros filmes de Hollywood rodados inteiramente com câmeras digitais IMAX."
          },
          {
            "id": "P18",
            "text": "O ator desse protagonista também estrelou Sherlock Holmes (2009) e Oppenheimer (2023).",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4154796/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator desse protagonista também estrelou Sherlock Holmes (2009) e Oppenheimer (2023)."
          },
          {
            "id": "P19",
            "text": "Paul Rudd, Brie Larson e Karen Gillan estão no elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4154796/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Paul Rudd, Brie Larson e Karen Gillan estão no elenco."
          },
          {
            "id": "P20",
            "text": "Josh Brolin interpreta o grande vilão.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Josh Brolin interpreta o grande vilão."
          },
          {
            "id": "P21",
            "text": "Jon Favreau e Gwyneth Paltrow também estão no elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C2",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Jon Favreau e Gwyneth Paltrow também estão no elenco."
          },
          {
            "id": "P22",
            "text": "Foi indicado ao Oscar de melhores efeitos visuais.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi indicado ao Oscar de melhores efeitos visuais."
          },
          {
            "id": "P23",
            "text": "Teve a maior abertura mundial da história do cinema, cerca de US$ 1,2 bilhão.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Teve a maior abertura mundial da história do cinema, cerca de US$ 1,2 bilhão."
          },
          {
            "id": "P24",
            "text": "Em 2019 tornou-se a maior bilheteria de todos os tempos, superando Avatar.",
            "importance": "relevant",
            "relatedFields": [
              "C4",
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Em 2019 tornou-se a maior bilheteria de todos os tempos, superando Avatar."
          },
          {
            "id": "P25",
            "text": "Traz a última participação especial de um lendário criador de quadrinhos, lançada após sua morte.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Endgame",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Traz a última participação especial de um lendário criador de quadrinhos, lançada após sua morte."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Vingadores: Ultimato (2019), dirigido por Anthony e Joe Russo, começa 23 dias depois de Thanos apagar metade da vida do universo, com os heróis restantes tentando reagir.",
        "hinge": "Jon Favreau, diretor de Homem de Ferro (2008), está no elenco como Happy Hogan, mas não dirigiu o filme: a direção é dos irmãos Russo.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt4154796/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Avengers: Endgame",
            "url": "https://en.wikipedia.org/wiki/Avengers:_Endgame",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-stranger-things": {
      "id": "cs1-serie-stranger-things",
      "kind": "canonical-case",
      "imdbId": "tt4574334",
      "title": "Stranger Things",
      "sessionTitle": "Um sumiço na cidadezinha",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2016,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Stranger Things; Wikipédia (EN) — Stranger Things season 1",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt4574334/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Stranger Things",
            "url": "https://en.wikipedia.org/wiki/Stranger_Things",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Stranger Things season 1",
            "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Shawn Levy dirigiu episódios e é produtor executivo, mas a série foi criada pelos Irmãos Duffer."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O2",
              "texto": "Dark"
            },
            {
              "id": "C1-O4",
              "texto": "Locke & Key"
            },
            {
              "id": "C1-O3",
              "texto": "The OA"
            },
            {
              "id": "C1-O1",
              "texto": "Stranger Things"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Stranger Things",
          "endereco": "IMDb; Wikipédia (EN) — Stranger Things",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4574334/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Stranger Things",
              "url": "https://en.wikipedia.org/wiki/Stranger_Things",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Matilda"
            },
            {
              "id": "C2-O4",
              "texto": "Jean Grey"
            },
            {
              "id": "C2-O3",
              "texto": "Carrie White"
            },
            {
              "id": "C2-O1",
              "texto": "Onze"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Onze (com Joyce Byers, Jim Hopper, Mike Wheeler, Dustin Henderson, Lucas Sinclair, Will Byers, Nancy Wheeler, Jonathan Byers)",
          "endereco": "Wikipédia (EN) — Stranger Things season 1; Wikipédia (PT) — Stranger Things",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Stranger Things season 1",
              "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Stranger Things",
              "url": "https://pt.wikipedia.org/wiki/Stranger_Things",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Matt Duffer e Ross Duffer (Irmãos Duffer)"
            },
            {
              "id": "C3-O2",
              "texto": "Shawn Levy"
            },
            {
              "id": "C3-O4",
              "texto": "M. Night Shyamalan"
            },
            {
              "id": "C3-O3",
              "texto": "J. J. Abrams"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Matt Duffer e Ross Duffer (Irmãos Duffer)",
          "endereco": "Wikipédia (EN) — Stranger Things; IMDb",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Stranger Things",
              "url": "https://en.wikipedia.org/wiki/Stranger_Things",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4574334/",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2015"
            },
            {
              "id": "C4-O4",
              "texto": "2018"
            },
            {
              "id": "C4-O1",
              "texto": "2016"
            },
            {
              "id": "C4-O3",
              "texto": "2017"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2016",
          "endereco": "IMDb; Wikipédia (EN) — Stranger Things",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4574334/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Stranger Things",
              "url": "https://en.wikipedia.org/wiki/Stranger_Things",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou em julho de 2016, num serviço de streaming.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4574334/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou em julho de 2016, num serviço de streaming."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem oito episódios, cada um chamado de \"capítulo\".",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série; a primeira temporada tem oito episódios, cada um chamado de \"capítulo\"."
          },
          {
            "id": "P03",
            "text": "A primeira temporada se passa em novembro de 1983.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A primeira temporada se passa em novembro de 1983."
          },
          {
            "id": "P04",
            "text": "A trama se passa numa pequena cidade fictícia do estado de Indiana (EUA).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A trama se passa numa pequena cidade fictícia do estado de Indiana (EUA)."
          },
          {
            "id": "P05",
            "text": "Um menino de 12 anos some ao voltar para casa de bicicleta, à noite.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um menino de 12 anos some ao voltar para casa de bicicleta, à noite."
          },
          {
            "id": "P06",
            "text": "Antes de sumir, ele jogava uma longa partida de Dungeons & Dragons com três amigos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Antes de sumir, ele jogava uma longa partida de Dungeons & Dragons com três amigos."
          },
          {
            "id": "P07",
            "text": "A mãe do menino recebe um telefonema que acredita ser do filho desaparecido.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A mãe do menino recebe um telefonema que acredita ser do filho desaparecido."
          },
          {
            "id": "P08",
            "text": "Um laboratório do governo na cidade esconde experiências secretas.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um laboratório do governo na cidade esconde experiências secretas."
          },
          {
            "id": "P09",
            "text": "Uma menina de cabeça raspada e roupa de hospital aparece numa lanchonete.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma menina de cabeça raspada e roupa de hospital aparece numa lanchonete."
          },
          {
            "id": "P10",
            "text": "Essa menina fugiu do laboratório e move objetos com a mente.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Essa menina fugiu do laboratório e move objetos com a mente."
          },
          {
            "id": "P11",
            "text": "Ela tem um número tatuado no braço, que vira o nome pelo qual é chamada.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Stranger Things",
                "url": "https://pt.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ela tem um número tatuado no braço, que vira o nome pelo qual é chamada."
          },
          {
            "id": "P12",
            "text": "Foi criada por dois irmãos gêmeos que antes trabalharam na série Wayward Pines.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi criada por dois irmãos gêmeos que antes trabalharam na série Wayward Pines."
          },
          {
            "id": "P13",
            "text": "O diretor de Uma Noite no Museu dirigiu dois episódios e é produtor executivo, mas não criou a série.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor de Uma Noite no Museu dirigiu dois episódios e é produtor executivo, mas não criou a série."
          },
          {
            "id": "P14",
            "text": "O título provisório era o nome de uma cidade litorânea do estado de Nova York.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O título provisório era o nome de uma cidade litorânea do estado de Nova York."
          },
          {
            "id": "P15",
            "text": "Foi gravada principalmente na região de Atlanta, na Geórgia (EUA).",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi gravada principalmente na região de Atlanta, na Geórgia (EUA)."
          },
          {
            "id": "P16",
            "text": "A trilha de sintetizadores é de dois integrantes da banda eletrônica Survive.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A trilha de sintetizadores é de dois integrantes da banda eletrônica Survive."
          },
          {
            "id": "P17",
            "text": "A mãe do menino desaparecido é vivida por Winona Ryder, de Edward Mãos de Tesoura.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A mãe do menino desaparecido é vivida por Winona Ryder, de Edward Mãos de Tesoura."
          },
          {
            "id": "P18",
            "text": "O chefe de polícia que lidera as buscas é vivido por David Harbour.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O chefe de polícia que lidera as buscas é vivido por David Harbour."
          },
          {
            "id": "P19",
            "text": "A atriz que vive a menina misteriosa depois estrelou Enola Holmes.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz que vive a menina misteriosa depois estrelou Enola Holmes."
          },
          {
            "id": "P20",
            "text": "Finn Wolfhard, do elenco jovem, também está em It: A Coisa (2017).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Stranger Things season 1",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Finn Wolfhard, do elenco jovem, também está em It: A Coisa (2017)."
          },
          {
            "id": "P21",
            "text": "O elenco da primeira temporada venceu o prêmio do Sindicato dos Atores (SAG) de melhor elenco em série dramática.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O elenco da primeira temporada venceu o prêmio do Sindicato dos Atores (SAG) de melhor elenco em série dramática."
          },
          {
            "id": "P22",
            "text": "A primeira temporada concorreu ao Emmy de melhor série dramática.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A primeira temporada concorreu ao Emmy de melhor série dramática."
          },
          {
            "id": "P23",
            "text": "Steven Spielberg, Stephen King e John Carpenter estão entre as inspirações declaradas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Steven Spielberg, Stephen King e John Carpenter estão entre as inspirações declaradas."
          },
          {
            "id": "P24",
            "text": "O nome definitivo foi escolhido, em parte, por soar como título de livro de Stephen King.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O nome definitivo foi escolhido, em parte, por soar como título de livro de Stephen King."
          },
          {
            "id": "P25",
            "text": "A abertura mostra letras vermelhas deslizando sobre fundo preto, em estilo anos 1980.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Stranger Things",
                "url": "https://en.wikipedia.org/wiki/Stranger_Things",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A abertura mostra letras vermelhas deslizando sobre fundo preto, em estilo anos 1980."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Stranger Things (Netflix, 2016), criada pelos Irmãos Duffer, começa com o desaparecimento de um menino numa cidadezinha de Indiana em 1983 e a chegada de Onze, uma menina com poderes que fugiu de um laboratório.",
        "hinge": "Shawn Levy dirigiu episódios e é produtor executivo, mas a série foi criada pelos Irmãos Duffer.",
        "references": [
          {
            "source": "Wikipédia (EN) — Stranger Things",
            "url": "https://en.wikipedia.org/wiki/Stranger_Things",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Stranger Things season 1",
            "url": "https://en.wikipedia.org/wiki/Stranger_Things_season_1",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-homem-aranha-sem-volta-para-casa": {
      "id": "cs1-filme-homem-aranha-sem-volta-para-casa",
      "kind": "canonical-case",
      "imdbId": "tt10872600",
      "title": "Homem-Aranha: Sem Volta para Casa",
      "sessionTitle": "Um segredo impossível de guardar",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2021,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Spider-Man: No Way Home; Wikipédia (PT) — Homem-Aranha: Sem Volta para Casa; AdoroCinema — Homem-Aranha: Sem Volta para Casa (classificação e estreia no Brasil)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt10872600/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Spider-Man: No Way Home",
            "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Homem-Aranha: Sem Volta para Casa",
            "url": "https://pt.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "AdoroCinema — Homem-Aranha: Sem Volta para Casa (classificação e estreia no Brasil)",
            "url": "https://www.adorocinema.com/filmes/filme-256880/",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Vilões dos filmes de Sam Raimi aparecem nos trailers, mas Raimi não dirigiu este filme — e Kevin Feige é produtor, não diretor."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Homem-Aranha: Sem Volta para Casa"
            },
            {
              "id": "C1-O2",
              "texto": "Doutor Estranho no Multiverso da Loucura"
            },
            {
              "id": "C1-O4",
              "texto": "Venom: Tempo de Carnificina"
            },
            {
              "id": "C1-O3",
              "texto": "Shang-Chi e a Lenda dos Dez Anéis"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Homem-Aranha: Sem Volta para Casa",
          "endereco": "IMDb; Wikipédia (PT) — Homem-Aranha: Sem Volta para Casa",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10872600/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Homem-Aranha: Sem Volta para Casa",
              "url": "https://pt.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Um jornalista que se funde a um parasita alienígena"
            },
            {
              "id": "C2-O3",
              "texto": "Um bilionário inventor que luta dentro de uma armadura"
            },
            {
              "id": "C2-O2",
              "texto": "Um feiticeiro que protege a Terra de ameaças místicas"
            },
            {
              "id": "C2-O1",
              "texto": "Um jovem herói que tem a identidade secreta revelada ao mundo"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Um jovem herói que tem a identidade secreta revelada ao mundo",
          "endereco": "IMDb; Wikipédia (EN) — Spider-Man: No Way Home",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10872600/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Spider-Man: No Way Home",
              "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O3",
              "texto": "Kevin Feige"
            },
            {
              "id": "C3-O4",
              "texto": "Marc Webb"
            },
            {
              "id": "C3-O2",
              "texto": "Sam Raimi"
            },
            {
              "id": "C3-O1",
              "texto": "Jon Watts"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Jon Watts",
          "endereco": "IMDb; Wikipédia (EN) — Spider-Man: No Way Home",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10872600/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Spider-Man: No Way Home",
              "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O4",
              "texto": "2020"
            },
            {
              "id": "C4-O1",
              "texto": "2021"
            },
            {
              "id": "C4-O2",
              "texto": "2019"
            },
            {
              "id": "C4-O3",
              "texto": "2022"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2021",
          "endereco": "IMDb; Wikipédia (EN) — Spider-Man: No Way Home",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10872600/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Spider-Man: No Way Home",
              "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou nos cinemas em dezembro de 2021, ainda durante a pandemia de covid-19.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt10872600/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou nos cinemas em dezembro de 2021, ainda durante a pandemia de covid-19."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de quase duas horas e meia (148 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É um longa-metragem de quase duas horas e meia (148 minutos)."
          },
          {
            "id": "P03",
            "text": "É o 27º filme de um grande universo cinematográfico de super-heróis e integra a sua Fase Quatro.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É o 27º filme de um grande universo cinematográfico de super-heróis e integra a sua Fase Quatro."
          },
          {
            "id": "P04",
            "text": "É a continuação direta de dois filmes lançados em 2017 e 2019.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É a continuação direta de dois filmes lançados em 2017 e 2019."
          },
          {
            "id": "P05",
            "text": "A história começa logo depois que a identidade secreta do herói é exposta ao mundo inteiro.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A história começa logo depois que a identidade secreta do herói é exposta ao mundo inteiro."
          },
          {
            "id": "P06",
            "text": "Incriminado pela morte de um vilão do filme anterior, o herói passa a ser investigado pelas autoridades.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Incriminado pela morte de um vilão do filme anterior, o herói passa a ser investigado pelas autoridades."
          },
          {
            "id": "P07",
            "text": "Por causa da polêmica, o herói e dois amigos têm a inscrição recusada pelo MIT.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Por causa da polêmica, o herói e dois amigos têm a inscrição recusada pelo MIT."
          },
          {
            "id": "P08",
            "text": "Para recuperar o anonimato, o herói pede a um feiticeiro que faça o mundo esquecer quem ele é.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para recuperar o anonimato, o herói pede a um feiticeiro que faça o mundo esquecer quem ele é."
          },
          {
            "id": "P09",
            "text": "O feitiço sai do controle e passa a atrair visitantes de outros universos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O feitiço sai do controle e passa a atrair visitantes de outros universos."
          },
          {
            "id": "P10",
            "text": "Um cientista com braços mecânicos ataca o herói e arranca nanotecnologia do seu traje.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um cientista com braços mecânicos ataca o herói e arranca nanotecnologia do seu traje."
          },
          {
            "id": "P11",
            "text": "O protagonista é um estudante do ensino médio que vive no Queens, em Nova York.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O protagonista é um estudante do ensino médio que vive no Queens, em Nova York."
          },
          {
            "id": "P12",
            "text": "Foi dirigido pelo mesmo cineasta dos dois filmes anteriores desta trilogia.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Jon Watts",
                "url": "https://en.wikipedia.org/wiki/Jon_Watts",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi dirigido pelo mesmo cineasta dos dois filmes anteriores desta trilogia."
          },
          {
            "id": "P13",
            "text": "O diretor começou com terrores e suspenses independentes: Clown (2014) e Cop Car (2015).",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Jon Watts",
                "url": "https://en.wikipedia.org/wiki/Jon_Watts",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor começou com terrores e suspenses independentes: Clown (2014) e Cop Car (2015)."
          },
          {
            "id": "P14",
            "text": "É uma coprodução da Columbia Pictures (Sony) com a Marvel Studios.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma coprodução da Columbia Pictures (Sony) com a Marvel Studios."
          },
          {
            "id": "P15",
            "text": "O roteiro é da dupla Chris McKenna e Erik Sommers; a direção ficou com outra pessoa.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O roteiro é da dupla Chris McKenna e Erik Sommers; a direção ficou com outra pessoa."
          },
          {
            "id": "P16",
            "text": "Foi filmado entre outubro de 2020 e março de 2021, sobretudo em Atlanta, com cenas também em Nova York.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi filmado entre outubro de 2020 e março de 2021, sobretudo em Atlanta, com cenas também em Nova York."
          },
          {
            "id": "P17",
            "text": "O ator principal também protagoniza Uncharted: Fora do Mapa (2022).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Uncharted: Fora do Mapa",
                "url": "https://pt.wikipedia.org/wiki/Uncharted_(filme)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal também protagoniza Uncharted: Fora do Mapa (2022)."
          },
          {
            "id": "P18",
            "text": "O par romântico do herói é vivido por uma atriz também famosa por Euphoria e Duna.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Zendaya",
                "url": "https://pt.wikipedia.org/wiki/Zendaya",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O par romântico do herói é vivido por uma atriz também famosa por Euphoria e Duna."
          },
          {
            "id": "P19",
            "text": "Alfred Molina volta a um papel de vilão que já tinha vivido num filme de 2004.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Alfred Molina volta a um papel de vilão que já tinha vivido num filme de 2004."
          },
          {
            "id": "P20",
            "text": "Benedict Cumberbatch está no elenco como um ex-neurocirurgião que virou mestre das artes místicas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Benedict Cumberbatch está no elenco como um ex-neurocirurgião que virou mestre das artes místicas."
          },
          {
            "id": "P21",
            "text": "Foi a maior bilheteria mundial de 2021, com mais de US$ 1,9 bilhão.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi a maior bilheteria mundial de 2021, com mais de US$ 1,9 bilhão."
          },
          {
            "id": "P22",
            "text": "Foi indicado ao Oscar de melhores efeitos visuais.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi indicado ao Oscar de melhores efeitos visuais."
          },
          {
            "id": "P23",
            "text": "Para despistar curiosos, parte das filmagens usou o título provisório \"Serenity Now\".",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para despistar curiosos, parte das filmagens usou o título provisório \"Serenity Now\"."
          },
          {
            "id": "P24",
            "text": "Uma versão estendida, com cenas extras, voltou aos cinemas em setembro de 2022.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma versão estendida, com cenas extras, voltou aos cinemas em setembro de 2022."
          },
          {
            "id": "P25",
            "text": "É o terceiro filme solo do herói com o mesmo ator no papel principal.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Spider-Man: No Way Home",
                "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É o terceiro filme solo do herói com o mesmo ator no papel principal."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Homem-Aranha: Sem Volta para Casa (2021), dirigido por Jon Watts, acompanha Peter Parker tentando recuperar sua identidade secreta com a ajuda de um feitiço que sai do controle.",
        "hinge": "Vilões dos filmes de Sam Raimi aparecem nos trailers, mas Raimi não dirigiu este filme — e Kevin Feige é produtor, não diretor.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt10872600/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Spider-Man: No Way Home",
            "url": "https://en.wikipedia.org/wiki/Spider-Man:_No_Way_Home",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-the-big-bang-theory": {
      "id": "cs1-serie-the-big-bang-theory",
      "kind": "canonical-case",
      "imdbId": "tt0898266",
      "title": "The Big Bang Theory",
      "sessionTitle": "Gênios sem jeito social",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2007,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — The Big Bang Theory; Wikipédia (PT) — The Big Bang Theory",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0898266/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Big Bang Theory",
            "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — The Big Bang Theory",
            "url": "https://pt.wikipedia.org/wiki/The_Big_Bang_Theory",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "James Burrows dirigiu os dois pilotos e Chuck Lorre também criou Dois Homens e Meio com Lee Aronsohn, mas a série é de Chuck Lorre e Bill Prady."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "The Big Bang Theory"
            },
            {
              "id": "C1-O2",
              "texto": "Dois Homens e Meio"
            },
            {
              "id": "C1-O3",
              "texto": "How I Met Your Mother"
            },
            {
              "id": "C1-O4",
              "texto": "The IT Crowd"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "The Big Bang Theory",
          "endereco": "IMDb; Wikipédia (PT) — The Big Bang Theory",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0898266/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — The Big Bang Theory",
              "url": "https://pt.wikipedia.org/wiki/The_Big_Bang_Theory",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Barney Stinson"
            },
            {
              "id": "C2-O3",
              "texto": "Abed Nadir"
            },
            {
              "id": "C2-O1",
              "texto": "Sheldon Cooper"
            },
            {
              "id": "C2-O4",
              "texto": "Maurice Moss"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Sheldon Cooper (com Leonard Hofstadter, Penny, Howard Wolowitz, Raj Koothrappali)",
          "endereco": "IMDb; Wikipédia (EN) — The Big Bang Theory",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0898266/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Big Bang Theory",
              "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O4",
              "texto": "Steven Molaro"
            },
            {
              "id": "C3-O3",
              "texto": "James Burrows"
            },
            {
              "id": "C3-O2",
              "texto": "Chuck Lorre e Lee Aronsohn"
            },
            {
              "id": "C3-O1",
              "texto": "Chuck Lorre e Bill Prady"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Chuck Lorre e Bill Prady",
          "endereco": "IMDb; Wikipédia (EN) — The Big Bang Theory",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0898266/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Big Bang Theory",
              "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2008"
            },
            {
              "id": "C4-O2",
              "texto": "2006"
            },
            {
              "id": "C4-O4",
              "texto": "2009"
            },
            {
              "id": "C4-O1",
              "texto": "2007"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2007",
          "endereco": "IMDb; Wikipédia (EN) — The Big Bang Theory",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0898266/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Big Bang Theory",
              "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou em setembro de 2007 numa grande rede de TV aberta dos EUA.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0898266/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou em setembro de 2007 numa grande rede de TV aberta dos EUA."
          },
          {
            "id": "P02",
            "text": "É uma série de comédia com episódios de cerca de 20 minutos; a primeira temporada tem 17.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série de comédia com episódios de cerca de 20 minutos; a primeira temporada tem 17."
          },
          {
            "id": "P03",
            "text": "Durou 12 temporadas e 279 episódios, até maio de 2019.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Durou 12 temporadas e 279 episódios, até maio de 2019."
          },
          {
            "id": "P04",
            "text": "É gravada no formato multicâmera, diante de uma plateia ao vivo.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É gravada no formato multicâmera, diante de uma plateia ao vivo."
          },
          {
            "id": "P05",
            "text": "Dois físicos que dividem um apartamento ganham uma vizinha nova do outro lado do corredor.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Dois físicos que dividem um apartamento ganham uma vizinha nova do outro lado do corredor."
          },
          {
            "id": "P06",
            "text": "Os dois físicos trabalham no Instituto de Tecnologia da Califórnia (Caltech).",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — List of The Big Bang Theory characters",
                "url": "https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_characters",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os dois físicos trabalham no Instituto de Tecnologia da Califórnia (Caltech)."
          },
          {
            "id": "P07",
            "text": "A vizinha sonha em ser atriz e trabalha como garçonete numa rede de restaurantes.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — List of The Big Bang Theory characters",
                "url": "https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_characters",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A vizinha sonha em ser atriz e trabalha como garçonete numa rede de restaurantes."
          },
          {
            "id": "P08",
            "text": "Um amigo do grupo é engenheiro aeroespacial e mora com a mãe.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — List of The Big Bang Theory characters",
                "url": "https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_characters",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um amigo do grupo é engenheiro aeroespacial e mora com a mãe."
          },
          {
            "id": "P09",
            "text": "Outro amigo, astrofísico, no início não consegue falar com mulheres sem ter bebido.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — List of The Big Bang Theory characters",
                "url": "https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_characters",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Outro amigo, astrofísico, no início não consegue falar com mulheres sem ter bebido."
          },
          {
            "id": "P10",
            "text": "Um dos protagonistas é um físico teórico genial, apegado a rotinas e pouco hábil socialmente.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — List of The Big Bang Theory characters",
                "url": "https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_characters",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos protagonistas é um físico teórico genial, apegado a rotinas e pouco hábil socialmente."
          },
          {
            "id": "P11",
            "text": "O elevador do prédio onde vivem fica quebrado durante quase toda a série; todos sobem de escada.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O elevador do prédio onde vivem fica quebrado durante quase toda a série; todos sobem de escada."
          },
          {
            "id": "P12",
            "text": "O outro físico do apartamento é experimental: faz pesquisa com experimentos em laboratório.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — List of The Big Bang Theory characters",
                "url": "https://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_characters",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O outro físico do apartamento é experimental: faz pesquisa com experimentos em laboratório."
          },
          {
            "id": "P13",
            "text": "Foi criada por uma dupla; um dos dois também criou Dois Homens e Meio.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Two and a Half Men",
                "url": "https://en.wikipedia.org/wiki/Two_and_a_Half_Men",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi criada por uma dupla; um dos dois também criou Dois Homens e Meio."
          },
          {
            "id": "P14",
            "text": "O outro criador escreveu para Gilmore Girls e depois criou uma série dos Muppets em 2015.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Bill Prady",
                "url": "https://en.wikipedia.org/wiki/Bill_Prady",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O outro criador escreveu para Gilmore Girls e depois criou uma série dos Muppets em 2015."
          },
          {
            "id": "P15",
            "text": "Um primeiro piloto, com outras personagens femininas, foi rejeitado e nunca foi ao ar.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um primeiro piloto, com outras personagens femininas, foi rejeitado e nunca foi ao ar."
          },
          {
            "id": "P16",
            "text": "Um veterano das sitcoms dirigiu os dois pilotos, mas não continuou na série — nem a criou.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um veterano das sitcoms dirigiu os dois pilotos, mas não continuou na série — nem a criou."
          },
          {
            "id": "P17",
            "text": "Um professor de física da UCLA atuou como consultor científico da série.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um professor de física da UCLA atuou como consultor científico da série."
          },
          {
            "id": "P18",
            "text": "O ator que vive o físico teórico ganhou quatro Emmys de melhor ator em comédia pelo papel.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator que vive o físico teórico ganhou quatro Emmys de melhor ator em comédia pelo papel."
          },
          {
            "id": "P19",
            "text": "Um dos atores principais já tinha atuado na sitcom Roseanne.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos atores principais já tinha atuado na sitcom Roseanne."
          },
          {
            "id": "P20",
            "text": "Uma atriz que entrou no elenco depois tem, na vida real, doutorado em neurociência.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma atriz que entrou no elenco depois tem, na vida real, doutorado em neurociência."
          },
          {
            "id": "P21",
            "text": "Na quarta temporada, tornou-se a comédia de maior audiência da TV americana.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Na quarta temporada, tornou-se a comédia de maior audiência da TV americana."
          },
          {
            "id": "P22",
            "text": "Concorreu ao Emmy de melhor série de comédia de 2011 a 2014.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Concorreu ao Emmy de melhor série de comédia de 2011 a 2014."
          },
          {
            "id": "P23",
            "text": "Os primeiros nomes dos dois físicos homenageiam um veterano produtor da TV americana.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os primeiros nomes dos dois físicos homenageiam um veterano produtor da TV americana."
          },
          {
            "id": "P24",
            "text": "A música de abertura, da banda canadense Barenaked Ladies, resume a história do universo.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A música de abertura, da banda canadense Barenaked Ladies, resume a história do universo."
          },
          {
            "id": "P25",
            "text": "Ganhou uma série derivada sobre a infância de um dos protagonistas, no Texas.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Big Bang Theory",
                "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Young Sheldon",
                "url": "https://en.wikipedia.org/wiki/Young_Sheldon",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ganhou uma série derivada sobre a infância de um dos protagonistas, no Texas."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "The Big Bang Theory (CBS, 2007), criada por Chuck Lorre e Bill Prady, acompanha os físicos Sheldon Cooper e Leonard Hofstadter e sua nova vizinha, Penny.",
        "hinge": "James Burrows dirigiu os dois pilotos e Chuck Lorre também criou Dois Homens e Meio com Lee Aronsohn, mas a série é de Chuck Lorre e Bill Prady.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0898266/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Big Bang Theory",
            "url": "https://en.wikipedia.org/wiki/The_Big_Bang_Theory",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Two and a Half Men",
            "url": "https://en.wikipedia.org/wiki/Two_and_a_Half_Men",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-avatar-o-caminho-da-agua": {
      "id": "cs1-filme-avatar-o-caminho-da-agua",
      "kind": "canonical-case",
      "imdbId": "tt1630029",
      "title": "Avatar: O Caminho da Água",
      "sessionTitle": "Uma família foge para o mar",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2022,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Avatar: The Way of Water; Wikipédia (PT) — Avatar: O Caminho da Água; AdoroCinema — Avatar: O Caminho da Água; AdoroCinema — Avatar: O Caminho da Água (classificação e estreia no Brasil)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1630029/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Avatar: The Way of Water",
            "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
            "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "AdoroCinema — Avatar: O Caminho da Água",
            "url": "https://www.adorocinema.com/filmes/filme-178014/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "AdoroCinema — Avatar: O Caminho da Água (classificação e estreia no Brasil)",
            "url": "https://www.adorocinema.com/filmes/filme-178014/",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "A produção começou em 2017 e foi interrompida pela pandemia em 2020, mas o filme só estreou em dezembro de 2022."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Avatar: O Caminho da Água"
            },
            {
              "id": "C1-O4",
              "texto": "Aquaman 2: O Reino Perdido"
            },
            {
              "id": "C1-O3",
              "texto": "Pantera Negra: Wakanda para Sempre"
            },
            {
              "id": "C1-O2",
              "texto": "Duna"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Avatar: O Caminho da Água",
          "endereco": "IMDb; Wikipédia (PT) — Avatar: O Caminho da Água; AdoroCinema — Avatar: O Caminho da Água",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1630029/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
              "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "AdoroCinema — Avatar: O Caminho da Água",
              "url": "https://www.adorocinema.com/filmes/filme-178014/",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Paul Atreides"
            },
            {
              "id": "C2-O2",
              "texto": "Coronel Miles Quaritch"
            },
            {
              "id": "C2-O3",
              "texto": "Tonowari"
            },
            {
              "id": "C2-O1",
              "texto": "Jake Sully"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Jake Sully",
          "endereco": "Wikipédia (EN) — Avatar: The Way of Water; Wikipédia (PT) — Avatar: O Caminho da Água",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Avatar: The Way of Water",
              "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
              "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Denis Villeneuve"
            },
            {
              "id": "C3-O4",
              "texto": "Ryan Coogler"
            },
            {
              "id": "C3-O1",
              "texto": "James Cameron"
            },
            {
              "id": "C3-O3",
              "texto": "Peter Jackson"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "James Cameron",
          "endereco": "IMDb; Wikipédia (EN) — Avatar: The Way of Water; AdoroCinema — Avatar: O Caminho da Água",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1630029/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Avatar: The Way of Water",
              "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "AdoroCinema — Avatar: O Caminho da Água",
              "url": "https://www.adorocinema.com/filmes/filme-178014/",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2023"
            },
            {
              "id": "C4-O4",
              "texto": "2020"
            },
            {
              "id": "C4-O2",
              "texto": "2021"
            },
            {
              "id": "C4-O1",
              "texto": "2022"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2022",
          "endereco": "IMDb; Wikipédia (EN) — Avatar: The Way of Water",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1630029/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Avatar: The Way of Water",
              "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em meados de dezembro de 2022, perto do Natal.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar: O Caminho da Água",
                "url": "https://www.adorocinema.com/filmes/filme-178014/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em meados de dezembro de 2022, perto do Natal."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de pouco mais de três horas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "AdoroCinema — Avatar: O Caminho da Água",
                "url": "https://www.adorocinema.com/filmes/filme-178014/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É um longa-metragem de pouco mais de três horas."
          },
          {
            "id": "P03",
            "text": "É uma continuação lançada 13 anos depois do filme original da saga.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma continuação lançada 13 anos depois do filme original da saga."
          },
          {
            "id": "P04",
            "text": "A pré-estreia mundial aconteceu em Londres, no início de dezembro de 2022.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A pré-estreia mundial aconteceu em Londres, no início de dezembro de 2022."
          },
          {
            "id": "P05",
            "text": "A trama começa mais de uma década depois dos eventos do filme anterior.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A trama começa mais de uma década depois dos eventos do filme anterior."
          },
          {
            "id": "P06",
            "text": "Uma família precisa deixar a floresta onde vive e pedir refúgio a um povo do mar.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma família precisa deixar a floresta onde vive e pedir refúgio a um povo do mar."
          },
          {
            "id": "P07",
            "text": "O protagonista é um ex-fuzileiro que hoje lidera um clã nativo e cria vários filhos.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O protagonista é um ex-fuzileiro que hoje lidera um clã nativo e cria vários filhos."
          },
          {
            "id": "P08",
            "text": "Para proteger a família, o protagonista abre mão da liderança do seu clã.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para proteger a família, o protagonista abre mão da liderança do seu clã."
          },
          {
            "id": "P09",
            "text": "Humanos voltam ao lugar de onde tinham sido expulsos, e a paz da família acaba.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Humanos voltam ao lugar de onde tinham sido expulsos, e a paz da família acaba."
          },
          {
            "id": "P10",
            "text": "Um garoto humano cresceu entre os nativos e convive com os filhos do protagonista.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um garoto humano cresceu entre os nativos e convive com os filhos do protagonista."
          },
          {
            "id": "P11",
            "text": "O vilão do filme anterior volta num corpo novo, com memórias implantadas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O vilão do filme anterior volta num corpo novo, com memórias implantadas."
          },
          {
            "id": "P12",
            "text": "Os refugiados precisam aprender a nadar, mergulhar e montar criaturas marinhas.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os refugiados precisam aprender a nadar, mergulhar e montar criaturas marinhas."
          },
          {
            "id": "P13",
            "text": "Boa parte da ação acontece em recifes, praias e no fundo do oceano de uma lua alienígena.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Boa parte da ação acontece em recifes, praias e no fundo do oceano de uma lua alienígena."
          },
          {
            "id": "P14",
            "text": "O diretor também comandou Titanic e O Exterminador do Futuro.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — James Cameron",
                "url": "https://en.wikipedia.org/wiki/James_Cameron",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor também comandou Titanic e O Exterminador do Futuro."
          },
          {
            "id": "P15",
            "text": "Foi filmado em paralelo com o terceiro filme da saga.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi filmado em paralelo com o terceiro filme da saga."
          },
          {
            "id": "P16",
            "text": "Para as cenas submersas, a equipe criou um sistema novo de captura de movimento no tanque.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para as cenas submersas, a equipe criou um sistema novo de captura de movimento no tanque."
          },
          {
            "id": "P17",
            "text": "As filmagens começaram em Manhattan Beach, na Califórnia, e seguiram em Wellington, na Nova Zelândia.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "As filmagens começaram em Manhattan Beach, na Califórnia, e seguiram em Wellington, na Nova Zelândia."
          },
          {
            "id": "P18",
            "text": "A produção foi interrompida pela pandemia de covid-19 em 2020 e retomada meses depois.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A produção foi interrompida pela pandemia de covid-19 em 2020 e retomada meses depois."
          },
          {
            "id": "P19",
            "text": "O ator principal também viveu Perseu em Fúria de Titãs (2010).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sam Worthington",
                "url": "https://en.wikipedia.org/wiki/Sam_Worthington",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal também viveu Perseu em Fúria de Titãs (2010)."
          },
          {
            "id": "P20",
            "text": "A atriz que vive a companheira do protagonista também é Gamora em Guardiões da Galáxia.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Zoe Saldaña",
                "url": "https://en.wikipedia.org/wiki/Zoe_Salda%C3%B1a",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz que vive a companheira do protagonista também é Gamora em Guardiões da Galáxia."
          },
          {
            "id": "P21",
            "text": "Kate Winslet reencontra o diretor de Titanic e prendeu o fôlego por mais de sete minutos numa cena.",
            "importance": "relevant",
            "relatedFields": [
              "C3",
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Kate Winslet reencontra o diretor de Titanic e prendeu o fôlego por mais de sete minutos numa cena."
          },
          {
            "id": "P22",
            "text": "Sigourney Weaver, que viveu uma cientista no filme anterior, agora interpreta uma jovem da família.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Sigourney Weaver, que viveu uma cientista no filme anterior, agora interpreta uma jovem da família."
          },
          {
            "id": "P23",
            "text": "Venceu o Oscar de Melhores Efeitos Visuais e concorreu a Melhor Filme.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Venceu o Oscar de Melhores Efeitos Visuais e concorreu a Melhor Filme."
          },
          {
            "id": "P24",
            "text": "Foi a maior bilheteria mundial de 2022, com mais de 2 bilhões de dólares.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar: The Way of Water",
                "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
                "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi a maior bilheteria mundial de 2022, com mais de 2 bilhões de dólares."
          },
          {
            "id": "P25",
            "text": "O filme anterior da mesma saga é a maior bilheteria da história do cinema.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O filme anterior da mesma saga é a maior bilheteria da história do cinema."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Avatar: O Caminho da Água (2022), dirigido por James Cameron, acompanha Jake Sully e sua família, que fogem da floresta e buscam refúgio entre um clã do oceano quando os humanos voltam.",
        "hinge": "A produção começou em 2017 e foi interrompida pela pandemia em 2020, mas o filme só estreou em dezembro de 2022.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1630029/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Avatar: The Way of Water",
            "url": "https://en.wikipedia.org/wiki/Avatar:_The_Way_of_Water",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Avatar: O Caminho da Água",
            "url": "https://pt.wikipedia.org/wiki/Avatar:_O_Caminho_da_%C3%81gua",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-the-office": {
      "id": "cs1-serie-the-office",
      "kind": "canonical-case",
      "imdbId": "tt0386676",
      "title": "The Office",
      "sessionTitle": "Câmeras na rotina de trabalho",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2005,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — The Office (American TV series); Wikipédia (PT) — The Office (Estados Unidos); Wikipédia (EN) — The Office (American TV series) season 1",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0386676/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Office (American TV series)",
            "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — The Office (Estados Unidos)",
            "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Office (American TV series) season 1",
            "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Ricky Gervais e Stephen Merchant criaram a série britânica e coescreveram o piloto americano, mas quem desenvolveu a versão americana foi Greg Daniels."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "Scrubs"
            },
            {
              "id": "C1-O4",
              "texto": "Community"
            },
            {
              "id": "C1-O2",
              "texto": "Parks and Recreation"
            },
            {
              "id": "C1-O1",
              "texto": "The Office"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "The Office",
          "endereco": "IMDb; Wikipédia (EN) — The Office (American TV series); Wikipédia (PT) — The Office (Estados Unidos)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0386676/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Office (American TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — The Office (Estados Unidos)",
              "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O1",
              "texto": "Michael Scott"
            },
            {
              "id": "C2-O2",
              "texto": "Jeff Winger"
            },
            {
              "id": "C2-O4",
              "texto": "Liz Lemon"
            },
            {
              "id": "C2-O3",
              "texto": "Leslie Knope"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Michael Scott (com Dwight Schrute, Jim Halpert, Pam Beesly)",
          "endereco": "Wikipédia (EN) — The Office (American TV series); Wikipédia (PT) — The Office (Estados Unidos)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Office (American TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — The Office (Estados Unidos)",
              "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Greg Daniels"
            },
            {
              "id": "C3-O2",
              "texto": "Paul Feig"
            },
            {
              "id": "C3-O4",
              "texto": "Ken Kwapis"
            },
            {
              "id": "C3-O3",
              "texto": "Michael Schur"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Greg Daniels",
          "endereco": "IMDb — créditos de episódio (Greg Daniels: developed for American television by); Wikipédia (EN) — The Office (American TV series); Wikipédia (EN) — Greg Daniels",
          "answerReferences": [
            {
              "source": "IMDb — créditos de episódio (Greg Daniels: developed for American television by)",
              "url": "https://www.imdb.com/title/tt0664510/fullcredits",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Office (American TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Greg Daniels",
              "url": "https://en.wikipedia.org/wiki/Greg_Daniels",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2004"
            },
            {
              "id": "C4-O1",
              "texto": "2005"
            },
            {
              "id": "C4-O3",
              "texto": "2006"
            },
            {
              "id": "C4-O4",
              "texto": "2003"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2005",
          "endereco": "IMDb; Wikipédia (EN) — The Office (American TV series); Wikipédia (EN) — The Office (American TV series) season 1",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0386676/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Office (American TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Office (American TV series) season 1",
              "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou numa rede de TV aberta dos Estados Unidos em março de 2005.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou numa rede de TV aberta dos Estados Unidos em março de 2005."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem só seis episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série; a primeira temporada tem só seis episódios."
          },
          {
            "id": "P03",
            "text": "Teve nove temporadas e 201 episódios, terminando em 2013.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Teve nove temporadas e 201 episódios, terminando em 2013."
          },
          {
            "id": "P04",
            "text": "É filmada como um falso documentário, sem plateia e sem risadas gravadas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É filmada como um falso documentário, sem plateia e sem risadas gravadas."
          },
          {
            "id": "P05",
            "text": "Uma equipe de documentário acompanha a filial de uma distribuidora de papel.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma equipe de documentário acompanha a filial de uma distribuidora de papel."
          },
          {
            "id": "P06",
            "text": "A filial retratada fica em Scranton, na Pensilvânia.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A filial retratada fica em Scranton, na Pensilvânia."
          },
          {
            "id": "P07",
            "text": "Um dos protagonistas é o gerente regional, que tenta mostrar às câmeras uma equipe feliz.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos protagonistas é o gerente regional, que tenta mostrar às câmeras uma equipe feliz."
          },
          {
            "id": "P08",
            "text": "No primeiro episódio, circulam boatos de cortes de pessoal na filial.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "No primeiro episódio, circulam boatos de cortes de pessoal na filial."
          },
          {
            "id": "P09",
            "text": "Um vendedor vive pregando peças no colega de mesa, o assistente do gerente.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um vendedor vive pregando peças no colega de mesa, o assistente do gerente."
          },
          {
            "id": "P10",
            "text": "Um funcionário temporário começa a trabalhar na filial logo no primeiro episódio.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um funcionário temporário começa a trabalhar na filial logo no primeiro episódio."
          },
          {
            "id": "P11",
            "text": "A recepcionista da filial está entre as figuras centrais da trama.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A recepcionista da filial está entre as figuras centrais da trama."
          },
          {
            "id": "P12",
            "text": "O segundo episódio gira em torno de um treinamento sobre diversidade no trabalho.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O segundo episódio gira em torno de um treinamento sobre diversidade no trabalho."
          },
          {
            "id": "P13",
            "text": "É a versão americana de uma série britânica que estreou em 2001.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (British TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(British_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É a versão americana de uma série britânica que estreou em 2001."
          },
          {
            "id": "P14",
            "text": "Os criadores da versão britânica foram produtores executivos e coescreveram o piloto americano.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os criadores da versão britânica foram produtores executivos e coescreveram o piloto americano."
          },
          {
            "id": "P15",
            "text": "Quem desenvolveu a versão americana também cocriou King of the Hill e Parks and Recreation.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Greg Daniels",
                "url": "https://en.wikipedia.org/wiki/Greg_Daniels",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb — créditos de episódio (Greg Daniels: developed for American television by)",
                "url": "https://www.imdb.com/title/tt0664510/fullcredits",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Quem desenvolveu a versão americana também cocriou King of the Hill e Parks and Recreation."
          },
          {
            "id": "P16",
            "text": "O piloto adapta de perto o primeiro episódio da versão britânica.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O piloto adapta de perto o primeiro episódio da versão britânica."
          },
          {
            "id": "P17",
            "text": "O piloto foi dirigido por Ken Kwapis.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series) season 1",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)_season_1",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O piloto foi dirigido por Ken Kwapis."
          },
          {
            "id": "P18",
            "text": "O ator que vive o gerente estrelou O Virgem de 40 Anos, lançado no mesmo ano da estreia.",
            "importance": "relevant",
            "relatedFields": [
              "C2",
              "C4"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Steve Carell",
                "url": "https://en.wikipedia.org/wiki/Steve_Carell",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator que vive o gerente estrelou O Virgem de 40 Anos, lançado no mesmo ano da estreia."
          },
          {
            "id": "P19",
            "text": "O ator que vive o vendedor brincalhão depois dirigiu e estrelou Um Lugar Silencioso.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — John Krasinski",
                "url": "https://en.wikipedia.org/wiki/John_Krasinski",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator que vive o vendedor brincalhão depois dirigiu e estrelou Um Lugar Silencioso."
          },
          {
            "id": "P20",
            "text": "Steve Carell, Rainn Wilson, John Krasinski e Jenna Fischer lideram o elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C2",
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Steve Carell, Rainn Wilson, John Krasinski e Jenna Fischer lideram o elenco."
          },
          {
            "id": "P21",
            "text": "Ganhou o Emmy de Melhor Série de Comédia em 2006, pela segunda temporada.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ganhou o Emmy de Melhor Série de Comédia em 2006, pela segunda temporada."
          },
          {
            "id": "P22",
            "text": "O ator que vive o gerente ganhou o Globo de Ouro de melhor ator de comédia em 2006.",
            "importance": "contextual",
            "relatedFields": [
              "C2",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator que vive o gerente ganhou o Globo de Ouro de melhor ator de comédia em 2006."
          },
          {
            "id": "P23",
            "text": "Ricky Gervais faz breves participações vivendo o chefe da versão britânica.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Office (Estados Unidos)",
                "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ricky Gervais faz breves participações vivendo o chefe da versão britânica."
          },
          {
            "id": "P24",
            "text": "Um roteirista e produtor da série também atuou nela, como um primo esquisito de um personagem.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Michael Schur",
                "url": "https://en.wikipedia.org/wiki/Michael_Schur",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um roteirista e produtor da série também atuou nela, como um primo esquisito de um personagem."
          },
          {
            "id": "P25",
            "text": "Em 2020, foi o título mais visto em streaming nos EUA: 57 bilhões de minutos assistidos.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Office (American TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Em 2020, foi o título mais visto em streaming nos EUA: 57 bilhões de minutos assistidos."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "The Office (NBC, 2005), versão americana desenvolvida por Greg Daniels a partir da série britânica de Ricky Gervais e Stephen Merchant, é um falso documentário sobre a filial de Scranton de uma distribuidora de papel.",
        "hinge": "Ricky Gervais e Stephen Merchant criaram a série britânica e coescreveram o piloto americano, mas quem desenvolveu a versão americana foi Greg Daniels.",
        "references": [
          {
            "source": "IMDb — créditos de episódio (Greg Daniels: developed for American television by)",
            "url": "https://www.imdb.com/title/tt0664510/fullcredits",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Office (American TV series)",
            "url": "https://en.wikipedia.org/wiki/The_Office_(American_TV_series)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — The Office (Estados Unidos)",
            "url": "https://pt.wikipedia.org/wiki/The_Office_(Estados_Unidos)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-v-de-vinganca": {
      "id": "cs1-filme-v-de-vinganca",
      "kind": "canonical-case",
      "imdbId": "tt0434409",
      "title": "V de Vingança",
      "sessionTitle": "Uma máscara contra o regime",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2005,
      "rating": "14 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — V for Vendetta (film); Wikipédia (PT) — V for Vendetta (filme)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0434409/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — V for Vendetta (film)",
            "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — V for Vendetta (filme)",
            "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Os Wachowski, criadores de Matrix, escreveram o roteiro e produziram o filme, mas quem dirigiu foi James McTeigue."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "Equilibrium"
            },
            {
              "id": "C1-O3",
              "texto": "Watchmen: O Filme"
            },
            {
              "id": "C1-O2",
              "texto": "Filhos da Esperança"
            },
            {
              "id": "C1-O1",
              "texto": "V de Vingança"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "V de Vingança",
          "endereco": "IMDb; Wikipédia (PT) — V for Vendetta (filme)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0434409/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — V for Vendetta (filme)",
              "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Trinity"
            },
            {
              "id": "C2-O1",
              "texto": "Evey Hammond"
            },
            {
              "id": "C2-O4",
              "texto": "Rorschach"
            },
            {
              "id": "C2-O3",
              "texto": "Padmé Amidala"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Evey Hammond (com V)",
          "endereco": "Wikipédia (EN) — V for Vendetta (film); Wikipédia (PT) — V for Vendetta (filme)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — V for Vendetta (film)",
              "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — V for Vendetta (filme)",
              "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "James McTeigue"
            },
            {
              "id": "C3-O2",
              "texto": "Lana e Lilly Wachowski"
            },
            {
              "id": "C3-O4",
              "texto": "Alfonso Cuarón"
            },
            {
              "id": "C3-O3",
              "texto": "Zack Snyder"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "James McTeigue",
          "endereco": "IMDb; Wikipédia (EN) — V for Vendetta (film); Wikipédia (EN) — James McTeigue",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0434409/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — V for Vendetta (film)",
              "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — James McTeigue",
              "url": "https://en.wikipedia.org/wiki/James_McTeigue",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2008"
            },
            {
              "id": "C4-O4",
              "texto": "2007"
            },
            {
              "id": "C4-O3",
              "texto": "2004"
            },
            {
              "id": "C4-O1",
              "texto": "2005"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2005",
          "endereco": "IMDb; Wikipédia (EN) — V for Vendetta (film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0434409/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — V for Vendetta (film)",
              "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Teve sua pré-estreia em dezembro de 2005, numa maratona de cinema em Austin, nos EUA.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0434409/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Teve sua pré-estreia em dezembro de 2005, numa maratona de cinema em Austin, nos EUA."
          },
          {
            "id": "P02",
            "text": "Só chegou ao circuito comercial dos EUA e do Reino Unido em março de 2006.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — V for Vendetta (filme)",
                "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Só chegou ao circuito comercial dos EUA e do Reino Unido em março de 2006."
          },
          {
            "id": "P03",
            "text": "É um longa-metragem de pouco mais de duas horas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0434409/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É um longa-metragem de pouco mais de duas horas."
          },
          {
            "id": "P04",
            "text": "A história se passa num futuro próximo, na Grã-Bretanha.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A história se passa num futuro próximo, na Grã-Bretanha."
          },
          {
            "id": "P05",
            "text": "O país é governado por um partido autoritário que controla a população pelo medo e pela propaganda.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — V for Vendetta (filme)",
                "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O país é governado por um partido autoritário que controla a população pelo medo e pela propaganda."
          },
          {
            "id": "P06",
            "text": "Uma das figuras centrais é uma jovem que trabalha na emissora de TV estatal.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma das figuras centrais é uma jovem que trabalha na emissora de TV estatal."
          },
          {
            "id": "P07",
            "text": "Os pais dessa jovem eram ativistas contrários ao regime e morreram na prisão.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os pais dessa jovem eram ativistas contrários ao regime e morreram na prisão."
          },
          {
            "id": "P08",
            "text": "Certa noite, ela é abordada por agentes da polícia secreta e salva por um homem mascarado.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Certa noite, ela é abordada por agentes da polícia secreta e salva por um homem mascarado."
          },
          {
            "id": "P09",
            "text": "O mascarado a leva para assistir à destruição de um prédio histórico de Londres.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O mascarado a leva para assistir à destruição de um prédio histórico de Londres."
          },
          {
            "id": "P10",
            "text": "Ele invade a TV estatal e convoca o povo a se reunir diante do Parlamento dali a um ano.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ele invade a TV estatal e convoca o povo a se reunir diante do Parlamento dali a um ano."
          },
          {
            "id": "P11",
            "text": "O encontro é marcado para 5 de novembro, a Noite de Guy Fawkes.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O encontro é marcado para 5 de novembro, a Noite de Guy Fawkes."
          },
          {
            "id": "P12",
            "text": "A máscara do mascarado virou símbolo usado por manifestantes e ativistas pelo mundo.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A máscara do mascarado virou símbolo usado por manifestantes e ativistas pelo mundo."
          },
          {
            "id": "P13",
            "text": "O final da Abertura 1812, de Tchaikovsky, toca em momentos-chave do começo e do fim.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O final da Abertura 1812, de Tchaikovsky, toca em momentos-chave do começo e do fim."
          },
          {
            "id": "P14",
            "text": "É adaptado de uma história em quadrinhos de Alan Moore e David Lloyd, dos anos 1980.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — V for Vendetta (filme)",
                "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É adaptado de uma história em quadrinhos de Alan Moore e David Lloyd, dos anos 1980."
          },
          {
            "id": "P15",
            "text": "O roteirista dos quadrinhos renegou o filme e pediu que seu nome ficasse fora dos créditos.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O roteirista dos quadrinhos renegou o filme e pediu que seu nome ficasse fora dos créditos."
          },
          {
            "id": "P16",
            "text": "A dupla de cineastas que criou Matrix escreveu o roteiro e produziu o filme, mas não o dirigiu.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0434409/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A dupla de cineastas que criou Matrix escreveu o roteiro e produziu o filme, mas não o dirigiu."
          },
          {
            "id": "P17",
            "text": "O diretor tinha sido primeiro assistente de direção da trilogia Matrix.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — James McTeigue",
                "url": "https://en.wikipedia.org/wiki/James_McTeigue",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor tinha sido primeiro assistente de direção da trilogia Matrix."
          },
          {
            "id": "P18",
            "text": "Foi o primeiro longa dirigido por ele, um australiano nascido em Sydney.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — James McTeigue",
                "url": "https://en.wikipedia.org/wiki/James_McTeigue",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi o primeiro longa dirigido por ele, um australiano nascido em Sydney."
          },
          {
            "id": "P19",
            "text": "Depois, o mesmo diretor fez o filme de ação Ninja Assassino (2009).",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — James McTeigue",
                "url": "https://en.wikipedia.org/wiki/James_McTeigue",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Depois, o mesmo diretor fez o filme de ação Ninja Assassino (2009)."
          },
          {
            "id": "P20",
            "text": "A atriz principal também viveu Padmé Amidala na trilogia prequela de Star Wars.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0434409/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz principal também viveu Padmé Amidala na trilogia prequela de Star Wars."
          },
          {
            "id": "P21",
            "text": "O ator do mascarado é o Agente Smith de Matrix, e seu rosto nunca aparece no filme.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Hugo Weaving",
                "url": "https://en.wikipedia.org/wiki/Hugo_Weaving",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator do mascarado é o Agente Smith de Matrix, e seu rosto nunca aparece no filme."
          },
          {
            "id": "P22",
            "text": "O primeiro ator escalado para o mascarado deixou as filmagens após seis semanas e foi substituído.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O primeiro ator escalado para o mascarado deixou as filmagens após seis semanas e foi substituído."
          },
          {
            "id": "P23",
            "text": "John Hurt interpreta o Alto Chanceler, líder supremo do regime.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — V for Vendetta (filme)",
                "url": "https://pt.wikipedia.org/wiki/V_for_Vendetta_(filme)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "John Hurt interpreta o Alto Chanceler, líder supremo do regime."
          },
          {
            "id": "P24",
            "text": "A atriz principal ganhou o Saturn Award de melhor atriz por este papel.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz principal ganhou o Saturn Award de melhor atriz por este papel."
          },
          {
            "id": "P25",
            "text": "Foi indicado ao Prêmio Hugo de melhor apresentação dramática e arrecadou cerca de US$ 135 milhões.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — V for Vendetta (film)",
                "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi indicado ao Prêmio Hugo de melhor apresentação dramática e arrecadou cerca de US$ 135 milhões."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "V de Vingança (2005), dirigido por James McTeigue, acompanha Evey Hammond e o mascarado V numa Grã-Bretanha autoritária do futuro próximo.",
        "hinge": "Os Wachowski, criadores de Matrix, escreveram o roteiro e produziram o filme, mas quem dirigiu foi James McTeigue.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0434409/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — V for Vendetta (film)",
            "url": "https://en.wikipedia.org/wiki/V_for_Vendetta_(film)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — James McTeigue",
            "url": "https://en.wikipedia.org/wiki/James_McTeigue",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-round-6": {
      "id": "cs1-serie-round-6",
      "kind": "canonical-case",
      "imdbId": "tt10919420",
      "title": "Round 6",
      "sessionTitle": "Brincadeiras de criança, apostas altíssimas",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2021,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Squid Game; Wikipédia (PT) — Round 6",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt10919420/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Squid Game",
            "url": "https://en.wikipedia.org/wiki/Squid_Game",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Round 6",
            "url": "https://pt.wikipedia.org/wiki/Round_6",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "O ator principal estreou como diretor em 2022, mas quem criou, escreveu e dirigiu a série foi Hwang Dong-hyuk."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Round 6"
            },
            {
              "id": "C1-O3",
              "texto": "Sweet Home"
            },
            {
              "id": "C1-O2",
              "texto": "Alice in Borderland"
            },
            {
              "id": "C1-O4",
              "texto": "La Casa de Papel"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Round 6",
          "endereco": "IMDb; Wikipédia (PT) — Round 6",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10919420/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Round 6",
              "url": "https://pt.wikipedia.org/wiki/Round_6",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "Kang Sae-byeok"
            },
            {
              "id": "C2-O4",
              "texto": "Hwang Jun-ho"
            },
            {
              "id": "C2-O2",
              "texto": "Cho Sang-woo"
            },
            {
              "id": "C2-O1",
              "texto": "Seong Gi-hun"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Seong Gi-hun",
          "endereco": "Wikipédia (EN) — Squid Game; Wikipédia (PT) — Round 6",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Squid Game",
              "url": "https://en.wikipedia.org/wiki/Squid_Game",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Round 6",
              "url": "https://pt.wikipedia.org/wiki/Round_6",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Hwang Dong-hyuk"
            },
            {
              "id": "C3-O2",
              "texto": "Bong Joon-ho"
            },
            {
              "id": "C3-O4",
              "texto": "Yeon Sang-ho"
            },
            {
              "id": "C3-O3",
              "texto": "Park Chan-wook"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Hwang Dong-hyuk",
          "endereco": "IMDb; Wikipédia (EN) — Squid Game; Wikipédia (EN) — Hwang Dong-hyuk",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10919420/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Squid Game",
              "url": "https://en.wikipedia.org/wiki/Squid_Game",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Hwang Dong-hyuk",
              "url": "https://en.wikipedia.org/wiki/Hwang_Dong-hyuk",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2022"
            },
            {
              "id": "C4-O4",
              "texto": "2019"
            },
            {
              "id": "C4-O1",
              "texto": "2021"
            },
            {
              "id": "C4-O2",
              "texto": "2020"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2021",
          "endereco": "IMDb; Wikipédia (EN) — Squid Game",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt10919420/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Squid Game",
              "url": "https://en.wikipedia.org/wiki/Squid_Game",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou no mundo todo em 17 de setembro de 2021, num serviço de streaming.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt10919420/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Round 6",
                "url": "https://pt.wikipedia.org/wiki/Round_6",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou no mundo todo em 17 de setembro de 2021, num serviço de streaming."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem nove episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série; a primeira temporada tem nove episódios."
          },
          {
            "id": "P03",
            "text": "É uma produção sul-coreana, falada em coreano.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Round 6",
                "url": "https://pt.wikipedia.org/wiki/Round_6",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma produção sul-coreana, falada em coreano."
          },
          {
            "id": "P04",
            "text": "A série foi encerrada com sua terceira temporada, em 2025.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt10919420/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A série foi encerrada com sua terceira temporada, em 2025."
          },
          {
            "id": "P05",
            "text": "O protagonista é um homem divorciado, endividado e viciado em apostas.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O protagonista é um homem divorciado, endividado e viciado em apostas."
          },
          {
            "id": "P06",
            "text": "Ele mora com a mãe, que precisa de uma cirurgia, e quer ficar perto da filha.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ele mora com a mãe, que precisa de uma cirurgia, e quer ficar perto da filha."
          },
          {
            "id": "P07",
            "text": "Um recrutador de terno desafia pessoas endividadas num jogo infantil de peças de papel dobrado.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um recrutador de terno desafia pessoas endividadas num jogo infantil de peças de papel dobrado."
          },
          {
            "id": "P08",
            "text": "Centenas de pessoas cheias de dívidas aceitam disputar jogos infantis por um prêmio milionário.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Round 6",
                "url": "https://pt.wikipedia.org/wiki/Round_6",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Centenas de pessoas cheias de dívidas aceitam disputar jogos infantis por um prêmio milionário."
          },
          {
            "id": "P09",
            "text": "Os jogos acontecem num complexo secreto, isolado de tudo, e os jogadores não sabem onde estão.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os jogos acontecem num complexo secreto, isolado de tudo, e os jogadores não sabem onde estão."
          },
          {
            "id": "P10",
            "text": "Os competidores usam agasalhos verdes numerados; o protagonista tem o último número, 456.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Round 6",
                "url": "https://pt.wikipedia.org/wiki/Round_6",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os competidores usam agasalhos verdes numerados; o protagonista tem o último número, 456."
          },
          {
            "id": "P11",
            "text": "O primeiro jogo é uma versão do batatinha frita 1, 2, 3, comandada por uma boneca gigante.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O primeiro jogo é uma versão do batatinha frita 1, 2, 3, comandada por uma boneca gigante."
          },
          {
            "id": "P12",
            "text": "O prêmio acumulado é de 45,6 bilhões de wons.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O prêmio acumulado é de 45,6 bilhões de wons."
          },
          {
            "id": "P13",
            "text": "Os convites trazem um cartão com um círculo, um triângulo e um quadrado.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os convites trazem um cartão com um círculo, um triângulo e um quadrado."
          },
          {
            "id": "P14",
            "text": "Guardas mascarados de macacão rosa vigiam os competidores.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Guardas mascarados de macacão rosa vigiam os competidores."
          },
          {
            "id": "P15",
            "text": "Na 1ª temporada, o criador escreveu e dirigiu todos os episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Hwang Dong-hyuk",
                "url": "https://en.wikipedia.org/wiki/Hwang_Dong-hyuk",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Na 1ª temporada, o criador escreveu e dirigiu todos os episódios."
          },
          {
            "id": "P16",
            "text": "O criador teve a ideia por volta de 2009, quando ele próprio passava por dificuldades financeiras.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O criador teve a ideia por volta de 2009, quando ele próprio passava por dificuldades financeiras."
          },
          {
            "id": "P17",
            "text": "Investidores recusaram o roteiro por anos, até uma plataforma de streaming se interessar, por volta de 2019.",
            "importance": "contextual",
            "relatedFields": [
              "C3",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Investidores recusaram o roteiro por anos, até uma plataforma de streaming se interessar, por volta de 2019."
          },
          {
            "id": "P18",
            "text": "Antes, o criador dirigiu os longas 'Silenced' (2011) e 'Miss Granny' (2014).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Hwang Dong-hyuk",
                "url": "https://en.wikipedia.org/wiki/Hwang_Dong-hyuk",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Antes, o criador dirigiu os longas 'Silenced' (2011) e 'Miss Granny' (2014)."
          },
          {
            "id": "P19",
            "text": "O criador contou que descuidou da saúde na produção e precisou extrair seis dentes.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O criador contou que descuidou da saúde na produção e precisou extrair seis dentes."
          },
          {
            "id": "P20",
            "text": "O ator principal também interpreta o mestre Jedi Sol na série 'The Acolyte' (2024), de Star Wars.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Lee Jung-jae",
                "url": "https://en.wikipedia.org/wiki/Lee_Jung-jae",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal também interpreta o mestre Jedi Sol na série 'The Acolyte' (2024), de Star Wars."
          },
          {
            "id": "P21",
            "text": "O ator principal estreou como diretor no filme 'Hunt' (2022), mas não criou nem dirigiu esta série.",
            "importance": "relevant",
            "relatedFields": [
              "C2",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Lee Jung-jae",
                "url": "https://en.wikipedia.org/wiki/Lee_Jung-jae",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal estreou como diretor no filme 'Hunt' (2022), mas não criou nem dirigiu esta série."
          },
          {
            "id": "P22",
            "text": "Gong Yoo, de Invasão Zumbi, aparece como o recrutador.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Gong Yoo, de Invasão Zumbi, aparece como o recrutador."
          },
          {
            "id": "P23",
            "text": "Uma das atrizes era modelo e fez aqui sua estreia como atriz.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma das atrizes era modelo e fez aqui sua estreia como atriz."
          },
          {
            "id": "P24",
            "text": "Foi a primeira série de língua não inglesa indicada ao Emmy de melhor série dramática.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Squid Game",
                "url": "https://en.wikipedia.org/wiki/Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — List of awards and nominations received by Squid Game",
                "url": "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Squid_Game",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi a primeira série de língua não inglesa indicada ao Emmy de melhor série dramática."
          },
          {
            "id": "P25",
            "text": "O ator principal ganhou o Emmy de melhor ator em série dramática em 2022.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — List of awards and nominations received by Squid Game",
                "url": "https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Squid_Game",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Lee Jung-jae",
                "url": "https://en.wikipedia.org/wiki/Lee_Jung-jae",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal ganhou o Emmy de melhor ator em série dramática em 2022."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Round 6 (Netflix, 2021), criada por Hwang Dong-hyuk, acompanha o endividado Seong Gi-hun numa disputa de jogos infantis por um prêmio bilionário.",
        "hinge": "O ator principal estreou como diretor em 2022, mas quem criou, escreveu e dirigiu a série foi Hwang Dong-hyuk.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt10919420/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Squid Game",
            "url": "https://en.wikipedia.org/wiki/Squid_Game",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Lee Jung-jae",
            "url": "https://en.wikipedia.org/wiki/Lee_Jung-jae",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-barbie": {
      "id": "cs1-filme-barbie",
      "kind": "canonical-case",
      "imdbId": "tt1517268",
      "title": "Barbie",
      "sessionTitle": "Um mundo cor-de-rosa em crise",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2023,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Barbie (film); Wikipédia (PT) — Barbie (filme); Rolling Stone Brasil — classificação indicativa",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1517268/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Barbie (film)",
            "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Barbie (filme)",
            "url": "https://pt.wikipedia.org/wiki/Barbie_(filme)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Rolling Stone Brasil — classificação indicativa",
            "url": "https://rollingstone.com.br/?p=159351",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Noah Baumbach coescreveu o roteiro, mas não dirigiu o filme."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O2",
              "texto": "Pobres Criaturas"
            },
            {
              "id": "C1-O3",
              "texto": "Wonka"
            },
            {
              "id": "C1-O4",
              "texto": "Free Guy: Assumindo o Controle"
            },
            {
              "id": "C1-O1",
              "texto": "Barbie"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Barbie",
          "endereco": "IMDb; Wikipédia (PT) — Barbie (filme)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1517268/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Barbie (filme)",
              "url": "https://pt.wikipedia.org/wiki/Barbie_(filme)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "Uma princesa com poderes de gelo que se isola num castelo"
            },
            {
              "id": "C2-O1",
              "texto": "Uma boneca perfeita que de repente começa a ter crises existenciais"
            },
            {
              "id": "C2-O2",
              "texto": "Um caubói de brinquedo que teme ser trocado por um novo"
            },
            {
              "id": "C2-O4",
              "texto": "Uma garota que cai num mundo de fantasia atrás de um coelho"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Uma boneca perfeita que de repente começa a ter crises existenciais",
          "endereco": "Wikipédia (EN) — Barbie (film); Wikipédia (PT) — Barbie (filme)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Barbie (film)",
              "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Barbie (filme)",
              "url": "https://pt.wikipedia.org/wiki/Barbie_(filme)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Noah Baumbach"
            },
            {
              "id": "C3-O1",
              "texto": "Greta Gerwig"
            },
            {
              "id": "C3-O3",
              "texto": "Olivia Wilde"
            },
            {
              "id": "C3-O4",
              "texto": "Sofia Coppola"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Greta Gerwig",
          "endereco": "IMDb; Wikipédia (EN) — Barbie (film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1517268/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Barbie (film)",
              "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2022"
            },
            {
              "id": "C4-O4",
              "texto": "2021"
            },
            {
              "id": "C4-O1",
              "texto": "2023"
            },
            {
              "id": "C4-O3",
              "texto": "2024"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2023",
          "endereco": "IMDb; Wikipédia (EN) — Barbie (film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1517268/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Barbie (film)",
              "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas do Brasil em 20 de julho de 2023.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Barbie (filme)",
                "url": "https://pt.wikipedia.org/wiki/Barbie_(filme)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1517268/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Chegou aos cinemas do Brasil em 20 de julho de 2023."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de pouco menos de duas horas (114 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É um longa-metragem de pouco menos de duas horas (114 minutos)."
          },
          {
            "id": "P03",
            "text": "Estreou no mesmo dia que um drama sobre o pai da bomba atômica, e os fãs transformaram a dupla num meme.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou no mesmo dia que um drama sobre o pai da bomba atômica, e os fãs transformaram a dupla num meme."
          },
          {
            "id": "P04",
            "text": "A protagonista vive num mundo cor-de-rosa onde todo dia é perfeito.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A protagonista vive num mundo cor-de-rosa onde todo dia é perfeito."
          },
          {
            "id": "P05",
            "text": "Nesse mundo, as mulheres ocupam todos os cargos importantes, e os homens passam o dia na praia.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Nesse mundo, as mulheres ocupam todos os cargos importantes, e os homens passam o dia na praia."
          },
          {
            "id": "P06",
            "text": "Numa festa, a protagonista pergunta de repente se alguém já pensou em morrer.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Numa festa, a protagonista pergunta de repente se alguém já pensou em morrer."
          },
          {
            "id": "P07",
            "text": "Da noite para o dia, ela acorda com os pés achatados, sem conseguir ficar na ponta dos pés.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Da noite para o dia, ela acorda com os pés achatados, sem conseguir ficar na ponta dos pés."
          },
          {
            "id": "P08",
            "text": "Para resolver a crise, ela precisa viajar até o mundo real e chega a Los Angeles.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para resolver a crise, ela precisa viajar até o mundo real e chega a Los Angeles."
          },
          {
            "id": "P09",
            "text": "O companheiro loiro da protagonista vai junto, escondido no carro conversível dela.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O companheiro loiro da protagonista vai junto, escondido no carro conversível dela."
          },
          {
            "id": "P10",
            "text": "Uma personagem descabelada, que mora numa casa \"estranha\", orienta a protagonista sobre o mundo real.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Barbie (filme)",
                "url": "https://pt.wikipedia.org/wiki/Barbie_(filme)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Uma personagem descabelada, que mora numa casa \"estranha\", orienta a protagonista sobre o mundo real."
          },
          {
            "id": "P11",
            "text": "A diretora também dirigiu Lady Bird: A Hora de Voar e Adoráveis Mulheres.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1517268/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A diretora também dirigiu Lady Bird: A Hora de Voar e Adoráveis Mulheres."
          },
          {
            "id": "P12",
            "text": "O roteiro foi escrito pela diretora em parceria com o marido, também cineasta.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1517268/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O roteiro foi escrito pela diretora em parceria com o marido, também cineasta."
          },
          {
            "id": "P13",
            "text": "Os cenários consumiram todo o estoque restante de um tom de tinta rosa da fornecedora do filme.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os cenários consumiram todo o estoque restante de um tom de tinta rosa da fornecedora do filme."
          },
          {
            "id": "P14",
            "text": "Foi filmado principalmente em estúdios na Inglaterra, com cenas numa pista de skate de Venice Beach.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi filmado principalmente em estúdios na Inglaterra, com cenas numa pista de skate de Venice Beach."
          },
          {
            "id": "P15",
            "text": "A atriz principal também é uma das produtoras do filme.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz principal também é uma das produtoras do filme."
          },
          {
            "id": "P16",
            "text": "A atriz principal também está em O Lobo de Wall Street e Eu, Tonya.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1517268/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A atriz principal também está em O Lobo de Wall Street e Eu, Tonya."
          },
          {
            "id": "P17",
            "text": "O par da protagonista é vivido pelo ator de La La Land: Cantando Estações.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1517268/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O par da protagonista é vivido pelo ator de La La Land: Cantando Estações."
          },
          {
            "id": "P18",
            "text": "Will Ferrell interpreta o presidente de uma grande empresa de brinquedos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Will Ferrell interpreta o presidente de uma grande empresa de brinquedos."
          },
          {
            "id": "P19",
            "text": "A narração é feita por Helen Mirren.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A narração é feita por Helen Mirren."
          },
          {
            "id": "P20",
            "text": "Foi a maior bilheteria mundial de 2023, com mais de US$ 1,4 bilhão.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi a maior bilheteria mundial de 2023, com mais de US$ 1,4 bilhão."
          },
          {
            "id": "P21",
            "text": "É a maior bilheteria da história entre filmes dirigidos por uma única mulher.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É a maior bilheteria da história entre filmes dirigidos por uma única mulher."
          },
          {
            "id": "P22",
            "text": "Ganhou o Oscar de Melhor Canção Original com uma balada cantada por Billie Eilish.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ganhou o Oscar de Melhor Canção Original com uma balada cantada por Billie Eilish."
          },
          {
            "id": "P23",
            "text": "Dua Lipa canta uma das músicas principais da trilha e faz uma ponta como sereia.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Dua Lipa canta uma das músicas principais da trilha e faz uma ponta como sereia."
          },
          {
            "id": "P24",
            "text": "Um dos teasers parodia a abertura de 2001: Uma Odisseia no Espaço.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos teasers parodia a abertura de 2001: Uma Odisseia no Espaço."
          },
          {
            "id": "P25",
            "text": "A personagem-título nasceu como brinquedo em 1959, décadas antes deste filme.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Barbie (film)",
                "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A personagem-título nasceu como brinquedo em 1959, décadas antes deste filme."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Barbie (2023), dirigido por Greta Gerwig, acompanha a boneca que, em crise existencial, deixa seu mundo cor-de-rosa rumo ao mundo real.",
        "hinge": "Noah Baumbach coescreveu o roteiro, mas não dirigiu o filme.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1517268/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Barbie (film)",
            "url": "https://en.wikipedia.org/wiki/Barbie_(film)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-the-boys": {
      "id": "cs1-serie-the-boys",
      "kind": "canonical-case",
      "imdbId": "tt1190634",
      "title": "The Boys",
      "sessionTitle": "Heróis à venda",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2019,
      "rating": "18 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — The Boys (TV series); Wikipédia (PT) — The Boys (série de televisão)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1190634/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Boys (TV series)",
            "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — The Boys (série de televisão)",
            "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Seth Rogen e Evan Goldberg são produtores executivos e Garth Ennis escreveu os quadrinhos, mas quem desenvolveu a série foi Eric Kripke."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "The Umbrella Academy"
            },
            {
              "id": "C1-O1",
              "texto": "The Boys"
            },
            {
              "id": "C1-O4",
              "texto": "Watchmen"
            },
            {
              "id": "C1-O2",
              "texto": "Invencível"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "The Boys",
          "endereco": "IMDb; Wikipédia (PT) — The Boys (série de televisão)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1190634/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — The Boys (série de televisão)",
              "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Mark Grayson"
            },
            {
              "id": "C2-O1",
              "texto": "Hughie Campbell"
            },
            {
              "id": "C2-O3",
              "texto": "Luther Hargreeves"
            },
            {
              "id": "C2-O4",
              "texto": "Jessica Jones"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Hughie Campbell (com Billy Butcher, Billy Bruto, Luz-Estrela)",
          "endereco": "Wikipédia (EN) — The Boys (TV series); Wikipédia (PT) — The Boys (série de televisão)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Boys (TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — The Boys (série de televisão)",
              "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Seth Rogen e Evan Goldberg"
            },
            {
              "id": "C3-O1",
              "texto": "Eric Kripke"
            },
            {
              "id": "C3-O4",
              "texto": "Damon Lindelof"
            },
            {
              "id": "C3-O3",
              "texto": "Garth Ennis"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Eric Kripke",
          "endereco": "IMDb; Wikipédia (EN) — The Boys (TV series); Wikipédia (PT) — The Boys (série de televisão)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1190634/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Boys (TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — The Boys (série de televisão)",
              "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O1",
              "texto": "2019"
            },
            {
              "id": "C4-O3",
              "texto": "2020"
            },
            {
              "id": "C4-O4",
              "texto": "2021"
            },
            {
              "id": "C4-O2",
              "texto": "2018"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2019",
          "endereco": "IMDb; Wikipédia (EN) — The Boys (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1190634/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — The Boys (TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou em julho de 2019, num serviço de streaming.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1190634/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou em julho de 2019, num serviço de streaming."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem oito episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Boys (série de televisão)",
                "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série; a primeira temporada tem oito episódios."
          },
          {
            "id": "P03",
            "text": "Num mundo onde super-heróis existem, eles são astros de marketing controlados por uma grande corporação.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Num mundo onde super-heróis existem, eles são astros de marketing controlados por uma grande corporação."
          },
          {
            "id": "P04",
            "text": "A equipe de heróis mais famosa desse mundo tem sete integrantes.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A equipe de heróis mais famosa desse mundo tem sete integrantes."
          },
          {
            "id": "P05",
            "text": "Um jovem vendedor de loja de som perde a namorada num acidente causado por um herói supervelocista.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Name of the Game (The Boys)",
                "url": "https://en.wikipedia.org/wiki/The_Name_of_the_Game_(The_Boys)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um jovem vendedor de loja de som perde a namorada num acidente causado por um herói supervelocista."
          },
          {
            "id": "P06",
            "text": "Depois do acidente, a empresa dos heróis oferece um acordo em dinheiro para encerrar o caso.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Name of the Game (The Boys)",
                "url": "https://en.wikipedia.org/wiki/The_Name_of_the_Game_(The_Boys)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Depois do acidente, a empresa dos heróis oferece um acordo em dinheiro para encerrar o caso."
          },
          {
            "id": "P07",
            "text": "Um homem que despreza todos os super-heróis recruta o jovem para um grupo clandestino.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Name of the Game (The Boys)",
                "url": "https://en.wikipedia.org/wiki/The_Name_of_the_Game_(The_Boys)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um homem que despreza todos os super-heróis recruta o jovem para um grupo clandestino."
          },
          {
            "id": "P08",
            "text": "Ao mesmo tempo, uma jovem heroína idealista realiza o sonho de entrar para a equipe principal.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Name of the Game (The Boys)",
                "url": "https://en.wikipedia.org/wiki/The_Name_of_the_Game_(The_Boys)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ao mesmo tempo, uma jovem heroína idealista realiza o sonho de entrar para a equipe principal."
          },
          {
            "id": "P09",
            "text": "O líder da equipe de heróis usa uma capa com a bandeira dos Estados Unidos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O líder da equipe de heróis usa uma capa com a bandeira dos Estados Unidos."
          },
          {
            "id": "P10",
            "text": "É baseada em quadrinhos de Garth Ennis e Darick Robertson, mas eles não assinam a criação da série.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — The Boys (série de televisão)",
                "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É baseada em quadrinhos de Garth Ennis e Darick Robertson, mas eles não assinam a criação da série."
          },
          {
            "id": "P11",
            "text": "O responsável pela adaptação para a TV também criou a série Sobrenatural.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1190634/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O responsável pela adaptação para a TV também criou a série Sobrenatural."
          },
          {
            "id": "P12",
            "text": "Seth Rogen e Evan Goldberg são produtores executivos, mas não criaram a série.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Seth Rogen e Evan Goldberg são produtores executivos, mas não criaram a série."
          },
          {
            "id": "P13",
            "text": "O primeiro episódio foi dirigido por Dan Trachtenberg, de Rua Cloverfield, 10.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Name of the Game (The Boys)",
                "url": "https://en.wikipedia.org/wiki/The_Name_of_the_Game_(The_Boys)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O primeiro episódio foi dirigido por Dan Trachtenberg, de Rua Cloverfield, 10."
          },
          {
            "id": "P14",
            "text": "A história se passa em Nova York, mas as gravações foram feitas principalmente em Toronto.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A história se passa em Nova York, mas as gravações foram feitas principalmente em Toronto."
          },
          {
            "id": "P15",
            "text": "Um dos protagonistas é vivido por Karl Urban, o Dr. McCoy dos filmes recentes de Star Trek.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1190634/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos protagonistas é vivido por Karl Urban, o Dr. McCoy dos filmes recentes de Star Trek."
          },
          {
            "id": "P16",
            "text": "O jovem vendedor é interpretado por Jack Quaid, que esteve em Jogos Vorazes (2012).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1190634/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O jovem vendedor é interpretado por Jack Quaid, que esteve em Jogos Vorazes (2012)."
          },
          {
            "id": "P17",
            "text": "O líder da equipe de heróis é vivido por Antony Starr, protagonista da série Banshee.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1190634/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O líder da equipe de heróis é vivido por Antony Starr, protagonista da série Banshee."
          },
          {
            "id": "P18",
            "text": "Em 2021, foi indicada ao Emmy de Melhor Série Dramática, a primeira adaptação de quadrinhos para TV nessa categoria.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Em 2021, foi indicada ao Emmy de Melhor Série Dramática, a primeira adaptação de quadrinhos para TV nessa categoria."
          },
          {
            "id": "P19",
            "text": "O sucesso gerou derivados, entre eles uma antologia animada e uma série sobre uma universidade de jovens heróis.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O sucesso gerou derivados, entre eles uma antologia animada e uma série sobre uma universidade de jovens heróis."
          },
          {
            "id": "P20",
            "text": "No Brasil, a série também chegou à TV aberta, exibida pelo SBT a partir de agosto de 2020.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — The Boys (série de televisão)",
                "url": "https://pt.wikipedia.org/wiki/The_Boys_(s%C3%A9rie_de_televis%C3%A3o)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Einerd — The Boys será exibida no SBT",
                "url": "https://www.einerd.com/the-boys-sbt/",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "No Brasil, a série também chegou à TV aberta, exibida pelo SBT a partir de agosto de 2020."
          },
          {
            "id": "P21",
            "text": "Estreou antes de Invencível, outra série adulta de super-heróis do mesmo serviço de streaming.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Invincible (TV series)",
                "url": "https://en.wikipedia.org/wiki/Invincible_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou antes de Invencível, outra série adulta de super-heróis do mesmo serviço de streaming."
          },
          {
            "id": "P22",
            "text": "Antes de virar série, um filme chegou a ser planejado com o diretor Adam McKay, mas foi abandonado.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Antes de virar série, um filme chegou a ser planejado com o diretor Adam McKay, mas foi abandonado."
          },
          {
            "id": "P23",
            "text": "O apelido do grupo clandestino é o próprio título da série.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O apelido do grupo clandestino é o próprio título da série."
          },
          {
            "id": "P24",
            "text": "A série satiriza a cultura das celebridades e o uso de heróis em propaganda.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A série satiriza a cultura das celebridades e o uso de heróis em propaganda."
          },
          {
            "id": "P25",
            "text": "Um dos integrantes da equipe é um herói aquático que conversa com animais marinhos.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Boys (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um dos integrantes da equipe é um herói aquático que conversa com animais marinhos."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "The Boys (Prime Video, 2019), criada por Eric Kripke, acompanha um grupo clandestino que enfrenta super-heróis corruptos controlados por uma corporação.",
        "hinge": "Seth Rogen e Evan Goldberg são produtores executivos e Garth Ennis escreveu os quadrinhos, mas quem desenvolveu a série foi Eric Kripke.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1190634/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — The Boys (TV series)",
            "url": "https://en.wikipedia.org/wiki/The_Boys_(TV_series)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-coringa": {
      "id": "cs1-filme-coringa",
      "kind": "canonical-case",
      "imdbId": "tt7286456",
      "title": "Coringa",
      "sessionTitle": "Risadas numa cidade em crise",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2019,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Joker (2019 film); Omelete — classificação indicativa no Brasil",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt7286456/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Joker (2019 film)",
            "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Omelete — classificação indicativa no Brasil",
            "url": "https://www.omelete.com.br/dc-comics/coringa-classificacao-maiores-16-anos",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Martin Scorsese esteve ligado ao projeto como produtor e o filme homenageia obras dele, mas quem dirigiu foi Todd Phillips."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O2",
              "texto": "Parasita"
            },
            {
              "id": "C1-O1",
              "texto": "Coringa"
            },
            {
              "id": "C1-O4",
              "texto": "Nós"
            },
            {
              "id": "C1-O3",
              "texto": "O Irlandês"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Coringa",
          "endereco": "IMDb; Wikipédia (EN) — Joker (2019 film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7286456/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Joker (2019 film)",
              "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Murray Franklin"
            },
            {
              "id": "C2-O4",
              "texto": "Travis Bickle"
            },
            {
              "id": "C2-O3",
              "texto": "Sophie Dumond"
            },
            {
              "id": "C2-O1",
              "texto": "Arthur Fleck"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Arthur Fleck",
          "endereco": "IMDb; Wikipédia (EN) — Joker (2019 film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7286456/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Joker (2019 film)",
              "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O4",
              "texto": "Christopher Nolan"
            },
            {
              "id": "C3-O3",
              "texto": "Bradley Cooper"
            },
            {
              "id": "C3-O1",
              "texto": "Todd Phillips"
            },
            {
              "id": "C3-O2",
              "texto": "Martin Scorsese"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Todd Phillips",
          "endereco": "IMDb; Wikipédia (EN) — Joker (2019 film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7286456/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Joker (2019 film)",
              "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2018"
            },
            {
              "id": "C4-O1",
              "texto": "2019"
            },
            {
              "id": "C4-O4",
              "texto": "2017"
            },
            {
              "id": "C4-O3",
              "texto": "2020"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2019",
          "endereco": "IMDb; Wikipédia (EN) — Joker (2019 film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7286456/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Joker (2019 film)",
              "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas em outubro de 2019.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7286456/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Chegou aos cinemas em outubro de 2019."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de cerca de duas horas (122 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É um longa-metragem de cerca de duas horas (122 minutos)."
          },
          {
            "id": "P03",
            "text": "Um homem solitário, ignorado por todos, tenta encontrar seu lugar numa cidade em crise.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7286456/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um homem solitário, ignorado por todos, tenta encontrar seu lugar numa cidade em crise."
          },
          {
            "id": "P04",
            "text": "A história se passa em 1981, numa cidade fictícia inspirada em Nova York.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A história se passa em 1981, numa cidade fictícia inspirada em Nova York."
          },
          {
            "id": "P05",
            "text": "O protagonista mora com a mãe idosa, num apartamento modesto.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O protagonista mora com a mãe idosa, num apartamento modesto."
          },
          {
            "id": "P06",
            "text": "Ele sonha em ser comediante de stand-up.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ele sonha em ser comediante de stand-up."
          },
          {
            "id": "P07",
            "text": "Ele tem uma condição neurológica que provoca crises de riso incontroláveis.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ele tem uma condição neurológica que provoca crises de riso incontroláveis."
          },
          {
            "id": "P08",
            "text": "Ele é acompanhado por uma assistente social e depende de um programa público para obter remédios.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ele é acompanhado por uma assistente social e depende de um programa público para obter remédios."
          },
          {
            "id": "P09",
            "text": "Um bilionário que concorre a prefeito da cidade tem papel importante na trama.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um bilionário que concorre a prefeito da cidade tem papel importante na trama."
          },
          {
            "id": "P10",
            "text": "Para se sustentar, ele trabalha fantasiado de palhaço em festas e eventos.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para se sustentar, ele trabalha fantasiado de palhaço em festas e eventos."
          },
          {
            "id": "P11",
            "text": "É a história de origem de um vilão clássico dos quadrinhos da DC, independente de outros filmes.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7286456/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É a história de origem de um vilão clássico dos quadrinhos da DC, independente de outros filmes."
          },
          {
            "id": "P12",
            "text": "O diretor ficou conhecido antes por comédias como 'Se Beber, Não Case!' (2009).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor ficou conhecido antes por comédias como 'Se Beber, Não Case!' (2009)."
          },
          {
            "id": "P13",
            "text": "O diretor também assina o roteiro, em parceria com Scott Silver.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O diretor também assina o roteiro, em parceria com Scott Silver."
          },
          {
            "id": "P14",
            "text": "Martin Scorsese chegou a ser ligado ao projeto como produtor, mas deixou a função por outros compromissos.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Martin Scorsese chegou a ser ligado ao projeto como produtor, mas deixou a função por outros compromissos."
          },
          {
            "id": "P15",
            "text": "Bradley Cooper é um dos produtores do filme.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Bradley Cooper é um dos produtores do filme."
          },
          {
            "id": "P16",
            "text": "Foi filmado em Nova York, Jersey City e Newark, entre setembro e dezembro de 2018.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi filmado em Nova York, Jersey City e Newark, entre setembro e dezembro de 2018."
          },
          {
            "id": "P17",
            "text": "O ator principal emagreceu cerca de 23 kg para o papel.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal emagreceu cerca de 23 kg para o papel."
          },
          {
            "id": "P18",
            "text": "O ator principal viveu o imperador Cômodo em 'Gladiador' (2000).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal viveu o imperador Cômodo em 'Gladiador' (2000)."
          },
          {
            "id": "P19",
            "text": "Robert De Niro interpreta um apresentador de talk show que o protagonista admira.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7286456/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Robert De Niro interpreta um apresentador de talk show que o protagonista admira."
          },
          {
            "id": "P20",
            "text": "Estreou no Festival de Veneza, foi aplaudido de pé por oito minutos e ganhou o Leão de Ouro.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou no Festival de Veneza, foi aplaudido de pé por oito minutos e ganhou o Leão de Ouro."
          },
          {
            "id": "P21",
            "text": "Teve 11 indicações ao Oscar e venceu Melhor Ator e Melhor Trilha Sonora Original.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Teve 11 indicações ao Oscar e venceu Melhor Ator e Melhor Trilha Sonora Original."
          },
          {
            "id": "P22",
            "text": "Foi o primeiro filme com classificação 'R' nos EUA a passar de US$ 1 bilhão de bilheteria.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi o primeiro filme com classificação 'R' nos EUA a passar de US$ 1 bilhão de bilheteria."
          },
          {
            "id": "P23",
            "text": "O filme dialoga abertamente com 'Taxi Driver' e 'O Rei da Comédia', ambos de Scorsese.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O filme dialoga abertamente com 'Taxi Driver' e 'O Rei da Comédia', ambos de Scorsese."
          },
          {
            "id": "P24",
            "text": "A trilha sonora premiada é da compositora islandesa Hildur Guðnadóttir.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A trilha sonora premiada é da compositora islandesa Hildur Guðnadóttir."
          },
          {
            "id": "P25",
            "text": "Ganhou uma continuação em 2024, que foi mal recebida pela crítica e nas bilheterias.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ganhou uma continuação em 2024, que foi mal recebida pela crítica e nas bilheterias."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Coringa (2019), dirigido por Todd Phillips, acompanha Arthur Fleck, um aspirante a comediante isolado numa cidade em crise em 1981.",
        "hinge": "Martin Scorsese esteve ligado ao projeto como produtor e o filme homenageia obras dele, mas quem dirigiu foi Todd Phillips.",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt7286456/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Joker (2019 film)",
            "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-breaking-bad": {
      "id": "cs1-serie-breaking-bad",
      "kind": "canonical-case",
      "imdbId": "tt0903747",
      "title": "Breaking Bad",
      "sessionTitle": "Uma aula que deu errado",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2008,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Breaking Bad; Wikipédia (PT) — Breaking Bad; Wikipédia (EN) — Pilot (Breaking Bad)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0903747/",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Breaking Bad",
            "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (PT) — Breaking Bad",
            "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
            "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Peter Gould escreveu para a série e cocriou o derivado 'Better Call Saul', mas a série original foi criada só por Vince Gilligan."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "Dexter"
            },
            {
              "id": "C1-O2",
              "texto": "Weeds"
            },
            {
              "id": "C1-O3",
              "texto": "Mad Men"
            },
            {
              "id": "C1-O1",
              "texto": "Breaking Bad"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Breaking Bad",
          "endereco": "IMDb; Wikipédia (EN) — Breaking Bad; Wikipédia (PT) — Breaking Bad",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0903747/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Breaking Bad",
              "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Breaking Bad",
              "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "Hank Schrader"
            },
            {
              "id": "C2-O1",
              "texto": "Walter White"
            },
            {
              "id": "C2-O4",
              "texto": "Nancy Botwin"
            },
            {
              "id": "C2-O2",
              "texto": "Jesse Pinkman"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Walter White",
          "endereco": "IMDb; Wikipédia (EN) — Breaking Bad; Wikipédia (EN) — Pilot (Breaking Bad)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0903747/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Breaking Bad",
              "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
              "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O4",
              "texto": "Matthew Weiner"
            },
            {
              "id": "C3-O2",
              "texto": "Peter Gould"
            },
            {
              "id": "C3-O3",
              "texto": "Bryan Cranston"
            },
            {
              "id": "C3-O1",
              "texto": "Vince Gilligan"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Vince Gilligan",
          "endereco": "Wikipédia (EN) — Breaking Bad; Wikipédia (PT) — Breaking Bad; Wikipédia (EN) — Better Call Saul",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Breaking Bad",
              "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (PT) — Breaking Bad",
              "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Better Call Saul",
              "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O4",
              "texto": "2010"
            },
            {
              "id": "C4-O1",
              "texto": "2008"
            },
            {
              "id": "C4-O2",
              "texto": "2007"
            },
            {
              "id": "C4-O3",
              "texto": "2009"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2008",
          "endereco": "IMDb; Wikipédia (EN) — Breaking Bad; Wikipédia (EN) — Pilot (Breaking Bad)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0903747/",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Breaking Bad",
              "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
              "checkedAt": "2026-10-13"
            },
            {
              "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
              "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
              "checkedAt": "2026-10-13"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou em janeiro de 2008, num canal de TV a cabo dos EUA.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Estreou em janeiro de 2008, num canal de TV a cabo dos EUA."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem só sete episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (PT) — Breaking Bad",
                "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "É uma série; a primeira temporada tem só sete episódios."
          },
          {
            "id": "P03",
            "text": "A 1ª temporada foi encurtada pela greve dos roteiristas de Hollywood de 2007–2008.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A 1ª temporada foi encurtada pela greve dos roteiristas de Hollywood de 2007–2008."
          },
          {
            "id": "P04",
            "text": "Foi exibida nos EUA pelo canal AMC.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Foi exibida nos EUA pelo canal AMC."
          },
          {
            "id": "P05",
            "text": "No Brasil, passou primeiro no canal pago AXN, a partir de 2010.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Breaking Bad",
                "url": "https://pt.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "No Brasil, passou primeiro no canal pago AXN, a partir de 2010."
          },
          {
            "id": "P06",
            "text": "Um pai de família comum vê a vida virar de cabeça para baixo logo depois de completar 50 anos.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um pai de família comum vê a vida virar de cabeça para baixo logo depois de completar 50 anos."
          },
          {
            "id": "P07",
            "text": "O protagonista é professor de química do ensino médio.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O protagonista é professor de química do ensino médio."
          },
          {
            "id": "P08",
            "text": "Para complementar a renda, ele também trabalha num lava-rápido.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Para complementar a renda, ele também trabalha num lava-rápido."
          },
          {
            "id": "P09",
            "text": "Logo no início, ele recebe o diagnóstico de um câncer de pulmão grave e decide esconder isso da família.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Logo no início, ele recebe o diagnóstico de um câncer de pulmão grave e decide esconder isso da família."
          },
          {
            "id": "P10",
            "text": "A esposa dele está grávida, e o filho adolescente tem paralisia cerebral.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "A esposa dele está grávida, e o filho adolescente tem paralisia cerebral."
          },
          {
            "id": "P11",
            "text": "O cunhado do protagonista é agente da agência antidrogas dos EUA (DEA).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O cunhado do protagonista é agente da agência antidrogas dos EUA (DEA)."
          },
          {
            "id": "P12",
            "text": "Um professor de química que entra para o crime ao lado de um ex-aluno.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0903747/",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um professor de química que entra para o crime ao lado de um ex-aluno."
          },
          {
            "id": "P13",
            "text": "Um velho trailer, levado para o deserto, vira o laboratório clandestino da dupla.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Um velho trailer, levado para o deserto, vira o laboratório clandestino da dupla."
          },
          {
            "id": "P14",
            "text": "Passa-se em Albuquerque, no Novo México.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Passa-se em Albuquerque, no Novo México."
          },
          {
            "id": "P15",
            "text": "Os primeiros roteiros se passavam na Califórnia; a produção mudou para o Novo México por razões financeiras.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              },
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Os primeiros roteiros se passavam na Califórnia; a produção mudou para o Novo México por razões financeiras."
          },
          {
            "id": "P16",
            "text": "O criador da série era antes roteirista de 'Arquivo X'.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O criador da série era antes roteirista de 'Arquivo X'."
          },
          {
            "id": "P17",
            "text": "O criador escreveu e dirigiu pessoalmente o episódio piloto.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O criador escreveu e dirigiu pessoalmente o episódio piloto."
          },
          {
            "id": "P18",
            "text": "O criador resumiu a proposta como transformar um 'Mr. Chips' num 'Scarface'.",
            "importance": "relevant",
            "relatedFields": [
              "C3",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O criador resumiu a proposta como transformar um 'Mr. Chips' num 'Scarface'."
          },
          {
            "id": "P19",
            "text": "O ator principal era conhecido como o pai da família na comédia 'Malcolm'.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O ator principal era conhecido como o pai da família na comédia 'Malcolm'."
          },
          {
            "id": "P20",
            "text": "Aaron Paul interpreta o ex-aluno que vira parceiro do protagonista.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Aaron Paul interpreta o ex-aluno que vira parceiro do protagonista."
          },
          {
            "id": "P21",
            "text": "Pelo papel principal, o ator venceu quatro vezes o Emmy de Melhor Ator em Série Dramática.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Pelo papel principal, o ator venceu quatro vezes o Emmy de Melhor Ator em Série Dramática."
          },
          {
            "id": "P22",
            "text": "Pela 1ª temporada, o ator principal já levou o Emmy de Melhor Ator em Série Dramática.",
            "importance": "relevant",
            "relatedFields": [
              "C2",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Pilot (Breaking Bad)",
                "url": "https://en.wikipedia.org/wiki/Pilot_(Breaking_Bad)",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Pela 1ª temporada, o ator principal já levou o Emmy de Melhor Ator em Série Dramática."
          },
          {
            "id": "P23",
            "text": "O Guinness a apontou como a série de TV mais bem avaliada de todos os tempos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O Guinness a apontou como a série de TV mais bem avaliada de todos os tempos."
          },
          {
            "id": "P24",
            "text": "Ganhou uma série derivada em 2015 e um filme-continuação em 2019.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "Ganhou uma série derivada em 2015 e um filme-continuação em 2019."
          },
          {
            "id": "P25",
            "text": "O título original é uma gíria do sul dos EUA que significa, entre outras coisas, 'aprontar'.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Breaking Bad",
                "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
                "checkedAt": "2026-10-13"
              }
            ],
            "texto": "O título original é uma gíria do sul dos EUA que significa, entre outras coisas, 'aprontar'."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Breaking Bad (AMC, 2008), criada por Vince Gilligan, acompanha Walter White, professor de química que, após um diagnóstico de câncer, entra para o crime com um ex-aluno.",
        "hinge": "Peter Gould escreveu para a série e cocriou o derivado 'Better Call Saul', mas a série original foi criada só por Vince Gilligan.",
        "references": [
          {
            "source": "Wikipédia (EN) — Breaking Bad",
            "url": "https://en.wikipedia.org/wiki/Breaking_Bad",
            "checkedAt": "2026-10-13"
          },
          {
            "source": "Wikipédia (EN) — Better Call Saul",
            "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
            "checkedAt": "2026-10-13"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-vingadores-guerra-infinita": {
      "id": "cs1-filme-vingadores-guerra-infinita",
      "kind": "canonical-case",
      "imdbId": "tt4154756",
      "title": "Vingadores: Guerra Infinita",
      "sessionTitle": "Uma caçada por seis pedras",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2018,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Avengers: Infinity War; AdoroCinema — Vingadores: Guerra Infinita",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt4154756/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Avengers: Infinity War",
            "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Vingadores: Guerra Infinita",
            "url": "https://www.adorocinema.com/filmes/filme-218265/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Joss Whedon dirigiu os dois primeiros filmes dos Vingadores, mas este é dos irmãos Russo; e, embora seja um filme de heróis, roteiristas e produtores tratam o vilão Thanos como protagonista."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "Liga da Justiça"
            },
            {
              "id": "C1-O2",
              "texto": "Vingadores: Era de Ultron"
            },
            {
              "id": "C1-O1",
              "texto": "Vingadores: Guerra Infinita"
            },
            {
              "id": "C1-O4",
              "texto": "Capitão América: Guerra Civil"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Vingadores: Guerra Infinita",
          "endereco": "IMDb; Wikipédia (EN) — Avengers: Infinity War",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4154756/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Avengers: Infinity War",
              "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Hela"
            },
            {
              "id": "C2-O2",
              "texto": "Loki"
            },
            {
              "id": "C2-O3",
              "texto": "Ultron"
            },
            {
              "id": "C2-O1",
              "texto": "Thanos"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Thanos (com Tony Stark / Homem de Ferro, Thor, Steve Rogers / Capitão América, Doutor Estranho, Peter Parker / Homem-Aranha, Peter Quill / Senhor das Estrelas, Gamora, Bruce Banner / Hulk)",
          "endereco": "Wikipédia (EN) — Avengers: Infinity War",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Avengers: Infinity War",
              "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Joss Whedon"
            },
            {
              "id": "C3-O3",
              "texto": "James Gunn"
            },
            {
              "id": "C3-O1",
              "texto": "Anthony e Joe Russo"
            },
            {
              "id": "C3-O4",
              "texto": "Jon Favreau"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Anthony e Joe Russo",
          "endereco": "Wikipédia (EN) — Avengers: Infinity War; AdoroCinema — Vingadores: Guerra Infinita",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Avengers: Infinity War",
              "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Vingadores: Guerra Infinita",
              "url": "https://www.adorocinema.com/filmes/filme-218265/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2019"
            },
            {
              "id": "C4-O4",
              "texto": "2016"
            },
            {
              "id": "C4-O2",
              "texto": "2017"
            },
            {
              "id": "C4-O1",
              "texto": "2018"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2018",
          "endereco": "IMDb; Wikipédia (EN) — Avengers: Infinity War",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt4154756/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Avengers: Infinity War",
              "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em 26 de abril de 2018, um dia antes da estreia nos EUA.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Vingadores: Guerra Infinita",
                "url": "https://www.adorocinema.com/filmes/filme-218265/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em 26 de abril de 2018, um dia antes da estreia nos EUA."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de quase duas horas e meia (149 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt4154756/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de quase duas horas e meia (149 minutos)."
          },
          {
            "id": "P03",
            "text": "Um poderoso conquistador alienígena percorre o universo atrás de seis pedras de poder lendárias.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um poderoso conquistador alienígena percorre o universo atrás de seis pedras de poder lendárias."
          },
          {
            "id": "P04",
            "text": "Logo no início, uma nave com os sobreviventes de Asgard é interceptada pelo vilão e seus tenentes.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Logo no início, uma nave com os sobreviventes de Asgard é interceptada pelo vilão e seus tenentes."
          },
          {
            "id": "P05",
            "text": "O Hulk despenca no Sanctum Sanctorum, em Nova York, e alerta o Doutor Estranho sobre a ameaça.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O Hulk despenca no Sanctum Sanctorum, em Nova York, e alerta o Doutor Estranho sobre a ameaça."
          },
          {
            "id": "P06",
            "text": "Os Guardiões da Galáxia atendem a um pedido de socorro e resgatam Thor no espaço.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os Guardiões da Galáxia atendem a um pedido de socorro e resgatam Thor no espaço."
          },
          {
            "id": "P07",
            "text": "Uma das pedras cobiçadas fica na testa do androide Visão; outra está com o Doutor Estranho.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma das pedras cobiçadas fica na testa do androide Visão; outra está com o Doutor Estranho."
          },
          {
            "id": "P08",
            "text": "O vilão acredita que o universo está superpovoado e quer eliminar metade de toda a vida para 'reequilibrá-lo'.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O vilão acredita que o universo está superpovoado e quer eliminar metade de toda a vida para 'reequilibrá-lo'."
          },
          {
            "id": "P09",
            "text": "Heróis da Terra e do espaço se dividem para impedir que o vilão reúna as seis joias.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Heróis da Terra e do espaço se dividem para impedir que o vilão reúna as seis joias."
          },
          {
            "id": "P10",
            "text": "A dupla de diretores já tinha comandado 'Capitão América: O Soldado Invernal' e a aventura seguinte do herói.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Empire — Russo brothers set for Avengers: Infinity War",
                "url": "https://empireonline.com/movies/news/russo-brothers-set-avengers-infinity-war",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A dupla de diretores já tinha comandado 'Capitão América: O Soldado Invernal' e a aventura seguinte do herói."
          },
          {
            "id": "P11",
            "text": "Os diretores são irmãos e assumiram a equipe depois do cineasta que comandou os dois filmes anteriores do grupo.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Avengers: Age of Ultron",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Age_of_Ultron",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os diretores são irmãos e assumiram a equipe depois do cineasta que comandou os dois filmes anteriores do grupo."
          },
          {
            "id": "P12",
            "text": "Foi rodado em sequência com o filme seguinte da saga, entre janeiro e julho de 2017.",
            "importance": "contextual",
            "relatedFields": [
              "C3",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi rodado em sequência com o filme seguinte da saga, entre janeiro e julho de 2017."
          },
          {
            "id": "P13",
            "text": "As filmagens começaram nos estúdios Pinewood, em Atlanta, com o codinome 'Mary Lou' para despistar curiosos.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens começaram nos estúdios Pinewood, em Atlanta, com o codinome 'Mary Lou' para despistar curiosos."
          },
          {
            "id": "P14",
            "text": "Foi o primeiro longa de Hollywood filmado inteiramente com câmeras digitais IMAX.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi o primeiro longa de Hollywood filmado inteiramente com câmeras digitais IMAX."
          },
          {
            "id": "P15",
            "text": "Os roteiristas Christopher Markus e Stephen McFeely descreveram a história como a 'jornada do herói' do vilão.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os roteiristas Christopher Markus e Stephen McFeely descreveram a história como a 'jornada do herói' do vilão."
          },
          {
            "id": "P16",
            "text": "Josh Brolin dá voz e corpo ao vilão, atuando no set com captura de movimento.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Josh Brolin dá voz e corpo ao vilão, atuando no set com captura de movimento."
          },
          {
            "id": "P17",
            "text": "Tom Holland vive um Vingador adolescente, protegido de Tony Stark.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Tom Holland vive um Vingador adolescente, protegido de Tony Stark."
          },
          {
            "id": "P18",
            "text": "Peter Dinklage aparece como Eitri, o rei dos anões de Nidavellir.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Peter Dinklage aparece como Eitri, o rei dos anões de Nidavellir."
          },
          {
            "id": "P19",
            "text": "Foi indicado ao Oscar de Melhores Efeitos Visuais.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi indicado ao Oscar de Melhores Efeitos Visuais."
          },
          {
            "id": "P20",
            "text": "Arrecadou cerca de US$ 2 bilhões e foi a maior bilheteria mundial de 2018.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Arrecadou cerca de US$ 2 bilhões e foi a maior bilheteria mundial de 2018."
          },
          {
            "id": "P21",
            "text": "Chegou a US$ 1 bilhão de bilheteria em 11 dias, mais rápido que qualquer filme até então.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chegou a US$ 1 bilhão de bilheteria em 11 dias, mais rápido que qualquer filme até então."
          },
          {
            "id": "P22",
            "text": "É o 19º filme do Universo Cinematográfico Marvel.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É o 19º filme do Universo Cinematográfico Marvel."
          },
          {
            "id": "P23",
            "text": "A trilha é de Alan Silvestri, que também compôs a do primeiro filme da equipe, de 2012.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A trilha é de Alan Silvestri, que também compôs a do primeiro filme da equipe, de 2012."
          },
          {
            "id": "P24",
            "text": "A estreia mundial foi em 23 de abril de 2018, no Dolby Theatre, em Hollywood.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A estreia mundial foi em 23 de abril de 2018, no Dolby Theatre, em Hollywood."
          },
          {
            "id": "P25",
            "text": "Foi anunciado em outubro de 2014 como a 'Parte 1' de uma história em dois filmes; o rótulo caiu depois.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avengers: Infinity War",
                "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi anunciado em outubro de 2014 como a 'Parte 1' de uma história em dois filmes; o rótulo caiu depois."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Vingadores: Guerra Infinita (2018), dirigido por Anthony e Joe Russo, acompanha Thanos em busca das seis Joias do Infinito enquanto os heróis da Marvel tentam detê-lo.",
        "hinge": "Joss Whedon dirigiu os dois primeiros filmes dos Vingadores, mas este é dos irmãos Russo; e, embora seja um filme de heróis, roteiristas e produtores tratam o vilão Thanos como protagonista.",
        "references": [
          {
            "source": "Wikipédia (EN) — Avengers: Infinity War",
            "url": "https://en.wikipedia.org/wiki/Avengers:_Infinity_War",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Avengers: Age of Ultron",
            "url": "https://en.wikipedia.org/wiki/Avengers:_Age_of_Ultron",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt4154756/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-the-walking-dead": {
      "id": "cs1-serie-the-walking-dead",
      "kind": "canonical-case",
      "imdbId": "tt1520211",
      "title": "The Walking Dead",
      "sessionTitle": "Acordar num mundo vazio",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2010,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — The Walking Dead (TV series); Wikipédia (EN) — The Walking Dead season 1",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1520211/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Walking Dead (TV series)",
            "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Walking Dead season 1",
            "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Robert Kirkman criou os quadrinhos e é produtor executivo, mas quem desenvolveu a série para a TV foi Frank Darabont."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "The Strain"
            },
            {
              "id": "C1-O1",
              "texto": "The Walking Dead"
            },
            {
              "id": "C1-O4",
              "texto": "Z Nation"
            },
            {
              "id": "C1-O2",
              "texto": "Falling Skies"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "The Walking Dead",
          "endereco": "IMDb; Wikipédia (EN) — The Walking Dead (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1520211/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — The Walking Dead (TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Tom Mason"
            },
            {
              "id": "C2-O3",
              "texto": "Robert Neville"
            },
            {
              "id": "C2-O1",
              "texto": "Rick Grimes"
            },
            {
              "id": "C2-O4",
              "texto": "Gerry Lane"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Rick Grimes (com Shane Walsh, Lori Grimes, Carl Grimes, Glenn Rhee, Andrea, Dale Horvath, Daryl Dixon, Carol Peletier)",
          "endereco": "Wikipédia (EN) — The Walking Dead season 1; Wikipédia (EN) — Andrew Lincoln",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Walking Dead season 1",
              "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Andrew Lincoln",
              "url": "https://en.wikipedia.org/wiki/Andrew_Lincoln",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Frank Darabont"
            },
            {
              "id": "C3-O4",
              "texto": "Scott M. Gimple"
            },
            {
              "id": "C3-O3",
              "texto": "Guillermo del Toro"
            },
            {
              "id": "C3-O2",
              "texto": "Robert Kirkman"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Frank Darabont",
          "endereco": "Wikipédia (EN) — The Walking Dead (TV series); Wikipédia (EN) — Frank Darabont (arquivo)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Walking Dead (TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Frank Darabont (arquivo)",
              "url": "https://webcf.waybackmachine.org/web/20220314041450/https://en.m.wikipedia.org/wiki/Frank_Darabont",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2009"
            },
            {
              "id": "C4-O1",
              "texto": "2010"
            },
            {
              "id": "C4-O4",
              "texto": "2012"
            },
            {
              "id": "C4-O3",
              "texto": "2011"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2010",
          "endereco": "IMDb; Wikipédia (EN) — The Walking Dead (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1520211/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — The Walking Dead (TV series)",
              "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou na TV americana no dia de Halloween, 31 de outubro de 2010.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou na TV americana no dia de Halloween, 31 de outubro de 2010."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem apenas seis episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma série; a primeira temporada tem apenas seis episódios."
          },
          {
            "id": "P03",
            "text": "A história acompanha sobreviventes num mundo tomado por mortos-vivos.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história acompanha sobreviventes num mundo tomado por mortos-vivos."
          },
          {
            "id": "P04",
            "text": "A primeira temporada se passa e foi gravada em Atlanta e arredores, na Geórgia (EUA).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada se passa e foi gravada em Atlanta e arredores, na Geórgia (EUA)."
          },
          {
            "id": "P05",
            "text": "O protagonista é um policial, xerife adjunto, baleado em serviço, que acorda de um coma no hospital.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Omelete — The Walking Dead 10 anos: relembre o piloto",
                "url": "https://www.omelete.com.br/walking-dead/the-walking-dead-10-anos-relembre-o-piloto",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é um policial, xerife adjunto, baleado em serviço, que acorda de um coma no hospital."
          },
          {
            "id": "P06",
            "text": "Ao acordar, ele sai em busca da esposa e do filho, rumo a Atlanta.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ao acordar, ele sai em busca da esposa e do filho, rumo a Atlanta."
          },
          {
            "id": "P07",
            "text": "Logo no início, ele conhece um pai e um filho que também tentam sobreviver.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Logo no início, ele conhece um pai e um filho que também tentam sobreviver."
          },
          {
            "id": "P08",
            "text": "Na cidade grande, o protagonista fica preso dentro de um tanque de guerra.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Na cidade grande, o protagonista fica preso dentro de um tanque de guerra."
          },
          {
            "id": "P09",
            "text": "Uma voz no rádio do tanque é de um jovem que vai resgatá-lo.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma voz no rádio do tanque é de um jovem que vai resgatá-lo."
          },
          {
            "id": "P10",
            "text": "Para atravessar a cidade, o grupo se disfarça de mortos-vivos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Para atravessar a cidade, o grupo se disfarça de mortos-vivos."
          },
          {
            "id": "P11",
            "text": "O protagonista reencontra a família num acampamento de sobreviventes perto da cidade.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista reencontra a família num acampamento de sobreviventes perto da cidade."
          },
          {
            "id": "P12",
            "text": "Foi desenvolvida para a TV pelo diretor de 'Um Sonho de Liberdade' e 'À Espera de um Milagre'.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Jornal de Brasília — diretor de Um Sonho de Liberdade e À Espera de um Milagre",
                "url": "https://jornaldebrasilia.com.br/entretenimento/tvstreaming/diretor-de-sonho-de-liberdade-e-a-espera-de-um-milagre-comandara-stranger-things/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi desenvolvida para a TV pelo diretor de 'Um Sonho de Liberdade' e 'À Espera de um Milagre'."
          },
          {
            "id": "P13",
            "text": "Esse mesmo cineasta escreveu e dirigiu o episódio piloto.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Frank Darabont (arquivo)",
                "url": "https://webcf.waybackmachine.org/web/20220314041450/https://en.m.wikipedia.org/wiki/Frank_Darabont",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Esse mesmo cineasta escreveu e dirigiu o episódio piloto."
          },
          {
            "id": "P14",
            "text": "Robert Kirkman, um dos autores dos quadrinhos originais, é produtor executivo da série.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Robert Kirkman, um dos autores dos quadrinhos originais, é produtor executivo da série."
          },
          {
            "id": "P15",
            "text": "Quem desenvolveu a série foi afastado do comando dela em julho de 2011.",
            "importance": "contextual",
            "relatedFields": [
              "C3",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Frank Darabont (arquivo)",
                "url": "https://webcf.waybackmachine.org/web/20220314041450/https://en.m.wikipedia.org/wiki/Frank_Darabont",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Quem desenvolveu a série foi afastado do comando dela em julho de 2011."
          },
          {
            "id": "P16",
            "text": "O projeto foi oferecido antes à NBC, que recusou; acabou no canal AMC.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Frank Darabont (arquivo)",
                "url": "https://webcf.waybackmachine.org/web/20220314041450/https://en.m.wikipedia.org/wiki/Frank_Darabont",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O projeto foi oferecido antes à NBC, que recusou; acabou no canal AMC."
          },
          {
            "id": "P17",
            "text": "O protagonista é vivido por um ator inglês que fez o apaixonado Mark em 'Simplesmente Amor' (2003).",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Andrew Lincoln",
                "url": "https://en.wikipedia.org/wiki/Andrew_Lincoln",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — Simplesmente Amor",
                "url": "https://www.adorocinema.com/filmes/filme-44445/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por um ator inglês que fez o apaixonado Mark em 'Simplesmente Amor' (2003)."
          },
          {
            "id": "P18",
            "text": "Jon Bernthal, que depois viveu o Justiceiro, interpreta o líder do acampamento de sobreviventes.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Jon Bernthal",
                "url": "https://en.wikipedia.org/wiki/Jon_Bernthal",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Jon Bernthal, que depois viveu o Justiceiro, interpreta o líder do acampamento de sobreviventes."
          },
          {
            "id": "P19",
            "text": "Steven Yeun vive Glenn, o jovem que fala com o protagonista pelo rádio e o resgata.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Britannica — Steven Yeun",
                "url": "https://www.britannica.com/biography/Steven-Yeun",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Steven Yeun vive Glenn, o jovem que fala com o protagonista pelo rádio e o resgata."
          },
          {
            "id": "P20",
            "text": "O episódio piloto ganhou o Emmy de melhor maquiagem protética.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O episódio piloto ganhou o Emmy de melhor maquiagem protética."
          },
          {
            "id": "P21",
            "text": "A primeira temporada foi indicada ao Globo de Ouro de melhor série dramática.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead season 1",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada foi indicada ao Globo de Ouro de melhor série dramática."
          },
          {
            "id": "P22",
            "text": "Dias antes da estreia, uma 'invasão zumbi' promocional aconteceu em 26 cidades do mundo, em outubro de 2010.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Dias antes da estreia, uma 'invasão zumbi' promocional aconteceu em 26 cidades do mundo, em outubro de 2010."
          },
          {
            "id": "P23",
            "text": "O episódio piloto vazou na internet quase duas semanas antes de ir ao ar.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O episódio piloto vazou na internet quase duas semanas antes de ir ao ar."
          },
          {
            "id": "P24",
            "text": "A estreia da quinta temporada teve cerca de 17 milhões de espectadores, recorde da TV a cabo americana fora do esporte na época.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A estreia da quinta temporada teve cerca de 17 milhões de espectadores, recorde da TV a cabo americana fora do esporte na época."
          },
          {
            "id": "P25",
            "text": "A série durou 11 temporadas e 177 episódios, terminando em novembro de 2022.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Walking Dead (TV series)",
                "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A série durou 11 temporadas e 177 episódios, terminando em novembro de 2022."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "The Walking Dead (AMC, 2010), desenvolvida por Frank Darabont a partir dos quadrinhos de Robert Kirkman, Tony Moore e Charlie Adlard, começa com o policial Rick Grimes acordando de um coma num mundo tomado por mortos-vivos.",
        "hinge": "Robert Kirkman criou os quadrinhos e é produtor executivo, mas quem desenvolveu a série para a TV foi Frank Darabont.",
        "references": [
          {
            "source": "Wikipédia (EN) — The Walking Dead (TV series)",
            "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Walking Dead season 1",
            "url": "https://en.wikipedia.org/wiki/The_Walking_Dead_season_1",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-avatar": {
      "id": "cs1-filme-avatar",
      "kind": "canonical-case",
      "imdbId": "tt0499549",
      "title": "Avatar",
      "sessionTitle": "Uma lua cheia de cobiça",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2009,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Avatar (2009 film); AdoroCinema — Avatar; Filmow — Avatar (classificação indicativa)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0499549/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Avatar (2009 film)",
            "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Avatar",
            "url": "https://www.adorocinema.com/filmes/filme-61282/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Filmow — Avatar (classificação indicativa)",
            "url": "https://filmow.com/avatar-t8531/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Na disputa do Oscar de 2010, o rival era 'Guerra ao Terror', de Kathryn Bigelow (ex-esposa do diretor), que levou Melhor Filme e Direção; Avatar é de James Cameron, o mesmo de 'Titanic'."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "John Carter: Entre Dois Mundos"
            },
            {
              "id": "C1-O2",
              "texto": "Distrito 9"
            },
            {
              "id": "C1-O1",
              "texto": "Avatar"
            },
            {
              "id": "C1-O4",
              "texto": "Interestelar"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Avatar",
          "endereco": "IMDb; Wikipédia (EN) — Avatar (2009 film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0499549/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Avatar (2009 film)",
              "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "John Carter"
            },
            {
              "id": "C2-O3",
              "texto": "Grace Augustine"
            },
            {
              "id": "C2-O2",
              "texto": "Coronel Miles Quaritch"
            },
            {
              "id": "C2-O1",
              "texto": "Jake Sully"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Jake Sully",
          "endereco": "Wikipédia (EN) — Avatar (2009 film)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Avatar (2009 film)",
              "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "James Cameron"
            },
            {
              "id": "C3-O3",
              "texto": "Peter Jackson"
            },
            {
              "id": "C3-O4",
              "texto": "Ridley Scott"
            },
            {
              "id": "C3-O2",
              "texto": "Steven Spielberg"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "James Cameron",
          "endereco": "Wikipédia (EN) — Avatar (2009 film); AdoroCinema — Avatar",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Avatar (2009 film)",
              "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Avatar",
              "url": "https://www.adorocinema.com/filmes/filme-61282/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O1",
              "texto": "2009"
            },
            {
              "id": "C4-O3",
              "texto": "2010"
            },
            {
              "id": "C4-O4",
              "texto": "2007"
            },
            {
              "id": "C4-O2",
              "texto": "2008"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2009",
          "endereco": "IMDb; Wikipédia (EN) — Avatar (2009 film)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0499549/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Avatar (2009 film)",
              "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou nos cinemas do Brasil e dos EUA em 18 de dezembro de 2009.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar",
                "url": "https://www.adorocinema.com/filmes/filme-61282/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou nos cinemas do Brasil e dos EUA em 18 de dezembro de 2009."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de cerca de 2h40 na versão de cinema (162 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de cerca de 2h40 na versão de cinema (162 minutos)."
          },
          {
            "id": "P03",
            "text": "A história se passa em 2154, com a Terra sofrendo esgotamento de recursos e colapso ecológico.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história se passa em 2154, com a Terra sofrendo esgotamento de recursos e colapso ecológico."
          },
          {
            "id": "P04",
            "text": "Uma empresa humana explora um mineral valioso numa lua habitável do sistema Alpha Centauri.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma empresa humana explora um mineral valioso numa lua habitável do sistema Alpha Centauri."
          },
          {
            "id": "P05",
            "text": "O protagonista é um ex-fuzileiro naval paraplégico que assume a vaga do irmão gêmeo morto num programa científico.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é um ex-fuzileiro naval paraplégico que assume a vaga do irmão gêmeo morto num programa científico."
          },
          {
            "id": "P06",
            "text": "No programa, humanos controlam à distância corpos híbridos criados geneticamente a partir do povo nativo.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No programa, humanos controlam à distância corpos híbridos criados geneticamente a partir do povo nativo."
          },
          {
            "id": "P07",
            "text": "Os nativos do lugar têm cerca de 3 metros de altura, pele azul e vivem em harmonia com a natureza.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os nativos do lugar têm cerca de 3 metros de altura, pele azul e vivem em harmonia com a natureza."
          },
          {
            "id": "P08",
            "text": "O protagonista conhece Neytiri, uma guerreira do povo nativo.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista conhece Neytiri, uma guerreira do povo nativo."
          },
          {
            "id": "P09",
            "text": "O mineral cobiçado tem o nome brincalhão de 'unobtanium'.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O mineral cobiçado tem o nome brincalhão de 'unobtanium'."
          },
          {
            "id": "P10",
            "text": "O chefe da segurança da empresa mineradora é um coronel linha-dura.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O chefe da segurança da empresa mineradora é um coronel linha-dura."
          },
          {
            "id": "P11",
            "text": "O diretor escreveu o primeiro tratamento da história, de 80 páginas, em 1994, mas esperou a tecnologia evoluir.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor escreveu o primeiro tratamento da história, de 80 páginas, em 1994, mas esperou a tecnologia evoluir."
          },
          {
            "id": "P12",
            "text": "Foi o primeiro longa dirigido por ele desde 'Titanic' (1997).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi o primeiro longa dirigido por ele desde 'Titanic' (1997)."
          },
          {
            "id": "P13",
            "text": "As câmeras 3D usadas foram um sistema desenvolvido pelo próprio diretor junto com Vince Pace.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As câmeras 3D usadas foram um sistema desenvolvido pelo próprio diretor junto com Vince Pace."
          },
          {
            "id": "P14",
            "text": "As filmagens principais aconteceram entre abril e dezembro de 2007, na Nova Zelândia e em Los Angeles.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens principais aconteceram entre abril e dezembro de 2007, na Nova Zelândia e em Los Angeles."
          },
          {
            "id": "P15",
            "text": "Cerca de 40% das cenas têm atores reais; o resto foi feito com computação gráfica.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Cerca de 40% das cenas têm atores reais; o resto foi feito com computação gráfica."
          },
          {
            "id": "P16",
            "text": "O protagonista é vivido por Sam Worthington.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0499549/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Sam Worthington."
          },
          {
            "id": "P17",
            "text": "Sigourney Weaver interpreta a cientista que chefia o programa.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Sigourney Weaver interpreta a cientista que chefia o programa."
          },
          {
            "id": "P18",
            "text": "Michael Biehn chegou a filmar testes para o papel do coronel, mas o personagem ficou com Stephen Lang.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Michael Biehn chegou a filmar testes para o papel do coronel, mas o personagem ficou com Stephen Lang."
          },
          {
            "id": "P19",
            "text": "Teve 9 indicações ao Oscar e venceu três: Direção de Arte, Fotografia e Efeitos Visuais.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Teve 9 indicações ao Oscar e venceu três: Direção de Arte, Fotografia e Efeitos Visuais."
          },
          {
            "id": "P20",
            "text": "Ganhou o Globo de Ouro de Melhor Filme de Drama e o de Melhor Direção.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou o Globo de Ouro de Melhor Filme de Drama e o de Melhor Direção."
          },
          {
            "id": "P21",
            "text": "Em janeiro de 2010, superou 'Titanic' e virou a maior bilheteria da história do cinema.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3",
              "C4"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em janeiro de 2010, superou 'Titanic' e virou a maior bilheteria da história do cinema."
          },
          {
            "id": "P22",
            "text": "O idioma do povo nativo foi criado pelo linguista Paul Frommer e tem cerca de mil palavras.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Avatar (2009 film)",
                "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O idioma do povo nativo foi criado pelo linguista Paul Frommer e tem cerca de mil palavras."
          },
          {
            "id": "P23",
            "text": "No Brasil, foi o primeiro filme exibido em 3D com legendas e levou mais de 9 milhões de pessoas aos cinemas.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No Brasil, foi o primeiro filme exibido em 3D com legendas e levou mais de 9 milhões de pessoas aos cinemas."
          },
          {
            "id": "P24",
            "text": "No Oscar de 2010, perdeu Melhor Filme e Melhor Direção para 'Guerra ao Terror', da ex-esposa do diretor.",
            "importance": "relevant",
            "relatedFields": [
              "C3",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "ET Online — Oscars Flashback '10: Bigelow Makes History",
                "url": "https://www.etonline.com/awards/128432_Oscars_Flashback_Kathryn_Bigelow_2010",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No Oscar de 2010, perdeu Melhor Filme e Melhor Direção para 'Guerra ao Terror', da ex-esposa do diretor."
          },
          {
            "id": "P25",
            "text": "Em 2010, voltou aos cinemas numa versão só em 3D, com oito minutos extras.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Avatar (curiosidades)",
                "url": "https://www.adorocinema.com/filmes/filme-61282/curiosidades/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em 2010, voltou aos cinemas numa versão só em 3D, com oito minutos extras."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Avatar (2009), escrito e dirigido por James Cameron, acompanha Jake Sully, ex-fuzileiro paraplégico que passa a controlar um corpo nativo na lua Pandora.",
        "hinge": "Na disputa do Oscar de 2010, o rival era 'Guerra ao Terror', de Kathryn Bigelow (ex-esposa do diretor), que levou Melhor Filme e Direção; Avatar é de James Cameron, o mesmo de 'Titanic'.",
        "references": [
          {
            "source": "Wikipédia (EN) — Avatar (2009 film)",
            "url": "https://en.wikipedia.org/wiki/Avatar_(2009_film)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "ET Online — Oscars Flashback '10: Bigelow Makes History",
            "url": "https://www.etonline.com/awards/128432_Oscars_Flashback_Kathryn_Bigelow_2010",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0499549/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-game-of-thrones": {
      "id": "cs1-serie-game-of-thrones",
      "kind": "canonical-case",
      "imdbId": "tt0944947",
      "title": "Game of Thrones",
      "sessionTitle": "Famílias rivais, inverno à vista",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2011,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Game of Thrones; Wikipédia (EN) — Game of Thrones season 1; my-best Brasil — ranking de séries (classificação etária)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0944947/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Game of Thrones",
            "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Game of Thrones season 1",
            "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "my-best Brasil — ranking de séries (classificação etária)",
            "url": "https://br.my-best.com/20783",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "George R. R. Martin escreveu os livros e alguns episódios, mas a série foi criada por David Benioff e D. B. Weiss."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "A Casa do Dragão"
            },
            {
              "id": "C1-O2",
              "texto": "Vikings"
            },
            {
              "id": "C1-O3",
              "texto": "The Witcher"
            },
            {
              "id": "C1-O1",
              "texto": "Game of Thrones"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Game of Thrones",
          "endereco": "IMDb; Wikipédia (EN) — Game of Thrones",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0944947/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Game of Thrones",
              "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "Ragnar Lothbrok"
            },
            {
              "id": "C2-O1",
              "texto": "Jon Snow"
            },
            {
              "id": "C2-O2",
              "texto": "Geralt de Rívia"
            },
            {
              "id": "C2-O4",
              "texto": "Samwell Tarly"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Jon Snow (com Eddard Stark, Catelyn Stark, Robb Stark, Sansa Stark, Arya Stark, Bran Stark, Tyrion Lannister, Cersei Lannister, Jaime Lannister, Daenerys Targaryen)",
          "endereco": "Wikipédia (EN) — Game of Thrones season 1; Wikipédia (EN) — Kit Harington",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Game of Thrones season 1",
              "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Kit Harington",
              "url": "https://en.wikipedia.org/wiki/Kit_Harington",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "George R. R. Martin"
            },
            {
              "id": "C3-O3",
              "texto": "Michael Hirst"
            },
            {
              "id": "C3-O1",
              "texto": "David Benioff e D. B. Weiss"
            },
            {
              "id": "C3-O4",
              "texto": "Lauren Schmidt Hissrich"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "David Benioff e D. B. Weiss",
          "endereco": "Wikipédia (EN) — Game of Thrones; Wikipédia (EN) — David Benioff",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Game of Thrones",
              "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — David Benioff",
              "url": "https://en.wikipedia.org/wiki/David_Benioff",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O4",
              "texto": "2013"
            },
            {
              "id": "C4-O3",
              "texto": "2012"
            },
            {
              "id": "C4-O2",
              "texto": "2010"
            },
            {
              "id": "C4-O1",
              "texto": "2011"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2011",
          "endereco": "IMDb; Wikipédia (EN) — Game of Thrones",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0944947/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Game of Thrones",
              "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou num domingo de abril de 2011, num canal de TV paga americano.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou num domingo de abril de 2011, num canal de TV paga americano."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem dez episódios de cerca de 55 minutos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma série; a primeira temporada tem dez episódios de cerca de 55 minutos."
          },
          {
            "id": "P03",
            "text": "Famílias nobres de um continente fictício, de clima medieval, disputam o poder.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Famílias nobres de um continente fictício, de clima medieval, disputam o poder."
          },
          {
            "id": "P04",
            "text": "O rei visita um castelo do Norte para pedir que o senhor local seja a 'Mão do Rei', seu principal conselheiro.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — 10 grandes momentos da 1ª temporada",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-146814/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O rei visita um castelo do Norte para pedir que o senhor local seja a 'Mão do Rei', seu principal conselheiro."
          },
          {
            "id": "P05",
            "text": "Uma ninhada de seis filhotes de lobo gigante órfãos é encontrada, e cada filho da família nobre do Norte fica com um.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma ninhada de seis filhotes de lobo gigante órfãos é encontrada, e cada filho da família nobre do Norte fica com um."
          },
          {
            "id": "P06",
            "text": "Do outro lado do mar, um príncipe exilado entrega a irmã em casamento a um senhor da guerra, em troca de um exército.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — 10 grandes momentos da 1ª temporada",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-146814/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Do outro lado do mar, um príncipe exilado entrega a irmã em casamento a um senhor da guerra, em troca de um exército."
          },
          {
            "id": "P07",
            "text": "O protagonista é o filho bastardo do senhor do Norte.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é o filho bastardo do senhor do Norte."
          },
          {
            "id": "P08",
            "text": "Ele parte para a Muralha, no extremo norte, para se juntar à Patrulha da Noite.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — 10 grandes momentos da 1ª temporada",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-146814/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele parte para a Muralha, no extremo norte, para se juntar à Patrulha da Noite."
          },
          {
            "id": "P09",
            "text": "Na Patrulha, ele se destaca entre recrutas que, muitas vezes, são de origem pobre ou criminosos condenados.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Na Patrulha, ele se destaca entre recrutas que, muitas vezes, são de origem pobre ou criminosos condenados."
          },
          {
            "id": "P10",
            "text": "Ele protege um recruta desajeitado que sofre nas mãos dos colegas.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele protege um recruta desajeitado que sofre nas mãos dos colegas."
          },
          {
            "id": "P11",
            "text": "Um dos criadores escreveu os roteiros dos filmes 'Troia' (2004) e 'O Caçador de Pipas' (2007).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — David Benioff",
                "url": "https://en.wikipedia.org/wiki/David_Benioff",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um dos criadores escreveu os roteiros dos filmes 'Troia' (2004) e 'O Caçador de Pipas' (2007)."
          },
          {
            "id": "P12",
            "text": "O autor dos livros originais é produtor e escreveu um episódio em cada uma das quatro primeiras temporadas, mas não criou a série.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O autor dos livros originais é produtor e escreveu um episódio em cada uma das quatro primeiras temporadas, mas não criou a série."
          },
          {
            "id": "P13",
            "text": "O primeiro episódio foi gravado em 2009, mas a emissora mandou refilmar cerca de 90% dele.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O primeiro episódio foi gravado em 2009, mas a emissora mandou refilmar cerca de 90% dele."
          },
          {
            "id": "P14",
            "text": "O estúdio principal ficava em Belfast, na Irlanda do Norte; as cenas da capital, na 1ª temporada, foram gravadas em Malta.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O estúdio principal ficava em Belfast, na Irlanda do Norte; as cenas da capital, na 1ª temporada, foram gravadas em Malta."
          },
          {
            "id": "P15",
            "text": "Os dois criadores convenceram o autor dos livros após uma reunião de cinco horas com ele.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os dois criadores convenceram o autor dos livros após uma reunião de cinco horas com ele."
          },
          {
            "id": "P16",
            "text": "Sean Bean, o Boromir de 'O Senhor dos Anéis', vive o senhor do castelo do Norte.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sean Bean",
                "url": "https://en.wikipedia.org/wiki/Sean_Bean",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Sean Bean, o Boromir de 'O Senhor dos Anéis', vive o senhor do castelo do Norte."
          },
          {
            "id": "P17",
            "text": "O ator do protagonista estreou na TV com esse papel e depois estrelou o filme 'Pompeia' (2014).",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Kit Harington",
                "url": "https://en.wikipedia.org/wiki/Kit_Harington",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O ator do protagonista estreou na TV com esse papel e depois estrelou o filme 'Pompeia' (2014)."
          },
          {
            "id": "P18",
            "text": "A atriz que vive a princesa exilada entrou no lugar de outra atriz quando o primeiro episódio foi refilmado.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A atriz que vive a princesa exilada entrou no lugar de outra atriz quando o primeiro episódio foi refilmado."
          },
          {
            "id": "P19",
            "text": "Peter Dinklage ganhou o Emmy e o Globo de Ouro de ator coadjuvante pela primeira temporada.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Peter Dinklage ganhou o Emmy e o Globo de Ouro de ator coadjuvante pela primeira temporada."
          },
          {
            "id": "P20",
            "text": "Com 59 troféus, é a série dramática mais premiada da história do Emmy.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "O Povo — uma década de Game of Thrones",
                "url": "https://mais.opovo.com.br/jornal/vidaearte/2021/04/17/uma-decada-de-game-of-thrones--confira-curiosidades-sobre-a-serie.html",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Com 59 troféus, é a série dramática mais premiada da história do Emmy."
          },
          {
            "id": "P21",
            "text": "As filmagens da primeira temporada começaram em julho de 2010.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones season 1",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens da primeira temporada começaram em julho de 2010."
          },
          {
            "id": "P22",
            "text": "A série teve oito temporadas e 73 episódios, terminando em maio de 2019.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "O Povo — uma década de Game of Thrones",
                "url": "https://mais.opovo.com.br/jornal/vidaearte/2021/04/17/uma-decada-de-game-of-thrones--confira-curiosidades-sobre-a-serie.html",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A série teve oito temporadas e 73 episódios, terminando em maio de 2019."
          },
          {
            "id": "P23",
            "text": "Um linguista criou idiomas completos para a série, como o dothraki e o valiriano.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um linguista criou idiomas completos para a série, como o dothraki e o valiriano."
          },
          {
            "id": "P24",
            "text": "Segundo o site TorrentFreak, foi a série mais pirateada do mundo entre 2012 e 2019 (exceto em 2018).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Segundo o site TorrentFreak, foi a série mais pirateada do mundo entre 2012 e 2019 (exceto em 2018)."
          },
          {
            "id": "P25",
            "text": "A abertura mostra um mapa em relevo, em 3D, do continente fictício, com cerca de 90 segundos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Game of Thrones",
                "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A abertura mostra um mapa em relevo, em 3D, do continente fictício, com cerca de 90 segundos."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Game of Thrones (HBO, 2011), criada por David Benioff e D. B. Weiss a partir dos livros de George R. R. Martin, tem entre seus protagonistas Jon Snow, o filho bastardo de Eddard Stark que se junta à Patrulha da Noite.",
        "hinge": "George R. R. Martin escreveu os livros e alguns episódios, mas a série foi criada por David Benioff e D. B. Weiss.",
        "references": [
          {
            "source": "Wikipédia (EN) — Game of Thrones",
            "url": "https://en.wikipedia.org/wiki/Game_of_Thrones",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — David Benioff",
            "url": "https://en.wikipedia.org/wiki/David_Benioff",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-onde-os-fracos-nao-tem-vez": {
      "id": "cs1-filme-onde-os-fracos-nao-tem-vez",
      "kind": "canonical-case",
      "imdbId": "tt0477348",
      "title": "Onde os Fracos Não Têm Vez",
      "sessionTitle": "Uma maleta no deserto",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2007,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — No Country for Old Men; AdoroCinema — Onde os Fracos Não Têm Vez",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0477348/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — No Country for Old Men",
            "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Onde os Fracos Não Têm Vez",
            "url": "https://www.adorocinema.com/filmes/filme-110096/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "O clima de faroeste moderno e a disputa no Oscar com 'Sangue Negro' (Paul Thomas Anderson) confundem, mas o filme é dos irmãos Joel e Ethan Coen, adaptando Cormac McCarthy."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "Fargo"
            },
            {
              "id": "C1-O1",
              "texto": "Onde os Fracos Não Têm Vez"
            },
            {
              "id": "C1-O3",
              "texto": "A Qualquer Custo"
            },
            {
              "id": "C1-O2",
              "texto": "Sangue Negro"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Onde os Fracos Não Têm Vez",
          "endereco": "IMDb; Wikipédia (EN) — No Country for Old Men",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0477348/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — No Country for Old Men",
              "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O1",
              "texto": "Llewelyn Moss"
            },
            {
              "id": "C2-O4",
              "texto": "Toby Howard"
            },
            {
              "id": "C2-O2",
              "texto": "Carson Wells"
            },
            {
              "id": "C2-O3",
              "texto": "Marge Gunderson"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Llewelyn Moss (com Ed Tom Bell, Anton Chigurh)",
          "endereco": "Wikipédia (EN) — No Country for Old Men; IMDb",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — No Country for Old Men",
              "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0477348/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O3",
              "texto": "Quentin Tarantino"
            },
            {
              "id": "C3-O4",
              "texto": "Denis Villeneuve"
            },
            {
              "id": "C3-O1",
              "texto": "Joel e Ethan Coen"
            },
            {
              "id": "C3-O2",
              "texto": "Paul Thomas Anderson"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Joel e Ethan Coen",
          "endereco": "IMDb; Wikipédia (EN) — No Country for Old Men; AdoroCinema — Onde os Fracos Não Têm Vez",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0477348/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — No Country for Old Men",
              "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Onde os Fracos Não Têm Vez",
              "url": "https://www.adorocinema.com/filmes/filme-110096/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2008"
            },
            {
              "id": "C4-O4",
              "texto": "2005"
            },
            {
              "id": "C4-O2",
              "texto": "2006"
            },
            {
              "id": "C4-O1",
              "texto": "2007"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2007",
          "endereco": "IMDb; Wikipédia (EN) — No Country for Old Men",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0477348/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — No Country for Old Men",
              "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou nos EUA em novembro de 2007; no Brasil, chegou aos cinemas em fevereiro de 2008.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — Onde os Fracos Não Têm Vez",
                "url": "https://www.adorocinema.com/filmes/filme-110096/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou nos EUA em novembro de 2007; no Brasil, chegou aos cinemas em fevereiro de 2008."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de cerca de duas horas (122 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0477348/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de cerca de duas horas (122 minutos)."
          },
          {
            "id": "P03",
            "text": "A história se passa no oeste do Texas, em 1980.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história se passa no oeste do Texas, em 1980."
          },
          {
            "id": "P04",
            "text": "Um caçador encontra no deserto o que sobrou de uma negociação de drogas que deu errado.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um caçador encontra no deserto o que sobrou de uma negociação de drogas que deu errado."
          },
          {
            "id": "P05",
            "text": "Ele fica com uma maleta com cerca de 2 milhões de dólares deixada no local.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele fica com uma maleta com cerca de 2 milhões de dólares deixada no local."
          },
          {
            "id": "P06",
            "text": "Um matador frio e implacável é enviado para recuperar o dinheiro.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um matador frio e implacável é enviado para recuperar o dinheiro."
          },
          {
            "id": "P07",
            "text": "O matador usa como arma uma pistola pneumática de abate de gado.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O matador usa como arma uma pistola pneumática de abate de gado."
          },
          {
            "id": "P08",
            "text": "O matador costuma decidir o destino das pessoas no cara ou coroa.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O matador costuma decidir o destino das pessoas no cara ou coroa."
          },
          {
            "id": "P09",
            "text": "Um xerife veterano investiga a onda de violência que vem em seguida.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um xerife veterano investiga a onda de violência que vem em seguida."
          },
          {
            "id": "P10",
            "text": "Os diretores são irmãos e já tinham feito 'Fargo' (1996), outro filme de crime com muito acaso no caminho.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os diretores são irmãos e já tinham feito 'Fargo' (1996), outro filme de crime com muito acaso no caminho."
          },
          {
            "id": "P11",
            "text": "Os próprios diretores escreveram o roteiro, produziram e montaram o filme.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os próprios diretores escreveram o roteiro, produziram e montaram o filme."
          },
          {
            "id": "P12",
            "text": "É baseado num romance de Cormac McCarthy publicado em 2005.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É baseado num romance de Cormac McCarthy publicado em 2005."
          },
          {
            "id": "P13",
            "text": "Foi filmado no Novo México e no Texas, com uma cena gravada em Piedras Negras, no México.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi filmado no Novo México e no Texas, com uma cena gravada em Piedras Negras, no México."
          },
          {
            "id": "P14",
            "text": "A fotografia é de Roger Deakins.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A fotografia é de Roger Deakins."
          },
          {
            "id": "P15",
            "text": "O caçador é vivido por Josh Brolin.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0477348/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O caçador é vivido por Josh Brolin."
          },
          {
            "id": "P16",
            "text": "Tommy Lee Jones interpreta o xerife.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0477348/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Tommy Lee Jones interpreta o xerife."
          },
          {
            "id": "P17",
            "text": "Javier Bardem interpreta o matador.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0477348/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Javier Bardem interpreta o matador."
          },
          {
            "id": "P18",
            "text": "Woody Harrelson e Kelly Macdonald completam o elenco principal.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Woody Harrelson e Kelly Macdonald completam o elenco principal."
          },
          {
            "id": "P19",
            "text": "Teve 8 indicações ao Oscar e ganhou 4, incluindo Melhor Filme e Melhor Direção.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Teve 8 indicações ao Oscar e ganhou 4, incluindo Melhor Filme e Melhor Direção."
          },
          {
            "id": "P20",
            "text": "O intérprete do matador se tornou o primeiro ator espanhol a ganhar um Oscar.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O intérprete do matador se tornou o primeiro ator espanhol a ganhar um Oscar."
          },
          {
            "id": "P21",
            "text": "A montagem é creditada a 'Roderick Jaynes', um pseudônimo usado pelos próprios diretores.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A montagem é creditada a 'Roderick Jaynes', um pseudônimo usado pelos próprios diretores."
          },
          {
            "id": "P22",
            "text": "O título vem do primeiro verso do poema 'Sailing to Byzantium', de William Butler Yeats.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O título vem do primeiro verso do poema 'Sailing to Byzantium', de William Butler Yeats."
          },
          {
            "id": "P23",
            "text": "A trilha de Carter Burwell tem só cerca de 16 minutos de música; o resto é quase silêncio.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A trilha de Carter Burwell tem só cerca de 16 minutos de música; o resto é quase silêncio."
          },
          {
            "id": "P24",
            "text": "A estreia mundial foi em competição no Festival de Cannes, em maio de 2007.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — No Country for Old Men",
                "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A estreia mundial foi em competição no Festival de Cannes, em maio de 2007."
          },
          {
            "id": "P25",
            "text": "No Oscar de 2008, disputou Melhor Filme com 'Sangue Negro', 'Juno', 'Desejo e Reparação' e 'Conduta de Risco'.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "CNN — lista completa de indicados ao 80º Oscar (2008)",
                "url": "https://edition.cnn.com/2008/SHOWBIZ/Movies/01/22/oscar.complete.list/index.html",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No Oscar de 2008, disputou Melhor Filme com 'Sangue Negro', 'Juno', 'Desejo e Reparação' e 'Conduta de Risco'."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Onde os Fracos Não Têm Vez (2007), dirigido por Joel e Ethan Coen, acompanha Llewelyn Moss, caçador que fica com uma maleta de dinheiro do tráfico e passa a ser perseguido no oeste do Texas.",
        "hinge": "O clima de faroeste moderno e a disputa no Oscar com 'Sangue Negro' (Paul Thomas Anderson) confundem, mas o filme é dos irmãos Joel e Ethan Coen, adaptando Cormac McCarthy.",
        "references": [
          {
            "source": "Wikipédia (EN) — No Country for Old Men",
            "url": "https://en.wikipedia.org/wiki/No_Country_for_Old_Men",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "CNN — lista completa de indicados ao 80º Oscar (2008)",
            "url": "https://edition.cnn.com/2008/SHOWBIZ/Movies/01/22/oscar.complete.list/index.html",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0477348/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-chernobyl": {
      "id": "cs1-serie-chernobyl",
      "kind": "canonical-case",
      "imdbId": "tt7366338",
      "title": "Chernobyl",
      "sessionTitle": "Uma noite que não acabou",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2019,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Chernobyl (miniseries); Omelete — o que faz de Chernobyl tão cativante",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt7366338/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Chernobyl (miniseries)",
            "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Omelete — o que faz de Chernobyl tão cativante",
            "url": "https://www.omelete.com.br/series-tv/chernobyl-o-que-faz-da-nova-serie-da-hbo-tao-cativante",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Johan Renck dirigiu todos os cinco episódios, mas a criação e o roteiro são de Craig Mazin."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Chernobyl"
            },
            {
              "id": "C1-O4",
              "texto": "The Crown"
            },
            {
              "id": "C1-O2",
              "texto": "Olhos que Condenam"
            },
            {
              "id": "C1-O3",
              "texto": "O Gambito da Rainha"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Chernobyl",
          "endereco": "IMDb; Wikipédia (EN) — Chernobyl (miniseries)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7366338/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Chernobyl (miniseries)",
              "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "Beth Harmon"
            },
            {
              "id": "C2-O4",
              "texto": "J. Robert Oppenheimer"
            },
            {
              "id": "C2-O1",
              "texto": "Valery Legasov"
            },
            {
              "id": "C2-O2",
              "texto": "Mikhail Gorbachev"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Valery Legasov (com Boris Shcherbina, Ulana Khomyuk)",
          "endereco": "Wikipédia (EN) — Chernobyl (miniseries); Omelete — o que faz de Chernobyl tão cativante",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Chernobyl (miniseries)",
              "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Omelete — o que faz de Chernobyl tão cativante",
              "url": "https://www.omelete.com.br/series-tv/chernobyl-o-que-faz-da-nova-serie-da-hbo-tao-cativante",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Johan Renck"
            },
            {
              "id": "C3-O3",
              "texto": "Ava DuVernay"
            },
            {
              "id": "C3-O1",
              "texto": "Craig Mazin"
            },
            {
              "id": "C3-O4",
              "texto": "Peter Morgan"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Craig Mazin",
          "endereco": "Wikipédia (EN) — Chernobyl (miniseries); Wikipédia (EN) — Craig Mazin",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Chernobyl (miniseries)",
              "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Craig Mazin",
              "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2020"
            },
            {
              "id": "C4-O1",
              "texto": "2019"
            },
            {
              "id": "C4-O4",
              "texto": "2021"
            },
            {
              "id": "C4-O2",
              "texto": "2018"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2019",
          "endereco": "IMDb; Wikipédia (EN) — Chernobyl (miniseries)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7366338/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Chernobyl (miniseries)",
              "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou nos EUA em 6 de maio de 2019; no Brasil, chegou à HBO quatro dias depois.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Jovem Pan — Chernobyl estreia nesta semana",
                "url": "https://jovempan.com.br/entretenimento/tv-e-cinema/serie-chernobyl-estreia-nesta-semana-e-revisita-tragedia-nuclear-dos-anos-80/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou nos EUA em 6 de maio de 2019; no Brasil, chegou à HBO quatro dias depois."
          },
          {
            "id": "P02",
            "text": "É uma minissérie fechada, com apenas cinco episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Jovem Pan — Chernobyl estreia nesta semana",
                "url": "https://jovempan.com.br/entretenimento/tv-e-cinema/serie-chernobyl-estreia-nesta-semana-e-revisita-tragedia-nuclear-dos-anos-80/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma minissérie fechada, com apenas cinco episódios."
          },
          {
            "id": "P03",
            "text": "Recria um desastre real ocorrido numa usina nuclear da União Soviética.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Recria um desastre real ocorrido numa usina nuclear da União Soviética."
          },
          {
            "id": "P04",
            "text": "A história começa em abril de 1986, na Ucrânia, então parte da União Soviética.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história começa em abril de 1986, na Ucrânia, então parte da União Soviética."
          },
          {
            "id": "P05",
            "text": "De madrugada, um reator explode; um engenheiro-chefe adjunto ignora os avisos de que o núcleo está exposto.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "De madrugada, um reator explode; um engenheiro-chefe adjunto ignora os avisos de que o núcleo está exposto."
          },
          {
            "id": "P06",
            "text": "Bombeiros da cidade vizinha correm para combater o incêndio.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Bombeiros da cidade vizinha correm para combater o incêndio."
          },
          {
            "id": "P07",
            "text": "Moradores se reúnem numa ponte para assistir ao fogo de longe.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Moradores se reúnem numa ponte para assistir ao fogo de longe."
          },
          {
            "id": "P08",
            "text": "As autoridades locais isolam a cidade e cortam as linhas telefônicas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As autoridades locais isolam a cidade e cortam as linhas telefônicas."
          },
          {
            "id": "P09",
            "text": "O protagonista, vice-diretor de um instituto de pesquisa nuclear, é chamado ao Kremlin para aconselhar Mikhail Gorbachev.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista, vice-diretor de um instituto de pesquisa nuclear, é chamado ao Kremlin para aconselhar Mikhail Gorbachev."
          },
          {
            "id": "P10",
            "text": "Ele trabalha ao lado de um vice-presidente do Conselho de Ministros e de uma física nuclear.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Omelete — o que faz de Chernobyl tão cativante",
                "url": "https://www.omelete.com.br/series-tv/chernobyl-o-que-faz-da-nova-serie-da-hbo-tao-cativante",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele trabalha ao lado de um vice-presidente do Conselho de Ministros e de uma física nuclear."
          },
          {
            "id": "P11",
            "text": "A série acompanha também bombeiros, voluntários e mineiros que cavaram um túnel sob o reator.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A série acompanha também bombeiros, voluntários e mineiros que cavaram um túnel sob o reator."
          },
          {
            "id": "P12",
            "text": "O criador, que escreveu sozinho os cinco episódios, era conhecido por comédias como 'Todo Mundo em Pânico 3' e as continuações de 'Se Beber, Não Case!'.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Craig Mazin",
                "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Omelete — o que faz de Chernobyl tão cativante",
                "url": "https://www.omelete.com.br/series-tv/chernobyl-o-que-faz-da-nova-serie-da-hbo-tao-cativante",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O criador, que escreveu sozinho os cinco episódios, era conhecido por comédias como 'Todo Mundo em Pânico 3' e as continuações de 'Se Beber, Não Case!'."
          },
          {
            "id": "P13",
            "text": "Um único diretor, que já tinha dirigido episódios de 'Breaking Bad' e 'Vikings', comandou os cinco episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Omelete — o que faz de Chernobyl tão cativante",
                "url": "https://www.omelete.com.br/series-tv/chernobyl-o-que-faz-da-nova-serie-da-hbo-tao-cativante",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um único diretor, que já tinha dirigido episódios de 'Breaking Bad' e 'Vikings', comandou os cinco episódios."
          },
          {
            "id": "P14",
            "text": "A física nuclear vivida por Emily Watson é uma personagem inventada, que representa vários cientistas reais.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A física nuclear vivida por Emily Watson é uma personagem inventada, que representa vários cientistas reais."
          },
          {
            "id": "P15",
            "text": "Uma usina nuclear desativada na Lituânia foi usada como cenário nas filmagens.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma usina nuclear desativada na Lituânia foi usada como cenário nas filmagens."
          },
          {
            "id": "P16",
            "text": "Foi a primeira coprodução da HBO com o canal britânico Sky.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi a primeira coprodução da HBO com o canal britânico Sky."
          },
          {
            "id": "P17",
            "text": "O protagonista é vivido por Jared Harris, o rei George VI de 'The Crown'.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Jared Harris",
                "url": "https://en.wikipedia.org/wiki/Jared_Harris",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Jared Harris, o rei George VI de 'The Crown'."
          },
          {
            "id": "P18",
            "text": "Stellan Skarsgård vive o dirigente do governo soviético enviado para acompanhar a crise.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Stellan Skarsgård vive o dirigente do governo soviético enviado para acompanhar a crise."
          },
          {
            "id": "P19",
            "text": "Jessie Buckley vive Lyudmilla Ignatenko, mulher de um dos bombeiros.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Jovem Pan — Chernobyl estreia nesta semana",
                "url": "https://jovempan.com.br/entretenimento/tv-e-cinema/serie-chernobyl-estreia-nesta-semana-e-revisita-tragedia-nuclear-dos-anos-80/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Jessie Buckley vive Lyudmilla Ignatenko, mulher de um dos bombeiros."
          },
          {
            "id": "P20",
            "text": "Ganhou o Emmy de melhor minissérie, além dos prêmios de direção e roteiro.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Craig Mazin",
                "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou o Emmy de melhor minissérie, além dos prêmios de direção e roteiro."
          },
          {
            "id": "P21",
            "text": "Ganhou o Globo de Ouro de melhor minissérie, e Stellan Skarsgård levou o de ator coadjuvante.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou o Globo de Ouro de melhor minissérie, e Stellan Skarsgård levou o de ator coadjuvante."
          },
          {
            "id": "P22",
            "text": "Em maio de 2019, antes do último episódio, chegou a ter nota maior no IMDb que 'Breaking Bad' e 'Game of Thrones'.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Rolling Stone Brasil — Chernobyl supera Game of Thrones e Breaking Bad",
                "url": "https://rollingstone.com.br/noticia/com-uma-temporada-chernobyl-supera-game-thrones-e-breaking-bad/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em maio de 2019, antes do último episódio, chegou a ter nota maior no IMDb que 'Breaking Bad' e 'Game of Thrones'."
          },
          {
            "id": "P23",
            "text": "Os atores não imitam sotaque russo: cada um fala com o próprio sotaque.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os atores não imitam sotaque russo: cada um fala com o próprio sotaque."
          },
          {
            "id": "P24",
            "text": "A trilha, da compositora de 'Coringa', foi feita com sons gravados dentro de uma usina nuclear de verdade.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Joker (2019 film)",
                "url": "https://en.wikipedia.org/wiki/Joker_(2019_film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A trilha, da compositora de 'Coringa', foi feita com sons gravados dentro de uma usina nuclear de verdade."
          },
          {
            "id": "P25",
            "text": "Cada episódio ganhou um podcast oficial em que o criador explica o que é real e o que foi adaptado.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chernobyl (miniseries)",
                "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Cada episódio ganhou um podcast oficial em que o criador explica o que é real e o que foi adaptado."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Chernobyl (HBO/Sky, 2019), minissérie criada e escrita por Craig Mazin, recria o desastre nuclear de 1986 pelos olhos do cientista Valery Legasov e de quem enfrentou a crise.",
        "hinge": "Johan Renck dirigiu todos os cinco episódios, mas a criação e o roteiro são de Craig Mazin.",
        "references": [
          {
            "source": "Wikipédia (EN) — Chernobyl (miniseries)",
            "url": "https://en.wikipedia.org/wiki/Chernobyl_(miniseries)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Craig Mazin",
            "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-brilho-eterno-de-uma-mente-sem-lembrancas": {
      "id": "cs1-filme-brilho-eterno-de-uma-mente-sem-lembrancas",
      "kind": "canonical-case",
      "imdbId": "tt0338013",
      "title": "Brilho Eterno de uma Mente sem Lembranças",
      "sessionTitle": "Um amor para apagar",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2004,
      "rating": "14 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Eternal Sunshine of the Spotless Mind; AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças; Filmow — Brilho Eterno (classificação indicativa)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0338013/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
            "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças",
            "url": "https://www.adorocinema.com/filmes/filme-40191/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Filmow — Brilho Eterno (classificação indicativa)",
            "url": "https://filmow.com/o-cordeiro-t4562/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "O roteiro premiado é de Charlie Kaufman (de 'Quero Ser John Malkovich'), e muita gente atribui o filme a ele ou a Spike Jonze; quem dirigiu foi Michel Gondry."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "500 Dias com Ela"
            },
            {
              "id": "C1-O2",
              "texto": "Quero Ser John Malkovich"
            },
            {
              "id": "C1-O3",
              "texto": "Ela"
            },
            {
              "id": "C1-O1",
              "texto": "Brilho Eterno de uma Mente sem Lembranças"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Brilho Eterno de uma Mente sem Lembranças",
          "endereco": "IMDb; Wikipédia (EN) — Eternal Sunshine of the Spotless Mind; AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0338013/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
              "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças",
              "url": "https://www.adorocinema.com/filmes/filme-40191/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Tom Hansen"
            },
            {
              "id": "C2-O3",
              "texto": "Patrick Wertz"
            },
            {
              "id": "C2-O1",
              "texto": "Joel Barish"
            },
            {
              "id": "C2-O2",
              "texto": "Stan Fink"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Joel Barish (com Clementine Kruczynski)",
          "endereco": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
              "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Charlie Kaufman"
            },
            {
              "id": "C3-O4",
              "texto": "Sofia Coppola"
            },
            {
              "id": "C3-O1",
              "texto": "Michel Gondry"
            },
            {
              "id": "C3-O3",
              "texto": "Spike Jonze"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Michel Gondry",
          "endereco": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind; AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
              "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças",
              "url": "https://www.adorocinema.com/filmes/filme-40191/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O4",
              "texto": "2002"
            },
            {
              "id": "C4-O2",
              "texto": "2003"
            },
            {
              "id": "C4-O1",
              "texto": "2004"
            },
            {
              "id": "C4-O3",
              "texto": "2005"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2004",
          "endereco": "IMDb; Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt0338013/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
              "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou nos cinemas dos EUA em março de 2004.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou nos cinemas dos EUA em março de 2004."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de 108 minutos, pouco menos de duas horas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt0338013/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de 108 minutos, pouco menos de duas horas."
          },
          {
            "id": "P03",
            "text": "É uma história de amor com toque de ficção científica: uma empresa oferece um serviço de apagar memórias.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma história de amor com toque de ficção científica: uma empresa oferece um serviço de apagar memórias."
          },
          {
            "id": "P04",
            "text": "Um homem descobre que a ex-namorada fez um procedimento para apagar da memória tudo o que viveu com ele.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um homem descobre que a ex-namorada fez um procedimento para apagar da memória tudo o que viveu com ele."
          },
          {
            "id": "P05",
            "text": "Magoado, ele decide passar pelo mesmo procedimento para esquecê-la.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Magoado, ele decide passar pelo mesmo procedimento para esquecê-la."
          },
          {
            "id": "P06",
            "text": "O serviço é feito por uma pequena empresa de Long Island chamada Lacuna.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O serviço é feito por uma pequena empresa de Long Island chamada Lacuna."
          },
          {
            "id": "P07",
            "text": "Logo no começo, ele acorda no Dia dos Namorados americano e, num impulso, pega o trem para Montauk.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Logo no começo, ele acorda no Dia dos Namorados americano e, num impulso, pega o trem para Montauk."
          },
          {
            "id": "P08",
            "text": "A ex-namorada muda a cor do cabelo conforme o humor.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A ex-namorada muda a cor do cabelo conforme o humor."
          },
          {
            "id": "P09",
            "text": "Boa parte da história se passa dentro das recordações do protagonista, revisitadas durante o procedimento.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Boa parte da história se passa dentro das recordações do protagonista, revisitadas durante o procedimento."
          },
          {
            "id": "P10",
            "text": "O diretor é francês e ficou famoso por videoclipes de Björk, Daft Punk e Radiohead.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Open Culture — Michel Gondry's finest music videos",
                "url": "https://openculture.com/2015/02/michel-gondry-finest-music-videos.html",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor é francês e ficou famoso por videoclipes de Björk, Daft Punk e Radiohead."
          },
          {
            "id": "P11",
            "text": "O diretor estreou em longas com 'A Natureza Quase Humana' (2001), também escrito por Charlie Kaufman.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — A Natureza Quase Humana",
                "url": "https://www.adorocinema.com/filmes/filme-28830/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor estreou em longas com 'A Natureza Quase Humana' (2001), também escrito por Charlie Kaufman."
          },
          {
            "id": "P12",
            "text": "O roteirista já tinha sido indicado ao Oscar por 'Quero Ser John Malkovich' e 'Adaptação'.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — notícia sobre o filme (Oscar e roteirista)",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-1000110322/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O roteirista já tinha sido indicado ao Oscar por 'Quero Ser John Malkovich' e 'Adaptação'."
          },
          {
            "id": "P13",
            "text": "A ideia nasceu do artista Pierre Bismuth, depois que uma amiga disse que apagaria o namorado da memória.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A ideia nasceu do artista Pierre Bismuth, depois que uma amiga disse que apagaria o namorado da memória."
          },
          {
            "id": "P14",
            "text": "As filmagens começaram em janeiro de 2003 e duraram cerca de três meses, principalmente em Nova York.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens começaram em janeiro de 2003 e duraram cerca de três meses, principalmente em Nova York."
          },
          {
            "id": "P15",
            "text": "O protagonista é vivido por Jim Carrey.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — notícia sobre o filme (Oscar e roteirista)",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-1000110322/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Jim Carrey."
          },
          {
            "id": "P16",
            "text": "Kate Winslet interpreta a ex-namorada e foi indicada ao Oscar de Melhor Atriz pelo papel.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Kate Winslet interpreta a ex-namorada e foi indicada ao Oscar de Melhor Atriz pelo papel."
          },
          {
            "id": "P17",
            "text": "Kirsten Dunst, Mark Ruffalo, Elijah Wood e Tom Wilkinson completam o elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — notícia sobre o filme (Oscar e roteirista)",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-1000110322/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Kirsten Dunst, Mark Ruffalo, Elijah Wood e Tom Wilkinson completam o elenco."
          },
          {
            "id": "P18",
            "text": "Ganhou o Oscar de Melhor Roteiro Original.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — notícia sobre o filme (Oscar e roteirista)",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-1000110322/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou o Oscar de Melhor Roteiro Original."
          },
          {
            "id": "P19",
            "text": "No BAFTA, venceu Roteiro Original e Montagem.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No BAFTA, venceu Roteiro Original e Montagem."
          },
          {
            "id": "P20",
            "text": "A cantora Björk chegou a ser cogitada para o papel feminino principal, mas recusou depois de ler o roteiro.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A cantora Björk chegou a ser cogitada para o papel feminino principal, mas recusou depois de ler o roteiro."
          },
          {
            "id": "P21",
            "text": "O título vem de versos do poema 'Eloisa to Abelard', de Alexander Pope (1717).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O título vem de versos do poema 'Eloisa to Abelard', de Alexander Pope (1717)."
          },
          {
            "id": "P22",
            "text": "Em 2016, uma votação de críticos da BBC o pôs em 6º lugar entre os maiores filmes do século 21.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em 2016, uma votação de críticos da BBC o pôs em 6º lugar entre os maiores filmes do século 21."
          },
          {
            "id": "P23",
            "text": "Quase não há computação gráfica: os efeitos foram feitos na própria câmera, com truques de perspectiva.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Quase não há computação gráfica: os efeitos foram feitos na própria câmera, com truques de perspectiva."
          },
          {
            "id": "P24",
            "text": "Ganhou seu Oscar na 77ª cerimônia da Academia, realizada no início de 2005.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
                "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — notícia sobre o filme (Oscar e roteirista)",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-1000110322/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou seu Oscar na 77ª cerimônia da Academia, realizada no início de 2005."
          },
          {
            "id": "P25",
            "text": "No Brasil, chegou aos cinemas em julho de 2004.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Brilho Eterno de uma Mente Sem Lembranças",
                "url": "https://www.adorocinema.com/filmes/filme-40191/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No Brasil, chegou aos cinemas em julho de 2004."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Brilho Eterno de uma Mente sem Lembranças (2004), dirigido por Michel Gondry, acompanha Joel Barish, que decide apagar da memória a ex-namorada Clementine depois de descobrir que ela o apagou.",
        "hinge": "O roteiro premiado é de Charlie Kaufman (de 'Quero Ser John Malkovich'), e muita gente atribui o filme a ele ou a Spike Jonze; quem dirigiu foi Michel Gondry.",
        "references": [
          {
            "source": "Wikipédia (EN) — Eternal Sunshine of the Spotless Mind",
            "url": "https://en.wikipedia.org/wiki/Eternal_Sunshine_of_the_Spotless_Mind",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — notícia sobre o filme (Oscar e roteirista)",
            "url": "https://www.adorocinema.com/noticias/filmes/noticia-1000110322/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt0338013/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-the-last-of-us": {
      "id": "cs1-serie-the-last-of-us",
      "kind": "canonical-case",
      "imdbId": "tt3581920",
      "title": "The Last of Us",
      "sessionTitle": "Uma travessia por ruínas",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2023,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — The Last of Us season 1; Wikipédia (EN) — The Last of Us (franquia)",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt3581920/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Last of Us season 1",
            "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Last of Us (franquia)",
            "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Neil Druckmann vem do videogame, mas a série tem dois criadores: ele e Craig Mazin, o roteirista de Chernobyl."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "Station Eleven"
            },
            {
              "id": "C1-O2",
              "texto": "Fallout"
            },
            {
              "id": "C1-O4",
              "texto": "Sweet Tooth"
            },
            {
              "id": "C1-O1",
              "texto": "The Last of Us"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "The Last of Us",
          "endereco": "IMDb; Wikipédia (EN) — The Last of Us season 1",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt3581920/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — The Last of Us season 1",
              "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Marlene"
            },
            {
              "id": "C2-O3",
              "texto": "Tess"
            },
            {
              "id": "C2-O2",
              "texto": "Tommy Miller"
            },
            {
              "id": "C2-O1",
              "texto": "Joel Miller"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Joel Miller (com Ellie)",
          "endereco": "Wikipédia (EN) — The Last of Us season 1; Ovicio — tudo sobre a estreia de The Last of Us",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Last of Us season 1",
              "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Ovicio — tudo sobre a estreia de The Last of Us",
              "url": "https://ovicio.com.br/tudo-sobre-a-estreia-de-the-last-of-us/amp/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O4",
              "texto": "Patrick Somerville"
            },
            {
              "id": "C3-O1",
              "texto": "Craig Mazin e Neil Druckmann"
            },
            {
              "id": "C3-O2",
              "texto": "Graham Wagner e Geneva Robertson-Dworet"
            },
            {
              "id": "C3-O3",
              "texto": "Jonathan Nolan e Lisa Joy"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Craig Mazin e Neil Druckmann",
          "endereco": "Wikipédia (EN) — The Last of Us season 1; Wikipédia (EN) — Craig Mazin",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Last of Us season 1",
              "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Craig Mazin",
              "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O4",
              "texto": "2021"
            },
            {
              "id": "C4-O2",
              "texto": "2022"
            },
            {
              "id": "C4-O1",
              "texto": "2023"
            },
            {
              "id": "C4-O3",
              "texto": "2024"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2023",
          "endereco": "IMDb; Wikipédia (EN) — The Last of Us season 1",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt3581920/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — The Last of Us season 1",
              "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou num domingo de janeiro de 2023, na TV paga e no streaming.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Last of Us (franquia)",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou num domingo de janeiro de 2023, na TV paga e no streaming."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem nove episódios (eram dez, mas os dois primeiros viraram um só).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma série; a primeira temporada tem nove episódios (eram dez, mas os dois primeiros viraram um só)."
          },
          {
            "id": "P03",
            "text": "Uma infecção causada por um fungo mutante provoca uma pandemia mundial.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma infecção causada por um fungo mutante provoca uma pandemia mundial."
          },
          {
            "id": "P04",
            "text": "O surto começa em 2003; a história principal se passa vinte anos depois.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O surto começa em 2003; a história principal se passa vinte anos depois."
          },
          {
            "id": "P05",
            "text": "O primeiro episódio abre com um programa de TV de 1968 em que um cientista alerta sobre o perigo dos fungos.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O primeiro episódio abre com um programa de TV de 1968 em que um cientista alerta sobre o perigo dos fungos."
          },
          {
            "id": "P06",
            "text": "No início do surto, o protagonista foge de Austin, no Texas, junto com o irmão.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No início do surto, o protagonista foge de Austin, no Texas, junto com o irmão."
          },
          {
            "id": "P07",
            "text": "O protagonista vira contrabandista numa zona de quarentena em Boston.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista vira contrabandista numa zona de quarentena em Boston."
          },
          {
            "id": "P08",
            "text": "Uma agência do governo, a FEDRA, controla essa zona de quarentena.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma agência do governo, a FEDRA, controla essa zona de quarentena."
          },
          {
            "id": "P09",
            "text": "A líder de um grupo rebelde contrata o protagonista e sua parceira para escoltar uma adolescente.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A líder de um grupo rebelde contrata o protagonista e sua parceira para escoltar uma adolescente."
          },
          {
            "id": "P10",
            "text": "A adolescente que precisa ser escoltada diz ser imune à infecção.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A adolescente que precisa ser escoltada diz ser imune à infecção."
          },
          {
            "id": "P11",
            "text": "Um dos criadores foi diretor criativo do jogo original, lançado em 2013 para PlayStation 3.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us (franquia)",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um dos criadores foi diretor criativo do jogo original, lançado em 2013 para PlayStation 3."
          },
          {
            "id": "P12",
            "text": "O outro criador havia escrito, antes, a premiada minissérie sobre o desastre nuclear soviético de 1986.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Craig Mazin",
                "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O outro criador havia escrito, antes, a premiada minissérie sobre o desastre nuclear soviético de 1986."
          },
          {
            "id": "P13",
            "text": "Cada criador dirigiu um dos dois primeiros episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Cada criador dirigiu um dos dois primeiros episódios."
          },
          {
            "id": "P14",
            "text": "Foi gravada em Alberta, no Canadá, entre julho de 2021 e junho de 2022.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi gravada em Alberta, no Canadá, entre julho de 2021 e junho de 2022."
          },
          {
            "id": "P15",
            "text": "Pode ter sido a maior produção de TV da história do Canadá, com orçamento acima de 100 milhões de dólares canadenses.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Pode ter sido a maior produção de TV da história do Canadá, com orçamento acima de 100 milhões de dólares canadenses."
          },
          {
            "id": "P16",
            "text": "O protagonista é vivido por Pedro Pascal, astro de 'The Mandalorian'.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Ovicio — tudo sobre a estreia de The Last of Us",
                "url": "https://ovicio.com.br/tudo-sobre-a-estreia-de-the-last-of-us/amp/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "KRDO/AP — Bella Ramsey escalada em The Last of Us",
                "url": "https://krdo.com/entertainment/2021/02/11/game-of-thrones-actress-bella-ramsey-cast-in-the-last-of-us-series/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Pedro Pascal, astro de 'The Mandalorian'."
          },
          {
            "id": "P17",
            "text": "A adolescente é vivida por Bella Ramsey, a Lyanna Mormont de 'Game of Thrones'.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "KRDO/AP — Bella Ramsey escalada em The Last of Us",
                "url": "https://krdo.com/entertainment/2021/02/11/game-of-thrones-actress-bella-ramsey-cast-in-the-last-of-us-series/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Ovicio — tudo sobre a estreia de The Last of Us",
                "url": "https://ovicio.com.br/tudo-sobre-a-estreia-de-the-last-of-us/amp/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A adolescente é vivida por Bella Ramsey, a Lyanna Mormont de 'Game of Thrones'."
          },
          {
            "id": "P18",
            "text": "Os atores que deram voz à dupla principal no jogo também aparecem na série, em outros papéis.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us (franquia)",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Ovicio — tudo sobre a estreia de The Last of Us",
                "url": "https://ovicio.com.br/tudo-sobre-a-estreia-de-the-last-of-us/amp/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os atores que deram voz à dupla principal no jogo também aparecem na série, em outros papéis."
          },
          {
            "id": "P19",
            "text": "Nick Offerman faz um sobrevivente desconfiado e muito precavido no terceiro episódio.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Nick Offerman faz um sobrevivente desconfiado e muito precavido no terceiro episódio."
          },
          {
            "id": "P20",
            "text": "A primeira temporada recebeu 24 indicações ao Emmy.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada recebeu 24 indicações ao Emmy."
          },
          {
            "id": "P21",
            "text": "Ganhou 8 Emmys técnicos e de atuação convidada, incluindo um para Nick Offerman.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "VGC — 8 Emmys de artes criativas para The Last of Us",
                "url": "https://www.videogameschronicle.com/news/nick-offermans-bill-headlines-8-creative-arts-emmy-wins-for-the-last-of-us",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou 8 Emmys técnicos e de atuação convidada, incluindo um para Nick Offerman."
          },
          {
            "id": "P22",
            "text": "O teaser de setembro de 2022 foi o vídeo promocional mais visto da história do canal: 57 milhões de visualizações em 72 horas.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O teaser de setembro de 2022 foi o vídeo promocional mais visto da história do canal: 57 milhões de visualizações em 72 horas."
          },
          {
            "id": "P23",
            "text": "É adaptada de um videogame de ação e aventura que vendeu 3,4 milhões de cópias em três semanas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us (franquia)",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É adaptada de um videogame de ação e aventura que vendeu 3,4 milhões de cópias em três semanas."
          },
          {
            "id": "P24",
            "text": "A trilha é de Gustavo Santaolalla, o mesmo compositor dos jogos.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us (franquia)",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A trilha é de Gustavo Santaolalla, o mesmo compositor dos jogos."
          },
          {
            "id": "P25",
            "text": "Virou a temporada de estreia mais vista da história do canal, com média de quase 32 milhões de espectadores por episódio.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Last of Us season 1",
                "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Virou a temporada de estreia mais vista da história do canal, com média de quase 32 milhões de espectadores por episódio."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "The Last of Us (HBO, 2023), criada por Craig Mazin e Neil Druckmann a partir do videogame de 2013, acompanha o contrabandista Joel Miller na escolta da adolescente Ellie por um mundo devastado por um fungo.",
        "hinge": "Neil Druckmann vem do videogame, mas a série tem dois criadores: ele e Craig Mazin, o roteirista de Chernobyl.",
        "references": [
          {
            "source": "Wikipédia (EN) — The Last of Us season 1",
            "url": "https://en.wikipedia.org/wiki/The_Last_of_Us_season_1",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Craig Mazin",
            "url": "https://en.wikipedia.org/wiki/Craig_Mazin",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-garota-exemplar": {
      "id": "cs1-filme-garota-exemplar",
      "kind": "canonical-case",
      "imdbId": "tt2267998",
      "title": "Garota Exemplar",
      "sessionTitle": "Um desaparecimento que vira manchete",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2014,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Gone Girl (film); AdoroCinema — Garota Exemplar",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt2267998/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Gone Girl (film)",
            "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Garota Exemplar",
            "url": "https://www.adorocinema.com/filmes/filme-217882/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Gillian Flynn escreveu o romance e o roteiro, e Reese Witherspoon foi produtora, mas quem dirigiu foi David Fincher."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Garota Exemplar"
            },
            {
              "id": "C1-O3",
              "texto": "Os Suspeitos"
            },
            {
              "id": "C1-O4",
              "texto": "A Garota no Trem"
            },
            {
              "id": "C1-O2",
              "texto": "O Abutre"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Garota Exemplar",
          "endereco": "AdoroCinema — Garota Exemplar; Wikipédia (EN) — Gone Girl (film)",
          "answerReferences": [
            {
              "source": "AdoroCinema — Garota Exemplar",
              "url": "https://www.adorocinema.com/filmes/filme-217882/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Gone Girl (film)",
              "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O1",
              "texto": "Nick Dunne"
            },
            {
              "id": "C2-O3",
              "texto": "Rhonda Boney"
            },
            {
              "id": "C2-O4",
              "texto": "Margo Dunne"
            },
            {
              "id": "C2-O2",
              "texto": "Desi Collings"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Nick Dunne (com Amy Elliott Dunne)",
          "endereco": "Wikipédia (EN) — Gone Girl (film)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Gone Girl (film)",
              "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "David Fincher"
            },
            {
              "id": "C3-O3",
              "texto": "Christopher Nolan"
            },
            {
              "id": "C3-O2",
              "texto": "Denis Villeneuve"
            },
            {
              "id": "C3-O4",
              "texto": "Steven Soderbergh"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "David Fincher",
          "endereco": "Wikipédia (EN) — Gone Girl (film); AdoroCinema — Garota Exemplar",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Gone Girl (film)",
              "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Garota Exemplar",
              "url": "https://www.adorocinema.com/filmes/filme-217882/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2015"
            },
            {
              "id": "C4-O4",
              "texto": "2016"
            },
            {
              "id": "C4-O2",
              "texto": "2013"
            },
            {
              "id": "C4-O1",
              "texto": "2014"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2014",
          "endereco": "Wikipédia (EN) — Gone Girl (film); AdoroCinema — Garota Exemplar",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Gone Girl (film)",
              "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Garota Exemplar",
              "url": "https://www.adorocinema.com/filmes/filme-217882/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em 2 de outubro de 2014.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Garota Exemplar",
                "url": "https://www.adorocinema.com/filmes/filme-217882/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em 2 de outubro de 2014."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de quase duas horas e meia (149 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de quase duas horas e meia (149 minutos)."
          },
          {
            "id": "P03",
            "text": "É um suspense americano ambientado numa pequena cidade do Missouri.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um suspense americano ambientado numa pequena cidade do Missouri."
          },
          {
            "id": "P04",
            "text": "Um casal trocou Nova York pela cidade natal do marido, no Missouri.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um casal trocou Nova York pela cidade natal do marido, no Missouri."
          },
          {
            "id": "P05",
            "text": "No dia do quinto aniversário de casamento, o marido chega em casa e descobre que a esposa sumiu.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No dia do quinto aniversário de casamento, o marido chega em casa e descobre que a esposa sumiu."
          },
          {
            "id": "P06",
            "text": "A esposa desaparecida inspirou uma série de livros infantis escritos pelos pais dela.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A esposa desaparecida inspirou uma série de livros infantis escritos pelos pais dela."
          },
          {
            "id": "P07",
            "text": "A imprensa transforma o sumiço num circo, e o jeito apático do marido desperta suspeitas.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A imprensa transforma o sumiço num circo, e o jeito apático do marido desperta suspeitas."
          },
          {
            "id": "P08",
            "text": "Uma detetive da polícia local comanda a investigação do desaparecimento.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma detetive da polícia local comanda a investigação do desaparecimento."
          },
          {
            "id": "P09",
            "text": "A irmã gêmea do marido é sua principal aliada durante a investigação.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A irmã gêmea do marido é sua principal aliada durante a investigação."
          },
          {
            "id": "P10",
            "text": "É a adaptação de um romance de 2012, e a própria autora do livro, Gillian Flynn, escreveu o roteiro.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É a adaptação de um romance de 2012, e a própria autora do livro, Gillian Flynn, escreveu o roteiro."
          },
          {
            "id": "P11",
            "text": "O diretor já tinha feito 'Se7en: Os Sete Crimes Capitais' (1995) e 'Clube da Luta' (1999).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Legião dos Heróis — filmes de David Fincher",
                "url": "https://www.legiaodosherois.com.br/lista/david-fincher-todos-filmes-pior-melhor.html",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor já tinha feito 'Se7en: Os Sete Crimes Capitais' (1995) e 'Clube da Luta' (1999)."
          },
          {
            "id": "P12",
            "text": "'Zodíaco' (2007) e 'A Rede Social' (2010) também são do mesmo diretor.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Legião dos Heróis — filmes de David Fincher",
                "url": "https://www.legiaodosherois.com.br/lista/david-fincher-todos-filmes-pior-melhor.html",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "'Zodíaco' (2007) e 'A Rede Social' (2010) também são do mesmo diretor."
          },
          {
            "id": "P13",
            "text": "As filmagens começaram em setembro de 2013, em Cape Girardeau, no Missouri.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens começaram em setembro de 2013, em Cape Girardeau, no Missouri."
          },
          {
            "id": "P14",
            "text": "Reese Witherspoon, uma das produtoras, chegou a ser cotada para viver a esposa.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Reese Witherspoon, uma das produtoras, chegou a ser cotada para viver a esposa."
          },
          {
            "id": "P15",
            "text": "O filme custou cerca de US$ 61 milhões.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O filme custou cerca de US$ 61 milhões."
          },
          {
            "id": "P16",
            "text": "Ben Affleck interpreta o marido.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt2267998/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ben Affleck interpreta o marido."
          },
          {
            "id": "P17",
            "text": "Rosamund Pike interpreta a esposa desaparecida.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Rosamund Pike interpreta a esposa desaparecida."
          },
          {
            "id": "P18",
            "text": "Carrie Coon faz a irmã gêmea do marido.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Carrie Coon faz a irmã gêmea do marido."
          },
          {
            "id": "P19",
            "text": "Neil Patrick Harris e Tyler Perry estão no elenco de apoio.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Neil Patrick Harris e Tyler Perry estão no elenco de apoio."
          },
          {
            "id": "P20",
            "text": "A atriz que vive a esposa foi indicada ao Oscar de Melhor Atriz pelo papel.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A atriz que vive a esposa foi indicada ao Oscar de Melhor Atriz pelo papel."
          },
          {
            "id": "P21",
            "text": "Recebeu quatro indicações ao Globo de Ouro, entre elas Melhor Direção e Melhor Roteiro.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Recebeu quatro indicações ao Globo de Ouro, entre elas Melhor Direção e Melhor Roteiro."
          },
          {
            "id": "P22",
            "text": "A trilha é de Trent Reznor e Atticus Ross, na terceira parceria da dupla com o diretor.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A trilha é de Trent Reznor e Atticus Ross, na terceira parceria da dupla com o diretor."
          },
          {
            "id": "P23",
            "text": "Virou a maior bilheteria da carreira do diretor, com cerca de US$ 370 milhões no mundo.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Omelete — maior bilheteria da carreira de David Fincher",
                "url": "https://omelete.com.br/garota-exemplar/cinema/garota-exemplar-e-o-filme-de-maior-bilheteria-da-carreira-de-david-fincher/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Virou a maior bilheteria da carreira do diretor, com cerca de US$ 370 milhões no mundo."
          },
          {
            "id": "P24",
            "text": "Sua estreia nos EUA superou 'O Quarto do Pânico' como a maior abertura da carreira do diretor.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Sua estreia nos EUA superou 'O Quarto do Pânico' como a maior abertura da carreira do diretor."
          },
          {
            "id": "P25",
            "text": "Abriu o Festival de Cinema de Nova York em 26 de setembro de 2014.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Gone Girl (film)",
                "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Abriu o Festival de Cinema de Nova York em 26 de setembro de 2014."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Garota Exemplar (2014), dirigido por David Fincher, acompanha Nick Dunne, que vira o centro das suspeitas quando a esposa, Amy, desaparece no quinto aniversário de casamento.",
        "hinge": "Gillian Flynn escreveu o romance e o roteiro, e Reese Witherspoon foi produtora, mas quem dirigiu foi David Fincher.",
        "references": [
          {
            "source": "Wikipédia (EN) — Gone Girl (film)",
            "url": "https://en.wikipedia.org/wiki/Gone_Girl_(film)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt2267998/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-the-mandalorian": {
      "id": "cs1-serie-the-mandalorian",
      "kind": "canonical-case",
      "imdbId": "tt8111088",
      "title": "The Mandalorian",
      "sessionTitle": "Um caçador sem rosto",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2019,
      "rating": "14 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — The Mandalorian; Wikipédia (EN) — The Mandalorian season 1; AdoroCinema — The Mandalorian na Tela Quente",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt8111088/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Mandalorian",
            "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — The Mandalorian season 1",
            "url": "https://en.wikipedia.org/wiki/The_Mandalorian_season_1",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — The Mandalorian na Tela Quente",
            "url": "https://www.adorocinema.com/noticias/filmes/noticia-155811/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Dave Filoni dirigiu o primeiro episódio e ajudou a desenvolver a série, mas o criador creditado é Jon Favreau."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "The Mandalorian"
            },
            {
              "id": "C1-O2",
              "texto": "O Livro de Boba Fett"
            },
            {
              "id": "C1-O3",
              "texto": "Andor"
            },
            {
              "id": "C1-O4",
              "texto": "Obi-Wan Kenobi"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "The Mandalorian",
          "endereco": "IMDb; Wikipédia (EN) — The Mandalorian",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt8111088/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — The Mandalorian",
              "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Uma ex-soldada rebelde que vira mercenária"
            },
            {
              "id": "C2-O1",
              "texto": "Um caçador de recompensas solitário que segue um código de honra"
            },
            {
              "id": "C2-O3",
              "texto": "Um ex-soldado que se torna espião rebelde"
            },
            {
              "id": "C2-O2",
              "texto": "Um caçador de recompensas que assume o comando do crime de um planeta"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Um caçador de recompensas solitário que segue um código de honra",
          "endereco": "Wikipédia (EN) — The Mandalorian; Wikipédia (EN) — Chapter 1: The Mandalorian",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Mandalorian",
              "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
              "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Jon Favreau"
            },
            {
              "id": "C3-O2",
              "texto": "Dave Filoni"
            },
            {
              "id": "C3-O3",
              "texto": "George Lucas"
            },
            {
              "id": "C3-O4",
              "texto": "Tony Gilroy"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Jon Favreau",
          "endereco": "Wikipédia (EN) — The Mandalorian; Wikipédia (EN) — Jon Favreau",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — The Mandalorian",
              "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Jon Favreau",
              "url": "https://en.wikipedia.org/wiki/Jon_Favreau",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2018"
            },
            {
              "id": "C4-O1",
              "texto": "2019"
            },
            {
              "id": "C4-O3",
              "texto": "2020"
            },
            {
              "id": "C4-O4",
              "texto": "2021"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2019",
          "endereco": "IMDb; Wikipédia (EN) — The Mandalorian",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt8111088/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — The Mandalorian",
              "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou nos EUA em novembro de 2019, no mesmo dia em que nasceu um novo serviço de streaming.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Mandalorian season 1",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou nos EUA em novembro de 2019, no mesmo dia em que nasceu um novo serviço de streaming."
          },
          {
            "id": "P02",
            "text": "É uma série; a primeira temporada tem oito episódios, numerados como \"capítulos\".",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian season 1",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma série; a primeira temporada tem oito episódios, numerados como \"capítulos\"."
          },
          {
            "id": "P03",
            "text": "Foi descrita como um faroeste espacial, com influência de filmes de samurai.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi descrita como um faroeste espacial, com influência de filmes de samurai."
          },
          {
            "id": "P04",
            "text": "A história começa cinco anos depois dos acontecimentos de 'O Retorno de Jedi' (1983).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história começa cinco anos depois dos acontecimentos de 'O Retorno de Jedi' (1983)."
          },
          {
            "id": "P05",
            "text": "O protagonista é um caçador de recompensas solitário que trabalha nos confins da galáxia.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é um caçador de recompensas solitário que trabalha nos confins da galáxia."
          },
          {
            "id": "P06",
            "text": "Ele passa quase o tempo todo escondido sob um capacete e uma armadura.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele passa quase o tempo todo escondido sob um capacete e uma armadura."
          },
          {
            "id": "P07",
            "text": "No primeiro episódio, um cliente misterioso, protegido por ex-soldados do Império, lhe oferece um serviço.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No primeiro episódio, um cliente misterioso, protegido por ex-soldados do Império, lhe oferece um serviço."
          },
          {
            "id": "P08",
            "text": "O alvo deve ser trazido vivo, e a única informação dada é a idade: 50 anos.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O alvo deve ser trazido vivo, e a única informação dada é a idade: 50 anos."
          },
          {
            "id": "P09",
            "text": "Como adiantamento, ele recebe beskar, um metal raro usado para forjar a armadura do seu povo.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Como adiantamento, ele recebe beskar, um metal raro usado para forjar a armadura do seu povo."
          },
          {
            "id": "P10",
            "text": "O alvo acaba sendo um bebê verde e orelhudo, da mesma espécie de Yoda.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O alvo acaba sendo um bebê verde e orelhudo, da mesma espécie de Yoda."
          },
          {
            "id": "P11",
            "text": "Os fãs apelidaram esse bebê de \"Baby Yoda\".",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — The Mandalorian",
                "url": "https://pt.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os fãs apelidaram esse bebê de \"Baby Yoda\"."
          },
          {
            "id": "P12",
            "text": "O criador da série dirigiu os filmes 'Homem de Ferro' (2008) e 'O Rei Leão' (2019).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Jon Favreau",
                "url": "https://en.wikipedia.org/wiki/Jon_Favreau",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O criador da série dirigiu os filmes 'Homem de Ferro' (2008) e 'O Rei Leão' (2019)."
          },
          {
            "id": "P13",
            "text": "O criador não pôde dirigir a primeira temporada porque estava ocupado com 'O Rei Leão'.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian season 1",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O criador não pôde dirigir a primeira temporada porque estava ocupado com 'O Rei Leão'."
          },
          {
            "id": "P14",
            "text": "O primeiro episódio foi dirigido por Dave Filoni, de 'Star Wars: The Clone Wars', em sua estreia com atores reais.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O primeiro episódio foi dirigido por Dave Filoni, de 'Star Wars: The Clone Wars', em sua estreia com atores reais."
          },
          {
            "id": "P15",
            "text": "As cenas foram gravadas diante de enormes telões de LED que exibem cenários digitais em tempo real.",
            "importance": "contextual",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As cenas foram gravadas diante de enormes telões de LED que exibem cenários digitais em tempo real."
          },
          {
            "id": "P16",
            "text": "As filmagens começaram em outubro de 2018, com o nome de fachada \"Project Huckleberry\".",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian season 1",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens começaram em outubro de 2018, com o nome de fachada \"Project Huckleberry\"."
          },
          {
            "id": "P17",
            "text": "O protagonista é vivido por Pedro Pascal, que a princípio achou que interpretaria Boba Fett.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Pedro Pascal, que a princípio achou que interpretaria Boba Fett."
          },
          {
            "id": "P18",
            "text": "Carl Weathers vive Greef Karga, líder de uma guilda de caçadores de recompensas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Carl Weathers vive Greef Karga, líder de uma guilda de caçadores de recompensas."
          },
          {
            "id": "P19",
            "text": "Werner Herzog interpreta um cliente misterioso, ligado ao antigo Império.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Werner Herzog interpreta um cliente misterioso, ligado ao antigo Império."
          },
          {
            "id": "P20",
            "text": "Taika Waititi dá voz a um droide caçador de recompensas e também dirigiu um episódio.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Taika Waititi dá voz a um droide caçador de recompensas e também dirigiu um episódio."
          },
          {
            "id": "P21",
            "text": "A primeira temporada concorreu ao Emmy de melhor série dramática e venceu sete Emmys técnicos.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian season 1",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian_season_1",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — The Mandalorian",
                "url": "https://pt.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada concorreu ao Emmy de melhor série dramática e venceu sete Emmys técnicos."
          },
          {
            "id": "P22",
            "text": "O episódio de estreia, sozinho, ganhou dois prêmios Emmy.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O episódio de estreia, sozinho, ganhou dois prêmios Emmy."
          },
          {
            "id": "P23",
            "text": "Foi a primeira série com atores reais (live-action) da franquia Star Wars.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — The Mandalorian",
                "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi a primeira série com atores reais (live-action) da franquia Star Wars."
          },
          {
            "id": "P24",
            "text": "No Brasil, chegou um ano depois da estreia, em novembro de 2020, quando o serviço de streaming foi lançado aqui.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Tecnoblog — Disney+ anuncia lançamento no Brasil",
                "url": "https://tecnoblog.net/noticias/disney-anuncia-lancamento-no-brasil-em-17-de-novembro/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — The Mandalorian na Tela Quente",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-155811/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No Brasil, chegou um ano depois da estreia, em novembro de 2020, quando o serviço de streaming foi lançado aqui."
          },
          {
            "id": "P25",
            "text": "A TV Globo exibiu os dois primeiros episódios na 'Tela Quente', na véspera da chegada do streaming ao Brasil.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — The Mandalorian na Tela Quente",
                "url": "https://www.adorocinema.com/noticias/filmes/noticia-155811/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A TV Globo exibiu os dois primeiros episódios na 'Tela Quente', na véspera da chegada do streaming ao Brasil."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "The Mandalorian (Disney+, 2019), criada por Jon Favreau, acompanha um caçador de recompensas solitário de capacete, vivido por Pedro Pascal, cinco anos depois de 'O Retorno de Jedi'.",
        "hinge": "Dave Filoni dirigiu o primeiro episódio e ajudou a desenvolver a série, mas o criador creditado é Jon Favreau.",
        "references": [
          {
            "source": "Wikipédia (EN) — The Mandalorian",
            "url": "https://en.wikipedia.org/wiki/The_Mandalorian",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Chapter 1: The Mandalorian",
            "url": "https://en.wikipedia.org/wiki/Chapter_1:_The_Mandalorian",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-era-uma-vez-em-hollywood": {
      "id": "cs1-filme-era-uma-vez-em-hollywood",
      "kind": "canonical-case",
      "imdbId": "tt7131622",
      "title": "Era Uma Vez em... Hollywood",
      "sessionTitle": "Um astro em decadência em 1969",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2019,
      "rating": "16 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Once Upon a Time in Hollywood; AdoroCinema — Era uma Vez em... Hollywood",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt7131622/reference",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
            "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Era uma Vez em... Hollywood",
            "url": "https://www.adorocinema.com/filmes/filme-257482/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Roman Polanski, diretor famoso, aparece como personagem (vizinho do protagonista), mas quem dirigiu o filme foi Quentin Tarantino."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "La La Land: Cantando Estações"
            },
            {
              "id": "C1-O3",
              "texto": "Ford vs Ferrari"
            },
            {
              "id": "C1-O2",
              "texto": "O Irlandês"
            },
            {
              "id": "C1-O1",
              "texto": "Era Uma Vez em... Hollywood"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Era Uma Vez em... Hollywood",
          "endereco": "AdoroCinema — Era uma Vez em... Hollywood; Wikipédia (EN) — Once Upon a Time in Hollywood",
          "answerReferences": [
            {
              "source": "AdoroCinema — Era uma Vez em... Hollywood",
              "url": "https://www.adorocinema.com/filmes/filme-257482/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
              "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O3",
              "texto": "James Stacy"
            },
            {
              "id": "C2-O2",
              "texto": "Marvin Schwarz"
            },
            {
              "id": "C2-O4",
              "texto": "Jordan Belfort"
            },
            {
              "id": "C2-O1",
              "texto": "Rick Dalton"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Rick Dalton (com Cliff Booth, Sharon Tate)",
          "endereco": "Wikipédia (EN) — Once Upon a Time in Hollywood; IMDb",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
              "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt7131622/reference",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Quentin Tarantino"
            },
            {
              "id": "C3-O3",
              "texto": "Paul Thomas Anderson"
            },
            {
              "id": "C3-O2",
              "texto": "Martin Scorsese"
            },
            {
              "id": "C3-O4",
              "texto": "Damien Chazelle"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Quentin Tarantino",
          "endereco": "Wikipédia (EN) — Once Upon a Time in Hollywood; AdoroCinema — Era uma Vez em... Hollywood",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
              "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Era uma Vez em... Hollywood",
              "url": "https://www.adorocinema.com/filmes/filme-257482/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O1",
              "texto": "2019"
            },
            {
              "id": "C4-O3",
              "texto": "2020"
            },
            {
              "id": "C4-O2",
              "texto": "2018"
            },
            {
              "id": "C4-O4",
              "texto": "2017"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2019",
          "endereco": "Wikipédia (EN) — Once Upon a Time in Hollywood; AdoroCinema — Era uma Vez em... Hollywood",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
              "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Era uma Vez em... Hollywood",
              "url": "https://www.adorocinema.com/filmes/filme-257482/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em 15 de agosto de 2019.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Era uma Vez em... Hollywood",
                "url": "https://www.adorocinema.com/filmes/filme-257482/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em 15 de agosto de 2019."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem comprido, de 2h41 (161 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7131622/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem comprido, de 2h41 (161 minutos)."
          },
          {
            "id": "P03",
            "text": "A história se passa em Los Angeles, a partir de fevereiro de 1969.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história se passa em Los Angeles, a partir de fevereiro de 1969."
          },
          {
            "id": "P04",
            "text": "Um ator que fez fama num faroeste da TV vê a carreira decair e só ganha papéis de vilão convidado.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um ator que fez fama num faroeste da TV vê a carreira decair e só ganha papéis de vilão convidado."
          },
          {
            "id": "P05",
            "text": "O agente sugere que ele vá estrelar faroestes na Itália, ideia que o ator acha humilhante.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O agente sugere que ele vá estrelar faroestes na Itália, ideia que o ator acha humilhante."
          },
          {
            "id": "P06",
            "text": "O melhor amigo do ator é seu dublê e motorista, um veterano de guerra que quase não consegue trabalho.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O melhor amigo do ator é seu dublê e motorista, um veterano de guerra que quase não consegue trabalho."
          },
          {
            "id": "P07",
            "text": "Os vizinhos do ator são a atriz Sharon Tate e o diretor Roman Polanski.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os vizinhos do ator são a atriz Sharon Tate e o diretor Roman Polanski."
          },
          {
            "id": "P08",
            "text": "O ator espera fazer amizade com os vizinhos famosos para reanimar a carreira.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O ator espera fazer amizade com os vizinhos famosos para reanimar a carreira."
          },
          {
            "id": "P09",
            "text": "A trama mistura personagens inventados com figuras reais do cinema da época, como Bruce Lee.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A trama mistura personagens inventados com figuras reais do cinema da época, como Bruce Lee."
          },
          {
            "id": "P10",
            "text": "O diretor também escreveu o roteiro e é um dos produtores do filme.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor também escreveu o roteiro e é um dos produtores do filme."
          },
          {
            "id": "P11",
            "text": "O diretor é o mesmo de 'Pulp Fiction: Tempo de Violência' (1994) e 'Bastardos Inglórios' (2009).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Olhar Digital — ordem cronológica dos filmes de Tarantino",
                "url": "https://olhardigital.com.br/2024/05/02/cinema-e-streaming/qual-a-ordem-cronologica-dos-filmes-de-tarantino/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor é o mesmo de 'Pulp Fiction: Tempo de Violência' (1994) e 'Bastardos Inglórios' (2009)."
          },
          {
            "id": "P12",
            "text": "Foi o primeiro filme do diretor feito sem os produtores Harvey e Bob Weinstein.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi o primeiro filme do diretor feito sem os produtores Harvey e Bob Weinstein."
          },
          {
            "id": "P13",
            "text": "Foi filmado em Los Angeles entre junho e novembro de 2018.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi filmado em Los Angeles entre junho e novembro de 2018."
          },
          {
            "id": "P14",
            "text": "Custou entre US$ 90 e 96 milhões, e o diretor exigiu ter a palavra final na montagem.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Custou entre US$ 90 e 96 milhões, e o diretor exigiu ter a palavra final na montagem."
          },
          {
            "id": "P15",
            "text": "Leonardo DiCaprio vive o astro de TV em decadência.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7131622/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Leonardo DiCaprio vive o astro de TV em decadência."
          },
          {
            "id": "P16",
            "text": "Brad Pitt interpreta o dublê e amigo do astro.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7131622/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Brad Pitt interpreta o dublê e amigo do astro."
          },
          {
            "id": "P17",
            "text": "Margot Robbie interpreta Sharon Tate.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt7131622/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Margot Robbie interpreta Sharon Tate."
          },
          {
            "id": "P18",
            "text": "Al Pacino aparece como o agente do protagonista.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Al Pacino aparece como o agente do protagonista."
          },
          {
            "id": "P19",
            "text": "Teve 10 indicações ao Oscar, incluindo Melhor Filme, e venceu Ator Coadjuvante e Design de Produção.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Teve 10 indicações ao Oscar, incluindo Melhor Filme, e venceu Ator Coadjuvante e Design de Produção."
          },
          {
            "id": "P20",
            "text": "Ganhou o Globo de Ouro de Melhor Filme – Comédia ou Musical.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ganhou o Globo de Ouro de Melhor Filme – Comédia ou Musical."
          },
          {
            "id": "P21",
            "text": "Foi o último papel de Luke Perry no cinema; o ator morreu em março de 2019 e o filme é dedicado a ele.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi o último papel de Luke Perry no cinema; o ator morreu em março de 2019 e o filme é dedicado a ele."
          },
          {
            "id": "P22",
            "text": "Em 2021, o diretor lançou uma versão da história em livro, seu primeiro romance.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em 2021, o diretor lançou uma versão da história em livro, seu primeiro romance."
          },
          {
            "id": "P23",
            "text": "O próprio diretor já disse que este é o seu favorito entre os filmes que fez.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O próprio diretor já disse que este é o seu favorito entre os filmes que fez."
          },
          {
            "id": "P24",
            "text": "Teve estreia mundial no Festival de Cannes, em 21 de maio de 2019.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Teve estreia mundial no Festival de Cannes, em 21 de maio de 2019."
          },
          {
            "id": "P25",
            "text": "Nos EUA, chegou aos cinemas em 26 de julho de 2019, distribuído pela Sony.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
                "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Nos EUA, chegou aos cinemas em 26 de julho de 2019, distribuído pela Sony."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Era Uma Vez em... Hollywood (2019), de Quentin Tarantino, acompanha o ator de TV em decadência Rick Dalton e seu dublê Cliff Booth na Los Angeles de 1969.",
        "hinge": "Roman Polanski, diretor famoso, aparece como personagem (vizinho do protagonista), mas quem dirigiu o filme foi Quentin Tarantino.",
        "references": [
          {
            "source": "Wikipédia (EN) — Once Upon a Time in Hollywood",
            "url": "https://en.wikipedia.org/wiki/Once_Upon_a_Time_in_Hollywood",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Era uma Vez em... Hollywood",
            "url": "https://www.adorocinema.com/filmes/filme-257482/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-better-call-saul": {
      "id": "cs1-serie-better-call-saul",
      "kind": "canonical-case",
      "imdbId": "tt3032476",
      "title": "Better Call Saul",
      "sessionTitle": "Um advogado em apuros",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2015,
      "rating": "18 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Better Call Saul; Wikipédia (PT) — Better Call Saul; JustWatch Brasil — Better Call Saul",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt3032476/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Better Call Saul",
            "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (PT) — Better Call Saul",
            "url": "https://pt.wikipedia.org/wiki/Better_Call_Saul",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "JustWatch Brasil — Better Call Saul",
            "url": "https://www.justwatch.com/br/serie/better-call-saul",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Vince Gilligan criou 'Breaking Bad' sozinho, mas esta série tem dois criadores: ele e Peter Gould, que inventou o personagem central num episódio de 'Breaking Bad'."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O1",
              "texto": "Better Call Saul"
            },
            {
              "id": "C1-O3",
              "texto": "Ozark"
            },
            {
              "id": "C1-O2",
              "texto": "Suits"
            },
            {
              "id": "C1-O4",
              "texto": "Fargo"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Better Call Saul",
          "endereco": "IMDb; Wikipédia (EN) — Better Call Saul",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt3032476/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Better Call Saul",
              "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O1",
              "texto": "Jimmy McGill"
            },
            {
              "id": "C2-O2",
              "texto": "Walter White"
            },
            {
              "id": "C2-O3",
              "texto": "Howard Hamlin"
            },
            {
              "id": "C2-O4",
              "texto": "Harvey Specter"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Jimmy McGill",
          "endereco": "Wikipédia (EN) — Better Call Saul; Wikipédia (EN) — Better Call Saul season 1",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Better Call Saul",
              "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Better Call Saul season 1",
              "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Aaron Korsh"
            },
            {
              "id": "C3-O4",
              "texto": "Noah Hawley"
            },
            {
              "id": "C3-O3",
              "texto": "Bill Dubuque e Mark Williams"
            },
            {
              "id": "C3-O1",
              "texto": "Vince Gilligan e Peter Gould"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Vince Gilligan e Peter Gould",
          "endereco": "Wikipédia (EN) — Better Call Saul; Wikipédia (PT) — Better Call Saul",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Better Call Saul",
              "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (PT) — Better Call Saul",
              "url": "https://pt.wikipedia.org/wiki/Better_Call_Saul",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2014"
            },
            {
              "id": "C4-O3",
              "texto": "2016"
            },
            {
              "id": "C4-O1",
              "texto": "2015"
            },
            {
              "id": "C4-O4",
              "texto": "2013"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2015",
          "endereco": "IMDb; Wikipédia (EN) — Better Call Saul",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt3032476/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Better Call Saul",
              "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou na TV a cabo dos EUA em fevereiro de 2015.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou na TV a cabo dos EUA em fevereiro de 2015."
          },
          {
            "id": "P02",
            "text": "É uma série dramática; a primeira temporada tem dez episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma série dramática; a primeira temporada tem dez episódios."
          },
          {
            "id": "P03",
            "text": "No total, a série teve seis temporadas e 63 episódios.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Better Call Saul",
                "url": "https://pt.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No total, a série teve seis temporadas e 63 episódios."
          },
          {
            "id": "P04",
            "text": "A história começa em 2002, em Albuquerque, no Novo México (EUA).",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história começa em 2002, em Albuquerque, no Novo México (EUA)."
          },
          {
            "id": "P05",
            "text": "O protagonista é um advogado em dificuldades, que atende clientes que pagam muito pouco.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é um advogado em dificuldades, que atende clientes que pagam muito pouco."
          },
          {
            "id": "P06",
            "text": "Como defensor público, ele recebe só 700 dólares por defender três adolescentes.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Como defensor público, ele recebe só 700 dólares por defender três adolescentes."
          },
          {
            "id": "P07",
            "text": "O \"escritório\" dele fica num cômodo nos fundos de um salão de beleza.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O \"escritório\" dele fica num cômodo nos fundos de um salão de beleza."
          },
          {
            "id": "P08",
            "text": "O irmão mais velho dele, advogado de sucesso, vive sem eletricidade por acreditar ter hipersensibilidade eletromagnética.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O irmão mais velho dele, advogado de sucesso, vive sem eletricidade por acreditar ter hipersensibilidade eletromagnética."
          },
          {
            "id": "P09",
            "text": "Na juventude, ele aplicava golpes fingindo escorregões e quedas, o que lhe rendeu um apelido.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Na juventude, ele aplicava golpes fingindo escorregões e quedas, o que lhe rendeu um apelido."
          },
          {
            "id": "P10",
            "text": "Muitos críticos a consideram à altura da série que a originou; alguns a acham até melhor.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Muitos críticos a consideram à altura da série que a originou; alguns a acham até melhor."
          },
          {
            "id": "P11",
            "text": "É derivada de 'Breaking Bad' e se passa, em grande parte, alguns anos antes daquela série.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Better Call Saul",
                "url": "https://pt.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É derivada de 'Breaking Bad' e se passa, em grande parte, alguns anos antes daquela série."
          },
          {
            "id": "P12",
            "text": "Mostra a transformação do protagonista no advogado sem escrúpulos que os fãs de 'Breaking Bad' já conheciam.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Mostra a transformação do protagonista no advogado sem escrúpulos que os fãs de 'Breaking Bad' já conheciam."
          },
          {
            "id": "P13",
            "text": "Um dos criadores também criou 'Breaking Bad'.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Peter Gould",
                "url": "https://en.wikipedia.org/wiki/Peter_Gould",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um dos criadores também criou 'Breaking Bad'."
          },
          {
            "id": "P14",
            "text": "O outro criador escreveu o episódio de 'Breaking Bad' que apresentou o personagem central desta série.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O outro criador escreveu o episódio de 'Breaking Bad' que apresentou o personagem central desta série."
          },
          {
            "id": "P15",
            "text": "Os criadores pensaram numa comédia de meia hora, mas preferiram um drama de uma hora.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os criadores pensaram numa comédia de meia hora, mas preferiram um drama de uma hora."
          },
          {
            "id": "P16",
            "text": "O primeiro episódio foi escrito pelos dois criadores e dirigido por um deles.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O primeiro episódio foi escrito pelos dois criadores e dirigido por um deles."
          },
          {
            "id": "P17",
            "text": "As filmagens começaram em junho de 2014, em Albuquerque, onde 'Breaking Bad' também foi gravada.",
            "importance": "contextual",
            "relatedFields": [
              "C3",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As filmagens começaram em junho de 2014, em Albuquerque, onde 'Breaking Bad' também foi gravada."
          },
          {
            "id": "P18",
            "text": "O protagonista é vivido por Bob Odenkirk, que já fazia o mesmo personagem em 'Breaking Bad'.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Bob Odenkirk, que já fazia o mesmo personagem em 'Breaking Bad'."
          },
          {
            "id": "P19",
            "text": "Jonathan Banks vive Mike, um ex-policial que trabalha como guarda do estacionamento do tribunal.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Jonathan Banks vive Mike, um ex-policial que trabalha como guarda do estacionamento do tribunal."
          },
          {
            "id": "P20",
            "text": "Rhea Seehorn vive Kim Wexler, advogada e amiga próxima do protagonista.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Rhea Seehorn vive Kim Wexler, advogada e amiga próxima do protagonista."
          },
          {
            "id": "P21",
            "text": "Michael McKean interpreta o irmão mais velho do protagonista.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Michael McKean interpreta o irmão mais velho do protagonista."
          },
          {
            "id": "P22",
            "text": "Recebeu 53 indicações ao Emmy e nunca ganhou nenhuma, um recorde.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Recebeu 53 indicações ao Emmy e nunca ganhou nenhuma, um recorde."
          },
          {
            "id": "P23",
            "text": "A primeira temporada concorreu ao Emmy de melhor série dramática.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada concorreu ao Emmy de melhor série dramática."
          },
          {
            "id": "P24",
            "text": "Na época, a estreia foi a de maior audiência de uma série roteirizada na TV a cabo dos EUA: cerca de 6,9 milhões.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Better Call Saul season 1",
                "url": "https://en.wikipedia.org/wiki/Better_Call_Saul_season_1",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Na época, a estreia foi a de maior audiência de uma série roteirizada na TV a cabo dos EUA: cerca de 6,9 milhões."
          },
          {
            "id": "P25",
            "text": "Fora dos EUA, os episódios foram lançados pela Netflix em vários países.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Uno (Better Call Saul)",
                "url": "https://en.wikipedia.org/wiki/Uno_(Better_Call_Saul)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Better Call Saul",
                "url": "https://pt.wikipedia.org/wiki/Better_Call_Saul",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Fora dos EUA, os episódios foram lançados pela Netflix em vários países."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Better Call Saul (AMC, 2015), criada por Vince Gilligan e Peter Gould, acompanha Jimmy McGill (Bob Odenkirk), um advogado em dificuldades em Albuquerque, em 2002, anos antes de 'Breaking Bad'.",
        "hinge": "Vince Gilligan criou 'Breaking Bad' sozinho, mas esta série tem dois criadores: ele e Peter Gould, que inventou o personagem central num episódio de 'Breaking Bad'.",
        "references": [
          {
            "source": "Wikipédia (EN) — Better Call Saul",
            "url": "https://en.wikipedia.org/wiki/Better_Call_Saul",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Peter Gould",
            "url": "https://en.wikipedia.org/wiki/Peter_Gould",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-pantera-negra": {
      "id": "cs1-filme-pantera-negra",
      "kind": "canonical-case",
      "imdbId": "tt1825683",
      "title": "Pantera Negra",
      "sessionTitle": "Um rei, um trono, um segredo",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2018,
      "rating": "14 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Black Panther (film); AdoroCinema — Pantera Negra",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1825683/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Black Panther (film)",
            "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Pantera Negra",
            "url": "https://www.adorocinema.com/filmes/filme-130336/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Wesley Snipes tentou fazer um filme do herói desde os anos 1990 e o produtor Kevin Feige recebeu a indicação de Melhor Filme, mas quem dirigiu foi Ryan Coogler."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O4",
              "texto": "Mulher-Maravilha"
            },
            {
              "id": "C1-O2",
              "texto": "Thor: Ragnarok"
            },
            {
              "id": "C1-O1",
              "texto": "Pantera Negra"
            },
            {
              "id": "C1-O3",
              "texto": "Aquaman"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Pantera Negra",
          "endereco": "AdoroCinema — Pantera Negra; Wikipédia (EN) — Black Panther (film)",
          "answerReferences": [
            {
              "source": "AdoroCinema — Pantera Negra",
              "url": "https://www.adorocinema.com/filmes/filme-130336/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Black Panther (film)",
              "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O1",
              "texto": "Um príncipe que volta para casa para assumir o trono"
            },
            {
              "id": "C2-O3",
              "texto": "O líder de uma tribo das montanhas que desafia o rei"
            },
            {
              "id": "C2-O2",
              "texto": "Uma general que comanda a guarda real feminina"
            },
            {
              "id": "C2-O4",
              "texto": "Um herdeiro do trono submarino dividido entre dois mundos"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Um príncipe que volta para casa para assumir o trono",
          "endereco": "Wikipédia (EN) — Black Panther (film)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Black Panther (film)",
              "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Ryan Coogler"
            },
            {
              "id": "C3-O3",
              "texto": "Jordan Peele"
            },
            {
              "id": "C3-O4",
              "texto": "Barry Jenkins"
            },
            {
              "id": "C3-O2",
              "texto": "Taika Waititi"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Ryan Coogler",
          "endereco": "Wikipédia (EN) — Black Panther (film); AdoroCinema — Pantera Negra",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Black Panther (film)",
              "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Pantera Negra",
              "url": "https://www.adorocinema.com/filmes/filme-130336/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O3",
              "texto": "2019"
            },
            {
              "id": "C4-O1",
              "texto": "2018"
            },
            {
              "id": "C4-O2",
              "texto": "2017"
            },
            {
              "id": "C4-O4",
              "texto": "2016"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2018",
          "endereco": "Wikipédia (EN) — Black Panther (film); AdoroCinema — Pantera Negra",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Black Panther (film)",
              "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Pantera Negra",
              "url": "https://www.adorocinema.com/filmes/filme-130336/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em 15 de fevereiro de 2018.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Pantera Negra",
                "url": "https://www.adorocinema.com/filmes/filme-130336/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em 15 de fevereiro de 2018."
          },
          {
            "id": "P02",
            "text": "É um longa-metragem de pouco mais de duas horas (134 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de pouco mais de duas horas (134 minutos)."
          },
          {
            "id": "P03",
            "text": "É um filme de super-herói passado em boa parte num reino africano fictício.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um filme de super-herói passado em boa parte num reino africano fictício."
          },
          {
            "id": "P04",
            "text": "Após a morte do pai, o herói volta à terra natal para assumir o trono.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Após a morte do pai, o herói volta à terra natal para assumir o trono."
          },
          {
            "id": "P05",
            "text": "O reino esconde do mundo uma tecnologia avançadíssima por trás da imagem de país pobre.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O reino esconde do mundo uma tecnologia avançadíssima por trás da imagem de país pobre."
          },
          {
            "id": "P06",
            "text": "Essa tecnologia nasce do vibranium, um metal raro trazido por um meteorito.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Essa tecnologia nasce do vibranium, um metal raro trazido por um meteorito."
          },
          {
            "id": "P07",
            "text": "Na coroação, o líder de uma tribo das montanhas desafia o herói para um combate ritual.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Na coroação, o líder de uma tribo das montanhas desafia o herói para um combate ritual."
          },
          {
            "id": "P08",
            "text": "O herói é protegido por uma guarda real formada só por mulheres guerreiras.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O herói é protegido por uma guarda real formada só por mulheres guerreiras."
          },
          {
            "id": "P09",
            "text": "A irmã do herói, de 16 anos, é a gênia que cria as novas tecnologias do país.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A irmã do herói, de 16 anos, é a gênia que cria as novas tecnologias do país."
          },
          {
            "id": "P10",
            "text": "O prólogo se passa em Oakland, na Califórnia, em 1992.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O prólogo se passa em Oakland, na Califórnia, em 1992."
          },
          {
            "id": "P11",
            "text": "Um traficante de armas rouba um artefato de um museu em Londres e foge para Busan, na Coreia do Sul.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um traficante de armas rouba um artefato de um museu em Londres e foge para Busan, na Coreia do Sul."
          },
          {
            "id": "P12",
            "text": "O diretor já tinha feito 'Fruitvale Station: A Última Parada' (2013) e 'Creed: Nascido para Lutar' (2015).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Olhar Digital — filmes de Ryan Coogler",
                "url": "https://olhardigital.com.br/2025/04/30/cinema-e-streaming/6-filmes-com-o-diretor-de-pecadores-ryan-coogler-para-assistir-online/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor já tinha feito 'Fruitvale Station: A Última Parada' (2013) e 'Creed: Nascido para Lutar' (2015)."
          },
          {
            "id": "P13",
            "text": "O diretor também assina o roteiro, em parceria com Joe Robert Cole.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor também assina o roteiro, em parceria com Joe Robert Cole."
          },
          {
            "id": "P14",
            "text": "Wesley Snipes tentou levar este herói ao cinema desde 1992, mas o projeto nunca saiu do papel.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Wesley Snipes tentou levar este herói ao cinema desde 1992, mas o projeto nunca saiu do papel."
          },
          {
            "id": "P15",
            "text": "Foi filmado na região de Atlanta entre janeiro e abril de 2017, com cenas também em Busan.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi filmado na região de Atlanta entre janeiro e abril de 2017, com cenas também em Busan."
          },
          {
            "id": "P16",
            "text": "Chadwick Boseman interpreta o herói.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chadwick Boseman interpreta o herói."
          },
          {
            "id": "P17",
            "text": "Michael B. Jordan, astro dos dois filmes anteriores do diretor, também está no elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Olhar Digital — filmes de Ryan Coogler",
                "url": "https://olhardigital.com.br/2025/04/30/cinema-e-streaming/6-filmes-com-o-diretor-de-pecadores-ryan-coogler-para-assistir-online/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Michael B. Jordan, astro dos dois filmes anteriores do diretor, também está no elenco."
          },
          {
            "id": "P18",
            "text": "Lupita Nyong'o, Danai Gurira e Letitia Wright estão no elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Lupita Nyong'o, Danai Gurira e Letitia Wright estão no elenco."
          },
          {
            "id": "P19",
            "text": "O herói tinha sido apresentado ao público em 'Capitão América: Guerra Civil' (2016).",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O herói tinha sido apresentado ao público em 'Capitão América: Guerra Civil' (2016)."
          },
          {
            "id": "P20",
            "text": "Foi o primeiro filme de super-herói indicado ao Oscar de Melhor Filme.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi o primeiro filme de super-herói indicado ao Oscar de Melhor Filme."
          },
          {
            "id": "P21",
            "text": "Venceu três Oscars: Figurino, Design de Produção e Trilha Sonora Original.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — List of accolades received by Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/List_of_accolades_received_by_Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Venceu três Oscars: Figurino, Design de Produção e Trilha Sonora Original."
          },
          {
            "id": "P22",
            "text": "A figurinista criou cerca de 700 figurinos inspirados em povos africanos como os Maasai e os Himba.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A figurinista criou cerca de 700 figurinos inspirados em povos africanos como os Maasai e os Himba."
          },
          {
            "id": "P23",
            "text": "Arrecadou mais de US$ 1,3 bilhão e virou a maior bilheteria de um diretor negro.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Arrecadou mais de US$ 1,3 bilhão e virou a maior bilheteria de um diretor negro."
          },
          {
            "id": "P24",
            "text": "É o 18º filme do Universo Cinematográfico Marvel.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É o 18º filme do Universo Cinematográfico Marvel."
          },
          {
            "id": "P25",
            "text": "Teve pré-estreia mundial em Los Angeles, em 29 de janeiro de 2018.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Black Panther (film)",
                "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Teve pré-estreia mundial em Los Angeles, em 29 de janeiro de 2018."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Pantera Negra (2018), dirigido por Ryan Coogler, acompanha T'Challa, que volta a Wakanda para assumir o trono depois da morte do pai.",
        "hinge": "Wesley Snipes tentou fazer um filme do herói desde os anos 1990 e o produtor Kevin Feige recebeu a indicação de Melhor Filme, mas quem dirigiu foi Ryan Coogler.",
        "references": [
          {
            "source": "Wikipédia (EN) — Black Panther (film)",
            "url": "https://en.wikipedia.org/wiki/Black_Panther_(film)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — List of accolades received by Black Panther (film)",
            "url": "https://en.wikipedia.org/wiki/List_of_accolades_received_by_Black_Panther_(film)",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-sherlock": {
      "id": "cs1-serie-sherlock",
      "kind": "canonical-case",
      "imdbId": "tt1475582",
      "title": "Sherlock",
      "sessionTitle": "Deduções na Londres de hoje",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2010,
      "rating": "14 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Sherlock (TV series); Wikipédia (PT) — Sherlock (série); JustWatch Brasil — Sherlock",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1475582/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Sherlock (TV series)",
            "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (PT) — Sherlock (série)",
            "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "JustWatch Brasil — Sherlock",
            "url": "https://www.justwatch.com/br/serie/sherlock",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem está entre os protagonistas, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Os criadores vêm de 'Doctor Who' e Matt Smith quase foi o Watson, mas a série não tem ligação com 'Doctor Who'; e Holmes divide o protagonismo com Watson."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O2",
              "texto": "Luther"
            },
            {
              "id": "C1-O4",
              "texto": "Broadchurch"
            },
            {
              "id": "C1-O1",
              "texto": "Sherlock"
            },
            {
              "id": "C1-O3",
              "texto": "Elementary"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Sherlock",
          "endereco": "IMDb; Wikipédia (EN) — Sherlock (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1475582/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Sherlock (TV series)",
              "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Um dos protagonistas",
          "opcoes": [
            {
              "id": "C2-O4",
              "texto": "Um falso vidente que ajuda a polícia a solucionar crimes"
            },
            {
              "id": "C2-O1",
              "texto": "Um detetive consultor que resolve crimes por dedução"
            },
            {
              "id": "C2-O2",
              "texto": "Um detetive belga que confia nas suas 'pequenas células cinzentas'"
            },
            {
              "id": "C2-O3",
              "texto": "Um médico rabugento que diagnostica casos impossíveis"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Um detetive consultor que resolve crimes por dedução (com John Watson)",
          "endereco": "Wikipédia (EN) — Sherlock (TV series); Wikipédia (PT) — Sherlock (série)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Sherlock (TV series)",
              "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (PT) — Sherlock (série)",
              "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Mark Gatiss e Steven Moffat"
            },
            {
              "id": "C3-O2",
              "texto": "Russell T Davies"
            },
            {
              "id": "C3-O3",
              "texto": "Neil Cross"
            },
            {
              "id": "C3-O4",
              "texto": "Chris Chibnall"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Mark Gatiss e Steven Moffat",
          "endereco": "Wikipédia (EN) — Sherlock (TV series); Wikipédia (PT) — Sherlock (série)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Sherlock (TV series)",
              "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (PT) — Sherlock (série)",
              "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O4",
              "texto": "2012"
            },
            {
              "id": "C4-O3",
              "texto": "2011"
            },
            {
              "id": "C4-O2",
              "texto": "2009"
            },
            {
              "id": "C4-O1",
              "texto": "2010"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2010",
          "endereco": "IMDb; Wikipédia (EN) — Sherlock (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1475582/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Sherlock (TV series)",
              "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou na TV britânica em julho de 2010.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — A Study in Pink",
                "url": "https://en.wikipedia.org/wiki/A_Study_in_Pink",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou na TV britânica em julho de 2010."
          },
          {
            "id": "P02",
            "text": "Cada temporada tem só três episódios, de cerca de 90 minutos cada.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Cada temporada tem só três episódios, de cerca de 90 minutos cada."
          },
          {
            "id": "P03",
            "text": "É um drama policial britânico ambientado nos dias de hoje, em Londres.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Sherlock (série)",
                "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um drama policial britânico ambientado nos dias de hoje, em Londres."
          },
          {
            "id": "P04",
            "text": "É uma versão moderna das histórias de um detetive clássico criado por Arthur Conan Doyle.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Sherlock (série)",
                "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma versão moderna das histórias de um detetive clássico criado por Arthur Conan Doyle."
          },
          {
            "id": "P05",
            "text": "O protagonista usa mensagens de celular, internet e GPS para resolver crimes.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista usa mensagens de celular, internet e GPS para resolver crimes."
          },
          {
            "id": "P06",
            "text": "O protagonista se descreve como um \"sociopata altamente funcional\".",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista se descreve como um \"sociopata altamente funcional\"."
          },
          {
            "id": "P07",
            "text": "Um médico do exército, ferido no Afeganistão, conhece o protagonista, que procura alguém para dividir o aluguel.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — A Study in Pink",
                "url": "https://en.wikipedia.org/wiki/A_Study_in_Pink",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um médico do exército, ferido no Afeganistão, conhece o protagonista, que procura alguém para dividir o aluguel."
          },
          {
            "id": "P08",
            "text": "Os dois vão morar juntos no número 221B da Baker Street.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — A Study in Pink",
                "url": "https://en.wikipedia.org/wiki/A_Study_in_Pink",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os dois vão morar juntos no número 221B da Baker Street."
          },
          {
            "id": "P09",
            "text": "No primeiro caso, a polícia está perdida diante de uma série de mortes que parecem suicídios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — A Study in Pink",
                "url": "https://en.wikipedia.org/wiki/A_Study_in_Pink",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No primeiro caso, a polícia está perdida diante de uma série de mortes que parecem suicídios."
          },
          {
            "id": "P10",
            "text": "Uma das vítimas, vestida toda de rosa, risca letras no chão antes de morrer.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — A Study in Pink",
                "url": "https://en.wikipedia.org/wiki/A_Study_in_Pink",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Uma das vítimas, vestida toda de rosa, risca letras no chão antes de morrer."
          },
          {
            "id": "P11",
            "text": "Os dois criadores eram roteiristas de 'Doctor Who' e tiveram a ideia em viagens de trem até Cardiff.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os dois criadores eram roteiristas de 'Doctor Who' e tiveram a ideia em viagens de trem até Cardiff."
          },
          {
            "id": "P12",
            "text": "Um dos criadores já tinha adaptado a história do Dr. Jekyll e Mr. Hyde na série 'Jekyll' (2007).",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um dos criadores já tinha adaptado a história do Dr. Jekyll e Mr. Hyde na série 'Jekyll' (2007)."
          },
          {
            "id": "P13",
            "text": "A produtora Sue Vertue, casada com um dos criadores, os incentivou a tocar o projeto.",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A produtora Sue Vertue, casada com um dos criadores, os incentivou a tocar o projeto."
          },
          {
            "id": "P14",
            "text": "Um piloto de 60 minutos foi gravado em 2009, mas o canal pediu para refazer tudo em episódios de 90 minutos.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — A Study in Pink",
                "url": "https://en.wikipedia.org/wiki/A_Study_in_Pink",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um piloto de 60 minutos foi gravado em 2009, mas o canal pediu para refazer tudo em episódios de 90 minutos."
          },
          {
            "id": "P15",
            "text": "A fachada do apartamento foi gravada em outra rua de Londres, porque a original tem trânsito demais.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A fachada do apartamento foi gravada em outra rua de Londres, porque a original tem trânsito demais."
          },
          {
            "id": "P16",
            "text": "O protagonista é vivido por Benedict Cumberbatch.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Sherlock (série)",
                "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é vivido por Benedict Cumberbatch."
          },
          {
            "id": "P17",
            "text": "Martin Freeman vive o médico que se torna parceiro do protagonista.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Sherlock (série)",
                "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Martin Freeman vive o médico que se torna parceiro do protagonista."
          },
          {
            "id": "P18",
            "text": "Matt Smith fez teste para o papel do parceiro, foi recusado e logo depois virou o Doutor em 'Doctor Who'.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Matt Smith fez teste para o papel do parceiro, foi recusado e logo depois virou o Doutor em 'Doctor Who'."
          },
          {
            "id": "P19",
            "text": "Os pais de verdade do ator principal aparecem na série como os pais do protagonista.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os pais de verdade do ator principal aparecem na série como os pais do protagonista."
          },
          {
            "id": "P20",
            "text": "Venceu o BAFTA de melhor série dramática em 2011.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Venceu o BAFTA de melhor série dramática em 2011."
          },
          {
            "id": "P21",
            "text": "Em 2014, o ator principal ganhou o Emmy de melhor ator em minissérie ou telefilme.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em 2014, o ator principal ganhou o Emmy de melhor ator em minissérie ou telefilme."
          },
          {
            "id": "P22",
            "text": "O protagonista troca o famoso cachimbo dos livros por adesivos de nicotina.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista troca o famoso cachimbo dos livros por adesivos de nicotina."
          },
          {
            "id": "P23",
            "text": "Os personagens se chamam pelo primeiro nome, e não pelo sobrenome, ideia refletida no nome da série.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os personagens se chamam pelo primeiro nome, e não pelo sobrenome, ideia refletida no nome da série."
          },
          {
            "id": "P24",
            "text": "O sobretudo usado pelo ator principal voltou a ser fabricado por causa da procura dos fãs.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O sobretudo usado pelo ator principal voltou a ser fabricado por causa da procura dos fãs."
          },
          {
            "id": "P25",
            "text": "A primeira temporada chegou à TV pública dos EUA (PBS) em outubro de 2010.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Sherlock (TV series)",
                "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Sherlock (série)",
                "url": "https://pt.wikipedia.org/wiki/Sherlock_(s%C3%A9rie)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada chegou à TV pública dos EUA (PBS) em outubro de 2010."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Sherlock (BBC, 2010), criada por Mark Gatiss e Steven Moffat, traz Sherlock Holmes (Benedict Cumberbatch) e John Watson (Martin Freeman) resolvendo crimes na Londres atual.",
        "hinge": "Os criadores vêm de 'Doctor Who' e Matt Smith quase foi o Watson, mas a série não tem ligação com 'Doctor Who'; e Holmes divide o protagonismo com Watson.",
        "references": [
          {
            "source": "Wikipédia (EN) — Sherlock (TV series)",
            "url": "https://en.wikipedia.org/wiki/Sherlock_(TV_series)",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-filme-top-gun-maverick": {
      "id": "cs1-filme-top-gun-maverick",
      "kind": "canonical-case",
      "imdbId": "tt1745960",
      "title": "Top Gun: Maverick",
      "sessionTitle": "Velhas asas para uma nova missão",
      "format": "filme",
      "selection": "sucessos",
      "releaseYear": 2022,
      "rating": "12 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Top Gun: Maverick; AdoroCinema — Top Gun: Maverick",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1745960/reference",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Top Gun: Maverick",
            "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "AdoroCinema — Top Gun: Maverick",
            "url": "https://www.adorocinema.com/filmes/filme-186636/",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a dirigiu e quando foi lançada?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Tony Scott dirigiu o filme original de 1986 (e a continuação é dedicada a ele), e Christopher McQuarrie e Tom Cruise estão no roteiro e na produção, mas quem dirigiu foi Joseph Kosinski."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "Trem-Bala"
            },
            {
              "id": "C1-O1",
              "texto": "Top Gun: Maverick"
            },
            {
              "id": "C1-O2",
              "texto": "Avatar: O Caminho da Água"
            },
            {
              "id": "C1-O4",
              "texto": "Missão: Impossível – Efeito Fallout"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Top Gun: Maverick",
          "endereco": "AdoroCinema — Top Gun: Maverick; Wikipédia (EN) — Top Gun: Maverick",
          "answerReferences": [
            {
              "source": "AdoroCinema — Top Gun: Maverick",
              "url": "https://www.adorocinema.com/filmes/filme-186636/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Top Gun: Maverick",
              "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O1",
              "texto": "Um piloto veterano chamado para treinar jovens aviadores"
            },
            {
              "id": "C2-O4",
              "texto": "Um agente secreto que aceita missões impossíveis"
            },
            {
              "id": "C2-O2",
              "texto": "Um aviador novato que disputa a liderança do esquadrão"
            },
            {
              "id": "C2-O3",
              "texto": "Uma dona de bar que reencontra um antigo amor"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Um piloto veterano chamado para treinar jovens aviadores",
          "endereco": "Wikipédia (EN) — Top Gun: Maverick; IMDb",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Top Gun: Maverick",
              "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt1745960/reference",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Direção",
          "opcoes": [
            {
              "id": "C3-O2",
              "texto": "Tony Scott"
            },
            {
              "id": "C3-O4",
              "texto": "Michael Bay"
            },
            {
              "id": "C3-O1",
              "texto": "Joseph Kosinski"
            },
            {
              "id": "C3-O3",
              "texto": "Christopher McQuarrie"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Joseph Kosinski",
          "endereco": "Wikipédia (EN) — Top Gun: Maverick; AdoroCinema — Top Gun: Maverick",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Top Gun: Maverick",
              "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Top Gun: Maverick",
              "url": "https://www.adorocinema.com/filmes/filme-186636/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de lançamento",
          "opcoes": [
            {
              "id": "C4-O1",
              "texto": "2022"
            },
            {
              "id": "C4-O2",
              "texto": "2020"
            },
            {
              "id": "C4-O4",
              "texto": "2019"
            },
            {
              "id": "C4-O3",
              "texto": "2021"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2022",
          "endereco": "Wikipédia (EN) — Top Gun: Maverick; AdoroCinema — Top Gun: Maverick",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Top Gun: Maverick",
              "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "AdoroCinema — Top Gun: Maverick",
              "url": "https://www.adorocinema.com/filmes/filme-186636/",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Chegou aos cinemas brasileiros em 26 de maio de 2022.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Top Gun: Maverick",
                "url": "https://www.adorocinema.com/filmes/filme-186636/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Chegou aos cinemas brasileiros em 26 de maio de 2022."
          },
          {
            "id": "P02",
            "text": "Era para ter estreado em 2019, mas foi adiado várias vezes, inclusive pela pandemia de covid-19.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Era para ter estreado em 2019, mas foi adiado várias vezes, inclusive pela pandemia de covid-19."
          },
          {
            "id": "P03",
            "text": "Foi exibido no Festival de Cannes em maio de 2022.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi exibido no Festival de Cannes em maio de 2022."
          },
          {
            "id": "P04",
            "text": "É um longa-metragem de cerca de duas horas e dez minutos (130 minutos).",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1745960/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um longa-metragem de cerca de duas horas e dez minutos (130 minutos)."
          },
          {
            "id": "P05",
            "text": "É um filme de ação americano sobre pilotos de caça da Marinha dos EUA.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um filme de ação americano sobre pilotos de caça da Marinha dos EUA."
          },
          {
            "id": "P06",
            "text": "O protagonista é um piloto de testes condecorado que, por indisciplina, nunca chegou a almirante.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é um piloto de testes condecorado que, por indisciplina, nunca chegou a almirante."
          },
          {
            "id": "P07",
            "text": "Logo no começo, ele leva um avião hipersônico experimental além de Mach 10.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Logo no começo, ele leva um avião hipersônico experimental além de Mach 10."
          },
          {
            "id": "P08",
            "text": "Ele é transferido para treinar jovens pilotos de elite para uma missão perigosa.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele é transferido para treinar jovens pilotos de elite para uma missão perigosa."
          },
          {
            "id": "P09",
            "text": "Um dos alunos é filho do falecido melhor amigo do protagonista e guarda mágoa dele.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Um dos alunos é filho do falecido melhor amigo do protagonista e guarda mágoa dele."
          },
          {
            "id": "P10",
            "text": "Ele reencontra uma antiga paixão, hoje dona de um bar e mãe solo.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele reencontra uma antiga paixão, hoje dona de um bar e mãe solo."
          },
          {
            "id": "P11",
            "text": "Dois alunos rivais entre si disputam uma vaga na missão.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Dois alunos rivais entre si disputam uma vaga na missão."
          },
          {
            "id": "P12",
            "text": "É uma continuação lançada 36 anos depois do filme original, de 1986.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma continuação lançada 36 anos depois do filme original, de 1986."
          },
          {
            "id": "P13",
            "text": "O diretor já tinha trabalhado com o astro principal em 'Oblivion' (2013).",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "AdoroCinema — Joseph Kosinski",
                "url": "https://www.adorocinema.com/personalidades/personalidade-193401/streaming/",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor já tinha trabalhado com o astro principal em 'Oblivion' (2013)."
          },
          {
            "id": "P14",
            "text": "O diretor também comandou 'Tron: O Legado' (2010) e 'Homens de Coragem' (2017).",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "AdoroCinema — Joseph Kosinski",
                "url": "https://www.adorocinema.com/personalidades/personalidade-193401/streaming/",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Joseph Kosinski",
                "url": "https://en.wikipedia.org/wiki/Joseph_Kosinski",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O diretor também comandou 'Tron: O Legado' (2010) e 'Homens de Coragem' (2017)."
          },
          {
            "id": "P15",
            "text": "Os atores passaram por um treinamento de três meses para aguentar voos reais em caças F/A-18.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Os atores passaram por um treinamento de três meses para aguentar voos reais em caças F/A-18."
          },
          {
            "id": "P16",
            "text": "Câmeras IMAX foram instaladas dentro das cabines dos caças durante as filmagens.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Câmeras IMAX foram instaladas dentro das cabines dos caças durante as filmagens."
          },
          {
            "id": "P17",
            "text": "Tom Cruise retoma o papel que viveu no filme original de 1986.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1745960/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Tom Cruise retoma o papel que viveu no filme original de 1986."
          },
          {
            "id": "P18",
            "text": "Val Kilmer faz sua última atuação no cinema, como o almirante Iceman.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Val Kilmer faz sua última atuação no cinema, como o almirante Iceman."
          },
          {
            "id": "P19",
            "text": "Miles Teller, Jennifer Connelly e Jon Hamm estão no elenco.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "IMDb",
                "url": "https://www.imdb.com/title/tt1745960/reference",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Miles Teller, Jennifer Connelly e Jon Hamm estão no elenco."
          },
          {
            "id": "P20",
            "text": "Glen Powell e Monica Barbaro interpretam alunos da escola de pilotos.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Glen Powell e Monica Barbaro interpretam alunos da escola de pilotos."
          },
          {
            "id": "P21",
            "text": "Teve seis indicações ao Oscar, incluindo Melhor Filme, e venceu Melhor Som.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Teve seis indicações ao Oscar, incluindo Melhor Filme, e venceu Melhor Som."
          },
          {
            "id": "P22",
            "text": "Arrecadou cerca de US$ 1,5 bilhão, a segunda maior bilheteria de 2022.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Arrecadou cerca de US$ 1,5 bilhão, a segunda maior bilheteria de 2022."
          },
          {
            "id": "P23",
            "text": "Lady Gaga canta 'Hold My Hand', uma das músicas da trilha.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Lady Gaga canta 'Hold My Hand', uma das músicas da trilha."
          },
          {
            "id": "P24",
            "text": "O filme é dedicado a Tony Scott, diretor do original, que morreu em 2012.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O filme é dedicado a Tony Scott, diretor do original, que morreu em 2012."
          },
          {
            "id": "P25",
            "text": "Virou a maior bilheteria da carreira do astro principal.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Top Gun: Maverick",
                "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Virou a maior bilheteria da carreira do astro principal."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Top Gun: Maverick (2022), dirigido por Joseph Kosinski, traz Pete \"Maverick\" Mitchell de volta, agora encarregado de treinar jovens pilotos de elite para uma missão perigosa.",
        "hinge": "Tony Scott dirigiu o filme original de 1986 (e a continuação é dedicada a ele), e Christopher McQuarrie e Tom Cruise estão no roteiro e na produção, mas quem dirigiu foi Joseph Kosinski.",
        "references": [
          {
            "source": "Wikipédia (EN) — Top Gun: Maverick",
            "url": "https://en.wikipedia.org/wiki/Top_Gun:_Maverick",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt1745960/reference",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    },
    "cs1-serie-attack-on-titan": {
      "id": "cs1-serie-attack-on-titan",
      "kind": "canonical-case",
      "imdbId": "tt2560140",
      "title": "Attack on Titan",
      "sessionTitle": "Muralhas contra gigantes famintos",
      "format": "serie",
      "selection": "sucessos",
      "releaseYear": 2013,
      "rating": "18 anos",
      "canon": {
        "source": "IMDb (créditos e datas) + títulos oficiais no Brasil",
        "reference": "IMDb; Wikipédia (EN) — Attack on Titan (TV series); Wikipédia (PT) — Shingeki no Kyojin; Omelete — Attack on Titan no top 10 da Crunchyroll",
        "references": [
          {
            "source": "IMDb",
            "url": "https://www.imdb.com/title/tt2560140/",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Attack on Titan (TV series)",
            "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (PT) — Shingeki no Kyojin",
            "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Omelete — Attack on Titan no top 10 da Crunchyroll",
            "url": "https://www.omelete.com.br/ataque-dos-titas-attack-titan/attack-on-titan-crunchyroll-top-10",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "prompt": {
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
      },
      "focalFieldId": "C1",
      "focalJustification": "Identificar a obra organiza a leitura das demais respostas.",
      "editorial": {
        "hinge": "Tetsurō Araki dirigiu a adaptação animada (e também 'Death Note'), mas o criador creditado é Hajime Isayama, autor do mangá."
      },
      "fields": [
        {
          "id": "C1",
          "sourceOrder": 1,
          "rotulo": "Título",
          "opcoes": [
            {
              "id": "C1-O3",
              "texto": "Sword Art Online"
            },
            {
              "id": "C1-O1",
              "texto": "Attack on Titan"
            },
            {
              "id": "C1-O2",
              "texto": "Tokyo Ghoul"
            },
            {
              "id": "C1-O4",
              "texto": "Fullmetal Alchemist: Brotherhood"
            }
          ],
          "respostaId": "C1-O1",
          "respostaCanonica": "Attack on Titan",
          "endereco": "IMDb; Wikipédia (EN) — Attack on Titan (TV series); Omelete — Attack on Titan no top 10 da Crunchyroll",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt2560140/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Attack on Titan (TV series)",
              "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Omelete — Attack on Titan no top 10 da Crunchyroll",
              "url": "https://www.omelete.com.br/ataque-dos-titas-attack-titan/attack-on-titan-crunchyroll-top-10",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": true,
          "pontosBase": 8
        },
        {
          "id": "C2",
          "sourceOrder": 2,
          "rotulo": "Protagonista",
          "opcoes": [
            {
              "id": "C2-O2",
              "texto": "Tanjiro Kamado"
            },
            {
              "id": "C2-O4",
              "texto": "Ken Kaneki"
            },
            {
              "id": "C2-O3",
              "texto": "Izuku Midoriya"
            },
            {
              "id": "C2-O1",
              "texto": "Eren Yeager"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Eren Yeager",
          "endereco": "Wikipédia (EN) — Attack on Titan (TV series); Wikipédia (EN) — Attack on Titan (mangá)",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Attack on Titan (TV series)",
              "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Attack on Titan (mangá)",
              "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 5
        },
        {
          "id": "C3",
          "sourceOrder": 3,
          "rotulo": "Criação",
          "opcoes": [
            {
              "id": "C3-O1",
              "texto": "Hajime Isayama"
            },
            {
              "id": "C3-O4",
              "texto": "Kōhei Horikoshi"
            },
            {
              "id": "C3-O2",
              "texto": "Tetsurō Araki"
            },
            {
              "id": "C3-O3",
              "texto": "Tsugumi Ohba"
            }
          ],
          "respostaId": "C3-O1",
          "respostaCanonica": "Hajime Isayama",
          "endereco": "Wikipédia (EN) — Attack on Titan (TV series); Wikipédia (EN) — Hajime Isayama",
          "answerReferences": [
            {
              "source": "Wikipédia (EN) — Attack on Titan (TV series)",
              "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Hajime Isayama",
              "url": "https://en.wikipedia.org/wiki/Hajime_Isayama",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 3
        },
        {
          "id": "C4",
          "sourceOrder": 4,
          "rotulo": "Ano de estreia",
          "opcoes": [
            {
              "id": "C4-O2",
              "texto": "2012"
            },
            {
              "id": "C4-O4",
              "texto": "2015"
            },
            {
              "id": "C4-O3",
              "texto": "2014"
            },
            {
              "id": "C4-O1",
              "texto": "2013"
            }
          ],
          "respostaId": "C4-O1",
          "respostaCanonica": "2013",
          "endereco": "IMDb; Wikipédia (EN) — Attack on Titan (TV series)",
          "answerReferences": [
            {
              "source": "IMDb",
              "url": "https://www.imdb.com/title/tt2560140/",
              "checkedAt": "2026-10-14"
            },
            {
              "source": "Wikipédia (EN) — Attack on Titan (TV series)",
              "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
              "checkedAt": "2026-10-14"
            }
          ],
          "isFocal": false,
          "pontosBase": 2
        }
      ],
      "deck": {
        "status": "ready",
        "minPlayers": 2,
        "maxPlayers": 12,
        "cards": [
          {
            "id": "P01",
            "text": "Estreou na TV japonesa em abril de 2013.",
            "importance": "essential",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Estreou na TV japonesa em abril de 2013."
          },
          {
            "id": "P02",
            "text": "É um anime; a primeira temporada tem 25 episódios.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É um anime; a primeira temporada tem 25 episódios."
          },
          {
            "id": "P03",
            "text": "É uma fantasia sombria e pós-apocalíptica, adaptada de um mangá.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "É uma fantasia sombria e pós-apocalíptica, adaptada de um mangá."
          },
          {
            "id": "P04",
            "text": "O que resta da humanidade vive cercado por três muralhas gigantescas.",
            "importance": "essential",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O que resta da humanidade vive cercado por três muralhas gigantescas."
          },
          {
            "id": "P05",
            "text": "Do lado de fora das muralhas vivem gigantes de forma humana que devoram pessoas.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Do lado de fora das muralhas vivem gigantes de forma humana que devoram pessoas."
          },
          {
            "id": "P06",
            "text": "Protegidos pelas muralhas, os moradores tiveram cerca de um século de paz.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "early",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Protegidos pelas muralhas, os moradores tiveram cerca de um século de paz."
          },
          {
            "id": "P07",
            "text": "A história começa no ano de 845, numa cidade da muralha mais externa.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A história começa no ano de 845, numa cidade da muralha mais externa."
          },
          {
            "id": "P08",
            "text": "Tudo muda quando um gigante colossal abre um buraco na muralha da cidade do protagonista.",
            "importance": "essential",
            "relatedFields": [
              "C1",
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Tudo muda quando um gigante colossal abre um buraco na muralha da cidade do protagonista."
          },
          {
            "id": "P09",
            "text": "O protagonista é um garoto que jura eliminar todos os gigantes.",
            "importance": "essential",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O protagonista é um garoto que jura eliminar todos os gigantes."
          },
          {
            "id": "P10",
            "text": "Ele se alista no exército junto com os amigos de infância Mikasa e Armin.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "late",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "high",
            "clueType": "premissa",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Ele se alista no exército junto com os amigos de infância Mikasa e Armin."
          },
          {
            "id": "P11",
            "text": "O autor da história original tinha cerca de 23 anos quando a publicação começou, em 2009.",
            "importance": "essential",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Hajime Isayama",
                "url": "https://en.wikipedia.org/wiki/Hajime_Isayama",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O autor da história original tinha cerca de 23 anos quando a publicação começou, em 2009."
          },
          {
            "id": "P12",
            "text": "Foi a primeira série do autor; antes, ele levou a ideia à revista da 'Shōnen Jump', mas recusou as mudanças pedidas.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Hajime Isayama",
                "url": "https://en.wikipedia.org/wiki/Hajime_Isayama",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi a primeira série do autor; antes, ele levou a ideia à revista da 'Shōnen Jump', mas recusou as mudanças pedidas."
          },
          {
            "id": "P13",
            "text": "O próprio autor já admitiu achar seus desenhos \"amadores\".",
            "importance": "contextual",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O próprio autor já admitiu achar seus desenhos \"amadores\"."
          },
          {
            "id": "P14",
            "text": "A adaptação animada foi dirigida por quem também dirigiu o anime de 'Death Note'.",
            "importance": "relevant",
            "relatedFields": [
              "C3"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Tetsurō Araki",
                "url": "https://en.wikipedia.org/wiki/Tetsur%C5%8D_Araki",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A adaptação animada foi dirigida por quem também dirigiu o anime de 'Death Note'."
          },
          {
            "id": "P15",
            "text": "As três primeiras temporadas foram animadas pelo Wit Studio; a última, pelo estúdio MAPPA.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "bastidores",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "As três primeiras temporadas foram animadas pelo Wit Studio; a última, pelo estúdio MAPPA."
          },
          {
            "id": "P16",
            "text": "No original japonês, o protagonista é dublado por Yūki Kaji.",
            "importance": "relevant",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No original japonês, o protagonista é dublado por Yūki Kaji."
          },
          {
            "id": "P17",
            "text": "Yui Ishikawa dubla, no original, a amiga de infância do protagonista.",
            "importance": "contextual",
            "relatedFields": [
              "C2"
            ],
            "recommendedMoment": "middle",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Yui Ishikawa dubla, no original, a amiga de infância do protagonista."
          },
          {
            "id": "P18",
            "text": "No Brasil, ganhou dublagem do estúdio DuBrasil a partir de novembro de 2020.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "elenco",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "No Brasil, ganhou dublagem do estúdio DuBrasil a partir de novembro de 2020."
          },
          {
            "id": "P19",
            "text": "Foi eleito Animação do Ano no Tokyo Anime Award de 2014.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Foi eleito Animação do Ano no Tokyo Anime Award de 2014."
          },
          {
            "id": "P20",
            "text": "Em 2025, foi o primeiro a receber o prêmio Global Impact do Crunchyroll Anime Awards.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "premios",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "Em 2025, foi o primeiro a receber o prêmio Global Impact do Crunchyroll Anime Awards."
          },
          {
            "id": "P21",
            "text": "A abertura dos 13 primeiros episódios, da banda Linked Horizon, chama-se \"Arco e Flecha Carmesim\" em tradução livre.",
            "importance": "relevant",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A abertura dos 13 primeiros episódios, da banda Linked Horizon, chama-se \"Arco e Flecha Carmesim\" em tradução livre."
          },
          {
            "id": "P22",
            "text": "O mangá original passou de 140 milhões de cópias em circulação.",
            "importance": "relevant",
            "relatedFields": [
              "C1",
              "C3"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (mangá)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan",
                "checkedAt": "2026-10-14"
              },
              {
                "source": "Wikipédia (EN) — Hajime Isayama",
                "url": "https://en.wikipedia.org/wiki/Hajime_Isayama",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O mangá original passou de 140 milhões de cópias em circulação."
          },
          {
            "id": "P23",
            "text": "A primeira temporada foi condensada em dois filmes lançados nos cinemas japoneses em 2014 e 2015.",
            "importance": "contextual",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "curiosidade",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A primeira temporada foi condensada em dois filmes lançados nos cinemas japoneses em 2014 e 2015."
          },
          {
            "id": "P24",
            "text": "O mangá começou a sair no Brasil pela Panini em novembro de 2013, mesmo ano da estreia do anime.",
            "importance": "relevant",
            "relatedFields": [
              "C4"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "medium",
            "clueType": "epoca",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (PT) — Shingeki no Kyojin",
                "url": "https://pt.wikipedia.org/wiki/Shingeki_no_Kyojin",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "O mangá começou a sair no Brasil pela Panini em novembro de 2013, mesmo ano da estreia do anime."
          },
          {
            "id": "P25",
            "text": "A série terminou em novembro de 2023, depois de quatro temporadas.",
            "importance": "contextual",
            "relatedFields": [
              "C1"
            ],
            "recommendedMoment": "any",
            "narrativeFunction": "Aproximar a obra por um fato verificável",
            "earlyRevealRisk": "low",
            "clueType": "formato",
            "twoPlayerSuitable": true,
            "references": [
              {
                "source": "Wikipédia (EN) — Attack on Titan (TV series)",
                "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
                "checkedAt": "2026-10-14"
              }
            ],
            "texto": "A série terminou em novembro de 2023, depois de quatro temporadas."
          }
        ]
      },
      "reveal": {
        "canonicalSummary": "Attack on Titan (anime, 2013), baseado no mangá criado por Hajime Isayama, acompanha Eren Yeager, um garoto que jura eliminar os gigantes depois que eles invadem sua cidade murada.",
        "hinge": "Tetsurō Araki dirigiu a adaptação animada (e também 'Death Note'), mas o criador creditado é Hajime Isayama, autor do mangá.",
        "references": [
          {
            "source": "Wikipédia (EN) — Attack on Titan (TV series)",
            "url": "https://en.wikipedia.org/wiki/Attack_on_Titan_(TV_series)",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Tetsurō Araki",
            "url": "https://en.wikipedia.org/wiki/Tetsur%C5%8D_Araki",
            "checkedAt": "2026-10-14"
          },
          {
            "source": "Wikipédia (EN) — Hajime Isayama",
            "url": "https://en.wikipedia.org/wiki/Hajime_Isayama",
            "checkedAt": "2026-10-14"
          }
        ]
      },
      "review": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "ambiguities": []
      },
      "status": {
        "structural": "approved",
        "factual": "approved",
        "spoiler": "approved",
        "editorial": "approved",
        "editoriallyEligible": true,
        "playable": true
      },
      "pendingIssues": []
    }
  }
};});
