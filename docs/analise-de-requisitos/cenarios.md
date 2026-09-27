# Cenários

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Criação do documento de organização dos perfis de usuário identificados no site **SEMOB-DF**. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |


---

## 1. Cenários

Conforme presente na imagem 1, um cenário é basicamente uma história sobre pessoas realizando uma
atividade (Rosson e Carroll, 2002). É uma narrativa, textual ou pictórica, concreta, rica em detalhes
contextuais, de uma situação de uso da aplicação, envolvendo usuários, processos e dados reais ou
potenciais. (Barbosa et al., 2021, Seção 8.3, p. 158)

### 1.1 Cenário 1 — Última viagem para casa: horário, aviso de mudança e desembarque à noite

**Autor: Gabrie Melo**

- **Persona:** Larissa Ferreira Lima (persona primária)
- **Tipo:** Cenário de problema — situação atual, com o site como ele é hoje
- **Tarefas da persona cobertas:** consultar linhas e horários; conferir a última viagem à noite; verificar avisos de mudanças; consultar direitos e regras

**Resumo:** numa quinta-feira à noite, ao sair da aula, Larissa precisa confirmar o horário do último ônibus direto para Ceilândia. Ela consulta o site da Semob, chega ao DF no Ponto e conclui que está tudo normal. Só que a saída do ônibus mudou de plataforma, e ela descobre isso por um grupo de WhatsApp, não pelo site. No caminho, ainda procura no FAQ a regra que permite descer fora da parada à noite.

#### 1. Ambiente ou contexto

- **Quando e onde:** quinta-feira, fim de setembro, 22h36, em um ponto de ônibus em frente à universidade, no Plano Piloto. É noite, o ponto está quase vazio e Larissa está cansada depois de um dia inteiro de trabalho e aula.
- **Situação de deslocamento:** ela precisa pegar um ônibus até a Rodoviária e, de lá, o último ônibus direto da noite para Ceilândia (saída programada às 23h10). Se perder, terá de fazer conexões e esperar em terminais à noite, chegando muito mais tarde. No dia seguinte, precisa sair de casa às 6h30.
- **Dispositivo e conectividade:** celular Android com 17% de bateria, sinal 4G instável e franquia de dados quase no fim do mês. Ela usa o aparelho em pé, com uma mão.
- **Recursos à mão:** cartão +Estudante (Passe Livre Estudantil), site da Semob, DF no Ponto e um grupo de WhatsApp de passageiros da linha.
- **Situação do serviço nesta noite (desconhecida por Larissa):** por causa de obras na Rodoviária, a saída do último direto foi transferida para outra plataforma. A mudança foi divulgada à imprensa durante o dia, mas não aparece nas telas que ela consulta.

#### 2. Atores

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Larissa Ferreira Lima** | Ator principal (usuária) | Mulher, 23 anos, volta sozinha à noite. Conhece bem o trajeto e chama a parada de "ponto". Usa o celular com uma mão. Confia que o site oficial avisa mudanças. Está cansada, com pouca bateria e pouco dado |
| **Passageiros do grupo de WhatsApp da linha** | Atores secundários (fonte informal) | Usuários frequentes da mesma linha, que compartilham avisos rápidos entre si. Um deles avisa da mudança de plataforma |
| **Motorista do último direto** | Ator secundário | Decide onde parar o ônibus e conhece a regra de desembarque à noite |

*Fonte: Gabriel Melo.*

**Elementos do ambiente com que os atores interagem:** site da Semob (página inicial e FAQ), DF no Ponto, navegador do celular, validador do ônibus e grupo de WhatsApp.

#### 3. Objetivos

- **Objetivo principal:** chegar em casa em segurança, pegando o último ônibus direto para Ceilândia.
- **Subobjetivos:**
  1. Confirmar o horário da última saída direta.
  2. Saber se houve alguma mudança no serviço nesta noite.
  3. Ter certeza de que pode pedir para descer fora da parada, perto de casa.
- **Motivações:** evitar esperar sozinha em terminal à noite, evitar gastar com corrida de aplicativo (fora do orçamento) e dormir o suficiente para o dia seguinte.

#### 4. Planejamento, ações, eventos e avaliação

