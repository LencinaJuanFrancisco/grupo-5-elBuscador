const fs = require("fs");
const path = require("path");
const productId = require("../utils/idUtils")

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controllerProducto = {
    
    detalle: (req,res)=>{
       // filtro para mostrar solo el producto que selecciono el usuario
       let productoToView = {};
       let generoToView=[];

       products.forEach(product=>{
           if (product.id == req.params.id) {
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
             


            res.render('producto',{product: productoToView, products: generoToView,toThousand});
            
        
        
    },
    carrito: (req,res)=>{
        let carrito = [  {
            "id": 1,
            "nombreProducto": "Jeans chupin con rotura",
            "detalleProducto": "Lor,em ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta fugiat totam dicta eligendi quidem facere non ipsa repudiandae voluptas impedit consectetur molestias reprehenderit, perferendis eius porro labore. Eaque, delectus.",
            "talles": 36,
            "precio": 1800,
            "cantidad": 30,
            "colores": "Azul",
            "genero": "Mujer",
            "temporada": "Verano",
            "imgPrincipal": "jeans-1.jpg"
        },
        {
            "id": 2,
            "nombreProducto": "Zapatillas Converse niña",
            "detalleProducto": "Lor,em ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta fugiat totam dicta eligendi quidem facere non ipsa repudiandae voluptas impedit consectetur molestias reprehenderit, perferendis eius porro labore. Eaque, delectus.",
            "talles": 33,
            "precio": 2000,
            "cantidad": 60,
            "colores": "Negro",
            "genero": "Niña",
            "temporada": "Verano",
            "imgPrincipal": "jean-1.jpg"
        },
        {
            "id": 3,
            "nombreProducto": "Jeans chupin con rotura",
            "detalleProducto": "Lor,em ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta fugiat totam dicta eligendi quidem facere non ipsa repudiandae voluptas impedit consectetur molestias reprehenderit, perferendis eius porro labore. Eaque, delectus.",
            "talles": 4,
            "precio": 900,
            "cantidad": 30,
            "colores": "rojo",
            "genero": "Mujer",
            "temporada": "Verano",
            "imgPrincipal": "calzado-niña.jpg"
        },
        {
            "id": 4,
            "nombreProducto": "Campera con corderito mujer",
            "detalleProducto": "Lor,em ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta fugiat totam dicta eligendi quidem facere non ipsa repudiandae voluptas impedit consectetur molestias reprehenderit, perferendis eius porro labore. Eaque, delectus.",
            "talles": 4,
            "precio": 3000,
            "cantidad": 50,
            "colores": "Gris",
            "genero": "Mujer",
            "temporada": "Invierno",
            "imgPrincipal": "abrigo-mujer.jpg"
        },
        {
            "id": 5,
            "nombreProducto": "Juego de gorro y guantes tejido",
            "detalleProducto": "Lor,em ipsum dolor sit amet consectetur adipisicing elit. Adipisci soluta fugiat totam dicta eligendi quidem facere non ipsa repudiandae voluptas impedit consectetur molestias reprehenderit, perferendis eius porro labore. Eaque, delectus.",
            "talles": 2,
            "precio": 1500,
            "cantidad": 20,
            "colores": "Blanco",
            "genero": "Niña",
            "temporada": "invierno",
            "imgPrincipal": "abrigo-niña.jpg"
        }]
        res.render('carrito', {carrito});
       
          
    },
    cargaProducto: (req,res)=>{

        res.render('carga');
    },
    
    listadoProducto:(req,res)=>{
        res.render('listadoProducto')
    },
    viewCarga: (req, res) => {
        res.render("carga");
    },
    store: (req, res) => {
        let productNew = {
            id: productId(),
            ...req.body
        };
        products.push(productNew);
        let productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsJson);
        res.redirect(`/producto/${productNew.id}`);
    },
    viewEdit: (req, res) => {
        let productoElegido = req.params.id;
        products.forEach(product => {
            if(product.id == productoElegido) {
                res.render("editar", {product})
            };           

        });
    },
    update: (req, res) => {
        let productoElegido = req.params.id;
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
               // product.imgPrincipal = req.body.imgPrincipal                
            }   
        })
        let productsJson = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsFilePath, productsJson);
        res.redirect(`/producto/${productNew.id}`);
        },
        delete: (req, res) => {
            let newProducts = products.filter(
                product => {
                    return product.id != req.params.id;
                } )
                let productsJson = JSON.stringify(newProducts, null, 4);
                fs.writeFileSync(productsFilePath, productsJson);
                res.redirect(`/listadoProducto`);
                   }
        }
module.exports = controllerProducto;