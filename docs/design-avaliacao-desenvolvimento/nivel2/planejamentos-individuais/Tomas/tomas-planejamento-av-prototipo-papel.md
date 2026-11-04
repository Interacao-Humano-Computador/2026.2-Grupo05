## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 29/10/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Papel da TAR-09 (Pedido de aumento do limite diário do Vale-Transporte) via DECIDE. | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para estruturação do texto e formatação Markdown da página |

---

# Planejamento da Avaliação do Protótipo de Papel (TAR-09)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Papel** referente à **[TAR-09 (Solicitar Aumento do Limite Diário de Uso do Vale-Transporte)](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md)**. O protótipo representa, em papel, a solução proposta na seção 5 da TAR-09 e mostrada no [Storyboard 05](../../../nivel1/storyboards.md): um acesso direto **"Meu Vale-Transporte foi recusado"** no site da SEMOB-DF, que explica a recusa do cartão, recebe o pedido de mais acessos pelo celular, gera um protocolo e avisa quando o novo limite está valendo.

A avaliação será presencial, com um participante que represente a persona [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md) simulando o uso do site no celular. O planejamento segue o **Framework DECIDE** (Preece, Rogers e Sharp, 2005; Barbosa et al., 2021), em seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar os dados).

---

## 1. D — Determinar os Objetivos da Avaliação

A avaliação é **formativa**. Segundo Barbosa et al. (2021, Cap. 12), a prototipação em papel é um método de observação de uso que permite encontrar problemas de interação antes de qualquer implementação, enquanto mudar o design ainda é barato.

### 1.1 Objetivos Principais
* **Verificar se o participante encontra o serviço sozinho:** observar se, a partir da página inicial, ele reconhece o atalho "Meu Vale-Transporte foi recusado" no meio de outros serviços, sem depender do nome institucional "Limites do Vale-Transporte".
* **Verificar se a explicação da recusa é compreendida:** saber se a tela "Você usou 8 de 8 passagens hoje" deixa claro que o problema é o limite diário, e não falta de saldo, e que as integrações também contam.
* **Avaliar o esforço do pedido pelo celular:** observar se o participante consegue descrever a rotina, enviar as fotos dos documentos e a declaração do RH sem ajuda, e onde ele hesita ou erra.
* **Avaliar o feedback e o acompanhamento:** verificar se o protocolo, a consulta do andamento e o aviso pelo WhatsApp dão ao participante segurança de que o pedido foi recebido.
* **Coletar sugestões de reprojeto:** reunir mudanças de texto, ordem das telas e elementos para o protótipo de alta fidelidade.

---

## 2. E — Explorar as Perguntas a Serem Respondidas

As perguntas abaixo orientam a observação durante a simulação e a conversa logo depois dela.

<div align="center">
<p><strong>Tabela 1</strong> — Perguntas da Avaliação do Protótipo de Papel</p>
</div>

| ID | Categoria / Foco | Pergunta da Avaliação | Critério de Aceitação / Resposta Esperada |
| :---: | :--- | :--- | :--- |
| **Q01** | **Encontrar o serviço** | O participante encontra o atalho "Meu Vale-Transporte foi recusado" na página inicial, entre os outros serviços? | Toca no atalho certo em até 30 segundos, sem pedir ajuda. |
| **Q02** | **Entender a recusa** | Depois de informar o número do cartão, o participante entende por que o cartão foi recusado? | Explica com as próprias palavras que passou do limite de passagens do dia, e não que está sem saldo. |
| **Q03** | **Integrações** | O participante entende que cada integração também conta como uma passagem? | Ao ser perguntado, diz que cada ônibus conta, mesmo com integração. |
| **Q04** | **Descrever a rotina** | O participante consegue preencher "Conte sua rotina" sem saber de antemão as linhas que vai usar? | Escreve (ou fala) a rotina sem travar e sem perguntar o que deve colocar. |
| **Q05** | **Documentos e declaração** | O participante entende o que é cada documento pedido e como usar o modelo de declaração do RH? | Envia as fotos e indica que levaria o modelo ao RH, sem confundir os documentos. |
| **Q06** | **Recuperação de erro** | Quando a foto é recusada por estar ilegível, o participante percebe o problema e tira outra? | Lê a mensagem e toca em "Tirar outra foto" sem ajuda. |
| **Q07** | **Protocolo e acompanhamento** | Depois de enviar, o participante sabe o que acontece a seguir e como acompanhar o pedido? | Diz que vai receber aviso pelo WhatsApp e mostra onde consultaria o andamento pelo protocolo. |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 3. C — Choose (Escolher) os Métodos de Avaliação

