# Planejamento da Avaliação do Protótipo de Alta Fidelidade (TAR-02)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 02/11/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Alta Fidelidade (TAR-02) via DECIDE, por meio de teste de usabilidade. | [Gabriel Cardone](https://github.com/gabriellcardone-06) | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | Claude (Anthropic) - usado para apoio na formatação markdown da página e correções ortográficas. |

---

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-02 (Pré-agendamento no Programa DF Acessível)](../../../../analise-de-requisitos/analise-de-tarefas/tar-02-df-acessivel.md)**. Trata-se de um planejamento individual desenvolvido para orientar a avaliação do protótipo digital interativo construído no **Figma**, que representa, na versão para celular do site da **SEMOB-DF**, a funcionalidade proposta de pré-agendamento de viagens do Programa DF Acessível.

O protótipo de alta fidelidade dá continuidade ao protótipo de papel avaliado no nível anterior. Conforme o [Relato dos Resultados da Avaliação do Protótipo de Papel](../../../nivel2/relatos-individuais/gabriel/relato-resultado-prot-papel.md), o fluxo em três etapas foi concluído sem pedidos de ajuda e não exigiu alterações. Por isso, ele foi mantido e agora recebe o acabamento visual definido no [Guia de Estilo](../../../../analise-de-requisitos/guia-de-estilo/introducao.md) do projeto.

O planejamento foi estruturado aplicando o **Framework DECIDE** (Preece et al., 2002 *apud* Barbosa et al., 2021, Seção 11.8), que organiza o estudo em seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

Segundo Barbosa et al. (2021, p. 288), o teste de usabilidade avalia a usabilidade de um sistema interativo a partir de experiências de uso dos seus usuários-alvo, e os objetivos da avaliação determinam quais critérios de usabilidade devem ser medidos. Nesta etapa, a avaliação continua sendo **formativa**: seu propósito é encontrar problemas no design detalhado antes da implementação.

### 1.1 Objetivos Principais
* **Avaliar a eficácia e a eficiência das três etapas do fluxo:** Verificar se os participantes escolhem os postos de embarque e de desembarque, escolhem o dia e enviam o laudo e o comprovante de residência sem ajuda, medindo o tempo, os erros e os pedidos de ajuda em cada etapa.
* **Confirmar a compreensão dos rótulos com acabamento final:** Verificar se os termos validados no papel ("Posto de embarque", "Posto de desembarque", "Concluir pré-agendamento", entre outros) continuam claros com tipografia, cores e componentes definitivos.
* **Verificar a conformidade com o Guia de Estilo:** Avaliar se os componentes do Figma seguem os padrões do projeto, como rótulos que informam o efeito da ação, diferença visual entre elementos de seleção e de ação, e feedback depois de cada ação (Guia de Estilo, [Elementos de Ação](../../../../analise-de-requisitos/guia-de-estilo/elementos-de-acao.md), Seções 4.1 a 4.3).
* **Avaliar aspectos de acessibilidade relevantes para a persona:** Verificar a legibilidade dos textos, o contraste e o tamanho das áreas de toque para o público da persona [Larissa Ferreira Lima](../../../../analise-de-requisitos/personas/larissa-ferreira-lima.md), que tem mobilidade reduzida.
* **Subsidiar o refinamento final:** Coletar dados quantitativos e qualitativos para ajustar o protótipo no Figma.

### 1.2 Metas de Usabilidade

Barbosa et al. (2021, p. 289) explicam que o teste de usabilidade permite verificar se o sistema atingiu metas de usabilidade definidas previamente. Para esta avaliação, foram estabelecidas as seguintes metas:

<div align="center">
<p><strong>Tabela 1</strong> — Metas de Usabilidade da Avaliação</p>
</div>

