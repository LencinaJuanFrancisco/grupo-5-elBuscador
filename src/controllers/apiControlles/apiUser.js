const db = require("../../database/models");

const apiControllers = {
  listadoUsuarios: (req, res) => {
    // console.log("entre a la API listadoUsuarios");
    db.Usuario.findAll()
    // db.Usuario.findAll({include: [{association: "roles"}]})
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
  detalleUsuario: (req, res) => {    
      db.Usuario.findByPk(req.params.id)
        .then((user) => {
          console.log(user);

          delete user.dataValues.pass;
          delete user.dataValues.rol_id;
          user.dataValues.avatar =
            "http://localhost:3000/img/users/" + user.dataValues.avatar;
          //console.log(producto.imagenes)
          // res.render(user)
          return user 
          
      })
        .then ((user) => {
          res.status(200).json({
            data: user,
            status: 200,
          });
        })
        .catch((e) => {
          console.log("***********************llegue" + e);
        });
      }
  };

module.exports = apiControllers;
