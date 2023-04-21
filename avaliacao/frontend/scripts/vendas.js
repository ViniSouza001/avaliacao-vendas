let tbody = document.querySelector('tbody');


api.get('/vendas-detalhadas')
.then(resp => {
    console.log(resp.data);
    formatarTabela(resp.data);
})
.catch(err => {
    console.log(err);
});

function formatarTabela(data) {
    data.forEach(element => {
        let linha = document.createElement('tr');
        linha.innerHTML = `
        <td>${transformaData(element.data)}</td>
        <td>${element.quantidade}</td>
        <td>${element.produto}</td>
        <td>${element.vendedor}</td>
        <td><img src="https://cdn-icons-png.flaticon.com/512/5278/5278663.png" onclick="alterarInformacoes(${element.quantidade}, '${element.produto}', '${element.vendedor}')" /></td>
        `
        tbody.appendChild(linha);
    })
}

function transformaData(data) {
  const opcoes = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR', opcoes);
  return dataFormatada;
}
 
function alterarInformacoes(quantidade, produto, vendedor) {
    console.log(quantidade);
    console.log(produto);
    console.log(vendedor);
}