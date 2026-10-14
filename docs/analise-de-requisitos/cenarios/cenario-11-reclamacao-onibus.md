# Cenário 11: Reclamação sobre ônibus que passou direto (Encontrabilidade e Registro na Ouvidoria)

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 13/10/2026 | 1.0 | Elaboração do cenário de problema do registro de reclamação sobre ônibus. | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | [Arthur Mariani](https://github.com/arthur-mariani) |

---

## 1. Caracterização Geral

**Autor:** [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa)

- **Persona:** [Cláudia Regina Santos](../personas/claudia-regina-santos.md) (persona primária)
- **Tipo:** Cenário de problema
- **Tarefas da persona cobertas:** Registrar reclamação sobre ônibus; acompanhar o andamento da reclamação.
- **Resumo:** De madrugada, o ônibus de Cláudia passa direto pela parada e ela chega atrasada ao plantão. À noite, em casa, ela tenta reclamar pelo celular a partir do site da Semob. Não encontra onde reclamar, é levada para outro site sem entender por quê, precisa criar uma conta, hesita entre "reclamação" e "denúncia" e descobre só no formulário que precisava do número do ônibus. Envia uma reclamação vaga e quase perde o protocolo.

> **Observação.** Os eventos de interface deste cenário seguem as hipóteses da [**TAR-08**](../analise-de-tarefas/tar-08-reclamacao-onibus.md) e devem ser ajustados após a validação navegando no site da Semob e no Participa-DF.

---

## 2. Ambiente ou Contexto

- **Quando e onde:** o problema ocorre às 05:25, na parada de ônibus em Ceilândia Norte. A tentativa de reclamação acontece às 19:40 do mesmo dia, em casa, depois do plantão.
- **Situação de deslocamento:** deslocamento para o plantão das 7h, de madrugada, quando a frequência da linha é baixa.
- **Dispositivo e conectividade:** smartphone Android intermediário, com internet Wi-Fi de casa.
- **Recursos à mão:** celular; nenhum registro do ocorrido além da própria memória (não anotou o número do ônibus).
- **Situação do serviço:** o site da Semob funciona normalmente; o registro de manifestações é feito na plataforma Participa-DF.

---

## 3. Atores

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Cláudia** | Ator principal (usuária) | Técnica de enfermagem, cansada após o plantão, competência digital intermediária, desconfia de sites que pedem muitos dados. Quer reclamar no canal oficial. |
| **Dona Lúcia (colega de plantão)** | Ator secundário | Sugere que Cláudia reclame "no site do governo", sem saber explicar onde. |
| **Larissa (filha)** | Ator secundário | Está fora de casa no momento; Cláudia pensa em esperá-la para pedir ajuda. |
| **Motorista do ônibus** | Ator secundário | Passa direto pela parada às 05:25. Não aparece na tentativa de reclamação, mas é o alvo dela. |

*Fonte: [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (2026).*

**Elementos do ambiente com que os atores interagem:** site da Semob (semob.df.gov.br), plataforma Participa-DF, parada de ônibus.

---

## 4. Objetivos

- **Objetivo principal:** registrar uma reclamação sobre o ônibus que passou direto e ter um comprovante disso.
- **Subobjetivos:**
  1. Encontrar onde reclamar.
  2. Informar o que aconteceu de forma que a reclamação seja levada a sério.
  3. Guardar um número para acompanhar a resposta.
- **Motivações:** atraso no plantão, recorrência do problema e sensação de injustiça.

---

## 5. Planejamento, Ações, Eventos e Avaliação

**Plano geral de Cláudia:** ao chegar em casa, entrar no site da Semob pelo celular, achar o botão de reclamar, contar o que aconteceu e pegar um número de protocolo, tudo em poucos minutos.

### Passo 0 — O ocorrido (05:25)

- **Planejamento:** *"O ônibus está vindo, vou sinalizar para ele parar."*
- **Ação:** Cláudia acena para o ônibus na parada.
- **Evento:** O ônibus passa direto, sem reduzir a velocidade. O próximo chega às 06:05.
- **Avaliação:** *"De novo! Agora vou chegar atrasada. Hoje eu vou reclamar."* Ela não pensa em anotar o número do ônibus, só lembra da linha pelo destino e do horário aproximado.

### Passo 1 — Procurar onde reclamar (19:40)

- **Planejamento:** *"A Semob cuida dos ônibus. Deve ter um botão de reclamar no site."*
- **Ação:** Pesquisa "semob df" no Google, entra no site e procura na página inicial uma opção como "reclamar" ou "fale conosco".
- **Evento:** A página inicial mostra notícias e um menu com vários itens. Não há um acesso com a palavra "reclamar". Depois de abrir alguns itens, ela encontra a página de **Ouvidoria**.
- **Avaliação:** *"Ouvidoria... é aqui que reclama? Acho que sim, mas não tenho certeza."* **(Problema: vocabulário institucional e falta de acesso direto — [TAR-08](../analise-de-tarefas/tar-08-reclamacao-onibus.md), objetivo 2.2)**

### Passo 2 — Ser levada para outro site

- **Planejamento:** *"Vou clicar onde fala de registrar manifestação."*
- **Ação:** Toca no link indicado na página da Ouvidoria.
- **Evento:** O navegador abre o Participa-DF, com outro visual, outro logotipo e um pedido de login.
- **Avaliação:** *"Saí da Semob. Será que é golpe? Será que cliquei errado?"* Ela volta para a página anterior, confere o link e só então continua. **(Problema: mudança de site sem aviso; falha de consistência e de visibilidade do estado do sistema — [TAR-08](../analise-de-tarefas/tar-08-reclamacao-onibus.md), operação 2.3)**

### Passo 3 — Criar uma conta

- **Planejamento:** *"Se é o jeito, vou fazer logo."*
- **Ação:** Escolhe criar conta e preenche nome, CPF, senha, e-mail, sexo e data de nascimento.
- **Evento:** O cadastro dá erro porque ela digitou um número do CPF errado no teclado pequeno do celular. Ela corrige e conclui o cadastro.
- **Avaliação:** *"Tudo isso só para reclamar de um ônibus? Quase desisti."* **(Problema: barreira de cadastro e erro baseado em habilidades — [TAR-08](../analise-de-tarefas/tar-08-reclamacao-onibus.md), objetivo 3.2 e seção 2.4)**

### Passo 4 — Escolher o tipo de manifestação

- **Planejamento:** *"Ele passou direto, isso é errado. Acho que é denúncia."*
- **Ação:** Lê as opções (reclamação, denúncia, sugestão, elogio, solicitação) e fica em dúvida entre reclamação e denúncia.
- **Evento:** Nada na tela explica a diferença entre os tipos.
- **Avaliação:** *"Vou de reclamação, que é o que eu quero fazer, mas não sei se está certo."* **(Problema: categorias que não correspondem ao modelo mental da usuária; risco de erro baseado em regras — [TAR-08](../analise-de-tarefas/tar-08-reclamacao-onibus.md), operação 4.1)**

### Passo 5 — Descrever o ocorrido

- **Planejamento:** *"Agora é só contar o que aconteceu."*
- **Ação:** Indica o órgão e começa a escrever a descrição no campo de texto.
- **Evento:** Ao procurar orientações, percebe que, para a reclamação ser apurada, seria importante informar o número do ônibus, que ela não anotou. Ela também não lembra o número completo da linha.
- **Avaliação:** *"Se eu soubesse, tinha anotado. Agora vai ficar faltando."* Escreve apenas: *"O ônibus que vai para a Rodoviária passou direto na parada hoje de manhã cedo."* **(Problema: requisitos não informados antes da tarefa; reclamação pouco apurável — [TAR-08](../analise-de-tarefas/tar-08-reclamacao-onibus.md), objetivo 1 e operação 4.3)**

### Passo 6 — Enviar e guardar o protocolo

- **Planejamento:** *"Pronto, vou enviar e acabar logo com isso."*
- **Ação:** Toca em enviar.
- **Evento:** A tela de confirmação mostra o número de protocolo. Cansada, ela fecha o navegador sem anotar o número.
- **Avaliação:** *"Ih, não anotei o número."* No dia seguinte, precisa pedir ajuda à filha para entrar de novo no Participa-DF e encontrar o protocolo. **(Problema: falta de apoio para guardar o protocolo — [TAR-08](../analise-de-tarefas/tar-08-reclamacao-onibus.md), operação 5.1)**

### Desfecho

Cláudia conseguiu registrar a reclamação, mas levou cerca de 25 minutos, duvidou duas vezes se estava no lugar certo e enviou uma descrição sem os dados necessários para a apuração. Ela diz à colega Dona Lúcia que "da próxima vez nem vai tentar".

---

## 6. Requisitos Elicitados

| Requisito | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| Acesso direto na página inicial da Semob com o vocabulário do usuário ("Reclamar de um ônibus") | Passo 1 | Encontrar onde reclamar com palavras que ela usa |
| Aviso claro, antes do redirecionamento, de que a reclamação é registrada no Participa-DF | Passo 2 | Entender quando e por que muda de site |
| Informação prévia sobre o cadastro necessário e o tempo estimado da tarefa | Passo 3 | Processo curto, sem cadastro longo |
| Orientação sobre qual tipo de manifestação e qual órgão escolher | Passo 4 | Saber qual opção escolher |
| Checklist do que ter em mãos (linha, número do ônibus, data, horário, local), incluindo onde encontrar o número do ônibus | Passos 0 e 5 | Saber antes o que vai ser pedido |
| Modelo ou resumo estruturado para a descrição do ocorrido | Passo 5 | Saber antes o que vai ser pedido |
| Destaque e lembrete para guardar o protocolo (copiar ou compartilhar) | Passo 6 | Comprovante fácil de guardar |

*Fonte: [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) (2026).*

> Esses requisitos correspondem à proposta de melhoria da [**TAR-08, seção 4**](../analise-de-tarefas/tar-08-reclamacao-onibus.md#4-proposta-de-melhoria-no-site-da-semob) (assistente "Reclamar de um ônibus" no site da Semob).

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.