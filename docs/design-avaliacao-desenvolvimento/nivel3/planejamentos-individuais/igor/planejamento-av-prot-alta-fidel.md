## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 31/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Alta Fidelidade (Figma) via DECIDE, com recrutamento fundamentado na teoria de Steve Krug. | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | [Gabriel Cardone](https://github.com/gabriellcardone-06) | Google Gemini - utilizado para auxílio na estruturação sintática do Markdown e revisão gramatical. |

---

# Planejamento da Avaliação do Protótipo de Alta Fidelidade (TAR-01)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-01 (Alerta Inteligente de Saída de Casa)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-01-alerta-saida/#tar-01-alerta-inteligente-de-saida)**. Trata-se de um planejamento individual desenvolvido para orientar a avaliação formativa e empírica do protótipo digital interativo construído na ferramenta **Figma**, representando a interface móvel do aplicativo de mobilidade para a **SEMOB-DF / BRB Mobilidade**.

O protótipo de alta fidelidade foi concebido em conformidade com o **Guia de Estilo** estabelecido pelo Grupo 05 (com padrões de componentes, tipografia, cores, espaçamentos, botões de ação e cálculo automático do tempo de caminhada via GPS). A avaliação será realizada com usuários reais utilizando o **Framework DECIDE** (Preece et al., 2002; Barbosa et al., 2021), estruturado em seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

De acordo com Mayhew (1999) e Barbosa et al. (2021, Cap. 6, p. 106; Cap. 11, p. 248), a avaliação do protótipo de alta fidelidade ocorre no Nível 3 do ciclo de vida da engenharia de usabilidade. Seu propósito é validar o design detalhado da interface interativa em um ambiente próximo do produto final antes do desenvolvimento de código executável.

### 1.1 Objetivos Principais
* **Verificar a conformidade com o Guia de Estilo do Grupo 05:** Avaliar se a paleta de cores, tipografia, dimensões dos alvos de toque (mobile-first), padronização dos botões de ação (verbo + ação) e hierarquia de cards do Figma estão alinhados aos padrões de design consolidados pela equipe.
* **Avaliar a usabilidade da funcionalidade TAR-01:** Identificar gargalos, erros de navegação ou dúvidas durante a execução da busca por linha, ativamento do monitoramento proativo e recepção da notificação de saída imediata.
* **Validar a eficácia da automação de caminhada via GPS:** Verificar se a apresentação do tempo de caminhada calculado automaticamente pelo sistema sem exigir digitação do usuário reduz o esforço cognitivo e proporciona alta satisfação.
* **Avaliar a comunicabilidade e o feedback do sistema:** Verificar se as transições de tela, microinterações e mensagens de exceção (ex.: perda de sinal de GPS e sugestão de rota alternativa em 1 toque) fornecem respostas visuais claras e imediatas.
* **Subsidiar o produto final:** Coletar dados quantitativos e qualitativos para ajustes finos de layout e comportamento interativo no Figma.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos da avaliação, elaborou-se um conjunto de perguntas investigativas a serem respondidas por meio da observação direta das interações no Figma e de questionamentos pós-teste (Barbosa et al., 2021; Rubin, 1994):

<div align="center">
<p><strong>Tabela 1</strong> — Roteiro de Perguntas para Avaliação do Protótipo de Alta Fidelidade</p>
</div>

