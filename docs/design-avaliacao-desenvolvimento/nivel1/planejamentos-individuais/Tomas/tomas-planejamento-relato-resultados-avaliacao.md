## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 13/10/2026 | `1.0` | Criação do planejamento do relato dos resultados da avaliação do Storyboard 05 e da Análise de Tarefas (TAR-03). | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para estruturação do texto e formatação Markdown da página |
| 23/10/2026 | `1.1` | Atualização do planejamento do relato para o novo Storyboard 05 (Pedido de Aumento do Limite Diário do Vale-Transporte) e para a TAR-09: objetivos, exemplos da escala de severidade, modelos de tabela e reprojeto. | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para adaptar o texto ao novo storyboard e à nova tarefa |

---

# Planejamento do Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-09 / Cenário 9)

Neste documento, apresenta-se o **Planejamento do Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas** referente ao **Storyboard 05 (Pedido de Aumento do Limite Diário do Vale-Transporte)** e à **TAR-09 (Solicitar Aumento do Limite Diário de Uso do Vale-Transporte)**. O documento define, antes da sessão, **como** os dados da avaliação serão organizados, analisados e apresentados, para que o relato seja padronizado e possa ser comparado com o dos outros integrantes.

A avaliação correspondente está descrita no [Planejamento da Avaliação do Storyboard e da Análise de Tarefas](tomas-planejamento-avaliacao.md). A sessão está marcada para **21/10/2026**, e o relato será publicado na Etapa 5.

---

## 1. Objetivos do Relato dos Resultados

1. **Sintetizar as percepções do participante:** registrar se P05 entendeu o [Storyboard 05](../../storyboards.md), se achou a história verossímil e se confiaria na explicação da recusa, no envio de documentos pelo celular e no aviso de aprovação.
2. **Mapear divergências na Análise de Tarefas:** identificar passos faltantes, desnecessários ou fora de ordem no [HTA e no CTT da TAR-09](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md), com atenção aos objetivos 1 (entender a recusa), 4 (reunir os documentos) e 6 (aguardar e confirmar o novo limite).
3. **Classificar e priorizar os problemas:** tabelar cada problema observado com a sua gravidade, usando a mesma escala adotada pelo grupo.
4. **Subsidiar o reprojeto:** transformar os problemas em ajustes no storyboard, no modelo de tarefa e em requisitos para o protótipo de papel da Etapa 5.

---

## 2. Estrutura Padronizada do Relatório Final

O relatório de resultados publicado na Wiki seguirá os tópicos abaixo, iguais aos dos demais planejamentos individuais do grupo:

1. **Introdução e objetivos da avaliação:** artefatos avaliados (Storyboard 05 e TAR-09) e objetivos definidos na etapa D do DECIDE.
2. **Metodologia aplicada:** entrevista semiestruturada com apresentação do storyboard e dos diagramas, conforme o roteiro.
3. **Caracterização do participante e dos avaliadores:** perfil de P05 e o quanto ele se aproxima da persona [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md); avaliador (Rodrigo Carvalho) e observador (Tomás Rocho); data, duração real e plataforma.
4. **Sumário dos dados coletados:** respostas resumidas às perguntas Q01–Q05 e QT01–QT05 (Tabelas 2 e 3).
5. **Pontos positivos:** o que o participante reconheceu como útil ou fiel à sua realidade.
6. **Problemas encontrados:** dúvidas, interpretações erradas e diferenças entre o modelo de tarefa e o relato do participante (Tabela 4).
7. **Recomendações de reprojeto:** ajustes no storyboard, no HTA/CTT e requisitos para o protótipo.
8. **Conclusão e próximos passos.**

---

## 3. Metodologia de Análise e Critérios de Severidade

A análise será **qualitativa**. O observador revisa a gravação e as anotações da sessão e marca os trechos em que o participante:

