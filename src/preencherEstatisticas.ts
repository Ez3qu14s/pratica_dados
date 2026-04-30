import Estatisticas from "./EstatisticasTotais.js";

export default function preencherEstatisticas(transacoes: Transacao[]): void {
  const estatisticas = new Estatisticas(transacoes);
  const totalElement = document.querySelector("p span#valor_total");

  if (totalElement instanceof HTMLElement) {
    totalElement.textContent = estatisticas.total.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  console.log(estatisticas.countyBy("status", "Paga"));
}
