const express = require("express");
const passport = require("passport");
const Users = require("../models/Users");

const router = express.Router();


router.get("/", (req, res) => {
    Users.findAll()
    .then((users)=> res.send(users))
})

router.get("/:id", (req, res)=> {
  Users.findOne({
    where: {id: req.params.id}
  })
  .then((user)=> res.send(user))
})

router.post("/register", (req, res) => {
  console.log(req.body)
    Users.create(req.body).then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => res.status(500).send(error));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user).status(200)
   
});

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err)  return next(err); 
    res.sendStatus(200);
  });
});


router.get("/me", (req, res) => {
    if (!req.user) return res.sendStatus(401);
  
    res.send(req.user);
});

router.delete("/:id", (req, res) => {
    const { id } = req.params
    Users.destroy({where: {id}})
    .then(()=>res.sendStatus(202))   
})


router.use("/", (req, res) => {
  res.sendStatus(404)});


module.exports = router