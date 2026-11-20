## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 03/11/2026 | `1.0` | Criação do planejamento individual da avaliação do Protótipo de Alta Fidelidade (Figma) da TAR-09 (Pedido de aumento do limite diário do Vale-Transporte) via DECIDE. | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para estruturação do texto e formatação Markdown da página |
| 14/11/2026 | `1.1` | Troca do Figma por um protótipo navegável em HTML, CSS e JavaScript, publicado no GitHub Pages com o visual do portal da SEMOB-DF, e inclusão do painel do avaliador. | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) | Claude (Anthropic) - usado para gerar o código do protótipo e ajustar o texto |



---

# Planejamento da Avaliação do Protótipo de Alta Fidelidade (TAR-09)

Neste documento, apresenta-se o **Planejamento da Avaliação do Protótipo de Alta Fidelidade** referente à **[TAR-09 (Solicitar Aumento do Limite Diário de Uso do Vale-Transporte)](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md)**. O protótipo foi construído em **HTML, CSS e JavaScript**, no formato de tela de celular e com o visual do portal da SEMOB-DF, e é publicado no GitHub Pages junto com a Wiki ([protótipo navegável](../../../../prototipos/tar-09/index.html)). Ele representa o fluxo **"Meu Vale-Transporte foi recusado"** no site da SEMOB-DF: o passageiro descobre por que o cartão foi recusado, pede mais passagens por dia pelo celular, recebe um protocolo e acompanha o pedido.

Este é o terceiro ciclo de design e avaliação da TAR-09. O fluxo apareceu primeiro no [Storyboard 05](../../../nivel1/storyboards.md) (Nível 1) e depois foi representado em papel, conforme o [Planejamento da Avaliação do Protótipo de Papel](../../../nivel2/planejamentos-individuais/Tomas/tomas-planejamento-av-prototipo-papel.md) (Nível 2). Agora as telas ganham a aparência, os textos e a navegação que se espera do produto final, seguindo o [Guia de Estilo](../../../../analise-de-requisitos/guia-de-estilo/introducao.md) do Grupo 05.

A avaliação será feita com representantes da persona [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md). O planejamento segue o **Framework DECIDE** (Barbosa e Silva, 2010, pp. 312–314), em seis etapas: **D**eterminar objetivos, **E**xplorar perguntas, **C**hoose (Escolher) métodos, **I**dentificar questões práticas, **D**ecidir questões éticas e **E**valuate (Avaliar e interpretar os dados).

**Artefatos relacionados — fluxo da funcionalidade TAR-09 (Pedido de Aumento do Limite Diário do Vale-Transporte):**

* **Persona:** [Heitor Santos Júnior](../../../../analise-de-requisitos/personas/heitor-santos-junior.md)
* **Cenário:** [Cenário 9](../../../../analise-de-requisitos/cenarios/cenario-9-limite-vale-transporte.md)
* **Análise de tarefas:** [TAR-09](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md)
* **Storyboard:** [Storyboard 05](../../../nivel1/storyboards.md#35-storyboard-05-pedido-de-aumento-do-limite-diario-do-vale-transporte)
* **Nível 1: avaliação do storyboard e da análise de tarefas:** [Planejamento da avaliação](../../../nivel1/planejamentos-individuais/Tomas/tomas-planejamento-avaliacao.md) · [Planejamento do relato](../../../nivel1/planejamentos-individuais/Tomas/tomas-planejamento-relato-resultados-avaliacao.md) · Relato dos resultados (*não realizado*)
* **Nível 2: protótipo de papel (baixa fidelidade):** [Planejamento da avaliação](../../../nivel2/planejamentos-individuais/Tomas/tomas-planejamento-av-prototipo-papel.md) · [Planejamento do relato](../../../nivel2/planejamentos-individuais/Tomas/tomas-planejamento-relato-prot-papel.md) · [Relato dos resultados](../../../nivel2/relatos-individuais/tomas/relato-resultados-prot-papel.md)
* **Nível 3: protótipo de alta fidelidade:** Planejamento da avaliação (*esta página*) · [Planejamento do relato](tomas-planejamento-relato-prot-alta-fidel.md) · [Relato dos resultados](../../relatos-individuais/tomas/relato-resultados-prot-alta-fidel.md)
* **Telas do protótipo de papel:** [telas no planejamento da avaliação](../../../nivel2/planejamentos-individuais/Tomas/tomas-planejamento-av-prototipo-papel.md)
* **Protótipo de alta fidelidade navegável:** [acessar o protótipo](../../../../prototipos/tar-09/index.html)


---

## 1. Fundamentação: por que um protótipo de alta fidelidade agora

Barbosa e Silva (2010, pp. 249–251) distinguem protótipos de baixa fidelidade, que representam a interface sem detalhamento gráfico, de protótipos de alta fidelidade, que apresentam com maior completude tamanhos, posições, cores, fontes e outros elementos da interface. A funcionalidade implementada pode variar independentemente da fidelidade visual.

A Tabela 1 resume o que o capítulo diz sobre esse tipo de protótipo e como isso afeta este planejamento.

<div align="center">
<p><strong>Tabela 1</strong>: Aplicação das características de protótipos descritas no livro-base</p>
</div>

| Característica fundamentada no livro | Página | Consequência para a avaliação da TAR-09 |
| :--- | :---: | :--- |
| A alta fidelidade representa com maior completude o aspecto visual da interface. | 249–251 | A avaliação pode examinar a compreensão dos textos, a hierarquia visual e a orientação entre as telas. |
| A fidelidade visual e a funcionalidade do protótipo são dimensões distintas. | 249–251 | A câmera, o WhatsApp e a análise da SEMOB serão simulados e registrados como limitações, embora o visual esteja detalhado. |
| O protótipo pode representar apenas parte do sistema. | 249–251 | O recorte avaliado é somente o fluxo da TAR-09; os demais serviços não fazem parte das conclusões. |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026), a partir de Barbosa e Silva (2010, pp. 249–251).</em></p>
</div>

