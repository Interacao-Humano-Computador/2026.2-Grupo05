# Personas

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Criação do documento com elenco de personas identificadas para o ecossistema do **SEMOB-DF**. | [Gabriel Melo](https://github.com/gabriellcardone-06) e [Igor Dantas](https://github.com/IgorDARAUJO) | [Igor Dantas](https://github.com/IgorDARAUJO) e [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 27/09/2026 | 1.1 | Modularização em artefatos dedicados por persona com página de visão geral. | [Carlos Costa](https://github.com/carloshfgit) | [Gabriel Melo](https://github.com/gabriellcardone-06) e [Igor Dantas](https://github.com/IgorDARAUJO) |
| 27/09/2026 | 1.2 | Inclusão formal da persona Valdir Soares ("Seu Valdir") representando os motoristas do STPC/DF (Persona Atendida). | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas](https://github.com/IgorDARAUJO) e [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 27/09/2026 | 1.3 | Inclusão da persona primária Maria Eduarda Santos, com foco em falhas de Vale-Transporte e cartão. | Equipe Grupo 05 | — |
| 28/09/2026 | 1.4 | Inclusão das personas Heitor Santos Júnior e Mariana Borges Almeida. | [Tomás Rocho](https://github.com/TomasRocho) e [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | [Carlos Costa](https://github.com/carloshfgit) |

---

## 1. Introdução

Na área de Interação Humano-Computador (IHC), uma **persona** é um personagem fictício, arquetípico e fundamentado em dados empíricos, concebido para representar um grupo específico de usuários com padrões de comportamento, atitudes, motivações, objetivos e necessidades similares (Cooper, 1999; Cooper et al., 2007; Barbosa et al., 2021).

Diferente de uma simples descrição abstrata de público-alvo, a persona ganha identidade concreta — nome, rosto fictício, contexto social e rotina de vida —, permitindo que a equipe de design e desenvolvimento desenvolva empatia e mantenha o foco nas metas reais dos usuários ao longo de todas as tomadas de decisão de interface e arquitetura de informação.

### 1.1 Papéis e Classificação no Elenco de Personas

De acordo com Barbosa et al. (2021), Cooper (1999) e Cooper et al. (2007), as personas em um projeto de design podem assumir diferentes papéis:
* **Persona Primária:** O foco central do design. O sistema precisa atender com excelência aos seus objetivos e expectativas primordiais sem comprometer as soluções para os demais.
* **Persona Secundária:** Usuários cujas necessidades são majoritariamente atendidas pelo design focado na persona primária, mas que apresentam requisitos adicionais específicos.
* **Persona Terciária / Complementar:** Representam outros stakeholders ou perfis de usuários com menor frequência de interação direta, mas com impactos relevantes na cadeia do serviço.
* **Persona Atendida (*Served Persona*):** Atores que não operam diretamente a interface gráfica em sua jornada regular, mas são direta e criticamente afetados pelo uso do produto e pela integridade das informações veiculadas (Cooper et al., 2007, p. 105; Eason, 1987).
* **Antipersona / Persona Negativa:** Personagens que representam explicitamente quem o sistema *não* busca atender (Cooper et al., 2007, p. 105).

---

## 2. Metodologia de Construção

As personas deste projeto foram concebidas a partir da articulação dos dados obtidos nas etapas prévias de:
1. **[Análise de Documentos](../analise-de-documentos.md):** Indicadores socioeconômicos e de mobilidade da PDAD 2021 e relatórios de ouvidoria do Distrito Federal.
2. **[Perfis de Usuário](../perfis-de-usuario/index.md):** Caracterização do usuário primário (passageiro frequente do STPC/DF) e do usuário terciário (motorista de transporte público coletivo).
3. **[Entrevistas e Pesquisas Empíricas](../entrevistas.md):** Relatos diretos sobre rotinas de deslocamento, fricções de uso com canais digitais e expectativas de atendimento.

---

## 3. Elenco de Personas Mapeadas

O elenco de personas desenvolvido pela equipe para orientar as soluções de IHC do portal da SEMOB-DF está detalhado nos artefatos individuais a seguir:

<div align="center">
<p><strong>Tabela 1</strong> — Elenco de Personas Mapeadas no Projeto</p>
</div>

| Persona | Papel no Projeto | Perfil Representado | Autor da Elaboração | Artefato Completo |
| :--- | :--- | :--- | :--- | :---: |
| **Larissa Ferreira Lima ("Lari")** | Persona Primária | Estudante universitária e trabalhadora que depende diariamente de integração (ônibus e metrô) | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Acessar Persona](larissa-ferreira-lima.md) |
| **João Pedro Carvalho** | Persona Primária | Estudante de Engenharia na UnB com perfil tecnológico alto e foco em rota rápida e previsibilidade | [Igor Dantas](https://github.com/IgorDARAUJO) | [Acessar Persona](joao-pedro-carvalho.md) |
| **Marcos Paulo Vieira ("Marquinhos")** | Persona Primária | Trabalhador do setor de logística (Usuário Padrão/Cotidiano), foco estrito em tarefas móveis e busca por Origem/Destino | [Lucas Araújo](https://github.com/Lucasaraujoszz) | [Acessar Persona](marcos-paulo-vieira.md) |
| **Maria Eduarda Santos ("Duda")** | Persona Primária | Trabalhadora que utiliza Vale-Transporte e precisa resolver falhas de crédito e cartão sob pressão de horário | Equipe Grupo 05 | [Acessar Persona](maria-eduarda-santos.md) |
| **Valdir Soares ("Seu Valdir")** | Persona Atendida (*Served*) / Primária Operacional | Motorista profissional de ônibus urbano do STPC/DF (Viação Piracicabana, Bacia 1) | [Carlos Costa](https://github.com/carloshfgit) | [Acessar Persona](valdir-soares.md) |
| **Heitor Santos Júnior** | Persona Primária | Técnico de manutenção predial de Planaltina, com letramento digital intermediário, que depende do ônibus para trabalhar e se deslocar entre endereços do Plano Piloto | [Tomás Rocho](https://github.com/TomasRocho) | [Acessar Persona](heitor-santos-junior.md) |
| **Mariana Borges Almeida** | Persona Primária | Analista administrativa com rotina organizada, foco em previsão precisa e monitoramento de chegada em tempo real sob chuva | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | [Acessar Persona](mariana-borges-almeida.md) |

<div align="center">
<p><em>Fonte: Autores (2026).</em></p>
</div>

### 3.1 Articulação do Elenco de Personas (Barbosa e Silva, 2010, pp. 179–180)
O elenco de personas deste projeto reúne **quatro personas primárias complementares**:
1. **Larissa:** Representa as dores de integração intermodal, horários noturnos e barreiras informacionais de benefícios.
2. **João Pedro:** Representa o jovem universitário tecnológico com alta expectativa de integração e alertas preditivos.
3. **Marcos Paulo:** Representa o trabalhador cotidiano padrão, cujo foco é a resolução utilitária rápida em celular (planejamento direto de trajeto ponto a ponto sem conhecimento prévio do código da linha e rastreamento em tempo real).
4. **Maria Eduarda:** Representa a trabalhadora que depende do Vale-Transporte e precisa resolver falhas de crédito e cartão sem comprometer a pontualidade ou o orçamento.

Esse conjunto consolida os requisitos centrais do STPC/DF, servindo de base direta para os **Cenários de Uso** e a **Análise de Tarefas**.

**Maria Eduarda** aprofunda uma situação prioritária do elenco: a indisponibilidade de créditos de Vale-Transporte no cartão. Ela orienta requisitos para a comunicação entre empresa, passageira e serviços de atendimento.

---

## 4. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. Capítulo 8: Organização do Espaço de Problema (pp. 147–167).
* COOPER, Alan. **The Inmates Are Running the Asylum: Why High Tech Products Drive Us Crazy and How to Restore the Sanity**. Indianapolis: Sams Publishing, 1999.
* COOPER, Alan; REIMANN, Robert; CRONIN, Dave. **About Face 3: The Essentials of Interaction Design**. Indianapolis: Wiley Publishing, Inc., 2007. ISBN: 978-0-470-08411-3. Chapter 5: *Modeling Users: Personas and Goals*, pp. 75–108.
* EASON, Ken. **Information Technology and Organisational Change**. London: Taylor & Francis, 1987.
