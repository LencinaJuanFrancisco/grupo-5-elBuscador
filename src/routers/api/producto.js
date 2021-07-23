const express= require('express');
const router = express.Router();
const db = require('../../database/models')

router.get('/producto',(req,res)=>{
    db.Producto.findAll()
    .then(productos => res.json(productos))

})


module.exports= router;