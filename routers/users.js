const express = require('express');
const router = express.Router();


const homeController = require('../controllers/home_controller');
router.get("/home",homeController.home);


const usersController = require("../controllers/users_controller");
router.get("/sign-up",usersController.signUp);
router.get("/sign-in",usersController.signIn);

router.post("/register", usersController.register);

router.get('/recog' ,usersController.recog);








module.exports = router;