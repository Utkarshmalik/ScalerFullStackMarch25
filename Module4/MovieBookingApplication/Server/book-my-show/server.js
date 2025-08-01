
const express = require("express");
const mongoose = require("mongoose");
const initialiseUserRoutes = require("./src/Routes/user.routes");
const bodyParser = require("body-parser");
const initialiseMovieRoutes = require("./src/Routes/movie.routes");

const app = express();

mongoose.connect("mongodb+srv://utmalik:qwerty123@cluster0.49bji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to DB Successfully")
})
.catch((err)=>{
    console.log(err);
})


app.use(bodyParser.json());

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("Hii");
})


initialiseUserRoutes(app);
initialiseMovieRoutes(app);
 



const port = 8080;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})








//user 
//movie 
//theatre
// show 
// booking 



//MVC 

// Models 
// Views 
// Collections 




//Login and Register 