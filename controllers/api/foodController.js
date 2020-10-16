var db =  require('../../models/index.js');
var Foods = db.foods;

module.exports = {
    index: async function(req, res) {
        var foods = await Foods.findAll();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(foods));
    },

    create: async function(req, res) {
        var data = JSON.stringify(req.body, null, 2);
        data = JSON.parse(data);
        Foods.create({name: data.name, imageUrl: data.imageUrl, foodDescription: data.foodDescription});
        res.end(JSON.stringify(true));
    },
};