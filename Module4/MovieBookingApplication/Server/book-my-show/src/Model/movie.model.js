

const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({

    movieName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    genre:{
        type:[String],
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    poster:{
        type:String,
        requried:true
    }


})

const MovieModel = mongoose.model("movies_scalerAug25", movieSchema);

module.exports = MovieModel;