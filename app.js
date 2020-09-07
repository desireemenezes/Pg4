'use strict'

const controller = require('./controller/produto_controller');
const express = require('express')
const app = express()
const port = 3000

//route
app.get('/produtos', controller.listar)

app.post('/produtos', controller.inserir)

app.put('/produtos/:id', controller.atualizar)
  
app.delete('/produtos/:id', controller.deletar)
    
app.get('/produtos/:id', controller.buscarPorId)
  
app.get('/',(req, res) => res.send('Ok'));// retornar ok
app.listen(9000, () => console.log('Rodando na porta 9000'));

