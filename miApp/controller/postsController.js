
//vinculo con datebases y models
const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
const op = data.Sequelize.Op //me traigo operadores que estan en modelos index

const postsController = {
  detallePost: function (req, res) { 
    //se requiere el id del posteo correspondiente para dar los detalles correspondiente
    const idPost = req.params.id;
    res.render('detallePost', { idPosteo: idPost, listaUsuarios: data.usuario, listaPosteos: data.posteos, usuarioLogueado: true })
  },

 
  agregarPost: function (req, res, next) {
    res.render('agregarPost', { usuarioLogueado: true });
  },

};
module.exports = postsController;

