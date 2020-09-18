const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');

router.post('/', UserValidation, UserController.create);
router.put('/:id', UserValidation,  UserController.update);
router.get('/:id', UserController.show);
router.delete('/:id', UserController.delete);
router.put('/:id/:done', UserController.done);

module.exports = router;    