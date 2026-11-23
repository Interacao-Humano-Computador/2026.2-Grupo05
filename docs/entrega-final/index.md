## Histórico de Versão e Contribuição

| Data | Versão | Descrição | Autor(es) | Revisor(es) | Declaração de Uso de IA |
| :---: | :---: | :--- | :--- | :--- | :--- |
| 19/11/2026 | `1.0` | Criação do índice de consolidação da entrega final e registro das pendências externas. | [Gabriel Melo](https://github.com/gabriellcardone-06) | [Arthur Mariani](https://github.com/arthur-mariani) | Claude (Anthropic): apoio na organização e na verificação dos vínculos internos. |
| 22/11/2026 | `1.1` | Inclusão da análise de aderência das inspeções ao método de Fagan e da rastreabilidade de cada não conformidade encontrada no projeto. | [Gabriel Melo](https://github.com/gabriellcardone-06) | — | Claude (Anthropic): apoio na análise das atas, das listas de verificação e na redação da rastreabilidade. |

# Entrega Final

Esta página consolida os registros disponíveis para a entrega final:

- [Contribuições efetivamente registradas](../contribuicoes/index.md);
- [Gravações das apresentações](../apresentacoes/index.md);
- [Inspeções das entregas](../inspecoes/index.md);
- [Listas de verificação padronizadas](../verificacao/index.md);
- [Design, avaliação e desenvolvimento](../design-avaliacao-desenvolvimento/index.md).

---

## Aderência das inspeções ao método de Fagan

### Critério adotado

A inspeção de Fagan é um método formal de revisão por pares, criado por Michael Fagan na IBM em 1976, para detectar defeitos nos artefatos o mais cedo possível (FAGAN, 1976). O método tem seis etapas: **planejamento**, **visão geral**, **preparação individual**, **reunião de inspeção**, **retrabalho** e **acompanhamento**. Ele também define cinco papéis: **moderador**, **autor**, **leitor**, **inspetores** e **registrador**. A reunião serve para encontrar e registrar defeitos, não para discutir soluções, e exige critérios claros de entrada e de saída.

Os registros de inspeção do projeto foram comparados com esse método: a página de [Inspeções](../inspecoes/index.md), as atas de inspeção ([Ata 2](../atas/ata2.md), [Ata 4](../atas/ata4.md), [Ata 6](../atas/ata6.md), [Ata 8](../atas/ata8.md), [Ata 10](../atas/ata10.md) e [Ata 11](../atas/ata11.md)) e as [listas de verificação versão 2](../verificacao/index.md). Cada não conformidade tem um identificador e um link para o trecho exato do repositório em que aparece. Os links apontam para a versão `01c7536` dos arquivos, para que as linhas indicadas não mudem com edições futuras.

### Síntese

O projeto segue o método de Fagan **parcialmente**. Atende a reunião de inspeção com lista de verificação, o registro escrito dos defeitos e o parecer. Não atende o planejamento formal com critérios de entrada e de saída, a definição de papéis, a preparação individual e, principalmente, o retrabalho e o acompanhamento: os defeitos são registrados, mas não há evidência de que tenham sido corrigidos e conferidos depois.

### Etapas do processo

<div align="center">
<p><strong>Tabela 1</strong>: Rastreabilidade das etapas do método de Fagan</p>
</div>

| ID | Etapa de Fagan | Situação | Não conformidade e localização |
| :---: | :--- | :---: | :--- |
| F1 | Planejamento (moderador, escopo, critérios de entrada e de saída) | Não atende | Nenhuma ata define moderador nem critérios de entrada e de saída; o "Objetivo da Reunião" informa somente o escopo: [ata2 L15](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata2.md?plain=1#L15), [ata4 L14](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata4.md?plain=1#L14), [ata8 L14](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata8.md?plain=1#L14). A página de inspeções define apenas a regra de alternância de grupos: [inspecoes L18](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L18). |
| F2 | Visão geral (apresentação feita pelo autor) | Parcial | Não há registro da etapa nem de sua dispensa. Na autoinspeção da Entrega 6, o apresentador não foi o autor de cada artefato: [ata10 L21](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata10.md?plain=1#L21). |
| F3 | Preparação individual com lista de verificação | Não atende | A lista foi aplicada somente em conjunto, durante a reunião ("deliberaram conjuntamente"): [ata8 L32](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata8.md?plain=1#L32), [ata11 L33](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata11.md?plain=1#L33). Não há defeitos anotados individualmente antes da reunião. |
| F4 | Reunião de inspeção (percurso item a item e registro) | Parcial | Os itens de desenvolvimento foram avaliados em bloco, sem indicar qual item falhou, e a Ata 6 cita 10 itens, quando são 11 (D1–D11): [ata6 L40](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata6.md?plain=1#L40), [ata4 L92](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata4.md?plain=1#L92). As atas trazem recomendações detalhadas de solução, que o método deixa para o retrabalho: [ata8 L71](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata8.md?plain=1#L71), [ata11 L75](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata11.md?plain=1#L75). |
| F5 | Retrabalho (correção feita pelo autor) | Não atende | A autoinspeção da Entrega 2 registrou seis itens incompletos do próprio grupo ([ata4 L63](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata4.md?plain=1#L63)), sem responsáveis nem prazos de correção ([ata4 L110](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata4.md?plain=1#L110)). O cronograma prevê apenas um período genérico de ajustes: [cronograma L95](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/planejamento/cronograma.md?plain=1#L95). |
| F6 | Acompanhamento (conferência das correções pelo moderador) | Não atende | A Ata 4 prevê conferir novamente os itens ([ata4 L108](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata4.md?plain=1#L108)), mas não há registro dessa conferência. As tabelas "Registro da avaliação" das sete listas versão 2 estão vazias: [verif1 L203](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif1.md?plain=1#L203), [verif2 L189](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif2.md?plain=1#L189), [verif3 L171](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif3.md?plain=1#L171), [verif4 L187](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif4.md?plain=1#L187), [verif5 L162](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif5.md?plain=1#L162), [verif6 L160](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif6.md?plain=1#L160), [verif7 L145](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif7.md?plain=1#L145). |

<div align="center">
<p><em>Fonte: elaborado pelo Grupo 05 (2026), com base em FAGAN (1976) e nos registros de inspeção do projeto.</em></p>
</div>

### Papéis

<div align="center">
<p><strong>Tabela 2</strong>: Rastreabilidade dos papéis do método de Fagan</p>
</div>

| ID | Papel | Situação | Não conformidade e localização |
| :---: | :--- | :---: | :--- |
| P1 | Moderador | Não atende | Não há moderador único: na Ata 8, a moderação foi dividida entre três integrantes ([ata8 L32](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata8.md?plain=1#L32)); nas Atas 2, 4 e 6, o papel não aparece. |
| P2 | Autor | Não atende | As atas não identificam o autor do artefato inspecionado. Na autoinspeção da Entrega 6, os próprios autores atuaram como inspetores e o resultado foi de 100% de conformidade: [ata10 L73](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata10.md?plain=1#L73). |
| P3 | Leitor | Parcial | O papel é exercido por quem compartilha a tela e navega pelos artefatos, mas não recebe esse nome: [ata8 L31](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata8.md?plain=1#L31), [ata11 L32](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata11.md?plain=1#L32). |
| P4 | Inspetores | Parcial | Os inspetores aparecem apenas como participantes, sem registro de quem avaliou cada item. |
| P5 | Registrador | Parcial | O redator da ata exerce o papel, mas consta como ausente em reuniões que registrou, o que indica que os defeitos não foram anotados durante a reunião: [ata6 L15–16](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata6.md?plain=1#L15-L16), [ata11 L15–17](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata11.md?plain=1#L15-L17). |

<div align="center">
<p><em>Fonte: elaborado pelo Grupo 05 (2026), com base em FAGAN (1976) e nos registros de inspeção do projeto.</em></p>
</div>

### Critérios e completude dos registros

<div align="center">
<p><strong>Tabela 3</strong>: Rastreabilidade dos critérios e da completude dos registros</p>
</div>

| ID | Não conformidade | Localização |
| :---: | :--- | :--- |
| C1 | As listas versão 2 não definem critério de saída, ou seja, quando uma entrega é aprovada (por exemplo, nenhum item marcado como "Não"); definem apenas as respostas Sim, Não e Incompleto. | [verif6 L19](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/verificacao/v2/verif6.md?plain=1#L19) (a mesma estrutura se repete nas demais listas) |
| C2 | Há inspeções sem registro: autoinspeção das Entregas 1, 3 e 7 pendente, Entrega 4 não realizada e Entrega 8 e inspeção final pendentes. | [inspecoes L29](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L29), [inspecoes L86](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L86), [inspecoes L109–110](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L109-L110), [inspecoes L188](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L188), [inspecoes L209–222](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L209-L222) |
| C3 | As inspeções da Entrega 5 (vídeo 1) e da Entrega 7 têm gravação, mas não têm ata. | [inspecoes L121–124](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L121-L124), [inspecoes L189](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L189) |
| C4 | Na Entrega 6, a regra indica o Grupo −1, mas a inspeção foi feita no Grupo 07 (+1); o desvio está documentado, mas não foi justificado no planejamento. | [inspecoes L159](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/inspecoes/index.md?plain=1#L159) |
| C5 | A Ata 6 registra horários contraditórios: 19h30 no cabeçalho e 19h00 no corpo. | [ata6 L12](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata6.md?plain=1#L12), [ata6 L36](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05/blob/01c7536/docs/atas/ata6.md?plain=1#L36) |

<div align="center">
<p><em>Fonte: elaborado pelo Grupo 05 (2026), a partir da página de inspeções, das atas e das listas de verificação.</em></p>
</div>

### Encaminhamentos

Para completar o ciclo de Fagan, recomenda-se:

1. adotar um modelo de ata de inspeção com papéis fixos (moderador, autor, leitor e registrador) e com critérios de entrada e de saída declarados;
2. manter uma tabela de acompanhamento de defeitos com defeito, responsável, prazo, link da correção e responsável pela conferência, começando pelos itens 2, 3, 8, 9, 10 e 11 da [Ata 4](../atas/ata4.md);
3. preencher o "Registro da avaliação" de cada lista versão 2 sempre que ela for aplicada.

---

## Fotos de Referência

![Referência do livro para os itens do plano de desenvolvimento](../assets/prints_referencias/verificacao-v2/plano-itens-desenvolvimento.png)

*Imagem 1: Trecho do livro da disciplina utilizado na consolidação dos itens de desenvolvimento.*

---

## Referências Bibliográficas

- BARBOSA, Simone Diniz Junqueira et al. **Interação Humano-Computador e Experiência do Usuário**. Rio de Janeiro: Autopublicação, 2021.
- FAGAN, Michael E. Design and code inspections to reduce errors in program development. **IBM Systems Journal**, v. 15, n. 3, p. 182–211, 1976.
- SALES, André Barros de. **Materiais e orientações da disciplina de Interação Humano-Computador**. Universidade de Brasília, 2026.
