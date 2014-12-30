'use strict';

app.controller('HomeController', function ($scope, $route, $log, adsData) {
	adsData.getAds()
		.$promise
		.then(function (data) {
			$scope.data = data;
		}, function (error) {
			$log.error(error);
		});
});



// app.controller('AllAdsController', function($scope, $route, $log, adsData) {
	// adsData.getAll()
		// .$promise
		// .then(function (data) {
			// $scope.data = data;
		// }, function (error) {
			// $log.error(error);
		// });
// 
	// $scope.reload = function () {
		// $route.reload();
	// }
// });