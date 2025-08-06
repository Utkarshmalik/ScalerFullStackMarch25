const UserModel = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const loginUser = async (req,res)=>{

    const {email, password} = req.body;

     if( !email || !password){
        return res.status(400).send({success:false, message:"Missing Fields for Login"});
    }

     try{

        const existingUser = await UserModel.findOne({email:email});

        if(!existingUser){
            return res.status(400).send({success:false,message:`User with email ${email} doesnot exists in our systems`});
        }

        const hashedCorrectPasswrd = existingUser.password;

        const isPasswordValid = bcrypt.compareSync(password, hashedCorrectPasswrd);

        if(!isPasswordValid){

            return res.status(400)
            .send({
                success:false,
                message:`Sorry! Invalid Password Entered`
            })
        }


        //generate a new JWT token and send it back to the client 
        const token = jwt.sign({userId:existingUser._id},"RandomSecretKey",{expiresIn: '1h'});




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


module.exports = {
    loginUser,
    registerUser
}