const ProductModel = require('../model/ProductModel');

class ProductController {
    async create(req, res){
        const product = new ProductModel(req.body);
          await product
          .save()
          .then(response => {
              return res.status(200).json(response);
          })
          .catch(error => {
              return res.status(500).json(error);
          });
      }

}
module.exports = new ProductController();