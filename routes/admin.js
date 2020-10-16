var express = require('express');
var router = express.Router();
var userRouter = require('./admin/users');

// get admin page
router.get('/', function(req, res, next) {
    res.render('admin/index',{
	});
});

router.use('/users', userRouter);

module.exports = router;
