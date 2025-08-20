const { createBooking, makePayment } = require("../Controllers/booking.controllers");
const { verifyToken } = require("../Middlewares/auth.middleware");
const { validateCreateBookingRequest } = require("../Middlewares/booking.middleware");



const initialiseBookingRoutes  = (app)=>{


    app.post("/payments",[verifyToken], makePayment);

    app.post("/bookings",[verifyToken, validateCreateBookingRequest], createBooking);
}

module.exports = initialiseBookingRoutes;