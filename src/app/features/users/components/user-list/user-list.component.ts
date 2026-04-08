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
  styleUrls: ['./user-list.component.scss'],
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
