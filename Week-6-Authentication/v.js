const express = require('express');
const app = express();

// Custom middleware: logs every request
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }]);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  // Save user logic here
  res.status(201).json(newUser);
});

app.delete('/users/:id', (req, res) => {
  // Delete logic here
  res.send(`User ${req.params.id} deleted`);
});


app.listen(3000);