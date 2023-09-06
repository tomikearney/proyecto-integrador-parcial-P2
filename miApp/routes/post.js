var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get("/agregarPost",function(req,res){
  res.render('agregarPost', { title: 'Express' });

});

router.get("/detallePost",function(req,res){
  res.render('detallePost', { title: 'Express' });

});



module.exports = router;
