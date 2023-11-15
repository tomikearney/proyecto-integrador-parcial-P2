//vinculo con datebases y models
const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
const usuarios = data.Usuario;
const op = data.Sequelize.Op //me traigo operadores que estan en modelos index

const postsController = {
  detallePost: function (req, res,next) { 
    let idPost = req.params.id;
    let relacion = {
      include:{
        all : true,
        nested : true
      }
    };
    posteo.findByPk (idPost,relacion)
    .then((result) => {
      // return res.send (result.posteoUsuario)
      res.render('detallePost', { idPosteo: idPost, listaUsuarios: result.posteoUsuario, listaPosteos: result, usuarioLogueado: true})
  })
  .catch((error) => {
    return res.send(error);
  })
  },

  agregarPost: function (req, res, next) {
    res.render('agregarPost', { usuarioLogueado: true });
  },

  storePost: function (req, res, next) {

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





  }, showPost : function(req,res){ 
  let idPosteo = req.params.id ; 
  posteo.findByPk(idPosteo).then((result)=>{
    return res.render("editarPost", {posteo : result})
  }).catch((error)=>{
     return console.log (error);
  })
      
  }, updatePost : function (req,res){
    let id = req.params.id ; 
    let info = req.body ;
    let criterio = {
      where : [{id : id}]
     }
    posteo.update(info,criterio).then((result)=>{
      return res.redirect("/users/miPerfil/id/" + id)
    }).catch((error)=> {
      return console.log(error);
    }) 

  }


};
module.exports = postsController;

