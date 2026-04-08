import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ConfirmDialogData {
  readonly title: string;
  readonly message: string;
  readonly confirmText?: string;
  readonly cancelText?: string;
}

/**
 * Modal de confirmação reutilizável — Material Dialog.
 * Standalone, OnPush.
 */
@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .confirm-dialog {
      text-align: center;
      padding: 8px 0 0;
    }

    .confirm-dialog__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: var(--mat-sys-error-container);
      color: var(--mat-sys-error);
    }

    .confirm-dialog__icon mat-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    .confirm-dialog__title {
      font: var(--mat-sys-title-large);
      color: var(--mat-sys-on-surface);
      margin: 0 0 8px;
    }

    .confirm-dialog__message {
      font: var(--mat-sys-body-medium);
      color: var(--mat-sys-on-surface-variant);
      margin: 0;
    }

    .confirm-dialog__actions {
      padding-top: 16px;
    }

    .confirm-dialog__delete-btn {
      background-color: #f44336 !important;
      color: white !important;
    }
  `],
  template: `
    <div class="confirm-dialog">
      <div class="confirm-dialog__icon">
        <mat-icon>warning_amber</mat-icon>
      </div>

      <h2 mat-dialog-title class="confirm-dialog__title">{{ data.title }}</h2>

      <mat-dialog-content>
        <p class="confirm-dialog__message">{{ data.message }}</p>
      </mat-dialog-content>

      <mat-dialog-actions align="end" class="confirm-dialog__actions">
        <button mat-button mat-dialog-close id="confirm-cancel-btn">
          {{ data.cancelText || 'CANCELAR' }}
        </button>
        <button
          mat-flat-button
          class="confirm-dialog__delete-btn"
          [mat-dialog-close]="true"
          id="confirm-delete-btn"
        >
          {{ data.confirmText || 'EXCLUIR' }}
        </button>
      </mat-dialog-actions>
    </div>
  `,
})
export class ConfirmDialogComponent {
  readonly data: ConfirmDialogData = inject(MAT_DIALOG_DATA);
}
