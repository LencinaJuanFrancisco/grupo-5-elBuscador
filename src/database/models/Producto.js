
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
    
    return Producto;

}