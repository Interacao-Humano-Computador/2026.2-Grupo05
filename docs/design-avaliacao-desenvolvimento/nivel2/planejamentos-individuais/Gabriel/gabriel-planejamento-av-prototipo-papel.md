## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 25/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Papel (TAR-02) via DECIDE para teste presencial. | [Gabriel Cardone](https://github.com/gabriellcardone-06) | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | Claude (Anthropic) - formatação markdown da página |

---

# Planejamento da Avaliação do Protótipo de Papel (TAR-02)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Papel** referente à **[TAR-02 (Pré-agendamento no Programa DF Acessível)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/)**. Trata-se de um planejamento individual desenvolvido para orientar a avaliação formativa presencial do protótipo de baixa fidelidade confeccionado em papel, representando a versão para celular do site da **SEMOB-DF** com um atalho direto para o pré-agendamento no Programa DF Acessível.

A avaliação será conduzida de forma empírica presencial, envolvendo a simulação de uso por um participante representante da persona [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/). O protótipo incorpora as recomendações do [Relato dos Resultados da Avaliação do Storyboard 02 e da TAR-02](../../../nivel1/relatos-individuais/gabriel/relato-resultados-storyboard-tarefas.md). O planejamento foi estruturado aplicando o **Framework DECIDE** (Barbosa et al., 2021), que organiza o estudo nas seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

Conforme Barbosa et al. (2021, Cap. 12, p. 303), a prototipação em papel é um método de observação de uso voltado à avaliação formativa, ideal para explorar ideias de design, validar o modelo conceitual e identificar problemas de IHC antes do desenvolvimento de software executável.

### 1.1 Objetivos Principais
* **Identificar problemas de usabilidade e navegação:** Detectar falhas de layout, rótulos confusos, botões ambíguos ou áreas de toque pequenas nas telas de papel durante a realização do pré-agendamento.
* **Avaliar a localização do serviço:** Verificar se o participante encontra, a partir da página inicial da SEMOB-DF e sem indicação do avaliador, o atalho "Agendar DF Acessível".
* **Avaliar a confiança no resultado:** Verificar se a tela de revisão e o comprovante com o resumo do agendamento fazem o participante sentir que o transporte está garantido (ressalva da Q05 no relato anterior).
* **Coletar sugestões de reprojeto:** Obter feedback direto para aprimorar os elementos visuais e o fluxo de interação antes da construção do protótipo de alta fidelidade.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos da avaliação, foram elaboradas perguntas investigativas aplicadas durante e após a simulação com o protótipo de papel (Barbosa et al., 2021):

<div align="center">
<p><strong>Tabela 1</strong> — Roteiro de Perguntas Investigativas da Avaliação</p>
</div>

| ID | Categoria / Foco | Pergunta de Investigação da Avaliação | Critério de Aceitação / Resposta Esperada |
| :---: | :--- | :--- | :--- |
| **Q01** | **Localização do Serviço** | O participante encontra o atalho "Agendar DF Acessível" na página inicial da SEMOB-DF sem ajuda do avaliador? | O participante toca no atalho correto na primeira tentativa ou após uma única exploração, sem pedir ajuda. |
| **Q02** | **Interpretação de Rótulos** | Os termos desenhados nas telas e peças de papel (ex.: "Pré-agendamento", "Documentos necessários", "Próxima data disponível", "Recursos de acessibilidade") são compreensíveis? | O participante explica com suas palavras o que é o pré-agendamento e o que cada rótulo indica, sem pedir explicações. |
| **Q03** | **Feedback e Confiança** | A tela de revisão e o comprovante (e-mail e WhatsApp) com posto, endereço, data e horário fazem o participante sentir que o transporte está garantido? | O participante confirma os dados na revisão e declara confiança no agendamento, ou aponta a informação que faltou. |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método selecionado é a **Prototipação em Papel (Barbosa et al., 2021, Seção 12.2.3)**, enquadrado como um **Método de Observação de Uso (Empírico)** em ambiente controlado presencial.

