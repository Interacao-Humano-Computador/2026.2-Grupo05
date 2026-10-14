# Cenário 8: O Conflito na Catraca Gerado por Inconsistência de Dados Públicos

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 26/09/2026 | 1.0 | Elaboração inicial dos cenários de uso a partir do perfil empírico do motorista (`MOT-01`) e da persona Valdir Soares, fundamentada na literatura clássica de IHC e Design Baseado em Cenários (Barbosa e Silva, 2010; Carroll, 2000; Rosson e Carroll, 2002; Cooper et al., 2007). | [Carlos Costa](https://github.com/carloshfgit) | [Arthur Mariani](https://github.com/arthur-mariani) e [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 27/09/2026 | 1.1 | Integração formal ao repositório MkDocs do projeto com padronização hipertextual e rastreabilidade bidirecional com personas e perfis. | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas](https://github.com/IgorDARAUJO) |

---

## 1. Introdução

Este cenário de problema descreve um conflito entre Valdir Soares e passageiros causado pela divergência entre os horários divulgados publicamente e a operação real do serviço. A situação permite compreender como inconsistências de informação afetam a confiança e a relação entre os atores, fundamentando requisitos de sincronização, transparência e respaldo ao motorista.

## 2. Caracterização Geral

- **Persona:** [Valdir Soares](../personas/valdir-soares.md), motorista rodoviário e persona atendida.
- **Tipo:** Cenário de problema / contexto atual.
- **Resumo:** a tabela pública informa uma saída às 06h55, enquanto a ordem de serviço da garagem determina a chegada às 07h15; a divergência expõe Valdir a cobranças dos passageiros.

## 3. Ambiente ou Contexto

Plataforma B da Rodoviária do Plano Piloto, em uma manhã chuvosa de pico (07h10), com plataforma cheia, motores e passageiros impacientes. Valdir está na cabine; os passageiros usam smartphones na fila.

## 4. Atores

A Tabela 1 identifica os participantes do cenário e esclarece o papel de cada um no conflito causado pela divergência de horários.

**Tabela 1** — Atores envolvidos no Cenário 8

| Ator | Papel |
| :--- | :--- |
| Valdir Soares | Ator principal, motorista da linha Planaltina–Plano Piloto. |
| Passageiros | Usuários do portal que cobram o horário publicado. |
| Despachante da garagem | Fonte da ordem operacional. |

## 5. Objetivos

- Concluir o embarque no horário e iniciar a viagem sem advertências.
- Sentir-se respaldado profissionalmente e evitar atritos interpessoais.

## 6. Planejamento, Ações, Eventos e Avaliação

Valdir planeja encostar às 07h15, conforme a escala impressa e o aplicativo da concessionária. Chega às 07h12, mas passageiros mostram no celular o horário de 06h55 publicado no portal, vaiam e acusam o motorista de negligência. Ele apresenta a folha de bordo e explica que não houve aviso de alteração. Mesmo mantendo postura respeitosa e liberando o embarque, a tensão persiste durante o trajeto e prejudica seu bem-estar e sua atenção na condução.

## 7. Problemas Revelados pelo Cenário

- Atualização pública da tabela sem sincronização prévia com a concessionária.
- Motorista torna-se alvo do descompasso entre canais institucionais.
- Falha em preservar a dignidade do trabalhador e evitar conflitos.

## 8. Resultados e Desfecho

Valdir conclui a viagem com desgaste emocional e dez minutos de atraso acumulado. No terminal, descobre que outros motoristas passaram pelo mesmo constrangimento e teme uma reclamação formal.

## 9. Requisitos e Diretrizes de IHC Derivados

1. Sincronizar alterações de grade horária com as garagens antes da publicação.
2. Exibir data e hora da atualização e avisos de transição operacional.

## 10. Referências Bibliográficas

- BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da. *Interação Humano-Computador*. Rio de Janeiro: Elsevier / Campus, 2010.
- COOPER, Alan; REIMANN, Robert; CRONIN, Dave. *About Face 3*. Indianapolis: Wiley Publishing, 2007.
- ROSSON, Mary Beth; CARROLL, John M. *Usability Engineering: Scenario-Based Development of Human-Computer Interaction*. San Francisco: Morgan Kaufmann, 2002.
