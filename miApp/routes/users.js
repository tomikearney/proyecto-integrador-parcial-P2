var express = require('express');
var router = express.Router();
const usuariosController = require("../controller/usuariosController")

  router.get("/miPerfil/id/:id", usuariosController.miPerfil); //y obligatorio?

  router.get('/editarPerfil/id/:id', usuariosController.editarPerfil); //va el id?
  
  router.get('/detalleUsuario/id/:id', usuariosController.detalleUsuario);
  
  module.exports = router;

