# Perfis de Usuário

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Criação do documento de organização dos perfis de usuário identificados no site **SEMOB-DF**. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 27/09/2026 | 1.1 | Adição do perfil de usuário dos Motoristas de Ônibus do STPC/DF (stakeholder/usuário terciário). | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |
| 27/09/2026 | 1.2 | Reestruturação da seção em artefatos dedicados por perfil com página de visão geral. | [Carlos Costa](https://github.com/carloshfgit) | [Rodrigo Carvalho](https://github.com/RodrigoCBarbosa) |

---

## 1. Introdução

O perfil de usuário é uma descrição detalhada das características dos usuários-alvo de um sistema. Em um projeto de Interação Humano-Computador (IHC), compreender quem são as pessoas que interagem ou interagirão com o produto é o primeiro passo para o desenvolvimento de uma interface que possua alta qualidade de uso e proporcione uma boa experiência (Barbosa et al., 2021).

A construção desse perfil busca levantar dados diversificados sobre o público, tais como:
* **Dados demográficos:** faixa etária, gênero, escolaridade e ocupação.
* **Relação com a tecnologia:** nível de experiência e facilidade com dispositivos e sistemas computacionais (alfabetismo computacional).
* **Conhecimento do domínio:** o quanto os usuários conhecem sobre o assunto e as tarefas que o sistema se propõe a apoiar.
* **Atitudes, expectativas e motivações:** o que esperam do sistema, quais são seus objetivos primários e secundários, e como costumam reagir à adoção de novas tecnologias.

Este conjunto de documentos tem como objetivo principal definir os perfis de usuário do ecossistema do portal da **Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)**, a partir da realização das metodologias de entrevista, brainstorming e análise de documentos.

---

## 2. Enquadramento e Categorização de Stakeholders (SEMOB-DF)

Na literatura clássica de IHC, identificar as partes interessadas (*stakeholders*) é uma etapa basilar para não restringir o design a visões parciais ou unilaterais da organização (Barbosa e Silva, 2010, p. 136; Eason, 1987). No contexto da SEMOB-DF, os atores dividem-se em três categorias funcionais:

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

## 3. Artefatos de Perfis Mapeados

A equipe de projeto mapeou e detalhou os perfis de usuário em artefatos independentes, acessíveis a seguir:

<div align="center">
<p><strong>Tabela 1</strong> — Perfis de Usuário Mapeados no Projeto</p>
</div>

| Perfil | Categoria de Stakeholder | Metodologia Principal | Responsável | Documento Completo |
| :--- | :--- | :--- | :--- | :---: |
| **Passageiro do STPC/DF** | Usuário Primário | Análise Documental (PDAD/Ouvidoria) e Entrevista | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Acessar Perfil](perfil-primario.md) |
| **Motorista de Ônibus** | Usuário/Stakeholder Terciário | Entrevista Semiestruturada Empírica na Garagem | [Carlos Costa](https://github.com/carloshfgit) | [Acessar Perfil](perfil-motorista.md) |

<div align="center">
<p><em>Fonte: Autores (2026).</em></p>
</div>

---

## 4. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 5: Identificação de Necessidades dos Usuários e Requisitos de IHC (pp. 134–158).
* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
* EASON, Ken. **Information Technology and Organisational Change**. London: Taylor & Francis, 1987.
