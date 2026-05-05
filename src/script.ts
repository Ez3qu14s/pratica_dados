import fetchData from "./fetchData.js";

type transacaoPagamento = "Boleto" | "Cartão de Crédito"
type transacaoStatus = "Paga" | "Recusada pela operadora de cartão" | "Aguardando pagamento" | "Estornada"
interface TransacaoAPI {
  Nome: string,
  ID: number,
  Data: string,
  Status: transacaoStatus,
  Email: string,
  ['Valor (R$)']: string,
  ['Forma de Pagamento']: transacaoPagamento,
  ['Cliente Novo']: number,
}

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>('https://api.origamid.dev/json/transacoes.json')

  if(data) {
    data.forEach(item => {
      console.log(item);
    })
  }
  
}

handleData()