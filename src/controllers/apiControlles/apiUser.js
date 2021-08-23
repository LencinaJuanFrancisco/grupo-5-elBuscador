const db = require("../../database/models");

const apiControllers = {
  listadoUsuarios: (req, res) => {
    console.log("entre a la API listadoUsuarios");
    db.Usuario.findAll()
      .then((usuarios) => {
        let nuevosUsuarios = usuarios.map((user) => {
          delete user.dataValues.pass;
          user.dataValues.avatar =
            "http://localhost:3000/img/users/" + user.dataValues.avatar;

          console.log(user);

          return user.dataValues;
        });
        console.log(nuevosUsuarios);

        res.status(200).json({
          total: nuevosUsuarios.length,
          data: usuarios,
          status: 200,
        });
      })
      .catch((error) => console.log(error));
  },
  detalleUsuario: (req, res) => {},
};

module.exports = apiControllers;
