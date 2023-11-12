var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")

router.get('/', indexController.index);
/*Mostrar el formulario de login */
router.get('/login', indexController.login);

/*Procesar los datos recibidos de login */
router.post('/login', indexController.loginPost);

/*Mostrar el formulario de registracion */
router.get('/registracion', indexController.registro);

/*Procesar los datos recibidos de registracion */
router.post('/registracion', indexController.store);

router.get('/busqueda', indexController.busqueda);

router.post('/logout', indexController.logout);

module.exports = router;
