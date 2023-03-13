// include global modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// include local modules
const coffeeController = require('./Controller/coffeeController');
const app = express(); 
// connect the server with the mongodb database
mongoose.connect('mongodb://localhost:27017/serveCoffee', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// created a get request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/View/index.html');
});
// Assign the middleware functions to the get & post request.
app.get('/:userName', coffeeController.getCoffee);
app.post('/add/coffee', coffeeController.postCoffee);

// spin the server on port 3000.
app.listen(3000, () => {
  console.log("Server listening at Port 3000");
});
