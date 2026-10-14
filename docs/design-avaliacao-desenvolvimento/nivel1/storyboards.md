## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração do uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 11/10/2026 | `1.0` | Criação e estruturação do documento de Storyboards e adição do Storyboard 01 (Alerta Inteligente de Saída). | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | [Gabriel Cardone](https://github.com/gabriellcardone-06) | Google Gemini - usado para formatação Markdown da página |
| 13/10/2026 | `1.2` | Adição do Storyboard 03 (Planejamento de Rota por Origem/Destino e Rastreamento), descrição narrativa acessível e tabela de conformidade. | [Lucas Araújo](https://github.com/Lucasaraujoszz) | [Arthur Mariani](https://github.com/arthur-mariani) | Google Gemini - utilizado apenas para formatação em Markdown |
| 13/10/2026 | `1.3` | Adição do Storyboard 04 (Consulta de Escala de Trabalho e Alertas Operacionais) elaborado por Carlos Costa. | [Carlos Costa](https://github.com/carloshfgit) | [Arthur Mariani](https://github.com/arthur-mariani) | Não utilizada (elaboração autoral manual do integrante) |

---

# Storyboards da Equipe

Neste documento, apresentam-se os **Storyboards** desenvolvidos pelos integrantes do **Grupo 05** para a **Etapa 4** do projeto de Interação Humano-Computador (IHC) aplicado ao sistema de mobilidade da **SEMOB-DF / BRB Mobilidade**.

O *storyboarding* é uma técnica de prototipagem de baixa fidelidade e prototipação conceitual amplamente utilizada em IHC para ilustrar graficamente como uma solução de interface se insere no contexto de vida do usuário (Preece, Rogers & Sharp, 2005; Barbosa et al., 2021). Cada storyboard consiste em uma sequência de quadros em quadrinhos que retrata uma persona vivenciando uma situação real, reagindo a um gatilho de necessidade e utilizando o sistema para alcançar seus objetivos.

---

## 1. Introdução e Metodologia

Conforme o plano de ensino da disciplina, esta entrega exige a elaboração de **7 Storyboards individuais** (exatamente 1 para cada integrante do grupo), garantindo o rastreamento direto entre a análise de necessidades e o reprojeto da solução de IHC.

Cada storyboard elaborado pela equipe atende aos seguintes requisitos metodológicos (Barbosa et al., 2021, Cap. 8):

1. **Relação 1:1 com a Análise de Tarefas:** Cada história desenhada é ancorada a uma tarefa específica modelada nas etapas de HTA e CTT.

2. **Contextualização com Personas e Cenários:** As narrativas utilizam as personas primárias e operacionais e os cenários de problema previamente validados pelo grupo.

3. **Foco na Experiência Humana:** Os quadrinhos priorizam o contexto físico, as motivações, as reações emocionais e o papel proativo da tecnologia, sem se prender a detalhes complexos de botões ou telas individuais.

---

## 2. Matriz de Vínculos: Storyboards ↔ Tarefas e Personas

A Tabela 1 sintetiza a distribuição dos 7 Storyboards do Grupo 05, indicando o autor responsável, a persona retratada, o cenário de problema e o link direto para a respectiva tarefa na Análise de Tarefas (HTA/CTT):

<div align="center">
<p><strong>Tabela 1</strong> — Matriz de Vínculos dos Storyboards da Equipe</p>
</div>

| # | Autor | Título do Storyboard | Persona Associada | Cenário de Uso | Tarefa Vinculada (HTA / CTT) |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **01** | **Igor Dantas Araújo** | *Alerta inteligente de saída de casa* | [João Pedro Carvalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/) | [Cenário 2](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-2-viagem-matutina/) | [TAR-01 (Alerta de Saída)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-01-alerta-saida/) |
| **02** | **Gabriel Cardone** | *Pré-agendamento no Programa DF Acessível* | [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/) | [Cenário 1](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-1-pre-agendamento-df-acessivel/) | [TAR-02 (DF Acessível)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/) |
| **03** | **Lucas Araújo** | *Planejamento de Rota por Origem/Destino* | [Marcos Paulo Vieira](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/marcos-paulo-vieira/) | [Cenário 3](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-3-planejamento-origem-destino/) | [TAR-03 (Origem/Destino)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota/) |
| **04** | **Carlos Costa** | *Consulta de escala e alertas operacionais* | [Valdir Soares](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/valdir-soares/) | [Cenário 5](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-5-consulta-escala/) / [Cenário 6](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-6-alerta-desvio/) | [TAR-04/TAR-05 (Motorista)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/analise-hta-ctt-motorista/) |
| **05** | **Tomas Garcia Rocho** | *Consulta de rotas e desvios para novos endereços* | [Heitor Santos Júnior](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/heitor-santos-junior/) | [Cenário 9](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-9-endereco-novo/) | [TAR-03 (Pesquisa de Rota)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota/) |
| **06** | **Rodrigo Barbosa** | *Rastreamento de ônibus sob chuva no DF no Ponto* | [Mariana Borges Almeida](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/mariana-borges-almeida/) | [Cenário 10](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-10-viagem-ideal/) | [TAR-06 (DF no Ponto)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto/) |
| **07** | **Arthur Mariani** | *Regularização de crédito de Vale-Transporte* | [Maria Eduarda Santos](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/maria-eduarda-santos/) | [Cenário 4](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-4-credito-vale-transporte/) | [TAR-07 (Vale-Transporte)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-07-credito-vale-transporte/) |

<div align="center">
<p><em>Fonte: Igor Dantas araújo (2026).</em></p>
</div>

---

## 3. Storyboards Individuais

---

### 3.1. Storyboard 01: Alerta Inteligente de Saída de Casa

* **Autor:** [Igor Dantas Araújo](https://github.com/IgorDARAUJO)
* **Persona Retratada:** [João Pedro Carvalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/) (Estudante da UnB Gama, 19 anos)
* **Cenário de Uso:** [Cenário 2 — Atraso por Conflito de Horários no App](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-2-viagem-matutina/)
* **Tarefa Ancorada:** [TAR-01 — Configurar e utilizar o alerta inteligente de saída de casa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-01-alerta-saida/)
* **Tempo para confecção:** ~10 minutos.

#### **Ilustração do Storyboard 01**
![Storyboard 01 - Alerta Inteligente de Saída de Casa](../../assets/storyboards/Storyboard-1-Igor-notes.jpg){ width="100%" }
<div align="center">
  <p><strong>Figura 1</strong> — Storyboard 01: Alerta inteligente de saída de casa</p>
  <p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

#### **Tabela de Verificação do Storyboard 01**

<div align="center">
<p><strong>Tabela 2</strong> — Verificação de Conformidade do Storyboard 01</p>
</div>

| Categoria / Critério | Atendimento no Storyboard 01 | Situação |
| :--- | :--- | :---: |
| **1. Personas e Atores** | Apresenta o personagem **João Pedro Carvalho** em traço simples. | **Conforme** |
| **2. Contexto e Ambiente** | Transita do ambiente doméstico (quarto) para a rua e o ponto de ônibus. | **Conforme** |
| **3. Tarefa Retratada** | Ilustra a execução completa da **TAR-01** (Alerta de Saída). | **Conforme** |
| **4. Papel do Sistema** | Exibe a atuação proativa do alarme via monitoramento de GPS. | **Conforme** |
| **5. Estrutura Narrativa** | Possui fluxo claro com Início (Q1), Meio (Q2–Q4) e Fim (Q5). | **Conforme** |

<div align="center">
<p><em>Fonte: Igor Dantas Araújo (2026).</em></p>
</div>

---

### 3.2. Storyboard 02: Pré-agendamento no Programa DF Acessível

* **Autor:** [Gabriel Cardone](https://github.com/gabriellcardone-06)
* **Persona Retratada:** [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/) (Estudante e assistente administrativa, 23 anos, com deficiência temporária de mobilidade)
* **Cenário de Uso:** [Cenário 1 — Pré-agendamento no Programa DF Acessível](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-1-pre-agendamento-df-acessivel/)
* **Tarefa Ancorada:** [TAR-02 — Pré-agendamento no Programa DF Acessível](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/)
* **Tempo para confecção:** ~9 minutos.

#### **Ilustração do Storyboard 02**

<div align="center">
  <img src="../../../assets/storyboards/Storyboard-2-Gabriel.jpeg" alt="Storyboard 02 - Pré-agendamento no Programa DF Acessível" width="100%">
  <p><strong>Figura 2</strong> — Storyboard 02: Pré-agendamento no Programa DF Acessível</p>
  <p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

#### **Tabela de Verificação do Storyboard 02**

<div align="center">
<p><strong>Tabela 3</strong> — Verificação de Conformidade do Storyboard 02</p>
</div>

| Categoria / Critério | Atendimento no Storyboard 02 | Situação |
| :--- | :--- | :---: |
| **1. Personas e Atores** | Apresenta a personagem **Larissa Ferreira Lima** em traço simples, usando cadeira de rodas. | **Conforme** |
| **2. Contexto e Ambiente** | Situa a ação no quarto de Larissa, em casa, onde ela resolve o agendamento pelo celular. | **Conforme** |
| **3. Tarefa Retratada** | Ilustra a execução completa da **TAR-02** (acesso ao site, escolha do posto e escolha do dia). | **Conforme** |
| **4. Papel do Sistema** | Exibe o atalho "Agendar DF Acessível" no site da Semob-DF e o envio do comprovante por e-mail e WhatsApp. | **Conforme** |
| **5. Estrutura Narrativa** | Possui fluxo claro com Início (Q1), Meio (Q2–Q4) e Fim (Q5). | **Conforme** |

<div align="center">
<p><em>Fonte: Gabriel Cardone (2026).</em></p>
</div>

---

### 3.3. Storyboard 03: Planejamento de Rota por Origem e Destino com Monitoramento em Tempo Real

* **Autor:** [Lucas Araújo](https://github.com/Lucasaraujoszz)
* **Persona Retratada:** [Marcos Paulo Vieira](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/marcos-paulo-vieira/) (Assistente de logística e estoque, 31 anos, morador de Samambaia Sul)
* **Cenário de Uso:** [Cenário 3 — Deslocamento com Busca por Destino](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-3-planejamento-origem-destino/)
* **Tarefa Ancorada:** [TAR-03 — Planejamento de Rota por Origem/Destino e Rastreamento](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota/)
* **Tempo para confecção:** ~15 minutos.

#### **Ilustração do Storyboard 03**

<div align="center">
  <img src="../../../assets/storyboards/Storyboard-3-Lucas.jpg" alt="Storyboard 03 - Planejamento de Rota por Origem/Destino e Rastreamento" width="100%">
  <p><strong>Figura 3</strong> — Storyboard 03: Planejamento de rota por Origem/Destino e rastreamento em tempo real</p>
  <p><em>Fonte: Elaborado por Lucas Araújo (2026).</em></p>
</div>

#### **Descrição Narrativa dos Quadros (Acessibilidade e Rastreamento)**

1. **Quadro 1 (Contexto e Problema):** Na parada de ônibus de Samambaia Sul, sob chuva, Marcos percebe que sua linha habitual atrasou e precisa encontrar com urgência uma rota alternativa para não se atrasar no trabalho no SIA (evitando punição de ponto).
2. **Quadro 2 (Acesso ao Novo Portal):** Marcos acessa o portal da SEMOB-DF pelo navegador do smartphone e encontra de imediato a funcionalidade de planejamento de rotas na página inicial, com a mensagem proativa: *"Para onde você vai hoje?"*, comemorando o fato de poder resolver a demanda sem precisar baixar aplicativo sob a chuva.
3. **Quadro 3 (Definição dos Parâmetros):** O sistema preenche automaticamente sua localização atual via GPS (*Samambaia Sul*) e, ao digitar *"SIA"*, a ferramenta sugere instantaneamente o destino *"SIA Trecho 3"*, permitindo acionar o botão *"Encontrar rotas"* (Subtarefas 1.1 e 1.2 da TAR-03).
4. **Quadro 4 (Comparação e Seleção de Itinerário):** O portal exibe os cartões com as linhas disponíveis, tempo previsto e tarifa (ex.: *Linha 0.818 - Semiexpressa em 6 min por R$ 5,50* vs. *Linha 0.394 em 18 min por R$ 6,00*). Marcos seleciona a melhor alternativa para sua necessidade de horário (Subtarefas 2.1 e 2.2 da TAR-03).
5. **Quadro 5 (Rastreamento Georreferenciado):** Marcos visualiza o ônibus se aproximando no mapa em tempo real e confere o tempo estimado de chegada (*ETA: 3 min*), preparando seu cartão de embarque com tranquilidade e previsibilidade (Subtarefas 3.1 e 3.2 da TAR-03).
6. **Quadro 6 (Desfecho e Sucesso):** O ônibus chega pontualmente à parada e Marcos realiza o embarque sem estresse, garantindo a chegada no trabalho no SIA com pontualidade e segurança.

#### **Tabela de Verificação do Storyboard 03**

<div align="center">
<p><strong>Tabela 4</strong> — Verificação de Conformidade do Storyboard 03</p>
</div>

| Categoria / Critério | Atendimento no Storyboard 03 | Situação |
| :--- | :--- | :---: |
| **1. Personas e Atores** | Apresenta a persona primária **Marcos Paulo Vieira** no ponto de ônibus com sua mochila. | **Conforme** |
| **2. Contexto e Ambiente** | Retrata fielmente a parada de Samambaia Sul sob chuva, a urgência de horário e o uso do celular em pé. | **Conforme** |
| **3. Tarefa Retratada** | Ilustra a execução completa da **TAR-03** (informar origem/destino, selecionar linha, acompanhar no mapa e embarcar). | **Conforme** |
| **4. Papel do Sistema** | Demonstra a busca direta sem exigência de código da linha, sem redirecionamento para app e mapa em tempo real. | **Conforme** |
| **5. Estrutura Narrativa** | Apresenta sequência com início (Q1), meio e interação (Q2 a Q5) e desfecho bem-sucedido (Q6). | **Conforme** |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo (2026).</em></p>
</div>

---

### 3.4. Storyboard 04: Consulta de Escala e Alertas Operacionais

* **Autor:** [Carlos Costa](https://github.com/carloshfgit)
* **Persona Retratada:** [Valdir Soares](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/valdir-soares/) (Motorista Profissional de Ônibus Urbano, 48 anos)
* **Cenário de Uso:** [Cenário 5 — Consulta de Escala de Trabalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-5-consulta-escala/) e [Cenário 6 — Alerta Emergencial de Desvio](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-6-alerta-desvio/)
* **Tarefa Ancorada:** [TAR-04/TAR-05 — Análise de Tarefas do Motorista](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/analise-hta-ctt-motorista/)
* **Tempo para confecção:** ~10 minutos.

#### **Ilustração do Storyboard 04**

<div align="center">
  <img src="../../../assets/storyboards/Storyboard-4-Carlos.png" alt="Storyboard 04 - Consulta de Escala e Alertas Operacionais" width="100%">
  <p><strong>Figura 4</strong> — Storyboard 04: Consulta de escala e alertas operacionais</p>
  <p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

#### **Descrição Narrativa dos Quadros do Storyboard 04**

* **Quadro 1 (Início — Contexto e Necessidade):** Às 5h da manhã, na garagem da empresa concessionária antes de assumir o veículo, Valdir Soares precisa conferir sua escala de trabalho oficial do dia.
* **Quadro 2 (Ação — Consulta no Aplicativo Móvel):** Valdir pega seu smartphone, abre o aplicativo da SEMOB e digita a linha escalada (`0.509`) no campo de consulta.
* **Quadro 3 (Feedback — Confirmação e Segurança Operacional):** O aplicativo da SEMOB confirma a grade horária homologada (`5:00`, `6:00`, `7:00`). Valdir comemora aliviado ao verificar que as informações estão sincronizadas com a garagem: *"Tabela certa!"*.
* **Quadro 4 (Contingência — Notificação Proativa de Alertas e Bloqueios):** Durante sua rotina, o aplicativo emite alertas operacionais em tempo real sobre bloqueios viários e contingências na estrada (`SEMOB: Bloqueio!`).
* **Quadro 5 (Fim — Condução Segura e Desfecho Positivo):** Munido de informações confiáveis e avisos tempestivos, Valdir segue sua viagem tranquilo, sem surpresas desagradáveis ou atritos operacionais, comemorando com um gesto positivo.

#### **Tabela de Verificação do Storyboard 04**

<div align="center">
<p><strong>Tabela 5</strong> — Verificação de Conformidade do Storyboard 04</p>
</div>

| Categoria / Critério | Atendimento no Storyboard 04 | Situação |
| :--- | :--- | :---: |
| **1. Personas e Atores** | Apresenta a persona **Valdir Soares ("Seu Valdir")**, motorista rodoviário de 48 anos, em traço simples e expressivo. | **Conforme** |
| **2. Contexto e Ambiente** | Situa a narrativa na garagem nas primeiras horas da manhã (5h) e durante a condução no itinerário da linha. | **Conforme** |
| **3. Tarefa Retratada** | Retrata a execução completa da consulta de escala homologada e recepção de alertas operacionais viários (**TAR-04/TAR-05**). | **Conforme** |
| **4. Papel do Sistema** | Demonstra o aplicativo da SEMOB permitindo consulta da linha 0.509, exibindo grade de horários e alertando sobre bloqueios. | **Conforme** |
| **5. Estrutura Narrativa** | Apresenta estrutura clássica com Início contextual (Q1), Ação e Feedback (Q2–Q4) e Desfecho positivo (Q5). | **Conforme** |

<div align="center">
<p><em>Fonte: Carlos Costa (2026).</em></p>
</div>

---

### 3.5. Storyboard 05: Consulta de Rotas e Desvios para Novos Endereços

* **Autor:** [Tomas Garcia Rocho](https://github.com/TomasRocho)
* **Persona Retratada:** [Heitor Santos Júnior](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/heitor-santos-junior/)
* **Cenário de Uso:** [Cenário 9 — Navegação para Endereço Novo com Desvio](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-9-endereco-novo/)
* **Tarefa Ancorada:** [TAR-03 — Pesquisa e Seleção de Itinerário](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota/)

*(Esta seção será preenchida com a ilustração e descrição detalhada do Storyboard 05 elaborado pelo integrante Tomas Garcia Rocho).*

---

### 3.6. Storyboard 06: Rastreamento em Tempo Real no DF no Ponto

* **Autor:** [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa)
* **Persona Retratada:** [Mariana Borges Almeida](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/mariana-borges-almeida/)
* **Cenário de Uso:** [Cenário 10 — Viagem sob Chuva e Monitoramento em Tempo Real](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-10-viagem-ideal/)
* **Tarefa Ancorada:** [TAR-06 — Consulta de Ônibus no DF no Ponto](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto/)

*(Esta seção será preenchida com a ilustração e descrição detalhada do Storyboard 06 elaborado pelo integrante Rodrigo Barbosa).*

---

### 3.7. Storyboard 07: Regularização de Crédito de Vale-Transporte

* **Autor:** [Arthur Mariani](https://github.com/arthur-mariani)
* **Persona Retratada:** [Maria Eduarda Santos](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/maria-eduarda-santos/)
* **Cenário de Uso:** [Cenário 4 — Resolução de Falha de Crédito de Vale-Transporte](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-4-credito-vale-transporte/)
* **Tarefa Ancorada:** [TAR-07 — Consulta e Regularização de Crédito](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-07-credito-vale-transporte/)

#### **Ilustração do Storyboard 07**

<div align="center">
  <img src="../../../assets/storyboards/Storyboard-7-Arthur.png" alt="Storyboard 07 - Regularização de Crédito de Vale-Transporte" width="100%">
  <p><strong>Figura 7</strong> — Storyboard 07: Regularização de Crédito de Vale-Transporte</p>
  <p><em>Fonte: Elaborado por Arthur Mariani (2026).</em></p>
</div>

#### **Tabela de Verificação do Storyboard 07**

<div align="center">
<p><strong>Tabela 8</strong> — Verificação de Conformidade do Storyboard 07</p>
</div>

| Categoria / Critério | Atendimento no Storyboard 07 | Situação |
| :--- | :--- | :---: |
| **1. Personas e Atores** | Apresenta a personagem **Maria Eduarda Santos** em traço simples durante a busca pela regularização do Vale-Transporte. | **Conforme** |
| **2. Contexto e Ambiente** | Situa a ação em Samambaia Sul, às 07h08, durante o deslocamento da personagem e a tentativa de utilizar o Vale-Transporte no ônibus. | **Conforme** |
| **3. Tarefa Retratada** | Representa a **TAR-07**, desde a identificação do crédito indisponível até a compreensão da situação, do responsável e do próximo passo necessário. | **Conforme** |
| **4. Papel do Sistema** | Exibe informações sobre o estado do crédito, o encaminhamento ao BRB Mobilidade, os locais mais próximos e os horários disponíveis. | **Conforme** |
| **5. Estrutura Narrativa** | Possui fluxo claro com início (Q1–Q2), desenvolvimento da orientação (Q3–Q7) e desfecho positivo (Q8). | **Conforme** |

<div align="center">
<p><em>Fonte: Arthur Mariani (2026).</em></p>
</div>

---

## 4. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 8: Organização do Espaço de Problema — Storyboards e Cenários, p. 158–162).
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. São Paulo: Editora Érica, 2005. (Capítulo 8: Design, Prototipação e Construção).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
```
