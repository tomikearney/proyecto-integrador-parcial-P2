var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")
const postsController = require("../controller/postsController")
const usuariosController = require ("../controller/usuariosController")


router.get('/inicio', indexController.index);

router.get('/login', indexController.login);

router.get('/registracion', indexController.registro);

router.get('/busqueda', indexController.busqueda);

module.exports = router;
