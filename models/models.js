var mongoose = require('mongoose');

var queueschema = mongoose.Schema({
  name: String,
  type: String,
  icon: String,
  abv: String
})

var Beerqueue = mongoose.model('Beerqueue', queueschema);



module.exports = {
  Beerqueue : Beerqueue
}