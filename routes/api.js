var express = require('express');
var router = express.Router();
var foodRouter = require('./api/foods');

router.use('/foods', foodRouter);

module.exports = router;
