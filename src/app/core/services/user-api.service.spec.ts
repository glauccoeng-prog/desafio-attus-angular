import { UserApiService } from './user-api.service';
import { firstValueFrom } from 'rxjs';
import { CreateUserDTO } from '../../features/users/models/user.model';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    service = new UserApiService();
  });

  describe('getAll', () => {
    it('should return all users', async () => {
      const users = await firstValueFrom(service.getAll());
      expect(users.length).toBeGreaterThan(0);
      expect(users[0]).toHaveProperty('id');
      expect(users[0]).toHaveProperty('nome');
      expect(users[0]).toHaveProperty('email');
    });
  });

  describe('getById', () => {
    it('should return user by id', async () => {
      const user = await firstValueFrom(service.getById('1'));
      expect(user).toBeDefined();
      expect(user!.id).toBe('1');
    });

    it('should return undefined for non-existent id', async () => {
      const user = await firstValueFrom(service.getById('999'));
      expect(user).toBeUndefined();
    });
  });

  describe('search', () => {
    it('should filter users by name', async () => {
      const users = await firstValueFrom(service.search('Giana'));
      expect(users.length).toBe(1);
      expect(users[0].nome).toContain('Giana');
    });

    it('should filter users by email', async () => {
      const users = await firstValueFrom(service.search('carlos.silva'));
      expect(users.length).toBe(1);
    });

    it('should return empty for no match', async () => {
      const users = await firstValueFrom(service.search('xyz-nonexistent'));
      expect(users.length).toBe(0);
    });

    it('should be case insensitive', async () => {
      const users = await firstValueFrom(service.search('GIANA'));
      expect(users.length).toBe(1);
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const dto: CreateUserDTO = {
        nome: 'Novo Usuário',
        email: 'novo@email.com',
        cpf: '123.456.789-00',
        telefone: '(11) 99999-9999',
        tipoTelefone: 'CELULAR',
      };
      const user = await firstValueFrom(service.create(dto));

      expect(user.nome).toBe('Novo Usuário');
      expect(user.id).toBeDefined();
      expect(user.id.length).toBeGreaterThan(0);

      // Verify it was added
      const all = await firstValueFrom(service.getAll());
      expect(all.some((u) => u.email === 'novo@email.com')).toBe(true);
    });
  });

  describe('update', () => {
    it('should update an existing user', async () => {
      const updated = await firstValueFrom(service.update({ id: '1', nome: 'Nome Atualizado' }));
      expect(updated.nome).toBe('Nome Atualizado');
      expect(updated.id).toBe('1');
    });

    it('should throw error for non-existent user', async () => {
      await expect(firstValueFrom(service.update({ id: '999', nome: 'Test' }))).rejects.toThrow(
        'Usuário não encontrado.',
      );
    });
  });

  describe('delete', () => {
    it('should delete user', async () => {
      const beforeAll = await firstValueFrom(service.getAll());
      const initialCount = beforeAll.length;

      await firstValueFrom(service.delete('1'));

      const afterAll = await firstValueFrom(service.getAll());
      expect(afterAll.length).toBe(initialCount - 1);
      expect(afterAll.some((u) => u.id === '1')).toBe(false);
    });
  });
});
