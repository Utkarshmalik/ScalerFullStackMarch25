
const bookingConfirmationTemplate = (userDetails,showDetails, bookingDetails)=>{

    const subject = "Booking Confirmed Successfully";

    const body = `
    
    <html>

     <head>
     </head>

     <body>
        <h2> Hi, ${userDetails.name}  </h2> 
        <h3> 
        Your Booking is comfirmed successfuly 
        for movie ${showDetails.movie.movieName}, 
        at theatre ${showDetails.theatre.name}
        on date ${showDetails.showDate}.
        </h3>

        <h4> Your Booking Id is ${bookingDetails._id} </h4> 
     </body>

    </html>
    `

    return {subject, body};


}

module.exports = {bookingConfirmationTemplate};