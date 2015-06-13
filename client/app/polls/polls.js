angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new-poll', {
        templateUrl: 'app/polls/new-poll/new-poll.html',
        controller: 'NewPollCtrl'
      }).when('/my-polls', {
      	templateUrl: 'app/polls/my-polls/my-polls.html',
        controller: 'MyPollsCtrl'
      });
  });