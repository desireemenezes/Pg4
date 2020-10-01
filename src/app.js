'use strict'

const express = require('express');
const app = express();
app.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
app.use('/task', TaskRoutes);

const UserRoutes = require('./routes/UserRoutes');
app.use('/user', UserRoutes);


//route
app.listen(5000, () => console.log('Rodando na porta 5000'));

