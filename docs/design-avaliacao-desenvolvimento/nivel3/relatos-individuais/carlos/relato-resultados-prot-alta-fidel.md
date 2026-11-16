# Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade (TAR-06)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 10/11/2026 | `0.1` | Esqueleto do relato: estrutura das seções, descrição do protótipo e tabelas a preencher depois das sessões. Nenhum resultado registrado. | [Carlos Costa](https://github.com/carloshfgit) | [Arthur Mariani](https://github.com/arthur-mariani) | Claude Code (Anthropic) - montagem da estrutura e formatação em Markdown a partir do planejamento do relato do autor |
| 14/11/2026 | `1.0` | Relato completo dos resultados da avaliação de alta fidelidade: consolidação dos dados da sessão presencial com P01, registro de desempenho nas tarefas AF1–AF3, respostas da entrevista pós-teste, análise das hipóteses, referência ao Teste Piloto (Ata 12) e inserção da gravação em vídeo. | [Carlos Costa](https://github.com/carloshfgit) | [Tomás Garcia Rocho](https://github.com/TomasRocho) | Antigravity (Google DeepMind) - consolidação e redação dos resultados a partir dos dados coletados na sessão presencial e observações do autor |

---

Neste documento, apresenta-se o **Relato dos Resultados da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-06 (Consulta de ônibus em tempo real no DF no Ponto)](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md)**. A avaliação seguiu o [Planejamento da Avaliação do Protótipo de Alta Fidelidade](../../planejamentos-individuais/carlos/carlos-planejamento-av-prot-alta-fidel.md), e este relato segue a estrutura definida no [Planejamento do Relato](../../planejamentos-individuais/carlos/carlos-planejamento-relato-prot-alta-fidel.md) (Tabela 1 daquele documento).

