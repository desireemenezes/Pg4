const mongoose =  require('mongoose');

const url = 'mongodb://localhost:27017/app_produtos';
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;