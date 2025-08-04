const { loginUser, registerUser } = require("../Controllers/user.controllers");

const initialiseUserRoutes = (app)=>{
      app.post("/users/login", loginUser)
      app.post("/users/register", registerUser);
}


module.exports  = initialiseUserRoutes;


 