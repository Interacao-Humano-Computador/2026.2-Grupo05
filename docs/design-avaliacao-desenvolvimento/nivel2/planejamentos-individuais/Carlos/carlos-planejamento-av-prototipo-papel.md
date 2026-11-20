## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 27/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Papel (TAR-06) via DECIDE. | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas Araújo](https://github.com/IgorDARAUJO) | Claude (Anthropic) - apenas revisou e formatou o texto em Markdown |
| 03/11/2026 | `1.1` | Registro das datas reais do teste piloto e da sessão (03/11/2026, e não 31/10 e 01/11 como planejado), do observador e do local, com link para o [relato dos resultados](../../relatos-individuais/carlos/relato-resultados-prot-papel.md). | [Carlos Costa](https://github.com/carloshfgit) | [Arthur Mariani](https://github.com/arthur-mariani) | Claude (Anthropic) - apenas revisou e formatou o texto em Markdown |
| 19/11/2026 | `1.2` | Padronização da estrutura (histórico no topo, conteúdo, fotos de referência e referências ao final); declaração de IA levada para o histórico; autor e revisor retirados do rodapé; retirada das referências que não são o livro da disciplina nem material do professor. Inclusão das telas do protótipo avaliado, com links para o protótipo e para o artefato relacionado. Inclusão do bloco de artefatos relacionados (persona, cenário, análise de tarefas, storyboard, planejamentos, relatos e protótipos da funcionalidade). Correção das páginas e seções citadas do livro da disciplina (edição de 2021). | [Gabriel Melo](https://github.com/gabriellcardone-06) | Pendente de revisão | Claude (Anthropic) — apoio na padronização da estrutura do artefato, na revisão das referências e na formatação em Markdown; apoio na inclusão das telas do protótipo.; apoio na inclusão dos links entre artefatos |

---

# Planejamento da Avaliação do Protótipo de Papel (TAR-06)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Papel** referente à **[TAR-06 (Consulta de ônibus em tempo real no DF no Ponto)](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md)**. Trata-se de um planejamento individual para orientar a avaliação formativa de um protótipo de baixa fidelidade, desenhado em papel, da consulta em tempo real que aparece no [Storyboard 08](../../../nivel1/storyboards.md#38-storyboard-08-consulta-do-onibus-em-tempo-real-no-df-no-ponto).

A avaliação envolve a simulação de uso por um participante do perfil da persona [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md) e é estruturada pelo **Framework DECIDE** (Barbosa et al., 2021) ([Imagem 2](#imagem-2)). O protótipo incorpora as recomendações da TAR-06 e os resultados da [avaliação do Storyboard 08 e da TAR-06](../../../nivel1/relatos-individuais/carlos/relato-resultados-storyboard-tarefas.md).

**Artefatos relacionados — fluxo da funcionalidade TAR-06 (Consulta do Ônibus em Tempo Real no DF no Ponto):**

* **Persona:** [João Pedro Carvalho](../../../../analise-de-requisitos/personas/joao-pedro-carvalho.md); [Mariana Borges Almeida](../../../../analise-de-requisitos/personas/mariana-borges-almeida.md)
* **Cenário:** [Cenário 2](../../../../analise-de-requisitos/cenarios/cenario-2-viagem-matutina.md); [Cenário 10](../../../../analise-de-requisitos/cenarios/cenario-10-viagem-ideal.md)
* **Análise de tarefas:** [TAR-06](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md)
* **Storyboard:** [Storyboard 08](../../../nivel1/storyboards.md#38-storyboard-08-consulta-do-onibus-em-tempo-real-no-df-no-ponto)
* **Nível 1 — avaliação do storyboard e da análise de tarefas:** [Planejamento da avaliação](../../../nivel1/planejamentos-individuais/Carlos/carlos-planejamento-avaliacao.md) · Planejamento do relato (*não disponível — pendente de correção manual*) · [Relato dos resultados](../../../nivel1/relatos-individuais/carlos/relato-resultados-storyboard-tarefas.md)
* **Nível 2 — protótipo de papel (baixa fidelidade):** Planejamento da avaliação (*esta página*) · [Planejamento do relato](carlos-planejamento-relato-prot-papel.md) · [Relato dos resultados](../../relatos-individuais/carlos/relato-resultados-prot-papel.md)
* **Nível 3 — protótipo de alta fidelidade:** [Planejamento da avaliação](../../../nivel3/planejamentos-individuais/carlos/carlos-planejamento-av-prot-alta-fidel.md) · [Planejamento do relato](../../../nivel3/planejamentos-individuais/carlos/carlos-planejamento-relato-prot-alta-fidel.md) · [Relato dos resultados](../../../nivel3/relatos-individuais/carlos/relato-resultados-prot-alta-fidel.md)
* **Telas do protótipo de papel:** telas no planejamento da avaliação (*nesta página*)
* **Protótipo de alta fidelidade navegável:** [acessar o protótipo](https://carloshfgit.github.io/prototipo-tar06-df-no-ponto/)


---

## 1. D — Determinar os Objetivos da Avaliação

Segundo Barbosa et al. (2021, Seção 12.2.3, p. 303), *"o método de prototipação em papel (Barbosa et al., 2021) avalia a usabilidade de um design de IHC representado em papel, através de simulações de uso com a participação de potenciais usuários"*. É uma opção para avaliação formativa, antes de construir uma solução executável ([Imagem 3](#imagem-3)).

### 1.1 Objetivos Principais
* **Identificar problemas de usabilidade e navegação:** detectar rótulos confusos, botões ambíguos e falhas de layout nas telas de busca, resultados e detalhe da linha.
* **Avaliar a interpretação da previsão:** verificar se o participante entende o tempo previsto, a posição no mapa e a indicação de **última atualização**, que é a recomendação da hipótese H4 da TAR-06.
* **Avaliar a reação a uma informação defasada:** observar se o participante percebe o aviso de posição desatualizada e toma uma decisão coerente (hipótese H5).
* **Avaliar os atalhos para consultas frequentes:** verificar se favoritar a linha e ativar o aviso de atraso são encontrados e compreendidos (objetivo 5 da HTA e hipótese H2).
* **Coletar sugestões de reprojeto** para o protótipo de alta fidelidade.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

<div align="center">
<p><strong>Tabela 1</strong> — Perguntas da Avaliação do Protótipo de Papel</p>
</div>

| ID | Categoria / Foco | Pergunta de Investigação | Hipótese / Elemento da TAR-06 | Critério de Aceitação |
| :---: | :--- | :--- | :--- | :--- |
| **P01** | **Busca** | O participante encontra a linha, pelo número ou pela referência "UnB Gama", sem ajuda? | HTA 2.1; H2 e H6 | Escolhe um dos caminhos de busca sem hesitação prolongada. |
| **P02** | **Seleção na lista** | O participante seleciona a linha e o ponto corretos na lista de resultados? | HTA 2.2; H3 | Não toca em resultado errado, ou percebe e corrige sozinho. |
| **P03** | **Leitura da previsão** | O participante lê o tempo previsto e localiza o ônibus no mapa? | HTA 3.1 | Informa corretamente em quanto tempo o ônibus chega. |
| **P04** | **Confiabilidade** | O participante nota e entende a indicação "atualizado há X"? | HTA 3.2; H4 | Explica, com suas palavras, o que a indicação significa. |
| **P05** | **Informação defasada** | Ao aparecer o aviso de posição desatualizada, o participante entende o aviso e decide o que fazer? | HTA 4; H5 | Escolhe esperar e consultar de novo ou buscar alternativa, justificando. |
| **P06** | **Consultas frequentes** | O participante encontra como favoritar a linha e ativar o aviso de atraso? | HTA 5; H2 | Conclui as duas ações sem ajuda. |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método escolhido é a **Prototipação em Papel** (Barbosa et al., 2021, Seção 12.2.3), um método de observação de uso com o participante. A Tabela 12.9 do livro resume suas atividades: preparação, coleta de dados, interpretação, consolidação e relato ([Imagem 4](#imagem-4)).

* **Justificativa:** o método é rápido e barato, permite avaliar soluções parciais, como uma única tarefa, e permite redesenhar uma tela no papel durante a própria sessão.
* **Técnica complementar:** o participante é incentivado a **pensar em voz alta** (*think aloud*), falando o que procura e o que espera de cada toque.

### 3.1 Tarefas Propostas ao Participante

As tarefas são apresentadas em um cartão impresso, com o contexto do Cenário 2: *"Você está no ponto de manhã e precisa chegar à UnB Gama para a primeira aula."*

<div align="center">
<p><strong>Tabela 2</strong> — Tarefas da sessão com o protótipo de papel</p>
</div>

| ID | Tarefa | Objetivos da HTA cobertos | Perguntas relacionadas |
| :---: | :--- | :--- | :--- |
| **06.1** | Descobrir em quanto tempo chega o próximo ônibus da sua linha para a UnB Gama. | 1, 2 e 3.1 | P01, P02, P03 |
| **06.2** | O app mostrou um aviso sobre a posição do ônibus. Decida o que fazer. | 3.2 e 4 | P04, P05 |
| **06.3** | Deixe essa linha pronta para as próximas manhãs e peça para ser avisado se ela atrasar. | 5 | P06 |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Confecção do Protótipo em Papel

As telas são desenhadas à mão livre, sem detalhes que não importam para a avaliação. Além das telas estáticas, são preparados pedaços de papel com as partes que mudam durante a interação, como resultados de busca e mensagens (Barbosa et al., 2021, p. 303) ([Imagem 3](#imagem-3)).

<div align="center">
<p><strong>Tabela 3</strong> — Telas e peças do protótipo de papel</p>
</div>

| Peça | Tipo | Conteúdo | Tarefa |
| :--- | :--- | :--- | :--- |
| **Moldura de celular** | Base | Cartolina no formato de smartphone, que delimita a área da tela. | Todas |
| **T1 — Tela inicial** | Tela estática | Campo de busca com duas opções visíveis, "linha" e "lugar de referência", e área de linhas favoritas (vazia). | 06.1, 06.3 |
| **T2 — Resultados da busca** | Peça móvel | Lista de linhas e pontos próximos, com nomes parecidos para testar a seleção (H3). | 06.1 |
| **T3 — Detalhe da linha** | Tela estática | Tempo previsto ("chega em 4 min"), mapa com o ônibus, indicação "atualizado há 30 s" e botões "favoritar" e "avisar atraso". | 06.1, 06.2, 06.3 |
| **N1 — Aviso de posição desatualizada** | Peça móvel (*post-it*) | "Posição sem atualização há 5 min. A previsão pode estar errada." com as opções "consultar de novo" e "ver alternativas". | 06.2 |
| **T4 — Alternativas** | Tela estática | Outras linhas para o mesmo destino, com tempos previstos. | 06.2 |
| **N2 — Confirmações** | Peças móveis | "Linha salva nos favoritos" e "Você será avisado de atrasos nesta linha". | 06.3 |
| **Peças em branco** | Reserva | Papéis e canetas para redesenhar durante a sessão. | Todas |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

### 4.2 Papéis na Sessão

Na sessão, *"um avaliador atua como 'computador' para simular em papel a execução do sistema"* (Barbosa et al., 2021, p. 303), enquanto outro observa e registra ([Imagem 5](#imagem-5)):

* **Participante:** realiza as tarefas tocando no papel com o dedo e falando o que pensa.
* **"Computador" — Carlos Costa:** troca telas e peças **apenas em resposta às ações** do participante, sem dar dicas.
* **Observador — [Arthur Mariani](https://github.com/arthur-mariani):** grava a mesa, cronometra cada tarefa e anota hesitações, erros e comentários.

### 4.3 Recrutamento e Perfil do Participante
* **Perfil:** estudante universitário da FCTE/UnB Gama que usa ônibus e já usou o DF no Ponto ou app semelhante (perfil de João Pedro Carvalho).
* **Quantidade:** 1 participante. Para não enviesar o resultado, deve ser **diferente** do participante da avaliação do storyboard, que já conhece a proposta.
* **Exclusão:** integrantes do Grupo 05.

### 4.4 Infraestrutura e Cronograma

<div align="center">
<p><strong>Tabela 4</strong> — Cronograma da sessão com o protótipo de papel</p>
</div>

| Parâmetro | Detalhamento |
| :--- | :--- |
| **Teste piloto:** | Planejado para 31/10/2026. **Realizado em 03/11/2026, por volta de 08:30**, com [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) como participante simulado. |
| **Sessão:** | Planejada para 01/11/2026 (dom), 14:00. **Realizada em 03/11/2026, das 09:00 às 09:08**, com o participante P05. |
| **Local:** | Ambiente presencial tranquilo e iluminado. A sessão ocorreu na FCTE/UnB. |
| **Gravação:** | Celular em suporte, enquadrando a mesa e as mãos, com áudio. |
| **Duração prevista:** | 25 minutos (5 min de recepção e TCLE, 15 min de tarefas e 5 min de conversa final). |
| **Materiais:** | TCLE impresso, cartão com o cenário e as tarefas, peças do protótipo e ficha do observador. |
| **Orçamento:** | **R\$ 0,00** (papel, canetas e celular próprios). |

<div align="center">
<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

Os cuidados seguem a Resolução nº 510/2016 do CNS e Barbosa et al. (2021, Seção 11.8, p. 264) ([Imagem 6](#imagem-6)):

1. **TCLE impresso:** o participante lê e assina o [Termo de Consentimento Livre e Esclarecido](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf) antes de começar.
2. **Imagem e áudio:** a câmera enquadra apenas a mesa e as mãos; o rosto do participante não aparece.
3. **Anonimato e liberdade:** o participante é identificado por código e pode parar a qualquer momento, sem prejuízo.
4. **Foco no protótipo:** o avaliador explica que é o protótipo que está sendo testado, não a pessoa, e que errar ajuda a encontrar problemas.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

1. **Revisão do vídeo e das anotações:** registrar, para cada tarefa, sucesso sem ajuda, tempo, pedidos de ajuda e falas marcantes.
2. **Problemas encontrados:** listar os problemas com a escala de severidade de 0 a 4 (Barbosa et al., 2021).
3. **Correções no papel:** problemas simples podem ser redesenhados durante a sessão; o relato separa os problemas corrigidos no papel dos que ficam para a alta fidelidade.
4. **Hipóteses da TAR-06:** registrar se a sessão reforça ou contradiz H2 a H6.
5. **Relato:** os resultados seguem a estrutura definida no [Planejamento do Relato do Protótipo de Papel](carlos-planejamento-relato-prot-papel.md).

---

## 7. Planejamento do Teste Piloto

Antes da sessão com o participante, é feito um **teste piloto** (Barbosa et al., 2021, Seção 11.7.2, p. 260) ([Imagem 7](#imagem-7)):

* **Objetivo:** verificar se as peças cobrem todos os caminhos das três tarefas, treinar a troca rápida das peças pelo "computador", conferir o tempo e testar o enquadramento da gravação.
* **Data e participante:** planejado para 31/10/2026 com um integrante do grupo como participante simulado; realizado em 03/11/2026 com [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa).
* **Dados do piloto:** servem **apenas para calibrar** o material e o procedimento e **não entram nos resultados** da avaliação.


## 8. Telas do Protótipo Avaliado

A Imagem 1 mostra as telas do protótipo de papel da [TAR-06](../../../../analise-de-requisitos/analise-de-tarefas/tar-06-df-no-ponto.md), também apresentadas no [relato dos resultados da avaliação](../../../nivel2/relatos-individuais/carlos/relato-resultados-prot-papel.md).

<div id="imagem-1" align="center" markdown="1">
<p><strong>Imagem 1</strong> — Telas e peças do protótipo de papel da TAR-06</p>

![Telas e peças do protótipo de papel da TAR-06](../../../../assets/prototipos/prototipo-papel-tar-06.jpeg){ width="600" }

<p><em>Fonte: Elaborado por Carlos Costa (2026).</em></p>
</div>

---
---

## 9. Fotos de Referência
<div id="imagem-2" markdown>
![Framework DECIDE](../../../../assets/prints_referencias/referencia-decide-visao-geral.png)
<p><em>Imagem 2 — Framework DECIDE (Barbosa et al., 2021, Seção 11.8, pp. 263–264).</em></p>
</div>

<div id="imagem-3" markdown>
![Definição da prototipação em papel](../../../../assets/prints_referencias/verificacao-v2/livro-papel-metodo.png)
<p><em>Imagem 3 — Prototipação em papel: definição, avaliador "computador" e preparação das telas e peças (Barbosa et al., 2021, Seção 12.2.3, p. 303; recorte e grifo: Gabriel Melo, 2026).</em></p>
</div>

<div id="imagem-4" markdown>
![Tabela 12.9](../../../../assets/prints_referencias/verificacao-v2/livro-papel-atividades.png)
<p><em>Imagem 4 — Tabela 12.9: atividades do método de prototipação em papel (Barbosa et al., 2021, Seção 12.2.3, Tabela 12.9, pp. 304–305; recorte e grifo: Gabriel Melo, 2026).</em></p>
</div>

<div id="imagem-5" markdown>
![Coleta de dados e papéis](../../../../assets/prints_referencias/verificacao-v2/livro-papel-observador.png)
<p><em>Imagem 5 — Condução da simulação e papéis do "computador" e do observador (Barbosa et al., 2021, Seção 12.2.3, p. 305; recorte e grifo: Gabriel Melo, 2026).</em></p>
</div>

<div id="imagem-6" markdown>
![Questões éticas](../../../../assets/prints_referencias/referencia-decide-questoes-eticas.png)
<p><em>Imagem 6 — Questões éticas da avaliação com usuários (Barbosa et al., 2021, Seção 11.8, p. 264).</em></p>
</div>

<div id="imagem-7" markdown>
![Teste piloto](../../../../assets/prints_referencias/print-teoria-teste-piloto.png)
<p><em>Imagem 7 — Teste piloto (Barbosa et al., 2021, Seção 11.7.2, p. 260).</em></p>
</div>

---

## 10. Referências Bibliográficas
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, Seções 11.7.2 e 11.8, pp. 260, 279–280).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
