var express = require('express');
var router = express.Router();
const usuarioContoller= require("../controller/usuarioControlador")


router.get("/miPerfil",usuarioContoller.miPerfil);

module.exports = router