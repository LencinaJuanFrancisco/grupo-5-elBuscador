const { validationResult } = require("express-validator");
const User = require("../models/User");

const controllerUsers = {
    
    login: (req,res)=>{
        res.render('login');
        
    },
    register: (req, res) => {
        // cookie es un metodo res que nos permite guardar informacion del lado del navegador
        res.cookie()
        return res.render("registro");
      },
    
      registracion: (req, res) => {
        const resultValidation = validationResult(req);
    
        if (resultValidation.errors.length > 0) {
          return res.render("registro", {
            errors: resultValidation.mapped(),
            oldData: req.body,
          });
        }

      // antes de crear un archivo , primero debo saber si existe,
    //para no tenerr a 2 usuarios con el mismo email
    let userInDB = User.findByEmail(req.body.email);
    if (userInDB) {
      // si el usuaria existe enviamos a la vista todos los datos
      // para que vuelva y corrija el error del email
      return res.render("registro", {
        errors: {
          email: {
            // usamos express-validater
            msg: "este email ya esta registrado",
          },
        },
        oldData: req.body,
      });
    }

    // antes de enviar la informacion al modelo vamos a hasear el password
    // PERO NO NOS TENEMOS QUE OLVIDAR de instalar bcryptsjs con npm
    let userToCreate = {
        ...req.body,
        password: bcryptsjs.hashSync(req.body.password, 10),
        avatar: req.file.filename,
      };
  
      // una vez que pasa la validacion mandamos los datos al Modelo para que lo cree
      let userToCreated = User.create(userToCreate);
      return res.redirect("/users/login");
    },

    login: (req, res) => {
        return res.render("/users/login");
      },
    
    
}
module.exports = controllerUsers;