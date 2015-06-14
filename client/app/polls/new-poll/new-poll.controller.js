'use strict';

angular.module('workspaceApp')
  .controller('NewPollCtrl', function ($scope, Auth, $location, $http) {
    
    if (!Auth.isLoggedIn()) {
      $location.path('/');
    }

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

    $scope.clear = function() {

        $scope.question = '';
        $scope.questionPlaceHolder = 'What\'s your favourite animal?';

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

    };

    $scope.submit = function() {
        var username = Auth.getCurrentUser().name;
        var question = $scope.question;
        var options = $scope.options.map(function(option) {
            return option.text;
        });
        var optionsArray = [];

        options.forEach(function(e) {
            optionsArray.push([e, 0]);
        });

        if (username && question && options.length >= 2) {
            $http.post('/api/polls', {
                username: username,
                question: question,
                items: optionsArray
            });

            //console.log('done.');

            $location.path('/my-polls');
        }

        else {
            //console.log('not valid.');
        }

    };

    $scope.clear();

});
