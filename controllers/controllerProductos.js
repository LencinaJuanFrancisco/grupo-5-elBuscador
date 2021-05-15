const controllerProducto = {
    
    detalle: (req,res)=>{
        res.render('producto');
        
    },
    carrito: (req,res)=>{
        res.render('carrito');
        
    },
    cargaProducto: (req,res)=>{

        res.render('carga');
    },
    


}
module.exports = controllerProducto;