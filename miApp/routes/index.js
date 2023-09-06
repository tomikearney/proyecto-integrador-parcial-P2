var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/login",function(req,res){
  res.render('login', { title: 'Express' });

});

router.get("/registracion",function(req,res){
  res.render('registracion', { title: 'Express' });

});

router.get("/searchResult",function(req,res){
  res.render('resultadoBusqueda', { title: 'Express' });

});
module.exports = router;
