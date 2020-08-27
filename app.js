'use strict'

const express = require('express');
const app = express();

//route
app.use("/teste", require("./src/routes"));


app.get('/',(req, res) => res.send('Ok'));// retornar ok
app.listen(9000, () => console.log('Rodando na porta 9000'));

