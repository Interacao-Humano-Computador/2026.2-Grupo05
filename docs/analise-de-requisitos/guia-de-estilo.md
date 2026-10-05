# 1. Introdução

> Guia de Estilo do Projeto **[NOME DO PROJETO]** — Disciplina de IHC

Este documento reúne os princípios, as diretrizes e as principais decisões de design de interface adotadas no projeto **[NOME DO PROJETO]**. Segundo Barbosa et al. (2021), é comum, principalmente em projetos grandes, reunir essas decisões em um documento intitulado guia de estilo, que funciona como um registro do que foi decidido, de modo que essas decisões não se percam e sejam efetivamente incorporadas ao produto final. O guia também serve de ferramenta de comunicação entre os membros da equipe de design e a equipe de desenvolvimento, e permite que as decisões sejam facilmente consultadas e reutilizadas em discussões sobre extensões ou versões futuras do produto.

De acordo com Mayhew (1999), um guia de estilo pode ter diferentes escopos: plataforma (composição de dispositivo e sistema operacional), corporativo (padronização e consistência entre produtos de uma empresa), família de produtos ou um produto específico. O escopo deste guia é **[definir: produto específico / família de produtos / plataforma]**, aplicado ao **[NOME DO PROJETO]**.

A estrutura deste guia segue a organização comum proposta por Marcus (1991) e Mayhew (1999), apresentada em Barbosa et al. (2021, seção 10.5), composta por seis partes: (1) Introdução; (2) Resultados de análise; (3) Elementos de interface; (4) Elementos de interação; (5) Elementos de ação; e (6) Vocabulário e padrões.

---

## 1.1 Objetivo do guia de estilo

O objetivo deste guia é registrar e padronizar as decisões de design de interface do **[NOME DO PROJETO]**, assegurando consistência visual e de interação em todas as telas e funcionalidades. De forma específica, o guia busca:

- documentar as principais decisões de design (layout, tipografia, cores, elementos de interação, terminologia, entre outras) e, sempre que possível, sua justificativa (*design rationale*), mantendo o rastreamento entre cada decisão e as discussões que a originaram (Mayhew, 1999);
- servir como meio de comunicação entre designers, desenvolvedores e demais membros da equipe, reduzindo ambiguidades e retrabalho;
- garantir a consistência da interface, de modo que elementos semelhantes tenham aparência e comportamento semelhantes em todo o sistema;
- facilitar a consulta e a reutilização das decisões em futuras funcionalidades, versões do produto ou sistemas complementares.

Vale ressaltar que o guia **não deve ser tratado como um conjunto rígido de regras**, mas como uma ferramenta prática de apoio ao trabalho e à criatividade da equipe, utilizada como parte de um processo reflexivo de design, e não como um conjunto de soluções prontas ou fórmulas geradoras de soluções (Barbosa et al., 2021).

## 1.2 Organização e conteúdo do guia de estilo

O guia está organizado em seis seções, conforme a estrutura comum de guias de estilo (Marcus, 1991; Mayhew, 1999):

| Seção | Título | Conteúdo |
|---|---|---|
| 1 | Introdução | Objetivo, organização e conteúdo, público-alvo, como utilizar e como manter o guia. |
| 2 | Resultados de análise | Descrição do ambiente de trabalho do usuário. |
| 3 | Elementos de interface | Disposição espacial e grid, janelas, tipografia, símbolos não tipográficos, cores e animações. |
| 4 | Elementos de interação | Estilos de interação, seleção de um estilo e aceleradores (teclas de atalho). |
| 5 | Elementos de ação | Preenchimento de campos, seleção e ativação. |
| 6 | Vocabulário e padrões | Terminologia, tipos de tela (para tarefas comuns) e sequências de diálogos (por exemplo, para feedback ou confirmação de uma operação). |

Esses conteúdos incorporam as decisões de design relativas aos principais elementos de interface considerados por Marcus (1991): *layout* (proporção e grids, metáforas espaciais), tipografia, simbolismo (ícones), cores, visualização de informação e design de telas e elementos de interface (*widgets*).

## 1.3 Público-alvo do guia de estilo

Este guia destina-se aos profissionais que participam da construção, da entrega e da evolução do **[NOME DO PROJETO]**, em especial:

