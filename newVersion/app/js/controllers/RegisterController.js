'use strict';

app.controller('RegisterController',
    function ($rootScope, $scope, $location, townsService, authService, notifyService) {
    	$rootScope.pageTitle = 'Register';
        $scope.userData = {townId: null};        
        $scope.towns = townsService.getTowns();
        $scope.register = function(userData) {
            authService.register(userData,
                function success() {
                    notifyService.showInfo('Register successful');
                    $location.path('templates/login');
                },
                function error(err) {
                    notifyService.showError("User registration failed", err);
                }
            );
        };
    }
);