---

## 2. D: Determinar os Objetivos da Avaliação

A avaliação é **formativa**: o objetivo é encontrar problemas de interação no protótipo antes da versão final, e não comparar estatisticamente interfaces. Barbosa et al. (2021) indicam que os objetivos e as perguntas da avaliação guiam a escolha do método.

### 2.1 Objetivo geral

Verificar se trabalhadores que usam o Vale-Transporte e pegam vários ônibus por dia conseguem, sozinhos e pelo celular, entender por que o cartão foi recusado, pedir o aumento do limite diário e acompanhar o pedido no protótipo navegável.

### 2.2 Objetivos específicos

1. **Encontrar o serviço:** verificar se o atalho "Meu Vale-Transporte foi recusado" é reconhecido na página inicial, entre os outros serviços.
2. **Entender a recusa:** verificar se a tela "Você usou 8 de 8 passagens hoje" deixa claro que o problema é o limite diário, e não falta de saldo, e que as integrações também contam.
3. **Avaliar o pedido em três passos:** observar se o participante descreve a rotina, envia as fotos dos documentos e a declaração do RH sem ajuda, e se sabe em que passo está.
4. **Avaliar a prevenção e a recuperação de erros:** verificar se as mensagens de foto ilegível e de documento faltando explicam o problema e permitem corrigir sem perder o que já foi preenchido, como pede o [Guia de Estilo — Elementos de ação](../../../../analise-de-requisitos/guia-de-estilo/elementos-de-acao.md) (seções 2.3 e 2.4).
5. **Avaliar o *feedback* final e o acompanhamento:** verificar se o protocolo, a consulta do andamento e o aviso pelo WhatsApp dão segurança de que o pedido foi recebido.
6. **Cobrir o que o protótipo de papel não verificou:** no Nível 2, o participante concluiu as três tarefas sem ajuda e nenhum problema foi encontrado, mas ficaram as pendências PE-01 a PE-04 do [Relato dos Resultados do Protótipo de Papel](../../../nivel2/relatos-individuais/tomas/relato-resultados-prot-papel.md) (tempo das tarefas, estados de erro não usados, falta de piloto e um único participante).

---

## 3. E: Explorar as Perguntas a Serem Respondidas

As perguntas abaixo orientam a observação e a entrevista pós-teste. Elas mantêm a numeração das perguntas do protótipo de papel sempre que o assunto é o mesmo, para que os resultados dos dois níveis possam ser comparados.

<div align="center">
<p><strong>Tabela 2</strong>: Perguntas da Avaliação do Protótipo de Alta Fidelidade</p>
</div>

