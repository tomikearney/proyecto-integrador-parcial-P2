const usuario = require("../db/data")

const usuarioContoller= {  
    
    miPerfil: function (req, res) {
    
        for (let i = 0; i < usuario.usuario.length; i++) {
                arrayUsuario =[]
                if(usuario.usuario[i].id == "1")
                arrayUsuario.push(usuario.usuario[i])

        
         }
   
    return res.render("miPerfil", {listaUsuario: arrayUsuario, title: "Listado Bandas", })
}


}

module.exports = usuarioContoller