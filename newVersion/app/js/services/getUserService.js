'use strict';

app.factory('getUserService',
	function($http, baseServiceUrl, authService) {
		return {
			getUserProfile: function(success, error) {
				var request = {
					method: 'GET',
					url: baseServiceUrl + '/api/user/profile',
					headers: authService.getAuthHeaders()
				};
				$http(request).success(success).error(error);
			},
			
			changeUserPassword: function(userPass, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + '/api/user/changePassword',
					headers: authService.getAuthHeaders(),
					data: userPass
				};
				$http(request).success(success).error(error);
			},
			
			editUserProfile: function(userData, success, error) {
				var request = {
					method: 'PUT',
					url: baseServiceUrl + '/api/user/profile',
					headers: authService.getAuthHeaders(),
					data: userData
				};
				$http(request).success(success).error(error);
			},
		}
	});