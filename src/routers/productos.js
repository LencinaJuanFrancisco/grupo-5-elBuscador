const express= require('express');
const router = express.Router();
const controllerProducto= require('../controllers/controllerProductos');
const uploadFile = require("../middelwares/multermiddelware")
const authMiddleware = require("../middelwares/authMiddelware");

//router.get('/', controllerProducto.detalle);
router.get('/listadoProducto', controllerProducto.listadoProducto)
router.get('/carga', authMiddleware, controllerProducto.viewCarga)
router.post('/carga', uploadFile.single('imgPrincipal')
, controllerProducto.store)




router.get('/editar/:id', authMiddleware, controllerProducto.viewEdit)
router.put('/editar/:id', uploadFile.single('imgPrincipal')
, controllerProducto.update)

router.delete('/borrar/:id', authMiddleware, controllerProducto.delete)


router.get('/carrito', controllerProducto.carrito);

router.get('/:id', controllerProducto.detalle);

module.exports = router;