const nodemailer = require("nodemailer");

const sendEmail = async (recipientEmails,subject,htmlContent)=>{

    const recipientEmailsStr = recipientEmails.join(" ,");
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS
        }
    })

    const mailDetails = {
    from: process.env.EMAIL_USER, 
      to: recipientEmailsStr, 
      subject:subject, 
      html: htmlContent
    }

    try{
        const info = await transporter.sendMail(mailDetails);
        console.log("Email sent successfully ", info);

    }catch(err){

        console.log("Unable to send email", err);
    }

}


module.exports = {sendEmail};