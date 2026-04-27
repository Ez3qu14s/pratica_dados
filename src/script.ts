import fetchData from "./fetchData.js";
import normalizarTransacao from "./normalizarTransacao.js";
import preencherEstatisticas from "./preencherEstatisticas.js";
import preencherTabela from "./preencherTabela.js";

async function handleData() {
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );

  if (!data) {
    return;
  }

  const transacoes = data.map(normalizarTransacao);
  preencherTabela(transacoes)
  preencherEstatisticas(transacoes)
}

handleData();
