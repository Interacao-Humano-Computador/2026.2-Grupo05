## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 20/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Papel (TAR-01) via DECIDE para teste presencial. | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | [Gabriel Cardone](https://github.com/gabriellcardone-06) | Google Gemini - formatação markdown da página |

---

# Planejamento da Avaliação do Protótipo de Papel (TAR-01)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Papel** referente à **[TAR-01 (Alerta Inteligente de Saída de Casa)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-01-alerta-saida/#tar-01-alerta-inteligente-de-saida)**. Trata-se de um planejamento individual desenvolvido para orientar a avaliação formativa presencial do protótipo de baixa/média fidelidade confeccionado em papel, representando a interface do aplicativo de mobilidade para a **SEMOB-DF / BRB Mobilidade**.

A avaliação será conduzida de forma empírica presencial, envolvendo a simulação de uso por um participante representante da persona [João Pedro Carvalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/). O planejamento foi estruturado aplicando o **Framework DECIDE** (Preece et al., 2002; Barbosa et al., 2021), que organiza o estudo nas seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

Conforme Barbosa et al. (2021, Cap. 12, p. 303), a prototipação em papel é um método de observação de uso voltado à avaliação formativa, ideal para explorar ideias de design, validar o modelo conceitual e identificar problemas de IHC antes do desenvolvimento de software executável.

### 1.1 Objetivos Principais
* **Identificar problemas de usabilidade e navegação:** Detectar falhas de layout, rótulos confusos, botões ambíguos ou ambiguidades nos menus do protótipo em papel durante a realização da tarefa.
* **Avaliar a usabilidade da funcionalidade de alerta de saída:** Verificar se o usuário consegue configurar o tempo de caminhada, ativar o monitoramento proativo em segundo plano e interpretar a notificação de adiantamento do ônibus.
* **Avaliar a curva de aprendizado e facilidade de uso:** Observar o grau de facilidade com que o participante navega pelas telas de papel e realiza a tarefa sem necessitar de explicações verbais do avaliador.
* **Coletar sugestões de reprojeto:** Obter feedback direto para aprimorar os elementos visuais e o fluxo de interação antes da construção do protótipo de alta fidelidade.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos da avaliação, foram elaboradas perguntas investigativas aplicadas durante e após a simulação com o protótipo de papel (Barbosa et al., 2021; Rubin, 1994):

<div align="center">
<p><strong>Tabela 1</strong> — Roteiro de Perguntas Investigativas da Avaliação</p>
</div>

| ID | Categoria / Foco | Pergunta de Investigação da Avaliação | Critério de Aceitação / Resposta Esperada |
| :---: | :--- | :--- | :--- |
| **Q01** | **Acessibilidade e Layout** | O participante identifica facilmente onde configurar o tempo de caminhada e selecionar a linha de ônibus nas telas de papel? | O participante aponta para os campos e botões corretos do protótipo sem vacilação prolongada. |
| **Q02** | **Interpretação de Rótulos** | Os termos e ícones desenhados nas peças móveis de papel (ex.: 'Tempo de Caminhada', 'Ativar Alerta', 'Rota Alternativa') são compreensíveis? | O participante entende o significado das peças sem pedir explicações ao avaliador. |
| **Q03** | **Eficiência do Fluxo** | O participante conclui a configuração e ativação do alerta com facilidade e sem cometer erros de navegação? | A tarefa é concluída de forma fluida, sem escolhas incorretas de telas. |
| **Q04** | **Feedback do Sistema** | Ao simular o adiantamento do ônibus (troca da peça de notificação), o participante compreende a mensagem de saída imediata? | O participante lê a notificação em papel e indica a ação correta a ser tomada. |
| **Q05** | **Tratamento de Exceções** | Diante de uma mensagem simulada de perda de GPS ou atraso severo, o participante localiza a opção de rota alternativa? | O participante aciona a peça móvel correspondente à rota alternativa de forma intuitiva. |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método selecionado é a **Prototipação em Papel (Snyder, 2003; Barbosa et al., 2021, Seção 12.2.3)**, enquadrado como um **Método de Observação de Uso (Empírico)** em ambiente controlado presencial.

