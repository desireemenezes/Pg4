'use strict'

const express = require('express');
const app = express();

app.get('/',(req, res) => res.send('Ok'));// retornar ok
app.listen(9000, () => console.log('Rodando na porta 9000'));