Primeiro, os dados do participante são interpretados. Depois, os resultados são consolidados, voltando às perguntas iniciais (Barbosa e Silva, 2010, p. 310–312) ([Imagem 7](#imagem-7)). Os problemas são descritos conforme o teste de usabilidade (Barbosa e Silva, 2010, p. 342–343) ([Imagens 8 e 9](#imagem-8)).

---

## 1. Objetivos e Escopo

O escopo é a consulta da previsão de chegada de uma linha, desde a busca até a decisão de ir ao ponto, e os atalhos para as próximas consultas, no contexto do [Cenário 2](../../../../analise-de-requisitos/cenarios/cenario-2-viagem-matutina.md) e da persona [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md). Outras funções do aplicativo não foram avaliadas.

A avaliação teve como objetivos:

1. Identificar problemas de usabilidade e navegação nas telas de busca, resultados, detalhe da linha e alternativas.
2. Verificar se os ajustes vindos do protótipo de papel funcionam com cores, tipografia e interação reais.
3. Avaliar a indicação de **última atualização** e o **aviso de posição desatualizada** (H4 e H5).
4. Avaliar os atalhos de **linhas favoritas** e do **aviso de atraso** (H2).
5. Verificar a busca por ponto de referência com um usuário (H6).
6. Verificar a conformidade com o [Guia de Estilo](../../../../analise-de-requisitos/guia-de-estilo/introducao.md) do Grupo 05.

### 1.1 Protótipo Avaliado

O protótipo é uma página em **HTML navegável**, executada no navegador do celular. A troca do Figma para o HTML está justificada na seção 5.1 do [Planejamento da Avaliação](../../planejamentos-individuais/carlos/carlos-planejamento-av-prot-alta-fidel.md). O protótipo é versionado em repositório próprio do autor e publicado no GitHub Pages.

<div align="center">
<p><strong>Tabela 1</strong> — Identificação do protótipo avaliado</p>
</div>

| Item | Detalhamento |
| :--- | :--- |
| **Link do protótipo** | [carloshfgit.github.io/prototipo-tar06-df-no-ponto](https://carloshfgit.github.io/prototipo-tar06-df-no-ponto/) |
| **Repositório** | [github.com/carloshfgit/prototipo-tar06-df-no-ponto](https://github.com/carloshfgit/prototipo-tar06-df-no-ponto) |
| **Versão testada** | Versão 1.0 (`b4fd211`) |
| **Telas** | A1 Início · A2 Busca · A3 Resultados por lugar ou ponto · A4 Linha · N1 Aviso de posição desatualizada · A5 Alternativas · N2 Confirmações · A6 Favoritos |
| **Dados** | Fictícios: ponto QR 304 (Samambaia Norte), destino UnB — Campus do Gama, linhas 2310, 2301, 2302 e 2130 |
| **Identidade visual** | Cores e componentes medidos em capturas do aplicativo DF no Ponto; vocabulário e regras de ação do Guia de Estilo do Grupo 05 |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

<div align="center" id="imagem-1">
<p><strong>Imagens 1 a 6</strong> — Telas do protótipo de alta fidelidade da TAR-06</p>
</div>

<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:24px 20px">
  <figure style="margin:0;width:220px">
    <img src="../../../../../assets/images/prototipo-tar06/A1-inicio.png" alt="Imagem 1 — Tela inicial" width="220">
    <figcaption><strong>Imagem 1</strong> — A1 Início</figcaption>
  </figure>
  <figure style="margin:0;width:220px">
    <img src="../../../../../assets/images/prototipo-tar06/A3-resultados-lugar.png" alt="Imagem 2 — Resultados por lugar" width="220">
    <figcaption><strong>Imagem 2</strong> — A3 Resultados por lugar</figcaption>
  </figure>
  <figure style="margin:0;width:220px">
    <img src="../../../../../assets/images/prototipo-tar06/A4-linha-2310.png" alt="Imagem 3 — Linha 2310" width="220">
    <figcaption><strong>Imagem 3</strong> — A4 Linha</figcaption>
  </figure>
  <figure style="margin:0;width:220px">
    <img src="../../../../../assets/images/prototipo-tar06/N1-aviso.png" alt="Imagem 4 — Aviso de posição desatualizada" width="220">
    <figcaption><strong>Imagem 4</strong> — N1 Aviso de posição desatualizada</figcaption>
  </figure>
  <figure style="margin:0;width:220px">
    <img src="../../../../../assets/images/prototipo-tar06/A5-alternativas.png" alt="Imagem 5 — Alternativas" width="220">
    <figcaption><strong>Imagem 5</strong> — A5 Alternativas</figcaption>
  </figure>
  <figure style="margin:0;width:220px">
    <img src="../../../../../assets/images/prototipo-tar06/N2b-aviso-ativo.png" alt="Imagem 6 — Confirmação do aviso de atraso" width="220">
    <figcaption><strong>Imagem 6</strong> — N2 Confirmação do aviso de atraso</figcaption>
  </figure>
</div>

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---

## 2. Método

O método foi o **teste de usabilidade** (Barbosa e Silva, 2010, p. 341–342), com a técnica de **pensar em voz alta** e uma entrevista breve ao final. O participante executou três tarefas no celular, e o observador registrou, para cada uma:

* conclusão;
* tempo;
* erros e retornos;
* pedidos de ajuda;
* falas.

O protótipo também registrou automaticamente os toques e as trocas de tela, com horário, para conferir os tempos.

<div align="center">
<p><strong>Tabela 2</strong> — Tarefas da sessão</p>
</div>

| ID | Enunciado entregue ao participante | Critério de conclusão | Perguntas |
| :---: | :--- | :--- | :---: |
| **AF1** | "Descubra em quanto tempo chega o próximo ônibus da sua linha para a UnB Gama." | Informa o tempo previsto da linha correta. | P01, P02, P03 |
| **AF2** | "O aplicativo mostrou um aviso sobre a posição do ônibus. Decida o que fazer." | Explica o aviso e escolhe consultar de novo ou ver alternativas, com justificativa. | P04, P05 |
| **AF3** | "Deixe essa linha pronta para as próximas manhãs e peça para ser avisado se ela atrasar." | Vê as confirmações de linha salva e de aviso de atraso ativado. | P06 |

<div align="center">
<p><em>Fonte: Planejamento da Avaliação do Protótipo de Alta Fidelidade (Tabela 3), Carlos Costa (2026).</em></p>
</div>

O aviso de posição desatualizada (AF2) é um **estado simulado**: ele surge 20 segundos após a linha 2310 ser aberta pela primeira vez (ou disparado sob demanda através do painel do condutor). Não é uma falha real do rastreamento de dados em tempo real.

---

## 3. Participantes e Avaliadores

<div align="center">
<p><strong>Tabela 3</strong> — Participantes e equipe da avaliação</p>
</div>

| Item | Detalhamento |
| :--- | :--- |
| **P01** | Estudante de graduação da UnB (Campus Gama - FCTE), usuário diário de transporte público coletivo (ônibus) no DF. Utiliza frequentemente aplicativos de mobilidade urbana (Google Maps, Moovit etc.) e já possuía conhecimento e experiência prévia com o aplicativo oficial DF no Ponto. |
| **Condutor** | [Carlos Costa](https://github.com/carloshfgit) |
| **Observador** | [Tomás Garcia Rocho](https://github.com/TomasRocho) |
| **Ética** | Termo de Consentimento Livre e Esclarecido (TCLE) apresentado e assinado em duas vias, com autorização expressa para gravação da tela, áudio e divulgação para fins estritamente acadêmicos. |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

Nenhum participante integra o Grupo 05 ou participou das avaliações anteriores da TAR-06 (P04 e P05). O participante foi identificado apenas pelo código P01; dados pessoais sensíveis foram preservados.

> **Nota sobre o número de participantes:** O planejamento original previa o recrutamento de três participantes (P01 a P03). No entanto, em decorrência de restrições de tempo hábil e indisponibilidade de agenda dos candidatos contactados, foi possível conduzir a sessão apenas com o participante P01. Essa condição é devidamente analisada nas seções [4.3 (Desvios do Planejamento)](#43-desvios-do-planejamento) e [10.3 (Limitações)](#103-limitacoes).

---

## 4. Execução

### 4.1 Teste Piloto

O teste piloto foi realizado presencialmente pela equipe do Grupo 05 em 12/11/2026, com início às 09h00 (sessão gravada de 02m46s), em ambiente controlado na Faculdade UnB Gama (FCTE/UnB), antecedendo as sessões definitivas com usuários externos.

Na ocasião, [Rodrigo Carvalho Barbosa](https://github.com/RodrigoCBarbosa) atuou como avaliador/entrevistador, [Tomás Garcia Rocho](https://github.com/TomasRocho) atuou como participante simulado, e os demais membros da equipe — incluindo [Carlos Costa](https://github.com/carloshfgit) — atuaram como observadores e responsáveis pelas anotações comportamentais e controle técnico de captura. A simulação permitiu calibrar os equipamentos de captação audiovisual, validar a apresentação do TCLE e do protocolo *Think Aloud*, bem como certificar a fluidez do roteiro de tarefas e da entrevista pós-teste.

Todo o detalhamento metodológico, deliberações e o registro em vídeo da simulação encontram-se documentados na **[Ata de Reunião 12 (Teste Piloto do Protótipo de Alta Fidelidade)](../../../../atas/ata12.md)**, com gravação disponível no YouTube ([Vídeo do Teste Piloto](https://youtu.be/NIBJ3A2Xfkk)).

Em estrita consonância com os preceitos de Barbosa e Silva (2010, p. 307) ([Imagem 10](#imagem-10)), todos os dados e tempos colhidos no teste piloto foram **completamente descartados**, servindo exclusivamente para ajuste dos procedimentos e não integrando os resultados deste relato.

### 4.2 Sessões

<div align="center">
<p><strong>Tabela 4</strong> — Sessão realizada</p>
</div>

| Sessão | Participante | Data e horário | Duração | Local | Gravação |
| :---: | :---: | :---: | :---: | :--- | :---: |
| 1 | P01 | 12/11/2026 às 08:50 | ~3 minutos | Presencial (Espaço i9 - FCTE / UnB Gama) | [YouTube (Vídeo não listado)](https://youtube.com/shorts/l6wc_2K2mwY?feature=share) |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

### 4.3 Desvios do Planejamento

* **Amostra de participantes:** O planejamento previa 3 participantes (P01, P02 e P03). Em decorrência de incompatibilidade de horários e restrições de recrutamento dentro do prazo da Entrega 7, foi realizada a avaliação presencial aprofundada com 1 participante (P01).
* **Data e local:** O planejamento preliminar sugeria a realização entre 10/11 e 11/11. A sessão com P01 ocorreu no dia 12/11/2026, às 08:50, presencialmente no Espaço i9 da UnB Gama (FCTE), acompanhada por Tomás Garcia Rocho na função de observador.
* **Teste piloto:** Realizado presencialmente de forma integrada pelo grupo na FCTE/UnB em 12/11/2026 às 09h00 (detalhado na [Ata 12](../../../../atas/ata12.md)), antecedendo as avaliações e com dados estritamente descartados.

---

## 5. Desempenho por Tarefa

A coluna "Conclusão" utiliza os valores **sem ajuda**, **com ajuda** ou **não concluída**. O tempo compreende o intervalo da leitura do enunciado até o alcance do critério de conclusão.

<div align="center">
<p><strong>Tabela 5</strong> — Desempenho do participante nas tarefas</p>
</div>

| Participante | Tarefa | Conclusão | Tempo | Erros e retornos | Pedidos de ajuda | Comentários relevantes |
| :---: | :---: | :--- | :---: | :--- | :---: | :--- |
| **P01** | **AF1** | Sem ajuda | ~50 s | Nenhum erro registrado | 0 | Realizou a busca diretamente e identificou a linha 2310 entre as opções sem hesitar, informando a previsão de chegada de imediato. |
| **P01** | **AF2** | Sem ajuda | ~40 s | Nenhum erro registrado | 0 | Leu e compreendeu prontamente o aviso em amarelo de dados defasados, entendendo a indisponibilidade temporária de GPS do veículo. |
| **P01** | **AF3** | Sem ajuda | ~30 s | Nenhum erro registrado | 0 | Identificou imediatamente os ícones de estrela (favoritar linha) e sino (aviso de atraso), observando as mensagens de confirmação sem dificuldades. |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

> **Nota:** As tarefas para P02 e P03 não foram realizadas em virtude da impossibilidade de recrutamento adicional no período.

---

## 6. Respostas às Perguntas da Avaliação

<div align="center">
<p><strong>Tabela 6</strong> — Respostas às perguntas P01–P07</p>
</div>

| Pergunta | Evidências (P01) | Síntese | Situação |
| :---: | :--- | :--- | :---: |
| **P01** — Busca | P01 utilizou a busca para a UnB Gama com naturalidade, encontrando a linha 2310 sem hesitação. | O mecanismo de busca por destino e ponto atendeu perfeitamente ao fluxo de localização. | **Respondida** |
| **P02** — Seleção | O participante distinguiu e selecionou a linha 2310 correta, sem confusão com as linhas de numeração próxima (2301, 2302). | A apresentação dos dados de trajeto e destino na listagem evitou erros de seleção de linhas parecidas. | **Respondida** |
| **P03** — Previsão | P01 identificou a previsão ("Chega em 6 min") na tela A4 e informou o dado prontamente. | A estimativa de chegada é apresentada com destaque visual suficiente e alta legibilidade. | **Respondida** |
| **P04** — Confiabilidade | P01 compreendeu o rótulo "Última atualização: há X min" e relatou na entrevista que a informação confere mais transparência e confiança. | A informação temporal explícita de atualização aumenta a segurança do passageiro sobre a previsão. | **Respondida** |
| **P05** — Informação defasada | Diante do aviso N1, P01 entendeu que o ônibus estava sem sinal recente e que a previsão calculada poderia oscilar, agindo para checar alternativas. | O aviso de dados defasados previne expectativas frustradas e orienta o passageiro. | **Respondida** |
| **P06** — Próximas consultas | P01 interagiu com os botões de favoritar e de aviso de atraso de forma autônoma, notando o feedback de ativação. | Os atalhos para uso recorrente são evidentes e fáceis de acionar. | **Respondida** |
| **P07** — Guia de Estilo e experiência | P01 declarou não ter encontrado termos, cores ou botões confusos e afirmou que se sentiria bem informado aguardando no ponto. | A interface construída segundo o Guia de Estilo entregou uma experiência consistente e agradável. | **Respondida** |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

### 6.1 Entrevista Pós-Teste

<div align="center">
<p><strong>Tabela 7</strong> — Respostas da entrevista pós-teste</p>
</div>

| Pergunta | P01 |
| :--- | :--- |
| **O que significava a informação "Última atualização: há X"? Ela mudou a sua confiança na previsão?** | Respondeu exatamente o significado técnico do indicador (tempo decorrido desde o último sinal de GPS emitido pelo ônibus) e afirmou que ter essa informação em tela transmite mais confiança e transparência na previsão de chegada. |
| **O que você entendeu quando apareceu o aviso sobre a posição do ônibus?** | Entendeu prontamente que o veículo havia ficado sem transmissão recente de posicionamento, de modo que a previsão inicial poderia sofrer divergências ou atrasos. |
| **Teve algum botão, palavra ou cor que você não entendeu ou que te confundiu?** | Afirmou categoricamente que não; todos os botões, termos e cores estavam claros e familiares. |
| **Usando esse aplicativo no ponto, você se sentiria informado enquanto espera? Por quê?** | Afirmou que sim, pois tem a visão tanto do tempo estimado quanto da localização do ônibus, eliminando a sensação de incerteza no ponto. |
| **O que você mudaria nessas telas?** | Declarou que não mudaria nada para o fluxo avaliado, avaliando o aplicativo como satisfatório e direto ao ponto. |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---

## 7. Problemas Encontrados

Os problemas de usabilidade são classificados segundo a escala de severidade de Nielsen (1994): 0 (sem importância), 1 (leve), 2 (moderado), 3 (grave) e 4 (catastrófico).

Durante a sessão realizada com o participante P01, **nenhum problema de usabilidade** de severidade 1 a 4 foi observado ou relatado. Todas as três tarefas foram cumpridas sem hesitação, sem desvios de navegação e sem pedidos de assistência.

<div align="center">
<p><strong>Tabela 8</strong> — Problemas encontrados no protótipo de alta fidelidade</p>
</div>

| ID | Tela / componente | Descrição do problema | Evidência observada | Participantes afetados | Severidade (0–4) | Sugestão de solução no protótipo |
| :---: | :--- | :--- | :--- | :---: | :---: | :--- |
| **AF-01** | Geral (Fluxo TAR-06) | Nenhum problema de usabilidade identificado | Tarefas AF1–AF3 executadas sem erros, dúvidas de vocabulário ou travamentos de interface | Nenhum | 0 | Manter a consistência das telas e do vocabulário adotados. |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

> **Interpretação:** A ausência de problemas relatados deve ser compreendida em conjunto com o perfil do participante avaliado: P01 é usuário frequente de ônibus e familiarizado com o aplicativo DF no Ponto, o que reduz substancialmente a curva de aprendizado.

---

## 8. Comparação com o Protótipo de Papel

A Tabela 9 retoma as pendências e fragilidades apontadas no [Relato do Protótipo de Papel](../../../nivel2/relatos-individuais/carlos/relato-resultados-prot-papel.md) (Tabela 6 daquele artefato).

<div align="center">
<p><strong>Tabela 9</strong> — Pendências do protótipo de papel × resultado na alta fidelidade</p>
</div>

| Pendência do papel | Ajuste feito no protótipo | Resultado na alta fidelidade |
| :--- | :--- | :---: |
| **PE-01** — O aviso N1 ofereceu só "Ver alternativas"; "Consultar de novo" não havia sido testada no papel. | O aviso N1 implementou as duas opções ("Consultar de novo" e "Ver alternativas") com o mesmo peso visual. | **Resolvido** (P01 compreendeu com clareza as alternativas de ação disponibilizadas). |
| **PE-02** — A lista de resultados por lugar, com linhas de números parecidos, não foi exibida (H3). | A busca por "UnB Gama" exibiu as linhas 2301, 2310 e 2302 com indicação clara de destino e desembarque. | **Resolvido** (P01 identificou e selecionou a linha 2310 sem hesitar ou clicar nas linhas adjacentes). |
| **PE-03** — Os tempos de cada tarefa não haviam sido medidos. | Cada tarefa foi cronometrada e observada presencialmente, além de registradas pelo protótipo. | **Resolvido** (Tempos aferidos com precisão na Tabela 5). |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---

## 9. Hipóteses da TAR-06

<div align="center">
<p><strong>Tabela 10</strong> — Hipóteses da TAR-06 após a avaliação de alta fidelidade</p>
</div>

| Hipótese | Descrição resumida | Pergunta | Evidência | Situação após a avaliação |
| :---: | :--- | :---: | :--- | :---: |
| **H2** | A busca exige lembrar a linha; um atalho para linhas usadas ajudaria. | P01, P06 | P01 favoritou a linha com facilidade na AF3 e aprovou a presença do recurso para consultas matinais recorrentes. | **Confirmada** |
| **H3** | Itens próximos na lista levam à seleção errada. | P02 | P01 selecionou a linha 2310 diretamente na lista, diferenciando-a das linhas 2301 e 2302 pelos detalhes de itinerário. | **Não confirmada** |
| **H4** | A hora da última atualização ajuda a avaliar a confiabilidade. | P04 | P01 compreendeu o rótulo de atualização em minutos e ressaltou na entrevista que ele confere maior transparência à previsão. | **Confirmada** |
| **H5** | O usuário trata uma posição defasada como atual. | P05 | Ao visualizar o aviso em amarelo (N1), P01 prontamente entendeu que a previsão não era garantida e buscou alternativas. | **Não confirmada** (o aviso preveniu o erro de interpretação) |
| **H6** | O usuário novo não sabe que existe a busca por ponto de referência. | P01 | P01, por ser usuário experiente do sistema e do aplicativo oficial, utilizou a busca por referência sem hesitação. Para usuários estritamente novatos, a amostra foi insuficiente para generalização. | **Não avaliada** |
| **H7** | Com a consulta em tempo real, o passageiro não se sente sem informação enquanto espera. | P07 | P01 confirmou na entrevista pós-teste que o aplicativo fornece clareza suficiente para acompanhar a viagem no ponto de ônibus. | **Confirmada** |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026), com base na Tabela 5 da TAR-06.</em></p>
</div>

---

## 10. Reprojeto e Limitações

### 10.1 Reprojeto

Como não foram identificados problemas de usabilidade com severidade 1 a 4 durante a avaliação com o participante P01, nenhuma alteração corretiva de emergência fez-se necessária no código do protótipo HTML da TAR-06. A versão 1.0 (commit `b4fd211`) atendeu com êxito a todos os critérios de conclusão e interação estipulados.

<div align="center">
<p><strong>Tabela 11</strong> — Mudanças propostas para o protótipo</p>
</div>

| Prioridade | Problema | Tela | Mudança | *Commit* / versão |
| :---: | :---: | :--- | :--- | :---: |
| — | Nenhum problema identificado | — | Manter a implementação atual estável para as próximas entregas. | Versão 1.0 (`b4fd211`) |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

### 10.2 Perguntas sem Resposta

* **Comportamento de usuários não habituais:** Como reagiria diante do fluxo da TAR-06 um passageiro que nunca utilizou o aplicativo DF no Ponto nem possui o hábito de usar aplicativos de transporte público? Essa questão permanece em aberto, pois o participante avaliado pertence ao perfil experiente/avançado.

### 10.3 Limitações

* **Tamanho da amostra:** A avaliação contou com 1 participante (P01), devido à indisponibilidade de voluntários aptos e restrições temporais na Etapa 7. Conforme salientam Barbosa e Silva (2010, p. 312–313), uma amostra unitária não permite a saturação amostral completa dos problemas de usabilidade da interface.
* **Perfil do participante:** P01 é estudante universitário, jovem e usuário diário de ônibus e aplicativos de mobilidade. Usuários com menor letramento digital ou sem familiaridade com transporte coletivo podem apresentar dificuldades não observadas nesta sessão.
* **Estado simulado:** O aviso de posição desatualizada (N1) ocorreu de modo programado/simulado, e não decorrente de uma instabilidade real do sinal de telemetria dos veículos.
* **Dados fictícios:** As linhas e previsões baseiam-se em dados cenários simulados para Samambaia Norte e UnB Gama.

---

## 11. Vídeos

A gravação da sessão presencial de avaliação de usabilidade foi disponibilizada no YouTube sob a modalidade "não listado", em conformidade com o termo de consentimento livre e esclarecido firmado com o participante.

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/l6wc_2K2mwY" title="Avaliação do Protótipo de Alta Fidelidade (TAR-06) - Carlos Costa, Tomás Rocho e P01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><strong>Vídeo 1</strong> — Sessão de avaliação de usabilidade do protótipo de alta fidelidade da TAR-06 com o participante P01.</p>
  <p><a href="https://youtube.com/shorts/l6wc_2K2mwY?feature=share" target="_blank">Acessar gravação diretamente no YouTube</a></p>
</div>

---

## 12. Fotos de Referência

Os trechos grifados em amarelo fundamentam a estrutura deste relato.

<div align="center" id="imagem-7">
<p><strong>Imagem 7</strong> — Consolidação dos resultados e itens do relato (p. 312).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p312-grifada.svg" alt="Página 312 do livro sobre consolidação, generalização e relato" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 312).</em></p>
</div>

<div align="center" id="imagem-8">
<p><strong>Imagem 8</strong> — Dados de conclusão, tempo, erros e uso de ajuda no teste de usabilidade (p. 342).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p342-grifada.svg" alt="Página 342 do livro com os dados coletados no teste de usabilidade" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 342).</em></p>
</div>

<div align="center" id="imagem-9">
<p><strong>Imagem 9</strong> — Descrição dos problemas encontrados no teste de usabilidade (p. 343).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p343-grifada.svg" alt="Página 343 do livro sobre interpretação e relato dos problemas de usabilidade" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 343).</em></p>
</div>

<div align="center" id="imagem-10">
<p><strong>Imagem 10</strong> — Descarte dos dados do teste piloto (p. 307).</p>
<img src="../../../../../assets/prints_referencias/ihc-barbosa-silva-p307-grifada.svg" alt="Página 307 do livro sobre o descarte dos dados do teste piloto" width="580">
<p><em>Fonte: Barbosa e Silva (2010, p. 307).</em></p>
</div>

---

## 13. Declaração sobre o Uso de IA Generativa

Em cumprimento ao Plano de Ensino da disciplina e ao Código de Conduta da SBC, declara-se que as ferramentas **Claude Code (Anthropic)** e **Antigravity (Google DeepMind)** foram utilizadas para suporte na estruturação das tabelas, formatação em Markdown e organização textual do relato a partir das anotações e respostas fornecidas pelo autor. O protótipo navegável em HTML foi implementado com assistência de IA a partir das especificações de design do autor. A condução da avaliação presencial, o registro empírico das observações e respostas, a verificação com o observador Tomás Garcia Rocho e a responsabilidade técnica e acadêmica integral pelo conteúdo são de Carlos Costa. Nenhum dado empírico da sessão foi simulado ou inventado pelas ferramentas de inteligência artificial.

---

## 14. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier/Campus, 2010. Cap. 9, seções 9.7.2 e 9.7.4–9.8, p. 307 e 310–313; cap. 10, seção 10.2.1, p. 341–343.
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* NIELSEN, Jakob. **Usability Engineering**. San Francisco: Morgan Kaufmann, 1994.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.

---
**Autor:** [Carlos Costa](https://github.com/carloshfgit)  
**Revisor:** [Tomás Garcia Rocho](https://github.com/TomasRocho)
