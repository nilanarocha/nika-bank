import { Cliente } from './Cliente.js';

export class ContaCorrente {
  static numeroDeContas = 0;

  set cliente(novoValorDeCliente) {
    if (novoValorDeCliente instanceof Cliente) {
      this._cliente = novoValorDeCliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this._cliente = cliente;
    this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }
  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
