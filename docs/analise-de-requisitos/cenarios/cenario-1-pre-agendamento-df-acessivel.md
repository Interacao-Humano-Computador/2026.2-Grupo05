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

Este cenário de concepção descreve Larissa Ferreira Lima realizando o pré-agendamento no Programa DF Acessível com a **nova funcionalidade proposta** para o site da Semob, para conseguir transporte adaptado até a fisioterapia depois de uma fratura. Atualmente, o site da Semob não oferece esse serviço. A situação foi construída a partir da Análise de Tarefas da [TAR-02](../analise-de-tarefas/tar-02-df-acessivel.md) e do [Storyboard 02](../../design-avaliacao-desenvolvimento/nivel1/storyboards.md#32-storyboard-02-pre-agendamento-no-programa-df-acessivel) para mostrar como um atalho na página inicial, explicações claras sobre o serviço, informações sobre os postos e um comprovante imediato permitem que uma pessoa com mobilidade reduzida garanta o transporte de que precisa, contribuindo para a especificação de requisitos de IHC.

## 2. Caracterização Geral

**Autor: Gabriel Melo**

- **Persona:** [Larissa Ferreira Lima](../personas/larissa-ferreira-lima.md) (persona primária)
- **Tipo:** Cenário de concepção (projetado) — situação futura, com a funcionalidade proposta implantada no site da Semob
- **Tarefa coberta:** [TAR-02 — Pré-agendamento no Programa DF Acessível](../analise-de-tarefas/tar-02-df-acessivel.md) (HTA e CTT)
- **Storyboard relacionado:** [Storyboard 02](../../design-avaliacao-desenvolvimento/nivel1/storyboards.md#32-storyboard-02-pre-agendamento-no-programa-df-acessivel)

**Resumo:** numa segunda-feira à noite, em casa, Larissa precisa garantir transporte adaptado para a fisioterapia. Ela abre o site da Semob e encontra, logo na página inicial, o atalho "Agendar DF Acessível". O site explica o que é o pré-agendamento, confirma que a deficiência temporária dá direito ao programa e lista os documentos. Larissa escolhe o posto mais próximo de casa já sabendo se ele é acessível e qual é a próxima data com vaga, confere a agenda com a mãe, seleciona a data e recebe o comprovante por e-mail e WhatsApp.

---

## 3. Ambiente ou Contexto

- **Quando e onde:** segunda-feira, fim de setembro, 21h40, no quarto de Larissa, em Ceilândia. A perna esquerda está imobilizada e elevada sobre travesseiros; a cadeira de rodas está ao lado da cama. É a hora em que ela costuma resolver as pendências do dia, depois de trabalhar e acompanhar as aulas.
- **Situação de saúde e de deslocamento:** há cerca de três semanas, Larissa fraturou o tornozelo e a tíbia esquerda e passou por cirurgia. Ficará aproximadamente 12 semanas sem apoiar o pé e depois seguirá com muletas e fisioterapia. A fisioterapia será às segundas, quartas e sextas, em uma clínica de reabilitação, e há consultas ortopédicas quinzenais no Plano Piloto. Ônibus e metrô comuns deixaram de ser uma opção, e corrida de aplicativo não cabe no orçamento. A mãe, Sônia, precisa trabalhar.
- **Dispositivo e conectividade:** celular Android com 38% de bateria, plano de dados limitado e wi-fi doméstico instável. Ela usa o aparelho deitada, com uma mão. O notebook da casa está com o irmão, que faz trabalho escolar.
- **Recursos à mão:** laudo médico (foto na galeria do celular), site da Semob, agenda da fisioterapia no celular e conversa com a mãe pelo WhatsApp.
- **Regras do programa:** o DF Acessível atende pessoas com deficiência ou patologia que causa redução severa de mobilidade, **temporária ou permanente**, e exige cadastro prévio, comprovação por profissional de saúde, residência no DF, renda familiar per capita inferior a dois salários mínimos e cadeira de rodas própria compatível com as normas da ABNT; as viagens são agendadas com antecedência mínima de 30 dias. Larissa atende a todos esses requisitos, e a funcionalidade proposta informa isso logo no início.
- **Situação atual (antes da proposta):** hoje, o site da Semob não oferece o pré-agendamento do DF Acessível nem um atalho para ele. Este cenário descreve como seria a mesma noite de Larissa com a funcionalidade proposta.

---

## 4. Atores

A Tabela 1 identifica os participantes do cenário e esclarece como suas características e papéis influenciam o desenvolvimento da situação descrita.

**Tabela 1** — Atores envolvidos no Cenário 1

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Larissa Ferreira Lima** | Ator principal (usuária) | Mulher, 23 anos, com deficiência temporária de mobilidade. Autônoma e acostumada a resolver tudo pelo celular. Cansada e com dor ao fim do dia, usa o aparelho com uma mão e tem dificuldade com toques pequenos |
| **Sônia (mãe)** | Ator secundário | Auxiliar de serviços gerais. É a acompanhante natural de Larissa e só pode ir a alguns dias e horários; responde às mensagens quando intervalos do trabalho permitem |
| **Pedro (irmão)** | Ator secundário | Usa o notebook da casa, o que faz Larissa resolver tudo pelo celular |

*Fonte: Gabriel Melo.*

**Elementos do ambiente com que os atores interagem:** site da Semob (página inicial com o atalho "Agendar DF Acessível" proposto), navegador do celular, galeria de fotos, WhatsApp e e-mail.

---

## 5. Objetivos

- **Objetivo principal:** realizar o pré-agendamento no Programa DF Acessível, escolhendo o local e o dia do atendimento.
- **Subobjetivos:**
  1. Encontrar o serviço na página inicial do site da Semob.
  2. Entender o que é o pré-agendamento e se uma deficiência temporária dá direito ao programa.
  3. Escolher um posto de atendimento acessível e um dia que caibam na agenda dela e na da mãe.
  4. Receber a confirmação de que o pré-agendamento foi registrado.
- **Motivações:** garantir o transporte para as sessões de fisioterapia, que não podem ser adiadas sem prejudicar a recuperação; evitar gastos com aplicativo; e deixar de depender da mãe para cada deslocamento.

---

## 6. Planejamento, Ações, Eventos e Avaliação

**Como ler cada passo:** Planejamento = o que Larissa pensa em fazer (atividade mental); Ação = o que ela faz de forma observável; Evento = o que acontece em resposta (site, sistema, ambiente ou outras pessoas); Avaliação = como ela interpreta o que viu (atividade mental). Os eventos assinalados com **[P]** correspondem à funcionalidade proposta e modelada na Análise de Tarefas ([TAR-02](../analise-de-tarefas/tar-02-df-acessivel.md): HTA e CTT, versão 2.0); os demais são hipotéticos.

**Plano geral de Larissa:** (1) encontrar o agendamento do DF Acessível no site da Semob; (2) entender o que é o pré-agendamento e o que precisa; (3) escolher o local e o dia do atendimento; (4) conferir se o pré-agendamento ficou registrado.

### Passo 1 — Abrir o site da Semob e encontrar o atalho (21h40) — Storyboard, quadros 1 e 2

- **Planejamento:** *"Preciso marcar o transporte da fisioterapia. Deve ter algo no site da Semob."* Como não sabe o endereço de cabeça, decide chegar pelo Google.
- **Ação:** abre o navegador, pesquisa "semob transporte cadeirante agendar" e toca no resultado do site da Semob.
- **Evento:** a página inicial abre leve, mesmo com a conexão lenta. Logo na primeira tela, sem precisar rolar, aparece o botão "Agendar DF Acessível", grande e com o símbolo de acessibilidade **[P]** (HTA 1.1; CTT 1.1).
- **Avaliação:** *"É isso! Achei que ia ter que procurar em mil lugares."*

### Passo 2 — Entender o pré-agendamento e se tem direito

- **Planejamento:** antes de começar, quer saber se uma deficiência temporária dá direito ao programa e quais documentos vai precisar.
- **Ação:** toca em "Agendar DF Acessível".
- **Evento:** sem sair do site da Semob, abre a página do serviço. Em uma frase, ela explica que o pré-agendamento marca o atendimento presencial para o cadastro no programa; informa que deficiência temporária ou permanente dá direito; e lista os documentos necessários, como o laudo do profissional de saúde e o comprovante de residência **[P]** (HTA 1.2; CTT 1.2).
- **Ação:** abre a galeria para confirmar que o laudo está legível e toca em "Pré-agendamento" **[P]** (CTT 1.3).
- **Avaliação:** *"Então eu tenho direito, e o laudo eu já tenho. Agora é só escolher o lugar."*

### Passo 3 — Escolher o posto de atendimento — Storyboard, quadro 3

- **Planejamento:** escolher o posto mais perto de casa, para a mãe conseguir levá-la numa folga.
- **Evento:** a lista de postos aparece ordenada por proximidade. Cada posto mostra endereço, região administrativa, recursos de acessibilidade (rampa, elevador, vaga para embarque) e a próxima data com vaga **[P]** (HTA 2.1; CTT 2.1). O posto de Ceilândia, o primeiro da lista, tem rampa e vaga para embarque, e a próxima data é uma quinta-feira de novembro; o do Gama tem data mais cedo, mas fica bem mais longe.
- **Ação:** toca no posto de Ceilândia **[P]** (CTT 2.2).
- **Avaliação:** *"Ceilândia tem rampa e é perto. Prefiro esperar um pouco e ir num lugar que eu consigo entrar."*

### Passo 4 — Conferir a agenda com a mãe

- **Planejamento:** antes de escolher o dia, confirmar a agenda da fisioterapia e perguntar à mãe em quais dias ela pode acompanhá-la.
- **Ação:** com o calendário do posto aberto, abre o aplicativo de agenda, confere as sessões da fisioterapia e manda mensagem para a mãe no WhatsApp. A resposta demora cerca de quatro minutos.
- **Evento:** enquanto isso, o site consulta os dias com vaga do posto **[P]** (CTT 2.3, em paralelo à tarefa 2.4 de Larissa). Quando ela volta, o posto escolhido continua selecionado e o calendário já está carregado.
- **Avaliação:** *"Minha mãe respondeu. Agora é só escolher o dia."*

### Passo 5 — Escolher o dia — Storyboard, quadro 4

- **Planejamento:** escolher o dia que a mãe confirmou que pode, de preferência fora dos dias de fisioterapia.
- **Evento:** o calendário de novembro mostra os dias com vaga em destaque e com a palavra "Livre", e não apenas por cor; os dias são grandes o suficiente para o toque com uma mão **[P]** (HTA 2.2).
- **Ação:** toca na quinta-feira, dia 19, e escolhe o horário da manhã **[P]** (HTA 2.2; CTT 2.5).
- **Evento:** o dia e o horário ficam em destaque, e a data escolhida aparece por extenso **[P]**.
- **Avaliação:** *"Quinta de manhã a minha mãe pode, e não bate com a fisioterapia."*

### Passo 6 — Revisar e confirmar

- **Planejamento:** conferir se está tudo certo antes de confirmar, porque já errou toques em outros sites.
- **Evento:** a tela de revisão mostra posto, endereço, dia e horário, com um botão "Editar" ao lado de cada item **[P]** (HTA 3.1; CTT 3.1).
- **Ação:** confere os dados e toca em "Confirmar pré-agendamento" **[P]** (CTT 3.2).
- **Evento:** o site mostra uma mensagem de sucesso com o número de protocolo e informa que o comprovante foi enviado por e-mail e WhatsApp **[P]** (CTT 3.3).
- **Avaliação:** *"Tem até o número do protocolo. Agora sim."*

### Passo 7 — Receber o comprovante — Storyboard, quadro 5

- **Planejamento:** guardar o comprovante e avisar a mãe da data.
- **Evento:** em poucos segundos, chegam o e-mail e a mensagem no WhatsApp, com o protocolo, o resumo de cada etapa (posto, endereço, dia e horário), a lista de documentos a levar e as instruções para cancelar ou remarcar **[P]** (HTA 3.2; CTT 3.4).
- **Ação:** encaminha a mensagem do WhatsApp para a mãe.
- **Avaliação:** *"Consegui um meio de transporte para a minha consulta!"* Larissa deixa o celular carregando às 21h55, com a certeza de que o pré-agendamento ficou registrado e sabendo exatamente o que levar no dia.

---

## 7. Necessidades Atendidas pela Proposta

A Tabela 2 relaciona as necessidades da persona aos elementos da funcionalidade proposta que as atendem, aos momentos do cenário em que aparecem e aos nós correspondentes da TAR-02.

**Tabela 2** — Necessidades da persona atendidas pela funcionalidade proposta no Cenário 1

| Necessidade da persona | Como a proposta atende | Onde aparece | Nós da TAR-02 |
|---|---|---|---|
| Um caminho direto até o DF Acessível | Atalho "Agendar DF Acessível" na primeira tela da página inicial da Semob | Passo 1 | HTA 1.1; CTT 1.1 |
| Resolver tudo no mesmo site | Todo o fluxo acontece no site da Semob, sem troca de domínio | Passos 1 a 7 | HTA 0 |
| Linguagem simples e explicação do serviço | Página do serviço explica o pré-agendamento em uma frase e lista os documentos | Passo 2 | HTA 1.2; CTT 1.2 |
| Saber se tem direito (deficiência temporária) | Informação, logo no início, de que deficiência temporária ou permanente dá direito ao programa | Passo 2 | HTA 1.2; CTT 1.2 |
| Informações do local de atendimento | Lista de postos com endereço, recursos de acessibilidade e próxima data com vaga | Passo 3 | HTA 2.1; CTT 2.1 |
| Calendário fácil de usar e com texto, não só cor | Dias com vaga indicados por cor e pela palavra "Livre", com áreas de toque amplas | Passo 5 | HTA 2.2; CTT 2.5 |
| Confirmação imediata e por escrito | Revisão antes de confirmar, protocolo na tela e comprovante por e-mail e WhatsApp | Passos 6 e 7 | HTA 3.1 e 3.2; CTT 3.1 a 3.4 |
| Site leve, acessível e de uso com uma mão | Página inicial leve, botões grandes e telas de acordo com o eMAG/WCAG | Passos 1 a 5 | Mecanismos complementares do CTT |

*Fonte: Gabriel Melo.*

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
