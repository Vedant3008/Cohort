//creating http server using express
const express = require("express");

const app = express(); //creating hospital

app.get("/", function(req,res){
    res.send("Hello, Vedant");
});

app.listen(3000); //doctor listening to you in this room