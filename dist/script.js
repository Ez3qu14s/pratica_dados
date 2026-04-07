import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData('https://api.origamid.dev/json/transacoes.json');
    if (data) {
        data.forEach(element => {
            console.log(element);
        });
    }
    console.log('codigo continuou');
}
handleData();
//# sourceMappingURL=script.js.map