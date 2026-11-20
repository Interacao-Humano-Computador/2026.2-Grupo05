## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 28/10/2026 | `1.0` | Consolidação e relato dos resultados da avaliação formativa do Storyboard 08 e dos modelos HTA/CMN-GOMS (TAR-06). | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para organizar as respostas da transcrição em tabelas e formatar a página em Markdown |
| 19/11/2026 | `1.1` | Padronização da estrutura (histórico no topo, conteúdo, fotos de referência e referências ao final); declaração de IA levada para o histórico; retirada das referências que não são o livro da disciplina nem material do professor; inclusão de fotos de referência grifadas. Inclusão do bloco de artefatos relacionados (persona, cenário, análise de tarefas, storyboard, planejamentos, relatos e protótipos da funcionalidade). Correção das páginas e seções citadas do livro da disciplina (edição de 2021). | [Gabriel Melo](https://github.com/gabriellcardone-06) | Pendente de revisão | Claude (Anthropic) — apoio na padronização da estrutura do artefato, na revisão das referências e na formatação em Markdown.; apoio na inclusão dos links entre artefatos |


!!! warning "Observação para correção manual"
    Não foi encontrado o planejamento do relato de Nível 1 correspondente a este relato (TAR-06). O autor deve indicar o artefato ou criá-lo.

---

# Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-06)

## 1. Introdução e Objetivos do Relato

Este documento apresenta a consolidação dos resultados da avaliação formativa realizada sobre o **[Storyboard 08](../../storyboards.md#38-storyboard-08-consulta-do-onibus-em-tempo-real-no-df-no-ponto)** e os modelos de tarefa (**[HTA e CMN-GOMS da TAR-06: Consulta de ônibus em tempo real no DF no Ponto](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md)**).

O objetivo principal desta avaliação foi investigar a verossimilhança da narrativa apresentada no storyboard, a clareza da consulta da previsão de chegada no ponto e a correção do fluxo de tarefas modelado, verificando as hipóteses H1 a H7 registradas na TAR-06, que foi elaborada apenas com documentação.

> **Alteração de escopo:** a avaliação prevista do Storyboard 04 (TAR-04/TAR-05) com um motorista de ônibus foi substituída por esta, porque o participante não pôde ser recrutado. A justificativa está na seção [Alteração de Escopo](../../planejamentos-individuais/Carlos/carlos-planejamento-avaliacao.md#alteracao-de-escopo) do planejamento.

**Artefatos relacionados — fluxo da funcionalidade TAR-06 (Consulta do Ônibus em Tempo Real no DF no Ponto):**

* **Persona:** [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md); [Mariana Borges Almeida](../../../../analise-de-requisitos/personas/mariana-borges-almeida.md)
* **Cenário:** [Cenário 2](../../../../analise-de-requisitos/cenarios/cenario-2-viagem-matutina.md); [Cenário 10](../../../../analise-de-requisitos/cenarios/cenario-10-viagem-ideal.md)
* **Análise de tarefas:** [TAR-06](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md)
* **Storyboard:** [Storyboard 08](../../storyboards.md#38-storyboard-08-consulta-do-onibus-em-tempo-real-no-df-no-ponto)
* **Nível 1 — avaliação do storyboard e da análise de tarefas:** [Planejamento da avaliação](../../planejamentos-individuais/Carlos/carlos-planejamento-avaliacao.md) · Planejamento do relato (*não disponível — pendente de correção manual*) · Relato dos resultados (*esta página*)
* **Nível 2 — protótipo de papel (baixa fidelidade):** [Planejamento da avaliação](../../../nivel2/planejamentos-individuais/Carlos/carlos-planejamento-av-prototipo-papel.md) · [Planejamento do relato](../../../nivel2/planejamentos-individuais/Carlos/carlos-planejamento-relato-prot-papel.md) · [Relato dos resultados](../../../nivel2/relatos-individuais/carlos/relato-resultados-prot-papel.md)
* **Nível 3 — protótipo de alta fidelidade:** [Planejamento da avaliação](../../../nivel3/planejamentos-individuais/carlos/carlos-planejamento-av-prot-alta-fidel.md) · [Planejamento do relato](../../../nivel3/planejamentos-individuais/carlos/carlos-planejamento-relato-prot-alta-fidel.md) · [Relato dos resultados](../../../nivel3/relatos-individuais/carlos/relato-resultados-prot-alta-fidel.md)
* **Telas do protótipo de papel:** [telas no planejamento da avaliação](../../../nivel2/planejamentos-individuais/Carlos/carlos-planejamento-av-prototipo-papel.md#8-telas-do-prototipo-avaliado)
* **Protótipo de alta fidelidade navegável:** [acessar o protótipo](https://carloshfgit.github.io/prototipo-tar06-df-no-ponto/)


---

## 2. Metodologia e Caracterização do Participante

A coleta de dados seguiu a metodologia de **entrevista semiestruturada** orientada por artefatos visuais. Antes do início das perguntas, o [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf) foi apresentado à participante, e a participação e a gravação foram aceitas verbalmente no início do vídeo (0:22).

### Perfil dos Envolvidos na Sessão:
* **Entrevistador:** Carlos Costa.
* **Perfil do Participante convidado:** Estudante do Colégio Militar de Brasília (CMB) que utiliza ônibus em seus deslocamentos para as aulas e já usou aplicativo de rastreamento de ônibus. O perfil é próximo ao da persona [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md) (estudante que depende do ônibus para chegar às aulas), embora a participante não seja universitária, como previa o planejamento. A participante é identificada apenas pelo código P04.
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

Durante a condução da entrevista, a participante demonstrou facilidade para interpretar a narrativa visual e reconheceu a situação como parte da própria rotina. Ela entendeu, porém, que João Pedro se atrasou, embora o quadro 5 mostre o ônibus chegando, e só concordou com a decisão de esperar em uma situação sem pressa. Nas perguntas sobre a tarefa, a resposta mais marcante foi a falta de confiança no tempo previsto, o que confirma o passo 3.2 da HTA como ponto crítico. A severidade dos problemas segue a escala de 0 (sem importância) a 4 (catastrófico) de Nielsen (1994 apud BARBOSA et al., 2021).

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

1. **Avanço para Prototipação de papel:** Manter na tela de detalhe da linha o tempo previsto, o mapa e a indicação de **última atualização** (PR01), incluir o **aviso de posição defasada** com acesso a outras linhas (PR03) e diferenciar os itens da **lista de resultados** (PR02), conforme o [planejamento da avaliação do protótipo de papel](../../../nivel2/planejamentos-individuais/Carlos/carlos-planejamento-av-prototipo-papel.md).
2. **Hipóteses pendentes:** Investigar no teste do protótipo de papel a causa da seleção errada (H3), o conhecimento da busca por referência (H6) e a sensação de estar menos perdido na espera (H7).
3. **Atualização da TAR-06:** Registrar a situação das hipóteses da seção 3.3 na Tabela 5 da TAR-06 (versão 1.2).
4. **Limitações:** A avaliação contou com uma única participante, estudante de colégio e não universitária como a persona, sem observador e sem exibição dos diagramas HTA e GOMS; os resultados indicam tendências e não garantem a ausência de outros problemas.

---

## 6. Fotos de Referência

As Figuras 1 a 3 mostram os trechos que fundamentam este artefato, recortados e grifados em amarelo diretamente do livro da disciplina (BARBOSA et al., 2021).

<div id="figura-1" align="center">
<p><strong>Figura 1</strong> — 11.7.4 Interpretação dos dados de cada participante</p>
</div>

![Figura 1 — 11.7.4 Interpretação dos dados de cada participante](../../../../assets/prints_referencias/verificacao-v2/livro-interpretacao.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 262). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-2" align="center">
<p><strong>Figura 2</strong> — 11.7.5 Consolidação e relato dos resultados</p>
</div>

![Figura 2 — 11.7.5 Consolidação e relato dos resultados](../../../../assets/prints_referencias/verificacao-v2/livro-consolidacao-relato.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 263). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-3" align="center">
<p><strong>Figura 3</strong> — Comparação entre o uso esperado (modelo de tarefas) e o uso observado</p>
</div>

![Figura 3 — Comparação entre o uso esperado (modelo de tarefas) e o uso observado](../../../../assets/prints_referencias/verificacao-v2/livro-modelo-esperado.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 262). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira et al. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. (Capítulo 11: Planejamento da Avaliação de IHC, Seção 11.7.5, p. 263).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
