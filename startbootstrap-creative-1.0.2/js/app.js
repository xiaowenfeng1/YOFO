var yofo = angular.module('yofo',[]);

yofo.controller('resultsCtrl', ['$scope', function($scope) {

  $scope.double = function(value) { return value * 2; };
  	
  	$scope.numResults = 3;
  	$scope.minPrice = 100.00;
  	$scope.maxPrice = 400.00;

  	$scope.imgWidth = '350px';
  	$scope.imgHeight = '275px';

  	$scope.departureCity = 'Seattle';
  	$scope.airportSEA = 'SEA';
  	$scope.airportSFO = 'SFO';
  	$scope.airportLAX = 'LAX';
  	$scope.airportPDX = 'PDX';

  	$scope.results = [
  		{
			'tripPrice': 345.00,
			'location': 'Los Angeles',
			'pageURL': '',
			'imgURL': 'lax.jpg',
			'departureTime': '7:15 AM',
			'arrivalArrival': '12:45 PM',
			'minPrice': 100.00,
			'maxPrice': 350.00 
    	},
		{
			'tripPrice': 445.00,
			'location': 'San Francisco',
			'pageURL': 'city.html',
			'imgURL': 'sf.jpg',
			'departureDate': '11:45 PM',
			'arrivalDate': '2:00 AM',
			'minPrice': 100.00,
			'maxPrice': 450.00 
    	},
    	{
			'tripPrice': 145.00,
			'location': 'Portland',
			'pageURL': '',
			'imgURL': 'pdx.jpg',
			'departureDate': '7:55 AM',
			'arrivalDate': '9:00 AM',
			'minPrice': 100.00,
			'maxPrice': 150.00 
    	}
  	];

}]);