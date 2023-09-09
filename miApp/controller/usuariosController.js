const db = require ("../db/data")

const usuariosController ={
   miPerfil: function (req, res) {
    
    for (let i = 0; i < usuario.usuario.length; i++) {
            arrayUsuario =[]
            if(usuario.usuario[i].id == "1")
            arrayUsuario.push(usuario.usuario[i])

    
     }

    return res.render("miPerfil", {listaUsuario: arrayUsuario, title: "express", })
}
,
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
  
  