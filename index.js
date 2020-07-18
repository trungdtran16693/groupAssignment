const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT,function () {
    console.log("server is running...");
});
app.use(express.static("public"));
app.set("view engine","ejs");
var counter = 0;
app.get("/",function (req,res) {
    counter++;
    res.render("home",{
        counter: counter ,
    });
});
app.get("/aboutUs",function (req,res) {
    res.render("aboutUs");
});
app.get("/bookATable",function (req,res) {
    res.render("bookATable");
});
app.get("/currentMenu",function (req,res) {
    res.render("currentMenu");
});
app.get("/upcomingMenu",function (req,res) {
    res.render("upcomingMenu");
});