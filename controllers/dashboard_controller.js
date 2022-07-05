const credentials = require("../models/school_credentials");

const studentId = require("../models/student_id");
const { post } = require("../routers");
module.exports.Dashboard = function(req,res){

    

    // studentId.find({institute: user._id} , function(err,id){
    // return res.render('dashboard', {
    //     id:id

    // },

    studentId.find({}).populate('').exec(function(err,id){
        return res.render('dashboard', {
            id:id
    });
   



});
    // return res.render("dashboard",{
    //     // data here of user
    // });
}

module.exports.student = function(req,res){
    return res.render("student",{
        // data here of user
    });
}

module.exports.idCard = function(req,res){
    // if(req.user.id ==  req.params.id){
    //     try{
    //         let user = await credentials.findById(req.params.id);
    //         studentId.uploadedAvatar(req,res,function(err){
    //             if(err){console.log("*******errr of multer");}
    //             console.log(req.file);
    //         })


    //     }catch{
    //         console.log("error in id card")
    //         return res.redirect('back');
    //     }
    // }else{
    //     console.log("error in id card")
    //         return res.redirect('back');
    // }
          studentId.create({
            institute: req.user._id,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            roll: req.body.roll
          
                
          },function(err,idcard){
            if(err){
                console.log("error in creating post")
                return res.redirect("back")
            }
            if(idcard){
                return res.redirect('/session/Dashboard');
            }



          });

        


}


