const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    macaddress: { 
        type: String, 
        required: true
    }, //endereço fisico
    user : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    
    versionKey:false
    
});

module.exports = mongoose.model('User', UserSchema);