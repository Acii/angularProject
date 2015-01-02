'use strict';

app.factory('adsData', function adsData($resource, $http) {
	
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads');
	
	function getAllAds() {
		return resource.get();
	}

	
	return {
		getAds: getAllAds
	}
});