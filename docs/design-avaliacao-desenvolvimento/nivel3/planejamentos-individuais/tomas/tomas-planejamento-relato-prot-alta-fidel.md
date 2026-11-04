# Planejamento do Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (TAR-09)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 03/11/2026 | `1.0` | Criação do planejamento do relato dos resultados da avaliação do Protótipo de Alta Fidelidade (Figma) da TAR-09 (Pedido de aumento do limite diário do Vale-Transporte). | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para estruturação do texto e formatação Markdown da página |

---

Neste documento, apresenta-se o **Planejamento do Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-09 (Solicitar Aumento do Limite Diário de Uso do Vale-Transporte)](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md)**. O documento define, antes das sessões, **como** os dados serão registrados, interpretados e apresentados, para que o relato seja padronizado e possa ser comparado com o relato do protótipo de papel e com o dos outros integrantes.

A avaliação correspondente está descrita no [Planejamento da Avaliação do Protótipo de Alta Fidelidade](tomas-planejamento-av-prot-alta-fidel.md). A estrutura segue as etapas de interpretação, consolidação e relato de Barbosa e Silva (2010, p. 310–312) e os dados do teste de usabilidade descritos no mesmo livro (p. 342–343).

---

## 1. Objetivos do Relato dos Resultados

1. **Registrar o desempenho por tarefa e por participante:** informar se P01, P02 e P03 concluíram as tarefas TAR-09.1, TAR-09.2 e TAR-09.3, com ou sem ajuda, em quanto tempo, com quantos erros e quantos pedidos de ajuda.
2. **Responder às perguntas da avaliação:** dizer, para cada pergunta Q01 a Q09, o que foi observado em cada participante e se o critério de aceitação foi atingido.
3. **Documentar os problemas de usabilidade:** registrar cada problema com a tela onde aconteceu, o que foi observado, o impacto, a severidade, quantos participantes o tiveram e a recomendação de correção.
4. **Comparar com o protótipo de papel:** mostrar se o fluxo, que não teve problemas no Nível 2, continua sem problemas no Figma, e se as pendências do papel foram cobertas.
5. **Apresentar as limitações e o plano de reprojeto:** deixar claro até onde os resultados valem e o que muda na próxima versão das telas.

---

## 2. Estrutura Padronizada do Relato Final

O relato publicado na Wiki terá as seções abaixo:

1. **Introdução, objetivos e escopo:** protótipo avaliado (fluxo "Meu Vale-Transporte foi recusado" no Figma, protótipo vertical), tarefa representada (TAR-09), objetivos da etapa D do DECIDE e o que ficou fora da avaliação (câmera, WhatsApp e análise da SEMOB simulados).
2. **Método:** teste de usabilidade com observação de uso, *think aloud* e entrevista pós-teste; versão do protótipo testada (data da última alteração no Figma); dispositivo usado.
3. **Participantes e avaliadores:** Tabela 2.
4. **Desempenho por tarefa:** Tabela 3 (por participante) e Tabela 4 (resumo das três sessões).
5. **Interpretação por participante:** um parágrafo curto para cada participante, com o caminho que seguiu e as principais dificuldades.
6. **Respostas às perguntas da avaliação:** Tabela 5, com as perguntas que ficaram sem resposta.
7. **Problemas de usabilidade encontrados:** Tabela 6.
8. **Comparação com o protótipo de papel:** Tabela 7.
9. **Limitações dos resultados.**
10. **Plano de reprojeto:** Tabela 8.
11. **Conclusão.**

---

## 3. Como os Dados Serão Interpretados

### 3.1 Do registro à evidência

O observador revisa a gravação de cada sessão e marca, com o minuto do vídeo, os momentos em que o participante:

* **hesita** mais de alguns segundos antes de tocar em algo;
* **toca no lugar errado** (área que não leva a lugar nenhum ou leva a outra tela);
* **volta** para a tela anterior sem que a tarefa peça;
* **pede ajuda** ou pergunta o que deve fazer;
* **entende de outro jeito** um texto da tela (por exemplo, achar que "8 de 8" é saldo);
* **comenta ou sugere** algo espontaneamente.

Um problema só é registrado se houver pelo menos uma evidência que o sustente. Cada problema é escrito em três partes separadas: **o que foi observado**, **a possível causa na tela** e **a recomendação**, para não misturar fato com opinião (Barbosa; Silva, 2010, p. 343).

### 3.2 Interpretação por participante e consolidação

