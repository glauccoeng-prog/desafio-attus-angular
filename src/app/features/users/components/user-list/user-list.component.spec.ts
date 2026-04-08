import { ComponentFixture, TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { UserListComponent } from './user-list.component';
import { UsersStore } from '../../store/users.store';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { User } from '../../models/user.model';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserModalComponent } from '../user-modal/user-modal.component';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserFilterComponent } from '../user-filter/user-filter.component';

import { Component, input, output, signal } from '@angular/core';

@Component({ selector: 'app-user-card', template: '', standalone: true })
class MockUserCardComponent {
  user = input.required<User>();
  editClicked = output<User>();
  deleteClicked = output<string>();
}

@Component({ selector: 'app-user-filter', template: '', standalone: true })
class MockUserFilterComponent {
  value = input<string>('');
  loading = input<boolean>(false);
  valueChange = output<string>();
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockStore: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockDialog: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let mockSnackBar: any;

  const mockUser: User = {
    id: '1',
    nome: 'John',
    email: 'john@c.com',
    cpf: '123',
    telefone: '123',
    tipoTelefone: 'CELULAR',
  };

  beforeEach(async () => {
    mockStore = {
      loadUsers: vi.fn(),
      createUser: vi.fn(),
      updateUser: vi.fn(),
      deleteUser: vi.fn(),
      setCurrentPage: vi.fn(),
      setSearchTerm: vi.fn(),
      error: signal<string | null>(null),
      loading: signal<boolean>(false),
      searchTerm: signal<string>(''),
      currentPage: signal<number>(1),
      page: signal<{
        itens: User[];
        totalRegistros: number;
        paginaAtual: number;
        totalPaginas: number;
      }>({
        itens: [mockUser],
        totalRegistros: 1,
        paginaAtual: 1,
        totalPaginas: 1,
      }),
    };

    mockDialog = {
      open: vi.fn().mockReturnValue({
        afterClosed: () => of({ action: 'create', data: mockUser }),
      }),
    };

    mockSnackBar = {
      open: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [UserListComponent],
      providers: [
        { provide: UsersStore, useValue: mockStore },
        { provide: MatDialog, useValue: mockDialog },
        { provide: MatSnackBar, useValue: mockSnackBar },
      ],
    })
      .overrideComponent(UserListComponent, {
        remove: {
          providers: [UsersStore],
          imports: [UserCardComponent, UserFilterComponent],
        },
        add: {
          providers: [
            { provide: UsersStore, useValue: mockStore },
            { provide: MatSnackBar, useValue: mockSnackBar },
          ],
          imports: [MockUserCardComponent, MockUserFilterComponent],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and load users on init', () => {
    expect(component).toBeTruthy();
    expect(mockStore.loadUsers).toHaveBeenCalled();
  });

  it('should calculate getPages correctly', () => {
    mockStore.page.set({ totalPaginas: 3, itens: [], totalRegistros: 0, paginaAtual: 1 });
    expect(component.getPages()).toEqual([1, 2, 3]);
  });

  it('should open modal and handle create action', () => {
    component.openModal(null);
    expect(mockDialog.open).toHaveBeenCalledWith(UserModalComponent, expect.anything());
    expect(mockStore.createUser).toHaveBeenCalled();
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      'Usuário cadastrado com sucesso!',
      'OK',
      expect.anything(),
    );
  });

  it('should open modal and handle update action', () => {
    mockDialog.open.mockReturnValue({
      afterClosed: () => of({ action: 'update', data: mockUser }),
    });
    component.openModal(mockUser);
    expect(mockDialog.open).toHaveBeenCalledWith(UserModalComponent, expect.anything());
    expect(mockStore.updateUser).toHaveBeenCalled();
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      'Usuário atualizado com sucesso!',
      'OK',
      expect.anything(),
    );
  });

  it('should open delete confirm dialog and handle deletion', () => {
    mockDialog.open.mockReturnValueOnce({
      afterClosed: () => of(true), // Confirmed deletion
    });

    component.onDelete('1');

    expect(mockDialog.open).toHaveBeenCalledWith(ConfirmDialogComponent, expect.anything());
    expect(mockStore.deleteUser).toHaveBeenCalledWith('1');
    expect(mockSnackBar.open).toHaveBeenCalledWith(
      'Usuário excluído com sucesso!',
      'OK',
      expect.anything(),
    );
  });

  it('should show empty state if no users found', () => {
    mockStore.page.set({ itens: [], totalPaginas: 0, totalRegistros: 0, paginaAtual: 1 });
    fixture.detectChanges();
    const emptyState = fixture.nativeElement.querySelector('.empty-state');
    expect(emptyState).toBeTruthy();
  });
});
