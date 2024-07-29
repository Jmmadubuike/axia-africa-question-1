//Here's a basic Express app that includes the four basic HTTP requests:

const express = require('express');
const app = express();
const port = 3000;

// The middleware
app.use(express.json());

//GET request that returns a response with a normal string.
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request');
});

//POST request that returns the same JSON passed to the body.
app.post('/', (req, res) => {
  res.json(req.body);
});

//PUT request that returns a response string showing “update successful”.
app.put('/', (req, res) => {
  res.send('Update successful');
});

//DELETE request that returns any string.
app.delete('/', (req, res) => {
  res.send('Item deleted');
});

app.listen(port, () => {
  console.log('Server is running.');
});
