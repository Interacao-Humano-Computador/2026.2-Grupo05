## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 01/11/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Alta Fidelidade (TAR-03) no Figma via framework DECIDE, com amostragem fundamentada na teoria de Steve Krug e referências do livro-texto. | [Lucas Araújo Lima](https://github.com/Lucasaraujoszz) | [Arthur Mariani](https://github.com/arthur-mariani) | Google Gemini — utilizado apenas para formatação em Markdown |

---

# Planejamento da Avaliação do Protótipo de Alta Fidelidade (TAR-03)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-03 — Planejamento de Rota Completa (Porta a Porta) por Destino com Indicação de Paradas e Previsão de Chegada](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota/#tar-03-planejamento-de-rota-completa-porta-a-porta-por-destino-com-indicacao-de-paradas-e-previsao-de-chegada)**. Trata-se do planejamento individual elaborado por Lucas Araújo Lima para orientar a avaliação formativa e empírica do protótipo digital interativo de alta fidelidade construído na ferramenta **Figma**, representando a proposta de redesign da interface móvel da **SEMOB-DF / DF no Ponto**.

O protótipo de alta fidelidade incorpora os aprendizados colhidos na avaliação anterior em papel (Nível 2) e observa estritamente o **[Guia de Estilo](../../../../analise-de-requisitos/guia-de-estilo/introducao.md)** estabelecido pelo Grupo 05 (paleta cromática com contraste WCAG AA, tipografia legível, alvos de toque *mobile-first* de no mínimo 48×48 px, botões padronizados na sintaxe `[Verbo + Ação]` e automação do cálculo de caminhada e telemetria via GPS). A avaliação será conduzida com usuários reais seguindo o **Framework DECIDE** (Sharp, Rogers & Preece, 2007; Barbosa & Silva, 2010, Seção 9.8, p. 312–313; Barbosa et al., 2021, Seção 11.8), estruturado nas seis atividades interdependentes: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar, interpretar e apresentar dados).

---

## 1. D — Determinar os Objetivos da Avaliação

De acordo com Mayhew (1999) e Barbosa & Silva (2010, Cap. 4, p. 108; Cap. 9, p. 286), a avaliação do protótipo de alta fidelidade situa-se no Nível 3 do ciclo de vida da Engenharia de Usabilidade. Seu propósito central é inspecionar e validar empiricamente o projeto detalhado de telas interativas em condições visuais, estéticas e funcionais próximas ao software final antes da implementação definitiva em código.

### 1.1 Objetivos Principais e Específicos
1. **Verificar a conformidade com o Guia de Estilo do Grupo 05:** Avaliar se a aplicação das cores institucionais, hierarquia tipográfica, espaçamento de *cards*, ícones semióticos e botões de ação no padrão `[Verbo + Ação]` (ex.: `[ 🧭 Iniciar Rota ]`, `[ 🗺️ Trocar para Rota Alternativa ]`) proporcionam reconhecimento imediato e previnem erros de toque no smartphone.
2. **Validar a usabilidade e a eficiência do fluxo completo da TAR-03 no Figma:** Medir o desempenho dos usuários ao planejar o deslocamento porta a porta (*Samambaia Sul → SIA Trecho 3*) a partir da busca direta na Home com detecção automática de origem via GPS, verificando se a meta preditiva do modelo KLM (redução de esforço e tempo) se confirma na interação real.
3. **Avaliar a clareza comparativa dos cartões de rota e indicação da melhor parada:** Investigar se a distinção visual no Figma entre a linha semiexpressa recomendada (`092.1`) e a linha convencional (`0.092`) — exibindo tempo de caminhada até a parada recomendada, tempo de chegada do veículo via GPS, tarifa e horário final de chegada (ETA) — apoia a tomada de decisão rápida sem sobrecarga cognitiva.
4. **Inspecionar a comunicabilidade do mapa interativo e dos mecanismos de contingência:** Verificar se o usuário compreende no protótipo digital o trajeto tracejado a pé até a parada, o deslocamento em tempo real do ônibus com selo de atualização (*"Atualizado há 10s"*), o banner proativo de retenção viária na EPTG com troca de rota em 1 toque e a distinção visual por cores entre **previsão GPS ao vivo** (verde) e **horário programado *offline*** (cinza).
5. **Coletar métricas quantitativas e qualitativas para o produto final:** Subsidiar ajustes finos de microinterações, *overlays* e transições no arquivo compartilhado do Figma antes da entrega final do projeto.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

