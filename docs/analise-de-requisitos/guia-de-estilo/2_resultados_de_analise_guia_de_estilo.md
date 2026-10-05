# Resultados de análise

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 05/10/2026 | 1.0 | Criação do documento de resultados de análise. | [Igor Dantas](https://github.com/IgorDARAUJO) | [Gabriel Melo](https://github.com/gabriellcardone-06) |

**Autor do Artefato: Igor Dantas.**

## 1. Introdução

Esta seção reúne os resultados da análise realizada com os usuários e sobre o contexto de uso do SEMOB-DF. De acordo com a estrutura comum de guias de estilo (presente na imagem 1, referente ao livro-texto da disciplina), ela contém a **descrição do ambiente de trabalho do usuário**. Mayhew (1999) sugere ainda que o guia inclua os produtos do levantamento de dados e da análise das necessidades dos usuários, registrando o *design rationale*, isto é, mantendo o rastreamento entre uma decisão de design e os elementos de discussão que culminaram naquela decisão, conforme evidenciado na imagem 2 (Barbosa et al., 2021). Por isso, ao final desta seção, as decisões do guia são relacionadas aos resultados da análise.

---

## 2 Descrição do ambiente de trabalho do usuário

### 2.1 Perfil dos usuários

- **Quem são:** o portal da SEMOB-DF tem três grupos de usuários identificados. O **usuário primário** é o(a) passageiro(a) do transporte público coletivo do DF: jovem adulto(a) de 18 a 39 anos, com leve predominância feminina e de pessoas autodeclaradas negras, moradores de Regiões Administrativas de renda média-baixa ou baixa (Ceilândia, Samambaia, Planaltina, Itapoã, Paranoá, Recanto das Emas, entre outras), que não tem carro no domicílio e estuda, trabalha ou concilia as duas coisas. O **usuário secundário** é o desenvolvedor/técnico responsável por manter e evoluir os sistemas da Semob (20 a 24 anos, atuação de 1 a 5 anos na área, alta experiência com tecnologia). O **usuário terciário** (ou "persona atendida") é o motorista de ônibus do STPC/DF: não opera a interface do portal diretamente, mas é afetado de forma crítica por ela, pois arca com o desgaste de divergências entre o que é divulgado publicamente e os horários/itinerários realmente cumpridos.
- **Experiência com tecnologia:** o usuário primário é altamente conectado — quase certamente possui smartphone próprio e acessa a internet diariamente pelo aparelho (o DF lidera os indicadores de conectividade do país: 98% dos domicílios tinham internet em 2024). O letramento digital varia com a escolaridade (99,7% de uso de internet entre quem tem ensino superior, caindo para 86,2% entre quem não tem instrução formal). O usuário secundário (desenvolvedor/técnico) tem experiência altíssima com tecnologia, usando-a várias vezes ao dia e sem necessidade de ajuda. Já o usuário terciário (motorista) tem perfil tecnológico mais restrito: usa exclusivamente o smartphone pessoal (sem desktop, notebook ou tablet), prefere orientação multimodal (visual e escrita curta) e tem o hábito de ler avisos impressos afixados no balcão da garagem.
- **Frequência e motivação de uso:** o usuário primário consulta linhas, horários e rastreamento em tempo real diariamente ou quase diariamente, muitas vezes combinando dois modos de transporte (ônibus e metrô) com integração, para chegar ao trabalho ou à aula no horário. Usa também, com menor frequência, os serviços de cartão/benefícios (Passe Livre Estudantil e Vale-Transporte) e os canais de reclamação/sugestão. O usuário secundário usa as ferramentas internas da Semob cerca de 80% do seu tempo de trabalho, para desenvolvimento, testes e publicação de dados. O usuário terciário (motorista) não acessa o portal: suas necessidades de informação (horários, escalas, avisos) são hoje supridas pelo aplicativo da concessionária e por avisos no balcão da garagem — uma lacuna que o projeto busca entender melhor.
- **Necessidades e restrições específicas:** uso predominante em pé, com uma mão, em trajetos e paradas (não em ambientes controlados); conexão de dados móveis instável ou limitada em alguns trechos (ex.: falhas de sinal em estações de metrô); baixo conhecimento institucional (os usuários não distinguem claramente os papéis da Semob, do BRB Mobilidade, do Metrô-DF e das empresas operadoras) e desconhecimento de jargões técnicos do setor ("integração tarifária", "linha circular", "validador", "tabela", "soltura"); necessidade de linguagem direta e visual, sem textos burocráticos longos, especialmente para os perfis com menor escolaridade (ex.: motorista, com ensino médio incompleto).

- Este projeto possui **sete personas primárias/atendidas mapeadas**, construídas a partir da articulação dos perfis de usuário acima com dados da PDAD 2021, do Relatório de Ouvidoria e das entrevistas qualitativas. O resumo de cada uma, com link para o artefato completo, está na tabela 1, visível abaixo.

**Tabela 1** — Elenco de personas do projeto

| Persona | Papel | Perfil representado | Artefato |
|---|---|---|---|
| Larissa Ferreira Lima ("Lari") | Persona primária | Estudante universitária e trabalhadora que depende diariamente da integração ônibus + metrô | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/larissa-ferreira-lima/) |
| João Pedro Carvalho | Persona primária | Estudante de Engenharia na UnB, perfil tecnológico alto, foco em rota rápida e previsibilidade | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/joao-pedro-carvalho/) |
| Marcos Paulo Vieira ("Marquinhos") | Persona primária | Trabalhador do setor de logística; foco em tarefas móveis e busca rápida por origem/destino, sem conhecer o código da linha | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/marcos-paulo-vieira/) |
| Maria Eduarda Santos ("Duda") | Persona primária | Trabalhadora usuária de Vale-Transporte que precisa resolver falhas de crédito/cartão sob pressão de horário | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/maria-eduarda-santos/) |
| Valdir Soares ("Seu Valdir") | Persona atendida / primária operacional | Motorista profissional de ônibus do STPC/DF (Viação Piracicabana, Bacia 1) | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/valdir-soares/) |
| Heitor Santos Júnior | Persona primária | Técnico de manutenção predial de Planaltina, letramento digital intermediário, depende do ônibus para trabalhar | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/heitor-santos-junior/) |
| Mariana Borges Almeida | Persona primária | Analista administrativa com rotina organizada; foco em previsão precisa e monitoramento de chegada sob chuva | [Persona completa](https://interacao-humano-computador.github.io/2026.2-Grupo05/analise-de-requisitos/personas/mariana-borges-almeida/) |

*Fonte: Igor Dantas Araújo*

### 2.2 Ambiente físico

- **Local de uso:** predominantemente **em deslocamento e em ambiente externo** — paradas e pontos de ônibus, dentro do coletivo ou do metrô, a caminho de casa, do trabalho ou da universidade. Uso secundário em casa (ao planejar a saída, antes do deslocamento) e, no caso dos motoristas, na garagem (consulta de avisos no balcão) ou durante a condução.
- **Condições do ambiente:** sol forte sobre a tela em pontos de ônibus durante o dia; ambientes escuros/noturnos em viagens de volta tarde da noite; ruído de rua e de veículos; espaço físico reduzido (usuário em pé, segurando o celular com uma mão só, muitas vezes junto de mochila, sacola ou material de trabalho); interrupções frequentes (embarque, desembarque, necessidade de validar o cartão, atenção ao próprio trajeto).
- **Impactos no design:** necessidade de **alto contraste** e textos legíveis sob luz solar direta; elementos acionáveis grandes o suficiente para uso com o polegar e com uma mão só; a informação essencial não pode depender apenas de permanecer muito tempo com a tela ligada (risco de bateria e de perder o sinal do próximo evento); conteúdo crítico (horário, mudança de plataforma, direito de desembarque) não deve depender de áudio, pois o ambiente é ruidoso e o usuário pode estar em público/sozinho à noite.

### 2.3 Ambiente tecnológico

- **Dispositivos utilizados:** majoritariamente **smartphones**, a maioria com sistema **Android**. É o único dispositivo de uso do motorista (usuário terciário); o usuário primário também usa eventualmente um notebook compartilhado em casa, mas de forma secundária. O usuário secundário (desenvolvedor/técnico) utiliza múltiplos monitores/painéis no ambiente de trabalho.
- **Sistemas operacionais e navegadores:** Android predominante entre os usuários primário e terciário; acesso ao portal via navegador do celular (chegada principalmente por busca no Google ou por links recebidos em redes sociais e WhatsApp).
- **Dispositivos de entrada:** toque (tela sensível ao toque), com uso frequente de uma mão só/polegar; teclado físico e mouse no ambiente de trabalho do usuário secundário.
- **Conectividade:** dados móveis (4G/5G), com qualidade variável — boa na maior parte das paradas de ônibus, mas instável ou ausente dentro de vagões de metrô e em estações subterrâneas; franquia de dados por vezes limitada (usuários evitam páginas pesadas).
- **Sistemas e ferramentas já utilizados:** aplicativos de referência que moldam as expectativas dos usuários — **Google Maps** (pela precisão do rastreamento em tempo real) e **Moovit**, como alternativas de consulta de linhas e horários; **WhatsApp** (grupos de passageiros com avisos informais e canal de contato cotidiano); aplicativos de banco e **Pix** (já usados com confiança para pagamentos e recargas); serviços do **gov.br**; o **DF no Ponto** (ferramenta oficial de consulta de linhas e horários, hoje hospedada fora do domínio visual da Semob); o aplicativo interno da concessionária (usado pelo motorista); e, no caso do usuário secundário, o **portal de dados abertos da Semob** e sistemas internos de publicação.

### 2.4 Ambiente social e organizacional

- **Contexto de uso:** predominantemente **individual** (cada passageiro consulta o site sozinho, no seu próprio aparelho), mas fortemente influenciado por interações sociais informais — grupos de WhatsApp de passageiros da linha, conversas com outros passageiros no ponto e com motoristas/cobradores no embarque. No ambiente de trabalho do usuário secundário, o uso é colaborativo (equipe de desenvolvimento, conversa com cliente).
- **Normas, regras e práticas:** a prestação do serviço envolve uma cadeia institucional com papéis distintos — a **Semob-DF** regula e planeja o sistema (STPC/DF, organizado em bacias operacionais como a Bacia 1, atendida pela Viação Piracicabana); o **BRB Mobilidade** emite cartões, recebe recargas e cadastra benefícios (Passe Livre Estudantil, Vale-Transporte); o **Metrô-DF** e as empresas operadoras de ônibus executam o serviço. Reclamações e manifestações formais passam pela **Ouvidoria do GDF** (canal 162 / Sistema Participa DF). Essa distribuição de responsabilidades entre órgãos não é percebida pelos usuários, que tratam tudo como "o site do transporte". As entrevistas e a coleta de dados do próprio projeto seguiram salvaguardas éticas de pesquisa com seres humanos (Resolução CNS nº 510/2016), com TCLE, anonimização de participantes (ex.: identificação como "MOT-01") e uso de dados restrito a fins acadêmicos.
- **Suporte disponível:** para o usuário primário, hoje o suporte mais efetivo e usado na prática não é o canal oficial, mas sim fontes informais — grupos de WhatsApp de passageiros e conversas presenciais com outros usuários e com o motorista/cobrador. Canais formais existem (FAQ do site, Ouvidoria/162), mas apresentam vocabulário técnico, estrutura longa e nem sempre refletem mudanças do dia (ver Cenários 1 e 2). O motorista não dispõe de suporte via portal: usa o aplicativo interno da concessionária e avisos impressos no balcão da garagem.

### 2.5 Tarefas principais

A tabela 2 abaixo indica as principais tarefas feitas e analisadas pelo grupo, bem como a frequência, importância e observações de cada uma.

**Tabela 2** — Tarefas principais

| Tarefa | Frequência | Importância | Observações |
|---|---|---|---|
| Consultar linhas, horários e itinerários (TAR-03: planejamento de rota por origem/destino) | Diária | Crítica | Usuários não sabem necessariamente o código da linha; preferem buscar por origem e destino, como no Google Maps |
| Acompanhar o ônibus em tempo real (TAR-06: consulta no DF no Ponto) | Diária, em momentos de espera | Crítica | Hoje sujeita a falhas de atualização e de conflito de dados entre o horário programado e o horário real (ver Cenário 2) |
| Receber alerta inteligente de saída de casa (TAR-01) | Diária | Alta | Relacionada ao objetivo de não esperar à toa no ponto nem sair tarde demais |
| Pré-agendar atendimento no Programa DF Acessível (TAR-02) | Eventual | Alta para o público elegível | Fluxo de agendamento específico, com menor frequência de uso |
| Consultar/credtiar Vale-Transporte e resolver falhas de cartão | Semanal (consulta) / eventual (falha) | Crítica quando ocorre falha | Persona Maria Eduarda Santos aprofunda esse cenário |
| Cuidar do cadastro do Passe Livre Estudantil | Semestral ou anual | Alta | Envolve documentação e prazo de análise |
| Verificar avisos de mudança (desvios, obras, novas linhas) | Semanal ou quando percebe atraso | Alta | Hoje divulgada de forma inconsistente entre imprensa, site e grupos informais |
| Registrar reclamação, sugestão ou pedido de nova linha/abrigo | Eventual | Média | Canal formal é a Ouvidoria do GDF (162 / Sistema Participa DF) |
| Consultar escala de trabalho e horários homologados da linha (TAR-04, motorista) | Diária (motorista) | Crítica para o motorista | Hoje resolvida fora do portal, via app da concessionária e balcão da garagem |
| Receber e processar alerta operacional de trânsito (TAR-05, motorista) | Eventual | Alta para o motorista | Impacta diretamente passageiros em caso de desvio não comunicado |
| Desenvolver, testar e publicar atualizações no portal (usuário secundário) | Diária (~80% do tempo de trabalho) | Crítica para a operação do sistema | Fluxo passa por sistema interno até a publicação no portal de dados abertos |

*Fonte: Igor Dantas Araújo - elaborado a partir das páginas de "Análise de tarefas" do site do projeto.*

### 2.6 Métodos utilizados no levantamento

A tabela 3 a seguir contém os métodos utilizados pelo grupo na etapa de levantamento de dados do projeto.

**Tabela 3** — Métodos utilizados no levantamento de dados

| Método | Participantes | Data | Principais achados |
|---|---|---|---|
| Análise de documentos | Igor e Gabriel | Coleta consolidada em 24–26/09/2026 | Perfil demográfico e socioeconômico do usuário primário (renda, posse de automóvel, tempo de deslocamento, uso de ônibus por sexo e faixa etária); manifestações e demandas mais recorrentes dos usuários do sistema |
| Entrevistas semiestruturadas com usuários primários | Igor, Gabriel e Tomás | 22 a 27/09/2026 | Rotinas de deslocamento, apps de referência usados (Google Maps, Moovit, WhatsApp), fricções com o site oficial, expectativas de linguagem simples e resposta imediata |
| Entrevista com motorista de ônibus (ENT-01, MOT-01) | Carlos | 22/09/2026 | Nunca acessa o portal da Semob; depende do app da concessionária e de avisos no balcão da garagem; alto impacto de divergências de horário em sua rotina e na relação com passageiros |
| Entrevista com desenvolvedores/técnicos (ENT-02) | Rodrigo | 22/09/2026 | Baixa satisfação com o sistema atual, uso de ~80% do tempo em ferramentas internas, fluxo de publicação via portal de dados abertos |
| Entrevista de validação de artefatos (VAL-01) | Igor | 24/09/2026 | Validação dos dados demográficos, dores e fluxos descritos nas personas e cenários do projeto |
| Brainstorming da equipe | Arthur e Lucas | Ver página de Brainstorming do site | Levantamento inicial de hipóteses e ideias de solução a partir dos problemas identificados |

*Fonte: Igor Dantas Araújo - elaborado a partir das páginas "Análise de documentos" e "Entrevistas".*

---

## 3 Implicações para o guia de estilo

A tabela 4 relaciona os achados da análise às decisões do guia, preservando o rastreamento do *design rationale* (Mayhew, 1999).

**Tabela 4** — Implicações para o guia de estilo

| Achado da análise | Decisão de design relacionada | Seção do guia |
|---|---|---|
| Usuários acessam quase sempre pelo smartphone, em pé, com uma mão, muitas vezes com sol na tela | *Layout* responsivo *mobile-first*, com alvos de toque grandes operáveis com o polegar | 3 – Elementos de interface |
| Ambiente externo com luz solar direta e, à noite, pouca iluminação | Paleta com alto contraste, testada em ambas as condições | 3 – Elementos de interface |
| Baixo conhecimento institucional (usuários não distinguem Semob, BRB Mobilidade, Metrô-DF e operadoras) e desconhecimento de jargões técnicos ("integração tarifária", "linha circular", "validador") | Linguagem simples e orientada por tarefa do cotidiano do passageiro, evitando nomenclatura institucional no menu principal | 4 e 6 |
| Consulta de linha/horário é a tarefa diária e crítica (TAR-01, TAR-03, TAR-06) | Priorizar localização do ônibus em tempo real e horários das linhas favoritas já na tela inicial, com busca por origem/destino sem exigir o código da linha | 4 – Elementos de interação |
| Falhas de atualização em tempo real e divergência entre horário programado e horário real (Cenário 2) | Indicar claramente o nível de confiança/atualização da informação exibida (ex.: "atualizado há X min") em vez de estados de erro silenciosos | 4 e 6 |
| Mudanças de itinerário (obras, desvios) nem sempre chegam ao usuário antes de ele chegar à parada (Cenário 1) | Mecanismo de aviso proativo de mudanças, com destaque visual na tela inicial/linha afetada | 4 – Elementos de interação |
| Conectividade instável dentro do metrô e em estações subterrâneas; franquia de dados limitada | Interface leve, com carregamento rápido e funcionamento degradado gracioso sob conexão ruim | 3 e 4 |
| Tarefas cadastrais sensíveis (Passe Livre, Vale-Transporte) hoje distribuídas entre Semob, BRB Mobilidade e Ouvidoria, em sites e fluxos distintos | Centralizar o caminho de cada serviço a partir do portal, com indicação clara de para onde o usuário será direcionado e por quê | 4 e 6 |
| Motorista (usuário terciário) nunca acessa o portal, mas é diretamente afetado por divergências de informação | Garantir sincronização entre as informações publicadas no portal e os dados repassados às concessionárias, como requisito não funcional do sistema | 6 – Conteúdo e linguagem |

*Fonte: Igor Dantas Araújo.*

---

## Referências

BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário.** Autopublicação, 2021. ISBN 978-65-00-19677-1. Capítulo 8 (Organização do Espaço de Problema, pp. 147–167) e Capítulo 10, seção 10.5 (Guias de Estilo), p. 257–259.

## Fotos de referência

![Imagem 1](/docs/assets/prints_referencias/print-guiadeestilo.png)
*Imagem 1 - Estrutura do guia de estilo — Barbosa et al. (2021), p. 258*

![Imagem 2](/docs/assets/prints_referencias/print-guiadeestilo-designrationale.png)
*Imagem 2 - Design Ractionale — Barbosa et al. (2021), p. 242*