| ID | Foco | Pergunta da Avaliação | Critério de Aceitação | Dado a Registrar |
| :---: | :--- | :--- | :--- | :--- |
| **Q01** | **Encontrar o serviço** | O participante encontra o atalho "Meu Vale-Transporte foi recusado" na página inicial? | Toca no atalho certo sem ajuda e sem entrar antes em outro serviço. | Primeiro toque, desvios, tempo até o atalho. |
| **Q02** | **Entender a recusa** | Depois de informar o cartão, o participante entende por que ele foi recusado? | Explica com as próprias palavras que passou do limite de passagens do dia, e não que está sem saldo. | Fala durante o *think aloud* e resposta na entrevista. |
| **Q03** | **Integrações** | O participante entende que cada integração também conta como uma passagem? | Ao ser perguntado, diz que cada ônibus conta, mesmo com integração. | Resposta na entrevista. |
| **Q04** | **Descrever a rotina e enviar documentos** | O participante preenche a rotina e envia os documentos e a declaração do RH sem ajuda? | Conclui os passos 1 a 3 sem perguntar o que deve colocar e sem confundir os documentos. | Conclusão, hesitações, pedidos de ajuda. |
| **Q05** | **Recuperação de erro** | Quando a foto é recusada por estar ilegível, o participante entende o problema e tira outra? | Lê a mensagem e toca em "Tirar outra foto" sem ajuda. | Reação à mensagem, tempo até corrigir. |
| **Q06** | **Prevenção de erro** | Se tentar enviar sem a declaração do RH, o participante entende o aviso e volta ao passo certo? | Volta ao passo 3 pelo próprio aviso, sem perder a rotina e as fotos já enviadas. | Caminho seguido, dados preservados. |
| **Q07** | **Encerramento e acompanhamento** | Depois de enviar, o participante sabe que o pedido foi recebido, o que acontece a seguir e como acompanhar? | Cita o protocolo, o aviso pelo WhatsApp e mostra onde consultaria o andamento. | Fala na tela de confirmação e na tarefa TAR-09.3. |
| **Q08** | **Orientação no fluxo** | Em qualquer tela do pedido, o participante sabe onde está, o que a tela mostra e para onde pode ir? | Diz em que passo está ("passo 2 de 3") e como voltar ou desistir. | Resposta quando o avaliador pergunta "Onde você está agora?". |
| **Q09** | **Opinião sobre a experiência** | O que o participante achou claro, confuso ou faltando, e como compara com ir a um posto de atendimento? | Opinião aberta; não há resposta certa. | Respostas da entrevista pós-teste. |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

---

## 4. C: Choose (Escolher) os Métodos de Avaliação

O método escolhido é o **teste de usabilidade com observação de uso**, seguido de entrevista curta. Barbosa et al. (2021) descrevem esse método como a execução de tarefas por representantes dos usuários, com o registro do desempenho, das opiniões e dos sentimentos que surgem da experiência.

* **Justificativa:** com o protótipo totalmente interativo, o participante conduz o uso sozinho (Barbosa et al., 2021). Assim é possível observar onde ele toca, quanto tempo leva, onde erra e como se recupera, o que responde às perguntas Q01 a Q08.
* **Técnica complementar:** o participante será convidado a **pensar em voz alta** (*think aloud*), dizendo o que procura e o que entendeu de cada tela.
* **Entrevista pós-teste:** ao final, o avaliador faz Q02, Q03, Q07 e Q09 de forma aberta, para confirmar o que foi observado.
* **Uso dos números:** tempo, erros e pedidos de ajuda servem para **explicar** onde estão os problemas. Não há metas numéricas e não se pretende tirar conclusões estatísticas.

### 4.1 O protótipo avaliado

O [protótipo navegável](../../../../prototipos/tar-09/index.html) fica em `docs/prototipos/tar-09/` (`index.html`, `styles.css` e `app.js`), no mesmo padrão do protótipo da TAR-03. Ele segue o visual do portal da SEMOB-DF: barra do GDF cinza-escura, título da Secretaria em letras finas e maiúsculas, faixa com a busca, cartões brancos com botão cinza-escuro e trilha de navegação com ">" verde. Os campos aceitam digitação, os dados ficam guardados ao voltar um passo e o botão "voltar" do celular funciona. As telas são as mesmas do protótipo de papel. Como o [Relato dos Resultados do Protótipo de Papel](../../../nivel2/relatos-individuais/tomas/relato-resultados-prot-papel.md) não encontrou problemas, os textos e a ordem das telas foram mantidos:

<div align="center">
<p><strong>Tabela 3</strong>: Telas e Estados do Protótipo Navegável</p>
</div>

