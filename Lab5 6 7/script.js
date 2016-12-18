var app = angular.module('app', []);

app.controller('firstController', function ($http, $scope, factor){
	$http.get('https://api.nytimes.com/svc/books/v3/lists.json?api-key=8fe7ff4cab9e4af09fc034cfeafa7f2f&list=e-book-fiction')
		.success(function(result){
			$scope.results = result.results;
		})
		.error(function(data, status){
			console.log(data);
			console.log(status);
		});
	$scope.filt;
	$scope.postInf = {};
	$scope.factor=factor;
});

app.controller('fromForm', function ($scope, factor){
  	$scope.postInf = {};
  	$scope.factor=factor;
  	$scope.save = function(post) {
		angular.copy(post, factor.postInf);
	}
});

app.factory('factor',function(){
	return {
		postInf: {
		}
	}
});
