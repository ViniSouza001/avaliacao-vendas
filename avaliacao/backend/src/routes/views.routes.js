const router = require('express').Router();
const View = require('../controllers/views.controllers');

router.get('/total-vendas', View.total_vendas);
router.get('/vendas-detalhadas', View.vendas_detalhadas);
router.get('/comissao', View.comissao);

module.exports = router;