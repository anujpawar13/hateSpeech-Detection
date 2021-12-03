const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    res.render("index", {active: "dashboard"})
});

app.get('/instagram', (req, res)=>{
    res.render("instagram", {active: "dashboard"} )
});

app.get('/twitter', (req, res)=>{
    res.render("twitter", {active: "dashboard"})
});

app.get('/analytics', (req, res)=>{
    res.render("analytics", {active: "analytics"})
});

app.get('/database', (req, res)=>{
    res.render("database", {active: "database"})
});


// to use static files such as css, img, logos
app.use("/public", express.static("public"));

app.listen(PORT, ()=>{
    console.log("app started on port : " + PORT);
});
