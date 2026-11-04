# Cenário 1: Pré-agendamento no Programa DF Acessível: do site da Semob à viagem até a fisioterapia

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Elaboração detalhada do Cenário 1 (Larissa Ferreira Lima). | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 27/09/2026 | 1.1 | Modularização em artefato próprio com integração às personas e visão geral. | [Carlos Costa](https://github.com/carloshfgit) | [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 11/10/2026 | 2.0 | Reescrita do cenário para a nova versão da persona Larissa (mobilidade reduzida temporária), aplicando a tarefa TAR-02 (pré-agendamento no DF Acessível). | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 11/10/2026 | 2.1 | Renomeação do arquivo do cenário para cenario-1-pre-agendamento-df-acessivel. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |

---

## 1. Introdução

Este cenário de concepção descreve Larissa Ferreira Lima realizando o pré-agendamento no Programa DF Acessível com a **nova funcionalidade proposta** para o site da Semob, para conseguir transporte adaptado até a fisioterapia depois de uma fratura. Atualmente, o site da Semob não oferece esse serviço. A situação foi construída a partir da Análise de Tarefas da [TAR-02](../analise-de-tarefas/tar-02-df-acessivel.md) para mostrar como um atalho na página inicial, explicações claras sobre o serviço, um fluxo de três etapas (postos, dia e documentos) e um comprovante imediato permitem que uma pessoa com mobilidade reduzida garanta o transporte de que precisa, contribuindo para a especificação de requisitos de IHC.

## 2. Caracterização Geral

**Autor: Gabriel Melo**

- **Persona:** [Larissa Ferreira Lima](../personas/larissa-ferreira-lima.md) (persona primária)
- **Tipo:** Cenário de concepção (projetado) — situação futura, com a funcionalidade proposta implantada no site da Semob
- **Tarefa coberta:** [TAR-02 — Pré-agendamento no Programa DF Acessível](../analise-de-tarefas/tar-02-df-acessivel.md) (HTA e CTT)

**Resumo:** numa segunda-feira à noite, em casa, Larissa precisa garantir transporte adaptado para a fisioterapia. Ela abre o site da Semob e encontra, logo na página inicial, o atalho "Agendar DF Acessível". O pré-agendamento tem três etapas: Larissa escolhe o posto de embarque mais próximo de casa e o de desembarque mais próximo da clínica, escolhe o dia depois de conferir a agenda com a mãe e envia, pelo celular, o laudo e o comprovante de residência. Em seguida, recebe o comprovante por e-mail e WhatsApp.

---

## 3. Ambiente ou Contexto

- **Quando e onde:** segunda-feira, fim de setembro, 21h40, no quarto de Larissa, em Ceilândia. A perna esquerda está imobilizada e elevada sobre travesseiros; a cadeira de rodas está ao lado da cama. É a hora em que ela costuma resolver as pendências do dia, depois de trabalhar e acompanhar as aulas.
- **Situação de saúde e de deslocamento:** há cerca de três semanas, Larissa fraturou o tornozelo e a tíbia esquerda e passou por cirurgia. Ficará aproximadamente 12 semanas sem apoiar o pé e depois seguirá com muletas e fisioterapia. A fisioterapia será às segundas, quartas e sextas, em uma clínica de reabilitação em Taguatinga, e há consultas ortopédicas quinzenais no Plano Piloto. Ônibus e metrô comuns deixaram de ser uma opção, e corrida de aplicativo não cabe no orçamento.
- **Dispositivo e conectividade:** celular Android com 38% de bateria, plano de dados limitado e wi-fi doméstico instável. Ela usa o aparelho deitada, com uma mão. O notebook da casa está com o irmão, que faz trabalho escolar.
- **Recursos à mão:** laudo médico e conta de luz da casa (fotos na galeria do celular), site da Semob, agenda da fisioterapia no celular e conversa com a mãe pelo WhatsApp.
- **Regras do programa:** o DF Acessível atende pessoas com deficiência ou patologia que causa redução severa de mobilidade, **temporária ou permanente**, e exige comprovação da condição por laudo de profissional de saúde, comprovação de residência no DF, renda familiar per capita inferior a dois salários mínimos e cadeira de rodas própria compatível com as normas da ABNT; as viagens são agendadas com antecedência mínima de 30 dias. Na funcionalidade proposta, o veículo adaptado não busca o passageiro em casa: o embarque e o desembarque acontecem em **postos do programa**, pontos fixos com rampa, área coberta e vaga para o veículo, escolhidos pelo passageiro perto de casa e perto do compromisso. Larissa atende a todos os requisitos, e a funcionalidade proposta informa isso logo no início.
- **Situação atual (antes da proposta):** hoje, o site da Semob não oferece o pré-agendamento do DF Acessível nem um atalho para ele. Este cenário descreve como seria a mesma noite de Larissa com a funcionalidade proposta.

---

## 4. Atores

A Tabela 1 identifica os participantes do cenário e esclarece como suas características e papéis influenciam o desenvolvimento da situação descrita.

**Tabela 1** — Atores envolvidos no Cenário 1

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Larissa Ferreira Lima** | Ator principal (usuária) | Mulher, 23 anos, com deficiência temporária de mobilidade. Autônoma e acostumada a resolver tudo pelo celular. Cansada e com dor ao fim do dia, usa o aparelho com uma mão e tem dificuldade com toques pequenos |
| **Sônia (mãe)** | Ator secundário | Auxiliar de serviços gerais. É a acompanhante natural de Larissa (inclusive até o posto de embarque) e só pode ir em alguns dias; responde às mensagens quando intervalos do trabalho permitem |
| **Pedro (irmão)** | Ator secundário | Usa o notebook da casa, o que faz Larissa resolver tudo pelo celular |

*Fonte: Gabriel Melo.*

**Elementos do ambiente com que os atores interagem:** site da Semob (página inicial com o atalho "Agendar DF Acessível" proposto), navegador do celular, galeria de fotos (laudo e comprovante de residência), WhatsApp e e-mail.

---

## 5. Objetivos

- **Objetivo principal:** pré-agendar a viagem em transporte adaptado do Programa DF Acessível até a fisioterapia.
- **Subobjetivos (as três etapas do pré-agendamento):**
  1. Escolher os postos: o de embarque, perto de casa, e o de desembarque, perto da clínica.
  2. Escolher o dia da viagem, de acordo com a agenda dela e a da mãe.
  3. Enviar o laudo do profissional de saúde e o comprovante de residência e concluir o pré-agendamento.
- **Motivações:** garantir o transporte para as sessões de fisioterapia, que não podem ser adiadas sem prejudicar a recuperação; evitar gastos com aplicativo; e deixar de depender da mãe para cada deslocamento.

---

## 6. Planejamento, Ações, Eventos e Avaliação

**Como ler cada passo:** Planejamento = o que Larissa pensa em fazer (atividade mental); Ação = o que ela faz de forma observável; Evento = o que acontece em resposta (site, sistema, ambiente ou outras pessoas); Avaliação = como ela interpreta o que viu (atividade mental). Os eventos assinalados com **[P]** correspondem à funcionalidade proposta e modelada na Análise de Tarefas ([TAR-02](../analise-de-tarefas/tar-02-df-acessivel.md): HTA e CTT); os demais são hipotéticos.

**Plano geral de Larissa:** (1) encontrar o agendamento do DF Acessível no site da Semob; (2) escolher onde embarcar e onde desembarcar; (3) escolher o dia; (4) enviar os documentos e conferir se o pré-agendamento ficou registrado.

### Passo 1 — Abrir o site da Semob e encontrar o atalho (21h40) — Storyboard, quadros 1 e 2

- **Planejamento:** *"Preciso marcar o transporte da fisioterapia. Deve ter algo no site da Semob."* Como não sabe o endereço de cabeça, decide chegar pelo Google.
- **Ação:** abre o navegador, pesquisa "semob transporte cadeirante agendar" e toca no resultado do site da Semob.
- **Evento:** a página inicial abre leve, mesmo com a conexão lenta, e mostra o atalho "Agendar DF Acessível", com o símbolo de acessibilidade **[P]**.
- **Ação:** toca em "Agendar DF Acessível".
- **Evento:** sem sair do site da Semob, abre a página do serviço. Em uma frase, ela explica que o pré-agendamento reserva a viagem em transporte adaptado, com embarque em um posto perto de casa e desembarque em um posto perto do compromisso, informa que deficiência temporária ou permanente dá direito e mostra as três etapas: postos, dia e documentos **[P]**.
- **Avaliação:** *"É isso! E eu tenho direito. São só três passos."*

### Passo 2 — Etapa 1: escolher os postos — Storyboard, quadro 3

- **Planejamento:** embarcar no posto mais perto de casa, para a mãe conseguir levá-la até lá, e desembarcar perto da clínica.
- **Evento:** o site mostra a lista de postos de embarque no formato de mapa, cada um com endereço, distância e recursos de acessibilidade (rampa, área coberta, vaga para o veículo adaptado) **[P]** (HTA 1.1; CTT 1.1).
- **Ação:** toca no posto de Ceilândia, o primeiro da lista **[P]** (CTT 1.2).
- **Evento:** o site mostra a lista de postos de desembarque, com as mesmas informações **[P]** (CTT 1.3).
- **Ação:** toca no posto de Taguatinga Centro, o mais próximo da clínica **[P]** (HTA 1.2; CTT 1.4).
- **Avaliação:** *"Ceilândia é perto de casa e o de Taguatinga fica a uma quadra da clínica."*

### Passo 3 — Etapa 2: escolher o dia — Storyboard, quadro 4

- **Planejamento:** escolher um dia de fisioterapia em que a mãe possa levá-la até o posto.
- **Evento:** o site mostra o calendário de novembro, com os dias grandes o suficiente para o toque com uma mão **[P]** (HTA 2; CTT 2.1).
- **Ação:** com o calendário aberto, confere as sessões da fisioterapia na agenda do celular e pergunta à mãe, pelo WhatsApp, em que dia ela está de folga (CTT 2.2, em paralelo à exibição do calendário).
- **Evento:** a mãe responde que pode na sexta-feira.
- **Ação:** toca na sexta-feira, dia 20 **[P]** (HTA 2; CTT 2.3).
- **Evento:** o dia fica em destaque, e a data escolhida aparece por extenso **[P]**.
- **Avaliação:** *"Sexta é dia de fisioterapia, e a minha mãe está de folga."*

### Passo 4 — Etapa 3: enviar os documentos e concluir

- **Planejamento:** mandar os pdfs que estão nos arquivos do celular, sem precisar ir a lugar nenhum.
- **Evento:** o site mostra dois campos, "Laudo do profissional de saúde" e "Comprovante de residência", cada um com o botão "Enviar arquivo" **[P]** (HTA 3).
- **Ação:** escolhe nos arquivos o pdf do laudo e o da conta de luz **[P]** (HTA 3.1 e 3.2; CTT 3.1 e 3.2).
- **Evento:** cada documento aparece com o nome do arquivo e um ✓ "Enviado" **[P]**.
- **Ação:** toca em "Concluir pré-agendamento" **[P]** (HTA 3.3; CTT 3.3).
- **Evento:** o site mostra uma mensagem de sucesso com o número de protocolo e o resumo (postos, endereços e dia) e informa que o comprovante foi enviado por e-mail e WhatsApp **[P]** (CTT 3.4).
- **Avaliação:** *"Tem até o número do protocolo. Agora sim."*

### Passo 5 — Receber o comprovante — Storyboard, quadro 5

- **Planejamento:** guardar o comprovante e avisar a mãe da data.
- **Evento:** em poucos segundos, chegam o e-mail e a mensagem no WhatsApp, com o protocolo, os postos de embarque e de desembarque, os endereços e o dia **[P]** (CTT 3.5).
- **Ação:** encaminha a mensagem do WhatsApp para a mãe.
- **Avaliação:** *"Consegui um meio de transporte para a minha consulta!"* Larissa deixa o celular carregando às 21h55, com a certeza de que o pré-agendamento ficou registrado e sabendo exatamente onde embarcar e onde desembarcar.

---

## 7. Necessidades Atendidas pela Proposta

A Tabela 2 relaciona as necessidades da persona aos elementos da funcionalidade proposta que as atendem, aos momentos do cenário em que aparecem e aos nós correspondentes da TAR-02.

**Tabela 2** — Necessidades da persona atendidas pela funcionalidade proposta no Cenário 1

| Necessidade da persona | Como a proposta atende | Onde aparece | Nós da TAR-02 |
|---|---|---|---|
| Um caminho direto até o DF Acessível | Atalho "Agendar DF Acessível" na página inicial da Semob | Passo 1 | Acesso ao serviço |
| Resolver tudo no mesmo site | Todo o fluxo acontece no site da Semob, sem troca de domínio | Passos 1 a 5 | HTA 0 |
| Linguagem simples e fluxo curto | Página do serviço explica o pré-agendamento em uma frase e mostra as três etapas | Passo 1 | HTA 0 |
| Embarcar e desembarcar perto de onde precisa | Listas de postos de embarque e de desembarque com endereço, distância e recursos de acessibilidade | Passo 2 | HTA 1; CTT 1.1 a 1.4 |
| Calendário fácil de usar | Dias grandes para o toque com uma mão e data escolhida por extenso | Passo 3 | HTA 2; CTT 2.1 a 2.3 |
| Resolver tudo online, sem ir a um balcão | Envio do laudo e do comprovante de residência pelo celular | Passo 4 | HTA 3; CTT 3.1 a 3.3 |
| Confirmação imediata e por escrito | Protocolo na tela e comprovante por e-mail e WhatsApp | Passos 4 e 5 | CTT 3.4 e 3.5 |
| Site leve, acessível e de uso com uma mão | Página leve, botões grandes e telas de acordo com o eMAG/WCAG | Passos 1 a 4 | Mecanismos complementares do CTT |

*Fonte: Gabriel Melo.*

---

## 8. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
