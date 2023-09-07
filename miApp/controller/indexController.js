const db = require("../db/data")

const indexController ={
    index :function(req, res, next) {
        res.render('index', { title: 'Express' });
      },
}

module.exports = indexController;