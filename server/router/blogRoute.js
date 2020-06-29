const express = require("express");
const multer = require("multer");
const { varification } = require("./../controller/userController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/images/blogImage");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
const {
  getBlogs,
  addBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("./../controller/blogController");
const Route = express.Router();

Route.route("/").get(getBlogs).post(varification, upload.any(), addBlog);

Route.route("/:id")
  .get(getBlog)
  .patch(varification, updateBlog)
  .delete(varification, deleteBlog);

module.exports = Route;