**Como ler cada passo:** Planejamento = o que Larissa pensa em fazer (atividade mental); Ação = o que ela faz de forma observável; Evento = o que acontece em resposta (site, sistema, ambiente ou outras pessoas) — os marcados como **[oculto]** acontecem sem que ela saiba, mas afetam a história; Avaliação = como ela interpreta o que viu (atividade mental). Os eventos assinalados com **[1]** e **[2]** são baseados no FAQ e na página inicial da Semob, observados em 24/09/2026; os demais são hipotéticos.

**Plano geral de Larissa:** (1) consultar o site oficial da Semob para confirmar o horário do último direto; (2) conferir se há avisos de mudança; (3) seguir para a Rodoviária e embarcar; (4) confirmar a regra de desembarque à noite antes de pedir ao motorista.

##### Passo 1 — Abrir o site oficial (22h36)

- **Planejamento:** *"Preciso confirmar o horário do último direto. O site da Semob é o oficial, então começo por ele."* Como não sabe o endereço de cabeça, decide chegar pelo Google.
- **Ação:** abre o navegador, pesquisa "semob horário ônibus Ceilândia" e toca no resultado do site da Semob.
- **Evento:** com sinal fraco, a página inicial demora a carregar. Ao abrir o menu, ela vê Institucional, Governança, Legislação, Dados STPC, PDTU e Atendimento; nenhum item fala em "linhas" ou "horários" **[2]**.
- **Avaliação:** *"Tem um monte de coisa aqui que não é pra mim. Cadê os horários?"* Sente pressa, porque o ônibus até a Rodoviária deve passar em poucos minutos.

##### Passo 2 — Achar o caminho até "linhas e horários"

- **Planejamento:** em vez de explorar o menu, decide rolar a página em busca de algum atalho.
- **Ação:** rola a página com o polegar, chega ao bloco "Acesso Rápido" e toca em "DF no Ponto – Linhas e Horários".
- **Evento:** no caminho, passa por "Novidades nas Linhas", que informa "Ainda não há conteúdos a serem exibidos" **[2]**. O link abre outro site, com outra identidade visual, e ela perde o contexto da Semob.
- **Avaliação:** *"Sem novidades nas linhas, então não mudou nada."* Conclui que, se houvesse alteração, ela estaria ali. (Inferência que se mostrará equivocada.)

##### Passo 3 — Ver o último horário no DF no Ponto

- **Planejamento:** vai informar a Rodoviária como origem e Ceilândia como destino para ver a última saída direta.
- **Ação:** preenche origem e destino, escolhe a linha direta e confere o quadro de horários.
- **Evento:** o sistema responde devagar, mas mostra a última saída programada: 23h10. A consulta por origem e destino é uma das funções do DF no Ponto **[1]**.
- **Evento [oculto]:** a saída das 23h10 foi transferida para outra plataforma por causa das obras, mas o quadro de horários mostra apenas o horário programado, sem nenhum aviso.
- **Avaliação:** *"23h10. Chego na Rodoviária por volta das 23h, dá tempo, e é a plataforma de sempre."* Considera o assunto resolvido e guarda o celular (bateria em 14%).

##### Passo 4 — Embarcar e tentar confirmar o direito de descer fora da parada

- **Planejamento:** depois das 22h ela pode pedir para descer mais perto de casa. Quer confirmar a regra oficial antes de falar com o motorista, para não ficar em dúvida nem constrangida. Acha que a resposta está no FAQ.
- **Ação:** embarca às 22h42, passa o cartão +Estudante e senta perto da frente. Volta ao site da Semob, abre Atendimento > FAQ – SEMOB **[2]** e usa "Localizar na página" com o termo "fora do ponto".
- **Evento:** o FAQ é uma única página muito longa, que mistura transporte coletivo, táxi, aplicativos e inspeção veicular **[1]**. A busca não encontra nada: o texto fala em "parada", não em "ponto" **[1]**.
- **Avaliação:** *"Como assim não tem? Eu sei que existe. Será que mudou?"* Fica insegura, mas não desiste.

##### Passo 5 — Encontrar a resposta com outra palavra

