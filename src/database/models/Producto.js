
module.exports=(sequelize,dataTypes)=>{
    let alias = "Producto"
    let cols={
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre:{
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        precio:{
            type: dataTypes.DECIMAL(8,2),
            allowNull: false
        },
        descripcion:{
            type: dataTypes.TEXT
        },
        cantidad:{
            type: dataTypes.BIGINT(10)
        },
        temporada_id:{
            type: dataTypes.BIGINT(10)
        },
        genero_id:{
            type: dataTypes.BIGINT(10)
        },

    }
   
        let config={
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
            underscored: true,

    }
    const Producto = sequelize.define(alias,cols,config);
    
    Producto.associate = function(models){
        
        Producto.belongsTo(models.Genero,{
            as:'generos',
            foreignKey:'genero_id'
        }),
        Producto.hasMany(models.Imagen,{
            as:'imagenes',
            foreignKey:'producto_id'
        }),
        Producto.belongsTo(models.Temporada,{
            as:'temporadas',
            foreignKey:'temporada_id'
        }),
        Producto.belongsToMany(models.Color,{
            as:'colores',
            through:'colores_productos',
            foreignKey:'producto_id',
            otherKey:'color_id',
            timestamps:true

        }),
        Prodocto.belongsToMany(models.Orden,{
            as:'ordenes',
            through:'productos_oredenes',
            foreignKey:'producto_id',
            otherKey:'orden_id',
            timestamps:true
            
        }),
        Producto.belongsToMany(models.Talle,{
            as:'talles',
            through:'talles_productos',
            foreignKey:'producto_id',
            otherKey:'talle_id',
            timestamps:true
            
        })

    }
    
    return Producto;

}