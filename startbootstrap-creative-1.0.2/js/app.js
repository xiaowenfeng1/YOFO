var yofo = angular.module('yofo',[]);

yofo.controller('resultsCtrl', ['$scope', function($scope) {

  $scope.double = function(value) { return value * 2; };
  	
  	$scope.numResults = 3;
  	$scope.minPrice = 100.00;
  	$scope.maxPrice = 400.00;

}]);