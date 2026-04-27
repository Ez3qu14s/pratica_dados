import Estatisticas from "./EstatisticasTotais.js";
export default function preencherEstatisticas(transacoes) {
    const estatisticas = new Estatisticas(transacoes);
    console.log(estatisticas.total());
}
//# sourceMappingURL=preencherEstatisticas.js.map