| ID | Categoria / Foco | Pergunta Investigativa da Avaliação | Critério de Aceitação / Resposta Esperada |
| :---: | :--- | :--- | :--- |
| **Q01** | **Conformidade com Guia de Estilo** | O layout móvel no Figma apresenta componentes legíveis, botões com alvos de toque adequados e rótulos expressivos (verbo + ação)? | O participante identifica e aciona os botões (ex.: `[ 🔔 Ativar alerta de saída ]`) sem hesitação visual. |
| **Q02** | **Busca e Entrada de Dados** | O campo de pesquisa aceita busca flexível (número ou nome da linha) mantendo o estado visual da interface limpo e organizado? | O participante realiza a busca de forma fluida e reconhece os resultados na lista suspensa. |
| **Q03** | **Cálculo Automático via GPS** | O card do tempo de caminhada automático (ex.: *6 min via GPS*) é compreendido como uma informação fornecida pelo sistema e não um campo editável? | O participante interpreta corretamente a informação sem procurar campos para digitação manual. |
| **Q04** | **Feedback e Notificação Proativa** | Ao ser exibido o componente de notificação prioritária (*Sair de Casa Agora*), o participante reconhece o caráter urgente e aciona a ação primária? | O participante reage à notificação e clica em `[ Estou saindo ]` ou `[ Ver detalhes ]` sem confusão. |
| **Q05** | **Tratamento de Exceção (Contingência)** | Diante do cenário de falha no rastreamento, o participante localiza e aciona o botão `[ 🗺️ Sugerir rota alternativa ]` em 1 toque? | O participante conclui a mudança de rota em poucos segundos sem precisar reiniciar o aplicativo. |
| **Q06** | **Satisfação e Estética** | Como o participante avalia o visual, as cores e a facilidade de uso do protótipo em comparação com outros apps de mobilidade? | O participante atribui avaliações positivas de satisfação e aponta a interface como moderna e limpa. |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método escolhido é o **Teste de Usabilidade (Empírico / Observação de Uso em Ambiente Controlado)** utilizando o protótipo de alta fidelidade interativo no **Figma** (Rubin & Chisnell, 2008; Barbosa et al., 2021, Seção 12.2.1).

* **Justificativa do Método:** O teste de usabilidade com protótipo de alta fidelidade permite observar comportamentos reais de interação em telas com acabamento visual e funcional próximo ao sistema real. A ferramenta Figma oferece suporte a componentes dinâmicos, transições, overlays e estados ativos, possibilitando medir tempo de tarefa, erros e satisfação do usuário.
* **Técnica Complementar:** Durante a realização das tarefas, utilizar-se-á a técnica de **Pensar em Voz Alta (*Think Aloud*)**, na qual o participante é estimulado a verbalizar seus raciocínios, dúvidas e expectativas a cada clique.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Planejamento do Recrutamento dos Entrevistados: Fundamentação e Justificativa na Teoria de Steve Krug

O recrutamento dos participantes para esta avaliação de alta fidelidade fundamenta-se estritamente na **teoria de testes de usabilidade simplificados ("Faça Você Mesmo" / *Do-It-Yourself Usability Testing*) de Steve Krug** (Krug, 2000, 2006; Santa-Rosa, 2005, p. 156–157):

