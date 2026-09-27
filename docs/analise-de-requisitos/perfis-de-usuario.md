# Perfis de Usuário

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Criação do documento de organização dos perfis de usuário identificados no site **SEMOB-DF**. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 27/09/2026 | 1.1 | Adição do perfil de usuário dos Motoristas de Ônibus do STPC/DF (stakeholder/usuário terciário). | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |

---

## 1. Introdução

O perfil de usuário é uma descrição detalhada das características dos usuários-alvo de um sistema. Em um projeto de Interação Humano-Computador (IHC), compreender quem são as pessoas que interagem ou interagirão com o produto é o primeiro passo para o desenvolvimento de uma interface que possua alta qualidade de uso e proporcione uma boa experiência (Barbosa et al., 2021).

A construção desse perfil busca levantar dados diversificados sobre o público, tais como:
* **Dados demográficos:** faixa etária, gênero, escolaridade e ocupação.
* **Relação com a tecnologia:** nível de experiência e facilidade com dispositivos e sistemas computacionais (alfabetismo computacional).
* **Conhecimento do domínio:** o quanto os usuários conhecem sobre o assunto e as tarefas que o sistema se propõe a apoiar.
* **Atitudes, expectativas e motivações:** o que esperam do sistema, quais são seus objetivos primários e secundários, e como costumam reagir à adoção de novas tecnologias.

Este documento tem como objetivo principal definir os perfis de usuário do site da **SEMOB-DF**, a partir da realização das metodologias de entrevista, brainstorming e análise de documentos.

---

## 2. Enquadramento e Categorização de Stakeholders (SEMOB-DF)

Na literatura clássica de IHC, identificar as partes interessadas (*stakeholders*) é uma etapa basilar para não restringir o design a visões parciais ou unilaterais da organização (Barbosa e Silva, 2010, p. 136; Eason, 1987). No contexto da **Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)**, os atores do ecossistema dividem-se em três categorias funcionais:

### 2.1 Usuários Primários
Pessoas que utilizam o Portal SEMOB-DF de forma direta, frequente e *hands-on* para atingir suas metas imediatas:
* **Passageiros do STPC/DF:** Cidadãos e estudantes que buscam linhas, horários, itinerários atualizados, informações sobre o Passe Livre Estudantil e canais de Ouvidoria.

### 2.2 Usuários Secundários
Indivíduos que utilizam o sistema de maneira esporádica, pontual ou parametrizadora:
* **Fiscais de Transporte e Servidores Administrativos:** Profissionais que inserem relatórios de fiscalização, cadastram ordens de serviço operacionais e atualizam portarias e normativas no portal.

### 2.3 Usuários / Stakeholders Terciários
Atores que raramente operam a interface web de forma direta, mas são diretamente afetados pelo sistema e pelas decisões/dados nele veiculados:
* **Motoristas e Cobradores de Ônibus do STPC/DF:** Profissionais que operam as linhas nas vias públicas. Se o portal oficial divulgar rotas divergentes, horários incorretos ou falhar ao comunicar desvios e interdições, o motorista arca diretamente com o desgaste no trânsito, perda de viagens regulamentadas e atrito interpessoal direto com passageiros insatisfeitos.

---

## 3. Perfil de Usuário Primário: Passageiros do STPC/DF

### 3.1 Descrição Geral

O usuário primário do site da Semob é um(a) jovem adulto(a) de 18 a 39 anos, com leve predominância feminina e de pessoas autodeclaradas negras, que mora em uma Região Administrativa de renda média-baixa ou baixa (grupos que reúnem hoje mais da metade da população do DF) e não tem carro no domicílio. Estuda, trabalha ou concilia as duas coisas, e depende do ônibus — e, em algumas regiões, também do metrô — para deslocamentos diários que costumam levar mais de 15 minutos. É um usuário de tecnologia altamente conectado: quase certamente tem smartphone próprio e acessa a internet todos os dias pelo aparelho, em um estado que lidera os indicadores de conectividade do país. Ainda assim, seu domínio é o transporte no dia a dia, não a estrutura institucional por trás dele: conhece de cor seu trajeto, mas não separa claramente Semob, BRB Mobilidade, Metrô-DF e as empresas operadoras. É provável que utilize algum benefício (Passe Livre Estudantil e/ou Vale-Transporte), o que o torna um usuário ativo e recorrente das tarefas cadastrais do site, além das consultas cotidianas de linhas e horários.

