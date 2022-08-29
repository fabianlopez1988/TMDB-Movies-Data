const Sequelize = require("sequelize");
const db = require("../db");

class Favorite extends Sequelize.Model {}

Favorite.init(
  {
    favoriteId: {
      type: Sequelize.INTEGER,
    },
    original_title: {
      type: Sequelize.STRING,
    },
    poster_path: {
      type: Sequelize.STRING,
    }
  },
  { sequelize: db, modelName: "favorite" }
);

module.exports = Favorite;
