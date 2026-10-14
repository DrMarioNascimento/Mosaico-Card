/* Gerado por tools/generate-cinema-bank.mjs a partir de data/cinema-bank.json e data/cinema-base.csv. Não editar. */
(function(root,factory){const catalog=factory();if(typeof module==="object"&&module.exports)module.exports=catalog;root.MC_CINEMA_BANK=catalog;})(typeof globalThis!=="undefined"?globalThis:this,function(){return {
  "schemaVersion": 1,
  "catalogVersion": "lote-1",
  "namespace": "mosaico-cinema-series-v1",
  "demoIsolated": true,
  "source": {
    "file": "cinema-bank.json",
    "base": "cinema-base.csv",
    "canonicalSource": "IMDb (créditos e datas) + títulos oficiais no Brasil",
    "scope": "Filmes e séries a partir de 2001"
  },
  "summary": {
    "cases": 13,
    "playableCases": 13,
    "films": 6,
    "series": 7,
    "sucessos": 13,
    "max12Cases": 13,
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
    "cs1-serie-breaking-bad"
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
              "texto": "Enid Sinclair"
            },
            {
              "id": "C2-O2",
              "texto": "Mortícia Addams"
            },
            {
              "id": "C2-O4",
              "texto": "Sabrina Spellman"
            },
            {
              "id": "C2-O1",
              "texto": "Wandinha Addams"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Wandinha Addams",
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
              "texto": "Miles Morales"
            },
            {
              "id": "C2-O3",
              "texto": "Stephen Strange (Doutor Estranho)"
            },
            {
              "id": "C2-O2",
              "texto": "Ned Leeds"
            },
            {
              "id": "C2-O1",
              "texto": "Peter Parker (Homem-Aranha)"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Peter Parker (Homem-Aranha)",
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
              "texto": "Giselle"
            },
            {
              "id": "C2-O1",
              "texto": "Barbie"
            },
            {
              "id": "C2-O2",
              "texto": "Elle Woods"
            },
            {
              "id": "C2-O4",
              "texto": "Christine \"Lady Bird\" McPherson"
            }
          ],
          "respostaId": "C2-O1",
          "respostaCanonica": "Barbie",
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
        "question": "Que obra é esta, quem a protagoniza, quem a criou e quando estreou?"
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
    }
  }
};});
