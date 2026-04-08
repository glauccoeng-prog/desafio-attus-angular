# Avaliação Técnica — Desenvolvedor Front End Angular

**Candidato:** Glaucco  
**Data:** Abril 2026  
**Stack:** Angular 21 · Angular Material · Signals · RxJS · Vitest

---

## 1. TypeScript e Qualidade de Código

### 1.1 Refatoração

#### Problemas identificados no código original:

| #   | Problema                             | Impacto                                                                                    |
| --- | ------------------------------------ | ------------------------------------------------------------------------------------------ |
| 1   | **Uso excessivo de `any`**           | Elimina toda segurança de tipos do TypeScript, anulando o principal benefício da linguagem |
| 2   | **Loops imperativos `for`**          | Código verboso e propenso a erros quando `Array.find()` resolve de forma declarativa       |
| 3   | **Código duplicado (DRY violation)** | A busca por produto é repetida em 2 métodos — viola SRP e DRY                              |
| 4   | **Sem null safety**                  | `produto` pode ser `undefined` após o loop, causando `TypeError` em runtime                |
| 5   | **Comparação fraca `==`**            | Permite coerção de tipos indesejada; deveria usar `===` (strict equality)                  |
| 6   | **Sem `readonly`**                   | Propriedades mutáveis sem necessidade, violando princípio de imutabilidade                 |
| 7   | **Retorno booleano verboso**         | `if(x > 0) return true; else return false;` quando `return x > 0;` é suficiente            |
| 8   | **Sem encapsulamento**               | Classe `Produto` com construtor redundante; interface é mais idiomática em TS              |

#### Código refatorado:

```typescript
/**
 * Domain Entity — Produto
 * Interface com tipagem forte e readonly (imutabilidade)
 */
interface Produto {
  readonly id: number;
  readonly descricao: string;
  readonly quantidadeEstoque: number;
}

/**
 * SRP: Classe focada exclusivamente na gestão de produtos da verdureira.
 * Melhorias: tipagem forte, readonly, find(), optional chaining, early return.
 */
class Verdureira {
  private readonly produtos: readonly Produto[] = [
    { id: 1, descricao: 'Maçã', quantidadeEstoque: 20 },
    { id: 2, descricao: 'Laranja', quantidadeEstoque: 0 },
    { id: 3, descricao: 'Limão', quantidadeEstoque: 20 },
  ];

  /**
   * DRY: Extrai a busca por ID em método privado reutilizável.
   * Utiliza Array.find() ao invés de loop imperativo.
   * Strict equality (===) em vez de loose equality (==).
   */
  private findProdutoById(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  /**
   * Early return para null safety.
   * Template literal ao invés de concatenação com '+'.
   */
  getDescricaoProduto(produtoId: number): string | undefined {
    const produto = this.findProdutoById(produtoId);
    if (!produto) return undefined;

    return `${produto.id} - ${produto.descricao} (${produto.quantidadeEstoque}x)`;
  }

  /**
   * Optional chaining (?.) + nullish coalescing (??) para null safety.
   * Retorno booleano direto sem if/else verbose.
   */
  hasEstoqueProduto(produtoId: number): boolean {
    return (this.findProdutoById(produtoId)?.quantidadeEstoque ?? 0) > 0;
  }
}
```

#### Resumo das melhorias:

- **Interface** ao invés de class com construtor — mais idiomático em TypeScript
- **`readonly`** em todas as propriedades e array — garante imutabilidade
- **`Array.find()`** — substitui loops imperativos por abordagem declarativa
- **Método `findProdutoById` privado** — DRY, elimina duplicação (SRP)
- **Optional chaining `?.` e nullish coalescing `??`** — null safety elegante
- **Early return** — reduz aninhamento, melhora legibilidade
- **Template literals** — mais legível que concatenação com `+`
- **Strict equality `===`** — evita coerção implícita de tipos
- **Retorno booleano direto** — `return x > 0` ao invés de `if/else`