1. **Por participante:** para cada um, responde-se Q01 a Q09 com base na ficha e na gravação (Barbosa; Silva, 2010, p. 310).
2. **Entre participantes:** os problemas parecidos são juntados em um só, com a contagem de quantos participantes o tiveram (1, 2 ou 3 de 3). Um problema que aparece em mais de um participante pesa mais na prioridade (Barbosa; Silva, 2010, p. 311–312).
3. **Perguntas sem resposta:** se uma pergunta não puder ser respondida (por exemplo, nenhum participante tentou enviar sem a declaração do RH, então Q06 não foi testada), isso é dito no relato, junto com o motivo.

### 3.3 Severidade e prioridade

<div align="center">
<p><strong>Tabela 1</strong> — Escala de Severidade dos Problemas de Usabilidade</p>
</div>

| Nível | Classificação | Descrição do Impacto | Exemplo no Protótipo da TAR-09 |
| :---: | :--- | :--- | :--- |
| **0** | **Sem importância** | Não atrapalha a tarefa; é só uma sugestão estética. | Participante sugere outra cor para as bolinhas da tela T3. |
| **1** | **Leve** | Causa uma dúvida rápida, mas o participante segue sozinho. | Participante demora a achar o botão "Continuar" na T2. |
| **2** | **Moderado** | Causa um erro ou desvio, mas o participante se recupera sozinho. | Participante entra em "Cartões e recarga" antes de achar "Meu Vale-Transporte foi recusado". |
| **3** | **Grave** | Atrapalha muito a tarefa ou só é superado com ajuda. | Participante não entende o erro de foto ilegível e só segue quando o condutor intervém. |
| **4** | **Catastrófico** | Impede a conclusão da tarefa. | Participante volta do passo 3, perde as fotos já enviadas e desiste do pedido. |

<div align="center">
<p><em>Fonte: Adaptado de Nielsen (1994), com exemplos elaborados por Tomás Rocho (2026).</em></p>
</div>

A **prioridade** (Alta, Média, Baixa) é decidida pela equipe considerando a severidade, quantos participantes tiveram o problema e o custo de corrigir no Figma. Essa regra de prioridade é uma decisão do projeto, e não uma escala do livro.

---

## 4. Modelos de Tabelas para Consolidação dos Resultados

Os campos entre colchetes serão preenchidos depois das sessões.

### 4.1 Participantes e avaliadores

<div align="center">
<p><strong>Tabela 2</strong> — Participantes e Avaliadores</p>
</div>

| Código | Perfil (sem dados pessoais) | Quantos ônibus usa por dia | Uso do celular | Proximidade com a persona Heitor | Data e local da sessão | Gravação autorizada? |
| :---: | :--- | :---: | :--- | :--- | :--- | :---: |
| **P01** | *[Ex.: técnico de manutenção, 40–50 anos]* | *[Qtd]* | *[Ex.: WhatsApp e banco]* | **[Alta / Média / Baixa]** | *[dd/mm/aaaa — local]* | **[Sim / Não]** |
| **P02** | *[A preencher]* | *[Qtd]* | *[A preencher]* | **[Alta / Média / Baixa]** | *[dd/mm/aaaa — local]* | **[Sim / Não]** |
| **P03** | *[A preencher]* | *[Qtd]* | *[A preencher]* | **[Alta / Média / Baixa]** | *[dd/mm/aaaa — local]* | **[Sim / Não]** |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026). Avaliadores: Tomás Rocho (condutor) e Rodrigo Carvalho (observador).</em></p>
</div>

### 4.2 Desempenho por tarefa

<div align="center">
<p><strong>Tabela 3</strong> — Desempenho de Cada Participante nas Tarefas</p>
</div>

| Participante | Tarefa | Conclusão | Tempo | Erros | Pedidos de Ajuda | Dificuldades Observadas | Evidência (fala ou minuto) |
| :---: | :---: | :---: | :---: | :---: | :---: | :--- | :--- |
| **P01** | **TAR-09.1** | **[Sem ajuda / Com ajuda / Não concluiu]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P01** | **TAR-09.2** | **[Sem ajuda / Com ajuda / Não concluiu]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P01** | **TAR-09.3** | **[Sem ajuda / Com ajuda / Não concluiu]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P02** | **TAR-09.1** | **[...]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P02** | **TAR-09.2** | **[...]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P02** | **TAR-09.3** | **[...]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P03** | **TAR-09.1** | **[...]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P03** | **TAR-09.2** | **[...]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |
| **P03** | **TAR-09.3** | **[...]** | *[mm:ss]* | *[Qtd]* | *[Qtd]* | *[A preencher]* | *[A preencher]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

<div align="center">
<p><strong>Tabela 4</strong> — Resumo das Três Sessões por Tarefa</p>
</div>

