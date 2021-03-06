const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const UserRoute = require("./router/userRoute");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const BlogRoute = require("./router/blogRoute");
const ContactRoute = require("./router/contactRoute");
const port = process.env.PORT || 8080;
const DB = process.env.mongodbDatabase.replace(
  "<password>",
  process.env.mongodbPassword
);
const path = require("path");
mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to DataBase");
  }
);
mongoose.connection.on("connected", () => {
  console.log("Mongoose is conntected");
});

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cors());
// app.use(morgan("tiny"));
// app.use(express.static("client/build"));
app.use("/api", BlogRoute);
app.use("/contact", ContactRoute);
app.use("/user", UserRoute);

app.use(express.static("../client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build", "index.html")); // relative path
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