* **Justificativa:** Trata-se de uma técnica ágil, de baixo custo e altamente interativa para testes formativos com usuários reais. Permite simular o comportamento da versão para celular do site manipulando folhas de papel, post-its e cartas recortadas, sem escrever código, e corrigir rótulos ou layouts no próprio papel entre uma tarefa e outra.
* **Técnica Complementar:** Durante a simulação de uso, o participante será incentivado a utilizar a técnica de **Pensar em Voz Alta (*Think Aloud*)**, verbalizando suas dúvidas, intenções e expectativas a cada toque simulado.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Confecção do Protótipo em Papel
O protótipo será construído à mão em folhas de papel, contendo:
* **Moldura do Dispositivo:** Um molde em papel no formato do site para delimitar a área da tela.
* **Telas Base:** Folhas de papel com os esboços das seguintes telas:
    1. **Página inicial da SEMOB-DF**, com o atalho "Agendar DF Acessível" entre outras opções do menu, para não induzir a escolha;
    2. **Apresentação do pré-agendamento**, com uma frase explicando o serviço e a lista de documentos necessários;
    3. **Lista de postos de atendimento**, ordenada por proximidade, com endereço, região administrativa, recursos de acessibilidade e próxima data disponível de cada posto;
    4. **Calendário do posto**, com dias disponíveis diferenciados por cor **e** por ícone, e áreas de toque amplas;
    5. **Revisão do agendamento**, com posto, endereço, data e horário e o botão "Confirmar pré-agendamento";
    6. **Comprovante**, com o resumo do agendamento e a indicação de envio por e-mail e WhatsApp.

### 4.2 Definição dos Papéis da Equipe na Sessão Presencial
Conforme Barbosa et al. (2021, p. 304), a condução do teste presencial exige a distribuição clara das atribuições:

* **Usuário / Participante:** Recrutado conforme o perfil da persona, realiza as tarefas interagindo com o papel (apontando o dedo ou uma caneta para simular toques na tela).
* **Avaliador "Computador"/Observador (Gabriel Cardone):** Responsável por manipular o protótipo de papel na mesa, trocando telas e sobrepondo as peças móveis estritamente em reação às ações do participante. **O "computador" não deve dar dicas nem explicar como usar a interface.**

### 4.3 Recrutamento e Perfil do Participante
* **Perfil do Convidado:** 1 participante convidado presencialmente, representante do público-alvo primário ([Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/)): pessoa com mobilidade reduzida (temporária ou permanente) que usa ou já precisou de transporte adaptado. Na impossibilidade de encontrar esse perfil, aceita-se um familiar ou acompanhante que já tenha agendado transporte adaptado para outra pessoa.
* **Canal de Recrutamento:** Rede de contatos da equipe (familiares e conhecidos), sob responsabilidade de Gabriel Cardone.
* **Quantidade:** 1 usuário para a sessão de teste presencial.
* **Adaptações de Acessibilidade:** Perguntar na confirmação se o participante precisa de algum ajuste (mesa na altura adequada para cadeira de rodas, uso de caneta em vez do dedo, pausas ou tempo extra). A sessão pode ocorrer no local de preferência do participante para evitar deslocamento.

### 4.4 Infraestrutura e Equipamentos Presenciais
* **Local:** Mesa de trabalho/estudo organizada em ambiente tranquilo, iluminado e acessível, livre de distrações externas.
* **Equipamentos de Gravação:** Smartphone em suporte focado na mesa (capturando o manuseio do papel e o áudio da conversa).
* **Kit de Material de Apoio:** Termo de Consentimento (TCLE) previamente assinado, folha com o cenário e as instruções das tarefas, conjunto de telas e peças do protótipo em papel.

### 4.5 Roteiro de Tarefas da Sessão
As tarefas serão apresentadas oralmente, uma de cada vez, a partir do [Cenário 1](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-1-pre-agendamento-df-acessivel/): *"Você precisa de transporte adaptado para ir à fisioterapia daqui a um mês. Use o site da SEMOB-DF no celular para fazer o pré-agendamento."*

<div align="center">
<p><strong>Tabela 2</strong> — Tarefas Simuladas no Protótipo de Papel</p>
</div>

| ID Tarefa | Descrição da Tarefa | Operações Relacionadas (HTA/CTT) | Perguntas Investigadas |
| :---: | :--- | :--- | :--- |
| **TAR-02.1** | A partir da página inicial da SEMOB-DF, encontrar o serviço de pré-agendamento do DF Acessível e entender o que é o pré-agendamento. | HTA 1 (1.1 e 1.2) / CTT Ramo 1 (1.1 a 1.3) | Q01, Q02 |
| **TAR-02.2** | Escolher o posto de atendimento mais adequado. | HTA 2.1 / CTT 2.1 e 2.2 | Q02 |
| **TAR-02.3** | Escolher o dia e confirmar o pré-agendamento. | HTA 2.2 e 3.1 / CTT 2.5 e 3.2 | Q02, Q03 |
| **TAR-02.4** | Conferir a revisão e o comprovante do agendamento. | HTA 3.1 e 3.2 / CTT 3.1, 3.3 e 3.4 | Q03 |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

### 4.6 Cronograma de Execução Presencial

<div align="center">
<p><strong>Tabela 3</strong> — Cronograma da Sessão Presencial do Protótipo de Papel</p>
</div>

