import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo', 11122233309);

const contaCorrente1 = new ContaCorrente(1001, cliente1);
contaCorrente1.depositar(500);
contaCorrente1.sacar(500);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrente1);
