api.get("/vendedores")
.then(resp => {
    console.log(resp.data);
    formatarTabela(resp.data);
})
.catch(err => {
    console.log(err);
});

var modal = document.querySelector('.modal');
var tbody = document.querySelector('tbody');
var inpNome = document.querySelector('#nome');
var inpMatricula = document.querySelector('#matricula');
var cover = document.querySelector('#cover');
var table = document.querySelector('table');
var btnFechar = document.querySelector('#btnFechar');
var btnAlterar = document.querySelector('#btnAlterar');
var inpID = document.querySelector('#inpID');

function formatarTabela(data) {
    data.forEach(element => {
    var linha = document.createElement('tr');
    linha.innerHTML = `
    <td>${element.id}</td>
    <td>${element.nome}</td>
    <td>${element.matricula}</td>
    <td>
    <img src="https://cdn-icons-png.flaticon.com/512/5278/5278663.png" onclick='showInfo(${element.id}, "${element.nome}" ,${element.matricula})'>
    </td>
    `
    tbody.appendChild(linha);
})
}

function showInfo(id, nome, matricula) {
    modal.classList.toggle('hidden');
    inpID.value = id;
    inpID.textContent = `ID: ${id}`;
    inpNome.value = nome;
    inpMatricula.value = matricula;
    cover.classList.toggle('hidden');
    table.classList.toggle('hidden');
}

btnFechar.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    cover.classList.toggle('hidden');
    table.classList.toggle('hidden');
});

btnAlterar.addEventListener('click', () => {
    if(inpNome.value.length == 0 || inpMatricula.value.length == 0) {
        alert('As informações não podem ficar vazias')
    } else {
        let body = {
            nome: inpNome.value,
            matricula: inpMatricula.value,
            id: inpID.value
        }
        let info = {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:3000/vendedores/alterar', info)
        .then(response => {return response.json()})
        .then(data => {
            if(data.affectedRows != 0) {
                location.reload();
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
});

