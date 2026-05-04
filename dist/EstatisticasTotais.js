export default class Estatisticas {
    transacoes;
    total;
    melhorDia;
    constructor(transacoes) {
        this.transacoes = transacoes;
        this.total = this.setTotal();
        this.melhorDia = this.setMelhorDia();
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
    setMelhorDia() {
        const semana = {
            ["Domingo"]: 0,
            ["Segunda"]: 0,
            ["Terça"]: 0,
            ["Quarta"]: 0,
            ["Quinta"]: 0,
            ["Sexta"]: 0,
            ["Sábado"]: 0
        };
        let diaMaisVendas = 0;
        this.transacoes.map(({ data }) => {
            const dia = data.getDay();
            if (dia === 0) {
                semana["Domingo"]++;
            }
            else if (dia === 1) {
                semana["Segunda"]++;
            }
            else if (dia === 2) {
                semana["Terça"]++;
            }
            else if (dia === 3) {
                semana["Quarta"]++;
            }
            else if (dia === 4) {
                semana["Quinta"]++;
            }
            else if (dia === 5) {
                semana["Sexta"]++;
            }
            else if (dia === 6) {
                semana["Sábado"]++;
            }
        });
        for (const diaSemana in semana) {
            const dia = diaSemana;
            if (semana[dia] > diaMaisVendas) {
                diaMaisVendas = semana[dia];
            }
        }
        const encontrarMelhorDia = Object.keys(semana).find(diaSemana => {
            const dia = diaSemana;
            return semana[dia] === diaMaisVendas;
        });
        return encontrarMelhorDia;
    }
}
//# sourceMappingURL=EstatisticasTotais.js.map