function guestMiddleware(req,res,next){
    //verifico si hay alguien en session para enviarlo directamente en su perfil, de esta manera no va a poder acceder
    // al menu de register y de login , xq ya esta logueado!!!!!
    if (req.session.userLogged) {
        return res.redirect('/user/profile');

    }
    next();

}
module.exports= guestMiddleware;
