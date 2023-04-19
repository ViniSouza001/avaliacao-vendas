class Views {
    total_vendas() {
        return 'SELECT * FROM vendas_total';
    }

    vw_comissao(){
        return 'SELECT * FROM vw_comissao';
    }

    vendas_detalhadas() {
        return 'SELECT * FROM vendas_detalhadas';
    }
}

module.exports = Views;