import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = 'Alice';
cliente2.cpf = 88822233309;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;
conta1.depositar(500);

const conta2 = new ContaCorrente();
conta2.agencia = 102;
conta2.cliente = cliente2;

let valor = 200;
conta1.transferir(valor, conta2);

console.log(conta2.cliente, conta2.saldo);
