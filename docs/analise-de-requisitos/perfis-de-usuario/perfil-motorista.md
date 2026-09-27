# Perfil de Usuário: Motoristas de Ônibus do STPC/DF (Usuário Terciário)

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Elaboração inicial do Perfil de Usuário a partir de entrevista empírica com motorista (MOT-01) na Garagem Piracicabana (SGO). | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |
| 27/09/2026 | 1.1 | Modularização em artefato próprio e refinamento textual em formato discursivo contínuo. | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |

---

## 1. Introdução e Contextualização

O presente documento consolida a identificação e caracterização do **Perfil de Usuário** referente aos motoristas de transporte público coletivo urbano que atuam no Distrito Federal, no âmbito da análise e avaliação de **Interação Humano-Computador (IHC)** do **Portal da Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)** (`www.semob.df.gov.br`).

A concepção deste perfil apoia-se estritamente nas diretrizes metodológicas do Capítulo 5 (*Identificação de Necessidades dos Usuários e Requisitos de IHC*) da obra de **Barbosa e Silva (2010)**, bem como na literatura clássica de classificação de partes interessadas de **Eason (1987)**. O objetivo é mapear as características demográficas, habilidades tecnológicas, rotina de trabalho, conhecimento do domínio e necessidades latentes desse grupo profissional, fornecendo subsídios empíricos sólidos para as etapas subsequentes do projeto — em especial a modelagem da [Persona: Valdir Soares ("Seu Valdir")](../personas/valdir-soares.md), Cenários e Análise de Tarefas.

---

## 2. Enquadramento e Papel Operacional (Eason, 1987)

Na literatura de IHC, identificar as partes interessadas (*stakeholders*) é etapa basilar para não restringir o design a visões parciais da organização (Barbosa e Silva, 2010, p. 136; Eason, 1987).

> **Achado Empírico Central da Pesquisa:**  
> Ao ser questionado diretamente sobre o uso de canais digitais (*Pergunta 16 do roteiro*), o motorista entrevistado (**MOT-01**) informou que **nunca acessou o site oficial da SEMOB-DF**, utilizando exclusivamente o aplicativo interno da empresa concessionária (Viação Piracicabana) e os avisos informativos afixados no balcão da garagem.

À luz da teoria de **Eason (1987)** e **Barbosa e Silva (2010, p. 136)**, os motoristas de ônibus se consolidam como **stakeholders/usuários terciários** em relação ao Portal da SEMOB:
* **Não manipulam a interface gráfica diretamente** em sua jornada de direção e trabalho.
* **São afetados de forma crítica pelo sistema:** A SEMOB-DF tem o papel de planejar, auditar e fiscalizar o cumprimento das tabelas horárias e a conservação da frota. Se o portal oficial divulgar rotas divergentes, horários incorretos ou falhar ao comunicar bloqueios e alterações viárias, **o motorista arca com o desgaste no trânsito, perda de viagens regulamentadas e atrito interpessoal direto com passageiros insatisfeitos**.
* **Interdependência Operacional:** O participante pontuou de forma enfática que a informação de transporte é sistêmica e envolve uma cadeia integrada: *"Todos precisam"* (cobradores, fiscais de ponto, despachantes, passageiros e motoristas).

---

## 3. Metodologia e Aspectos Éticos

