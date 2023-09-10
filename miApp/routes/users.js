var express = require('express');
var router = express.Router();
const usuariosController = require("../controller/usuariosController")

//QUE TENDRIA QUE PASAR CUANDO SE PONGA COMO RUTA /USUARIOS
  router.get('/login', usuariosController.login);

  router.get('/registracion', usuariosController.registro);

  router.get("/miPerfil", usuariosController.miPerfil);
// router.get('/miPerfil/id/:id', usuariosController.miPerfil);

  router.get('/editarPerfil', usuariosController.editarPerfil); //TIENE QUE TENER UN ID Y IN ID OPCIONAL PARA QUE NOS DE EL PERFIL DE UN USUARIO EN ESPECIFICO
  
  router.get('/detalleUsuario/id/:id', usuariosController.detalleUsuario);
  
  module.exports = router;