* **hesita ou pede explicação** sobre algum quadro ou passo do diagrama;
* **interpreta de outro jeito** o que o storyboard queria mostrar;
* **descreve uma prática diferente** da modelada na TAR-09 (por exemplo, pedir ao RH que resolva o pedido, em vez de procurar o site da Semob);
* **sugere algo** que não está no storyboard nem no modelo.

Cada trecho marcado vira uma linha na tabela de respostas (Tabelas 2 e 3) ou, se indicar um problema, na tabela de problemas (Tabela 4).

Para classificar os problemas, adota-se a mesma **escala de severidade** usada pelo grupo, adaptada de Nielsen (1994) e Barbosa et al. (2021):

<div align="center">
<p><strong>Tabela 1</strong> — Escala de Severidade de Problemas</p>
</div>

| Nível de Severidade | Classificação | Descrição do Impacto | Exemplo no contexto do Storyboard 05 / TAR-09 |
| :---: | :--- | :--- | :--- |
| **0** | **Sem Importância** | Não afeta o entendimento nem a tarefa; é só uma sugestão estética. | Participante sugere desenhar o uniforme de trabalho e a caixa de ferramentas do Heitor. |
| **1** | **Leve** | Causa uma dúvida rápida, mas o participante entende sozinho. | Participante demora a perceber que o quadro 3 mostra a tela do celular, e não um aviso do validador. |
| **2** | **Moderado** | Causa incerteza ou um desvio no entendimento, mas o participante se recupera. | Participante não entende se o pedido do quadro 4 foi feito pelo site ou levado a um posto. |
| **3** | **Grave** | Dificulta muito o entendimento ou mostra que um passo importante do modelo está errado. | Participante diz que nunca mandaria foto de documentos pelo site sem saber quem vai recebê-los. |
| **4** | **Catastrófico** | Impede o entendimento da proposta ou mostra que a tarefa modelada não corresponde à realidade. | Participante não reconhece a situação e diz que, na prática, quem resolve o limite é sempre o RH da empresa. |

<div align="center">
<p><em>Fonte: Adaptado de Nielsen (1994) e Barbosa et al. (2021), com exemplos elaborados por Tomás Rocho (2026).</em></p>
</div>

---

## 4. Modelos de Tabelas para Consolidação dos Resultados

O relatório final usará os três modelos abaixo. Os campos entre colchetes serão preenchidos depois da sessão.

### 4.1 Modelo de Tabela: Respostas da Avaliação do Storyboard 05

<div align="center">
<p><strong>Tabela 2</strong> — Consolidação das Respostas sobre o Storyboard 05</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Artefato (Conforme / Ajustar) |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | Clareza Narrativa | *"Com suas palavras, o que acontece nesta história?"* | *[Preencher com o relato de P05]* | **[A preencher]** |
| **Q02** | Verossimilhança | *"Você já teve o cartão recusado no ônibus? Sabia que o Vale-Transporte tem um limite de passagens por dia?"* | *[Preencher com o relato de P05]* | **[A preencher]** |
| **Q03** | Atuação do Sistema | *"Nos quadros 2 e 3, o que o site está fazendo pelo Heitor?"* | *[Preencher com o relato de P05]* | **[A preencher]** |
| **Q04** | Confiança no Envio | *"Você mandaria foto dos seus documentos pelo site? Confiaria no protocolo e no aviso pelo WhatsApp?"* | *[Preencher com o relato de P05]* | **[A preencher]** |
| **Q05** | Engajamento | *"Você usaria o site da Semob para isso? O que mudaria na história?"* | *[Preencher com o relato de P05]* | **[A preencher]** |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 4.2 Modelo de Tabela: Respostas da Avaliação da Análise de Tarefas (TAR-09 - HTA/CTT)

<div align="center">
<p><strong>Tabela 3</strong> — Consolidação das Respostas sobre a Análise de Tarefas (TAR-09)</p>
</div>

