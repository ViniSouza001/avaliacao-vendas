DROP DATABASE IF EXISTS vendas;
CREATE DATABASE vendas;
USE vendas;

CREATE TABLE vendedores(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    matricula INT NOT NULL
);

CREATE TABLE produtos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL
);

CREATE TABLE vendas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data DATETIME NOT NULL,
    quantidade INT NOT NULL,
    produtoId INT NOT NULL,
    vendedorId INT NOT NULL,
    FOREIGN KEY (produtoId) REFERENCES produtos(id),
    FOREIGN KEY (vendedorId) REFERENCES vendedores(id)
);

INSERT INTO vendedores VALUES 
(default, "Stefany Antonella", 14644),
(default, "Stella Viana", 01516),
(default, "Tomas Isaac", 50913),
(default, "Osvaldo Galvao", 72193);

INSERT INTO produtos VALUES
(default, "Samsung Galaxy M53", 2211.11),
(default, "Motorola Moto G42", 1499.00),
(default, "Rainha das Chamas", 36.90),
(default, "Cronica Saxonicas - O cavaleiro da morte", 57.90),
(default, "O milagre do amanhã", 56.59),
(default, "Lavadouro de Roupas Brastemp BWK12AB", 2199.00),
(default, "Fogao Atlas 4 bocas", 899.00);

INSERT INTO vendas VALUES
(default, "2023-04-18T09:08:39", 2, 1, 3),
(default, "2023-04-18T09:08:39", 1, 2, 3),
(default, "2023-04-18T09:08:39", 3, 1, 2),
(default, "2023-04-18T09:08:39", 1, 3, 2),
(default, "2023-04-18T09:08:39", 2, 2, 1),
(default, "2023-04-18T09:08:39", 1, 3, 1);

CREATE VIEW vw_comissao AS
SELECT vendedores.nome AS nome_vendedor, vendedores.matricula, 
    SUM(produtos.valor * vendas.quantidade) AS total_vendido, 
    SUM(produtos.valor * vendas.quantidade * 0.05) AS valor_comissao
FROM vendas 
JOIN vendedores ON vendas.vendedorId = vendedores.id 
JOIN produtos ON vendas.produtoId = produtos.id 
GROUP BY vendas.vendedorId;

DROP VIEW IF EXISTS vendas_detalhadas;
CREATE VIEW vendas_detalhadas AS
SELECT v.id, v.data, v.quantidade, p.id AS produto_id, p.nome AS produto, vd.nome AS vendedor, vd.id AS vendedor_id
FROM vendas v
JOIN produtos p ON v.produtoId = p.id
JOIN vendedores vd ON v.vendedorId = vd.id
ORDER BY v.id;

CREATE VIEW vendas_total AS
SELECT SUM(quantidade * valor) AS total_vendas
FROM vendas
JOIN produtos ON vendas.produtoId = produtos.id;