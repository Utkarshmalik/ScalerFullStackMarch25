


const getAllMovies = (req,res)=>{
    

    return res.send({data:"MoviesData"});

}

const insertMovie = (req,res)=> {
    return res.send({data:"Movie Inserted Successfully"});

}


module.exports =  {getAllMovies, insertMovie};
