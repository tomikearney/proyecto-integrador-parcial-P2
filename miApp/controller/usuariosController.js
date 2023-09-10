const data= require("../db/data");

const usuariosController = {
  login: function (req, res, next) {
    res.render('login', { title: 'Express' });
    },
    registro: function (req, res, next) {
        res.render('registracion', { title: 'Express' });
    },
    miPerfil: function(req, res, next) {
        res.render('miPerfil', { title: 'Express' });
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
      const ingresoId = req.params.id;
      let arrayAboutUser = []; //tendria que estar todo lo relacionado con el usuario

      for (let i = 0; i < data.usuario.length; i++) {
          if (ingresoId == data.usuario[i].id) {
              arrayAboutUser.push(data.usuario[i])
          }            
      }

      if (!arrayAboutUser ) {
          return res.status(404).send("Usuario no encontrado");
      }

      const arrayUserPosts = []; //array para posteos y otro para datos del usuario??

      for (let i = 0; i < data.posteos.length; i++) {
          if (data.posteos[i].idUsuario === ingresoId) {
              arrayUserPosts.push (data.posteos[i])
          }            
      }
      res.render('detalleUsuario', { listaAboutUsuario:arrayAboutUser, listaPosteos:arrayUserPosts, title: "Detalle de Usuario" });
  }
};

module.exports = usuariosController;
