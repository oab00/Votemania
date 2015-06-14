angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new-poll', {
        templateUrl: 'app/polls/new-poll/new-poll.html',
        controller: 'NewPollCtrl'
      }).when('/my-polls', {
      	templateUrl: 'app/polls/my-polls/my-polls.html',
        controller: 'MyPollsCtrl'
      }).when('/vote/:userId/:pollId', {
        templateUrl: 'app/polls/show-poll/show-poll.html',
        controller: 'ShowPollCtrl'
      }).when('/vote/:userId/:pollId/r', {
        templateUrl: 'app/polls/show-poll/poll-result.html',
        controller: 'ShowPollCtrl'
      });
  });