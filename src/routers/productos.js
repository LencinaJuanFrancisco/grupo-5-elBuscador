const express= require('express');
const router = express.Router();
const controllerProducto= require('../controllers/controllerProductos');

router.get('/', controllerProducto.detalle);

router.get('/carga',controllerProducto.cargaProducto);

router.get('/listadoProducto', controllerProducto.listadoProducto)
router.get('/carga', controllerProducto.viewCarga)
router.post('/carga', controllerProducto.store)



router.get('/editar/:id', controllerProducto.viewEdit)
router.put('/editar/:id', controllerProducto.update)

router.delete('/borrar/:id', controllerProducto.delete)


router.get('/carrito', controllerProducto.carrito);

router.get('/:id', controllerProducto.detalle);

module.exports = router;                        