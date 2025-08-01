

const loginUser = (req,res)=>{

        

}


const registerUser = (req,res)=>{

    //createa. new (talk to a DB / Model )

    console.log(req.body);

    res.status(200).send({userDetails:{userId:"12324"}})


}


module.exports = {
    loginUser,
    registerUser
}