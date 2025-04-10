const express = require("express");
const app = express();

function ageCheckMiddleware(req,res,next){
    const age= parseInt(req.query.age);
    if (age>=14){
        next();
    }
    else{
        res.json({
            msg:"You're too young"
        });
    }
}

app.get("/ride1",ageCheckMiddleware, function(req,res){
    res.json({
        msg:"You've successfully ridden ride 1."
    });
});

app.get("/ride2",ageCheckMiddleware, function(req,res){
    res.json({
        msg:"You've successfully ridden ride 2."
    });
});

app.listen(3000);


