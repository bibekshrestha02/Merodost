const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Enter Your Email"],
  },
  name: {
    type: String,
    required: [true, "Enter Your Email"],
  },
  message: {
    type: String,
    required: [true, "Enter Your Message"],
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
module.exports = mongoose.model("contact", schema);
