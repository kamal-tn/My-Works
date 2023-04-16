const User = require("../models/user");
const controller = {};

const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

controller.register = async (req, res) => {
  try {
    const { email, pwd, name } = req.body;
    const doc = {
      email,
      password: pwd,
      name,
      profilePic: fs.readFileSync(
        path.join(__dirname, "..", "/uploads/", req.file.filename)
      ),
    };
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).send({ message: "Email already exists" });
    } else {
      try {
        const save = await new User(doc).save();
        res.status(201).send({ message: "Registration successfull" });
      } catch (err) {
        res.status(500).send({ message: err.message });
      }
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

controller.login = async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      bcrypt.compare(pwd, user.password, function (err, result) {
        if (result) {
          jwt.sign(
            {
              data: user.email,
            },
            "mysecret",
            function (err, token) {
              if (token) {
                res
                  .cookie("token", token)
                  .status(200)
                  .send({ name: user.name, pic: user.profilePic });
              }
            }
          );
        } else {
          res.status(401).send({ message: "Wrong password" });
        }
      });
    } else {
      res.status(401).send({ message: "Invalid user" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

controller.getUser = async (req, res) => {
  try {
    const email = req.user.email;
    const userDoc = await User.findOne({ email });
    res.status(200).send({
      name: userDoc.name,
      pic: Buffer.from(userDoc.profilePic).toString("base64"),
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

controller.logout = (req, res) => {
  res.cookie("token", "");
  res.status(200).send({ message: "Logged out" });
};

module.exports = controller;
