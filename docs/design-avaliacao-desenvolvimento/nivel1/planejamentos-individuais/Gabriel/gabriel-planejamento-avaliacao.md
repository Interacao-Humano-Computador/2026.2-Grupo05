## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 20/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Storyboard 02 e da Análise de Tarefas (TAR-02) via DECIDE. | [Gabriel Cardone](https://github.com/gabriellcardone-06) | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | Claude (Anthropic) - usado para revisão e estruturação do markdown. |

---

# Planejamento da Avaliação do Storyboard e da Análise de Tarefas (TAR-02)

Neste documento, apresenta-se o **Planejamento da Avaliação do Storyboard e da Análise de Tarefas** referente à **TAR-02 (Pré-agendamento no Programa DF Acessível)**. Trata-se de um planejamento individual desenvolvido para orientar a avaliação formativa do **Storyboard 02** e dos modelos de **Análise Hierárquica de Tarefas (HTA)** e **Árvores de Tarefas Concorrentes (CTT)** associados.

O planejamento foi elaborado aplicando o **Framework DECIDE** (Barbosa et al., 2021), que estrutura as atividades de avaliação em seis etapas interligadas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

A avaliação formativa dos artefatos busca investigar a qualidade conceitual e a adequação da nova funcionalidade proposta para o site da **SEMOB-DF** (o pré-agendamento no Programa DF Acessível, que o site não oferece atualmente), antes do desenvolvimento de protótipos de média e alta fidelidade (Barbosa et al., 2021).

