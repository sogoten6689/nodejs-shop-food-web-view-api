var express = require('express');
var user_router = express.Router();
const foodController = require('../../controllers/api/foodController');

user_router.get('/', foodController.index);
user_router.post('/create', foodController.create);
module.exports = user_router;
