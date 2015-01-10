'use strict';

app.controller('HomeController', function ($scope, $log, adsData, $http) {
	adsData.getAds()
		.$promise
		.then(function (data) {
			$scope.data = data;
		}, function (error) {
			$log.error(error);
		})
		var resorceCategory = $http.get('http://softuni-ads.azurewebsites.net/api/categories',{});
		resorceCategory.success(function (dataFromServver) {
			$scope.categories = dataFromServver;
		});
		var resorceTowns = $http.get('http://softuni-ads.azurewebsites.net/api/towns',{});
		resorceTowns.success(function (dataFromServver) {
			$scope.towns = dataFromServver;
		});
});