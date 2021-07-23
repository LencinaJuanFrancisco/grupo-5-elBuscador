module.exports=(sequelize,dataTypes)=>{
    alias='ColoresProductos';
    cols={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        prducto_id:{
            type: dataTypes.INTEGER,
        },
        color_id:{
            type: dataTypes.INTEGER,
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };
    config={
        underscored: true,
        tableName:'colores_productos',
        timestamps: true,
        paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
    }

    const ColoresProductos = sequelize.define(alias,cols,config);

    ColoresProductos.associate = function(models){
        ColoresProductos.belongsTo(models.Producto,{
        foreignKey:'producto_id'
        
    })
    ColoresProductos.belongsTo(models.Color,{
        foreignKey:'color_id'
        
    })
    }
    return ColoresProductos
}