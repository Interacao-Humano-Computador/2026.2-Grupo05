# Relato dos Resultados da Avaliação do Storyboard e da Análise de Tarefas (TAR-03)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 24/10/2026 | `1.0` | Consolidação e relato dos resultados da avaliação formativa do Storyboard 03 e dos modelos da Análise de Tarefas (TAR-03). | [Lucas Araújo Lima](https://github.com/Lucasaraujoszz) | [Arthur Mariani de Andrade da Cruz](https://github.com/arthur-mariani) | Google Gemini - usado para apoio na estruturação textual e formatação markdown |

---

## 1. Introdução e Objetivos do Relato

Este documento apresenta a consolidação dos resultados da avaliação formativa realizada sobre o **[Storyboard 03 — Planejamento de Rota por Origem/Destino e Rastreamento em Tempo Real](../../storyboards.md#33-storyboard-03-planejamento-de-rota-por-origem-e-destino-com-monitoramento-em-tempo-real)** e os modelos da **[TAR-03: Planejamento de Rota Completa (Porta a Porta) por Destino](../../../../analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota.md)** (diagramas HTA e CTT).

O objetivo primordial desta avaliação empírica foi investigar a qualidade de uso, a clareza da proposta conceitual, a verossimilhança da narrativa gráfica com a rotina real de transporte no Distrito Federal e a correção do fluxo operacional planejado para o sistema da **SEMOB-DF**, colhendo percepções de um usuário representativo para subsidiar a próxima fase de prototipação em papel.

---

## 2. Metodologia e Caracterização do Participante

A coleta de dados seguiu a metodologia de **entrevista semiestruturada presencial orientada por artefatos visuais**, baseada nas diretrizes de Barbosa et al. (2021) e no protocolo ensaiado durante o Teste Piloto da equipe. 

Em cumprimento aos preceitos éticos da Resolução CNS nº 510/2016 e da disciplina, o participante realizou a leitura prévia e assinatura formal do **[Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../analise-de-requisitos/aspectos-eticos.md#2-termo-de-consentimento-livre-e-esclarecido-tcle)**, cuja concordância verbal foi ratificada no primeiro minuto da gravação em vídeo.

### 2.1 Perfil dos Envolvidos na Sessão:
* **Avaliador / Entrevistador:** [Lucas Araújo Lima](https://github.com/Lucasaraujoszz).
* **Participante Convidado:** Danilo, 21 anos, estudante e usuário habitual do Sistema de Transporte Público Coletivo do Distrito Federal (STPC/DF), que vivencia frequentemente as incertezas de horários e integrações no transporte público. Seu perfil possui alta aderência às características demográficas, atitudes e dores mapeadas na persona primária **[Marcos Paulo Vieira ("Marquinhos")](../../../../analise-de-requisitos/personas/marcos-paulo-vieira.md)**.
* **Ambiente e Recursos:** Sessão presencial realizada em 24/10/2026, com início às 15h00, gravada em vídeo por smartphone dedicado, com apresentação dos artefatos visuais impressos/em tela.
* **Duração da Sessão:** 06 minutos e 44 segundos.

### 2.2 Gravação da Entrevista

O registro audiovisual integral da sessão de avaliação está disponível no YouTube pelo link abaixo:

- **Vídeo da Avaliação:** [https://youtu.be/STpDtAiuSs0](https://youtu.be/STpDtAiuSs0)

<div align="center">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/STpDtAiuSs0" title="Avaliação do Storyboard 03 e TAR-03 - Lucas Araújo e Danilo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <p><em>Vídeo 1: Gravação da entrevista de avaliação com o participante Danilo.</em></p>
</div>

---

## 3. Sumário dos Dados Coletados

### 3.1 Consolidação das Respostas: Avaliação do Storyboard 03

O Storyboard 03 retrata o passageiro cotidiano na parada sob chuva precisando chegar ao trabalho no SIA, utilizando o portal/app da SEMOB para planejar sua rota em linguagem natural ("SIA"), receber sugestões comparativas de linhas com tarifas/tempos e acompanhar o veículo no mapa.

<div align="center">
<p><strong>Tabela 1</strong> — Respostas da Avaliação do Storyboard 03</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Artefato |
| :---: | :--- | :--- | :--- | :---: |
| **Q01** | **Clareza Narrativa** | *"Com suas palavras, o que você compreendeu que aconteceu nessa história desde o primeiro até o último quadro?"* | Descreveu com exatidão a narrativa: o personagem estava atrasado, abriu o portal/app, deparou-se com o campo de destino, comparou duas opções de linhas por tempo e preço, escolheu a melhor, acompanhou a chegada e evitou o atraso. | **Conforme** |
| **Q02** | **Verossimilhança** | *"Essa situação do Marcos Paulo de estar parado em um dia corrido de chuva, o ônibus atrasar e tal, é parecida com o que você já viveu no transporte do DF?"* | Confirmou veementemente (*"Com certeza"*), destacando a falta crônica de previsibilidade das linhas no DF e a dificuldade de saber alternativas quando se perde um ônibus. | **Conforme** |
| **Q03** | **Acesso Direto na Home** | *"No segundo quadro, o Marcos abre o portal no celular e planeja direto na home, sem baixar app pesado. Como você avalia essa ideia?"* | Avaliou de forma extremamente positiva (*"Muito bem, é bem funcional e melhoraria muito a minha vida"*). | **Conforme** |
| **Q04** | **Busca por Origem/Destino** | *"No terceiro quadro, ele não precisou saber o código da linha de cabeça; digitou 'SIA' e usou GPS. Acha esse método mais prático?"* | Considerou muito superior aos modelos tradicionais (*"Ah, muito mais prático, com toda certeza"*). | **Conforme** |
| **Q05** | **Comparação de Linhas** | *"No quarto quadro aparecem opções comparando linhas normais e semiexpressas com tempo e tarifa. Isso atende ao que você precisa saber?"* | Respondeu afirmativamente (*"Sim, com toda certeza"*), confirmando que tempo e custo são as variáveis críticas de decisão. | **Conforme** |
| **Q06** | **Rastreamento no Mapa (ETA)** | *"No quinto quadro, ele acompanha o ônibus chegando em tempo real no mapa e o tempo restante. Ver o ônibus se mexendo traria tranquilidade?"* | Declarou que traria *"muito mais tranquilidade, porque dá para saber que realmente dá para confiar no aplicativo"*. | **Conforme** |
| **Q07** | **Engajamento e Sugestões** | *"Se essa funcionalidade estivesse disponível hoje, você usaria na sua rotina? Teve alguma parte confusa ou que gostaria de mudar?"* | Afirmou que a proposta foi perfeitamente clara e que certamente incorporaria na sua rotina diária (*"Com certeza eu iria incrementar na minha rotina"*). | **Conforme** |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026), com base na transcrição da entrevista.</em></p>
</div>

---

### 3.2 Consolidação das Respostas: Análise de Tarefas (TAR-03 — HTA)

Em seguida, o participante inspecionou o diagrama da Análise Hierárquica de Tarefas (HTA), avaliando a lógica de decomposição dos passos:

<div align="center">
<p><strong>Tabela 2</strong> — Respostas da Avaliação da Análise de Tarefas (TAR-03)</p>
</div>

| ID | Tópico Avaliado | Pergunta Aplicada ao Participante | Resumo da Resposta do Participante | Avaliação do Modelo |
| :---: | :--- | :--- | :--- | :---: |
| **QT01** | **Ordem e Sequência Lógica** | *"Olhando para essas etapas, essa ordem de ações faz sentido para você na hora em que você precisa ir para algum lugar?"* | Afirmou que o modelo usa linguagem natural e que a ordem sequencial faz total sentido prático (*"Faz sentido! Usa uma linguagem bem natural e de fato é uma ordem lógica"*). | **Validade Confirmada** |
| **QT02** | **Completude das Informações** | *"Você sente falta de alguma etapa ou informação importante antes de embarcar?"* | Declarou que a decomposição cobre exatamente o que é necessário (*"Não. É exatamente o que eu imaginei que seria mesmo"*). | **Validade Confirmada** |
| **QT03** | **Alertas e Gestão de Contingências** | *"O quarto passo prevê alertas caso haja retenção de trânsito ou desvio na via. Ter essa informação integrada na tela de rotas seria útil?"* | Destacou como fundamental (*"Seria muito útil! Além da imprevisibilidade do ônibus, a imprevisibilidade do trânsito mexe muito na rotina"*). | **Validade Confirmada** |
| **QT04** | **Simplicidade do Fluxo** | *"Você achou esse fluxo de tarefas simples ou sentiu que alguma etapa exige passos ou cliques desnecessários?"* | Avaliou o fluxo como direto, objetivo e sem redundâncias (*"Não, achei muito simples e nada é desnecessário aqui. Bem explicado"*). | **Validade Confirmada** |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026), com base na transcrição da entrevista.</em></p>
</div>

---

## 4. Análise Qualitativa e Registro de Problemas

O participante demonstrou assimilação imediata dos conceitos retratados, ressaltando que a falta de previsibilidade do transporte e do trânsito no DF é o maior gargalo enfrentado pelos usuários. Os recursos de busca por destino sem necessidade de código de linha e acompanhamento do ônibus no mapa com tempo estimado de chegada (ETA) foram validados como soluções de alto valor.

### Tabela de Registro e Priorização de Problemas de IHC

<div align="center">
<p><strong>Tabela 3</strong> — Registro e Avaliação de Problemas de Usabilidade</p>
</div>

| ID Problema | Descrição do Problema | Local / Artefato | Severidade (0 a 4) | Impacto na Experiência | Sugestão de Reprojeto / Ação |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **NENHUM** | Nenhum problema de usabilidade, defeito de fluxo ou inconsistência foi reportado pelo entrevistado. | Storyboard 03 / TAR-03 | **0 (Sem Importância)** | O participante considerou os modelos claros, bem resolvidos e alinhados com suas reais necessidades diárias. | Manter a estrutura aprovada e avançar para o design das telas físicas no protótipo de papel. |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026). Escala de severidade baseada em Nielsen (1993) e Barbosa et al. (2021).</em></p>
</div>

---

## 5. Ficha de Avaliação e Inspeção Pós-Entrevista

A tabela a seguir apresenta a checagem técnica e metodológica da entrevista, adaptada da Tabela 4 do Planejamento do Teste Piloto:

<div align="center">
<p><strong>Tabela 4</strong> — Ficha de Avaliação Pós-Entrevista</p>
</div>

| # | Item Inspecionado | Critério de Aceitação / Avaliação | Situação | Parecer Analítico e Evidências |
| :-: | :--- | :--- | :---: | :--- |
| **1** | **Registro do TCLE e Ética** | Menção formal ao consentimento e autorização verbal gravada no início da sessão. | **Conforme** | Registrado formalmente aos `00:45` pelo entrevistador com confirmação verbal explícita do participante. |
| **2** | **Apresentação e Contexto** | Explicar o objetivo da sessão (avaliar artefatos) e caracterizar a persona antes dos quadrinhos. | **Conforme** | Objetivo acadêmico introduzido aos `00:05` e contexto da persona Marcos Paulo apresentado aos `01:13`. |
| **3** | **Aderência do Participante** | O participante compartilha atributos e dores com a persona investigada. | **Conforme** | Danilo (21 anos) utiliza ônibus da SEMOB cotidianamente e vivencia as dores de falta de previsibilidade relatadas na persona. |
| **4** | **Legibilidade dos Artefatos** | Exibição nítida do Storyboard e do diagrama HTA durante a aplicação das perguntas. | **Conforme** | Storyboard 03 permaneceu na tela até `04:51` e o diagrama HTA foi apresentado e discutido a partir de `04:52`. |
| **5** | **Compreensão das Perguntas** | O participante responde diretamente sem solicitar esclarecimentos ou reformulações. | **Conforme** | Compreensão plena e fluida de todos os tópicos; aos `01:35`, o participante resumiu perfeitamente toda a narrativa. |
| **6** | **Neutralidade na Condução** | Postura neutra sem induzir respostas ou justificar os artefatos. | **Atenção / Parcial** | A condução foi respeitosa e neutra na quase totalidade das perguntas, registrando-se ligeira formulação favorável na comparação do método de busca (`03:47`). |
| **7** | **Linguagem Acessível no HTA** | Tradução dos conceitos de análise de tarefas sem jargões acadêmicos pesados. | **Conforme** | O HTA foi apresentado intuitivamente como fluxo sequencial de ações, evitando jargões técnicos herméticos. |
| **8** | **Qualidade Técnica e Mídia** | Áudio compreensível, sem eco, vídeo sem congelamentos e gravação salva integralmente. | **Conforme** | Áudio e vídeo gravados de forma contínua com excelente inteligibilidade de ambas as partes (00:00 a 06:44). |
| **9** | **Duração da Sessão** | Sessão finalizada dentro do tempo planejado sem sobrecarregar o participante. | **Conforme** | A sessão durou 06min44s, demonstrando a agilidade da entrevista semiestruturada orientada por artefatos visuais diretos. |
| **10** | **Fechamento e Espaço Livre** | Abertura de espaço para considerações finais e agradecimento pela participação. | **Conforme** | Espaço para considerações finais ofertado aos `06:13` e agradecimentos acadêmicos registrados aos `06:32`. |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo Lima (2026).</em></p>
</div>

---

## 6. Recomendações para a Prototipação em Papel (Próximos Passos)

Com a aprovação integral do **Storyboard 03** e da **TAR-03**, os direcionamentos consolidados para a construção do **Protótipo de Papel** são:

1. **Tela Inicial Minimalista:** Destacar o campo de busca de destino *"Para onde você quer ir?"* imediatamente na Home, com a localização de origem pré-preenchida pelo GPS e botão para alteração manual se desejado.
2. **Cards Comparativos de Rotas:** Desenhar peças de papel móveis exibindo opções claras de linhas, comparando:
   - Tempo de caminhada até a parada de embarque mais próxima/ideal;
   - Número e tipo da linha (Direta, Semiexpressa ou Paradora);
   - Tarifa de integração (Cartão BRB Mobilidade);
   - Previsão do horário exato de chegada ao destino (ETA).
3. **Mecanismo de Alerta de Trânsito:** Incluir um componente visual (*badge* de aviso ou *pop-up*) para simular o comportamento do sistema diante de retenções graves nas vias estruturantes do DF, oferecendo a opção de trajeto alternativo em um clique.

---

## 7. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas de conduta acadêmica da Sociedade Brasileira de Computação (SBC) e ao Plano de Ensino da disciplina, declara-se que o Google Gemini foi empregado como ferramenta de Inteligência Artificial Generativa estritamente para auxílio na estruturação textual, transcrição de áudio e formatação em Markdown deste documento. A condução da entrevista presencial, o contato com o participante e a validação analítica dos dados coletados foram executados com total responsabilidade autoral por Lucas Araújo Lima.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento da Avaliação de IHC, Seção 11.7.5: Relato dos Resultados, pp. 263–264).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Normas aplicáveis a pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* NIELSEN, Jakob. **Usability Engineering**. San Francisco: Morgan Kaufmann, 1993.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador — Turma 01**. Universidade de Brasília, Campus UnB Gama, 2º semestre de 2026.
