export async function fetchData() {
    const data = await fetch('https://api.origamid.dev/json/transacoes.json');
    return data.json();
}
//# sourceMappingURL=fetchData.js.map