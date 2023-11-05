const data = require("../database/models");
//Estan todos los usuarios
const usuario = data.Usuario;
//Estan todos los posteos
const posteo = data.Posteo;
const op = data.Sequelize.Op

const usuariosController = {
    miPerfil: function (req, res, next) {
        res.render('miPerfil', { listaAboutUsuario:data.usuario, listaPosteos:data.posteos, usuarioLogueado: true });
      
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { usuarioLogueado: true});
    },
    detalleUsuario: function(req, res, next) {
      let ingresoId = req.params.id;
      let relacion ={
        include : {
            all: true,
            nested: true
        }
      };
      usuario.findByPk(ingresoId,relacion)
      .then(function (result) {
      // res.send (result)
        res.render('detalleUsuario', { idUsuario: ingresoId, listaAboutUsuario: result, listaPosteos:result.usuarioPosteo, usuarioLogueado: true})
      })
      .catch (function (error) {
        res.send(error)
      })

   
    }
};

module.exports = usuariosController;

/*NOTA
1. ver sesion y cookies*/