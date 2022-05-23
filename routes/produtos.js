const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "GET Method test"
    });
});

router.post("/", (req, res, next) => {
    res.status(200).send({
        mensagem: "POST Method test"
    });
});

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

module.exports = router; 