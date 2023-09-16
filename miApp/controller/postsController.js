const data = require("../db/data")

const postsController = {
  detallePost: function (req, res, next) { 
    //se requiere el id del posteo correspondiente para dar los detalles correspondiente
    const idPost = req.params.id;
    res.render('detallePost', { idPosteo: idPost, listaUsuarios: data.usuario, listaPosteos: data.posteos, usuarioLogueado: true })
  },

 
  agregarPost: function (req, res, next) {
    res.render('agregarPost', { usuarioLogueado: true });
  },

};
module.exports = postsController;

