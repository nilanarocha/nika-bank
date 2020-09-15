// Ser autenticavel significa ter o método "autenticar" ;

export class SistemaAutentificacao {
  static login(autenticavel, senha) {
    if (SistemaAutentificacao.eAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }
  // chaves e valores
  static eAutenticavel(autenticavel) {
    return (
      'autenticar' in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
