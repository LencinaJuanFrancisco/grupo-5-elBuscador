const db = require("../../database/models");

const apiControllers = {
  listadoImagenes: (req, res) => {
    // console.log("entre a la API listadoUsuarios");
    db.Genero.findAll()
      // db.Usuario.findAll({include: [{association: "roles"}]})
      .then((generos) => {
        let nuevosGenero = generos.map((genero) => {
          console.log(genero);

          return genero.dataValues;
        });
        console.log(nuevosGenero);

        res.status(200).json({
          total: nuevosGenero.length,
          data: generos,
          status: 200,
        });
      })
      .catch((error) => console.log(error));
  },
};
module.exports = apiControllers;
