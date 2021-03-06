'use strict';

var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
.config(function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/login', {
		templateUrl: 'templates/login.html',
		controller: 'loginController'
	});
	$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
	});
});
// var app = angular.module('softUniApp', ['ngResource', 'ngRoute'])
// .config(function ($routeProvider) {
	// $routeProvider.when('/newAd', {
		// templateUrl: 'templates/newAd.html',
		// controller: 'NewAdController'
	// });
	// $routeProvider.when('/ads', {
		// templateUrl: 'templates/allAds.html',
		// controller: 'AllAdsController'
	// });
	// $routeProvider.when('/ads/:adId', {
		// test: 'Pesho',
		// templateUrl: 'templates/adDetails.html',
		// controller: 'AdDetailsController'
	// });
// });