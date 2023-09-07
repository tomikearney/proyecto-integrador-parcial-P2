const db = require ("../db/data")

const usuariosController ={
   miPerfil: function(req,res){
    res.render('miPerfil', { title: 'Express' });
  },
  editarPerfil : function(req, res, next) {
    res.render('editarPerfil', { title: 'Express' });
  },
  detalleUsuario :function(req, res, next) {
    res.render('detalleUsuario', { title: 'Express' });
  },

  login :function(req,res){
    res.render('login', { title: 'Express' });
  
  },
  registracion : function(req,res){
    res.render('registracion', { title: 'Express' });
  
  }

}
module.exports = usuariosController;
  
  