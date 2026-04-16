export default function stringParaData(dataString) {
    const dataTime = dataString.split(' ');
    const [dia, mes, ano] = dataTime[0].split('/');
    const data = new Date(ano, mes - 1, dia);
    console.log(data.getDate());
}
//# sourceMappingURL=stringParaData.js.map