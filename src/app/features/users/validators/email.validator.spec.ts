import { isValidEmail, emailFormatValidator } from './email.validator';
import { FormControl } from '@angular/forms';

describe('Email Validator', () => {
  describe('isValidEmail', () => {
    it('should return true for valid email', () => {
      expect(isValidEmail('user@example.com')).toBe(true);
      expect(isValidEmail('test.email@domain.com.br')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('no@')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });

    it('should return false for email with spaces', () => {
      expect(isValidEmail('user @example.com')).toBe(false);
    });
  });

  describe('emailFormatValidator (Angular ValidatorFn)', () => {
    it('should return null for valid email', () => {
      const control = new FormControl('user@example.com');
      const validator = emailFormatValidator();
      expect(validator(control)).toBeNull();
    });

    it('should return error for invalid email', () => {
      const control = new FormControl('invalid');
      const validator = emailFormatValidator();
      expect(validator(control)).toEqual({ emailInvalido: true });
    });

    it('should return null for empty value', () => {
      const control = new FormControl('');
      const validator = emailFormatValidator();
      expect(validator(control)).toBeNull();
    });
  });
});
