var app = angular.module('app')

app.factory('factfunc', function($http) {
  var factory = {};

  factory.getBeers = function(cb) {
    var beerlist;
    $http.get('/beerlist').then(function(result) {
      beerlist = result.data;
      cb(beerlist)
    })
}

  return factory
})