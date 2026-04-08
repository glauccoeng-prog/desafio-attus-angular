/**
 * Domain Entity — User
 * Tipagem forte, readonly, zero any.
 */
export interface User {
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly cpf: string;
  readonly telefone: string;
  readonly tipoTelefone: TipoTelefone;
}

export type TipoTelefone = 'CELULAR' | 'RESIDENCIAL' | 'COMERCIAL';

export type CreateUserDTO = Omit<User, 'id'>;
export type UpdateUserDTO = Partial<CreateUserDTO> & { readonly id: string };

/**
 * Parâmetros de paginação — Generics (Etapa 1.2)
 */
export interface PaginaParams {
  readonly pagina: number;
  readonly tamanho: number;
}

export interface Pagina<T> {
  readonly itens: readonly T[];
  readonly totalRegistros: number;
  readonly paginaAtual: number;
  readonly totalPaginas: number;
}
