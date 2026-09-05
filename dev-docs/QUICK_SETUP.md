# Guia de Inicialização Rápida (Quick Setup)

Este guia orienta como configurar e executar o ambiente de documentação localmente.

Você pode optar por rodar o projeto de duas maneiras:
1. **Via Docker** (Recomendado caso não queira gerenciar versões do Python na máquina).
2. **Via Python Virtualenv** (Recomendado caso prefira um ambiente nativo e leve).

Ambos os métodos contam com **Live Reload** (o navegador atualiza automaticamente ao salvar edições nos arquivos Markdown e CSS).

---

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Método 1: Executando com Docker](#método-1-executando-com-docker-recomendado)
- [Método 2: Executando com Python Virtualenv (RECOMENDADO PARA WINDOWS)](#método-2-executando-com-python-virtualenv)
- [Solução de Problemas Comuns](#solução-de-problemas-comuns)

---

## Pré-requisitos

Certifique-se de estar dentro do diretório do projeto:

```bash
cd 2026.2-Grupo05
```

- **Para Docker:** Ter o [Docker](https://docs.docker.com/get-docker/) e o Docker Compose instalados.
- **Para Python:** Ter o [Python 3.10+](https://www.python.org/downloads/) e `pip` instalados.

---

## Método 1: Executando com Docker (RECOMENDADO PARA LINUX E MACOS)

O projeto já conta com o arquivo `docker-compose.yml` pré-configurado com a imagem oficial do MkDocs Material.

### 1. Iniciar o servidor de documentação

Execute os comandos abaixo:

```bash
#entra no diretório correto
cd 2026.2-Grupo05

#sobe o container
docker compose up
```

> **Dica:** Para rodar em segundo plano (modo detached), use `docker compose up -d`.

### 2. Acessar a documentação

Abra o navegador no endereço:
👉 **[http://localhost:8000](http://localhost:8000)** (ou `http://127.0.0.1:8000`)

### 3. Comandos úteis do Docker

- **Visualizar logs em segundo plano:**
  ```bash
  docker compose logs -f
  ```
- **Parar o container:**
  Pressione `Ctrl + C` (caso não esteja em segundo plano) ou execute:
  ```bash
  docker compose down
  ```

---

## Método 2: Executando com Python Virtualenv (RECOMENDADO PARA WINDOWS)

Caso prefira rodar diretamente no seu ambiente Python local:

### 1. Criar o Ambiente Virtual

- **Linux / macOS:**
  ```bash
  python3 -m venv .venv
  ```

- **Windows (PowerShell / Prompt de Comando):**
  ```powershell
  python -m venv .venv
  ```

### 2. Ativar o Ambiente Virtual

- **Linux / macOS:**
  ```bash
  source .venv/bin/activate
  ```

- **Windows (PowerShell):**
  ```powershell
  .venv\Scripts\Activate.ps1
  ```
  *(Se encontrar erro de permissão no PowerShell, execute `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass` e tente novamente).*

- **Windows (CMD):**
  ```cmd
  .venv\Scripts\activate.bat
  ```

### 3. Instalar as Dependências

Com o ambiente ativado (você verá `(.venv)` no início do terminal):

```bash
pip install -r requirements.txt
```

### 4. Iniciar o Servidor MkDocs

```bash
mkdocs serve
```

### 5. Acessar a documentação

Abra o navegador no endereço:
👉 **[http://localhost:8000](http://localhost:8000)** (ou `http://127.0.0.1:8000`)

### 6. Desativar o Ambiente Virtual

Quando terminar de trabalhar, basta rodar:

```bash
deactivate
```

---

## Solução de Problemas Comuns

### 1. "Port 8000 is already in use" (Porta 8000 ocupada)
Se outro processo ou container já estiver utilizando a porta 8000:
- **No Docker:** Você pode alterar o mapeamento no `docker-compose.yml` para `"8001:8000"` e acessar em `localhost:8001`.
- **No MkDocs CLI:** Inicie em outra porta com:
  ```bash
  mkdocs serve -a localhost:8001
  ```

### 2. Erro de permissão ao ativar venv no Windows PowerShell
No Windows, o PowerShell bloqueia scripts por padrão. Para liberar nesta sessão do terminal:
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.venv\Scripts\Activate.ps1
```

### 3. Alterações não refletem no navegador
Tanto o Docker quanto o `mkdocs serve` monitoram arquivos na pasta `docs/` e `mkdocs.yml`. Caso faça alterações estruturais no `mkdocs.yml`, pode ser necessário reiniciar o servidor (`Ctrl + C` e rodar novamente).
