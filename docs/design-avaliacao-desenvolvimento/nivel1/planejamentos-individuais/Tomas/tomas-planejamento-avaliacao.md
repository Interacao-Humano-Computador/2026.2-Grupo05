## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 13/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Storyboard 05 e da Análise de Tarefas (TAR-03) via DECIDE. | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para estruturação do texto e formatação Markdown da página |

---

# Planejamento da Avaliação do Storyboard e da Análise de Tarefas (TAR-03 / Cenário 9)

Neste documento, apresenta-se o **Planejamento da Avaliação do Storyboard e da Análise de Tarefas** referente ao **Storyboard 05 (Consulta de Rotas e Desvios para Novos Endereços)** e à **TAR-03 (Planejamento de Rota por Origem e Destino com Monitoramento em Tempo Real)**. Trata-se de um planejamento individual para orientar a avaliação formativa do storyboard e dos modelos de **Análise Hierárquica de Tarefas (HTA)** e **ConcurTaskTrees (CTT)** associados.

O storyboard retrata a persona [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md) na situação do [Cenário 9](../../../../analise-de-requisitos/cenarios/cenario-9-endereco-novo.md). Heitor recebe uma ordem de serviço em um endereço que não conhece (708 Norte), busca a rota pelo destino no site e é avisado de que a linha está desviada pela L2. Por isso, a avaliação dá atenção especial a dois ramos da TAR-03: **informar o destino** (operação 1.2 do HTA) e **consultar alertas de desvio** (objetivo 4 do HTA).

O planejamento segue o **Framework DECIDE** (Preece, Rogers e Sharp, 2005; Barbosa et al., 2021), em seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar os dados).

---

## 1. D — Determinar os Objetivos da Avaliação

A avaliação é **formativa**. O objetivo é verificar se a história e o modelo de tarefa representam a realidade de quem precisa chegar a um endereço novo de ônibus, antes de qualquer protótipo de tela.

### 1.1 Objetivos da Avaliação do Storyboard 05
* **Verificar a verossimilhança contextual:** avaliar se a situação do [Storyboard 05](../../storyboards.md) (receber um endereço desconhecido durante o expediente e precisar chegar a tempo) é parecida com o que trabalhadores que se deslocam pelo DF realmente vivem.
* **Validar a clareza da proposta:** confirmar se o participante entende, só pelos quadros, que o site encontra a linha a partir do **destino** e avisa sobre o **desvio** antes que ele vá ao ponto errado.
* **Avaliar a confiança e a aceitação da solução:** descobrir se o participante confiaria no aviso de desvio mostrado no site e se usaria a busca por destino no lugar das formas que usa hoje (Google, colegas, WhatsApp).

### 1.2 Objetivos da Avaliação da Análise de Tarefas (TAR-03 - HTA e CTT)
* **Avaliar a correção e a completude do fluxo:** verificar se os passos do [HTA da TAR-03](../../../../analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota.md) (informar origem e destino, comparar linhas, escolher, acompanhar o ônibus) correspondem ao que o participante faz para chegar a um lugar novo.
* **Validar o momento do aviso de desvio:** no HTA, a consulta de alertas (objetivo 4) só acontece "se houver atraso na via", depois da escolha da linha. O Storyboard 05 mostra o aviso **junto com a rota sugerida**. A avaliação deve descobrir qual dos dois momentos faz sentido para o usuário.
* **Identificar passos faltantes:** verificar se o modelo deixa de fora ações que aparecem no Cenário 9, como confirmar o endereço exato entre sugestões parecidas (708 Norte × 708 Sul) e encontrar a nova parada depois do desvio.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

As perguntas abaixo transformam os objetivos em um roteiro de entrevista. Elas foram escritas de forma aberta e neutra, para não sugerir a resposta esperada (Preece, Rogers e Sharp, 2005, p. 416).

### 2.1 Tabela de Perguntas: Avaliação do Storyboard 05

<div align="center">
<p><strong>Tabela 1</strong> — Roteiro de Perguntas para Avaliação do Storyboard 05</p>
</div>

