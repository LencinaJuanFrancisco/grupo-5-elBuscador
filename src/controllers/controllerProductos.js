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
    
    listadoProducto:(req,res)=>{
        res.render('listadoProducto')
    }

}
module.exports = controllerProducto;