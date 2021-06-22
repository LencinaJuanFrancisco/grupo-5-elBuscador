function authMiddleware (req,res,next){
    // hacemos lo contrario a guestMiddleware , si no tenemos a nadie logueado no modemos mosatrar el profile
    if (!req.session.userLogged) {
        return res.redirect('/users/login')
    }
    next();
}
module.exports = authMiddleware;
