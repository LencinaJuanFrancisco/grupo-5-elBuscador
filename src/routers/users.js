const express= require('express');
const router = express.Router();

const controllerUsers= require('../controllers/controllerUsers');

const multermiddelwareUsers = require("../middelwares/multermiddelwareUsers");
const validateRegisterMiddelware = require("../middelwares/validateRegisterMiddelware");
const authMiddleware = require("../middelwares/authMiddelware");
const guestMiddleware = require("../middelwares/guestMiddelware");
const validateLogin = require("../middelwares/validateLogin");



// Formulario de login
router.get('/login', guestMiddleware, controllerUsers.login);
// Procesar el loginn
// en nuestro proyecto debemos agregar la validacion con express-validations
router.post('/login', validateLogin, controllerUsers.loginProcess);

// Perfil de Usuario
router.get('/perfil/', authMiddleware, controllerUsers.profile);

// Logout
router.get('/logout', controllerUsers.logout);

router.get('/register', guestMiddleware, controllerUsers.register);
router.post('/register', multermiddelwareUsers.single("avatar"), validateRegisterMiddelware, controllerUsers.registracion);


module.exports = router;                        