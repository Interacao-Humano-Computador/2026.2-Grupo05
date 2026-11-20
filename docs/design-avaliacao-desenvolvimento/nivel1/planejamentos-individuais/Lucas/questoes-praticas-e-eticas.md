## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 13/10/2026 | `1.0` | Elaboração completa do documento de Questões Práticas e Éticas das Avaliações de IHC, incluindo recrutamento, infraestrutura, orçamento, fundamentação teórica com prints do livro e minuta integral do TCLE com autorização de gravação. | [Lucas Araújo](https://github.com/Lucasaraujoszz) | [Arthur Mariani](https://github.com/arthur-mariani) | Google Gemini - utilizado apenas para formatação em Markdown |
| 19/11/2026 | `1.1` | Padronização da estrutura (histórico no topo, conteúdo, fotos de referência e referências ao final); autor e revisor retirados do rodapé; retirada das referências que não são o livro da disciplina nem material do professor; inclusão de fotos de referência grifadas. Inclusão do bloco de artefatos relacionados (persona, cenário, análise de tarefas, storyboard, planejamentos, relatos e protótipos da funcionalidade). Correção das páginas e seções citadas do livro da disciplina (edição de 2021). | [Gabriel Melo](https://github.com/gabriellcardone-06) | Pendente de revisão | Claude (Anthropic) — apoio na padronização da estrutura do artefato, na revisão das referências e na formatação em Markdown.; apoio na inclusão dos links entre artefatos |


!!! warning "Observação para correção manual"
    A menção aos códigos de ética da ACM (1992) e do IEEE (2006) foi retirada por não serem referências do livro da disciplina; o dever de evitar danos, respeitar a privacidade e garantir a confidencialidade foi mantido com base em Barbosa et al. (2021, pp. 126–129). Revisar a redação.

---

# Questões Práticas e Éticas das Avaliações de IHC

Neste documento, apresentam-se as **Questões Práticas e Éticas** que norteiam o planejamento e a futura condução das avaliações formativas da **Etapa 4** e **Etapa 5** do projeto de Interação Humano-Computador (IHC), aplicado ao portal da **Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)**.

O planejamento de uma avaliação de IHC exige rigor tanto nos aspectos operacionais e logísticos (recrutamento, recursos, prazos e custos) quanto no cumprimento irrestrito dos preceitos éticos que resguardam a dignidade, a privacidade e o bem-estar dos participantes (Barbosa et al., 2021).

**Artefatos relacionados — fluxo da funcionalidade TAR-03 (Planejamento de Rota por Origem e Destino):**

