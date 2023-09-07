var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

/* GET home page. */
//VA A INICIO -HOME
router.get('/', indexController.index);

//POSIBLES RUTAS ?PREGUNTAR

// router.get("/login",function(req,res){
//   res.render('login', { title: 'Express' });

// });

// router.get("/registracion",function(req,res){
//   res.render('registracion', { title: 'Express' });

// });


router.get("/searchResult",function(req,res){
  res.render('resultadoBusqueda', { title: 'Express' });

});
module.exports = router;
