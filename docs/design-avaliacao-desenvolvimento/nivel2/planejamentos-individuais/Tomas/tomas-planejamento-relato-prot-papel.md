## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 29/10/2026 | `1.0` | Criação do planejamento do relato dos resultados da avaliação do Protótipo de Papel da TAR-09 (Pedido de aumento do limite diário do Vale-Transporte). | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para estruturação do texto e formatação Markdown da página |

---

# Planejamento do Relato dos Resultados da Avaliação do Protótipo de Papel (TAR-09)

Neste documento, apresenta-se o **Planejamento do Relato dos Resultados da Avaliação do Protótipo de Papel** referente à **[TAR-09 (Solicitar Aumento do Limite Diário de Uso do Vale-Transporte)](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md)**. O documento define, antes da sessão, **como** os dados serão registrados, analisados e apresentados, para que o relato seja padronizado e possa ser comparado com o dos outros integrantes.

A avaliação correspondente está descrita no [Planejamento da Avaliação do Protótipo de Papel](tomas-planejamento-av-prototipo-papel.md). A estrutura segue Barbosa et al. (2021, Cap. 11, Seção 11.7.5; Cap. 12, Seção 12.2.3).

---

## 1. Objetivos do Relato dos Resultados

1. **Registrar o desempenho em cada tarefa:** informar se o participante concluiu as tarefas TAR-09.1, TAR-09.2 e TAR-09.3, com ou sem ajuda, em quanto tempo e com quais dificuldades.
2. **Documentar os problemas de usabilidade:** registrar cada problema com a tela ou peça afetada, a evidência, o impacto, a severidade, a prioridade e a recomendação de correção.
3. **Separar o que foi corrigido no papel do que fica para depois:** distinguir as alterações simples feitas no próprio protótipo durante a sessão das correções que precisam ser planejadas para o protótipo de alta fidelidade.
4. **Responder às perguntas da avaliação:** dizer, para cada pergunta Q01 a Q07 do planejamento, se o critério de aceitação foi atingido.
5. **Subsidiar o protótipo de alta fidelidade:** transformar os resultados em requisitos para a próxima versão das telas.

---

## 2. Estrutura Padronizada do Relatório Final

O relato publicado na Wiki terá as seções abaixo, iguais às dos demais integrantes:

1. **Introdução e objetivos:** protótipo avaliado (fluxo "Meu Vale-Transporte foi recusado"), tarefa representada (TAR-09) e objetivos da etapa D do DECIDE.
2. **Metodologia:** prototipação em papel com *think aloud* e conversa pós-teste; papel do "computador" (Tomás Rocho) e do observador (Rodrigo Carvalho).
3. **Participante e sessão:** perfil de P-TAR09 e quanto ele se aproxima da persona [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md); data, local, duração real e forma de registro.
4. **Desempenho por tarefa:** Tabela 2.
5. **Respostas às perguntas da avaliação:** Tabela 3.
6. **Problemas de usabilidade encontrados:** Tabela 4.
7. **Alterações no protótipo de papel × correções para a próxima versão:** Tabela 5.
8. **Recomendações para o protótipo de alta fidelidade.**
9. **Conclusão e limitações:** por exemplo, ter sido feita com um único participante.

---

## 3. Metodologia de Análise e Critérios de Severidade

A análise será **qualitativa**. O observador revisa a gravação e a ficha de observação e marca os momentos em que o participante:

* **hesita** mais de alguns segundos antes de tocar em algo;
* **toca no lugar errado** ou volta para a tela anterior;
* **pede ajuda** ou pergunta o que deve fazer;
* **lê em voz alta e entende de outro jeito** um texto da tela (por exemplo, achar que "8 de 8" é saldo);
* **comenta ou sugere** algo espontaneamente.

Cada marcação recebe o minuto da gravação, para servir de **evidência**. Um problema só é registrado se houver uma evidência que o sustente.

Para cada problema, registram-se dois valores diferentes:

* **Severidade (0 a 4):** quanto o problema atrapalha a tarefa, segundo a escala da Tabela 1.
* **Prioridade (Alta, Média, Baixa):** a ordem em que será corrigido, considerando a severidade e o custo da correção. Um problema grave e fácil de corrigir tem prioridade alta; um problema leve e caro de corrigir tem prioridade baixa.

<div align="center">
<p><strong>Tabela 1</strong> — Escala de Severidade dos Problemas de Usabilidade</p>
</div>

