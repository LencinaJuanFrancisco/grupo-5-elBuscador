const express = require("express");
const router = express.Router();

const apiControllers = require("../../controllers/apiControlles/apiUser");

router.get("/", apiControllers.listadoUsuarios);

router.get("/detalle", apiControllers.detalleUsuario);

module.exports = router;
