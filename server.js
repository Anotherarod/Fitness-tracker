
//Bring in dependencies
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Workout = require("./models/workout.js")
//Create PORT 
var PORT = process.env.PORT || 8080;
var fs = require("fs");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
});

// routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/html-routes.js"));

require("./routes/api.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});