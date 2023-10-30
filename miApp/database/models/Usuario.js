//nombre de los modelos en singular
module.exports= function (sequelize, dataTypes) {
    //alias
    let alias ="Usuario";

    //columnas
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre:{
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        clave:{
            type: dataTypes.STRING
        },
        fotoPerfil:{
            type:dataTypes.STRING
        },
        fecha:{
            type:dataTypes.DATE
        },
        dni:{
            type: dataTypes.INTEGER
        },
        createdAt : {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt:{ // puede estar vacio por ello es null, pero si es notNull puede estar vacio
            type: dataTypes.DATE
        }
        
        
    }
    //conf de la tabla
    let config = {
        tableName:"usuarios",
        timestamps: true,
        underscored: false // en este caso es false porque esta en camelCASE
    }
    //definimos los modelos
    const Usuarios = sequelize.define(alias,cols,config);

    //relaciones
    Usuarios.associate = function (models) {
        Usuarios.hasMany(models.Posteo, { // alias de modelo Posteo
            as: "usuarioPosteo", //alias de relaciones
            foreignKey: "idUsuario"
        });
    
        /*ahora vemos la contraparte en Posteos */
    Usuarios.hasMany (models.Comentario,{
        as: "usuarioComentario", //alias de relaciones
        foreignKey: "idUsuario"
    })

    }
    //retorno del modelo
    return Usuarios;
}