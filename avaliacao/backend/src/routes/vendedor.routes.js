const router = require('express').Router();
const Vendedor = require('../controllers/vendedor.controllers');

router.get('/vendedores', Vendedor.listar);
router.get('/vendedores/:id', Vendedor.listar);
router.post('/vendedores/criar', Vendedor.criar);
router.put('/vendedores/alterar', Vendedor.alterar);
router.delete('/vendedores/deletar/:id', Vendedor.deletar);

module.exports = router;