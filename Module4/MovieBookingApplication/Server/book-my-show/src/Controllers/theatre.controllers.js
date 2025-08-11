

const createTheatre = (req,res)=>{

    return res.send("Theatre Created successful");


}

const fetchAllTheatres = (req,res)=>{

        return res.send("Theatre Results");


}
module.exports = {createTheatre, fetchAllTheatres};