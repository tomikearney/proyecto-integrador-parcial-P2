const data = require ("../db/data")

const usuariosController ={
   miPerfil: function (req, res) {
    let ingresoId = req.params.id; //recupero el id que se le manda por la ruta, para luego dependiendo de este mostrar un perfil
    let arrayUsuarioPerfil=[];

    for (let i = 0; i < data.usuario.length; i++) {
            if(ingresoId == data.usuario.id){
              arrayUsuarioPerfil.push(data.usuario[i]); 
            }
    }

    if (!arrayUsuarioPerfil){
      return res.render("registracion", {title:"¡No encontramos el perfil! Por favor,registrate"});
    }

    return res.render("miPerfil", {listaUsuario: arrayUsuarioPerfil})
    // return res.render('miPerfil', { title: "Express"});
  },

  editarPerfil : function(req, res, next) {
    
    res.render('editarPerfil', { title: 'Express' });
  },
  detalleUsuario :function(req, res, next) {
    //validar id cuando se ingrese y ver si es igual entonces se muestra detalle del usuario que se ingrese
    res.render('detalleUsuario', { title: 'Express' });
  },

  login :function(req,res){
    res.render('login', { title: 'Express' });
  
  },
  registracion : function(req,res){
    res.render('registracion', { title: 'Express' });
  
  }

};
module.exports = usuariosController;
  
  