| ID | Fator de Usabilidade | Meta |
| :---: | :--- | :--- |
| **M01** | Eficácia | Pelo menos **2 dos 3 participantes** concluem cada uma das três tarefas sem pedir ajuda. |
| **M02** | Eficiência | O fluxo completo (TAR-02.1 a TAR-02.3) é concluído em até **3 minutos** por participante. |
| **M03** | Erros | No máximo **1 erro** (toque em elemento errado ou volta de tela não intencional) por tarefa, em média. |
| **M04** | Satisfação | Nenhum participante classifica a experiência como difícil na entrevista pós-teste. |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos, foram elaboradas perguntas investigativas respondidas pela observação das interações no Figma e pela entrevista pós-teste (Barbosa et al., 2021, p. 288–289). As perguntas Q01 e Q02 mantêm o mesmo foco da avaliação do protótipo de papel, o que permite comparar os resultados dos dois níveis.

<div align="center">
<p><strong>Tabela 2</strong> — Roteiro de Perguntas Investigativas da Avaliação</p>
</div>

| ID | Categoria / Foco | Pergunta de Investigação da Avaliação | Critério de Aceitação / Resposta Esperada |
| :---: | :--- | :--- | :--- |
| **Q01** | **Envio de Documentos** | O participante consegue enviar o laudo do profissional de saúde e o comprovante de residência e entende que cada documento foi enviado? | O participante envia os dois documentos sem pedir ajuda e reconhece a confirmação de envio de cada um. |
| **Q02** | **Interpretação de Rótulos** | Os termos da interface ("Pré-agendamento", "Posto de embarque", "Posto de desembarque", "Recursos de acessibilidade", "Concluir pré-agendamento") são compreensíveis? Com suas palavras, explique o que são cada um dos termmos. | O participante explica com suas palavras o que é o pré-agendamento, a diferença entre os postos e o que cada rótulo indica, sem pedir explicações. |
| **Q03** | **Conformidade com o Guia de Estilo** | Os botões de ação, os cartões de seleção de posto e o calendário são reconhecidos como elementos clicáveis e diferenciados entre si? | O participante distingue o que seleciona uma opção do que avança no fluxo, sem tocar em elementos não interativos. |
| **Q04** | **Acessibilidade e Legibilidade** | Os textos, o contraste das cores e o tamanho das áreas de toque são adequados para o participante? | O participante lê as informações sem aproximar a tela ou pedir ajuda e acerta os toques na primeira tentativa. |
| **Q05** | **Satisfação** | Como o participante avalia a facilidade de uso e o visual da funcionalidade? | O participante descreve a experiência como fácil ou muito fácil e diz que usaria a funcionalidade na vida real. |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método selecionado é o **Teste de Usabilidade** (Barbosa et al., 2021, Seção 12.2.1; Rubin e Chisnell, 2008), enquadrado como um **método de observação de uso (empírico)** com o protótipo interativo do Figma.

* **Justificativa:** Com o protótipo de alta fidelidade, a interface já tem aparência e comportamento próximos do produto final. Isso permite medir dados objetivos, como tempo, erros e taxa de sucesso, para cada tarefa e cada participante (Barbosa et al., 2021, p. 289), e compará-los com as metas da Tabela 1. A prototipação em papel, usada no nível anterior, é mais adequada a soluções de baixa e média fidelidade (Barbosa et al., 2021, p. 303).
* **Técnica Complementar:** Durante as tarefas, o participante será estimulado a **pensar em voz alta** (*think aloud*), verbalizando o que procura, o que espera que aconteça e suas dúvidas. Esses comentários ajudam a identificar a origem dos problemas observados (Barbosa et al., 2021, p. 289).
* **Entrevista Pós-teste:** Ao final das tarefas, será feita uma breve entrevista com as perguntas Q01 a Q05.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Protótipo no Figma
O protótipo será disponibilizado no modo de apresentação do Figma (*Prototype mode*), em um quadro de celular, em um computador e reproduzirá as mesmas telas do protótipo de papel:

1. **Apresentação do pré-agendamento**, com a explicação do serviço, as etapas e o botão "Agendar transporte";
2. **Posto de embarque**, com um mapa mostrando todos os postos disponíveis e a localização atual do aparelho;
3. **Posto de desembarque**, com um mapa mostrando todos os postos disponíveis;
4. **Dia**, com o calendário do mês em áreas de toque amplas;
5. **Documentos**, com os campos "Laudo do profissional de saúde" e "Comprovante de residência", com um botão "Selecionar arquivo", dois campos para preenchimento de telefone e email e o botão "Continuar";
6. **Comprovante**, com a mensagem de confirmação e pedido para verificação de celular e email.