| Nível | Classificação | Descrição do Impacto | Exemplo no Protótipo da TAR-09 |
| :---: | :--- | :--- | :--- |
| **0** | **Sem importância** | Não atrapalha a tarefa; é só uma sugestão estética. | Participante sugere trocar a cor das bolinhas da tela T3. |
| **1** | **Leve** | Causa uma dúvida rápida, mas o participante segue sozinho. | Participante demora a achar o botão "Continuar" na tela T2. |
| **2** | **Moderado** | Causa um erro ou desvio, mas o participante se recupera. | Participante toca em "Cartões e recarga" antes de achar "Meu Vale-Transporte foi recusado". |
| **3** | **Grave** | Atrapalha muito a tarefa ou só é superado com ajuda. | Participante entende "8 de 8" como saldo e diz que vai pedir crédito ao RH. |
| **4** | **Catastrófico** | Impede a conclusão da tarefa. | Participante não consegue enviar a declaração do RH e desiste do pedido. |

<div align="center">
<p><em>Fonte: Adaptado de Nielsen (1994) e Barbosa et al. (2021), com exemplos elaborados por Tomás Rocho (2026).</em></p>
</div>

---

## 4. Modelos de Tabelas para Consolidação dos Resultados

Os campos entre colchetes serão preenchidos depois da sessão.

### 4.1 Desempenho por Tarefa

Para cada tarefa, registram-se a **conclusão**, as **dificuldades observadas**, a **evidência** e a **interpretação** do que aconteceu.

<div align="center">
<p><strong>Tabela 2</strong> — Desempenho do Participante nas Tarefas do Protótipo de Papel</p>
</div>

| ID Tarefa | Tarefa | Conclusão | Tempo | Pedidos de Ajuda | Dificuldades Observadas | Evidência (fala ou minuto da gravação) | Interpretação |
| :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| **TAR-09.1** | Descobrir por que o cartão foi recusado (T1–T3). | **[Sem ajuda / Com ajuda / Não concluiu]** | *[mm:ss]* | *[Qtd]* | *[Ex.: procurou primeiro em "Cartões e recarga"]* | *[Trecho da fala ou mm:ss]* | *[Ex.: o atalho não se destaca dos outros serviços]* |
| **TAR-09.2** | Pedir mais passagens por dia: rotina, fotos e declaração (T4–T8). | **[Sem ajuda / Com ajuda / Não concluiu]** | *[mm:ss]* | *[Qtd]* | *[A preencher]* | *[A preencher]* | *[A preencher]* |
| **TAR-09.3** | Conferir se o pedido foi aprovado (T9, W6, W7). | **[Sem ajuda / Com ajuda / Não concluiu]** | *[mm:ss]* | *[Qtd]* | *[A preencher]* | *[A preencher]* | *[A preencher]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 4.2 Respostas às Perguntas da Avaliação

<div align="center">
<p><strong>Tabela 3</strong> — Resultado das Perguntas da Avaliação</p>
</div>

| ID | Pergunta (resumo) | Critério de Aceitação | O que foi observado | Critério Atingido? |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | Encontra o atalho na página inicial? | Toca no atalho certo em até 30 s, sem ajuda. | *[A preencher]* | **[Sim / Parcial / Não]** |
| **Q02** | Entende por que o cartão foi recusado? | Explica que passou do limite, e não que está sem saldo. | *[A preencher]* | **[Sim / Parcial / Não]** |
| **Q03** | Entende que as integrações contam? | Diz que cada ônibus conta, mesmo com integração. | *[A preencher]* | **[Sim / Parcial / Não]** |
| **Q04** | Descreve a rotina sem travar? | Preenche sem perguntar o que colocar. | *[A preencher]* | **[Sim / Parcial / Não]** |
| **Q05** | Entende os documentos e o modelo do RH? | Envia as fotos e explica o uso do modelo. | *[A preencher]* | **[Sim / Parcial / Não]** |
| **Q06** | Recupera-se do erro de foto ilegível? | Tira outra foto sem ajuda. | *[A preencher]* | **[Sim / Parcial / Não]** |
| **Q07** | Sabe o que acontece depois e como acompanhar? | Cita o aviso pelo WhatsApp e a consulta pelo protocolo. | *[A preencher]* | **[Sim / Parcial / Não]** |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 4.3 Registro e Priorização dos Problemas de Usabilidade

