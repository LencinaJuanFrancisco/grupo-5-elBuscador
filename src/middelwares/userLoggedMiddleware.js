const db = require ('../database/models')

const User = require('../models/User')//requiremimos recien cuendo empezamos con cookies



// vamos a cerar este meddleware para habilitar y desabilitar el menu de cauerdo a si el usuaria esta o no logueado.
// es una meddleware de aplicacion, ya que la vamos a utilizar en toda la web. por lo tanto debemos requerirla en app.js.
// function userLoggedMiddleware(req, res, next) {

//   //cuando utilizamos res.locals y le asignamos un nombre, en este caso isLogged, 
//   //la podemos utilizar en todas las vistas , 
  
//   res.locals.isLogged = false;

  

//   let emailInCookie = req.cookies.userEmail;
//   let userFromCookie = User.findByEmail(emailInCookie);

//   if (userFromCookie) {
//     req.session.userLogged = userFromCookie;

//   }

//   if (req.session.userLogged) {

//     res.locals.isLogged = true;
//     console.log('usuario en userLogged=>')
//      console.log(req.session.userLogged)
    
  
//     //lo que estamos haciendo en esta linea de codico es pasar a las vistas la variable que se encuentra en req,para poder luegro mostrar los datos del usuario, lo hacemos de esta forma xq no estamos renderizando 
//     //vistas , si no enviando variables locales
//     res.locals.userLogged = req.session.userLogged;
//   }
  

//   next();
// }

function userLoggedMiddleware(req, res, next) {
  
  res.locals.isLogged = false;
  //let emailInCookie = req.cookies.userEmail;
  console.log("que es esto req.cookies.userEmail----"+req.cookies.userEmail)
  
  if(req.cookies.userEmail){
    db.Usuario.findOne({
      where: {
          email: req.cookies.userEmail
      }
  }).then((user)=>{
        if(user){
          req.session.userLogged = req.cookies.userEmail;
        }
  
        if (req.session.userLogged) {
          
          res.locals.isLogged = true;
          console.log('usuario en userLogged=>')
          console.log(req.session.userLogged)
          console.log('********************************')
          res.locals.userLogged = req.session.userLogged;
        }
        
        //next();
      })
      .catch((e)=>
     console.log(e))
      
    }
    next();
  }
  
  
  module.exports = userLoggedMiddleware;