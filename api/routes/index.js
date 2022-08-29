const express = require("express");
// const passport = require("passport");
// const Users = require("../models/Users");
// const Favorites = require("../models/Favorite");
const router = express.Router();

const userRouter = require("../Controllers/userController")
const favoriteRouter = require("../Controllers/favoriteController")

router.use("/users", userRouter);
router.use("/favorites", favoriteRouter);

// router.post("/register", (req, res) => {
//     Users.create(req.body).then((user) => {
//       res.status(201).send(user);
//     })
//     .catch((error) => res.status(500).send(error));
// });

// router.post("/login", passport.authenticate("local"), (req, res) => {
//     res.send(req.user).status(200)
   
// });

// router.post('/logout', function(req, res, next) {
//   req.logout(function(err) {
//     if (err)  return next(err); 
//     res.sendStatus(200);
//   });
// });



// //FAVS

// //agrego un favorito a user
// router.post("/favorites/add/:userId/:movieId", (req, res) => {
//   Favorites.create({
//     // title: req.body.title,
//     userId: req.params.userId,
//     movieId: req.params.movieId,
//   })
//     .then((favMovie) => {
//       const user = req.body.user;
//       favMovie.setUser(user);
//     })
//     .then(() => res.sendStatus(204))
//     .catch((err) => res.send(err));
// });

// // muestro los favoritos de un usuario

// router.get("/favorites/:id", (req, res) => {
//   Favorites.findAll({ where: { userId: req.params.id } })
//     .then((fav) => {
//       res.send(fav);
//     })
//     .catch((err) => res.send(err));
// });



// router.use("/", (req, res) => {
//   res.sendStatus(404)})

  

module.exports = router;