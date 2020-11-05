var db =  require('../models/index.js');
var User = db.user;
var md5 =  require('md5');

module.exports = {
    getLogin: async function(req, res) {
        res.render('auth/login');
    },
    postLogin: async function(req, res) {
        var data = JSON.stringify(req.body, null, 2);
        data = JSON.parse(data);
        console.log(data);
        console.log(data.inputPassword);
        if (data != null && data.inputPassword != null && data.inputEmail != null){
            User.findOne({ where: {email: data.inputEmail}}).then(function(result){
                if (result == null){
                    res.send("user không tồn tại");
                }
                else {
                    bcrypt.compare(data.inputPassword, result.password, function(err, res) {
                        res.cookie("token", data.inputEmail);
                        res.send("đẫ nhập thành công");
                    });
                    res.send("mat khong hoac tai khoan k dung");

                }
            });
        }
        else {
            res.send("nhap thong tin dang nhap");
        }
    },
};