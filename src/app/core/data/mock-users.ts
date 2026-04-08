import { User } from '../../features/users/models/user.model';

/**
 * Mock data — simula dados de uma API REST.
 * Em produção, esses dados viriam do backend via HttpClient.
 */
export const MOCK_USERS: readonly User[] = [
  {
    id: '1',
    nome: 'Giana Sandrini',
    email: 'giana@attornatus.com.br',
    cpf: '529.982.247-25',
    telefone: '(11) 99876-5432',
    tipoTelefone: 'CELULAR',
  },
  {
    id: '2',
    nome: 'Carlos Eduardo Silva',
    email: 'carlos.silva@attornatus.com.br',
    cpf: '987.654.321-00',
    telefone: '(21) 98765-4321',
    tipoTelefone: 'CELULAR',
  },
  {
    id: '3',
    nome: 'Ana Paula Ferreira',
    email: 'ana.ferreira@attornatus.com.br',
    cpf: '123.456.789-09',
    telefone: '(31) 3456-7890',
    tipoTelefone: 'RESIDENCIAL',
  },
  {
    id: '4',
    nome: 'Roberto Almeida',
    email: 'roberto@attornatus.com.br',
    cpf: '456.789.123-45',
    telefone: '(41) 3567-8901',
    tipoTelefone: 'COMERCIAL',
  },
  {
    id: '5',
    nome: 'Mariana Costa',
    email: 'mariana.costa@attornatus.com.br',
    cpf: '321.654.987-12',
    telefone: '(51) 99654-3210',
    tipoTelefone: 'CELULAR',
  },
  {
    id: '6',
    nome: 'Felipe Oliveira',
    email: 'felipe.oliveira@attornatus.com.br',
    cpf: '654.321.987-34',
    telefone: '(61) 98543-2109',
    tipoTelefone: 'CELULAR',
  },
  {
    id: '7',
    nome: 'Juliana Santos',
    email: 'juliana.santos@attornatus.com.br',
    cpf: '789.123.456-56',
    telefone: '(71) 3432-1098',
    tipoTelefone: 'RESIDENCIAL',
  },
  {
    id: '8',
    nome: 'Pedro Henrique Lima',
    email: 'pedro.lima@attornatus.com.br',
    cpf: '147.258.369-78',
    telefone: '(81) 97321-0987',
    tipoTelefone: 'CELULAR',
  },
  {
    id: '9',
    nome: 'Beatriz Rodrigues',
    email: 'beatriz@attornatus.com.br',
    cpf: '258.369.147-90',
    telefone: '(91) 3210-9876',
    tipoTelefone: 'COMERCIAL',
  },
  {
    id: '10',
    nome: 'Lucas Martins',
    email: 'lucas.martins@attornatus.com.br',
    cpf: '369.147.258-01',
    telefone: '(11) 96109-8765',
    tipoTelefone: 'CELULAR',
  },
  {
    id: '11',
    nome: 'Camila Pereira',
    email: 'camila@attornatus.com.br',
    cpf: '741.852.963-23',
    telefone: '(21) 3098-7654',
    tipoTelefone: 'RESIDENCIAL',
  },
  {
    id: '12',
    nome: 'Thiago Nascimento',
    email: 'thiago@attornatus.com.br',
    cpf: '852.963.741-45',
    telefone: '(31) 95987-6543',
    tipoTelefone: 'CELULAR',
  },
];
