const Sequelize = require ("sequelize")

const db = new Sequelize("TMDB", null, null, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});


module.exports = db;


// const Sequelize = require('sequelize');
// let db;

// if (process.env.NODE_ENV === 'production') {
//   db= new Sequelize(process.env.DATABASE_URL, {
//     dialectOptions: {
//       ssl:{
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   })
// }
// if(process.env.NODE_ENV === 'development'){
//     db = new Sequelize('TMDB', null, null, {
//     host: 'localhost',
//     dialect: 'postgres',
//     logging: false,
//   });
// }


// module.exports = db;