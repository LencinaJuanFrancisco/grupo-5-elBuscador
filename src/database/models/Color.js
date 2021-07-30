module.exports = (sequelize,dataTypes)=>{

let alias = 'Color';
let cols={
    id:{
        type: dataTypes.BIGINT(10).UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{  
        type: dataTypes.STRING(100),
        allowNull: false
    },
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    //deletedAt: 'deleted_at',
};
let config={
    tableName:'colores',
    timestamps: true,
   // paranoid: true,// para poder habilitar el paranoid debe estar habilitado el timestamps en true
    underscored: true,
};

    const Color = sequelize.define(alias,cols,config);
    
    Color.associate = function(models){
        Color.belongsToMany(models.Producto,{
            as:'productos',
            through:'colores_productos',
            foreignKey:'color_id',
            otherKey:'producto_id',
            timestamps:true

        })        
    }


    return Color;
}