'use strict'

const express = require('express');
const app = express();
app.use(express.json());


//Importa usuario_controller para verificar token
const controller = require('./controller/UserController');

const TaskRoutes = require('./routes/TaskRoutes');
app.use('/task', controller.validateToken, TaskRoutes);


const UserRoutes = require('./routes/UserRoutes');
app.use('/user', UserRoutes);


//route
app.listen(5000, () => console.log('Rodando na porta 5000'));