O método escolhido é a **Prototipação em Papel** (Snyder, 2003; Barbosa et al., 2021, Seção 12.2.3), um **método de observação de uso** em que o participante executa tarefas reais tocando em telas desenhadas à mão, enquanto um avaliador faz o papel do "computador" e troca as folhas conforme as ações dele.

* **Justificativa:** a TAR-09 envolve várias telas em sequência, uma mensagem de erro e um aviso que chega dias depois. O papel permite simular todo esse fluxo em poucos minutos, sem programar nada, e corrigir uma tela durante a própria sessão se algo não for entendido.
* **Técnica complementar:** o participante será convidado a **pensar em voz alta** (*think aloud*), falando o que procura, o que espera que aconteça e o que entendeu de cada tela.
* **Conversa pós-teste:** ao final, o avaliador faz as perguntas Q02, Q03 e Q07 de forma aberta, para confirmar o que foi observado.

---

## 4. I — Identificar e Administrar as Questões Práticas

### 4.1 Confecção do Protótipo em Papel

O protótipo será desenhado à mão em folhas de papel sulfite, no formato de tela de celular, com letras grandes, porque a persona tem dificuldade de leitura de letras pequenas.

* **Moldura do dispositivo:** um molde de celular em cartolina, com a área da tela recortada, onde as folhas são encaixadas.
* **Telas base:**
    1. **T1 — Página inicial da SEMOB-DF**, com seis atalhos do mesmo tamanho: "Linhas e horários", "Cartões e recarga", **"Meu Vale-Transporte foi recusado"**, "Preços das passagens", "Ouvidoria" e "Notícias". Os outros atalhos existem para não induzir a escolha.
    2. **T2 — Informar o cartão**, com o campo "Número do cartão" e o botão "Continuar".
    3. **T3 — Explicação da recusa**, com o título "Você usou 8 de 8 passagens hoje", oito bolinhas pintadas, o aviso "As integrações também contam" e os botões **"Pedir mais passagens por dia"** e "Prefiro entregar no posto".
    4. **T4 — Pedido, passo 1 de 3: "Conte sua rotina"**, com uma caixa de texto e um exemplo ("Atendo prédios na Asa Sul e na Asa Norte, 5 ou 6 por dia").
    5. **T5 — Pedido, passo 2 de 3: "Fotos dos documentos"**, com os itens "RG ou CPF" e "Comprovante de residência", cada um com um botão de câmera.
    6. **T6 — Pedido, passo 3 de 3: "Declaração do RH"**, com os botões "Baixar modelo para o RH" e "Enviar foto da declaração assinada".
    7. **T7 — Revisão do pedido**, com o resumo da rotina, a lista de documentos enviados e o botão "Enviar pedido".
    8. **T8 — Confirmação**, com "Pedido enviado!", o protocolo **2026-0451** e o texto "Vamos te avisar pelo WhatsApp".
    9. **T9 — Acompanhar pedido**, com campo para o protocolo e a situação do pedido.
* **Peças móveis (post-its e cartões recortados):**
    * **W1 — Teclado numérico**, colocado sobre a parte de baixo da tela quando o participante toca em um campo.
    * **W2 — Prévia da foto**, com "Foto tirada" e os botões "Usar esta foto" e "Tirar outra foto".
    * **W3 — Erro de foto ilegível**, com "Não conseguimos ler o documento. Tire outra foto com mais luz." (usada uma vez, de propósito, na foto do comprovante).
    * **W4 — Aviso de documento faltando**, com "Falta a declaração do RH", usado se o participante tentar enviar sem ela.
    * **W5 — Postos de atendimento**, com endereço e horário dos postos, usado se o participante tocar em "Prefiro entregar no posto".
    * **W6 — Situação do pedido**, com "Em análise pela Semob — prazo de até 5 dias úteis".
    * **W7 — Notificação do WhatsApp**, com "SEMOB: seu novo limite diário foi aprovado e já está valendo".
* **Ficha do participante:** um cartão de Vale-Transporte de papel com um número fictício e cópias fictícias de RG e comprovante, marcadas como **"EXEMPLO"**, para que nenhum documento real seja fotografado.

### 4.2 Roteiro de Tarefas da Sessão

As tarefas são lidas em voz alta, uma de cada vez, a partir do [Cenário 9](../../../../analise-de-requisitos/cenarios/cenario-9-limite-vale-transporte.md): *"Você trabalha com manutenção e passou o dia indo de prédio em prédio de ônibus. Na volta para casa, o cartão do Vale-Transporte não passou na catraca. Use o site da SEMOB no celular para resolver."*

