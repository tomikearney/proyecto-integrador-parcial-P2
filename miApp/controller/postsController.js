
//vinculo con datebases y models
const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
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
      // res.send (result)
      res.render('detallePost', { idPosteo: idPost, listaUsuarios: result.posteoUsuario, listaPosteos: result, usuarioLogueado: true})
  })
  .catch((error) => {
    return res.send(error);
  })
  },

  agregarPost: function (req, res, next) {
    res.render('agregarPost', { usuarioLogueado: true });
  },

};
module.exports = postsController;

/*NOTA DE LOS CAMBIOS QUE HAGO:
1. */