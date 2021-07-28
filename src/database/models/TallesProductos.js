module.exports=(sequelize,dataTypes)=>{
    alias='TallesProductos';
    cols={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        prducto_id:{
            type: dataTypes.INTEGER,
        },
        talle_id:{
            type: dataTypes.INTEGER,
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };
    config={
        underscored: true,
        tableName:'talles_productos',
        timestamps: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        paranoid: true,
    }


    const TallesProductos = sequelize.define(alias,cols,config);

    TallesProductos.associate = function(models){
    TallesProductos.belongsTo(models.Producto,{
        foreignKey:'producto_id'
        
    })
    TallesProductos.belongsTo(models.Talle,{
        foreignKey:'talle_id'
        
    })
    }
    return TallesProductos
}