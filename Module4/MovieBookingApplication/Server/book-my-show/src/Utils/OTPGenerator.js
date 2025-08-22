
const generateOTP=()=>{
    
    return Math.floor(Math.random()*900000)+100000;
}


// [0, 1)
// [0, 900000)
// [100000, 1000000) - [100000, 999999]



module.exports = {
    generateOTP
}