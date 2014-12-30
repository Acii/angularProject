app.controller('IndexCat', function ($scope, $route, $log, adsData) {
		adsData.getAllCat()
		.$promise
		.then(function (data) {
			$scope.data = data;
		}, function (error) {
			$log.error(error);
		});
});