const db = require("../database/models");

const User = require("../models/User"); //requiremimos recien cuendo empezamos con cookies

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
  //console.log("-------------------estoy en todo------------------------");
  //console.log("que es esto req.cookies.userEmail----"+req.cookies.userEmail)
  // console.log(
  //   "-------------------" + req.cookies.userEmail + "------------------------"
  // );

  // se verifica si es usuario administrador o no  luego se crea variable local isAdmin
  //para habilirar o desabilitar funciones segun su ROL
  res.locals.isAdmin = false;
  if (req.session.userLogged) {
    if (req.session.userLogged.rol_id == 1) {
      res.locals.isAdmin = true;
    }
  }

  //si el usuario marco recuerdame, se creo una cooki que luego la solicitamos
  // aqui para hacer todo el proceso de logueeo automatico

  if (req.cookies.userEmail) {
    let emailInCookie = req.cookies.userEmail;

    db.Usuario.findOne({
      where: {
        email: emailInCookie,
      },
    })
      .then((user) => {
        console.log("quien sos------->" + user);
        if (user) {
          //destruimos el pass por seguridad una vez que localizamos al usuario
          // y retornamos al usuaria en una variable session llamada userLogged
          delete user.pass;
          return (req.session.userLogged = user);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  res.locals.isLogged = false;
  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.isLogged = req.session.userLogged;
    return next();
  }
  return next();
}

module.exports = userLoggedMiddleware;
