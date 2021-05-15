const express= require('express');
const router = express.Router();
const controllerUsers= require('../controllers/controllerUsers');

router.get('/login', controllerUsers.login);

router.get('/register', controllerUsers.register);


module.exports = router;                        