var express = require('express');
var bodyParser = require('body-parser')
var app = express()
var myData = require('./myData.js');
var mongoose = require('mongoose')
var mongodb = require('mongodb');
var models = require(__dirname + '/models/models.js');
var db = mongoose.connect('mongodb://brandon:password@ds119020.mlab.com:19020/gottabeerfresh', null, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    app.listen(8080, function() {
      console.log("listening on port 8080")
    })
  }
})

app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
console.log(myData.data[0].name)

app.get('/', function (req, res) {
  res.send('index')
})

app.get('/beerlist', function(req, res) {
  res.send(myData.data);
  res.end();
  return;
})

app.post('/bucketlist', function(req, res) {
  db.save()
})


