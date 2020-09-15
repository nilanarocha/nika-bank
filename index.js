// import { Cliente } from './Cliente.js';
// import { ContaCorrente } from './Conta/ContaCorrente.js';
// import { ContaPoupanca } from './Conta/ContaPoupanca.js';
// import { ContaSalario } from './Conta/ContaSalario.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';

// const cliente1 = new Cliente('Ricardo', 11122233309);
// const contaCorrente = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

const gerente = new Gerente('Rodrigo', 10000, 12345678900);
const diretor = new Diretor('Ricardo', 5000, 23456789100);

sistemaAutentificacao.login(diretor, 8888888);
