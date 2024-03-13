const express = require('express');
const router = express.Router();
const user_controller = require('../../../controllers/web/');

router.get('/register', user_controller.register);
router.get('/all-cars', user_controller.get_all_cars);

module.exports = router;