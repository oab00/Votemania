'use strict';

angular.module('workspaceApp')
  .controller('ShowPollCtrl', function ($routeParams, $scope, Auth, $location, $http) {

    var user_id = $routeParams.userId;
    var poll_id = $routeParams.pollId;

    $http.post('/api/polls/me', {
        username: user_id,
    }).success(function(polls) {
        
        $scope.poll = polls[poll_id - 1];
        $scope.url = '/vote/' + user_id + '/' + poll_id + '/r';
        $scope.urlResult = '/vote/' + user_id + '/' + poll_id;

        if (!$scope.poll) {
            $location.path('/');
        }

        if ($location.url()[$location.url().length-1] === 'r') {
            setupGraph();
        }

    });    

    $scope.voteSubmit = function() {

        if (!$scope.chosenOne) {
            return;
        }

        for (var i = 0; i < $scope.poll.items.length; i++) {
            if ($scope.poll.items[i][0] === $scope.chosenOne) {
                $scope.poll.items[i][1] += 1;
                break;
            }
        }

        var updatedPoll = {
            username: user_id,
            poll_index: poll_id,
            items: $scope.poll.items
        };

        $http.put('/api/polls/update', updatedPoll)

        .success(function(polls) {
            
            $location.path($scope.url);

        });    
    };


    function setupGraph() {

        google.load('visualization', '1.0', {
            packages: ['corechart'],
            callback: function() {

                // Create the data table.
                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Topping');
                data.addColumn('number', 'Slices');

                for (var i = 0; i < $scope.poll.items.length; i++) {
                    $scope.poll.items[i][0] = '(' + $scope.poll.items[i][1] + ') ' + $scope.poll.items[i][0];
                }

                data.addRows($scope.poll.items);

                // Set chart options
                var options = {'title':$scope.poll.question,
                               'width':400,
                               'height':300};

                // Instantiate and draw our chart, passing in some options.
                var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
                chart.draw(data, options);
            }
        });
    }

});
