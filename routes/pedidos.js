const express = require("express");
const router = express.Router();

// RETORNA TODOS OS PRODUTOS
router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "GET Method test"
    });
});

// CREATE
router.post("/", (req, res, next) => {

    const pedido = {
        id_produto: req.body.id_produto,
        quatidade: req.body.quantidade
    };

    res.status(200).send({
        mensagem: "Pedido criado com sucesso.",
        pedidoCriado: pedido
    });
});


// CONSULT BY ID
router.get("/:id_produto", (req, res, next) => {
    const id = req.params.id_produto;
    if (id === "especial") {
        res.status(200).send({
            mensagem: "id especial encontrado, easter egg hunter! XD",
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: "ID passado é ID recebido",
            id: id
        });
    }
});

// UPDATE
router.patch("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "PATCH Method test"
    });
});

// EXCLUDE
router.delete("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "DELETE Method test"
    });
});

module.exports = router; 