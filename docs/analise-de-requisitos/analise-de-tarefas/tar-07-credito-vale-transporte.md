## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 05/10/2026 | `1.0` | Elaboração da análise de tarefas (HTA e CTT) para o problema de crédito de Vale-Transporte não disponível no cartão. | [Arthur Mariani](https://github.com/arthur-mariani) | [Carlos Costa](https://github.com/carloshfgit) | Não declarado pelo autor |
| 19/11/2026 | `1.1` | Padronização da estrutura (histórico no topo, conteúdo, fotos de referência e referências ao final); declaração de IA levada para o histórico; retirada das referências que não são o livro da disciplina nem material do professor; inclusão de fotos de referência grifadas. Redesenho dos diagramas HTA/CTT na notação do livro da disciplina (BARBOSA et al., 2021, pp. 165–174). Inclusão do bloco de artefatos relacionados (persona, cenário, análise de tarefas, storyboard, planejamentos, relatos e protótipos da funcionalidade). | [Gabriel Melo](https://github.com/gabriellcardone-06) | Pendente de revisão | Claude (Anthropic) — apoio na padronização da estrutura do artefato, na revisão das referências e na formatação em Markdown; apoio no redesenho dos diagramas na notação do livro.; apoio na inclusão dos links entre artefatos |

!!! warning "Observação para correção manual"
    A coluna de declaração de IA foi preenchida com *Não declarado pelo autor* nas versões em que o artefato original não informava o uso de IA. O autor de cada versão deve confirmar se usou IA (somente Claude ou Google Gemini) e completar a célula.

---

# TAR-07: Resolver indisponibilidade de crédito de Vale-Transporte

## 1. Introdução

Este documento analisa a tarefa de obter orientação para resolver a indisponibilidade de crédito de Vale-Transporte no cartão. A modelagem combina HTA e CTT para representar objetivos, operações, problemas e relações temporais entre a passageira, os canais institucionais e o empregador; os resultados são tratados como hipóteses que ainda exigem validação com as partes interessadas.

**Artefatos relacionados — fluxo da funcionalidade TAR-07 (Regularização de Crédito de Vale-Transporte):**

* **Persona:** [Maria Eduarda Santos](../personas/maria-eduarda-santos.md)
* **Cenário:** [Cenário 4](../cenarios/cenario-4-credito-vale-transporte.md)
* **Análise de tarefas:** TAR-07 (*esta página*)
* **Storyboard:** [Storyboard 07](../../design-avaliacao-desenvolvimento/nivel1/storyboards.md#37-storyboard-07-regularizacao-de-credito-de-vale-transporte)
* **Nível 1 — avaliação do storyboard e da análise de tarefas:** [Planejamento da avaliação](../../design-avaliacao-desenvolvimento/nivel1/planejamentos-individuais/Arthur/arthur-planejamento-avaliacao.md) · [Planejamento do relato](../../design-avaliacao-desenvolvimento/nivel1/planejamentos-individuais/Arthur/planejamento-relato-analise-tarefas.md) · Relato dos resultados (*não disponível — pendente de correção manual*)
* **Nível 2 — protótipo de papel (baixa fidelidade):** [Planejamento da avaliação](../../design-avaliacao-desenvolvimento/nivel2/planejamentos-individuais/Arthur/arthur-planejamento-avaliacao-prototipo-papel.md) · [Planejamento do relato](../../design-avaliacao-desenvolvimento/nivel2/planejamentos-individuais/Arthur/arthur-planejamento-relato-prototipo-papel.md) · [Relato dos resultados](../../design-avaliacao-desenvolvimento/nivel2/relatos-individuais/arthur/relato-resultados-prototipo-papel.md)
* **Nível 3 — protótipo de alta fidelidade:** [Planejamento da avaliação](../../design-avaliacao-desenvolvimento/nivel3/planejamentos-individuais/Arthur/arthur-planejamento-avaliacao-prototipo-alta-fidelidade.md) · [Planejamento do relato](../../design-avaliacao-desenvolvimento/nivel3/planejamentos-individuais/Arthur/arthur-planejamento-relato-prototipo-alta-fidelidade.md) · [Relato dos resultados](../../design-avaliacao-desenvolvimento/nivel3/relatos-individuais/arthur/relato-resultados-prot-alta-fidel.md)
* **Telas do protótipo de papel:** [telas no planejamento da avaliação](../../design-avaliacao-desenvolvimento/nivel2/planejamentos-individuais/Arthur/arthur-planejamento-avaliacao-prototipo-papel.md#9-telas-do-prototipo-avaliado)
* **Protótipo de alta fidelidade navegável:** [acessar o protótipo](https://arthur-mariani.github.io/PAF-IHC/credito/)


## 2. Caracterização da Tarefa

* **Título da Tarefa:** Resolver a indisponibilidade de crédito de Vale-Transporte no cartão.
* **Perfil do Participante:** Usuária primária / passageira trabalhadora ([Maria Eduarda Santos](../personas/maria-eduarda-santos.md)).
* **Cenário de origem:** [Cenário 4 — Crédito de Vale-Transporte não disponível no cartão](../cenarios/cenario-4-credito-vale-transporte.md).
* **Responsável pela Elaboração:** [Arthur Mariani](https://github.com/arthur-mariani).
* **Data da Realização:** 05/10/2026.
* **Sistema e serviços analisados:** portal da SEMOB-DF, canais do BRB Mobilidade e comunicação com o RH do empregador.
* **Objetivo da tarefa (estado final):** Maria Eduarda sabe se o crédito foi enviado, processado e disponibilizado no cartão; conhece o responsável e o próximo passo para poder utilizá-lo, sem comprometer o deslocamento ao trabalho.
* **Objetivo de experiência:** não se sentir culpada, perdida ou constrangida ao receber a mensagem de saldo insuficiente.
* **Escopo:** a análise cobre a busca e a compreensão da orientação para resolver o problema. Não pressupõe acesso da SEMOB ou do BRB aos dados do empregador, nem afirma qual é o procedimento operacional correto para todos os cartões.

> **Limitação declarada.** Conforme Barbosa et al. (2021, pp. 163–167), a análise de tarefas é uma simulação do trabalho real e deve ser validada com as partes interessadas. Esta análise parte do cenário de problema e de documentação pública; portanto, os passos, problemas e recomendações são **hipóteses a validar** com usuárias, RH, SEMOB-DF e BRB Mobilidade.

---

## 3. Análise Hierárquica de Tarefas (HTA)

Segundo Barbosa et al. (2021, pp. 164–166), a HTA começa pelos objetivos das pessoas e os decompõe em subobjetivos. Os planos registram a relação entre subobjetivos: `1>2` indica sequência, `1/2` indica seleção conforme a circunstância e `1+2` indica atividades paralelas. No nível mais baixo, os subobjetivos são operações.

### 3.1 Diagrama hierárquico

<div align="center" style="overflow-x: auto;">
<a href="../../../assets/images/analise-de-tarefas/tar-07-hta.svg" target="_blank"><img src="../../../assets/images/analise-de-tarefas/tar-07-hta.svg" alt="Diagrama HTA da busca por orientação sobre crédito de Vale-Transporte indisponível" width="1995" style="max-width: none;"></a>
</div>

<div align="center">
<p><strong>Figura 1</strong> — Diagrama HTA da busca por orientação sobre crédito de Vale-Transporte indisponível.</p>
<p><em>Legenda (notação de Barbosa et al., 2021, Figuras 8.1 e 8.2): cada retângulo traz o número e o nome do objetivo e, na linha de baixo, o plano, que se refere aos subobjetivos do próprio objetivo (“&gt;” indica sequência, “/” indica seleção, “+” indica paralelo); os retângulos com linha dupla embaixo são operações (nível mais baixo da hierarquia).</em></p>
<p><em>Fonte: Arthur Mariani (2026), redesenhado na notação de Barbosa et al. (2021, pp. 165–167).</em></p>
</div>

### 3.2 Tabela de objetivos, operações, problemas e recomendações

A Tabela 1 relaciona a decomposição da tarefa aos problemas identificados e às recomendações de design propostas para orientar a usuária diante do crédito indisponível.

**Tabela 1** — Objetivos, operações, problemas e recomendações da HTA

| Objetivos / operações | Problemas e recomendações |
| :--- | :--- |
| **0. Obter orientação para usar o crédito de Vale-Transporte** `1>2>3>4>5` | *Input:* mensagem de saldo insuficiente, cartão e necessidade de deslocamento.<br>*Feedback:* a usuária entende o estado do crédito, o responsável e o próximo passo.<br>*Plano:* identificar o problema, buscar orientação, compreender a situação, decidir como se deslocar e executar a ação indicada. |
| **1. Identificar a indisponibilidade do crédito** `1>2` | *Input:* tentativa de embarque.<br>*Feedback:* a usuária reconhece que o cartão não foi aceito.<br>*Plano:* aproximar o cartão e interpretar a resposta do validador. |
| 1.1 Aproximar o cartão do validador | |
| 1.2 Reconhecer a mensagem de saldo insuficiente | *Problema (hipótese):* a mensagem não distingue saldo inexistente, crédito em processamento ou cartão que exige atualização.<br>*Recomendação:* apresentar estado compreensível e próximo passo, sem atribuir culpa à usuária. |
| **2. Buscar orientação oficial** `1>2` | *Input:* dúvida sobre a causa e a solução.<br>*Feedback:* uma orientação acessível está aberta.<br>*Plano:* formular a dúvida e abrir o conteúdo encontrado. |
| 2.1 Informar a dúvida em busca ou canal de atendimento | *Problema (hipótese):* termos cotidianos como “crédito não caiu” podem não corresponder ao vocabulário institucional.<br>*Recomendação:* aceitar linguagem natural e oferecer atalhos para “crédito enviado, mas não disponível”. |
| 2.2 Abrir a orientação encontrada | *Problema (hipótese):* o fluxo pode dispersar a usuária entre SEMOB, BRB Mobilidade e empregador.<br>*Recomendação:* preservar o contexto do atendimento e explicar o papel de cada instituição. |
| **3. Entender a situação e o responsável** `1+2+3` | *Input:* orientação aberta e, quando disponível, confirmação do RH.<br>*Feedback:* estado do crédito, responsável e ação necessária conhecidos.<br>*Plano:* conferir, em paralelo conceitual, envio pelo empregador, disponibilidade no cartão e canal de resolução. |
| 3.1 Verificar se o empregador enviou o crédito | *Problema (hipótese):* a confirmação de envio é interpretada como disponibilidade imediata.<br>*Recomendação:* separar visualmente os estados “enviado”, “processado”, “disponível” e “pendente de atualização”. |
| 3.2 Verificar o estado do crédito no cartão | *Problema (hipótese):* a usuária não sabe se o cartão precisa de atualização nem onde fazê-la.<br>*Recomendação:* informar, quando aplicável, ação, local, horário e requisitos; se os dados não estiverem disponíveis, indicar o canal que os confirma. |
| 3.3 Identificar canal e procedimento adequados | *Problema (hipótese):* responsabilidades distribuídas criam encaminhamentos genéricos.<br>*Recomendação:* apresentar uma decisão orientada por estado, não apenas uma lista de instituições. |
| **4. Decidir a ação imediata** `1/2` | *Input:* horário de trabalho, recursos financeiros e orientação disponível.<br>*Feedback:* alternativa de deslocamento escolhida.<br>*Plano:* embarcar com alternativa disponível **ou** adiar/alterar o deslocamento, conforme o tempo e os recursos. |
| 4.1 Embarcar com alternativa disponível | *Problema (hipótese):* pagar em dinheiro pode comprometer a alimentação ou integração da viagem.<br>*Recomendação:* informar alternativas de atendimento compatíveis com rota e horário, para reduzir a recorrência do custo. |
| 4.2 Adiar ou alterar o deslocamento | |
| **5. Executar o próximo passo indicado** `1/2/3` | *Input:* procedimento e responsável identificados.<br>*Feedback:* cartão atualizado, solicitação registrada ou atendimento iniciado.<br>*Plano:* atualizar/validar cartão, solicitar correção ou registrar atendimento, conforme a causa identificada. |
| 5.1 Atualizar ou validar o cartão | |
| 5.2 Solicitar correção ao responsável | |
| 5.3 Registrar atendimento ou reclamação | |

### 3.3 Critério de parada da decomposição

Conforme Barbosa et al. (2021, p. 166), a decomposição termina quando já há informações suficientes para a análise, podendo-se aplicar o critério **p × c**: o produto da probabilidade de falha pelo custo da falha deve ser aceitável.

* O objetivo **3** foi decomposto porque há alta probabilidade de confusão entre envio, processamento e disponibilidade, e o custo pode ser atraso e perda de recursos financeiros.
* O objetivo **4** permanece em operações porque a escolha de meio de pagamento ou de deslocamento é externa ao serviço de orientação e depende de recursos pessoais da usuária.
* O objetivo **5** não é decomposto além das operações: os procedimentos concretos variam por cartão, serviço e confirmação das partes interessadas, devendo ser observados antes de detalhamento adicional.

### 3.4 Hipóteses sobre erros

Na etapa 7 da HTA, o livro sugere examinar hipóteses sobre desempenho baseado em habilidades, regras e conhecimento (Reason, 1990, apud Barbosa et al., 2021, p. 167).

A Tabela 2 aplica essa classificação às operações com maior possibilidade de falha e registra as hipóteses que deverão ser verificadas posteriormente.

**Tabela 2** — Hipóteses de erro nas operações analisadas

| Operação | Tipo de erro | Hipótese |
| :--- | :--- | :--- |
| 2.1 | Conhecimento | A usuária não conhece a expressão institucional utilizada para localizar a orientação. |
| 3.1 | Regras | A usuária aplica a regra “o RH enviou, então o cartão já funciona” a uma situação em que o crédito ainda não está disponível. |
| 3.3 | Conhecimento | A usuária atribui a resolução à instituição errada por não conhecer a divisão de responsabilidades. |
| 4.1 | Regras | Sob pressão de tempo, a usuária utiliza recursos reservados para outra necessidade sem saber se existe solução mais apropriada. |

### 3.5 Situação dos passos da HTA

A Tabela 3 registra o andamento metodológico da análise e torna explícitas as etapas concluídas, parciais e ainda pendentes de validação.

**Tabela 3** — Situação dos passos metodológicos da HTA

| Passo | Situação |
| :--- | :--- |
| 1. Decidir os objetivos da análise | Feito: analisar a orientação para resolver crédito indisponível. |
| 2. Consenso sobre objetivos e medidas de sucesso | Parcial. Sucesso: a usuária identifica o estado, o responsável e o próximo passo. Consequência da falha: atraso, gasto imprevisto e repetição do problema. **Validação com partes interessadas pendente.** |
| 3. Fontes de informação e aquisição de dados | Parcial: cenário de problema e documentação. **Observação e entrevistas específicas pendentes.** |
| 4. Esboçar diagrama e tabela | Feito (seções 3.1 e 3.2). |
| 5. Verificar a validade da decomposição | **Pendente.** |
| 6. Identificar operações significativas (p × c) | Feito (seção 3.3). |
| 7. Gerar hipóteses sobre aprendizado e desempenho | Feito como hipóteses (seção 3.4), **sem teste empírico**. |

---

## 4. ConcurTaskTrees (CTT)

O CTT representa tarefas de usuário, sistema, interação e tarefas abstratas, além das relações temporais entre elas (Barbosa et al., 2021, pp. 173–175). A modelagem abaixo descreve a solução de interação desejada: um orientador integrado que explicita o estado do crédito e encaminha a usuária sem exigir que ela deduza responsabilidades entre instituições.

### 4.1 Estrutura formal e relações temporais

```text
[A] Obter orientação para usar o crédito de Vale-Transporte
 |
 |-- [I] Informar problema de crédito [ ] >>
 |-- [S] Identificar estados disponíveis [ ] >>
 |-- [I] Explicar situação e próximo passo [ ] >>
 \-- [A] Tomar providência
      |-- [U] Decidir como realizar o deslocamento []
      |-- [I] Consultar instrução para atualizar ou validar cartão []
      \-- [I] Acionar canal responsável []
```

* **`[ ] >>` — ativação com passagem de informação:** a descrição do problema é usada pelo sistema para identificar estados e elaborar a orientação.
* **`[]` — escolha:** após compreender a situação, a usuária seleciona a providência compatível com seu contexto; o sistema não deve impor uma instituição sem evidência suficiente.

### 4.2 Diagrama CTT

<div align="center" style="overflow-x: auto;">
<a href="../../../assets/images/analise-de-tarefas/tar-07-ctt.svg" target="_blank"><img src="../../../assets/images/analise-de-tarefas/tar-07-ctt.svg" alt="Diagrama CTT da orientação e da tomada de providência diante do crédito indisponível" width="881" style="max-width: none;"></a>
</div>

<div align="center">
<p><strong>Figura 2</strong> — Diagrama CTT da orientação e da tomada de providência diante do crédito indisponível.</p>
<p><em>Legenda (notação de Barbosa et al., 2021, Figuras 8.4 e 8.5): nuvem = tarefa abstrata; pessoa = tarefa do usuário; computador = tarefa do sistema; computador, seta dupla e pessoa = tarefa interativa. As linhas ligam cada tarefa às suas subtarefas, e o operador temporal fica na linha horizontal entre tarefas irmãs: []&gt;&gt; (ativação com passagem de informação), [] (escolha).</em></p>
<p><em>Fonte: Arthur Mariani (2026), redesenhado na notação de Barbosa et al. (2021, pp. 173–174).</em></p>
</div>

> **Limite do CTT.** A notação representa tarefas e relações temporais; problemas de prevenção e recuperação de erro permanecem registrados na HTA, porque o CTT não possui elementos próprios para esse tratamento (Barbosa et al., 2021, p. 175).

---

## 5. Fotos de Referência

As Figuras 3 a 10 mostram os trechos que fundamentam este artefato, recortados e grifados em amarelo diretamente do livro da disciplina (BARBOSA et al., 2021).

<div id="figura-3" align="center">
<p><strong>Figura 3</strong> — Métodos de análise de tarefas: HTA, GOMS e CTT</p>
</div>

![Figura 3 — Métodos de análise de tarefas: HTA, GOMS e CTT](../../assets/prints_referencias/verificacao-v2/livro-analise-tarefas.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 164). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-4" align="center">
<p><strong>Figura 4</strong> — 8.4.1 HTA: objetivos antes das ações, decomposição, planos e operações</p>
</div>

![Figura 4 — 8.4.1 HTA: objetivos antes das ações, decomposição, planos e operações](../../assets/prints_referencias/verificacao-v2/livro-hta.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 165). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-5" align="center">
<p><strong>Figura 5</strong> — Notação do diagrama HTA: objetivo, operação e planos (Figuras 8.1 e 8.2 do livro)</p>
</div>

![Figura 5 — Notação do diagrama HTA: objetivo, operação e planos (Figuras 8.1 e 8.2 do livro)](../../assets/prints_referencias/verificacao-v2/livro-hta-notacao.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, pp. 165–167). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-6" align="center">
<p><strong>Figura 6</strong> — HTA: diagrama, representação em tabela e critério de parada</p>
</div>

![Figura 6 — HTA: diagrama, representação em tabela e critério de parada](../../assets/prints_referencias/verificacao-v2/livro-hta-tabela.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, pp. 165–166). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-7" align="center">
<p><strong>Figura 7</strong> — Passos da Análise Hierárquica de Tarefas (Barbosa et al., 2021)</p>
</div>

![Figura 7 — Passos da Análise Hierárquica de Tarefas (Diaper, 2003)](../../assets/prints_referencias/verificacao-v2/livro-hta-passos.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, pp. 166–167). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-8" align="center">
<p><strong>Figura 8</strong> — CTT: tipos de tarefas e relações temporais</p>
</div>

![Figura 8 — CTT: tipos de tarefas e relações temporais](../../assets/prints_referencias/verificacao-v2/livro-ctt.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 173). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-9" align="center">
<p><strong>Figura 9</strong> — Notação do CTT: tipos de tarefas, hierarquia e relações temporais (Figuras 8.4, 8.5 e 8.6 do livro)</p>
</div>

![Figura 9 — Notação do CTT: tipos de tarefas, hierarquia e relações temporais (Figuras 8.4, 8.5 e 8.6 do livro)](../../assets/prints_referencias/verificacao-v2/livro-ctt-notacao.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, pp. 173–174). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-10" align="center">
<p><strong>Figura 10</strong> — CTT: vantagens e limitação quanto ao tratamento de erros</p>
</div>

![Figura 10 — CTT: vantagens e limitação quanto ao tratamento de erros](../../assets/prints_referencias/verificacao-v2/livro-ctt-limites.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 175). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

---

## 6. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
