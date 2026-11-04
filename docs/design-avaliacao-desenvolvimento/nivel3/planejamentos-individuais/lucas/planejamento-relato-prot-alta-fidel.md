## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 01/11/2026 | `1.0` | Criação do planejamento individual do relato dos resultados da avaliação do Protótipo de Alta Fidelidade (Figma) da TAR-03 com modelos de tabelas e referências do livro-texto. | [Lucas Araújo Lima](https://github.com/Lucasaraujoszz) | [Arthur Mariani](https://github.com/arthur-mariani) | Google Gemini — utilizado apenas para formatação em Markdown |

---

# Planejamento do Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (TAR-03)

Neste documento, apresenta-se o **Planejamento do Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-03 — Planejamento de Rota Completa (Porta a Porta) por Destino com Indicação de Paradas e Previsão de Chegada](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota/#tar-03-planejamento-de-rota-completa-porta-a-porta-por-destino-com-indicacao-de-paradas-e-previsao-de-chegada)**. Trata-se de um documento metodológico individual elaborado por Lucas Araújo Lima para estruturar, padronizar e orientar a compilação, análise e apresentação dos dados quantitativos e qualitativos colhidos durante os testes de usabilidade no **Figma** (Etapa 7).

A estrutura deste planejamento fundamenta-se diretamente nos preceitos de **Consolidação e Relato dos Resultados** de Barbosa & Silva (2010, Cap. 9, Seção 9.7.5, p. 311–312; Cap. 10, Seção 10.2.1, p. 347–348; Barbosa et al., 2021, Seção 11.7.5 e Seção 12.2.1) e no referencial teórico de testes de usabilidade iterativos de **Steve Krug** (Krug, 2000, 2006; Santa-Rosa, 2005, p. 156–157), garantindo rastreabilidade entre os achados empíricos, o **[Guia de Estilo](../../../../analise-de-requisitos/guia-de-estilo/introducao.md)** e as melhorias aplicadas no protótipo de alta fidelidade da **SEMOB-DF / DF no Ponto**.

---

## 1. Objetivos do Relato dos Resultados

O documento final de relato dos resultados da avaliação do protótipo de alta fidelidade terá como finalidades principais:

1. **Sintetizar as métricas quantitativas de desempenho e eficiência:** Apresentar a taxa de conclusão sem auxílio das sub-tarefas `TAR-03.1`, `TAR-03.2` e `TAR-03.3`, o tempo médio de execução (comparado ao tempo preditivo de `9,70 s` modelado via GOMS/KLM na análise de tarefas) e a contagem de cliques incorretos (*misclicks*) dos **3 participantes recrutados** (conforme a teoria de Steve Krug).
2. **Validar empiricamente a conformidade com o Guia de Estilo do Grupo 05:** Aferir em que medida os componentes visuais e interativos do Figma atenderam às diretrizes da equipe (contraste WCAG AA, alvos de toque de no mínimo 48×48 px, botões no padrão `[Verbo + Ação]`, destaque do cartão *"Mais Rápida"* e automação da localização e caminhada via GPS).
3. **Classificar e priorizar os problemas de usabilidade no Figma:** Registrar todas as hesitações, dúvidas de interpretação ou falhas de transição observadas durante o protocolo *Think Aloud*, classificando cada ocorrência segundo a escala de severidade de Nielsen (1994) e mapeando os fatores de qualidade de uso afetados.
4. **Orientar o ciclo final de reprojeto no Figma:** Converter os problemas priorizados em ajustes visuais e comportamentais concretos diretamente nos componentes do Figma para consolidar a versão final da proposta para a SEMOB-DF.

---

## 2. Estrutura Padronizada do Relatório Final (Etapa 7)

Em estrita observância à lista de tópicos exigidos por Barbosa & Silva (2010, p. 312 e p. 348) e ao Plano de Ensino da disciplina, o documento final de consolidação dos resultados da alta fidelidade será estruturado nas **9 seções padronizadas** a seguir:

1. **Introdução e Objetivos da Avaliação:** Contextualização do escopo avaliado na TAR-03 no Figma e retomada das perguntas investigativas (`QF01` a `QF06`) estabelecidas no [Planejamento da Avaliação do Protótipo de Alta Fidelidade](planejamento-av-prot-alta-fidel.md).
2. **Metodologia e Protocolo Executado:** Descrição da aplicação do Teste de Usabilidade combinado ao protocolo *Think Aloud*, com links para o protótipo interativo no Figma e para as gravações em vídeo das sessões.
3. **Caracterização dos Avaliadores e dos 3 Participantes:** Tabela de perfil demográfico e comportamental dos **3 usuários avaliados** (alinhados à persona [Marcos Paulo Vieira](../../../../analise-de-requisitos/personas/marcos-paulo-vieira.md)), justificativa da amostra por Steve Krug (2000, 2006) e confirmação de assinatura do TCLE.
4. **Sumário Quantitativo de Desempenho nas Tarefas:** Tabelas consolidando o tempo de execução, taxa de sucesso sem ajuda e número de erros por participante em cada sub-tarefa da TAR-03.
5. **Consolidação Qualitativa da Entrevista Pós-Teste:** Síntese das respostas dos 3 participantes às perguntas `QF01` a `QF06` do roteiro DECIDE.
6. **Registro e Priorização de Problemas de Usabilidade (Escala de Nielsen):** Tabela detalhada dos problemas detectados no Figma (local, fatores prejudicados, descrição, severidade de 0 a 4 e recomendação de correção).
7. **Verificação de Conformidade com o Guia de Estilo do Grupo 05:** Matriz de avaliação dos padrões visuais, tipográficos, semióticos e de ação aplicados na TAR-03.
8. **Plano de Reprojeto e Refinamentos Aplicados no Figma:** Lista de alterações efetivadas no protótipo digital após a rodada de testes.
9. **Análise de Limitações e Conclusão:** Balanço da validade ecológica do estudo e validação final da solução proposta.

---

## 3. Metodologia de Análise e Escala de Severidade

A análise dos dados coletados nas 3 sessões combinará a **consolidação quantitativa** (médias de tempo, taxas de conclusão e contagem de erros de toque) com a **interpretação qualitativa** dos vídeos de interação e das verbalizações do *Think Aloud* (Barbosa & Silva, 2010, Seção 9.7.4 e 9.7.5, p. 309–312).

Para priorizar a correção das falhas identificadas no protótipo do Figma, será utilizada a **Escala de Severidade de Problemas de Usabilidade** de Nielsen (1994), adotada como padrão pelo Grupo 05:

<div align="center">
<p><strong>Tabela 1</strong> — Escala de Severidade de Problemas de Usabilidade no Protótipo de Alta Fidelidade</p>
</div>

| Nível | Classificação de Severidade | Critério de Julgamento na Interação no Figma (TAR-03) |
| :---: | :--- | :--- |
| **0** | **Sem Importância** | Comentário estético ou preferência individual que não prejudica a compreensão nem a fluidez do clique. |
| **1** | **Problema Cosmético / Leve** | Pequeno desalinhamento visual ou microinteração sutil; o usuário conclui a tarefa sem atraso relevante. |
| **2** | **Problema Simples / Moderado** | Provoca hesitação momentânea ou toque em área não clicável do Figma, reduzindo a eficiência, mas o usuário se recupera sozinho. |
| **3** | **Problema Grave** | Dificulta seriamente a conclusão da tarefa (ex.: não perceber o alerta de retenção na EPTG ou confundir o horário previsto com o tempo de espera), exigindo alto esforço. |
| **4** | **Problema Catastrófico** | Bloqueia totalmente o fluxo interativo no Figma, impedindo o participante de planejar a rota ou levando à escolha de uma linha que causa atraso crítico. |

<div align="center">
<p><em>Fonte: Adaptado de Nielsen (1994) e Barbosa & Silva (2010, p. 311, 348).</em></p>
</div>

---

## 4. Modelos de Tabelas para Consolidação e Relato dos Resultados

A seguir, apresentam-se os **quatro modelos de tabelas** que serão preenchidos no relatório final da Etapa 7 com os dados empíricos dos 3 participantes avaliados.

### 4.1 Modelo de Tabela 1: Sumário Quantitativo de Desempenho por Sub-tarefa e Participante

<div align="center">
<p><strong>Tabela 2</strong> — Modelo de Sumário de Desempenho dos 3 Participantes nas Sub-tarefas da TAR-03 no Figma</p>
</div>

| Sub-tarefa (TAR-03) | Participante | Concluiu sem Ajuda? | Tempo Gasto (s) | Meta KLM / Referência | Cliques Incorretos (*Misclicks*) | Avaliação de Eficiência |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **TAR-03.1:** Informar destino *"SIA Trecho 3"* na Home com origem automática via GPS. | **P01**<br>**P02**<br>**P03** | *[Sim/Não]*<br>*[Sim/Não]*<br>*[Sim/Não]* | *[s]*<br>*[s]*<br>*[s]* | ≤ 6,0 s | *[qtd]*<br>*[qtd]*<br>*[qtd]* | *[Satisfatório / Revisar]* |
| **TAR-03.2:** Comparar cartões de rota, verificar parada recomendada e iniciar rota `092.1`. | **P01**<br>**P02**<br>**P03** | *[Sim/Não]*<br>*[Sim/Não]*<br>*[Sim/Não]* | *[s]*<br>*[s]*<br>*[s]* | ≤ 10,0 s | *[qtd]*<br>*[qtd]*<br>*[qtd]* | *[Satisfatório / Revisar]* |
| **TAR-03.3:** Acompanhar ônibus ao vivo no mapa e acionar rota alternativa (`0.380`) ou grade *offline*. | **P01**<br>**P02**<br>**P03** | *[Sim/Não]*<br>*[Sim/Não]*<br>*[Sim/Não]* | *[s]*<br>*[s]*<br>*[s]* | ≤ 12,0 s | *[qtd]*<br>*[qtd]*<br>*[qtd]* | *[Satisfatório / Revisar]* |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026).</em></p>
</div>

