# Cenários de Uso: Motoristas de Ônibus do STPC/DF (Contexto SEMOB-DF)

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Elaboração inicial dos cenários de uso a partir do perfil empírico do motorista (`MOT-01`) e da persona Valdir Soares, fundamentada na literatura clássica de IHC e Design Baseado em Cenários (Barbosa e Silva, 2010; Carroll, 2000; Rosson e Carroll, 2002; Cooper et al., 2007). | [Carlos Costa](https://github.com/carloshfgit) | [Arthur Mariani](https://github.com/arthur-mariani) e [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 27/09/2026 | 1.1 | Integração formal ao repositório MkDocs do projeto com padronização hipertextual e rastreabilidade bidirecional com personas e perfis. | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas](https://github.com/IgorDARAUJO) |

---

## 1. Introdução e Fundamentação Metodológica

Os **Cenários de Uso** constituem um dos artefatos mais expressivos e humanizados do design de interação em **Interação Humano-Computador (IHC)**. Trata-se de narrativas ricas e contextuais que descrevem pessoas reais — representadas por personas — empenhadas em realizar atividades práticas para alcançar objetivos concretos dentro de determinados ambientes físicos e temporais (Barbosa e Silva, 2010, pp. 172–180; Carroll, 2000).

O presente documento consolida os cenários de interação focados no ecossistema de informações e serviços da **Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)**, tendo como protagonista a persona **[Valdir Soares ("Seu Valdir")](../personas/valdir-soares.md)**, motorista de ônibus urbano do Sistema de Transporte Público Coletivo do Distrito Federal (STPC/DF), modelada a partir dos dados empíricos de campo consolidados no [Perfil de Usuário: Motoristas de Ônibus](../perfis-de-usuario/perfil-motorista.md) e na [Entrevista com Motorista](../entrevistas.md#41-entrevista-01-potencial-usuario-do-semob-df-motorista-de-onibus).

```
                      ESTRUTURA CONSTITUTIVA DE UM CENÁRIO DE IHC
               (Barbosa e Silva, 2010, p. 174; Rosson e Carroll, 2002; Carroll, 2000)
+----------------------------------------------------------------------------------------+
| 1. Título e Escopo        | Designação clara e descritiva da atividade e objetivo.      |
| 2. Atores                 | Persona envolvida, papéis sociais e conhecimentos prévios.  |
| 3. Ambiente / Contexto    | Local físico, iluminação, ruídos, pressão de tempo, rede.   |
| 4. Objetivos e Metas      | O que o ator deseja alcançar (metas de experiência e fim).  |
| 5. Planejamento           | Raciocínio, modelo mental e hipóteses do ator.              |
| 6. Ações e Eventos        | Narrativa das ações do ator e respostas do sistema/ambiente.|
| 7. Obstáculos e Desafios  | Atritos, inconsistências de dados ou limitações operacionais.|
| 8. Resultados e Desfecho  | Conclusão da atividade, sentimentos e impactos na rotina.   |
| 9. Requisitos Derivados   | Implicações diretas para a engenharia de usabilidade e IHC. |
+----------------------------------------------------------------------------------------+
```

### 1.1 O Papel dos Cenários no Design Dirigido a Metas (*Goal-Directed Design*)
Conforme ensinam Cooper, Reimann e Cronin (2007, pp. 109–124) e Rosson e Carroll (2002), os cenários desempenham um papel crítico ao transpor a persona estática para a dinâmica fluida da vida cotidiana. Em vez de focar prematuramente em detalhes computacionais (como botões e códigos de banco de dados), os cenários priorizam a **jornada cognitiva do usuário**, revelando:
1. **O contexto real de uso:** a pressão do trânsito na capital federal, a instabilidade da conexão móvel nas vias e a escassez de tempo entre viagens.
2. **A distinção entre Metas e Tarefas:** demonstrando que o motorista não busca "acessar uma página web", mas sim obter **previsibilidade, segurança e ausência de conflitos com os cidadãos** (Cooper et al., 2007, p. 88).
3. **A validação da persona em múltiplos papéis:** tanto na condição de **Persona Atendida (*Served Persona*)** no portal web atual quanto como **Persona Primária (*Primary Persona*)** em um canal móvel dedicado de apoio aos operadores do trânsito.

---

## 2. Cenário 1: O Conflito na Catraca Gerado por Inconsistência de Dados Públicos

> **Classificação Metodológica:** Cenário de Problema / Cenário de Contexto Atual (*Problem Scenario / Context Scenario*, Rosson e Carroll, 2002, p. 28; Cooper et al., 2007, p. 110).  
> **Foco Analítico:** Ilustração empírica da condição de **Persona Atendida (*Served Persona*)** no Portal Web SEMOB-DF.

### 2.1 Elementos Constitutivos

- **Título:** Divergência de horários entre o portal da SEMOB e a ordem de serviço na garagem.
- **Atores:** 
  - *Ator Principal:* [Valdir Soares](../personas/valdir-soares.md) (48 anos, motorista rodoviário, persona atendida).
  - *Atores Secundários:* Passageiros da linha Planaltina–Plano Piloto (usuários primários do portal web) e o despachante da garagem.
- **Ambiente e Contexto Físico (*Setting*):**
  - *Local:* Plataforma B da Rodoviária do Plano Piloto, Brasília - DF.
  - *Condições Ambientais:* Manhã chuvosa, plataforma lotada de trabalhadores em horário de pico (07h10), barulho intenso de motores e aglomeração de passageiros molhados e impacientes.
  - *Equipamento / Rede:* Valdir está na cabine de condução do ônibus; os passageiros utilizam smartphones próprios na fila de embarque.
- **Objetivos e Metas (*Goals*):**
  - *Metas de Experiência:* Sentir-se tranquilo e respaldado profissionalmente ("só o ouro"); evitar atritos interpessoais desgastantes (Cooper et al., 2007, p. 92).
  - *Metas Finais:* Concluir o embarque no tempo estipulado pela tabela e iniciar a viagem sem estresse ou advertências (Cooper et al., 2007, p. 93).
- **Planejamento do Ator:** Valdir planeja encostar o veículo exatamente às 07h15, conforme a escala de serviço impressa que retirou no balcão da Garagem da Piracicabana e confirmou no aplicativo da concessionária.

### 2.2 Ações e Eventos (Narrativa do Cenário)

Valdir aproxima o coletivo da Plataforma B às 07h12, três minutos antes do horário oficial estabelecido em sua folha de serviço da empresa. Ao posicionar o ônibus junto à baia e abrir a porta dianteira para o embarque, é recebido com vaias e reclamações agressivas de vários passageiros na fila.

Um dos usuários, exaltado, coloca a tela do próprio celular rente ao vidro da cabine de Valdir e vocifera: *"Você tá atrasado quase vinte minutos! O site da SEMOB publicou ontem que essa linha ia passar aqui às 06h55 em ponto! Olha aqui no site!"*. Outros passageiros ao redor concordam e começam a filmar a catraca com o celular, acusando a empresa e o motorista de negligência.

Valdir respira fundo, desliga o motor e mantém a postura respeitosa, embora sinta o peito apertado e uma forte sensação de injustiça e constrangimento. Ele puxa sua folha de bordo oficial carimbada pela garagem e mostra ao passageiro: *"Senhor, bom dia. A nossa ordem de saída da garagem foi cumprida rigorosamente às 06h30 para encostar aqui às 07h15. Não fomos avisados de nenhum adiantamento de viagem"*. O passageiro rebate com desdém: *"O site oficial do governo manda mais do que papel de garagem! Vocês que se entendam com a fiscalização!"*.

Valdir autoriza o embarque de todos com calma, mas o clima no interior do veículo permanece denso e hostil durante todo o trajeto pelo Eixo Rodoviário Norte. A tensão emocional afeta a atenção de Valdir na direção defensiva, transformando uma viagem que deveria ser regular em uma experiência física e psicologicamente exaustiva.

### 2.3 Obstáculos e Desafios
- A SEMOB-DF atualizou a tabela de horários no portal público sem sincronização operacional prévia e tempestiva com a concessionária operadora da Bacia 1.
- O motorista (que não utiliza o portal web institucional) tornou-se o alvo humano da indignação popular provocada pelo descompasso de dados públicos.
- Violação direta da regra de ouro de IHC de **não fazer o usuário se sentir estúpido** e preservar a dignidade humana do trabalhador (Cooper et al., 2007, p. 97).

### 2.4 Resultados e Desfecho
Valdir completa a viagem com desgaste emocional severo e atraso acumulado de 10 minutos na linha, gerado pela discussão inicial no embarque. Ao relatar o caso no terminal, descobre que outros três motoristas passaram pelo mesmo constrangimento na manhã. Valdir volta para a garagem ansioso, temendo que a divergência resulte em reclamação formal na ouvidoria da SEMOB com penalização à sua ficha de condutor.

### 2.5 Requisitos e Diretrizes de IHC Derivados
1. **Sincronização Sistêmica Obrigatória:** Nenhuma alteração de grade horária no portal web da SEMOB pode entrar no ar para consulta pública sem a confirmação de recebimento e homologação operacional pelas garagens das empresas concessionárias.
2. **Registro de Versão e Vigência Temporal:** A interface de consulta pública de linhas deve exibir claramente a data e o minuto exato da última atualização, acompanhada de aviso de transição operacional em caso de tabelas recém-modificadas.

---

## 3. Cenário 2: Consulta Ágil da Escala Diária e Tabela Homologada no Smartphone

> **Classificação Metodológica:** Cenário de Caminho Crítico / Cenário de Uso Futuro Desejável (*Key Path Scenario / Envisioned Scenario*, Cooper et al., 2007, p. 118; Rosson e Carroll, 2002, p. 64).  
> **Foco Analítico:** Atuação de Valdir como **Persona Primária (*Primary Persona*)** em um canal móvel dedicado de informações operacionais da SEMOB.

### 3.1 Elementos Constitutivos

- **Título:** Verificação antecipada de itinerário e horários no início do turno matutino via celular.
- **Atores:** [Valdir Soares](../personas/valdir-soares.md) (48 anos, motorista rodoviário, persona primária do módulo móvel).
- **Ambiente e Contexto Físico (*Setting*):**
  - *Local:* Sala de descanso e convivência da Garagem da Piracicabana, Setor de Garagens Oficiais (SGO), Brasília - DF.
  - *Condições Ambientais:* Madrugada (05h05), luz fluorescente, colegas de farda conversando ao redor e tomando café.
  - *Equipamento / Conexão:* Smartphone pessoal Android, tela de 6 polegadas, conectado à rede móvel 4G própria.
- **Objetivos e Metas (*Goals*):**
  - *Metas de Experiência:* Sentir-se seguro e no controle das tarefas do dia antes de assumir o volante (Cooper et al., 2007, p. 92).
  - *Metas Finais:* Saber em menos de 30 segundos o número da linha, os pontos de controle e os horários exatos de saída de cada terminal (Cooper et al., 2007, p. 93).
- **Planejamento do Ator:** Valdir quer consultar rapidamente em seu aparelho se a linha para a qual foi escalado hoje possui alguma diretriz operacional especial homologada pela SEMOB, sem precisar enfrentar fila no balcão da escala física.

### 3.2 Ações e Eventos (Narrativa do Cenário)

Enquanto aguarda a liberação mecânica do coletivo no pátio, Valdir senta em um dos bancos da sala de repouso e retira o celular do bolso. Ele abre o aplicativo móvel de informações da SEMOB (módulo do operador de transporte).

Como o sistema foi projetado especificamente para motoristas (*Mobile-First* com foco em simplicidade), não há telas de carregamento pesadas nem menus confusos de legislação. Valdir visualiza na tela inicial um painel limpo com botões grandes de alto contraste. Ele toca no botão **"Minha Linha Hoje"** e digita apenas o número `0.509` (linha que fará no turno).

O sistema carrega instantaneamente um resumo visual da linha:
1. Um mapa simplificado da rota destacando o trajeto Sobradinho II–Eixo Sul–Rodoviária do Plano Piloto.
2. A lista de horários de saída sincronizados entre a SEMOB e a Piracicabana para aquele veículo.
3. Um selo visual verde com a inscrição: **"Tabela Oficial Sincronizada — Sem Divergências"**.

Valdir memoriza os três horários-chave do seu turno da manhã e toca no ícone de compartilhamento rápido para enviar o resumo da escala no grupo de WhatsApp da sua equipe de rota, para que o cobrador parceiro também fique ciente.

### 3.3 Obstáculos e Desafios
- A interface precisa carregar com agilidade mesmo sob sinal móvel 4G com oscilação de intensidade dentro do galpão da garagem.
- O texto precisa ser direto e sem ambiguidades, atendendo à escolaridade de Ensino Médio Incompleto e preferência por sínteses visuais.

### 3.4 Resultados e Desfecho
Em menos de 40 segundos, Seu Valdir obtém total clareza sobre o itinerário e os horários do dia. Ele guarda o telefone no bolso com a mente despreocupada, toma o restante do café e caminha em direção ao ônibus sentindo-se confiante e seguro: *"Com a tabela certinha na mão, agora é só rodar; tá só o ouro"*.

### 3.5 Requisitos e Diretrizes de IHC Derivados
1. **Design de Interação com Baixa Carga Cognitiva:** Interface com hierarquia visual clara, fontes grandes, contrastes adequados para ambientes com luz mista e redução drástica do número de toques necessários para acessar a informação essencial.
2. **Eficiência sob Redes Móveis Oscilantes:** Arquitetura leve (armazenamento em cache local dos dados da escala diária) para permitir consulta rápida mesmo em áreas com sombra de sinal telefônico na garagem.

---

## 4. Cenário 3: Intercorrência Viária e Alerta Emergencial de Desvio na Faixa Exclusiva

> **Classificação Metodológica:** Cenário de Contingência / Validação (*Validation Scenario / Critical Incident Scenario*, Cooper et al., 2007, p. 122; Carroll, 2000, p. 75).  
> **Foco Analítico:** Comunicação multimodal em tempo real para prevenção de acidentes e infrações.

### 4.1 Elementos Constitutivos

- **Título:** Alerta antecipado de interdição de faixa exclusiva e rota alternativa durante bloqueio emergencial.
- **Atores:** 
  - *Ator Principal:* [Valdir Soares](../personas/valdir-soares.md) (motorista profissional).
  - *Atores Secundários:* Fiscais de trânsito da SEMOB e passageiros a bordo.
- **Ambiente e Contexto Físico (*Setting*):**
  - *Local:* Plataforma do Terminal Rodoviário de Sobradinho II, preparando-se para ingressar na BR-020 rumo ao Plano Piloto.
  - *Condições Ambientais:* Tarde de quarta-feira (16h40), calor de 30°C, tráfego da volta para casa em rápida intensificação.
  - *Equipamento / Rede:* Celular fixado no suporte apropriado do painel do ônibus (modo de espera), com alerta sonoro discreto e visual de alta visibilidade.
- **Objetivos e Metas (*Goals*):**
  - *Metas de Experiência:* Não ser pego de surpresa no meio da rodovia; sentir-se orientado e respaldado pelas autoridades de trânsito (Cooper et al., 2007, p. 92).
  - *Metas Finais:* Efetuar o desvio com segurança, sem colocar em risco a integridade dos passageiros e sem receber multas de circulação indevida (Cooper et al., 2007, p. 93).
- **Planejamento do Ator:** Valdir planeja cumprir seu trajeto regular pelas faixas expressas da rodovia até o balão do Colorado.

### 4.2 Ações e Eventos (Narrativa do Cenário)

Faltando quatro minutos para a saída do terminal, o smartphone de Valdir emite um sinal sonoro curto e característico de aviso prioritário da SEMOB. Valdir direciona o olhar para o visor do aparelho e visualiza um cartão informativo de cor âmbar com o título destacado: **"ALERTA OPERACIONAL: BR-020 Km 12 (Colorado)"**.

O comunicado não é um texto longo burocrático. A mensagem é formatada em linguagem multimodal (conforme sua preferência declarada por recursos visuais e texto enxuto):
- **O que houve:** Acidente envolvendo caminhão de carga com interdição total da faixa exclusiva de ônibus.
- **Determinação Oficial da SEMOB:** *Coletivos autorizados a transitar pela faixa marginal direita entre 16h30 e 19h00 sem penalização por radar*.
- **Mapa Esquemático:** Uma ilustração vetorial simples com linha pontilhada em amarelo indicando onde entrar na marginal e onde retornar à faixa principal.

Valdir lê o aviso em 15 segundos. Ao iniciar o percurso e se aproximar do trecho do Colorado, nota que o trânsito da faixa principal já está completamente paralisado e vê os cones posicionados pelos fiscais. Com a autorização formal da SEMOB assimilada com clareza prévia, Valdir sinaliza e desvia com tranquilidade para a pista marginal, evitando uma retenção de quase 40 minutos para os 65 passageiros a bordo.

### 4.3 Obstáculos e Desafios
- A necessidade crítica de transmitir orientações complexas de trânsito sem exigir leitura detalhada de decretos ou circulares enquanto o operador se prepara para dirigir.
- A exigência de respaldo legal explícito para garantir ao motorista que a manobra atípica não gerará autuações nos radares de fiscalização eletrônica da SEMOB e do DER-DF.

### 4.4 Resultados e Desfecho
A viagem transcorre com segurança e fluidez. Os passageiros a bordo elogiam a destreza e a proatividade de Valdir em desviar do engarrafamento. Valdir chega ao destino final sem atraso expressivo e sem o estresse de ter ficado preso no bloqueio: *"Se não fosse o aviso visual mastigado, a gente tinha entrado no funil e ficado travado por horas"*.

### 4.5 Requisitos e Diretrizes de IHC Derivados
1. **Redação Visual e Multimodalidade:** Diretriz estrita de sintetizar avisos operacionais emergenciais em esquemas gráficos intuitivos (mapas vetoriais coloridos de fácil assimilação) acompanhados de resumos textuais objetivos em marcadores (*bullet points*).
2. **Garantia Explícita de Não Punição:** Alertas que envolvam circulação fora da faixa exclusiva devem trazer de forma evidente a cláusula de isenção de multas em radares para eliminar a insegurança do trabalhador.

---

## 5. Cenário 4: Resolução Cooperativa de Dúvida de Passageiro sem Constrangimento

> **Classificação Metodológica:** Cenário de Interação Social e Mediação (*Mediated Interaction Scenario*, Barbosa e Silva, 2010, p. 174; Norman, 2004).  
> **Foco Analítico:** A interface digital como instrumento pacificador na relação entre o trabalhador e o usuário do serviço.

### 5.1 Elementos Constitutivos

- **Título:** Esclarecimento pacífico sobre alteração de parada de embarque na Asa Sul.
- **Atores:** 
  - *Ator Principal:* [Valdir Soares](../personas/valdir-soares.md) (motorista de ônibus).
  - *Ator Secundário:* Dona Maria (62 anos, passageira idosa moradora da Candangolândia).
- **Ambiente e Contexto Físico (*Setting*):**
  - *Local:* Ponto de parada da W3 Sul (Quadra 508 Sul), Brasília - DF.
  - *Condições Ambientais:* Final de tarde (18h15), movimentação intensa de pessoas nas calçadas, trânsito moderado.
  - *Equipamento:* Smartphone de Valdir no painel e celular simples de Dona Maria.
- **Objetivos e Metas (*Goals*):**
  - *Metas de Experiência:* Sentir-se prestativo, acolhedor e seguro de sua informação; não fazer a passageira se sentir desamparada ou confusa (Norman, 2004; Cooper et al., 2007, p. 97).
  - *Metas Finais:* Esclarecer se o ônibus atende à nova parada provisória sem atrasar a saída do ponto.
- **Planejamento do Ator:** Valdir quer orientar a passageira com rapidez e exatidão, transmitindo segurança e tranquilidade.

### 5.2 Ações e Eventos (Narrativa do Cenário)

Ao abrir a porta na parada da 508 Sul, uma senhora idosa sobe o primeiro degrau com ar de dúvida e ansiedade, segurando uma sacola de compras. Ela pergunta hesitante: *"Motorista, meu filho, esse ônibus ainda passa perto do hospital na 716 Sul? Me disseram na farmácia que mudaram a parada de lugar e eu tô com medo de me perder nessa chuva que tá armando"*.

Como o trânsito da W3 exige paradas breves, Valdir responde prontamente com sorriso amigável: *"Boa tarde, minha senhora! Pode subir tranquila. Mudou a parada sim por causa de uma obra no asfalto, mas a SEMOB colocou um ponto provisório a cinquenta metros dali, bem em frente à passarela iluminada. Eu mesmo aviso a senhora na hora de descer"*.

A passageira passa a catraca com expressão de alívio visível, agradece a atenção e senta-se no assento preferencial. Valdir havia conferido essa mudança exata durante seu intervalo na garagem, visualizando um informativo simples da SEMOB que detalhava as paradas desativadas e as alternativas provisórias com pontos de referência reais (como escolas, passarelas e farmácias).

### 5.3 Obstáculos e Desafios
- A frequente inadequação das informações governamentais, que costumam utilizar coordenadas técnicas ou números de postes que não significam nada para a população comum ou para os operadores.
- A pressão de tempo para responder a dúvidas complexas sem reter a linha no ponto de embarque.

### 5.4 Resultados e Desfecho
A passageira desembarca em total segurança no ponto provisório exatamente conforme as orientações de Valdir, que buzina levemente ao se despedir. A clareza da informação oficial empoderou o motorista como agente facilitador do transporte, fortalecendo sua dignidade profissional e garantindo uma experiência cidadã humanizada.

### 5.5 Requisitos e Diretrizes de IHC Derivados
1. **Uso de Pontos de Referência Reais:** Todas as indicações de desvios de paradas e itinerários devem priorizar pontos de referência concretos (hospitais, passarelas, monumentos, comércios conhecidos) em detrimento de siglas cadastrais ou códigos de postes viários.
2. **Linguagem Cidadã e Acolhedora:** Textos orientadores desenhados para fácil memorização e repasse verbal imediato aos usuários finais.

---

## 6. Quadro Comparativo e Síntese dos Cenários de Uso

A matriz a seguir consolida as características essenciais dos quatro cenários elaborados para a persona Valdir Soares, demonstrando o equilíbrio metodológico entre situações de problema atual e soluções de design projetadas:

<div align="center">
<p><strong>Tabela 1</strong> — Matriz Comparativa dos Cenários de Uso do Motorista (Valdir Soares)</p>
</div>

| Identificador do Cenário | Papel da Persona | Tipologia Metodológica | Desafio Central Enfrentado | Meta Primordial Atingida | Diretriz de IHC Resultante |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Cenário 1:** Conflito na Catraca por Divergência | Persona Atendida (*Served Persona*) | Cenário de Problema Atual (*Problem Scenario*) | Descompasso temporal entre dados do portal público e ordens operacionais da garagem. | Preservar a dignidade e evitar desgaste interpessoal na condução. | Sincronização obrigatória e exibição da vigência temporal da tabela. |
| **Cenário 2:** Consulta Ágil da Escala Diária | Persona Primária (*Primary Persona*) | Cenário de Caminho Crítico (*Key Path Scenario*) | Necessidade de checar rotas e horários no início do turno sem atrito ou filas. | Sentir-se no controle da escala de trabalho em menos de 40 segundos ("só o ouro"). | Interface *Mobile-First*, botões amplos, alto contraste e operação offline/cache. |
| **Cenário 3:** Intercorrência e Alerta de Desvio | Persona Primária (*Primary Persona*) | Cenário de Contingência (*Validation Scenario*) | Bloqueio viário imprevisto na faixa exclusiva durante o trajeto. | Efetuar o desvio com segurança e sem risco de penalidades nos radares. | Comunicação multimodal (mapas vetoriais simples + tópicos) e isenção explícita de multas. |
| **Cenário 4:** Resolução de Dúvida de Passageiro | Persona Atendida e Agente Mediador | Cenário de Mediação Social (*Social Interaction*) | Esclarecimento de alteração de parada sem causar atraso na viagem. | Proporcionar segurança e conforto ao cidadão com tranquilidade. | Uso de pontos de referência do mundo real e linguagem cidadã acessível. |

<div align="center">
<p><em>Fonte: Carlos Costa (2026).</em></p>
</div>

---

## 7. Relação entre Cenários, Metas da Persona e Requisitos do Sistema

Em perfeita consonância com o modelo de Engenharia Baseada em Cenários de Rosson e Carroll (2002) e o *Goal-Directed Design* de Cooper et al. (2007), os cenários não são histórias isoladas; eles estabelecem o elo formal entre as metas humanas da persona e os requisitos funcionais e não funcionais do sistema:

```
+--------------------+        +--------------------+        +---------------------+
|  METAS DA PERSONA  | -----> |  CENÁRIOS DE USO   | -----> |  REQUISITOS DE IHC  |
| (Experience/End)   |        |  (Histórias Reais) |        | (Diretrizes Design) |
+--------------------+        +--------------------+        +---------------------+
 - Sentir-se no controle       - C1: Conflito Catraca        - Sincronização em tempo real
 - Tranquilidade ("só o ouro") - C2: Consulta no Smartphone  - Design Mobile-First estrito
 - Previsibilidade de horários - C3: Alerta na BR-020        - Comunicação multimodal
 - Evitar atritos e multas     - C4: Dúvida na W3 Sul        - Pontos de referência reais
```

Essa cadeia de rastreabilidade garante que cada funcionalidade concebida para o ecossistema digital da SEMOB-DF responda a uma necessidade humana concreta e verificável, preservando a coerência científica e metodológica do projeto de IHC.

---

## 8. Referências Bibliográficas

- **BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da.** *Interação Humano-Computador*. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 5: Identificação de Necessidades dos Usuários e Requisitos de IHC (pp. 134–158); Capítulo 6: Concepção e Design de IHC (pp. 172–180).
- **CARROLL, John M.** *Making Use: Scenario-Based Design of Human-Computer Interactions*. Cambridge: MIT Press, 2000. ISBN: 978-0262032797.
- **COOPER, Alan; REIMANN, Robert; CRONIN, Dave.** *About Face 3: The Essentials of Interaction Design*. Indianapolis: Wiley Publishing, Inc., 2007. ISBN: 978-0-470-08411-3. Chapter 5: *Modeling Users: Personas and Goals* (pp. 75–108); Chapter 6: *Designing with Personas: A Methodology* (pp. 109–124).
- **EASON, Ken.** *Information Technology and Organisational Change*. London: Taylor & Francis, 1987.
- **NORMAN, Donald A.** *Emotional Design: Why We Love (or Hate) Everyday Things*. New York: Basic Books, 2004.
- **ROSSON, Mary Beth; CARROLL, John M.** *Usability Engineering: Scenario-Based Development of Human-Computer Interaction*. San Francisco: Morgan Kaufmann, 2002. ISBN: 978-1558607125.
