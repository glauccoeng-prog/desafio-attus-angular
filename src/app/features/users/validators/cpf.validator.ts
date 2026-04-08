import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validador de CPF brasileiro — algoritmo oficial dos dígitos verificadores.
 */
export function isValidCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11) {
    return false;
  }
  if (/^(\d)\1{10}$/.test(cleaned)) {
    return false;
  }

  const digits = cleaned.split('').map(Number);

  const calcDigit = (slice: readonly number[], factor: number): number => {
    const sum = slice.reduce((acc, digit, i) => acc + digit * (factor - i), 0);
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const firstDigit = calcDigit(digits.slice(0, 9), 10);
  if (firstDigit !== digits[9]) {
    return false;
  }

  const secondDigit = calcDigit(digits.slice(0, 10), 11);
  return secondDigit === digits[10];
}

/**
 * Formata CPF: 000.000.000-00
 */
export function formatCPF(value: string): string {
  const cleaned = value.replace(/\D/g, '').slice(0, 11);
  return cleaned
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

/**
 * Angular Reactive Form Validator para CPF
 */
export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    } // required validator handles empty
    return isValidCPF(value) ? null : { cpfInvalido: true };
  };
}
