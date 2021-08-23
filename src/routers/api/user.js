const express = require("express");
const router = express.Router();

const apiControllers = require("../../controllers/apiControlles/apiUser");

router.get("/", apiControllers.listadoUsuarios);

router.get("/:id", apiControllers.detalleUsuario);


module.exports = router;