| Parâmetro | Detalhamento da Sessão Presencial |
| :--- | :--- |
| **Data e Horário:** | 28/10/2026 às 14:00. |
| **Local:** | Ambiente presencial reservado e acessível (sala na FCTE/UnB ou local de preferência do participante). |
| **Condutor / "Computador / Observador":** | **Gabriel Cardone**. |
| **Duração Prevista:** | **10 minutos** |
| **Orçamento Estimado:** | **R\$ 0,00** (uso de papéis, canetas e smartphone próprio para gravação). |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

A condução do teste presencial com o protótipo de papel atende às diretrizes éticas do livro-texto (Barbosa et al., 2021, Seção 7.4):

1. **Assinatura do TCLE Impresso:** No início da sessão presencial, o avaliador entregará o [Termo de Consentimento Livre e Esclarecido (TCLE)](https://interacao-humano-computador.github.io/2026.2-Grupo05/assets/PDFs/TCLE_Pesquisa_Transporte.pdf) impresso, explicando os objetivos acadêmicos da pesquisa e colhendo a assinatura do participante.
2. **Autorização de Imagem e Áudio:** O participante será informado de que a gravação focará nas mãos manipulando o papel sobre a mesa e na captação do áudio de suas impressões, sem exposição do rosto.
3. **Respeito e Anonimato:** Será garantido o anonimato do participante, identificado apenas por código, e a liberdade total de interromper o teste a qualquer momento sem qualquer encargo ou prejuízo.
4. **Cuidado com Informações de Saúde:** O participante não é obrigado a relatar diagnóstico, condição ou histórico clínico. Qualquer informação de saúde compartilhada espontaneamente será tratada como dado sensível e registrada apenas de forma anonimizada.
5. **Foco no Artefato:** Será reforçado que o objeto da avaliação é o protótipo, e não o participante, e que dificuldades encontradas indicam problemas da interface.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Os dados coletados na sessão presencial serão processados seguindo a abordagem de **análise qualitativa e ciclo iterativo rápido** (Barbosa et al., 2021, Seção 12.2.3):

1. **Análise de Mídia e Anotações:** O áudio e a gravação do manuseio do papel serão revisados para mapear o tempo de conclusão de cada tarefa, os pedidos de ajuda, os pontos de dúvida e as falhas na troca de peças do protótipo.
2. **Reprojeto Rápido no Papel:** Problemas de usabilidade simples identificados no papel (ex.: um rótulo confuso no calendário ou um botão pequeno no calendário) poderão ser corrigidos ou redesenhados diretamente no papel para validação rápida nas próximas iterações.
3. **Consolidação dos Resultados:** Todos os problemas identificados, sua classificação de severidade (níveis 0 a 4) e as propostas de correção serão estruturados e apresentados no documento de *Relato dos Resultados da Avaliação do Protótipo de Papel*, conforme o [Planejamento do Relato](gabriel-planejamento-relato-prot-papel.md).

---

## 7. Planejamento do Teste Piloto do Protótipo de Papel

Em cumprimento ao **Item 11 do checklist do Plano de Ensino** e à literatura de IHC (Barbosa et al., 2021, p. 260, 304), antes da realização do teste definitivo com o participante convidado, será executado um **teste piloto**:

* **Objetivo do Piloto:** Avaliar o próprio planejamento, testar o encaixe e a agilidade da troca das peças de papel pelo "computador", verificar o tempo de execução das tarefas e testar o enquadramento do celular na gravação da mesa.
* **Execução e Data:** O teste piloto será realizado presencialmente em **27/10/2026**, contando com um membro da equipe fazendo o papel de participante simulado.
* **Isenção de Dados (Conformidade com o Item 12 do Checklist):** Declara-se formalmente que os dados e vídeos do teste piloto servirão **exclusivamente para calibração** dos materiais de papel e do procedimento, **não sendo computados nos resultados finais da avaliação**.

---

## 8. Localização das Referências no Livro

Conforme as normas da disciplina, a fundamentação conceitual aplicada a este planejamento encontra-se nas seguintes seções do livro-texto oficial:

* **Obra:** BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
* **Localização Exata:** **Parte IV, Capítulo 11 — Planejamento da Avaliação de IHC, Seção 11.8 (*O Framework DECIDE*), páginas 264–265**; e **Capítulo 12 — Métodos de Avaliação de IHC, Seção 12.2.3 (*Prototipação em Papel*), páginas 303–306**.

---

## 9. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa (Claude, da Anthropic) foram empregadas para auxílio de formatação em markdown.

---

## 10. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, p. 245–266; Capítulo 12, Seção 12.2.3, p. 303–306).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
---