| ID | Tela ou Estado | Conteúdo Principal | Regra do Guia de Estilo ou Princípio Aplicado |
| :---: | :--- | :--- | :--- |
| **T1** | Página inicial da SEMOB-DF | Seis cartões de serviço do mesmo tamanho, entre eles **"Meu Vale-Transporte foi recusado"**. | Cartão de serviço com rótulo textual (Guia, Elementos de ação, 4.1 e 4.2). |
| **T2** | Informar o cartão | Campo "Número do cartão" com teclado numérico e botão **"Continuar"**. | Rótulo que expressa o efeito da ação. |
| **T3** | Explicação da recusa | "Você usou 8 de 8 passagens hoje", aviso "As integrações também contam" e os botões **"Pedir mais passagens por dia"** e "Prefiro entregar no posto". | *Feedback* informativo (Shneiderman). |
| **T4–T6** | Pedido em três passos | Indicador "Passo 1 de 3", "2 de 3" e "3 de 3": rotina, fotos dos documentos e declaração do RH (com "Baixar modelo para o RH"). Botão **"Voltar"** em todos os passos. | Onde estou? (Quadro 8.7); reversão fácil; preservação dos dados (Guia, 2.3). |
| **E1** | Erro de foto ilegível | "Não conseguimos ler o documento. Tire outra foto com mais luz." e botão **"Tirar outra foto"**. | Tratamento de erros (Guia, 2.4); tela de erro e recuperação (Guia, Vocabulário 3.8). |
| **E2** | Documento faltando | "Falta a declaração do RH" com botão que leva direto ao passo 3. | Prevenção de erros (Shneiderman). |
| **T7** | Revisão do pedido | Resumo da rotina e dos documentos, com botão **"Enviar pedido"**. | Diálogo que encerra a ação. |
| **T8** | Confirmação | "Pedido enviado!", protocolo **2026-0451**, prazo e "Vamos te avisar pelo WhatsApp". | *Feedback* final e protocolo (Guia, Vocabulário 3.7). |
| **T9** | Acompanhar pedido | Campo de protocolo e situação "Em análise — prazo de até 5 dias úteis". | Visibilidade do estado. |
| **N1** | Notificação simulada | Tela que imita uma mensagem do WhatsApp: "SEMOB: seu novo limite diário foi aprovado e já está valendo". | Simulação declarada (concessão do protótipo). |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

* **Simulações:** tocar no botão da câmera mostra uma prévia de foto pronta (na foto do comprovante, mostra de propósito o erro E1). Nenhuma câmera real é aberta e nenhum documento real é fotografado.
* **Dados fictícios:** o número do cartão, o protocolo e os documentos são fictícios e já aparecem preenchidos quando o participante toca no campo.

### 4.2 Roteiro de tarefas

As tarefas são as mesmas do protótipo de papel, para permitir a comparação. São lidas em voz alta, uma de cada vez, a partir do [Cenário 9](../../../../analise-de-requisitos/cenarios/cenario-9-limite-vale-transporte.md): *"Você trabalha com manutenção e passou o dia indo de prédio em prédio de ônibus. Na volta para casa, o cartão do Vale-Transporte não passou na catraca. Use o site da SEMOB no celular para resolver."*

<div align="center">
<p><strong>Tabela 4</strong>: Tarefas do Teste de Usabilidade</p>
</div>

| ID Tarefa | Enunciado lido ao participante | Critério de Conclusão | Telas | Perguntas |
| :---: | :--- | :--- | :--- | :--- |
| **TAR-09.1** | "Descubra por que o seu cartão foi recusado." | Chega à T3 e explica a recusa como limite do dia. | T1, T2, T3 | Q01, Q02, Q03 |
| **TAR-09.2** | "Peça para poder usar mais passagens por dia. Os documentos que você precisa estão no celular." | Chega à T8 com o protocolo na tela. | T4–T8, E1, E2 | Q04, Q05, Q06, Q08 |
| **TAR-09.3** | "Passaram alguns dias. Veja se o seu pedido foi aprovado." | Mostra a situação do pedido na T9 ou lê o aviso N1. | T9, N1 | Q07 |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026).</em></p>
</div>

O avaliador não explica a interface nem dá dicas. Quando o participante perguntar algo, a resposta é "O que você acha que acontece se tocar aí?". Se ele ficar parado por mais de 2 minutos numa tarefa ou pedir para parar, a tarefa é encerrada e registrada como **não concluída**.

