const data = require("../db/data")

const postsController = {
  detallePost: function (req, res, next) { 
    //se requiere el id del posteo correspondiente para dar los detalles correspondiente
    const idPost = req.params.id;
    res.render('detallePost', { idPosteo: idPost, listaUsuarios: data.usuario, listaPosteos: data.posteos })},

 
  agregarPost: function (req, res, next) {
    res.render('agregarPost', { title: 'New Post' });
  },

};
module.exports = postsController;

