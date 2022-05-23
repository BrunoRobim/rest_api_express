const express = require('express');

const app = express();
const rota_produtos = require("./routes/produtos");

app.use("/produtos", rota_produtos); 

module.exports = app;