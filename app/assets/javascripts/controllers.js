var pingpongControllers = angular.module('pingpongControllers', []);


pingpongControllers.controller('ScorerCtrl', ['$scope', '$routeParams', '$location', 'Data', 
	function($scope, $routeParams, $location, Data) {

		var matchId = $location.absUrl().match(/\/(\d+)/)[1];

		Data.get({id: matchId}, function(data){
			$scope.score = data;
	 	})

	 	$scope.increment = function(number){
	 		Data.increment({id: matchId, player_id: number
	 		}, function(score){
	 			$scope.score = score;
	 			})
	 	}

	 	$scope.decrement = function(number){
	 		Data.decrement({id: matchId, player_id: number
	 		},  function(score){
	 					$scope.score = score;
	 				}
	 		)
	 	}

	}
]);

