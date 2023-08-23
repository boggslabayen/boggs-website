const express = require('express');

const app = express();
const ejs = require("ejs");

app.use (express.static("public"));
app.set ("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
});

app.get("/resume", function(req, res){
    res.render("resume");
})

app.get("/pasahero", function(req, res){
    res.render("pasahero");
})

app.get("/hcph", function(req, res){
    res.render("hcph");
})

app.get("/mc", function(req, res){
    res.render("mc");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("started @ 3000")
  });