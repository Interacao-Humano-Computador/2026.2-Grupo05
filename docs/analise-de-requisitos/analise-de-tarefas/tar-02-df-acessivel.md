# TAR-02: Pré-agendamento no Programa DF Acessível

## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 24/09/2026 | 1.0 | Elaboração da Análise de Tarefas (HTA e CTT) para o Pré-agendamento no Programa DF Acessível. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |
| 27/09/2026 | 1.1 | Modularização em documento dedicado e padronização com a nova arquitetura. | [Carlos Costa](https://github.com/carloshfgit) | [Gabriel Melo](https://github.com/gabriellcardone-06) |
| 11/10/2026 | 1.2 | Atualização da persona de referência dos PDFs de HTA e CTT para Larissa Ferreira Lima. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Igor Dantas](https://github.com/IgorDARAUJO) |

---

## 1. Introdução

Este documento analisa a tarefa de realizar o pré-agendamento de atendimento no Programa DF Acessível pelo site da SEMOB-DF. Atualmente, o site da SEMOB-DF não oferece esse serviço; por isso, a tarefa é apresentada como **proposta de nova funcionalidade**, integrada à página inicial do site e alinhada ao [Storyboard 02](../../design-avaliacao-desenvolvimento/nivel1/storyboards.md#32-storyboard-02-pre-agendamento-no-programa-df-acessivel). A modelagem utiliza HTA e CTT para decompor os objetivos, as ações e as relações temporais envolvidas no fluxo idealizado (acesso pelo atalho, escolha do local e da data, confirmação e comprovante), contribuindo para especificar requisitos de clareza, acessibilidade e continuidade do fluxo.

## 2. Caracterização da Tarefa

* **Título da Tarefa:** Pré-agendamento no Programa DF Acessível.
* **Natureza da Tarefa:** Proposta de nova funcionalidade (o serviço não existe atualmente no site da SEMOB-DF).
* **Perfil do Participante:** Usuário primário que necessite de auxílio transporte.
* **Persona de Referência:** [Larissa Ferreira Lima](../personas/larissa-ferreira-lima.md) (23 anos, com deficiência temporária de mobilidade, usuária de cadeira de rodas).
* **Responsáveis pela Elaboração:** [Gabriel Melo](https://github.com/gabriellcardone-06)
* **Data da Realização:** 25/09/2026
* **Objetivo da Tarefa:** Realizar o pré-agendamento no Programa DF Acessível pela página inicial do site da SEMOB-DF, escolhendo o local e o dia do atendimento.
* **Caminho proposto:** página inicial da SEMOB-DF → atalho "Agendar DF Acessível" → Pré-agendamento → posto de atendimento → dia do atendimento → revisão e confirmação → comprovante por e-mail e WhatsApp.

### 2.1 Relação com o Storyboard 02

A Tabela 1 relaciona cada quadro do [Storyboard 02](../../design-avaliacao-desenvolvimento/nivel1/storyboards.md#32-storyboard-02-pre-agendamento-no-programa-df-acessivel) aos nós da HTA e do CTT que o modelam.

<div align="center">
<p><strong>Tabela 1</strong> — Correspondência entre o Storyboard 02 e os modelos de tarefa</p>
</div>

| Quadro do Storyboard 02 | O que acontece | HTA | CTT |
| :---: | :--- | :---: | :---: |
| 1 | Larissa, no quarto, precisa de transporte até a fisioterapia | 0 (necessidade que inicia a tarefa) | 0 |
| 2 | Abre o site da SEMOB-DF e toca no atalho "Agendar DF Acessível" | 1 (1.1 e 1.2) | Ramo 1 (1.1 a 1.3) |
| 3 | Escolhe o posto mais próximo de casa | 2.1 | 2.1 e 2.2 |
| 4 | Seleciona a data no calendário | 2.2 | 2.3 a 2.5 |
| 5 | Recebe o comprovante por e-mail e WhatsApp | 3 (3.1 e 3.2) | Ramo 3 (3.1 a 3.4) |

<div align="center">
<p><em>Fonte: Gabriel Melo (2026).</em></p>
</div>

---

## 3. Análise Hierárquica de Tarefas (HTA)

Abaixo, no Documento 1, é possível visualizar o diagrama e a tabela correspondente à Análise Hierárquica de Tarefas (HTA) para o fluxo proposto.

<div align="center">
  <iframe src="../../../assets/PDFs/Gabriel_Artefato_HTA.pdf" width="100%" height="600px" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>
</div>

*Caso o documento não carregue, [clique aqui para baixar o PDF do HTA](../../assets/PDFs/Gabriel_Artefato_HTA.pdf).*

<div align="center">
<p><strong>Documento 1</strong> — Diagrama HTA: Pré-agendamento no Programa DF Acessível (proposta de nova funcionalidade).</p>
<p><em>Legenda: a numeração decimal indica os níveis de decomposição; as linhas conectam objetivos aos seus subobjetivos; “&gt;” indica sequência e “/” indica seleção conforme as circunstâncias. Os nós sublinhados representam operações.</em></p>
<p><em>Fonte: Gabriel Melo (2026).</em></p>
</div>

---

## 4. ConcurTaskTrees (CTT)

Abaixo, no Documento 2, encontra-se a modelagem das relações temporais e lógicas desta mesma tarefa utilizando a notação CTT.

<div align="center">
  <iframe src="../../../assets/PDFs/Gabriel_Artefato_CTT.pdf" width="100%" height="600px" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>
</div>

*Caso o documento não carregue, [clique aqui para baixar o PDF do CTT](../../assets/PDFs/Gabriel_Artefato_CTT.pdf).*

<div align="center">
<p><strong>Documento 2</strong> — Diagrama CTT: Pré-agendamento no Programa DF Acessível (proposta de nova funcionalidade).</p>
<p><em>Legenda: nuvem = tarefa abstrata; pessoa = tarefa do usuário; monitor = tarefa do sistema; pessoa com monitor = tarefa interativa. Os operadores temporais representam sequência, passagem de informação, escolha, concorrência, independência, desativação e suspensão.</em></p>
<p><em>Fonte: Gabriel Melo (2026).</em></p>
</div>

---

## 5. Referências Bibliográficas

* BARBOSA, Simone Diniz Junqueira; SILVA, Bruno Santana da; SILVEIRA, Milene Selbach; GASPARINI, Isabela; DARIN, Ticianne; BARBOSA, Gabriel Diniz Junqueira. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021. ISBN 978-65-00-19677-1.
