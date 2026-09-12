# Consolidação operacional do Mosaico Card

Este documento define o contrato da partida econômica. A gramática narrativa e o Banco NT são fontes de conteúdo; as regras abaixo determinam como Mestre, jogadores, telão, relógios e pontuação se relacionam.

## 1. Papéis e sequência de entrada

O Mestre possui duas funções simultâneas: administra a sala e participa integralmente como jogador. Ele recebe mão, saldo, turno e pontuação como qualquer outra pessoa.

Fluxo obrigatório:

1. O Mestre abre a configuração da sala.
2. Seleciona tempo por jogada, duração e presença do telão.
3. A sala é criada e libera imediatamente código e QR Code.
4. Enquanto os convidados entram, o Mestre define nome, marcador e sua própria assistência.
5. Cada convidado informa identidade e escolhe sua assistência.
6. Todos passam ao estado `pronto`.
7. Com 2 a 12 jogadores prontos, o Mestre inicia a partida. Três ou mais são recomendados para ampliar a diversidade de perspectivas, mas não constituem bloqueio técnico.
8. O sistema sorteia a pauta somente nesse momento.

## 2. Configuração coletiva

### Tempo por jogada

O Mestre escolhe um dos três valores fechados: **30, 45 ou 60 segundos**.

| Jogadores | Sugestão automática |
| --- | ---: |
| 2–5 | 60 s |
| 6–8 | 45 s |
| 9–12 | 30 s |

A sugestão orienta, mas não obriga: o Mestre pode selecionar outro dos três valores. Não existe campo de tempo livre.

### Duração e ovelhas

A sala oferece duração curta, padrão ou longa. Essa escolha ajusta tanto a quantidade de ciclos quanto a quantidade de ovelhas. Curta reduz um ciclo, com mínimo de três, e uma ovelha, com mínimo de uma. Longa acrescenta um ciclo, com teto de cinco, e uma ovelha, com teto de quatro.

### Telão

O telão é opcional. Quando ativado, possui uma URL vinculada ao código da sala e mostra apenas o estado coletivo: pergunta, campos, participante da vez, relógio, lista de jogadores, transições, apuração e pódio. A partida continua funcional sem ele.

## 3. Assistência individual

Cada participante escolhe sua experiência na própria tela:

- **Livre:** pistas e ações essenciais;
- **Assistida:** organização e lembretes discretos;
- **Guiada:** relações e passos mais estruturados.

A escolha é individual, inclusive para o Mestre, e não deve ser anunciada à mesa. Ela jamais altera realidade canônica, pergunta, alternativas, resposta correta, custos, tempo, valor dos campos ou pontuação.

O fluxo e a persistência local dessa preferência já estão implementados. A autoria dos auxílios específicos de cada camada deverá acompanhar a validação das pautas.

## 4. Autoridade e fases

O Mestre é a autoridade do relógio e das mudanças de fase. A sala compartilha prazos absolutos, não cronômetros independentes por aparelho.

| Fase | Função |
| --- | --- |
| `lobby` | Entrada, identidade, assistência e prontidão. |
| `deal` | Turnos, economia, compra, captura, consignação e tentativas. |
| `fechamento` | Respostas gratuitas aos campos ainda elegíveis durante 60 s. |
| `judge` | Soma parcelada, ranking e pódio. |
| `encerrada` | Sala fechada pelo Mestre. |

O Mestre possui controles de contingência para pausar/retomar, acrescentar um intervalo igual ao tempo por jogada, passar a vez e encerrar a fase. Esses controles não mudam a fórmula de pontuação.

## 5. Turnos e tempo total

O relógio de jogada é único e sincronizado. Ao chegar a zero, a autoridade passa a vez automaticamente. O brilho de urgência aparece apenas para o jogador da vez nos dez segundos finais; os demais acompanham o mesmo prazo sem esse alerta pessoal.

A quantidade base de ciclos é:

```text
ciclos = limitar(2 + teto(campos ativos / jogadores), 3, 5)
tempo total = jogadores × ciclos × segundos por jogada
```

Depois do cálculo base, a duração curta reduz um ciclo e a longa acrescenta um, sempre dentro do intervalo de três a cinco ciclos.

Quando o limite total é alcançado, o motor marca o encerramento e completa o ciclo corrente, evitando cortar a mesa antes de todos terem a mesma quantidade de turnos. A fase normal também pode terminar antes se todos os campos forem fechados.

## 6. Economia

