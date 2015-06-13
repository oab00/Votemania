angular.module('workspaceApp')
  .controller('MyPollsCtrl', function ($scope, Auth, $location, $http) {
    
    if (!Auth.isLoggedIn()) {
      $location.path('/');
    }
    
    var username = Auth.getCurrentUser().name;
    $scope.polls = [];

    $http.post('/api/polls/me', {
        username: username,
    }).success(function(polls) {
    	
    	polls.forEach(function(poll) {
    		$scope.polls.push({
    			question: poll.question,
    			items: poll.items
    		});
    	});

    	$scope.available = ($scope.polls.length > 0) ? true : false;

    }); 
    

});
