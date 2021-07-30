const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcryptsjs = require("bcryptjs");
const db = require ('../database/models')

const controllerUsers = {
    
    login: (req,res)=>{
        res.render("login");
        
    },
    register: (req, res) => {
        // cookie es un metodo res que nos permite guardar informacion del lado del navegador
        //res.cookie()
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
    //let userInDB = User.findByEmail(req.body.email);
      
    db.Usuario.findOne({
      where:{
          email:req.body.email
        } 
        })
      .then((user) =>{
        if(user){
            return res.render("registro", {
              errors: {
                   email: {
                    // usamos express-validater
                    msg: "este email ya esta registrado",
                  },
                },
                oldData: req.body,
              });
        }else{
        let userToCreate = {
          ...req.body,
          password: bcryptsjs.hashSync(req.body.password, 10),
          avatar: req.file.filename,
        };
    
       //una vez que pasa la validacion mandamos los datos al Modelo para que lo cree
        
        User.create(userToCreate);
       return res.redirect("/users/login");
      }
      })
      .catch((e)=>{
       res.send(e)
      })
    },

    
      
    loginProcess: (req, res) => {
      // vamos a buscar al usuario
      //------>let userToLogin = User.findByEmail(req.body.email);
      db.Usuario.findOne({
              where: {
                  email: req.body.email
              }
          })
          .then((userToLogin) => {

            console.log('userTologue------->'+ userToLogin.email)

              if(userToLogin){
                  let isOkThePassword = bcryptsjs.compareSync(req.body.password, userToLogin.pass);
                  if (isOkThePassword) {

                    //una vez que verificamos que coicidan los pass que ingreso el usuario con el de DB, eliminamos el pass por seguridad y luego creamos y asignamos el usuario buscado a la variable session userLogged
                      delete userToLogin.pass;
                      req.session.userLogged = userToLogin;

                       
                    // si el usuario tildo en recuerdame se almacena el email en una COOKIE y la llamamos userEmail
                      if (req.body.remember_user) {
                          res.cookie('userEmail', req.body.email, {
                              maxAge: (1000 * 60) * 20
                          })
                      }

                      return res.redirect('/users/perfil')
                  }// si las credenciales no coinciden
                  return res.render('login', {
                      errors: {
                          email: {
                              msg: 'Las credenciales son inválidas'
                          }
                      }

                  })
                }
                
              })
              
              .catch((e)=>{
                return res.render('login', {
                  errors: {
                      email: {
                          msg: 'No se encuentra este email en nuestra base de datos'
                      }
                  }
              })
                console.log(e)
              })
   },

profile: (req, res) => {
  // console.log(req.cookies.userEmail);
  return res.render("perfil", {
      user: req.session.userLogged
  });
},
logout: (req, res) => {
  // borramos todos los datos que guardamos en session  y en las cookies
  res.clearCookie('userEmail');
  req.session.destroy();
  return res.redirect('/');
}
}

module.exports = controllerUsers;