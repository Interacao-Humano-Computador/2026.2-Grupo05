# Planejamento da Avaliação do Protótipo de Papel (TAR-07)

## Histórico de Versão

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de ferramenta de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 25/10/2026 | `1.0` | Criação do planejamento da avaliação formativa do protótipo de papel da TAR-07, estruturado pelo framework DECIDE. | [Arthur Mariani](https://github.com/arthur-mariani) | [Carlos Henrique](https://github.com/carloshfgit) | Google Gemini - apoio à estruturação em Markdown e revisão textual. |

---

## 1. Introdução e escopo

Este documento planeja a avaliação formativa de um **protótipo de papel** para a [TAR-07 — Resolver indisponibilidade de crédito de Vale-Transporte](../../../../analise-de-requisitos/analise-de-tarefas/tar-07-credito-vale-transporte.md). O protótipo representa uma proposta de orientação no portal da SEMOB-DF para a situação descrita no [Cenário 4](../../../../analise-de-requisitos/cenarios/cenario-4-credito-vale-transporte.md), vivida pela persona [Maria Eduarda Santos](../../../../analise-de-requisitos/personas/maria-eduarda-santos.md).

O foco não é confirmar procedimentos operacionais do BRB Mobilidade, da SEMOB-DF ou do empregador. O foco é verificar se a interface proposta ajuda uma passageira trabalhadora a compreender a situação, identificar o responsável apropriado e encontrar um próximo passo sem precisar decifrar linguagem institucional nem navegar entre vários canais.

Conforme Barbosa e Silva (2010, Capítulo 10, Seção 10.2.3), a prototipação em papel simula o uso de um design com potenciais usuários para encontrar problemas de usabilidade antes de haver um sistema executável. Portanto, o resultado esperado é uma lista priorizada de problemas e recomendações de reprojeto, e não uma validação conclusiva do serviço final.

---

## 2. Fundamentação: DECIDE e prototipação em papel

O planejamento aplica o framework **DECIDE** de forma iterativa: **D**eterminar os objetivos; **E**xplorar as perguntas; **C**hoose (escolher) os métodos; **I**dentificar e administrar questões práticas; **D**ecidir como lidar com questões éticas; e **E**valuate (avaliar), interpretar e apresentar os dados. No framework, as etapas são relacionadas: uma alteração de escopo, recursos ou participantes exige reexaminar as demais decisões (Barbosa; Silva, 2010, p. 312-313).

A escolha da prototipação em papel também atende às atividades prescritas no livro: definir tarefas e participantes, criar telas e peças móveis, executar teste-piloto, observar cada participante, listar problemas, refinar o que for simples e consolidar correções por gravidade e frequência (Barbosa; Silva, 2010, p. 358-361).

---

## 3. D — Determinar os objetivos da avaliação

### 3.1 Objetivo geral

Avaliar se o fluxo em papel permite que uma usuária com perfil compatível com Maria Eduarda encontre e compreenda uma orientação para o crédito de Vale-Transporte indisponível, sob o contexto de pressa, orçamento restrito, conexão móvel limitada e uso predominante do celular.

### 3.2 Objetivos específicos

1. Verificar se a participante reconhece que o problema pode ser investigado sem concluir antecipadamente quem é o responsável.
2. Avaliar se os estados **enviado**, **em processamento**, **disponível** e **precisa de atualização/confirmação** são distintos, compreensíveis e acompanhados de uma ação pertinente.
3. Verificar se rótulos, ordem das informações e controles permitem encontrar a orientação sem apoio verbal do avaliador.
4. Avaliar se o fluxo comunica os limites entre empregador, BRB Mobilidade e SEMOB-DF de modo simples, sem encaminhamentos vagos ou culpabilização da usuária.
5. Identificar obstáculos de leitura, navegação, entendimento de feedback e recuperação de erro que possam prejudicar a tarefa.
6. Coletar sugestões para o reprojeto antes da construção de um protótipo de maior fidelidade.

### 3.3 Critério de sucesso da tarefa simulada

Ao final do cenário, considera-se que a tarefa foi concluída quando a participante consegue dizer, com suas próprias palavras: **(a)** qual informação precisa confirmar; **(b)** qual é o próximo passo indicado; e **(c)** qual canal deve procurar se esse passo não resolver a situação. A conclusão não depende de a participante saber de memória o procedimento real de uma instituição.

---

## 4. E — Explorar as perguntas a serem respondidas

As perguntas serão respondidas por observação da simulação, verbalizações espontâneas e entrevista pós-teste. O avaliador não deverá revelar a resposta esperada nem explicar o conteúdo das telas durante a execução.

| ID | Foco | Pergunta de avaliação | Evidência a registrar |
| :---: | :--- | :--- | :--- |
| P01 | Compreensão inicial | A participante entende o problema apresentado como crédito indisponível e sabe por onde começar? | Primeira ação, interpretação da mensagem e necessidade de ajuda. |
| P02 | Encontrabilidade | Ela localiza o caminho para “crédito não disponível” usando vocabulário cotidiano? | Termos procurados, controles escolhidos, hesitações e retornos. |
| P03 | Estados do crédito | Ela diferencia crédito enviado, em processamento, disponível e pendente de ação? | Explicação dada pela participante e estados confundidos. |
| P04 | Próximo passo | Após receber a orientação, ela sabe o que fazer agora e o que fazer depois? | Ação indicada, dúvidas, leitura do feedback e interpretação do prazo. |
| P05 | Responsabilidades | A tela esclarece quando consultar empregador, BRB Mobilidade ou SEMOB-DF? | Instituição escolhida, justificativa e ambiguidades. |
| P06 | Linguagem e legibilidade | Rótulos, textos, ícones e botões são compreensíveis sem explicação? | Palavras não compreendidas, elementos ignorados e sugestões de redação. |
| P07 | Recuperação | Diante de uma resposta inconclusiva, ela encontra uma alternativa? | Caminho de retorno, pedido de ajuda e ação escolhida. |
| P08 | Adequação ao contexto | O fluxo é compatível com alguém com pouco tempo, internet limitada e necessidade de chegar ao trabalho? | Etapas excessivas, informações faltantes e alternativas sugeridas. |

---

## 5. C — Escolher os métodos de avaliação

### 5.1 Método principal

Será utilizada **prototipação em papel com observação de uso**, em sessão individual presencial. A participante indicará ações apontando, tocando ou dizendo o que faria; um avaliador desempenhará o papel de “computador” e trocará as peças de papel conforme as ações escolhidas. Um segundo avaliador observará e registrará a sessão. Essa divisão é necessária porque o livro recomenda que a coleta seja realizada por pelo menos dois avaliadores: um simula o sistema e outro observa a experiência de uso (Barbosa; Silva, 2010, p. 360).

O pensamento em voz alta será apenas convidado, nunca exigido. Após a simulação, será feita uma entrevista curta para esclarecer decisões observadas e coletar sugestões.

### 5.2 Tarefas propostas

1. **Encontrar orientação:** “Você tentou usar seu cartão para ir ao trabalho e recebeu a mensagem de saldo insuficiente, embora o RH tenha informado que enviou o Vale-Transporte. Usando esta interface, descubra como verificar o que pode estar acontecendo.”
2. **Interpretar e agir:** “A interface informa que o crédito foi enviado, mas ainda precisa de uma confirmação ou atualização. Mostre o que você faria agora e diga o que espera que aconteça.”
3. **Recuperar-se de uma incerteza:** “Você seguiu a orientação, mas o crédito continua indisponível. Encontre o canal ou a alternativa que usaria para continuar resolvendo o problema.”

### 5.3 Materiais do protótipo a preparar

| Elemento | Finalidade na simulação |
| :--- | :--- |
| Tela inicial móvel e acesso à ajuda | Avaliar a encontrabilidade do serviço a partir de uma dúvida cotidiana. |
| Busca, atalho ou menu “Crédito/Cartão com problema” | Avaliar vocabulário, rótulos e caminho inicial. |
| Tela de diagnóstico orientado | Simular perguntas ou escolhas que diferenciem as situações de crédito. |
| Cartões de estado do crédito | Mostrar enviado, em processamento, disponível e necessidade de atualização/confirmação. |
| Tela de próximo passo e canais | Comunicar ação, responsável, prazo quando houver e canal de continuidade. |
| Peças de exceção | Simular informação indisponível, resultado inconclusivo, retorno e atendimento alternativo. |
| Cartões de tarefa, TCLE e ficha de observação | Conduzir a sessão e registrar evidências de maneira consistente. |

---

## 6. I — Identificar e administrar as questões práticas

### 6.1 Participante e recrutamento

Será recrutada **uma participante** maior de 18 anos, trabalhadora que utiliza ônibus frequentemente no Distrito Federal, usuária de cartão de transporte e, preferencialmente, de Vale-Transporte; com familiaridade cotidiana com smartphone e experiência ou entendimento de situações de saldo/crédito indisponível. A adesão será voluntária, sem coleta de saldo, número de cartão, empregador ou outro dado desnecessário.

Uma participante é adequada ao escopo individual e formativo desta iteração, mas não permite generalização. Se a sessão revelar problemas críticos, uma nova rodada deverá ser planejada com o protótipo revisado e mais participantes.

### 6.2 Papéis da equipe

| Papel | Responsabilidade |
| :--- | :--- |
| Condutor / “computador” | Apresentar o material, trocar as peças de papel conforme a ação da participante e não fornecer explicações que deveriam estar na interface. |
| Observador / anotador | Registrar ações, erros, hesitações, verbalizações, tempo aproximado, tarefas concluídas e sugestões. |
| Participante | Realizar as tarefas simuladas e, se desejar, verbalizar expectativas e dificuldades. |

O autor do protótipo não deverá conduzir a sessão; atuará como observador para reduzir a chance de defender o design ou induzir respostas.

### 6.3 Ambiente, duração e equipamentos

A sessão ocorrerá em sala tranquila com mesa e cadeiras. A gravação de áudio e, se autorizada, das mãos e do protótipo sobre a mesa poderá complementar as anotações. Não haverá gravação facial como padrão.

| Etapa | Tempo estimado |
| :--- | :---: |
| Recepção, explicação e TCLE | 7 min |
| Apresentação da mecânica do protótipo | 3 min |
| Execução das três tarefas | 15 a 20 min |
| Entrevista pós-teste | 8 min |
| Encerramento | 2 min |
| **Total** | **35 a 40 min** |

Antes da sessão definitiva será realizado um **teste-piloto** com alguém da equipe que não participe como usuária dos resultados. O piloto verificará clareza do roteiro, completude das peças, ritmo do “computador”, qualidade do registro e duração. Seus dados serão usados apenas para ajustar o procedimento e não integrarão a análise.

---

## 7. D — Decidir como lidar com questões éticas

1. A participação começará somente após apresentação e aceite do [TCLE](../../../../assets/PDFs/TCLE_Pesquisa_Transporte.pdf), incluindo objetivo, procedimentos, duração, dados coletados e uso acadêmico.
2. A participante será lembrada de que o objeto de avaliação é o protótipo, não sua capacidade de usar tecnologia. Ela poderá pausar, pular uma tarefa ou desistir sem justificativa e sem prejuízo.
3. A gravação será opcional e dependerá de autorização específica. Se não houver consentimento, a equipe utilizará exclusivamente as anotações.
4. O relato usará um identificador como `P01`; não registrará nome, empregador, número de cartão, saldo ou outros dados capazes de identificar a participante.
5. Perguntas e reações do avaliador deverão permanecer neutras. Dúvidas sobre procedimentos institucionais serão anotadas para verificação posterior em fonte oficial.

---

## 8. E — Avaliar, interpretar e apresentar os dados

Após a sessão, os dois avaliadores confrontarão suas anotações e, quando houver autorização, consultarão a gravação para completar o registro. Cada achado será descrito com tarefa, evidência observada, interpretação, impacto, frequência observada e recomendação de correção.

| Classificação | Critério |
| :--- | :--- |
| Concluída sem apoio | A participante atinge o objetivo e explica o resultado sem orientação do avaliador. |
| Concluída com dificuldade | A participante termina, mas apresenta hesitação, caminho improdutivo, interpretação parcial ou ajuda não planejada. |
| Não concluída | A participante não encontra ou não compreende um caminho suficiente para realizar a tarefa. |
| Problema de alta prioridade | Impede a tarefa, induz ação inadequada, obscurece o responsável ou pode aumentar custo/atraso para a usuária. |
| Problema de média prioridade | Provoca esforço, atraso, ambiguidade ou risco de erro recuperável. |
| Problema de baixa prioridade | Afeta entendimento ou fluidez, mas não compromete a tarefa no cenário avaliado. |

Problemas simples, como rótulo, ordem de uma informação ou posição de botão, poderão ser redesenhados em papel entre rodadas, registrando-se a alteração. Problemas que exijam mudança do modelo de interação serão consolidados como recomendações para reprojeto.

### 8.1 Limitações e validade

Os resultados serão interpretados como evidência exploratória de uma avaliação de baixa fidelidade. A interface simulada, o ambiente controlado e a quantidade reduzida de participantes limitam a generalização e não reproduzem integralmente o contexto de Maria Eduarda em uma parada de ônibus. O relato distinguirá observações, interpretações, sugestões da participante e fatos institucionais confirmados.

### 8.2 Estrutura do relato posterior

O relato dos resultados deverá apresentar objetivos e escopo; perfil anonimizado da participante; descrição do método e do protótipo; tarefas; evidências coletadas; problemas por prioridade; partes que funcionaram bem; limitações; alterações feitas no papel; e recomendações para a próxima iteração.

---

## 9. Referências bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 9, Seção 9.8, p. 312-313; Capítulo 10, Seção 10.2.3, p. 358-361.

---

**Autor:** [Arthur Mariani](https://github.com/arthur-mariani)  
**Revisor:** [Carlos Henrique](https://github.com/carloshfgit)
