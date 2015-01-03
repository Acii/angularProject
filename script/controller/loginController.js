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
		resorceCategory.error(function(data, status, headers, config) {
			alert('Error!!! Load failed.');
		});
		var resorceTowns = $http.get('http://softuni-ads.azurewebsites.net/api/towns',{});
		resorceTowns.success(function (dataFromServver) {
			$scope.towns = dataFromServver;
		});
		resorceTowns.error(function(data, status, headers, config) {
				alert('Error!!! Load failed.');
		});
});




// var responsePromise = $http.get("http://softuni-ads.azurewebsites.net/api/categories", {});
       // responsePromise.success(function(dataFromServer) {
          // console.log(dataFromServer);
		  // $scope.categories = dataFromServer;
       // });
        // responsePromise.error(function(data, status, headers, config) {
          // alert("Submitting form failed!");
       // });
	// var responsePromiseTowns = $http.get("http://softuni-ads.azurewebsites.net/api/towns", {});
       // responsePromiseTowns.success(function(dataFromServer) {
          // console.log(dataFromServer);
		  // $scope.towns = dataFromServer;
       // });
        // responsePromiseTowns.error(function(data, status, headers, config) {
          // alert("Submitting form failed!");
       // });


