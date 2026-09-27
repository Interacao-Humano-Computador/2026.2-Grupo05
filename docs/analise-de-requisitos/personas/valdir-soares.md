# Persona: Valdir Soares ("Seu Valdir")

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Concepção e modelagem da Persona fundamentada na pesquisa empírica de campo com motorista (`MOT-01`) e estruturada conforme a metodologia *Goal-Directed Design* da literatura clássica de IHC (Cooper et al., 2007; Barbosa e Silva, 2010). | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas](https://github.com/IgorDARAUJO) e [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 27/09/2026 | 1.1 | Integração formal ao elenco de personas do projeto com referências hipertextuais relativas e padronização visual. | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |

---

## 1. Introdução e Metodologia de Modelagem

Este documento apresenta a caracterização formal da **Persona** representativa dos motoristas de ônibus do Sistema de Transporte Público Coletivo do Distrito Federal (STPC/DF), no contexto do ecossistema de serviços e informações da **Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)** (`www.semob.df.gov.br`).

A concepção e a estruturação deste artefato fundamentam-se com rigor na literatura clássica e consagrada de **Interação Humano-Computador (IHC)** e **Design de Interação**, tomando como base teórica e metodológica o Capítulo 5 (*Modeling Users: Personas and Goals*, pp. 75–108) da obra de referência de **Alan Cooper, Robert Reimann e Dave Cronin (2007)**: *About Face 3: The Essentials of Interaction Design*, articulada com os preceitos de identificação de necessidades de **Barbosa e Silva (2010)**, a classificação de partes interessadas de **Eason (1987)** e os níveis de design emocional de **Norman (2004)**.

```
                    METODOLOGIA GOAL-DIRECTED DESIGN (COOPER ET AL., 2007)
+-----------------------------------------------------------------------------------------------+
| Passo 1: Identificar Variáveis Comportamentais (Atividades, Atitudes, Aptidões, etc.)         |
| Passo 2: Mapear os Sujeitos de Pesquisa nos Eixos Comportamentais Contínuos                   |
| Passo 3: Identificar Agrupamentos e Conexões Causais Lógicas                                  |
| Passo 4: Sintetizar Características Relevantes e Definir Metas (Experience, End, Life Goals)  |
| Passo 5: Verificar Completude e Eliminar Redundâncias Comportamentais                         |
| Passo 6: Desenvolver a Narrativa em 3ª Pessoa, Atributos de Identidade e Fotografia Realista  |
| Passo 7: Designar Tipos Formais (Primária, Secundária, Suplementar, Cliente, Atendida, Neg.)  |
+-----------------------------------------------------------------------------------------------+
```

### 1.1 Base Empírica Qualitativa (Cooper et al., 2007, pp. 76, 88)
A persona não se apoia em estereótipos, caricaturas ou suposições abstratas da equipe de design. Conforme preconizam Cooper et al. (2007, p. 76), personas legítimas são *"arquétipos compostos baseados em dados comportamentais coletados a partir de usuários reais encontrados em entrevistas etnográficas e de campo"*. 

