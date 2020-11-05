var db =  require('../models/index.js');
var User = db.user;

module.exports = {
    getLogin: async function(req, res) {
        res.render('auth/login');
    },
    postLogin: async function(req, res) {
        var data = JSON.stringify(req.body, null, 2);
        data = JSON.parse(data);
        console.log(data);
        if (data != null && data.inputPassword != null && data.inputEmail != null){
            var user = User.findOne({ where: {email: data.inputEmail}}).then(function(user){});
            console.log(user);
            console.log(user.password);
            if (user == null){
                res.send("user không tồn tại");
            }
            else if (user.password == data.inputPassword){
                res.send("đang nhập thành công");
            }
            else{
                res.send("mat khong hoac tai khoan k dung");
            }
        }
        else {
            res.send("nhap thong tin dang nhap");
        }
    },
};