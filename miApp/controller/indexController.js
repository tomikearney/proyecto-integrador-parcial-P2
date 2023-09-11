const data = require("../db/data")

const indexController ={
    index :function(req, res, next) {
      let id = req.params.id; //PORQUE? : P
      res.render('index', {idUsuario:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, title: 'Express' });
    },
    login: function (req, res, next) {
        res.render('login', { title: 'Express' });
    },
    registro: function (req, res, next) {
        res.render('registracion', { title: 'Express' });
    },
    busqueda: function (req, res, next) {
        let id = req.params.id
        res.render('index', {idUsuario:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, title: 'Express' }); //PORQUE A INDEX Y NO A BUSQUEDA
    }
}

module.exports = indexController;