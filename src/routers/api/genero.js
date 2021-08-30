const express = require("express");
const router = express.Router();

const apiControllers = require("../../controllers/apiControlles/apiGenero");

router.get("/", apiControllers.listadoGenero);

module.exports = router;
