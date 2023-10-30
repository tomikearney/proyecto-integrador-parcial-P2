const data = require("../database/models");
const usuario = data.Usuario;
const op = data.Sequelize.Op

const usuariosController = {
    miPerfil: function (req, res, next) {
        //si me traigo un solo registro con find by pk
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

    //   let arrayAboutUser = []; 
    //   for (let i = 0; i < data.usuario.length; i++) {
    //       if (ingresoId == data.usuario[i].id) {
    //           arrayAboutUser.push(data.usuario[i])
    //       }            
    //   };

    //   if (!arrayAboutUser ) { 
    //       return res.send("Usuario no encontrado");
    //   };

    //   const arrayUserPosts = []; 
    //   for (let i = 0; i < data.posteos.length; i++) {
    //       if (data.posteos[i].idUsuario == ingresoId) {
    //           arrayUserPosts.push (data.posteos[i])
    //       }            
    //       };
    //       res.render('detalleUsuario', { idUsuario: ingresoId, listaAboutUsuario:arrayAboutUser, listaPosteos:arrayUserPosts, usuarioLogueado: true });
    }
};

module.exports = usuariosController;

/*NOTA
1. MODIFICO DETALLES USUARIO CREANDO EL FOR Y LO DEMAS EN LA VISTA DIRECTO */