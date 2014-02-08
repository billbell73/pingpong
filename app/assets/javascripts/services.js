var pingpongServices = angular.module('pingpongServices', ['ngResource']);

pingpongServices.factory('Data', ['$resource',
    
    function($resource){
    	return $resource('http://localhost:3000/api/matches/:id', 
				{ id: '@id' }, { 
						increment: { 
						method: 'PUT', 
						params: { player_id: '@player_id' }, 
						isArray: false 
						}, 
						decrement: { 
						method: 'PUT', 
						params: { player_id: '@player_id', decrement: true }, 
						isArray: false 	
						}
					
				}
    	)
    }
]);


