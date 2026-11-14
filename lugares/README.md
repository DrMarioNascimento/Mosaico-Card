# Mosaico Card — Lugares

Banco ampliado em 14 de novembro de 2026. [Abrir Lugares](https://mosaico-card.dragongames.dev.br/lugares/).

O mestre escolhe **Viajante** ou **Geógrafo** para a sala e combina Brasil, suas cinco regiões e os seis continentes da convenção utilizada pelo IBGE. Brasil também faz parte de América. A união de filtros não duplica lugares.

Viajante usa linguagem familiar e inclui rios, clima, relevo, cultura e paisagens conhecidos. Geógrafo explora relações espaciais, causas e processos. Ambos têm o mesmo catálogo e as mesmas quatro respostas por lugar. A profundidade do conteúdo permanece independente dos recursos pessoais de assistência disponíveis no motor.

## Catálogo jogável

| Lugar | Recorte |
|---|---|
| Florianópolis | Brasil / Sul / América |
| Parque Nacional dos Lençóis Maranhenses | Brasil / Nordeste / América |
| Machu Picchu | América |
| Paris | Europa |
| Pirâmides de Gizé | África |
| Monte Fuji | Ásia |
| Grande Barreira de Corais | Oceania |
| Polo Sul Geográfico | Antártida |
| Brasília | Brasil / Centro-Oeste / América |
| Parque Nacional do Iguaçu | Brasil / Sul / América |
| Salvador | Brasil / Nordeste / América |
| Olinda | Brasil / Nordeste / América |
| Parque Nacional de Jericoacoara | Brasil / Nordeste / América |
| Cataratas Vitória | África |
| São Luís | Brasil / Nordeste / América |
| Havana | América |
| Ilhas Galápagos | América |
| Petra | Ásia |
| Porto | Europa |
| Roma | Europa |

São 20 lugares, 40 conjuntos de pistas (dois por lugar), 1.000 pistas, 80 perguntas distintas e 452 alternativas: oito ou 12 para identificar cada lugar e quatro nos demais campos. Cada conjunto oferece 25 pistas comuns, comportando duas cartas iniciais por jogador para mesas de 2 a 12 participantes. As cartas especiais são acrescentadas pelo motor conforme a duração.

Para maior variedade, o teste pode preferir **Todos os lugares**. Os filtros exibem a quantidade disponível. Regiões ainda sem conteúdo aparecem como “Em breve”; seleção vazia não cria nem inicia uma partida. Seleções com menos de quatro lugares recebem um aviso de pouca variedade. O plano editorial reúne 125 candidatos e continua em elaboração; confira os nomes alternativos antes de comparar seus números com o catálogo jogável.

## Fluxo e regras

- Mestre autorizado cria a sala e define perfil, territórios, ritmo e formato.
- Participantes entram por link, QR ou código; o conteúdo não é configurado por eles.
- Demonstração de duas rodadas com bússola, seguida de retorno ao lobby.
- Partida com 12 créditos iniciais: comprar custa 4, capturar custa 2, erro ao arriscar custa 3; bússola dá 6. Oferecer uma pista é gratuito e rende 2 se outro jogador a levar.
- Quatro respostas com pontos-base 8, 5, 3 e 2; demais bônus, fechamento e saldo residual preservados.
- Sessão Clássica e Maratonar compartilham o mesmo motor transacional.
- Reconexão preserva as cartas, o perfil, a configuração e o estado da partida.

## Arquivos e manutenção

- `data/lugares-bank.json`: fonte editorial com fontes por pista e gabarito.
- `cases-lugares.js`: catálogo gerado para o motor. IDs incluem o perfil; `placeId` identifica o lugar comum.
- `sessao.js`: normalização de perfil/territórios e controles do mestre.
- `bank-runtime.js`: filtros, sorteio em saco e memória recente por lugar.
- `case-bussola.js`: demonstração fictícia, isolada do catálogo geográfico.
- `data/plano-expansao.json`: candidatos para expansão, não conteúdo jogável.
- `docs/BANCO.md`: versão legível do lote.

Gerar novamente após editar a fonte:

```sh
node lugares/tools/generate-bank.mjs
npm test
npm run test:firebase
```

A partir da raiz, `npm run test:lugares` verifica fontes, gabaritos, pareamento, filtros, capacidade de 2–12 jogadores, sorteio sem repetição e funcionamento sem localStorage. A suíte DOM inclui os dois perfis, fluxo com múltiplos clientes, demonstração, partida, atualização da página, duas abas, pausa, recuperação e encerramento. A suíte Firestore usa o emulador oficial, sem gravar dados de teste na produção.

## Infraestrutura

Reutiliza o Firebase existente e sua coleção autorizada `salas-cinema`, identificando as novas salas com `config.edicao = "lugares"`. A coleção é infraestrutura de transporte; o catálogo, a memória de reconexão e o sorteio são próprios de Lugares. Cinema e Lugares validam a edição antes da entrada; códigos incompatíveis orientam a usar o link do mestre. As regras de segurança e a lista de mestres não foram alteradas.

A página compartilha CSS de componentes, autenticação, QR, regras e o reducer da mesa. Os arquivos de apresentação e sala que dependem do conteúdo ficam nesta pasta. A capa usa globo, mapa e bússola com iluminação dourada, no mesmo padrão das demais edições. A carta bônus tem imagem própria de bússola com transparência. Os dois arquivos WebP somam cerca de 164 KiB; a capa é reutilizada na abertura.

## Limites de revisão

As referências foram consultadas na elaboração do primeiro lote. A revisão de integração conferiu gabaritos, ambiguidade dos campos, distinção entre ponto geográfico e magnético, água doce nos Lençóis, corais como animais e linguagem do Viajante. Os testes automatizados não aferem engajamento nem equivalência de dificuldade. A calibração com jogadores e a ampliação do catálogo permanecem próximas etapas.

Criação do Mosaico Card: **Mário César Nascimento e Osana Melo Nascimento (M&O)**. Aplicam-se as condições de [LICENSE.md](../LICENSE.md).

A pergunta principal é neutra; campos e alternativas são abertos separadamente ao arriscar. As pistas decisivas não são mais priorizadas na distribuição inicial, embora possam ser sorteadas. A divisão dos perfis e os campos ainda exigem revisão de dificuldade e testes com jogadores.
