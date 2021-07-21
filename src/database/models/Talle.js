module.exports = (sequelize,dataTypes)=>{

    let alias = 'Talle';
    let cols={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{  
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };
        let config={
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        underscored: true,
    };
    
        const Talle= sequelize.define(alias,cols,config);
        Talle.associate= function(models){

            Talle.belongsToMany(models.Producto,{
                as:'productos',
                through:'talles_productos',
                foreignKey:'talle_id',
                otherKey:'producto_id',
                timestamps:true
                
            })
            
        }
    
        return Talle;
    }