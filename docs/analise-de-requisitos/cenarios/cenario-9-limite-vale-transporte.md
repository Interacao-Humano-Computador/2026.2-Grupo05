# Cenário 9: Cartão de Vale-Transporte recusado no meio do expediente e pedido de aumento do limite diário

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 27/09/2026 | 1.0 | Elaboração detalhada do Cenário 9 (Heitor Santos Júnior). | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |
| 23/10/2026 | 2.0 | Reescrita do Cenário 9 para a nova tarefa da persona Heitor ([TAR-09](../analise-de-tarefas/tar-09-limite-vale-transporte.md), aumento do limite diário do Vale-Transporte), substituindo a versão sobre rota para endereço novo e desvio de itinerário. | [Tomás Rocho](https://github.com/TomasRocho) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |

---

## 1. Introdução

Este cenário de problema acompanha Heitor Santos Júnior em um dia de muitos chamados de manutenção, em que o cartão de Vale-Transporte é recusado na volta para casa porque ele passou do limite de 8 acessos por dia. A partir daí, Heitor tenta descobrir o que aconteceu e pedir mais acessos pelo site da Semob. A situação evidencia a falta de explicação no momento da recusa, um serviço escondido no site, um link de formulário que não leva ao formulário e uma entrega que só pode ser presencial. Os problemas encontrados alimentam a [TAR-09](../analise-de-tarefas/tar-09-limite-vale-transporte.md).

## 2. Caracterização Geral

**Autor: Tomás Rocho**

- **Persona:** [Heitor Santos Júnior](../personas/heitor-santos-junior.md) (persona primária)
- **Tipo:** Cenário de problema — situação atual, com o site e os canais como eles são hoje
- **Tarefa da persona coberta:** pedir aumento do limite diário de uso do Vale-Transporte ([TAR-09](../analise-de-tarefas/tar-09-limite-vale-transporte.md))

**Resumo:** numa quinta-feira, depois de um dia com cinco chamados em prédios diferentes do Plano Piloto, Heitor tenta voltar para Planaltina e o validador recusa o cartão. Ele paga a passagem do próprio bolso sem entender o motivo. Só à noite, com a ajuda da filha, descobre no site que existe um limite diário de acessos, mas a página da Semob não diz qual é o limite, o link do formulário não leva ao formulário e a entrega é só presencial. Heitor precisa sair mais cedo do trabalho para ir ao posto e espera mais de uma semana, pagando do próprio bolso as passagens além da oitava, sem saber se o pedido foi aceito.

---

## 3. Ambiente ou Contexto

- **Quando e onde:** quinta-feira, início de outubro, a partir das 16h40, na plataforma da Rodoviária do Plano Piloto. Depois, em casa, em Planaltina, à noite, e nos dias seguintes.
- **Situação de deslocamento:** o dia teve cinco chamados, um deles de emergência, em prédios da Asa Sul e da Asa Norte. Até as 16h30, Heitor já tinha passado o cartão 8 vezes, como mostra a Tabela 1.

**Tabela 1** — Acessos do cartão de Heitor no dia do cenário

| Acesso | Trecho |
| :---: | :--- |
| 1 | Planaltina → Rodoviária do Plano Piloto (5h05) |
| 2 | Rodoviária → prédio da 308 Sul |
| 3 | 308 Sul → prédio do Setor Comercial Sul |
| 4 | Setor Comercial Sul → prédio da 912 Norte |
| 5 | 912 Norte → prédio da 405 Norte |
| 6 | 405 Norte → Rodoviária (almoço) |
| 7 | Rodoviária → prédio da 114 Sul (chamado de emergência) |
| 8 | 114 Sul → Rodoviária |
| **9** | **Rodoviária → Planaltina (recusado)** |

*Fonte: Tomás Rocho.*

- **Dispositivo e conectividade:** smartphone Android de entrada, com a tela trincada e pacote de dados pré-pago quase no fim. Em casa, usa o Wi-Fi do vizinho, que a família divide.
- **Recursos à mão:** cartão +Vale-Transporte, um pouco de dinheiro na carteira, grupo de WhatsApp da equipe, a filha Ana Clara (12 anos) e o site da Semob.
- **Situação do serviço (desconhecida por Heitor no início):** o cartão Vale-Transporte aceita até 8 acessos por dia, contando as integrações. Para ter mais, é preciso pedir à Semob com formulário e documentos. A página da Semob sobre o assunto fica em Ouvidoria > Serviços e não informa o número do limite.

---

## 4. Atores

A Tabela 2 identifica os participantes do cenário e como suas características e papéis influenciam a situação.

**Tabela 2** — Atores envolvidos no Cenário 9

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Heitor Santos Júnior** | Ator principal (usuário) | Homem, 36 anos, técnico de manutenção predial. Letramento digital intermediário; não sabia que o Vale-Transporte tem limite diário. Cansado depois de um dia cheio e preocupado com dinheiro |
| **Motorista da linha para Planaltina** | Ator secundário (primeiro contato com a recusa) | Vê a recusa no validador, mas não sabe dizer o motivo |
| **Colega de trabalho (Wesley)** | Ator secundário (fonte informal de informação) | Já teve o cartão recusado antes e desconfia que seja o limite |
| **Ana Clara, filha de Heitor** | Ator secundário (apoio digital) | 12 anos, mais habituada ao celular; ajuda o pai a procurar no site |
| **RH da empresa terceirizada** | Ator secundário (emite a declaração) | Atende por WhatsApp; não tem modelo de declaração para esse pedido |
| **Supervisor (Marcos)** | Ator secundário (libera o horário) | Precisa autorizar a saída de Heitor para ir ao posto |
| **Atendente do posto BRB Mobilidade** | Ator secundário (recebe o pedido) | Confere os documentos no balcão e informa o prazo |

*Fonte: Tomás Rocho.*

**Elementos do ambiente com que o ator interage:** validador do ônibus, busca do Google, site da Semob (página inicial, busca e página "Limites do Vale-Transporte"), página do cartão Vale-Transporte no site do BRB, grupo de WhatsApp da equipe, conversa com o RH e posto BRB Mobilidade.

---

## 5. Objetivos

- **Objetivo principal:** fazer o cartão de Vale-Transporte voltar a funcionar em todos os deslocamentos do dia de trabalho, sem pagar passagens do próprio bolso.
- **Subobjetivos:**
  1. Entender por que o cartão foi recusado.
  2. Descobrir o que fazer para aumentar o limite.
  3. Conseguir o formulário e os documentos.
  4. Entregar o pedido sem faltar ao trabalho.
  5. Saber quando o novo limite estiver valendo.
- **Motivações:** não perder dinheiro que faz falta em casa, não depender de pedir "vale" ao supervisor e não ser visto como alguém que usa o benefício de forma errada.

---

## 6. Planejamento, Ações, Eventos e Avaliação

**Como ler cada passo:** Planejamento = o que Heitor pensa em fazer (atividade mental); Ação = o que ele faz de forma observável; Evento = o que acontece em resposta (site, sistema, ambiente ou outras pessoas) — os marcados como **[oculto]** acontecem sem que ele saiba, mas afetam a história; Avaliação = como ele interpreta o que viu (atividade mental).

**Plano geral de Heitor:** (1) entender o que aconteceu com o cartão; (2) procurar no site como resolver; (3) fazer o que for pedido; (4) voltar a usar o cartão normalmente.

### Passo 1 — Cartão recusado na volta para casa (16h40)

- **Planejamento:** *"Agora é só pegar o ônibus pra Planaltina e ir pra casa."*
- **Ação:** entra no ônibus e aproxima o cartão do validador.
- **Evento [oculto]:** esse é o 9º acesso do dia; o cartão atingiu o limite diário de 8 acessos.
- **Evento:** o validador apita e não libera a catraca. Ele tenta de novo e acontece a mesma coisa. O motorista diz: "Deve estar sem saldo, irmão."
- **Avaliação:** *"Sem saldo? O vale caiu dia primeiro, eu nem gastei tudo."* Sem alternativa, paga a passagem em dinheiro, com o que tinha separado para o pão.

### Passo 2 — Perguntar no grupo do trabalho (16h50)

- **Planejamento:** *"Alguém da equipe já deve ter passado por isso."*
- **Ação:** manda um áudio no grupo da equipe contando que o cartão "travou".
- **Evento:** Wesley responde: "Comigo já aconteceu. Acho que tem um limite de vezes por dia. Tem que pedir na Semob, mas não sei como."
- **Avaliação:** *"Limite? Eu uso o cartão pra trabalhar, não é passeio."* Fica com a dúvida e decide procurar em casa.

### Passo 3 — Procurar o serviço no site com a filha (19h40)

- **Planejamento:** *"A Ana Clara mexe melhor nisso. A gente acha no site do governo."*
- **Ação:** Ana Clara digita no Google "vale transporte recusado df" e abre o site da Semob.
- **Evento:** a página inicial mostra "Serviços mais procurados" com "Cartões Mobilidade / Pontos de Recarga", mas nada sobre cartão recusado. Ana Clara tenta a busca do site com "vale transporte limite" e, entre notícias, aparece a página **Limites do Vale-Transporte**, que fica em **Ouvidoria > Serviços**.
- **Avaliação:** *"Ouvidoria? Eu não quero reclamar, eu quero que o cartão funcione."* Mesmo assim, abre a página.

### Passo 4 — Descobrir o limite e tentar o formulário (19h55)

- **Planejamento:** ler o que precisa fazer e baixar o formulário.
- **Ação:** Ana Clara lê a página em voz alta e toca em **"CLIQUE AQUI PARA BAIXAR O FORMULÁRIO"**.
- **Evento:** a página da Semob não diz qual é o limite. O link abre a página geral do cartão Vale-Transporte no site do BRB, sem o formulário. Rolando essa página, Ana Clara encontra nas perguntas frequentes que o limite é de **8 acessos por dia**. De volta à Semob, ela tenta tocar em **"Formulário on-line"**, que é só texto, sem link.
- **Avaliação:** Ana Clara conta nos dedos: *"Pai, o senhor passou o cartão nove vezes hoje."* Heitor entende o motivo da recusa, mas pensa: *"E o formulário? Vou ter que pegar no posto."*

### Passo 5 — Pedir a declaração ao RH (sexta-feira, 7h30)

- **Planejamento:** juntar os documentos pedidos na página: RG, CPF, comprovante de residência, declaração do empregador e as linhas usadas.
- **Ação:** manda mensagem para o RH pedindo uma declaração "com o endereço do serviço".
- **Evento:** o RH responde que não tem modelo para isso e pergunta qual endereço deve colocar, já que ele atende em vários prédios. Combinam de pôr o endereço da sede da empresa e escrever à mão "atende condomínios na Asa Sul e na Asa Norte". Para as linhas, Heitor só sabe o número da linha de Planaltina.
- **Avaliação:** *"Cada dia eu pego um ônibus diferente. Como é que eu vou saber as linhas antes?"* Fica com medo de o pedido ser negado.

### Passo 6 — Tentar entregar no posto (segunda e terça-feira)

- **Planejamento:** entregar no posto da Rodoviária de Planaltina antes de pegar o ônibus.
- **Ação:** na segunda, às 4h55, passa pelo posto com os documentos.
- **Evento:** o posto ainda está fechado. A página com os horários dos postos, indicada pela Semob, não abre no celular dele. Heitor pede ao supervisor para chegar mais tarde na terça e vai ao posto da Rodoviária do Plano Piloto (mezanino) quando ele abre.
- **Evento:** no balcão, o atendente entrega o formulário em papel para ele preencher ali mesmo, recebe os documentos e diz: "A Semob analisa em até cinco dias úteis e, se aprovar, o BRB muda no sistema em até dois." Ele não recebe número de protocolo.
- **Avaliação:** *"Perdi meia manhã de serviço e saio daqui sem papel nenhum na mão."*

### Passo 7 — Esperar sem saber (dias seguintes)

- **Planejamento:** continuar trabalhando e torcer para o pedido ser aprovado.
- **Ação:** nos dias de muitos chamados, conta as passagens e paga em dinheiro quando passa da oitava.
- **Evento [oculto]:** o pedido é aprovado no quinto dia útil, e o BRB altera o limite no sistema dois dias depois.
- **Evento:** ninguém avisa Heitor. Ele só percebe que deu certo na quinta-feira da semana seguinte, quando o 9º acesso do dia passa no validador.
- **Avaliação:** *"Funcionou, mas nesse tempo eu gastei do meu bolso umas três passagens, e ninguém me falou nada."*

---

## 7. Problemas Revelados pelo Cenário

A Tabela 3 relaciona os problemas do cenário aos momentos em que aparecem e aos requisitos da persona.

**Tabela 3** — Problemas revelados pelo Cenário 9

| Problema revelado | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| O validador recusa o cartão sem dizer que o motivo é o limite diário; motorista e usuário acham que é falta de saldo | Passo 1 | Saber por que o cartão foi recusado |
| A regra do limite só chega a Heitor por fonte informal (colega do trabalho) | Passo 2 | Informação oficial em linguagem simples |
| O serviço fica em Ouvidoria > Serviços, com o nome "Limites do Vale-Transporte", longe dos serviços de cartão e do vocabulário do usuário | Passo 3 | Encontrar o serviço sem precisar conhecer o nome oficial |
| A página da Semob não informa qual é o limite; o número 8 só aparece no site do BRB | Passo 4 | Saber por que o cartão foi recusado |
| O link "baixar o formulário" não leva ao formulário e "Formulário on-line" não é link | Passo 4 | Resolver pelo celular, sem beco sem saída |
| A declaração pede um único endereço de trabalho e a lista de linhas, o que não combina com quem trabalha em vários endereços | Passo 5 | Pedido que aceite a rotina de quem trabalha em vários lugares |
| A entrega é só presencial e os horários dos postos ficam em outro site, que não abriu | Passo 6 | Resolver sem faltar ao trabalho |
| Não há protocolo nem aviso quando o limite muda; durante a espera, Heitor paga passagens do próprio bolso | Passo 7 | Acompanhar o pedido e ser avisado |

*Fonte: Tomás Rocho.*

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* ROSSON, Mary Beth; CARROLL, John M. **Usability Engineering: Scenario-Based Development of Human-Computer Interaction**. San Francisco: Morgan Kaufmann, 2002.
* SECRETARIA DE ESTADO DE TRANSPORTE E MOBILIDADE DO DISTRITO FEDERAL (Semob-DF). **Limites do Vale-Transporte**. Disponível em: <https://www.semob.df.gov.br/servicos/limites-do-vale-transporte>. Acesso em: 23 out. 2026.
