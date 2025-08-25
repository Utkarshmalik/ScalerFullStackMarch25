const jwt = require("jsonwebtoken");
const UserModel = require("../Model/user.model");


const verifyToken = (req,res,next)=>{

    //fetch the token from the header

    const token = req.headers['x-access-token'];

    if(!token){
        return res.status(400).send({success:false, message:"JWT token is not passed"});
    }

    //token is present 
    jwt.verify(token, process.env.SECRET_KEY,  async (err,payload)=> {

        if(err){
            return res.status(403).send({success:false,message:"You are not authenticated to access this route"});
        }

        const userId = payload.userId;

        try{

            const userDetails = await UserModel.findById(userId);
            req.userDetails = userDetails;
           next();

        }catch(err){
            return res.status(500).send({message:"Internal Server Error"})

        }

    } );






}

  const verifyAdmin = (req,res, next)=>{

    ///safely assume person is authenticated 

    console.log(req.userDetails);

    const role = req.userDetails.role;

    if(role!='admin'){
        return res.status(403).send({success:false,message:`User with id ${req.userDetails._id} is not authorised to access this route`})
    }

    next();

 }



  const verifyAdminOrPartner = (req,res, next)=>{

    ///safely assume person is authenticated 

    console.log(req.userDetails);

    const role = req.userDetails.role;

    if(role!='admin' && role !='partner'){
        return res.status(403).send({success:false,message:`User with id ${req.userDetails._id} is not authorised to access this route`})
    }

    next();

 }
module.exports = {verifyToken, verifyAdmin, verifyAdminOrPartner};


