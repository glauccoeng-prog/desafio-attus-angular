import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { User } from '../../models/user.model';

/**
 * Card de usuário — componente standalone, OnPush.
 * SRP: apenas exibe dados do usuário e emite eventos.
 */
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .user-card {
        transition: all 0.2s ease;
        border-radius: 8px;
      }

      .user-card:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }

      .user-card:focus-within {
        outline: 2px solid var(--mat-sys-primary);
        outline-offset: 2px;
      }

      .user-card__content {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 16px;
      }

      .user-card__avatar {
        width: 40px;
        height: 40px;
        min-width: 40px;
        border-radius: 50%;
        background-color: var(--mat-sys-primary-container);
        color: var(--mat-sys-on-primary-container);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        font-weight: 500;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .user-card:hover .user-card__avatar {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
        transform: scale(1.08);
      }

      .user-card__info {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
      }

      .user-card__name {
        font: var(--mat-sys-body-large);
        color: var(--mat-sys-on-surface);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        transition: color 0.2s ease;
      }

      .user-card:hover .user-card__name {
        color: var(--mat-sys-primary);
      }

      .user-card__email {
        font: var(--mat-sys-body-small);
        color: var(--mat-sys-on-surface-variant);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 2px;
        transition: color 0.2s ease;
      }

      .user-card:hover .user-card__email {
        color: var(--mat-sys-on-surface);
      }

      .user-card__cpf {
        font: var(--mat-sys-body-small);
        color: var(--mat-sys-on-surface-variant);
        flex-shrink: 0;
        display: none;
      }

      @media (min-width: 640px) {
        .user-card__cpf {
          display: block;
        }
      }

      .user-card__actions {
        flex-shrink: 0;
        display: flex;
        gap: 4px;
        opacity: 0.7;
        transition: opacity 0.2s ease;
      }

      .user-card:hover .user-card__actions {
        opacity: 1;
      }

      .user-card__actions button {
        transition: all 0.2s ease;
      }

      .user-card__actions button:hover {
        transform: scale(1.1);
      }

      .user-card__actions button:active {
        transform: scale(0.95);
      }

      .delete-btn {
        color: var(--mat-sys-error);
      }

      .delete-btn:hover {
        color: #c62828;
      }
    `,
  ],
  template: `
    <mat-card appearance="outlined" class="user-card">
      <mat-card-content class="user-card__content">
        <div class="user-card__avatar">
          <mat-icon>person</mat-icon>
        </div>
        <div class="user-card__info">
          <span class="user-card__name">{{ user().nome }}</span>
          <span class="user-card__email">{{ user().email }}</span>
        </div>
        <span class="user-card__cpf">{{ user().cpf }}</span>
        <div class="user-card__actions">
          <button
            mat-icon-button
            matTooltip="Editar"
            (click)="editClicked.emit(user())"
            aria-label="Editar usuário"
          >
            <mat-icon>edit</mat-icon>
          </button>
          <button
            mat-icon-button
            matTooltip="Excluir"
            (click)="deleteClicked.emit(user().id)"
            class="delete-btn"
            aria-label="Excluir usuário"
          >
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class UserCardComponent {
  readonly user = input.required<User>();
  readonly editClicked = output<User>();
  readonly deleteClicked = output<string>();
}
