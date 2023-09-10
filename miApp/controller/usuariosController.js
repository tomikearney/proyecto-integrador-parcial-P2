const data= require("../db/data");

const usuariosController = {
    miPerfil: function(req, res, next) {
        res.render('miPerfil', { title: 'Express' });
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
        res.render('detalleUsuario', { title: 'Express' });
    }
};

module.exports = usuariosController;