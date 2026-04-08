# Design System - Desafio Attus

Documentação completa do sistema de design, tokens e componentes do projeto Angular.

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Cores (Paleta)](#cores-paleta)
3. [Espaçamento](#espaçamento)
4. [Tipografia](#tipografia)
5. [Sombras e Elevação](#sombras-e-elevação)
6. [Componentes](#componentes)
7. [Padrões de Uso](#padrões-de-uso)
8. [Responsividade](#responsividade)
9. [Animações](#animações)

---

## 🎨 Visão Geral

O sistema de design foi construído em 5 pilares principais:

### 1. **Tokens (src/styles/tokens/)**
Variáveis SCSS centralizadas para cores, espaçamento, tipografia e sombras.
- **Benefício**: Uma mudança no token afeta toda a aplicação automaticamente.
- **Localização**: `src/styles/tokens/`

### 2. **Mixins (src/styles/mixins/)**
Funções SCSS reutilizáveis para padrões comuns (botões, cards, forms, animações).
- **Benefício**: Código DRY - elimina repetição.
- **Localização**: `src/styles/mixins/`

### 3. **Utilities (src/styles/utilities/)**
Classes utilitárias para responsive, spacing, tipografia.
- **Benefício**: Reutilização rápida sem criar novos componentes.
- **Localização**: `src/styles/utilities/`

### 4. **Componentes (src/styles/components/)**
Estilos SCSS separados por componente (não mais inline).
- **Benefício**: Melhor manutenibilidade e escalabilidade.
- **Localização**: `src/styles/components/`

### 5. **Layouts (src/styles/layouts/)**
Estilos específicos para layouts (shell, page layouts).
- **Benefício**: Estrutura clara de estilos de layout.
- **Localização**: `src/styles/layouts/`

---

## 🎨 Cores (Paleta)

### Cores Primárias
| Nome | Valor | Uso |
|------|-------|-----|
| `$color-primary` | `#1976d2` | Botões CTA, ações principais, highlights |
| `$color-primary-light` | `#42a5f5` | Estados hover, backgrounds leves |
| `$color-primary-dark` | `#1565c0` | Estados active, backgrounds escuros |

### Cores de Sucesso
| Nome | Valor | Uso |
|------|-------|-----|
| `$color-success` | `#4caf50` | Confirmações, status positivo |
| `$color-success-container` | `#e8f5e9` | Background para sucesso |
| `$color-on-success-container` | `#1b5e20` | Texto em background de sucesso |

### Cores de Erro
| Nome | Valor | Uso |
|------|-------|-----|
| `$color-error` | `#f44336` | Erros, exclusões, ações destrutivas |
| `$color-error-light` | `#ef5350` | Estados hover de erro |
| `$color-error-container` | `#ffebee` | Background para erro |
| `$color-on-error-container` | `#b71c1c` | Texto em background de erro |

### Cores de Aviso
| Nome | Valor | Uso |
|------|-------|-----|
| `$color-warning` | `#ff9800` | Alertas, avisos |
| `$color-warning-container` | `#fff3e0` | Background para aviso |

### Cores Neutras
| Nome | Valor | Uso |
|------|-------|-----|
| `$color-surface` | `#ffffff` | Backgrounds primários |
| `$color-surface-light` | `#f5f5f5` | Backgrounds secundários |
| `$color-on-surface` | `#212121` | Texto primário |
| `$color-on-surface-variant` | `#757575` | Texto secundário, hints |
| `$color-border` | `#e0e0e0` | Borders padrão |

### Como Usar Cores
```scss
// Em arquivos .scss
@use '../tokens/colors' as *;

.my-button {
  background-color: $color-primary;
  color: white;
  
  &:hover {
    background-color: $color-primary-dark;
  }
}
```

---

## 📏 Espaçamento

### Escala de Espaçamento (4px base)
| Token | Valor | Uso |
|-------|-------|-----|
| `$spacing-xs` | 2px | Micro espaçamentos |
| `$spacing-sm` | 4px | Gaps entre ícones, compacto |
| `$spacing-md` | 8px | Gaps normais, spacing padrão |
| `$spacing-lg` | 12px | Padding de cards, gaps médios |
| `$spacing-xl` | 16px | Padding principal, gaps maiores |
| `$spacing-2xl` | 20px | Spacing generoso |
| `$spacing-3xl` | 24px | Padding de páginas, headers |
| `$spacing-4xl` | 32px | Spacing muito generoso |
| `$spacing-5xl` | 40px | Avatar sizes |
| `$spacing-6xl` | 48px | Large icons |
| `$spacing-7xl` | 56px | Dialog icons |
| `$spacing-8xl` | 64px | Loading states, empty states |

### Como Usar Espaçamento
```scss
@use '../tokens/spacing' as *;

.my-component {
  padding: $spacing-lg $spacing-xl;
  margin-bottom: $spacing-xl;
  gap: $spacing-md;
}
```

### Atalhos de Espaçamento
- **Padding**: `$padding-sm`, `$padding-md`, `$padding-lg`, etc.
- **Margin**: `$margin-sm`, `$margin-md`, `$margin-lg`, etc.
- **Gap**: `$gap-sm`, `$gap-md`, `$gap-lg`, etc.

---

## 🔤 Tipografia

### Font Family
- **Base**: `Roboto` (padrão do Material Design)
- **Monospace**: `Roboto Mono` (código, CPF, valores)

### Font Sizes
| Token | Valor | Uso |
|-------|-------|-----|
| `$font-size-xs` | 10px | Labels muito pequenas |
| `$font-size-sm` | 12px | Captions, helper text |
| `$font-size-md` | 14px | Body small |
| `$font-size-lg` | 16px | Body normal, inputs |
| `$font-size-xl` | 18px | Subtítulos |
| `$font-size-2xl` | 20px | Títulos médios |
| `$font-size-3xl` | 24px | Títulos grandes |
| `$font-size-4xl` | 28px | Títulos muito grandes |
| `$font-size-5xl` | 32px | Headings H1 |

### Font Weights
| Token | Valor | Uso |
|-------|-------|-----|
| `$font-weight-light` | 300 | Tipografia leve (raro) |
| `$font-weight-regular` | 400 | Texto padrão |
| `$font-weight-medium` | 500 | Títulos, enfases |
| `$font-weight-semibold` | 600 | Títulos mais fortes |
| `$font-weight-bold` | 700 | Negritos |
| `$font-weight-extra-bold` | 800 | Ênfase máxima |

### Presets de Tipografia
Presets Material Design 3 já definidos:

```scss
// Headings
.heading-1, .h1  // 32px, bold, tight line-height
.heading-2, .h2  // 28px, bold, tight line-height
.heading-3, .h3  // 24px, semibold, tight line-height

// Titles
.title-large    // 20px, semibold, normal line-height
.title-medium   // 16px, semibold, normal line-height
.title-small    // 14px, semibold, normal line-height

// Body
.body-large     // 16px, regular, normal line-height
.body-medium    // 14px, regular, normal line-height
.body-small     // 12px, regular, normal line-height

// Labels
.label-large    // 14px, semibold, relaxed letter-spacing
.label-medium   // 12px, semibold, relaxed letter-spacing
.label-small    // 10px, semibold, loose letter-spacing

// Caption
.caption        // 10px, regular, normal line-height
```

### Como Usar Tipografia
```scss
@use '../tokens/typography' as *;

.my-heading {
  font-size: $font-size-2xl;
  font-weight: $font-weight-semibold;
  line-height: $line-height-tight;
}

// Ou usar um preset
.my-heading {
  @extend .heading-3;
}
```

---

## 🌑 Sombras e Elevação

### Elevation Levels
Sistema de 6 níveis de elevação (Material Design 3):

| Token | Sombra | Uso |
|-------|--------|-----|
| `$shadow-level-0` | none | Flat, sem elevação |
| `$shadow-level-1` | subtle | Buttons no hover, cards leves |
| `$shadow-level-2` | medium | Cards normais, dropdowns |
| `$shadow-level-3` | elevated | Modals, cards ao hover |
| `$shadow-level-4` | high | Floating buttons, toasts |
| `$shadow-level-5` | very high | Overlays, dialogs importantes |

### Sombras Especiais
| Token | Uso |
|-------|-----|
| `$shadow-soft-sm`, `$shadow-soft-md`, `$shadow-soft-lg` | Sombras suaves |
| `$shadow-inset-sm`, `$shadow-inset-md` | Efeitos de profundidade interna |
| `$shadow-focus` | Estado de foco (azul) |
| `$shadow-error` | Estado de erro (vermelho) |
| `$shadow-success` | Estado de sucesso (verde) |

### Como Usar Sombras
```scss
@use '../tokens/shadows' as *;

.my-card {
  box-shadow: $shadow-level-1;
  
  &:hover {
    box-shadow: $shadow-level-3;
    transition: $shadow-transition;  // Transição suave
  }
}
```

---

## 🧩 Componentes

### Shell Layout
**Localização**: `src/app/shared/layout/shell/`
**Estilo**: `src/styles/layouts/shell.scss`

O layout principal da aplicação com sidenav + conteúdo.

**Classes principais**:
- `.shell` - Container principal
- `.shell__sidenav` - Drawer lateral (280px)
- `.shell__content` - Área de conteúdo principal
- `.sidenav__title` - Título do app
- `.sidenav__item--active` - Item ativo no menu

**Uso**:
```html
<app-shell>
  <!-- Conteúdo renderizado aqui -->
</app-shell>
```

---

### User Card
**Localização**: `src/app/features/users/components/user-card/`
**Estilo**: `src/styles/components/user-card.scss`

Card individual de usuário com avatar, informações e ações.

**Classes principais**:
- `.user-card` - Card container
- `.user-card__avatar` - Avatar circular (40px)
- `.user-card__name` - Nome do usuário (semibold)
- `.user-card__email` - Email (smaller text)
- `.user-card__cpf` - CPF (hidden em mobile)
- `.user-card__actions` - Botões de editar/deletar

**Features**:
- ✨ Hover elevation effect (translateY)
- 🎨 Avatar scales no hover
- 🔴 Delete button em vermelho
- 📱 Responsivo (CPF oculto em mobile)

---

### User List (Page)
**Localização**: `src/app/features/users/components/user-list/`
**Estilo**: `src/styles/components/user-list.scss`

Página principal de listagem de usuários.

**Classes principais**:
- `.header` - Header com título e filtro
- `.content` - Área de conteúdo (max-width: 900px)
- `.user-list` - Lista de cards
- `.pagination` - Botões de paginação
- `.fab` - Botão flutuante (add user)

**Features**:
- 📲 Header com sombra (elevation)
- 🔍 Filtro integrado
- ⚠️ Error banner com ícone
- ⏳ Loading state com spinner
- 📋 Empty state quando sem usuários
- 📄 Paginação responsiva
- 🎨 FAB com efeito hover

---

### User Filter
**Localização**: `src/app/features/users/components/user-filter/`
**Estilo**: `src/styles/components/user-filter.scss`

Campo de busca com ícone de search e loading spinner.

**Classes principais**:
- `.filter-field` - Input container (max-width: 400px)
- `.spinning` - Ícone de loading (animado)

---

### User Modal
**Localização**: `src/app/features/users/components/user-modal/`
**Estilo**: `src/styles/components/user-modal.scss`

Modal de criação/edição de usuário com formulário reativo.

**Classes principais**:
- `.user-form` - Form container
- `.full-width` - Campo full width
- `.form-row` - Linha com 3 colunas (CPF, Telefone, Tipo)
- `.form-hint` - Texto de ajuda com background

**Validação**:
- ✅ Email válido (format validator)
- ✅ CPF válido (CPF validator)
- ✅ Telefone válido (phone validator)
- ✅ Campos obrigatórios

**Responsividade**:
- Desktop: 3 colunas (CPF | Telefone | Tipo)
- Tablet: 2 colunas
- Mobile: 1 coluna

---

### Confirm Dialog
**Localização**: `src/app/shared/components/confirm-dialog/`
**Estilo**: `src/styles/components/confirm-dialog.scss`

Modal de confirmação com ícone, título, mensagem e ações.

**Classes principais**:
- `.confirm-dialog` - Container
- `.confirm-dialog__icon` - Ícone warning em círculo
- `.confirm-dialog__title` - Título (title-large)
- `.confirm-dialog__message` - Mensagem
- `.confirm-dialog__delete-btn` - Botão destrutivo

---

## 📐 Padrões de Uso

### Padrão: Botão Primário
```html
<button mat-flat-button color="primary">Salvar</button>
```

### Padrão: Card com Hover
```html
<mat-card appearance="outlined" class="user-card">
  <mat-card-content class="user-card__content">
    <!-- Conteúdo -->
  </mat-card-content>
</mat-card>
```

### Padrão: Form com Campos
```html
<form [formGroup]="form" class="user-form">
  <mat-form-field appearance="outline" class="full-width">
    <mat-label>Email</mat-label>
    <input matInput formControlName="email" />
  </mat-form-field>
</form>
```

### Padrão: Lista Responsiva
```scss
.user-list {
  display: flex;
  flex-direction: column;
  gap: $spacing-md;

  @include tablet-and-up {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop-and-up {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 📱 Responsividade

### Breakpoints Centralizados
**Localização**: `src/styles/utilities/responsive.scss`

| Breakpoint | Tamanho | Dispositivo |
|-----------|---------|-----------|
| `$breakpoint-xs` | 0px | Mobile |
| `$breakpoint-sm` | 600px | Tablet portrait |
| `$breakpoint-md` | 900px | Tablet landscape |
| `$breakpoint-lg` | 1200px | Desktop |
| `$breakpoint-xl` | 1440px | Large desktop |
| `$breakpoint-2xl` | 1920px | Extra large |

### Mixins Responsivos

```scss
@use '../utilities/responsive' as *;

.my-component {
  // Mobile only (até 599px)
  @include mobile-only {
    padding: $spacing-md;
  }

  // Tablet and up (600px+)
  @include tablet-and-up {
    padding: $spacing-lg;
  }

  // Desktop and up (1200px+)
  @include desktop-and-up {
    padding: $spacing-xl;
  }
}
```

### Padrão: Responsive Padding
```scss
.content {
  @include responsive-padding($spacing-xl, $spacing-2xl, $spacing-3xl);
  // Mobile: 16px, Tablet: 20px, Desktop: 24px
}
```

### Padrão: Responsive Grid
```scss
.grid {
  @include responsive-columns(3, 2, 1);
  // Desktop: 3 colunas, Tablet: 2 colunas, Mobile: 1 coluna
}
```

---

## ✨ Animações

### Keyframes Disponíveis
**Localização**: `src/styles/mixins/animations.scss`

| Animação | Tipo | Duração |
|----------|------|---------|
| `fade-in` / `fade-out` | Opacity | 0.3s |
| `slide-in-left/right/top/bottom` | Translateposition + opacity | 0.3s |
| `scale-in` / `scale-out` | Scale + opacity | 0.3s |
| `spin` | Rotação | 1s |
| `pulse` | Opacity pulse | 1s |
| `bounce` | Translate Y | 0.5s |
| `shimmer` | Loading skeleton | 2s |

### Mixins de Animação
```scss
@use '../mixins/animations' as *;

.my-element {
  @include animate-fade-in(0.5s, 0.2s);  // Fade in 500ms com delay 200ms
  @include animate-slide-in-left;        // Default 300ms
  @include animate-spin;                 // Spin infinito
}
```

### Padrão: Hover Smooth
```scss
.my-button {
  @include transition-smooth(background-color);
  background-color: $color-primary;

  &:hover {
    background-color: $color-primary-dark;
  }
}
```

---

## 🔧 Mantendo o Design System

### Para Adicionar Uma Nova Cor
1. Editar `src/styles/tokens/colors.scss`
2. Adicionar a variável
3. Usar em componentes com `@use '../tokens/colors' as *;`

### Para Adicionar Um Novo Spacing
1. Editar `src/styles/tokens/spacing.scss`
2. Adicionar a variável
3. Usar com `$spacing-*`

### Para Adicionar Um Novo Componente
1. Criar estilo em `src/styles/components/nome-componente.scss`
2. Importar em `src/styles/components/index.scss`
3. Usar tokens, mixins e utilities
4. Copiar stylesheet para pasta do componente
5. Atualizar component.ts com `styleUrls: ['./nome.scss']`

### Para Adicionar Um Novo Mixin
1. Criar em `src/styles/mixins/categoria.scss`
2. Importar em `src/styles/mixins/index.scss`
3. Documentar o uso

---

## 📚 Referências

- **Material Design 3**: https://m3.material.io/
- **Angular Material**: https://material.angular.io/
- **SCSS Best Practices**: https://sass-lang.com/documentation
- **BEM Methodology**: http://getbem.com/

---

## 📝 Histórico de Versões

| Versão | Data | Mudanças |
|--------|------|----------|
| 1.0 | 2024 | Versão inicial - Sistema de Design completo |

---

**Última atualização**: 2024
**Mantido por**: Equipe de Front-End
**Questões**: Abrir uma issue no repositório
