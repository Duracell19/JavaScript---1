var app = angular.module('app', []);
app.controller('firstController', function ($http, $scope, factor){
	$http.get('https://api.nytimes.com/svc/books/v3/lists.json?api-key=8fe7ff4cab9e4af09fc034cfeafa7f2f&list=e-book-fiction')
		.success(function(result){
			$scope.results = result.results;
			});
			$scope.factor = factor;
		});
app.controller('fromForm', function ($scope, factor){
  	$scope.save = function(title, link, author, publisher) {
			$scope.info = [];
			$scope.info.push({
					title: title,
					link: link,
					author: author,
					publisher: publisher
				});
				angular.copy($scope.info[0], factor.information);
			}
		});
		app.factory('factor', function() { return { information: {} }
	});
