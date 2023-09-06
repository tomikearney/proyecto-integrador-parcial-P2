var express = require('express');
var router = express.Router();

router.get("/miPerfil",function(req,res){
    res.render('miPerfil', { title: 'Express' });
  
  });

module.exports = router