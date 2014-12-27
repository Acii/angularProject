var app = angular.module('adsApp', ['ngResource', 'ngRoute'])
	.config(function($routeProvider) {
		
		$routeProvider.when('/home', {
			templateUrl: 'themplates/home.html',
			controller: 'HomeController'
		});
		
		$routeProvider.when('/login', {
			templateUrl: 'themplates/login.html',
			controller: 'loginController'	
		});
		
		$routeProvider.when('/register', {
			templateUrl: 'themplates/register.html',
			controller: 'registerController'
		});
	});
