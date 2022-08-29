// const express = require("express");
// const passport = require("passport");
// const Users = require("../models/Users");

// const router = express.Router();


// router.post("/register", (req, res) => {
//     Users.create(req.body).then((user) => {
//       res.status(201).send(user);
//     })
//     .catch((error) => res.status(500).send(error));
// });

// router.post("/login", passport.authenticate("local"), (req, res) => {
//     res.send(req.user);
   
// });


// router.post("/logout", (req, res) => {
//   req.logOut();
//   res.sendStatus(200);
// });


// module.exports = router