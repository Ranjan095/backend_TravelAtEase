/** @format */

let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

let UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
