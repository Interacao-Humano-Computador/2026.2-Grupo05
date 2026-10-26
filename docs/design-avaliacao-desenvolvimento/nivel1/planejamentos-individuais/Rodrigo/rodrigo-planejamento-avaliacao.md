## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 13/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Storyboard 06 e da Análise de Tarefas (TAR-08) via DECIDE. | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | [Carlos Costa](https://github.com/carloshfgit) | Google Gemini - usado para formatação markdown da página |

---

# Planejamento da Avaliação do Storyboard e da Análise de Tarefas (TAR-08)

Neste documento, apresenta-se o **Planejamento da Avaliação do Storyboard e da Análise de Tarefas** referente à **TAR-08 (Registro de Reclamação sobre Ônibus a partir do Site da Semob)**. Trata-se de um planejamento individual desenvolvido para orientar a avaliação formativa do **Storyboard 06**, construído a partir do [Cenário 11](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/cenarios/cenario-11-reclamacao-onibus/), e dos modelos de **Análise Hierárquica de Tarefas (HTA)** e **GOMS** associados.

O Storyboard 06 retrata o **fluxo atual** da tarefa (6 quadros), evidenciando as dificuldades da persona [Cláudia Regina Santos](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/claudia-regina-santos/) ao tentar reclamar de um ônibus que passou direto pela parada, complementado pela discussão sobre a proposta de melhoria da [TAR-08](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-08-reclamacao-onibus/).

O planejamento foi elaborado aplicando o **Framework DECIDE** (Preece et al., 2005; Barbosa et al., 2021), que estrutura as atividades de avaliação em seis etapas interligadas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

A avaliação formativa dos artefatos busca investigar se o problema identificado no site da **SEMOB-DF** (a dificuldade de registrar uma reclamação sobre ônibus) é reconhecido pelos usuários e se a proposta de melhoria faz sentido para eles, antes do desenvolvimento de protótipos de alta fidelidade (Barbosa et al., 2021).

### 1.1 Objetivos da Avaliação do Storyboard 06

