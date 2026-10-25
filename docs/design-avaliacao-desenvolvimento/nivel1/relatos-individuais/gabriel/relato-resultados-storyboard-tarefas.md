# Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-02)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 25/10/2026 | `1.0` | Consolidação e relato dos resultados da avaliação formativa do Storyboard 02 e dos diagramas HTA/CTT (TAR-02). | [Gabriel Cardone](https://github.com/gabriellcardone-06) | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | Claude (Anthropic) - usado para apoio na transcrição do áudio da sessão e formatação markdown da página |

---

## 1. Introdução e Objetivos do Relato

Este documento apresenta a consolidação dos resultados da avaliação formativa realizada sobre o **[Storyboard 02](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/nivel1/storyboards/#32-storyboard-02-pre-agendamento-no-programa-df-acessivel)** e os modelos de tarefa (**[HTA e CTT da TAR-02: Pré-agendamento no Programa DF Acessível](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/)**).

O objetivo principal desta avaliação foi investigar a verossimilhança da narrativa apresentada no storyboard, a clareza do caminho proposto para o pré-agendamento (atalho "Agendar DF Acessível", escolha do posto, escolha do dia e recebimento do comprovante) e a correção do fluxo de tarefas modelado, incluindo as exceções previstas no CTT (posto sem vagas e encerramento da sessão por inatividade). As perguntas aplicadas são as definidas no [Planejamento da Avaliação](../../planejamentos-individuais/Gabriel/gabriel-planejamento-avaliacao.md), e a estrutura deste relato segue o [Planejamento do Relato dos Resultados](../../planejamentos-individuais/Gabriel/gabriel-planejamento-relato-resultados-avaliacao.md).

---

## 2. Metodologia e Caracterização do Participante

A coleta de dados seguiu a metodologia de **entrevista semiestruturada** orientada por artefatos visuais. Antes do início das perguntas, o [Termo de Consentimento Livre e Esclarecido (TCLE)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/aspectos-eticos/#2-termo-de-consentimento-livre-e-esclarecido-tcle) e a autorização de uso de imagem foram assinados pelo participante, o que é registrado em voz alta no início da gravação.

Primeiro, o participante observou o Storyboard 02 na tela e respondeu às perguntas Q01 a Q06. Em seguida, foram exibidos e explicados brevemente os diagramas HTA e CTT da TAR-02, seguidos das perguntas QT01 a QT07.

### Perfil dos Envolvidos na Sessão:
* **Entrevistador:** Gabriel Cardone.
* **Perfil do Participante convidado (P02):** Adulto jovem que relatou já ter enfrentado, assim como um familiar, dificuldades de acessibilidade no transporte, enquadrando-se no contexto da persona [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/). Conforme o planejamento, não foram solicitados diagnóstico nem detalhes de saúde, e o participante é identificado apenas pelo código **P02**.
* **Ambiente e Recursos:** Sessão presencial em sala reservada, gravada em vídeo com celular, com o Storyboard 02 e os PDFs de HTA e CTT exibidos em um monitor.
* **Data e Duração:** 25/10/2026, com duração aproximada de **3 minutos e 20 segundos** de gravação.
* O vídeo da entrevista está disponível clicando [aqui](LINK_DO_VIDEO).

---

## 3. Sumário dos Dados Coletados

Durante a sessão, algumas perguntas do roteiro foram feitas em conjunto, numa mesma fala do entrevistador (Q01 a Q03; Q04 e Q05; QT01 e QT02; QT05 e QT06). Para manter a rastreabilidade, as respostas foram separadas por ID nas tabelas a seguir, com o instante aproximado do vídeo entre parênteses.

### 3.1 Consolidação das Respostas: Avaliação do Storyboard 02

<div align="center">
<p><strong>Tabela 1</strong> — Consolidação das Respostas sobre o Storyboard 02</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Artefato |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | **Clareza Narrativa** | *"Com suas palavras, o que acontece nessa história?"* | Entendeu que a personagem passa por um momento em que precisa de acessibilidade no transporte, acessa o site da SEMOB-DF e chega ao DF Acessível para conseguir o transporte até a fisioterapia (00:27). | **Conforme** |
| **Q02** | **Verossimilhança** | *"Essa situação é parecida com algo que você ou alguém da sua família já viveu?"* | Confirmou que um familiar já passou por essa situação e que ele próprio também já enfrentou esse tipo de problema (00:44). | **Conforme** |
| **Q03** | **Papel do Sistema** | *"Ficou claro o que o site fez em cada quadro?"* | Afirmou que ficou claro cada etapa do site retratada nos quadros (00:44). | **Conforme** |
| **Q04** | **Escolha do Posto e da Data** | *"A Larissa escolhe o posto mais próximo de casa e depois o dia [...]. Essa ordem pra você faz sentido?"* | Considerou a ordem compreensível, pois consegue entender cada etapa antes de seguir para a próxima (01:18). A segunda parte da pergunta ("o que mais gostaria de saber antes de escolher") não foi aplicada nesta fala. | **Conforme** |
| **Q05** | **Reação da Persona e Confiança** | *"Você se sentiria com o transporte garantido ou que outra informação gostaria de ter?"* | Disse que se sentiria seguro **desde que** o comprovante traga uma revisão do que foi escolhido em cada etapa: *"[...] recebe o comprovante de que você efetuou cada uma delas com uma revisão do que foi escolhido, eu acho que fica claro o que vai ser feito"* (01:18). | **Ajustar** |
| **Q06** | **Engajamento e Melhorias** | *"Você usaria esse caminho como é atualmente no site ou você mudaria alguma coisa?"* | Não mudaria nada: *"Eu acho que esse caminho é o ideal, é simples de entender, é fácil e rápido"* (01:36). | **Conforme** |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

### 3.2 Consolidação das Respostas: Análise de Tarefas (TAR-02 - HTA e CTT)

<div align="center">
<p><strong>Tabela 2</strong> — Consolidação das Respostas sobre a Análise de Tarefas (TAR-02)</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Modelo |
| :---: | :--- | :--- | :--- | :---: |
| **QT01** | **Sequência Lógica** | *"Os passos do diagrama correspondem ao que você faria na prática [...] ou falta alguma coisa?"* | Considerou o fluxo completo e fiel ao que faria (*"Acho que é tudo completo, realmente o que eu faria"*) (02:20). | **Validade Confirmada** |
| **QT02** | **Caminho até o Serviço** | *"[...] onde você procuraria o agendamento primeiro?"* (feita junto com QT01) | O participante respondeu apenas sobre a completude dos passos e não indicou onde procuraria o serviço primeiro. Não comentou o caminho em três portais (SEMOB-DF → Participa DF → Na Hora). | **Inconclusivo** |
| **QT03** | **Entradas e Feedback** | *"Em cada passo o sistema responde com algo, por exemplo a lista de postos, calendários [...]. Essas respostas seriam suficientes para você saber se está no caminho certo?"* | Considerou as respostas do sistema suficientes (*"Para mim está tudo claro"*) (02:35). | **Validade Confirmada** |
| **QT04** | **Concorrência (CTT 3.3)** | *"Antes de escolher o dia você conferiria a própria agenda ou de alguém que acompanha?"* | Confirmou que conferiria a própria agenda antes de escolher o dia. Não mencionou a agenda de um acompanhante (02:41). | **Validade Confirmada (parcial)** |
| **QT05** | **Exceções (CTT 3.5 / HTA 3.2.2)** | *"Se o posto não tiver vagas, você voltaria e trocaria de local?"* | Só trocaria de posto se o novo local fosse acessível; caso contrário, tentaria de novo para conseguir uma data mais próxima (*"Se fosse acessível, eu trocaria ou retentaria e remarcar para uma data mais próxima"*) (02:53). | **Ajustar** |
| **QT06** | **Tempo de Sessão (CTT 3.6)** | *"Como você reagiria no caso de você ter que agendar e o site deslogar?"* | Disse que abandonaria o site e procuraria a central de atendimento para registrar uma reclamação (03:05). | **Ajustar** |
| **QT07** | **Simplicidade** | *"Alguma etapa seria muito complexa ou difícil de fazer, você acha?"* | Avaliou todas as etapas como fáceis (*"Tudo é muito fácil, muito acessível"*) (03:13). | **Validade Confirmada** |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 4. Análise Qualitativa e Registro de Problemas

O participante entendeu a narrativa do storyboard sem precisar de explicação e reconheceu a situação como real, tanto na própria experiência quanto na de um familiar. Ele aceitou a sequência posto → dia → comprovante e considerou o caminho do storyboard simples e rápido. Quanto aos diagramas, o participante concordou com a sequência principal e com os retornos do sistema. As ressalvas surgiram nas **exceções** modeladas no CTT: o que fazer quando o posto não tem vagas e quando a sessão expira. Também surgiu uma ressalva sobre o **conteúdo do comprovante**, que é onde se apoia a confiança de que o transporte está garantido.

---

## 5. Recomendações e Próximos Passos (Ciclo de Iteração)

O **Storyboard 02** e o fluxo principal dos modelos **HTA/CTT da TAR-02** foram validados pelo participante. As exceções e o comprovante precisam de ajustes. As recomendações para as próximas fases do projeto são:

1. **Ajuste dos modelos de tarefa (PROB-01 e PROB-02):** Acrescentar ao CTT e ao HTA a alternativa "ver próximas datas neste posto" no tratamento de posto sem vagas e reforçar, no nó 3.6, a retomada do último passo após a expiração da sessão.
2. **Avanço para a Prototipação em Papel:** Manter o atalho direto "Agendar DF Acessível" e a sequência posto → dia → comprovante, e incluir no protótipo:
    * lista de postos com endereço, recursos de acessibilidade e próxima data disponível;
    * aviso de tempo de sessão com a opção "Continuar";
    * tela de revisão antes da confirmação e comprovante com resumo do agendamento.

Essas recomendações estão incorporadas ao [Planejamento da Avaliação do Protótipo de Papel (TAR-02)](../../planejamentos-individuais/Gabriel/gabriel-planejamento-av-prototipo-papel.md).

---

## 6. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de IA Generativa (Claude, da Anthropic) foram utilizadas para verificação de ortografia e escrita em markdown.
---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira et al. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. (Capítulo 11: Planejamento da Avaliação de IHC, Seção 11.7.5, p. 263–264).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
