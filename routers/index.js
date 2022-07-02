const { application } = require('express');
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
router.get("/home",homeController.home);



router.use("/session",require("./dashboard"));







router.use("/user", require("./users"));
















module.exports = router;