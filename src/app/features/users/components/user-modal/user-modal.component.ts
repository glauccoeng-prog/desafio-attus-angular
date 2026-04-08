import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { User, CreateUserDTO, TipoTelefone } from '../../models/user.model';
import { cpfValidator, formatCPF } from '../../validators/cpf.validator';
import { phoneValidator, formatPhone } from '../../validators/phone.validator';
import { emailFormatValidator } from '../../validators/email.validator';

export interface UserModalData {
  readonly user: User | null;
}

/**
 * Modal de criação/edição de usuário — Formulário Reativo.
 * Standalone, OnPush, validação completa com mensagens por campo.
 */
@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .user-form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-width: 400px;
        padding-top: 8px;
      }

      @media (max-width: 640px) {
        .user-form {
          min-width: unset;
        }
      }

      .user-form mat-form-field {
        transition: all 0.2s ease;
      }

      .user-form mat-form-field:focus-within {
        opacity: 1;
      }

      .full-width {
        width: 100%;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr 120px;
        gap: 16px;
        margin-top: 8px;
      }

      @media (max-width: 640px) {
        .form-row {
          grid-template-columns: 1fr;
          gap: 12px;
        }
      }

      @media (min-width: 600px) and (max-width: 900px) {
        .form-row {
          grid-template-columns: 1fr 1fr;
        }

        .form-row > :last-child {
          grid-column: 1 / -1;
        }
      }

      .form-hint {
        font: var(--mat-sys-body-small);
        color: var(--mat-sys-on-surface-variant);
        margin: 0;
        padding: 8px 12px;
        background-color: var(--mat-sys-surface-container-lowest);
        border-left: 3px solid var(--mat-sys-tertiary);
        border-radius: 4px;
        transition: all 0.2s ease;
      }

      .form-hint:hover {
        background-color: var(--mat-sys-surface-container);
      }
    `,
  ],
  template: `
    <h2 mat-dialog-title>
      {{ data.user ? 'Editar usuário' : 'Adicionar novo usuário' }}
    </h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="user-form" id="user-form">
        <!-- Email -->
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Usuário (e-mail)</mat-label>
          <input
            matInput
            formControlName="email"
            placeholder="usuario@email.com"
            id="user-email-input"
          />
          @if (form.controls.email.hasError('required') && form.controls.email.touched) {
            <mat-error>E-mail é obrigatório</mat-error>
          }
          @if (form.controls.email.hasError('emailInvalido') && form.controls.email.touched) {
            <mat-error>E-mail inválido</mat-error>
          }
        </mat-form-field>

        <!-- Nome -->
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nome completo</mat-label>
          <input matInput formControlName="nome" placeholder="Nome completo" id="user-nome-input" />
          @if (form.controls.nome.hasError('required') && form.controls.nome.touched) {
            <mat-error>Nome é obrigatório</mat-error>
          }
        </mat-form-field>

        <div class="form-row">
          <!-- CPF -->
          <mat-form-field appearance="outline">
            <mat-label>CPF</mat-label>
            <input
              matInput
              formControlName="cpf"
              placeholder="000.000.000-00"
              maxlength="14"
              (input)="onCpfInput($event)"
              id="user-cpf-input"
            />
            @if (form.controls.cpf.hasError('required') && form.controls.cpf.touched) {
              <mat-error>CPF é obrigatório</mat-error>
            }
            @if (form.controls.cpf.hasError('cpfInvalido') && form.controls.cpf.touched) {
              <mat-error>CPF inválido</mat-error>
            }
          </mat-form-field>

          <!-- Telefone -->
          <mat-form-field appearance="outline">
            <mat-label>Telefone</mat-label>
            <input
              matInput
              formControlName="telefone"
              placeholder="(00) 00000-0000"
              maxlength="15"
              (input)="onPhoneInput($event)"
              id="user-telefone-input"
            />
            @if (form.controls.telefone.hasError('required') && form.controls.telefone.touched) {
              <mat-error>Telefone é obrigatório</mat-error>
            }
            @if (
              form.controls.telefone.hasError('telefoneInvalido') && form.controls.telefone.touched
            ) {
              <mat-error>Telefone inválido</mat-error>
            }
          </mat-form-field>

          <!-- Tipo Telefone -->
          <mat-form-field appearance="outline">
            <mat-label>Tipo</mat-label>
            <mat-select formControlName="tipoTelefone" id="user-tipo-telefone-select">
              <mat-option value="CELULAR">Celular</mat-option>
              <mat-option value="RESIDENCIAL">Residencial</mat-option>
              <mat-option value="COMERCIAL">Comercial</mat-option>
            </mat-select>
          </mat-form-field>
        </div>

        <p class="form-hint">
          O usuário receberá uma senha provisória para acesso ao sistema por SMS.
        </p>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close id="user-cancel-btn">CANCELAR</button>
      <button
        mat-flat-button
        color="primary"
        [disabled]="form.invalid"
        (click)="onSave()"
        id="user-save-btn"
      >
        SALVAR
      </button>
    </mat-dialog-actions>
  `,
})
export class UserModalComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<UserModalComponent>);
  readonly data: UserModalData = inject(MAT_DIALOG_DATA);

  readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, emailFormatValidator()]],
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required, cpfValidator()]],
    telefone: ['', [Validators.required, phoneValidator()]],
    tipoTelefone: ['CELULAR' as TipoTelefone],
  });

  constructor() {
    // Auto-preenchimento na edição
    if (this.data.user) {
      this.form.patchValue({
        email: this.data.user.email,
        nome: this.data.user.nome,
        cpf: this.data.user.cpf,
        telefone: this.data.user.telefone,
        tipoTelefone: this.data.user.tipoTelefone,
      });
    }
  }

  onCpfInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const formatted = formatCPF(input.value);
    this.form.controls.cpf.setValue(formatted);
  }

  onPhoneInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const formatted = formatPhone(input.value);
    this.form.controls.telefone.setValue(formatted);
  }

  onSave(): void {
    if (this.form.invalid) {
      return;
    }

    const value = this.form.getRawValue();
    const dto: CreateUserDTO = {
      email: value.email.trim(),
      nome: value.nome.trim(),
      cpf: value.cpf,
      telefone: value.telefone,
      tipoTelefone: value.tipoTelefone,
    };

    this.dialogRef.close({
      action: this.data.user ? 'update' : 'create',
      data: this.data.user ? { ...dto, id: this.data.user.id } : dto,
    });
  }
}
