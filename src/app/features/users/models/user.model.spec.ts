import { User, CreateUserDTO, UpdateUserDTO, Pagina, PaginaParams } from './user.model';

describe('User Model', () => {
  it('should allow creating a valid User object', () => {
    const user: User = {
      id: '123',
      nome: 'Test Name',
      email: 'test@example.com',
      cpf: '11122233344',
      telefone: '11999998888',
      tipoTelefone: 'CELULAR',
    };

    expect(user.id).toBe('123');
    expect(user.tipoTelefone).toBe('CELULAR');
  });

  it('should allow creating a valid CreateUserDTO', () => {
    const createDto: CreateUserDTO = {
      nome: 'Test Create',
      email: 'create@example.com',
      cpf: '11122233344',
      telefone: '11999998888',
      tipoTelefone: 'RESIDENCIAL',
    };

    expect((createDto as Record<string, unknown>)['id']).toBeUndefined();
    expect(createDto.nome).toBe('Test Create');
  });

  it('should allow creating a valid UpdateUserDTO', () => {
    const updateDto: UpdateUserDTO = {
      id: 'abc',
      nome: 'Updated Name',
      tipoTelefone: 'COMERCIAL',
    };

    expect(updateDto.id).toBe('abc');
    expect(updateDto.nome).toBe('Updated Name');
    expect(updateDto.email).toBeUndefined();
  });

  it('should handle Pagina and PaginaParams interfaces', () => {
    const params: PaginaParams = {
      pagina: 2,
      tamanho: 10,
    };

    const user: User = {
      id: '1',
      nome: 'A',
      email: 'a@a.com',
      cpf: '123',
      telefone: '123',
      tipoTelefone: 'CELULAR',
    };

    const pagina: Pagina<User> = {
      itens: [user],
      totalRegistros: 1,
      paginaAtual: 1,
      totalPaginas: 1,
    };

    expect(params.pagina).toBe(2);
    expect(pagina.itens.length).toBe(1);
    expect(pagina.totalPaginas).toBe(1);
  });
});
