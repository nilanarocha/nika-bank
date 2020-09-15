// classe abstrata(nunca pode ser instanciada e sim herdada`)

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error(
        'voce nao deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata'
      );
    }
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  set cliente(novoValorDeCliente) {
    if (novoValorDeCliente instanceof Cliente) {
      this._cliente = novoValorDeCliente;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }
  //  metodo abstrato
  sacar(valor) {
    throw new Error('Esse Metodo é abstrato');
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
