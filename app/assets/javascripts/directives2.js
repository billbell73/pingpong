var pingpongDirectives = angular.module('pingpongDirectives', []);

pingpongDirectives.directive('serveball1', function() {
  return {
    restrict: "E",
    template: '<img id="p1marker" class="p1serveball"' + 
    						' ng-show="score.currently_serving-1" src="../../assets/serveball.svg">'
  }
})

pingpongDirectives.directive('serveball2', function() {
  return {
    restrict: "E",
    template: '<img id="p2marker" class="p2serveball"' + 
               'ng-show="score.currently_serving" src="../../assets/serveball.svg">'
  }
})
