const data = require("../db/data")

const indexController ={
    index :function(req, res, next) {
      let id = req.params.id; //En el momento que se muestran los comentarios, se tiene en cuenta que sea de acuerdo al id del usuario
      res.render('index', {idUsuario:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, usuarioLogueado: true});
    },
    login: function (req, res, next) {
        res.render('login', { usuarioLogueado: false });
    },
    registro: function (req, res, next) {
        res.render('registracion', {usuarioLogueado: false });
    },
    busqueda: function (req, res, next) {
        let id = req.params.id; 
        res.render('resultadoBusqueda', {idUsuario:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, usuarioLogueado: true }); 
    }
}

module.exports = indexController;