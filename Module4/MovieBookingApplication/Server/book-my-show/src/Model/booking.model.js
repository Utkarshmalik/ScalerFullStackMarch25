
const mongoose = require("mongoose");


const bookingSchema = new mongoose.Schema({

    show:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'shows_scalerAug25',
        required:true
    },
    user:{
         type:mongoose.Schema.Types.ObjectId,
        ref:'users_scalerAug25',
        required:true
    },
    seats:{
        type:Array,
        required:true
    },
    transactionId:{
        type:String,
        required:true
    }

})

const BookingsModel = mongoose.model("bookings_scalerAug25", bookingSchema);

module.exports = BookingsModel;