As telas seguirão a sequência de diálogo "Pré-agendar viagem no DF Acessível" do Guia de Estilo ([Vocabulário e Padrões](../../../../analise-de-requisitos/guia-de-estilo/vocabulario-e-padroes.md), Seção 4.3), com estados interativos para seleção de posto, marcação do dia e confirmação de envio de cada documento.

### 4.2 Definição dos Papéis da Equipe na Sessão

* **Avaliador Condutor (Gabriel Cardone):** Recebe o participante, apresenta o TCLE e o cenário, conduz a entrevista pós-teste e **ajuda somente se for solicitado** durante as tarefas.
* **Avaliador Observador (Gabriel Cardone)** Cronometra cada tarefa e registra na ficha de observação os erros, os pedidos de ajuda, as hesitações e os comentários do participante.
* **Participante:** Interage com o protótipo no computador, utilizando um mouse para simular seu toque na tela como faria no site real.

### 4.3 Recrutamento e Perfil dos Participantes
* **Quantidade:** **3 participantes**, seguindo a recomendação de Steve Krug (2000, 2010).
* **Perfil Prioritário:** Pessoas com mobilidade reduzida (temporária ou permanente) que usam ou já precisaram de transporte adaptado, representantes da persona [Larissa Ferreira Lima](../../../../analise-de-requisitos/personas/larissa-ferreira-lima.md).
* **Critério de Exclusão:** O participante do protótipo de papel não será convidado novamente, pois já conhece o fluxo.

#### 4.3.1 Justificativa do Número de Participantes

A literatura de usabilidade não tem consenso sobre quantos participantes um teste deve ter. Diante do **tempo escasso** do cronograma da disciplina, adotou-se a lógica de **Steve Krug** (2000, 2010), que recomenda **3 ou 4 participantes** por rodada de teste. Os motivos são:

1. **Detecção da maioria dos problemas:** Com três ou quatro participantes, a maioria dos problemas de usabilidade já é detectada. Os problemas mais graves tendem a aparecer logo nos primeiros participantes.
2. **Análise no mesmo dia:** Um número reduzido de sessões permite que os resultados sejam analisados e consolidados no mesmo dia dos testes, o que é compatível com o prazo da entrega.
3. **Custo-benefício:** Para Krug, testar um participante já é 100% melhor do que não testar nenhum. É mais útil fazer rodadas pequenas e frequentes do que um único teste grande.

### 4.4 Infraestrutura e Equipamentos
* **Local:** Ambiente reservado, tranquilo e acessível (sala na FCTE/UnB ou local de preferência do participante, para não exigir deslocamento de quem tem mobilidade reduzida).
* **Dispositivo:** Computador com o protótipo aberto no aplicativo do Figma.
* **Gravação:** Gravação da tela do computador e do participante interagingo com o computador.
* **Material de Apoio:** TCLE, folha com o cenário e as tarefas, ficha de observação e dois arquivos PDF fictícios (laudo e comprovante de residência, sem dados reais) salvos no computador para simular o envio.

### 4.5 Roteiro de Tarefas da Sessão
As tarefas serão apresentadas uma de cada vez, a partir do [Cenário 1](../../../../analise-de-requisitos/cenarios/cenario-1-pre-agendamento-df-acessivel.md): *"Você precisa de transporte adaptado para ir à fisioterapia, em Taguatinga, daqui a um mês. Você mora em Ceilândia e já abriu, no celular, a página 'Agendar DF Acessível' do site da SEMOB-DF. Faça o pré-agendamento da viagem."*

<div align="center">
<p><strong>Tabela 3</strong> — Tarefas do Teste de Usabilidade</p>
</div>

