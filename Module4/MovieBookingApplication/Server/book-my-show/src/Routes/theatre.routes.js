const { createTheatre, fetchAllTheatres } = require("../Controllers/theatre.controllers");
const { verifyToken, verifyAdmin, verifyAdminOrPartner } = require("../Middlewares/auth.middleware");



const initialiseTheatreRoutes = (app)=>{

    app.post("/theatres",[verifyToken, verifyAdminOrPartner] ,createTheatre);
    app.get("/theatres",[verifyToken],fetchAllTheatres);


}

module.exports = initialiseTheatreRoutes;

