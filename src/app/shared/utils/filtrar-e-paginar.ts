import { Pagina, PaginaParams } from '../../features/users/models/user.model';

/**
 * Função genérica filtrarEPaginar<T>
 * Aplica filtro e paginação sobre um array genérico.
 * Princípios: SRP, tipagem completa, imutabilidade, função pura.
 */
export function filtrarEPaginar<T>(
  data: readonly T[],
  filterFn: (item: T) => boolean,
  params: PaginaParams,
): Pagina<T> {
  const filtered = data.filter(filterFn);
  const totalRegistros = filtered.length;
  const totalPaginas = Math.max(1, Math.ceil(totalRegistros / params.tamanho));
  const paginaAtual = Math.min(Math.max(1, params.pagina), totalPaginas);
  const inicio = (paginaAtual - 1) * params.tamanho;
  const itens = filtered.slice(inicio, inicio + params.tamanho);

  return Object.freeze({ itens, totalRegistros, paginaAtual, totalPaginas });
}
