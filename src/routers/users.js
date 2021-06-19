const express= require('express');
const router = express.Router();
const controllerUsers= require('../controllers/controllerUsers');
const multermiddelwareUsers = require("../middelwares/multermiddelwareUsers");
const validateRegisterMiddelware = require("../middelwares/validateRegisterMiddelware");


router.get('/login', controllerUsers.login);

router.get('/register', controllerUsers.register);
router.post('/register', multermiddelwareUsers, validateRegisterMiddelware, controllerUsers.register);


module.exports = router;                        