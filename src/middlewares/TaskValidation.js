const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

// macaddress é o dendereço fisico para capturar o dispositivo requerido
const TaskValidation = async (req, res, next) => { // aqui eu crio uma função async que recebe os parametros req res next

  const { macaddress, type, title, description, when } = req.body; //crio uma constante de desestruturação

  if(!macaddress)
  return res.status(400).json({ error: 'macaddress é obrigatório'});
  else if(!type)
  return res.status(400).json({ error: 'tipo é obrigatório'});
  else if(!title)
  return res.status(400).json({ error: 'título é obrigatório'});
  else if(!description)
  return res.status(400).json({ error: 'Descrição é obrigatória'});
  else if(!when)
  return res.status(400).json({ error: 'Data e Hora são obrigatórios'});
  else if(isPast(new Date(when))) //isPast verifica se a data esta no passado
  return res.status(400).json({ error: 'escolha uma data e hora futura'});
  
  else {
    let exists;
    if(req.params.id){
        exists = await TaskModel.
            findOne(
              { 
                '_id': {'$ne': req.params.id},
                'when': {'$eq': new Date(when)},  // when data e hora junto
                'macaddress': {'$in': macaddress}
              });
        
    } else {
        exists = await TaskModel.
        findOne(
          { 
            'when': {'$eq': new Date(when)},  
            'macaddress': {'$in': macaddress}
          });
    }
    if(exists){
      return res.status(400).json({ error: 'já existe uma tarefa nesse dia e horário'});
    }

    next();
  }

}

module.exports = TaskValidation;