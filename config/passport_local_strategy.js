const { application } = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Credential = require("../models/school_credentials");

passport.use(new LocalStrategy({
    usernameField: "email"
    }, function(email,password,done){
        // finding user
        Credential.findOne({email: email},function(err,user){
            if(err){
                console.log("error in finding user");
                return done(err);
            }
            if(!user){ console.log("no user matched in database");
            return done(null,false);        
        }
            if(user){
                if(user.password != password){
                    console.log(password,Credential.password);
                    console.log("Invalid username/password");
                    return done(null,false);
                }
                console.log("user found");
                return done(null,user);
                

            }
        });

    }
));

//to decide which key to make encrypted cookie
passport.serializeUser(function(user,done){
    done(null, user.id);
});

passport.deserializeUser (function(id,done){
    Credential.findById(id, function(err, user){
        if(err){
            console.Consolelog("error in deserializing");
            return done(err);
        }
        return done(null,user);

    });
});

// middleware to check authentication
passport.checkAuthentication  = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }

    // if not authenticated user has to sign in

    return res.redirect("/user/sign-in");
}

passport.setAuthUser = function(req,res,next){
    if(req.isAuthenticated()){
        // to transfer signed in user data to locals so that we can use it in views
        res.locals.user = res.user; 
        
    }
    next();
}


module.exports = passport;