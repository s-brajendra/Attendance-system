const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        hidden:true
    },
    schoolName: {
      
            type: String,
            required: true
    }
        ,
    address:{
            type: String,
            required: true
        
    },

    phone:{
            type: Number,
            required: true

    }
    
    
    
    


},{
    timestamps:true
});


const User = mongoose.model('credentials', userSchema);
module.exports = User;
