const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
const usuario = data.Usuario;
const op = data.Sequelize.Op;
const bcrypt = require("bcryptjs")

const indexController ={
    index :function(req, res, next) {
        // let id = req.params.id;
        let filtro = {
            //****ACA VA EL ORDER, LIMIT,WHERE***
            order : [['createdAt', 'DESC']],
            include: { 
                all: true, 
                nested: true
            }
        }

        posteo.findAll(filtro) 
        .then((result) => {
            res.render('index', { dataCompleta: result }); /*mando toda la informacion y luego ingresamos con a posicion desde vista */

        })
        .catch((error) => {
          return res.send(error);
        })

    },


    login: function (req, res) {

        if (req.session.user != undefined) {
            res.redirect("/")
        } else {
            res.render('login');
        }
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
            res.locals.errors = errors; //A propiedad(la llamamos errors) le asignamos obj literal errors
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
                            res.cookie("UserId",result.id,{maxAge:2000*60*5})
                        }
                        return res.redirect ("/posts/add")
                    } else {
                        errors.message = "La contraseña es incorrecta";
                        res.locals.errors = errors;
                        return res.render('login', { usuarioLogueado: false });
                    }
                }else {
                    errors.message ="No existe el mail " + emailBuscado;
                    res.locals.errors = errors;
                    res.render ('login');
                    console.log(errors)
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

        if (req.session.user != undefined) {
            res.redirect("/")
        } else {
            res.render('registracion');
        }
    },

    store:function (req,res,next) {

        let info = req.body;

        /*Validamos lo que se ingresa */
        let errors ={};

        let criterio ={
            where: [{
                email: info.email
            }]
        };

        usuario.findOne (criterio)
        .then((result) =>{
            if (result != null){
                errors.message = "El campo email se encuentra repetido";
                res.locals.errors = errors;
                res.render('registracion');
            }
        })
        .catch((error)=>{
            return console.log(error);
        });
        
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

        }  else if(info.dni == ""){
            errors.message = "¡Ups! El campo de tu DNI esta vacío";
            res.locals.errors = errors;
            return res.render("registracion");

        } else{
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
                console.log (error);

                
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
            //****ACA VA EL ORDER, LIMIT,WHERE***
            where: [
                {descripcionImg: {[op.like]: `%${busqueda}%`}}
            ],
            order : [['createdAt', 'DESC']],
            limit: 10,
            include: { 
                all: true, 
                nested: true
            }
        }; 
        posteo.findAll(filtro) 
        .then((results) => {
            //return res.send(results)
            res.render('resultadoBusqueda', { dataCompleta: results, criterio:busqueda});
        })
        .catch((error) => {
          return res.send(error)
        });
    }, 

}

module.exports = indexController;