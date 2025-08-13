const { createNewShow, getAllShows, getShowById, getTheatesAndShowsByMovieId } = require("../Controllers/show.controllers");
const { verifyToken, verifyAdminOrPartner } = require("../Middlewares/auth.middleware");



const initialiseShowRoutes  = (app)=>{
    
    app.post("/shows",[verifyToken,verifyAdminOrPartner],createNewShow);
    app.get("/shows",[verifyToken],getAllShows);
    app.get("/shows/:id",[verifyToken], getShowById);
    app.get("/shows/movies/:movieId",[verifyToken], getTheatesAndShowsByMovieId);

}

module.exports = initialiseShowRoutes;