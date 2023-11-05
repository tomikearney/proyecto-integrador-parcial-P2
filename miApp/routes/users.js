var express = require('express');
var router = express.Router();
const usuariosController = require("../controller/usuariosController")

  router.get("/miPerfil/id/:id?", usuariosController.miPerfil); 

  /*Mostrar el formulario de editar mi perfil */
  router.get('/editarPerfil/id/:id', usuariosController.editarPerfil); 
  
  /*Procesar la información recibida */
  
  /*  /*Procesar la información recibida */

  router.get('/detalleUsuario/id/:id', usuariosController.detalleUsuario);
  
  module.exports = router;

