const data= require("../db/data");

const usuariosController = {
    miPerfil: function (req, res, next) {
        res.render('miPerfil', { listaAboutUsuario:data.usuario, listaPosteos:data.posteos, title: "Detalle de Usuario" });
    
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
      const ingresoId = req.params.id;
      let arrayAboutUser = []; 
      for (let i = 0; i < data.usuario.length; i++) {
          if (ingresoId == data.usuario[i].id) {
              arrayAboutUser.push(data.usuario[i])
          }            
      };

      if (!arrayAboutUser ) { 
          return res.send("Usuario no encontrado");
      };

      const arrayUserPosts = []; 
      for (let i = 0; i < data.posteos.length; i++) {
          if (data.posteos[i].idUsuario == ingresoId) {
              arrayUserPosts.push (data.posteos[i])
          }            
      };
      res.render('detalleUsuario', { idUsuario: ingresoId, listaAboutUsuario:arrayAboutUser, listaPosteos:arrayUserPosts, title: "Detalle de Usuario" });
  }
};

module.exports = usuariosController;