| Tarefa | Concluíram sem ajuda | Concluíram com ajuda | Não concluíram | Menor e maior tempo | Total de erros | Total de pedidos de ajuda |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **TAR-09.1** | *[x de 3]* | *[x de 3]* | *[x de 3]* | *[mm:ss – mm:ss]* | *[Qtd]* | *[Qtd]* |
| **TAR-09.2** | *[x de 3]* | *[x de 3]* | *[x de 3]* | *[mm:ss – mm:ss]* | *[Qtd]* | *[Qtd]* |
| **TAR-09.3** | *[x de 3]* | *[x de 3]* | *[x de 3]* | *[mm:ss – mm:ss]* | *[Qtd]* | *[Qtd]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026). Os tempos são apenas descritivos; não há meta numérica.</em></p>
</div>

### 4.3 Respostas às perguntas da avaliação

<div align="center">
<p><strong>Tabela 5</strong> — Resultado das Perguntas da Avaliação</p>
</div>

| ID | Pergunta (resumo) | Critério de Aceitação | P01 | P02 | P03 | Resultado Geral |
| :---: | :--- | :--- | :---: | :---: | :---: | :--- |
| **Q01** | Encontra o atalho na página inicial? | Toca no atalho certo sem entrar antes em outro serviço. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q02** | Entende por que o cartão foi recusado? | Explica que passou do limite, e não que está sem saldo. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q03** | Entende que as integrações contam? | Diz que cada ônibus conta, mesmo com integração. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q04** | Preenche a rotina e envia os documentos sem ajuda? | Conclui os passos 1 a 3 sem perguntar o que colocar. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q05** | Recupera-se do erro de foto ilegível? | Toca em "Tirar outra foto" sem ajuda. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q06** | Entende o aviso de documento faltando? | Volta ao passo 3 sem perder os dados. | **[S / P / N / Não testada]** | **[...]** | **[...]** | *[A preencher]* |
| **Q07** | Sabe que o pedido foi recebido e como acompanhar? | Cita o protocolo, o aviso e a consulta. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q08** | Sabe onde está dentro do pedido? | Diz o passo em que está e como voltar. | **[S / P / N]** | **[S / P / N]** | **[S / P / N]** | *[A preencher]* |
| **Q09** | O que achou claro, confuso ou faltando? | Opinião aberta. | *[Resumo]* | *[Resumo]* | *[Resumo]* | *[A preencher]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026). Legenda: S = sim; P = parcial; N = não. Perguntas que não puderem ser respondidas serão listadas logo abaixo da tabela, com o motivo.</em></p>
</div>

### 4.4 Problemas de usabilidade encontrados

<div align="center">
<p><strong>Tabela 6</strong> — Problemas de Usabilidade Encontrados</p>
</div>

| ID | O que foi observado | Tela ou Estado | Tarefa e Pergunta | Possível causa na tela | Impacto no participante | Participantes | Severidade (0–4) | Prioridade | Evidência | Recomendação de correção |
| :---: | :--- | :--- | :---: | :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **PROB-A01** | *[A preencher]* | *[Ex.: T3 — Explicação da recusa]* | *[Ex.: TAR-09.1 / Q02]* | *[A preencher]* | *[A preencher]* | *[x de 3]* | **[0–4]** | **[Alta / Média / Baixa]** | *[P0x, mm:ss]* | *[A preencher]* |
| **PROB-A02** | *[A preencher]* | *[Ex.: E1 — Erro de foto ilegível]* | *[Ex.: TAR-09.2 / Q05]* | *[A preencher]* | *[A preencher]* | *[x de 3]* | **[0–4]** | **[Alta / Média / Baixa]** | *[P0x, mm:ss]* | *[A preencher]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026). O prefixo "A" identifica problemas do protótipo de alta fidelidade e evita confusão com os do protótipo de papel ("P").</em></p>
</div>

### 4.5 Comparação com o protótipo de papel

O [Relato dos Resultados do Protótipo de Papel](../../../nivel2/relatos-individuais/tomas/relato-resultados-prot-papel.md) não registrou problemas de usabilidade, mas deixou quatro pendências (PE-01 a PE-04). Esta tabela mostra se elas foram cobertas na alta fidelidade.

<div align="center">
<p><strong>Tabela 7</strong> — Pendências do Protótipo de Papel Verificadas no Figma</p>
</div>

