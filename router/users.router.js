/** @format */

let express = require("express");
const { UserModel } = require("../models/users.model");
const {
  getUsers,
  registerUser,
  loginUser,
} = require("../controller/user.controller");

let userRouter = express.Router();

userRouter.post("/register", registerUser);

userRouter.get("/users", getUsers);

userRouter.post("/login", loginUser);

module.exports = { userRouter };
