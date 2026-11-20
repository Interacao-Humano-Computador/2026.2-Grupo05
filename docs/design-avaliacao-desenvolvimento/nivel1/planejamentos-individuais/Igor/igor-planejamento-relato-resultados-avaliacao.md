## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 13/10/2026 | `1.0` | Criação do planejamento do relato dos resultados da avaliação do Storyboard 01 e da Análise de Tarefas (TAR-01). | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | [Gabriel Cardone](https://github.com/gabriellcardone-06) | Google Gemini - usado para formatação markdown da página |

---

# Planejamento do Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-01)

Neste documento, apresenta-se o **Planejamento do Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas** referente à **TAR-01 (Alerta Inteligente de Saída de Casa)**. Trata-se de um planejamento individual desenvolvido para estruturar e padronizar a futura apresentação dos dados qualitativos e quantitativos colhidos durante a avaliação do **Storyboard 01** e dos modelos de **Análise Hierárquica de Tarefas (HTA)** e **Árvores de Tarefas Concorrentes (CTT)**.

A estrutura do relato foi concebida com base nas orientações da literatura de Interação Humano-Computador (Barbosa et al., 2021, Cap. 11, Seção 11.7.5), garantindo que as descobertas, problemas identificados e sugestões de reprojeto sejam apresentados de forma transparente, rastreável e acionável para a equipe de desenvolvimento.

**Artefatos relacionados — fluxo da funcionalidade TAR-01 (Alerta Inteligente de Saída de Casa):**

