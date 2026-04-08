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
  styleUrls: ['./user-card.component.scss'],
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