### 3.2 Dados Demográficos, Relação com a Tecnologia e Conhecimento do Domínio

<div align="center">
<p><strong>Tabela 1</strong> — Dados Demográficos, Relação com Tecnologia e Conhecimento de Domínio do Usuário Primário</p>
</div>

| Característica | Faixa/categoria predominante no perfil primário |
|---|---|
| Faixa etária | Concentração em jovens adultos, sobretudo **18 a 39 anos**. Estudantes de 18 a 24 anos têm a maior taxa de uso de ônibus para ir à escola: 44,5% entre homens e 55,2% entre mulheres dessa faixa |
| Tendência etária do DF (contexto) | A população do DF está envelhecendo: a fatia com menos de 30 anos caiu de 50,7% para 42,8% em pouco mais de uma década, e quem tem 30 anos ou mais já é 57,3% do total |
| Sexo | Leve maioria feminina entre quem usa ônibus: 39,3% das mulheres ocupadas o utilizam para ir ao trabalho, contra 28,6% dos homens. Na população geral do DF, mulheres são 52% e homens, 48% |
| Cor/raça | Maioria autodeclarada negra (preta ou parda, na classificação do IBGE): 66,5% de quem vai de ônibus ao trabalho se declara negro, contra 33,5% não negros |
| Ocupação / motivo do deslocamento | Estudantes e trabalhadores(as) formais ou informais; é comum conciliar estudo (frequentemente noturno) e trabalho durante o dia |
| Renda individual do trabalho principal | Até 2 salários mínimos: nessa faixa, o ônibus já é o meio mais usado tanto por homens (42,8% a 48,2%) quanto por mulheres (54,5% a 63,5%). Acima de 2 salários mínimos, o automóvel passa a predominar |
| Renda domiciliar média da região de moradia | Moradores de RAs de renda média-baixa e baixa (grupos 3 e 4 da Codeplan: Ceilândia, Samambaia, Planaltina, Itapoã, Paranoá, Recanto das Emas, entre outras), com renda domiciliar média de R$ 3.933 e R$ 2.787, respectivamente |
| Peso desses grupos na população do DF | Os grupos 3 e 4 somavam, em 2021, cerca de 1,63 milhão de pessoas — **por volta de 54%** da população somada dos quatro grupos de renda mapeados pela Codeplan |
| Posse de automóvel no domicílio | Ausência de carro é comum: 38,4% dos domicílios do grupo 3 e 49,6% dos do grupo 4 não têm nenhum automóvel |
| Tempo típico de deslocamento | Trajetos longos: 74% a 76% dos moradores dos grupos 2, 3 e 4 levam mais de 15 minutos para chegar ao trabalho |
| Acesso à internet no domicílio | Quase universal: 98% dos domicílios do DF tinham internet em 2024, a maior proporção do país |
| Letramento digital, por escolaridade | Varia com a instrução: 99,7% de quem tem ensino superior usa internet, caindo para 86,2% entre quem não tem instrução formal |
| Frequência de uso do transporte coletivo | Diária ou quase diária, muitas vezes combinando dois modos ou duas linhas com integração (Inferência a partir do padrão diário de deslocamento para trabalho/estudo) |
| Conhecimento institucional | Baixo: conhece bem o próprio trajeto e os horários de que precisa, mas não distingue claramente os papéis da Semob (regulação e planejamento), do BRB Mobilidade (emissão de cartões e cadastro do Passe Livre), do Metrô-DF e das empresas operadoras de ônibus |
| Idiomas e Jargões | Certo grau de desconhecimento de termos técnicos como **"Integração tarifária"**, **"Linha circular"**, **"Validador"** |

