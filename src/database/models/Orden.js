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
    
        Orden.associate= sequelize.define(alias,cols,config)
    
    
        return Orden;
    }