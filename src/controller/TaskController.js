const TaskModel = require('../model/TaskModel');

const { 
    startOfDay, 
    endOfDay, 
    startOfWeek, 
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear
   } = require('date-fns'); // começo do dia  e final do dia // começo da semana final da semana

const current =  new Date(); // devolve dia e hora atual

class TaskController {

    async create(req, res){
      const task = new TaskModel(req.body);
        await task
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }
  
    async update(req, res){
        // { new: true } devolve a tarefa já atualizada
        await TaskModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true }) // procura uma tarefa pelo id no parametro da requisição
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
  
    }
  
    async all(req, res){
        // operador $in só para valores que existem
         await TaskModel.find({'macaddress': {'$in': req.params.macaddress}})// vou dar um find pra filtrar pelo macaddress pra mostrar as tarefas somente deste dispositivo
        .sort('when') // trazer organizado por data e hora
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async show(req, res){
        await TaskModel.findById(req.params.id) // procura a tarefa pelo id
        .then(response => {
          response ? res.status(200).json(response) : res.status(404).json({error: 'tarefa não encontrada'})
        })
        .catch(error => {
          return res.status(500).json(error);
        });
    }

    async delete(req, res){
        await TaskModel.deleteOne({'_id': req.params.id}) // deletar baseado no id "_id"
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async done(req, res){ // atualiza status da tarefa
        await TaskModel.findByIdAndUpdate(
            {'_id': req.params.id}, //passa o id pro parametro
            {'done': req.params.done}, // informo qual o campo que eu quero atualizar
            {new: true}) // vou passar ele como new, pra devolver atualizado
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async late(req, res){ // tarefas atarssadas
        await TaskModel.find({
            'when': {'$lt': current}, // last then '$lt' menor do que  a data atual (curent)
            'macaddress': {'$in': req.params.macaddress} //  vou dar um find pra filtrar pelo macaddress pra mostrar as tarefas somente deste dispositivo
            })
            .sort('when') // devolve organizado por data e hora
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async today(req, res){ // tarefas do dia
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress}, //  vou dar um find pra filtrar pelo macaddress pra mostrar as tarefas somente deste dispositivo
            'when': {'$gte': startOfDay(current), '$lt' : endOfDay(current)}, // '$gte' maior ou igual pego o primeiro e o ultimo horario do dia pelo date-fns
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async week(req, res){ // igaul today  mas é por semana
        await TaskModel.find({
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfWeek(current), '$lt' : endOfWeek(current)}, // '$gte' maior ou igual - primeiro minuto segundo do dia da semana
            })
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            });
    }

    async month(req, res){
        await TaskModel
            .find({ 
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfMonth(current), '$lte': endOfMonth(current)}
            })
            .sort('when')
            .then(response => {
            return res.status(200).json(response);
            })
            .catch(error => {
            return res.status(500).json(error);
            });
    }
      async year(req, res){
        await TaskModel
            .find({ 
            'macaddress': {'$in': req.params.macaddress},
            'when': {'$gte': startOfYear(current), '$lte': endOfYear(current)}
            })
            .sort('when')
            .then(response => {
            return res.status(200).json(response);
            })
            .catch(error => {
            return res.status(500).json(error);
            });
      }
}

module.exports = new TaskController();