var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');

/* GET home page. */

router.get('/', homeController.index);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', homeController.getLogin);

module.exports = router;
