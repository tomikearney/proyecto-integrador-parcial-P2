/*Variable que requiere un modulo de terceros*/
var express = require('express');

const postsController = require("../controller/postsController")
/*configuracion del sistema de ruteo */
var router = express.Router();

/* GET users listing. */

router.get("/detallePost/id/:id", postsController.detallePost);

/*Mostrar el formulario para agregar un post */
router.get("/add", postsController.agregarPost);

router.post("/add", postsController.storePost)
// editar posteos 
router.get("/editarPost/id/:id",postsController.showPost )
router.post("/editarPost/id/:id",postsController.updatePost )

//router.get("/deletePost/id/:id", postsController.deletePost)

/*FALTA HACER: Procesar la información recibida para editar lo que se sube, con el postController.update|destroy */
/*Mostrar la información recibida  */

module.exports = router;
