const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

// macaddress � o dendere�o fisico para capturar o dispositivo requerido
const TaskValidation = async (req, res, next) => { // aqui eu crio uma fun��o async que recebe os parametros req res next

  const { macaddress, type, title, description, when } = req.body; //crio uma constante de desestrutura��o

  if(!macaddress)
  return res.status(400).json({ error: 'macaddress � obrigat�rio'});
  else if(!type)
  return res.status(400).json({ error: 'tipo � obrigat�rio'});
  else if(!title)
  return res.status(400).json({ error: 't�tulo � obrigat�rio'});
  else if(!description)
  return res.status(400).json({ error: 'Descri��o � obrigat�ria'});
  else if(!when)
  return res.status(400).json({ error: 'Data e Hora s�o obrigat�rios'});
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
      return res.status(400).json({ error: 'j� existe uma tarefa nesse dia e hor�rio'});
    }

    next();
  }

}

module.exports = TaskValidation;