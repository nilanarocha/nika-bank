import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const cliente1 = new Cliente('Ricardo', 11122233309, 465);

const gerente = new Gerente('Rodrigo', 10000, 12345678900);
gerente.cadastrarSenha('123');

const diretor = new Diretor('Rodolfo', 5000, 23456789100);
diretor.cadastrarSenha('123456');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const cliente1EstaLogado = SistemaAutenticacao.login(cliente1, '456');

console.log(gerenteEstaLogado, diretorEstaLogado, cliente1EstaLogado);
