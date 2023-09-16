var express = require('express');
var router = express.Router();
const usuariosController = require("../controller/usuariosController")

  router.get("/miPerfil/id/:id", usuariosController.miPerfil); 

  router.get('/editarPerfil/id/:id', usuariosController.editarPerfil); 
  
  router.get('/detalleUsuario/id/:id', usuariosController.detalleUsuario);
  
  module.exports = router;