<div align="center">
<p><strong>Tabela 4</strong> — Problemas de Usabilidade Encontrados</p>
</div>

| ID | Descrição do Problema | Tela / Peça Afetada | Tarefa e Pergunta | Impacto no Participante | Severidade (0–4) | Prioridade | Evidência | Recomendação de Correção |
| :---: | :--- | :--- | :---: | :--- | :---: | :---: | :--- | :--- |
| **PROB-P01** | *[O que aconteceu]* | *[Ex.: T3 — Explicação da recusa]* | *[Ex.: TAR-09.1 / Q02]* | *[Ex.: achou que estava sem saldo]* | **[0–4]** | **[Alta / Média / Baixa]** | *[Fala ou mm:ss]* | *[Ex.: trocar o título por "Você já usou as 8 passagens que o Vale-Transporte permite por dia"]* |
| **PROB-P02** | *[O que aconteceu]* | *[Ex.: W3 — Erro de foto ilegível]* | *[Ex.: TAR-09.2 / Q06]* | *[A preencher]* | **[0–4]** | **[Alta / Média / Baixa]** | *[Fala ou mm:ss]* | *[A preencher]* |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 4.4 Alterações no Protótipo de Papel × Correções para a Próxima Versão

A prototipação em papel permite corrigir uma tela durante a própria sessão (Barbosa et al., 2021, Seção 12.2.3). Por isso, o relato separa os dois tipos de mudança:

* **Alteração simples no papel:** mudança feita na hora, com caneta ou um novo post-it, como trocar um texto, mudar um botão de lugar ou acrescentar uma explicação curta. Ela é testada logo em seguida, na mesma sessão.
* **Correção para a próxima versão:** mudança que não dá para fazer na hora ou não pôde ser testada, como criar uma tela nova, mudar a ordem dos passos do pedido ou alterar uma regra do fluxo. Ela vira requisito do protótipo de alta fidelidade.

<div align="center">
<p><strong>Tabela 5</strong> — Alterações Feitas no Papel e Correções Planejadas</p>
</div>

| ID Problema | Mudança | Tipo de Mudança | Testada na Sessão? | Resultado Depois da Mudança | Destino |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **PROB-P01** | *[Ex.: título da T3 reescrito à caneta]* | **[Alteração simples no papel / Correção para a próxima versão]** | **[Sim / Não]** | *[Ex.: participante entendeu na segunda leitura]* | **[Resolvido no papel / Requisito do protótipo de alta fidelidade]** |
| **PROB-P02** | *[A preencher]* | **[Alteração simples no papel / Correção para a próxima versão]** | **[Sim / Não]** | *[A preencher]* | **[Resolvido no papel / Requisito do protótipo de alta fidelidade]** |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 5. Planejamento do Reprojeto

Os problemas da Tabela 4 serão tratados assim:

1. **Severidade 3 e 4:** prioridade alta. Se não forem resolvidos no papel, mudam o fluxo ou as telas do protótipo de alta fidelidade e, se necessário, a própria [TAR-09](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md) e o [Storyboard 05](../../../nivel1/storyboards.md).
2. **Severidade 1 e 2:** viram requisitos de texto, layout ou feedback das telas digitais.
3. **Severidade 0:** registrados no relato, sem ação obrigatória.
4. **Rastreabilidade:** toda mudança feita na TAR-09, no storyboard ou no protótipo por causa da avaliação é registrada no histórico de versão do artefato, com o ID do problema (PROB-Pxx) que a motivou.

---

## 6. Localização das Referências no Livro

* **Obra:** BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
* **Localização:** **Capítulo 11 — Seção 11.7.5 (*Consolidação e Relato dos Resultados*), p. 263–264**; e **Capítulo 12 — Seção 12.2.3 (*Prototipação em Papel*), p. 303–306**.

---

## 7. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que o Claude (Anthropic) foi usado para auxiliar na estruturação do texto e na formatação das tabelas em Markdown. A estrutura do relato, os critérios de severidade e prioridade, os exemplos e o planejamento do reprojeto são de responsabilidade do integrante Tomás Rocho.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, p. 245–266; Capítulo 12, Seção 12.2.3, p. 303–306).
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. Porto Alegre: Bookman, 2005.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
* SNYDER, Carolyn. **Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces**. San Francisco: Morgan Kaufmann, 2003.

---
**Autor:** [Tomás Rocho](https://github.com/TomasRocho)  
**Revisor:** [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa)
