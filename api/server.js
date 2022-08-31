// Configuración del server

const express = require ("express")
const morgan = require("morgan");
const session=require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy
const cors = require("cors")
const { CORS_URL } = process.env

const models= require("./models") 


const db = require("./db")
const User = require("./models/Users")

const app = express();

const authAPI = require("./routes");


app.use(express.json());

// const whitelist = ["https://localhost:3000", "https://tmdb-rouge.vercel.app"];
// const options = {
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin) || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error ("No permitido"))
//     }
//   }
// }

// app.use(cors(options));
app.use(cors());



app.use(bodyParser.json());

app.use(cookieParser());

app.use(session({ 
  secret: "TMDB",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", CORS_URL);
// })

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {  
            return done(null, false, {message: "Incorrect username"});
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false, {message: "Incorrect password"}); 
            }

            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.post('/login/password',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/~' + req.user.username);
  });

app.use(morgan("dev"));
// app.use("/api", routes);

app.use("/api", authAPI);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./src/public", "index.html"));
});



const PORT = process.env.PORT || 5000;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`server listenning on port`, PORT));
})
.catch(console.error);

