const data= require("../db/data");

const usuariosController = {
    miPerfil: function (req, res, next) {
        const perfilId = req.params.id;
        const arrayPerfil = [];
        const arrayPosteos = []; // Define arrayPosteos aquí antes del bucle

        for (let i = 0; i < data.usuario.length; i++) {
            if (data.usuario[i].id == perfilId) {
                arrayPerfil.push(data.usuario[i]);
            }
        }

        // Ahora, fuera del bucle de usuarios, puedes buscar publicaciones relacionadas
        for (let j = 0; j < data.posteos.length; j++) {
            if (perfilId == data.posteos[j].idUsuario) {
                arrayPosteos.push(data.posteos[j]);
            }
        }

        res.render('miPerfil', {
            perfil: arrayPerfil,
            perfilPosteos: arrayPosteos,
            title: 'Express'
        });
    
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
          if (data.posteos[i].idUsuario == ingresoId) {
              arrayUserPosts.push (data.posteos[i])
          }            
      }
      res.render('detalleUsuario', { listaAboutUsuario:arrayAboutUser, listaPosteos:arrayUserPosts, title: "Detalle de Usuario" });
  }
};

module.exports = usuariosController;
