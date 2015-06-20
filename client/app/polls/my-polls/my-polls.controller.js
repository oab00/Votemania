angular.module('workspaceApp')
  .controller('MyPollsCtrl', function ($scope, Auth, $location, $http, $route) {
    
    if (!Auth.isLoggedIn()) {
      $location.path('/');
    }
    
    var username = Auth.getCurrentUser().name;
    $scope.polls = [];

    $http.post('/api/polls/me', {
        username: username
    }).success(function(polls) {
    	
    	polls.forEach(function(poll, index) {
    		$scope.polls.push({
    			question: poll.question,
    			items: poll.items,
                url: '../vote/' + username + '/' + (index + 1)
    		});
    	});

    	$scope.available = ($scope.polls.length > 0) ? true : false;

    }); 
    
    $scope.deletePoll = function() {
        $http.delete('/api/polls/update', {
            username: username
        }).success(function(data) {
            console.log('yess');
            $route.reload();
        });

        
    };

});
