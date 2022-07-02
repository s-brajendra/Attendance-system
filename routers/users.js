const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
router.get("/home",homeController.home);


const usersController = require("../controllers/users_controller");
router.get("/sign-up",usersController.signUp);








module.exports = router;