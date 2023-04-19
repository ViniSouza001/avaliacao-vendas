const con = require('../dao/connect.js');
const Vendedor = require('../models/vendedor.models.js');

const listar = (req, res) => {
    let vendedor = new Vendedor(req.params);
    con.query(vendedor.read(), (err, resp) => {
        if(err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json({'error': err}).status(400).end();
        }
    });
};

const criar = (req, res) => {
    const vendedor = new Vendedor(req.body);
    con.query(vendedor.create(), (err, resp) => {
        if(err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json({'error': err}).status(400).end();
        }
    });
};

const alterar = (req, res) => {
    const vendedor = new Vendedor(req.body);
    con.query(vendedor.update(), (err, resp) => {
        if(err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json({'error': err}).status(400).end();
        }
    });
};

const deletar = (req, res) => {
    const vendedor = new Vendedor(req.params);
    con.query(vendedor.delete(), (err, resp) => {
        if(err == null) {
            res.json(resp).status(200).end();
        } else {
            res.json({'error': err}).status(400).end();
        }
    });
};

module.exports = {
    listar,
    alterar,
    deletar,
    criar
}