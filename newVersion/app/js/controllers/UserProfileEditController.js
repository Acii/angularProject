'use strict';

app.controller('UserProfileEditController', 
	function($scope, $rootScope, $location, getUserService, townsService, notifyService, authService) {
		$rootScope.pageTitle = 'Edit User Profile';
		// $scope.getUserData = getUserService.getUserProfile();
		$scope.towns = townsService.getTowns();
		$scope.updateUser = function(userData) {
			getUserService.editUserProfile(
				userData,
				function success() {
					notifyService.showInfo('Update profile successful');
					$location.path('/');
				},
				function error() {
					notifyService.showError("Cannot update profile", err);
				}
			)
		};
		
		$scope.changePassword = function(userPass) {
			getUserService.changeUserPassword(
				userPass,
				function success() {
					notifyService.showInfo('Change password successful');
					authService.logout();
					$location.path('/');
				},
				function error() {
					notifyService.showError("Cannot hange password", err);
				}
			)
		};
	});
