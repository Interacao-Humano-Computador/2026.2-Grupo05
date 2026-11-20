## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 26/09/2026 | `1.0` | Elaboração inicial dos cenários de uso a partir do perfil empírico do motorista (`MOT-01`) e da persona Valdir Soares, fundamentada na literatura clássica de IHC e Design Baseado em Cenários (Barbosa e Silva, 2010; Carroll, 2000; Rosson e Carroll, 2002; Cooper et al., 2007). | [Carlos Costa](https://github.com/carloshfgit) | [Arthur Mariani](https://github.com/arthur-mariani) e [Gabriel Melo](https://github.com/gabriellcardone-06) | Não declarado pelo autor |
| 27/09/2026 | `1.1` | Integração formal ao repositório MkDocs do projeto com padronização hipertextual e rastreabilidade bidirecional com personas e perfis. | [Carlos Costa](https://github.com/carloshfgit) | [Igor Dantas](https://github.com/IgorDARAUJO) | Não declarado pelo autor |
| 19/11/2026 | `1.2` | Padronização da estrutura (histórico no topo, conteúdo, fotos de referência e referências ao final); declaração de IA levada para o histórico; retirada das referências que não são o livro da disciplina nem material do professor; inclusão de fotos de referência grifadas. Inclusão do bloco de artefatos relacionados (persona, cenário, análise de tarefas, storyboard, planejamentos, relatos e protótipos da funcionalidade). | [Gabriel Melo](https://github.com/gabriellcardone-06) | Pendente de revisão | Claude (Anthropic) — apoio na padronização da estrutura do artefato, na revisão das referências e na formatação em Markdown.; apoio na inclusão dos links entre artefatos |

!!! warning "Observação para correção manual"
    A coluna de declaração de IA foi preenchida com *Não declarado pelo autor* nas versões em que o artefato original não informava o uso de IA. O autor de cada versão deve confirmar se usou IA (somente Claude ou Google Gemini) e completar a célula.

---

# Cenário 7: Resolução Cooperativa de Dúvida de Passageiro sem Constrangimento

## 1. Introdução

Este cenário de mediação social acompanha Valdir Soares na resolução de uma dúvida apresentada por uma passageira durante o serviço. A situação evidencia a necessidade de fornecer informações confiáveis e acessíveis tanto ao motorista quanto ao público, orientando requisitos que favoreçam cooperação, comunicação respeitosa e redução de constrangimentos.

**Artefatos relacionados — fluxo da funcionalidade TAR-04/TAR-05 (Consulta de Escala e Alertas Operacionais (motorista)):**

* **Persona:** [Valdir Soares](../personas/valdir-soares.md)
* **Cenário:** [Cenário 5](cenario-5-consulta-escala.md); [Cenário 6](cenario-6-alerta-desvio.md); Cenário 7 (*esta página*); [Cenário 8](cenario-8-conflito-catraca.md)
* **Análise de tarefas:** [TAR-04/TAR-05](../analise-de-tarefas/analise-hta-ctt-motorista.md)
* **Storyboard:** [Storyboard 04](../../design-avaliacao-desenvolvimento/nivel1/storyboards.md#34-storyboard-04-consulta-de-escala-e-alertas-operacionais)
* **Nível 1 — avaliação do storyboard e da análise de tarefas:** Planejamento da avaliação (*não disponível — pendente de correção manual*) · Planejamento do relato (*não disponível — pendente de correção manual*) · Relato dos resultados (*não disponível — pendente de correção manual*)
* **Nível 2 — protótipo de papel (baixa fidelidade):** Planejamento da avaliação (*não disponível — pendente de correção manual*) · Planejamento do relato (*não disponível — pendente de correção manual*) · Relato dos resultados (*não disponível — pendente de correção manual*)
* **Nível 3 — protótipo de alta fidelidade:** Planejamento da avaliação (*não disponível — pendente de correção manual*) · Planejamento do relato (*não disponível — pendente de correção manual*) · Relato dos resultados (*não disponível — pendente de correção manual*)
* **Telas do protótipo de papel:** *não disponível — pendente de correção manual*
* **Protótipo de alta fidelidade navegável:** *não disponível — pendente de correção manual*


## 2. Caracterização Geral

- **Persona:** [Valdir Soares](../personas/valdir-soares.md), motorista de ônibus.
- **Tipo:** Cenário de interação social e mediação.
- **Resumo:** Valdir orienta uma passageira idosa sobre a alteração de uma parada, sem atrasar a operação e sem gerar constrangimento.

## 3. Ambiente ou Contexto

Ponto da W3 Sul, Quadra 508 Sul, às 18h15, com calçadas movimentadas e trânsito moderado. Valdir tem o smartphone no painel; Dona Maria usa um celular simples.

## 4. Atores

A Tabela 1 identifica os participantes do cenário e esclarece o papel de cada um na resolução cooperativa da dúvida apresentada.

**Tabela 1** — Atores envolvidos no Cenário 7

| Ator | Papel |
| :--- | :--- |
| Valdir Soares | Ator principal, motorista de ônibus. |
| Dona Maria | Passageira idosa, 62 anos, moradora da Candangolândia. |

## 5. Objetivos

- Esclarecer o atendimento à nova parada provisória sem atrasar a saída.
- Ser prestativo, acolhedor e transmitir segurança à passageira.

## 6. Planejamento, Ações, Eventos e Avaliação

Valdir quer orientar Dona Maria com rapidez e exatidão. Ao embarcar na 508 Sul, ela pergunta se o ônibus ainda passa perto do hospital na 716 Sul, pois ouvira que a parada mudou e teme se perder. Valdir explica que a parada foi alterada por obra, mas existe ponto provisório a cinquenta metros, em frente à passarela iluminada, e promete avisá-la. A informação foi previamente consultada em um comunicado simples da SEMOB, com paradas afetadas e referências reais.

## 7. Problemas Revelados pelo Cenário

- Coordenadas técnicas e códigos de postes não são compreensíveis para a população ou para operadores.
- A resposta precisa ser exata mesmo sob pressão de tempo no embarque.

## 8. Resultados e Desfecho

Dona Maria desce com segurança no ponto provisório. A informação clara reforça Valdir como agente facilitador e melhora a experiência cidadã.

## 9. Requisitos e Diretrizes de IHC Derivados

1. Priorizar hospitais, passarelas, comércios e outros pontos de referência reais.
2. Usar linguagem cidadã, acolhedora e fácil de memorizar para repasse verbal.

---

## 10. Fotos de Referência

As Figuras 1 a 2 mostram os trechos que fundamentam este artefato, recortados e grifados em amarelo diretamente do livro da disciplina (BARBOSA et al., 2021).

<div id="figura-1" align="center">
<p><strong>Figura 1</strong> — Cenários: definição, ator e objetivo principais</p>
</div>

![Figura 1 — Cenários: definição, ator e objetivo principais](../../assets/prints_referencias/verificacao-v2/livro-cenarios.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 158). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

<div id="figura-2" align="center">
<p><strong>Figura 2</strong> — Elementos característicos de um cenário e uso de personas como atores</p>
</div>

![Figura 2 — Elementos característicos de um cenário e uso de personas como atores](../../assets/prints_referencias/verificacao-v2/livro-cenarios-elementos.png)

<div align="center">
<p><em>Fonte: BARBOSA et al. (2021, p. 158). Recorte e grifo: [Gabriel Melo](https://github.com/gabriellcardone-06) (2026).</em></p>
</div>

---

## 11. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
