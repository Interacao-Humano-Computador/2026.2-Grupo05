# Cenário 1: Pré-agendamento no Programa DF Acessível: do site da Semob ao dia de atendimento

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Elaboração detalhada do Cenário 1 (Larissa Ferreira Lima). | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 27/09/2026 | 1.1 | Modularização em artefato próprio com integração às personas e visão geral. | [Carlos Costa](https://github.com/carloshfgit) | [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 11/10/2026 | 2.0 | Reescrita do cenário para a nova versão da persona Larissa (mobilidade reduzida temporária), aplicando a tarefa TAR-02 (pré-agendamento no DF Acessível). | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 11/10/2026 | 2.1 | Renomeação do arquivo do cenário para cenario-1-pre-agendamento-df-acessivel. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |

---

## 1. Introdução

Este cenário de problema descreve a tentativa de Larissa Ferreira Lima de realizar o pré-agendamento no Programa DF Acessível a partir do site da Semob, para conseguir transporte adaptado até a fisioterapia depois de uma fratura. A situação foi modelada a partir da Análise de Tarefas da [TAR-02](../analise-de-tarefas/tar-02-df-acessivel.md) para evidenciar como o caminho entre portais, a falta de explicações sobre o serviço e as limitações do calendário podem fazer uma pessoa com mobilidade reduzida adiar ou perder o transporte de que precisa, contribuindo para a identificação de requisitos de IHC.

## 2. Caracterização Geral

**Autor: Gabriel Melo**

- **Persona:** [Larissa Ferreira Lima](../personas/larissa-ferreira-lima.md) (persona primária)
- **Tipo:** Cenário de problema — situação atual, com o site como ele é hoje
- **Tarefa coberta:** [TAR-02 — Pré-agendamento no Programa DF Acessível](../analise-de-tarefas/tar-02-df-acessivel.md) (HTA e CTT)

**Resumo:** numa segunda-feira à noite, em casa, Larissa precisa garantir transporte adaptado para a fisioterapia, que começa em poucas semanas. Ela abre o site da Semob, não encontra nenhum atalho para o DF Acessível e chega ao agendamento por um caminho que atravessa três outros portais. Escolhe o posto sem saber se há vagas ou se o local é acessível, perde a sessão enquanto confere a agenda da família e precisa recomeçar. Ao final, consegue pré-agendar em um posto mais distante e termina a noite sem saber se o comprovante chegou.

---

## 3. Ambiente ou Contexto

- **Quando e onde:** segunda-feira, fim de setembro, 21h40, no quarto de Larissa, em Ceilândia. A perna esquerda está imobilizada e elevada sobre travesseiros; a cadeira de rodas está ao lado da cama. É a hora em que ela costuma resolver as pendências do dia, depois de trabalhar e acompanhar as aulas.
- **Situação de saúde e de deslocamento:** há cerca de três semanas, Larissa fraturou o tornozelo e a tíbia esquerda e passou por cirurgia. Ficará aproximadamente 12 semanas sem apoiar o pé e depois seguirá com muletas e fisioterapia. A fisioterapia será às segundas, quartas e sextas, em uma clínica de reabilitação, e há consultas ortopédicas quinzenais no Plano Piloto. Ônibus e metrô comuns deixaram de ser uma opção, e corrida de aplicativo não cabe no orçamento. A mãe, Sônia, precisa trabalhar.
- **Dispositivo e conectividade:** celular Android com 38% de bateria, plano de dados limitado e wi-fi doméstico instável. Ela usa o aparelho deitada, com uma mão. O notebook da casa está com o irmão, que faz trabalho escolar.
- **Recursos à mão:** laudo médico (foto na galeria do celular), site da Semob, agenda da fisioterapia no celular e conversa com a mãe pelo WhatsApp.
- **Regras do programa (desconhecidas por Larissa nesta noite):** o DF Acessível atende pessoas com deficiência ou patologia que causa redução severa de mobilidade, **temporária ou permanente**, e exige cadastro prévio, comprovação por profissional de saúde, residência no DF, renda familiar per capita inferior a dois salários mínimos e cadeira de rodas própria compatível com as normas da ABNT; as viagens são agendadas com antecedência mínima de 30 dias **[R]**. Larissa atende a todos esses requisitos, mas o site não informa isso de forma direta.

---

## 4. Atores

A Tabela 1 identifica os participantes do cenário e esclarece como suas características e papéis influenciam o desenvolvimento da situação descrita.

**Tabela 1** — Atores envolvidos no Cenário 1

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Larissa Ferreira Lima** | Ator principal (usuária) | Mulher, 23 anos, com deficiência temporária de mobilidade. Autônoma e acostumada a resolver tudo pelo celular. Cansada e com dor ao fim do dia, usa o aparelho com uma mão e tem dificuldade com toques pequenos |
| **Sônia (mãe)** | Ator secundário | Auxiliar de serviços gerais. É a acompanhante natural de Larissa e só pode ir a alguns dias e horários; responde às mensagens quando intervalos do trabalho permitem |
| **Pedro (irmão)** | Ator secundário | Usa o notebook da casa; sugere o caminho que um colega usou para marcar um serviço do GDF |

*Fonte: Gabriel Melo.*

**Elementos do ambiente com que os atores interagem:** site da Semob, portal Participa DF, portal Na Hora, Agenda DF, navegador do celular, galeria de fotos e WhatsApp.

---

## 5. Objetivos

- **Objetivo principal:** realizar o pré-agendamento no Programa DF Acessível, escolhendo o local e o dia do atendimento.
- **Subobjetivos:**
  1. Chegar ao serviço certo a partir do site da Semob.
  2. Entender o que é o pré-agendamento e se uma deficiência temporária dá direito ao programa.
  3. Escolher um posto de atendimento e um dia que caibam na agenda dela e na da mãe.
  4. Receber a confirmação de que o pré-agendamento foi registrado.
- **Motivações:** garantir o transporte para as sessões de fisioterapia, que não podem ser adiadas sem prejudicar a recuperação; evitar gastos com aplicativo; e deixar de depender da mãe para cada deslocamento.

---

## 6. Planejamento, Ações, Eventos e Avaliação

**Como ler cada passo:** Planejamento = o que Larissa pensa em fazer (atividade mental); Ação = o que ela faz de forma observável; Evento = o que acontece em resposta (site, sistema, ambiente ou outras pessoas); Avaliação = como ela interpreta o que viu (atividade mental). Os eventos assinalados com **[H]** têm base na Análise de Tarefas ([TAR-02](../analise-de-tarefas/tar-02-df-acessivel.md): HTA e CTT, realizada em 25/09/2026); os assinalados com **[R]** têm base na Resolução TCB nº 33/2021; os demais são hipotéticos.

**Plano geral de Larissa:** (1) chegar ao serviço de agendamento do DF Acessível a partir do site da Semob; (2) escolher o "Pré-agendamento" e entender o que precisa; (3) escolher o local e o dia do atendimento; (4) conferir se o pré-agendamento ficou registrado.

### Passo 1 — Abrir o site da Semob (21h40)

- **Planejamento:** *"Preciso marcar o transporte da fisioterapia. Deve ter algo no site da Semob."* Como não sabe o endereço de cabeça, decide chegar pelo Google.
- **Ação:** abre o navegador, pesquisa "semob transporte cadeirante agendar" e toca no resultado do site da Semob.
- **Evento:** com a conexão lenta, a página inicial demora a abrir. No menu superior e na página inicial, não há atalho com os nomes "DF Acessível", "transporte adaptado" ou "agendar" **[H]**.
- **Avaliação:** *"Tem um monte de coisa aqui que não é pra mim. Onde eu marco isso?"* Sente cansaço e a dor aumenta, mas não quer deixar para amanhã.

### Passo 2 — Chegar a "Faça aqui o seu pedido – Participe"

- **Planejamento:** como nada no menu fala em agendamento, resolve tentar "Acesso à Informação", que lhe parece o item mais parecido com "pedir uma informação sobre um serviço".
- **Ação:** toca em "Acesso à Informação" e depois em "Faça aqui o seu pedido – Participe" **[H]**.
- **Evento:** o navegador abre o portal Participa DF (participa.df.gov.br), outro site, com outra identidade visual, sem nenhum aviso de que ela saiu da Semob **[H]**.
- **Avaliação:** *"Isso aqui é pedido de informação ou ouvidoria. Não é agendamento. Será que errei?"* Pensa em desistir, mas, como o irmão lembra que um colega "marcou o RG num site com 'Na Hora' no nome", continua.

### Passo 3 — Chegar ao "Programa DF Acessível" pelo Na Hora

- **Planejamento:** procurar o link "Na Hora" que o irmão citou e, a partir dele, achar o agendamento do programa.
- **Ação:** rola a página até encontrar o link "Na Hora" (nahora.df.gov.br), que tem pouco destaque visual, e toca nele. No Na Hora, abre "Agendamento Online" e percorre a lista de órgãos e serviços até chegar a "Programa DF Acessível" **[H]**.
- **Evento:** a lista é longa e mistura órgãos e serviços. Ela não sabe se o programa pertence à Semob, à TCB ou à Secretaria da Pessoa com Deficiência. Ao selecionar o programa, é redirecionada a outro domínio, a Agenda DF (agenda.df.gov.br) **[H]**. Já são 4 endereços diferentes e 12% da franquia de dados do dia.
- **Avaliação:** *"Quatro sites para marcar uma van. Se eu não tivesse insistido, tinha desistido lá no segundo."*

### Passo 4 — Escolher "Pré-agendamento" e tentar entender se tem direito

- **Planejamento:** abrir o "Pré-agendamento" e conferir se uma deficiência temporária é aceita e quais documentos precisa levar.
- **Ação:** toca em "Pré-agendamento" **[H]**. Procura na tela, sem sucesso, uma explicação de quem tem direito, e abre o laudo na galeria para conferir as informações enquanto lê.
- **Evento:** a tela seguinte já mostra a lista de postos, sem explicar a diferença entre pré-agendamento e agendamento definitivo e sem listar os documentos necessários **[H]**. Nada diz que deficiência temporária também dá direito ao programa **[R]**.
- **Avaliação:** *"Não diz se eu entro no programa. Eu não sou cadeirante pra sempre... Vou escolher o posto e rezar para ser isso mesmo."* Fica insegura, mas segue em frente porque o relógio já passa das 22h.

### Passo 5 — Escolher o posto de atendimento

- **Planejamento:** escolher o posto mais perto de casa, para a mãe conseguir levá-la numa folga.
- **Ação:** percorre a lista e toca no posto de Ceilândia.
- **Evento:** a lista mostra apenas os nomes dos locais, sem endereço completo, mapa, indicação de rampa ou elevador e sem a próxima data com vaga **[H]**. Só depois de escolher o posto o sistema consulta a disponibilidade **[H]**.
- **Avaliação:** *"Não sei se o posto tem rampa. E não sei se tem vaga. Só descubro depois de escolher."*

### Passo 6 — Conferir a agenda e perder a sessão

- **Planejamento:** antes de escolher o dia, confirmar a agenda da fisioterapia e perguntar à mãe em quais dias ela pode acompanhá-la.
- **Ação:** deixa a tela do calendário aberta, abre o aplicativo de agenda, confere as sessões da fisioterapia e manda mensagem para a mãe no WhatsApp. A resposta demora cerca de quatro minutos.
- **Evento:** enquanto isso, a sessão do sistema expira por inatividade, sem contador de tempo nem aviso prévio, e a seleção em andamento é cancelada **[H]**. Ao voltar, Larissa vê a tela inicial do portal.
- **Avaliação:** *"Perdi tudo. Tenho que começar do zero, com a perna doendo e 21% de bateria."* Sente raiva e vontade de deixar para outro dia, mas lembra que o prazo mínimo de 30 dias **[R]** não espera.

### Passo 7 — Refazer o caminho e trocar de posto

- **Planejamento:** repetir o caminho mais rápido, agora que já o conhece, e escolher o posto de Ceilândia de novo.
- **Ação:** volta pelo navegador até a lista de postos e escolhe novamente o de Ceilândia.
- **Evento:** o calendário do posto aparece sem dias disponíveis nas próximas semanas **[H]**. Ela volta para a lista e, em alguns caminhos, precisa selecionar de novo o serviço desde o Na Hora, porque o contexto não foi mantido **[H]**. Escolhe o posto de Taguatinga, mais distante, que ainda mostra vagas.
- **Avaliação:** *"Taguatinga é muito mais longe, e eu ainda preciso ver com a minha mãe. Mas se eu não pegar essa vaga, perco mais um mês."*

### Passo 8 — Escolher o dia e conferir o comprovante

- **Planejamento:** escolher um dia que a mãe confirmou que pode, de preferência fora dos dias de fisioterapia.
- **Ação:** toca no dia desejado no calendário, mas erra o toque e seleciona a data ao lado. Corrige, toca em "Confirmar" e, em seguida, tira um print da tela de confirmação.
- **Evento:** os dias são pequenos e os disponíveis são diferenciados quase só pela cor **[H]**. A tela de confirmação mostra local, dia e horário, mas não há aviso de que um comprovante foi enviado por e-mail ou SMS, e a vaga não foi reservada enquanto ela decidia **[H]**.
- **Avaliação:** *"Acho que deu certo... Mas e se alguém pegou a vaga antes? Eu quero um comprovante no e-mail."* Larissa vai dormir às 22h50, com 9% de bateria, sem ter certeza de que o transporte está garantido e sem saber se o pré-agendamento resolve tudo ou se ainda falta alguma etapa.

---

## 7. Problemas Revelados pelo Cenário

A Tabela 2 relaciona os problemas evidenciados durante o cenário aos momentos em que ocorrem e aos requisitos já identificados para a persona.

**Tabela 2** — Problemas revelados pelo Cenário 1

| Problema revelado | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| A home da Semob não tem atalho para o DF Acessível; o caminho passa por "Acesso à Informação" e "Faça aqui o seu pedido – Participe" **[H]** | Passos 1 e 2 | Um caminho direto até o DF Acessível |
| Troca de domínio sem aviso (Participa DF, Na Hora, Agenda DF), com o link "Na Hora" pouco destacado **[H]** | Passos 2 e 3 | Aviso antes de trocar de site |
| Lista longa de serviços e dúvida sobre qual órgão é o responsável (Semob, TCB, SEPD) **[H]** | Passo 3 | Um caminho direto até o DF Acessível; Linguagem simples |
| Não há explicação do que é o pré-agendamento, nem lista de documentos, nem informação de que deficiência temporária dá direito ao programa **[H][R]** | Passo 4 | Linguagem simples e explicação do serviço; Saber se tem direito |
| A lista de postos não mostra endereço, mapa, acessibilidade física nem a próxima data com vaga **[H]** | Passo 5 | Informações do local de atendimento |
| A sessão expira por inatividade, sem contador nem aviso, e cancela a seleção em andamento **[H]** | Passo 6 | Tempo para decidir sem perder a sessão |
| Ao trocar de posto, o contexto do serviço escolhido nem sempre é preservado **[H]** | Passo 7 | Site leve, acessível e de uso com uma mão |
| Calendário com dias pequenos e disponibilidade indicada principalmente por cor, o que dificulta o toque e a leitura **[H]** | Passo 8 | Calendário fácil de usar e com texto, não só cor |
| Não há reserva temporária da vaga nem comprovante imediato por e-mail ou SMS **[H]** | Passo 8 | Confirmação imediata e por escrito |

*Fonte: Gabriel Melo.*

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* DISTRITO FEDERAL. Transporte Coletivo de Brasília (TCB). **Resolução nº 33, de 9 de novembro de 2021**. Regulamenta o Programa DF Acessível. Disponível em: [SINJ-DF](https://www.sinj.df.gov.br/sinj/Norma/087e8a61f20547eaa289deb4ef136839/Resolu_o_33_09_11_2021.html). Acesso em: 11 out. 2026.