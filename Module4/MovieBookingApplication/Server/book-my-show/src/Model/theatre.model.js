
const mongoose = require("mongoose");


const theatreSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    theatreOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users_scalerAug25',
        required:true
    }

})

const TheatreModel = mongoose.model("theatres_scalerAug25", theatreSchema);

module.exports = TheatreModel;