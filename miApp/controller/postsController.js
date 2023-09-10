const data = require ("../db/data")

const postsController ={
    indexPosts : function(req,res){
        res.render('index', { title: 'Express' }); 
      },
  agregarPost :function(req,res){
    res.render('agregarPost', { title: 'Express' });
  },

  detallePost : function(req,res){
    res.render('detallePost', { title: 'Express' });
  
  }

}

module.exports = postsController;

