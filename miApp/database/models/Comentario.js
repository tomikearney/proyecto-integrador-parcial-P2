//nombre de los modelos en singular
module.exports= function (sequelize, dataTypes) {
    //alias
    let alias ="Comentario";

    //columnas
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idPosteo:{
            type: dataTypes.INTEGER
        },
        idUsuario:{
            type: dataTypes.INTEGER
        },
        comentario:{
            type: dataTypes.STRING
        },
        createdAt : {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        updatedAt:{
            type: dataTypes.DATE,
        }
        
    }
    //conf de la tabla
    let config = {
        tableName:"comentarios",
        timestamps: true,
        underscored: false // en este caso es false porque esta en camelCASE
    }
    //definimos los modelos
    const Comentarios = sequelize.define(alias,cols,config);

    //relaciones
    Comentarios.associate = function (models) {
        Comentarios.belongsTo (models.Usuario,{
            as: "usuarios", //alias de relaciones
            foreignKey :"idUsuario"
        });

        Comentarios.belongsTo (models.Posteo,{
            as: "posteos", //alias de relaciones
            foreignKey :"idPosteo"
        });
    
    }
       
    //retorno del modelo
    return Comentarios;
}