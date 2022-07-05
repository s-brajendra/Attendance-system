const { application } = require('express');
const express = require('express');
const router = express.Router();
const passport = require("passport");

const dashboardController = require('../controllers/dashboard_controller');


router.post('/Dashboard',passport.authenticate(
    "local", // as strategy is local
    {
        failureRedict: "/user/sign-in"
    }, 
    ),dashboardController.Dashboard);

router.get('/Dashboard',passport.checkAuthentication ,dashboardController.Dashboard);

router.post('/idcard',passport.checkAuthentication ,dashboardController.idCard);

router.get('/student',passport.checkAuthentication ,dashboardController.student);

















module.exports = router;