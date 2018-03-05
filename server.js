var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3221;

var app = express();


app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Requiring our models for syncing
var db = require("./models");


// Routes
// =============================================================
require("./controllers/burgers_controller")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({
  force: false
}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});