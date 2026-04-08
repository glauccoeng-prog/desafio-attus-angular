import { TestBed } from '@angular/core/testing';
import { vi, Mocked } from 'vitest';
import { UsersStore } from './users.store';
import { UserApiService } from '../../../core/services/user-api.service';
import { of, throwError } from 'rxjs';
import { CreateUserDTO, UpdateUserDTO, User } from '../models/user.model';

describe('UsersStore', () => {
  let store: UsersStore;
  let apiSpy: Mocked<UserApiService>;

  const mockUsers: User[] = [
    {
      id: '1',
      nome: 'John Doe',
      email: 'john@example.com',
      cpf: '111',
      telefone: '111',
      tipoTelefone: 'CELULAR',
    },
  ];

  beforeEach(() => {
    apiSpy = {
      getAll: vi.fn(),
      search: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    } as unknown as Mocked<UserApiService>;

    apiSpy.getAll.mockReturnValue(of(mockUsers));

    TestBed.configureTestingModule({
      providers: [UsersStore, { provide: UserApiService, useValue: apiSpy }],
    });

    store = TestBed.inject(UsersStore);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should be created and have initial state', () => {
    expect(store).toBeTruthy();
    expect(store.users()).toEqual([]);
    expect(store.loading()).toBe(false);
    expect(store.error()).toBeNull();
    expect(store.searchTerm()).toBe('');
    expect(store.currentPage()).toBe(1);
  });

  it('should load users', () => {
    store.loadUsers();
    expect(store.loading()).toBe(false);
    expect(store.users()).toEqual(mockUsers);
    expect(store.error()).toBeNull();
  });

  it('should handle error when loading users', () => {
    apiSpy.getAll.mockReturnValue(throwError(() => new Error('API Error')));
    store.loadUsers();

    expect(store.users()).toEqual([]);
    expect(store.error()).toBe('API Error');
  });

  it('should set search term and trigger search stream', () => {
    vi.useFakeTimers();
    apiSpy.search.mockReturnValue(of([{ ...mockUsers[0], nome: 'Jane Doe' }]));

    store.setSearchTerm('Jane');

    // Fast forward debounceTime
    vi.advanceTimersByTime(300);

    expect(store.searchTerm()).toBe('Jane');
    expect(apiSpy.search).toHaveBeenCalledWith('Jane');
    expect(store.users()[0].nome).toBe('Jane Doe');
    expect(store.currentPage()).toBe(1);

    vi.useRealTimers();
  });

  it('should create user', () => {
    const newUser: CreateUserDTO = {
      nome: 'New User',
      email: 'n@u.com',
      cpf: '22',
      telefone: '2',
      tipoTelefone: 'CELULAR',
    };
    apiSpy.create.mockReturnValue(of({ ...newUser, id: '2' }));
    apiSpy.getAll.mockReturnValue(of([...mockUsers, { ...newUser, id: '2' }]));

    store.createUser(newUser);

    expect(apiSpy.create).toHaveBeenCalledWith(newUser);
    expect(store.users().length).toBe(2);
  });

  it('should update user', () => {
    const updateUser: UpdateUserDTO = { id: '1', nome: 'Updated' };
    apiSpy.update.mockReturnValue(of({ ...mockUsers[0], ...updateUser }));
    apiSpy.getAll.mockReturnValue(of([{ ...mockUsers[0], ...updateUser }]));

    store.updateUser(updateUser);

    expect(apiSpy.update).toHaveBeenCalledWith(updateUser);
    expect(store.users()[0].nome).toBe('Updated');
  });

  it('should delete user', () => {
    apiSpy.delete.mockReturnValue(of(undefined));
    apiSpy.getAll.mockReturnValue(of([]));

    store.deleteUser('1');

    expect(apiSpy.delete).toHaveBeenCalledWith('1');
    expect(store.users().length).toBe(0);
  });

  it('should compute paginated view properly', () => {
    // Generate 6 users
    store.loadUsers(); // load the initial 1
    const manyUsers = Array.from({ length: 6 }, (_, i) => ({ ...mockUsers[0], id: `${i + 1}` }));
    apiSpy.getAll.mockReturnValue(of(manyUsers));
    store.loadUsers();

    // Default pagesize is 5, page 1.
    expect(store.page().itens.length).toBe(5);
    expect(store.page().totalRegistros).toBe(6);
    expect(store.page().totalPaginas).toBe(2);

    // change page
    store.setCurrentPage(2);
    expect(store.currentPage()).toBe(2);
    expect(store.page().itens.length).toBe(1);
  });
});
