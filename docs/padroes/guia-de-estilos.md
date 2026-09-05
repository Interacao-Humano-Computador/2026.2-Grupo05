# Padrões Visuais e Guia de Cores

Este documento estabelece as diretrizes de design, paletas de cores (tema claro e tema escuro) e padrões de dimensões e tipografia a serem seguidos nas páginas da documentação em MkDocs.

---

## 1. Identidade Visual e Logos Oficiais

A identidade visual do projeto adota a identidade oficial da Secretaria de Estado de Mobilidade do Distrito Federal (SEMOB-DF), composta pelo Azul Institucional e pelo Amarelo do Ipê de Brasília.

<div align="center" style="display: flex; justify-content: center; align-items: center; gap: 32px; flex-wrap: wrap; margin: 28px 0;">
  <div style="text-align: center;">
    <img src="assets/logo.png" alt="Logo Circular SEMOB com Ipê Amarelo" width="150" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15)); border-radius: 50%;" />
    <p><em>Figura 1: Emblema Circular SEMOB com Ipê Amarelo (Logo Principal e Favicon).</em></p>
  </div>
  <div style="text-align: center;">
    <img src="assets/logo-horizontal.png" alt="Logo Horizontal SEMOB-DF" width="280" style="filter: drop-shadow(0 4px 8px rgba(0,0,0,0.25)); border-radius: 6px; background-color: #000; padding: 10px;" />
    <p><em>Figura 2: Versão Horizontal Institucional da SEMOB-DF.</em></p>
  </div>
</div>

- **Azul Institucional SEMOB (`#0D5094`)**: Cor primária que remete à autoridade governamental, segurança e transporte público.
- **Amarelo Ipê / Ouro (`#D97706` / `#F59E0B` / `#FFD200`)**: Extraído da copa do Ipê Amarelo presente no emblema, utilizado para destaques, links ativos e frisos.
- **Branco Puro (`#FFFFFF`)**: Utilizado para tipografia sobre o azul institucional e linhas estruturais do emblema.

---

## 2. Paleta de Cores — Tema Claro (Light Mode)

<div class="color-swatch-grid">
  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #0D5094;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Azul SEMOB DF</div>
      <div class="color-swatch-hex">#0D5094</div>
      <div class="color-swatch-usage">Navbar, títulos h1/h2, botões principais e links</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #0F64A4;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Azul Interativo (Hover)</div>
      <div class="color-swatch-hex">#0F64A4</div>
      <div class="color-swatch-usage">Estados de hover e foco em elementos navegáveis</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #D97706;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Amarelo Ipê (Acento)</div>
      <div class="color-swatch-hex">#D97706</div>
      <div class="color-swatch-usage">Friso da topbar, marcadores e chamadas de ação</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #0F172A;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Texto Principal (Slate 900)</div>
      <div class="color-swatch-hex">#0F172A</div>
      <div class="color-swatch-usage">Corpo de texto e subtítulos (alto contraste)</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #475569;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Texto Secundário (Slate 600)</div>
      <div class="color-swatch-hex">#475569</div>
      <div class="color-swatch-usage">Legendas de imagens, metadados e notas de rodapé</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Fundo da Página</div>
      <div class="color-swatch-hex">#F8FAFC</div>
      <div class="color-swatch-usage">Background geral da página (off-white suave)</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #FFFFFF; border-bottom: 1px solid #E2E8F0;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Superfície / Cards</div>
      <div class="color-swatch-hex">#FFFFFF</div>
      <div class="color-swatch-usage">Cards elevados, caixas e tabelas</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #E2E8F0;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Bordas e Divisores</div>
      <div class="color-swatch-hex">#E2E8F0</div>
      <div class="color-swatch-usage">Linhas de tabela e separadores horizontais</div>
    </div>
  </div>
</div>

### Tabela de Cores — Tema Claro

| Elemento / Função | Variável CSS | Hexadecimal | RGB |
| :--- | :--- | :---: | :---: |
| **Cor Primária** | `--md-primary-fg-color` | `#0D5094` | `13, 80, 148` |
| **Primária (Hover / Foco)** | `--md-primary-fg-color--light` | `#0F64A4` | `15, 100, 164` |
| **Cor de Acento (Amarelo Ipê)** | `--md-accent-fg-color` | `#D97706` | `217, 119, 6` |
| **Fundo da Página (Canvas)** | `--md-default-bg-color` | `#F8FAFC` | `248, 250, 252` |
| **Superfície de Cards/Blocos**| `--md-default-bg-color--light` | `#FFFFFF` | `255, 255, 255` |
| **Texto Primário** | `--md-default-fg-color` | `#0F172A` | `15, 23, 42` |
| **Texto Secundário** | `--md-default-fg-color--light` | `#475569` | `71, 85, 105` |
| **Bordas e Linhas** | `--md-default-fg-color--lightest` | `#E2E8F0` | `226, 232, 240` |
| **Fundo de Código Inline/Bloco** | `--md-code-bg-color` | `#F1F5F9` | `241, 245, 249` |