---

### 1.2 Generics e Tipos Utilitários

```typescript
/**
 * Parâmetros de paginação — tipagem completa, sem any.
 */
interface PaginaParams {
  readonly pagina: number;
  readonly tamanho: number;
}

/**
 * Resultado paginado genérico — uso de Generics para reutilização.
 * readonly em todas as propriedades garante imutabilidade.
 */
interface Pagina<T> {
  readonly itens: readonly T[];
  readonly totalRegistros: number;
  readonly paginaAtual: number;
  readonly totalPaginas: number;
}

/**
 * Função genérica filtrarEPaginar<T>
 * - Recebe array genérico, predicado de filtro e parâmetros de paginação
 * - Retorna página tipada com itens filtrados
 * - Função pura (sem side effects), imutável (Object.freeze)
 * - SRP: responsabilidade única — filtrar + paginar
 */
function filtrarEPaginar<T>(
  data: readonly T[],
  filterFn: (item: T) => boolean,
  params: PaginaParams,
): Pagina<T> {
  const filtered = data.filter(filterFn);
  const totalRegistros = filtered.length;
  const totalPaginas = Math.max(1, Math.ceil(totalRegistros / params.tamanho));
  const paginaAtual = Math.min(Math.max(1, params.pagina), totalPaginas);
  const inicio = (paginaAtual - 1) * params.tamanho;
  const itens = filtered.slice(inicio, inicio + params.tamanho);

  return Object.freeze({ itens, totalRegistros, paginaAtual, totalPaginas });
}
```

#### Exemplo concreto com array de usuários:

```typescript
interface User {
  readonly id: number;
  readonly nome: string;
  readonly email: string;
}

const users: readonly User[] = [
  { id: 1, nome: 'João Silva', email: 'joao@email.com' },
  { id: 2, nome: 'Maria Santos', email: 'maria@email.com' },
  { id: 3, nome: 'Carlos Oliveira', email: 'carlos@email.com' },
  { id: 4, nome: 'Ana Costa', email: 'ana@email.com' },
  { id: 5, nome: 'Pedro Lima', email: 'pedro@email.com' },
  { id: 6, nome: 'Juliana Ferreira', email: 'juliana@email.com' },
];

// Filtrar por nome contendo "a" e paginar com 2 items por página
const resultado: Pagina<User> = filtrarEPaginar(
  users,
  (user) => user.nome.toLowerCase().includes('a'),
  { pagina: 1, tamanho: 2 },
);

console.log(resultado);
// {
//   itens: [
//     { id: 2, nome: 'Maria Santos', email: 'maria@email.com' },
//     { id: 3, nome: 'Carlos Oliveira', email: 'carlos@email.com' }
//   ],
//   totalRegistros: 5,
//   paginaAtual: 1,
//   totalPaginas: 3
// }
```

---

## 2. Angular — Fundamentos e Reatividade

### 2.1 Change Detection e OnPush

#### Problema identificado:

Com `ChangeDetectionStrategy.OnPush`, o Angular só re-renderiza o componente quando:

1. Uma **`@Input()`** muda **por referência**
2. Um **evento do template** é disparado (click, input, etc.)
3. O **`async` pipe** emite um novo valor
4. **`markForCheck()`** é chamado manualmente

No código original, o `subscribe` atualiza `this.texto` diretamente (mutação imperativa do estado). Mesmo que o `setInterval` dispare change detection via Zone.js na estratégia Default, com **OnPush** o Angular **não sabe** que `texto` mudou porque nenhum dos 4 gatilhos acima foi acionado.

O subscription resolve em ~500ms, atualiza `this.texto`, mas o Angular não detecta a mudança pois o `subscribe` callback não se enquadra nos gatilhos de OnPush.

#### Solução 1 — `ChangeDetectorRef.markForCheck()`:

```typescript
import { ChangeDetectorRef } from '@angular/core';

export class AppComponent implements OnInit, OnDestroy {
  texto: string = '';
  contador = 0;
  subscriptionBuscarPessoa!: Subscription;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(
    private readonly pessoaService: PessoaService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.subscriptionBuscarPessoa = this.pessoaService.buscarPorId(1).subscribe((pessoa) => {
      this.texto = `Nome: ${pessoa.nome}`;
      this.cdr.markForCheck(); // ← Notifica o Angular manualmente
    });

    this.intervalId = setInterval(() => this.contador++, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptionBuscarPessoa?.unsubscribe();
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
```

#### Solução 2 — Async Pipe (recomendada):

```typescript
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  providers: [PessoaService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>{{ texto$ | async }}</h1>`,
})
export class AppComponent implements OnInit, OnDestroy {
  texto$!: Observable<string>;
  contador = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly pessoaService: PessoaService) {}

  ngOnInit(): void {
    // Async pipe chama markForCheck() automaticamente ao emitir
    this.texto$ = this.pessoaService.buscarPorId(1).pipe(map((pessoa) => `Nome: ${pessoa.nome}`));

    this.intervalId = setInterval(() => this.contador++, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
    // Async pipe faz unsubscribe automaticamente — zero memory leak
  }
}
```

#### Solução 3 — Signals (Angular 17+):

```typescript
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [PessoaService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>{{ texto() }}</h1>`,
})
export class AppComponent implements OnInit, OnDestroy {
  readonly texto = signal<string>('');
  contador = 0;
  subscriptionBuscarPessoa!: Subscription;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly pessoaService: PessoaService) {}

  ngOnInit(): void {
    this.subscriptionBuscarPessoa = this.pessoaService.buscarPorId(1).subscribe((pessoa) => {
      this.texto.set(`Nome: ${pessoa.nome}`);
      // Signals atualizam automaticamente com OnPush
    });

    this.intervalId = setInterval(() => this.contador++, 1000);
  }

  ngOnDestroy(): void {
    this.subscriptionBuscarPessoa?.unsubscribe();
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
```

**Recomendação:** Solução 2 (async pipe) — zero subscribe manual, sem memory leak, e o async pipe chama `markForCheck()` automaticamente.

---

### 2.2 RxJS — Eliminando subscriptions aninhadas

#### Anti-pattern (subscribe dentro de subscribe):

```typescript
// ❌ ERRADO — callback hell, memory leak, difícil de testar
ngOnInit(): void {
  const pessoaId = 1;
  this.pessoaService.buscarPorId(pessoaId).subscribe(pessoa => {
    this.pessoaService.buscarQuantidadeFamiliares(pessoaId).subscribe(qtd => {
      this.texto = `Nome: ${pessoa.nome} | familiares: ${qtd}`;
    });
  });
}
```

**Problemas:**

- Inner subscription não é gerenciada → **memory leak**
- Callback hell — difícil de ler e manter
- Difícil de testar unitariamente
- Não há cancelamento automático

#### Refatoração com `switchMap`:

```typescript
import { switchMap, map } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DestroyRef, inject } from '@angular/core';

export class AppComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  texto = '';

  ngOnInit(): void {
    const pessoaId = 1;

    this.pessoaService
      .buscarPorId(pessoaId)
      .pipe(
        switchMap((pessoa) =>
          this.pessoaService
            .buscarQuantidadeFamiliares(pessoaId)
            .pipe(map((qtd) => `Nome: ${pessoa.nome} | familiares: ${qtd}`)),
        ),
        takeUntilDestroyed(this.destroyRef), // ← Previne memory leak
      )
      .subscribe((texto) => (this.texto = texto));
  }
}
```

#### Alternativa com `forkJoin` (chamadas independentes):

```typescript
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

ngOnInit(): void {
  const pessoaId = 1;

  forkJoin({
    pessoa: this.pessoaService.buscarPorId(pessoaId),
    qtd: this.pessoaService.buscarQuantidadeFamiliares(pessoaId),
  }).pipe(
    map(({ pessoa, qtd }) => `Nome: ${pessoa.nome} | familiares: ${qtd}`),
    takeUntilDestroyed(this.destroyRef)
  ).subscribe(texto => this.texto = texto);
}
```

**Escolha do operador:**
| Operador | Quando usar |
|---|---|
| `switchMap` | Quando a 2ª chamada **depende** do resultado da 1ª (encadeamento) |
| `forkJoin` | Quando as chamadas são **independentes** (execução paralela) |
| `concatMap` | Quando a ordem importa e **não** queremos cancelar |
| `mergeMap` | Execução paralela sem cancelamento |

Neste caso, como `pessoaId` já é conhecido antes de ambas as chamadas, **`forkJoin`** é a melhor escolha (execução paralela = mais rápido). Se a 2ª chamada dependesse do `pessoa.id` retornado, `switchMap` seria correto.

**Prevenção de memory leak:** `takeUntilDestroyed()` cancela automaticamente no `ngOnDestroy`.

---

### 2.3 RxJS — Busca com debounce

#### Service:

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  readonly id: string;
  readonly nome: string;
  readonly email: string;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private readonly http = inject(HttpClient);

  search(query: string): Observable<User[]> {
    return this.http.get<User[]>(`/api/users?q=${encodeURIComponent(query)}`);
  }
}
```

#### Component:

```typescript
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
  catchError,
  finalize,
} from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input [formControl]="searchControl" placeholder="Pesquisar..." />

    @if (loading$ | async) {
      <div class="spinner">Carregando...</div>
    }

    @if (error$ | async; as error) {
      <div class="error">{{ error }}</div>
    }

    @for (user of results$ | async; track user.id) {
      <div>{{ user.nome }} - {{ user.email }}</div>
    }
  `,
})
export class SearchComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchService = inject(SearchService);

  readonly searchControl = new FormControl('', { nonNullable: true });

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  private readonly errorSubject = new BehaviorSubject<string | null>(null);

  readonly loading$ = this.loadingSubject.asObservable();
  readonly error$ = this.errorSubject.asObservable();

  /**
   * Pipeline reativo completo:
   * 1. debounceTime(500) → Espera 500ms de inatividade
   * 2. distinctUntilChanged() → Ignora valor igual ao anterior
   * 3. switchMap() → Cancela requisição anterior (race condition prevention)
   * 4. catchError() → Captura erros sem quebrar o stream
   * 5. finalize() → Loading = false ao completar
   * 6. takeUntilDestroyed() → Unsubscribe automático
   */
  readonly results$: Observable<User[]> = this.searchControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    tap(() => {
      this.loadingSubject.next(true);
      this.errorSubject.next(null);
    }),
    switchMap((query) =>
      this.searchService.search(query).pipe(
        catchError(() => {
          this.errorSubject.next('Erro na busca. Tente novamente.');
          return of([]);
        }),
        finalize(() => this.loadingSubject.next(false)),
      ),
    ),
    takeUntilDestroyed(this.destroyRef),
  );
}
```