Para operacionalizar os objetivos traçados, foram formuladas seis perguntas investigativas que serão respondidas por meio da observação direta da interação no Figma e da entrevista pós-teste (Barbosa & Silva, 2010, p. 313; Rubin & Chisnell, 2008):

<div align="center">
<p><strong>Tabela 1</strong> — Perguntas Investigativas para Avaliação do Protótipo de Alta Fidelidade (TAR-03)</p>
</div>

| ID | Categoria / Foco | Pergunta Investigativa da Avaliação | Critério de Aceitação / Resposta Esperada no Figma |
| :---: | :--- | :--- | :--- |
| **QF01** | **Conformidade com o Guia de Estilo e Home** | Na tela inicial do protótipo no Figma, o participante reconhece imediatamente o card de localização atual via GPS e aciona a barra *"Para onde você quer ir?"* sem hesitação visual? | O participante clica no campo de busca de destino em menos de 5 segundos e seleciona *"SIA Trecho 3"* no *overlay* de autocompletar na primeira tentativa. |
| **QF02** | **Comparação de Rotas e Escolha da Parada** | A hierarquia visual dos cartões de rota no Figma (selo *"Mais Rápida"*, tempo a pé em destaque, linha e ETA final) permite identificar qual opção garante chegada ao SIA antes das 08h00? | O participante compara os cards `092.1` (ETA `07h52`) e `0.092` (ETA `08h08`), verbaliza a escolha da linha `092.1` e clica em `[ 🧭 Iniciar Rota ]` sem erros. |
| **QF03** | **Rastreamento Ao Vivo e Caminhada no Mapa** | Na tela do mapa interativo de alta fidelidade, o participante distingue com clareza o percurso tracejado a pé (`4 min / 280m` até a *Parada QR 302 Conj. 4*) e a posição em tempo real do ônibus? | O participante identifica corretamente para qual parada deve caminhar e reconhece o indicador de telemetria ativa (*"GPS ao vivo • Chega em 5 min"*). |
| **QF04** | **Alerta de Retenção e Rota Alternativa em 1 Toque** | Ao surgir o *overlay* de alerta de retenção severa na EPTG (`+14 min`), o participante compreende o impacto no seu horário e aciona o botão `[ 🗺️ Trocar para Linha 0.380 Agora ]`? | O participante lê a notificação de incidente e realiza a troca de rota em 1 clique, sem precisar retornar à tela inicial para refazer a busca. |
| **QF05** | **Contingência de Falha de GPS (Cores e Status)** | Diante do estado simulado de perda de sinal de satélite do veículo, o participante percebe a mudança cromática (de verde ao vivo para cinza programado) e consulta a grade horária *offline*? | O participante compreende que o rastreamento em tempo real caiu e aciona `[ 🕒 Ver Horários Programados (Offline) ]` com segurança. |
| **QF06** | **Satisfação Estética e Qualidade de Uso** | Como o participante avalia o acabamento visual, o contraste de cores, a legibilidade e a fluidez das transições do protótipo no Figma em comparação ao sistema atual da SEMOB-DF? | O participante atribui avaliação positiva de satisfação subjetiva, destacando a interface como moderna, confiável e superior ao portal atual. |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método selecionado para esta etapa é o **Teste de Usabilidade (Observação de Uso Empírica em Ambiente Controlado)** utilizando o protótipo interativo de alta fidelidade no **Figma** (Rubin & Chisnell, 2008; Barbosa & Silva, 2010, Seção 10.2.1, p. 341–348; Barbosa et al., 2021, Seção 12.2.1).

