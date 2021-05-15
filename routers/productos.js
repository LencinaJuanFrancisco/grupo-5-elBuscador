const express= require('express');
const router = express.Router();
const controllerProducto= require('../controllers/controllerProductos');

router.get('/', controllerProducto.detalle);

router.get('/carrito', controllerProducto.carrito);

router.get('/:id', controllerProducto.detalle);

module.exports = router;                        