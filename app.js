const express = require("express"); //imports Express Library
const app = express(); //variable "app" to access methods.
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


//server listener original example
//app.listen("8081", "0.0.0.0", function(){
//  console.log("Express Server is Running...")
//});


 // Heroku update server listener
app.listen(process.env.PORT, process.env.IP, function(){
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

