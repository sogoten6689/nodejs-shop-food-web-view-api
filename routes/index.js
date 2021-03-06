var express = require('express');
var router = express.Router();
const homeController = require('../controllers/homeController');
const authMiddleware = require('../middlewares/auth.middleware');
const authRouter = require('./auth');
var adminRouter = require('./admin');
var apiRouter = require('./api');

/* GET home page. */


router.use('/api', apiRouter);
router.use('/admin', authMiddleware.requireAuth, adminRouter);
router.use('/login', authRouter);
router.get('/logout', function(req, res, next) {
  res.clearCookie();
  res.redirect('/login');
});

router.get('/', homeController.index);

router.post('/add-cookie', function(req, res, next) {
  var data = JSON.stringify(req.body, null, 2);
  data = JSON.parse(data);
  res.cookie(data.inputCookieId, data.inputCookieValue);
  res.send(data);
});

router.get('/view-cookie', function(req, res, next) {
  res.render('sample/cookie-view');
});
module.exports = router;
