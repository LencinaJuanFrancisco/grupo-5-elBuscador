const User = require('../models/User')//requiremimos recien cuendo empezamos con cookies



// vamos a cerar este meddleware para habilitar y desabilitar el menu de cauerdo a si el usuaria esta o no logueado.
// es una meddleware de aplicacion, ya que la vamos a utilizar en toda la web. por lo tanto debemos requerirla en app.js.
function userLoggedMiddleware(req, res, next) {

  //cuando utilizamos res.locals y le asignamos un nombre, en este caso isLogged, 
  //la podemos utilizar en todas las vistas , 
  //  indistintamentes al controlador
  res.locals.isLogged = false;

  res.locals.isAdmin = false;

  let emailInCookie = req.cookies.userEmail;
  let userFromCookie = User.findByEmail(emailInCookie);

  if (userFromCookie) {
    req.session.userLogged = userFromCookie;

  }

  if (req.session.userLogged) {

    res.locals.isLogged = true;
    console.log('usuario en userLogged')
     console.log(req.session.userLogged.admin)
    
    
     if(req.session.userLogged.admin =='true'){
      res.locals.isAdmin = true;
      console.log('isAdmin?')
      console.log(res.locals.isAdmin)
      
    }
    console.log('isAdmin?')
    console.log(res.locals.isAdmin)
    //lo que estamos haciendo en esta linea de codico es pasar a las vistas la variable que se encuentra en req,para poder luegro mostrar los datos del usuario, lo hacemos de esta forma xq no estamos renderizando 
    //vistas , si no enviando variables locales
    res.locals.userLogged = req.session.userLogged;
  }
  

  next();
}
module.exports = userLoggedMiddleware;