- **Planejamento:** se o site não diz "ponto", talvez diga "desembarque". Tenta esse termo.
- **Ação:** busca "desembarque" na página e avança pelos resultados até chegar à pergunta "Como funciona o desembarque fora da parada de ônibus?" **[1]**.
- **Evento:** a palavra aparece em vários trechos, inclusive em outros assuntos, como o desembarque na Galeria dos Estados **[1]**. A resposta explica que, após as 22h, mulheres podem pedir para descer em qualquer local onde o ônibus possa parar, respeitado o itinerário; após as 23h, qualquer passageiro pode pedir **[1]**. O topo da página mostra que o FAQ foi atualizado em 02/09/26 **[1]**.
- **Avaliação:** *"Então eu posso, e é regra oficial. E foi atualizado este mês."* Sente alívio, mas percebe que gastou tempo e bateria (11%) para achar algo importante para a sua segurança.

##### Passo 6 — Chegar à Rodoviária e receber o aviso do grupo

- **Planejamento:** ir direto para a plataforma de sempre e esperar o último direto (23h10).
- **Ação:** desce na Rodoviária às 23h03 e caminha em direção à plataforma habitual. No caminho, o celular vibra e ela abre o grupo de WhatsApp dos passageiros da linha.
- **Evento:** um passageiro avisa que, por causa da obra, o último direto está saindo de outra plataforma. É o evento oculto que já estava em curso desde o Passo 3.
- **Avaliação:** *"Se eu tivesse ido pra plataforma de sempre, ia perder o último e ficar sozinha aqui. O site oficial não avisou; quem me salvou foi o grupo."* Decide que, da próxima vez, vai olhar o grupo antes do site.

##### Passo 7 — Pegar o último direto e descer perto de casa

- **Planejamento:** embarcar no direto e, perto de casa, pedir ao motorista para parar na esquina, como a regra permite.
- **Ação:** vai até a nova plataforma, embarca às 23h08 e passa o cartão +Estudante. Perto de Ceilândia, aproxima-se do motorista e pede para descer na esquina da rua de casa.
- **Evento:** o motorista confirma e para a duas quadras de casa. Larissa desce por volta de 23h55, com 7% de bateria.
- **Avaliação:** *"Deu certo, mas por pouco."* Conclui que a informação de que precisava existia, mas não estava onde ela procurou nem com as palavras que ela usa.

#### 5. Problemas revelados pelo cenário

| Problema revelado | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| Nenhum item do menu fala em "linhas" ou "horários"; o atalho para o DF no Ponto fica no meio da página inicial e leva a outro site **[2]** | Passos 1 e 2 | Um caminho claro para cada serviço |
| O bloco "Novidades nas Linhas" vazio foi lido como "nada mudou": falta explicar o estado vazio e mostrar quando a informação foi atualizada **[2]** | Passo 2 | Confiança na informação |
| A mudança de embarque chegou por um grupo de WhatsApp, e não por um canal oficial; o horário programado não refletia a situação do dia | Passos 3 e 6 | Avisos de mudanças antes de chegar à parada |
| O FAQ é único, longo e usa vocabulário diferente do dela ("parada" no lugar de "ponto"), misturando assuntos que não interessam ao passageiro **[1]** | Passos 4 e 5 | Linguagem simples; Informações de segurança e direitos |
| Uso com sinal fraco, pouca bateria e uma mão: cada tela extra custa tempo e dados | Passos 1 a 5 | Site leve e fácil de usar com uma mão |

*Fonte: Gabriel Melo.*

---

### 1.2 Cenário 2 — Atraso na viagem matutina para a universidade por conflito de horários no aplicativo

**Autor: Igor Dantas Araújo**

- **Persona:** João Pedro Carvalho (persona primária)
- **Tipo:** Cenário de problema — situação atual do usuário antes da intervenção do novo sistema
- **Tarefas da persona cobertas:** consultar horários de ônibus e acompanhar o deslocamento da linha em tempo real

