'use strict'

const express = require('express');
const app = express();
app.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
app.use('/task', TaskRoutes);


//route
app.listen(9000, () => console.log('Rodando na porta 9000'));

