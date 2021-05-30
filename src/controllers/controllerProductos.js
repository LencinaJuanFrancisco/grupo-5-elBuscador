const fs = require("fs");
const path = require("path");
const productId = require("../utils/idUtils")

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const controllerProducto = {
    
    detalle: (req,res)=>{
        res.render('producto');
        
    },
    carrito: (req,res)=>{
        res.render('carrito', {products});
        
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
                product[nombre-producto] = req.body.nombre-producto,
                product[detalle-producto] = req.body.detalle-producto,
                product.talles = req.body.talles,
                product.precio = req.body.precio,
                product.cantidad = req.body.cantidad,
                product.colores = req.body.colores,
                product.genero = req.body.genero,
                product.temporada = req.body.temporada,
                product[img-principal] = req.body.img-principal                
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