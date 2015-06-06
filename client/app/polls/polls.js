'use strict';

angular.module('workspaceApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/new-poll', {
        templateUrl: 'app/polls/poll/new-poll.html',
        controller: 'NewPollCtrl'
      });
  });