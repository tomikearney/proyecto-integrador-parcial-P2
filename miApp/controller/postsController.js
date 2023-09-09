const db = require ("../db/data")

const postsController ={
    indexPosts : function(req,res){
        res.render('index', { title: 'Express' }); // aca se deberian mostrar todos los postos cuando la ruta es /post
      },
  agregarPost :function(req,res){
    res.render('agregarPost', { title: 'Express' });
  },

  detallePost : function(req,res){
    res.render('detallePost', { title: 'Express' });
  
  }

}

module.exports = postsController;

