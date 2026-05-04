export default class Estatisticas {
  transacoes;
  public total;
  public melhorDia;
  constructor(transacoes: Transacao[]) {
    this.transacoes = transacoes;
    this.total = this.setTotal();
    this.melhorDia = this.setMelhorDia()
  }

  private setTotal() {
    return this.transacoes.reduce((acc, valor) => {
      return (acc += valor.valor != null ? valor.valor : 0);
    }, 0);
  }

  public countyBy(prop: keyof Transacao, tipo: TransacaoPagamento | TransacaoStatus): number {
    const quantidade = this.transacoes.filter((item: Transacao) => {
      return item[prop] === tipo;
    }).length;

    return quantidade;
  }

  private setMelhorDia() {
    const semana = {
      ["Domingo"]: 0,
      ["Segunda"]: 0,
      ["Terça"]: 0,
      ["Quarta"]: 0,
      ["Quinta"]: 0,
      ["Sexta"]: 0,
      ["Sábado"]: 0
    }

    let diaMaisVendas = 0
    
    this.transacoes.map(({data}) => {
      const dia = data.getDay()
      if(dia === 0) {
        semana["Domingo"]++
      } else if(dia === 1) {
        semana["Segunda"]++
      } else if(dia === 2) {
        semana["Terça"]++
      } else if(dia === 3) {
        semana["Quarta"]++
      } else if(dia === 4) {
        semana["Quinta"]++
      } else if(dia === 5) {
        semana["Sexta"]++
      } else if(dia === 6) {
        semana["Sábado"]++
      }
    })
    
    for(const diaSemana in semana) {
      const dia = diaSemana as keyof typeof semana 

      if(semana[dia] > diaMaisVendas) {
        diaMaisVendas = semana[dia]
      }
    }
    
    const encontrarMelhorDia = Object.keys(semana).find(diaSemana => {
      const dia = diaSemana as keyof typeof semana

      return semana[dia] === diaMaisVendas
    })

    return encontrarMelhorDia
  }
}
