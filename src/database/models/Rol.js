module.exports = (sequelize,dataTypes)=>{

    let alias = 'Rol';
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
            tableName:'roles',
        timestamps: true,
        paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
        underscored: true,
    };
    
        const Rol= sequelize.define(alias,cols,config);
        Rol.associate = function(models){
            Rol.hasMany(models.Usuario,{
                as:'usuarios',
                foreignKey:'rol_id'
            })
        }
    
    
        return Rol;
    }