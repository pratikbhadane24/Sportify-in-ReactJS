const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  const newuser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  newuser.save((err) => {
    if (!err) {
      res.send("User Registration Successful.");
    } else {
      res.send("Something went wrong, please try again later!");
    }
  });
});

module.exports = router;
