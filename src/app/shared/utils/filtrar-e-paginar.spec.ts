import { filtrarEPaginar } from './filtrar-e-paginar';

interface TestItem {
  readonly id: number;
  readonly nome: string;
}

const TEST_DATA: readonly TestItem[] = [
  { id: 1, nome: 'João Silva' },
  { id: 2, nome: 'Maria Santos' },
  { id: 3, nome: 'Carlos Oliveira' },
  { id: 4, nome: 'Ana Costa' },
  { id: 5, nome: 'Pedro Lima' },
  { id: 6, nome: 'Juliana Ferreira' },
];

describe('filtrarEPaginar', () => {
  it('should return first page with correct items', () => {
    const result = filtrarEPaginar(TEST_DATA, () => true, { pagina: 1, tamanho: 3 });

    expect(result.itens).toHaveLength(3);
    expect(result.itens[0].nome).toBe('João Silva');
    expect(result.paginaAtual).toBe(1);
    expect(result.totalPaginas).toBe(2);
    expect(result.totalRegistros).toBe(6);
  });

  it('should return second page', () => {
    const result = filtrarEPaginar(TEST_DATA, () => true, { pagina: 2, tamanho: 3 });

    expect(result.itens).toHaveLength(3);
    expect(result.itens[0].nome).toBe('Ana Costa');
    expect(result.paginaAtual).toBe(2);
  });

  it('should filter items by name', () => {
    const result = filtrarEPaginar(TEST_DATA, (item) => item.nome.toLowerCase().includes('a'), {
      pagina: 1,
      tamanho: 10,
    });

    expect(result.totalRegistros).toBe(6);
    expect(result.itens.every((i) => i.nome.toLowerCase().includes('a'))).toBe(true);
  });

  it('should handle empty array', () => {
    const result = filtrarEPaginar([], () => true, { pagina: 1, tamanho: 5 });

    expect(result.itens).toHaveLength(0);
    expect(result.totalRegistros).toBe(0);
    expect(result.totalPaginas).toBe(1);
    expect(result.paginaAtual).toBe(1);
  });

  it('should clamp page to valid range', () => {
    const result = filtrarEPaginar(TEST_DATA, () => true, { pagina: 999, tamanho: 3 });

    expect(result.paginaAtual).toBe(2);
  });

  it('should clamp page to minimum 1', () => {
    const result = filtrarEPaginar(TEST_DATA, () => true, { pagina: 0, tamanho: 3 });

    expect(result.paginaAtual).toBe(1);
  });

  it('should return frozen object', () => {
    const result = filtrarEPaginar(TEST_DATA, () => true, { pagina: 1, tamanho: 3 });

    expect(Object.isFrozen(result)).toBe(true);
  });

  it('should handle filter that matches nothing', () => {
    const result = filtrarEPaginar(TEST_DATA, () => false, { pagina: 1, tamanho: 5 });

    expect(result.itens).toHaveLength(0);
    expect(result.totalRegistros).toBe(0);
  });
});