Sua construção decorre diretamente dos dados comportamentais qualitativos levantados na [Entrevista Semiestruturada com Motorista](../entrevistas.md#41-entrevista-01-potencial-usuario-do-semob-df-motorista-de-onibus) e consolidados no [Perfil de Usuário: Motoristas de Ônibus](../perfis-de-usuario/perfil-motorista.md), aplicados junto ao participante codificado como **MOT-01** na Garagem da Viação Piracicabana, localizada no Setor de Garagens Oficiais (SGO), Brasília - DF. 

A coleta seguiu estritos preceitos bioéticos e de salvaguarda da dignidade humana estabelecidos pela **Resolução CNS nº 510/2016**, mediante Termo de Consentimento Livre e Esclarecido ([TCLE](../../assets/PDFs/TCLE_entrevista_motorista.pdf)), garantia irrevogável de anonimato e respeito à autonomia do trabalhador (Barbosa e Silva, 2010, pp. 138–142).

### 1.2 Prevenção do "Usuário Elástico" e do "Design Autorreferencial" (Cooper et al., 2007, p. 80)
Na prática do desenvolvimento de sistemas, desenvolvedores e projetistas frequentemente caem na armadilha do *design autorreferencial* (*self-referential design*), projetando interfaces complexas sob o pressuposto implícito de que o usuário compartilha seus próprios hábitos digitais em computadores de mesa ou criam o chamado *usuário elástico* (*elastic user*), cujas capacidades e vontades são expandidas ou contraídas conforme a conveniência técnica da equipe de codificação (Cooper et al., 2007, p. 80).

Esta persona estabelece limites comportamentais, cognitivos e contextuais sólidos e imutáveis:
- O motorista opera exclusivamente via **smartphone** pessoal e conexão de dados móveis (4G/5G).
- Não tem acesso, tempo nem hábito de utilizar computadores de mesa (*desktops*).
- Sua cognição é voltada à direção segura, cumprimento de tabelas horárias e convívio com o público, impedindo que a equipe de projeto pressuponha um usuário especialista em interfaces web complexas.

### 1.3 Distinção entre Persona e Segmento de Mercado (Cooper et al., 2007, p. 86)
Enquanto segmentações de marketing e mercado se preocupam com faixas de renda bruta, padrões de aquisição de produtos e canais de distribuição comercial, as personas de design em IHC fundamentam-se estritamente em **comportamentos de uso, modelo mental, atitudes perante a tecnologia, contexto físico de trabalho e metas humanas no domínio da aplicação** (Cooper et al., 2007, p. 86). A persona aqui documentada modela a relação prática do profissional com as informações de mobilidade urbana que regem sua jornada de trabalho.

---

## 2. Processo de Mapeamento Comportamental (Passos 1 a 5)

Em observância às etapas de modelagem do *Goal-Directed Design* propostas por Cooper et al. (2007, pp. 97–103), o modelo foi estruturado mediante o mapeamento das variáveis observadas no campo em eixos contínuos relativos.

### 2.1 Identificação das Cinco Categorias de Variáveis Comportamentais (Cooper et al., 2007, p. 98)

1. **Atividades (O que o usuário faz, volume e frequência):** Conduz ônibus do transporte público urbano sob regime de rotatividade de linhas na Bacia 1 do DF; consulta diariamente escalas e horários no balcão e no app da empresa; realiza trajetos sob tráfego denso com múltiplas paradas; lida com passageiros e despachantes em terminais rodoviários.
2. **Atitudes (Como enxerga o domínio e a tecnologia):** Percebe a SEMOB como entidade eminentemente reguladora e fiscalizadora ("fiscalizar os horários, a manutenção dos ônibus se tá em dia"); possui visão altamente pragmática e confiante da tecnologia móvel ("é fácil usar"); busca tranquilidade e previsibilidade na rotina.
3. **Aptidões (Escolaridade e capacidade de aprendizagem):** Ensino Médio Incompleto; leitura funcional consolidada em avisos operacionais, mapas e esquemas objetivos; estilo de aprendizagem multimodal, combinando demonstrações visuais (telas, ícones, fluxos) com instruções textuais curtas e diretas ("prefiro os dois, visual e manual escrito").
4. **Motivações (Razões pelas quais atua no domínio):** Manutenção da estabilidade funcional e segurança salarial para sustento familiar; cumprimento exato das ordens de serviço para evitar atritos com passageiros e autuações da fiscalização da SEMOB.
5. **Habilidades (Capacidades com o produto e o domínio):** 16 anos de experiência consolidada em condução de veículos pesados em vias urbanas e eixos viários do DF; alta perícia operacional no trânsito; proficiência fluida no uso de mensageria móvel (WhatsApp) e painéis corporativos em smartphones; ausência de habilidades ou vivência com sistemas de desktop/navegadores complexos.

### 2.2 Mapeamento em Eixos Contínuos Relativos (Cooper et al., 2007, p. 99)

Conforme Cooper et al. (2007, p. 99), o mapeamento de sujeitos de pesquisa deve focar na posição relativa entre os participantes e papéis ao longo de eixos contínuos, e não em medições quantitativas arbitrárias. Os comportamentos observados no participante de pesquisa (`MOT-01`) foram posicionados em eixos bipolares relativos, evidenciando seu perfil em contraste com passageiros e operadores administrativos do órgão:

```
1. Frequência de Acesso a Portais Web Governamentais:
Nenhuma [MOT-01]-------------------------------------------- Alta (Pesquisador/Servidor)

2. Dispositivo de Interação no Cotidiano:
Apenas Computador/Desktop ---------------------------------- Apenas Smartphone [MOT-01]

3. Conhecimento Prático da Malha Viária do DF:
Leigo / Passageiro Ocasional ------------------------------- Especialista de Campo [MOT-01]

4. Estabilidade de Trajetos Operacionais:
Linha Fixa / Sempre Mesmo Eixo ----------------------------- Alta Rotatividade de Linhas [MOT-01]

5. Estilo Preferencial de Instrução / Aprendizado:
Puramente Textual / Leis ---------------- [MOT-01] -------- Puramente Visual / Vídeos

6. Atitude Perante Novos Aplicativos Móveis:
Insegura / Resistente -------------------------------------- Pragmática / Confiante [MOT-01]

7. Repercussão Pessoal de Inconsistências de Dados:
Nula / Burocrática ----------------------------------------- Severa / Conflito Físico [MOT-01]
```

### 2.3 Identificação de Padrões e Conexões Causais (Cooper et al., 2007, p. 100)
A análise dos eixos revela agrupamentos comportamentais fortemente correlacionados por conexões lógicas de causa e efeito (Cooper et al., 2007, p. 100):
- A **rotatividade de linhas** aliada à **senioridade profissional** gera a necessidade direta de previsibilidade estrita de horários e itinerários ("mais os horários mesmo").
- A **exclusividade do smartphone** conectada ao **ritmo de trabalho no trânsito** estabelece uma dependência causal por interfaces móveis enxutas, sem menus aninhados ou páginas lentas de desktop.
- O fato de estar na linha de frente (na catraca) conecta diretamente a **desatualização de dados públicos da SEMOB** com o **desgaste emocional e hostilidade verbal de passageiros**, tornando a integridade da informação uma questão de segurança e saúde no trabalho.

### 2.4 Diferenciação Comportamental e Eliminação de Redundâncias (Cooper et al., 2007, pp. 101–102)
Em consonância com o Passo 5 de Cooper et al., o perfil do motorista foi verificado para assegurar diferenciação comportamental significativa frente aos demais atores do ecossistema do STPC/DF:
- Diferencia-se radicalmente do **Passageiro** (que busca planejar deslocamentos pessoais e emitir cartões de bilhetagem).
- Diferencia-se do **Fiscal / Servidor da SEMOB** (que opera em terminais administrativos inserindo autos de infração e publicando portarias).
- O motorista possui modelo mental centrado na **execução física da viagem** e na **evitação de atritos**, não havendo qualquer redundância ou sobreposição de papéis com outras categorias de usuários.

---

## 3. Identidade da Persona

![Valdir Soares - Motorista Profissional do STPC/DF](../../assets/images/persona-valdir.jpg)

<div align="center">
<p><strong>Figura 1</strong> — Valdir Soares ("Seu Valdir"), motorista profissional do STPC/DF (imagem ilustrativa gerada por IA (Gemini) com base nos achados de campo).</p>
<p><em>Fonte: Carlos Costa (2026).</em></p>
</div>

### **Valdir Soares ("Seu Valdir")**
> *"A gente só quer sair com a tabela certinha e rodar tranquilo; no trânsito, se a informação tá certa, o dia fica só o ouro."*

---

### 3.1 Quadro de Síntese da Identidade (Cooper et al., 2007, pp. 100, 103)

| Atributo | Caracterização da Persona |
| :--- | :--- |
| **Nome Fictício** | Valdir Soares (conhecido pelos colegas e despachantes como "Seu Valdir") |
| **Idade / Gênero** | 48 anos / Masculino |
| **Ocupação Profissional** | Motorista Profissional de Ônibus Urbano (Transporte Coletivo) |
| **Empresa / Lotação** | Viação Piracicabana — Concessionária da Bacia 1 do STPC/DF (Garagem SGO) |
| **Tempo de Profissão** | 16 anos como motorista profissional (11 anos ininterruptos na empresa atual) |
| **Escolaridade** | Ensino Médio Incompleto |
| **Residência Familiar** | Sobradinho II, Distrito Federal (reside com a esposa e dois filhos) |
| **Dispositivo Tecnológico** | Smartphone Android intermediário com plano pessoal de dados 4G/5G |
| **Aplicativos de Uso Diário**| WhatsApp (comunicação familiar e grupos da escala) e App corporativo da Piracicabana |
| **Ambiente de Operação** | Cabine de condução de ônibus urbano, paradas do DF e balcão de avisos da garagem |
| **Classificação Formal** | **Persona Atendida (*Served Persona*)** no Portal Web SEMOB / **Persona Primária** em canal móvel para operadores |

---

## 4. Definição de Metas e Motivações da Persona (*Goals*)

Conforme o princípio central de Cooper et al. (2007, pp. 88–97), **as tarefas são apenas meios transitórios, enquanto as metas (*goals*) são o fim real que motiva o comportamento humano**. O design centrado no usuário deve focar na realização das metas, minimizando o esforço despendido em tarefas mecânicas.

### 4.1 Metas de Experiência (*Experience Goals*, Cooper et al., 2007, p. 92)
As metas de experiência expressam como Seu Valdir deseja se sentir emocionalmente e psicologicamente em sua jornada profissional (associadas ao nível visceral e comportamental de Norman, 2004):
- **Sentir-se no controle** de sua jornada diária, conhecendo com antecedência as linhas, horários e rotas da escala sem ser surpreendido por mudanças imprevistas.
- **Sentir-se tranquilo e respaldado ("só o ouro"):** ter certeza de que as instruções operacionais que recebeu da concessionária são exatamente as mesmas divulgadas publicamente pelo órgão gestor (SEMOB).
- **Sentir-se respeitado e valorizado como profissional:** não ser tratado como culpado por atrasos gerados por obras viárias, engarrafamentos ou falhas de planejamento do órgão.
- **Não se sentir ansioso, sobrecarregado ou confuso** ao consultar avisos de trânsito ou instruções operacionais no celular.

### 4.2 Metas Finais (*End Goals*, Cooper et al., 2007, p. 93)
As metas finais representam as motivações práticas e comportamentais diretas que Seu Valdir busca realizar em sua rotina profissional (Cooper et al. recomendam entre três a cinco metas objetivas):
1. **Consultar de forma instantânea e sem fricção a programação de horários e itinerários:** ter acesso rápido, em seu próprio smartphone, aos horários de saída e chegada da linha na qual foi escalado no dia.
2. **Receber avisos tempestivos e inequívocos sobre interferências na rota:** ser alertado com clareza sobre interdições de pistas, desvios programados, manutenções em faixas exclusivas (EPTG, Eixo Rodoviário) ou bloqueios antes de iniciar o itinerário.
3. **Evitar conflitos, hostilidades e desgaste interpessoal com passageiros:** assegurar que os passageiros no ponto de embarque possuam a mesma informação de horários que o motorista, eliminando discussões na catraca geradas por divergência entre o site da SEMOB e a operação real.
4. **Cumprir com regularidade a Ordem de Serviço Operacional (OS):** completar as viagens dentro da faixa estipulada pela tabela horária sem receber advertências, autuações ou penalidades dos fiscais da SEMOB.

### 4.3 Metas de Vida (*Life Goals*, Cooper et al., 2007, p. 93)
As metas de vida representam as aspirações de longo prazo e a autoimagem da persona (nível cognitivo reflexivo, mantendo a diretriz de sobriedade de zero ou uma meta de vida por persona):
- **Meta de Vida:** *Manter sua estabilidade profissional, saúde física e tranquilidade mental ao longo dos anos, garantindo com dignidade o sustento e os estudos dos filhos até alcançar uma aposentadoria segura e respeitada na profissão rodoviária.*

### 4.4 Não Subordinação a Metas Técnicas e Comerciais (Cooper et al., 2007, p. 94)
Na literatura de Cooper et al. (2007, p. 94), metas de clientes corporativos, metas de negócio da SEMOB (ex.: redução de custos com subsídios tarifários, rigidez arrecadatória de multas) e metas técnicas de tecnologia (ex.: tabelas normalizadas de banco de dados, conformidade GTFS estrita, limitações de servidores) são **metas de não-usuários** (*nonuser goals*).

O design do ecossistema de informações da SEMOB deve harmonizar essas restrições institucionais sem permitir que elas sufoquem, anulem ou se sobreponham às metas fundamentais de Seu Valdir:
- Se a SEMOB altera uma tabela de horários por conveniência administrativa, essa informação não pode ser publicada no portal sem a prévia e sincronizada atualização dos sistemas das operadoras e alerta direto aos motoristas de linha.
- A arquitetura de dados deve trabalhar nos bastidores para absorver a complexidade técnica, entregando na tela do celular do trabalhador uma informação sintetizada, pontual e útil.

### 4.5 Princípio de Não Fazer o Usuário se Sentir Estúpido (Cooper et al., 2007, p. 97)
A diretriz de ouro do design de interação formulada por Alan Cooper (*"Don't make the user feel stupid. This is probably the most important interaction design guideline"*, p. 97) é rigorosamente incorporada:
- A comunicação governamental não deve submeter Seu Valdir a textos regulatórios densos, resoluções burocráticas indecifráveis ou jargões jurídicos.
- O sistema de avisos da SEMOB não deve emitir mensagens de erro incompreensíveis, exigir múltiplos cliques ou forçar autenticações lentas quando o motorista está no intervalo de 15 minutos entre turnos na plataforma.
- A precisão dos dados públicos protege a dignidade e a autoridade moral de Seu Valdir na condução do veículo, evitando que ele seja constrangido perante os cidadãos por informações governamentais divergentes ou erradas.

---

## 5. Narrativa em Terceira Pessoa: Um Dia Típico de Seu Valdir (Cooper et al., 2007, pp. 102–104)

*A narrativa a seguir contextualiza o ambiente de trabalho, as dores e as atitudes de Valdir Soares em prosa contínua na terceira pessoa, conforme preconizado por Cooper et al. (2007, pp. 102–104):*

São 04h15 da madrugada quando o despertador toca na casa de Seu Valdir, em Sobradinho II. Após um café rápido e a bênção da esposa, ele se dirige para a Garagem da Viação Piracicabana, no Setor de Garagens Oficiais (SGO), onde costuma chegar por volta das 04h50 para a chamada da escala.

Ao passar pela portaria e se apresentar ao despachante, Valdir caminha até o balcão da escala de serviço. Como trabalha sob o regime de rotatividade de linhas na Bacia 1, cada dia pode trazer um percurso diferente: ora faz a linha troncal ligando Planaltina à Rodoviária do Plano Piloto via Eixo Norte, ora atende itinerários circulares e alimentadores em Sobradinho ou no Varjão. No balcão, Valdir observa os comunicados em folhas sulfite afixadas e confere no aplicativo corporativo da empresa a sua "tabela", a planilha com o número do carro, horários exatos de saída de cada terminal e previsão de retorno.

Valdir tira seu smartphone do bolso, um aparelho Android conectado a dados móveis 4G, e abre o WhatsApp para avisar no grupo dos colegas que o veículo 105 da frota já está em processo de vistoria no pátio. Valdir não utiliza computadores em seu cotidiano; tudo o que resolve no âmbito digital é realizado pela tela do celular. Quando questionado sobre ferramentas digitais, ele expressa com segurança que *"é fácil usar"*, desde que o aplicativo seja direto e mostre na hora aquilo que ele precisa saber.

Às 05h30, Valdir assume a direção do coletivo e inicia a primeira viagem rumo à área central de Brasília. Durante a condução, sua atenção é total: pedestres atravessando faixas, motociclistas nos pontos cegos e paradas lotadas exigem tranquilidade. Para Seu Valdir, o dia ideal é aquele em que a tabela bate perfeitamente com o fluxo viário e a viagem transcorre sem atritos: *"De termo a gente fala 'só o ouro' pra dizer que tá tudo bem, que tá tranquilo"*.

O maior momento de tensão no dia de Seu Valdir acontece quando ocorrem desencontros de informação. Certa manhã, a SEMOB anunciou em seus canais que haveria alteração no ponto de embarque de uma linha e novos horários para o período de pico matutino. No entanto, os passageiros na parada consultaram a novidade na internet, enquanto a empresa e os motoristas ainda seguiam a ordem de serviço antiga. Ao parar o ônibus na plataforma, Valdir foi surpreendido por reclamações duras e exaltadas de usuários que alegavam que o ônibus estava atrasado em relação ao "site oficial". Valdir nunca acessou o portal institucional da SEMOB (`www.semob.df.gov.br`), para ele, a Secretaria é o órgão que fiscaliza o estado mecânico do ônibus e aplica multas se a viagem atrasar, mas sentiu na própria pele o impacto severo da falta de sincronia entre os dados públicos e a operação real.

No final da tarde, ao estacionar o ônibus na plataforma do terminal para o intervalo regulamentar de descanso, Valdir bebe uma água, senta no banco e pega o celular. Ele gostaria que qualquer aviso sobre bloqueio de vias, obras no Eixo Monumental ou liberação da faixa exclusiva do BRT chegasse de forma mastigada, com mapas visuais claros e avisos em poucas linhas, para que ele e seus colegas pudessem antecipar os desvios sem depender apenas de recados boca a boca no balcão da garagem. Cumprida a última viagem sem incidentes e com a tabela conferida, Seu Valdir entrega o veículo na garagem, assina o fechamento e volta para casa satisfeito por ter garantido mais um dia de trabalho pacífico e seguro para sua família.

---

## 6. Tipologia e Posicionamento no Elenco de Personas (Cooper et al., 2007, pp. 104–107)

A categorização formal da persona apoia-se na taxonomia canônica de seis tipos proposta por Alan Cooper et al. (2007, pp. 104–107), articulando-a ao contexto do projeto SEMOB-DF:

```
                          TIPOLOGIA DE PERSONAS (COOPER ET AL., 2007)
+--------------------------------------------------------------------------------------------------+
| 1. Primária (Primary)     | Alvo central e prioritário da interface gráfica; define o design.    |
| 2. Secundária (Secondary) | Atendida pela interface primária, com necessidades adicionais pontuais.|
| 3. Suplementar (Supplem.) | Representada pelo conjunto sem ditar requisitos exclusivos.          |
| 4. Cliente (Customer)     | Contrata/adquire o produto (ex.: gestores de TI, diretoria pública). |
| 5. Atendida (Served)      | NÃO manipula a interface, mas é DIRETAMENTE AFETADA pelo seu uso.    |
| 6. Negativa (Negative)    | Explicitamente EXCLUÍDA do escopo do produto (não atendida).         |
+--------------------------------------------------------------------------------------------------+
```

### 6.1 Enquadramento no Portal Web Institucional SEMOB: Persona Atendida (*Served Persona*) (Cooper et al., 2007, pp. 104–105)
No âmbito do portal governamental público existente (`www.semob.df.gov.br`), Seu Valdir é formalmente classificado como uma **Persona Atendida (*Served Persona*)**:
- **Definição Teórica (Cooper et al., 2007, p. 105):** *"Served personas are somewhat different from the persona types already discussed. They are not users of the product at all; however, they are directly affected by the use of the product."*
- **Fundamentação Prática:** Valdir não acessa a interface web no computador e não opera o portal governamental diretamente em sua jornada de condução. Contudo, ele é a parte que mais sofre os impactos da qualidade e da consistência desse sistema. Se o portal exibir horários imprecisos aos cidadãos ou demorar a notificar uma obra viária, Valdir arca com o desgaste no trânsito, perda de viagens regulamentadas e conflitos com passageiros indignados na catraca. O design do portal público deve prezar pela integridade da informação em prol da Persona Atendida.

### 6.2 Enquadramento em Futuro Canal Móvel de Operação: Persona Primária (*Primary Persona*) (Cooper et al., 2007, pp. 104–105)
Caso o escopo do projeto de IHC da SEMOB contemple o desenho de uma **Interface Móvel / Canal Dedicado aos Operadores do STPC** (aplicativo móvel governamental para consulta de ordens de serviço, notificações de trânsito em tempo real e avisos operacionais aos trabalhadores rodoviários), Seu Valdir passa a ser a **única Persona Primária (*Primary Persona*)** dessa interface:
- **Regra de Unicidade (Cooper et al., 2007, p. 104):** Cada interface possui estritamente uma persona primária (*"There can be only one primary persona per interface for a product"*). Uma interface móvel voltada ao motorista não deve ser projetada para atender ao passageiro casual nem ao fiscal burocrático; ela deve ser esculpida sob medida para a tela do smartphone de Valdir, com foco em botões amplos, alto contraste, leitura rápida em trânsito e sínteses visuais.

### 6.3 Delimitação de Personas Negativas (*Negative Personas*, Cooper et al., 2007, p. 105)
Conforme Cooper et al. (2007, p. 105), personas negativas servem para comunicar com clareza à equipe para quem o produto *não* está sendo construído. Para proteger o escopo e evitar a dispersão do foco do projeto, foram formalizadas as **Personas Negativas**:
- **Motoristas de Transporte Clandestino / Não Regulamentado:** Operadores de vans ou lotações irregulares que não integram as concessionárias do STPC e não operam sob as ordens de serviço da SEMOB.
- **Motoristas de Veículos de Passeio / Condutores Particulares:** Cidadãos que buscam informações sobre multas do Detran-DF ou tráfego comum de carros particulares, cujo modelo mental difere da operação do transporte público em faixas exclusivas.

---

## 7. Requisitos de IHC e Diretrizes de Design Decorrentes da Persona

A partir das características comportamentais, metas e restrições de Valdir Soares, derivam-se requisitos consolidados de IHC para o ecossistema digital da SEMOB-DF:

1. **Sincronização Absoluta de Dados em Tempo Real:** As tabelas de horários, itinerários e alterações de paradas publicadas no portal devem manter sincronia imediata com as ordens de serviço repassadas às garagens das operadoras, impedindo que o passageiro veja uma informação no site enquanto o motorista cumpre outra ordem da empresa.
2. **Prioridade *Mobile-First* Estrita:** Qualquer módulo ou tela destinada ao consumo rápido de informes viários deve ser concebida sob os princípios do design móvel para smartphones, compatível com conexões 4G/5G oscilantes e telas de toque.
3. **Comunicação Multimodal e Redação Visual:** Mensagens sobre obras, desvios e interdições devem substituir longos memorandos e termos jurídicos por esquemas gráficos objetivos, mapas vetoriais simples de rotas alternativas e textos curtos em marcadores (*bullet points*).
4. **Visibilidade Imediata de Status:** Informações críticas (ex.: "Faixa Exclusiva da EPTG Liberada hoje até 10h") devem figurar com destaque visual e alto contraste na página inicial, dispensando navegação por menus aninhados ou barras de pesquisa complexas.

---

## 8. Síntese Metodológica do Modelo e Fundamentação na Literatura (Cooper et al., 2007)

O quadro a seguir consolida a correspondência entre os preceitos teóricos e metodológicos do *Goal-Directed Design* (Cooper, Reimann e Cronin, 2007) e a sua materialização empírica no modelo da persona Valdir Soares:

<div align="center">
<p><strong>Tabela 1</strong> — Rastreabilidade entre a Metodologia de Cooper et al. (2007) e a Persona Valdir Soares</p>
</div>

| Dimensão Metodológica | Preceito Teórico de Design de Interação | Referência na Literatura | Materialização no Modelo de Valdir Soares | Seção Correspondente |
| :--- | :--- | :--- | :--- | :--- |
| **Fundamentação Empírica** | Arquétipos compostos ancorados em dados comportamentais qualitativos reais | Cooper et al. (2007, p. 76) | Construída a partir de entrevista semiestruturada de campo com motorista real (`MOT-01`). | Seção 1.1 |
| **Limites de Escopo** | Prevenção do "usuário elástico" e do "design autorreferencial" | Cooper et al. (2007, p. 80) | Fixação em uso exclusivo de smartphone 4G, sem acesso ou suposições de habilidades em desktop. | Seção 1.2 |
| **Distinção de Domínio** | Separação entre personas de design e segmentos mercadológicos | Cooper et al. (2007, p. 86) | Foco em modelo mental de condução, rotas e metas no trânsito, e não em dados de consumo. | Seção 1.3 |
| **Centralidade de Metas** | Metas (*goals*) como fim primordial e tarefas (*tasks*) como meios | Cooper et al. (2007, p. 88) | Busca de previsibilidade temporal e paz no trânsito acima de procedimentos de navegação. | Seção 4 |
| **Metas de Experiência** | Como o usuário deseja se sentir emocionalmente durante a interação | Cooper et al. (2007, p. 92); Norman (2004) | Sentir-se no controle da escala, respaldado perante o público e tranquilo ("só o ouro"). | Seção 4.1 |
| **Metas Finais** | Motivações práticas e diretas na rotina de uso (3 a 5 metas) | Cooper et al. (2007, p. 93) | Consulta instantânea de horários, alertas antecipados de desvios e cumprimento da OS. | Seção 4.2 |
| **Metas de Vida** | Aspirações reflexivas de longo prazo (zero ou uma meta de vida) | Cooper et al. (2007, p. 93) | Sustentar a família com dignidade e alcançar uma aposentadoria com saúde e respeito. | Seção 4.3 |
| **Harmonização de Metas** | Metas técnicas e de negócio tratadas como metas de não-usuários | Cooper et al. (2007, p. 94) | Metas da SEMOB não podem comprometer ou desestabilizar a operação real do motorista. | Seção 4.4 |
| **Dignidade Humana** | Diretriz de ouro de não fazer o usuário se sentir estúpido | Cooper et al. (2007, p. 97) | Linguagem livre de burocracias jurídicas e dados sincronizados que evitam constrangimento. | Seção 4.5 |
| **Variáveis Comportamentais** | Mapeamento das 5 categorias (Atividades, Atitudes, Aptidões, etc.) | Cooper et al. (2007, p. 98) | Cobertura sistemática dos 5 eixos comportamentais a partir dos achados de campo. | Seção 2.1 |
| **Eixos Contínuos** | Mapeamento posicional relativo em escalas contínuas | Cooper et al. (2007, p. 99) | Posicionamento bipolar relativo frente a passageiros e administradores do sistema. | Seção 2.2 |
| **Conexões Causais** | Padrões comportamentais com conexões lógicas de causa e efeito | Cooper et al. (2007, p. 100) | Relação causal entre rotatividade de linhas, dependência de smartphone e risco de atrasos. | Seção 2.3 |
| **Diferenciação** | Eliminação de redundâncias por comportamento significativo | Cooper et al. (2007, pp. 101–102) | Distinção total de passageiros e fiscais, com modelo mental único de condução viária. | Seção 2.4 |
| **Narrativa Contextual** | Prosa em 3ª pessoa centrada no dia típico e ambiente de uso | Cooper et al. (2007, pp. 102–104) | Descrição do turno das 04h15 na garagem do SGO até o encerramento da jornada. | Seção 5 |
| **Realismo Visual** | Fotografia verossímil que sugere ambiente e vestuário real | Cooper et al. (2007, p. 103) | Retrato fotográfico em uniforme profissional na garagem da Piracicabana, sem poses de estúdio. | Seção 3 |
| **Sobriedade Ficcional** | Detalhes de apoio comedidos, evitando estereótipos ou piadas | Cooper et al. (2007, p. 100) | Biografia funcional e verossímil a serviço exclusivo das decisões de engenharia de IHC. | Seções 3 e 5 |
| **Tipologia Formal** | Classificação nos seis papéis canônicos de personas | Cooper et al. (2007, pp. 104–105) | Enquadramento formal nos tipos canônicos de Alan Cooper. | Seção 6 |
| **Persona Atendida** | Afetada diretamente pelo produto sem operar a interface gráfica | Cooper et al. (2007, p. 105); Eason (1987) | Classificação no Portal SEMOB institucional: impactado por horários e avisos públicos. | Seção 6.1 |
| **Unicidade da Primária** | Uma única persona primária por interface de software | Cooper et al. (2007, pp. 104–105) | Persona Primária exclusiva em eventual interface móvel para operadores rodoviários. | Seção 6.2 |
| **Proteção de Escopo** | Identificação clara de personas negativas | Cooper et al. (2007, p. 105) | Exclusão deliberada de transporte clandestino e automóveis particulares do foco de design. | Seção 6.3 |

<div align="center">
<p><em>Fonte: Carlos Costa (2026).</em></p>
</div>

---

## 9. Referências Bibliográficas

- **BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da.** *Interação Humano-Computador*. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 5: Identificação de Necessidades dos Usuários e Requisitos de IHC, pp. 134–158.
- **BRASIL. Conselho Nacional de Saúde.** *Resolução nº 510, de 7 de abril de 2016*. Normas aplicáveis a pesquisas em Ciências Humanas e Sociais envolvendo seres humanos. Diário Oficial da União: seção 1, Brasília, DF, n. 98, p. 44–46, 24 maio 2016.
- **COOPER, Alan; REIMANN, Robert; CRONIN, Dave.** *About Face 3: The Essentials of Interaction Design*. Indianapolis: Wiley Publishing, Inc., 2007. ISBN: 978-0-470-08411-3. Chapter 5: *Modeling Users: Personas and Goals*, pp. 75–108.
- **EASON, Ken.** *Information Technology and Organisational Change*. London: Taylor & Francis, 1987.
- **NORMAN, Donald A.** *Emotional Design: Why We Love (or Hate) Everyday Things*. New York: Basic Books, 2004.
- **PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen.** *Design de Interação: Além da Interação Humano-Computador*. 3. ed. Porto Alegre: Bookman, 2013.
