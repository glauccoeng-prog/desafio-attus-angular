# Desafio Técnico — Desenvolvedor Front End Angular

> **Avaliação Técnica Attus** — Angular 21 · Angular Material · Signals · RxJS · Vitest

## 🚀 Demo

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start
# → http://localhost:4200

# Executar testes
npm test

# Build de produção
npm run build
```

---

## 📁 Estrutura do Projeto

```
src/app/
├── core/                       # Camada de infraestrutura
│   ├── data/
│   │   └── mock-users.ts       # Dados mock (simula API)
│   └── services/
│       ├── user-api.service.ts  # Serviço API (Observable)
│       └── user-api.service.spec.ts
├── features/
│   └── users/                   # Feature Module
│       ├── components/
│       │   ├── user-card/       # Card de usuário (OnPush)
│       │   ├── user-filter/     # Campo de busca
│       │   ├── user-list/       # Página principal
│       │   └── user-modal/      # Modal criar/editar
│       ├── models/
│       │   └── user.model.ts    # Interfaces e tipos
│       ├── store/
│       │   └── users.store.ts   # Estado com Signals
│       └── validators/          # Validadores puros
│           ├── cpf.validator.ts
│           ├── email.validator.ts
│           └── phone.validator.ts
├── shared/
│   ├── components/
│   │   └── confirm-dialog/      # Modal de confirmação reutilizável
│   ├── layout/
│   │   └── shell/               # Layout com Sidenav responsiva
│   └── utils/
│       └── filtrar-e-paginar.ts # Função genérica (Generics)
└── RESPOSTAS.md                 # Respostas teóricas (Etapas 1-3)
```

---

## 🏗️ Arquitetura

### Clean Architecture + SOLID

| Camada | Responsabilidade |
|---|---|
| `core/` | Serviços de infraestrutura, dados mock |
| `features/` | Features isoladas com componentes, store, models, validators |
| `shared/` | Utilitários genéricos reutilizáveis, layout, componentes compartilhados |

### Princípios aplicados

- **SRP** — Cada classe/função tem uma única responsabilidade
- **DRY** — Zero código duplicado
- **Imutabilidade** — `readonly` em todas as interfaces, `Object.freeze()` no paginator
- **Tipagem forte** — Zero `any` em código de produção, generics em `filtrarEPaginar<T>`

---

## 🛠️ Stack Técnica

| Tecnologia | Versão | Uso |
|---|---|---|
| Angular | 21 | Framework principal |
| Angular Material | 21 | Design System (M3) |
| RxJS | 7.8 | Reatividade |
| Signals | Built-in | Estado local |
| TypeScript | 5.9 | Tipagem (strict mode) |
| Vitest | 4.1 | Testes unitários |
| ESLint | 10 | Linting + Segurança |
| Prettier | 3.8 | Formatação |

---

## 📋 Features Implementadas

### Aplicação Prática

- ✅ **Listagem de usuários** com cards Material Design
- ✅ **CRUD completo** — criar, editar, excluir (com modal de confirmação)
- ✅ **Busca com debounce** (`debounceTime`, `distinctUntilChanged`, `switchMap`)
- ✅ **Paginação** — função genérica `filtrarEPaginar<T>`
- ✅ **Validação** — CPF (algoritmo oficial), e-mail, telefone brasileiro
- ✅ **Máscaras** — CPF (000.000.000-00), Telefone ((00) 00000-0000)
- ✅ **Loading states** com spinner Material
- ✅ **Error handling** com banner de erro + retry
- ✅ **OnPush** em todos os componentes (6/6)
- ✅ **Standalone components** — zero NgModules
- ✅ **Lazy loading** — rota carrega componente sob demanda
- ✅ **Responsivo** — Sidenav adapta entre mobile (drawer) e desktop (side)
- ✅ **SnackBar** — feedback visual para ações CRUD

### Etapas Teóricas (RESPOSTAS.md)

- ✅ **1.1** Refatoração Produto/Verdureira
- ✅ **1.2** Generics `filtrarEPaginar<T>`
- ✅ **2.1** ChangeDetection OnPush — bug + 3 soluções
- ✅ **2.2** RxJS — subscribe aninhados → `switchMap`/`forkJoin`
- ✅ **2.3** Busca com debounce (componente completo)
- ✅ **2.4** Performance — OnPush + trackBy
- ✅ **3.1** Signals — carrinho com `signal`, `computed`, `effect`
- ✅ **3.2** NgRx — Todo com actions, reducer, selectors, effects

---

## 🧪 Testes

```bash
# Executar testes
npm test

# Testes em modo watch
npm run test:watch

# Cobertura
npm run test:coverage

# Lint
npm run lint

# Formatação
npx prettier --check .
```

### Cobertura

| Suite | Testes |
|---|---|
| CPF Validator | 13 |
| Phone Validator | 12 |
| Email Validator | 6 |
| filtrarEPaginar | 8 |
| User Model | 4 |
| UserApiService | 11 |
| UserCardComponent | 2 |
| UserFilterComponent | 3 |
| UserModalComponent | 11 |
| ShellComponent | 4 |
| ConfirmDialogComponent | 3 |
| UsersStore | 8 |
| UserListComponent | 6 |
| **Total** | **91 testes** |

---

## 🔑 Operadores RxJS Utilizados

| Operador | Onde | Por quê |
|---|---|---|
| `switchMap` | Store busca, CRUD | Cancela operação anterior |
| `debounceTime(300)` | Filtro de busca | Espera 300ms de inatividade |
| `distinctUntilChanged` | Filtro de busca | Evita busca duplicada |
| `catchError` | Todos os Observable | Tratamento de erro |
| `finalize` | Store actions | Reset de loading |
| `takeUntilDestroyed` | Store | Cleanup automático |
| `of` / `timer` | API mock | Simulação de delay |
| `map` | ShellComponent | Breakpoint → boolean |
| `tap` | Search pipeline | Side-effect (loading) |

---

## 🔒 Qualidade & Segurança

### ESLint (Configurado)

- Regras de segurança: `no-eval`, `no-implied-eval`, `no-new-func`
- Qualidade: `eqeqeq`, `prefer-const`, `no-var`, `curly`
- Angular: `use-lifecycle-interface`, `no-empty-lifecycle-method`, `component-selector`
- Templates: `template-accessibility`, `no-negated-async`

### TypeScript (strict mode)

- `strict: true` (inclui `noImplicitAny`, `strictNullChecks`, etc.)
- `strictTemplates: true` (Angular compiler)
- `forceConsistentCasingInFileNames: true`
- `noImplicitReturns: true`
- `noPropertyAccessFromIndexSignature: true`

### Performance

- **OnPush** em 100% dos componentes
- **Signals** para estado reativo (zero Zone.js overhead desnecessário)
- **Lazy loading** via `loadComponent()` nas rotas
- **track** em todos os `@for` loops

---

## 📝 Notas de Implementação

1. **API Mock** — `UserApiService` simula chamadas HTTP com `timer()` + `Observable`. Em produção, basta substituir por `HttpClient`.

2. **Estado com Signals** — Escolhi Signals para estado local por ser a abordagem moderna do Angular (mais performática que NgRx para estado de componente). NgRx é demonstrado nas respostas teóricas (Etapa 3.2).

3. **Vitest vs Jest** — Angular 21 adota Vitest como test runner nativo. O projeto usa Vitest 4 com `vitest/globals` e cobertura V8.

4. **OnPush em todos os componentes** — Garante melhor performance e força boas práticas de imutabilidade.

5. **Standalone Components** — Todos os componentes são standalone, sem NgModules, seguindo a arquitetura recomendada do Angular 21.
