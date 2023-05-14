/** @format */

require("dotenv").config();

let mongoose = require("mongoose");

let connection = mongoose.connect(process.env.MongoDB);

module.exports = { connection };
