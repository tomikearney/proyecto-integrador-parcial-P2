const data = require ("../db/data")

const postsController ={
  detallePost: function(req, res, next) { //validar id
    const ingresoId = req.params.id;
    let arrayAboutPosteos = []; //tendria que estar todo lo relacionado con el usuario

      for (let i = 0; i < data.usuario.length; i++) {
          if (ingresoId == data.posteos[i].id) {
            arrayAboutPosteos.push(data.posteos[i])
          }            
      }

    
    res.render('detallePost', { listaPosteos: arrayAboutPosteos, title: 'Detalle posteo' });
  },
agregarPost: function(req, res, next) {
    res.render('agregarPost', { title: 'Express' });
  },

};
module.exports = postsController;

