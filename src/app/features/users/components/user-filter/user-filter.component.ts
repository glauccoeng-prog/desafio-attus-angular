import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

/**
 * Campo de busca/filtro — componente standalone, OnPush.
 * Two-way binding para search term.
 */
@Component({
  selector: 'app-user-filter',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .filter-field {
        width: 100%;
        max-width: 400px;
      }

      .spinning {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,
  ],
  template: `
    <mat-form-field appearance="outline" class="filter-field">
      <mat-icon matPrefix>search</mat-icon>
      <mat-label>Pesquisar</mat-label>
      <input
        matInput
        [ngModel]="value()"
        (ngModelChange)="valueChange.emit($event)"
        placeholder="Pesquisar por nome ou e-mail..."
        id="user-search-input"
      />
      @if (loading()) {
        <mat-icon matSuffix class="spinning">sync</mat-icon>
      }
    </mat-form-field>
  `,
})
export class UserFilterComponent {
  readonly value = input<string>('');
  readonly loading = input(false);
  readonly valueChange = output<string>();
}
