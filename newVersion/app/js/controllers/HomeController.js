'use strict';

app.controller('HomeController',
   function ($rootScope, $scope, adsService, notifyService, pageSize) {
   	  $rootScope.pageTitle= 'Home';
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          adsService.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load ads", err);
              }
          );
          
      };
     
      $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
	  	$scope.adsParams.categoryId = selectedCategoryId;
	  	$scope.adsParams.startPage = 1;
	  	$scope.reloadAds();
	  });
	  
	  $scope.$on("townSelectionChanged", function(event, selectedTownId) {
	  	$scope.adsParams.townId = selectedTownId;
	  	$scope.adsParams.startPage = 1;
	  	$scope.reloadAds();
	  });
	  
	  $scope.reloadAds();

   }
);
