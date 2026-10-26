## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 20/10/2026 | `1.0` | Criação do planejamento do relato dos resultados da avaliação do Storyboard 02 e da Análise de Tarefas (TAR-02). | [Gabriel Cardone](https://github.com/gabriellcardone-06) | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | Claude (Anthropic) - usado para estruturação do texto, com base no modelo do planejamento do Storyboard 01, e formatação Markdown da página |

---

# Planejamento do Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-02)

Neste documento, apresenta-se o **Planejamento do Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas** referente à **TAR-02 (Pré-agendamento no Programa DF Acessível)**. Trata-se de um planejamento individual desenvolvido para estruturar e padronizar a futura apresentação dos dados qualitativos colhidos durante a avaliação do **Storyboard 02** e dos modelos de **Análise Hierárquica de Tarefas (HTA)** e **Árvores de Tarefas Concorrentes (CTT)**.

A estrutura do relato foi concebida com base nas orientações da literatura de Interação Humano-Computador (Barbosa et al., 2021, Cap. 11, Seção 11.7.5), garantindo que as descobertas, problemas identificados e sugestões de reprojeto sejam apresentados de forma transparente, rastreável e acionável para a equipe de desenvolvimento. As perguntas consolidadas aqui são as do [Planejamento da Avaliação](gabriel-planejamento-avaliacao.md).

---

## 1. Objetivos do Relato dos Resultados

O relato dos resultados tem por finalidade consolidar as evidências empíricas coletadas durante a sessão de avaliação formativa com o usuário. Seus objetivos específicos são:

