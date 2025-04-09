const express = require('express');
const app = express()
 
const todo = [];
//route handlers
app.get('/',function(req,res){
    res.send('Hello, Add your to-do');
})

app.post('/add',function(req,res){
    res.push({
        id:
        title
    })
})

app.delete('/delete',function(req,res){
    res.json({
        id:1
    })
})

app.listen(3000)//which port