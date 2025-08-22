const { loginUser, registerUser, forgetPassword, resetPassword } = require("../Controllers/user.controllers");

const initialiseUserRoutes = (app)=>{
      app.post("/users/login", loginUser)
      app.post("/users/register", registerUser);
      app.post("/users/forget", forgetPassword);
      app.post("/users/reset", resetPassword);

}


module.exports  = initialiseUserRoutes;


 