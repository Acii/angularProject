'use strict';
app.factory('adsData', function adsData($resource, $http) {
	
	var resource = $resource('http://softuni-ads.azurewebsites.net/api/ads');
	var resourceCategory = $resource('http://softuni-ads.azurewebsites.net/api/categories');
	
	function getAllAds() {
		return resource.get();
	}
	
	function getAllCat() {
		return resourceCategory.get();
	}
	
	return {
		getAds: getAllAds,
		getCat: getAllCat
	}
});