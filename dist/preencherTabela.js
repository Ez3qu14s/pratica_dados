function preencherTabela(transacoes) {
    const tableTBody = document.querySelector('table tbody');
    if (!tableTBody)
        return;
    transacoes.forEach(item => {
        tableTBody.innerHTML += `
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>R$ ${item.moeda}</td>
      <td>${item.pagamento}</td>
      <td>${item.status}</td>
    `;
    });
}
export default preencherTabela;
//# sourceMappingURL=preencherTabela.js.map