### 1.1 Objetivos da Avaliação do Storyboard 02
* **Verificar a verossimilhança contextual:** Avaliar se a narrativa retratada no [Storyboard 02](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/nivel1/storyboards/#32-storyboard-02-pre-agendamento-no-programa-df-acessivel) reflete com fidelidade a situação de uma pessoa com mobilidade reduzida temporária que precisa descobrir, sozinha e pelo celular, como conseguir transporte adaptado para um compromisso de saúde.
* **Validar a clareza da proposta de valor:** Confirmar se o usuário compreende o caminho retratado: um atalho "Agendar DF Acessível" no site da SEMOB-DF, a escolha do posto, a escolha do dia e o recebimento do comprovante por e-mail e WhatsApp.
* **Avaliar a confiança e a aceitação da solução:** Identificar se o participante sentiria segurança de que o transporte está garantido ao receber o comprovante e se o fluxo retratado (curto e feito em casa) é preferível ao que ele conhece.
* **Identificar lacunas da narrativa:** Descobrir o que o storyboard omite e que o participante considera importante (por exemplo, a condição de acessibilidade do posto, documentos exigidos ou o conteúdo do comprovante).

### 1.2 Objetivos da Avaliação da Análise de Tarefas (TAR-02 - HTA e CTT)
* **Avaliar a correção e completude do fluxo de tarefas:** Verificar se a sequência de passos modelada no [HTA da TAR-02](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/) (acessar o pré-agendamento pelo atalho da página inicial da SEMOB-DF, escolher o posto e o dia e receber o comprovante) representa fielmente as ações que o usuário realiza ou esperaria realizar.
* **Validar a concorrência do sistema:** Verificar se as relações modeladas no [diagrama CTT](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/) (conferência da agenda pessoal e do acompanhante em paralelo à consulta de vagas) refletem a experiência real.
* **Avaliar a localização proposta para o serviço:** Verificar se o participante esperaria encontrar o pré-agendamento na página inicial da SEMOB-DF, por meio do atalho "Agendar DF Acessível" proposto no HTA e no storyboard.
* **Identificar gargalos e oportunidades de reprojeto:** Descobrir etapas onde o usuário possa cometer erros ou abandonar a tarefa, em especial nas operações classificadas como de maior risco no HTA (1.1 e 2.2).

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos da avaliação, elaborou-se um conjunto de perguntas específicas orientadas pela literatura de IHC (Barbosa et al., 2021). As perguntas são abertas e formuladas de modo neutro, sem sugerir a resposta esperada.

### 2.1 Tabela de Perguntas: Avaliação do Storyboard 02

<div align="center">
<p><strong>Tabela 1</strong> — Roteiro de Perguntas para Avaliação do Storyboard 02</p>
</div>

| ID | Categoria / Foco | Pergunta Orientada ao Participante | Resposta Esperada / Critério de Aceitação |
| :---: | :--- | :--- | :--- |
| **Q01** | **Clareza Narrativa** | Com suas palavras, o que acontece nesta história representada nos quadrinhos? | O participante consegue resumir a história (necessidade de transporte, escolha do posto, escolha do dia, comprovante) sem explicações adicionais do avaliador. |
| **Q02** | **Verossimilhança** | A situação da Larissa (precisar de transporte adaptado para um compromisso de saúde e procurar como agendar pelo celular, em casa) é parecida com algo que você ou alguém que você conhece já viveu? | O participante valida a necessidade e o contexto de uso, ou relata como resolveu situação semelhante. |
| **Q03** | **Atuação do Sistema** | Ficou claro o que o site faz em cada quadro? Houve algum momento em que você não entendeu o que estava acontecendo na tela? | O participante identifica o atalho "Agendar DF Acessível", a escolha do posto, a escolha da data e o envio do comprovante, sem apontar quadros confusos. |
| **Q04** | **Escolha do Posto e da Data** | Na história, a Larissa escolhe o posto mais próximo de casa e depois o dia. Essa ordem e esses critérios fazem sentido para você? O que mais você gostaria de saber antes de escolher? | O participante considera a ordem lógica ou sugere informações adicionais (endereço, acessibilidade do posto, horários, documentos). |
| **Q05** | **Reação da Persona e Confiança** | No final, a Larissa se sente tranquila ao receber o comprovante por e-mail e WhatsApp. Isso faria você sentir que o transporte está garantido? Que outra informação você esperaria receber? | O participante considera o comprovante suficiente ou aponta o que faltaria (dia, horário, endereço, contato, como cancelar). |
| **Q06** | **Engajamento e Melhorias** | Você usaria um caminho como esse para agendar transporte adaptado? O que mudaria na história? | O participante expressa interesse e sugere ajustes ou melhorias no fluxo. |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

### 2.2 Tabela de Perguntas: Avaliação da Análise de Tarefas (TAR-02 - HTA e CTT)

<div align="center">
<p><strong>Tabela 2</strong> — Roteiro de Perguntas para Validação da Análise de Tarefas (HTA e CTT)</p>
</div>

| ID | Categoria / Foco | Pergunta Orientada ao Participante | Resposta Esperada / Critério de Aceitação |
| :---: | :--- | :--- | :--- |
| **QT01** | **Sequência Lógica** | Os passos mostrados no diagrama (chegar ao serviço, escolher o posto e escolher o dia) correspondem ao que você faria na prática? Falta ou sobra algum passo? | O participante concorda com a sequência ou aponta passos faltantes ou desnecessários. |
| **QT02** | **Caminho até o Serviço** | No diagrama, o pré-agendamento começa por um atalho na página inicial do site da SEMOB-DF. Você esperaria encontrar o serviço ali? Onde procuraria primeiro? | O participante indica onde buscaria o serviço e avalia se o caminho proposto (operações 1.1 e 1.2) é intuitivo. |
| **QT03** | **Entradas e Feedback** | Para cada passo, o diagrama indica o que o sistema mostra de resposta (por exemplo, a lista de postos e o calendário). Essas respostas seriam suficientes para você saber que está no caminho certo? | O participante avalia a utilidade das entradas e dos feedbacks informados na tabela HTA. |
| **QT04** | **Concorrência com a Vida Real** | Antes de escolher o dia, o diagrama prevê que a pessoa confira a própria agenda e a disponibilidade de quem a acompanha. Isso é algo que você faria? Em que momento? | O participante valida a tarefa paralela (CTT 2.4) ou indica que ela ocorre em outro momento do fluxo. |
| **QT05** | **Simplicidade do Fluxo** | Você acha que alguma etapa desta tarefa é muito complexa ou exige muitos cliques? Alguma etapa seria difícil de fazer pelo celular? | O participante opina sobre a simplicidade estrutural da tarefa e sobre a adequação ao uso em dispositivo móvel. |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

Para este planejamento formativo, selecionou-se o **Método de Investigação por Entrevista Semiestruturada** guiada por artefatos visuais (Barbosa et al., 2021, Cap. 11 e 12).

* **Justificativa da Escolha:** A entrevista semiestruturada permite ao avaliador explorar em profundidade as opiniões, percepções e interpretações do usuário sobre o [Storyboard 02](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/nivel1/storyboards/#32-storyboard-02-pre-agendamento-no-programa-df-acessivel) e os diagramas da [TAR-02](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/), com o mesmo roteiro básico para todos os participantes, mas com flexibilidade para aprofundar os comentários qualitativos sem engessar a conversa (Barbosa et al., 2021). O método também é adequado ao perfil do participante, para quem uma conversa guiada é menos custosa do que testar um protótipo funcional.
* **Instrumentos de Suporte:** Apresentação da imagem do Storyboard 02 (com leitura em voz alta de cada quadro, já que a caligrafia dos quadros pode dificultar a leitura na tela) e exibição explicada dos diagramas HTA e CTT da tarefa durante a entrevista remota.
* **Papéis na sessão:** Conforme a premissa 6 do [Cronograma e Logística das Sessões](../../cronograma-e-logistica-das-sessoes.md), **Gabriel Cardone** atua como entrevistador, sem intervir nas respostas, para evitar que o participante se sinta constrangido ao criticar o artefato.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Recrutamento e Perfil do Participante
Em conformidade com a literatura de IHC (Barbosa et al., 2021), o recrutamento de participantes para avaliações formativas deve focar na representatividade do público-alvo primário.

* **Perfil do Convidado (P02):** Pessoa com mobilidade reduzida (temporária ou permanente) que usa ou já precisou de transporte adaptado, com perfil alinhado à persona [Larissa Ferreira Lima](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/) (adulto jovem, em recuperação de lesão ou com deficiência de locomoção, que usa o celular para resolver serviços e possui smartphone Android/iOS com pacote de dados). Na impossibilidade de encontrar esse perfil, aceita-se como substituto um familiar ou acompanhante que já tenha agendado transporte adaptado para outra pessoa.
* **Canal de Recrutamento:** Rede de contatos da equipe (familiares e conhecidos), sob responsabilidade de Gabriel Cardone, com confirmação até 16/10/2026.
* **Quantidade:** 1 participante convidado para a sessão individual de avaliação.
* **Adaptações de Acessibilidade:** Perguntar na confirmação se o participante precisa de algum ajuste (tempo extra, uso do celular em vez do computador, pausas, leitura em voz alta dos quadros). A sessão é remota para que a pessoa participe de casa, sem necessidade de deslocamento.

### 4.2 Ferramentas e Infraestrutura Tecnológica
* **Ambiente de Gravação:** Sala reservada com cadeira.
* **Materiais Preparados:** Arquivos digitais do Storyboard 02, resumo do [Cenário 1](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-1-pre-agendamento-df-acessivel/) e da persona, diagramas HTA/CTT da TAR-02 (em PDF) e o Termo de Consentimento Livre e Esclarecido (TCLE) em formato PDF e câmera.

### 4.3 Cronograma e Execução Individual

<div align="center">
<p><strong>Tabela 3</strong> — Cronograma da Sessão Individual de Avaliação</p>
</div>

| Parâmetro | Detalhamento da Sessão |
| :--- | :--- |
| **Sessão:** | S2, conforme o [Cronograma e Logística das Sessões](../../cronograma-e-logistica-das-sessoes.md). |
| **Data e Horário:** | 20/10/2026 às 14:00 (janela de 30 min). |
| **Local / Canal:** | Presencialmente em uma sala reservada. |
| **Avaliador Responsável (condução):** | **Gabriel Cardone**. |
| **Participante Convidado:** | **P02**, pessoa com mobilidade reduzida, recrutada conforme o perfil primário. |
| **Duração Estimada:** | **10 a 15 minutos** |
| **Custo Estimado:** | **R\$ 0,00**. |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026), com base no Cronograma e Logística das Sessões (Rocho, 2026).</em></p>
</div>

### 4.4 Roteiro Resumido da Sessão

<div align="center">
<p><strong>Tabela 4</strong> — Distribuição de Tempo da Sessão (baseada no roteiro do teste piloto)</p>
</div>

| Etapa | Atividade | Tempo Est. |
| :---: | :--- | :---: |
| **1** | Boas-vindas e objetivo da sessão. | 1 min |
| **2** | Leitura do TCLE, aceite verbal e **início da gravação**. | 2 min |
| **3** | Perfil do participante (idade, rotina de transporte, experiência com transporte adaptado, uso do celular). | 2 min |
| **4** | Contextualização: persona Larissa Ferreira Lima e resumo do Cenário 1. | 1 min |
| **5** | Exibição do Storyboard 02, quadro a quadro. | 1 min |
| **6** | Perguntas Q01 a Q06 (Tabela 1). | 3 min |
| **7** | Exibição dos diagramas HTA e CTT e perguntas QT01 a QT05 (Tabela 2). | 3 min |
| **8** | Comentários finais, agradecimento e **fim da gravação**. | 1 min |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026), com base no Planejamento e Protocolo do Teste Piloto. Total estimado: 44 min.</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

