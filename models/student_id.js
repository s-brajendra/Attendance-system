const mongoose = require('mongoose');




// multer
const multer = require("multer");
const path = require("path");
const AVATAR_PATH = path.join("./uploads/student/avatar");

const studentId = new mongoose.Schema({
    institute:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Credential"
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name:{
            type: String,
            required: true
        
    },

    phone:{
            type: Number,
            required: true

    },
    roll:{
        type: Number,
        required: true

    },
    // avatar : {
    //     type: String,

        
    // }

    
    
    
    


},{
    timestamps:true
});

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {


//       cb(null, path.join(__dirname, "..", AVATAR_PATH)); // check 
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
//   });

//   studentId.static.uploadedAvatar = multer({storage: storage}).single("avatar");
//   studentId.static.avatarPath  = AVATAR_PATH;



const id = mongoose.model('studentId', studentId);
module.exports = id;