* **Verificar a verossimilhança contextual:** Avaliar se a situação retratada no [Storyboard 06](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/nivel1/storyboards/#36-storyboard-06-reclamacao-sobre-onibus-a-partir-do-site-da-semob) (ônibus que passa direto de madrugada, atraso no trabalho e tentativa de reclamação à noite) reflete experiências reais de passageiros do transporte coletivo do Distrito Federal.
* **Validar a percepção dos problemas do fluxo atual:** Confirmar se o participante reconhece como problemas reais o vocabulário institucional ("Ouvidoria"), a mudança do site da Semob para o Participa-DF, a exigência de cadastro e a falta de aviso sobre as informações necessárias (número do ônibus, horário e local).
* **Validar a clareza da proposta de valor:** Confirmar se o participante compreende o funcionamento do assistente "Reclamar de um ônibus" (checklist, escolha guiada do problema, resumo pronto e aviso de redirecionamento) e percebe a diferença entre as duas sequências.
* **Avaliar o engajamento e aceitação da solução:** Identificar se o participante usaria o assistente e se ele o motivaria a registrar reclamações que hoje deixa de fazer.

### 1.2 Objetivos da Avaliação da Análise de Tarefas (TAR-08 - HTA e GOMS)

* **Avaliar a correção e completude do fluxo de tarefas:** Verificar se a decomposição modelada no [HTA da TAR-08](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-08-reclamacao-onibus/) (reunir informações, encontrar o canal, acessar o Participa-DF, registrar a manifestação e guardar o protocolo) representa fielmente as ações mentais e físicas que o usuário realiza ao reclamar de um ônibus.
* **Validar os métodos e as regras de seleção:** Verificar se os métodos alternativos e as regras de seleção do [modelo GOMS](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-08-reclamacao-onibus/) (navegar pelo menu ou usar a busca; entrar com conta ou criar conta; preencher o formulário ou usar a assistente virtual) correspondem às estratégias reais do usuário, e se há métodos não modelados (por exemplo, telefone 162 ou busca no Google).
* **Verificar as hipóteses de erro:** Investigar se os erros previstos na classificação de Reason (escolher "Denúncia" em vez de "Reclamação", abandonar a tarefa ao mudar de site, errar a digitação no cadastro) são plausíveis para o participante.
* **Identificar gargalos e oportunidades de reprojeto:** Descobrir etapas em que o usuário possa desistir ou sentir incerteza, confirmando ou ajustando o critério p × c usado na decomposição.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos da avaliação, elaborou-se um conjunto de perguntas específicas orientadas pela literatura de IHC (Preece et al., 2005; Barbosa et al., 2021).

### 2.1 Tabela de Perguntas: Avaliação do Storyboard 06

<div align="center">
<p><strong>Tabela 1</strong> — Roteiro de Perguntas para Avaliação do Storyboard 06</p>
</div>

| ID | Categoria / Foco | Pergunta Orientada ao Participante | Resposta Esperada / Critério de Aceitação |
| :---: | :--- | :--- | :--- |
| **Q01** | **Clareza Narrativa** | Com suas palavras, o que acontece na primeira história? | O participante resume a história (ônibus passa direto, atraso, tentativa difícil de reclamar) sem explicações adicionais do avaliador. |
| **Q02** | **Verossimilhança** | Você já passou por algo parecido com o que aconteceu com a Cláudia na parada? Você reclamou? Como? | O participante valida a dor do ônibus que não para e relata se reclamou, por qual canal ou por que não reclamou. |
| **Q03** | **Percepção de Problemas** | Em qual quadro a Cláudia teve mais dificuldade? Por quê? | O participante aponta ao menos um dos problemas centrais (encontrar o canal, mudança de site, cadastro, falta do número do ônibus). |
| **Q04** | **Vocabulário** | Se você quisesse reclamar de um ônibus no site da Semob, que palavra ou botão procuraria? | O participante indica o termo que usaria, permitindo verificar se "Ouvidoria" corresponde ao seu vocabulário. |
| **Q05** | **Confiança** | O que você sentiria ao ser levado do site da Semob para outro site, como aconteceu com a Cláudia? | O participante comenta a sensação de insegurança ou indica que a mudança não seria um problema para ele. |
| **Q06** | **Compreensão da Proposta** | O que mudou na segunda história? | O participante identifica o botão "Reclamar de um ônibus", o checklist e o resumo pronto. |
| **Q07** | **Engajamento** | Você usaria essa opção se ela existisse no site? Ela faria você reclamar mais vezes? O que mudaria na história? | O participante expressa interesse e sugere ajustes ou melhorias no fluxo proposto. |

<div align="center">
<p><em>Fonte: Elaborado por [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (2026).</em></p>
</div>

### 2.2 Tabela de Perguntas: Avaliação da Análise de Tarefas (TAR-08 - HTA e GOMS)

<div align="center">
<p><strong>Tabela 2</strong> — Roteiro de Perguntas para Validação da Análise de Tarefas (HTA e GOMS)</p>
</div>

| ID | Categoria / Foco | Pergunta Orientada ao Participante | Resposta Esperada / Critério de Aceitação |
| :---: | :--- | :--- | :--- |
| **QT01** | **Sequência Lógica** | Os passos mostrados no diagrama (reunir as informações, encontrar onde reclamar, entrar no Participa-DF, preencher a reclamação e guardar o protocolo) correspondem ao que você faria na prática? | O participante concorda com a sequência ou aponta passos faltantes, desnecessários ou fora de ordem. |
| **QT02** | **Informações de Entrada** | Na hora em que o ônibus passa direto, você saberia dizer a linha, o número do ônibus, o horário e o local? Sabe onde fica o número do ônibus no veículo? | O participante confirma ou refuta a hipótese de que o número do ônibus é a informação mais difícil de obter (objetivo 1 da HTA). |
| **QT03** | **Métodos e Regras de Seleção** | Para encontrar onde reclamar, você navegaria pelo menu do site, usaria a busca do site ou pesquisaria no Google? Usaria outro canal, como o telefone 162? | O participante valida os métodos do GOMS ou indica métodos não modelados. |
| **QT04** | **Hipótese de Erro** | Entre "reclamação" e "denúncia", qual você escolheria para um ônibus que passou direto? Por quê? | O participante revela se a distinção entre os tipos de manifestação é clara (erro baseado em regras previsto na TAR-08). |
| **QT05** | **Simplicidade do Fluxo** | Alguma etapa desta tarefa faria você desistir? Qual? | O participante aponta os gargalos, permitindo confirmar ou ajustar o critério p × c da decomposição. |
| **QT06** | **Fluxo Proposto** | O checklist e o resumo pronto, mostrados antes de ir para o Participa-DF, tornariam a tarefa mais fácil? Falta alguma etapa? | O participante avalia se a HTA revisada da seção 4 da TAR-08 reduz o esforço e a incerteza. |

<div align="center">
<p><em>Fonte: Elaborado por [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

Para este planejamento formativo, selecionou-se o **Método de Investigação por Entrevista Semiestruturada** guiada por artefatos visuais (Barbosa et al., 2021, Cap. 11 e 12).

* **Justificativa da Escolha:** A entrevista semiestruturada permite ao avaliador explorar em profundidade as opiniões, percepções e experiências do participante sobre o [Storyboard 06](https://interacao-humano-computador.github.io/2026.2-Grupo05/design-avaliacao-desenvolvimento/nivel1/storyboards/#36-storyboard-06-reclamacao-sobre-onibus-a-partir-do-site-da-semob) e os modelos da [TAR-08](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-08-reclamacao-onibus/), garantindo flexibilidade para aprofundar relatos de experiências reais com ônibus e com canais de reclamação sem engessar a conversa (Barbosa et al., 2021). Como a tarefa avaliada é eventual, e não diária, os relatos de experiências passadas do participante são uma fonte importante para verificar as hipóteses da TAR-08.
* **Sequência de apresentação:** O fluxo atual do storyboard é apresentado e discutido **antes** do fluxo proposto, para que a percepção dos problemas (Q01 a Q05) não seja influenciada pela solução (Q06 e Q07). Os diagramas da TAR-08 são apresentados por último.
* **Instrumentos de Suporte:** Apresentação das imagens do Storyboard 06 e exibição explicada do diagrama HTA, da tabela de objetivos e do modelo GOMS da TAR-08 durante a entrevista. Como o modelo GOMS está em pseudocódigo, ele será apresentado em linguagem simples pelo avaliador.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Recrutamento e Perfil do Participante

Em conformidade com a literatura de IHC (Barbosa et al., 2021), o recrutamento de participantes para avaliações formativas deve focar na representatividade do público-alvo primário.

* **Perfil do Convidado:** Usuário primário do transporte público do Distrito Federal, com perfil alinhado à persona [Cláudia Regina Santos](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/claudia-regina-santos/) (adulto entre 35 e 55 anos, usuário de ônibus em horários de baixa frequência, como madrugada ou noite, com competência digital intermediária e smartphone com acesso à internet). Será dada preferência a quem já passou por algum problema com ônibus, tendo reclamado ou não.
* **Quantidade:** 1 participante convidado para a sessão individual de avaliação.

### 4.2 Ferramentas e Infraestrutura Tecnológica

* **Ambiente Virtual:** Sala de reunião remota no **Microsoft Teams** (com gravação de áudio e vídeo habilitada) ou sessão presencial.
* **Software de Reserva para Gravação:** 123APPS / OBS Studio / Smartphone dedicado para captura local de áudio e vídeo.
* **Materiais Preparados:** Arquivos digitais/impressos do Storyboard 06, diagrama HTA, tabela de objetivos e modelo GOMS da TAR-08 e o Termo de Consentimento Livre e Esclarecido (TCLE) em formato PDF.
* **Plano alternativo:** Como o perfil da persona tem competência digital intermediária, caso o participante tenha dificuldade com o Microsoft Teams, a sessão poderá ser feita por chamada de vídeo no WhatsApp ou presencialmente, com os materiais impressos.

### 4.3 Cronograma e Execução Individual

<div align="center">
<p><strong>Tabela 3</strong> — Cronograma da Sessão Individual de Avaliação</p>
</div>

| Parâmetro | Detalhamento da Sessão |
| :--- | :--- |
| **Data e Horário:** | 25/10/2026 às 15:00. |
| **Local / Canal:** | Sessão presencial / Reunião remota via Microsoft Teams. |
| **Avaliador Responsável:** | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (Condução da entrevista e apresentação). |
| **Participante Convidado:** | Vinícius (Passageiro do transporte coletivo do DF recrutado conforme o Perfil Primário). |
| **Duração Estimada:** | **15 a 30 minutos** (respeitando os limites de fadiga e tempo do participante). |
| **Custo Estimado:** | **R\$ 0,00** (uso de softwares e equipamentos próprios). |

<div align="center">
<p><em>Fonte: Elaborado por [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (2026).</em></p>
</div>

<div align="center">
<p><strong>Tabela 4</strong> — Roteiro de Tempo da Sessão</p>
</div>

| Etapa | Atividade | Tempo |
| :--- | :--- | :---: |
| 1 | Apresentação, leitura do TCLE e autorização da gravação | 3 min |
| 2 | Apresentação do fluxo do Storyboard 06 e perguntas Q01 a Q05 | 7 min |
| 3 | Apresentação da proposta e perguntas Q06 e Q07 (se aplicável) | 5 min |
| 4 | Apresentação da TAR-08 (HTA e GOMS) e perguntas QT01 e QT02 | 10 min |
| 5 | Comentários finais e agradecimento | 2 min |

<div align="center">
<p><em>Fonte: Elaborado por [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

Toda a conduta da avaliação é pautada nos princípios éticos de pesquisas com seres humanos estabelecidos nas Resoluções nº 466/2012 e nº 510/2016 do Conselho Nacional de Saúde (CNS) e na literatura de IHC (Barbosa et al., 2021, Seção 7.4):

1. **Apresentação do TCLE:** Antes de iniciar qualquer pergunta ou exibição de tela, o avaliador apresentará o [Termo de Consentimento Livre e Esclarecido (TCLE)](https://interacao-humano-computador.github.io/2026.2-Grupo05/assets/PDFs/TCLE_Pesquisa_Transporte.pdf), explicando os objetivos do estudo, o caráter exclusivamente acadêmico e a ausência de riscos físicos ou financeiros.
2. **Autorização de Gravação:** A gravação de áudio e imagem da tela só será iniciada após a leitura e o aceite verbal e registrado do participante no TCLE.
3. **Garantia de Anonimato e Desistência:** Será assegurado o sigilo dos dados pessoais do participante (utilizando identificadores como *Participante A*) e o direito de interromper a entrevista a qualquer momento, sem qualquer penalidade.
4. **Proteção de Terceiros:** Como o participante pode relatar experiências negativas reais com ônibus, motoristas ou empresas, nomes de pessoas, números de veículos e outros dados que identifiquem terceiros não serão transcritos nem publicados no relato dos resultados.
5. **Ausência de Interação com Sistemas Reais:** A avaliação utiliza apenas o storyboard e os diagramas. O participante não será solicitado a acessar o Participa-DF nem a registrar qualquer manifestação, evitando o envio de reclamações fictícias a um serviço público real.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Após a realização da entrevista de avaliação, os dados brutos (gravações de mídia e anotações do avaliador) passarão pela fase de interpretação e consolidação (Barbosa et al., 2021, Seção 11.7.4):

1. **Triagem Qualitativa:** As falas, hesitações e sugestões do participante serão transcritas e agrupadas por categorias de análise (clareza da narrativa, verossimilhança, problemas percebidos no fluxo atual, valor da proposta, problemas identificados na sequência de tarefas e sugestões de melhoria).
2. **Confronto de Modelos:** As respostas do participante serão comparadas diretamente com a estrutura planejada na [TAR-08 (HTA/GOMS)](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-08-reclamacao-onibus/), verificando cada hipótese de problema e de erro da análise de tarefas como **confirmada**, **não confirmada** ou **inconclusiva**, para identificar discrepâncias entre a visão do designer e o modelo mental do usuário.
3. **Análise da Comunicação Gráfica:** Trechos em que o participante não compreender um quadro ou precisar de explicação do avaliador serão registrados como possíveis falhas de comunicação gráfica do storyboard, considerando nível de detalhe, uso de texto, representação de emoções e passagem do tempo (Truong; Hayes; Abowd, 2006).
4. **Encaminhamento para o Relato dos Resultados:** As descobertas consolidadas servirão de insumo direto para o documento de [Planejamento do Relato dos Resultados do Storyboard](rodrigo-planejamento-relato-resultados-avaliacao.md), que define os modelos de consolidação, o registro de pontos positivos, a identificação de falhas e a lista de ajustes a serem incorporados no Storyboard 06, no Cenário 11, na persona e na TAR-08.

---

## 7. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa foram empregadas para auxílio na estruturação sintática das tabelas em Markdown e revisão gramatical. A definição dos objetivos, a elaboração das perguntas do roteiro, a logística de execução e a revisão final permanecem sob total responsabilidade autoral do integrante Rodrigo Barbosa.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento da Avaliação de IHC, p. 245–266; Capítulo 12: Métodos de Avaliação de IHC, p. 267–308).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. São Paulo: Editora Érica, 2005.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
* TRUONG, Khai N.; HAYES, Gillian R.; ABOWD, Gregory D. Storyboarding: an empirical determination of best practices and effective guidelines. In: **Proceedings of the 6th Conference on Designing Interactive Systems (DIS '06)**. New York: ACM, 2006. p. 12–21.

---
**Autor:** [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa)  
**Revisor:** [Carlos Costa](https://github.com/carloshfgit)
