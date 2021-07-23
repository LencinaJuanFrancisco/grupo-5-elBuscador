module.exports = (sequelize, dataTypes) => {

    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        pass: {
            type: dataTypes.TEXT(250),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.TEXT(250),
            allowNull: false,
        },
        rol_id: {
            type: dataTypes.BIGINT(10)
        },
    };
    let config = {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
            underscored: true,
    };


    const Usuario = sequelize.define(alias, cols, config);
     Usuario.associate = function(models){
        Usuario.hasMany(models.Orden,{
            as:'ordenes',
            foreignKey:'usuario_id'
        }),
        Usuario.belongsTo(models.Rol,{
            as:'roles',
            foreignKey:'usuario_id'
        })
    }
    
    
    return Usuario;
}