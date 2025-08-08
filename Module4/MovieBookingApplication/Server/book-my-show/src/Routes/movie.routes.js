const { getAllMovies, createMovie, getMovieDetails } = require("../Controllers/movie.controllers");
const { verifyToken, verifyAdmin } = require("../Middlewares/auth.middleware");



const initialiseMovieRoutes = (app)=>{

    app.get("/movies", [verifyToken] ,getAllMovies);
    
    app.get("/movies/:id", [verifyToken] ,getMovieDetails);

    app.post("/movies", [verifyToken, verifyAdmin] ,createMovie);

}

module.exports = initialiseMovieRoutes;

