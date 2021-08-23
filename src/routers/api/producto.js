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


module.exports= router;