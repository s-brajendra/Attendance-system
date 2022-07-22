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


const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,res ,cb) => {
        cb(null, 'images')
    },
    filename: (req,file,cb) => {
        console.log(file);
        cb(null, Date.now()+ path.extname(file.originalname))
    }
});

const uploads = multer({storage: storage});

router.post('/idcard',passport.checkAuthentication, uploads.single('image') ,dashboardController.idCard);

router.get('/student',passport.checkAuthentication ,dashboardController.student);

















module.exports = router;