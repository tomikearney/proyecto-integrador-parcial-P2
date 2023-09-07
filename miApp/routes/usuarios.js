var express = require('express');
var router = express.Router();
const usuariosController = require("../controller/usuariosController")

router.get("/miPerfil", usuariosController.miPerfil);

  router.get('/editarPerfil', usuariosController.editarPerfil); //TIENE QUE TENER UN ID Y IN ID OPCIONAL PARA QUE NOS DE EL PERFIL DE UN USUARIO EN ESPECIFICO
  
  router.get('/detalleUsuario', usuariosController.detalleUsuario);
  //DEL DETALLE DE USUARIO ES IGUAL AL ANTERIOR
  
  router.get("/login",usuariosController.login);
  
  router.get("/registracion",usuariosController.registracion);

  module.exports = router

  //PONEMOS ACA