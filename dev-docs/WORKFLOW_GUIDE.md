# Guia de Contribuição e Fluxo Git (Workflow)

Este guia foi elaborado para ajudar todos os membros da equipe a clonar o repositório, realizar modificações locais, enviar suas contribuições e abrir Pull Requests (PRs) de forma padronizada e segura.

---

## 📋 Sumário
1. [Pré-requisitos e Configuração Inicial](#1-pré-requisitos-e-configuração-inicial)
2. [Passo a Passo do Fluxo de Trabalho](#2-passo-a-passo-do-fluxo-de-trabalho)
   - [Passo 1: Clonar o repositório](#passo-1-clonar-o-repositório)
   - [Passo 2: Atualizar a branch de desenvolvimento (`dev`)](#passo-2-atualizar-a-branch-de-desenvolvimento-dev)
   - [Passo 3: Criar uma branch de trabalho](#passo-3-criar-uma-branch-de-trabalho-opcionalrecomendado)
   - [Passo 4: Realizar as alterações (Exemplo Prático)](#passo-4-realizar-as-alterações-exemplo-prático)
   - [Passo 5: Verificar o status das alterações](#passo-5-verificar-o-status-das-alterações)
   - [Passo 6: Adicionar e commitar](#passo-6-adicionar-e-commitar)
   - [Passo 7: Enviar para o GitHub (`git push`)](#passo-7-enviar-para-o-github-git-push)
   - [Passo 8: Abrir um Pull Request (PR)](#passo-8-abrir-um-pull-request-pr)
3. [Como Visualizar a Documentação Localmente](#3-como-visualizar-a-documentação-localmente)
4. [Tabela Rápida de Comandos Git](#4-tabela-rápida-de-comandos-git)
5. [Boas Práticas e Dicas](#5-boas-práticas-e-dicas)

---

## 1. Pré-requisitos e Configuração Inicial

Antes de começar, certifique-se de ter o **Git** instalado no seu computador e seu usuário/e-mail configurados.

Abra o seu terminal (ou Git Bash no Windows) e configure sua identidade (caso ainda não tenha feito):

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email-do-github@exemplo.com"
```

---

## 2. Passo a Passo do Fluxo de Trabalho

### Passo 1: Clonar o repositório

Se é a primeira vez que você vai trabalhar no projeto, baixe o repositório para sua máquina:

```bash
# Clone o repositório via HTTPS:
git clone https://github.com/Interacao-Humano-Computador/2026.2-Grupo05.git

# Acesse a pasta do projeto:
cd 2026.2-Grupo05
```

---

### Passo 2: Atualizar a branch de desenvolvimento (`dev`)

Sempre antes de começar qualquer trabalho novo, garanta que você está com a versão mais recente do código:

```bash
# Mude para a branch dev:
git checkout dev

# Baixe as atualizações mais recentes do repositório remoto:
git pull origin dev
```

> 📌 **Nota:** Caso a branch `dev` ainda não exista localmente, o comando `git checkout dev` criará a referência local conectada à `dev` remota automaticamente.

---

### Passo 3: Criar uma branch de trabalho 

Para manter o trabalho organizado, você deve criar uma branch temporária com o nome da funcionalidade ou documento que irá editar:

```bash
# Cria e muda para uma nova branch chamada feature/atualiza-cronograma:
git checkout -b feature/atualiza-cronograma
```
---

### Passo 4: Realizar as alterações (Exemplo Prático)

Abra o projeto no seu editor de código favorito (ex: VS Code).

#### 🧪 Exemplo: Atualizando o Cronograma
Vamos supor que você precise atualizar uma data ou adicionar uma entrega no arquivo `docs/cronograma.md`:

1. Abra o arquivo `docs/cronograma.md`.
2. Adicione ou edite as informações desejadas (por exemplo, ajustando datas da Entrega 1).
3. Salve o arquivo. (Caso não tenha o Auto-Save ligado)

---

### Passo 5: Verificar o status das alterações

Volte ao terminal para conferir o que foi modificado:

```bash
# Mostra os arquivos que foram modificados:
git status

# Mostra exatamente quais linhas foram adicionadas/removidas:
git diff docs/cronograma.md
```

---

### Passo 6: Adicionar e commitar

Prepare os arquivos modificados para o commit e escreva uma mensagem clara explicando o que foi feito:

```bash
# Adiciona o arquivo específico para a área de preparação (staging):
git add docs/cronograma.md

# (Ou caso queira adicionar todas as modificações de uma vez):
git add .

# Realiza o commit com uma mensagem descritiva:
git commit -m "docs: atualiza datas da Entrega 1 no cronograma"
```

---

### Passo 7: Enviar para o GitHub (`git push`)

Envie suas alterações para o repositório remoto no GitHub:

#### Cenário A: Se você trabalhou diretamente na branch `dev`:
```bash
git push origin dev
```

#### Cenário B: Se você criou uma branch própria (ex: `feature/atualiza-cronograma`):
```bash
git push origin feature/atualiza-cronograma
```

---

### Passo 8: Abrir um Pull Request (PR)

Depois de enviar o push para o GitHub:

1. Acesse a página do repositório no GitHub: [2026.2-Grupo05 no GitHub](https://github.com/Interacao-Humano-Computador/2026.2-Grupo05).
2. Você verá um aviso amarelo no topo com o botão **"Compare & pull request"**. Clique nele.
3. Defina os alvos do PR:
   - **Base branch** (onde as mudanças vão entrar): `main` (ou `dev`, conforme o fluxo combinado).
   - **Compare branch** (sua branch com as alterações): `dev` ou `feature/atualiza-cronograma`.
4. Adicione um título claro (ex: `Atualização de datas no cronograma`) e descreva brevemente o que foi alterado.
5. Clique em **"Create pull request"**.
6. Solicite a revisão de pelo menos um colega de equipe antes de realizar o merge!

---

## 3. Como Visualizar a Documentação (GitPages) Localmente

Para testar como o site do MkDocs fica antes de enviar suas mudanças:

### Opção 1: Via Docker (Recomendada para Linux/MacOS)
```bash
docker compose up
```
Abra seu navegador em [http://localhost:8000](http://localhost:8000).

### Opção 2: Via Python / MkDocs local (Recomendada pra Linux)
```bash
pip install -r requirements.txt
mkdocs serve
```
Abra seu navegador em [http://localhost:8000](http://localhost:8000).

---

## 4. Tabela Rápida de Comandos Git

| Comando | Descrição |
| :--- | :--- |
| `git clone <URL>` | Baixa o repositório para o seu computador |
| `git pull origin <branch>` | Atualiza sua branch local com as últimas alterações remotas |
| `git checkout <branch>` | Alterna para a branch especificada |
| `git checkout -b <nova-branch>` | Cria e já alterna para uma nova branch |
| `git status` | Exibe o estado dos arquivos modificados |
| `git diff` | Mostra as alterações detalhadas linha a linha |
| `git add <arquivo>` | Prepara o arquivo modificado para o commit |
| `git commit -m "mensagem"` | Registra o commit com a mensagem descritiva |
| `git push origin <branch>` | Envia os commits locais para o GitHub |

---

## 5. Boas Práticas e Dicas

1. **Nunca trabalhe em cima de uma branch desatualizada**: Sempre rode `git pull origin dev` antes de iniciar uma nova tarefa.
2. **Faça commits pequenos e frequentes**: É mais fácil entender e revisar várias alterações pequenas do que uma única alteração gigantesca.
3. **Mensagens de commit claras**:
   - `docs: atualiza cronograma de entregas`
   - `fix: corrige links quebrados no index`
   - `style: ajusta contraste da paleta de cores`
4. **Evite subir direto na `main`**: A branch `main` deve conter apenas versões estáveis validadas através de Pull Requests.