<div align="center">
<p><em>Fonte: Gabriel Melo (2026).</em></p>
</div>

#### Fontes de dados utilizadas:
* Pesquisa Distrital por Amostra de Domicílios — PDAD 2021.
* Relatório de Ouvidoria — 1º Trimestre de 2026 (Parte Geral).
* Entrevistas com usuários primários (ver página de [Entrevistas](entrevistas.md)).

---

## 4. Perfil de Usuário Terciário: Motoristas de Ônibus do STPC/DF

### 4.1 Contextualização e Papel Operacional (Eason, 1987)

O presente perfil consolida a identificação e caracterização dos motoristas de transporte público coletivo urbano que atuam no Distrito Federal, no âmbito da análise e avaliação de IHC do portal da SEMOB-DF. 

A concepção deste perfil apoia-se estritamente nas diretrizes metodológicas do Capítulo 5 (*Identificação de Necessidades dos Usuários e Requisitos de IHC*) de **Barbosa e Silva (2010)** e na literatura clássica de classificação de partes interessadas de **Eason (1987)**. O objetivo é mapear as características demográficas, habilidades tecnológicas, rotina de trabalho, conhecimento do domínio e necessidades latentes desse grupo profissional, fornecendo subsídios empíricos sólidos para as etapas subsequentes do projeto (como Personas, Cenários e Análise de Tarefas).

> **Achado Empírico Central da Pesquisa:**  
> Ao ser questionado diretamente sobre o uso de canais digitais (*Pergunta 16 do roteiro*), o motorista entrevistado (**MOT-01**) informou que **nunca acessou o site oficial da SEMOB-DF**, utilizando exclusivamente o aplicativo interno da empresa concessionária (Viação Piracicabana) e os avisos informativos afixados no balcão da garagem.

À luz da teoria de **Eason (1987)** e **Barbosa e Silva (2010, p. 136)**, os motoristas de ônibus se consolidam como **stakeholders/usuários terciários** em relação ao Portal da SEMOB:
* **Não manipulam a interface gráfica diretamente** em sua jornada de direção e trabalho.
* **São afetados de forma crítica pelo sistema:** A SEMOB-DF tem o papel de planejar, auditar e fiscalizar o cumprimento das tabelas horárias e a conservação da frota. Se o portal oficial divulgar rotas divergentes, horários incorretos ou falhar ao comunicar bloqueios e alterações viárias, **o motorista arca com o desgaste no trânsito, perda de viagens regulamentadas e atrito interpessoal direto com passageiros insatisfeitos**.
* **Interdependência Operacional:** O participante pontuou de forma enfática que a informação de transporte é sistêmica e envolve uma cadeia integrada: *"Todos precisam"* (cobradores, fiscais de ponto, despachantes, passageiros e motoristas).

### 4.2 Metodologia e Aspectos Éticos

