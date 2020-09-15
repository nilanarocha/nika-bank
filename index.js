// import { Cliente } from './Cliente.js';
// import { ContaCorrente } from './Conta/ContaCorrente.js';
// import { ContaPoupanca } from './Conta/ContaPoupanca.js';
// import { ContaSalario } from './Conta/ContaSalario.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
// import { Funcionario } from './Funcionarios/Funcionario.js';
import { SistemaAutentificacao } from './SistemaAutentificacao.js';

// const cliente1 = new Cliente('Ricardo', 11122233309);
// const contaCorrente = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

const gerente = new Gerente('Rodrigo', 10000, 12345678900);
gerente.cadastrarSenha('123');

const diretor = new Diretor('Ricardo', 5000, 23456789100);
diretor.cadastrarSenha('123456');

//polymorphism
const estaLogado = SistemaAutentificacao.login(gerente, '123');

console.log(estaLogado);
