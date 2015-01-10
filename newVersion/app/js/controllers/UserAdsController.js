'use strict';

app.controller('UserAdsController',
   function ($rootScope, $scope, $location, userService, notifyService, pageSize) {
   	  $rootScope.pageTitle = 'My Ads';
   	  $scope.clickEdit= false;
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          userService.getUserAds(
              $scope.adsParams,
              function success(data) {
                  $scope.adsUser = data;
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
	  
	  $scope.editClicked = function(id) {
	  	userService.getUserAd(
	  		id,
	  		function success(data) {
	  			$scope.clickEdit= true;
	  			$scope.userAd= data;
	  			$location.path('/user/ads');
	  		},
	  		function error(err) {
   	  				notifyService.showError("Cannot edit ad", err);
   	  		}
	  	);
	  	
   	  		
   	  };
   	  
   	  $scope.deactivate= function(deactivateAd) {
   	  	 userService.deactivateAd(
   	  			deactivateAd,
   	  			function success() {
   	  				notifyService.showInfo('Deactivate ad successful');
   	  				$location.path('/user/ads'); 
   	  			},
   	  			function error(err) {
   	  				notifyService.showError("Cannot deactivate ad", err);
   	  			}
   	  		);
   	  		 
   	  };
   	  
   	  $scope.publishClicked = function(publishAgainId) {
   	  		userService.publishAgainAd(
   	  			publishAgainId,
   	  			function success() {
   	  				notifyService.showInfo('Publish again successful');
   	  				$location.path('/user/ads');
   	  			},
   	  			function error(err) {
   	  				notifyService.showError("Cannot publish again", err);
   	  			}
   	  		);
  	  		
   	  };
   	  
   	  
   	  $scope.deleteClicked = function(id, title){
            var confermDelete = confirm("Confirm delete ad with title: " + title);
            if(confermDelete){
                userService.deleteAd(id,
                    function success(date) {
                        notifyService.showInfo('Successful delete');
                    },
                    function error(err) {
                        notifyService.showError('error', err);
                    }
                );
            }
            else{
                notifyService.showInfo('Delete ad stopped');
            }
        };
   	   

   }
);
