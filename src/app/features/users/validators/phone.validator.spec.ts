import { isValidPhone, formatPhone, phoneValidator } from './phone.validator';
import { FormControl } from '@angular/forms';

describe('Phone Validator', () => {
  describe('isValidPhone', () => {
    it('should return true for 10-digit phone', () => {
      expect(isValidPhone('(31) 3456-7890')).toBe(true);
    });

    it('should return true for 11-digit phone', () => {
      expect(isValidPhone('(11) 99876-5432')).toBe(true);
    });

    it('should return false for too short phone', () => {
      expect(isValidPhone('123')).toBe(false);
    });

    it('should return false for too long phone', () => {
      expect(isValidPhone('123456789012')).toBe(false);
    });

    it('should return false for empty phone', () => {
      expect(isValidPhone('')).toBe(false);
    });
  });

  describe('formatPhone', () => {
    it('should format 11-digit phone', () => {
      expect(formatPhone('11998765432')).toBe('(11) 99876-5432');
    });

    it('should format 10-digit phone', () => {
      expect(formatPhone('3134567890')).toBe('(31) 3456-7890');
    });

    it('should handle partial input', () => {
      expect(formatPhone('11')).toBe('11');
      expect(formatPhone('119987')).toBe('(11) 9987');
    });

    it('should limit to 11 digits', () => {
      expect(formatPhone('119987654321234')).toBe('(11) 99876-5432');
    });
  });

  describe('phoneValidator (Angular ValidatorFn)', () => {
    it('should return null for valid phone', () => {
      const control = new FormControl('(11) 99876-5432');
      const validator = phoneValidator();
      expect(validator(control)).toBeNull();
    });

    it('should return error for invalid phone', () => {
      const control = new FormControl('123');
      const validator = phoneValidator();
      expect(validator(control)).toEqual({ telefoneInvalido: true });
    });

    it('should return null for empty value', () => {
      const control = new FormControl('');
      const validator = phoneValidator();
      expect(validator(control)).toBeNull();
    });
  });
});
