const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controllerProducto = {
    
    detalle: (req,res)=>{

    
         db.Producto.findByPk(req.params.id,{
             include:['generos','colores','talles','imagenes']//aca van los alias
         })
         .then(producto =>{

            console.log(producto.imagenes)
           // res.render(producto)
           res.render('producto',{product:producto})
         })
         .catch(e=>{
             console.log('***********************llegue');
            res.send(e)
     })
    },

    carrito: (req,res)=>{
        
        res.render('carrito', {carrito});
       
          
    },
    
    listadoProducto:(req,res)=>{
        db.Producto.findAll({
            include:['imagenes']
        })
            .then(productos => {
                res.render('listadoProducto', {products:productos})
            })
    },
    viewCarga: async (req, res) => {

       // let talleColor= {}
        let talles= await db.Talle.findAll()
        let colores = await db.Color.findAll()
        
        try{
            // talleColor.talles = talles;
            // talleColor.colores = colores;
            
            res.render("carga",{colores, talles});
        }
        catch(e){
            console.log(e)
        }
       
        
    },
    store: (req, res) => {
        console.log(req.body)

            db.Producto.create({
                nombre: req.body.nombreProducto,
                precio: req.body.precio,
                genero_id: req.body.genero,
                temporada_id:req.body.temporada,
                descripcion: req.body.detalleProducto,
                cantidad: req.body.cantidad,
                
            })
        .then((producto)=>{
            let imagen = req.file.filename
            db.Imagen.create({
                nombre: imagen,
                producto_id: producto.id
            })
            return producto
        })
        .then((producto)=>{
            console.log(producto)
            let talles = req.body.talles
            talles.forEach(talle => {
                console.log(talle)
                db.TallesProductos.create({
                producto_id: producto.id,
                talle_id:parseInt(talle)
            });
                 
            })
            return producto
        })
        .then((producto)=>{
            let colores = req.body.colores
            colores.forEach(color => {
                console.log(color)
                db.ColoresProductos.create({
                producto_id: producto.id,
                color_id:parseInt(color)
            });
                 
            })
            return producto
        })
        .then((producto)=>{
            res.redirect('/producto/'+producto.id)
        })
        .catch(e=>{
            console.log('***********************llegue tallesProductos');
           res.send(e)
    })
    },
    viewEdit: (req, res) => {
           db.Producto.findByPk(req.params.id)
            .then(producto => {
                res.render("editar", 
                {
                    product: producto,
                    talles: producto.talles,
                    temporada:producto.temporada,
                    genero: producto.genero,
                    colores: producto.colores
                })
            })         
    },

    update: (req, res) => {
       //Lógica guardado producto.

    },
    delete: (req, res) => {
           
    }}


module.exports = controllerProducto;