- **Programadores:** consultam o guia para implementar a interface de acordo com as decisões de design, como espaçamentos, tipografia, paleta de cores, comportamento dos componentes e mensagens do sistema, evitando divergências entre o projeto e o produto final.
- **Gerentes:** utilizam o guia para acompanhar a consistência do produto, apoiar decisões de escopo e priorização e garantir que as definições de design sejam seguidas pela equipe.
- **Equipe de suporte:** recorre ao guia para compreender a terminologia, os padrões de diálogo e o comportamento esperado da interface, o que auxilia o atendimento e a orientação dos usuários.
- **Designers e demais membros da equipe:** [incluir, se for o caso, designers, testadores e novos integrantes], que o utilizam como referência comum para criar novas telas e funcionalidades.

## 1.4 Como utilizar o guia (em produção e manutenção)

**Na produção** (projeto e desenvolvimento de novas telas e funcionalidades):

1. Antes de projetar ou implementar uma nova tela, consultar a seção correspondente do guia (por exemplo, elementos de interface para *layout*, tipografia e cores; elementos de interação e de ação para componentes; vocabulário e padrões para textos e diálogos).
2. Reutilizar os padrões, tipos de tela e sequências de diálogo já definidos sempre que atenderem à necessidade, adaptando-os apenas quando houver justificativa.
3. Verificar, ao final, se a tela ou funcionalidade produzida está em conformidade com o guia, por exemplo, em revisões de design e de código.
4. Quando uma necessidade não estiver coberta pelo guia, registrar a decisão tomada e propor sua inclusão.

**Na manutenção** (correções, extensões e novas versões do produto):

1. Consultar o guia e o registro do *design rationale* para entender por que uma decisão foi tomada antes de alterá-la.
2. Aplicar as mesmas decisões de design às novas funcionalidades e aos sistemas complementares, preservando a consistência do produto ao longo do tempo.
3. Utilizar o guia como base para avaliar se uma alteração proposta mantém a coerência da interface.

Para que o guia seja efetivamente adotado, sua existência e importância devem ser comunicadas à equipe, com acesso facilitado ao documento inteiro ou a tópicos específicos e, quando necessário, orientação ou treinamento para seu uso (Barbosa et al., 2021).

## 1.5 Como manter o guia

Um guia de estilo é um documento vivo e precisa ser atualizado à medida que o produto evolui. Para isso, propõe-se:

- **Responsável(is) pela manutenção:** [definir pessoa ou papel responsável pelo guia].
- **Controle de versões:** cada alteração deve ser registrada com data, autor e descrição, mantendo um histórico de mudanças ([definir onde ficará o documento, por exemplo, repositório do projeto]).
- **Solicitação de mudanças:** qualquer membro da equipe pode propor inclusões ou alterações, que devem ser analisadas e aprovadas pelo(s) responsável(is) antes de entrarem no guia.
- **Registro da justificativa:** toda decisão nova ou modificada deve ter sua justificativa registrada (*design rationale*), mantendo o rastreamento entre a decisão e os elementos de discussão que a originaram (Mayhew, 1999).
- **Revisões periódicas:** o guia deve ser revisado ao final de cada ciclo de desenvolvimento ([definir periodicidade]) e sempre que resultados de avaliações de usabilidade apontarem a necessidade de ajustes.
- **Comunicação das mudanças:** toda atualização relevante deve ser comunicada à equipe, para evitar que versões desatualizadas sejam usadas.

---

---


## Referência bibliográfica da fonte

BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.; GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J. **Interação Humano-Computador e Experiência do Usuário.** Autopublicação, 2021. ISBN 978-65-00-19677-1. Capítulo 10 (Princípios e Diretrizes para o Design de IHC), seção 10.5 (Guias de Estilo), p. 257–259.

Obras citadas pela fonte:

- MARCUS, A. **Graphic design for electronic documents and user interfaces.** New York: ACM, 1991.
- MAYHEW, D. J. **The Usability Engineering Lifecycle: A Practitioner's Handbook for User Interface Design.** 1. ed. Morgan Kaufmann, 1999.

## Foto do texto da referência

> Inserir aqui a foto (print) do trecho do livro que explica a estrutura do guia de estilo.
> Arquivos prontos junto a este documento: `ref_guia_estilo_p258.png` (estrutura do guia, p. 258) e, se desejar, `ref_guia_estilo_p257.png` (p. 257) e `ref_guia_estilo_p259.png` (p. 259).

![Estrutura do guia de estilo — Barbosa et al. (2021), p. 258](ref_guia_estilo_p258.png)

**Autor:** [Seu nome completo]
