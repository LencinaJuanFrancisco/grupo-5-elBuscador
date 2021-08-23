const express= require('express');
const router = express.Router();
const db = require('../../database/models')

router.get('/producto',(req,res)=>{
    db.Producto.findAll()
    .then(productos => res.json({
        total: productos.length,
        data: productos,
        status: 200
    }))

})

// FALTA DESDE ACA - EL FILTRADO POR CATEGORIAS 
router.get('/producto/temporada',(req,res)=>{
    db.Producto.findAll({
        where: {
            temporada_id: 2,
        }
    })
    .then(productos => {
        return res.status(200).json(produtos);
    })
})


module.exports= router;