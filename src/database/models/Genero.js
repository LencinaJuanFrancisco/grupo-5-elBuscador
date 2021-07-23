module.exports = (sequelize,dataTypes)=>{

    let alias = 'Genero';
    let cols={
        id:{
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{  
            type: dataTypes.STRING(45),
            allowNull: false
        },
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    };
        let config={
        timestamps: false,
        paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        underscored: true,
    };
    
        const Genero = sequelize.define(alias,cols,config);

        Genero.associate = function(models){
            Genero.hasMany(models.Producto,{
                as:'productos',
                foreignKey:'genero_id'
            })
        }
    
    
        return Genero;
    }