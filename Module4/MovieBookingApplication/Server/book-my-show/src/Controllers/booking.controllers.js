const BookingsModel = require("../Model/booking.model");
const ShowModel = require("../Model/show.model");
const { bookingConfirmationTemplate } = require("../Templates/bookingConfirmationTemplate");
const { sendEmail } = require("../Utils/EmailUtils");
require('dotenv').config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(stripeSecretKey);



const makePayment = async (req,res)=>{

    const {token, amount} = req.body;

    console.log(token, amount);


    //create a new stripe customer 
    const customer = await stripe.customers.create({
        email:req.userDetails.email,
        source:token
    });

    //create the payment intent 

    const paymentIntent = await stripe.paymentIntents.create({
        customer:customer.id,
        amount:amount,
        currency:'usd',
        payment_method_types:['card']
    })

    console.log(paymentIntent);


    return res.status(200).send({
        success:true,
        message:"Payment successful",
        transactionId:paymentIntent.id
    })



}

const createBooking = async (req,res)=>{

    const {show, seats, transactionId} = req.body;
    const userId = req.userDetails._id;

    try{

        const newBooking = new BookingsModel({show,seats, transactionId, user:userId});

        const newBookingResponse = await newBooking.save();

        const showDetails = await ShowModel.findById(show).populate("movie").populate("theatre");

        const updatedBookedSeats = [...showDetails.bookedSeats, ...seats];

        await ShowModel.findByIdAndUpdate(show, {
            bookedSeats:updatedBookedSeats
        });

        //trigger an email , booking is successfully created 

        const {subject, body} = bookingConfirmationTemplate(req.userDetails, 
            showDetails, newBookingResponse);


        sendEmail([req.userDetails.email], subject,body);


        return res.status(201).send({
            success:true,
            message:`Booking successfully created with ${newBookingResponse._id}`,
            data:newBookingResponse
        })

    }catch(err){

        return res.status(500).send({success:false,message:"Internal Server Error",err});
        

    }

}


module.exports = {
    createBooking,
    makePayment
}