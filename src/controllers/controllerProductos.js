const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

/* const lastId = () => {
	let ultimo = 0;
	db.Producto.findAll()
    forEach(product => {
		if (ultimo < product.id) {
			ultimo = product.id;
		}
	})
	return ultimo;
}
*/



const controllerProducto = {
    
    detalle: (req,res)=>{
            db.Producto.findByPk(req.params.id)
                .then(producto => {
                    res.render('producto',{product: productoToView, talles,colores, products: generoToView,toThousand})
                })
            ; 
    },

    carrito: (req,res)=>{
        
        res.render('carrito', {carrito});
       
          
    },
    
    listadoProducto:(req,res)=>{
        db.Producto.findAll()
            .then(productos => {
                res.render('listadoProducto', {products})
            })
    },
    viewCarga: (req, res) => {
        res.render("carga");
    },
    store: (req, res) => {
        db.Producto.create({
            id: lastId(),
            nombre: req.body.nombreProducto,
            precio: req.body.precio,
            talle: req.body.talles,
            color: req.body.colores,
            genero: req.body.genero,
            descripcion: req.body.description,
            cantidad: req.body.cantidad,
            //temporada_id: ,
            //genero_id: ,

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