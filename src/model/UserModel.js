const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    macaddress: { 
        type: String, 
        required: true
    }, //endereço fisico
    name : {
        type: String,
        required: true
    },
    login : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User', UserSchema);