<div align="center">
<p><strong>Tabela 2</strong> — Tarefas Simuladas no Protótipo de Papel</p>
</div>

| ID Tarefa | Descrição da Tarefa | Telas e Peças | Objetivos da TAR-09 (HTA / CTT) | Perguntas Investigadas |
| :---: | :--- | :--- | :--- | :--- |
| **TAR-09.1** | Descobrir por que o cartão foi recusado. | T1, T2, T3, W1 | HTA 1 e 2 / CTT "Informar o número do cartão" e "Mostrar acessos usados hoje e o limite" | Q01, Q02, Q03 |
| **TAR-09.2** | Pedir mais passagens por dia, enviando a rotina, as fotos dos documentos e a declaração do RH. | T4 a T8, W1 a W4 | HTA 3, 4 e 5 / CTT "Montar o pedido" e "Conferir documentos e gerar protocolo" | Q04, Q05, Q06 |
| **TAR-09.3** | Alguns dias depois, conferir se o pedido foi aprovado. | T9, W6, W7 | HTA 6 / CTT "Acompanhar o pedido" | Q07 |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

### 4.3 Definição dos Papéis da Equipe na Sessão

Conforme Barbosa et al. (2021, p. 304), a sessão com protótipo de papel exige papéis bem definidos:

* **Participante:** executa as tarefas tocando no papel com o dedo e escrevendo nos campos com caneta, como se fosse a tela do celular.
* **Avaliador "computador" (Tomás Rocho):** troca as telas e coloca as peças móveis **apenas em resposta** às ações do participante. Não explica a interface nem dá dicas; quando o participante perguntar algo, responde "O que você acha que acontece se tocar aí?". Também é quem lê as tarefas.
* **Avaliador observador (Rodrigo Carvalho):** opera a gravação, cronometra cada tarefa e preenche a ficha de observação com hesitações, erros, pedidos de ajuda e falas do participante, sem interferir na sessão.

### 4.4 Recrutamento e Perfil do Participante
* **Perfil:** trabalhador com carteira assinada que usa o **Vale-Transporte** e pega vários ônibus no mesmo dia por causa do trabalho (técnico de manutenção, prestador de serviço, entregador, cuidador), com uso prático do celular (WhatsApp, banco), como a persona Heitor.
* **Preferência:** de preferência uma pessoa **diferente** do participante P05 da avaliação do storyboard, para que ela não chegue já sabendo como a solução funciona.
* **Quantidade:** 1 participante.
* **Recrutamento:** rede de contatos da equipe (familiares, vizinhos, colegas de trabalho de conhecidos), sob responsabilidade de Tomás Rocho.

### 4.5 Infraestrutura, Materiais e Registro dos Dados
* **Local:** mesa em ambiente silencioso e iluminado, numa sala da FCTE/UnB ou no local de preferência do participante, para evitar deslocamento.
* **Gravação:** celular em suporte, filmando **só a mesa e as mãos**, com captação de áudio.
* **Materiais:** TCLE impresso, folha com o cenário e as tarefas, telas e peças do protótipo organizadas em envelopes na ordem de uso, ficha fictícia do participante, ficha de observação, cronômetro e caneta.
* **Ficha de observação:** uma linha por tarefa, com hora de início e fim, conclusão (sim, com ajuda, não), hesitações, erros, pedidos de ajuda, falas marcantes e minuto da gravação.

### 4.6 Cronograma de Execução

<div align="center">
<p><strong>Tabela 3</strong> — Cronograma da Sessão do Protótipo de Papel</p>
</div>

| Parâmetro | Detalhamento |
| :--- | :--- |
| **Teste piloto:** | 30/10/2026 (sexta-feira), 19:00, com um integrante da equipe como participante simulado. |
| **Sessão definitiva:** | 31/10/2026 (sábado), 10:00. O sábado foi escolhido porque o perfil do participante trabalha em horário comercial durante a semana. |
| **Local:** | Sala na FCTE/UnB ou local de preferência do participante. |
| **Avaliador "computador":** | Tomás Rocho. |
| **Avaliador observador:** | Rodrigo Carvalho. |
| **Duração prevista:** | **30 minutos**: 5 min de recepção e TCLE, 15 min de tarefas e 10 min de conversa pós-teste. |
| **Custo estimado:** | **R\$ 0,00** (papel, cartolina, post-its, canetas e celular próprio para gravação). |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 5. D — Decidir como Lidar com as Questões Éticas

A sessão segue as Resoluções nº 466/2012 e nº 510/2016 do Conselho Nacional de Saúde (CNS) e as orientações de Barbosa et al. (2021):

