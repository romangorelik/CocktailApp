let mongoose = require('mongoose');
let db = require('./index.js');

let drinkSchema = mongoose.Schema({
  image: String,
  name: {type: String, unique: true},
  glass: String,
  instructions: String
})

let Drink = mongoose.model('Drink', drinkSchema)

module.exports = Drink