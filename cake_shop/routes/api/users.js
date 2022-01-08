var express = require('express');
var router = express.Router();
let {User}=require("../../models/user")
const _ = require("lodash");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

router.post("/register", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User with given Email already exist");
    user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    user.password=hashedPassword;
    await user.save();
    return res.send(_.pick(user, ["name", "email"]));
  });

  router.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User Not Registered");
    let isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) return res.status(401).send("Invalid Password");
    let token = jwt.sign(
      { _id: user._id, name: user.name },
      config.get("jwtPrivateKey")
    );
    res.send(token);
  });
  module.exports = router;