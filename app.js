const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.render("home");
});
app.get('/project', function(req,res){
  res.render('project');
})
app.listen(3000, function () {
  console.log("serving running on port 3000");
});
