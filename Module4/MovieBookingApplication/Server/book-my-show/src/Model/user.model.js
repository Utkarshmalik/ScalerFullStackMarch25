const mongoose = require("mongoose");

//Schema

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['admin','partner','user'],
        default:'user'
    },
    otp:{
        type:String,
        unique:true
    },
    otpExpiry:{
        type:Date
    }

})


const UserModel = mongoose.model("users_scalerAug25", userSchema);

module.exports = UserModel;