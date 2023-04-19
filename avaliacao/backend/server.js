const express = require('express');
const app = express();
const cors = require('cors');
const produtoRouter = require('./src/routes/produto.routes');
const vendedorRouter = require('./src/routes/vendedor.routes');
const vendaRouter = require('./src/routes/vendas.routes');

app.use(express.json());
app.use(cors());

app.use(produtoRouter);
app.use(vendedorRouter);
app.use(vendaRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});