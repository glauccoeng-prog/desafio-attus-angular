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
  styleUrls: ['./confirm-dialog.component.scss'],
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
