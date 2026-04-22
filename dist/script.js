import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
import preencherTabela from "./preencherTabela.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (!data) {
        return;
    }
    const transacoes = data.map(normalizarTransacao);
    preencherTabela(transacoes);
}
handleData();
//# sourceMappingURL=script.js.map