* **Quantidade de Entrevistados:** Serão recrutados **3 participantes** representantes do público-alvo primário.
* **Fundamentação Teórica de Steve Krug:** Em suas obras clássicas (*Don't Make Me Think* e *Rocket Surgery Made Easy*), Steve Krug desmistificou a necessidade de amostras populacionais volumosas em avaliações de usabilidade qualitativas e iterativas. Krug (2000, 2006) demonstra empiricamente que:
  1. **Detecção da Maioria dos Problemas Críticos:** A testagem de **3 a 4 participantes** é suficiente para identificar aproximadamente **80% a 85% dos problemas de usabilidade mais severos** de uma interface em um ciclo de avaliação.
  2. **Análise Rápida e Acionável no Mesmo Dia:** Trabalhar com 3 participantes reduz o volume excessivo de dados redundantes, permitindo que a equipe de design consolide os resultados e aplique as correções diretamente no Figma no mesmo dia do teste.
  3. **Relação Custo-Benefício Máxima:** O retorno sobre o investimento cai significativamente a partir do quarto participante em uma mesma rodada de testes, pois os mesmos erros passam a ser repetidos.
  4. **Princípio Fundamental de Krug:** *"Testar um participante é 100% melhor do que não testar nenhum, e testar três usuários em rodadas iterativas é o ponto ideal para encontrar as falhas principais sem atrasar o cronograma do projeto"* (Krug, 2000; Santa-Rosa, 2005, p. 156).

* **Perfil dos 3 Participantes Recrutados:**
  * **Alinhamento com a Persona:** Estudantes ou usuários do transporte público coletivo do Distrito Federal que utilizam ônibus linhas interurbanas em suas rotinas diárias, alinhados ao perfil da persona [João Pedro Carvalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/) (jovens/adultos, possuidores de smartphone Android ou iOS com pacote de dados).

---

### 4.2 Protótipo no Figma e Aplicação do Guia de Estilo
O protótipo interativo de alta fidelidade será disponibilizado via link de reprodução (*Figma Prototype Mode*), incorporando as diretrizes do Guia de Estilo do Grupo 05:
* **Dimensões e Viewport:** Layout responsivo móvel (*Frame iPhone/Android*).
* **Componentes de Ação:** Botões primários com cantos arredondados, alvos de toque largos e rótulos no padrão `[ Verbo + Ação ]` (ex.: `[ 🔔 Ativar alerta de saída ]`).
* **Cores e Acessibilidade:** Contraste adequado entre fundo e texto, utilização de ícones auxiliares (não dependência exclusiva de cor para estados).
* **Automação:** Card de caminhada calculado via GPS (*6 min*) exibido automaticamente após a seleção da linha.

---

### 4.3 Definição dos Papéis da Equipe na Sessão de Avaliação
* **Avaliador Facilitador / Condutor (Igor Dantas Araújo):** Responsável por recepcionar o participante, apresentar as instruções, entregar o cenário da tarefa e conduzir a entrevista pós-teste sem dar dicas de navegação.
* **Avaliador Observador (Integrante Auxiliar do Grupo 05):** Responsável por acompanhar a gravação da tela/áudio, cronometrar a execução e registrar em planilha de navegação as hesitações, cliques incorretos e comentários do usuário.
* **Participante (Entrevistado):** Interage diretamente com o protótipo interativo no Figma.

---

### 4.4 Ferramentas e Infraestrutura Tecnológica
* **Plataforma de Prototipação:** Figma (Protótipo Interativo com navegação por cliques e transições).
* **Ambiente de Teste:** Computador/Smartphone com acesso à internet em sala reservada presencial.
* **Captura de áudio e vídeo:** Câmera do celular.
* **Materiais de Apoio:** Termo de Consentimento Livre e Esclarecido (TCLE) e ficha de anotações do observador.

---

### 4.5 Cronograma e Logística das Sessões com os 3 Participantes

<div align="center">
<p><strong>Tabela 3</strong> — Agendamento das Sessões Cultivando a Teoria de Krug</p>
</div>

| Sessão | Participante Recrutado | Perfil do Participante | Data e Horário | Duração Prevista |
| :---: | :--- | :--- | :---: | :---: |
| **Sessão 1** | **Participante 1** | Estudante universitário (Usuário frequente de ônibus) | 05/11/2026 às 14:00 | 5 min |
| **Sessão 2** | **Participante 2** | Estudante universitário (Usuário frequente de ônibus) | 05/11/2026 às 14:30 | 5 min |
| **Sessão 3** | **Participante 3** | Estudante universitário (Usuário frequente de ônibus) | 05/11/2026 às 15:00 | 5 min |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

---

### 4.6 Planejamento do Teste-Piloto

Em cumprimento rigoroso ao **Item 11 do checklist do Plano de Ensino** e às diretrizes da literatura (Barbosa et al., 2021, p. 260), será realizado um **teste-piloto** antes das sessões oficiais:

* **Objetivo do Teste-Piloto:** Testar o correto encadeamento dos links de interatividade do Figma, verificar a qualidade da gravação de áudio/tela, avaliar a clareza do texto do cenário e calibrar o tempo de execução.
* **Data do Piloto:** **04/11/2026 às 16:00**, realizado com um integrante do Grupo 05 atuando como usuário simulado.
* **Declaração Formal de Isenção de Dados (Conformidade com o Item 12 do Checklist):** Declara-se formalmente que os dados e gravações decorrentes da execução do teste-piloto servirão **exclusivamente para calibração das ferramentas e do protótipo no Figma**, **não sendo computados ou somados aos resultados finais da avaliação**.

---

## 5. D — Decidir como Lidar com as Questões Éticas

Toda a conduta da pesquisa atende às Resoluções nº 466/2012 e nº 510/2016 do Conselho Nacional de Saúde (CNS) e às diretrizes éticas de IHC (Barbosa et al., 2021, Seção 7.4):

1. **Apresentação do TCLE:** Antes de iniciar o teste, o participante lerá o [Termo de Consentimento Livre e Esclarecido (TCLE)](https://interacao-humano-computador.github.io/2026.2-Grupo05/assets/PDFs/TCLE_Pesquisa_Transporte.pdf), sendo informado sobre os objetivos acadêmicos da pesquisa, a inexistência de riscos financeiros ou físicos e a garantia de anonimato.
2. **Autorização de Gravação:** A gravação de tela e áudio só será iniciada após o aceite expresso e registrado do participante.
3. **Direito de Interrupção:** O participante possui total liberdade para interromper a sessão a qualquer momento sem necessidade de justificativa e sem sofrer qualquer penalização.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

A análise dos dados combinará abordagens quantitativas e qualitativas (Barbosa et al., 2021, Seção 12.2.1):

1. **Análise Quantitativa:** Contabilização da taxa de sucesso no cumprimento da tarefa sem ajuda, contagem de erros de clique fora da área interativa e medição do tempo gasto em cada tela do Figma.
2. **Análise Qualitativa e Triangulação:** Mapeamento das falhas de comunicabilidade, hesitações e comentários expressos pelo método *Think Aloud*, correlacionando-os com os princípios do Guia de Estilo.
3. **Escala de Severidade de Problemas:** Os problemas encontrados nos testes com os 3 participantes serão classificados de acordo com a escala de severidade de Nielsen (1994):
   * **0 — Sem importância:** Questão estética pontual.
   * **1 — Leve:** Pequeno atraso sem impedir a conclusão.
   * **2 — Moderado:** Hesitação relevante ou escolha de caminho secundário.
   * **3 — Grave:** Dificulta significativamente a realização da tarefa.
   * **4 — Catastrófico:** Impede a conclusão da tarefa no Figma.
4. **Encaminhamento para o Relato:** Os resultados fundamentarão o relatório final intitulado *Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade*, indicando as melhorias necessárias no arquivo do Figma do grupo.

---

## 7. Declaração sobre o Uso de IA Generativa

Em conformidade com as exigências do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa foram empregadas exclusivamente para auxílio na estruturação sintática das tabelas em Markdown e revisão gramatical do texto. A definição dos objetivos, a justificativa teórica de amostragem fundamentada em Steve Krug, a elaboração das perguntas do roteiro e a logística do estudo permanecem sob total responsabilidade autoral de Igor Dantas Araújo.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, p. 245–266; Capítulo 12, Seção 12.2.1, p. 288–291).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* KRUG, Steve. **Don't Make Me Think: A Common Sense Approach to Web Usability**. 1st ed. Berkeley: New Riders, 2000.
* KRUG, Steve. **Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems**. Berkeley: New Riders, 2006.
* MAYHEW, Deborah J. **The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design**. San Francisco: Morgan Kaufmann, 1999.
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. São Paulo: Editora Érica, 2005.
* RUBIN, Jeffrey; CHISNELL, Dana. **Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests**. 2nd ed. Indianapolis: Wiley, 2008.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
* SANTA-ROSA, José Guilherme. **Avaliação e Projeto no Design de Interfaces: Teste de Usabilidade**. Capítulo 9, p. 144–175, 2005.

---
**Autor:** [Igor Dantas Araújo](https://github.com/IgorDARAUJO)  
**Revisor:** [Gabriel Cardone](https://github.com/gabriellcardone-06)
