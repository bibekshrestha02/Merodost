const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please fill"],
    // unique: [true, "please fill"],
  },
  summery: {
    type: String,

    required: [true, "please fill"],
  },
  first: {
    type: String,

    required: [true, "please fill"],
  },
  second: {
    type: String,

    required: [true, "please fill"],
  },
  third: {
    type: String,

    required: [true, "please fill"],
  },
  writtenBy: {
    type: String,

    required: [true, "please fill"],
  },
  photo: {
    type: String,

    required: [true, "please fill"],
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const blogModel = mongoose.model("Blog", schema);

module.exports = blogModel;
