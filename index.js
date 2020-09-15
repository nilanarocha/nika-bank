import { Cliente } from './Cliente.js';
import { ContaCorrente } from './Conta/ContaCorrente.js';
import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaSalario } from './Conta/ContaSalario.js';

const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrente = new ContaCorrente(cliente1, 1001);
// contaCorrente.depositar(500);
// contaCorrente.sacar(200);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

// contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);
