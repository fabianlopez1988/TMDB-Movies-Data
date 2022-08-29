// const express = require("express");
// const router = express.Router();
// const Favorite = require("../models/Favorite");
// const User = require("../models/User");

// //agrego fav a user
// router.post("/", (req, res) => {
//     Favorite.create({
//         title: req.body.title,
//         movie: req.body.movieId,
//         userId: req.body.userId,
//     })
//     .then((favMovie)=>{
//         const user = req.body.user
//         favMovie.setUser(user)
//     })
//     .then(() => sendStatus(204))
//     .catch(err => console.log(err))
// });

// //muestro los favs de un user

// router.get("/:id", (req, res) => {
//     Favorite.findAll({
//         where: { userId : req.params.id }
//     })
//     .then((fav) => res.send(fav))
//     .catch(err => console.log(err))
// })




// module.exports = router