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
}
//# sourceMappingURL=EstatisticasTotais.js.map