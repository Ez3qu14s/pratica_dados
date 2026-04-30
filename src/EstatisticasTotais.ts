export default class Estatisticas {
  transacoes;
  public total;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
  }

  private setTotal() {
    return this.transacoes.reduce((acc, valor) => {
      return (acc += valor.valor != null ? valor.valor : 0);
    }, 0);
  }

  public countyBy(prop: keyof Transacao, tipo: string): number {
    const quantidade = this.transacoes.filter((item: Transacao) => {
      return item[prop] === tipo;
    }).length;

    return quantidade;
  }
}
