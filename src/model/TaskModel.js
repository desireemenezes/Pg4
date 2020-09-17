const mongoose = require('../config/db');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    type: {
        type: Number,
         required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    created: { 
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', TaskSchema);