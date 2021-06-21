const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcryptsjs = require("bcryptjs");


const controllerUsers = {
    
    login: (req,res)=>{
        res.render("login");
        
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
        return res.render("/login");
      },

      loginProcess: (req, res) => {
        // vamos a buscar al usuario
        let userToLogin = User.findByEmail(req.body.email);
        //validamos si se encontro el usuario
        if (userToLogin) {
        // Una vez que encontramos al usuario tenemos que comparar con su password..
        // luego tenemos que usar el metodo Bcryptjs.compareSync() 
        let isOkThePassword = bcryptsjs.compareSync( req.body.password,userToLogin.password);
        
        if(isOkThePassword){
          //recordemos que para poder mostrar el avatar devemos instalar express-sessions
          
          // pero antes tenemos que borrar los datos del password por seguridad
          delete userToLogin.password;
          // y guardad los datos le las personas en sessions.
          req.session.userLogged = userToLogin;
    
          //si tildamos la opcion del formulario de recuerdame
          if(req.body.remember_user){
            res.cookie('userEmail',req.body.email, {maxAge: (1000 * 60) * 60 })
          }
    
          return res.redirect('/user/profile')
    
        }
    return res.render("userLoginForm", {
          errors: {
            email: {
            msg: "Las credenciales son inválidas",
            },
          },
          });
        }
        //si no se encontro el usuario vamos a renderizar la visra del logion
        // enviando el error
        return res.render("userLoginForm", {
          errors: {
            email: {
              msg: "No se encontro el usuario",
            },
          },
        });      
      
      },    
      profile: (req, res) => {
        return res.render("userProfile",{
        user: req.session.userLogged
      });
      },
    logout: (req,res)=>{
        // borramos todos los datos que guardamos en session  y en las cookies
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
      }
    }
    

module.exports = controllerUsers;