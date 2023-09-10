var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")
const postsController = require("../controller/postsController")
const usuariosController = require ("../controller/usuariosController")

/* GET home page. */
//VA A INICIO -HOME
router.get('/inicio', indexController.index);
module.exports = router;
