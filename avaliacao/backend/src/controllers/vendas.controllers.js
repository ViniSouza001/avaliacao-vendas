const con = require('../dao/connect');
const Venda = require('../models/vendas.models.js');

const listar = (req, res) => {
    let venda = new Venda(req.params);
    con.query(venda.read(), (err, resp) => {
        if (err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

const cadastrar = (req, res) => {
    let venda = new Venda(req.body);
    con.query(venda.create(), (err, resp) => {
        if (err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

const alterar = (req, res) => {
    let venda = new Venda(req.body);
    con.query(venda.update(), (err, resp) => {
        if (err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

const deletar = (req, res) => {
    let venda = new Venda(req.params);
    con.query(venda.delete(), (err, resp) => {
        if (err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listar,
    cadastrar,
    alterar,
    deletar
}