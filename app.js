const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get('/', (req, res)=>{
    res.render("index")
});

// to use static files such as css, img, logos
app.use("/public", express.static("public"));

app.listen(PORT, ()=>{
    console.log("app started on port : " + PORT);
});
