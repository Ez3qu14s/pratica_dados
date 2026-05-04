import Estatisticas from "./EstatisticasTotais.js";
export default function preencherEstatisticas(transacoes) {
    const estatisticas = new Estatisticas(transacoes);
    const totalElement = document.querySelector("p#valor_total span");
    const pagamentoElement = document.querySelector('#pagamento');
    const statusElement = document.querySelector('#status');
    if (totalElement instanceof HTMLElement) {
        totalElement.textContent = estatisticas.total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    }
    pagamentoElement.innerHTML = `
    <p>Cartão de crédito: <span>${estatisticas.countyBy('pagamento', 'Cartão de Crédito')}</span></p>
    <p>Boleto: <span>${estatisticas.countyBy('pagamento', 'Boleto')}</span></p>
  `;
    statusElement.innerHTML = `
    <p>Paga: <span>${estatisticas.countyBy('status', 'Paga')}</span></p>
    <p>Recusada pela operadora de cartão: <span>${estatisticas.countyBy('status', 'Recusada pela operadora de cartão')}</span></p>
    <p>Aguardando Pagamento: <span>${estatisticas.countyBy('status', 'Aguardando pagamento')}</span></p>
    <p>Estornada: <span>${estatisticas.countyBy('status', 'Estornada')}</span></p>
    <p>Dia com mais venda: <span></span></p>
  `;
}
//# sourceMappingURL=preencherEstatisticas.js.map