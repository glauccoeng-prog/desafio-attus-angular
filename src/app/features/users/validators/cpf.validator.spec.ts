import { isValidCPF, formatCPF, cpfValidator } from './cpf.validator';
import { FormControl } from '@angular/forms';

describe('CPF Validator', () => {
  describe('isValidCPF', () => {
    it('should return true for valid CPF', () => {
      expect(isValidCPF('529.982.247-25')).toBe(true);
    });

    it('should return true for valid CPF without mask', () => {
      expect(isValidCPF('52998224725')).toBe(true);
    });

    it('should return false for CPF with all same digits', () => {
      expect(isValidCPF('111.111.111-11')).toBe(false);
      expect(isValidCPF('000.000.000-00')).toBe(false);
    });

    it('should return false for CPF with wrong length', () => {
      expect(isValidCPF('123')).toBe(false);
      expect(isValidCPF('123456789012')).toBe(false);
    });

    it('should return false for invalid CPF', () => {
      expect(isValidCPF('123.456.789-00')).toBe(false);
      expect(isValidCPF('111.222.333-44')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isValidCPF('')).toBe(false);
    });
  });

  describe('formatCPF', () => {
    it('should format CPF correctly', () => {
      expect(formatCPF('52998224725')).toBe('529.982.247-25');
    });

    it('should handle partial input', () => {
      expect(formatCPF('529')).toBe('529');
      expect(formatCPF('5299822')).toBe('529.982.2');
    });

    it('should strip non-numeric characters', () => {
      expect(formatCPF('529.982.247-25')).toBe('529.982.247-25');
    });

    it('should limit to 11 digits', () => {
      expect(formatCPF('529982247251234')).toBe('529.982.247-25');
    });
  });

  describe('cpfValidator (Angular ValidatorFn)', () => {
    it('should return null for valid CPF', () => {
      const control = new FormControl('529.982.247-25');
      const validator = cpfValidator();
      expect(validator(control)).toBeNull();
    });

    it('should return error for invalid CPF', () => {
      const control = new FormControl('123.456.789-00');
      const validator = cpfValidator();
      expect(validator(control)).toEqual({ cpfInvalido: true });
    });

    it('should return null for empty value (handled by required)', () => {
      const control = new FormControl('');
      const validator = cpfValidator();
      expect(validator(control)).toBeNull();
    });
  });
});
