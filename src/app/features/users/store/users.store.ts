import { Injectable, signal, computed, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  catchError,
  finalize,
  of,
  switchMap,
  Subject,
  debounceTime,
  distinctUntilChanged,
  tap,
} from 'rxjs';
import { UserApiService } from '../../../core/services/user-api.service';
import { User, CreateUserDTO, UpdateUserDTO, Pagina } from '../models/user.model';
import { filtrarEPaginar } from '../../../shared/utils/filtrar-e-paginar';

/**
 * Users Store — Estado local com Signals
 * Gerencia: lista de usuários, filtro, paginação, loading, erro.
 *
 * Operadores RxJS reais utilizados:
 * - switchMap: cancelamento de busca anterior
 * - catchError: tratamento de erros
 * - debounceTime: debounce no filtro
 * - distinctUntilChanged: evitar buscas duplicadas
 * - finalize: reset de loading
 * - takeUntilDestroyed: cleanup automático
 */
@Injectable()
export class UsersStore {
  private readonly api = inject(UserApiService);
  private readonly destroyRef = inject(DestroyRef);

  // === Signals (state) ===
  private readonly _users = signal<readonly User[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private readonly _searchTerm = signal('');
  private readonly _currentPage = signal(1);
  private readonly _pageSize = signal(5);

  // === Computed (derived state) ===
  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly searchTerm = this._searchTerm.asReadonly();
  readonly currentPage = this._currentPage.asReadonly();

  readonly page: () => Pagina<User> = computed(() =>
    filtrarEPaginar(
      this._users(),
      () => true, // filtro já aplicado na API
      { pagina: this._currentPage(), tamanho: this._pageSize() },
    ),
  );

  // === Search Subject (RxJS para debounce + switchMap) ===
  private readonly searchSubject = new Subject<string>();

  constructor() {
    this.setupSearch();
  }

  /**
   * Pipeline reativo de busca:
   * debounceTime(300ms) → distinctUntilChanged → switchMap → catchError
   */
  private setupSearch(): void {
    this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(() => {
          this._loading.set(true);
          this._error.set(null);
        }),
        switchMap((query) => {
          const source$ = query ? this.api.search(query) : this.api.getAll();
          return source$.pipe(
            catchError((err: Error) => {
              this._error.set(err.message || 'Erro ao buscar usuários.');
              return of([] as readonly User[]);
            }),
            finalize(() => this._loading.set(false)),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((users) => {
        this._users.set(users);
        this._currentPage.set(1);
      });
  }

  // === Actions ===

  loadUsers(): void {
    this._loading.set(true);
    this._error.set(null);
    this.api
      .getAll()
      .pipe(
        catchError((err: Error) => {
          this._error.set(err.message || 'Falha ao carregar usuários.');
          return of([] as readonly User[]);
        }),
        finalize(() => this._loading.set(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((users) => this._users.set(users));
  }

  setSearchTerm(term: string): void {
    this._searchTerm.set(term);
    this.searchSubject.next(term);
  }

  setCurrentPage(page: number): void {
    this._currentPage.set(page);
  }

  createUser(dto: CreateUserDTO): void {
    this._loading.set(true);
    this.api
      .create(dto)
      .pipe(
        switchMap(() => this.api.getAll()),
        catchError((err: Error) => {
          this._error.set(err.message || 'Erro ao criar usuário.');
          return of([] as readonly User[]);
        }),
        finalize(() => this._loading.set(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((users) => this._users.set(users));
  }

  updateUser(dto: UpdateUserDTO): void {
    this._loading.set(true);
    this.api
      .update(dto)
      .pipe(
        switchMap(() => this.api.getAll()),
        catchError((err: Error) => {
          this._error.set(err.message || 'Erro ao atualizar usuário.');
          return of([] as readonly User[]);
        }),
        finalize(() => this._loading.set(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((users) => this._users.set(users));
  }

  deleteUser(id: string): void {
    this._loading.set(true);
    this.api
      .delete(id)
      .pipe(
        switchMap(() => this.api.getAll()),
        catchError((err: Error) => {
          this._error.set(err.message || 'Erro ao excluir usuário.');
          return of([] as readonly User[]);
        }),
        finalize(() => this._loading.set(false)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((users) => this._users.set(users));
  }
}
