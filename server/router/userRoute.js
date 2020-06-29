const Express = require("express");

const {
  SignUp,
  logIn,
  getUser,
  varification,
} = require("./../controller/userController");
const Router = Express.Router(getUser);
Router.route("/").get(varification, getUser);
Router.route("/signUp").post(SignUp);
Router.route("/logIn").post(logIn);

module.exports = Router;