---

## 5. I: Identificar e Administrar as Questões Práticas

### 5.1 Participantes

* **Perfil:** trabalhadores com carteira assinada que usam o **Vale-Transporte** e pegam vários ônibus no mesmo dia por causa do trabalho (técnico de manutenção, prestador de serviço, entregador, cuidador), que usam o celular no dia a dia (WhatsApp, banco), como a persona Heitor.
* **Quantidade:** **3 participantes**, identificados como P01, P02 e P03. Barbosa et al. (2021) apresentam cinco participantes como referência de custo-benefício. A equipe planeja três por causa do prazo da Entrega 7 (04/11 a 15/11) e da dificuldade de encontrar pessoas com esse perfil fora do horário de trabalho. Essa diferença será informada no relato como limitação.
* **Restrição:** nenhum participante pode ter participado da avaliação do storyboard ou do protótipo de papel da TAR-09, para que ninguém já saiba como o fluxo funciona.
* **Recrutamento:** rede de contatos da equipe (familiares, vizinhos, colegas de trabalho de conhecidos), sob responsabilidade de Tomás Rocho.

### 5.2 Papéis da equipe na sessão

* **Condutor (Tomás Rocho):** recebe o participante, lê o TCLE, lê as tarefas, faz a entrevista pós-teste e não interfere durante as tarefas.
* **Observador (Rodrigo Carvalho):** controla a gravação, cronometra cada tarefa e preenche a ficha de observação com toques errados, hesitações, pedidos de ajuda e falas do participante.

### 5.3 Infraestrutura e materiais

* **Dispositivo:** celular do condutor com o navegador aberto no link do protótipo, bateria carregada e carregador por perto.
* **Painel do avaliador:** o protótipo é aberto com `?avaliador=1` no fim do endereço. No celular, o painel fica recolhido num botão pequeno no canto da tela, e o condutor toca em "Iniciar" antes de entregar o celular. O painel cronometra cada tarefa, para o tempo sozinho quando o critério de conclusão é atingido, conta os toques em áreas sem ação e os desvios, e simula a passagem dos dias (aviso N1). No fim, "Copiar registro" gera uma tabela para o relato. Sem o `?avaliador=1`, o painel não aparece. O protótipo não mostra dicas quando o participante toca no lugar errado.
* **Contingência:** uma cópia do protótipo aberta no *notebook* (os arquivos também funcionam abertos localmente, sem internet) e uma conexão de dados móveis, caso o Wi-Fi do local falhe.
* **Gravação:** gravação da tela do celular com áudio. O rosto do participante não é filmado.
* **Materiais impressos:** TCLE, folha com o cenário e as tarefas, ficha de observação e roteiro da entrevista.
* **Ficha de observação:** uma linha por tarefa, com início e fim, conclusão (sem ajuda, com ajuda, não concluída), erros, retornos, pedidos de ajuda, falas marcantes e minuto da gravação.
* **Local:** sala silenciosa na FCTE/UnB ou local de preferência do participante, para evitar deslocamento.

### 5.4 Cronograma

<div align="center">
<p><strong>Tabela 5</strong>: Cronograma da Avaliação do Protótipo de Alta Fidelidade</p>
</div>

| Etapa | Data | Responsável |
| :--- | :--- | :--- |
| Protótipo navegável pronto (HTML, CSS e JavaScript) | até 07/11/2026 | Tomás Rocho |
| Teste piloto | 08/11/2026 (domingo), 18:00 | Tomás Rocho e Rodrigo Carvalho |
| Ajustes após o piloto | 09/11/2026 | Tomás Rocho |
| Sessão P01 | 10/11/2026 (terça-feira), 19:00 | Tomás Rocho e Rodrigo Carvalho |
| Sessão P02 | 12/11/2026 (quinta-feira), 19:00 | Tomás Rocho e Rodrigo Carvalho |
| Sessão P03 | 14/11/2026 (sábado), 10:00 | Tomás Rocho e Rodrigo Carvalho |
| Relato dos resultados | até 15/11/2026 | Tomás Rocho |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026). Os horários fora do horário comercial consideram que o perfil dos participantes trabalha durante o dia.</em></p>
</div>

### 5.5 Duração da sessão

<div align="center">
<p><strong>Tabela 6</strong>: Etapas e Tempo Previsto de Cada Sessão</p>
</div>

