export default class Estatisticas {
    transacoes;
    constructor(transacoes) {
        this.transacoes = transacoes;
    }
    total() {
        return this.transacoes.reduce((total, valor) => {
            return total += valor.valor != null ? valor.valor : 0;
        }, 0);
    }
}
//# sourceMappingURL=EstatisticasTotais.js.map