1. **Sintetizar as percepções do usuário:** Registrar o grau de entendimento e aceitação do [Storyboard 02](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/nivel1/storyboards/#32-storyboard-02-pre-agendamento-no-programa-df-acessivel) e da proposta de um caminho direto para o pré-agendamento no Programa DF Acessível.
2. **Mapear divergências na Análise de Tarefas:** Identificar incoerências, lacunas ou passos desnecessários nos modelos [HTA e CTT da TAR-02](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/) quando confrontados com o modelo mental do participante, incluindo a comparação entre o caminho atual (três portais) e o atalho retratado no storyboard.
3. **Classificar e priorizar problemas de IHC:** Tabular todos os problemas observados de acordo com sua gravidade e impacto na usabilidade e na acessibilidade.
4. **Subsidiar o reprojeto:** Fornecer recomendações concretas de ajustes para orientar a elaboração dos protótipos de média e alta fidelidade nas próximas etapas do projeto.

---

## 2. Estrutura Padronizada do Relatório Final

O relatório de consolidação dos resultados a ser publicado na Wiki do projeto seguirá a seguinte estrutura de tópicos (Barbosa et al., 2021, p. 263–264):

1. **Introdução e Objetivos da Avaliação:** Apresentação do escopo dos artefatos avaliados e das perguntas que motivaram o estudo.
2. **Metodologia Aplicada:** Descrição sintética do método de investigação por entrevista semiestruturada e do protocolo executado, incluindo data, canal, duração real e papéis (condução por Igor Dantas Araújo e observação por Gabriel Cardone).
3. **Caracterização dos Participantes e Avaliadores:** Registro do número de participantes (P02), perfil geral sem dados identificáveis, alinhamento com a persona [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/) e identificação dos condutores da sessão.
4. **Sumário dos Dados Coletados:** Apresentação compilada das respostas dadas às perguntas do Framework DECIDE (Tabelas 2 e 3 deste planejamento).
5. **Análise Qualitativa e Problemas Encontrados:** Detalhamento das falhas, dúvidas e rupturas de comunicação observadas no Storyboard e nos diagramas HTA/CTT.
6. **Classificação e Priorização dos Problemas:** Tabela padronizada de severidade com a atribuição de prioridades de correção.
7. **Recomendações e Sugestões de Reprojeto:** Lista de melhorias a serem incorporadas aos modelos e aos protótipos futuros.
8. **Conclusão e Próximos Passos:** Fechamento sintético das lições aprendidas e limitações do estudo.

---

## 3. Metodologia de Análise e Critérios de Severidade

A análise dos dados será qualitativa e interpretativa (Barbosa et al., 2021). Como há um único participante, os resultados serão apresentados como evidências exploratórias sobre os artefatos, sem generalização estatística, e essa limitação será registrada na conclusão do relato. A gravação de vídeo/áudio e as anotações do observador serão examinadas (análise intrassujeito) para identificar pontos recorrentes, hesitações e falhas críticas.

Cada resposta será classificada como **Conforme** (o artefato foi compreendido e aceito sem ressalvas) ou **Ajustar** (houve dúvida, discordância ou sugestão que exige alteração). Respostas classificadas como **Ajustar** devem originar ao menos um registro na tabela de problemas.

Para classificar o impacto dos problemas identificados na usabilidade e na experiência do usuário, adotar-se-á a **Escala de Severidade de Problemas** adaptada de Nielsen (1994) e Barbosa et al. (2021):

<div align="center">
<p><strong>Tabela 1</strong> — Escala de Severidade de Problemas de Usabilidade/IHC</p>
</div>

| Nível de Severidade | Classificação | Descrição do Impacto na Interação |
| :---: | :--- | :--- |
| **0** | **Sem Importância** | Não afeta a execução da tarefa e não é percebido como problema pelo usuário (apenas sugestão estética). |
| **1** | **Leve** | Causa pequena hesitação ou dúvida momentânea, mas o usuário conclui a tarefa sem necessidade de ajuda. |
| **2** | **Moderado** | Provoca incerteza ou desvio perceptível no fluxo, reduzindo a eficiência, mas permitindo a recuperação. |
| **3** | **Grave** | Dificulta significativamente a execução da tarefa, gerando alto grau de frustração ou risco de erro permanente. |
| **4** | **Catastrófico** | Impede totalmente a conclusão da tarefa (bloqueio do fluxo) ou induz o usuário ao erro irrecuperável. |

<div align="center">
<p><em>Fonte: Adaptado de Nielsen (1994) e Barbosa et al. (2021).</em></p>
</div>

Os problemas também serão relacionados à análise de risco (P x C) já feita no HTA da TAR-02, para verificar se a avaliação com o usuário **confirma ou contradiz** a criticidade prevista pela equipe (por exemplo, a operação 1.2, "Faça aqui o seu pedido – Participe", classificada como crítica, e a operação 3.2.1, "Selecionar dia com vaga", classificada como de risco alto).

---

## 4. Modelos de Tabelas para Consolidação dos Resultados

Para garantir a consistência dos relatórios, o documento final de resultados utilizará os três modelos de tabelas apresentados a seguir.

### 4.1 Modelo de Tabela: Respostas da Avaliação do Storyboard 02

<div align="center">
<p><strong>Tabela 2</strong> — Consolidação das Respostas sobre o Storyboard 02</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Artefato (Conforme / Ajustar) |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | Clareza Narrativa | *"Com suas palavras, o que acontece nesta história?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q02** | Verossimilhança | *"A situação da Larissa é parecida com algo que você ou alguém que você conhece já viveu?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q03** | Papel do Sistema | *"Ficou claro o que o site faz em cada quadro?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q04** | Escolha do Posto e da Data | *"A ordem e os critérios de escolha do posto e do dia fazem sentido? O que mais gostaria de saber?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q05** | Reação da Persona e Confiança | *"O comprovante por e-mail e WhatsApp faria você sentir que o transporte está garantido?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q06** | Engajamento e Melhorias | *"Você usaria um caminho como esse? O que mudaria na história?"* | *[Preencher com o relato do participante]* | **[A preencher]** |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

### 4.2 Modelo de Tabela: Respostas da Avaliação da Análise de Tarefas (TAR-02 - HTA/CTT)

<div align="center">
<p><strong>Tabela 3</strong> — Consolidação das Respostas sobre a Análise de Tarefas (TAR-02)</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Modelo (Validade / Ajustar) |
| :---: | :--- | :--- | :--- | :---: |
| **QT01** | Sequência Lógica | *"Os passos mostrados no diagrama correspondem ao que você faria? Falta ou sobra algum passo?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT02** | Caminho até o Serviço | *"Você esperaria encontrar o agendamento pelo caminho SEMOB-DF, Participa DF e Na Hora? Onde procuraria primeiro?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT03** | Entradas/Feedback | *"As respostas do sistema em cada passo seriam suficientes para saber que está no caminho certo?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT04** | Concorrência (CTT) | *"Conferir a agenda pessoal e a do acompanhante antes de escolher o dia é algo que você faria? Quando?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT05** | Exceções (CTT) | *"Se o posto não tiver vagas, voltar e trocar de local atende à sua necessidade?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT06** | Tempo de Sessão | *"Como você reagiria se a sessão encerrasse por inatividade e fosse preciso recomeçar?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT07** | Simplicidade | *"Alguma etapa exige muitos passos ou seria difícil de fazer pelo celular?"* | *[Preencher com a validação do participante]* | **[A preencher]** |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

### 4.3 Modelo de Tabela: Registro e Priorização de Problemas Identificados

<div align="center">
<p><strong>Tabela 4</strong> — Tabela de Registro e Priorização de Problemas de IHC</p>
</div>

| ID Problema | Descrição do Problema Encontrado | Local / Artefato Afetado | Grau de Severidade (0 a 4) | Impacto na Experiência do Usuário | Sugestão de Reprojeto / Ação Corretiva |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **PROB-01** | *[Descrição sucinta da dúvida ou falha de entendimento]* | *[Storyboard 02 / HTA / CTT]* | **[Nível]** | *[Detalhamento de como o problema afetou o participante]* | *[Proposta de melhoria visual ou estrutural]* |
| **PROB-02** | *[Descrição sucinta da dúvida ou falha de entendimento]* | *[Storyboard 02 / HTA / CTT]* | **[Nível]** | *[Detalhamento de como o problema afetou o participante]* | *[Proposta de melhoria visual ou estrutural]* |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 5. Planejamento do Reprojeto e Ciclo de Iteração

Com base na consolidação dos problemas na Tabela 4, os resultados serão processados através de um ciclo de iteratividade e reprojeto (Barbosa et al., 2021, Cap. 6):

1. **Correções Imediatas (Severidade 3 e 4):** Problemas graves ou catastróficos que alterem o entendimento básico do fluxo exigirão o ajuste imediato do Storyboard 02 (por exemplo, incluir o quadro do pré-agendamento, do posto sem vagas ou do prazo da sessão) ou a reestruturação das operações no diagrama HTA e nas tarefas do CTT.
2. **Aprimoramentos de Média Fidelidade (Severidade 1 e 2):** Dúvidas menores, como as informações exibidas junto aos postos (endereço, recursos de acessibilidade, próxima data disponível) e o conteúdo do comprovante, serão incorporadas como requisitos na fase de prototipação de telas (wireframes de baixa e média fidelidade).
3. **Revisão da Persona e do Cenário:** Se o participante apontar necessidades que a persona [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/) ou o [Cenário 1](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-1-pre-agendamento-df-acessivel/) não contemplam, os documentos correspondentes serão atualizados.
4. **Registro na Wiki:** Toda modificação decorrente da avaliação será documentada no histórico de versão do artefato correspondente, garantindo a rastreabilidade das decisões de design.

---

## 6. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa (Claude, da Anthropic) foram empregadas para auxílio na estruturação do texto em markdown e correção de eventuais erros ortográficos.

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento da Avaliação de IHC, Seção 11.7.5, p. 263–264).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.

---