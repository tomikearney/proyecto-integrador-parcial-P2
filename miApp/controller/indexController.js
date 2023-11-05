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
        //recordarme cuadndo se re logueo esto es cookies
        let criterio ={
            where: [{
                email:emailBuscado
            }]
        };

        usuario.findOne (criterio)

        .then((result) =>{
            if (result != null){
                let check = bcrypt.compareSync(pass,result.clave)
                if (check) {
                    return res.redirect ("/")
                } else {
                    return res.render ("login")
                }
            }else{
                return res.send ("No existe el mail " + emailBuscado)
            }
        })
        .catch((error)=>{
            return res.send(error)
        })
    },

    registro: function (req, res,next) {
        /*crear un condicional si queremos que sea distinto a undefinded y es true se envia a crear el post y si no a login. Por más que se ingrese por ruta se debe redireccionar correctamente*/
        res.render('registracion', {usuarioLogueado: false });
    },
    store:function (req,res,next) {
        let info = req.body;
        let user = {
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

    busqueda: function (req, res) {
        let busqueda = req.query.searchUsuario; 
        
        console.log(busqueda);

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

    }
}

module.exports = indexController;



/*NOTAS DE LO QUE CAMBIE*/
/*
1. voy a ver vista de index




*/