/** @format */

const { UserModel } = require("../models/users.model");
const bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");

let registerUser = async (req, res) => {
  let { name, email, password } = req.body;
  let check = await UserModel.findOne({ email });
  if (check) {
    res.status(200).send({ msg: "usr is already exists" });
  } else {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (hash) {
          let user = new UserModel({ name, email, password: hash });
          await user.save();
          res.status(200).send({ msg: "user has been created" });
        }
      });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  }
};

loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await UserModel.findOne({ email });
  if (user) {
    try {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          let token = jwt.sign({ author: user.name }, "masai");
          res
            .status(200)
            .send({ msg: "Login successful", token, name: user.name });
        } else {
          res.status(200).send({ err: "wrong Credeantials" });
        }
      });
    } catch (err) {
      res.status(400).send({ err: err.message });
    }
  } else {
    res.status(200).send({ msg: "Please signup first" });
  }
};

let getUsers = async (req, res) => {
  let users = await UserModel.find();
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(200).send({ err: err.message });
  }
};

module.exports = { getUsers, registerUser, loginUser };
