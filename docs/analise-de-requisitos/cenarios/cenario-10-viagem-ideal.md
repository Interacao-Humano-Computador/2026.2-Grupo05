# Cenário 10: Viagem Ideal sob Chuva (Previsibilidade e Monitoramento em Tempo Real)

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 27/09/2026 | 1.0 | Elaboração do cenário ideal de monitoramento e previsão de chegada sob chuva. | [Rodrigo Barbosa](https://github.com/RodrigoCBarbosa) | A definir |

---

## 1. Caracterização Geral

**Autor:** Rodrigo Barbosa

- **Persona:** Mariana Borges Almeida
- **Tipo:** Cenário ideal
- **Tarefas da persona cobertas:** Consultar linhas e horários; verificar alertas de trânsito e condições operacionais;
- **Resumo:** São 07:00 da manhã, chove forte e Mariana precisa pegar o ônibus para o trabalho. Para evitar se molhar na parada, ela acessa o portal da SEMOB através do celular e acompanha o trajeto do ônibus em tempo real. Consegue administrar seu tempo em casa e chega ao ponto minutos antes do embarque, sem frustrações.

---

## 2. Ambiente ou Contexto

- **Quando e onde:** 07:00 da manhã, em casa (tomando café da manhã e se preparando para sair). Está chovendo forte.
- **Situação de deslocamento:** Deslocamento para o trabalho. A parada de ônibus perto de casa não possui uma boa cobertura contra a chuva.
- **Dispositivo e conectividade:** Acesso através de smartphone (celular).
- **Recursos à mão:** Portal da SEMOB no celular, guarda-chuva.
- **Situação do serviço:** Trânsito habitualmente caótico devido à chuva, com previsão de possíveis pequenos atrasos na via principal.

---

## 3. Atores

| Ator | Papel no cenário | Características pessoais relevantes |
|---|---|---|
| **Mariana** | Ator principal (usuária) | Trabalhadora, faz o trajeto diariamente. Quer sair de casa no tempo exato para evitar se molhar, visto que a sua parada de ônibus não tem boa cobertura. |
| **Júnior (Vizinho)** | Ator secundário (contraste) | Morador da mesma rua, encontra-se no ponto de ônibus. Não utiliza o portal da SEMOB e está frustrado, pois saiu de casa "às cegas" e está esperando na chuva há 15 minutos. |
| **Motorista do ônibus** | Ator secundário | Dirige sob condições meteorológicas adversas e trânsito intenso, tentando cumprir o horário previsto pelo sistema. |

*Fonte: Rodrigo Barbosa*

**Elementos do ambiente com que os atores interagem:** Portal da SEMOB (interface mobile, mapa em tempo real e alertas).

---

## 4. Objetivos

- **Objetivo principal:** Pegar o ônibus para o trabalho sem se molhar e sem esperar muito tempo na parada.
- **Subobjetivos:**
  1. Saber exatamente quanto tempo falta para o ônibus chegar.
  2. Verificar as condições de trânsito.
- **Motivações:** A chuva forte e a falta de cobertura adequada no ponto de ônibus perto de casa.

---

## 5. Planejamento, Ações, Eventos e Avaliação

**Plano geral de Mariana:** Consultar o portal da SEMOB durante o café da manhã, acessar a sua linha diária, monitorar o tempo de chegada e sair de casa apenas no momento estritamente necessário para não se molhar na parada.

### Passo 1 — Acessar o portal durante o café da manhã (07:00)

- **Planejamento:** *"Está chovendo muito e não quero me molhar. Vou confirmar o tempo exato de chegada do ônibus para não ter que ficar exposta no ponto."*
- **Ação:** Abre o portal da SEMOB pelo celular enquanto termina de tomar o café da manhã.
- **Evento:** O sistema reconhece o acesso via smartphone e apresenta uma interface limpa e focada na busca.
- **Avaliação:** *"Ótimo, o site abriu rápido e a minha linha já está logo aqui na tela inicial."*

### Passo 2 — Selecionar a linha diária

- **Planeamento:** *"Preciso verificar se o trânsito caótico da manhã está causando algum atraso significativo na minha rota."*
- **Ação:** Com apenas um toque na tela, seleciona a linha que pega todos os dias para o trabalho.
- **Evento:** O sistema carrega rapidamente uma tela com um mapa simplificado, exibindo o ícone do ônibus se movendo em tempo real e o texto em destaque: *"Próximo veículo chega em aproximadamente 12 minutos"*. Surge também um alerta amarelo no topo: *"Atenção: Trânsito intenso na via principal devido à chuva, possíveis pequenos atrasos"*.
- **Avaliação:** *"Ainda faltam 12 minutos. Dá tempo perfeitamente para ir escovar os dentes e pegar o guarda-chuva com calma, sem pressa."* 

### Passo 3 — Última verificação e saída de casa

- **Planeamento:** *"Vou só confirmar se o tempo estimado se manteve ou se houve algum atraso de última hora devido à chuva antes de sair de casa."*
- **Ação:** Passados 8 minutos, ela dá uma última olhada no site.
- **Evento:** O site agora marca *"Chegada em 4 minutos"*.
- **Avaliação:** *"O horário se ajustou perfeitamente. Está na hora de sair e caminhar para a parada."*

### Passo 4 — Embarque

- **Planeamento:** *"Vou caminhar em um passo normal até o ponto; o ônibus já deve estar se aproximando."*
- **Ação:** Sai de casa, caminha até a parada de ônibus (onde vê o seu vizinho Júnior já molhado) e espera menos de dois minutos até o ônibus apontar na rua. Embarca no veículo.
- **Evento:** O ônibus chega conforme previsto pelo sistema.
- **Avaliação:** *"Que alívio. Consegui embarcar sem me molhar muito. O sistema funcionou de forma impecável hoje."*

---

## 6. Requisitos Elicitados

| Requisito | Onde aparece | Requisito da persona relacionado |
|---|---|---|
| Interface limpa, focada em busca, com carregamento rápido | Passo 1 | Consultar linhas e horários |
| Acesso rápido (um toque) à linha utilizada diariamente | Passo 2 | Consultar linhas e horários |
| Exibição de mapa em tempo real com o ícone do veículo em movimento | Passo 2 | Consultar linhas e horários |
| Estimativa de tempo de chegada (ETA) em destaque na tela | Passo 2 | Consultar linhas e horários |
| Alerta visível (destaque amarelo) sobre condições de trânsito e possíveis atrasos | Passo 2 | Verificar alertas de trânsito e condições operacionais |
| Atualização dinâmica e confiável do tempo estimado de chegada | Passo 3 | Consultar linhas e horários; verificar alertas de trânsito e condições operacionais |
| Precisão da previsão (o ônibus chega conforme informado pelo sistema) | Passo 4 | Verificar alertas de trânsito e condições operacionais |

*Fonte: Rodrigo Barbosa*

---

## 7. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. Interação Humano-Computador e Experiência do Usuário. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.