| ID | Tópico Avaliado | Nó do Modelo Relacionado | Resumo da Resposta do Participante | Avaliação do Modelo (Válido / Ajustar) |
| :---: | :--- | :--- | :--- | :---: |
| **QT01** | Sequência Lógica | HTA, Plano 0 (`1 > 2 > 3 > 4 > 5 > 6`) | *[Preencher com a validação de P05]* | **[A preencher]** |
| **QT02** | Entender a Recusa | HTA 1, 1.1 e 1.2 / CTT "Mostrar acessos usados hoje e o limite" | *[Preencher com a validação de P05]* | **[A preencher]** |
| **QT03** | Documentos Exigidos | HTA 4.2 e 4.4 / CTT "Montar o pedido" | *[Preencher com a validação de P05]* | **[A preencher]** |
| **QT04** | Entrega e Espera | HTA 5 e 6 / CTT "Acompanhar o pedido" | *[Preencher com a validação de P05]* | **[A preencher]** |
| **QT05** | Simplicidade do Fluxo | Tarefa completa (contexto do Cenário 9) | *[Preencher com a validação de P05]* | **[A preencher]** |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 4.3 Modelo de Tabela: Registro e Priorização de Problemas Identificados

<div align="center">
<p><strong>Tabela 4</strong> — Registro e Priorização de Problemas de IHC</p>
</div>

| ID Problema | Descrição do Problema Encontrado | Local / Artefato Afetado | Pergunta de Origem | Grau de Severidade (0 a 4) | Evidência (fala ou momento da gravação) | Sugestão de Reprojeto / Ação Corretiva |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **PROB-01** | *[Descrição sucinta da dúvida, falha de entendimento ou divergência]* | *[Storyboard 05 (quadro) / HTA (nó) / CTT (nó)]* | *[Q0x / QT0x]* | **[Nível]** | *[Trecho da fala de P05 ou minuto da gravação]* | *[Ajuste proposto no artefato ou requisito para o protótipo]* |
| **PROB-02** | *[Descrição sucinta da dúvida, falha de entendimento ou divergência]* | *[Storyboard 05 (quadro) / HTA (nó) / CTT (nó)]* | *[Q0x / QT0x]* | **[Nível]** | *[Trecho da fala de P05 ou minuto da gravação]* | *[Ajuste proposto no artefato ou requisito para o protótipo]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

A coluna **Evidência** garante que todo problema registrado possa ser conferido na gravação, e não dependa só da memória do avaliador.

---

## 5. Planejamento do Reprojeto e Ciclo de Iteração

Os problemas da Tabela 4 serão tratados conforme a gravidade:

1. **Correções imediatas (severidade 3 e 4):** problemas que mostrem que o storyboard não foi entendido ou que a TAR-09 não corresponde à realidade exigem ajuste no próprio artefato antes do protótipo de papel. Exemplos: refazer o quadro 4 do Storyboard 05 para deixar claro que o pedido é feito pelo site, ou incluir no HTA um passo de pedir apoio ao RH antes de procurar a Semob.
2. **Requisitos para o protótipo (severidade 1 e 2):** dúvidas menores, como o texto da explicação da recusa ou a forma de enviar os documentos, viram requisitos das telas do pedido de aumento do limite no protótipo de papel da Etapa 5.
3. **Registro de decisões (severidade 0):** sugestões estéticas são anotadas no relato, sem ação obrigatória.
4. **Rastreabilidade:** toda mudança feita no Storyboard 05 ou na TAR-09 por causa da avaliação é registrada no histórico de versão do artefato, com o ID do problema (PROB-xx) que a motivou.

---

## 6. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que o Claude (Anthropic) foi usado para auxiliar na estruturação do texto, na formatação das tabelas em Markdown e na adaptação deste planejamento ao novo storyboard e à TAR-09. A estrutura do relato, os exemplos da escala de severidade e o planejamento do reprojeto são de responsabilidade do integrante Tomás Rocho.

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. Porto Alegre: Bookman, 2005.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.

---
**Autor:** [Tomás Rocho](https://github.com/TomasRocho)  
**Revisor:** [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa)
