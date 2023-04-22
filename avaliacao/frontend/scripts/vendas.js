var tbody = document.querySelector('tbody');
var tabela = document.querySelector('table');
var inpData = document.querySelector('#data');
var inpQtd = document.querySelector('#qtd');
var inpVendedor = document.querySelector('#vendedor');
var inpProduto = document.querySelector('#produto');
var modal = document.querySelector('.modal');
var cover = document.querySelector('#cover');
const btnAlterar = document.querySelector('#btnAlterar');
var vendedorIdGlobal;
var produtoIdGlobal;
var idVenda;

api.get('/vendas-detalhadas')
.then(resp => {
    formatarTabela(resp.data);
})
.catch(err => {
    console.log(err);
});

function formatarTabela(data) {
    data.forEach(element => {
        let linha = document.createElement('tr');
        let data = transformaData(element.data);
        linha.innerHTML = `
        <td>${data}</td>
        <td>${element.quantidade}</td>
        <td>${element.vendedor}</td>
        <td>${element.produto}</td>
        <td><img src="https://static.thenounproject.com/png/1266892-200.png" onclick="alterarInformacoes(${element.id}, '${data}',${element.quantidade}, ${element.produto_id}, '${element.produto}', '${element.vendedor}', ${element.vendedor_id})" /></td>
        `
        tbody.appendChild(linha);
    })
}

function transformaData(data) {
  const opcoes = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const dataFormatada = new Date(data).toLocaleDateString('pt-BR', opcoes);
  return dataFormatada;
}

function converterDataParaISO(dataBrasileira) {
  const elementosData = dataBrasileira.split('/'); // separa os elementos usando o hífen como separador
  const dia = elementosData[0];
  const mes = elementosData[1];
  const ano = elementosData[2];
  
  const dataISO = `${ano}-${mes}-${dia}`; // reordena os elementos no formato ISO

  return dataISO;
}

function alterarInformacoes(id, data, quantidade, produto_id, produto, vendedor, vendedor_id) {
    inpData.value = converterDataParaISO(data);
    inpQtd.value = quantidade;
    inpVendedor.value = vendedor;
    inpProduto.value = produto; // 
    produtoIdGlobal = produto_id;
    idVenda = id; // id da venda
    modal.classList.toggle('hidden');
    cover.classList.toggle('hidden');
    tabela.classList.toggle('hidden');
    vendedorIdGlobal = vendedor_id;
}

function fechar() {
    modal.classList.toggle('hidden');
    cover.classList.toggle('hidden');
    tabela.classList.toggle('hidden');
}

btnAlterar.addEventListener('click', () => {
    let body = {
        'data': inpData.value,
        'quantidade': inpQtd.value,
        'produtoId': produtoIdGlobal,
        'vendedorId': vendedorIdGlobal,
        'id': idVenda
    };

    let load = {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }

    fetch('http://localhost:3000/vendas/alterar', load)
    .then(response => {return response.json()})
    .then(data => {
        if(data.affectedRows != 0) {
            location.reload();
        }
    })
    .catch(err => {
        console.log(err);
        alert("Oops! Something went wrong");
    })
})