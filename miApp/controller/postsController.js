const data = require ("../db/data")

const postsController ={
  detallePost: function(req, res, next) { //validar id
    res.render('detallePost', { title: 'Express' });
  },
agregarPost: function(req, res, next) {
    res.render('agregarPost', { title: 'Express' });
  },

};
module.exports = postsController;

