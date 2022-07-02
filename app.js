const express = require('express');
const app = express();
const PORT = 8000;
const session = require("express-session");
const passport = require("passport");
const localPassport = require("./config/passport_local_strategy");


const cookieParser = require('cookie-parser');
const expressLayouts = require('express-ejs-layouts');

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());

const db = require('./config/mongoose');



app.use(express.static('assets'));



app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name: 'oneRun',
    // change this secret key
    secret: "keytoencryptthecodedata",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: (1000*60*60),
    }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require("./routers/index"));








app.use(errorHandler);
app.listen(PORT,function(err){
    if(err){
        console.log("errror in running server");
    }
});



function errorHandler(err,req,res,next){
    if(err){
        res.send("<h1> some error is there</h1>");
    }
    
}





