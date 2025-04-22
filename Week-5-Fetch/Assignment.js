//Create a middleware function that logs each incoming request’s 
//HTTP method, URL, and timestamp to the console.
const express = require("express");
const app = express();

function middlewareDemo(req, res, next){
    console.log('Request Type:', req.method);
    console.log('Request URL:', req.originalUrl);
    console.log('Time:', new Date().toISOString());
    console.log('Host name:',req.hostname);
    next();
}

app.use(middlewareDemo);

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);