* **Persona:** [Marcos Paulo Vieira](../../../../analise-de-requisitos/personas/marcos-paulo-vieira.md)
* **Cenário:** [Cenário 3](../../../../analise-de-requisitos/cenarios/cenario-3-planejamento-origem-destino.md)
* **Análise de tarefas:** [TAR-03](../../../../analise-de-requisitos/analise-de-tarefas/tar-03-planejamento-rota.md)
* **Storyboard:** [Storyboard 03](../../storyboards.md#33-storyboard-03-planejamento-de-rota-por-origem-e-destino-com-monitoramento-em-tempo-real)
* **Nível 1 — avaliação do storyboard e da análise de tarefas:** Planejamento da avaliação (*não disponível — pendente de correção manual*) · Planejamento do relato (*não disponível — pendente de correção manual*) · [Relato dos resultados](../../relatos-individuais/lucas/relato-resultados-storyboard-tarefas.md) · [Planejamento individual de tarefas](planejamento-individual-lucas.md) · Questões práticas e éticas (*esta página*)
* **Nível 2 — protótipo de papel (baixa fidelidade):** [Planejamento da avaliação](../../../nivel2/planejamentos-individuais/Lucas/lucas-planejamento-av-prototipo-papel.md) · [Planejamento do relato](../../../nivel2/planejamentos-individuais/Lucas/lucas-planejamento-relato-prot-papel.md) · [Relato dos resultados](../../../nivel2/relatos-individuais/lucas/relato-resultados-prot-papel.md)
* **Nível 3 — protótipo de alta fidelidade:** [Planejamento da avaliação](../../../nivel3/planejamentos-individuais/lucas/planejamento-av-prot-alta-fidel.md) · [Planejamento do relato](../../../nivel3/planejamentos-individuais/lucas/planejamento-relato-prot-alta-fidel.md) · [Relato dos resultados](../../../nivel3/relatos-individuais/lucas/relato-resultados-prot-alta-fidel.md)
* **Telas do protótipo de papel:** [telas no planejamento da avaliação](../../../nivel2/planejamentos-individuais/Lucas/lucas-planejamento-av-prototipo-papel.md#9-telas-do-prototipo-avaliado)
* **Protótipo de alta fidelidade navegável:** [acessar o protótipo](../../../../prototipos/tar-03/index.html)


---

## 1. Introdução

De acordo com o framework **DECIDE** (Barbosa et al., 2021) e os fundamentos de Engenharia de Usabilidade de Barbosa et al. (2021) e Barbosa et al. (2021), as etapas **"I"** (*Identify the practical issues*) e **"D"** (*Decide how to deal with the ethical issues*) são pilares indispensáveis para assegurar a viabilidade técnica e a integridade humana de qualquer investigação empírica.

Este documento estabelece as diretrizes que serão adotadas por todos os avaliadores do **Grupo 05** na condução das entrevistas de avaliação dos **Storyboards** e de validação da **Análise de Tarefas (HTA e CTT)**, garantindo conformidade estrita com o Plano de Ensino da disciplina (SALES, 2026).

---

## 2. Recrutamento e Amostragem de Participantes (Questões Práticas)

### 2.1. Perfil dos Participantes Recrutados
O recrutamento dos participantes é rigorosamente ancorado no [Perfil de Usuário Primário (Passageiro Cotidiano)](../../../../analise-de-requisitos/perfis-de-usuario/perfil-primario.md) e representado pela persona primária [Marcos Paulo Vieira](../../../../analise-de-requisitos/personas/marcos-paulo-vieira.md), além de contemplar os demais perfis mapeados pelo grupo (estudantes, passageiros com mobilidade reduzida e motoristas).

A Tabela 1 sintetiza os critérios de elegibilidade para o recrutamento dos participantes:

<div align="center">
<p><strong>Tabela 1</strong> — Critérios de Elegibilidade para Recrutamento de Participantes</p>
</div>

| Dimensão | Critérios de Inclusão | Critérios de Exclusão |
| :--- | :--- | :--- |
| **Experiência de Uso** | Usuários reais e cotidianos do transporte coletivo do DF (ônibus, BRT ou metrô), com frequência mínima de uso semanal. | Pessoas que nunca utilizaram o sistema de transporte coletivo do DF ou que dependem exclusivamente de transporte individual próprio. |
| **Familiaridade Digital** | Usuários que acessam serviços de mobilidade, mapas ou internet por meio de smartphones (Android ou iOS). | Pessoas que não possuem acesso a smartphone ou computadores conectados à internet. |
| **Vínculo com o Projeto** | Cidadãos sem envolvimento prévio com a elaboração dos artefatos de IHC do Grupo 05. | Integrantes da própria equipe de desenvolvimento do Grupo 05 ou avaliadores de grupos concorrentes da mesma disciplina. |
| **Faixa Etária e Autonomia** | Indivíduos civilmente capazes, com idade igual ou superior a 18 anos, com autonomia plena de consentimento. | Menores de idade ou pessoas legalmente incapazes desacompanhadas de autorização formal dos responsáveis legais. |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo (2026).</em></p>
</div>

### 2.2. Quantidade de Participantes e Justificativa Teórica
Para as avaliações formativas da Etapa 5, cada sessão de avaliação (Storyboard e Análise de Tarefas) contará com uma amostra planejada de **3 a 5 participantes por perfil investigado**.

#### **Justificativa Metodológica:**
1. **Curva de Rendimento Decrescente de Nielsen (2000):** Segundo Jakob Nielsen e Robert Landauer (1993, citados por Barbosa et al., 2021), a inclusão de **5 participantes** em testes qualitativos de usabilidade é suficiente para descobrir aproximadamente **85% dos problemas de interação** mais críticos da interface. Adicionar participantes além desse número acarreta repetição de descobertas e elevação desproporcional do custo de coleta e análise sem retorno substancial em novas informações (*relação custo-benefício ótima*).
2. **Recomendação de Dumas & Redish (1999 apud BARBOSA et al., 2021):** Em avaliações formativas com foco qualitativo em profundidade, amostras menores (entre 3 e 5 usuários bem selecionados) permitem ao avaliador conduzir entrevistas semiestruturadas com maior riqueza de detalhes, sem comprometer o tempo de tabulação e consolidação dos relatos.

### 2.3. Estratégia e Abordagem de Recrutamento
O recrutamento será conduzido por meio de:
* **Abordagem direta e convite:** Contato com estudantes, trabalhadores do comércio/logística e usuários regulares das linhas de ônibus de regiões administrativas como Samambaia, Gama, Ceilândia e Plano Piloto.
* **Questionário pré-teste de triagem:** Aplicação de perguntas curtas de caracterização para assegurar o alinhamento com a Tabela 1 antes da confirmação da sessão.
* **Agendamento antecipado:** Confirmação de data, horário e ambiente com antecedência mínima de 48 horas, assegurando o cumprimento da agenda planejada.

---

## 3. Recursos, Equipamentos e Infraestrutura

A execução das avaliações formativas requer um ambiente controlado e ferramentas estáveis que permitam a apresentação visual dos artefatos (Storyboards e diagramas HTA/CTT) e o registro audiovisual fidedigno das reações e verbalizações dos participantes.

A Tabela 2 apresenta o inventário de infraestrutura e tecnologias mobilizadas:

<div align="center">
<p><strong>Tabela 2</strong> — Inventário de Recursos, Ferramentas e Infraestrutura</p>
</div>

| Categoria | Recurso / Ferramenta | Finalidade na Avaliação | Responsável Operacional |
| :--- | :--- | :--- | :--- |
| **Hardware** | Computador / Notebook com webcam e fone/microfone estéreo | Condução da sessão pelo avaliador e visualização clara dos artefatos em tela. | Avaliador designado |
| **Software de Comunicação** | **Microsoft Teams** (ou Google Meet corporativo/acadêmico) | Plataforma de videoconferência para encontro síncrono remoto, compartilhamento de tela e gravação da sessão. | Avaliador designado |
| **Software de Gravação Redundante** | **OBS Studio** / 123APPS | Captura local de reserva de áudio e vídeo de tela, prevenindo eventuais perdas em caso de falha de gravação na nuvem. | Avaliador de suporte / Responsável pela gravação |
| **Conectividade** | Conexão à Internet Banda Larga (mínimo 15 Mbps estáveis) | Garantir estabilidade da chamada, clareza no áudio e ausência de atrasos (*lags*) no compartilhamento de imagens. | Todos os avaliadores |
| **Material de Apoio** | Arquivo digital dos Storyboards, diagramas HTA/CTT, roteiro da entrevista e TCLE em PDF | Apresentação padronizada dos artefatos ao participante durante a sessão. | Avaliador designado |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo (2026).</em></p>
</div>

---

## 4. Orçamento e Estimativa de Custos

Conforme preconizado nas boas práticas acadêmicas e na legislação brasileira (Resoluções CNS nº 466/2012 e 510/2016 apud BARBOSA et al., 2021), a participação dos usuários em pesquisas acadêmicas sem fins lucrativos é **voluntária e não remunerada**, sendo vedado o pagamento de gratificações monetárias diretas pela participação (Barbosa et al., 2021).

A Tabela 3 consolida o detalhamento orçamentário do projeto:

<div align="center">
<p><strong>Tabela 3</strong> — Detalhamento Orçamentário e Estimativa de Custos</p>
</div>

| Item de Despesa | Descrição do Recurso | Custo Unitário | Quantidade | Custo Total (R$) |
| :--- | :--- | :---: | :---: | :---: |
| **Licença de Softwares** | Microsoft Teams / Google Meet / OBS Studio | R$ 0,00 | 7 membros | **R$ 0,00** (Uso de licenças institucionais UnB e ferramentas *open source*) |
| **Equipamentos** | Computadores pessoais, microfones e webcams | R$ 0,00 | 7 unidades | **R$ 0,00** (Recursos próprios pré-existentes dos estudantes) |
| **Hospedagem e Wiki** | GitHub Pages / Repositório GitHub | R$ 0,00 | 1 plataforma | **R$ 0,00** (Infraestrutura pública gratuita) |
| **Remuneração de Participantes** | Participação voluntária acadêmica | R$ 0,00 | ~7 participantes | **R$ 0,00** (Gratuito conforme legislação ética nacional) |
| **Material Impresso / Físico** | Documentação e Storyboards no papel | R$ 0,00 | Folhas sulfite | **R$ 0,00** (Custos absorvidos pelos próprios autores) |
| **TOTAL GERAL** | — | — | — | **R$ 0,00** |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo (2026).</em></p>
</div>

> **Nota de Custos:** Como as sessões são planejadas primordialmente em ambiente remoto (online) via videoconferência, não há previsão de despesas de deslocamento, transporte urbano ou alimentação para os participantes ou para os pesquisadores.

---

## 5. Fundamentação Teórica: Aspectos Éticos em Pesquisas com Usuários

A realização de qualquer atividade investigativa em IHC envolvendo seres humanos deve pautar-se pelo respeito incondicional aos sujeitos de pesquisa. Os princípios éticos apresentados por Barbosa et al. (2021, pp. 126–129) estabelecem os deveres de *evitar danos*, *respeitar a privacidade* e *garantir a confidencialidade das informações* coletadas.

### 5.1. Os 4 Princípios Éticos da Resolução CNS nº 196/96 aplicados a IHC
No Brasil, a regulamentação ética de pesquisas envolvendo pessoas é orientada pelos princípios do Conselho Nacional de Saúde (CNS), consolidados na literatura de IHC por Simone Barbosa et al. (2021):

1. **Princípio da Autonomia:** Reconhece que cada participante é um sujeito livre, dotado de capacidade de autodeterminação. O participante deve ser plenamente esclarecido sobre os objetivos do estudo e possui o **direito de interromper ou abandonar a sessão a qualquer instante**, sem sofrer constrangimentos, punições ou qualquer prejuízo. O consentimento deve ser livre, voluntário e revogável.
2. **Princípio da Beneficência:** Exige a maximização de benefícios e a garantia de que a pesquisa trará contribuições sociais efetivas (no caso, a melhoria da qualidade do serviço público de transporte da SEMOB-DF para toda a população).
3. **Princípio da Não-Maleficência:** Compromisso estrito de prevenir e evitar qualquer dano físico, psicológico, moral ou intelectual ao participante. O avaliador deve reiterar constantemente que **o que está sendo avaliado é o sistema/artefato de IHC, e JAMAIS o usuário ou sua inteligência**, eliminando sentimentos de ansiedade ou julgamento de desempenho pessoal.
4. **Princípio da Justiça e Equidade:** Distribuição equitativa de ônus e benefícios, tratando com igual consideração todos os perfis e respeitando as particularidades de populações vulneráveis ou pessoas com deficiência.

### 5.2. Privacidade, Sigilo e Anonimização de Dados
Durante a divulgação dos resultados da avaliação, os avaliadores têm o dever de garantir:
* **Preservação da imagem e do nome:** É vedada a publicação de nomes completos, números de documentos pessoais (CPF, RG) ou contatos dos voluntários. Nos relatos finais e tabelas, os usuários serão identificados exclusivamente por códigos fictícios neutros (ex.: *Participante 1*, *Usuário A*).
* **Anonimização de relatos:** Quaisquer menções a dados de terceiros ou termos específicos que possam identificar o entrevistado serão mascarados.

### 5.3. Autorização Expressa para Gravação de Voz e Imagem
Conforme exigido pelo **Item 6 do Checklist do Plano de Ensino da disciplina** e detalhado por Barbosa et al. (2021):
> *"É necessário obter permissão para gravar a voz ou imagem de qualquer pessoa, antes de começar a gravação. Devemos informar aos participantes logo no recrutamento sobre os tipos de gravações que serão realizadas, para evitar mal-entendidos ou desistências no momento da atividade."*

Sendo assim, o início da gravação no Microsoft Teams só poderá ser acionado **após o esclarecimento do termo e a confirmação afirmativa e verbal de aceite do participante**.

---

## 6. Imagens da Referência no Livro-Texto Oficial

Conforme estabelecido pelo critério de validação da disciplina (**Item 14 do Checklist**), as Figuras 1 e 2 comprovam as páginas da obra de referência de IHC onde estão fundamentados os aspectos éticos e a elaboração do termo de consentimento:

<div align="center">
  <img src="../../../../assets/prints_referencias/verificacao-v2/livro-etica-principios.png" alt="Os quatro princípios éticos (Resolução CNS nº 466/2012) (BARBOSA et al., 2021, pp. 126–127)" width="90%">
  <p><strong>Figura 1</strong> — Princípios Éticos em Pesquisas Envolvendo Pessoas (Autonomia, Beneficência, Não-maleficência e Justiça)</p>
  <p><em>Fonte: BARBOSA et al. (2021, Seção 7.4, pp. 126–127). Recorte e grifo: <a href="https://github.com/gabriellcardone-06">Gabriel Melo</a> (2026).</em></p>
</div>

<div align="center">
  <img src="../../../../assets/prints_referencias/verificacao-v2/livro-etica-desistencia-vies.png" alt="Direito de desistir do estudo e dados livres de viés (BARBOSA et al., 2021, pp. 128–129)" width="90%">
  <p><strong>Figura 2</strong> — Exemplo de Estrutura do Termo de Consentimento Livre e Esclarecido (TCLE) em IHC</p>
  <p><em>Fonte: BARBOSA et al. (2021, Seção 7.4, pp. 128–129). Recorte e grifo: <a href="https://github.com/gabriellcardone-06">Gabriel Melo</a> (2026).</em></p>
</div>

---

## 7. Minuta Oficial do Termo de Consentimento Livre e Esclarecido (TCLE)

A seguir, apresenta-se a minuta oficial e integral do **Termo de Consentimento Livre e Esclarecido (TCLE)**, elaborada por Lucas Araújo e adaptada especificamente para as avaliações formativas dos Storyboards e da Análise de Tarefas do Grupo 05:

---

<div style="border: 2px solid #ccc; padding: 25px; background-color: #fafafa; border-radius: 8px;">

<h3 align="center">TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO (TCLE)</h3>
<p align="center"><strong>Projeto de Interação Humano-Computador — Sistema SEMOB-DF</strong><br>
Faculdade UnB Gama (FCTE) · Universidade de Brasília</p>

<p>Prezado(a) participante,</p>

<p>Convidamos você a participar voluntariamente da pesquisa acadêmica de <strong>Avaliação de Usabilidade e Prototipagem da Interface da Secretaria de Transporte e Mobilidade do Distrito Federal (SEMOB-DF)</strong>, conduzida pelos estudantes da disciplina de Interação Humano-Computador da Universidade de Brasília (FCTE/UnB), sob supervisão do Prof. Dr. André Barros de Sales.</p>

<p>Para decidir conscientemente sobre sua participação, leia com atenção as informações a seguir:</p>

<h4>1. Objetivo da Pesquisa</h4>
<p>O estudo tem por objetivo avaliar propostas de design, narrativas de uso (Storyboards) e fluxos da Análise de Tarefas (HTA e CTT) para o aperfeiçoamento da experiência do cidadão no portal e nos serviços digitais de transporte coletivo da SEMOB-DF.</p>

<h4>2. Procedimentos da Sessão</h4>
<p>Sua participação consistirá em uma sessão remota (via videoconferência no Microsoft Teams/Google Meet) com duração média de <strong>30 a 45 minutos</strong>. Durante o encontro, você será convidado(a) a observar desenhos de cenários cotidianos (Storyboards) e fluxos de tarefas, respondendo a perguntas abertas de opinião sobre a clareza, facilidade e utilidade das soluções apresentadas.</p>

<h4>3. Garantia Fundamental ao Participante</h4>
<p><strong>É fundamental esclarecer que NÃO se trata de um teste sobre você, sua inteligência ou seus conhecimentos.</strong> Apenas os artefatos computacionais e as propostas de design estão sendo avaliados. Não existem respostas "certas" ou "erradas"; sua opinião sincera sobre eventuais dificuldades é o dado mais valioso para o projeto.</p>

<h4>4. Riscos e Desconfortos</h4>
<p>A presente pesquisa acarreta riscos mínimos aos participantes. Caso sinta cansaço, constrangimento ou desconforto durante as perguntas, você pode solicitar uma pausa imediata ou encerrar a participação a qualquer momento.</p>

<h4>5. Confidencialidade, Sigilo e Anonimato</h4>
<p>Garantimos sigilo absoluto sobre sua identidade civil. Seu nome, imagem de rosto ou dados pessoais jamais serão publicados na Wiki da disciplina, em relatórios acadêmicos ou apresentações públicas. Quaisquer dados consolidados serão identificados unicamente por códigos neutros (ex.: "Participante A").</p>

<h4>6. Autorização Expressa para Gravação de Voz e Imagem</h4>
<p>Para fins estritamente analíticos de transcrição e registro fidedigno de suas sugestões pela equipe discente, solicitamos sua permissão para efetuar a <strong>gravação em áudio e vídeo da sessão remota</strong>. Os arquivos brutos de gravação permanecerão sob guarda restrita da equipe e serão excluídos ao término do semestre letivo.</p>

<h4>7. Voluntariedade e Direito de Desistência</h4>
<p>A sua participação é inteiramente voluntária e isenta de ônus financeiro. Você é livre para recusar a participação ou retirar seu consentimento em qualquer fase do estudo, sem qualquer penalidade, justificativa ou prejuízo.</p>

<h4>8. Canais de Contato</h4>
<p>Em caso de dúvidas a respeito dos direitos éticos ou procedimentos da pesquisa, você pode entrar em contato com a equipe discente pelo e-mail: <code>ihc.grupo05.unb@gmail.com</code> ou com a coordenação da disciplina na Universidade de Brasília.</p>

<hr>

<h4>Consentimento Pós-Informado</h4>

<p>Ao assinalar as opções abaixo e confirmar seu aceite (verbal na gravação ou por assinatura digital), você atesta que leu, compreendeu e concordou com as condições da pesquisa:</p>

<p>[ &nbsp; ] <strong>CONCORDO</strong> em participar voluntariamente deste estudo de avaliação de IHC.<br>
[ &nbsp; ] <strong>AUTORIZO</strong> expressamente a gravação de áudio e imagem da minha tela e voz exclusivamente para fins de análise acadêmica da disciplina.</p>

<br>
<p>Brasília - DF, _____ de ____________________ de 2026.</p>

<br>
<table width="100%" style="border: none;">
  <tr style="border: none;">
    <td width="50%" align="center" style="border: none;">
      __________________________________________<br>
      <strong>Assinatura do Participante</strong>
    </td>
    <td width="50%" align="center" style="border: none;">
      __________________________________________<br>
      <strong>Lucas Araújo Lima (Grupo 05 / FCTE-UnB)</strong>
    </td>
  </tr>
</table>

</div>

---

## 8. Mapeamento de Conformidade com o Checklist do Plano de Ensino

A Tabela 4 espelha os critérios da Tabela 3 do Plano de Ensino da disciplina (SALES, 2026), comprovando o atendimento integral de cada item avaliativo sob responsabilidade de Lucas Araújo:

<div align="center">
<p><strong>Tabela 4</strong> — Mapeamento de Conformidade com o Checklist da Etapa 4</p>
</div>

| # Item | Item de Verificação do Plano de Ensino | Critério de Aceitação Exigido | Situação no Artefato | Seção de Evidência |
| :---: | :--- | :--- | :---: | :--- |
| **1** | **Itens Gerais de Desenvolvimento** | Histórico de versão padronizado, autores/revisores, introdução, legendas e fontes em tabelas/figuras, declaração de IA. | **Conforme** | Cabeçalho, Seções 1 a 7 e metadados. |
| **5** | **Questões Práticas** | Recrutamento de participantes definido (perfil, quantidade, justificativa, formato presencial/remoto, equipamentos, cronograma, custos). | **Conforme** | **Seção 2** (Perfil e amostragem), **Seção 3** (Equipamentos) e **Seção 4** (Orçamento zero). |
| **6** | **Questões Éticas** | Respeito aos participantes, minimização de riscos e presença do Termo de Consentimento Livre e Esclarecido (TCLE) com permissão para gravação. | **Conforme** | **Seção 5** (Princípios da Res. 196/96) e **Seção 7** (Minuta integral do TCLE com cláusula de gravação). |
| **14** | **Fundamentação Individual com Foto** | Cada um dos 7 integrantes elaborou ao menos 1 item com referência bibliográfica e foto da página do livro. | **Conforme** | **Seção 5** (Citação formal) e **Seção 6** (Figuras 1 e 2 comprovando as páginas 139 e 141 do livro). |

<div align="center">
<p><em>Fonte: Elaborado por Lucas Araújo (2026), baseado no Plano de Ensino (SALES, 2026).</em></p>
</div>

---

## 9. Fotos de Referência

As Figuras 3 a 6 mostram os trechos que fundamentam este artefato, recortados e grifados em amarelo diretamente do livro da disciplina (BARBOSA et al., 2021).

<div id="figura-3" align="center">
<p><strong>Figura 3</strong> — 11.8 Framework DECIDE</p>
</div>

![Figura 3 — 11.8 Framework DECIDE](../../../../assets/prints_referencias/verificacao-v2/livro-decide.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 264). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-4" align="center">
<p><strong>Figura 4</strong> — 11.2 Principais aspectos (objetivos) avaliados em IHC</p>
</div>

![Figura 4 — 11.2 Principais aspectos (objetivos) avaliados em IHC](../../../../assets/prints_referencias/verificacao-v2/livro-objetivos-avaliacao.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 248). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-5" align="center">
<p><strong>Figura 5</strong> — Artefatos que podem ser avaliados de forma formativa (incluindo storyboards)</p>
</div>

![Figura 5 — Artefatos que podem ser avaliados de forma formativa (incluindo storyboards)](../../../../assets/prints_referencias/verificacao-v2/livro-storyboard-avaliacao.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 251). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-6" align="center">
<p><strong>Figura 6</strong> — 11.7.2 Escopo da avaliação, perfil e número de participantes</p>
</div>

![Figura 6 — 11.7.2 Escopo da avaliação, perfil e número de participantes](../../../../assets/prints_referencias/verificacao-v2/livro-escopo-participantes.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 258). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

---

## 10. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1. (Capítulo 11: Planejamento da Avaliação de IHC).
* SALES, André Barros de. **Plano de Ensino: Interação Humano Computador**. Universidade de Brasília, Faculdade UnB Gama (FCTE/UnB), 2026.
