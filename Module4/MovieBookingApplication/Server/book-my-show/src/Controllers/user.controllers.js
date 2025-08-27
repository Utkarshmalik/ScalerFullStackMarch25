const UserModel = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateOTP } = require("../Utils/OTPGenerator");
const { sendEmail } = require("../Utils/EmailUtils");
const { otpGenerationTemplate } = require("../Templates/otpGenerationTemplate");

const loginUser = async (req,res)=>{

    const {email, password} = req.body;

     if( !email || !password){
        return res.status(400).send({success:false, message:"Missing Fields for Login"});
    }

     try{
          const existingUser = await UserModel.findOne({email:email});

        // const existingUser = await UserModel.findOne({email:{"$gt": ""}});

        console.log(existingUser);
    






        if(!existingUser){
            return res.status(400).send({success:false,message:`User with email ${email} doesnot exists in our systems`});
        }

        // const hashedCorrectPasswrd = existingUser.password;

        // const isPasswordValid = bcrypt.compareSync(password, hashedCorrectPasswrd);

        // if(!isPasswordValid){

        //     return res.status(400)
        //     .send({
        //         success:false,
        //         message:`Sorry! Invalid Password Entered`
        //     })
        // }


        //generate a new JWT token and send it back to the client 
        const token = jwt.sign({userId:existingUser._id},process.env.SECRET_KEY,{expiresIn: '1h'});




        return res.status(200)
        .send({
            success:true,
            message:`User ${email} login successful`,
            accessToken:token
        })


     }
      catch(err){
        return res.status(500).send({message:"Internal Server Error"})
    }
    

        

}


const registerUser = async (req,res)=>{

    const {email, name , password } = req.body;

    if(!name || !email || !password){
        return res.status(400).send({success:false, message:"Missing Fields for Register"});
    }

    try{

        const existingUser = await UserModel.findOne({email:email});

        if(existingUser){
            return res.status(400).send({success:false,message:"User with this email already exists"});
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        req.body.password = hashedPassword;


        const newUser = new UserModel(req.body);

        await newUser.save();


        return res.status(201).send({success:true,message:"Registration Success, Please login to continue"});

    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error"})
    }
    


}


const forgetPassword = async (req,res)=>{

    const {email} = req.body;

    console.log(email);


    try{

        let user = await UserModel.findOne({email:email});

        if(user==null){
            return res.status(404).send({
                success:false,
                message:`User with this email ${email} doesnot exists in our system`
            })
        }

        //generate an OTP 
        const otp = generateOTP();

        //send otp via email 
        console.log("Sending otp via email ", otp);

        const {subject, body} = otpGenerationTemplate(user, otp);

        sendEmail([email],subject,body);
        

        user.otp=otp;
        user.otpExpiry = Date.now() + 2*60*1000;

        await user.save();


        //send a response saying OTP sent successfully 
        return res.status(200).send({
            success:true,
            message:`OTP sent successfully to email ${email}`
        })



    }catch(err){


    }


    


}

const resetPassword = async (req,res)=>{

    console.log(req.body);

    const {otp, password} = req.body;

    console.log(otp);
    
    try{

        const user = await UserModel.findOne({otp:otp});

        if(!user){
            return res.status(400).send({
                success:false,
                message:"OTP is incorrect"
            })

        }

        if(Date.now() > user.otpExpiry){
            return res.status(400).send({
                            success:false,
                            message:"OTP has been expired"
                        })
        };



      const newHashedPassword = bcrypt.hashSync(password, 10);


        user.otp=null;
        user.otpExpiry=null;
        user.password = newHashedPassword;

        await user.save();


        return res.status(200).send({
            success:true,
            message:"Password Reset Successfully"
        })





    }catch(err){

        
    }



}


module.exports = {
    loginUser,
    registerUser,
    forgetPassword,
    resetPassword
}