---

## 3. Paleta de Cores — Tema Escuro (Dark Mode)

<div class="color-swatch-grid">
  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #0C3866;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Azul SEMOB Noturno</div>
      <div class="color-swatch-hex">#0C3866</div>
      <div class="color-swatch-usage">Header e elementos estruturais no tema escuro</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #38BDF8;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Azul Celeste Luminoso</div>
      <div class="color-swatch-hex">#38BDF8</div>
      <div class="color-swatch-usage">Links no escuro e indicadores de foco</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #FBBF24;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Amarelo Ipê Solar</div>
      <div class="color-swatch-hex">#FBBF24</div>
      <div class="color-swatch-usage">Friso de cabeçalho e destaques</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #F8FAFC;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Texto Primário Noturno</div>
      <div class="color-swatch-hex">#F8FAFC</div>
      <div class="color-swatch-usage">Corpo de texto e títulos no modo escuro</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #94A3B8;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Texto Secundário Noturno</div>
      <div class="color-swatch-hex">#94A3B8</div>
      <div class="color-swatch-usage">Metadados, legendas e textos auxiliares</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #0B1118;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Fundo Noturno (Canvas)</div>
      <div class="color-swatch-hex">#0B1118</div>
      <div class="color-swatch-usage">Background geral em tom grafite-azulado</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #131D28;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Superfície Noturna / Cards</div>
      <div class="color-swatch-hex">#131D28</div>
      <div class="color-swatch-usage">Cards, contêineres e caixas de código</div>
    </div>
  </div>

  <div class="color-swatch-card">
    <div class="color-swatch-preview" style="background-color: #1E293B;"></div>
    <div class="color-swatch-info">
      <div class="color-swatch-title">Bordas Noturnas</div>
      <div class="color-swatch-hex">#1E293B</div>
      <div class="color-swatch-usage">Linhas de tabela e divisores no tema escuro</div>
    </div>
  </div>
</div>

### Tabela de Cores — Tema Escuro

| Elemento / Função | Variável CSS | Hexadecimal | RGB |
| :--- | :--- | :---: | :---: |
| **Cor Primária** | `--md-primary-fg-color` | `#0C3866` | `12, 56, 102` |
| **Destaque Primário / Links**| `--md-primary-fg-color--light` | `#38BDF8` | `56, 189, 248` |
| **Cor de Acento (Amarelo Ipê)** | `--md-accent-fg-color` | `#FBBF24` | `251, 191, 36` |
| **Fundo da Página (Canvas)** | `--md-default-bg-color` | `#0B1118` | `11, 17, 24` |
| **Superfície de Cards/Blocos**| `--md-default-bg-color--light` | `#131D28` | `19, 29, 40` |
| **Texto Primário** | `--md-default-fg-color` | `#F8FAFC` | `248, 250, 252` |
| **Texto Secundário** | `--md-default-fg-color--light` | `#94A3B8` | `148, 163, 184` |
| **Bordas e Linhas** | `--md-default-fg-color--lightest` | `#1E293B` | `30, 41, 59` |
| **Fundo de Código Inline/Bloco** | `--md-code-bg-color` | `#121A24` | `18, 26, 36` |

---

## 4. Padrões de Tipografia e Tamanhos de Fonte

- **Fonte de Texto**: `Roboto`, sans-serif
- **Fonte de Código**: `Roboto Mono`, monospace

### Escala Modular de Tipografia

