const express= require('express');
const router = express.Router();
const controllerIndex= require('../controllers/controllerIndex');

router.get('/', controllerIndex.home);



module.exports = router;