| ID | Categoria / Foco | Pergunta Orientada ao Participante | Resposta Esperada / Critério de Aceitação |
| :---: | :--- | :--- | :--- |
| **Q01** | **Clareza Narrativa** | Com suas palavras, o que acontece nesta história? | O participante resume a história (endereço novo → busca no site → aviso de desvio → chega a tempo) sem ajuda do avaliador. |
| **Q02** | **Verossimilhança** | Você já precisou ir de ônibus a um endereço que não conhecia? Como foi descobrir qual ônibus pegar? | O participante relata uma experiência parecida e compara com a da história. |
| **Q03** | **Atuação do Sistema** | Nos quadros 2 e 3, o que o site está fazendo pelo Heitor? | O participante identifica a busca pelo destino e o aviso de desvio da linha. |
| **Q04** | **Confiança no Aviso** | Se você visse esse aviso de desvio pela L2, o que faria em seguida? Confiaria nele? | O participante diz que mudaria de ponto com base no aviso, ou explica o que faltaria para confiar nele. |
| **Q05** | **Engajamento** | Você usaria o site da Semob para isso? O que mudaria nesta história? | O participante opina sobre o uso da solução e sugere ajustes. |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 2.2 Tabela de Perguntas: Avaliação da Análise de Tarefas (TAR-03 - HTA e CTT)

<div align="center">
<p><strong>Tabela 2</strong> — Roteiro de Perguntas para Validação da Análise de Tarefas (HTA e CTT)</p>
</div>

| ID | Categoria / Foco | Pergunta Orientada ao Participante | Resposta Esperada / Critério de Aceitação |
| :---: | :--- | :--- | :--- |
| **QT01** | **Sequência Lógica** | Os passos do diagrama (informar de onde sai e para onde vai, comparar as linhas, escolher uma e acompanhar o ônibus) são os que você faria para chegar a um lugar novo? | O participante concorda com a sequência ou aponta passos faltantes, desnecessários ou fora de ordem. |
| **QT02** | **Informar o Destino (1.2)** | Como você costuma escrever um destino que não conhece: endereço (ex.: "708 Norte"), nome do prédio ou ponto de referência? | O participante indica as formas de busca que o campo de destino precisa aceitar. |
| **QT03** | **Momento do Aviso (4)** | No diagrama, você só consulta os avisos de desvio se houver atraso. Você preferiria ver o aviso antes, junto com a rota sugerida? | O participante diz em que momento o aviso deve aparecer. |
| **QT04** | **Nova Parada (CTT)** | Quando a linha está desviada, o que você precisaria saber para encontrar o ponto certo? | O participante indica as informações que faltam no modelo (ex.: localização da parada provisória). |
| **QT05** | **Simplicidade do Fluxo** | Alguma etapa parece difícil de fazer no celular, com pressa e com uma mão ocupada? | O participante opina sobre o esforço da tarefa no contexto do Cenário 9. |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

Escolheu-se o **método de investigação por entrevista semiestruturada**, apoiada pela apresentação do storyboard e dos diagramas da tarefa.

* **Justificativa da escolha:** segundo Preece, Rogers e Sharp (2005, p. 416), a entrevista semiestruturada usa *"um roteiro básico para guiar-se"*, de modo que *"os mesmos tópicos serão abordados pelos diferentes entrevistados"*, e o entrevistador *"faz com que o entrevistado estenda sua fala, até que nenhuma informação nova e relevante surja"*. Isso combina com esta avaliação: as Tabelas 1 e 2 formam o roteiro comum a todas as sessões do grupo, e o avaliador pode aprofundar o que o participante contar sobre as próprias experiências com endereços novos e desvios.
* **Instrumentos de apoio:** a imagem do Storyboard 05 apresentada quadro a quadro, um resumo do Cenário 9 e da persona Heitor, e os diagramas HTA e CTT da TAR-03, explicados em linguagem simples.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Recrutamento e Perfil do Participante
* **Perfil do convidado:** usuário do transporte público do DF com perfil alinhado à persona [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md). É um trabalhador que, durante o expediente, precisa ir de ônibus a endereços diferentes, como técnico de manutenção, prestador de serviço ou entregador, e que usa o celular para descobrir como chegar.
* **Quantidade:** 1 participante (P05), conforme o [Cronograma e Logística das Sessões de Avaliação](../../cronograma-e-logistica-das-sessoes.md).
* **Recrutamento:** rede de contatos da equipe. O convite e a confirmação acontecem entre 14/10 e 16/10.

