# Desafio Técnico — Desenvolvedor Front End Angular

Uma aplicação completa de gerenciamento de usuários com CRUD, busca com debounce, paginação e validação de CPF/telefone brasileiro. Desenvolvida com foco em tipagem forte, estado reativo com Signals, performance com OnPush e cobertura de testes com Vitest.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)
![Angular](https://img.shields.io/badge/Angular-21-DD0031?logo=angular&logoColor=white)
![Material](https://img.shields.io/badge/Material-21-757575?logo=material-design&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?logo=reactivex&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4.1-6E9F18?logo=vitest&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.8-F7B93E?logo=prettier&logoColor=black)
![Tests](https://img.shields.io/badge/Tests-91%20passing-brightgreen)

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Tecnologias](#-tecnologias-e-ferramentas)
- [Funcionalidades](#-funcionalidades-implementadas)
- [Arquitetura](#-arquitetura-do-projeto)
- [Fluxo Visual](#-fluxo-visual-completo)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Componentes](#-componentes)
- [Estado com Signals](#-estado-com-signals-usersstore)
- [Operadores RxJS](#-operadores-rxjs)
- [Validadores](#-validadores)
- [Testes](#-testes)
- [Qualidade de Código](#-qualidade-de-código)
- [Instalação e Execução](#-instalação-e-execução)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Notas de Implementação](#-notas-de-implementação)
- [Autor](#-autor)

---

## 🎯 Visão Geral

Este projeto é uma **avaliação técnica** para a empresa Attus, demonstrando domínio em Angular 21, Signals, RxJS, TypeScript strict mode e testes unitários. A aplicação é um CRUD completo de usuários com interface Material Design 3.

- ✅ **CRUD Completo** — Criar, editar, excluir usuários
- ✅ **Busca com Debounce** — `debounceTime` + `switchMap` + `distinctUntilChanged`
- ✅ **Paginação Genérica** — Função `filtrarEPaginar<T>` com Generics
- ✅ **Validação Brasileira** — CPF (algoritmo oficial), telefone, e-mail
- ✅ **Máscaras de Input** — CPF (000.000.000-00), Telefone ((00) 00000-0000)
- ✅ **OnPush em 100%** — Todos os 6 componentes usam `ChangeDetectionStrategy.OnPush`
- ✅ **Standalone Components** — Zero NgModules
- ✅ **Lazy Loading** — Rotas com `loadComponent()`
- ✅ **Signals** — Estado reativo moderno com `signal`, `computed`
- ✅ **Responsivo** — Sidenav adaptativa (drawer mobile, side desktop)
- ✅ **91 Testes Unitários** — Vitest 4 + Coverage V8
- ✅ **Código Limpo** — ESLint 10, Prettier, Husky pre-commit

---

## 🛠️ Tecnologias e Ferramentas

### Core

| Tecnologia                                        | Versão | Descrição                                 |
| ------------------------------------------------- | ------ | ----------------------------------------- |
| [Angular](https://angular.dev/)                   | 21     | Framework principal (Standalone, Signals) |
| [Angular Material](https://material.angular.dev/) | 21     | Design System Material Design 3           |
| [RxJS](https://rxjs.dev/)                         | 7.8    | Reatividade e operadores assíncronos      |
| [TypeScript](https://www.typescriptlang.org/)     | 5.9    | Tipagem estrita (`strict: true`)          |

### UI e Estilização

| Tecnologia        | Descrição                                     |
| ----------------- | --------------------------------------------- |
| Material Design 3 | Tema com `mat.$azure-palette`                 |
| Roboto Font       | Tipografia (Google Fonts)                     |
| CSS Variables     | Variáveis do sistema Material (`--mat-sys-*`) |
| SCSS              | Estilos globais (tema e reset)                |

### Qualidade de Código

| Tecnologia                                                | Versão | Descrição                                 |
| --------------------------------------------------------- | ------ | ----------------------------------------- |
| [ESLint](https://eslint.org/)                             | 10     | Linting com regras de segurança e Angular |
| [Prettier](https://prettier.io/)                          | 3.8    | Formatação automática                     |
| [Husky](https://typicode.github.io/husky/)                | 9.1    | Git hooks (pre-commit)                    |
| [lint-staged](https://github.com/lint-staged/lint-staged) | 16.4   | Lint/format somente arquivos staged       |

### Testes

| Tecnologia                                       | Versão | Descrição                 |
| ------------------------------------------------ | ------ | ------------------------- |
| [Vitest](https://vitest.dev/)                    | 4.1    | Test runner (91 testes)   |
| [Coverage V8](https://vitest.dev/guide/coverage) | 4.1    | Cobertura de código       |
| [JSDOM](https://github.com/jsdom/jsdom)          | 28     | Ambiente de simulação DOM |

### CI/CD

| Tecnologia                                            | Descrição                              |
| ----------------------------------------------------- | -------------------------------------- |
| [GitHub Actions](https://github.com/features/actions) | Pipeline: lint → format → test → build |

---

## 📋 Funcionalidades Implementadas

### 1. 👥 Listagem de Usuários

- **Cards Material** com avatar, nome, e-mail e CPF
- **Paginação** com botões de navegação e indicador de registros
- **Empty state** quando sem resultados
- **Loading state** com spinner Material

### 2. 🔍 Busca com Debounce

- **Campo de pesquisa** com ícone e indicador de loading
- **debounceTime(300ms)** para evitar requisições excessivas
- **distinctUntilChanged** para evitar buscas duplicadas
- **switchMap** para cancelar busca anterior automaticamente

### 3. ➕ CRUD Completo

- **Criar** — Modal com formulário reativo e validação
- **Editar** — Modal com pré-preenchimento dos dados
- **Excluir** — Dialog de confirmação estilizado
- **SnackBar** — Feedback visual para todas as ações

### 4. ✅ Validação Brasileira

- **CPF** — Algoritmo oficial dos dígitos verificadores
- **Telefone** — 10-11 dígitos com máscara `(00) 00000-0000`
- **E-mail** — Formato `usuario@dominio.ext`
- **Máscaras automáticas** — Formatação em tempo real

### 5. 📱 Layout Responsivo

- **Sidenav** — `mode: 'side'` no desktop, `mode: 'over'` no mobile
- **Breakpoints** — `Breakpoints.Handset` e `TabletPortrait`
- **FAB** — Botão flutuante vermelho fixo no canto inferior
- **Grid adaptativo** — Cards empilham no mobile

### 6. 🛡️ Error Handling

- **Banner de erro** com ícone warning e botão retry
- **catchError** em todas as operações do Store
- **finalize** para reset de loading em qualquer cenário

---

## 🏗️ Arquitetura do Projeto

O projeto segue **Clean Architecture** com separação clara em camadas:

```
┌─────────────────────────────────────────────────────────────────┐
│                      CLEAN ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────┐   ┌────────────────┐   ┌───────────────────┐    │
│  │   CORE    │   │    FEATURES    │   │      SHARED       │    │
│  │           │   │                │   │                   │    │
│  │ Services  │◀──│  Components    │──▶│  Utils            │    │
│  │ Data      │   │  Store         │   │  Layout           │    │
│  │           │   │  Models        │   │  Components       │    │
│  │           │   │  Validators    │   │                   │    │
│  └───────────┘   └────────────────┘   └───────────────────┘    │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  Princípios: SRP │ DRY │ Imutabilidade │ Zero any │ OnPush     │
└─────────────────────────────────────────────────────────────────┘
```

| Camada      | Responsabilidade                                               |
| ----------- | -------------------------------------------------------------- |
| `core/`     | Serviços de infraestrutura, dados mock (simula API REST)       |
| `features/` | Features isoladas com componentes, store, models, validators   |
| `shared/`   | Utilitários genéricos, layout shell, componentes reutilizáveis |

---

## 🔄 Fluxo Visual Completo

### Fluxo de Dados (Signals + RxJS)

```
┌──────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  User Action │────▶│   UsersStore     │────▶│  UserApiService │
│  (Template)  │     │  (Signals)       │     │  (Observable)   │
└──────────────┘     └──────────────────┘     └─────────────────┘
       ▲                      │                        │
       │                      ▼                        ▼
       │              ┌──────────────┐         ┌──────────────┐
       │              │  _users      │         │  Mock Data   │
       │              │  _loading    │         │  (MOCK_USERS)│
       │              │  _error      │         │  timer(600)  │
       │              │  _searchTerm │         └──────────────┘
       │              │  _currentPage│
       │              └──────┬───────┘
       │                     │
       │                     ▼
       │              ┌──────────────┐
       └──────────────│  computed()  │
                      │  page signal │
                      │  filtrarE    │
                      │  Paginar<T>  │
                      └──────────────┘
```

### Fluxo de Busca (RxJS Pipeline)

```
┌──────────┐    ┌─────────────┐    ┌──────────────────┐    ┌──────────┐
│  Input   │───▶│ debounceTime│───▶│distinctUntilChang│───▶│ switchMap│
│ (keyup)  │    │   (300ms)   │    │       ed         │    │          │
└──────────┘    └─────────────┘    └──────────────────┘    └────┬─────┘
                                                                │
                    ┌───────────────────────────────────────────┘
                    ▼
              ┌───────────┐    ┌───────────┐    ┌────────────────┐
              │ api.search│───▶│ catchError│───▶│   finalize()   │
              │    or     │    │  (error   │    │ loading = false│
              │ api.getAll│    │  handling)│    └────────┬───────┘
              └───────────┘    └───────────┘             │
                                                         ▼
                                                  ┌────────────┐
                                                  │ _users.set │
                                                  │ _page = 1  │
                                                  └────────────┘
```

### Fluxo de Navegação (Rotas)

```
┌─────────────┐     ┌───────────────┐     ┌──────────────────┐
│  app.routes │────▶│ ShellComponent│────▶│ UserListComponent│
│  path: ''   │     │ (layout)      │     │ (página)         │
└─────────────┘     │               │     │                  │
                    │ ┌───────────┐ │     │ ┌─────────────┐  │
                    │ │ MatSidenav│ │     │ │UserFilter   │  │
                    │ │ (drawer)  │ │     │ │UserCard     │  │
                    │ └───────────┘ │     │ │UserModal    │  │
                    │ ┌───────────┐ │     │ │ConfirmDialog│  │
                    │ │<router-   │ │     │ └─────────────┘  │
                    │ │ outlet/>  │─┼────▶│                  │
                    │ └───────────┘ │     └──────────────────┘
                    └───────────────┘
```

---

## 📁 Estrutura de Pastas

```
desafio-attus-angular/
├── 📄 angular.json                    # Configuração Angular CLI
├── 📄 eslint.config.js                # ESLint Flat Config (segurança + qualidade)
├── 📄 vitest.config.ts                # Vitest + Coverage V8
├── 📄 tsconfig.json                   # TypeScript strict mode
├── 📄 package.json                    # Dependências e scripts
├── 📄 .prettierrc                     # Formatação Prettier
├── 📄 .prettierignore                 # Exclusões do Prettier
├── 📄 .lintstagedrc.json              # Configuração lint-staged
├── 📄 .editorconfig                   # Configuração do editor
├── 📄 README.md                       # Esta documentação
│
├── 📁 .husky/                         # Git hooks
│   └── 📄 pre-commit                 # Executa lint-staged antes do commit
│
├── 📁 .github/                        # CI/CD
│   └── 📁 workflows/
│       └── 📄 quality.yml            # Pipeline: lint → format → test → build
│
└── 📁 src/                            # Código fonte
    ├── 📄 main.ts                     # Bootstrap da aplicação
    ├── 📄 index.html                  # HTML principal (Roboto + Material Icons)
    ├── 📄 styles.scss                 # Tema Material Design 3 (Azure palette)
    ├── 📄 test-setup.ts               # Setup do TestBed (Vitest + Angular JIT)
    │
    └── 📁 app/
        ├── 📄 app.component.ts        # Root component (<router-outlet/>)
        ├── 📄 app.config.ts           # Providers (router, animations, http)
        ├── 📄 app.routes.ts           # Rotas com lazy loading
        │
        ├── 📁 core/                   # 🏛️ Camada de Infraestrutura
        │   ├── 📁 data/
        │   │   └── 📄 mock-users.ts   # 12 usuários mock (simula API REST)
        │   └── 📁 services/
        │       ├── 📄 user-api.service.ts      # API com Observable + timer()
        │       └── 📄 user-api.service.spec.ts # 11 testes
        │
        ├── 📁 features/               # 🧩 Features Isoladas
        │   └── 📁 users/
        │       ├── 📁 components/
        │       │   ├── 📁 user-card/
        │       │   │   ├── 📄 user-card.component.ts       # Card com avatar e ações
        │       │   │   └── 📄 user-card.component.spec.ts  # 2 testes
        │       │   ├── 📁 user-filter/
        │       │   │   ├── 📄 user-filter.component.ts     # Campo de busca
        │       │   │   └── 📄 user-filter.component.spec.ts # 3 testes
        │       │   ├── 📁 user-list/
        │       │   │   ├── 📄 user-list.component.ts       # Página principal (353 linhas)
        │       │   │   └── 📄 user-list.component.spec.ts  # 6 testes
        │       │   └── 📁 user-modal/
        │       │       ├── 📄 user-modal.component.ts      # Modal CRUD + mascaras
        │       │       └── 📄 user-modal.component.spec.ts # 11 testes
        │       ├── 📁 models/
        │       │   ├── 📄 user.model.ts       # User, DTO, Pagina<T>, PaginaParams
        │       │   └── 📄 user.model.spec.ts  # 4 testes
        │       ├── 📁 store/
        │       │   ├── 📄 users.store.ts      # Signals + RxJS (163 linhas)
        │       │   └── 📄 users.store.spec.ts # 8 testes
        │       └── 📁 validators/
        │           ├── 📄 cpf.validator.ts       # Algoritmo oficial (47 linhas)
        │           ├── 📄 cpf.validator.spec.ts  # 13 testes
        │           ├── 📄 email.validator.ts     # Regex validation
        │           ├── 📄 email.validator.spec.ts # 6 testes
        │           ├── 📄 phone.validator.ts     # 10-11 dígitos + máscara
        │           └── 📄 phone.validator.spec.ts # 12 testes
        │
        └── 📁 shared/                # 🔧 Utilitários Compartilhados
            ├── 📁 components/
            │   └── 📁 confirm-dialog/
            │       ├── 📄 confirm-dialog.component.ts      # Modal de confirmação
            │       └── 📄 confirm-dialog.component.spec.ts # 3 testes
            ├── 📁 layout/
            │   └── 📁 shell/
            │       ├── 📄 shell.component.ts       # Layout Sidenav responsiva
            │       └── 📄 shell.component.spec.ts  # 4 testes
            └── 📁 utils/
                ├── 📄 filtrar-e-paginar.ts      # Função genérica <T>
                └── 📄 filtrar-e-paginar.spec.ts # 8 testes
```

---

## 🧩 Componentes

### Componentes Principais

| Componente               | Arquivo                       | Descrição                                        |
| ------------------------ | ----------------------------- | ------------------------------------------------ |
| `AppComponent`           | `app.component.ts`            | Root — apenas `<router-outlet/>`                 |
| `ShellComponent`         | `shell.component.ts`          | Layout com `MatSidenav` responsiva               |
| `UserListComponent`      | `user-list.component.ts`      | Página principal com listagem, filtro, paginação |
| `UserCardComponent`      | `user-card.component.ts`      | Card individual com avatar, nome, e-mail, ações  |
| `UserFilterComponent`    | `user-filter.component.ts`    | Campo de busca com loading indicator             |
| `UserModalComponent`     | `user-modal.component.ts`     | Modal de criar/editar com formulário reativo     |
| `ConfirmDialogComponent` | `confirm-dialog.component.ts` | Dialog de confirmação para exclusão              |

### Características de Todos os Componentes

| Característica                   | Status                       |
| -------------------------------- | ---------------------------- |
| `standalone: true`               | ✅ Zero NgModules            |
| `ChangeDetectionStrategy.OnPush` | ✅ 6/6 componentes           |
| `input()` / `output()`           | ✅ Signal-based inputs       |
| `inject()`                       | ✅ Functional DI             |
| IDs únicos para testes           | ✅ `id="add-user-fab"`, etc. |

---

## 📡 Estado com Signals (UsersStore)

### Signals (State)

| Signal         | Tipo                      | Descrição              |
| -------------- | ------------------------- | ---------------------- |
| `_users`       | `signal<readonly User[]>` | Lista de usuários      |
| `_loading`     | `signal<boolean>`         | Estado de carregamento |
| `_error`       | `signal<string \| null>`  | Mensagem de erro       |
| `_searchTerm`  | `signal<string>`          | Termo de busca         |
| `_currentPage` | `signal<number>`          | Página atual           |
| `_pageSize`    | `signal<number>`          | Itens por página (5)   |

### Computed (Derived State)

| Computed | Retorno        | Descrição                                    |
| -------- | -------------- | -------------------------------------------- |
| `page`   | `Pagina<User>` | Paginação calculada via `filtrarEPaginar<T>` |

### Actions

| Método             | Operadores RxJS                                     | Descrição                   |
| ------------------ | --------------------------------------------------- | --------------------------- |
| `loadUsers()`      | `catchError`, `finalize`, `takeUntilDestroyed`      | Carrega todos os usuários   |
| `setSearchTerm()`  | `debounceTime`, `distinctUntilChanged`, `switchMap` | Busca com debounce          |
| `createUser()`     | `switchMap`, `catchError`, `finalize`               | Cria e recarrega lista      |
| `updateUser()`     | `switchMap`, `catchError`, `finalize`               | Atualiza e recarrega lista  |
| `deleteUser()`     | `switchMap`, `catchError`, `finalize`               | Remove e recarrega lista    |
| `setCurrentPage()` | —                                                   | Muda página (signal direto) |

---

## 🔑 Operadores RxJS

| Operador               | Onde                       | Por quê                          |
| ---------------------- | -------------------------- | -------------------------------- |
| `switchMap`            | Store: busca, CRUD         | Cancela operação anterior        |
| `debounceTime(300)`    | Store: filtro de busca     | Espera 300ms de inatividade      |
| `distinctUntilChanged` | Store: filtro de busca     | Evita busca duplicada            |
| `catchError`           | Store: todos os Observable | Tratamento de erro               |
| `finalize`             | Store: todas as actions    | Reset de loading                 |
| `takeUntilDestroyed`   | Store: subscriptions       | Cleanup automático               |
| `tap`                  | Store: search pipeline     | Side-effect (loading)            |
| `of` / `timer`         | API mock                   | Simulação de delay HTTP          |
| `map`                  | Shell: breakpoint          | `BreakpointObserver` → `boolean` |
| `toSignal`             | Shell: `isMobile`          | Converte Observable → Signal     |

---

## ✅ Validadores

### CPF (Algoritmo Oficial)

```typescript
// Algoritmo dos dígitos verificadores
1. Remove não-numéricos
2. Verifica 11 dígitos
3. Rejeita sequências iguais (111.111.111-11)
4. Calcula 1º dígito verificador (fator 10)
5. Calcula 2º dígito verificador (fator 11)
6. Compara com dígitos reais

// Máscara: 000.000.000-00
formatCPF("52998224725") → "529.982.247-25"
```

### Telefone

```typescript
// Aceita 10-11 dígitos
isValidPhone("11999998888") → true

// Máscara automática
formatPhone("11999998888") → "(11) 99999-8888"  // Celular (11 dígitos)
formatPhone("1134567890")  → "(11) 3456-7890"   // Fixo (10 dígitos)
```

### E-mail

```typescript
// Regex: ^[^\s@]+@[^\s@]+\.[^\s@]+$
isValidEmail("user@domain.com") → true
isValidEmail("invalid")         → false
```

---

## 🧪 Testes

### Cobertura Completa

| Suite                  | Arquivo                            | Testes        |
| ---------------------- | ---------------------------------- | ------------- |
| CPF Validator          | `cpf.validator.spec.ts`            | 13            |
| Phone Validator        | `phone.validator.spec.ts`          | 12            |
| Email Validator        | `email.validator.spec.ts`          | 6             |
| filtrarEPaginar        | `filtrar-e-paginar.spec.ts`        | 8             |
| User Model             | `user.model.spec.ts`               | 4             |
| UserApiService         | `user-api.service.spec.ts`         | 11            |
| UserCardComponent      | `user-card.component.spec.ts`      | 2             |
| UserFilterComponent    | `user-filter.component.spec.ts`    | 3             |
| UserModalComponent     | `user-modal.component.spec.ts`     | 11            |
| ShellComponent         | `shell.component.spec.ts`          | 4             |
| ConfirmDialogComponent | `confirm-dialog.component.spec.ts` | 3             |
| UsersStore             | `users.store.spec.ts`              | 8             |
| UserListComponent      | `user-list.component.spec.ts`      | 6             |
| **Total**              | **13 arquivos**                    | **91 testes** |

### Executar Testes

```bash
# Executar todos os testes
npm test

# Modo watch (re-executa ao salvar)
npm run test:watch

# Com relatório de cobertura
npm run test:coverage
```

---

## 🔒 Qualidade de Código

### ESLint (eslint.config.js)

| Categoria     | Regras                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------- |
| **Segurança** | `no-eval`, `no-implied-eval`, `no-new-func`                                                        |
| **Qualidade** | `eqeqeq`, `prefer-const`, `no-var`, `curly`, `no-console`                                          |
| **Angular**   | `component-selector`, `directive-selector`, `use-lifecycle-interface`, `no-empty-lifecycle-method` |
| **Templates** | `template-accessibility`, `no-negated-async`                                                       |

### TypeScript (tsconfig.json)

| Flag                                 | Valor  | Efeito                                  |
| ------------------------------------ | ------ | --------------------------------------- |
| `strict`                             | `true` | Habilita todas as verificações estritas |
| `strictTemplates`                    | `true` | Tipagem nos templates                   |
| `noImplicitReturns`                  | `true` | Exige retorno em todos os caminhos      |
| `noPropertyAccessFromIndexSignature` | `true` | Acesso explícito por index              |
| `forceConsistentCasingInFileNames`   | `true` | Previne bugs de casing entre OS         |

### Pre-commit (Husky + lint-staged)

```
git commit → Husky intercepta → lint-staged roda:
  *.ts  → eslint --fix → prettier --write
  *.html → eslint --fix → prettier --write
  *.json → prettier --write
```

### CI/CD (GitHub Actions)

```
git push → Pipeline executa:
  1. npm ci
  2. npm run lint
  3. npx prettier --check .
  4. npm run test:coverage
  5. npm run build
```

---

## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** v22 ou superior
- **npm** v11 ou superior

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/glauccoeng-prog/desafio-attus-angular.git
cd desafio-attus-angular

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
# → http://localhost:4200

# 4. Execute os testes
npm test

# 5. Build de produção
npm run build
```

---

## 📜 Scripts Disponíveis

| Script                   | Comando                 | Descrição                                           |
| ------------------------ | ----------------------- | --------------------------------------------------- |
| `npm start`              | `ng serve`              | Servidor de desenvolvimento (http://localhost:4200) |
| `npm run build`          | `ng build`              | Build de produção otimizado (esbuild)               |
| `npm test`               | `vitest run`            | Executa 91 testes unitários                         |
| `npm run test:watch`     | `vitest`                | Testes em modo watch                                |
| `npm run test:coverage`  | `vitest run --coverage` | Testes com relatório de cobertura                   |
| `npm run lint`           | `ng lint`               | Executa ESLint em todo o projeto                    |
| `npx prettier --check .` | —                       | Verifica formatação                                 |
| `npx prettier --write .` | —                       | Corrige formatação                                  |

---

## 📝 Notas de Implementação

1. **API Mock** — `UserApiService` simula chamadas HTTP com `timer()` + `Observable`. Em produção, basta substituir por `HttpClient` real.

2. **Estado com Signals** — Escolhi Signals para estado local por ser a abordagem moderna do Angular (mais performática que NgRx para estado de componente). NgRx é demonstrado nas respostas teóricas (Etapa 3.2).

3. **Vitest vs Jest** — Angular 21 adota Vitest como test runner nativo. O projeto usa Vitest 4 com `vitest/globals` e cobertura V8.

4. **OnPush em todos os componentes** — Garante melhor performance e força boas práticas de imutabilidade.

5. **Standalone Components** — Todos os componentes são standalone, sem NgModules, seguindo a arquitetura recomendada do Angular 21.

6. **Imutabilidade** — `readonly` em todas as interfaces, `Object.freeze()` no paginator, arrays `readonly T[]`.

---

## 👤 Autor

**Glaucco Siqueira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/glaucco-siqueira/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/glauccoeng-prog)

---

<div align="center">
  <sub>Desenvolvido com 💙 como avaliação técnica para Attus</sub>
</div>
