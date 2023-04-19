const con = require('../dao/connect.js');
const Produto = require('../models/produtos.models.js');

const listar = (req, res) => {
    let produto = new Produto(req.params);
    con.query(produto.read(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json({'error': err}).status(400).end();
        }
    });
}

const cadastrar = (req, res) => {
    let produto = new Produto(req.body)
    con.query(produto.create(), (err, result) => {
        if(err == null) {
            res.json({'msg': "Produto cadastrado com sucesso"}).status(200).end();
        } else {
            res.json({'msg': 'Não foi possível cadastrar o produto: ' + err}).status(400).end();
        }
    });
}

const alterar = (req, res) => {
    let produto = new Produto(req.body);
    con.query(produto.update(), (err, resp) => {
        if(err == null) {
            res.json({Msg: "Produto alterado com sucesso"}).status(200).end();
        } else {
            res.json({'msg': 'Não foi possível alterar o produto: ' + err}).status(400).end();
        }
    })
}

const excluir = (req, res) => {
    let produto = new Produto(req.params);
    con.query(produto.delete(), (err, resp) => {
        if(err == null) {
            res.json({msg: "Produto excluído com sucesso"}).status(200).end();
        } else {
            res.json({msg: "Não foi possível excluir o produto: " + err}).status(400).end();
        }
    })
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    excluir
}