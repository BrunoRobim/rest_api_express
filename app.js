const express = require('express');
const app = express();
const morgan = require("morgan");
const bodyParser = require('body-parser');

// Definição das rotas
const rota_produtos = require("./routes/produtos");
const rota_pedidos = require("./routes/pedidos");

app.use(morgan("dev")); 
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Direcionamento das rotas
app.use("/produtos", rota_produtos);
app.use("/pedidos", rota_pedidos);

app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*"),
    res.header(
        "Acces-Control-Allow-Header",
        "Origin, X-Requirements-With, Content-Type, Accept, Authorization",
    );

    if (req.method === "OPTIONS") {
        res.header("Acces-Control-Allow-Origin", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).send({});
    }

    next(); 
});


app.use((req, res, next) => {
    const erro = new Error("Página não encontrada");
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;