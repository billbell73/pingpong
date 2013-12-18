window.App = angular.module('App', []);

App.controller('ChartController', function($scope){

  $scope.playerRecords = [{points: 0, coordinates: [{x:25,y:300}]},
                             {points: 0, coordinates: [{x:25,y:300}]}];

  var addCoordinates = function(recordsElement){
    var length = recordsElement.coordinates.length;
    recordsElement.coordinates.push({x: 25+(length*25), y: 300-recordsElement.points*25});
  }

  var linePaths= function(playerIndex){
    return function() {
      var pathParts = [], currentPoint, i;

      for (i = 0; i < $scope.playerRecords[playerIndex].coordinates.length; i++) {
        currentPoint = $scope.playerRecords[playerIndex].coordinates[i];
        pathParts.push(currentPoint.x + "," + currentPoint.y);
      }

      return "M" + pathParts.join(" L");
    }
  };
  
  $scope.linePath1 = linePaths(0);
  $scope.linePath2 = linePaths(1);

  $scope.updateRally = function(winnerIndex, decrement){
    if (decrement) 
    {
      console.log("Decrement!");
    }
    $scope.playerRecords[winnerIndex].points +=1;
    addCoordinates($scope.playerRecords[0]);
    addCoordinates($scope.playerRecords[1]);
    rallyWinner.push(winnerIndex);
    var serverIndex = serverLookup(rallyWinner.length);
    serveStatsAllocate(serverIndex, winnerIndex);
    $scope.p1ServePercentage = servePointPercentage(0);
    $scope.p2ServePercentage = servePointPercentage(1);
    $scope.pieData[serverIndex] = pieData(serverIndex);
    $scope.points_1 = $scope.playerRecords[0].coordinates;
    $scope.points_2 = $scope.playerRecords[1].coordinates;
  }

  $scope.clearPlayerProgressRecords = function(){
    $scope.playerRecords = [{points: 0, coordinates: [{x:25,y:300}]},
                        {points: 0, coordinates: [{x:25,y:300}]}];
    $scope.points_1 = $scope.playerRecords[0].coordinates;
    $scope.points_2 = $scope.playerRecords[1].coordinates;
  }
  
  $scope.pieData = [[],[]];
  $scope.colors1 = ["white", "black"];
  $scope.colors2 = ["black", "white"];

  
  var rallyWinner = [];

  var serveStats = [{servePointsFor: 0, servePointsAgainst: 0},
                    {servePointsFor: 0, servePointsAgainst: 0}];

  var serverLookup = function(nthRally){
   if (Math.round(nthRally/2)% 2 == 1) 
    {
       return 0;
    }
   else {
       return 1;
    }
  };

  var serveStatsAllocate = function(server, winner){
  if (server === winner)
    {
      serveStats[server].servePointsFor +=1;
    }
  else
    {
      serveStats[server].servePointsAgainst +=1;
    }
  };

  var undoServeStats = function(server, winner){
  if (server === winner)
    {
      serveStats[server].servePointsFor -=1;
    }
  else
    {
      serveStats[server].servePointsAgainst -=1;
    }
  };

  var servePointPercentage = function(server) {
    var servePoints = serveStats[server].servePointsFor + serveStats[server].servePointsAgainst;
    if(servePoints == 0) return '-';
    return (serveStats[server].servePointsFor/servePoints*100).toFixed(0);
  };

  var pieData = function(serverIndex) {
    if (servePointPercentage(serverIndex) === '0' ) 
      {
        return [1000000, 1];
      }
    else if (servePointPercentage(serverIndex) === ('100' || 'NaN'))
      {
        return [1, 1000000];
      }
    else
      {
        return [serveStats[serverIndex].servePointsAgainst, serveStats[serverIndex].servePointsFor];
      }
  };
   
});
