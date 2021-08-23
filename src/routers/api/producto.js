const express= require('express');
const router = express.Router();
const controllerProducto = require("../../controllers/apiControlles/apiProducts")

router.get('/', controllerProducto.listadoProducto)
router.get('/:id', controllerProducto.detalleProducto)


module.exports = router;