import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserFilterComponent } from '../user-filter/user-filter.component';
import { UserModalComponent, UserModalData } from '../user-modal/user-modal.component';
import { UsersStore } from '../../store/users.store';
import { User, CreateUserDTO, UpdateUserDTO } from '../../models/user.model';
import { ShellComponent } from '../../../../shared/layout/shell/shell.component';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

/**
 * Página principal — Listagem de Usuários
 * Standalone, OnPush, com paginação, filtro debounce, loading, error.
 */
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    UserCardComponent,
    UserFilterComponent,
  ],
  providers: [UsersStore],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background-color: var(--mat-sys-surface-container-lowest);
    }

    .header {
      background-color: var(--mat-sys-surface);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      transition: box-shadow 0.2s ease;
    }

    @media (max-width: 640px) {
      .header {
        padding: 12px 8px 12px 4px;
        gap: 8px;
      }
    }

    .header__menu-btn {
      flex-shrink: 0;
      transition: color 0.2s ease;
    }

    .header__menu-btn:hover {
      color: var(--mat-sys-primary);
    }

    @media (min-width: 960px) {
      .header__menu-btn {
        display: none;
      }
    }

    .header__title {
      font: var(--mat-sys-title-medium);
      color: var(--mat-sys-on-surface);
      margin: 0;
      white-space: nowrap;
      flex-shrink: 0;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .content {
      flex: 1;
      padding: 24px;
      max-width: 900px;
      margin: 0 auto;
      width: 100%;
      box-sizing: border-box;
      overflow-y: auto;
      transition: padding 0.2s ease;
    }

    @media (max-width: 640px) {
      .content {
        padding: 16px;
        max-width: 100%;
      }
    }

    @media (min-width: 600px) {
      .content {
        padding: 20px 24px;
      }
    }

    @media (min-width: 1200px) {
      .content {
        padding: 24px;
      }
    }

    .content__subtitle {
      font: var(--mat-sys-body-small);
      color: var(--mat-sys-on-surface-variant);
      margin: 0 0 16px;
    }

    .error-banner {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background-color: var(--mat-sys-error-container);
      color: var(--mat-sys-on-error-container);
      border-radius: 8px;
      border-left: 4px solid var(--mat-sys-error);
      margin-bottom: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      animation: fadeInTop 0.3s ease-out;
    }

    .error-banner mat-icon {
      flex-shrink: 0;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .error-banner span {
      flex: 1;
      font: var(--mat-sys-body-medium);
    }

    .error-banner button {
      flex-shrink: 0;
      transition: all 0.2s ease;
    }

    .error-banner button:hover {
      opacity: 0.8;
    }

    @media (max-width: 640px) {
      .error-banner {
        flex-direction: column;
        align-items: flex-start;
      }

      .error-banner button {
        align-self: flex-end;
      }
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 64px 0;
      gap: 16px;
      color: var(--mat-sys-on-surface-variant);
      animation: fadeIn 0.3s ease-out;
    }

    .loading-container p {
      font: var(--mat-sys-body-medium);
      margin: 0;
      animation: fadeIn 0.5s ease-out 0.1s both;
    }

    @media (max-width: 640px) {
      .loading-container {
        padding: 32px 16px;
      }
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 64px 16px;
      color: var(--mat-sys-on-surface-variant);
      animation: fadeIn 0.3s ease-out;
    }

    .empty-state mat-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      margin-bottom: 12px;
      opacity: 0.5;
    }

    .empty-state p {
      font: var(--mat-sys-body-medium);
      margin: 0;
    }

    @media (max-width: 640px) {
      .empty-state {
        padding: 32px 16px;
      }

      .empty-state mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
      }
    }

    .user-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding-top: 24px;
      flex-wrap: wrap;
      transition: all 0.2s ease;
    }

    @media (max-width: 640px) {
      .pagination {
        padding-top: 20px;
      }
    }

    .pagination__btn--inactive {
      background-color: transparent;
      box-shadow: none;
      color: var(--mat-sys-on-surface-variant);
      transition: all 0.2s ease;
    }

    .pagination__btn--inactive:hover:not(:disabled) {
      background-color: rgba(25, 118, 210, 0.05);
      color: var(--mat-sys-primary);
    }

    .pagination__info {
      margin-left: 12px;
      font: var(--mat-sys-body-small);
      color: var(--mat-sys-on-surface-variant);
    }

    @media (max-width: 640px) {
      .pagination__info {
        margin-left: 0;
        margin-top: 12px;
        width: 100%;
        text-align: center;
      }
    }

    .fab {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10;
      background-color: #f44336 !important;
      color: white !important;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18) !important;
      transition: all 0.2s ease;
    }

    .fab:hover {
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2) !important;
      transform: scale(1.08);
    }

    .fab:active {
      transform: scale(0.95);
    }

    @media (max-width: 640px) {
      .fab {
        bottom: 16px;
        right: 16px;
      }
    }

    @media (min-width: 600px) {
      .fab {
        bottom: 20px;
        right: 20px;
      }
    }

    @keyframes fadeInTop {
      from {
        transform: translateY(-10px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `],
  template: `
    <!-- Header -->
    <header class="header">
      @if (shell) {
        <button
          mat-icon-button
          class="header__menu-btn"
          (click)="shell.toggleSidenav()"
          aria-label="Abrir menu"
          id="toggle-sidenav-btn"
        >
          <mat-icon>menu</mat-icon>
        </button>
      }
      <h1 class="header__title">USUÁRIOS</h1>
      <app-user-filter
        [value]="store.searchTerm()"
        [loading]="store.loading() && !!store.searchTerm()"
        (valueChange)="store.setSearchTerm($event)"
      />
    </header>

    <!-- Content -->
    <main class="content">
      <p class="content__subtitle">Usuários cadastrados</p>

      <!-- Error State -->
      @if (store.error(); as error) {
        <div class="error-banner">
          <mat-icon>warning</mat-icon>
          <span>{{ error }}</span>
          <button mat-button color="warn" (click)="store.loadUsers()">Tentar novamente</button>
        </div>
      }

      <!-- Loading State -->
      @if (store.loading() && !store.searchTerm()) {
        <div class="loading-container">
          <mat-spinner diameter="40"></mat-spinner>
          <p>Carregando usuários...</p>
        </div>
      }

      <!-- User List -->
      @if (!store.loading() || store.searchTerm()) {
        @if (store.page().itens.length === 0 && !store.loading()) {
          <div class="empty-state">
            <mat-icon>person_off</mat-icon>
            <p>Nenhum usuário encontrado.</p>
          </div>
        } @else {
          <div class="user-list">
            @for (user of store.page().itens; track user.id) {
              <app-user-card
                [user]="user"
                (editClicked)="openModal($event)"
                (deleteClicked)="onDelete($event)"
              />
            }
          </div>

          <!-- Pagination -->
          @if (store.page().totalPaginas > 1) {
            <div class="pagination">
              <button
                mat-icon-button
                [disabled]="store.page().paginaAtual <= 1"
                (click)="store.setCurrentPage(store.page().paginaAtual - 1)"
                aria-label="Página anterior"
              >
                <mat-icon>chevron_left</mat-icon>
              </button>

              @for (p of getPages(); track p) {
                <button
                  mat-mini-fab
                  [color]="p === store.page().paginaAtual ? 'primary' : undefined"
                  [class.pagination__btn--inactive]="p !== store.page().paginaAtual"
                  (click)="store.setCurrentPage(p)"
                >
                  {{ p }}
                </button>
              }

              <button
                mat-icon-button
                [disabled]="store.page().paginaAtual >= store.page().totalPaginas"
                (click)="store.setCurrentPage(store.page().paginaAtual + 1)"
                aria-label="Próxima página"
              >
                <mat-icon>chevron_right</mat-icon>
              </button>

              <span class="pagination__info"> {{ store.page().totalRegistros }} registros </span>
            </div>
          }
        }
      }
    </main>

    <!-- FAB -->
    <button
      mat-fab
      color="warn"
      class="fab"
      (click)="openModal(null)"
      aria-label="Adicionar usuário"
      id="add-user-fab"
    >
      <mat-icon>add</mat-icon>
    </button>
  `,
})
export class UserListComponent implements OnInit {
  readonly store = inject(UsersStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  readonly shell = inject(ShellComponent, { optional: true });

  ngOnInit(): void {
    this.store.loadUsers();
  }

  getPages(): number[] {
    return Array.from({ length: this.store.page().totalPaginas }, (_, i) => i + 1);
  }

  openModal(user: User | null): void {
    const dialogRef = this.dialog.open(UserModalComponent, {
      data: { user } as UserModalData,
      width: '600px',
      maxWidth: '95vw',
    });

    dialogRef
      .afterClosed()
      .subscribe((result: { action: string; data: CreateUserDTO | UpdateUserDTO } | undefined) => {
        if (!result) {
          return;
        }

        if (result.action === 'create') {
          this.store.createUser(result.data as CreateUserDTO);
          this.snackBar.open('Usuário cadastrado com sucesso!', 'OK', { duration: 3000 });
        } else if (result.action === 'update') {
          this.store.updateUser(result.data as UpdateUserDTO);
          this.snackBar.open('Usuário atualizado com sucesso!', 'OK', { duration: 3000 });
        }
      });
  }

  onDelete(id: string): void {
    const user = this.store.page().itens.find((u) => u.id === id);
    if (!user) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Excluir usuário',
        message: `Tem certeza que deseja excluir o usuário "${user.nome}"? Esta ação não pode ser desfeita.`,
        confirmText: 'EXCLUIR',
        cancelText: 'CANCELAR',
      },
      width: '400px',
      maxWidth: '90vw',
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.store.deleteUser(id);
        this.snackBar.open('Usuário excluído com sucesso!', 'OK', { duration: 3000 });
      }
    });
  }
}
