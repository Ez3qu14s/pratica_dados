import Estatisticas from "./EstatisticasTotais.js";

export default function preencherEstatisticas(transacoes: Transacao[]): void {
  const estatisticas = new Estatisticas(transacoes)
  
  console.log(estatisticas.total());
  
}