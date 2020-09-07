const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    produtos: {
        "nome" : String,
        "preco" : Number
    }
})


module.exports = mongoose.model('Product', ProductSchema);