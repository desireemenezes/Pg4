
exports.listar = (req, res) => { 
    res.json([{id:1, nome:'prod1', preco: 30.00}]);
}


exports.inserir = (req, res) => {
    console.log(req.body);
    console.log(req.body.nome);
    console.log(req.body.preco);
    res.status(201).json(req.body);
}

exports.atualizar = (req, res) => {
    if(req.params.id == 1){
        let produto = req.body;
        produto.preco += 5;
        res.json(produto);
    }
    else {
        res.sendStatus(404);
    }
}

exports.deletar = (req, res) => {
    if(req.params.id == 1){
        let produto = new Object();
        produto.id = 1;
        produto.nome = 'prod1';
        produto.preco = 30.00;
        res.json(produto);
    }
    else { 
        res.sendStatus(404);
    }
}

exports.buscarPorId = (req, res) => {
    if(req.params.id == 1){
        let produto = new Object();
        produto.id = 1;
        produto.nome = 'prod1';
        produto.preco = 30.00;
        res.json(produto);
    }
    else {
        res.sendStatus(404);
    }
    
}