A coleta de dados empíricos foi conduzida por meio de **entrevista semiestruturada presencial individual**, seguindo o [Roteiro de Entrevista](../../assets/PDFs/Roteiro_Entrevista_Motoristas.pdf) e as práticas de escuta ativa e postura neutra consolidadas no [Treinamento TRE-01](../entrevistas.md#31-treinamento-01-motoristas-de-onibus-semob-df).

### 3.1 Dados da Sessão de Coleta
* **Técnica Empregada:** Entrevista semiestruturada presencial.
* **Entrevistador:** [Carlos Costa](https://github.com/carloshfgit) (Condução) e [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) (Filmagem).
* **Local de Aplicação:** Garagem da Viação Piracicabana, Setor de Garagens Oficiais (SGO), Plano Piloto, Brasília - DF.
* **Duração Total da Entrevista:** 6 minutos (00:06:00).
* **Registro em Vídeo:** Disponível na íntegra na seção da [Entrevista ENT-01](../entrevistas.md#41-entrevista-01-potencial-usuario-do-semob-df-motorista-de-onibus).
* **Forma de Registro:** Gravação audiovisual consentida e anotações contextuais imediatas.

### 3.2 Salvaguardas Éticas (Resolução CNS nº 510/2016 e Barbosa e Silva, 2010)
1. **Dignidade e Autonomia:** O entrevistado foi informado sobre a natureza estritamente acadêmica da pesquisa e acolhido em seu ambiente de descanso entre turnos.
2. **Consentimento Livre e Esclarecido:** Foi apresentado e formalizado o Termo de Consentimento Livre e Esclarecido ([TCLE](../../assets/PDFs/TCLE_entrevista_motorista.pdf)), esclarecendo objetivos, ausência de remuneração/custos e a garantia de que as respostas não seriam repassadas para fins fiscalizatórios ou punitivos da empresa/órgão (detalhes na página de [Aspectos Éticos](../aspectos-eticos.md)).
3. **Confidencialidade e Dados Brutos:** Os arquivos de áudio e vídeo originais e anotações diretas são de acesso restrito à equipe de avaliação.
4. **Anonimato e Preservação da Imagem:** O participante é identificado unicamente pelo código alfanumérico **MOT-01**, omitindo-se seu nome completo.
5. **Liberdade de Recusa e Desistência:** Foi garantido ao entrevistado o direito irrestrito de recusar-se a responder qualquer pergunta ou encerrar a sessão a qualquer tempo sem nenhum prejuízo.

---

## 4. Caracterização Detalhada do Perfil (Barbosa e Silva, 2010)

Esta seção documenta sistematicamente os grupos de atributos preconizados na Seção 5.2 (pp. 134–135) da obra de Barbosa e Silva (2010), sustentados pelas evidências e respostas colhidas junto ao participante **MOT-01**:

### 4.1 Dados Demográficos e Educação
O participante entrevistado (**MOT-01**) tem 48 anos de idade, é do gênero masculino e possui o ensino médio incompleto. No que diz respeito às suas habilidades de leitura e letramento, o condutor apresenta capacidade de leitura funcional plenamente orientada à sua rotina operacional, mantendo o hábito frequente de consultar comunicados impressos e informativos disponibilizados no balcão de escala da garagem (*"Sempre que tem disponível a gente lê né, quando eles colocam lá no balcão"*). Textos excessivamente longos, burocráticos ou com jargões jurídicos demandam simplificação textual e síntese visual para assegurar uma comunicação rápida e eficiente.

### 4.2 Perfil Profissional, Histórico e Organização
Atuando como motorista profissional de transporte coletivo urbano há 16 anos, o participante possui 11 anos de vínculo contínuo na Viação Piracicabana, concessionária responsável pela operação da Bacia 1 do STPC/DF (que abrange Plano Piloto, Sobradinho, Planaltina, Fercal, Varjão, Lago Norte, Itapoã e Cruzeiro) com ampla frota de veículos. Esse histórico reflete expressiva maturidade profissional, estabilidade e profundo domínio prático dos eixos viários e do fluxo de tráfego do DF. O motorista opera sob regime de rotatividade de linhas (*"Várias linhas"*), o que exige permanente adaptabilidade a diferentes trajetos, paradas e densidades de trânsito. Sua motivação central reside no cumprimento pontual e previsível da escala de trabalho diária, aliado à manutenção de um ambiente pacífico, seguro e sem atritos com os passageiros.

### 4.3 Linguagem, Comunicação e Jargão Profissional
O motorista é falante nativo de Português do Brasil e compartilha amplamente o vocabulário e as expressões típicas da cultura rodoviária. Durante a entrevista, destacou de forma natural o uso de termos próprios do ofício:
> *"De termo a gente fala 'só o ouro' pra falar que tá tudo bem, que tá tranquilo."*

Além dessa expressão, reconhece e utiliza com frequência outros termos operacionais essenciais, como *"tabela"* (cumprimento dos horários programados de saída e percurso), *"balcão"* (espaço físico de divulgação de avisos e escalas na garagem), *"soltura"* (momento de liberação dos ônibus da garagem para o início da operação) e *"fiscalização"*. Como diretriz de design para IHC, qualquer canal ou interface voltada a esse público deve dispensar jargões acadêmicos ou excesso de siglas burocráticas governamentais, priorizando uma linguagem direta, concisa e familiar ao trabalhador rodoviário.

### 4.4 Experiência Tecnológica, Infraestrutura e Aprendizado
No âmbito de infraestrutura e hardware, o participante utiliza única e exclusivamente o seu **smartphone pessoal** fora dos momentos de condução do veículo (*"Só o celular mesmo"*), não fazendo uso rotineiro de computadores de mesa (*desktops*), notebooks ou tablets. Sua conectividade é mantida de forma ininterrupta por meio de **dados móveis próprios (4G/5G)**, sem dependência de redes Wi-Fi públicas de garagens ou terminais. No cotidiano digital, seus hábitos concentram-se no uso prioritário do **WhatsApp** (tanto para contatos interpessoais quanto para grupos operacionais) e do aplicativo oficial da Viação Piracicabana (voltado à consulta corporativa de escalas e dados funcionais). Perante novas tecnologias, expressou postura pragmática, confiante e sem aversão prévia, afirmando que *"é fácil usar"* quando surge uma nova aplicação. Quanto ao estilo de suporte e aprendizado, revelou clara preferência multimodal:
> *"Prefiro os dois, visual e manual escrito."*  
Essa constatação indica que o condutor assimila melhor novos recursos por meio de orientações visuais objetivas (telas e ícones claros) combinadas a instruções textuais breves de rápida consulta.

### 4.5 Conhecimento do Domínio e Sistemas Concorrentes/Análogos
O motorista demonstra conhecimento preciso acerca do papel institucional da SEMOB-DF, reconhecendo-a como o órgão público regulador responsável por fiscalizar os contratos e as exigências operacionais das concessionárias:
> *"É fiscalizar né, os horários, a manutenção dos ônibus se tá em dia."*  
Em relação a sistemas análogos e fontes atuais de informação, o participante relatou que não acessa o portal web oficial do órgão. Em contrapartida, todas as suas dúvidas operacionais, alterações de itinerário e avisos institucionais são sanadas diretamente pelo aplicativo interno da empresa ou pelas informações afixadas no balcão da garagem.

### 4.6 Objetivos, Tarefas e Gravidade dos Erros
A principal meta do participante em relação aos dados do sistema é a previsibilidade temporal, isto é, ter acesso imediato, claro e confiável à programação das viagens (*"Mais os horários mesmo"*). Entre suas tarefas de maior frequência diária, destaca-se a conferência pontual das saídas e chegadas da tabela horária para assegurar a regularidade da linha. Ao avaliar as consequências de divergências ou falhas informacionais, o entrevistado foi enfático ao alertar que erros no sistema geram impactos altamente negativos no ambiente real:
> *"Com certeza teria muitos impactos negativos."*  
No nível operacional, inconsistências provocam atrasos em cascata na tabela do dia, perda de viagens regulamentadas e multas contratuais para a empresa concessionária. Já no nível humano, expõem o motorista a hostilidades, constrangimentos e cobranças diretas na catraca por passageiros insatisfeitos com atrasos ou mudanças não informadas, gerando sobrecarga emocional, estresse severo e potenciais riscos à segurança viária.

---

## 5. Matriz-Resumo do Perfil de Usuário Terciário

<div align="center">
<p><strong>Tabela 1</strong> — Matriz-Resumo do Perfil de Usuário Terciário (Motoristas de Ônibus do STPC/DF)</p>
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

---

## 6. Implicações para o Design e Requisitos de IHC do Portal SEMOB-DF

Embora os motoristas não sejam os operadores prioritários da interface web da SEMOB, a caracterização de suas demandas como stakeholders terciários impõe diretrizes relevantes de engenharia de usabilidade para o portal:

1. **Fidelidade e Sincronização de Dados em Tempo Real:** As informações de itinerários, desvios e horários exibidas publicamente no portal devem manter total consistência com os sistemas internos repassados às concessionárias (Piracicabana, Urbi, etc.). Inconsistências de dados geram conflitos no ponto de embarque entre o passageiro (que consultou a web) e o motorista (que cumpre a ordem da empresa).
2. **Design Responsivo Estrito (*Mobile-First*):** Qualquer iniciativa futura de comunicação pública ou funcionalidade voltada aos operadores do sistema deve ser desenhada prioritariamente para telas de smartphones e consumo sob redes móveis (3G/4G/5G).
3. **Comunicação Visual e Direta:** Uso de alertas destacados e linguagem acessível para avisos viários emergenciais (obras, desvios e fechamento de faixas exclusivas), combinando mapas gráficos simples com resumos textuais objetivos.
4. **Oportunidade de Integração Operacional:** Possibilidade futura de criação de uma seção dedicada aos operadores e trabalhadores do transporte coletivo no portal, centralizando avisos normativos e canais de contato que hoje ficam restritos aos balcões físicos das garagens.

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 5: Identificação de Necessidades dos Usuários e Requisitos de IHC (pp. 134–158).
* BRASIL. Conselho Nacional de Saúde. **Resolução nº 510, de 07 de abril de 2016**. Regulamenta as pesquisas em Ciências Humanas e Sociais envolvendo seres humanos. Brasília: Diário Oficial da União, 2016.
* EASON, Ken. **Information Technology and Organisational Change**. London: Taylor & Francis, 1987.
* PREECE, Jennifer; ROGERS, Yvonne; SHARP, Helen. **Design de Interação: Além da Interação Humano-Computador**. 3. ed. Porto Alegre: Bookman, 2013.
