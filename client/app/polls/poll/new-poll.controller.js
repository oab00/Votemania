'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, Auth, $location) {
    
    if (!Auth.isLoggedIn()) {
      $location.path('/');
    }

    $scope.options = [
    	{
    		placeholder: 'Cat',
    		hidden: true
    	},
    	{
			placeholder: 'Dog',
			hidden: true
    	}
    ];

    function checkOptions() {
    	$scope.options[0].hidden = true;
    	$scope.options[1].hidden = true;
    }

    $scope.addMore = function() {
    	$scope.options.push({});
    };

    $scope.removeOption = function(index) {
    	$scope.options.splice(index, 1);
    };

    $scope.submit = function() {
    	// submit
    	console.log('submit!');
    };

  });
