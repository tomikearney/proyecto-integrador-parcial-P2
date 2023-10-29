//nombre de los modelos en singular
module.exports= function (sequelize, dataTypes) {
    //alias
    let alias ="Posteo";

    //columnas
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario:{
            type: dataTypes.INTEGER
        },
        nombreImg:{
            type: dataTypes.STRING
        },
        descripcionImg:{
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
        tableName:"posteos",
        timestamps: true,
        underscored: false // en este caso es false porque esta en camelCASE
    }
    //definimos los modelos
    const Posteos = sequelize.define(alias,cols,config);

    //relaciones
    Posteos.associate = function (models) {
        Posteos.belongsTo (models.Usuario,{
            as: "usuarios", //alias de relaciones
            foreignKey :"idUsuario"
        });

        Posteos.hasMany (models.Comentario,{
            as: "comentarios", //alias de relaciones
            foreignKey :"idPosteo"
        });
    }
    //retorno del modelo
    return Posteos;
}