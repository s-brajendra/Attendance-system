const express = require('express');
const app = express();
require("dotenv").config();


const session = require("express-session");
const passport = require("passport");
const localPassport = require("./config/passport_local_strategy");

// to save cookie so that page do not get log out in each reinstantiation
var mongoStore = require("connect-mongo");


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
    
    saveUninitialized:false,
    resave:false,
    secret: process.env.SESSION_SECRET,
    // secret: "keytoencryptthecodedata", 1
    
    cookie:{maxAge: (1000*60*60),},

    // store: new mongoStore({

    //     mongooseConnection: db,
    //     autoRemove:"disabled",
    //     //depricated
        
        
        

    // },
    // function(err){
    //     if(err){
    //     console.log("error in mongo store");
    //     }
    // }
    // )
}));

app.use(passport.initialize());
app.use(passport.session());


// user data is accessed
app.use(passport.setAuthUser);

app.use('/',require("./routers/index"));








app.use(errorHandler);
app.listen(process.env.PORT ,function(err){
    if(err){
        console.log("errror in running server");
    }
});



function errorHandler(err,req,res,next){
    if(err){
        res.send("<h1> some error is there</h1>");
    }
    
}





