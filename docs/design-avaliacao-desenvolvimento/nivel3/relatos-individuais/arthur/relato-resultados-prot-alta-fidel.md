# Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (TAR-07)

## Histórico de versão

| Data | Versão | Descrição | Autor | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- |
| 14/11/2026 | `1.0` | Registro das três entrevistas e do achado na tela final. | [Arthur Mariani](https://github.com/arthur-mariani) | Google Gemini: apoio à organização do relato e à redação, com base nas informações fornecidas pelo autor. |

---

## 1. Introdução e escopo

Este relato apresenta os resultados informados por Arthur Mariani sobre a avaliação do protótipo de alta fidelidade da [TAR-07: Resolver indisponibilidade de crédito de Vale-Transporte](../../../../analise-de-requisitos/analise-de-tarefas/tar-07-credito-vale-transporte.md). O fluxo se relaciona ao [Cenário 4](../../../../analise-de-requisitos/cenarios/cenario-4-credito-vale-transporte.md) e à persona [Maria Eduarda Santos](../../../../analise-de-requisitos/personas/maria-eduarda-santos.md). A organização dos resultados segue o [planejamento da avaliação](../../planejamentos-individuais/Arthur/arthur-planejamento-avaliacao-prototipo-alta-fidelidade.md) e o [planejamento deste relato](../../planejamentos-individuais/Arthur/arthur-planejamento-relato-prototipo-alta-fidelidade.md).

O objetivo foi observar se participantes do público-alvo encontravam a orientação para crédito indisponível, compreendiam a informação apresentada e identificavam como continuar buscando atendimento. Trata-se de uma avaliação formativa do fluxo simulado; ela não comprova a liberação de crédito nem a correção de procedimentos institucionais.

## 2. Método e participantes

Foram realizadas **três entrevistas individuais** com uso do [protótipo de alta fidelidade](https://arthur-mariani.github.io/PAF-IHC). A quantidade de participantes corresponde ao [planejamento da avaliação](../../planejamentos-individuais/Arthur/arthur-planejamento-avaliacao-prototipo-alta-fidelidade.md), que adota a recomendação de Krug (2000, cap. 9) de testar três pessoas por rodada. Os três participantes eram **maiores de 18 anos, trabalhavam e estudavam, utilizavam transporte público com frequência e tinham alta familiaridade com tecnologia**. Esse perfil é compatível com o público usuário considerado no planejamento. Os participantes são identificados apenas por P01, P02 e P03.

| Campo | Registro |
| :--- | :--- |
| Número de participantes | 3 |
| Tarefas previstas | T1: encontrar orientação; T2: interpretar a situação apresentada e indicar o próximo passo; T3: encontrar continuidade do atendimento. |
| Data, horário e local das sessões | 12/11/2026, das 8h às 10h, na Universidade de Brasília. |
| Protótipo avaliado | [Protótipo de alta fidelidade](https://arthur-mariani.github.io/PAF-IHC) |
| Dispositivo e condições de uso | Smartphone para testar e gravar |
| Condutor e observador | Arthur Mariani acumulou as duas funções em decorrência da falta de tempo. |
| Teste piloto | Realizado em conjunto com o grupo. Os dados do piloto não integram os resultados das três entrevistas. |

### 2.1 Links das três entrevistas

| Participante | Link da entrevista |
| :---: | :--- |
| P01 | [Assistir à entrevista 1](https://youtube.com/shorts/tysSW-D0fuU?feature=share) |
| P02 | [Assistir à entrevista 2](https://youtube.com/shorts/UMFZ9PTngXs?feature=share) |
| P03 | [Assistir à entrevista 3](https://youtube.com/shorts/e5aj-diS3Uk?feature=share) |

## 3. Dados coletados e execução das tarefas

Segundo o registro fornecido pelo autor, **as três tarefas foram executadas com sucesso nas três entrevistas e os entrevistados aprovaram o fluxo**. A orientação inicial foi encontrada sem dica pelo avaliador. Ao final, **os participantes tentaram interagir com o contêiner que apresenta os horários de atendimento**. Esse comportamento aponta uma expectativa de ação que a apresentação atual do componente não esclarece.

| Participante | T1: Encontrar orientação | T2: Interpretar e decidir | T3: Continuar atendimento | Observação ao final |
| :---: | :--- | :--- | :--- | :--- |
| P01 | Executada com sucesso, sem dica | Executada com sucesso | Executada com sucesso | Tentativa de interação com o contêiner de horários. |
| P02 | Executada com sucesso, sem dica | Executada com sucesso | Executada com sucesso | Tentativa de interação com o contêiner de horários. |
| P03 | Executada com sucesso, sem dica | Executada com sucesso | Executada com sucesso | Tentativa de interação com o contêiner de horários. |

Os resultados por tarefa acima foram informados pelo autor e sintetizam o desempenho observado nas três entrevistas.

## 4. Interpretação das perguntas de avaliação

| Pergunta do planejamento | Evidência disponível | Interpretação e situação |
| :---: | :--- | :--- |
| P01: Acesso à orientação | Os três participantes encontraram a orientação sem dica do avaliador, conforme informado pelo autor. | **Respondida:** a entrada para a orientação foi encontrada sem dica nas sessões relatadas. |
| P02: Compreensão das mensagens | O autor informou que as perguntas de avaliação tiveram resultado positivo e o fluxo foi compreendido. | **Respondida:** as mensagens foram compreendidas no caminho testado. |
| P03: Próximo passo | Os três participantes executaram com sucesso a tarefa de interpretar a situação e decidir o próximo passo. | **Respondida:** o próximo passo foi identificado nas sessões relatadas. |
| P04: Continuidade do atendimento | Os três participantes executaram com sucesso a tarefa de continuar buscando atendimento. | **Respondida:** encontraram a continuidade do atendimento; a tentativa de interação com o contêiner de horários indica um ajuste necessário na tela final. |
| P05: Erros e hesitações | O fluxo foi concluído, mas os participantes tentaram interagir com o contêiner de horários. | **Respondida:** o ponto de interação a melhorar está no contêiner da etapa final. |
| P06: Opinião após o uso | O autor informou que os entrevistados aprovaram o fluxo. | **Respondida:** avaliação positiva dos três participantes, sem falas literais atribuídas individualmente. |

## 5. Problema observado e ponto positivo

| ID | Tipo | Tela ou componente | Evidência | Efeito e hipótese | Recomendação |
| :---: | :--- | :--- | :--- | :--- | :--- |
| AF-01 | Problema de interação | Contêiner dos horários de atendimento, na etapa final | Os participantes tentaram interagir com o contêiner. | A aparência ou a posição do bloco pode sugerir que ele é acionável. A tentativa de interação não impediu a conclusão do fluxo. | Se o contêiner é apenas informativo, apresentá-lo visualmente como informação estática e separar dele as ações disponíveis. Se deve abrir detalhes ou permitir outra ação, implementar essa interação e indicar seu resultado. |
| AF-02 | Ponto positivo | Fluxo principal da TAR-07 | Os três participantes executaram as tarefas com sucesso e aprovaram o fluxo, conforme informado pelo autor. | Indício de que a sequência principal de orientação funciona para os participantes observados. | Preservar o caminho principal. |

O problema **AF-01** aparece uma vez na consolidação, pois diz respeito ao mesmo componente. A hipótese sobre a causa visual é uma interpretação a validar, não uma fala atribuída aos participantes.

## 6. Plano de reprojeto

| ID | Mudança proposta | Justificativa | Prioridade | Responsável | Estado |
| :---: | :--- | :--- | :---: | :--- | :--- |
| AF-01 | Definir se o contêiner de horários é informativo ou interativo; ajustar aparência e comportamento de acordo com essa função. | Tentativas de interação na etapa final, sem impedir a conclusão da tarefa. | Média | Equipe de prototipação | Proposta |

## 7. Limitações e conclusão

As três entrevistas oferecem evidência qualitativa sobre o fluxo testado e correspondem ao número previsto para esta rodada. A amostra pequena e as tarefas delimitadas não permitem generalizações para todos os usuários do Vale-Transporte. O autor confirmou a conclusão das tarefas, a execução de T1 sem dica e a aprovação do fluxo. As conclusões se referem ao caminho avaliado no protótipo.

O resultado informado é positivo para o fluxo geral da TAR-07: os três participantes concluíram as tarefas e aprovaram a experiência. O principal ajuste identificado está na tela final: o contêiner dos horários de atendimento gerou tentativas de interação. O reprojeto deve tornar clara a função desse componente.

## 8. Trechos do livro que fundamentam o relato

As imagens abaixo foram extraídas do livro de Barbosa e Silva (2010). Os destaques identificam os trechos usados para organizar e interpretar os resultados deste relato.

<div align="center">
<p><strong>Figura 1.</strong> Interpretação dos dados de cada participante (p. 310).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p310-grifada.svg" alt="Página 310 do livro com trechos destacados sobre a interpretação dos dados individuais" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 310).</em></p>
</div>

<div align="center">
<p><strong>Figura 2.</strong> Consolidação dos resultados entre participantes (p. 311).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p311-grifada.svg" alt="Página 311 do livro com trechos destacados sobre a consolidação dos resultados" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 311).</em></p>
</div>

<div align="center">
<p><strong>Figura 3.</strong> Conteúdo e limites do relato dos resultados (p. 312).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p312-grifada.svg" alt="Página 312 do livro com trechos destacados sobre o conteúdo do relato e os limites da generalização" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 312).</em></p>
</div>

<div align="center">
<p><strong>Figura 4.</strong> Dados coletados no teste de usabilidade (p. 342).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p342-grifada.svg" alt="Página 342 do livro com trechos destacados sobre tarefas, conclusão e dados coletados" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 342).</em></p>
</div>

<div align="center">
<p><strong>Figura 5.</strong> Descrição dos problemas e sugestões de solução (p. 343).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p343-grifada.svg" alt="Página 343 do livro com trechos destacados sobre análise qualitativa e relato dos problemas de usabilidade" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 343).</em></p>
</div>

## 9. Referências bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier/Campus, 2010. Cap. 9, seções 9.7.4-9.8, p. 310-313; cap. 10, seção 10.2.1, p. 342-343.
* KRUG, Steve. **Don't Make Me Think! A Common Sense Approach to Web Usability**. Indianapolis: New Riders, 2000. Cap. 9, p. 146. [Trecho disponibilizado pelo autor](https://sensible.com/downloads/DMMTchapter09_for_personal_use_only.pdf).
