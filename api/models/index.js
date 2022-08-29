const User= require("../models/Users")
const Favorite = require("../models/Favorite")

User.hasMany(Favorite, {
    foreignKey: "userId"});
Favorite.belongsTo(User);



module.exports= { User, Favorite }