**Operadores RxJS utilizados:**

- `debounceTime(500)` — Espera 500ms de inatividade antes de emitir
- `distinctUntilChanged()` — Evita requisição duplicada se valor não mudou
- `switchMap()` — Cancela requisição anterior ao emitir novo valor (race condition)
- `catchError()` — Captura erros sem quebrar o Observable stream
- `finalize()` — Executa ao completar (reseta loading)
- `takeUntilDestroyed()` — Cleanup automático quando o componente é destruído

---

### 2.4 Performance — OnPush e trackBy

#### trackBy — Por que melhora a performance:

Sem `trackBy` (ou `track` no `@for`), o Angular **destrói e recria TODOS os elementos DOM** da lista a cada ciclo de change detection, mesmo que apenas 1 item tenha mudado. Isso acontece porque o Angular compara os arrays por referência — se o array é uma nova referência (ex: resultado de uma chamada HTTP), todos os itens são considerados novos.

Com `trackBy`, o Angular usa um **identificador único** (normalmente o `id`) para rastrear cada item. Isso permite:

- **DOM recycling**: reutiliza elementos existentes ao invés de recriar
- **Redução de operações DOM**: altera apenas elementos que realmente mudaram
- **Preservação de estado**: mantém input focus, scroll position, animações

```typescript
// Angular 17+ com @for (recomendado)
@for (user of users(); track user.id) {
  <app-user-card [user]="user" />
}

// Ou com *ngFor
<app-user-card *ngFor="let user of users; trackBy: trackByFn" [user]="user" />

trackByFn = (_: number, user: User): string => user.id;
```

