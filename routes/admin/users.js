var express = require('express');
var user_router = express.Router();
const indexContoller = require('../../controllers/userController');

user_router.get('/', indexContoller.index);
user_router.get('/create', indexContoller.create);
user_router.get('/:id/edit', indexContoller.edit);
user_router.get('/get-users', indexContoller.getUsers);
user_router.post('/create', indexContoller.post_create);
user_router.delete('/:id', indexContoller.delete);
user_router.get('/:id', indexContoller.show);
module.exports = user_router;
