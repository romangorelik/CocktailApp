const mongoose = require('mongoose')
const db = mongoose.connect('mongodb://cocktail:cocktail1@ds153552.mlab.com:53552/cocktail')

module.exports = db