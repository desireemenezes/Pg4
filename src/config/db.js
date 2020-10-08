const mongoose =  require('mongoose');

const url = 'mongodb://localhost:27017/task_list';
mongoose.connect(url, { useNewUrlParser: true }).then(()=> {
    console.log('Data base connect');
  })
  .catch((error)=> {
    console.log('Error data base connect');
  });

module.exports = mongoose;