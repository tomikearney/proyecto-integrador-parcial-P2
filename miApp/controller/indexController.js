const data = require("../db/data")

const indexController ={
    index :function(req, res, next) {
      let id = req.params.id
      res.render('index', {idUsuarios:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, title: 'Express' });
    },
    // login: function (req, res, next) {
    //     res.render('login', { title: 'Express' });
    // },
    // registro: function (req, res, next) {
    //     res.render('registracion', { title: 'Express' });
    // },
    busqueda: function (req, res, next) {
        res.render('resultadoBusqueda', { title: 'Express' });
    }
}

module.exports = indexController;