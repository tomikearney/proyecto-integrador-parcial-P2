const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
const usuario = data.Usuario;
const op = data.Sequelize.Op;
const bcrypt = require("bcryptjs")

const indexController ={
    index :function(req, res, next) {
        // let id = req.params.id;

        let relaciones = {
            include: { 
                all: true, 
                nested: true
            }
        }; 

        let filtro = {
            //****ACA VA EL ORDER, LIMIT,WHERE***
            order : ['createdAt', 'DESC']
        }

        posteo.findAll(relaciones, filtro) 
        .then((result) => {
            res.render('index', { dataCompleta: result, usuarioLogueado: true }); /*mando toda la informacion y luego ingresamos con a posicion desde vista */

        })
        .catch((error) => {
          return res.send(error);
        })

    },


    login: function (req, res) {
        res.render('login', { usuarioLogueado: false });
    },

    loginPost: (req,res,next) => {

        let emailBuscado = req.body.email;
        let clave = req.body.clave;
        let rememberMe= req.body.rememberMe;
       
        // console.log(req.body)
        // console.log(rememberMe != undefined);
        /*Validación de formularios*/

        let errors = {};

        if (emailBuscado == "") {
            errors.message = "El campo email está vacío"
            res.locals.errors = errors; //A propiedad(la llamamos errors) le asignamos obj literal errors
            return res.render("login")
        }else if (clave == "") {
            errors.message = "El campo clave está vacío"
            res.locals.errors = errors //A propiedad(la llamamos errors) le asignamos obj literal errors
            return res.render("login")
        } else {

            let criterio ={
                where: [{
                    email:emailBuscado
                }]
            };
    
            usuario.findOne (criterio)
            .then((result) =>{
                if (result != null){
                    let check = bcrypt.compareSync(clave,result.clave)
                    //me da un booleano y se peude usar un condicional
                    if (check) { 
                        // esto es si exite la contraseña y el mail, entonces se configura para que guarde los datos en el momento que se pone recordame --> cookie
                        req.session.user = result.dataValues;
                        if(rememberMe != undefined){
                            res.cookie("UserId",result.id,{maxAge:1000*60*5})
                        }
                        return res.redirect ("/posts/add")
                    } else {
                        res.render('login', { usuarioLogueado: false });
                    }
                }else {
                    return res.send ("No existe el mail " + emailBuscado)
                }
            })
            .catch((error)=>{
                return console.log(error);
            });
        }
        
    },
    //simplemente borramos todo lo que esta en session, es decir al usuario.
    logout : function (req, res) {
        req.session.user = undefined;
        res.locals.user = undefined;
        res.clearCookie ('UserId')
        return res.render ('login')

        // logout : function (req, res) {
        //     // Destruir la sesión actual
        //     req.session.destroy((error) => {
        //         if (error) {
        //            return res.send("error al cerrar la secion ")
        //         }
        
        //         // Redirigir a la página de inicio u otra página después del logout
        //         res.redirect('/');
        //     });
    },

    registro: function (req, res,next) {

        //CHEQUEAR SI ESTÁ BIEN
        if (req.session.user != undefined) {
            res.redirect("/")
        } else {
            res.render('registracion', {usuarioLogueado: false });
        }
    },

    store:function (req,res,next) {

        let info = req.body;

        /*Validamos lo que se ingresa */
        let errors ={};

        if (info.email == "") {
            errors.message = "El campo email esta vacío";
            res.locals.errors = errors;
            return res.render("registracion");

        } else if(info.clave == ""){
            errors.message = "El campo contraseña esta vacío";
            res.locals.errors = errors;
            return res.render("registracion");

        } else if(info.clave.length < 3){ 
            errors.message = "¡Ups! El campo contraseña debe contener más de tres caracteres";
            res.locals.errors = errors;
            return res.render("registracion");

        } else if(info.nombre == ""){
            errors.message = "¡Ups! El campo nombre se encuentra vacío";
            res.locals.errors = errors;
            return res.render("registracion");
        } else if(info.fotoPerfil == ""){
            errors.message = "¡Ups! El campo fotoPerfil se encuentra vacío";
            res.locals.errors = errors;
            return res.render("registracion");
        } else if(info.fecha == ""){
            errors.message = "¡Ups! El campo fecha se encuentra vacío";
            res.locals.errors = errors;
            return res.render("registracion");

        } else if(info.dni == ""){
            errors.message = "¡Ups! El campo de tu DNI esta vacío";
            res.locals.errors = errors;
            return res.render("registracion");

        }else{
            let user = { 
                //Se crea un objeto user que contiene los datos del usuario que se va a registrar. 
                nombre : info.nombre,
                email : info.email,
                clave : bcrypt.hashSync(info.clave,10),
                fotoPerfil : info.fotoPerfil,
                fecha : info.fecha,
                dni : Number(info.dni),
                // remember_token:"false" PREGUNTAR
    
            };
            // res.send(user)
            usuario.create(user)
            .then((result) => {
                return res.redirect("/login");
            }).catch((error) => {
                let errors = {}; /*PREGUNTAR */

                // console.log (error);

                errors.message = "El campo email se encuentra repetido";
                res.locals.errors = errors;
                res.render('registracion', { usuarioLogueado: false });
            });
    
        }       
    },
    //TERMINAR DE VER BUSQUEDA
    busqueda: function (req, res) {
        //capturo la qs
        let busqueda = req.query.searchUsuario; 
        
        //http://localhost:3000/busqueda?searchUsuario=oriana

        // return res.send("el dato que buscas es " + busqueda)

        let filtro = {
            where: [
                {nombre: {[op.like]: `%${busqueda}%`}}
            ],

            // include :[ {association:"usuarioPosteo"},
            // {association:"usuarioComentario"}]
            include: { 
                all: true, 
                nested: true
            },
            
        };

        usuario.findAll(filtro) 
        .then((results) => {
            // return res.send(results)
            res.render('resultadoBusqueda', { dataCompleta: results, criterio:busqueda, usuarioLogueado: true});
        })
        .catch((error) => {
          return res.render("error");
        });
    }, 

}

module.exports = indexController;

/*Nuevos
1. Hice la validación de formulacion
2. Logout --> simplemente le puse que borre todo lo que esta en session con undefined
 */