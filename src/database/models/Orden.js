module.exports = (sequelize,dataTypes)=>{

    let alias = 'Orden';
    let cols={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id:{
            type: dataTypes.BIGINT(10)
        },
        total_de_compra:{
            type: dataTypes.DECIMAL(8,2)
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };
        let config={
        tableName:'ordenes',
        timestamps: true,
        paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        underscored: true,
    };
    
        const Orden = sequelize.define(alias,cols,config);

        Orden.associate = function(models){
            Orden.belongsTo(models.Usuario,{
                as:'usuario',
                foreignKey:'usuario_id'
            }),
            Orden.belongsToMany(models.Producto,{
                as:'productos',
                through:'productos_oredenes',
                foreignKey:'orden_id',
                otherKey:'producto_id',
                timestamps:true
                
            })

        }
    
    
        return Orden;
    }