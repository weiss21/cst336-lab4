const express = require("express"); //imports Express Library
const app = express(); //variable "app" to access methods.
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));


//server listener
app.listen("8081", "0.0.0.0", function(){
  console.log("Express Server is Running...")
});

//Routes for Server

app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/mercury", function(req, res) {
    res.render("mercury.html");
});
app.get("/venus", function(req, res) {
    res.render("venus.html");
})

app.get("/", function(req, res) {
    res.render("index.html");
});