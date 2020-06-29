const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validators = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter your name"],
  },
  email: {
    type: String,
    unique: [true, "Email Alreay Exits"],
    validate: {
      validator: (value) => validators.isEmail(value),
      message: "Invalid Email",
    },
    required: [true, "Enter your name"],
  },
  password: {
    type: String,
    required: [true, "Enter your password"],
  },
  conformPassword: {
    type: String,
    validate: {
      validator: function (v) {
        return this.password === v;
      },
      message: "Password Doesnt matched",
    },
  },
});
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 8);
  this.conformPassword = undefined;
});
userSchema.methods.CheckPassword = function (userPassword, correctPassword) {
  return bcrypt.compare(userPassword, correctPassword);
};

module.exports = mongoose.model("User", userSchema);
