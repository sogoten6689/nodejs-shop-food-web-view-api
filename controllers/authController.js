var db =  require('../models/index.js');
var User = db.user;

module.exports = {
    getLogin: async function(req, res) {
        res.render('auth/login');
    },
    postLogin: async function(req, res) {
        res.render('login');
    },
};