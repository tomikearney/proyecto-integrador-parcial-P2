//vinculo con datebases y models
const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
const usuarios = data.Usuario;
const op = data.Sequelize.Op //me traigo operadores que estan en modelos index
let comentarios = data.Comentario;

const postsController = {
  detallePost: function (req, res,next) { 
    let idPost = req.params.id;
    let relacion = {
      include:{
        all : true,
        nested : true, 
      }
    };
    posteo.findByPk (idPost,relacion)
    .then((result) => {
      //return res.send (result.posteoUsuario)
      res.render('detallePost', { idPosteo: idPost, listaUsuarios: result.posteoUsuario, listaPosteos: result})
  })
  .catch((error) => {
    return res.send(error);
  })
  },

  agregarPost: function (req, res, next) {
    if (req.session.user != undefined) {
      res.render('agregarPost');
    } else {
      res.render("login")
    }    
  },

  storePost: function (req, res) {

    let info = req.body;
    // return res.send(info)
    let userNewPost = {
      nombreImg: info.nombreImg,
      descripcionImg:info.descripcionImg,
      idUsuario: req.session.user.id // req.session.user.
      
    };
    // return res.send(req.session.user)
    posteo.create(userNewPost)
    .then((result)=>{
      return res.redirect("/users/miPerfil/id/" + userNewPost.idUsuario) 
    })
    .catch((error)=>{
      return console.log (error);

    })

  },
  showPost : function(req,res){ 
    let idPosteo = req.params.id ; 
    let autorPosteo = {} //Acá se va a guardar el id del usuario que publico el posteo que se quiere editar

    if (req.session.user != undefined) { //Primero que nada chequeamos si el usuario está logueado

      posteo.findByPk(idPosteo)
      .then((result)=>{
        autorPosteo.id = result.idUsuario
        if (req.session.user.id == autorPosteo.id) { //Chequea que el usuario logueado sea el mismo del posteo que se quiere editar
          return res.render("editarPost", {posteo: result})
        }
        else {
          res.redirect('/posts/detallePost/id/' + idPosteo); 
        }
      }).catch((error)=>{
        return console.log (error);
      })
    }
    else {
      res.redirect('/posts/detallePost/id/' + idPosteo); 
    }
      
  },
   updatePost : function (req,res){
    let idPosteo = req.params.id ; 
    let autorPosteo = {} //Acá se va a guardar el id del usuario que publico el posteo que se quiere borrar

    let info = req.body;
    let criterio = {
      where : [{id : idPosteo}]
     }


     if (req.session.user != undefined) { //Primero que nada chequeamos si el usuario está logueado
 
       posteo.findByPk (idPosteo)
       .then((result) =>{
         autorPosteo.id = result.idUsuario
         if (req.session.user.id == autorPosteo.id) { //Chequea que el usuario logueado sea el mismo del posteo que se quiere borrar
          posteo.update(info, criterio)
          .then((result)=>{
            return res.redirect("/posts/detallePost/id/" + idPosteo)
          })
          .catch((error)=> {
            return console.log(error);
          }) 
         }
         else {
           res.redirect('/posts/detallePost/id/' + idPosteo); 
         }
         
       })
       .catch((error)=>{
           return console.log(error);
       });
       
     }
     else {
       res.redirect('/posts/detallePost/id/' + idPosteo); 
     }

  }, 
  deletePost: function (req,res){
    let idPosteo = req.params.id ; //id del posteo
    let autorPosteo = {} //Acá se va a guardar el id del usuario que publico el posteo que se quiere borrar


    if (req.session.user != undefined) { //Primero que nada chequeamos si el usuario está logueado

      let criterioPosteo = {
        where : [{id : idPosteo}]
      };
      let criterioComentarios = {
        where : [{idPosteo : idPosteo}]
      };
      let relacion = {
        include:{
          all : true,
          nested : true
        }
      }

      posteo.findByPk (idPosteo, relacion)
      .then((result) =>{
        autorPosteo.id = result.idUsuario
        if (req.session.user.id == autorPosteo.id) { //Chequea que el usuario logueado sea el mismo del posteo que se quiere borrar
          if (result.posteoComentario != undefined) { //Si el posteo a eliminar tiene comentarios, se eliminan estos primero(despúes se elimina el posteo en sí)
            comentarios.destroy(criterioComentarios).then().catch((error)=> {return console.log(error);}) 
          }
          posteo.destroy(criterioPosteo)
          .then(()=>{
            return res.redirect("/users/miPerfil/id/" + req.session.user.id)
          })
          .catch((error)=> {
            return console.log(error);
          }) 
        }
        else {
          res.redirect('/posts/detallePost/id/' + idPosteo); 
        }
        
      })
      .catch((error)=>{
          return console.log(error);
      });
      
    }
    else {
      res.redirect('/posts/detallePost/id/' + idPosteo); 
    }
    

  },

  storeAddComentario: function(req,res){
    if (req.session.user == undefined){
      return res.redirect ("/login")
    } else {
      let comentario = req.body.comentario;
      let idPosteo = req.params.id;
      // res.send(comentario)
     
      comentarios.create({
        idPosteo: req.params.id,
        idUsuario: req.session.user.id,
        comentario: comentario

      
      }).then(function(result) {
       return comentarios.findAll({
         where: { idPosteo: idPosteo },
          order:[['createdAt', 'DESC']],        
          
        });
      
      })
      
      .then(function (comentarios) {
        let idPosteo = req.params.id;
       
        // return res.send(idPost)
        return res.redirect('/posts/detallePost/id/'+ idPosteo)
      })
      .catch(function (error) {
        return res.send(error)
      }).catch(function (error) {
        return res.send(error)
      })
    }
  },

};
module.exports = postsController;