* **Justificativa:** Trata-se de uma técnica ágil, de baixo custo e altamente interativa para testes formativos com usuários reais. Permite simular o comportamento de uma aplicação móvel manipulando folhas de papel, post-its e cartas recortadas sem escrever uma única linha de código.
* **Técnica Complementar:** Durante a simulação de uso, o participante será incentivado a utilizar a técnica de **Pensar em Voz Alta (*Think Aloud*)**, verbalizando suas dúvidas, intenções e expectativas a cada clique simular.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Confecção do Protótipo em Papel
O protótipo será construído à mão em folhas de papel e cartolina, contendo:
* **Moldura do Dispositivo:** Um molde em papelão/cartolina no formato de smartphone para delimitar a área da tela móvel.
* **Telas Base:** Folhas de papel sulfite com os esboços das telas do aplicativo (Tela Inicial, Busca de Linhas, Configuração do Alerta de Saída e Notificação de Alerta).
* **Componentes Móveis (Widgets):** Cartões recortados, fichas e *post-its* reutilizáveis representando menus *pop-up*, caixas de diálogo, mensagens de notificação e botões de seleção que serão sobrepostos durante o teste.

### 4.2 Definição dos Papéis da Equipe na Sessão Presencial
Conforme Barbosa et al. (2021, p. 304), a condução do teste presencial exige a distribuição clara das atribuições:

* **Usuário / Participante:** Recrutado conforme o perfil da persona, realiza as tarefas interagindo com o papel (apontando o dedo ou caneta para simular toques na tela).
* **Avaliador "Computador" (Igor Dantas Araújo):** Responsável por manipular o protótipo de papel na mesa, trocando telas, colando *post-its* de notificação e exibindo as respostas do sistema estritamente em reação às ações do participante. **O "computador" não deve dar dicas nem explicar como usar a interface.**
* **Avaliador Observador / Escriba (Igor Dantas ou Integrante Auxiliar):** Responsável por operar a câmera/smartphone no suporte para gravação presencial da mesa, cronometrar o tempo de cada etapa e anotar em ficha física as hesitações, erros e comentários do usuário.

### 4.3 Recrutamento e Perfil do Participante
* **Perfil do Convidado:** 1 participante convidado presencialmente, representante do público-alvo primário ([João Pedro Carvalho](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/)): estudante universitário do DF, usuário de transporte público coletivo por ônibus e familiarizado com smartphones.
* **Quantidade:** 1 usuário para a sessão de teste presencial.

### 4.4 Infraestrutura e Equipamentos Presenciais
* **Local:** Mesa de trabalho/estudo organizada em ambiente tranquilo e iluminado, livre de distrações externas.
* **Equipamentos de Gravação:** Smartphone em suporte/tripé focado na mesa (capturando o manuseio do papel e o áudio da conversa) ou câmera de gravação presencial.
* **Kit de Material de Apoio:** Termo de Consentimento (TCLE) impresso, folha com o cenário e instruções da tarefa, conjunto de peças do protótipo em papel e ficha de anotações do observador.

### 4.5 Cronograma de Execução Presencial

<div align="center">
<p><strong>Tabela 2</strong> — Cronograma da Sessão Presencial do Protótipo de Papel</p>
</div>

| Parâmetro | Detalhamento da Sessão Presencial |
| :--- | :--- |
| **Data e Horário:** | 24/10/2026 às 14:30. |
| **Local:** | Sala/Ambiente presencial acadêmico reservado na UnB. |
| **Condutor / "Computador":** | **Igor Dantas Araújo** (com eventual auxílio de 1 integrante como observador). |
| **Duração Prevista:** | **30 minutos** (10 min de recepção/TCLE + 15 min de teste + 5 min pós-teste). |
| **Orçamento Estimado:** | **R\$ 0,00** (uso de papéis, canetas e smartphone próprio para gravação). |

