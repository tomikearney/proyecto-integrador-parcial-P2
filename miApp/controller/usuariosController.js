const data = require("../database/models");
//Estan todos los usuarios
const usuario = data.Usuario;
//Estan todos los posteos
const posteo = data.Posteo;
const bcrypt = require("bcryptjs")

const usuariosController = {
    miPerfil: function (req, res) {
        if(res.locals.user != undefined){
          let ingresoId= req.params.id;
          let criterio ={
            order:[['createdAt', 'DESC']],        
            where:[{idUsuario:ingresoId}],
            include:{
              all:true,
              nested: true
            }
          }
          posteo.findAll(criterio) 
          .then((result)=>{
            res.render('miPerfil', { idUser:ingresoId, listaPosteos:result});
          })
          .catch((error)=>{
            return res.send(error)
          })
        }else{
          res.redirect('/login')
        }
  
      
    },
    editarPerfil: function(req, res) {
      let idUser=req.params.id;
      let autorPerfil ={};

      if (req.session.user != undefined) {

        usuario.findByPk(idUser)
        .then((result)=>{
          autorPerfil.id = result.id;
          // return res.send(autorPerfil.id)
          if (req.session.user.id == autorPerfil.id){
            return res.render("editarPerfil", {datos:result});
          }else{
           res.redirect("/users/detalleUsuario/id/" + idUser)
          }
        }).catch((error)=>{
          return console.log(error)
        })

      } else {
        
        res.redirect("/users/detalleUsuario/id/" + idUser)
      }
    },
    updatePerfil: function(req,res){
      let idUser = req.params.id;
      let autorPerfil = {}

      let info = req.body;
      
      if (info.clave < 3) {
        info.clave = req.session.user.clave
      } else {
        info.clave = bcrypt.hashSync(info.clave,10)
      }

      let criterio = {
        where : [{id:idUser}]
      }

      if (req.session.user != undefined){
        
        usuario.findByPk(idUser)
        .then((result)=>{
          autorPerfil.id =result.id
          // return res.send(req.session.user.id)
          if (req.session.user.id == autorPerfil.id) {

            usuario.update(info,criterio)
            .then((result)=>{
              return res.redirect("/users/miPerfil/id/"+ idUser)
            })
            .catch((error)=>{
              return console.log(error);
            })
          } else{
            res.redirect("/users/detalleUsuario/id/" + idUser)

          }

        })
        .catch ((error) =>{
          return console.log(error);
        });
      }
      else{
        res.redirect ("/user/miPerfil/id/"+idUser);
      }

    },

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
        res.render('detalleUsuario', { idUsuario: ingresoId, listaAboutUsuario: result, listaPosteos:result.usuarioPosteo})
      })
      .catch (function (error) {
        res.send(error)
      })

   
    },
}

module.exports = usuariosController;