Cada jogador começa com 12 denários.

| Ação | Regra |
| --- | --- |
| Comprar · 4 | Retira uma carta escolhida diretamente do leque. |
| Capturar · 2 | Move uma pista capturável da mão de outro jogador. |
| Consignar · 0 | Envia uma pista própria ao balaio. |
| Arriscar · 3 | Exige saldo suficiente; o motor atual debita o custo quando a resposta está errada. |

Uma pessoa sem saldo para arriscar conserva o direito de responder gratuitamente no fechamento final, desde que o campo ainda esteja elegível para ela.

## 7. Fechamento dos campos

Durante os turnos normais:

- resposta correta fecha o campo globalmente e atribui o campo ao jogador;
- resposta incorreta cria uma cicatriz individual e bloqueia somente quem errou;
- outros jogadores ainda podem tentar o mesmo campo;
- depois de um acerto, ninguém mais pontua naquele campo durante a fase normal.

No fechamento final:

- a janela dura 60 segundos;
- não há custo em denários;
- cada jogador responde apenas campos ainda elegíveis para ele;
- respostas podem ser alteradas até o fim do prazo;
- a apuração é conjunta ao encerrar a janela;
- vários jogadores podem pontuar no mesmo campo que permaneceu aberto;
- um erro anterior continua impedindo aquele jogador de responder o campo queimado.

## 8. Pontuação

Somente dois componentes entram no total:

1. valores dos campos acertados;
2. residual dos denários restantes.

Comprar, capturar, consignar, quantidade de cartas e a ovelha não concedem pontos diretos.

### Valores dos campos

O primeiro campo apresentado é o foco da pauta e vale mais. Para as pautas NT atuais, sempre com quatro campos:

| Posição na partida | Valor-base |
| --- | ---: |
| 1º — campo focal | 8 |
| 2º | 5 |
| 3º | 3 |
| 4º | 2 |

O campo focal precisa ser explicitamente marcado no banco antes da pauta ser liberada. Sua posição na planilha não determina automaticamente que ele seja `C1`.

### Multiplicadores por tempo

| Momento do fechamento | Multiplicador |
| --- | ---: |
| Primeiro terço | 1,3 |
| Segundo terço | 1,1 |
| Terceiro terço | 1,0 |
| Fechamento final | 1,0 |

O ledger guarda cada fechamento com campo, jogador, valor-base, terço, multiplicador, horário e ordem. Não se arredonda cada campo; o total é exibido com uma casa decimal.

```text
total = 1,3 × S1 + 1,1 × S2 + 1,0 × S3 + 1,0 × Sf + INT(R / 4)
```

`R` é o saldo final de denários. Assim, 0–3 valem 0 ponto; 4–7 valem 1; 8–11 valem 2; 12–15 valem 3.

### Desempates

1. maior pontuação total;
2. menos campos queimados;
3. mais denários restantes;
4. fechamento mais cedo do campo focal;
5. persistindo igualdade, ordem estável da mesa.

## 9. Apuração e pódio

A apuração não expõe ranking ao vivo. Ao final, cada total é construído visualmente em parcelas:

1. campos do primeiro terço;
2. campos do segundo terço;
3. campos do terceiro terço;
4. campos do fechamento final;
5. residual de denários;
6. total.

Depois da soma, o sistema revela terceiro, segundo e primeiro lugares e apresenta a classificação completa.

## 10. Ovelha

A demonstração da ovelha é isolada e não pertence ao saco NT. Na demonstração, a primeira compra apresenta a animação de forma previsível.

Em uma partida normal, as ovelhas são embaralhadas aleatoriamente no monte:

| Jogadores | Quantidade padrão |
| --- | ---: |
| 2–5 | 1 |
| 6–8 | 2 |
| 9–12 | 3 |

Cada ovelha rende 6 denários imediatamente, permanece na revelação por 5,5 segundos e sai do jogo. Não entra na mão, não aparece nas pistas, não pode ser capturada e não possui pontuação residual própria além do efeito dos denários que permanecerem no saldo.

## 11. Informação pública e privada

Durante a partida, a interface coletiva deve revelar nome, tamanho da mão, vez e cronômetro. Saldo, cartas particulares, tentativas individuais e camada de assistência não compõem o ranking público ao vivo.

No estado técnico atual, parte desses dados ainda viaja no snapshot compartilhado da sala. A separação de leitura no Firestore é requisito de segurança antes de abrir testes externos, ainda que a interface não os exiba.
