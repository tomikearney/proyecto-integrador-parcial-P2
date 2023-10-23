const data = require("../database/models");
const posteo = data.Posteo; // Posteo es el alias del modelo
const usuario = data. Usuario;
const op = data.Sequelize.Op;
const relaciones = { include: { all: true, nested: true } } // TRAE TODAS LAS RELACIONES TODAS LAS ASOCIACIONES

const indexController ={
    index :function(req, res, next) {
        posteo.findAll(relaciones) 
        .then((result) => {
            // res.send (result)
            res.render('index', { listaUsuarios: result.usuarios, listaPosteos:result, usuarioLogueado: true});
        })
        .catch((error) => {
          return res.send(error);
        });

    },
    login: function (req, res) {
        res.render('login', { usuarioLogueado: false });
    },
    registro: function (req, res) {
        res.render('registracion', {usuarioLogueado: false });
    },
    busqueda: function (req, res) {
        let busqueda = req.query.searchUsuario;
console.log(busqueda);
        let filtro = {
            where: [
                {nombre: {[op.like]: `%${busqueda}%`}}
            ],
            include :[ {association:"posteos"},
            {association:"comentarios"}
]
            
        };

        usuario.findAll(filtro) 
        .then((result) => {
            res.send (result)
            // res.render('resultadoBusqueda', { listaUsuarios: result.usuarios, listaPosteos:result, usuarioLogueado: true});
        })
        .catch((error) => {
          return res.send(error);
        });
        // res.render('resultadoBusqueda', {idUsuario:id, listaUsuarios: data.usuario, listaPosteos:data.posteos, usuarioLogueado: true }); 

    }
}

module.exports = indexController;