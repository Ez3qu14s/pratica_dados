function preencherTabela(transacoes: Transacao[]): void {
  const tableTBody = document.querySelector('table tbody')
  console.log(transacoes);
  

  if(!tableTBody) return

  transacoes.forEach(item => {
    tableTBody.innerHTML += `
      <td>${item.nome}</td>
      <td>${item.email}</td>
      <td>R$ ${item.moeda}</td>
      <td>${item.pagamento}</td>
      <td>${item.status}</td>
    `
  })
}

export default preencherTabela