# Cenário 2: Atraso na viagem matutina para a universidade por conflito de horários no aplicativo

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Elaboração detalhada do Cenário 2 (João Pedro Carvalho). | [Igor Dantas](https://github.com/IgorDARAUJO) | [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 27/09/2026 | 1.1 | Modularização em artefato próprio com integração às personas e visão geral. | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas](https://github.com/IgorDARAUJO) |

---

## 1. Introdução

Este cenário de problema acompanha João Pedro Carvalho em uma viagem matutina para a universidade, afetada pela divergência entre o horário informado pelo aplicativo e a passagem real do ônibus. A situação permite examinar os impactos de dados imprecisos sobre a tomada de decisão do passageiro e fundamenta requisitos relacionados a confiabilidade, atualização e transparência das informações.

## 2. Caracterização Geral

**Autor: Igor Dantas Araújo**

- **Persona:** [João Pedro Carvalho](../personas/joao-pedro-carvalho.md) (persona primária)
- **Tipo:** Cenário de problema — situação atual do usuário antes da intervenção do novo sistema
- **Tarefas da persona cobertas:** consultar horários de ônibus e acompanhar o deslocamento da linha em tempo real

**Resumo:** numa manhã de terça-feira, João Pedro planeja sua saída de casa com base no horário informado pelo app. No ponto, o ônibus não aparece no horário previsto e, ao tentar checar o rastreamento em tempo real, o app apresenta um erro que interrompe a previsão e indica que a viagem já teria "concluído". Só ao conversar com outro passageiro ele descobre que o ônibus passou adiantado, sem que o app tivesse atualizado essa divergência. Sem alternativa direta, ele espera mais de 35 minutos e chega à universidade com grande atraso, perdendo a primeira aula.

---

## 3. Ambiente ou Contexto

- **Quando e onde:** manhã de terça-feira, por volta das 06:30–08:00. Residência de João Pedro em Samambaia Norte e, em seguida, o ponto de ônibus do bairro.
- **Situação de deslocamento:** ele precisa chegar pontualmente à primeira aula de Engenharia, às 08:00, no Campus UnB Gama.
- **Dispositivo e conectividade:** smartphone Android, conexão de dados móveis (4G). O dia está ensolarado.
- **Recursos à mão:** aplicativo de mapas e transporte (com o qual planeja a viagem), o próprio ponto de ônibus e os demais passageiros presentes nele.
- **Situação do serviço nesta manhã (desconhecida por João Pedro no início):** o ônibus da linha desejada passa pela parada por volta das 06:40 — cerca de 10 minutos antes do horário cadastrado no app (06:50) —, e o aplicativo não reflete essa divergência em tempo real.

---

## 4. Atores

A Tabela 1 identifica os participantes do cenário e esclarece como suas características e papéis influenciam o desenvolvimento da situação descrita.

**Tabela 1** — Atores envolvidos no Cenário 2

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **João Pedro Carvalho** | Ator principal (usuário) | Homem, 19 anos, estudante de Engenharia, perfil tecnológico alto, usuário de Android. Planeja a saída de casa com base no horário informado pelo app e confia nessa previsão |
| **Passageiros da parada de ônibus** | Atores secundários (fonte de confirmação informal) | Aguardam no mesmo ponto; um deles já presenciou a passagem adiantada do ônibus e serve de fonte de informação quando o app falha |
| **Motorista do transporte coletivo** | Ator secundário | Conduz o veículo que passa fora do horário cadastrado no sistema |

*Fonte: Igor Dantas Araújo.*

**Elementos do ambiente com que o ator interage:** aplicativo de mapas e transporte (tela de horários e tela de rastreamento em tempo real), ponto de ônibus e os demais passageiros presentes.

---

## 5. Objetivos

- **Objetivo principal:** chegar pontualmente à primeira aula, às 08:00, no Campus UnB Gama.
- **Subobjetivos:**
  1. Descobrir o horário previsto de passagem do ônibus, para planejar a saída de casa.
  2. Sair de casa no momento certo, sem chegar cedo demais nem tarde demais ao ponto.
  3. Confirmar, em tempo real, se o ônibus está de fato a caminho quando o horário previsto passa sem ele aparecer.
- **Motivações:** economizar tempo, evitar a espera desnecessária no ponto de ônibus e não perder a primeira aula do dia.

---

## 6. Planejamento, Ações, Eventos e Avaliação

**Como ler cada passo:** Planejamento = o que João Pedro pensa em fazer (atividade mental); Ação = o que ele faz de forma observável; Evento = o que acontece em resposta (aplicativo, sistema, ambiente ou outras pessoas) — os marcados como **[oculto]** acontecem sem que ele saiba, mas afetam a história; Avaliação = como ele interpreta o que viu (atividade mental).

**Plano geral de João Pedro:** (1) consultar o app ainda em casa para saber o horário de passagem do ônibus; (2) calcular e decidir a hora de sair de casa; (3) ir ao ponto e embarcar dentro do horário previsto; (4) se o ônibus atrasar, checar o rastreamento em tempo real no app.

### Passo 1 — Consultar o horário do ônibus em casa (por volta das 06:30)

- **Planejamento:** *"Preciso saber a que horas o ônibus passa para não perder tempo à toa no ponto."* Sabe que a caminhada até a parada mais próxima leva exatamente 6 minutos e quer sair de casa no momento certo.
- **Ação:** pega o smartphone Android e acessa o aplicativo de mapas e transporte para consultar o horário da linha desejada.
- **Evento:** o aplicativo indica que a linha está prevista para passar pela parada às 06:50.
- **Avaliação:** *"Se o ônibus passa às 06:50 e a caminhada leva 6 minutos, posso terminar de me arrumar e sair às 06:42."* Decide terminar de arrumar o material acadêmico e sair de casa nesse horário, evitando ficar exposto no ponto perdendo tempo à toa.

### Passo 2 — Chegar ao ponto e o ônibus não aparecer

- **Planejamento:** chegar ao ponto pouco antes das 06:50 e embarcar assim que o ônibus chegar.
- **Ação:** sai de casa às 06:42 e chega ao ponto de ônibus às 06:48.
- **Evento:** o horário previsto (06:50) passa e o ônibus não aparece na rua.
- **Evento [oculto]:** o ônibus da linha já havia passado pela parada por volta das 06:40, cerca de 10 minutos antes do horário cadastrado no app — fato que João Pedro ainda não sabe neste momento.
- **Avaliação:** *"Já passou da hora e o ônibus não chegou. Preciso da minha primeira aula às 08:00, isso está me preocupando."*

### Passo 3 — Tentar checar o rastreamento em tempo real

- **Planejamento:** *"Vou abrir o app de novo para ver onde o ônibus está agora."*
- **Ação:** reabre o aplicativo no celular para checar o rastreamento em tempo real.
- **Evento:** ocorre um erro de conflito de dados na aplicação — o sistema para de exibir a previsão do veículo e passa a indicar, repentinamente, que a viagem já teria sido "concluída", sem dar qualquer explicação.
- **Avaliação:** *"Concluída? Isso não faz sentido, eu nem vi o ônibus passar. Será que já passou e eu perdi, ou será que ainda está atrasado?"* Fica sem saber se o ônibus está atrasado ou já passou adiantado.

### Passo 4 — Buscar confirmação com outro passageiro

- **Planejamento:** como o app não esclarece a situação, decide perguntar a alguém que também está esperando.
- **Ação:** busca confirmação conversando com outra pessoa que aguarda na parada.
- **Evento:** o passageiro comenta que um ônibus daquela linha passou rapidamente cerca de 10 minutos antes (às 06:40), fora do horário cadastrado.
- **Avaliação:** *"Então o ônibus passou adiantado e o app não atualizou isso."* João Pedro percebe que o veículo passou antes do previsto e que o aplicativo falhou em atualizar essa divergência em tempo real.

### Passo 5 — Esperar sem alternativa e chegar atrasado

- **Planejamento:** sem opção de outra linha direta naquele momento, não há o que fazer além de esperar o próximo veículo.
- **Ação:** permanece no ponto aguardando o ônibus seguinte.
- **Evento:** é forçado a esperar por mais de 35 minutos até que o veículo seguinte apareça.
- **Avaliação:** *"Perdi a primeira aula por causa de uma informação que devia ser simples."* Chega ao Campus da UnB Gama com grande atraso, perdendo a primeira aula do dia e sentindo-se bastante frustrado e desmotivado com o impacto do transporte em sua rotina de estudos.

---

## 7. Problemas Revelados pelo Cenário

A Tabela 2 relaciona os problemas evidenciados durante o cenário aos momentos em que ocorrem e aos requisitos já identificados para a persona.

**Tabela 2** — Problemas revelados pelo Cenário 2

| Problema revelado | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| Erro de conflito de dados: o app interrompe a exibição da previsão e indica, sem explicação, que a viagem já foi "concluída" | Passo 3 | Previsibilidade real dos horários; interface transparente e confiável |
| O ônibus passou cerca de 10 minutos antes do horário cadastrado, e o sistema não atualizou essa divergência em tempo real | Passos 2 a 4 | Localização dos ônibus em tempo real, já na tela inicial |
| Sem o app esclarecer a situação, João Pedro depende da confirmação informal de outro passageiro para entender o que aconteceu | Passo 4 | Linguagem simples e status claro sobre a situação real do veículo |
| Ausência de rota ou linha alternativa direta indicada pelo app quando a linha planejada falha | Passo 5 | Consulta de rotas alternativas em dias atípicos |
| O impacto da falha é alto: perda da primeira aula e queda de motivação, evidenciando o custo real de uma informação pouco confiável | Passo 5 | Garantir que o ônibus passe no horário informado pelo aplicativo |

*Fonte: Igor Dantas Araújo.*

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* ROSSON, Mary Beth; CARROLL, John M. **Usability Engineering: Scenario-Based Development of Human-Computer Interaction**. San Francisco: Morgan Kaufmann, 2002.