---

### 4.2 Modelo de Tabela 2: Consolidação das Respostas da Entrevista Pós-Teste (DECIDE)

<div align="center">
<p><strong>Tabela 3</strong> — Modelo de Consolidação das Respostas às Perguntas Investigativas (`QF01` a `QF06`)</p>
</div>

| ID | Foco Investigado | Pergunta Aplicada aos 3 Participantes | Síntese Qualitativa das Respostas (`P01`, `P02`, `P03`) | Status de Validação |
| :---: | :--- | :--- | :--- | :---: |
| **QF01** | **Home e Origem Automática GPS** | *"Foi imediato perceber que sua localização já estava preenchida pelo GPS e iniciar a busca pelo destino 'SIA'?"* | *[Síntese das respostas dos 3 participantes]* | **[Conforme / Ajustar]** |
| **QF02** | **Comparação de Rotas e Parada Ideal** | *"Os cartões de rota deixaram clara a diferença entre a linha semiexpressa (092.1) e a convencional (0.092), incluindo para qual parada caminhar?"* | *[Síntese das respostas dos 3 participantes]* | **[Conforme / Ajustar]** |
| **QF03** | **Mapa Ao Vivo e Trajeto a Pé** | *"No mapa interativo, ficou clara a linha tracejada de caminhada até a parada e a posição do ônibus em tempo real?"* | *[Síntese das respostas dos 3 participantes]* | **[Conforme / Ajustar]** |
| **QF04** | **Alerta de Retenção e Troca em 1 Toque** | *"Ao surgir o aviso de trânsito severo na EPTG, o botão de trocar para a linha alternativa em 1 toque foi fácil de entender e acionar?"* | *[Síntese das respostas dos 3 participantes]* | **[Conforme / Ajustar]** |
| **QF05** | **Contingência de Queda de GPS** | *"A diferença visual entre o horário em tempo real (verde) e o horário programado offline (cinza) transmitiu segurança quando o GPS caiu?"* | *[Síntese das respostas dos 3 participantes]* | **[Conforme / Ajustar]** |
| **QF06** | **Satisfação e Acabamento Visual** | *"Como você avalia as cores, o tamanho dos botões e o visual geral do protótipo no Figma em relação ao site atual da SEMOB?"* | *[Síntese das respostas dos 3 participantes]* | **[Positivo / Neutro / Negativo]** |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026).</em></p>
</div>