* **Justificativa Metodológica:** Conforme a Tabela 10.8 de Barbosa & Silva (2010, p. 362), o teste de usabilidade possui adequação máxima (`+++`) para avaliar a **apropriação de tecnologia** e identificar **problemas de IHC** em protótipos interativos de alta fidelidade. O modo de apresentação do Figma (*Figma Prototype Mirror*) permite simular transições suaves (*smart animate*), menus suspensos (*overlays*), estados de botões e feedbacks visuais reais no navegador ou diretamente na tela do smartphone, viabilizando a coleta precisa de tempo de tarefa, contagem de cliques incorretos e satisfação do usuário.
* **Técnicas Complementares Combinadas:**
  1. **Protocolo *Think Aloud* (Pensar em Voz Alta):** Durante a navegação pelas telas do Figma, o participante será estimulado a verbalizar continuamente seu raciocínio, expectativas e eventuais dúvidas antes de cada toque/clique (Barbosa & Silva, 2010, p. 345).
  2. **Entrevista Pós-Teste Semiestruturada:** Ao final da execução das tarefas no Figma, o avaliador aplicará as perguntas investigativas (`QF01` a `QF06`) para captar a percepção qualitativa sobre o design visual e a utilidade prática da solução.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Planejamento do Recrutamento dos Entrevistados: Fundamentação na Teoria de Steve Krug

O dimensionamento da amostra de participantes para a avaliação do protótipo de alta fidelidade fundamenta-se diretamente na **teoria de testes de usabilidade simplificados (*Discount / Do-It-Yourself Usability Testing*) de Steve Krug** (Krug, 2000, 2006; Santa-Rosa, 2005, p. 156–157; Nielsen, 2000):

* **Quantidade de Participantes:** Serão recrutados **3 participantes** pertencentes ao perfil primário de passageiros do transporte público coletivo do Distrito Federal.
* **Fundamentação Teórica (Krug, 2000, 2006):** Em suas obras de referência *Don't Make Me Think* e *Rocket Surgery Made Easy*, Steve Krug demonstra que avaliações de usabilidade formativas e iterativas não exigem amostras estatísticas numerosas para revelar as falhas de uma interface:
  1. **Detecção de 80% a 85% dos Problemas Críticos:** Os primeiros **3 participantes** encontram a quase totalidade dos problemas mais graves de usabilidade e compreensão de rótulos/fluxo de uma interface interativa.
  2. **Agilidade de Consolidação e Reprojeto no Mesmo Ciclo:** Testar com 3 usuários evita o acúmulo de observações repetitivas, permitindo que a equipe analise as gravações, consolide o relatório e aplique as correções diretamente nos componentes do Figma imediatamente após a rodada.
  3. **Eficiência e Rendimento Decrescente:** A partir do quarto ou quinto usuário em um mesmo ciclo sem alteração da interface, observa-se forte redundância dos mesmos obstáculos já mapeados, reduzindo a relação custo-benefício.
  4. **Máxima de Krug:** *"Testar três usuários em rodadas curtas e iterativas é o ponto ótimo para identificar as principais barreiras de interação e corrigi-las rapidamente"* (Krug, 2006; Santa-Rosa, 2005, p. 156).
* **Perfil dos 3 Participantes Recrutados:**
  * Jovens ou adultos (18 a 45 anos), estudantes ou trabalhadores que utilizam regularmente as linhas de ônibus da **SEMOB-DF** em deslocamentos pendulares no Distrito Federal e possuem familiaridade cotidiana com aplicativos móveis em smartphones Android/iOS, espelhando o perfil e as necessidades da persona primária **[Marcos Paulo Vieira ("Marquinhos")](../../../../analise-de-requisitos/personas/marcos-paulo-vieira.md)**.

---

### 4.2 Especificação do Protótipo de Alta Fidelidade no Figma (TAR-03)

O protótipo digital interativo será executado no modo de simulação móvel do **Figma** (*Frame 390×844 px — Mobile Viewport*), contemplando:
1. **Fluxo Interativo Completo da TAR-03:**
   * **Tela 01 (Home SEMOB-DF Digital):** Barra superior institucional com opção de alto contraste, card de geolocalização ativa (*"📍 Origem: Samambaia Sul - QR 302"*), campo de busca interativo *"Para onde você quer ir?"* com abertura de *overlay* preditivo para *"SIA Trecho 3"* e chips de acesso rápido.
   * **Tela 02 (Comparador de Rotas Porta a Porta):** Cards estruturados conforme o Guia de Estilo, destacando com badge verde *"Recomendada • Mais Rápida"* a linha `092.1 (Semiexpresso)` (`🚶 4 min / 280m até Parada QR 302 Conj. 4` • `🚌 Passa em 5 min (GPS)` • `💰 R$ 5,50` • `🏁 Chegada: 07h52`) em comparação ao card secundário da linha `0.092 (Via EPTG)` (`🏁 Chegada: 08h08`).
   * **Tela 03 (Mapa de Navegação Ao Vivo e Painel Passo a Passo):** Mapa vetorial detalhado exibindo a rota pontilhada azul de caminhada até a parada, o marcador animado do ônibus `092.1` com badge verde *"Ao vivo • Atualizado há 10s"* e *bottom sheet* expansível com as etapas do trajeto.
   * **Telas/Overlays de Contingência (TAR-03.3):** Banner superior de alerta em tom semântico de atenção (*"⚠️ Retenção severa na EPTG: +14 min. Linha 0.380 disponível em 3 min"*) com botão primário `[ 🗺️ Trocar para Linha 0.380 Agora ]`, e estado de queda de telemetria com selo cinza *"Horário Programado (Sem sinal GPS)"* e modal da tabela horária *offline*.

