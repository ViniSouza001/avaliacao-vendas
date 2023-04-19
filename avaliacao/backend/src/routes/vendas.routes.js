const router = require('express').Router();
const Venda = require('../controllers/vendas.controllers');

router.get('/vendas', Venda.listar);
router.get('/vendas/:id', Venda.listar);
router.post('/vendas/criar', Venda.cadastrar);
router.put('/vendas/alterar', Venda.alterar);
router.delete('/vendas/deletar/:id', Venda.deletar);

module.exports = router;