#### OnPush vs Default:

**`ChangeDetectionStrategy.Default`:**

- O Angular verifica **TODOS** os componentes da árvore em cada ciclo de change detection
- Cada click, timer, HTTP response, promise resolution dispara verificação completa
- Em uma lista de 1000 items: ~1000+ verificações por ciclo
- Causa jank visível em listas grandes (~60ms+ por ciclo)

**`ChangeDetectionStrategy.OnPush`:**

- O Angular só verifica o componente quando suas `@Inputs` mudam **por referência**
- Eventos do template, `async` pipe e `markForCheck()` também disparam verificação
- Combinar com `trackBy`: apenas componentes cujo item **realmente mudou** são re-renderizados
- Performance drasticamente melhor: <5ms mesmo com 1000 items

#### Impacto de usar Default em listas grandes:

| Cenário          | Default              | OnPush + trackBy         |
| ---------------- | -------------------- | ------------------------ |
| 100 items        | ~10ms                | ~1ms                     |
| 1.000 items      | ~60ms+               | ~3ms                     |
| 10.000 items     | ~500ms+ (jank grave) | ~10ms                    |
| Re-render total  | Sempre               | Apenas items alterados   |
| Memory footprint | Alto (recriação DOM) | Baixo (reutilização DOM) |

**Conclusão:** Para listas com centenas de items, `OnPush + trackBy` é essencial. `Default` sem trackBy pode causar problemas sérios de performance perceptíveis pelo usuário (scroll travando, input lag).

---

## 3. Gerenciamento de Estado

### 3.1 Angular Signals — Estado Local (Carrinho)

```typescript
import {
  Component,
  signal,
  computed,
  effect,
  output,
  ChangeDetectionStrategy,
} from '@angular/core';

interface CartItem {
  readonly id: string;
  readonly nome: string;
  readonly preco: number;
  readonly quantidade: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (item of items(); track item.id) {
      <div>
        {{ item.nome }} — R$ {{ item.preco }} × {{ item.quantidade }}
        <button (click)="removeItem(item.id)">Remover</button>
      </div>
    }
    <p>Total: R$ {{ total() | number: '1.2-2' }}</p>
  `,
})
export class CartComponent {
  /** Signal: lista de itens no carrinho */
  readonly items = signal<readonly CartItem[]>([]);

  /** Computed: total = Σ(quantidade × preço) — recalculado automaticamente */
  readonly total = computed(() =>
    this.items().reduce((acc, item) => acc + item.quantidade * item.preco, 0),
  );

  /** Output: emite sempre que o total mudar */
  readonly totalChanged = output<number>();

  constructor() {
    // Effect: observa mudanças no total e emite via output
    effect(() => {
      this.totalChanged.emit(this.total());
    });
  }

  /** Adiciona item ao carrinho com imutabilidade */
  addItem(item: Omit<CartItem, 'id'>): void {
    this.items.update((current) => [...current, { ...item, id: crypto.randomUUID() }]);
  }

  /** Remove item pelo ID com imutabilidade */
  removeItem(id: string): void {
    this.items.update((current) => current.filter((item) => item.id !== id));
  }

