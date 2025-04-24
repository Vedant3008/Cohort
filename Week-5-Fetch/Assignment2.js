//Assignment #1 - Try converting the calculator assignment to use POST endpoints. 
//Check if it works with/without the express.json middleware
const express = require("express");
const app = express()


app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
})
app.listen(3000);


