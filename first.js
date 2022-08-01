const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const Joi = require("joi");
//middleware to connect json
app.use(morgan("dev")); //syntax for using morgan
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/sampleDB");
// const db = mongoose.connection;
mongoose.connection
  .once("open", () => {
    console.log("DB connected");
  })
  .on("error", function (error) {
    console.log("error is:", error);
  });

app.listen(3000, () => console.log("On port 3000"));

const userRoute = require("./Routes/user");
app.use("/api/user", userRoute);