A coleta de dados empíricos foi conduzida por meio de **entrevista semiestruturada presencial individual**, seguindo o [Roteiro de Entrevista](../assets/PDFs/Roteiro_Entrevista_Motoristas.pdf) e as práticas de escuta ativa e postura neutra consolidadas no [Treinamento TRE-01](entrevistas.md#31-treinamento-01-motoristas-de-onibus-semob-df). A condução e a sistematização dos resultados seguiram os critérios de conformidade da [Lista de Verificação de Perfil de Usuário](../assets/PDFs/lista_verif_perfil_user_individual.pdf).

#### Dados da Sessão de Coleta:
* **Técnica Empregada:** Entrevista semiestruturada presencial.
* **Entrevistador:** [Carlos Costa](https://github.com/carloshfgit) (Condução) e [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) (Filmagem).
* **Local de Aplicação:** Garagem da Viação Piracicabana, Setor de Garagens Oficiais (SGO), Plano Piloto, Brasília - DF.
* **Duração Total da Entrevista:** 6 minutos (00:06:00).
* **Registro em Vídeo:** Disponível na íntegra na seção da [Entrevista ENT-01](entrevistas.md#41-entrevista-01-potencial-usuario-do-semob-df-motorista-de-onibus).
* **Forma de Registro:** Gravação audiovisual consentida e anotações contextuais imediatas.

#### Salvaguardas Éticas (Resolução CNS nº 510/2016 e Barbosa e Silva, 2010):
1. **Dignidade e Autonomia:** O entrevistado foi informado sobre a natureza estritamente acadêmica da pesquisa e acolhido em seu ambiente de descanso entre turnos.
2. **Consentimento Livre e Esclarecido:** Foi apresentado e formalizado o Termo de Consentimento Livre e Esclarecido ([TCLE](../assets/PDFs/TCLE_entrevista_motorista.pdf)), esclarecendo objetivos, ausência de remuneração/custos e a garantia de que as respostas não seriam repassadas para fins fiscalizatórios ou punitivos da empresa/órgão (detalhes na página de [Aspectos Éticos](aspectos-eticos.md)).
3. **Confidencialidade e Dados Brutos:** Os arquivos de áudio e vídeo originais e anotações diretas são de acesso restrito à equipe de avaliação.
4. **Anonimato e Preservação da Imagem:** O participante é identificado unicamente pelo código alfanumérico **MOT-01**, omitindo-se seu nome completo.
5. **Liberdade de Recusa e Desistência:** Foi garantido ao entrevistado o direito irrestrito de recusar-se a responder qualquer pergunta ou encerrar a sessão a qualquer tempo sem nenhum prejuízo.

### 4.3 Caracterização Detalhada do Perfil (Barbosa e Silva, 2010)

Esta seção documenta sistematicamente os grupos de atributos preconizados na Seção 5.2 (pp. 134–135) da obra de Barbosa e Silva (2010), sustentados pelas evidências e respostas colhidas junto ao participante **MOT-01**:

#### 4.3.1 Dados Demográficos e Educação
O participante entrevistado (**MOT-01**) tem 48 anos de idade, é do gênero masculino e possui o ensino médio incompleto. No que diz respeito às suas habilidades de leitura e letramento, o condutor apresenta capacidade de leitura funcional plenamente orientada à sua rotina operacional, mantendo o hábito frequente de consultar comunicados impressos e informativos disponibilizados no balcão de escala da garagem (*"Sempre que tem disponível a gente lê né, quando eles colocam lá no balcão"*). Textos excessivamente longos, burocráticos ou com jargões jurídicos demandam simplificação textual e síntese visual para assegurar uma comunicação rápida e eficiente.

#### 4.3.2 Perfil Profissional, Histórico e Organização
Atuando como motorista profissional de transporte coletivo urbano há 16 anos, o participante possui 11 anos de vínculo contínuo na Viação Piracicabana, concessionária responsável pela operação da Bacia 1 do STPC/DF (que abrange Plano Piloto, Sobradinho, Planaltina, Fercal, Varjão, Lago Norte, Itapoã e Cruzeiro) com ampla frota de veículos. Esse histórico reflete expressiva maturidade profissional, estabilidade e profundo domínio prático dos eixos viários e do fluxo de tráfego do DF. O motorista opera sob regime de rotatividade de linhas (*"Várias linhas"*), o que exige permanente adaptabilidade a diferentes trajetos, paradas e densidades de trânsito. Sua motivação central reside no cumprimento pontual e previsível da escala de trabalho diária, aliado à manutenção de um ambiente pacífico, seguro e sem atritos com os passageiros.

#### 4.3.3 Linguagem, Comunicação e Jargão Profissional
O motorista é falante nativo de Português do Brasil e compartilha amplamente o vocabulário e as expressões típicas da cultura rodoviária. Durante a entrevista, destacou de forma natural o uso de termos próprios do ofício:
> *"De termo a gente fala 'só o ouro' pra falar que tá tudo bem, que tá tranquilo."*

Além dessa expressão, reconhece e utiliza com frequência outros termos operacionais essenciais, como *"tabela"* (cumprimento dos horários programados de saída e percurso), *"balcão"* (espaço físico de divulgação de avisos e escalas na garagem), *"soltura"* (momento de liberação dos ônibus da garagem para o início da operação) e *"fiscalização"*. Como diretriz de design para IHC, qualquer canal ou interface voltada a esse público deve dispensar jargões acadêmicos ou excesso de siglas burocráticas governamentais, priorizando uma linguagem direta, concisa e familiar ao trabalhador rodoviário.

#### 4.3.4 Experiência Tecnológica, Infraestrutura e Aprendizado
No âmbito de infraestrutura e hardware, o participante utiliza única e exclusivamente o seu **smartphone pessoal** fora dos momentos de condução do veículo (*"Só o celular mesmo"*), não fazendo uso rotineiro de computadores de mesa (*desktops*), notebooks ou tablets. Sua conectividade é mantida de forma ininterrupta por meio de **dados móveis próprios (4G/5G)**, sem dependência de redes Wi-Fi públicas de garagens ou terminais. No cotidiano digital, seus hábitos concentram-se no uso prioritário do **WhatsApp** (tanto para contatos interpessoais quanto para grupos operacionais) e do aplicativo oficial da Viação Piracicabana (voltado à consulta corporativa de escalas e dados funcionais). Perante novas tecnologias, expressou postura pragmática, confiante e sem aversão prévia, afirmando que *"é fácil usar"* quando surge uma nova aplicação. Quanto ao estilo de suporte e aprendizado, revelou clara preferência multimodal:
> *"Prefiro os dois, visual e manual escrito."*  
Essa constatação indica que o condutor assimila melhor novos recursos por meio de orientações visuais objetivas (telas e ícones claros) combinadas a instruções textuais breves de rápida consulta.

#### 4.3.5 Conhecimento do Domínio e Sistemas Concorrentes/Análogos
O motorista demonstra conhecimento preciso acerca do papel institucional da SEMOB-DF, reconhecendo-a como o órgão público regulador responsável por fiscalizar os contratos e as exigências operacionais das concessionárias:
> *"É fiscalizar né, os horários, a manutenção dos ônibus se tá em dia."*  
Em relação a sistemas análogos e fontes atuais de informação, o participante relatou que não acessa o portal web oficial do órgão. Em contrapartida, todas as suas dúvidas operacionais, alterações de itinerário e avisos institucionais são sanadas diretamente pelo aplicativo interno da empresa ou pelas informações afixadas no balcão da garagem.

#### 4.3.6 Objetivos, Tarefas e Gravidade dos Erros
A principal meta do participante em relação aos dados do sistema é a previsibilidade temporal, isto é, ter acesso imediato, claro e confiável à programação das viagens (*"Mais os horários mesmo"*). Entre suas tarefas de maior frequência diária, destaca-se a conferência pontual das saídas e chegadas da tabela horária para assegurar a regularidade da linha. Ao avaliar as consequências de divergências ou falhas informacionais, o entrevistado foi enfático ao alertar que erros no sistema geram impactos altamente negativos no ambiente real:
> *"Com certeza teria muitos impactos negativos."*  
No nível operacional, inconsistências provocam atrasos em cascata na tabela do dia, perda de viagens regulamentadas e multas contratuais para a empresa concessionária. Já no nível humano, expõem o motorista a hostilidades, constrangimentos e cobranças diretas na catraca por passageiros insatisfeitos com atrasos ou mudanças não informadas, gerando sobrecarga emocional, estresse severo e potenciais riscos à segurança viária.

### 4.4 Matriz-Resumo do Perfil de Usuário Terciário

<div align="center">
<p><strong>Tabela 2</strong> — Matriz-Resumo do Perfil de Usuário Terciário (Motoristas de Ônibus do STPC/DF)</p>
</div>

| Dimensão de Análise | Atributo Levantado | Evidência / Resposta do Participante (`MOT-01`) |
| :--- | :--- | :--- |
| **Classificação de Stakeholder** | Usuário/Stakeholder Terciário | Não interage com o portal web; é impactado diretamente pela fiscalização e horários. |
| **Idade / Gênero** | 48 anos / Masculino | Ampla vivência pessoal e maturidade profissional. |
| **Escolaridade** | Ensino Médio Incompleto | Leitura funcional focada em avisos operacionais objetivos. |
| **Experiência na Ocupação** | 16 anos (11 anos na Piracicabana) | Alto domínio prático das rotas da Bacia 1 e da dinâmica do trânsito do DF. |
| **Dispositivo de Acesso** | Exclusivamente Smartphone | Conexão 4G/5G móvel; ausência de acesso por computadores no cotidiano. |
| **Apps de Maior Frequência** | WhatsApp e App da Concessionária | Familiaridade com interfaces conversacionais e dashboards corporativos de rotas. |
| **Atitude com Tecnologia** | Positiva / Confiante | *"É fácil usar"*, receptividade sem atrito cognitivo aparente. |
| **Preferência de Treinamento** | Multimodal (Visual + Escrito curto) | Guias visuais passo a passo integrados a resumos impressos/digitais. |
| **Papel Percebido da SEMOB** | Fiscalizador de Horários e Frota | Relação regulatória que impacta sua jornada de trabalho. |
| **Meta Principal com o Sistema** | Consulta Rápida de Horários | *"Mais os horários mesmo"*, busca de previsibilidade temporal. |
| **Impacto de Falhas na Informação**| Severo / Crítico | Descompasso em escalas, multas, desgaste interpessoal com passageiros do sistema. |

<div align="center">
<p><em>Fonte: Carlos Costa (2026).</em></p>
</div>

### 4.5 Implicações para o Design e Requisitos de IHC do Portal SEMOB-DF

Embora os motoristas não sejam os operadores prioritários da interface web da SEMOB, a caracterização de suas demandas como stakeholders terciários impõe diretrizes relevantes de engenharia de usabilidade para o portal:

1. **Fidelidade e Sincronização de Dados em Tempo Real:** As informações de itinerários, desvios e horários exibidas publicamente no portal devem manter total consistência com os sistemas internos repassados às concessionárias (Piracicabana, Urbi, etc.). Inconsistências de dados geram conflitos no ponto de embarque entre o passageiro (que consultou a web) e o motorista (que cumpre a ordem da empresa).
2. **Design Responsivo Estrito (*Mobile-First*):** Qualquer iniciativa futura de comunicação pública ou funcionalidade voltada aos operadores do sistema deve ser desenhada prioritariamente para telas de smartphones e consumo sob redes móveis (3G/4G/5G).
3. **Comunicação Visual e Direta:** Uso de alertas destacados e linguagem acessível para avisos viários emergenciais (obras, desvios e fechamento de faixas exclusivas), combinando mapas gráficos simples com resumos textuais objetivos.
4. **Oportunidade de Integração Operacional:** Possibilidade futura de criação de uma seção dedicada aos operadores e trabalhadores do transporte coletivo no portal, centralizando avisos normativos e canais de contato que hoje ficam restritos aos balcões físicos das garagens.

---

## 5. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 5: Identificação de Necessidades dos Usuários e Requisitos de IHC (pp. 134–158).
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 466, de 12 de dezembro de 2012**. Trata de pesquisas envolvendo seres humanos. Brasília: Diário Oficial da União, 2013.
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais envolvendo seres humanos. Brasília: Diário Oficial da União, 2016.
* COMPANHIA DE PLANEJAMENTO DO DISTRITO FEDERAL (CODEPLAN). **Pesquisa Distrital por Amostra de Domicílios — PDAD 2021**. Brasília: Codeplan, 2021.
* EASON, Ken. **Information Technology and Organisational Change**. London: Taylor & Francis, 1987.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da Interação Humano-Computador**. 3. ed. Porto Alegre: Bookman, 2013.
* SECRETARIA DE ESTADO DE TRANSPORTE E MOBILIDADE DO DISTRITO FEDERAL (SEMOB-DF). **Relatório de Ouvidoria — 1º Trimestre de 2026 (Parte Geral)**. Brasília: SEMOB-DF, 2026.