<div align="center">
<p><em>Fonte: Elaborado por Igor Dantas Araújo (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

A condução do teste presencial com o protótipo de papel atende rigorosamente às Resoluções nº 466/2012 e nº 510/2016 do Conselho Nacional de Saúde (CNS) e às diretrizes do livro-texto (Barbosa et al., 2021, Seção 7.4):

1. **Assinatura do TCLE Impresso:** No início da sessão presencial, o avaliador entregará o [Termo de Consentimento Livre e Esclarecido (TCLE)](https://interacao-humano-computador.github.io/2026.2-Grupo05/assets/PDFs/TCLE_Pesquisa_Transporte.pdf) impresso, explicando os objetivos acadêmicos da pesquisa e colhendo a assinatura do participante.
2. **Autorização de Imagem e Áudio:** O participante será informado de que a gravação focará nas mãos manipulando o papel sobre a mesa e na captação do áudio de suas impressões, garantindo que sua imagem facial não seja exposta indevidamente.
3. **Respeito e Anonimato:** Será garantido o anonimato do participante e a liberdade total de interromper o teste a qualquer momento sem qualquer encargo ou prejuízo.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Os dados coletados na sessão presencial serão processados seguindo a abordagem de **análise qualitativa e ciclo iterativo rápido** (Barbosa et al., 2021, Seção 12.2.3):

1. **Análise de Mídia e Anotações:** O áudio e a gravação do manuseio do papel serão revisados para mapear o tempo de conclusão de cada tarefa, pontos de dúvida e falhas na troca de peças do protótipo.
2. **Reprojeto Rápido no Papel:** Problemas de usabilidade simples identificados no papel (ex.: um botão em local inadequado ou um texto confuso em um *post-it*) poderão ser corrigidos ou redesenhados diretamente no papel para validação rápida nas próximas iterações do ciclo de vida.
3. **Consolidação dos Resultados:** Todos os problemas identificados, sua classificação de severidade (níveis 0 a 4) e as propostas de correção serão estruturados e apresentados no documento de *Relato dos Resultados da Avaliação do Protótipo de Papel*.

---

## 7. Planejamento do Teste Piloto do Protótipo de Papel

Em estrito cumprimento ao **Item 11 do checklist do Plano de Ensino** e à literatura de IHC (Barbosa et al., 2021, p. 260, 304), antes da realização do teste definitivo com o participante convidado, será executado um **teste piloto**:

* **Objetivo do Piloto:** Avaliar o próprio planejamento, testar o encaixe e a agilidade da troca das peças de papel pelo "computador", verificar o tempo de execução da tarefa e testar o enquadramento do celular na gravação da mesa.
* **Execução e Data:** O teste piloto será realizado presencialmente em **23/10/2026**, contando com um membro da equipe de desenvolvimento fazendo o papel de participante simulado.
* **Isenção de Dados (Conformidade com o Item 12 do Checklist):** Declara-se formalmente que os dados e vídeos do teste piloto servirão **exclusivamente para calibração** dos materiais de papel e do procedimento, **não sendo computados nos resultados finais da avaliação**.

---

## 8. Localização das Referências no Livro

Conforme as normas da disciplina, a fundamentação conceitual aplicada a este planejamento encontra-se nas seguintes seções do livro-texto oficial:

* **Obra:** BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
* **Localização Exata:** **Parte IV, Capítulo 11 — Planejamento da Avaliação de IHC, Seção 11.8 (*O Framework DECIDE*), páginas 264–265**; e **Capítulo 12 — Métodos de Avaliação de IHC, Seção 12.2.3 (*Prototipação em Papel*), páginas 303–306**.

---

## 9. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa foram empregadas para auxílio na estruturação das tabelas em Markdown e revisão sintática do texto. O planejamento metodológico, a definição dos papéis da equipe e a logística da sessão presencial permanecem sob responsabilidade autoral de Igor Dantas Araújo.

---

## 10. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, p. 245–266; Capítulo 12, Seção 12.2.3, p. 303–306).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. São Paulo: Editora Érica, 2005.
* RUBIN, Jeffrey. **Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests**. New York: John Wiley & Sons, 1994.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
* SNYDER, Carolyn. **Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces**. San Francisco: Morgan Kaufmann, 2003.

---
**Autor:** [Igor Dantas Araújo](https://github.com/IgorDARAUJO)  
**Revisor:** [Gabriel Cardone](https://github.com/gabriellcardone-06)