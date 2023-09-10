const data = require("../db/data")

const indexController ={
    index :function(req, res, next) {
      let id = req.params.id
      res.render('index', {idUsuarios:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, title: 'Express' });
    },
}

module.exports = indexController;