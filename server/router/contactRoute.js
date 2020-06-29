const express = require("express");
const {
  getMessage,
  postMessage,
  deleteMessage,
} = require("./../controller/contactController");
const { varification } = require("./../controller/userController");
const Router = express.Router();
Router.route("/").get(varification, getMessage).post(postMessage);
Router.route("/:id").delete(varification, deleteMessage);

module.exports = Router;
