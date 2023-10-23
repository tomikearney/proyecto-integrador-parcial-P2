//nombre de los modelos en singular
module.exports= function (sequelize, DataTypes) {
    //alias
    let alias ="Comentario";

    //columnas
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        idPosteo:{
            type: DataTypes.INTEGER
        },
        idUsuario:{
            type: DataTypes.INTEGER
        },
        comentario:{
            type: DataTypes.STRING
        },
        createdAt : {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
        updatedAt:{
            type: DataTypes.DATE,
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