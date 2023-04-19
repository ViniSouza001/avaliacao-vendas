const con = require('../dao/connect')
const View = require('../models/views.models');

const comissao = (req, res) => {
    let view = new View();
    con.query(view.vw_comissao, (req, res) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

const total_vendas = (req, res) => {
    let view = new View();
    con.query(view.total_vendas, (req, res) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

const vendas_detalhadas = (req, res) => {
    let view = new View();
    con.query(view.vendas_detalhadas, (req, res) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

module.exports = {
    comissao,
    total_vendas,
    vendas_detalhadas
}