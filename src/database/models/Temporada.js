module.exports = (sequelize,dataTypes)=>{

    let alias = 'Temporada';
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
        //deletedAt: 'deleted_at',
    };
        let config={
        timestamps: true,
       // paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        underscored: true,
    };
    
        const Temporada= sequelize.define(alias,cols,config);

        Temporada.associate = function(models){
            Temporada.hasMany(models.Producto,{
                as:'productos',
                foreignKey:'temporada_id'
            })
        }
    
    
        return Temporada;
    }