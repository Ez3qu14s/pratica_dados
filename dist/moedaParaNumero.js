export default function moedaParaNumero(num) {
    const spliceNum = num.split(',')[0].replace('.', '');
    const conversao = Number(spliceNum);
    if (num === "-") {
        return null;
    }
    return conversao;
}
//# sourceMappingURL=moedaParaNumero.js.map