1. **Consentimento informado:** antes de começar, o avaliador lê com o participante o [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf), explica que o objetivo é acadêmico e que **quem está sendo avaliado é o protótipo, e não ele**, e colhe a assinatura.
2. **Autorização específica de gravação:** o participante autoriza separadamente a gravação de áudio e das mãos sobre a mesa. Se não autorizar, a sessão acontece só com anotações.
3. **Participação voluntária:** o participante pode deixar uma tarefa sem fazer, recusar uma pergunta ou encerrar a sessão a qualquer momento, sem nenhum prejuízo.
4. **Anonimato:** o participante é identificado apenas como **P-TAR09** nas anotações, na gravação e no relato.
5. **Nenhum documento real:** como a tarefa envolve fotografar documentos e informar o número do cartão, o participante usa **apenas a ficha fictícia** preparada pelo avaliador. O avaliador pede que ele não mostre nem fale o número do próprio cartão, CPF ou endereço.
6. **Sem julgamento sobre o benefício:** o avaliador deixa claro que falar sobre o limite de passagens não é uma verificação de uso indevido do Vale-Transporte.

---

## 6. E — Avaliar, Interpretar e Apresentar os Dados

Os dados da sessão serão analisados de forma **qualitativa**, com apoio de alguns números simples:

1. **Dados coletados:** para cada tarefa, conclusão (sem ajuda, com ajuda ou não concluída), tempo, número de erros e de pedidos de ajuda, e as falas do *think aloud*.
2. **Revisão da gravação:** o observador revisa o vídeo e marca os momentos de hesitação, toque em lugar errado, leitura em voz alta de algo mal entendido e comentários espontâneos.
3. **Confronto com o modelo:** cada dificuldade é ligada ao objetivo correspondente do [HTA e do CTT da TAR-09](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md), para saber se o problema está na tela ou no próprio fluxo proposto.
4. **Classificação dos problemas:** cada problema recebe um nível de severidade de 0 a 4 (Nielsen, 1994).
5. **Reprojeto rápido:** problemas simples, como um texto confuso, podem ser corrigidos no próprio papel durante a sessão ou no intervalo entre tarefas.
6. **Apresentação:** os resultados são organizados conforme o [Planejamento do Relato dos Resultados do Protótipo de Papel](tomas-planejamento-relato-prot-papel.md).

---

## 7. Planejamento do Teste Piloto

Antes da sessão definitiva, será feito um **teste piloto** no dia 30/10/2026, com um integrante da equipe no papel de participante:

* **O que será verificado:** se as tarefas estão claras quando lidas em voz alta; se todas as telas e peças necessárias existem e estão na ordem certa nos envelopes; se o "computador" consegue trocar as folhas com rapidez; se 15 minutos são suficientes para as três tarefas; e se a câmera enquadra bem a mesa e capta o áudio.
* **Ajustes:** telas faltando, peças difíceis de manusear e tarefas mal formuladas são corrigidas antes da sessão definitiva.
* **Uso dos dados:** os dados e o vídeo do piloto servem **apenas para calibrar** os materiais e o procedimento e **não entram** nos resultados da avaliação.

---

## 8. Localização das Referências no Livro

* **Obra:** BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
* **Localização:** **Capítulo 11 — Planejamento da Avaliação de IHC, Seção 11.8 (*O Framework DECIDE*), p. 264–265**; e **Capítulo 12 — Métodos de Avaliação de IHC, Seção 12.2.3 (*Prototipação em Papel*), p. 303–306**.

---

## 9. Declaração sobre o Uso de IA Generativa

Em cumprimento às normas do Plano de Ensino da disciplina, declara-se que o Claude (Anthropic) foi usado para auxiliar na estruturação do texto e na formatação das tabelas em Markdown. A definição dos objetivos, das telas do protótipo, das tarefas, dos papéis e da logística da sessão, e a revisão final, são de responsabilidade do integrante Tomás Rocho.

---

## 10. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11, p. 245–266; Capítulo 12, Seção 12.2.3, p. 303–306).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 466, de 12 de dezembro de 2012**. Aprova diretrizes e normas regulamentadoras de pesquisas envolvendo seres humanos. Brasília: Diário Oficial da União, 2013.
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais. Brasília: Diário Oficial da União, 2016.
* NIELSEN, Jakob. **Usability Engineering**. San Diego: Academic Press, 1994.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da interação homem-computador**. Porto Alegre: Bookman, 2005.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
* SNYDER, Carolyn. **Paper Prototyping: The Fast and Easy Way to Design and Refine User Interfaces**. San Francisco: Morgan Kaufmann, 2003.

---
**Autor:** [Tomás Rocho](https://github.com/TomasRocho)  
**Revisor:** [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa)