  /** Atualiza quantidade de um item específico */
  updateQuantity(id: string, quantidade: number): void {
    this.items.update((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantidade: Math.max(0, quantidade) } : item,
      ),
    );
  }
}
```

**Explicação dos Signals:**

- `signal<T>()` — Estado reativo primitivo. Substitui `BehaviorSubject` ou `useState`
- `computed()` — Derivação automática. Recalcula quando dependências mudam (lazy + memoized)
- `effect()` — Side effect reativo. Executa quando signals dependentes mudam
- `output()` — Emite eventos para o componente pai (substitui EventEmitter)

---

### 3.2 Gerenciamento de Estado com NgRx (Feature To-do)

#### Actions (`todo.actions.ts`):

```typescript
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const TodoActions = createActionGroup({
  source: 'Todo',
  events: {
    'Load Todos': emptyProps(),
    'Load Todos Success': props<{ todos: readonly Todo[] }>(),
    'Load Todos Error': props<{ error: string }>(),
    'Toggle Todo Complete': props<{ id: string }>(),
  },
});
```

#### Model (`todo.model.ts`):

```typescript
export interface Todo {
  readonly id: string;
  readonly titulo: string;
  readonly concluido: boolean;
}
```

#### Reducer (`todo.reducer.ts`):

```typescript
import { createFeature, createReducer, on } from '@ngrx/store';
import { TodoActions } from './todo.actions';
import { Todo } from './todo.model';

interface TodoState {
  readonly todos: readonly Todo[];
  readonly loading: boolean;
  readonly error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoFeature = createFeature({
  name: 'todo',
  reducer: createReducer(
    initialState,

    on(
      TodoActions.loadTodos,
      (state): TodoState => ({
        ...state,
        loading: true,
        error: null,
      }),
    ),

    on(
      TodoActions.loadTodosSuccess,
      (state, { todos }): TodoState => ({
        ...state,
        todos,
        loading: false,
      }),
    ),

    on(
      TodoActions.loadTodosError,
      (state, { error }): TodoState => ({
        ...state,
        error,
        loading: false,
      }),
    ),

    on(
      TodoActions.toggleTodoComplete,
      (state, { id }): TodoState => ({
        ...state,
        todos: state.todos.map((t) => (t.id === id ? { ...t, concluido: !t.concluido } : t)),
      }),
    ),
  ),
});
```

#### Selectors (`todo.selectors.ts`):

```typescript
import { createSelector } from '@ngrx/store';
import { todoFeature } from './todo.reducer';

// Auto-generated selectors from createFeature
export const { selectTodos, selectLoading, selectError } = todoFeature;

/** selectAllTodos: Retorna a lista completa */
export const selectAllTodos = selectTodos;

/** selectPendingTodos: Retorna apenas tarefas não concluídas */
export const selectPendingTodos = createSelector(selectTodos, (todos) =>
  todos.filter((t) => !t.concluido),
);
```

#### Effects (`todo.effects.ts`):

```typescript
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TodoActions } from './todo.actions';
import { Todo } from './todo.model';

/**
 * Functional effect (NgRx 17+ pattern)
 * Gerencia o fluxo assíncrono: loadTodos → HTTP → success/error
 */
export const loadTodos$ = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient)) =>
    actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() =>
        http.get<Todo[]>('/api/todos').pipe(
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((error: Error) => of(TodoActions.loadTodosError({ error: error.message }))),
        ),
      ),
    ),
  { functional: true },
);
```

**Boas práticas aplicadas:**

- `createFeature` — Auto-gera selectors a partir do reducer
- `createActionGroup` — Actions organizadas e fortemente tipadas
- Tipagem forte no estado — Zero `any`, todas as propriedades com tipo explícito
- `readonly` no state — Garante imutabilidade
- **Functional effects** — API moderna do NgRx (inject-based, tree-shakeable)
- `switchMap` + `catchError` — Fluxo assíncrono correto com cancelamento e tratamento de erro
- Separação em arquivos — actions, reducer, selectors, effects (separação de concerns)
