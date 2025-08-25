
const otpGenerationTemplate = (userDetails, otp)=>{

    const subject = "One Time Password,  Reset Password";

    const body = `
    
    <html>

     <head>
     </head>

     <body>
        <h2> Hi, ${userDetails.name}  </h2> 
        <h3> 
        Please use this otp to reset your password ${otp}
        </h3>
     </body>

    </html>
    `

    return {subject, body};


}

module.exports = {otpGenerationTemplate};