Toda a conduta da avaliação é pautada nos princípios éticos de pesquisas com seres humanos descritos na literatura de IHC (Barbosa et al., 2021, Seção 7.4):

1. **Apresentação do TCLE:** Antes de iniciar qualquer pergunta ou exibição de tela, o avaliador apresentará o [Termo de Consentimento Livre e Esclarecido (TCLE)](https://interacao-humano-computador.github.io/2026.2-Grupo05/assets/PDFs/TCLE_Pesquisa_Transporte.pdf), explicando os objetivos do estudo, o caráter exclusivamente acadêmico e a ausência de riscos físicos ou financeiros.
2. **Autorização de Gravação:** A gravação de áudio e imagem da tela só será iniciada após a leitura e o aceite verbal e registrado do participante no TCLE.
3. **Garantia de Anonimato e Desistência:** Será assegurado o sigilo dos dados pessoais do participante (utilizando o identificador **P02**) e o direito de interromper a entrevista a qualquer momento, sem qualquer penalidade.
4. **Cuidado com Informações de Saúde:** Como o tema envolve deficiência e tratamento de saúde, as perguntas de perfil serão feitas de forma não invasiva. O participante não é obrigado a relatar diagnóstico, condição ou histórico clínico, e qualquer informação de saúde espontaneamente compartilhada será tratada como dado sensível, registrada apenas de forma anonimizada.
5. **Neutralidade do Condutor:** O avaliador não defenderá o storyboard nem sugerirá respostas, e acomodará silêncios para dar tempo ao participante. 
6. **Foco no Artefato:** Será reforçado que o objeto da avaliação é o storyboard e a análise de tarefas, e que críticas são bem-vindas e não geram qualquer prejuízo ao participante.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Após a realização da entrevista de avaliação, os dados brutos (gravações de mídia e anotações do observador) passarão pela fase de interpretação e consolidação (Barbosa et al., 2021, Seção 11.7.4):

1. **Triagem Qualitativa:** As falas, hesitações e sugestões do participante serão transcritas e agrupadas por categorias de análise (clareza, utilidade, confiança, problemas identificados na sequência de tarefas e sugestões de melhoria).
2. **Confronto de Modelos:** As respostas do participante serão comparadas diretamente com a estrutura planejada na [TAR-02 (HTA/CTT)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel/) para identificar possíveis discrepâncias entre a visão do designer e o modelo mental do usuário. Em particular, serão confrontados (a) o caminho real em três portais com o atalho idealizado no storyboard e (b) as operações de maior risco do HTA (1.2 e 3.2.1) com as dificuldades relatadas.
3. **Registro por Tópico:** A ficha preenchida pelo observador até 24 horas depois da sessão registrará, para cada pergunta (Q01 a Q06 e QT01 a QT05), o resumo da resposta, os tempos e as hesitações observadas.
4. **Encaminhamento para o Relato dos Resultados:** As descobertas consolidadas servirão de insumo direto para o documento de [Planejamento do Relato dos Resultados](gabriel-planejamento-relato-resultados-avaliacao.md) e para o relato final da avaliação do Storyboard e da Análise de Tarefas, fornecendo recomendações de reprojeto para as próximas etapas do ciclo de vida.

---

## 7. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa (Claude, da Anthropic) foram empregadas para auxílio na estruturação do texto em markdown e correção de eventuais erros ortográficos.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento da Avaliação de IHC, p. 245–266; Capítulo 12: Métodos de Avaliação de IHC, p. 267–308).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.