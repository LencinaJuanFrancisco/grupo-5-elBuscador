// const fs = require("fs");
// const path = require("path");
// const productId = require("../utils/idUtils")

// const productsFilePath = path.join(__dirname, '../data/productsDB.json');
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controllerProducto = {
    
    detalle: (req,res)=>{
       // filtro para mostrar solo el producto que selecciono el usuario
       let productoToView = {};
       let generoToView=[];
       let talles,colores=[];


       products.forEach(product=>{
           if (product.id == req.params.id) {
               talles= product.talles;
               colores= product.colores;
               productoToView = product;
           }  
       })
        products.forEach(product=>{
            if (product.genero == productoToView.genero) {
                generoToView.push(product)
            }
        })
        
    //    let productoToView = products.filter(product=>{
    //              return product.id == req.params.id;
    //         } )
    //         let genero= productoToView.genero

        // filtro por el genero que producto seleccionodo para el carrusel
            // let generoToView = products.filter(product=>{
            //     return product.genero == genero;
            // })
             


            res.render('producto',{product: productoToView, talles,colores, products: generoToView,toThousand});
            
        
        
    },
    carrito: (req,res)=>{
        
        res.render('carrito', {carrito});
       
          
    },
    cargaProducto: (req,res)=>{

        res.render('carga');
    },
    
    listadoProducto:(req,res)=>{
        res.render('listadoProducto', {products})
    },
    viewCarga: (req, res) => {
        res.render("carga");
    },
    store: (req, res) => {
        let productNew = {
            id: productId(),
            ...req.body,
            imgPrincipal: req.file.filename
        };
        products.push(productNew);
        let productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsJson);
        res.redirect(`/producto/${productNew.id}`);
    },
    viewEdit: (req, res) => {
        let productoElegido = req.params.id;
        let talles, temporada,genero, colores =[];
        
        products.forEach(product => {
            if(product.id == productoElegido) {
                talles= product.talles;
                temporada = product.temporada;
                genero = product.genero;
                colores= product.colores;
                res.render("editar", {product,talles,temporada,genero,colores})
            };           
              
        });
    },
    update: (req, res) => {
        let productoElegido = req.params.id;
        console.log(req.body);
        
        products.forEach(product => {
            if(product.id == productoElegido) {
               
                product.nombreProducto = req.body.nombreProducto,
                product.detalleProducto = req.body.detalleProducto,
                product.talles = req.body.talles,
                product.precio = req.body.precio,
                product.cantidad = req.body.cantidad,
                product.colores = req.body.colores,
                product.genero = req.body.genero,
                product.temporada = req.body.temporada

                console.log(product)
               // product.imgPrincipal = req.body.imgPrincipal                
            }   
        })
        
        let productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsJson);
        products.forEach(product =>{
            if(product.id == productoElegido)
            res.redirect('/producto/'+product.id);
        })
        },

        delete: (req, res) => {
            let newProducts = products.filter(
                product => {
                    return product.id != req.params.id;
                } )
                let productsJson = JSON.stringify(newProducts, null, 4);
                fs.writeFileSync(productsFilePath, productsJson);
                res.redirect('/producto/listadoProducto')
                   }
        }
module.exports = controllerProducto;