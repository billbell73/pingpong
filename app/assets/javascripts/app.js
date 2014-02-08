var pingApp = angular.module('pingApp', ['ngRoute', 'pingpongControllers', 'pingpongDirectives', 'pingpongServices'])

pingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '../../assets/scorer.html',
        controller: 'ScorerCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
      
  }]);