---

### 4.3 Modelo de Tabela 3: Registro e Priorização de Problemas de IHC no Figma

<div align="center">
<p><strong>Tabela 4</strong> — Modelo de Registro e Priorização de Problemas de Usabilidade Detectados no Figma</p>
</div>

| ID Problema | Local / Componente no Figma | Fatores de Usabilidade Prejudicados | Descrição e Justificativa do Problema (Ocorrência em `P01`/`P02`/`P03`) | Severidade (0 a 4) | Ação Corretiva / Reprojeto no Figma |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **PROB-F01** | *[Ex.: Tela 02 — Card da Linha 092.1]* | *[Ex.: Eficiência / Visibilidade]* | *[Descrição do comportamento observado e quantos participantes enfrentaram a dúvida]* | **[0 a 4]** | *[Ajuste específico no componente do Figma]* |
| **PROB-F02** | *[Ex.: Tela 03 — Mapa / Overlay W03]* | *[Ex.: Prevenção de erros / Satisfação]* | *[Descrição do comportamento observado e quantos participantes enfrentaram a dúvida]* | **[0 a 4]** | *[Ajuste específico no componente do Figma]* |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026), baseado em Barbosa & Silva (2010, p. 348, 362).</em></p>
</div>

---

### 4.4 Modelo de Tabela 4: Verificação de Conformidade com o Guia de Estilo do Grupo 05

