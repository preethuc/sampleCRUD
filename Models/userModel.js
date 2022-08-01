//Schema
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const user = new Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: Number },
  age: { type: Number },
  date_of_birth: { type: String },
  address: { type: String },
  pincode: { type: Number },
});
const mongModel = mongoose.model("NEWCOLS", user);
module.exports = mongModel