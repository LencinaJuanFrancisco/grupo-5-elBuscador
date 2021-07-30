module.exports = (sequelize,dataTypes)=>{

    let alias = 'Imagen';
    let cols={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{  
            type: dataTypes.STRING(225),
            allowNull: false
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        //deletedAt: 'deleted_at',
    };
        let config={
        tableName:'imagenes',
        timestamps: true,
       // paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        underscored: true,
    };
    
        const Imagen = sequelize.define(alias,cols,config)

        Imagen.associate = function(models){
            Imagen.belongsTo(models.Producto,{
                as:'productos',
                foreignKey:'producto_id'
            })
        }
    
    
        return Imagen;
    }