<div align="center">
<p><strong>Tabela 5</strong> — Modelo de Avaliação de Conformidade com o Guia de Estilo na TAR-03</p>
</div>

| Diretriz do Guia de Estilo | Especificação Aplicada no Figma (TAR-03) | Evidência Observada com os 3 Participantes | Status |
| :--- | :--- | :--- | :---: |
| **Sintaxe de Botões (`[Verbo + Ação]`)** | Rótulos explícitos: `[ 🧭 Iniciar Rota ]`, `[ 🗺️ Trocar para Linha 0.380 Agora ]`, `[ 🕒 Ver Horários Offline ]`. | *[Registro de reconhecimento imediato pelos usuários]* | **[Conforme / Ajustar]** |
| **Alvos de Toque (*Mobile-First*)** | Botões e cards com altura mínima de 48 px e espaçamento de segurança entre opções. | *[Ausência ou presença de toques acidentais]* | **[Conforme / Ajustar]** |
| **Código Semântico de Cores e Ícones** | Verde para telemetria GPS ativa, amarelo/laranja para alerta de retenção na via e cinza para grade estática *offline*. | *[Compreensão dos estados sem depender apenas de texto]* | **[Conforme / Ajustar]** |
| **Redução de Carga Cognitiva (GPS)** | Preenchimento automático da origem e cálculo de distância/tempo a pé (`4 min / 280m`) até a parada recomendada. | *[Validação subjetiva da praticidade pelos 3 usuários]* | **[Conforme / Ajustar]** |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026).</em></p>
</div>

---

## 5. Planejamento do Reprojeto e Ciclo de Iteração no Figma

A partir do preenchimento da Tabela 4 após as sessões de teste, o refinamento do protótipo de alta fidelidade seguirá o ciclo iterativo preconizado por Mayhew (1999) e Krug (2006):

1. **Correção Imediata de Problemas Graves ou Catastróficos (Severidade 3 e 4):** Qualquer barreira que impeça a escolha correta da parada ou a reação ao alerta de retenção viária será corrigida prioritariamente nos *frames* do Figma.
2. **Polimento de Problemas Simples e Cosméticos (Severidade 1 e 2):** Ajustes de contraste, peso tipográfico, microtextos (*microcopy*) e velocidade de transição (*smart animate*) serão aplicados diretamente na biblioteca de componentes do grupo.
3. **Rastreabilidade de Versão:** Cada alteração realizada no Figma será documentada com comparativo *antes vs. depois* no relatório da Etapa 7.

---

## 6. Fundamentação Teórica e Prints de Referência do Livro-Texto

Para atender integralmente às exigências de fundamentação teórica da disciplina, apresentam-se a seguir os *prints* extraídos diretamente do livro-texto oficial — **BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*. Rio de Janeiro: Elsevier, 2010** (e correspondente Capítulo 11 na edição de 2021) — que embasam a consolidação e o relato dos resultados:

