const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) => {

  const { macaddress, user, email, password } = req.body; //crio uma constante de desestrutura��o

  if(!macaddress) 
  return res.status(400).json({ error: 'macaddress � obrigat�rio'});
  else if(!user)
  return res.status(400).json({ error: 'usu�rio obrigat�rio'});
  else if(!email)
  return res.status(400).json({ error: 'e-mail obrigat�rio'});
  else if(!password)
  return res.status(400).json({ error: 'password obrigat�rio'});
  
   else {
    
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
      return res.status(400).json({ error: 'J� existe'});
    }

    next();
  }
}



module.exports = UserValidation;