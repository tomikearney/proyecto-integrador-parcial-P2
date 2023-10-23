//nombre de los modelos en singular
module.exports= function (sequelize, DataTypes) {
    //alias
    let alias ="Usuario";

    //columnas
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        clave:{
            type: DataTypes.STRING
        },
        fotoPerfil:{
            type:DataTypes.STRING
        },
        fecha:{
            type:DataTypes.DATE
        },
        dni:{
            type: DataTypes.INTEGER
        },
        createdAt : {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        deletedAt:{ // puede estar vacio por ello es null, pero si es notNull puede estar vacio
            type: DataTypes.DATE,
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
            as: "posteos", //alias de relaciones
            foreignKey: "idUsuario"
        });
    
        /*ahora vemos la contraparte en Posteos */
    Usuarios.hasMany (models.Comentario,{
        as: "comentarios", //alias de relaciones
        foreignKey: "idUsuario"
    })

    }
    //retorno del modelo
    return Usuarios;
}