const express = require("express");
const Favorite = require("../models/Favorite");
const router = express.Router();

router.post("/add/:userId/:movieId", (req, res) => {
    Favorite.findOrCreate({
        where: { 
            userId: req.params.userId,
            favoriteId: req.params.movieId,
            original_title: req.body.original_title,
            poster_path: req.body.poster_path
        }
    })
    .then((movie)=>res.send(movie))
    .catch(err => console.log(err))
});
    

//muestro los favs de un user

router.get("/:id", (req, res) => {
    Favorite.findAll({
        where: { userId : req.params.id }
    })
    .then((fav) => res.send(fav))
    .catch(err => console.log(err))
});


// router.delete('/:userId',(req, res) => {
//     Favorite.destroy({
//         where: {
//             // favoriteId: req.body.favoriteId,
//             original_title: req.body.original_title
//         }
        
//     })
//     .then(() => res.status(204).send("delete"))
//     .catch(err => console.log(err))
// });


router.delete("/:id/:movieId", (req, res) => {
    Favorite.destroy({
      where: { favoriteId: req.params.movieId },
    })
      .then((res) => res.sendStatus(200))
      .catch((err) => res.send(err));
  });





module.exports = router