**Resumo:** numa manhã de terça-feira, João Pedro planeja sua saída de casa com base no horário informado pelo app. No ponto, o ônibus não aparece no horário previsto e, ao tentar checar o rastreamento em tempo real, o app apresenta um erro que interrompe a previsão e indica que a viagem já teria "concluído". Só ao conversar com outro passageiro ele descobre que o ônibus passou adiantado, sem que o app tivesse atualizado essa divergência. Sem alternativa direta, ele espera mais de 35 minutos e chega à universidade com grande atraso, perdendo a primeira aula.

#### 1. Ambiente ou contexto

- **Quando e onde:** manhã de terça-feira, por volta das 06:30–08:00. Residência de João Pedro em Samambaia Norte e, em seguida, o ponto de ônibus do bairro.
- **Situação de deslocamento:** ele precisa chegar pontualmente à primeira aula de Engenharia, às 08:00, no Campus UnB Gama.
- **Dispositivo e conectividade:** smartphone Android, conexão de dados móveis (4G). O dia está ensolarado.
- **Recursos à mão:** aplicativo de mapas e transporte (com o qual planeja a viagem), o próprio ponto de ônibus e os demais passageiros presentes nele.
- **Situação do serviço nesta manhã (desconhecida por João Pedro no início):** o ônibus da linha desejada passa pela parada por volta das 06:40 — cerca de 10 minutos antes do horário cadastrado no app (06:50) —, e o aplicativo não reflete essa divergência em tempo real.

#### 2. Atores

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **João Pedro Carvalho** | Ator principal (usuário) | Homem, 19 anos, estudante de Engenharia, perfil tecnológico alto, usuário de Android. Planeja a saída de casa com base no horário informado pelo app e confia nessa previsão |
| **Passageiros da parada de ônibus** | Atores secundários (fonte de confirmação informal) | Aguardam no mesmo ponto; um deles já presenciou a passagem adiantada do ônibus e serve de fonte de informação quando o app falha |
| **Motorista do transporte coletivo** | Ator secundário | Conduz o veículo que passa fora do horário cadastrado no sistema |

*Fonte: Igor Dantas Araújo.*

**Elementos do ambiente com que o ator interage:** aplicativo de mapas e transporte (tela de horários e tela de rastreamento em tempo real), ponto de ônibus e os demais passageiros presentes.

#### 3. Objetivos

- **Objetivo principal:** chegar pontualmente à primeira aula, às 08:00, no Campus UnB Gama.
- **Subobjetivos:**
  1. Descobrir o horário previsto de passagem do ônibus, para planejar a saída de casa.
  2. Sair de casa no momento certo, sem chegar cedo demais nem tarde demais ao ponto.
  3. Confirmar, em tempo real, se o ônibus está de fato a caminho quando o horário previsto passa sem ele aparecer.
- **Motivações:** economizar tempo, evitar a espera desnecessária no ponto de ônibus e não perder a primeira aula do dia.

#### 4. Planejamento, ações, eventos e avaliação

**Como ler cada passo:** Planejamento = o que João Pedro pensa em fazer (atividade mental); Ação = o que ele faz de forma observável; Evento = o que acontece em resposta (aplicativo, sistema, ambiente ou outras pessoas) — os marcados como **[oculto]** acontecem sem que ele saiba, mas afetam a história; Avaliação = como ele interpreta o que viu (atividade mental).

**Plano geral de João Pedro:** (1) consultar o app ainda em casa para saber o horário de passagem do ônibus; (2) calcular e decidir a hora de sair de casa; (3) ir ao ponto e embarcar dentro do horário previsto; (4) se o ônibus atrasar, checar o rastreamento em tempo real no app.

##### Passo 1 — Consultar o horário do ônibus em casa (por volta das 06:30)

- **Planejamento:** *"Preciso saber a que horas o ônibus passa para não perder tempo à toa no ponto."* Sabe que a caminhada até a parada mais próxima leva exatamente 6 minutos e quer sair de casa no momento certo.
- **Ação:** pega o smartphone Android e acessa o aplicativo de mapas e transporte para consultar o horário da linha desejada.
- **Evento:** o aplicativo indica que a linha está prevista para passar pela parada às 06:50.
- **Avaliação:** *"Se o ônibus passa às 06:50 e a caminhada leva 6 minutos, posso terminar de me arrumar e sair às 06:42."* Decide terminar de arrumar o material acadêmico e sair de casa nesse horário, evitando ficar exposto no ponto perdendo tempo à toa.

