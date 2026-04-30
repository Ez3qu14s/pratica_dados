export default class Estatisticas {
    transacoes;
    total;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
    }
    setTotal() {
        return this.transacoes.reduce((acc, valor) => {
            return (acc += valor.valor != null ? valor.valor : 0);
        }, 0);
    }
    countyBy(prop, tipo) {
        const quantidade = this.transacoes.filter((item) => {
            return item[prop] === tipo;
        }).length;
        return quantidade;
    }
}
//# sourceMappingURL=EstatisticasTotais.js.map