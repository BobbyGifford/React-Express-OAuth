const express = require("express");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Message");
require("./services/passport");

mongoose.connect(keys.mongoURI, {
    useMongoClient: true
  });
  
const app = express();

// Middleware
app.use(
    cookieSession({
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    })
  );
  
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(passport.session());

  require("./routes/authRoutes")(app);
  require("./routes/messageRoutes")(app)

  const PORT = process.env.PORT || 5000;
  app.listen(PORT);
  
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
    const path = require("path");
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  
  // cd Desktop\Web\React-Oauth\server