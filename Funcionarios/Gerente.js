import { Funcionario } from './Funcionario.js';

export class Gerent extends Funcionario {
  constructor(nome, salario, cpf) {
    super(nome, salario, cpf);

    this._bonificacao = 1;
  }
}
