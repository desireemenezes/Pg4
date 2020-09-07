const express = require('express');
const router = express.Router();

// define the home page route
const ProductController = require('../controller/ProductController');
router.post('/' ,ProductController.create);
  
  
module.exports = router

