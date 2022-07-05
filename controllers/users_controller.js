module.exports.signUp = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect("/session/Dashboard");
    }

    return res.render("sign_up");
}

module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect("/session/Dashboard");
    }
    return res.render("sign_in");
}

const { response } = require("express");
const credentials = require("../models/school_credentials");



module.exports.register  = function(req,res){

    console.log(req.body);

    // checking if 2 password are equal
    if(req.body.password != req.body.confirm){
        console.log("1");
        return res.redirect('back'); 
        
    }

    // checking if email already exist
    credentials.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding user');}
    
        // if user not present 
        if(!user) {
            credentials.create(req.body, function(err,user){
                if(err){console.log('error in creating user')} // if error occured
                console.log("2");

                return res.redirect('http://127.0.0.1:8000/user/sign-in'); // else redirect to sign in page
                
            })
        }
        else{
            console.log("user already exist")
            return res.redirect('back');
            console.log("3");
        }


    });
}



module.exports.recog = function(req,res){
    return res.render("recog");
}