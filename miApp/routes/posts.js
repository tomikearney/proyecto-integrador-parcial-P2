/*Variable que requiere un modulo de terceros*/
var express = require('express');

const postsController = require("../controller/postsController")
/*configuracion del sistema de ruteo */
var router = express.Router();

/* GET users listing. */

/*se agregaria un post cuando se ingrese un id de un usuario indicado, y tambien tenermos que validar de que pasaria cunado no este el id */
router.get("/detalle/id/:id", postsController.detallePost);/*?? */

router.get("/add", postsController.agregarPost);

module.exports = router;
