var app = angular.module('app', []);


app.controller('myCtrl', ['$scope', '$http', 'factfunc', function($scope, $http, factfunc) {  
  $scope.quantity = 8;

  var data = factfunc.getBeers(function(results) {

    
    $scope.beers = results
    console.log(results)
  });
  $scope.loadMore = function() {
    $scope.quantity += 8
  }
  


}])