/*Variable que requiere un modulo de terceros*/
var express = require('express');

const postsController = require("../controller/postsController")
/*configuracion del sistema de ruteo */
var router = express.Router();

/* GET users listing. */

router.get("/",postsController.indexPosts);

router.get("/agregarPost",postsController.agregarPost);

router.get("/detallePost",postsController.detallePost);


module.exports = router;
