# Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-06)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 28/10/2026 | `1.0` | Consolidação e relato dos resultados da avaliação formativa do Storyboard 08 e dos modelos HTA/CMN-GOMS (TAR-06). | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | Claude Code (Anthropic) - usado para organizar as respostas da transcrição em tabelas e formatar a página em Markdown |

---

## 1. Introdução e Objetivos do Relato

Este documento apresenta a consolidação dos resultados da avaliação formativa realizada sobre o **[Storyboard 08](../../storyboards.md#38-storyboard-08-consulta-do-onibus-em-tempo-real-no-df-no-ponto)** e os modelos de tarefa (**[HTA e CMN-GOMS da TAR-06: Consulta de ônibus em tempo real no DF no Ponto](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md)**).

O objetivo principal desta avaliação foi investigar a verossimilhança da narrativa apresentada no storyboard, a clareza da consulta da previsão de chegada no ponto e a correção do fluxo de tarefas modelado, verificando as hipóteses H1 a H7 registradas na TAR-06, que foi elaborada apenas com documentação.

> **Alteração de escopo:** a avaliação prevista do Storyboard 04 (TAR-04/TAR-05) com um motorista de ônibus foi substituída por esta, porque o participante não pôde ser recrutado. A justificativa está na seção [Alteração de Escopo](../../planejamentos-individuais/Carlos/carlos-planejamento-avaliacao.md#alteracao-de-escopo) do planejamento.

---

## 2. Metodologia e Caracterização do Participante

A coleta de dados seguiu a metodologia de **entrevista semiestruturada** orientada por artefatos visuais. Antes do início das perguntas, o [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf) foi apresentado à participante, e a participação e a gravação foram aceitas verbalmente no início do vídeo (0:22).

### Perfil dos Envolvidos na Sessão:
* **Entrevistador:** Carlos Costa.
* **Perfil do Participante convidado:** Estudante da UnB que utiliza ônibus em seus deslocamentos e já usou aplicativo de rastreamento de ônibus, enquadrando-se no perfil da persona [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md). A participante é identificada apenas pelo código P04.
* **Ambiente e Recursos:** Sessão presencial em 28/10/2026, com cerca de 3 minutos, gravada em vídeo com exibição do storyboard. As perguntas sobre a tarefa foram feitas oralmente, sem exibir os diagramas HTA e GOMS, e a sessão não teve observador.
* O vídeo da entrevista está disponível clicando [aqui](https://youtu.be/UlGMlzHiujA).

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/UlGMlzHiujA" title="Avaliação do Storyboard 08 e TAR-06 - Carlos Costa e P04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><em>Vídeo 1: Gravação da entrevista de avaliação com a participante P04.</em></p>
</div>

---

## 3. Sumário dos Dados Coletados

### 3.1 Consolidação das Respostas: Avaliação do Storyboard 08

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Artefato |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | **Clareza Narrativa** | *"Com suas palavras, o que acontece nesta história?"* | Entendeu que João Pedro, preocupado com o atraso do ônibus, consulta o aplicativo, vê que ele "dá uma travada" e mostra o ônibus parado, decide esperar e "se atrasa um pouco". | **Conforme, com ressalva** |
| **Q02** | **Verossimilhança** | *"Você já ficou no ponto sem saber se o ônibus vinha, ou desconfiou do horário mostrado no aplicativo?"* | Confirmou que já passou por essa situação e que foi uma experiência ruim, que "prejudica a pessoa". | **Conforme** |
| **Q03** | **Reação da Persona** | *"Você acha que a decisão que o João Pedro tomou de esperar faz sentido?"* | Considerou que faz sentido "dependendo da situação": com pressa, esperar "não fez muito sentido"; numa situação normal, faria. | **Parcialmente conforme** |
| **Q04** | **Engajamento** | *"Você usaria essa consulta no seu dia a dia?"* | Respondeu que usaria (*"Usaria, sim"*). | **Conforme** |

---

### 3.2 Consolidação das Respostas: Análise de Tarefas (TAR-06 - HTA e CMN-GOMS)

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Modelo |
| :---: | :--- | :--- | :--- | :---: |
| **QT01** | **Sequência Lógica** | *Pergunta não aplicada na sessão.* | — | **Não avaliado** |
| **QT02** | **Permissão de Localização** | *"Quando um app de transporte pede a sua localização, você costuma permitir no celular?"* | Respondeu que permite (*"Permito"*). | **Validade Confirmada** |
| **QT03** | **Estratégia de Busca** | *"Você costuma buscar pelo número da linha ou por um lugar de referência?"* | Afirmou que costuma buscar pelo ponto de referência, o que corresponde ao método 2.B do GOMS. | **Validade Confirmada** |
| **QT04** | **Seleção na Lista** | *"Você já escolheu a linha ou ponto errado alguma vez?"* | Confirmou que já aconteceu (*"Já me aconteceu já"*). A causa da confusão não foi explorada. | **Validade Confirmada** |
| **QT05** | **Confiabilidade da Informação** | *"Você confia no tempo previsto que aparece dentro do aplicativo? Ver a hora da última atualização da posição do ônibus te ajudaria?"* | Disse que normalmente não confia na previsão (*"Não confio"*) e que ver a hora da última atualização "ajuda muito". | **Validade Confirmada** |
| **QT06** | **Decisão com Dado Defasado** | *"Quando a previsão parece meio errada, o que você faz geralmente?"* | Afirmou que depende da situação: numa ocasião normal, espera o ônibus para ter certeza; senão, pega outro ônibus. Isso corresponde ao plano do objetivo 4 da HTA. | **Validade Confirmada** |
| **QT07** | **Completude e Experiência** | *"Você favoritaria a linha ou ativaria algum aviso de atraso?"* | Respondeu que faria isso *"Com certeza"*. As partes sobre passos faltantes e sobre se sentir menos perdido não foram aplicadas. | **Validade Confirmada (parcial)** |

---

### 3.3 Situação das Hipóteses da TAR-06

| ID | Hipótese | Pergunta(s) | Evidência da Sessão | Situação |
| :---: | :--- | :---: | :--- | :---: |
| **H1** | O usuário nega a permissão de localização e perde as sugestões de pontos próximos. | QT02 | A participante permite a localização. | **Refutada** |
| **H2** | A busca exige lembrar a linha; um atalho para linhas usadas ajudaria. | QT03, QT07 | A participante evita lembrar a linha buscando por referência e favoritaria a linha. | **Parcialmente Confirmada** |
| **H3** | Itens próximos na lista levam à seleção errada. | QT04 | A participante já escolheu a linha ou o ponto errado. | **Confirmada** |
| **H4** | A indicação de última atualização ajuda a avaliar a confiabilidade. | QT05 | A participante não confia na previsão e disse que a última atualização "ajuda muito". | **Confirmada** |
| **H5** | O usuário trata posição defasada como atual e decide errado. | QT06, Q03 | A participante reconhece o dado defasado e decide conforme a urgência. | **Não Confirmada** |
| **H6** | O usuário novo não conhece a busca por ponto de referência. | QT03 | A participante não é usuária nova e a pergunta sobre conhecer o recurso não foi feita. | **Não Avaliada** |
| **H7** | Com a consulta em tempo real, o passageiro não se sente perdido esperando. | QT07 | A pergunta não foi aplicada. | **Não Avaliada** |

---

## 4. Análise Qualitativa e Registro de Problemas

Durante a condução da entrevista, a participante demonstrou facilidade para interpretar a narrativa visual e reconheceu a situação como parte da própria rotina. Ela entendeu, porém, que João Pedro se atrasou, embora o quadro 5 mostre o ônibus chegando, e só concordou com a decisão de esperar em uma situação sem pressa. Nas perguntas sobre a tarefa, a resposta mais marcante foi a falta de confiança no tempo previsto, o que confirma o passo 3.2 da HTA como ponto crítico. A severidade dos problemas segue a escala de 0 (sem importância) a 4 (catastrófico) de Nielsen (1994).

### Tabela de Registro e Priorização de Problemas de IHC

| ID Problema | Descrição do Problema | Local / Artefato | Severidade (0 a 4) | Impacto na Experiência | Sugestão de Reprojeto / Ação |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **PR01** | A participante não confia no tempo previsto exibido pelo aplicativo. | TAR-06 / HTA 3.2 / GOMS 3.A–3.B | **3 (Grande)** | Sem saber se a previsão é confiável, o passageiro pode perder o ônibus ou desistir da consulta. | Exibir a hora da última atualização da posição junto do tempo previsto e destacar quando o dado estiver defasado. |
| **PR02** | A participante já escolheu a linha ou o ponto errado na lista de resultados. | TAR-06 / HTA 2.2 | **2 (Pequeno)** | O passageiro decide com base na previsão de outra linha ou ponto. | Mostrar em cada resultado o sentido da linha e o ponto de referência buscado. |
| **PR03** | Com informação defasada e pressa, o fluxo não ajuda a escolher uma alternativa. | TAR-06 / HTA 4.3 / Storyboard 08 (quadro 4) | **2 (Pequeno)** | Esperar com dado defasado pode causar atraso, como a participante comentou. | Junto do aviso de dado defasado, oferecer acesso direto a outras linhas para o mesmo destino. |
| **PR04** | O desfecho do storyboard não deixa claro se João Pedro chega a tempo. | Storyboard 08 (quadro 5) | **1 (Cosmético)** | A participante entendeu que ele se atrasou, o que enfraquece a mensagem do storyboard. | Indicar no quadro 5 que ele chega a tempo da aula. |

---

## 5. Recomendações e Próximos Passos (Ciclo de Iteração)

Uma vez que o **Storyboard 08** foi compreendido e os modelos **HTA/CMN-GOMS da TAR-06** obtiveram validação positiva nos passos avaliados, com problemas pontuais de confiabilidade e seleção, as recomendações para as próximas fases do projeto são:

1. **Avanço para Prototipação de papel:** Manter na tela de detalhe da linha o tempo previsto, o mapa e a indicação de **última atualização** (PR01), incluir o **aviso de posição defasada** com acesso a outras linhas (PR03) e diferenciar os itens da **lista de resultados** (PR02), conforme o [planejamento da avaliação do protótipo de papel](../../planejamentos-individuais/Carlos/carlos-planejamento-av-prototipo-papel.md).
2. **Hipóteses pendentes:** Investigar no teste do protótipo de papel a causa da seleção errada (H3), o conhecimento da busca por referência (H6) e a sensação de estar menos perdido na espera (H7).
3. **Atualização da TAR-06:** Registrar a situação das hipóteses da seção 3.3 na Tabela 5 da TAR-06 (versão 1.2).
4. **Limitações:** A avaliação contou com uma única participante, sem observador e sem exibição dos diagramas HTA e GOMS; os resultados indicam tendências e não garantem a ausência de outros problemas.

---

## 6. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que a ferramenta de IA Generativa Claude Code (Anthropic) foi utilizada para organizar as respostas da transcrição em tabelas, formatar as tabelas em Markdown e revisar o texto. A condução da entrevista, análise das respostas em áudio e compilação dos dados são de responsabilidade autoral de Carlos Costa.

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira et al. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. (Capítulo 11: Planejamento da Avaliação de IHC, Seção 11.7.5, p. 279).
* NIELSEN, Jakob. **Usability Engineering**. San Francisco: Morgan Kaufmann, 1994.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
