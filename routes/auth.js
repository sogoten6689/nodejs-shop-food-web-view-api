var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');

/* GET home page. */

router.get('/', authController.getLogin);
router.post('/', authController.postLogin);
module.exports = router;
