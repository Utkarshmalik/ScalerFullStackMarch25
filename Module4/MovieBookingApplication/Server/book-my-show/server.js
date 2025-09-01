
const express = require("express");
const mongoose = require("mongoose");
const initialiseUserRoutes = require("./src/Routes/user.routes");
const bodyParser = require("body-parser");
const initialiseMovieRoutes = require("./src/Routes/movie.routes");
const cors = require('cors');
const initialiseTheatreRoutes = require("./src/Routes/theatre.routes");
const initialiseShowRoutes = require("./src/Routes/show.routes");
const initialiseBookingRoutes = require("./src/Routes/booking.routes");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');



require('dotenv').config();

const app = express();

console.log(process.env);

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Connected to DB Successfully")
})
.catch((err)=>{
    console.log(err);
})


app.use(cors());



app.use(bodyParser.json());


app.use((req, res, next) => {
  Object.defineProperty(req, 'query', {
    ...Object.getOwnPropertyDescriptor(req, 'query'),
    value: req.query,
    writable: true,
  });
  next();
});


app.use(mongoSanitize());







const apiLimiter = rateLimit({
    windowMs:3 * 1000,
    max:5,
    message:"Too many requests from this IP, Please try again in sometime"

});



app.use(apiLimiter);



app.use(helmet());


app.get("/",(req,res)=>{
    console.log("hello");
    res.send("Hii");
})


initialiseUserRoutes(app);
initialiseMovieRoutes(app);
initialiseTheatreRoutes(app);
initialiseShowRoutes(app);
initialiseBookingRoutes(app);

 



const port = process.env.PORT

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