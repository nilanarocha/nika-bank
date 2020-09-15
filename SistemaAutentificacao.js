export class SistemaAutentificacao {
  static login(funcionario, senha) {
    return funcionario.senha == senha;
  }
}
