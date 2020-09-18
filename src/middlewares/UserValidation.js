const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) => {

  const { macaddress } = req.body;

  if(!macaddress) {
  return res.status(400).json({ error: 'macaddress é obrigatório'});
  } else {
    
    let exists;
    if(req.params.id){
        exists = await UserModel.findOne(
              { 
                '_id': {'$ne': req.params.id}, 
                'macaddress': {'$in': macaddress}
              });
        
    } else {
        exists = await UserModel.findOne(
          { 
            'macaddress': {'$in': macaddress}
          });
    }
    if(exists){
      return res.status(400).json({ error: 'Já existe'});
    }

    next();
  }
}



module.exports = UserValidation;