| Etapa | Tempo |
| :--- | :---: |
| Recepção, explicação e TCLE | 5 min |
| Perguntas rápidas sobre o uso do Vale-Transporte e do celular | 3 min |
| Tarefas TAR-09.1, TAR-09.2 e TAR-09.3 | 15 min |
| Entrevista pós-teste e encerramento | 7 min |
| **Total previsto** | **30 min** |

<div align="center">
<p><em>Fonte: Elaborado por Tomás Rocho (2026). O tempo será ajustado depois do teste piloto.</em></p>
</div>

**Custo estimado:** R\$ 0,00 (GitHub Pages gratuito, celular e *notebook* próprios, impressões feitas na universidade).

### 5.6 Teste piloto

Antes das sessões, será feito um **teste piloto completo** no dia 08/11/2026, com um integrante da equipe que **não participou da construção do fluxo da TAR-09** no papel de participante. Barbosa et al. (2021) recomendam o piloto para conferir o material e o procedimento.

* **O que será verificado:** se todos os toques levam à tela certa e nenhum caminho fica sem saída (o "único *bug*" de Rettig); se os estados E1 e E2 aparecem quando devem; se as tarefas ficam claras lidas em voz alta; se 15 minutos bastam para as tarefas; se a gravação da tela e o áudio funcionam; e se as perguntas da ficha respondem Q01 a Q09.
* **Ajustes:** botões que levam à tela errada, textos confusos nas tarefas e problemas na gravação são corrigidos no dia 09/11.
* **Uso dos dados:** os dados do piloto servem **apenas para ajustar** o protótipo e o procedimento e **não entram** nos resultados.

---

## 6. D: Decidir como Lidar com as Questões Éticas

A sessão segue as Resoluções nº 466/2012 e nº 510/2016 do Conselho Nacional de Saúde (CNS) e as orientações de Barbosa et al. (2021):

1. **Consentimento informado:** antes de começar, o condutor lê com o participante o [Termo de Consentimento Livre e Esclarecido (TCLE)](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf), explica que o objetivo é acadêmico, quanto tempo dura e o que será registrado, e colhe a assinatura.
2. **Quem é avaliado é o protótipo:** o condutor explica que qualquer dificuldade mostra um problema da tela, e não do participante.
3. **Autorização específica de gravação:** o participante autoriza à parte a gravação da tela e do áudio. Se não autorizar, a sessão acontece só com anotações.
4. **Participação voluntária:** o participante pode pular uma tarefa, recusar uma pergunta, pedir uma pausa ou encerrar a sessão a qualquer momento, sem nenhum prejuízo.
5. **Anonimato:** o participante é identificado apenas como **P01**, **P02** ou **P03** na ficha, nos arquivos e no relato. A lista que liga o código ao nome fica só com o condutor e é apagada depois da entrega do relato.
6. **Nenhum dado real:** o protótipo usa número de cartão, protocolo e documentos fictícios. O condutor pede que o participante não fale o número do próprio cartão, CPF, endereço ou empregador.
7. **Expectativas:** o condutor explica que o protótipo **não envia pedido nenhum** à SEMOB-DF e que o serviço ainda não existe, para que o participante não saia achando que já pode usá-lo (Barbosa et al., 2021).
8. **Sem julgamento sobre o benefício:** falar sobre o limite de passagens não é uma verificação de uso indevido do Vale-Transporte.
9. **Guarda das gravações:** os vídeos ficam em pasta privada da equipe e são apagados ao fim da disciplina.

---

## 7. E: Avaliar, Interpretar e Apresentar os Dados

A análise segue as etapas de interpretação e consolidação de Barbosa et al. (2021):

1. **Logo após cada sessão:** condutor e observador comparam as anotações e completam a ficha do participante.
2. **Interpretação por participante:** o observador revisa a gravação e marca hesitações, toques errados, retornos, pedidos de ajuda e falas. Com isso, responde Q01 a Q09 para aquele participante.
3. **Consolidação entre participantes:** os problemas parecidos dos três participantes são juntados, contando em quantos participantes cada um apareceu. As perguntas que ficaram sem resposta são indicadas.
4. **Separação entre fato e opinião:** cada problema é descrito em três partes: **o que foi observado**, **a possível causa na tela** e **a recomendação**.
5. **Severidade:** cada problema recebe um nível de 0 a 4 (Barbosa et al., 2021), e a prioridade de correção considera a severidade, a recorrência e o custo de corrigir.
6. **Comparação com o Nível 2:** como o protótipo de papel não teve problemas, verifica-se se o fluxo continua sem problemas na versão interativa e se as pendências PE-01 a PE-04 foram cobertas.
7. **Limites das conclusões:** o relato deixa claro que os resultados valem para este protótipo, estas tarefas e estes três participantes, e indica onde as simulações (câmera, WhatsApp) podem ter influenciado o comportamento.
8. **Apresentação:** os resultados são organizados conforme o [Planejamento do Relato dos Resultados do Protótipo de Alta Fidelidade](tomas-planejamento-relato-prot-alta-fidel.md).

