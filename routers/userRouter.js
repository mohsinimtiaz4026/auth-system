const route = require("express").Router();
// controllers
const {
  registerUser,
  loginUser,
  sendUserMail,
  changePassword,
} = require("../controllers/userController");

route.post("/register",registerUser);
route.post("/login",loginUser);
route.post("/send",sendUserMail);
route.post("/change-password",changePassword);

module.exports = route;
