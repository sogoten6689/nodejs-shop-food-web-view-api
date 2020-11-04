var db =  require('../models/index.js');
var User = db.user;
var Food = db.foods;

module.exports = {
    index: async function(req, res) {
        res.render('index',{
            foods: Food.findAll(),
            foodCount: 5,
        });
    },
    
    getLogin: async function(req, res) {
        res.render('login');
    },

    search: async function(req, res) {
        var result = await User.findAll({limit: 10});
        res.render('users/index', {
            users: result // render lại trang users/index với biến users bây giờ chỉ bao gồm các kết quả phù hợp
        });
    },
};