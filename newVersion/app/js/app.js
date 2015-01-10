'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'angular-loading-bar', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 8);
app.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$locationChangeStart', function (event) {
    if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
      authService.isAnonymous();
      $location.path("/");
    }
  });
});
app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    
    $routeProvider.when('/user/ads', {
	    templateUrl: 'templates/user/ads.html',
	    controller: 'UserAdsController'
	});
    
    $routeProvider.when('/user/ads/publish', {
	    templateUrl: 'templates/user/publish-new-ad.html',
	    controller: 'UserPublishNewAdController'
	});
	
	$routeProvider.when('/user/profile', {
	    templateUrl: 'templates/user/profile.html',
	    controller: 'UserProfileEditController'
	});
	
    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});


