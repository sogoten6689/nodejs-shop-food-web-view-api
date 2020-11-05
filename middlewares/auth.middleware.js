var db =  require('../models/index.js');
var User = db.user;

module.exports.requireAuth = function (req, res, next) {
    if(!req.cookies.token){
        res.redirect('/login');
        return;
    }
    
    User.findOne({ where: {email: req.cookies.token}}).then(function(result){
        if (result == null){
            res.redirect('/login');
            return;
        }
        next();
    });
}