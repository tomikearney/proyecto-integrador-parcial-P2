const data = require("../database/models");
const usuario = data.Usuario;
const op = data.Sequelize.Op

const usuariosController = {
    miPerfil: function (req, res, next) {
      let usuarioId = req.params.id;
    
      // Aquí asumimos que estás obteniendo el usuario desde la base de datos
      // y lo estás almacenando en la variable usuarioEncontrado
      usuario.findByPk(usuarioId)
        .then((usuarioEncontrado) => {
          if (usuarioEncontrado) {
            res.render('miPerfil', { listaAboutUsuario: usuarioEncontrado, listaPosteos: data.posteos, usuarioLogueado: true });
          } else {
            // Manejo de error si el usuario no se encuentra en la base de datos
            return res.render('usuarioNoEncontrado');
          }
        })
        .catch((error) => {
          return res.send(error);
        });
       }, // function (req, res, next) {
       //let usuarioId= req.params.id

      

      //usuario.findByPk(usuarioId).then((result)=>{
        //res.render('miPerfil', { listaAboutUsuario:data.usuario, listaPosteos:data.posteos, usuarioLogueado: true });


     // }).catch((error)=>{
        //return res.send(error);
      //})


        //si me traigo un solo registro con find by pk
    
    //} ,
    editarPerfil: (req, res, next) => {
      let usuarioId= req.params.id
      const usuarioLogueado = true;
      usuario.findByPk(usuarioId)
      .then((result)=>{
        console.log(result);
        res.render("editarPerfil", {usuario: result , usuarioLogueado : usuarioLogueado})
      }).catch(function(error){
        res.send(error)
      })
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
    },
    update : (req,res) => {
      let id = req.params.id
      let info = req.body
      let criterios =  {
        where : {
          id : id
        }

      }
      usuario.update(info,criterios)
      .then((result)=>{
        return res.redirect("/miPerfil/id/" + id)
      })
      .catch(function (error) {
        // Maneja errores, muestra un mensaje de error o redirige al formulario de edición
        res.send(error);
      });
    }
};

module.exports = usuariosController;

/*NOTA
1. MODIFICO DETALLES USUARIO CREANDO EL FOR Y LO DEMAS EN LA VISTA DIRECTO */