### 6.1 Consolidação dos Resultados e Cuidados Analíticos (Seção 9.7.5)
Na Seção 9.7.5 (p. 311–312 / Seção 11.7.5 na ed. 2021), os autores destacam que a consolidação deve responder às questões que motivaram o estudo, distinguir características do grupo de idiossincrasias individuais e evitar generalizações indevidas:

<div align="center">
  <img src="../../../../../assets/prints_referencias/referencia-planejamento-relato-tarefas-1.png" alt="Print da seção de Consolidação e Relato dos Resultados do livro de IHC" width="85%">
  <p><strong>Figura 1</strong> — Diretrizes para consolidação dos resultados e estrutura obrigatória do relatório de avaliação de IHC</p>
  <p><em>Fonte: BARBOSA et al. (2021, Capítulo 11, Seção 11.7.5, p. 279) / BARBOSA & SILVA (2010, Seção 9.7.5, p. 311–312).</em></p>
</div>

### 6.2 Elementos Obrigatórios da Lista de Problemas e Priorização
Na página 361 e 362 (Seção 10.2.3) e na Seção 10.2.1 (Teste de Usabilidade, p. 348), Barbosa & Silva especificam os atributos que devem compor o relato de cada problema encontrado (local, fatores de usabilidade prejudicados, descrição/justificativa, prioridade de correção e sugestões de reprojeto):

<div align="center">
  <img src="../../../../../assets/prints_referencias/referencia-prototipo-papel-relato-362.png" alt="Print da página 362 do livro de IHC com os elementos de relato de problemas e Tabela 10.8" width="85%">
  <p><strong>Figura 2</strong> — Atributos obrigatórios para documentação de problemas de usabilidade e Tabela 10.8 (adequação máxima do Teste de Usabilidade)</p>
  <p><em>Fonte: BARBOSA & SILVA (2010, Capítulo 10, p. 362).</em></p>
</div>

### 6.3 Avaliar, Interpretar e Apresentar os Dados no Framework DECIDE
Na página 313, a etapa **E (*Evaluate*)** do Framework DECIDE estabelece os critérios de confiabilidade, validade interna, validade externa e validade ecológica que orientam o julgamento final dos dados no relatório:

<div align="center">
  <img src="../../../../../assets/prints_referencias/referencia-decide-avaliar-interpretar-apresentar.png" alt="Print da etapa Evaluate do Framework DECIDE no livro de IHC" width="85%">
  <p><strong>Figura 3</strong> — Critérios de confiabilidade e validade na etapa de interpretação e apresentação dos dados do DECIDE</p>
  <p><em>Fonte: BARBOSA & SILVA (2010, Capítulo 9, Seção 9.8, p. 313).</em></p>
</div>

---

## 7. Declaração sobre o Uso de IA Generativa

Em conformidade com o Plano de Ensino da disciplina (SALES, 2026) e o Código de Conduta da SBC, declara-se que a ferramenta Google Gemini foi utilizada exclusivamente para formatação em Markdown. A definição da estrutura do relatório, a modelagem das tabelas de consolidação da TAR-03, a fundamentação em Steve Krug e os critérios de severidade são de autoria e responsabilidade de Lucas Araújo Lima.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. ISBN 978-85-352-1120-7. (Capítulo 9: Planejamento da Avaliação de IHC, Seção 9.7.5, p. 311–312; Capítulo 10: Métodos de Avaliação de IHC, Seção 10.2.1: Teste de Usabilidade, p. 341–348).
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, Seção 11.7.5, p. 263–264; Capítulo 12, Seção 12.2.1, p. 288–291).
* KRUG, Steve. **Don't Make Me Think: A Common Sense Approach to Web Usability**. 1st ed. Berkeley: New Riders, 2000.
* KRUG, Steve. **Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems**. Berkeley: New Riders, 2006.
* MAYHEW, Deborah J. **The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design**. San Francisco: Morgan Kaufmann, 1999.
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* RUBIN, Jeffrey; CHISNELL, Dana. **Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests**. 2nd ed. Indianapolis: Wiley, 2008.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
* SANTA-ROSA, José Guilherme. **Avaliação e Projeto no Design de Interfaces: Teste de Usabilidade**. Capítulo 9, p. 144–175, 2005.

---
**Autor:** [Lucas Araújo Lima](https://github.com/Lucasaraujoszz)  
**Revisor:** [Arthur Mariani](https://github.com/arthur-mariani)