### 4.2 Ferramentas e Infraestrutura Tecnológica
* **Ambiente virtual:** reunião remota no **Microsoft Teams**, com gravação ativada. O Google Meet fica como alternativa.
* **Gravação de reserva:** OBS Studio ou 123APPS no computador do observador.
* **Materiais preparados:** imagem do Storyboard 05, diagramas HTA e CTT da TAR-03, resumo do Cenário 9 e o TCLE em PDF.

### 4.3 Cronograma e Execução Individual

<div align="center">
<p><strong>Tabela 3</strong> — Cronograma da Sessão Individual de Avaliação</p>
</div>

| Parâmetro | Detalhamento da Sessão |
| :--- | :--- |
| **Sessão:** | S5 do [Cronograma e Logística das Sessões de Avaliação](../../cronograma-e-logistica-das-sessoes.md). |
| **Data e Horário:** | 21/10/2026 (quarta-feira), das 19:30 às 20:30. |
| **Local / Canal:** | Reunião remota via Microsoft Teams. |
| **Avaliador (condução):** | **Rodrigo Carvalho**. O autor do storyboard não conduz a própria sessão, para não defender o artefato nem induzir respostas. |
| **Observador / anotador:** | **Tomás Rocho** (autor do Storyboard 05). |
| **Participante Convidado:** | P05, trabalhador que se desloca para endereços variados (perfil de Heitor Santos Júnior). |
| **Duração Estimada:** | **45 minutos**, em uma janela de 60 minutos. |
| **Custo Estimado:** | **R\$ 0,00** (plataformas gratuitas ou institucionais e equipamentos próprios). |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

A avaliação segue as Resoluções nº 466/2012 e nº 510/2016 do Conselho Nacional de Saúde (CNS) e a literatura de IHC (Barbosa et al., 2021):

1. **Apresentação do TCLE:** antes de qualquer pergunta, o avaliador apresenta o [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf), explicando o objetivo acadêmico do estudo e que a avaliação é sobre o **artefato**, e não sobre o participante.
2. **Autorização de gravação:** a gravação só começa depois da leitura do termo e do aceite verbal do participante, registrado no início do vídeo.
3. **Anonimato e desistência:** o participante é identificado apenas como **P05**. Ele pode deixar de responder qualquer pergunta ou encerrar a sessão a qualquer momento, sem prejuízo.
4. **Cuidado com dados do trabalho:** como o perfil envolve deslocamentos a serviço, o avaliador pede que o participante não cite nomes de empresas, clientes ou endereços reais de trabalho. Se forem citados, esses dados não entram nas anotações nem no relato.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Depois da sessão, a gravação e as anotações do observador passam pelas etapas abaixo:

1. **Triagem qualitativa:** as falas, hesitações e sugestões de P05 são transcritas nos trechos relevantes e agrupadas por categoria: clareza, verossimilhança, confiança no aviso, passos faltantes e sugestões.
2. **Confronto com o modelo:** as respostas às perguntas QT01 a QT05 são comparadas com o [HTA e o CTT da TAR-03](../../../../analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota.md), em especial com as operações 1.2 (informar destino) e 4.1 (verificar avisos de desvio). Cada diferença entre o modelo e o relato do participante é registrada como um possível problema.
3. **Encaminhamento para o relato:** as descobertas alimentam o [Planejamento do Relato dos Resultados](tomas-planejamento-relato-resultados-avaliacao.md), que define como os resultados serão tabelados e priorizados.

---

## 7. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que o Claude (Anthropic) foi usado para auxiliar na estruturação do texto e na formatação das tabelas em Markdown. A definição dos objetivos, as perguntas do roteiro, a logística da sessão e a revisão final são de responsabilidade do integrante Tomás Rocho.

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 466, de 12 de dezembro de 2012**. Aprova diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. Brasília: Diário Oficial da União, 2013.
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. Porto Alegre: Bookman, 2005. (Capítulo 13: Perguntando a Usuários e Especialistas, Seção 13.2.4, p. 416).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.

---
**Autor:** [Tomás Rocho](https://github.com/TomasRocho)  
**Revisor:** [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa)
