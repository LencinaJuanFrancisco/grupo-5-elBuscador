const express = require("express");
const router = express.Router();
const db = require("../../database/models");

const controllerProducto = {
  listadoProducto: (req, res) => {
    let countInvierno = 0;
    let countVerano = 0;
    db.Producto.findAll({
      include: ["generos", "imagenes"],
    })
      // .then((productos) => {
      //   let nuevoProducto = productos.map((producto) => {
      //     console.log(
      //       "solo producto API " + producto.imagenes.dataValues.nombre
      //     );
      //     producto.dataValues.imagenes =
      //       "http://localhost:3000/img/img/" + producto.imagenes.nombre;
      //   });
      //   console.log("NuevoProducto API " + nuevoProducto.length);
      //   //return nuevoProducto;
      // })
      .then((productos) => {
        // console.log(productos);
        // let prod = productos.map((producto) => {
        //   producto = console.log("********" + producto);
        // });

        console.log("----------------> " + productos.length);
        productos.forEach((producto) => {
          // console.log(producto.temporada_id);
          return producto.temporada_id == 1 ? countVerano++ : countInvierno++;
        });
        res.json({
          total: productos.length,
          totalVerano: countVerano,
          totalInvierno: countInvierno,
          data: productos,
          status: 200,
        });
      });
  },
  detalleProducto: (req, res) => {
    db.Producto.findByPk(req.params.id)
      .then((producto) => {
        res.status(200).json({
          data: producto,
          status: 200,
        });
      })
      .catch((e) => {
        console.log("***********************llegue" + e);
      });
  },
};

module.exports = controllerProducto;
