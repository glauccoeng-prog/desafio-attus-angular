import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Valida formato de e-mail
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Angular Reactive Form Validator para e-mail
 */
export function emailFormatValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    }
    return isValidEmail(value) ? null : { emailInvalido: true };
  };
}
