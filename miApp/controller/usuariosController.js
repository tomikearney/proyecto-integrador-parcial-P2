const data = require("../database/models");
//Estan todos los usuarios
const usuario = data.Usuario;
//Estan todos los posteos
const posteo = data.Posteo;
const op = data.Sequelize.Op

const usuariosController = {
    miPerfil: function (req, res, next) {
        let ingresoId= req.params.id;
        // return res.send(req.params.id)
        let relacion={
          include:{
            all:true,
            nested: true
          }
          
        };
        usuario.findByPk(ingresoId, relacion) //usuario es la variable que tiene data.Usuario
        .then((result)=>{
          // res.send(result)
          res.render('miPerfil', { listaAboutUsuario:result, listaPosteos:result.usuarioPosteo, usuarioLogueado: true });
        })
        .catch((error)=>{
          return res.send(error)
        })
      
    },
    editarPerfil: function(req, res, next) {
      let id = req.parms.id;
      let relacion = {
        include:{
          all:true,
          nested: true
        }
      };
      usuario.findByPk(id, relacion)
      .then((result)=>{
        return res.render ("editarPerfil", {data: result})
      })
      .catch((error) =>{
        return console.log(error);
      })      
    },
    // storeEditarPerfil:function (req, res) {
    //   let idUsuario = req.params.id;
    //   let contraseñaForm = req.body.clave

    //   usuario.findByPk(idUsuario)
    //   .then(function (result) {
        
    //   })


    // },

    detalleUsuario: function(req, res, next) {
      let ingresoId = req.params.id;
        // return res.send(req.params.id)
        let relacion ={
        include : {
            all: true,
            nested: true
        }
      };
      usuario.findByPk(ingresoId, relacion)
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

