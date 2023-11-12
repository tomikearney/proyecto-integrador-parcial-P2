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
        }; // TRAE TODAS LAS RELACIONES TODAS LAS ASOCIACIONES

        posteo.findAll(relaciones) 
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
        let pass = req.body.clave;
        let rememberMe= req.body.rememberMe;
        let criterio ={
            where: [{
                email:emailBuscado
            }]
        };

        // console.log(req.body)
        // console.log(rememberMe != undefined);
        /*Validación de formularios*/

        let errors = {}

        if (emailBuscado == "") {
            errors.message = "El campo email está vacío"
            res.locals.errors = errors //A propiedad(la llamamos errors) le asignamos obj literal errors
            return res.render("login")
        }
        else if (pass == "") {
            errors.message = "El campo clave está vacío"
            res.locals.errors = errors //A propiedad(la llamamos errors) le asignamos obj literal errors
            return res.render("login")
        }
        else {
            usuario.findOne (criterio)
            .then((result) =>{
                if (result != null){
                    let check = bcrypt.compareSync(pass,result.clave)
                    //me da un booleano y se peude usar un condicional
                    if (check) { 
                        // esto es si exite la contraseña y el mail, entonces se configura para que guarde los datos en el momento que se pone recordame --> cookie
                        req.session.user = result.dataValues;
                        if(rememberMe != undefined){
                            res.cookie("UserId"/*nombre de cookie en app.js */,result.id /*valor de la cookie*/,{maxAge:1000*60*5})
                        }
                        return res.redirect ("/")
                    } else {
                        res.render('login', { usuarioLogueado: false });
                    }
                }else {
                    return res.send ("No existe el mail " + emailBuscado)
                }
            })
            .catch((error)=>{
                return console.log(error);
            })
        }

        

        
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
        let user = { 
            //Se crea un objeto user que contiene los datos del usuario que se va a registrar. 
            nombre : info.nombre,
            email : info.email,
            clave : bcrypt.hashSync(info.clave,10),
            fotoPerfil : info.fotoPerfil,
            fecha : info.fecha,
            dni : Number(info.dni),
            // remember_token:"false"

        };

        

        // res.send(user)
        usuario.create(user)
        .then((result) => {
            return res.redirect("/login");
        }).catch((error) => {
            return res.send(error)
        });

    },
    //TERMINAR DE VER BUSQUEDA
    busqueda: function (req, res) {
        let busqueda = req.query.searchUsuario; 
        
        // console.log(busqueda);

        let filtro = {
            where: [
                {nombre: {[op.like]: `%${busqueda}%`}}
            ],

            include :[ {association:"usuarioPosteo"},
            {association:"usuarioComentario"}
        ]
            
        };

        usuario.findAll(filtro) 
        .then((result) => {
            // res.send (result)
            res.render('resultadoBusqueda', { listaUsuarios: result.usuarioPosteo, listaPosteos:result, usuarioLogueado: true});
        })
        .catch((error) => {
          return res.send(error);
        });

    }, logout : function (req, res) {
        // Destruir la sesión actual
        req.session.destroy((error) => {
            if (error) {
               return res.send("error al cerrar la secion ")
            }
    
            // Redirigir a la página de inicio u otra página después del logout
            res.redirect('/');
        });
    },
}

module.exports = indexController;