| Nível / Tag | Tamanho (rem) | Tamanho (px) | Peso (Font-Weight) | Altura de Linha (Line-Height) |
| :--- | :---: | :---: | :---: | :---: |
| **Título 1 (`#`)** | `2.0rem` | `32px` | `700` (Bold) | `1.25` |
| **Título 2 (`##`)** | `1.5rem` | `24px` | `600` (Semi-Bold) | `1.35` |
| **Título 3 (`###`)** | `1.25rem` | `20px` | `600` (Semi-Bold) | `1.4` |
| **Título 4 (`####`)** | `1.1rem` | `17.6px` | `600` (Semi-Bold) | `1.45` |
| **Corpo do Texto (`p`)** | `1.0rem` | `16px` | `400` (Regular) | `1.6` |
| **Código Inline / Bloco** | `0.85rem` | `13.6px` | `400` (Regular) | `1.5` |
| **Legendas / Rodapés** | `0.85rem` | `13.6px` | `400` (Regular) | `1.4` |

---

## 5. Padrões de Espaçamento, Bordas e Layout

### Espaçamento (Spacing Scale)

| Token / Uso | Valor (px) | Aplicação Típica |
| :--- | :---: | :--- |
| **Micro** | `4px` | Espaço entre ícone e texto |
| **Pequeno** | `8px` | Padding interno de botões e tags |
| **Médio** | `16px` | Padding de cards e espaçamento entre parágrafos |
| **Grande** | `24px` | Margem entre seções secundárias (`###`) |
| **Extra Grande** | `32px` | Margem superior de seções primárias (`##`) |

### Bordas e Raios de Arredondamento (Border Radius)

| Elemento | Border Radius | Espessura de Borda |
| :--- | :---: | :---: |
| **Cards e Caixas de Destaque** | `8px` ou `10px` | `1px solid` |
| **Blocos de Código** | `8px` | `1px solid` |
| **Tabelas** | `8px` (arredondamento externo) | `1px solid` |
| **Friso do Cabeçalho (Header)** | `0px` | `3px solid` (borda inferior) |

### Sombras (Elevation / Box Shadow)

- **Sombra Suave (Cards e Tabelas)**: `0 2px 6px rgba(0, 0, 0, 0.05)`
- **Sombra ao Passar o Mouse (Hover)**: `0 4px 12px rgba(0, 0, 0, 0.10)`
- **Sombra do Cabeçalho**: `0 2px 8px rgba(0, 0, 0, 0.12)`

---

## 6. Aplicação no MkDocs

### Configuração no `mkdocs.yml`:

```yaml
theme:
  name: material
  language: pt-BR
  logo: assets/logo.png
  favicon: assets/favicon.png
  features:
    - navigation.instant
    - navigation.tracking
    - navigation.tabs
    - navigation.tabs.sticky
    - navigation.top
    - search.suggest
    - search.highlight
    - content.code.copy
  palette:
    # Tema Claro
    - scheme: default
      primary: custom
      accent: custom
      toggle:
        icon: material/weather-sunny
        name: Alternar para modo escuro

    # Tema Escuro
    - scheme: slate
      primary: custom
      accent: custom
      toggle:
        icon: material/weather-night
        name: Alternar para modo claro
  font:
    text: Roboto
    code: Roboto Mono

extra_css:
  - stylesheets/variables.css
  - stylesheets/navigation.css
  - stylesheets/components.css
  - stylesheets/overrides.css
```

### Configuração em `docs/stylesheets/variables.css`:

```css
/* Tema Claro */
[data-md-color-scheme="default"] {
  --md-primary-fg-color:        #0D5094;
  --md-primary-fg-color--light: #0F64A4;
  --md-accent-fg-color:         #D97706;
  --md-default-bg-color:        #F8FAFC;
  --md-default-bg-color--light: #FFFFFF;
  --md-default-fg-color:        #0F172A;
  --md-default-fg-color--light: #475569;
  --md-default-fg-color--lightest: #E2E8F0;
  --md-code-bg-color:           #F1F5F9;
  --md-typeset-a-color:         #0D5094;
}

/* Tema Escuro */
[data-md-color-scheme="slate"] {
  --md-primary-fg-color:        #0C3866;
  --md-primary-fg-color--light: #38BDF8;
  --md-accent-fg-color:         #FBBF24;
  --md-default-bg-color:        #0B1118;
  --md-default-bg-color--light: #131D28;
  --md-default-fg-color:        #F8FAFC;
  --md-default-fg-color--light: #94A3B8;
  --md-default-fg-color--lightest: #1E293B;
  --md-code-bg-color:           #121A24;
  --md-typeset-a-color:         #38BDF8;
}

/* Friso Dourado na Barra de Navegação */
.md-tabs {
  border-bottom: 3px solid #D97706;
}
[data-md-color-scheme="slate"] .md-tabs {
  border-bottom: 3px solid #FBBF24;
}
```
