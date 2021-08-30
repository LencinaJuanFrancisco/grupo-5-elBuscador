const db = require("../database/models");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controllerProducto = {
  detalle: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: ["generos", "colores", "talles", "imagenes"], //aca van los alias
    })
      .then((producto) => {
        console.log(producto);
        //console.log(producto.imagenes)
        // res.render(producto)
        res.render("producto", {
          product: producto,
        });
      })
      .catch((e) => {
        console.log("***********************llegue" + e);
      });
  },

  carrito: (req, res) => {
    res.render("carrito", {
      carrito,
    });
  },

  listadoProducto: (req, res) => {
    db.Producto.findAll({
      include: ["imagenes"],
    }).then((productos) => {
      res.render("listadoProducto", {
        products: productos,
      });
    });
  },
  viewCarga: async (req, res) => {
    // let talleColor= {}
    let talles = await db.Talle.findAll();
    let colores = await db.Color.findAll();

    try {
      // talleColor.talles = talles;
      // talleColor.colores = colores;

      res.render("carga", {
        colores,
        talles,
      });
    } catch (e) {
      console.log(e);
    }
  },
  store: (req, res) => {
    //console.log(req.body)
    db.Producto.create({
      nombre: req.body.nombreProducto,
      precio: req.body.precio,
      genero_id: req.body.genero,
      temporada_id: req.body.temporada,
      descripcion: req.body.detalleProducto,
      cantidad: req.body.cantidad,
    })
      .then((producto) => {
        let imagen = req.file.filename;
        db.Imagen.create({
          nombre: imagen,
          producto_id: producto.id,
        });
        return producto;
      })
      .then((producto) => {
        console.log(producto);

        let talles = req.body.talles;

        talles.forEach((talle) => {
          console.log(talle);

          db.TallesProductos.create({
            producto_id: producto.id,
            talle_id: parseInt(talle),
          });
        });
        return producto;
      })
      .then((producto) => {
        let colores = req.body.colores;

        colores.forEach((color) => {
          console.log("colores" + color);

          db.ColoresProductos.create({
            producto_id: producto.id,
            color_id: parseInt(color),
          });
        });
        return producto;
      })
      .then((producto) => {
       res.redirect("/producto/" + producto.id);
        // return res.redirect("/index");

        //res.redirect('/producto/'+producto.id)
      })
      .catch((e) => {
        console.log("***********************llegue tallesProductos");
        res.send(e);
      });
  },

  viewEdit: async (req, res) => {
    let talles = await db.Talle.findAll();
    let colores = await db.Color.findAll();

    try {
      db.Producto.findByPk(req.params.id, {
        include: ["generos", "colores", "talles", "imagenes"], //aca van los alias
      }).then((producto) => {
        res.render("editar", {
          product: producto,
          colores,
          talles,
        });
      });
    } catch (e) {
      console.log(e);
    }
  },

  update: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: ["generos", "colores", "talles", "imagenes"],
    })
      .then((response) => {
        db.Producto.update(
          {
            nombre: req.body.nombreProducto,
            precio: req.body.precio,
            genero_id: req.body.genero,
            temporada_id: req.body.temporada,
            descripcion: req.body.detalleProducto,
            cantidad: req.body.cantidad,
          },
          {
            where: {
              id: response.id,
            },
          }
        );
        //console.log(response)
        return response;
      })
      .then((response) => {
        let imagen = req.file.filename;

        db.Imagen.update(
          {
            nombre: imagen,
          },
          {
            where: {
              producto_id: response.id,
            },
          }
        );

        return response;
      })

      .then(() => {
        //console.log(producto)
        db.TallesProductos.destroy({
          where: {
            producto_id: req.params.id,
          },
        });
      })

      .then(() => {
        let talles = req.body.talles;
        talles.forEach((talle) => {
          // console.log(talle)

          db.TallesProductos.create({
            producto_id: req.params.id,
            talle_id: parseInt(talle),
          });
        });
      })
      .then(() => {
        // console.log(producto)
        db.ColoresProductos.destroy({
          where: {
            producto_id: req.params.id,
          },
        });
      })
      .then(() => {
        let colores = req.body.colores;
        colores.forEach((color) => {
          // console.log(talle)

          db.ColoresProductos.create({
            producto_id: req.params.id,
            color_id: parseInt(color),
          });
        });
      })
      .then(() => {
        res.redirect("/producto/" + req.params.id);
      })
      .catch((e) => {
        console.log("***********************llegue tallesProductos");
        console.log(e);
      });
  },
  delete: (req, res) => {
    //anted de destruir el producto que deceamos eliminar , tenemos que borrar todas las relaciones
    db.ColoresProductos.destroy({
      where: {
        producto_id: req.params.id,
      },
    }).catch((e) => {
      console.log("error de ColoresProductos " + e);
    });

    db.TallesProductos.destroy({
      where: {
        producto_id: req.params.id,
      },
    }).catch((e) => {
      console.log("error tallesProducto " + e);
    });

    db.Imagen.destroy({
      where: {
        producto_id: req.params.id,
      },
    }).catch((e) => {
      console.log(e);
    });

    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.redirect("/producto/listadoProducto");
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
module.exports = controllerProducto;
