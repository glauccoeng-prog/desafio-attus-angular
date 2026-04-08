import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserModalComponent, UserModalData } from './user-modal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user.model';

describe('UserModalComponent', () => {
  let fixture: ComponentFixture<UserModalComponent>;
  let component: UserModalComponent;
  let dialogCloseFn: ReturnType<typeof vi.fn>;

  function createComponent(user: User | null = null) {
    dialogCloseFn = vi.fn();

    TestBed.configureTestingModule({
      imports: [UserModalComponent, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: { close: dialogCloseFn } },
        { provide: MAT_DIALOG_DATA, useValue: { user } as UserModalData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  describe('Create mode', () => {
    beforeEach(() => createComponent(null));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have empty form initially', () => {
      expect(component.form.value.nome).toBe('');
      expect(component.form.value.email).toBe('');
      expect(component.form.value.cpf).toBe('');
      expect(component.form.value.telefone).toBe('');
    });

    it('should be invalid when empty', () => {
      expect(component.form.valid).toBe(false);
    });

    it('should validate email format', () => {
      component.form.controls.email.setValue('invalid');
      component.form.controls.email.markAsTouched();
      expect(component.form.controls.email.hasError('emailInvalido')).toBe(true);
    });

    it('should show required error for empty nome', () => {
      component.form.controls.nome.markAsTouched();
      expect(component.form.controls.nome.hasError('required')).toBe(true);
    });

    it('should close dialog with create action on save', () => {
      component.form.patchValue({
        email: 'test@email.com',
        nome: 'Test User',
        cpf: '529.982.247-25',
        telefone: '(11) 99876-5432',
        tipoTelefone: 'CELULAR',
      });

      component.onSave();

      expect(dialogCloseFn).toHaveBeenCalledWith(expect.objectContaining({ action: 'create' }));
    });

    it('should not close dialog if form is invalid', () => {
      component.onSave();
      expect(dialogCloseFn).not.toHaveBeenCalled();
    });
  });

  describe('Edit mode', () => {
    const mockUser: User = {
      id: '1',
      nome: 'Existing User',
      email: 'existing@email.com',
      cpf: '529.982.247-25',
      telefone: '(11) 99876-5432',
      tipoTelefone: 'RESIDENCIAL',
    };

    beforeEach(() => createComponent(mockUser));

    it('should pre-fill form with user data', () => {
      expect(component.form.value.nome).toBe('Existing User');
      expect(component.form.value.email).toBe('existing@email.com');
      expect(component.form.value.cpf).toBe('529.982.247-25');
      expect(component.form.value.tipoTelefone).toBe('RESIDENCIAL');
    });

    it('should close dialog with update action on save', () => {
      component.onSave();

      expect(dialogCloseFn).toHaveBeenCalledWith(expect.objectContaining({ action: 'update' }));
    });
  });

  describe('Input Masks', () => {
    beforeEach(() => createComponent(null));

    it('should format CPF upon input', () => {
      const event = { target: { value: '11122233344' } } as unknown as Event;
      component.onCpfInput(event);
      expect(component.form.value.cpf).toBe('111.222.333-44');
    });

    it('should format phone upon input', () => {
      const event = { target: { value: '11999998888' } } as unknown as Event;
      component.onPhoneInput(event);
      expect(component.form.value.telefone).toBe('(11) 99999-8888');
    });
  });
});