* **Persona:** [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md)
* **Cenário:** [Cenário 2](../../../../analise-de-requisitos/cenarios/cenario-2-viagem-matutina.md)
* **Análise de tarefas:** [TAR-01](../../../../analise-de-requisitos/analise-de-tarefas/tar-01-alerta-saida.md)
* **Storyboard:** [Storyboard 01](../../storyboards.md#31-storyboard-01-alerta-inteligente-de-saida-de-casa)
* **Nível 1: avaliação do storyboard e da análise de tarefas:** [Planejamento da avaliação](igor-planejamento-avaliacao.md) · Planejamento do relato (*esta página*) · [Relato dos resultados](../../relatos-individuais/igor/relato-resultados-storyboard-tarefas.md)
* **Nível 2: protótipo de papel (baixa fidelidade):** [Planejamento da avaliação](../../../nivel2/planejamentos-individuais/Igor/igor-planejamento-av-prototipo-papel.md) · [Planejamento do relato](../../../nivel2/planejamentos-individuais/Igor/igor-planejamento-relato-prot-papel.md) · [Relato dos resultados](../../../nivel2/relatos-individuais/igor/relato-resultados-prot-papel.md)
* **Nível 3: protótipo de alta fidelidade:** [Planejamento da avaliação](../../../nivel3/planejamentos-individuais/igor/planejamento-av-prot-alta-fidel.md) · [Planejamento do relato](../../../nivel3/planejamentos-individuais/igor/planejamento-relato-prot-alta-fidel.md) · [Relato dos resultados](../../../nivel3/relatos-individuais/igor/relato-resultados-prot-alta-fidel.md)
* **Telas do protótipo de papel:** [telas no planejamento da avaliação](../../../nivel2/planejamentos-individuais/Igor/igor-planejamento-av-prototipo-papel.md#9-telas-do-prototipo-avaliado)
* **Protótipo de alta fidelidade navegável:** [acessar o protótipo](https://www.figma.com/proto/00YEuKWtN4N1rBzpC8V7Gd/prototipo-de-igor?node-id=0-1&t=S9Z2PNsKlHC3LlTt-1)


---

## 1. Objetivos do Relato dos Resultados

O relato dos resultados tem por finalidade consolidar as evidências empíricas coletadas durante as sessões de avaliação formativa com os usuários. Seus objetivos específicos são:

1. **Sintetizar as percepções dos usuários:** Registrar o grau de entendimento e aceitação do [Storyboard 01](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/storyboards/) e da proposta do alerta inteligente.
2. **Mapear divergências na Análise de Tarefas:** Identificar incoerências, lacunas ou passos desnecessários nos modelos [HTA e CTT da TAR-01](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-01-alerta-saida/) quando confrontados com o modelo mental dos participantes.
3. **Classificar e priorizar problemas de IHC:** Tabular todos os problemas observados de acordo com sua gravidade e impacto na usabilidade.
4. **Subsidiar o reprojeto:** Fornecer recomendações concretas de ajustes para orientar a elaboração dos protótipos de média e alta fidelidade nas próximas etapas do projeto.

---

## 2. Estrutura Padronizada do Relatório Final

O relatório de consolidação dos resultados a ser publicado na Wiki do projeto seguirá rigorosamente a seguinte estrutura de tópicos (Barbosa et al., 2021, p. 263–264):

1. **Introdução e Objetivos da Avaliação:** Apresentação do escopo dos artefatos avaliados e das perguntas que motivaram o estudo.
2. **Metodologia Aplicada:** Descrição sintética do método de investigação por entrevista semiestruturada e do protocolo executado.
3. **Caracterização dos Participantes e Avaliadores:** Registro do número de participantes, perfis demográficos, alinhamento com a persona [João Pedro Carvalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/) e identificação dos condutores da sessão.
4. **Sumário dos Dados Coletados:** Apresentação compilada das respostas dadas às perguntas do Framework DECIDE.
5. **Análise Qualitativa e Problemas Encontrados:** Detalhamento das falhas, dúvidas e rupturas de comunicação observadas no Storyboard e nos diagramas HTA/CTT.
6. **Classificação e Priorização dos Problemas:** Tabela padronizada de severidade com a atribuição de prioridades de correção.
7. **Recomendações e Sugestões de Reprojeto:** Lista de melhorias a serem incorporadas aos modelos e aos protótipos futuros.
8. **Conclusão e Próximos Passos:** Fechamento sintético das lições aprendidas.

---

## 3. Metodologia de Análise e Critérios de Severidade

A análise dos dados será qualitativa e interpretativa (Barbosa et al., 2021). As gravações de vídeo/áudio e as anotações do avaliador serão examinadas individualmente (análise intrassujeito) para identificar pontos recorrentes e falhas críticas.

Para classificar o impacto dos problemas identificados na usabilidade e na experiência do usuário, adotar-se-á a **Escala de Severidade de Problemas** adaptada de Nielsen (1994 apud BARBOSA et al., 2021) e Barbosa et al. (2021):

<div align="center">
<p><strong>Tabela 1</strong>: Escala de Severidade de Problemas de Usabilidade/IHC</p>
</div>

| Nível de Severidade | Classificação | Descrição do Impacto na Interação |
| :---: | :--- | :--- |
| **0** | **Sem Importância** | Não afeta a execução da tarefa e não é percebido como problema pelo usuário (apenas sugestão estética). |
| **1** | **Leve** | Causa pequena hesitação ou dúvida momentânea, mas o usuário conclui a tarefa sem necessidade de ajuda. |
| **2** | **Moderado** | Provoca incerteza ou desvio perceptível no fluxo, reduzindo a eficiência, mas permitindo a recuperação. |
| **3** | **Grave** | Dificulta significativamente a execução da tarefa, gerando alto grau de frustração ou risco de erro permanente. |
| **4** | **Catastrófico** | Impede totalmente a conclusão da tarefa (bloqueio do fluxo) ou induz o usuário ao erro irrecuperável. |

<div align="center">
<p><em>Fonte: Adaptado de Nielsen (1994 apud BARBOSA et al., 2021) e Barbosa et al. (2021).</em></p>
</div>

---

## 4. Modelos de Tabelas para Consolidação dos Resultados

Para garantir a consistência dos relatórios, o documento final de resultados utilizará os três modelos de tabelas apresentados a seguir:

### 4.1 Modelo de Tabela: Respostas da Avaliação do Storyboard 01

<div align="center">
<p><strong>Tabela 2</strong>: Consolidação das Respostas sobre o Storyboard 01</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Artefato (Conforme / Ajustar) |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | Clareza Narrativa | *"Com suas palavras, o que acontece nesta história?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q02** | Verossimilhança | *"A situação retratada parece com algo que você já viveu no DF?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q03** | Papel do Sistema | *"Ficou claro como o aplicativo atua enquanto o João Pedro se arruma?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q04** | Reação da Persona | *"A atitude de confiar no alerta e sair imediatamente faz sentido?"* | *[Preencher com o relato do participante]* | **[A preencher]** |
| **Q05** | Engajamento | *"Você ativaria um alerta como esse na sua rotina diária?"* | *[Preencher com o relato do participante]* | **[A preencher]** |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

### 4.2 Modelo de Tabela: Respostas da Avaliação da Análise de Tarefas (TAR-01 - HTA/CTT)

<div align="center">
<p><strong>Tabela 3</strong>: Consolidação das Respostas sobre a Análise de Tarefas (TAR-01)</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Modelo (Validade / Ajustar) |
| :---: | :--- | :--- | :--- | :---: |
| **QT01** | Sequência Lógica | *"Os passos mostrados no diagrama correspondem ao que você faria?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT02** | Entradas/Feedback | *"O aviso sonoro e o tempo padrão de caminhada são adequados?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT03** | Exceções (CTT) | *"A opção de rota alternativa atende em caso de atraso crítico?"* | *[Preencher com a validação do participante]* | **[A preencher]** |
| **QT04** | Simplicidade | *"Você acha que alguma etapa exige muitos passos ou esforço?"* | *[Preencher com a validação do participante]* | **[A preencher]** |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

### 4.3 Modelo de Tabela: Registro e Priorização de Problemas Identificados

<div align="center">
<p><strong>Tabela 4</strong>: Tabela de Registro e Priorização de Problemas de IHC</p>
</div>

| ID Problema | Descrição do Problema Encontrado | Local / Artefato Afetado | Grau de Severidade (0 a 4) | Impacto na Experiência do Usuário | Sugestão de Reprojeto / Ação Corretiva |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **PROB-01** | *[Descrição sucinta da dúvida ou falha de entendimento]* | *[Storyboard 01 / HTA / CTT]* | **[Nível]** | *[Detalhamento de como o problema afetou o participante]* | *[Proposta de melhoria visual ou estrutural]* |
| **PROB-02** | *[Descrição sucinta da dúvida ou falha de entendimento]* | *[Storyboard 01 / HTA / CTT]* | **[Nível]** | *[Detalhamento de como o problema afetou o participante]* | *[Proposta de melhoria visual ou estrutural]* |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

---

## 5. Planejamento do Reprojeto e Ciclo de Iteração

Com base na consolidação dos problemas na Tabela 4, os resultados serão processados através de um ciclo de iteratividade e reprojeto (Barbosa et al., 2021, Cap. 6):

1. **Correções Imediatas (Severidade 3 e 4):** Problemas graves ou catastróficos que alterem o entendimento básico da funcionalidade exigirão o ajuste imediato da redação do Storyboard 01 ou a reestruturação das operações no diagrama HTA e nas tarefas concorrentes do CTT.
2. **Aprimoramentos de Média Fidelidade (Severidade 1 e 2):** Dúvidas menores sobre o formato das notificações ou opções adicionais (ex.: ajuste dinâmico do tempo de caminhada via GPS) serão incorporadas como requisitos na fase de prototipação de telas (wireframes de baixa e média fidelidade).
3. **Registro na Wiki:** Toda modificação decorrente da avaliação será documentada no histórico de versão do artefato correspondente, garantindo a rastreabilidade das decisões de design.

---

## 6. Fotos de Referência

As Figuras 1 a 3 mostram os trechos que fundamentam este artefato, recortados e grifados em amarelo diretamente do livro da disciplina (BARBOSA et al., 2021).

<div id="figura-1" align="center">
<p><strong>Figura 1</strong>: 11.7.4 Interpretação dos dados de cada participante</p>
</div>

![Figura 1: 11.7.4 Interpretação dos dados de cada participante](../../../../assets/prints_referencias/verificacao-v2/livro-interpretacao.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 262).</em></p>
</div>

<div id="figura-2" align="center">
<p><strong>Figura 2</strong>: 11.7.5 Consolidação e relato dos resultados</p>
</div>

![Figura 2: 11.7.5 Consolidação e relato dos resultados](../../../../assets/prints_referencias/verificacao-v2/livro-consolidacao-relato.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 263).</em></p>
</div>

<div id="figura-3" align="center">
<p><strong>Figura 3</strong>: Comparação entre o uso esperado (modelo de tarefas) e o uso observado</p>
</div>

![Figura 3: Comparação entre o uso esperado (modelo de tarefas) e o uso observado](../../../../assets/prints_referencias/verificacao-v2/livro-modelo-esperado.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 262).</em></p>
</div>

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento da Avaliação de IHC, Seção 11.7.5, p. 263–264).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
