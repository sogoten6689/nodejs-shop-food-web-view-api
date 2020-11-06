var db =  require('../models/index.js');
var User = db.user;
var bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
module.exports = {
    getLogin: async function(req, res) {
        console.log(req.headers);
        if (req.headers && req.headers.authorization && 
            String(req.headers.authorization.split(' ')[0]).toLowerCase() === 'bearer')
        {
            var token = String(req.headers.authorization.split(' ')[1]).toLowerCase();
            console.log(token);
            res.send(token);
        }
        else {
            res.render('auth/login');
        }
    },

    postLogin: async function(req, res) {
        var data = JSON.stringify(req.body, null, 2);
        data = JSON.parse(data);
        console.log(data);
        console.log(data.inputPassword);
        if (data != null && data.inputPassword != null && data.inputEmail != null){
            User.findOne({ where: {email: data.inputEmail}}).then(function(result){
                console.log(result);
                if (result == null){
                    res.send("user không tồn tại");
                }
                else {
                    var checkBcrypt = bcrypt.compareSync(data.inputPassword, result.password);
                    const token = jwt.sign({_id: result.email}, "12121325455")
                    res.header("auth-token", token).send(token);
                    if (checkBcrypt){
                        res.header('authorization', 'Bearer 11111111111');
                        res.set('authorization', 'Bearer 11111111111');
                        res.locals.user = result;
                        res.send("đã nhập thành công");
                    }
                    else {
                        res.send("mat khong hoac tai khoan k dung");
                    }

                }
            });
        }
        else {
            res.send("nhap thong tin dang nhap");
        }
    },
    
    logout: async function(req, res) {
        res.clearcookie();
    },
};