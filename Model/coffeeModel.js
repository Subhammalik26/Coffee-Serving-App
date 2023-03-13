const mongoose = require('mongoose'); // include mongoose module.
const Schema = mongoose.Schema;
// created a database schema
const coffeeSchema = new Schema({
  userName: { type: String, required: true },
  coffeeName: { type: String, required: true }
});

const Coffee = mongoose.model('serveCoffee', coffeeSchema); // created a database model

module.exports = Coffee;
