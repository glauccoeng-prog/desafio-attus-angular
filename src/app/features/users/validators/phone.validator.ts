import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Valida telefone brasileiro (10 ou 11 dígitos)
 */
export function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 11;
}

/**
 * Formata telefone: (00) 0000-0000 ou (00) 00000-0000
 */
export function formatPhone(value: string): string {
  const cleaned = value.replace(/\D/g, '').slice(0, 11);
  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2');
  }
  return cleaned.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
}

/**
 * Angular Reactive Form Validator para telefone
 */
export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    }
    return isValidPhone(value) ? null : { telefoneInvalido: true };
  };
}