---

## 8. Evidências do Livro de Barbosa et al. (2021)

As figuras abaixo mostram os trechos grifados do livro de Barbosa et al. (2021) usados neste planejamento. Os trechos do Capítulo 8 de Preece, Rogers e Sharp (2002 apud BARBOSA et al., 2021) estão indicados com a página na Tabela 1 e na seção 9.

<div align="center" id="figura-1">
<p><strong>Figura 1</strong>: As seis atividades do framework DECIDE (p. 264).</p>
<img src="../../../../../assets/prints_referencias/verificacao-v2/livro-decide.png" alt="11.8 Framework DECIDE (BARBOSA et al., 2021, p. 264)" width="760">
<p><em>Fonte: BARBOSA et al. (2021, p. 264).</em></p>
</div>

<div align="center" id="figura-2">
<p><strong>Figura 2</strong>: Definição do teste de usabilidade (pp. 288–289).</p>
<img src="../../../../../assets/prints_referencias/verificacao-v2/livro-teste-usabilidade.png" alt="12.2.1 Teste de usabilidade: objetivo, atividades e medidas por tarefa (BARBOSA et al., 2021, pp. 288–289)" width="760">
<p><em>Fonte: BARBOSA et al. (2021, pp. 288–289).</em></p>
</div>

<div align="center" id="figura-3">
<p><strong>Figura 3</strong>: Perfil e quantidade de participantes (p. 258).</p>
<img src="../../../../../assets/prints_referencias/verificacao-v2/livro-escopo-participantes.png" alt="11.7.2 Escopo da avaliação, perfil e número de participantes (BARBOSA et al., 2021, p. 258)" width="760">
<p><em>Fonte: BARBOSA et al. (2021, p. 258).</em></p>
</div>

<div align="center" id="figura-4">
<p><strong>Figura 4</strong>: Finalidade do teste piloto e descarte dos seus dados (p. 260).</p>
<img src="../../../../../assets/prints_referencias/verificacao-v2/livro-teste-piloto.png" alt="11.7.2 Teste-piloto: objetivo e descarte dos dados (BARBOSA et al., 2021, p. 260)" width="760">
<p><em>Fonte: BARBOSA et al. (2021, p. 260).</em></p>
</div>

<div align="center" id="figura-5">
<p><strong>Figura 5</strong>: Consentimento, conforto e direito de interromper a participação (pp. 128–129).</p>
<img src="../../../../../assets/prints_referencias/verificacao-v2/livro-etica-desistencia-vies.png" alt="Direito de desistir do estudo e dados livres de viés (BARBOSA et al., 2021, pp. 128–129)" width="760">
<p><em>Fonte: BARBOSA et al. (2021, pp. 128–129).</em></p>
</div>

---

## 9. Localização das Referências no Livro

* **BARBOSA, S. D. J. et al. *Interação Humano-Computador e Experiência do Usuário* (2021):** Seção 7.4, pp. 126–128 (ética); Seções 11.7 e 11.8, pp. 257–265 (preparação, interpretação, relato e DECIDE); Seção 12.2.1, pp. 288–289 (teste de usabilidade).


## 10. Telas do Protótipo Avaliado

As Figuras 6 a 15 mostram as telas do protótipo de alta fidelidade da [TAR-09](../../../../analise-de-requisitos/analise-de-tarefas/tar-09-limite-vale-transporte.md), também apresentadas no [relato dos resultados da avaliação](../../../nivel3/relatos-individuais/tomas/relato-resultados-prot-alta-fidel.md).

* **Protótipo navegável:** [Acessar o protótipo da TAR-09](../../../../prototipos/tar-09/index.html)

<div id="figura-6" align="center" markdown="1">
<p><strong>Figura 6</strong>: Página inicial com o Acesso Rápido e o botão "Meu Vale-Transporte foi recusado"</p>

