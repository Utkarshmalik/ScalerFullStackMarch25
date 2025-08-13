const mongoose = require("mongoose");


const showSchema = new mongoose.Schema({

    movie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'movies_scalerAug25'
    },
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'theatres_scalerAug25'
    },
    showDate:{
        type:Date,
        required:true
    },
    showTime:{
        type:String,
        required:true
    },
    totalSeats:{
        type:Number,
        required:true
    }, 
    ticketPrice:{
        type:Number,
        required:true,
        default:500
    },
    bookedSeats : {
        type:Array,
        default:[]
    }

})

const ShowModel = mongoose.model('shows_scalerAug25', showSchema);

module.exports = ShowModel;