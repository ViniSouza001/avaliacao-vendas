const con = require('../dao/connect')
const View = require('../models/views.models');

const comissao = (req, res) => {
    let query = 'SELECT * FROM vw_comissao';
    con.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    });
}

const total_vendas = (req, res) => {
    let query = 'SELECT * FROM vendas_total';
    con.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
}

const vendas_detalhadas = (req, res) => {
    let query = 'SELECT * FROM vendas_detalhadas';
    con.query(query, (err, result) => {
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