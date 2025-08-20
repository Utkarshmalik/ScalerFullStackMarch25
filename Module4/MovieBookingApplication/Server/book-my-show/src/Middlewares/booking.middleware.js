const { default: mongoose } = require("mongoose");
const ShowModel = require("../Model/show.model");




const validateCreateBookingRequest  = async (req,res,next)=>{

    const {show, seats, transactionId} = req.body;


    if(!mongoose.Types.ObjectId.isValid(show)){
        return res.status(400).send({success:false, message:"Invalid Show Id Format"});
    }

    try{

        const showDetails = await ShowModel.findById(show);

        if(!showDetails){
           return res.status(400).send({success:false, message:"Invalid Show Id"});
        }

        const bookedSeats = showDetails.bookedSeats;

        seats.forEach((seat)=>{
            if(bookedSeats.includes(seat)){
             return res.status(400).send({success:false, message:"Seats passed are already booked"});
            }
        })

        next();

    }
    catch(err){
        return res.status(500).send({success:false,message:"Internal Server Error",err});

    }

}


module.exports = {
    validateCreateBookingRequest
}