![Página inicial com o Acesso Rápido e o botão 'Meu Vale-Transporte foi recusado'](../../../../assets/images/prototipo-tar09/tomas-alta-01.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-7" align="center" markdown="1">
<p><strong>Figura 7</strong>: Consulta do cartão pelo número ("Meu Vale-Transporte foi recusado")</p>

![Consulta do cartão pelo número ('Meu Vale-Transporte foi recusado')](../../../../assets/images/prototipo-tar09/tomas-alta-02.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-8" align="center" markdown="1">
<p><strong>Figura 8</strong>: Motivo da recusa: limite de 8 passagens por dia</p>

![Motivo da recusa: limite de 8 passagens por dia](../../../../assets/images/prototipo-tar09/tomas-alta-03.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-9" align="center" markdown="1">
<p><strong>Figura 9</strong>: Entregar no posto: locais de atendimento e documentos</p>

![Entregar no posto: locais de atendimento e documentos](../../../../assets/images/prototipo-tar09/tomas-alta-04.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-10" align="center" markdown="1">
<p><strong>Figura 10</strong>: Pedir mais passagens — Passo 1 de 3: Sua rotina</p>

![Pedir mais passagens — Passo 1 de 3: Sua rotina](../../../../assets/images/prototipo-tar09/tomas-alta-05.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-11" align="center" markdown="1">
<p><strong>Figura 11</strong>: Pedir mais passagens — Passo 2 de 3: Fotos dos documentos</p>

![Pedir mais passagens — Passo 2 de 3: Fotos dos documentos](../../../../assets/images/prototipo-tar09/tomas-alta-06.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-12" align="center" markdown="1">
<p><strong>Figura 12</strong>: Pedir mais passagens — Passo 3 de 3: Declaração do RH</p>

![Pedir mais passagens — Passo 3 de 3: Declaração do RH](../../../../assets/images/prototipo-tar09/tomas-alta-07.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-13" align="center" markdown="1">
<p><strong>Figura 13</strong>: Confira seu pedido</p>

![Confira seu pedido](../../../../assets/images/prototipo-tar09/tomas-alta-08.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-14" align="center" markdown="1">
<p><strong>Figura 14</strong>: Pedido enviado, com o número do protocolo</p>

![Pedido enviado, com o número do protocolo](../../../../assets/images/prototipo-tar09/tomas-alta-09.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

<div id="figura-15" align="center" markdown="1">
<p><strong>Figura 15</strong>: Acompanhar pedido</p>

![Acompanhar pedido](../../../../assets/images/prototipo-tar09/tomas-alta-10.png){ width="300" }

<p><em>Fonte: Elaborado por Tomás Rocho (2026). Captura de tela do protótipo navegável.</em></p>
</div>

---
---

## 11. Fotos de Referência
As Figuras 16 a 19 mostram os trechos que fundamentam este artefato, recortados e grifados em amarelo diretamente do livro da disciplina (BARBOSA et al., 2021).

<div id="figura-16" align="center">
<p><strong>Figura 16</strong>: 11.8 Framework DECIDE</p>
</div>

![Figura 16: 11.8 Framework DECIDE](../../../../assets/prints_referencias/verificacao-v2/livro-decide.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 264).</em></p>
</div>

<div id="figura-17" align="center">
<p><strong>Figura 17</strong>: Representação de interface em alta fidelidade</p>
</div>

![Figura 17: Representação de interface em alta fidelidade](../../../../assets/prints_referencias/verificacao-v2/livro-alta-fidelidade.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 210).</em></p>
</div>

<div id="figura-18" align="center">
<p><strong>Figura 18</strong>: 12.2.1 Teste de usabilidade: objetivo, atividades e medidas por tarefa</p>
</div>

![Figura 18: 12.2.1 Teste de usabilidade: objetivo, atividades e medidas por tarefa](../../../../assets/prints_referencias/verificacao-v2/livro-teste-usabilidade.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, pp. 288–289).</em></p>
</div>

<div id="figura-19" align="center">
<p><strong>Figura 19</strong>: 11.7.2 Escopo da avaliação, perfil e número de participantes</p>
</div>

![Figura 19: 11.7.2 Escopo da avaliação, perfil e número de participantes](../../../../assets/prints_referencias/verificacao-v2/livro-escopo-participantes.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 258).</em></p>
</div>

---

## 12. Referências Bibliográficas
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Brasília: Universidade de Brasília, FCTE/UnB, 2026.
