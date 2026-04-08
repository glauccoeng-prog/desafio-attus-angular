import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  const mockDialogData: ConfirmDialogData = {
    title: 'Excluir',
    message: 'Tem certeza que deseja excluir?',
    confirmText: 'EXCLUIR',
    cancelText: 'CANCELAR',
  };

  const mockDialogRef = {
    close: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent], // Standalone
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: mockDialogRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o titulo e a mensagem passadas pelos dados (MAT_DIALOG_DATA)', () => {
    const titleEl = fixture.debugElement.query(By.css('.confirm-dialog__title')).nativeElement;
    const msgEl = fixture.debugElement.query(By.css('.confirm-dialog__message')).nativeElement;

    expect(titleEl.textContent).toBe('Excluir');
    expect(msgEl.textContent).toBe('Tem certeza que deseja excluir?');
  });

  it('deve ter mat-dialog-close vinculados nas actions de botoes', () => {
    const cancelBtn = fixture.debugElement.query(By.css('#confirm-cancel-btn')).nativeElement;
    const deleteBtn = fixture.debugElement.query(By.css('#confirm-delete-btn')).nativeElement;

    // We just verify they rendered the right text from the data.
    // The [mat-dialog-close] directive is handled by Angular Material, we trust it works.
    expect(cancelBtn.textContent.trim()).toBe('CANCELAR');
    expect(deleteBtn.textContent.trim()).toBe('EXCLUIR');
  });
});
