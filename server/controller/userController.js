const UserModel = require("./../model/userModel");
const jwtToken = require("jsonwebtoken");
const { promisify } = require("util");
const getToken = (id) => {
  return jwtToken.sign(
    { exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, ...id },
    process.env.JWT_SECRET
  );
};
// geting admin
exports.getUser = async (req, res, next) => {
  const data = await UserModel.find({});
  res.json({
    data,
  });
};
// signUp Admin
exports.SignUp = async (req, res, next) => {
  try {
    // 1. Checking the email
    const data = {
      email: req.body.email,
      password: req.body.password,
      conformPassword: req.body.conformPassword,
      name: req.body.name,
    };
    const user = await UserModel.create(data);
    const token = getToken(user._id);
    res.json({
      status: true,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.json({
        status: false,
        message: "Password doesn't match",
      });
    }
    if (error.name === "MongoError") {
      return res.json({
        status: false,
        message: "Email already Exist",
      });
    }
    res.json({
      status: false,
      message: "Something went wrong",
    });
  }
};
// LoginAdmin
exports.logIn = async (req, res, next) => {
  try {
    // 1.check if email and password exist
    const { email } = req.body;
    const { password } = req.body;
    if (!email || !password) {
      return res.json({
        status: false,
        message: "Enter your email or password",
      });
    }
    // 2.check if user exists and password is correct
    const data = await UserModel.findOne({ email: email });
    if (!data || !(await data.CheckPassword(password, data.password))) {
      return res.json({
        status: false,
        message: "Invalid Email or Password",
      });
    }
    // 3.if everything ok , send token to client
    const token = getToken(data._id);

    res.status(200).json({
      status: true,
      token,
    });
  } catch (error) {
    res.json({
      status: false,
      error,
    });
  }
};

// varification
exports.varification = async (req, res, next) => {
  try {
    // 1. getting token
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.json({
        status: false,
        message: "Your are not authorized",
      });
    }
    // 2. verfication token
    const status = await promisify(jwtToken.verify)(
      token,
      process.env.JWT_SECRET
    );

    if (!status) {
      return res.json({
        status: false,
        message: "Invalid Token",
      });
    }
    next();
  } catch (error) {
    res.json({
      status: false,
      error,
    });
  }
};
