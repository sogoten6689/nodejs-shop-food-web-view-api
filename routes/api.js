var express = require('express');
var router = express.Router();
var userRouter = require('./api/foods');

router.use('/foods', userRouter);

module.exports = router;
