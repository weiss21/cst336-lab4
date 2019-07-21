const express = require("express"); //imports Express Library
const app = express(); //variable "app" to access methods.
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var port = process.env.PORT || "8081"; //To work in both local (codeanywhere) and heroku
var serial = process.env.IP || "0.0.0.0"; // same as comment above
//server listener original example
//app.listen("8081", "0.0.0.0", function(){
//  console.log("Express Server is Running...")
//});


 // Heroku update server listener
app.listen(port, serial, function(){
  console.log("Express Server is Running. . . ")
});


app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
});
app.get("/venus", function(req, res) {
    res.render("venus.html");
})

app.get("/earth", function(req, res) {
    res.render("earth.html");
})

app.get("/mars", function(req, res) {
    res.render("mars.html");
})

