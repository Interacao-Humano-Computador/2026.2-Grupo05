# Cenário 3: Deslocamento no Horário de Pico com Necessidade Imediata e Desorientação por Falta de Busca por Destino

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 27/09/2026 | 1.0 | Elaboração detalhada do Cenário 3 (Passageiro Cotidiano / Marcos Paulo Vieira). | [Lucas Araújo](https://github.com/Lucasaraujoszz) | [Arthur Mariani](https://github.com/arthur-mariani) |

---

## 1. Caracterização Geral

**Autor: Lucas Araújo Lima**

* **Persona Associada:** [Marcos Paulo Vieira (Passageiro Cotidiano)](../personas/marcos-paulo-vieira.md)
* **Tipo de Cenário:** Cenário de Problema (*Problem Scenario*) — Diagnóstico da situação atual no portal da SEMOB-DF.
* **Tarefas da Persona Cobertas:** Planejar viagem a partir da localização atual; descobrir linhas para um destino específico sem conhecer o código numérico; verificar a localização em tempo real do ônibus no mapa; tentar contornar erros e travamentos de interface no dispositivo móvel.

**Resumo da Situação:** Em uma terça-feira chuvosa, às 06h45, Marcos está no ponto de ônibus em Samambaia Sul e precisa chegar pontualmente às 08h00 ao seu trabalho no SIA Trecho 3. Como sua linha habitual está demorando excessivamente, ele acessa o portal da SEMOB-DF pelo smartphone para descobrir uma rota alternativa e checar onde os ônibus estão. O portal o bombardeia com notícias institucionais, exige conhecimento prévio do número da linha, redireciona-o para uma página externa com falha de carregamento no celular e obriga-o a abandonar o canal governamental em busca de alternativas informais.

---

## 2. Ambiente e Contexto

* **Momento Temporal e Espacial:** Terça-feira, 06h45, horário de pico matutino, sob chuva leve e vento, em uma parada de ônibus na 1ª Avenida Sul de Samambaia (DF).
* **Pressão Temporal e Psicológica:** Marcos precisa obrigatoriamente bater o ponto biométrico na distribuidora do SIA até as 08h00. Qualquer atraso superior a 10 minutos desconta horas e gera notificação disciplinar da chefia.
* **Condições do Dispositivo Móvel e Conectividade:** Smartphone com 35% de bateria, tela respingada de chuva e conexão de dados móveis 4G instável (taxa de download oscilando entre 1 Mbps e 2 Mbps).
* **Ergonomia e Interação Física:** Marcos segura uma sombrinha e uma mochila com o braço esquerdo, operando o celular estritamente com a mão direita e o polegar.
* **Estado do Serviço no Mundo Real [Fato Externo Oculto]:** Um acidente na via EPTG causou retenção severa, e duas linhas semiexpressas foram temporariamente desviadas pela via Pistão Sul / EPNB. Essa informação foi repassada internamente à fiscalização, mas não consta com destaque na tela de consulta de linhas da SEMOB.

---

## 3. Atores Envolvidos

A Tabela 1 identifica os participantes do cenário e esclarece como suas características e papéis influenciam o planejamento do deslocamento.

<div align="center">
<p><strong>Tabela 1</strong> — Atores do Cenário 3</p>
</div>

| Ator | Papel no Cenário | Características Relevantes |
|---|---|---|
| **Marcos Paulo Vieira** | Ator Principal (Usuário) | 31 anos, trabalhador de logística, pragmático, não decora códigos de linhas e necessita de resposta imediata pelo smartphone. |
| **Passageiros da Parada** | Atores Secundários (Apoio Social) | Cidadãos também impacientes no ponto, que comentam boatos de paralisação e sugerem aplicativos privados. |
| **Motorista da Linha Habitual** | Ator Externo Oculto | Retido no engarrafamento na entrada de Taguatinga, sem canal direto de aviso aos passageiros. |

<div align="center">
<p><em>Fonte: Lucas Araújo Lima (2026), fundamentado em Rosson & Carroll (2002).</em></p>
</div>

---

## 4. Objetivos

* **Objetivo Geral:** Chegar ao trabalho no SIA Trecho 3 antes das 08h00, utilizando a melhor opção de transporte coletivo disponível no momento.
* **Subobjetivos Operacionais:**
  1. Descobrir quais ônibus passam perto de Samambaia Sul e deixam próximo ao SIA Trecho 3.
  2. Rastrear a localização física do ônibus mais próximo no mapa.
  3. Saber se há bloqueio ou desvio no percurso antes de tomar a decisão de embarque.
* **Motivações:** Preservar seu emprego, evitar descontos salariais e não ficar exposto à chuva em um ponto sem abrigo adequado.

---

## 5. Ciclo Reflexivo: Planejamento, Ações, Eventos e Avaliação (*Norman, 1986; Carroll, 2000*)

### Passo 1 — Tentativa de Busca por Destino na Home (06h46)
* **Planejamento:** *"O ônibus das 06h40 não passou. Deixa eu entrar no site da SEMOB pra ver qual outro ônibus me deixa no SIA agora."*
* **Ação:** Abre o navegador Chrome no celular, digita `semob df` na barra do Google e clica no primeiro resultado (`semob.df.gov.br`).
* **Evento:** A página inicial carrega lentamente. O topo da tela é ocupado por um carrossel de fotos institucionais de eventos do governo e um menu hambúrguer com termos como "Gabinete", "Licitações" e "Ouvidoria". Não há nenhum campo aberto perguntando "Para onde você quer ir?".
* **Avaliação Mental:** *"Cadê o campo de busca de rota? Eu não quero saber quem é o secretário, eu quero saber como chegar no SIA!"* (Manifestação da Dor 1: *Não consigo encontrar rapidamente o que preciso*).

### Passo 2 — Navegação Frustrante e Redirecionamento (06h48)
* **Planejamento:** *"Deve estar em algum link de linhas e itinerários. Vou rolar a tela pra procurar."*
* **Ação:** Rola a tela até o final, encontra o ícone "DF no Ponto" e clica no link.
* **Evento:** O navegador é redirecionado para um domínio secundário (`dfnoponto.semob.df.gov.br`). Uma janela modal bloqueia a visão sugerindo: *"Baixe o aplicativo DF no Ponto na Play Store"*. Marcos fecha o modal no "X" minúsculo, que exige três toques com o polegar.
* **Avaliação Mental:** *"Toda vez isso! Me manda sair do site e baixar aplicativo na chuva? Não tenho espaço no celular nem franquia pra baixar app agora!"* (Manifestação da Dor 3: *Preciso sair do portal para conseguir resolver*).

### Passo 3 — Exigência Indevida de Conhecimento Prévio (06h50)
* **Planejamento:** *"Consegui fechar o aviso. Agora vou digitar 'SIA Trecho 3' pra ver as linhas."*
* **Ação:** Toca na barra de pesquisa da página e digita `SIA Trecho 3`.
* **Evento:** O sistema retorna a mensagem em vermelho: *"Nenhuma linha encontrada. Digite o número da linha com 4 dígitos (ex.: 0.089)"*.
* **Avaliação Mental:** *"Como assim número da linha? Se eu soubesse o número da linha eu já tava olhando a placa do ônibus! Eu sei onde eu tô e onde quero ir, o sistema devia me dizer a linha!"* (Manifestação da Dor 4: *O sistema espera que eu já saiba como o transporte funciona*).

### Passo 4 — Travamento de Interface e Problema de Cache (06h52)
* **Planejamento:** *"Um colega da parada disse que a linha 0.818 vai pro SIA. Deixa eu digitar 0.818."*
* **Ação:** Digita `0.818` no campo de busca e clica em "Consultar".
* **Evento:** A tela congela por 12 segundos com uma barra de progresso parada. Em seguida, a tela fica em branco e aparece o erro: *"Erro ao carregar dados do servidor. Limpe o cache do seu navegador e tente novamente"*.
* **Avaliação Mental:** *"Travou tudo de novo. Limpar cache? Eu tô no ponto de ônibus na chuva, como é que o site oficial de transporte do DF não aguenta uma pesquisa no celular?"* (Manifestação da Dor 2: *Não consigo confiar que o site vai funcionar*).

### Passo 5 — Desistência e Abandono do Canal Oficial (06h54)
* **Planejamento:** *"Não dá pra depender desse site. Vou ter que abrir o Moovit ou perguntar pro pessoal do grupo de WhatsApp."*
* **Ação:** Fecha a aba do portal da SEMOB e abre um aplicativo comercial de mapas privado.
* **Evento:** O app privado consome rapidamente sua rota pelo GPS e indica que a linha 0.818 está parada no trânsito a 4 km, mas sugere pegar o metrô até a estação Shopping e lá fazer integração.
* **Avaliação Mental:** *"Perdi 8 minutos tentando usar o site da SEMOB e não me serviu de nada. O serviço público devia dar essa informação na palma da mão."*

---

## 6. Problemas Revelados e Requisitos Elicitados

A Tabela 2 relaciona os problemas evidenciados no cenário às causas observadas no design atual e aos requisitos de IHC propostos.

<div align="center">
<p><strong>Tabela 2</strong> — Problemas Identificados no Cenário 3 e Requisitos de IHC Correspondentes</p>
</div>

| Problema Identificado no Cenário | Causa no Design Atual | Requisito de IHC Proposto |
| :--- | :--- | :--- |
| **Ausência de planejamento por destino** | Busca estruturada exclusivamente por código numérico de linha. | **RF-01:** Implementar mecanismo de busca por **Origem e Destino** em linguagem natural com autopreenchimento de pontos notórios do DF. |
| **Sobrecarga informacional na Home** | Priorização de notícias e atos institucionais sobre serviços operacionais. | **RNF-01:** Interface móvel centrada na tarefa (*Task-oriented*), posicionando os serviços de rota no primeiro quadrante visível da tela. |
| **Fragmentação por redirecionamento** | Ruptura de contexto ao remeter o usuário para domínios externos e insistência de download de app. | **RF-02:** Consulta de itinerários e mapa de veículos em tempo real integrada nativamente ao portal responsivo. |
| **Inconsistência técnica e falha de cache** | Scripts pesados e ausência de tolerância a conexões móveis lentas. | **RNF-02:** Arquitetura leve com tratamento transparente de dados temporários e mensagens de erro construtivas (sem exigir limpeza manual de cache). |

<div align="center">
<p><em>Fonte: Lucas Araújo Lima (2026).</em></p>
</div>

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. **Interação Humano-Computador**. Rio de Janeiro: Elsevier / Campus, 2010. Capítulo 6: Organização do Espaço de Problema — Cenários (pp. 183–191).
* CARROLL, John M. **Making Use: Scenario-Based Design of Human-Computer Interactions**. Cambridge: MIT Press, 2000.
* NORMAN, Donald A. **Cognitive Engineering**. In: D. A. Norman & S. W. Draper (Eds.), *User Centered System Design*. Hillsdale: Lawrence Erlbaum, 1986.
* ROSSON, Mary Beth; CARROLL, John M. **Usability Engineering: Scenario-Based Development of Human-Computer Interaction**. San Francisco: Morgan Kaufmann, 2002.
