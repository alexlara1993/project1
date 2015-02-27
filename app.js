var express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// our root route
app.get("/", function (req, res) {
  res.render("sites/home");
});

app.get("/about", function (req, res) {
	res.render("sites/about");
});

app.listen(3000, function () {
  console.log(new Array("*").join());
  console.log("STARTED ON localhost:3000");
})