const express = require('express');
const app = express()
 
const todo = [];
//route handlers
app.get('/',function(req,res){
    res.send('Hello, Add your to-do');
})

app.post('/',function(req,res){
    todo.push({
        id:1,
        title:"Learn HTTP"
    })
})

app.delete('/delete',function(req,res){
    res.json({
        id:1
    })
})

app.listen(3000)//which port