| ID Tarefa | Descrição da Tarefa | Operações Relacionadas (HTA/CTT) | Perguntas Investigadas | Metas |
| :---: | :--- | :--- | :--- | :--- |
| **TAR-02.1** | Escolher o posto de embarque perto de casa e o posto de desembarque perto da clínica. | HTA 1 (1.1 e 1.2) / CTT Ramo 1 (1.1 a 1.4) | Q02, Q03, Q04 | M01, M03 |
| **TAR-02.2** | Escolher o dia da viagem. | HTA 2 / CTT Ramo 2 (2.1 a 2.3) | Q03, Q04 | M01, M03 |
| **TAR-02.3** | Enviar o laudo e o comprovante de residência, adicionar telefone e email e concluir o pré-agendamento. | HTA 3 (3.1 a 3.3) / CTT 3.1 a 3.4 | Q01, Q02, Q03 | M01, M03 |

<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

### 4.6 Cronograma das Sessões

<div align="center">
<p><strong>Tabela 4</strong> — Cronograma do Teste-Piloto e das Sessões</p>
</div>

| Sessão | Participante | Perfil | Data e Horário | Duração Prevista |
| :---: | :--- | :--- | :---: | :---: |
| **Piloto** | Integrante do Grupo 05 | Participante simulado | 04/11/2026 às 14:00 | 10 min |
| **Sessão 1** | P1 | Perfil prioritário | 02/11/2026 às 20:00 | 5 min |
| **Sessão 2** | P2 | Perfil prioritário ou alternativo | 06/11/2026 às 14:30 | 5 min |
| **Sessão 3** | P3 | Perfil prioritário ou alternativo | 06/11/2026 às 15:00 | 5 min |
<div align="center">
<p><em>Fonte: Elaborado por Gabriel Cardone (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

A condução do teste atende às diretrizes éticas do livro-texto (Barbosa et al., 2021, Seção 7.4):

1. **Assinatura do TCLE:** Antes de iniciar, o participante lerá e assinará o [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf), sendo informado sobre os objetivos acadêmicos da pesquisa.
2. **Autorização de Gravação:** A gravação da tela e do áudio só começa depois do aceite do participante.
3. **Anonimato:** Os participantes serão identificados apenas pelos códigos P1, P2 e P3  tanto no relato quanto na fala do avaliador durante a gravação.
4. **Cuidado com Informações de Saúde:** O participante não é obrigado a relatar diagnóstico ou condição de saúde. Qualquer informação desse tipo dita espontaneamente será tratada como dado sensível e registrada de forma anonimizada.
5. **Direito de Interrupção:** O participante pode interromper a sessão a qualquer momento, sem justificativa e sem prejuízo.
6. **Foco no Artefato:** Será reforçado que o objeto da avaliação é o protótipo, e não o participante.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Os dados serão analisados combinando abordagens quantitativas e qualitativas (Barbosa et al., 2021, p. 289):

1. **Análise Quantitativa:** Para cada participante e cada tarefa, serão registrados o sucesso sem ajuda, o tempo, a quantidade de erros e os pedidos de ajuda. Os resultados serão comparados com as metas da Tabela 1.
2. **Análise Qualitativa:** As gravações, os comentários feitos em voz alta e as anotações do observador serão analisados em conjunto para identificar a origem de cada problema na interface (Barbosa et al., 2021, p. 289).
3. **Classificação de Severidade:** Os problemas encontrados serão classificados na escala de severidade de Nielsen (1994 *apud* Barbosa et al., 2021, p. 270), considerando a frequência, o impacto e a persistência de cada um:
    * **0 — Não é problema:** os avaliadores concluem que não se trata de um problema de usabilidade.
    * **1 — Cosmético:** não precisa ser corrigido, a menos que haja tempo no cronograma.
    * **2 — Pequeno:** a correção pode receber baixa prioridade.
    * **3 — Grande:** importante de ser corrigido, com alta prioridade.
    * **4 — Catastrófico:** precisa ser corrigido antes do lançamento, pois impede o usuário de concluir a tarefa.
4. **Encaminhamento para o Relato:** Os resultados serão apresentados no *Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade*, conforme o [Planejamento do Relato](planejamento-relato-prot-alta-fidel.md).

---

## 7. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que ferramentas de Inteligência Artificial Generativa (Claude, da Anthropic) foram empregadas para auxílio na formatação em markdown e em correções ortográficas.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. 1. ed. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. Cap. 7, Seção 7.4, p. 126–129; Cap. 11, p. 245–265; Cap. 12, Seções 12.1.1 e 12.2.1, p. 267–290.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.