| Pendência do Nível 2 | O que foi feito no Nível 3 | Situação | Evidência |
| :---: | :--- | :---: | :--- |
| **PE-01** — tempo das tarefas não medido | Cronometragem pelo observador | **[Coberta / Não coberta]** | *[Tabelas 3 e 4]* |
| **PE-02** — estados W4 (documento faltando) e W5 (entregar no posto) não usados | Estados E2 e "Prefiro entregar no posto" mantidos no Figma | **[Coberta / Não testada]** | *[P0x, mm:ss ou "nenhum participante passou pelo estado"]* |
| **PE-03** — sem teste piloto | Piloto em 08/11/2026 | **[Coberta / Não coberta]** | *[Data e ajustes feitos]* |
| **PE-04** — apenas um participante | Três participantes | **[Coberta / Parcial]** | *[Tabela 2]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 5. Limitações dos Resultados

O relato terá uma seção própria de limitações. As que já são conhecidas antes das sessões são:

* **Número de participantes:** três participantes, abaixo da referência de cinco citada por Barbosa e Silva (2010, p. 305). Problemas que só aparecem com menos frequência podem não ter sido encontrados.
* **Simulações:** a câmera, a análise da SEMOB e o aviso do WhatsApp são telas fixas do Figma. O comportamento do participante pode ser diferente com a câmera real ou com a espera real de dias.
* **Dados preenchidos:** o número do cartão e os documentos aparecem preenchidos ao tocar no campo, então o esforço real de digitar e fotografar não é medido.
* **Ambiente:** a sessão é feita sentada, em sala silenciosa, e não na catraca do ônibus, à noite e com pressa, como no Cenário 9.
* **Protótipo vertical:** só o fluxo da TAR-09 funciona. Os resultados não dizem nada sobre os outros serviços do site.

Outras limitações que surgirem durante as sessões (por exemplo, falha de conexão ou participante que já conhecia o serviço) serão acrescentadas.

---

## 6. Plano de Reprojeto

<div align="center">
<p><strong>Tabela 8</strong> — Modelo do Plano de Reprojeto</p>
</div>

| ID Problema | Mudança no Figma | Artefato que também muda | Prioridade | Responsável | Prazo |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **PROB-A01** | *[A preencher]* | *[Ex.: TAR-09, Storyboard 05, Guia de Estilo ou nenhum]* | **[Alta / Média / Baixa]** | Tomás Rocho | *[dd/mm/aaaa]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

Os problemas da Tabela 6 serão tratados assim:

1. **Severidade 3 e 4, ou problema que aparece em 2 ou 3 participantes:** prioridade alta. São corrigidos no Figma antes da apresentação final e, se mudarem o fluxo, também na [TAR-09](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md) e no [Storyboard 05](../../../nivel1/storyboards.md).
2. **Severidade 1 e 2:** viram ajustes de texto, layout ou *feedback* nas telas do Figma.
3. **Severidade 0:** registrados no relato, sem ação obrigatória.
4. **Regra nova para o guia:** se um problema mostrar uma regra que deveria valer para todas as telas (por exemplo, como mostrar um erro de envio de foto), ela é proposta para o [Guia de Estilo](../../../../analise-de-requisitos/guia-de-estilo/introducao.md).
5. **Rastreabilidade:** toda mudança feita por causa da avaliação é registrada no histórico de versão do artefato alterado, com o ID do problema (PROB-Axx) que a motivou.

---

## 7. Localização das Referências nos Livros

* **BARBOSA, S. D. J.; SILVA, B. S. *Interação Humano-Computador*:** Seção 9.7.4 (*Interpretação e consolidação*), p. 310–312; Seção 9.7.5 (*Relato dos resultados*), p. 312; Seção 10.2.1 (*Teste de usabilidade*), p. 342–343; Seção 9.7.2, p. 305 (quantidade de participantes).
* **PREECE, J.; ROGERS, Y.; SHARP, H. *Design de Interação*, Capítulo 8:** Tabela 8.1 e Seção 8.2.5 (*Concessões na prototipação*), p. 266, usadas para as limitações do protótipo vertical e das simulações.

---

## 8. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que o Claude (Anthropic) foi usado para auxiliar na estruturação do texto e na formatação das tabelas em Markdown. A estrutura do relato, os critérios de severidade e prioridade, os exemplos, as limitações e o plano de reprojeto são de responsabilidade do integrante Tomás Rocho.

---

## 9. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier/Campus, 2010. Seções 9.7–9.8, p. 303–313; seção 10.2.1, p. 341–343.
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: além da interação homem-computador**. Porto Alegre: Bookman, 2005. Cap. 8, p. 259–297.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.

---
**Autor:** [Tomás Rocho](https://github.com/TomasRocho)  
**Revisor:** [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa)