##### Passo 2 — Chegar ao ponto e o ônibus não aparecer

- **Planejamento:** chegar ao ponto pouco antes das 06:50 e embarcar assim que o ônibus chegar.
- **Ação:** sai de casa às 06:42 e chega ao ponto de ônibus às 06:48.
- **Evento:** o horário previsto (06:50) passa e o ônibus não aparece na rua.
- **Evento [oculto]:** o ônibus da linha já havia passado pela parada por volta das 06:40, cerca de 10 minutos antes do horário cadastrado no app — fato que João Pedro ainda não sabe neste momento.
- **Avaliação:** *"Já passou da hora e o ônibus não chegou. Preciso da minha primeira aula às 08:00, isso está me preocupando."*

##### Passo 3 — Tentar checar o rastreamento em tempo real

- **Planejamento:** *"Vou abrir o app de novo para ver onde o ônibus está agora."*
- **Ação:** reabre o aplicativo no celular para checar o rastreamento em tempo real.
- **Evento:** ocorre um erro de conflito de dados na aplicação — o sistema para de exibir a previsão do veículo e passa a indicar, repentinamente, que a viagem já teria sido "concluída", sem dar qualquer explicação.
- **Avaliação:** *"Concluída? Isso não faz sentido, eu nem vi o ônibus passar. Será que já passou e eu perdi, ou será que ainda está atrasado?"* Fica sem saber se o ônibus está atrasado ou já passou adiantado.

##### Passo 4 — Buscar confirmação com outro passageiro

- **Planejamento:** como o app não esclarece a situação, decide perguntar a alguém que também está esperando.
- **Ação:** busca confirmação conversando com outra pessoa que aguarda na parada.
- **Evento:** o passageiro comenta que um ônibus daquela linha passou rapidamente cerca de 10 minutos antes (às 06:40), fora do horário cadastrado.
- **Avaliação:** *"Então o ônibus passou adiantado e o app não atualizou isso."* João Pedro percebe que o veículo passou antes do previsto e que o aplicativo falhou em atualizar essa divergência em tempo real.

##### Passo 5 — Esperar sem alternativa e chegar atrasado

- **Planejamento:** sem opção de outra linha direta naquele momento, não há o que fazer além de esperar o próximo veículo.
- **Ação:** permanece no ponto aguardando o ônibus seguinte.
- **Evento:** é forçado a esperar por mais de 35 minutos até que o veículo seguinte apareça.
- **Avaliação:** *"Perdi a primeira aula por causa de uma informação que devia ser simples."* Chega ao Campus da UnB Gama com grande atraso, perdendo a primeira aula do dia e sentindo-se bastante frustrado e desmotivado com o impacto do transporte em sua rotina de estudos.

#### 5. Problemas revelados pelo cenário

| Problema revelado | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| Erro de conflito de dados: o app interrompe a exibição da previsão e indica, sem explicação, que a viagem já foi "concluída" | Passo 3 | Previsibilidade real dos horários; interface transparente e confiável |
| O ônibus passou cerca de 10 minutos antes do horário cadastrado, e o sistema não atualizou essa divergência em tempo real | Passos 2 a 4 | Localização dos ônibus em tempo real, já na tela inicial |
| Sem o app esclarecer a situação, João Pedro depende da confirmação informal de outro passageiro para entender o que aconteceu | Passo 4 | Linguagem simples e status claro sobre a situação real do veículo |
| Ausência de rota ou linha alternativa direta indicada pelo app quando a linha planejada falha | Passo 5 | Consulta de rotas alternativas em dias atípicos |
| O impacto da falha é alto: perda da primeira aula e queda de motivação, evidenciando o custo real de uma informação pouco confiável | Passo 5 | Garantir que o ônibus passe no horário informado pelo aplicativo |

*Fonte: Igor Dantas Araújo.*

## 2. Referências Bibliográficas
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.

## 3. Fotos de Referência
![Imagem 1](../assets/prints_referencias/print-cenarios1.png)
*Imagem 1 - Barbosa et al., 2021, Seção 8.3, p. 158*
