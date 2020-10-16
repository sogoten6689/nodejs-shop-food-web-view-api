var db =  require('../models/index.js');
var User = db.user;

module.exports = {
    index: async function(req, res) {
        res.render('admin/users/index',{
            users: await User.findAll(),
        });
    },

    create: function(req, res) {
        res.render('admin/users/create');
    },

    edit: function(req, res) {
        res.render('admin/users/edit');
    },
    getUsers: async function(req, res) {
        var users = await User.findAll();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(users));
    },
    search: async function(req, res) {
        var result = await User.findAll({limit: 10});
        res.render('users/index', {
            users: result // render lại trang users/index với biến users bây giờ chỉ bao gồm các kết quả phù hợp
        });
    },
    post_create: function(req, res) {
        var data = JSON.stringify(req.body, null, 2);
        data = JSON.parse(data);
        User.create({name: data.name, email: data.email, age: data.age});
        res.end(JSON.stringify(true));
    },
    show: function(req, res, next) {
        let id = parseInt(req.params.id);
        var user = User.findOne({ where: {id: id}}).then(function(user){});
        res.render('users/show', {
            user: user
        });
    },
    delete: function (req, res, next) {
        let id = parseInt(req.params.id);
        User.destroy({where: {id: id}});
        res.send(true);
        // res.redirect("/admin/users");
        // next
    }
};