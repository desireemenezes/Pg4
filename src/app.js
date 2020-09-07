'use strict'

const express = require('express');
const app = express();
app.use(express.json());

const ProductRoutes = require('./routes/ProductRoutes');
app.use('/produtos', ProductRoutes);


//route
app.listen(9000, () => console.log('Rodando na porta 9000'));