---

### 4.3 Papéis da Equipe e Infraestrutura Tecnológica

* **Avaliador Facilitador / Condutor ([Lucas Araújo Lima](https://github.com/Lucasaraujoszz)):** Recepciona cada participante, apresenta o TCLE, contextualiza o cenário de uso da persona Marcos Paulo Vieira, entrega o roteiro das tarefas e conduz a entrevista pós-teste mantendo postura estritamente neutra (sem fornecer dicas de onde clicar).
* **Avaliador Observador / Revisor ([Arthur Mariani](https://github.com/arthur-mariani)):** Acompanha a sessão, verifica a captura de tela/áudio, cronometra o tempo de conclusão de cada sub-tarefa e registra hesitações ou cliques fora das áreas interativas (*hotspots* do Figma).
* **Equipamentos e Ferramentas:**
  * **Plataforma:** Figma (link de protótipo interativo aberto em smartphone ou navegador com *frame* móvel).
  * **Gravação:** Software de captura de tela com áudio (OBS Studio / gravador nativo de tela) ou câmera focada na interação com a tela, preservando a privacidade do participante.
  * **Apoio Documental:** Termo de Consentimento Livre e Esclarecido (TCLE) e planilha de coleta de métricas.

---

### 4.4 Cronograma das Sessões de Avaliação (Etapa 7)

<div align="center">
<p><strong>Tabela 2</strong> — Cronograma Planejado para as Sessões de Teste de Usabilidade no Figma (TAR-03)</p>
</div>

| Sessão / Atividade | Participante / Envolvidos | Perfil | Data e Horário Previstos | Duração Estimada | Local / Modalidade |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **Teste Piloto** | Integrante interno do Grupo 05 | Avaliador de calibração | **09/11/2026 às 19h00** | 10 min | Presencial / Remoto síncrono |
| **Sessão 01** | **Participante 01** | Usuário cotidiano do STPC/DF (Perfil Marcos Paulo) | **10/11/2026 às 14h00** | 10 min | Presencial (UnB Gama / Samambaia) |
| **Sessão 02** | **Participante 02** | Usuário cotidiano do STPC/DF (Perfil Marcos Paulo) | **10/11/2026 às 14h30** | 10 min | Presencial (UnB Gama / Samambaia) |
| **Sessão 03** | **Participante 03** | Usuário cotidiano do STPC/DF (Perfil Marcos Paulo) | **10/11/2026 às 15h00** | 10 min | Presencial (UnB Gama / Samambaia) |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026).</em></p>
</div>

---

### 4.5 Planejamento do Teste Piloto

Em estrita observância ao **Item 11 do Checklist do Plano de Ensino** e às recomendações de Barbosa & Silva (2010, Seção 9.7.2, p. 299), antes da realização das sessões com os 3 usuários externos será executado um **Teste Piloto**:

* **Objetivo do Teste Piloto:** Verificar se todos os *hotspots*, conexões de fluxo (*noodles*) e *overlays* do protótipo no Figma estão funcionando sem becos sem saída, testar o áudio e a gravação de tela, validar a clareza do enunciado das tarefas e aferir se a sessão cabe confortavelmente na janela de 10 minutos.
* **Data de Realização:** **09/11/2026 às 19h00**, conduzido por Lucas Araújo Lima com o apoio de Arthur Mariani.
* **Declaração Formal de Isenção dos Dados (Conformidade com o Item 12 do Checklist):** Declara-se expressamente que todos os tempos, observações e gravações gerados durante o Teste Piloto destinam-se **exclusivamente à verificação técnica do protótipo no Figma e calibração do protocolo**, sendo integralmente descartados e **jamais incluídos ou contabilizados no relato final dos resultados da avaliação**.

---

## 5. D — Decidir como Lidar com as Questões Éticas

A condução dos testes de usabilidade em alta fidelidade obedecerá rigorosamente às diretrizes éticas da Resolução CNS nº 466/2012 e nº 510/2016, bem como aos quatro princípios bioéticos documentados em [Questões Práticas e Éticas das Avaliações](../../../nivel1/planejamentos-individuais/Lucas/questoes-praticas-e-eticas.md) (Barbosa & Silva, 2010, Seção 5.4, p. 138–143):

1. **Termo de Consentimento Livre e Esclarecido (TCLE):** Antes de iniciar a sessão, cada um dos 3 participantes lerá e assinará (ou manifestará concordância gravada) o [TCLE oficial do projeto](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf), autorizando a captura da interação na tela e da voz para fins estritamente acadêmicos na UnB.
2. **Autonomia e Direito de Desistência:** O participante será informado de que sua colaboração é voluntária e que pode interromper o teste ou retirar seu consentimento a qualquer momento, sem necessidade de justificativa e sem qualquer prejuízo.
3. **Não-Maleficência e Conforto Psicológico:** O avaliador esclarecerá no início da sessão que **o objeto em avaliação é exclusivamente a interface no Figma, e nunca a habilidade do participante**. Qualquer dificuldade de clique ou navegação será tratada como oportunidade de melhoria do design.
4. **Confidencialidade e Anonimato:** Os dados pessoais serão protegidos, divulgando-se apenas o primeiro nome ou identificador codificado (`P01`, `P02`, `P03`) e gravando-se prioritariamente a tela do dispositivo e o áudio.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Conforme preconizado por Barbosa & Silva (2010, p. 312–313, 347–348), a etapa final do framework DECIDE envolve a triangulação de métricas quantitativas e evidências qualitativas:

1. **Métricas Quantitativas de Desempenho:**
   * *Taxa de conclusão sem ajuda (%):* Proporção dos 3 participantes que finalizam as sub-tarefas `TAR-03.1`, `TAR-03.2` e `TAR-03.3` sem intervenção do facilitador.
   * *Tempo de execução (segundos):* Tempo despendido em cada sub-tarefa no Figma, permitindo comparar o desempenho empírico com a predição analítica do modelo KLM (`9,70 s` para o fluxo principal de busca e seleção).
   * *Contagem de erros / cliques incorretos:* Quantidade de toques fora das áreas clicáveis (*misclicks*) ou escolhas equivocadas de cartão.
2. **Análise Qualitativa e Escala de Severidade:**
   * As verbalizações do *Think Aloud* e as respostas às questões `QF01` a `QF06` serão categorizadas e cruzadas com as diretrizes do Guia de Estilo.
   * Todo problema de usabilidade identificado será classificado segundo a **Escala de Severidade de Nielsen (1994)** de **0 (Sem importância)** a **4 (Catastrófico)**, definindo sua prioridade de correção no Figma.
3. **Validade e Confiabilidade do Estudo (DECIDE):**
   * *Validade Interna:* Assegurada pela padronização do cenário, uso do mesmo link de protótipo no Figma para os 3 participantes e neutralidade do facilitador.
   * *Validade Ecológica:* Promovida pela representação fiel das linhas reais do DF (`092.1`, `0.092` e `0.380`), tarifas vigentes (`R$ 5,50`) e viewport móvel idêntico ao uso em smartphones.
   * *Apresentação dos Resultados:* Consolidada no documento formal planejado em [Planejamento do Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (TAR-03)](planejamento-relato-prot-alta-fidel.md).

---

## 7. Fundamentação Teórica e Prints de Referência Bibliográfica

Em atendimento ao rigor metodológico exigido no Plano de Ensino da disciplina, apresentam-se os registros visuais (*prints* das obras de referência) que fundamentam o uso do **Framework DECIDE**, do **Teste de Usabilidade** e do **Teste Piloto**:

### 7.1 O Framework DECIDE no Planejamento da Avaliação de IHC
Na Seção 9.8 (*O Framework DECIDE*, p. 312–313), Barbosa & Silva sintetizam as seis atividades propostas por Sharp, Rogers e Preece (2007) para estruturar avaliações de IHC:

<div align="center">
  <img src="../../../../../assets/prints_referencias/referencia-decide-visao-geral.png" alt="Print da página do livro de IHC apresentando a visão geral do Framework DECIDE" width="85%">
  <p><strong>Figura 1</strong> — Síntese das seis atividades interdependentes do Framework DECIDE</p>
  <p><em>Fonte: BARBOSA & SILVA (2010, Capítulo 9, Seção 9.8, p. 312–313).</em></p>
</div>

### 7.2 Escolha de Métodos de Observação e Teste de Usabilidade
Na Seção 9.8 e na Tabela 10.8 (p. 362), os autores demonstram a adequação dos métodos de observação e teste de usabilidade para avaliar problemas de IHC e apropriação de tecnologia em protótipos interativos:

<div align="center">
  <img src="../../../../../assets/prints_referencias/referencia-decide-escolher-metodos.png" alt="Print da seção sobre escolha de métodos de avaliação no Framework DECIDE" width="85%">
  <p><strong>Figura 2</strong> — Critérios para escolha do método de avaliação e administração de questões práticas no DECIDE</p>
  <p><em>Fonte: BARBOSA & SILVA (2010, Capítulo 9, Seção 9.8, p. 313).</em></p>
</div>

### 7.3 Obrigatoriedade e Finalidade do Teste Piloto
Na preparação da avaliação (Seção 9.7.2), a literatura enfatiza a execução do teste piloto para verificar equipamentos, materiais e roteiro antes da sessão real:

<div align="center">
  <img src="../../../../../assets/prints_referencias/referencia-planejamento-avaliacao-5-teste-piloto.png" alt="Print do livro de IHC sobre a realização do teste piloto" width="85%">
  <p><strong>Figura 3</strong> — Fundamentação da execução do Teste Piloto para calibração prévia da avaliação</p>
  <p><em>Fonte: BARBOSA et al. (2021, Capítulo 11, Seção 11.7.2) / BARBOSA & SILVA (2010, Seção 9.7.2, p. 299).</em></p>
</div>

---

## 8. Declaração sobre o Uso de IA Generativa

Em conformidade com o Plano de Ensino da disciplina (SALES, 2026) e o Código de Conduta da SBC, declara-se que a ferramenta Google Gemini foi utilizada exclusivamente para formatação em Markdown. Toda a concepção metodológica, aplicação do Framework DECIDE à TAR-03, fundamentação na teoria de Steve Krug e especificação do protocolo de testes no Figma são de autoria e responsabilidade de Lucas Araújo Lima.

---

## 9. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. ISBN 978-85-352-1120-7. (Capítulo 9: Planejamento da Avaliação de IHC, p. 286–314; Capítulo 10: Métodos de Avaliação de IHC, Seção 10.2.1: Teste de Usabilidade, p. 341–348).
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, p. 245–266; Capítulo 12, Seção 12.2.1, p. 288–291).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Dispõe sobre as normas aplicáveis a pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* KRUG, Steve. **Don't Make Me Think: A Common Sense Approach to Web Usability**. 1st ed. Berkeley: New Riders, 2000.
* KRUG, Steve. **Rocket Surgery Made Easy: The Do-It-Yourself Guide to Finding and Fixing Usability Problems**. Berkeley: New Riders, 2006.
* MAYHEW, Deborah J. **The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design**. San Francisco: Morgan Kaufmann, 1999.
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* RUBIN, Jeffrey; CHISNELL, Dana. **Handbook of Usability Testing: How to Plan, Design, and Conduct Effective Tests**. 2nd ed. Indianapolis: Wiley, 2008.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
* SANTA-ROSA, José Guilherme. **Avaliação e Projeto no Design de Interfaces: Teste de Usabilidade**. Capítulo 9, p. 144–175, 2005.
* SHARP, Helen; ROGERS, Yvonne; PREECE, Jennifer. **Interaction Design: Beyond Human-Computer Interaction**. 2nd ed. New York: John Wiley & Sons, 2007.

---
**Autor:** [Lucas Araújo Lima](https://github.com/Lucasaraujoszz)  
**Revisor:** [Arthur Mariani](https://github.com/arthur-mariani)

