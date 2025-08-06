const { getAllMovies, insertMovie } = require("../Controllers/movie.controllers");
const { verifyToken, verifyAdmin } = require("../Middlewares/auth.middleware");



const initialiseMovieRoutes = (app)=>{

    app.get("/movies", [verifyToken] ,getAllMovies);

    app.post("/movies", [verifyToken, verifyAdmin] ,insertMovie);

}

module.exports = initialiseMovieRoutes;

